# config

- enable sourcemaps + livereload for css/js
- add blackboxing in chrome like that: `/jquery.*\.js`
- [two step verification by phone](https://www.google.com/intl/ru/landing/2step/)

# keybinds

- ctrl+u - source
- f12 - devtools
- ctrl+w - close
- shift+tab / ctrl+shift+tab - moving on tabs

# flags

- don't forget to reset em (if you have any issues)
- `chrome://flags/#enable-fast-unload`
- `chrome://flags/#enable-javascript-harmony`
- `chrome://flags/#disable-hyperlink-auditing` -- disable it anyway :)
- `chrome://flags/#allow-insecure-localhost`

# console pro tips

- `$_` the result of the last expression
- `$0` or `$$0` selected el DOM node in the elements panel
- `$$('header')`
- `copy(document.body)` copy to the clipboard, and will JSON.stringify objects, but also get the outer HTML of DOM nodes, `copy($0)` is pretty common for me
- `inspect(document.body.firstChild)`
- `console.timeStamp('Please be super fast, k?')`
- `getEventListeners($(‘selector’))` returns an array of objects that contains all the events bound to that element. 
- `console.time('myTime');` //Starts the timer with label - myTime
- `console.timeEnd('mytime');` //Ends the timer with Label - myTime /Output: myTime:123.00 ms
- `dir($(‘selector’))` returns an object with all of the properties associated with its DOM element
- `document.designMode = 'on'` :)

# blackboxing

- `/jquery.*\.js`
- `/polymer.*\.html`

# debugging

- `monitorEvents(window, 'load')`
- `monitorEvents(window, ['load', 'resize'])`
- `monitorEvents(window, 'control')`
- `unmonitorEvents()`

Set a breakpoint at the beginning of the sumNumbers function

- `debug(sumNumbers)`

Set a breakpoint at the beginning of the autoInit method of the Sticky object

- `debug(Sticky.autoInit)`
