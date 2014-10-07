# ViewportZoom

calculate rate of magnification by `<meta name="viewport">` for a device.

## How to use

Viewport.get(device_width, meta_viewport, default_scale, min_width, max_width)

### device_width

iPhone = 320

iPad = 768

### meta_viewport

meta viewport's content text.

> <meta name="viewport" content="...text...">

### default_scale

iPhone, iPad = 980px

### min_width

iPhone, iPad = 64px

### max_width

iPhone, iPad = 1280px


## Usage Examples

```
var ViewportZoom = require('lib/ViewportZoom/ViewportZoom.js');

var zoom = ViewportZoom.get(320);
> 0.32653061224489793 (320/980)

var zoom = ViewportZoom.get(320, 'width=device-width, initial-scale=1');
> 1
```

## Author

[Masayuki Ishikawa](https://github.com/ishikawam)
