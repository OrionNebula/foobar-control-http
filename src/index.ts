/**
 * @module foobar2000-control
 */

import * as request from 'request'
import * as url from 'url'

namespace ajquery {
  export interface Track {
    a: string
    b: string
    n: string
    t: string
    l: string
    ls: number
    d: '?'
  }

  export interface State {
    playlist: Track[]
    playlists: Playlist[]
    playbackOrder: string
    volume: string
    SAC: '' | 'checked'
    SAQ: '' | 'checked'
    isPlaying: '0' | '1'
    isPaused: '0' | '1'
    isEnqueueing: '0' | '1'
    playingItem: string
    focusedItem: string
    prevplayedItem: string
    itemPlayingPos: string
    itemPlayingLen: string
    playlistPage: string
    playlistItemsPerPage: string
    playlistItemsCount: string
    playlistActive: string
    playlistPlaying: string
    playlistPlayingItemsCount: string
    playlistTotalTime: string
    queueTotalTime: string
    isUndoAvailable: '0' | '1'
    isRedoAvailable: '0' | '1'
    helper1: string
    helper2: string
    helper3: string
    albumArt: string
  }

  export interface Playlist {
    name: string
    count: string
  }

  export enum Command {
    // These commands have arguments
    QueueItems = 'QueueItems',
    DequeueItems = 'DequeueItems',
    SetFocus = 'SetFocus',
    Del = 'Del',
    Seek = 'Seek',
    PlaybackOrder = 'PlaybackOrder',
    Volume = 'Volume',
    StopAfterCurrent = 'SAC',
    StopAfterQueue = 'SAQ',
    QueueRandomItems = 'QueueRandomItems',
    SwitchPlaylist = 'SwitchPlaylist',
    QueryAdvance = 'QueryAdvance',
    PlaylistPage = 'P',
    // These don't
    Stop = 'Stop',
    PlayOrPause = 'PlayOrPause',
    StartPrevious = 'StartPrevious',
    StartNext = 'StartNext',
    StartRandom = 'StartRandom',
    QueueAlbum = 'QueueAlbum',
    EmptyPlaylist = 'EmptyPlaylist',
    QueryRetrace = 'QueryRetrace',
    // These have optional arguments
    Start = 'Start'
  }

  /**
   * Convert a foobar-style time span to milliseconds.
   * @param {string} span A foobar-style time span.
   */
  export function parseTimeSpan (span: string): number {
    let split = span.split(':')
    return split.reduce((previousValue, currentValue, currentIndex) => previousValue + Math.pow(60, split.length - currentIndex - 1) * Number(currentValue), 0) * 1000
  }

  export function parseTrackNumber (trackNumber: string): Foobar.TrackNumber {
    const regex = /^(?:\([\d,]+\)\s+)?(?:D(\d+|\?)\.)?(\d+|\?)$/g
    const result = regex.exec(trackNumber)
    return {
      disc: result[1] === '?' ? undefined : Number(result[1]),
      track: result[2] === '?' ? undefined : Number(result[2])
    }
  }

  export function parseTrackFormat (trackFormat: string): Foobar.TrackFormat {
    const regex = /^(.+?)\s+\|\s+(\d+)kbps\s+\|\s+(\d+)Hz\s+\|\s+(.*?)$/g
    const result = regex.exec(trackFormat)
    return {
      codec: result[1],
      bitrate: Number(result[2]) * 1000,
      samplingRate: Number(result[3]),
      channels: result[4]
    }
  }
}

/**
 * Contains types used by FoobarControl.
 */
export namespace Foobar {
  /**
   * Describes the order foobar will take when playing songs.
   */
  export enum PlaybackOrder {
    Default = 0,
    RepeatPlaylist = 1,
    RepeatTrack = 2,
    Random = 3,
    ShuffleTracks = 4,
    ShuffleAlbums = 5,
    ShuffleFolders = 6
  }

  /**
   * Describes a track's position in its album.
   */
  export interface TrackNumber {
    disc?: number
    track?: number
  }

