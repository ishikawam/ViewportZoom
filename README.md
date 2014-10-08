# ViewportZoom

[![Bower version](https://badge.fury.io/bo/viewport-zoom.svg)](http://badge.fury.io/bo/viewport-zoom)
[![Build Status](https://travis-ci.org/ishikawam/ViewportZoom.png?branch=master)](https://travis-ci.org/ishikawam/ViewportZoom)

calculate rate of magnification by `<meta name="viewport">` for a device.

## How to use

```js
ViewportZoom.get(device_width, meta_viewport, default_scale, min_width, max_width);
```

#### device_width
Type: `Number`

> iPhone = 320
> iPad = 768

#### meta_viewport
Type: `String` Default: ''

meta viewport's content text.

```html
<meta name="viewport" content="...text...">
```

viewport content options, `width`, `width=device-width`, `initial-scale`, `minimum-scale` and `minimum-scale`.
no meaning `user-scalable`.

#### default_scale
Type: `Number` Default: '980'

> iPhone, iPad = 980px

#### min_width
Type: `Number` Default: '64'

> iPhone, iPad = 64px

#### max_width
Type: `Number` Default: '1280'

iPhone, iPad = 1280px


## Usage Examples

```js
var ViewportZoom = require('lib/ViewportZoom/ViewportZoom.js');

var zoom = ViewportZoom.get(320);
> 0.32653061224489793 (320/980)

var zoom = ViewportZoom.get(320, 'width=device-width, initial-scale=1');
> 1
```

and more samples on https://github.com/ishikawam/ViewportZoom/blob/master/test/test.js

## Author

[Masayuki Ishikawa](https://github.com/ishikawam)
