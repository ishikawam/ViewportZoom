/**
 * ViewportZoom
 * - get rate of magnification by <meta name="viewport"> for device. -
 *
 * ex) 'width=device-width, initial-scale=1.0'
 * なにもないと、320/980 に縮小される
 * 以下、上から優先(例はiPhone)
 * minimum-scale: 980pxに対して。320/980以上から影響あり
 * maximum-scale: 980pxに対して。320/980以下から影響あり
 * initial-scale: 初期サイズ。1で width=device-width。
 * width: pxも数字も同じ。device-width だとiphoneは320px、ipadは768px。
 * 最小値、最大値はwidth 64px - 1280px
 */

var ViewportZoom = ViewportZoom || {};
(function() {
    ViewportZoom.get = function(device_width, meta_viewport, default_scale, min_width, max_width) {
        // default
        // divice_width = 320(iPhone) | 768(iPad)
        meta_viewport = meta_viewport || '';
        default_scale = default_scale || 980; // iPhone, iPad
        min_width = min_width || 64; // iPhone, iPad
        max_width = max_width || 1280; // iPhone, iPad

        var viewport_width = default_scale;

        var viewportArray = {
            width: meta_viewport.match(/width *= *([0-9a-zA-Z_\-\.]*)/),
            initial: meta_viewport.match(/initial-scale *= *([0-9a-zA-Z_\-\.]*)/),
            minimum: meta_viewport.match(/minimum-scale *= *([0-9a-zA-Z_\-\.]*)/),
            maximum: meta_viewport.match(/maximum-scale *= *([0-9a-zA-Z_\-\.]*)/),
        };
        viewportArray = {
            width: viewportArray.width ? viewportArray.width[1] : '',
            initial: viewportArray.initial ? viewportArray.initial[1] : '',
            minimum: viewportArray.minimum ? viewportArray.minimum[1] : '',
            maximum: viewportArray.maximum ? viewportArray.maximum[1] : '',
        };
        viewportArray.width = viewportArray.width.replace(/ *px$/, '');

        if (viewportArray.width === 'device-width') {
            viewport_width = device_width;
        } else if (viewportArray.width === '0' || Number(viewportArray.width)) {
            viewport_width = viewportArray.width;
        }

        if (viewportArray.initial === '0' || Number(viewportArray.initial)) {
            // initialがあるとwidthは無視される
            viewport_width = device_width / viewportArray.initial;
        }

        // minimum > maximum 等不整合が会った場合は minimum が優先
        if (viewportArray.maximum === '0' || Number(viewportArray.maximum)) {
            if (viewport_width > device_width / viewportArray.maximum) {
                viewport_width = device_width / viewportArray.maximum;
            }
        }

        if (viewportArray.minimum === '0' || Number(viewportArray.minimum)) {
            if (viewport_width < device_width / viewportArray.minimum) {
                viewport_width = device_width / viewportArray.minimum;
            }
        }

        // min,max limit
        if (viewport_width < min_width) {
            viewport_width = min_width;
        } else if (viewport_width > max_width) {
            viewport_width = max_width;
        }

        return(device_width / viewport_width);
    }

    if (typeof(module) !== 'undefined') {
        module.exports = ViewportZoom;
    }
})(ViewportZoom);