  /**
   * Describes a track's data format.
   */
  export interface TrackFormat {
    /**
     * The codec used to encode this track on disk.
     */
    codec: string
    /**
     * The current track's bitrate, in bits/second.
     */
    bitrate: number
    /**
     * The current track's sampling rate, in Hz.
     */
    samplingRate: number
    /**
     * The channel configuration of the current track.
     */
    channels: 'mono' | 'stereo' | '6ch' | string
  }

  /**
   * Describes a playlist.
   */
  export interface Playlist {
    name: string
    trackCount: number
  }

  /**
   * Describes a track in the current playlist.
   */
  export interface Track {
    title: string
    artist: string
    album: string
    number: TrackNumber
    duration: number
    format?: TrackFormat
  }

  /**
   * Describes the player's status.
   */
  export interface Status {
    /**
     * An array of tracks that make up a particular view of the current playlist.
     */
    currentPlaylistPage: Track[]
    /**
     * An array of all the available playlists.
     */
    playlists: Playlist[]
    /**
     * A description of the order the player will take when playing songs.
     */
    playbackOrder: PlaybackOrder
    /**
     * The player's volume as a fraction of 1.
     */
    volume: number
    /**
     * If true, the player will stop after the current track finishes.
     */
    stopAfterCurrent: boolean
    /**
     * If true, the player will stop after the current queue empties.
     */
    stopAfterQueue: boolean
    /**
     * If true, the player is playing a track.
     */
    isPlaying: boolean
    /**
     * If true, the player is paused.
     */
    isPaused: boolean
    /**
     * If true, the player is preparing to play a new track.
     */
    isEnqueueing: boolean
    /**
     * The currently playing track, if the current playlist page includes it.
     */
    playingItem: Track
    /**
     * The 0-based position in the playlist of the current track.
     */
    playingItemIndex: number
    /**
     * The player's progress through the current track, in milliseconds.
     */
    itemPlayingPos: number
    /**
     * The total length of the current track, in milliseconds.
     */
    itemPlayingLen: number
    /**
     * The current view of the playlist.
     */
    playlistPage: number
    /**
     * The number of items in a given playlist view.
     */
    playlistItemsPerPage: number
    /**
     * The currently active playlist
     */
    playlistActive: Playlist
    /**
     * The currently playing playlist.
     */
    playlistPlaying: Playlist
    /**
     * The total duration of the current playlist, in milliseconds.
     */
    playlistTotalTime: number
    /**
     * The total duration of the current queue, in milliseconds.
     */
    queueTotalTime: number
    /**
     * If true, you can undo.
     */
    isUndoAvailable: boolean
    /**
     * If true, you can redo.
     */
    isRedoAvailable: boolean
    /**
     * The fully-qualified URL to the current album art.
     */
    albumArtUrl: string
  }
}

/**
 * Control an instance of foobar2000 through 'foo_httpcontrol' and 'ajquery'.
 */
class FoobarControl {
  hostname: string
  port: number
  private baseUrl: string

  /**
   * Construct a new instance of FoobarControl.
   * @param {string} hostname The hostname to connect to. Default: 'localhost'
   * @param {port} port The port to connect to. Default: 8888
   */
  constructor (hostname: string = 'localhost', port: number = 8888) {
    this.hostname = hostname
    this.port = port
    this.baseUrl = `http://${hostname}:${port}/ajquery/`
  }

