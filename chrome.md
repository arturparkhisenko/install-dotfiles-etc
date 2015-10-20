### config
- enable sourcemaps + livereload for css/js

### keybinds
- ctrl+u - source
- f12 - devtools
- ctrl+w - close
- shift+tab / ctrl+shift+tab - moving on tabs

### flags
- chrome://flags/#enable-fast-unload
- chrome://flags/#enable-javascript-harmony
- chrome://flags/#disable-hyperlink-auditing — disable it anyway :)

### console pro tips:
- `$_` the result of the last expression
- `$0` or `$$0` selected el DOM node in the elements panel
- `$$('header')`
- `copy(document.body)` copy to the clipboard, and will JSON.stringify objects, but also get the outer HTML of DOM nodes, `copy($0)` is pretty common for me
- `inspect(document.body.firstChild)`
- `console.timeStamp('Please be super fast, k?')`
