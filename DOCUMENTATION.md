<a name="module_foobar2000-control"></a>

## foobar2000-control

* [foobar2000-control](#module_foobar2000-control)
    * [~Foobar](#module_foobar2000-control..Foobar)
    * [~FoobarControl](#module_foobar2000-control..FoobarControl)
        * [.getStatus()](#module_foobar2000-control..FoobarControl+getStatus) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.queueItem(itemIndex)](#module_foobar2000-control..FoobarControl+queueItem) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.dequeueItem(itemIndex)](#module_foobar2000-control..FoobarControl+dequeueItem) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.setFocus(itemIndex)](#module_foobar2000-control..FoobarControl+setFocus) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.removeItem(itemIndex)](#module_foobar2000-control..FoobarControl+removeItem) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.seek(percent)](#module_foobar2000-control..FoobarControl+seek) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.playbackOrder(playbackOrder)](#module_foobar2000-control..FoobarControl+playbackOrder) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.volume(volume)](#module_foobar2000-control..FoobarControl+volume) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.stopAfterCurrent(sac)](#module_foobar2000-control..FoobarControl+stopAfterCurrent) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.stopAfterQueue(saq)](#module_foobar2000-control..FoobarControl+stopAfterQueue) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.queueRandomItems(itemsCount)](#module_foobar2000-control..FoobarControl+queueRandomItems) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.switchPlaylist(playlistIndex)](#module_foobar2000-control..FoobarControl+switchPlaylist) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.playlistPage(playlistPage)](#module_foobar2000-control..FoobarControl+playlistPage) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.stop()](#module_foobar2000-control..FoobarControl+stop) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.playOrPause()](#module_foobar2000-control..FoobarControl+playOrPause) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.previous()](#module_foobar2000-control..FoobarControl+previous) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.next()](#module_foobar2000-control..FoobarControl+next) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.random()](#module_foobar2000-control..FoobarControl+random) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.queueAlbum()](#module_foobar2000-control..FoobarControl+queueAlbum) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.emptyPlaylist()](#module_foobar2000-control..FoobarControl+emptyPlaylist) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
        * [.start(trackIndex)](#module_foobar2000-control..FoobarControl+start) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>

<a name="module_foobar2000-control..Foobar"></a>

### foobar2000-control~Foobar
Contains types used by FoobarControl.

**Kind**: inner property of [<code>foobar2000-control</code>](#module_foobar2000-control)  
<a name="module_foobar2000-control..FoobarControl"></a>

### foobar2000-control~FoobarControl
Control an instance of foobar2000 through 'foo_httpcontrol' and 'ajquery'.

**Kind**: inner property of [<code>foobar2000-control</code>](#module_foobar2000-control)  

* [~FoobarControl](#module_foobar2000-control..FoobarControl)
    * [.getStatus()](#module_foobar2000-control..FoobarControl+getStatus) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.queueItem(itemIndex)](#module_foobar2000-control..FoobarControl+queueItem) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.dequeueItem(itemIndex)](#module_foobar2000-control..FoobarControl+dequeueItem) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.setFocus(itemIndex)](#module_foobar2000-control..FoobarControl+setFocus) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.removeItem(itemIndex)](#module_foobar2000-control..FoobarControl+removeItem) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.seek(percent)](#module_foobar2000-control..FoobarControl+seek) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.playbackOrder(playbackOrder)](#module_foobar2000-control..FoobarControl+playbackOrder) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.volume(volume)](#module_foobar2000-control..FoobarControl+volume) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.stopAfterCurrent(sac)](#module_foobar2000-control..FoobarControl+stopAfterCurrent) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.stopAfterQueue(saq)](#module_foobar2000-control..FoobarControl+stopAfterQueue) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.queueRandomItems(itemsCount)](#module_foobar2000-control..FoobarControl+queueRandomItems) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.switchPlaylist(playlistIndex)](#module_foobar2000-control..FoobarControl+switchPlaylist) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.playlistPage(playlistPage)](#module_foobar2000-control..FoobarControl+playlistPage) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.stop()](#module_foobar2000-control..FoobarControl+stop) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.playOrPause()](#module_foobar2000-control..FoobarControl+playOrPause) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.previous()](#module_foobar2000-control..FoobarControl+previous) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.next()](#module_foobar2000-control..FoobarControl+next) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.random()](#module_foobar2000-control..FoobarControl+random) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.queueAlbum()](#module_foobar2000-control..FoobarControl+queueAlbum) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.emptyPlaylist()](#module_foobar2000-control..FoobarControl+emptyPlaylist) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
    * [.start(trackIndex)](#module_foobar2000-control..FoobarControl+start) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>

<a name="module_foobar2000-control..FoobarControl+getStatus"></a>

#### foobarControl.getStatus() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Get the player's current status.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+queueItem"></a>

#### foobarControl.queueItem(itemIndex) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Add an item into the queue by its index in the current playlist.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| itemIndex | <code>number</code> | The 0-based index in the current playlist of the item to add to the queue. |

<a name="module_foobar2000-control..FoobarControl+dequeueItem"></a>

#### foobarControl.dequeueItem(itemIndex) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Remove at item from the queue by its index in the current playlist.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| itemIndex | <code>number</code> | The 0-based index in the current playlist of the item to remove from the queue. |

<a name="module_foobar2000-control..FoobarControl+setFocus"></a>

#### foobarControl.setFocus(itemIndex) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Set the cursor position to an item by its index in the current playlist.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| itemIndex | <code>number</code> | The 0-based index in the current playlist of the item to set cursor position to. |

<a name="module_foobar2000-control..FoobarControl+removeItem"></a>

#### foobarControl.removeItem(itemIndex) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Remove an item from the current playlist.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| itemIndex | <code>number</code> | The 0-based index in the current playlist of the item to remove. |

<a name="module_foobar2000-control..FoobarControl+seek"></a>

#### foobarControl.seek(percent) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Set the caret to a certain percentage through the track.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| percent | <code>number</code> | The desired progress through the track, as a fraction of 1. |

<a name="module_foobar2000-control..FoobarControl+playbackOrder"></a>

#### foobarControl.playbackOrder(playbackOrder) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Set the playback order.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| playbackOrder | <code>Foobar.PlaybackOrder</code> | The desired playback order. |

<a name="module_foobar2000-control..FoobarControl+volume"></a>

#### foobarControl.volume(volume) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Set the volume level.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| volume | <code>number</code> | The desired volume as a fraction of 1. |

<a name="module_foobar2000-control..FoobarControl+stopAfterCurrent"></a>

#### foobarControl.stopAfterCurrent(sac) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Set the status of the 'stop after current' flag.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| sac | <code>boolean</code> | The desired flag status. |

<a name="module_foobar2000-control..FoobarControl+stopAfterQueue"></a>

#### foobarControl.stopAfterQueue(saq) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Set the status of the 'stop after queue' flag.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| saq | <code>boolean</code> | The desired flag status. |

<a name="module_foobar2000-control..FoobarControl+queueRandomItems"></a>

#### foobarControl.queueRandomItems(itemsCount) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Add a certain number of random items to the queue.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| itemsCount | <code>number</code> | The number of items to add. |

<a name="module_foobar2000-control..FoobarControl+switchPlaylist"></a>

#### foobarControl.switchPlaylist(playlistIndex) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Switch playback to another playlist.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| playlistIndex | <code>number</code> | The 0-based index of the playlist to switch to. |

<a name="module_foobar2000-control..FoobarControl+playlistPage"></a>

#### foobarControl.playlistPage(playlistPage) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Switch the view window to another page of the playlist.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| playlistPage | <code>number</code> | The 0-based page to switch to. |

<a name="module_foobar2000-control..FoobarControl+stop"></a>

#### foobarControl.stop() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Stop playback.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+playOrPause"></a>

#### foobarControl.playOrPause() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Pause or resume playback.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+previous"></a>

#### foobarControl.previous() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Move playback to the previous track.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+next"></a>

#### foobarControl.next() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Move playback to the next track.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+random"></a>

#### foobarControl.random() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Move playback to a random track.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+queueAlbum"></a>

#### foobarControl.queueAlbum() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Add the current track's album to the queue.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+emptyPlaylist"></a>

#### foobarControl.emptyPlaylist() ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Empty the current playlist.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  
<a name="module_foobar2000-control..FoobarControl+start"></a>

#### foobarControl.start(trackIndex) ⇒ <code>Promise.&lt;Foobar.Status&gt;</code>
Start playing, optionally specifying a specific track to play.

**Kind**: instance method of [<code>FoobarControl</code>](#module_foobar2000-control..FoobarControl)  

| Param | Type | Description |
| --- | --- | --- |
| trackIndex | <code>number</code> | The 0-based index in the current playlist of the track to play. |

