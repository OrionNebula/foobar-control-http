import { FoobarControl, Foobar } from './index'
import { expect } from 'chai'

describe('FoobarControl', () => {
  const foobar = new FoobarControl()

  it('should get the current status', () => {
    return foobar.getStatus().then(value =>
      expect(value).to.not.be.an('undefined')
    )
  })

  it('should queue items', () => {
    return foobar.getStatus().then(oldStatus =>
      foobar.queueItem(0).then(newStatus =>
        expect(newStatus.queueTotalTime).to.greaterThan(oldStatus.queueTotalTime)
      )
    )
  })

  it('should dequeue items', () => {
    return foobar.getStatus().then(oldStatus =>
      foobar.dequeueItem(0).then(newStatus =>
        expect(newStatus.queueTotalTime).to.lessThan(oldStatus.queueTotalTime)
      )
    )
  })

  it('should remove item', () => {
    return foobar.getStatus().then(oldStatus =>
      foobar.removeItem(0).then(newStatus => {
        return expect(newStatus.playlistActive.trackCount).to.be.lessThan(oldStatus.playlistActive.trackCount)
      })
    )
  })

  it('should seek', () => {
    return foobar.seek(0).then(newStatus => expect(newStatus.itemPlayingPos).to.equal(0))
  })

  it('should change playback order', () => {
    return foobar.playbackOrder(Foobar.PlaybackOrder.Default).then(newStatus => expect(newStatus.playbackOrder).to.equal(Foobar.PlaybackOrder.Default))
  })

  it('should set volume level', () => {
    return foobar.volume(1).then(newStatus => expect(newStatus.volume).to.equal(1))
  })

  it('should set stop after current', () => {
    return foobar.stopAfterCurrent(false).then(newStatus => expect(newStatus.stopAfterCurrent).to.equal(false))
  })

  it('should queue random items', () => {
    return foobar.getStatus().then(oldStatus => foobar.queueRandomItems(2).then(newStatus => expect(newStatus.queueTotalTime).to.be.greaterThan(oldStatus.queueTotalTime)))
  })

  it('should change playlist page', () => {
    return foobar.playlistPage(0).then(status => expect(status.playlistPage).to.equal(0))
  })

  it('should stop', () => {
    return foobar.stop().then(status => expect(status.isPaused || status.isPaused).to.equal(false))
  })

  it('should play or pause', () => {
    return foobar.getStatus().then(oldStatus =>
      foobar.playOrPause().then(newStatus =>
        expect(newStatus.isPlaying).to.not.equal(oldStatus.isPlaying)
      )
    )
  })

  it('should queue album', () => {
    return foobar.getStatus().then(oldStatus =>
      foobar.queueAlbum().then(newStatus =>
        expect(newStatus.queueTotalTime).to.be.greaterThan(oldStatus.queueTotalTime)
      )
    )
  })
})
