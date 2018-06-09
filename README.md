# foobar-control-http

![npm](https://img.shields.io/npm/v/foobar-control-http.svg)
![npm](https://img.shields.io/npm/dm/foobar-control-http.svg)
![npm type definitions](https://img.shields.io/npm/types/foobar-control-http.svg)
[![foobar2000 homepage](https://www.foobar2000.org/button-small.png)](https://www.foobar2000.org/ "foobar2000 homepage")

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