# foobar-control-http

Control [foobar2000](https://www.foobar2000.org/) from Node.js using [`foo_httpcontrol` and `ajquery`](https://bitbucket.org/oblikoamorale/foo_httpcontrol/downloads/).

## Usage

```ts
import { FoobarControl } from 'foobar-control-http'

const foobar = new FoobarControl()
foobar.getStatus().then(status => /* do something */)
foobar.playPause().then(status => /* do something */)
foobar.start(0).then(status => /* do something */)
```

## Documentation

See [DOCUMENTATION.md](./DOCUMENTATION.md) for comprehensive API documentation.