  /**
   * Get the player's current status.
   * @returns {Promise<Foobar.Status>}
   */
  getStatus (): Promise<Foobar.Status> {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: this.baseUrl,
        qs: {
          param3: 'js/state.json'
        },
        headers: {
          'Cache-Control': 'no-cache'
        },
        json: true
      }, (error, response, data: ajquery.State) => {
        if (error) {
          reject(error)
          return
        }

        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`Recieved a status outside of the 'ok' range: ${response.statusCode}`))
          return
        }

        resolve(this.composeStatus(data))
      })
    })
  }

  /**
   * Add an item into the queue by its index in the current playlist.
   * @param {number} itemIndex The 0-based index in the current playlist of the item to add to the queue.
   * @returns {Promise<Foobar.Status>}
   */
  queueItem (itemIndex: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.QueueItems, itemIndex)
  }

  /**
   * Remove at item from the queue by its index in the current playlist.
   * @param {number} itemIndex The 0-based index in the current playlist of the item to remove from the queue.
   * @returns {Promise<Foobar.Status>}
   */
  dequeueItem (itemIndex: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.DequeueItems, itemIndex)
  }

  /**
   * Set the cursor position to an item by its index in the current playlist.
   * @param {number} itemIndex The 0-based index in the current playlist of the item to set cursor position to.
   * @returns {Promise<Foobar.Status>}
   */
  setFocus (itemIndex: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.SetFocus, itemIndex)
  }

  /**
   * Remove an item from the current playlist.
   * @param {number} itemIndex The 0-based index in the current playlist of the item to remove.
   * @returns {Promise<Foobar.Status>}
   */
  removeItem (itemIndex: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.Del, itemIndex)
  }

  /**
   * Set the caret to a certain percentage through the track.
   * @param {number} percent The desired progress through the track, as a fraction of 1.
   * @returns {Promise<Foobar.Status>}
   */
  seek (percent: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.Seek, percent * 100)
  }

  /**
   * Set the playback order.
   * @param {Foobar.PlaybackOrder} playbackOrder The desired playback order.
   * @returns {Promise<Foobar.Status>}
   */
  playbackOrder (playbackOrder: Foobar.PlaybackOrder): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.PlaybackOrder, playbackOrder)
  }

  /**
   * Set the volume level.
   * @param {number} volume The desired volume as a fraction of 1.
   * @returns {Promise<Foobar.Status>}
   */
  volume (volume: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.Volume, volume * 100)
  }

  /**
   * Set the status of the 'stop after current' flag.
   * @param {boolean} sac The desired flag status.
   * @returns {Promise<Foobar.Status>}
   */
  stopAfterCurrent (sac: boolean): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.StopAfterCurrent, sac ? '1' : '0')
  }

  /**
   * Set the status of the 'stop after queue' flag.
   * @param {boolean} saq The desired flag status.
   * @returns {Promise<Foobar.Status>}
   */
  stopAfterQueue (saq: boolean): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.StopAfterQueue, saq ? '1' : '0')
  }

  /**
   * Add a certain number of random items to the queue.
   * @param {number} itemsCount The number of items to add.
   * @returns {Promise<Foobar.Status>}
   */
  queueRandomItems (itemsCount: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.QueueRandomItems, itemsCount)
  }

  /**
   * Switch playback to another playlist.
   * @param {number} playlistIndex The 0-based index of the playlist to switch to.
   * @returns {Promise<Foobar.Status>}
   */
  switchPlaylist (playlistIndex: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.SwitchPlaylist, playlistIndex)
  }

  /**
   * Switch the view window to another page of the playlist.
   * @param {number} playlistPage The 0-based page to switch to.
   * @returns {Promise<Foobar.Status>}
   */
  playlistPage (playlistPage: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.PlaylistPage, playlistPage)
  }

  /**
   * Stop playback.
   * @returns {Promise<Foobar.Status>}
   */
  stop (): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.Stop)
  }

  /**
   * Pause or resume playback.
   * @returns {Promise<Foobar.Status>}
   */
  playOrPause (): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.PlayOrPause)
  }

  /**
   * Move playback to the previous track.
   * @returns {Promise<Foobar.Status>}
   */
  previous (): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.StartPrevious)
  }

  /**
   * Move playback to the next track.
   * @returns {Promise<Foobar.Status>}
   */
  next (): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.StartNext)
  }

  /**
   * Move playback to a random track.
   * @returns {Promise<Foobar.Status>}
   */
  random (): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.StartRandom)
  }

  /**
   * Add the current track's album to the queue.
   * @returns {Promise<Foobar.Status>}
   */
  queueAlbum (): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.QueueAlbum)
  }

  /**
   * Empty the current playlist.
   * @returns {Promise<Foobar.Status>}
   */
  emptyPlaylist (): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.EmptyPlaylist)
  }

  /**
   * Start playing, optionally specifying a specific track to play.
   * @param {number?} trackIndex The 0-based index in the current playlist of the track to play.
   * @returns {Promise<Foobar.Status>}
   */
  start (trackIndex?: number): Promise<Foobar.Status> {
    return this.sendCommand(ajquery.Command.Start, trackIndex)
  }

  /**
   * Convert a service-side status object into a nice-looking one.
   * @param {ajquery.State} state The state as recieved from ajquery.
   * @returns {Foobar.Status}
   * @private
   */
  private composeStatus (state: ajquery.State): Foobar.Status {
    const playlistIndex = Number(state.playingItem) - (Number(state.playlistPage) - 1) * Number(state.playlistItemsPerPage)
    const playlist: Foobar.Track[] = state.playlist.map(function (track, index): Foobar.Track {
      return {
        artist: track.a,
        album: track.b,
        title: track.t,
        duration: track.ls * 1000,
        number: ajquery.parseTrackNumber(track.n),
        format: index === playlistIndex ? ajquery.parseTrackFormat(state.helper3) : undefined
      }
    })

    return {
      currentPlaylistPage: playlist,
      playlists: state.playlists.map(x => ({ name: x.name, trackCount: Number(x.count) } as Foobar.Playlist)),
      playbackOrder: Number(state.playbackOrder),
      volume: Number(state.volume) / 100,
      stopAfterCurrent: state.SAC === 'checked',
      stopAfterQueue: state.SAQ === 'checked',
      isPlaying: state.isPlaying === '1',
      isPaused: state.isPaused === '1',
      isEnqueueing: state.isEnqueueing === '1',
      playingItem: playlist[playlistIndex],
      playingItemIndex: Number(state.playingItem),
      itemPlayingPos: Number(state.itemPlayingPos) * 1000,
      itemPlayingLen: Number(state.itemPlayingLen) * 1000,
      playlistPage: Number(state.playlistPage),
      playlistItemsPerPage: Number(state.playlistItemsPerPage),
      playlistActive: state.playlists.map(x => ({ name: x.name, trackCount: Number(x.count) } as Foobar.Playlist))[Number(state.playlistActive)],
      playlistPlaying: state.playlists.map(x => ({ name: x.name, trackCount: Number(x.count) } as Foobar.Playlist))[Number(state.playlistPlaying)],
      playlistTotalTime: ajquery.parseTimeSpan(state.playlistTotalTime),
      queueTotalTime: ajquery.parseTimeSpan(state.queueTotalTime),
      isUndoAvailable: state.isUndoAvailable === '1',
      isRedoAvailable: state.isRedoAvailable === '1',
      albumArtUrl: state.albumArt === '/ajquery/img/icon1rx.png' ? undefined : url.resolve(this.baseUrl, state.albumArt) // Filter out the foobar icon - just say there's no art
    }
  }

  /**
   * Send a command to foobar.
   * @param {Command} cmd The command to send.
   * @param {any?} arg The argument to pass on.
   * @returns {Promise<Foobar.Status>}
   * @private
   */
  private sendCommand (cmd: ajquery.Command, arg?: any): Promise<Foobar.Status> {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: this.baseUrl,
        qs: {
          cmd,
          param1: arg,
          param3: 'js/state.json'
        },
        headers: {
          'cache-control': 'no-cache'
        },
        json: true
      }, (error, request, data: ajquery.State) => {
        if (error) {
          reject(error)
          return
        }

        if (request.statusCode < 200 || request.statusCode >= 300) {
          reject(new Error(`Recieved a status code outside of the 'ok' range: ${request.statusCode}`))
          return
        }

        resolve(this.composeStatus(data))
      })
    })
  }
}

export { FoobarControl }
