/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b, c) {
    function d(c) {
        var d = b.console;
        f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(b, c, {
                configurable: !0, enumerable: !0, get: function () {
                    return d(f), e
                }, set: function (a) {
                    d(f), e = a
                }
            })
        } catch (g) {
        }
        a._definePropertyBroken = !0, b[c] = e
    }

    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
        f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {size: 1}).attr("size") && a.attrFn, h = a.attr,
        i = a.attrHooks.value && a.attrHooks.value.get || function () {
            return null
        }, j = a.attrHooks.value && a.attrHooks.value.set || function () {
            return c
        }, k = /^(?:input|button)$/i, l = /^[238]$/,
        m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
        var j = e.toLowerCase(), o = b && b.nodeType;
        return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
            get: function (b, d) {
                var e, f = a.prop(b, d);
                return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
            }, set: function (b, c, d) {
                var e;
                return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
            }
        }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
        get: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
        }, set: function (a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = b))
        }
    };
    var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</,
        u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function (b, e, f) {
        var g, h;
        return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function (a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a)) try {
            document.querySelector(a)
        } catch (c) {
            a = a.replace(v, function (a, b, c, d) {
                return "[" + b + c + '"' + d + '"]'
            });
            try {
                document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
            } catch (e) {
                d("Attribute selector with '#' was not fixed: " + b[0])
            }
        }
        return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function (a) {
        return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function (a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {browser: b[1] || "", version: b[2] || "0"}
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
        function b(a, c) {
            return new b.fn.init(a, c)
        }

        a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f)
        }, b.fn.init.prototype = b.fn;
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function () {
        return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d && (a.cssHooks[c].get = function () {
            var a;
            return y = !0, a = d.apply(this, arguments), y = !1, a
        })
    }), a.swap = function (a, b, c, e) {
        var f, g, h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b) h[g] = a.style[g], a.style[g] = b[g];
        f = c.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f
    }, a.ajaxSetup({converters: {"text json": a.parseJSON}});
    var z = a.fn.data;
    a.fn.data = function (b) {
        var e, f, g = this[0];
        return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function (b, c, e, f) {
        c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
        var g, h, i, j, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = function (a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
        }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
        return k
    });
    var B = a.event.add, C = a.event.remove, D = a.event.trigger, E = a.fn.toggle, F = a.fn.live, G = a.fn.die,
        H = a.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        J = new RegExp("\\b(?:" + I + ")\\b"), K = /(?:^|\s)hover(\.\S+|)\b/, L = function (b) {
            return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
        };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
        a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function (a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function (b, c) {
        a.fn[c] = function () {
            var a = Array.prototype.slice.call(arguments, 0);
            return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
        }
    }), a.fn.toggle = function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments, f = b.guid || a.guid++, g = 0, h = function (c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
        for (h.guid = f; g < e.length;) e[g++].guid = f;
        return this.click(h)
    }, a.fn.live = function (b, c, e) {
        return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function (b, c) {
        return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function (a, b, c, e) {
        return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function (b, c) {
        a.event.special[c] = {
            setup: function () {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function () {
                    a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                }), a._data(this, c, a.guid++)), !1
            }, teardown: function () {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
            }
        }
    }), a.event.special.ready = {
        setup: function () {
            this === document && d("'ready' event is deprecated")
        }
    };
    var M = a.fn.andSelf || a.fn.addBack, N = a.fn.find;
    if (a.fn.andSelf = function () {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
    }, a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
    }, a.Callbacks) {
        var O = a.Deferred,
            P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];
        a.Deferred = function (b) {
            var c = O(), e = c.promise();
            return c.pipe = e.pipe = function () {
                var b = arguments;
                return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
                    a.each(P, function (f, g) {
                        var h = a.isFunction(b[f]) && b[f];
                        c[g[1]](function () {
                            var b = h && h.apply(this, arguments);
                            b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                        })
                    }), b = null
                }).promise()
            }, c.isResolved = function () {
                return d("deferred.isResolved is deprecated"), "resolved" === c.state()
            }, c.isRejected = function () {
                return d("deferred.isRejected is deprecated"), "rejected" === c.state()
            }, b && b.call(c, c), c
        }
    }
}(jQuery, window);
if (typeof jQuery != 'undefined') {
    var $ = jQuery.noConflict();
}

function ncPopupTips(type, msg) {
    var ico = type ? '<div class="text-center text-success mb-2"><span class="svg-success"></span></div>' : '<div class="text-center text-danger mb-2"><span class="svg-error"></span></div>';
    var c = type ? 'tips-success' : 'tips-error';
    var html = '<section class="nice-tips ' + c + ' nice-tips-sm nice-tips-open">' + '<div class="nice-tips-overlay"></div>' + '<div class="nice-tips-body text-center">' + '<div class="nice-tips-content px-5">' + ico + '<div class="text-sm text-muted">' + msg + '</div>' + '</div>' + '</div>' + '</section>';
    var tips = $(html);
    $('body').append(tips);
    $('body').addClass('modal-open');
    if (typeof lazyLoadInstance !== "undefined") {
        lazyLoadInstance.update();
    }
    setTimeout(function () {
        $('body').removeClass('modal-open');
        tips.removeClass('nice-tips-open');
        tips.addClass('nice-tips-close');
        setTimeout(function () {
            tips.removeClass('nice-tips-close');
            setTimeout(function () {
                tips.remove();
            }, 200);
        }, 400);
    }, 1200);
}

function ncPopup(type, html, maskStyle, btnCallBack) {
    var maskStyle = maskStyle ? 'style="' + maskStyle + '"' : '';
    var size = '';
    if (type == 'big') {
        size = 'nice-tips-lg';
    } else if (type == 'no-padding') {
        size = 'nice-tips-nopd';
    } else if (type == 'cover') {
        size = 'nice-tips-cover nice-tips-nopd';
    } else if (type == 'full') {
        size = 'nice-tips-xl';
    } else if (type == 'scroll') {
        size = 'nice-tips-scroll';
    } else if (type == 'middle') {
        size = 'nice-tips-md';
    } else if (type == 'small') {
        size = 'nice-tips-sm';
    }
    var template = '\
 <div class="nice-tips ' + size + ' nice-tips-open">\
  <div class="nice-tips-overlay" ' + maskStyle + '></div>\
  <div class="nice-tips-body">\
   <div class="nice-tips-close">\
    <span class="svg-white"></span>\
    <span class="svg-dark"></span>\
   </div>\
   <div class="nice-tips-content">\
    ' + html + '\
   </div>\
  </div>\
 </div>\
 ';
    var popup = $(template);
    $('body').append(popup);
    $('body').addClass('modal-open');
    if (typeof lazyLoadInstance !== "undefined") {
        lazyLoadInstance.update();
    }
    var close = function () {
        $('body').removeClass('modal-open');
        $(popup).removeClass('nice-tips-open');
        $(popup).addClass('nice-tips-close');
        setTimeout(function () {
            $(popup).removeClass('nice-tips-close');
            setTimeout(function () {
                popup.remove();
            }, 200);
        }, 600);
    }
    $(popup).on('click touchstart', '.nice-tips-close, .nice-tips-overlay', function (event) {
        event.preventDefault();
        close();
    });
    if (typeof btnCallBack == 'object') {
        Object.keys(btnCallBack).forEach(function (key) {
            $(popup).on('click touchstart', key, function (event) {
                var ret = btnCallBack[key](event, close);
            });
        });
    }
    return popup;
}

$(document).ready(function () {
    $('.post-video .wp-video').attr('style', '')
    $('.post-video video').attr('width', '100%')
    $('.post-video video').attr('height', null)
    if (typeof globals !== 'undefined' && globals.comment_ip === '1') {
        var locale = navigator.language || 'zh-CN'
        $('.author-ip').each(function () {
            var ip = $(this).data('ip') + ''
            var that = this
            if (ip.split('.').length !== 4) return
            $.ajax({url: 'http://ip-api.com/json/' + ip + '?lang=' + locale}).done(function (response) {
                $(that).text(response.city)
            })
        })
    }
});
/*! Picturefill - v2.3.1 - 2015-04-09
* http://scottjehl.github.io/picturefill
* Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia || (window.matchMedia = function () {
    "use strict";
    var a = window.styleMedia || window.media;
    if (!a) {
        var b = document.createElement("style"), c = document.getElementsByTagName("script")[0], d = null;
        b.type = "text/css", b.id = "matchmediajs-test", c.parentNode.insertBefore(b, c), d = "getComputedStyle" in window && window.getComputedStyle(b, null) || b.currentStyle, a = {
            matchMedium: function (a) {
                var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
                return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c, "1px" === d.width
            }
        }
    }
    return function (b) {
        return {matches: a.matchMedium(b || "all"), media: b || "all"}
    }
}()), function (a, b, c) {
    "use strict";

    function d(b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = b : "function" == typeof define && define.amd && define("picturefill", function () {
            return b
        }), "object" == typeof a && (a.picturefill = b)
    }

    function e(a) {
        var b, c, d, e, f, i = a || {};
        b = i.elements || g.getAllElements();
        for (var j = 0, k = b.length; k > j; j++) if (c = b[j], d = c.parentNode, e = void 0, f = void 0, "IMG" === c.nodeName.toUpperCase() && (c[g.ns] || (c[g.ns] = {}), i.reevaluate || !c[g.ns].evaluated)) {
            if (d && "PICTURE" === d.nodeName.toUpperCase()) {
                if (g.removeVideoShim(d), e = g.getMatch(c, d), e === !1) continue
            } else e = void 0;
            (d && "PICTURE" === d.nodeName.toUpperCase() || !g.sizesSupported && c.srcset && h.test(c.srcset)) && g.dodgeSrcset(c), e ? (f = g.processSourceSet(e), g.applyBestCandidate(f, c)) : (f = g.processSourceSet(c), (void 0 === c.srcset || c[g.ns].srcset) && g.applyBestCandidate(f, c)), c[g.ns].evaluated = !0
        }
    }

    function f() {
        function c() {
            clearTimeout(d), d = setTimeout(h, 60)
        }

        g.initTypeDetects(), e();
        var d, f = setInterval(function () {
            return e(), /^loaded|^i|^c/.test(b.readyState) ? void clearInterval(f) : void 0
        }, 250), h = function () {
            e({reevaluate: !0})
        };
        a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c)
    }

    if (a.HTMLPictureElement) return void d(function () {
    });
    b.createElement("picture");
    var g = a.picturefill || {}, h = /\s+\+?\d+(e\d+)?w/;
    g.ns = "picturefill", function () {
        g.srcsetSupported = "srcset" in c, g.sizesSupported = "sizes" in c, g.curSrcSupported = "currentSrc" in c
    }(), g.trim = function (a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
    }, g.makeUrl = function () {
        var a = b.createElement("a");
        return function (b) {
            return a.href = b, a.href
        }
    }(), g.restrictsMixedContent = function () {
        return "https:" === a.location.protocol
    }, g.matchesMedia = function (b) {
        return a.matchMedia && a.matchMedia(b).matches
    }, g.getDpr = function () {
        return a.devicePixelRatio || 1
    }, g.getWidthFromLength = function (a) {
        var c;
        if (!a || a.indexOf("%") > -1 != !1 || !(parseFloat(a) > 0 || a.indexOf("calc(") > -1)) return !1;
        a = a.replace("vw", "%"), g.lengthEl || (g.lengthEl = b.createElement("div"), g.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", g.lengthEl.className = "helper-from-picturefill-js"), g.lengthEl.style.width = "0px";
        try {
            g.lengthEl.style.width = a
        } catch (d) {
        }
        return b.body.appendChild(g.lengthEl), c = g.lengthEl.offsetWidth, 0 >= c && (c = !1), b.body.removeChild(g.lengthEl), c
    }, g.detectTypeSupport = function (b, c) {
        var d = new a.Image;
        return d.onerror = function () {
            g.types[b] = !1, e()
        }, d.onload = function () {
            g.types[b] = 1 === d.width, e()
        }, d.src = c, "pending"
    }, g.types = g.types || {}, g.initTypeDetects = function () {
        g.types["image/jpeg"] = !0, g.types["image/gif"] = !0, g.types["image/png"] = !0, g.types["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), g.types["image/webp"] = g.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
    }, g.verifyTypeSupport = function (a) {
        var b = a.getAttribute("type");
        if (null === b || "" === b) return !0;
        var c = g.types[b];
        return "string" == typeof c && "pending" !== c ? (g.types[b] = g.detectTypeSupport(b, c), "pending") : "function" == typeof c ? (c(), "pending") : c
    }, g.parseSize = function (a) {
        var b = /(\([^)]+\))?\s*(.+)/g.exec(a);
        return {media: b && b[1], length: b && b[2]}
    }, g.findWidthFromSourceSize = function (c) {
        for (var d, e = g.trim(c).split(/\s*,\s*/), f = 0, h = e.length; h > f; f++) {
            var i = e[f], j = g.parseSize(i), k = j.length, l = j.media;
            if (k && (!l || g.matchesMedia(l)) && (d = g.getWidthFromLength(k))) break
        }
        return d || Math.max(a.innerWidth || 0, b.documentElement.clientWidth)
    }, g.parseSrcset = function (a) {
        for (var b = []; "" !== a;) {
            a = a.replace(/^\s+/g, "");
            var c, d = a.search(/\s/g), e = null;
            if (-1 !== d) {
                c = a.slice(0, d);
                var f = c.slice(-1);
                if (("," === f || "" === c) && (c = c.replace(/,+$/, ""), e = ""), a = a.slice(d + 1), null === e) {
                    var g = a.indexOf(",");
                    -1 !== g ? (e = a.slice(0, g), a = a.slice(g + 1)) : (e = a, a = "")
                }
            } else c = a, a = "";
            (c || e) && b.push({url: c, descriptor: e})
        }
        return b
    }, g.parseDescriptor = function (a, b) {
        var c, d = b || "100vw", e = a && a.replace(/(^\s+|\s+$)/g, ""), f = g.findWidthFromSourceSize(d);
        if (e) for (var h = e.split(" "), i = h.length - 1; i >= 0; i--) {
            var j = h[i], k = j && j.slice(j.length - 1);
            if ("h" !== k && "w" !== k || g.sizesSupported) {
                if ("x" === k) {
                    var l = j && parseFloat(j, 10);
                    c = l && !isNaN(l) ? l : 1
                }
            } else c = parseFloat(parseInt(j, 10) / f)
        }
        return c || 1
    }, g.getCandidatesFromSourceSet = function (a, b) {
        for (var c = g.parseSrcset(a), d = [], e = 0, f = c.length; f > e; e++) {
            var h = c[e];
            d.push({url: h.url, resolution: g.parseDescriptor(h.descriptor, b)})
        }
        return d
    }, g.dodgeSrcset = function (a) {
        a.srcset && (a[g.ns].srcset = a.srcset, a.srcset = "", a.setAttribute("data-pfsrcset", a[g.ns].srcset))
    }, g.processSourceSet = function (a) {
        var b = a.getAttribute("srcset"), c = a.getAttribute("sizes"), d = [];
        return "IMG" === a.nodeName.toUpperCase() && a[g.ns] && a[g.ns].srcset && (b = a[g.ns].srcset), b && (d = g.getCandidatesFromSourceSet(b, c)), d
    }, g.backfaceVisibilityFix = function (a) {
        var b = a.style || {}, c = "webkitBackfaceVisibility" in b, d = b.zoom;
        c && (b.zoom = ".999", c = a.offsetWidth, b.zoom = d)
    }, g.setIntrinsicSize = function () {
        var c = {}, d = function (a, b, c) {
            b && a.setAttribute("width", parseInt(b / c, 10))
        };
        return function (e, f) {
            var h;
            e[g.ns] && !a.pfStopIntrinsicSize && (void 0 === e[g.ns].dims && (e[g.ns].dims = e.getAttribute("width") || e.getAttribute("height")), e[g.ns].dims || (f.url in c ? d(e, c[f.url], f.resolution) : (h = b.createElement("img"), h.onload = function () {
                if (c[f.url] = h.width, !c[f.url]) try {
                    b.body.appendChild(h), c[f.url] = h.width || h.offsetWidth, b.body.removeChild(h)
                } catch (a) {
                }
                e.src === f.url && d(e, c[f.url], f.resolution), e = null, h.onload = null, h = null
            }, h.src = f.url)))
        }
    }(), g.applyBestCandidate = function (a, b) {
        var c, d, e;
        a.sort(g.ascendingSort), d = a.length, e = a[d - 1];
        for (var f = 0; d > f; f++) if (c = a[f], c.resolution >= g.getDpr()) {
            e = c;
            break
        }
        e && (e.url = g.makeUrl(e.url), b.src !== e.url && (g.restrictsMixedContent() && "http:" === e.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + e.url) : (b.src = e.url, g.curSrcSupported || (b.currentSrc = b.src), g.backfaceVisibilityFix(b))), g.setIntrinsicSize(b, e))
    }, g.ascendingSort = function (a, b) {
        return a.resolution - b.resolution
    }, g.removeVideoShim = function (a) {
        var b = a.getElementsByTagName("video");
        if (b.length) {
            for (var c = b[0], d = c.getElementsByTagName("source"); d.length;) a.insertBefore(d[0], c);
            c.parentNode.removeChild(c)
        }
    }, g.getAllElements = function () {
        for (var a = [], c = b.getElementsByTagName("img"), d = 0, e = c.length; e > d; d++) {
            var f = c[d];
            ("PICTURE" === f.parentNode.nodeName.toUpperCase() || null !== f.getAttribute("srcset") || f[g.ns] && null !== f[g.ns].srcset) && a.push(f)
        }
        return a
    }, g.getMatch = function (a, b) {
        for (var c, d = b.childNodes, e = 0, f = d.length; f > e; e++) {
            var h = d[e];
            if (1 === h.nodeType) {
                if (h === a) return c;
                if ("SOURCE" === h.nodeName.toUpperCase()) {
                    null !== h.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                    var i = h.getAttribute("media");
                    if (h.getAttribute("srcset") && (!i || g.matchesMedia(i))) {
                        var j = g.verifyTypeSupport(h);
                        if (j === !0) {
                            c = h;
                            break
                        }
                        if ("pending" === j) return !1
                    }
                }
            }
        }
        return c
    }, f(), e._ = g, d(e)
}(window, window.document, new window.Image);
/*! lightgallery - v1.6.12 - 2019-02-19
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2019 Sachin N; Licensed GPLv3 */
!function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function (a) {
    !function () {
        "use strict";

        function b(b, d) {
            if (this.el = b, this.$el = a(b), this.s = a.extend({}, c, d), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw"When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
        }

        var c = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1
        };
        b.prototype.init = function () {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10), a("body").addClass("lg-from-hash"), a("body").hasClass("lg-on") || (setTimeout(function () {
                b.build(b.index)
            }), a("body").addClass("lg-on"))), b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || 0, a("body").hasClass("lg-on") || setTimeout(function () {
                b.build(b.index), a("body").addClass("lg-on")
            })) : b.$items.on("click.lgcustom", function (c) {
                try {
                    c.preventDefault(), c.preventDefault()
                } catch (a) {
                    c.returnValue = !1
                }
                b.$el.trigger("onBeforeOpen.lg"), b.index = b.s.index || b.$items.index(this), a("body").hasClass("lg-on") || (b.build(b.index), a("body").addClass("lg-on"))
            })
        }, b.prototype.build = function (b) {
            var c = this;
            c.structure(), a.each(a.fn.lightGallery.modules, function (b) {
                c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
            }), c.slide(b, !1, !1, !1), c.s.keyPress && c.keyPress(), c.$items.length > 1 ? (c.arrow(), setTimeout(function () {
                c.enableDrag(), c.enableSwipe()
            }, 50), c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function () {
                c.$el.trigger("onSlideClick.lg")
            }), c.counter(), c.closeGallery(), c.$el.trigger("onAfterOpen.lg"), c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
                c.$outer.removeClass("lg-hide-items"), clearTimeout(c.hideBartimeout), c.hideBartimeout = setTimeout(function () {
                    c.$outer.addClass("lg-hide-items")
                }, c.s.hideBarsDelay)
            }), c.$outer.trigger("mousemove.lg")
        }, b.prototype.structure = function () {
            var b, c = "", d = "", e = 0, f = "", g = this;
            for (a("body").append('<div class="lg-backdrop"></div>'), a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), e = 0; e < this.$items.length; e++) c += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'), b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>", a("body").append(b), this.$outer = a(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), g.setTop(), a(window).on("resize.lg orientationchange.lg", function () {
                setTimeout(function () {
                    g.setTop()
                }, 100)
            }), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                var h = this.$outer.find(".lg-inner");
                h.css("transition-timing-function", this.s.cssEasing), h.css("transition-duration", this.s.speed + "ms")
            }
            setTimeout(function () {
                a(".lg-backdrop").addClass("in")
            }), setTimeout(function () {
                g.$outer.addClass("lg-visible")
            }, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = a(window).scrollTop()
        }, b.prototype.setTop = function () {
            if ("100%" !== this.s.height) {
                var b = a(window).height(), c = (b - parseInt(this.s.height, 10)) / 2, d = this.$outer.find(".lg");
                b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
            }
        }, b.prototype.doCss = function () {
            return !!function () {
                var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                    b = document.documentElement, c = 0;
                for (c = 0; c < a.length; c++) if (a[c] in b.style) return !0
            }()
        }, b.prototype.isVideo = function (a, b) {
            var c;
            if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"), !a) return c ? {html5: !0} : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
            var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return d ? {youtube: d} : e ? {vimeo: e} : f ? {dailymotion: f} : g ? {vk: g} : void 0
        }, b.prototype.counter = function () {
            this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }, b.prototype.addHtml = function (b) {
            var c, d, e = null;
            if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b), d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))), !c) if (void 0 !== e && null !== e) {
                var f = e.substring(0, 1);
                "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
            } else e = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e), void 0 !== e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [b])
        }, b.prototype.preload = function (a) {
            var b = 1, c = 1;
            for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++) this.loadContent(a + b, !1, 0);
            for (c = 1; c <= this.s.preload && !(a - c < 0); c++) this.loadContent(a - c, !1, 0)
        }, b.prototype.loadContent = function (b, c, d) {
            var e, f, g, h, i, j, k = this, l = !1, m = function (b) {
                for (var c = [], d = [], e = 0; e < b.length; e++) {
                    var g = b[e].split(" ");
                    "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1])
                }
                for (var h = a(window).width(), i = 0; i < c.length; i++) if (parseInt(c[i], 10) > h) {
                    f = d[i];
                    break
                }
            };
            if (k.s.dynamic) {
                if (k.s.dynamicEl[b].poster && (l = !0, g = k.s.dynamicEl[b].poster), j = k.s.dynamicEl[b].html, f = k.s.dynamicEl[b].src, k.s.dynamicEl[b].responsive) {
                    m(k.s.dynamicEl[b].responsive.split(","))
                }
                h = k.s.dynamicEl[b].srcset, i = k.s.dynamicEl[b].sizes
            } else {
                if (k.$items.eq(b).attr("data-poster") && (l = !0, g = k.$items.eq(b).attr("data-poster")), j = k.$items.eq(b).attr("data-html"), f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"), k.$items.eq(b).attr("data-responsive")) {
                    m(k.$items.eq(b).attr("data-responsive").split(","))
                }
                h = k.$items.eq(b).attr("data-srcset"), i = k.$items.eq(b).attr("data-sizes")
            }
            var n = !1;
            k.s.dynamic ? k.s.dynamicEl[b].iframe && (n = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
            var o = k.isVideo(f, b);
            if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                if (n) k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>'); else if (l) {
                    var p = "";
                    p = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5", k.$slide.eq(b).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
                } else o ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                if (k.$el.trigger("onAferAppendSlide.lg", [b]), e = k.$slide.eq(b).find(".lg-object"), i && e.attr("sizes", i), h) {
                    e.attr("srcset", h);
                    try {
                        picturefill({elements: [e[0]]})
                    } catch (a) {
                        console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                    }
                }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b), k.$slide.eq(b).addClass("lg-loaded")
            }
            k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function () {
                var c = 0;
                d && !a("body").hasClass("lg-from-hash") && (c = d), setTimeout(function () {
                    k.$slide.eq(b).addClass("lg-complete"), k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
                }, c)
            }), o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"), !0 === c && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function () {
                k.preload(b)
            }))
        }, b.prototype.slide = function (b, c, d, e) {
            var f = this.$outer.find(".lg-current").index(), g = this;
            if (!g.lGalleryOn || f !== b) {
                var h = this.$slide.length, i = g.lGalleryOn ? this.s.speed : 0;
                if (!g.lgBusy) {
                    if (this.s.download) {
                        var j;
                        j = g.s.dynamic ? !1 !== g.s.dynamicEl[b].downloadUrl && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")), j ? (a("#lg-download").attr("href", j), g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
                    }
                    if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]), g.lgBusy = !0, clearTimeout(g.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function () {
                        g.addHtml(b)
                    }, i), this.arrowDisable(b), e || (b < f ? e = "prev" : b > f && (e = "next")), c) {
                        this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                        var k, l;
                        h > 2 ? (k = b - 1, l = b + 1, 0 === b && f === h - 1 ? (l = 0, k = h - 1) : b === h - 1 && 0 === f && (l = 0, k = h - 1)) : (k = 0, l = 1), "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"), g.$slide.eq(b).addClass("lg-current")
                    } else g.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"), this.$slide.eq(f).addClass("lg-prev-slide")), setTimeout(function () {
                        g.$slide.removeClass("lg-current"), g.$slide.eq(b).addClass("lg-current"), g.$outer.removeClass("lg-no-trans")
                    }, 50);
                    g.lGalleryOn ? (setTimeout(function () {
                        g.loadContent(b, !0, 0)
                    }, this.s.speed + 50), setTimeout(function () {
                        g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
                    }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration), g.lgBusy = !1, g.$el.trigger("onAfterSlide.lg", [f, b, c, d])), g.lGalleryOn = !0, this.s.counter && a("#lg-counter-current").text(b + 1)
                }
                g.index = b
            }
        }, b.prototype.goToNextSlide = function (a) {
            var b = this, c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : c ? (b.index = 0, b.$el.trigger("onBeforeNextSlide.lg", [b.index]), b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"), setTimeout(function () {
                b.$outer.removeClass("lg-right-end")
            }, 400)))
        }, b.prototype.goToPrevSlide = function (a) {
            var b = this, c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1), b.lgBusy || (b.index > 0 ? (b.index--, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1, b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]), b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"), setTimeout(function () {
                b.$outer.removeClass("lg-left-end")
            }, 400)))
        }, b.prototype.keyPress = function () {
            var b = this;
            this.$items.length > 1 && a(window).on("keyup.lg", function (a) {
                b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()), 39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()))
            }), a(window).on("keydown.lg", function (a) {
                !0 === b.s.escKey && 27 === a.keyCode && (a.preventDefault(), b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
            })
        }, b.prototype.arrow = function () {
            var a = this;
            this.$outer.find(".lg-prev").on("click.lg", function () {
                a.goToPrevSlide()
            }), this.$outer.find(".lg-next").on("click.lg", function () {
                a.goToNextSlide()
            })
        }, b.prototype.arrowDisable = function (a) {
            !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }, b.prototype.setTranslate = function (a, b, c) {
            this.s.useLeft ? a.css("left", b) : a.css({transform: "translate3d(" + b + "px, " + c + "px, 0px)"})
        }, b.prototype.touchMove = function (b, c) {
            var d = c - b;
            Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), d, 0), this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0), this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
        }, b.prototype.touchEnd = function (a) {
            var b = this;
            "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function () {
                b.$outer.removeClass("lg-dragging"), a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"), b.$slide.removeAttr("style")
            }), setTimeout(function () {
                b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
            }, b.s.speed + 100)
        }, b.prototype.enableSwipe = function () {
            var a = this, b = 0, c = 0, d = !1;
            a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function (c) {
                a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(), a.manageSwipeClass(), b = c.originalEvent.targetTouches[0].pageX)
            }), a.$slide.on("touchmove.lg", function (e) {
                a.$outer.hasClass("lg-zoomed") || (e.preventDefault(), c = e.originalEvent.targetTouches[0].pageX, a.touchMove(b, c), d = !0)
            }), a.$slide.on("touchend.lg", function () {
                a.$outer.hasClass("lg-zoomed") || (d ? (d = !1, a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
            }))
        }, b.prototype.enableDrag = function () {
            var b = this, c = 0, d = 0, e = !1, f = !1;
            b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function (d) {
                b.$outer.hasClass("lg-zoomed") || b.lgBusy || a(d.target).text().trim() || (d.preventDefault(), b.manageSwipeClass(), c = d.pageX, e = !0, b.$outer.scrollLeft += 1, b.$outer.scrollLeft -= 1, b.$outer.removeClass("lg-grab").addClass("lg-grabbing"), b.$el.trigger("onDragstart.lg"))
            }), a(window).on("mousemove.lg", function (a) {
                e && (f = !0, d = a.pageX, b.touchMove(c, d), b.$el.trigger("onDragmove.lg"))
            }), a(window).on("mouseup.lg", function (g) {
                f ? (f = !1, b.touchEnd(d - c), b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"), e && (e = !1, b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }))
        }, b.prototype.manageSwipeClass = function () {
            var a = this.index + 1, b = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")
        }, b.prototype.mousewheel = function () {
            var a = this;
            a.$outer.on("mousewheel.lg", function (b) {
                b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(), b.preventDefault())
            })
        }, b.prototype.closeGallery = function () {
            var b = this, c = !1;
            this.$outer.find(".lg-close").on("click.lg", function () {
                b.destroy()
            }), b.s.closable && (b.$outer.on("mousedown.lg", function (b) {
                c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
            }), b.$outer.on("mousemove.lg", function () {
                c = !1
            }), b.$outer.on("mouseup.lg", function (d) {
                (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
            }))
        }, b.prototype.destroy = function (b) {
            var c = this;
            b || (c.$el.trigger("onBeforeClose.lg"), a(window).scrollTop(c.prevScrollTop)), b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"), a.removeData(c.el, "lightGallery")), this.$el.off(".lg.tm"), a.each(a.fn.lightGallery.modules, function (a) {
                c.modules[a] && c.modules[a].destroy()
            }), this.lGalleryOn = !1, clearTimeout(c.hideBartimeout), this.hideBartimeout = !1, a(window).off(".lg"), a("body").removeClass("lg-on lg-from-hash"), c.$outer && c.$outer.removeClass("lg-visible"), a(".lg-backdrop").removeClass("in"), setTimeout(function () {
                c.$outer && c.$outer.remove(), a(".lg-backdrop").remove(), b || c.$el.trigger("onCloseAfter.lg")
            }, c.s.backdropDuration + 50)
        }, a.fn.lightGallery = function (c) {
            return this.each(function () {
                if (a.data(this, "lightGallery")) try {
                    a(this).data("lightGallery").init()
                } catch (a) {
                    console.error("lightGallery has not initiated properly")
                } else a.data(this, "lightGallery", new b(this, c))
            })
        }, a.fn.lightGallery.modules = {}
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function (a) {
    !function () {
        "use strict";
        var b = {
            autoplay: !1,
            pause: 5e3,
            progressBar: !0,
            fourceAutoplay: !1,
            autoplayControls: !0,
            appendAutoplayControlsTo: ".lg-toolbar"
        }, c = function (c) {
            return this.core = a(c).data("lightGallery"), this.$el = a(c), !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
        };
        c.prototype.init = function () {
            var a = this;
            a.core.s.autoplayControls && a.controls(), a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), a.progress(), a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function () {
                a.startlAuto()
            }), a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
                a.interval && (a.cancelAuto(), a.canceledOnTouch = !0)
            }), a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function () {
                !a.interval && a.canceledOnTouch && (a.startlAuto(), a.canceledOnTouch = !1)
            })
        }, c.prototype.progress = function () {
            var a, b, c = this;
            c.$el.on("onBeforeSlide.lg.tm", function () {
                c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"), b = c.core.$outer.find(".lg-progress"), c.interval && (b.removeAttr("style"), a.removeClass("lg-start"), setTimeout(function () {
                    b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"), a.addClass("lg-start")
                }, 20))), c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(), c.fromAuto = !1
            })
        }, c.prototype.controls = function () {
            var b = this;
            a(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), b.core.$outer.find(".lg-autoplay-button").on("click.lg", function () {
                a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(), b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(), b.core.s.fourceAutoplay = b.fourceAutoplayTemp)
            })
        }, c.prototype.startlAuto = function () {
            var a = this;
            a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"), a.core.$outer.addClass("lg-show-autoplay"), a.core.$outer.find(".lg-progress-bar").addClass("lg-start"), a.interval = setInterval(function () {
                a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0, a.fromAuto = !0, a.core.slide(a.core.index, !1, !1, "next")
            }, a.core.s.speed + a.core.s.pause)
        }, c.prototype.cancelAuto = function () {
            clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
        }, c.prototype.destroy = function () {
            this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
        }, a.fn.lightGallery.modules.autoplay = c
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function (a) {
    !function () {
        "use strict";

        function b() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
        }

        var c = {fullScreen: !0}, d = function (b) {
            return this.core = a(b).data("lightGallery"), this.$el = a(b), this.core.s = a.extend({}, c, this.core.s), this.init(), this
        };
        d.prototype.init = function () {
            var a = "";
            if (this.core.s.fullScreen) {
                if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                a = '<span class="lg-fullscreen lg-icon"></span>', this.core.$outer.find(".lg-toolbar").append(a), this.fullScreen()
            }
        }, d.prototype.requestFullscreen = function () {
            var a = document.documentElement;
            a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
        }, d.prototype.exitFullscreen = function () {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }, d.prototype.fullScreen = function () {
            var c = this;
            a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function () {
                c.core.$outer.toggleClass("lg-fullscreen-on")
            }), this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
                b() ? c.exitFullscreen() : c.requestFullscreen()
            })
        }, d.prototype.destroy = function () {
            b() && this.exitFullscreen(), a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
        }, a.fn.lightGallery.modules.fullscreen = d
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function (a) {
    !function () {
        "use strict";
        var b = {pager: !1}, c = function (c) {
            return this.core = a(c).data("lightGallery"), this.$el = a(c), this.core.s = a.extend({}, b, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
        };
        c.prototype.init = function () {
            var b, c, d, e = this, f = "";
            if (e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), e.core.s.dynamic) for (var g = 0; g < e.core.s.dynamicEl.length; g++) f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e.core.s.dynamicEl[g].thumb + '" /></div></span>'; else e.core.$items.each(function () {
                e.core.s.exThumbImage ? f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).attr(e.core.s.exThumbImage) + '" /></div></span>' : f += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + a(this).find("img").attr("src") + '" /></div></span>'
            });
            c = e.core.$outer.find(".lg-pager-outer"), c.html(f), b = e.core.$outer.find(".lg-pager-cont"), b.on("click.lg touchend.lg", function () {
                var b = a(this);
                e.core.index = b.index(), e.core.slide(e.core.index, !1, !0, !1)
            }), c.on("mouseover.lg", function () {
                clearTimeout(d), c.addClass("lg-pager-hover")
            }), c.on("mouseout.lg", function () {
                d = setTimeout(function () {
                    c.removeClass("lg-pager-hover")
                })
            }), e.core.$el.on("onBeforeSlide.lg.tm", function (a, c, d) {
                b.removeClass("lg-pager-active"), b.eq(d).addClass("lg-pager-active")
            })
        }, c.prototype.destroy = function () {
        }, a.fn.lightGallery.modules.pager = c
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function (a) {
    !function () {
        "use strict";
        var b = {
            thumbnail: !0,
            animateThumb: !0,
            currentPagerPosition: "middle",
            thumbWidth: 100,
            thumbHeight: "80px",
            thumbContHeight: 100,
            thumbMargin: 5,
            exThumbImage: !1,
            showThumbByDefault: !0,
            toogleThumb: !0,
            pullCaptionUp: !0,
            enableThumbDrag: !0,
            enableThumbSwipe: !0,
            swipeThreshold: 50,
            loadYoutubeThumbnail: !0,
            youtubeThumbSize: 1,
            loadVimeoThumbnail: !0,
            vimeoThumbSize: "thumbnail_small",
            loadDailymotionThumbnail: !0
        }, c = function (c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.$el = a(c), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
        };
        c.prototype.init = function () {
            var a = this;
            this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function () {
                a.core.$outer.addClass("lg-thumb-open")
            }, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
        }, c.prototype.build = function () {
            function b(a, b, c) {
                var g, h = d.core.isVideo(a, c) || {}, i = "";
                h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg", i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b, e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>', i = ""
            }

            var c, d = this, e = "", f = "",
                g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
            switch (this.core.s.vimeoThumbSize) {
                case"thumbnail_large":
                    f = "640";
                    break;
                case"thumbnail_medium":
                    f = "200x150";
                    break;
                case"thumbnail_small":
                    f = "100x75"
            }
            if (d.core.$outer.addClass("lg-has-thumb"), d.core.$outer.find(".lg").append(g), d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"), d.thumbOuterWidth = d.$thumbOuter.width(), d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({
                width: d.thumbTotalWidth + "px",
                position: "relative"
            }), this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"), d.core.s.dynamic) for (var h = 0; h < d.core.s.dynamicEl.length; h++) b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h); else d.core.$items.each(function (c) {
                d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c)
            });
            d.core.$outer.find(".lg-thumb").html(e), c = d.core.$outer.find(".lg-thumb-item"), c.each(function () {
                var b = a(this), c = b.attr("data-vimeo-id");
                c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", {format: "json"}, function (a) {
                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize])
                })
            }), c.eq(d.core.index).addClass("active"), d.core.$el.on("onBeforeSlide.lg.tm", function () {
                c.removeClass("active"), c.eq(d.core.index).addClass("active")
            }), c.on("click.lg touchend.lg", function () {
                var b = a(this);
                setTimeout(function () {
                    (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(), d.core.slide(d.core.index, !1, !0, !1))
                }, 50)
            }), d.core.$el.on("onBeforeSlide.lg.tm", function () {
                d.animateThumb(d.core.index)
            }), a(window).on("resize.lg.thumb orientationchange.lg.thumb", function () {
                setTimeout(function () {
                    d.animateThumb(d.core.index), d.thumbOuterWidth = d.$thumbOuter.width()
                }, 200)
            })
        }, c.prototype.setTranslate = function (a) {
            this.core.$outer.find(".lg-thumb").css({transform: "translate3d(-" + a + "px, 0px, 0px)"})
        }, c.prototype.animateThumb = function (a) {
            var b = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
                var c;
                switch (this.core.s.currentPagerPosition) {
                    case"left":
                        c = 0;
                        break;
                    case"middle":
                        c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                        break;
                    case"right":
                        c = this.thumbOuterWidth - this.core.s.thumbWidth
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || b.animate({left: -this.left + "px"}, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"), this.setTranslate(this.left)
            }
        }, c.prototype.enableThumbDrag = function () {
            var b = this, c = 0, d = 0, e = !1, f = !1, g = 0;
            b.$thumbOuter.addClass("lg-grab"), b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function (a) {
                b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(), c = a.pageX, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.thumbClickable = !1, b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
            }), a(window).on("mousemove.lg.thumb", function (a) {
                e && (g = b.left, f = !0, d = a.pageX, b.$thumbOuter.addClass("lg-dragging"), g -= d - c, g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth), g < 0 && (g = 0), b.setTranslate(g))
            }), a(window).on("mouseup.lg.thumb", function () {
                f ? (f = !1, b.$thumbOuter.removeClass("lg-dragging"), b.left = g, Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0, e && (e = !1, b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
            })
        }, c.prototype.enableThumbSwipe = function () {
            var a = this, b = 0, c = 0, d = !1, e = 0;
            a.core.$outer.find(".lg-thumb").on("touchstart.lg", function (c) {
                a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(), b = c.originalEvent.targetTouches[0].pageX, a.thumbClickable = !1)
            }), a.core.$outer.find(".lg-thumb").on("touchmove.lg", function (f) {
                a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(), c = f.originalEvent.targetTouches[0].pageX, d = !0, a.$thumbOuter.addClass("lg-dragging"), e = a.left, e -= c - b, e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth), e < 0 && (e = 0), a.setTranslate(e))
            }), a.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
                a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1, a.$thumbOuter.removeClass("lg-dragging"), Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0), a.left = e) : a.thumbClickable = !0
            })
        }, c.prototype.toogle = function () {
            var a = this;
            a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"), a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
                a.core.$outer.toggleClass("lg-thumb-open")
            }))
        }, c.prototype.thumbkeyPress = function () {
            var b = this;
            a(window).on("keydown.lg.thumb", function (a) {
                38 === a.keyCode ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(), b.core.$outer.removeClass("lg-thumb-open"))
            })
        }, c.prototype.destroy = function () {
            this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
        }, a.fn.lightGallery.modules.Thumbnail = c
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function (a) {
    !function () {
        "use strict";

        function b(a, b, c, d) {
            var e = this;
            if (e.core.$slide.eq(b).find(".lg-video").append(e.loadVideo(c, "lg-object", !0, b, d)), d) if (e.core.s.videojs) try {
                videojs(e.core.$slide.eq(b).find(".lg-html5").get(0), e.core.s.videojsOptions, function () {
                    !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play()
                })
            } catch (a) {
                console.error("Make sure you have included videojs")
            } else !e.videoLoaded && e.core.s.autoplayFirstVideo && e.core.$slide.eq(b).find(".lg-html5").get(0).play()
        }

        function c(a, b) {
            var c = this.core.$slide.eq(b).find(".lg-video-cont");
            c.hasClass("lg-has-iframe") || (c.css("max-width", this.core.s.videoMaxWidth), this.videoLoaded = !0)
        }

        function d(b, c, d) {
            var e = this, f = e.core.$slide.eq(c), g = f.find(".lg-youtube").get(0), h = f.find(".lg-vimeo").get(0),
                i = f.find(".lg-dailymotion").get(0), j = f.find(".lg-vk").get(0), k = f.find(".lg-html5").get(0);
            if (g) g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*"); else if (h) try {
                $f(h).api("pause")
            } catch (a) {
                console.error("Make sure you have included froogaloop2 js")
            } else if (i) i.contentWindow.postMessage("pause", "*"); else if (k) if (e.core.s.videojs) try {
                videojs(k).pause()
            } catch (a) {
                console.error("Make sure you have included videojs")
            } else k.pause();
            j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
            var l;
            l = e.core.s.dynamic ? e.core.s.dynamicEl[d].src : e.core.$items.eq(d).attr("href") || e.core.$items.eq(d).attr("data-src");
            var m = e.core.isVideo(l, d) || {};
            (m.youtube || m.vimeo || m.dailymotion || m.vk) && e.core.$outer.addClass("lg-hide-download")
        }

        var e = {
            videoMaxWidth: "855px",
            autoplayFirstVideo: !0,
            youtubePlayerParams: !1,
            vimeoPlayerParams: !1,
            dailymotionPlayerParams: !1,
            vkPlayerParams: !1,
            videojs: !1,
            videojsOptions: {}
        }, f = function (b) {
            return this.core = a(b).data("lightGallery"), this.$el = a(b), this.core.s = a.extend({}, e, this.core.s), this.videoLoaded = !1, this.init(), this
        };
        f.prototype.init = function () {
            var e = this;
            e.core.$el.on("hasVideo.lg.tm", b.bind(this)), e.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)), e.core.doCss() && e.core.$items.length > 1 && (e.core.s.enableSwipe || e.core.s.enableDrag) ? e.core.$el.on("onSlideClick.lg.tm", function () {
                var a = e.core.$slide.eq(e.core.index);
                e.loadVideoOnclick(a)
            }) : e.core.$slide.on("click.lg", function () {
                e.loadVideoOnclick(a(this))
            }), e.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)), e.core.$el.on("onAfterSlide.lg.tm", function (a, b) {
                e.core.$slide.eq(b).removeClass("lg-video-playing")
            }), e.core.s.autoplayFirstVideo && e.core.$el.on("onAferAppendSlide.lg.tm", function (a, b) {
                if (!e.core.lGalleryOn) {
                    var c = e.core.$slide.eq(b);
                    setTimeout(function () {
                        e.loadVideoOnclick(c)
                    }, 100)
                }
            })
        }, f.prototype.loadVideo = function (b, c, d, e, f) {
            var g = "", h = 1, i = "", j = this.core.isVideo(b, e) || {};
            if (d && (h = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0), j.youtube) i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1", this.core.s.youtubePlayerParams && (i = i + "&" + a.param(this.core.s.youtubePlayerParams)), g = '<iframe class="lg-video-object lg-youtube ' + c + '" width="560" height="315" src="//www.youtube.com/embed/' + j.youtube[1] + i + '" frameborder="0" allowfullscreen></iframe>'; else if (j.vimeo) i = "?autoplay=" + h + "&api=1", this.core.s.vimeoPlayerParams && (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)), g = '<iframe class="lg-video-object lg-vimeo ' + c + '" width="560" height="315"  src="//player.vimeo.com/video/' + j.vimeo[1] + i + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'; else if (j.dailymotion) i = "?wmode=opaque&autoplay=" + h + "&api=postMessage", this.core.s.dailymotionPlayerParams && (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)), g = '<iframe class="lg-video-object lg-dailymotion ' + c + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + j.dailymotion[1] + i + '" frameborder="0" allowfullscreen></iframe>'; else if (j.html5) {
                var k = f.substring(0, 1);
                "." !== k && "#" !== k || (f = a(f).html()), g = f
            } else j.vk && (i = "&autoplay=" + h, this.core.s.vkPlayerParams && (i = i + "&" + a.param(this.core.s.vkPlayerParams)), g = '<iframe class="lg-video-object lg-vk ' + c + '" width="560" height="315" src="//vk.com/video_ext.php?' + j.vk[1] + i + '" frameborder="0" allowfullscreen></iframe>');
            return g
        }, f.prototype.loadVideoOnclick = function (a) {
            var b = this;
            if (a.find(".lg-object").hasClass("lg-has-poster") && a.find(".lg-object").is(":visible")) if (a.hasClass("lg-has-video")) {
                var c = a.find(".lg-youtube").get(0), d = a.find(".lg-vimeo").get(0),
                    e = a.find(".lg-dailymotion").get(0), f = a.find(".lg-html5").get(0);
                if (c) c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*"); else if (d) try {
                    $f(d).api("play")
                } catch (a) {
                    console.error("Make sure you have included froogaloop2 js")
                } else if (e) e.contentWindow.postMessage("play", "*"); else if (f) if (b.core.s.videojs) try {
                    videojs(f).play()
                } catch (a) {
                    console.error("Make sure you have included videojs")
                } else f.play();
                a.addClass("lg-video-playing")
            } else {
                a.addClass("lg-video-playing lg-has-video");
                var g, h, i = function (c, d) {
                    if (a.find(".lg-video").append(b.loadVideo(c, "", !1, b.core.index, d)), d) if (b.core.s.videojs) try {
                        videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0), b.core.s.videojsOptions, function () {
                            this.play()
                        })
                    } catch (a) {
                        console.error("Make sure you have included videojs")
                    } else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()
                };
                b.core.s.dynamic ? (g = b.core.s.dynamicEl[b.core.index].src, h = b.core.s.dynamicEl[b.core.index].html, i(g, h)) : (g = b.core.$items.eq(b.core.index).attr("href") || b.core.$items.eq(b.core.index).attr("data-src"), h = b.core.$items.eq(b.core.index).attr("data-html"), i(g, h));
                var j = a.find(".lg-object");
                a.find(".lg-video").append(j), a.find(".lg-video-object").hasClass("lg-html5") || (a.removeClass("lg-complete"), a.find(".lg-video-object").on("load.lg error.lg", function () {
                    a.addClass("lg-complete")
                }))
            }
        }, f.prototype.destroy = function () {
            this.videoLoaded = !1
        }, a.fn.lightGallery.modules.video = f
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function (a) {
    !function () {
        "use strict";
        var b = function () {
            var a = !1, b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return b && parseInt(b[2], 10) < 54 && (a = !0), a
        }, c = {scale: 1, zoom: !0, actualSize: !0, enableZoomAfter: 300, useLeftForZoom: b()}, d = function (b) {
            return this.core = a(b).data("lightGallery"), this.core.s = a.extend({}, c, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()), this
        };
        d.prototype.init = function () {
            var b = this,
                c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
            b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'), b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(c), b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
                var f = b.core.s.enableZoomAfter + e;
                a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"), b.zoomabletimeout = setTimeout(function () {
                    b.core.$slide.eq(d).addClass("lg-zoomable")
                }, f + 30)
            });
            var d = 1, e = function (c) {
                var d, e, f = b.core.$outer.find(".lg-current .lg-image"),
                    g = (a(window).width() - f.prop("offsetWidth")) / 2,
                    h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
                d = b.pageX - g, e = b.pageY - h;
                var i = (c - 1) * d, j = (c - 1) * e;
                f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c), b.core.s.useLeftForZoom ? f.parent().css({
                    left: -i + "px",
                    top: -j + "px"
                }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
            }, f = function () {
                d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(), d < 1 && (d = 1), e(d)
            }, g = function (c, e, g, h) {
                var i, j = e.prop("offsetWidth");
                i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
                var k;
                b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j, d = k || 2), h ? (b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX, b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY), f(), setTimeout(function () {
                    b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 10)
            }, h = !1;
            b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
                var d = b.core.$slide.eq(c).find(".lg-image");
                d.on("dblclick", function (a) {
                    g(a, d, c)
                }), d.on("touchstart", function (a) {
                    h ? (clearTimeout(h), h = null, g(a, d, c)) : h = setTimeout(function () {
                        h = null
                    }, 300), a.preventDefault()
                })
            }), a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function () {
                b.pageX = a(window).width() / 2, b.pageY = a(window).height() / 2 + a(window).scrollTop(), e(d)
            }), a("#lg-zoom-out").on("click.lg", function () {
                b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale, f())
            }), a("#lg-zoom-in").on("click.lg", function () {
                b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale, f())
            }), a("#lg-actual-size").on("click.lg", function (a) {
                g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
            }), b.core.$el.on("onBeforeSlide.lg.tm", function () {
                d = 1, b.resetZoom()
            }), b.zoomDrag(), b.zoomSwipe()
        }, d.prototype.resetZoom = function () {
            this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = a(window).width() / 2, this.pageY = a(window).height() / 2 + a(window).scrollTop()
        }, d.prototype.zoomSwipe = function () {
            var a = this, b = {}, c = {}, d = !1, e = !1, f = !1;
            a.core.$slide.on("touchstart.lg", function (c) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                    f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(), e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(), (e || f) && (c.preventDefault(), b = {
                        x: c.originalEvent.targetTouches[0].pageX,
                        y: c.originalEvent.targetTouches[0].pageY
                    })
                }
            }), a.core.$slide.on("touchmove.lg", function (g) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                    g.preventDefault(), d = !0, c = {
                        x: g.originalEvent.targetTouches[0].pageX,
                        y: g.originalEvent.targetTouches[0].pageY
                    }, a.core.$outer.addClass("lg-zoom-dragging"), i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")), h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")), (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({
                        left: h + "px",
                        top: i + "px"
                    }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
                }
            }), a.core.$slide.on("touchend.lg", function () {
                a.core.$outer.hasClass("lg-zoomed") && d && (d = !1, a.core.$outer.removeClass("lg-zoom-dragging"), a.touchendZoom(b, c, e, f))
            })
        }, d.prototype.zoomDrag = function () {
            var b = this, c = {}, d = {}, e = !1, f = !1, g = !1, h = !1;
            b.core.$slide.on("mousedown.lg.zoom", function (d) {
                var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(), g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(), b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(), c = {
                    x: d.pageX,
                    y: d.pageY
                }, e = !0, b.core.$outer.scrollLeft += 1, b.core.$outer.scrollLeft -= 1, b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
            }), a(window).on("mousemove.lg.zoom", function (a) {
                if (e) {
                    var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                    f = !0, d = {
                        x: a.pageX,
                        y: a.pageY
                    }, b.core.$outer.addClass("lg-zoom-dragging"), j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")), i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")), b.core.s.useLeftForZoom ? k.css({
                        left: i + "px",
                        top: j + "px"
                    }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
                }
            }), a(window).on("mouseup.lg.zoom", function (a) {
                e && (e = !1, b.core.$outer.removeClass("lg-zoom-dragging"), !f || c.x === d.x && c.y === d.y || (d = {
                    x: a.pageX,
                    y: a.pageY
                }, b.touchendZoom(c, d, g, h)), f = !1), b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
            })
        }, d.prototype.touchendZoom = function (a, b, c, d) {
            var e = this, f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
                g = e.core.$slide.eq(e.core.index).find(".lg-object"), h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
                i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
                j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
                k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j),
                l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
                m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
            (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)), c && (h <= -m ? h = -m : h >= -l && (h = -l)), d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")), c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")), e.core.s.useLeftForZoom ? f.css({
                left: h + "px",
                top: i + "px"
            }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }, d.prototype.destroy = function () {
            var b = this;
            b.core.$el.off(".lg.zoom"), a(window).off(".lg.zoom"), b.core.$slide.off(".lg.zoom"), b.core.$el.off(".lg.tm.zoom"), b.resetZoom(), clearTimeout(b.zoomabletimeout), b.zoomabletimeout = !1
        }, a.fn.lightGallery.modules.zoom = d
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function (a) {
    !function () {
        "use strict";
        var b = {hash: !0}, c = function (c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
        };
        c.prototype.init = function () {
            var b, c = this;
            c.core.$el.on("onAfterSlide.lg.tm", function (a, b, d) {
                history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + c.core.s.galleryId + "&slide=" + d) : window.location.hash = "lg=" + c.core.s.galleryId + "&slide=" + d
            }), a(window).on("hashchange.lg.hash", function () {
                b = window.location.hash;
                var a = parseInt(b.split("&slide=")[1], 10);
                b.indexOf("lg=" + c.core.s.galleryId) > -1 ? c.core.slide(a, !1, !1) : c.core.lGalleryOn && c.core.destroy()
            })
        }, c.prototype.destroy = function () {
            this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
        }, a.fn.lightGallery.modules.hash = c
    }()
}), function (a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function (a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(0, function (a) {
    !function () {
        "use strict";
        var b = {
            share: !0,
            facebook: !0,
            facebookDropdownText: "Facebook",
            twitter: !0,
            twitterDropdownText: "Twitter",
            googlePlus: !0,
            googlePlusDropdownText: "GooglePlus",
            pinterest: !0,
            pinterestDropdownText: "Pinterest"
        }, c = function (c) {
            return this.core = a(c).data("lightGallery"), this.core.s = a.extend({}, b, this.core.s), this.core.s.share && this.init(), this
        };
        c.prototype.init = function () {
            var b = this,
                c = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
            c += b.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", c += b.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", c += b.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", c += b.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", c += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(c), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), a("#lg-share").on("click.lg", function () {
                b.core.$outer.toggleClass("lg-dropdown-active")
            }), a("#lg-dropdown-overlay").on("click.lg", function () {
                b.core.$outer.removeClass("lg-dropdown-active")
            }), b.core.$el.on("onAfterSlide.lg.tm", function (c, d, e) {
                setTimeout(function () {
                    a("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(b.getSahreProps(e, "facebookShareUrl") || window.location.href)), a("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + b.getSahreProps(e, "tweetText") + "&url=" + encodeURIComponent(b.getSahreProps(e, "twitterShareUrl") || window.location.href)), a("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(b.getSahreProps(e, "googleplusShareUrl") || window.location.href)), a("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(b.getSahreProps(e, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(b.getSahreProps(e, "src")) + "&description=" + b.getSahreProps(e, "pinterestText"))
                }, 100)
            })
        }, c.prototype.getSahreProps = function (a, b) {
            var c = "";
            if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b]; else {
                var d = this.core.$items.eq(a).attr("href"), e = this.core.$items.eq(a).data(b);
                c = "src" === b ? d || e : e
            }
            return c
        }, c.prototype.destroy = function () {
        }, a.fn.lightGallery.modules.share = c
    }()
});
if (typeof jQuery != 'undefined') {
    $ = jQuery;
}

function run_lightgallery() {
    var matching = new RegExp("\[.](?:gif|png|jpg|jpeg|webp)($|[?])"), image_popup = false;
    $(".nc-light-gallery a").each(function () {
        if (matching.test($(this).attr('href')) && $(this).children('img').length == 1) {
            $(this).addClass('nc-light-gallery-item');
            image_popup = true;
        }
    });
    if (image_popup) {
        $('.nc-light-gallery').lightGallery({
            selector: '.nc-light-gallery-item',
            share: false,
            exThumbImage: 'href'
        });
    }
}

$(document).ready(function () {
    run_lightgallery();
});
;(function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
;(function () {
    function ajaxEventTrigger(event) {
        var ajaxEvent = new CustomEvent(event, {detail: this});
        window.dispatchEvent(ajaxEvent);
    }

    var oldXHR = window.XMLHttpRequest;

    function newXHR() {
        var realXHR = new oldXHR();
        realXHR.addEventListener('abort', function () {
            ajaxEventTrigger.call(this, 'ajaxAbort');
        }, false);
        realXHR.addEventListener('error', function () {
            ajaxEventTrigger.call(this, 'ajaxError');
        }, false);
        realXHR.addEventListener('load', function () {
            ajaxEventTrigger.call(this, 'ajaxLoad');
        }, false);
        realXHR.addEventListener('loadstart', function () {
            ajaxEventTrigger.call(this, 'ajaxLoadStart');
        }, false);
        realXHR.addEventListener('progress', function () {
            ajaxEventTrigger.call(this, 'ajaxProgress');
        }, false);
        realXHR.addEventListener('timeout', function () {
            ajaxEventTrigger.call(this, 'ajaxTimeout');
        }, false);
        realXHR.addEventListener('loadend', function () {
            ajaxEventTrigger.call(this, 'ajaxLoadEnd');
        }, false);
        realXHR.addEventListener('readystatechange', function () {
            ajaxEventTrigger.call(this, 'ajaxReadyStateChange');
        }, false);
        return realXHR;
    }

    window.XMLHttpRequest = newXHR;
})();
window.addEventListener('ajaxLoadEnd', function (e) {
    run_lightgallery();
});
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }

    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (b) {
            var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        }, getPageHeight: function (b) {
            return a(b).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    a.fn.extend({
        mousewheel: function (a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        }, unmousewheel: function (a) {
            return this.unbind("mousewheel", a)
        }
    })
});
var CanvasImage = function (a) {
    this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), document.body.appendChild(this.canvas), this.width = this.canvas.width = a.width, this.height = this.canvas.height = a.height, this.context.drawImage(a, 0, 0, this.width, this.height)
};
CanvasImage.prototype.clear = function () {
    this.context.clearRect(0, 0, this.width, this.height)
}, CanvasImage.prototype.update = function (a) {
    this.context.putImageData(a, 0, 0)
}, CanvasImage.prototype.getPixelCount = function () {
    return this.width * this.height
}, CanvasImage.prototype.getImageData = function () {
    return this.context.getImageData(0, 0, this.width, this.height)
}, CanvasImage.prototype.removeCanvas = function () {
    this.canvas.parentNode.removeChild(this.canvas)
};
var ColorThief = function () {
};
if (ColorThief.prototype.getColor = function (a, b) {
    var c = this.getPalette(a, 5, b), d = c[0];
    return d
}, ColorThief.prototype.getPalette = function (c, d, e) {
    ("undefined" == typeof d || 2 > d || 256 < d) && (d = 10), ("undefined" == typeof e || 1 > e) && (e = 10);
    for (var f, h, j, k, l, m = new CanvasImage(c), n = m.getImageData(), o = n.data, p = m.getPixelCount(), q = [], s = 0; s < p; s += e) f = 4 * s, h = o[f + 0], j = o[f + 1], k = o[f + 2], l = o[f + 3], 125 <= l && !(250 < h && 250 < j && 250 < k) && q.push([h, j, k]);
    var t = MMCQ.quantize(q, d), u = t ? t.palette() : null;
    return m.removeCanvas(), u
}, ColorThief.prototype.getColorFromUrl = function (a, b, c) {
    sourceImage = document.createElement("img");
    var d = this;
    sourceImage.addEventListener("load", function () {
        var e = d.getPalette(sourceImage, 5, c), f = e[0];
        b(f, a)
    }), sourceImage.src = a
}, ColorThief.prototype.getImageData = function (a, b) {
    xhr = new XMLHttpRequest, xhr.open("GET", a, !0), xhr.responseType = "arraybuffer", xhr.onload = function () {
        if (200 == this.status) {
            uInt8Array = new Uint8Array(this.response), a = uInt8Array.length, binaryString = Array(a);
            for (var a = 0; a < uInt8Array.length; a++) binaryString[a] = String.fromCharCode(uInt8Array[a]);
            data = binaryString.join(""), base64 = window.btoa(data), b("data:image/png;base64," + base64)
        }
    }, xhr.send()
}, ColorThief.prototype.getColorAsync = function (a, b, c) {
    var d = this;
    this.getImageData(a, function (a) {
        sourceImage = document.createElement("img"), sourceImage.addEventListener("load", function () {
            var a = d.getPalette(sourceImage, 5, c), e = a[0];
            b(e, this)
        }), sourceImage.src = a
    })
}, !pv) var pv = {
    map: function (a, b) {
        var c = {};
        return b ? a.map(function (a, d) {
            return c.index = d, b.call(c, a)
        }) : a.slice()
    }, naturalOrder: function (c, a) {
        return c < a ? -1 : c > a ? 1 : 0
    }, sum: function (a, b) {
        var c = {};
        return a.reduce(b ? function (a, e, d) {
            return c.index = d, a + b.call(c, e)
        } : function (a, b) {
            return a + b
        }, 0)
    }, max: function (a, b) {
        return Math.max.apply(null, b ? pv.map(a, b) : a)
    }
};
var MMCQ = function () {
    function a(a, c, d) {
        return (a << 10) + (c << 5) + d
    }

    function b(a) {
        function b() {
            c.sort(a), d = !0
        }

        var c = [], d = !1;
        return {
            push: function (a) {
                c.push(a), d = !1
            }, peek: function (a) {
                return d || b(), void 0 === a && (a = c.length - 1), c[a]
            }, pop: function () {
                return d || b(), c.pop()
            }, size: function () {
                return c.length
            }, map: function (a) {
                return c.map(a)
            }, debug: function () {
                return d || b(), c
            }
        }
    }

    function c(a, b, c, d, e, f, g) {
        var h = this;
        h.r1 = a, h.r2 = b, h.g1 = c, h.g2 = d, h.b1 = e, h.b2 = f, h.histo = g
    }

    function d() {
        this.vboxes = new b(function (c, a) {
            return pv.naturalOrder(c.vbox.count() * c.vbox.volume(), a.vbox.count() * a.vbox.volume())
        })
    }

    function e(b) {
        var c, d, e, f, g = Array(32768);
        return b.forEach(function (b) {
            d = b[0] >> 3, e = b[1] >> 3, f = b[2] >> 3, c = a(d, e, f), g[c] = (g[c] || 0) + 1
        }), g
    }

    function f(a, b) {
        var d, e, f, g = 1e6, h = 0, i = 1e6, j = 0, k = 1e6, l = 0;
        return a.forEach(function (a) {
            d = a[0] >> 3, e = a[1] >> 3, f = a[2] >> 3, d < g ? g = d : d > h && (h = d), e < i ? i = e : e > j && (j = e), f < k ? k = f : f > l && (l = f)
        }), new c(g, h, i, j, k, l, b)
    }

    function g(b, c) {
        function d(a) {
            var b, d, e, f, g, h = a + "1", i = a + "2", j = 0;
            for (l = c[h]; l <= c[i]; l++) if (r[l] > q / 2) {
                for (e = c.copy(), f = c.copy(), b = l - c[h], d = c[i] - l, g = b <= d ? Math.min(c[i] - 1, ~~(l + d / 2)) : Math.max(c[h], ~~(l - 1 - b / 2)); !r[g];) g++;
                for (j = s[g]; !j && r[g - 1];) j = s[--g];
                return e[i] = g, f[h] = e[i] + 1, [e, f]
            }
        }

        if (c.count()) {
            var e = c.r2 - c.r1 + 1, f = c.g2 - c.g1 + 1, g = c.b2 - c.b1 + 1, h = pv.max([e, f, g]);
            if (1 == c.count()) return [c.copy()];
            var l, m, n, o, p, q = 0, r = [], s = [];
            if (h == e) for (l = c.r1; l <= c.r2; l++) {
                for (o = 0, m = c.g1; m <= c.g2; m++) for (n = c.b1; n <= c.b2; n++) p = a(l, m, n), o += b[p] || 0;
                q += o, r[l] = q
            } else if (h == f) for (l = c.g1; l <= c.g2; l++) {
                for (o = 0, m = c.r1; m <= c.r2; m++) for (n = c.b1; n <= c.b2; n++) p = a(m, l, n), o += b[p] || 0;
                q += o, r[l] = q
            } else for (l = c.b1; l <= c.b2; l++) {
                for (o = 0, m = c.r1; m <= c.r2; m++) for (n = c.g1; n <= c.g2; n++) p = a(m, n, l), o += b[p] || 0;
                q += o, r[l] = q
            }
            return r.forEach(function (a, b) {
                s[b] = q - a
            }), h == e ? d("r") : h == f ? d("g") : d("b")
        }
    }

    return c.prototype = {
        volume: function (a) {
            var b = this;
            return (!b._volume || a) && (b._volume = (b.r2 - b.r1 + 1) * (b.g2 - b.g1 + 1) * (b.b2 - b.b1 + 1)), b._volume
        }, count: function (b) {
            var c = this, d = c.histo;
            if (!c._count_set || b) {
                var e, f, g, h, l = 0;
                for (f = c.r1; f <= c.r2; f++) for (g = c.g1; g <= c.g2; g++) for (h = c.b1; h <= c.b2; h++) e = a(f, g, h), l += d[e] || 0;
                c._count = l, c._count_set = !0
            }
            return c._count
        }, copy: function () {
            var a = this;
            return new c(a.r1, a.r2, a.g1, a.g2, a.b1, a.b2, a.histo)
        }, avg: function (b) {
            var c = this, d = c.histo;
            if (!c._avg || b) {
                var e, f, g, h, l, m = 0, n = 0, o = 0, p = 0;
                for (f = c.r1; f <= c.r2; f++) for (g = c.g1; g <= c.g2; g++) for (h = c.b1; h <= c.b2; h++) l = a(f, g, h), e = d[l] || 0, m += e, n += 8 * (e * (f + .5)), o += 8 * (e * (g + .5)), p += 8 * (e * (h + .5));
                c._avg = m ? [~~(n / m), ~~(o / m), ~~(p / m)] : [~~(8 * (c.r1 + c.r2 + 1) / 2), ~~(8 * (c.g1 + c.g2 + 1) / 2), ~~(8 * (c.b1 + c.b2 + 1) / 2)]
            }
            return c._avg
        }, contains: function (a) {
            var b = this, c = a[0] >> 3;
            return gval = a[1] >> 3, bval = a[2] >> 3, c >= b.r1 && c <= b.r2 && gval >= b.g1 && gval <= b.g2 && bval >= b.b1 && bval <= b.b2
        }
    }, d.prototype = {
        push: function (a) {
            this.vboxes.push({vbox: a, color: a.avg()})
        }, palette: function () {
            return this.vboxes.map(function (a) {
                return a.color
            })
        }, size: function () {
            return this.vboxes.size()
        }, map: function (a) {
            for (var b = this.vboxes, c = 0; c < b.size(); c++) if (b.peek(c).vbox.contains(a)) return b.peek(c).color;
            return this.nearest(a)
        }, nearest: function (a) {
            for (var b, c, d, e = this.vboxes, f = 0; f < e.size(); f++) c = Math.sqrt(Math.pow(a[0] - e.peek(f).color[0], 2) + Math.pow(a[1] - e.peek(f).color[1], 2) + Math.pow(a[2] - e.peek(f).color[2], 2)), (c < b || void 0 === b) && (b = c, d = e.peek(f).color);
            return d
        }, forcebw: function () {
            var a = this.vboxes;
            a.sort(function (c, a) {
                return pv.naturalOrder(pv.sum(c.color), pv.sum(a.color))
            });
            var b = a[0].color;
            5 > b[0] && 5 > b[1] && 5 > b[2] && (a[0].color = [0, 0, 0]);
            var c = a.length - 1, d = a[c].color;
            251 < d[0] && 251 < d[1] && 251 < d[2] && (a[c].color = [255, 255, 255])
        }
    }, {
        quantize: function (a, c) {
            function h(a, b) {
                for (var c, d = 1, e = 0; 1000 > e;) {
                    if (c = a.pop(), !c.count()) {
                        a.push(c), e++;
                        continue
                    }
                    var f = g(i, c), h = f[0], j = f[1];
                    if (!h) return;
                    if (a.push(h), j && (a.push(j), d++), d >= b) return;
                    if (1000 < e++) return
                }
            }

            if (!a.length || 2 > c || 256 < c) return !1;
            var i = e(a), j = 0;
            i.forEach(function () {
                j++
            }), j <= c;
            var k = f(a, i), l = new b(function (c, a) {
                return pv.naturalOrder(c.count(), a.count())
            });
            l.push(k), h(l, .75 * c);
            for (var m = new b(function (c, a) {
                return pv.naturalOrder(c.count() * c.volume(), a.count() * a.volume())
            }); l.size();) m.push(l.pop());
            h(m, c - m.size());
            for (var n = new d; m.size();) n.push(m.pop());
            return n
        }
    }
}();
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 * @license
 */
if (ColorThief.prototype.getColor = function (a, b) {
    var c = this.getPalette(a, 5, b), d = c[0];
    return d
}, ColorThief.prototype.getPalette = function (a, b, c) {
    "undefined" == typeof b && (b = 10), ("undefined" == typeof c || c < 1) && (c = 10);
    for (var d, e, f, g, h, i = new CanvasImage(a), j = i.getImageData(), k = j.data, l = i.getPixelCount(), m = [], n = 0; n < l; n += c) d = 4 * n, e = k[d + 0], f = k[d + 1], g = k[d + 2], h = k[d + 3], h >= 125 && (e > 250 && f > 250 && g > 250 || m.push([e, f, g]));
    var o = MMCQ.quantize(m, b), p = o ? o.palette() : null;
    return i.removeCanvas(), p
}, !pv) var pv = {
    map: function (a, b) {
        var c = {};
        return b ? a.map(function (a, d) {
            return c.index = d, b.call(c, a)
        }) : a.slice()
    }, naturalOrder: function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }, sum: function (a, b) {
        var c = {};
        return a.reduce(b ? function (a, d, e) {
            return c.index = e, a + b.call(c, d)
        } : function (a, b) {
            return a + b
        }, 0)
    }, max: function (a, b) {
        return Math.max.apply(null, b ? pv.map(a, b) : a)
    }
};
var MMCQ = function () {
    function a(a, b, c) {
        return (a << 2 * i) + (b << i) + c
    }

    function b(a) {
        function b() {
            c.sort(a), d = !0
        }

        var c = [], d = !1;
        return {
            push: function (a) {
                c.push(a), d = !1
            }, peek: function (a) {
                return d || b(), void 0 === a && (a = c.length - 1), c[a]
            }, pop: function () {
                return d || b(), c.pop()
            }, size: function () {
                return c.length
            }, map: function (a) {
                return c.map(a)
            }, debug: function () {
                return d || b(), c
            }
        }
    }

    function c(a, b, c, d, e, f, g) {
        var h = this;
        h.r1 = a, h.r2 = b, h.g1 = c, h.g2 = d, h.b1 = e, h.b2 = f, h.histo = g
    }

    function d() {
        this.vboxes = new b(function (a, b) {
            return pv.naturalOrder(a.vbox.count() * a.vbox.volume(), b.vbox.count() * b.vbox.volume())
        })
    }

    function e(b) {
        var c, d, e, f, g = 1 << 3 * i, h = new Array(g);
        return b.forEach(function (b) {
            d = b[0] >> j, e = b[1] >> j, f = b[2] >> j, c = a(d, e, f), h[c] = (h[c] || 0) + 1
        }), h
    }

    function f(a, b) {
        var d, e, f, g = 1e6, h = 0, i = 1e6, k = 0, l = 1e6, m = 0;
        return a.forEach(function (a) {
            d = a[0] >> j, e = a[1] >> j, f = a[2] >> j, d < g ? g = d : d > h && (h = d), e < i ? i = e : e > k && (k = e), f < l ? l = f : f > m && (m = f)
        }), new c(g, h, i, k, l, m, b)
    }

    function g(b, c) {
        function d(a) {
            var b, d, e, f, g, h = a + "1", j = a + "2", k = 0;
            for (i = c[h]; i <= c[j]; i++) if (o[i] > n / 2) {
                for (e = c.copy(), f = c.copy(), b = i - c[h], d = c[j] - i, g = b <= d ? Math.min(c[j] - 1, ~~(i + d / 2)) : Math.max(c[h], ~~(i - 1 - b / 2)); !o[g];) g++;
                for (k = p[g]; !k && o[g - 1];) k = p[--g];
                return e[j] = g, f[h] = e[j] + 1, [e, f]
            }
        }

        if (c.count()) {
            var e = c.r2 - c.r1 + 1, f = c.g2 - c.g1 + 1, g = c.b2 - c.b1 + 1, h = pv.max([e, f, g]);
            if (1 == c.count()) return [c.copy()];
            var i, j, k, l, m, n = 0, o = [], p = [];
            if (h == e) for (i = c.r1; i <= c.r2; i++) {
                for (l = 0, j = c.g1; j <= c.g2; j++) for (k = c.b1; k <= c.b2; k++) m = a(i, j, k), l += b[m] || 0;
                n += l, o[i] = n
            } else if (h == f) for (i = c.g1; i <= c.g2; i++) {
                for (l = 0, j = c.r1; j <= c.r2; j++) for (k = c.b1; k <= c.b2; k++) m = a(j, i, k), l += b[m] || 0;
                n += l, o[i] = n
            } else for (i = c.b1; i <= c.b2; i++) {
                for (l = 0, j = c.r1; j <= c.r2; j++) for (k = c.g1; k <= c.g2; k++) m = a(j, k, i), l += b[m] || 0;
                n += l, o[i] = n
            }
            return o.forEach(function (a, b) {
                p[b] = n - a
            }), d(h == e ? "r" : h == f ? "g" : "b")
        }
    }

    function h(a, c) {
        function h(a, b) {
            for (var c, d = 1, e = 0; e < k;) if (c = a.pop(), c.count()) {
                var f = g(i, c), h = f[0], j = f[1];
                if (!h) return;
                if (a.push(h), j && (a.push(j), d++), d >= b) return;
                if (e++ > k) return
            } else a.push(c), e++
        }

        if (!a.length || c < 2 || c > 256) return !1;
        var i = e(a), j = 0;
        i.forEach(function () {
            j++
        });
        var m = f(a, i), n = new b(function (a, b) {
            return pv.naturalOrder(a.count(), b.count())
        });
        n.push(m), h(n, l * c);
        for (var o = new b(function (a, b) {
            return pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume())
        }); n.size();) o.push(n.pop());
        h(o, c - o.size());
        for (var p = new d; o.size();) p.push(o.pop());
        return p
    }

    var i = 5, j = 8 - i, k = 1e3, l = .75;
    return c.prototype = {
        volume: function (a) {
            var b = this;
            return b._volume && !a || (b._volume = (b.r2 - b.r1 + 1) * (b.g2 - b.g1 + 1) * (b.b2 - b.b1 + 1)), b._volume
        }, count: function (b) {
            var c = this, d = c.histo;
            if (!c._count_set || b) {
                var e, f, g, h = 0;
                for (e = c.r1; e <= c.r2; e++) for (f = c.g1; f <= c.g2; f++) for (g = c.b1; g <= c.b2; g++) index = a(e, f, g), h += d[index] || 0;
                c._count = h, c._count_set = !0
            }
            return c._count
        }, copy: function () {
            var a = this;
            return new c(a.r1, a.r2, a.g1, a.g2, a.b1, a.b2, a.histo)
        }, avg: function (b) {
            var c = this, d = c.histo;
            if (!c._avg || b) {
                var e, f, g, h, j, k = 0, l = 1 << 8 - i, m = 0, n = 0, o = 0;
                for (f = c.r1; f <= c.r2; f++) for (g = c.g1; g <= c.g2; g++) for (h = c.b1; h <= c.b2; h++) j = a(f, g, h), e = d[j] || 0, k += e, m += e * (f + .5) * l, n += e * (g + .5) * l, o += e * (h + .5) * l;
                k ? c._avg = [~~(m / k), ~~(n / k), ~~(o / k)] : c._avg = [~~(l * (c.r1 + c.r2 + 1) / 2), ~~(l * (c.g1 + c.g2 + 1) / 2), ~~(l * (c.b1 + c.b2 + 1) / 2)]
            }
            return c._avg
        }, contains: function (a) {
            var b = this, c = a[0] >> j;
            return gval = a[1] >> j, bval = a[2] >> j, c >= b.r1 && c <= b.r2 && gval >= b.g1 && gval <= b.g2 && bval >= b.b1 && bval <= b.b2
        }
    }, d.prototype = {
        push: function (a) {
            this.vboxes.push({vbox: a, color: a.avg()})
        }, palette: function () {
            return this.vboxes.map(function (a) {
                return a.color
            })
        }, size: function () {
            return this.vboxes.size()
        }, map: function (a) {
            for (var b = this.vboxes, c = 0; c < b.size(); c++) if (b.peek(c).vbox.contains(a)) return b.peek(c).color;
            return this.nearest(a)
        }, nearest: function (a) {
            for (var b, c, d, e = this.vboxes, f = 0; f < e.size(); f++) c = Math.sqrt(Math.pow(a[0] - e.peek(f).color[0], 2) + Math.pow(a[1] - e.peek(f).color[1], 2) + Math.pow(a[2] - e.peek(f).color[2], 2)), (c < b || void 0 === b) && (b = c, d = e.peek(f).color);
            return d
        }, forcebw: function () {
            var a = this.vboxes;
            a.sort(function (a, b) {
                return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color))
            });
            var b = a[0].color;
            b[0] < 5 && b[1] < 5 && b[2] < 5 && (a[0].color = [0, 0, 0]);
            var c = a.length - 1, d = a[c].color;
            d[0] > 251 && d[1] > 251 && d[2] > 251 && (a[c].color = [255, 255, 255])
        }
    }, {quantize: h}
}();
if (typeof jQuery != 'undefined') {
    var $ = jQuery.noConflict();
}
$(document).on('click', '#btn-bigger-cover', function (event) {
    event.preventDefault();
    var that = $(this);
    if (that.hasClass('loading')) {
        return false;
    }
    that.addClass('loading');
    var id = that.data('id');
    $.ajax({
        url: globals.ajax_url,
        type: 'POST',
        dataType: 'json',
        data: {action: 'create-bigger-image', id: id},
    }).done(function (data) {
        if (data.status == 200) {
            var popup = ncPopup('cover', data.html, 'background:rgba(0,0,0,0.5);');
            var colorThief = new ColorThief();
            colorThief.getColorAsync(data.head_image, function (color, element) {
                var colors = colorThief.getPalette(element, 1);
                var mainColor = 'rgba(' + colors[0][0] + ', ' + colors[0][1] + ', ' + colors[0][2] + ', .3)';
                var style = {backgroundColor: mainColor, 'background': +mainColor}
                popup.find('.nice-tips-overlay').css(style);
            });
            $('[data-toggle="tooltip"]').tooltip();
        } else {
            ncPopupTips(0, data.msg);
        }
        that.removeClass('loading');
    }).fail(function () {
        ncPopupTips(0, '网络错误，请稍后再试');
        that.removeClass('loading');
    });
});
/*!
  * Bootstrap v5.0.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function () {
    "use strict";

    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function e(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }

    function n() {
        return (n = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }

    var o, r, s = function (t) {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        }, a = function (t) {
            var e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : null
            }
            return e
        }, l = function (t) {
            var e = a(t);
            return e && document.querySelector(e) ? e : null
        }, c = function (t) {
            var e = a(t);
            return e ? document.querySelector(e) : null
        }, u = function (t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t), n = e.transitionDuration, i = e.transitionDelay, o = Number.parseFloat(n),
                r = Number.parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(n) + Number.parseFloat(i))) : 0
        }, f = function (t) {
            t.dispatchEvent(new Event("transitionend"))
        }, d = function (t) {
            return (t[0] || t).nodeType
        }, h = function (t, e) {
            var n = !1, i = e + 5;
            t.addEventListener("transitionend", (function e() {
                n = !0, t.removeEventListener("transitionend", e)
            })), setTimeout((function () {
                n || f(t)
            }), i)
        }, p = function (t, e, n) {
            Object.keys(n).forEach((function (i) {
                var o, r = n[i], s = e[i],
                    a = s && d(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
            }))
        }, g = function (t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t), n = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
            }
            return !1
        }, m = function () {
            return function () {
            }
        }, v = function (t) {
            return t.offsetHeight
        }, _ = function () {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
        }, b = function (t) {
            "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t()
        }, y = "rtl" === document.documentElement.dir, w = (o = {}, r = 1, {
            set: function (t, e, n) {
                void 0 === t.bsKey && (t.bsKey = {key: e, id: r}, r++), o[t.bsKey.id] = n
            }, get: function (t, e) {
                if (!t || void 0 === t.bsKey) return null;
                var n = t.bsKey;
                return n.key === e ? o[n.id] : null
            }, delete: function (t, e) {
                if (void 0 !== t.bsKey) {
                    var n = t.bsKey;
                    n.key === e && (delete o[n.id], delete t.bsKey)
                }
            }
        }), E = function (t, e, n) {
            w.set(t, e, n)
        }, T = function (t, e) {
            return w.get(t, e)
        }, k = function (t, e) {
            w.delete(t, e)
        }, O = /[^.]*(?=\..*)\.|.*/, L = /\..*/, A = /::\d+$/, C = {}, D = 1,
        x = {mouseenter: "mouseover", mouseleave: "mouseout"},
        S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function j(t, e) {
        return e && e + "::" + D++ || t.uidEvent || D++
    }

    function N(t) {
        var e = j(t);
        return t.uidEvent = e, C[e] = C[e] || {}, C[e]
    }

    function I(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
            var s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n) return s
        }
        return null
    }

    function P(t, e, n) {
        var i = "string" == typeof e, o = i ? n : e, r = t.replace(L, ""), s = x[r];
        return s && (r = s), S.has(r) || (r = t), [i, o, r]
    }

    function M(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var r = P(e, n, i), s = r[0], a = r[1], l = r[2], c = N(t), u = c[l] || (c[l] = {}),
                f = I(u, a, s ? n : null);
            if (f) f.oneOff = f.oneOff && o; else {
                var d = j(a, e.replace(O, "")), h = s ? function (t, e, n) {
                    return function i(o) {
                        for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode) for (var a = r.length; a--;) if (r[a] === s) return o.delegateTarget = s, i.oneOff && H.off(t, o.type, n), n.apply(s, [o]);
                        return null
                    }
                }(t, n, i) : function (t, e) {
                    return function n(i) {
                        return i.delegateTarget = t, n.oneOff && H.off(t, i.type, e), e.apply(t, [i])
                    }
                }(t, n);
                h.delegationSelector = s ? n : null, h.originalHandler = a, h.oneOff = o, h.uidEvent = d, u[d] = h, t.addEventListener(l, h, s)
            }
        }
    }

    function B(t, e, n, i, o) {
        var r = I(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent])
    }

    var H = {
        on: function (t, e, n, i) {
            M(t, e, n, i, !1)
        }, one: function (t, e, n, i) {
            M(t, e, n, i, !0)
        }, off: function (t, e, n, i) {
            if ("string" == typeof e && t) {
                var o = P(e, n, i), r = o[0], s = o[1], a = o[2], l = a !== e, c = N(t), u = e.startsWith(".");
                if (void 0 === s) {
                    u && Object.keys(c).forEach((function (n) {
                        !function (t, e, n, i) {
                            var o = e[n] || {};
                            Object.keys(o).forEach((function (r) {
                                if (r.includes(i)) {
                                    var s = o[r];
                                    B(t, e, n, s.originalHandler, s.delegationSelector)
                                }
                            }))
                        }(t, c, n, e.slice(1))
                    }));
                    var f = c[a] || {};
                    Object.keys(f).forEach((function (n) {
                        var i = n.replace(A, "");
                        if (!l || e.includes(i)) {
                            var o = f[n];
                            B(t, c, a, o.originalHandler, o.delegationSelector)
                        }
                    }))
                } else {
                    if (!c || !c[a]) return;
                    B(t, c, a, s, r ? n : null)
                }
            }
        }, trigger: function (t, e, n) {
            if ("string" != typeof e || !t) return null;
            var i, o = _(), r = e.replace(L, ""), s = e !== r, a = S.has(r), l = !0, c = !0, u = !1, f = null;
            return s && o && (i = o.Event(e, n), o(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), u = i.isDefaultPrevented()), a ? (f = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : f = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== n && Object.keys(n).forEach((function (t) {
                Object.defineProperty(f, t, {
                    get: function () {
                        return n[t]
                    }
                })
            })), u && f.preventDefault(), c && t.dispatchEvent(f), f.defaultPrevented && void 0 !== i && i.preventDefault(), f
        }
    }, R = function () {
        function t(t) {
            t && (this._element = t, E(t, this.constructor.DATA_KEY, this))
        }

        return t.prototype.dispose = function () {
            k(this._element, this.constructor.DATA_KEY), this._element = null
        }, t.getInstance = function (t) {
            return T(t, this.DATA_KEY)
        }, e(t, null, [{
            key: "VERSION", get: function () {
                return "5.0.0-beta1"
            }
        }]), t
    }(), W = "alert", K = function (t) {
        function n() {
            return t.apply(this, arguments) || this
        }

        i(n, t);
        var o = n.prototype;
        return o.close = function (t) {
            var e = t ? this._getRootElement(t) : this._element, n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e)
        }, o._getRootElement = function (t) {
            return c(t) || t.closest(".alert")
        }, o._triggerCloseEvent = function (t) {
            return H.trigger(t, "close.bs.alert")
        }, o._removeElement = function (t) {
            var e = this;
            if (t.classList.remove("show"), t.classList.contains("fade")) {
                var n = u(t);
                H.one(t, "transitionend", (function () {
                    return e._destroyElement(t)
                })), h(t, n)
            } else this._destroyElement(t)
        }, o._destroyElement = function (t) {
            t.parentNode && t.parentNode.removeChild(t), H.trigger(t, "closed.bs.alert")
        }, n.jQueryInterface = function (t) {
            return this.each((function () {
                var e = T(this, "bs.alert");
                e || (e = new n(this)), "close" === t && e[t](this)
            }))
        }, n.handleDismiss = function (t) {
            return function (e) {
                e && e.preventDefault(), t.close(this)
            }
        }, e(n, null, [{
            key: "DATA_KEY", get: function () {
                return "bs.alert"
            }
        }]), n
    }(R);
    H.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', K.handleDismiss(new K)), b((function () {
        var t = _();
        if (t) {
            var e = t.fn[W];
            t.fn[W] = K.jQueryInterface, t.fn[W].Constructor = K, t.fn[W].noConflict = function () {
                return t.fn[W] = e, K.jQueryInterface
            }
        }
    }));
    var Q = function (t) {
        function n() {
            return t.apply(this, arguments) || this
        }

        return i(n, t), n.prototype.toggle = function () {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }, n.jQueryInterface = function (t) {
            return this.each((function () {
                var e = T(this, "bs.button");
                e || (e = new n(this)), "toggle" === t && e[t]()
            }))
        }, e(n, null, [{
            key: "DATA_KEY", get: function () {
                return "bs.button"
            }
        }]), n
    }(R);

    function U(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function F(t) {
        return t.replace(/[A-Z]/g, (function (t) {
            return "-" + t.toLowerCase()
        }))
    }

    H.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (function (t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]'), n = T(e, "bs.button");
        n || (n = new Q(e)), n.toggle()
    })), b((function () {
        var t = _();
        if (t) {
            var e = t.fn.button;
            t.fn.button = Q.jQueryInterface, t.fn.button.Constructor = Q, t.fn.button.noConflict = function () {
                return t.fn.button = e, Q.jQueryInterface
            }
        }
    }));
    var Y = {
            setDataAttribute: function (t, e, n) {
                t.setAttribute("data-bs-" + F(e), n)
            }, removeDataAttribute: function (t, e) {
                t.removeAttribute("data-bs-" + F(e))
            }, getDataAttributes: function (t) {
                if (!t) return {};
                var e = {};
                return Object.keys(t.dataset).filter((function (t) {
                    return t.startsWith("bs")
                })).forEach((function (n) {
                    var i = n.replace(/^bs/, "");
                    i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = U(t.dataset[n])
                })), e
            }, getDataAttribute: function (t, e) {
                return U(t.getAttribute("data-bs-" + F(e)))
            }, offset: function (t) {
                var e = t.getBoundingClientRect();
                return {top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft}
            }, position: function (t) {
                return {top: t.offsetTop, left: t.offsetLeft}
            }
        }, q = {
            matches: function (t, e) {
                return t.matches(e)
            }, find: function (t, e) {
                var n;
                return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, Element.prototype.querySelectorAll.call(e, t))
            }, findOne: function (t, e) {
                return void 0 === e && (e = document.documentElement), Element.prototype.querySelector.call(e, t)
            }, children: function (t, e) {
                var n, i = (n = []).concat.apply(n, t.children);
                return i.filter((function (t) {
                    return t.matches(e)
                }))
            }, parents: function (t, e) {
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                return n
            }, prev: function (t, e) {
                for (var n = t.previousElementSibling; n;) {
                    if (n.matches(e)) return [n];
                    n = n.previousElementSibling
                }
                return []
            }, next: function (t, e) {
                for (var n = t.nextElementSibling; n;) {
                    if (this.matches(n, e)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }
        }, z = "carousel", V = ".bs.carousel",
        X = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, $ = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, G = {TOUCH: "touch", PEN: "pen"}, Z = function (t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._items = null, i._interval = null, i._activeElement = null, i._isPaused = !1, i._isSliding = !1, i.touchTimeout = null, i.touchStartX = 0, i.touchDeltaX = 0, i._config = i._getConfig(n), i._indicatorsElement = q.findOne(".carousel-indicators", i._element), i._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, i._pointerEvent = Boolean(window.PointerEvent), i._addEventListeners(), i
            }

            i(o, t);
            var r = o.prototype;
            return r.next = function () {
                this._isSliding || this._slide("next")
            }, r.nextWhenVisible = function () {
                !document.hidden && g(this._element) && this.next()
            }, r.prev = function () {
                this._isSliding || this._slide("prev")
            }, r.pause = function (t) {
                t || (this._isPaused = !0), q.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (f(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, r.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, r.to = function (t) {
                var e = this;
                this._activeElement = q.findOne(".active.carousel-item", this._element);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) H.one(this._element, "slid.bs.carousel", (function () {
                    return e.to(t)
                })); else {
                    if (n === t) return this.pause(), void this.cycle();
                    var i = t > n ? "next" : "prev";
                    this._slide(i, this._items[t])
                }
            }, r.dispose = function () {
                t.prototype.dispose.call(this), H.off(this._element, V), this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, r._getConfig = function (t) {
                return t = n({}, X, t), p(z, t, $), t
            }, r._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, r._addEventListeners = function () {
                var t = this;
                this._config.keyboard && H.on(this._element, "keydown.bs.carousel", (function (e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", (function (e) {
                    return t.pause(e)
                })), H.on(this._element, "mouseleave.bs.carousel", (function (e) {
                    return t.cycle(e)
                }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }, r._addTouchEventListeners = function () {
                var t = this, e = function (e) {
                    t._pointerEvent && G[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                }, n = function (e) {
                    t._pointerEvent && G[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                        return t.cycle(e)
                    }), 500 + t._config.interval))
                };
                q.find(".carousel-item img", this._element).forEach((function (t) {
                    H.on(t, "dragstart.bs.carousel", (function (t) {
                        return t.preventDefault()
                    }))
                })), this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", (function (t) {
                    return e(t)
                })), H.on(this._element, "pointerup.bs.carousel", (function (t) {
                    return n(t)
                })), this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", (function (t) {
                    return e(t)
                })), H.on(this._element, "touchmove.bs.carousel", (function (e) {
                    return function (e) {
                        e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                    }(e)
                })), H.on(this._element, "touchend.bs.carousel", (function (t) {
                    return n(t)
                })))
            }, r._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
                    case"ArrowLeft":
                        t.preventDefault(), this.prev();
                        break;
                    case"ArrowRight":
                        t.preventDefault(), this.next()
                }
            }, r._getItemIndex = function (t) {
                return this._items = t && t.parentNode ? q.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
            }, r._getItemByDirection = function (t, e) {
                var n = "next" === t, i = "prev" === t, o = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, r._triggerSlideEvent = function (t, e) {
                var n = this._getItemIndex(t), i = this._getItemIndex(q.findOne(".active.carousel-item", this._element));
                return H.trigger(this._element, "slide.bs.carousel", {relatedTarget: t, direction: e, from: i, to: n})
            }, r._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    for (var e = q.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove("active");
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add("active")
                }
            }, r._updateInterval = function () {
                var t = this._activeElement || q.findOne(".active.carousel-item", this._element);
                if (t) {
                    var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
                    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
                }
            }, r._slide = function (t, e) {
                var n, i, o, r = this, s = q.findOne(".active.carousel-item", this._element), a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), f = Boolean(this._interval);
                if ("next" === t ? (n = "carousel-item-start", i = "carousel-item-next", o = "left") : (n = "carousel-item-end", i = "carousel-item-prev", o = "right"), l && l.classList.contains("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                    if (this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, this._element.classList.contains("slide")) {
                        l.classList.add(i), v(l), s.classList.add(n), l.classList.add(n);
                        var d = u(s);
                        H.one(s, "transitionend", (function () {
                            l.classList.remove(n, i), l.classList.add("active"), s.classList.remove("active", i, n), r._isSliding = !1, setTimeout((function () {
                                H.trigger(r._element, "slid.bs.carousel", {relatedTarget: l, direction: o, from: a, to: c})
                            }), 0)
                        })), h(s, d)
                    } else s.classList.remove("active"), l.classList.add("active"), this._isSliding = !1, H.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    f && this.cycle()
                }
            }, o.carouselInterface = function (t, e) {
                var i = T(t, "bs.carousel"), r = n({}, X, Y.getDataAttributes(t));
                "object" == typeof e && (r = n({}, r, e));
                var s = "string" == typeof e ? e : r.slide;
                if (i || (i = new o(t, r)), "number" == typeof e) i.to(e); else if ("string" == typeof s) {
                    if (void 0 === i[s]) throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else r.interval && r.ride && (i.pause(), i.cycle())
            }, o.jQueryInterface = function (t) {
                return this.each((function () {
                    o.carouselInterface(this, t)
                }))
            }, o.dataApiClickHandler = function (t) {
                var e = c(this);
                if (e && e.classList.contains("carousel")) {
                    var i = n({}, Y.getDataAttributes(e), Y.getDataAttributes(this)),
                        r = this.getAttribute("data-bs-slide-to");
                    r && (i.interval = !1), o.carouselInterface(e, i), r && T(e, "bs.carousel").to(r), t.preventDefault()
                }
            }, e(o, null, [{
                key: "Default", get: function () {
                    return X
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.carousel"
                }
            }]), o
        }(R);
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), H.on(window, "load.bs.carousel.data-api", (function () {
        for (var t = q.find('[data-bs-ride="carousel"]'), e = 0, n = t.length; e < n; e++) Z.carouselInterface(t[e], T(t[e], "bs.carousel"))
    })), b((function () {
        var t = _();
        if (t) {
            var e = t.fn[z];
            t.fn[z] = Z.jQueryInterface, t.fn[z].Constructor = Z, t.fn[z].noConflict = function () {
                return t.fn[z] = e, Z.jQueryInterface
            }
        }
    }));
    var J = "collapse", tt = {toggle: !0, parent: ""}, et = {toggle: "boolean", parent: "(string|element)"},
        nt = function (t) {
            function o(e, n) {
                var i;
                (i = t.call(this, e) || this)._isTransitioning = !1, i._config = i._getConfig(n), i._triggerArray = q.find('[data-bs-toggle="collapse"][href="#' + e.id + '"],[data-bs-toggle="collapse"][data-bs-target="#' + e.id + '"]');
                for (var o = q.find('[data-bs-toggle="collapse"]'), r = 0, s = o.length; r < s; r++) {
                    var a = o[r], c = l(a), u = q.find(c).filter((function (t) {
                        return t === e
                    }));
                    null !== c && u.length && (i._selector = c, i._triggerArray.push(a))
                }
                return i._parent = i._config.parent ? i._getParent() : null, i._config.parent || i._addAriaAndCollapsedClass(i._element, i._triggerArray), i._config.toggle && i.toggle(), i
            }

            i(o, t);
            var r = o.prototype;
            return r.toggle = function () {
                this._element.classList.contains("show") ? this.hide() : this.show()
            }, r.show = function () {
                var t = this;
                if (!this._isTransitioning && !this._element.classList.contains("show")) {
                    var e, n;
                    this._parent && 0 === (e = q.find(".show, .collapsing", this._parent).filter((function (e) {
                        return "string" == typeof t._config.parent ? e.getAttribute("data-bs-parent") === t._config.parent : e.classList.contains("collapse")
                    }))).length && (e = null);
                    var i = q.findOne(this._selector);
                    if (e) {
                        var r = e.find((function (t) {
                            return i !== t
                        }));
                        if ((n = r ? T(r, "bs.collapse") : null) && n._isTransitioning) return
                    }
                    if (!H.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                        e && e.forEach((function (t) {
                            i !== t && o.collapseInterface(t, "hide"), n || E(t, "bs.collapse", null)
                        }));
                        var s = this._getDimension();
                        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function (t) {
                            t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                        })), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)), l = u(this._element);
                        H.one(this._element, "transitionend", (function () {
                            t._element.classList.remove("collapsing"), t._element.classList.add("collapse", "show"), t._element.style[s] = "", t.setTransitioning(!1), H.trigger(t._element, "shown.bs.collapse")
                        })), h(this._element, l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, r.hide = function () {
                var t = this;
                if (!this._isTransitioning && this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                    var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", v(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                    var n = this._triggerArray.length;
                    if (n > 0) for (var i = 0; i < n; i++) {
                        var o = this._triggerArray[i], r = c(o);
                        r && !r.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
                    }
                    this.setTransitioning(!0);
                    this._element.style[e] = "";
                    var s = u(this._element);
                    H.one(this._element, "transitionend", (function () {
                        t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), H.trigger(t._element, "hidden.bs.collapse")
                    })), h(this._element, s)
                }
            }, r.setTransitioning = function (t) {
                this._isTransitioning = t
            }, r.dispose = function () {
                t.prototype.dispose.call(this), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
            }, r._getConfig = function (t) {
                return (t = n({}, tt, t)).toggle = Boolean(t.toggle), p(J, t, et), t
            }, r._getDimension = function () {
                return this._element.classList.contains("width") ? "width" : "height"
            }, r._getParent = function () {
                var t = this, e = this._config.parent;
                d(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = q.findOne(e);
                var n = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
                return q.find(n, e).forEach((function (e) {
                    var n = c(e);
                    t._addAriaAndCollapsedClass(n, [e])
                })), e
            }, r._addAriaAndCollapsedClass = function (t, e) {
                if (t && e.length) {
                    var n = t.classList.contains("show");
                    e.forEach((function (t) {
                        n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
                    }))
                }
            }, o.collapseInterface = function (t, e) {
                var i = T(t, "bs.collapse"), r = n({}, tt, Y.getDataAttributes(t), "object" == typeof e && e ? e : {});
                if (!i && r.toggle && "string" == typeof e && /show|hide/.test(e) && (r.toggle = !1), i || (i = new o(t, r)), "string" == typeof e) {
                    if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                    i[e]()
                }
            }, o.jQueryInterface = function (t) {
                return this.each((function () {
                    o.collapseInterface(this, t)
                }))
            }, e(o, null, [{
                key: "Default", get: function () {
                    return tt
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.collapse"
                }
            }]), o
        }(R);
    H.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = Y.getDataAttributes(this), n = l(this);
        q.find(n).forEach((function (t) {
            var n, i = T(t, "bs.collapse");
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, nt.collapseInterface(t, n)
        }))
    })), b((function () {
        var t = _();
        if (t) {
            var e = t.fn[J];
            t.fn[J] = nt.jQueryInterface, t.fn[J].Constructor = nt, t.fn[J].noConflict = function () {
                return t.fn[J] = e, nt.jQueryInterface
            }
        }
    }));
    var it = "top", ot = "bottom", rt = "right", st = "left", at = [it, ot, rt, st], lt = at.reduce((function (t, e) {
            return t.concat([e + "-start", e + "-end"])
        }), []), ct = [].concat(at, ["auto"]).reduce((function (t, e) {
            return t.concat([e, e + "-start", e + "-end"])
        }), []),
        ut = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function ft(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function dt(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function ht(t) {
        return t instanceof dt(t).Element || t instanceof Element
    }

    function pt(t) {
        return t instanceof dt(t).HTMLElement || t instanceof HTMLElement
    }

    var gt = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function (t) {
                var n = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
                pt(o) && ft(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function (t) {
                    var e = i[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        }, effect: function (t) {
            var e = t.state, n = {
                popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
                Object.keys(e.elements).forEach((function (t) {
                    var i = e.elements[t], o = e.attributes[t] || {},
                        r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function (t, e) {
                            return t[e] = "", t
                        }), {});
                    pt(i) && ft(i) && (Object.assign(i.style, r), Object.keys(o).forEach((function (t) {
                        i.removeAttribute(t)
                    })))
                }))
            }
        }, requires: ["computeStyles"]
    };

    function mt(t) {
        return t.split("-")[0]
    }

    function vt(t) {
        return {x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight}
    }

    function _t(t, e) {
        var n, i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ((n = i) instanceof dt(n).ShadowRoot || n instanceof ShadowRoot)) {
            var o = e;
            do {
                if (o && t.isSameNode(o)) return !0;
                o = o.parentNode || o.host
            } while (o)
        }
        return !1
    }

    function bt(t) {
        return dt(t).getComputedStyle(t)
    }

    function yt(t) {
        return ["table", "td", "th"].indexOf(ft(t)) >= 0
    }

    function wt(t) {
        return ((ht(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Et(t) {
        return "html" === ft(t) ? t : t.assignedSlot || t.parentNode || t.host || wt(t)
    }

    function Tt(t) {
        if (!pt(t) || "fixed" === bt(t).position) return null;
        var e = t.offsetParent;
        if (e) {
            var n = wt(e);
            if ("body" === ft(e) && "static" === bt(e).position && "static" !== bt(n).position) return n
        }
        return e
    }

    function kt(t) {
        for (var e = dt(t), n = Tt(t); n && yt(n) && "static" === bt(n).position;) n = Tt(n);
        return n && "body" === ft(n) && "static" === bt(n).position ? e : n || function (t) {
            for (var e = Et(t); pt(e) && ["html", "body"].indexOf(ft(e)) < 0;) {
                var n = bt(e);
                if ("none" !== n.transform || "none" !== n.perspective || n.willChange && "auto" !== n.willChange) return e;
                e = e.parentNode
            }
            return null
        }(t) || e
    }

    function Ot(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function Lt(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }

    function At(t) {
        return Object.assign(Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}), t)
    }

    function Ct(t, e) {
        return e.reduce((function (e, n) {
            return e[n] = t, e
        }), {})
    }

    var Dt = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, n = t.state, i = t.name, o = n.elements.arrow, r = n.modifiersData.popperOffsets,
                s = mt(n.placement), a = Ot(s), l = [st, rt].indexOf(s) >= 0 ? "height" : "width";
            if (o && r) {
                var c = n.modifiersData[i + "#persistent"].padding, u = vt(o), f = "y" === a ? it : st,
                    d = "y" === a ? ot : rt, h = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l],
                    p = r[a] - n.rects.reference[a], g = kt(o),
                    m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = h / 2 - p / 2, _ = c[f],
                    b = m - u[l] - c[d], y = m / 2 - u[l] / 2 + v, w = Lt(_, y, b), E = a;
                n.modifiersData[i] = ((e = {})[E] = w, e.centerOffset = w - y, e)
            }
        }, effect: function (t) {
            var e = t.state, n = t.options, i = t.name, o = n.element, r = void 0 === o ? "[data-popper-arrow]" : o,
                s = n.padding, a = void 0 === s ? 0 : s;
            null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && _t(e.elements.popper, r) && (e.elements.arrow = r, e.modifiersData[i + "#persistent"] = {padding: At("number" != typeof a ? a : Ct(a, at))})
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    }, xt = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function St(t) {
        var e, n = t.popper, i = t.popperRect, o = t.placement, r = t.offsets, s = t.position, a = t.gpuAcceleration,
            l = t.adaptive, c = function (t) {
                var e = t.x, n = t.y, i = window.devicePixelRatio || 1;
                return {x: Math.round(e * i) / i || 0, y: Math.round(n * i) / i || 0}
            }(r), u = c.x, f = c.y, d = r.hasOwnProperty("x"), h = r.hasOwnProperty("y"), p = st, g = it, m = window;
        if (l) {
            var v = kt(n);
            v === dt(n) && (v = wt(n)), o === it && (g = ot, f -= v.clientHeight - i.height, f *= a ? 1 : -1), o === st && (p = rt, u -= v.clientWidth - i.width, u *= a ? 1 : -1)
        }
        var _, b = Object.assign({position: s}, l && xt);
        return a ? Object.assign(Object.assign({}, b), {}, ((_ = {})[g] = h ? "0" : "", _[p] = d ? "0" : "", _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)", _)) : Object.assign(Object.assign({}, b), {}, ((e = {})[g] = h ? f + "px" : "", e[p] = d ? u + "px" : "", e.transform = "", e))
    }

    var jt = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, n = t.options, i = n.gpuAcceleration, o = void 0 === i || i, r = n.adaptive,
                s = void 0 === r || r, a = {
                    placement: mt(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: o
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign(Object.assign({}, e.styles.popper), St(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: s
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign(Object.assign({}, e.styles.arrow), St(Object.assign(Object.assign({}, a), {}, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1
            })))), e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {"data-popper-placement": e.placement})
        }, data: {}
    }, Nt = {passive: !0};
    var It = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, n = t.instance, i = t.options, o = i.scroll, r = void 0 === o || o, s = i.resize,
                a = void 0 === s || s, l = dt(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && c.forEach((function (t) {
                t.addEventListener("scroll", n.update, Nt)
            })), a && l.addEventListener("resize", n.update, Nt), function () {
                r && c.forEach((function (t) {
                    t.removeEventListener("scroll", n.update, Nt)
                })), a && l.removeEventListener("resize", n.update, Nt)
            }
        }, data: {}
    }, Pt = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function Mt(t) {
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return Pt[t]
        }))
    }

    var Bt = {start: "end", end: "start"};

    function Ht(t) {
        return t.replace(/start|end/g, (function (t) {
            return Bt[t]
        }))
    }

    function Rt(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function Wt(t) {
        var e = dt(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
    }

    function Kt(t) {
        return Rt(wt(t)).left + Wt(t).scrollLeft
    }

    function Qt(t) {
        var e = bt(t), n = e.overflow, i = e.overflowX, o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }

    function Ut(t, e) {
        void 0 === e && (e = []);
        var n = function t(e) {
                return ["html", "body", "#document"].indexOf(ft(e)) >= 0 ? e.ownerDocument.body : pt(e) && Qt(e) ? e : t(Et(e))
            }(t), i = "body" === ft(n), o = dt(n), r = i ? [o].concat(o.visualViewport || [], Qt(n) ? n : []) : n,
            s = e.concat(r);
        return i ? s : s.concat(Ut(Et(r)))
    }

    function Ft(t) {
        return Object.assign(Object.assign({}, t), {}, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Yt(t, e) {
        return "viewport" === e ? Ft(function (t) {
            var e = dt(t), n = wt(t), i = e.visualViewport, o = n.clientWidth, r = n.clientHeight, s = 0, a = 0;
            return i && (o = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = i.offsetLeft, a = i.offsetTop)), {
                width: o,
                height: r,
                x: s + Kt(t),
                y: a
            }
        }(t)) : pt(e) ? function (t) {
            var e = Rt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : Ft(function (t) {
            var e = wt(t), n = Wt(t), i = t.ownerDocument.body,
                o = Math.max(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                r = Math.max(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                s = -n.scrollLeft + Kt(t), a = -n.scrollTop;
            return "rtl" === bt(i || e).direction && (s += Math.max(e.clientWidth, i ? i.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: s,
                y: a
            }
        }(wt(t)))
    }

    function qt(t, e, n) {
        var i = "clippingParents" === e ? function (t) {
            var e = Ut(Et(t)), n = ["absolute", "fixed"].indexOf(bt(t).position) >= 0 && pt(t) ? kt(t) : t;
            return ht(n) ? e.filter((function (t) {
                return ht(t) && _t(t, n) && "body" !== ft(t)
            })) : []
        }(t) : [].concat(e), o = [].concat(i, [n]), r = o[0], s = o.reduce((function (e, n) {
            var i = Yt(t, n);
            return e.top = Math.max(i.top, e.top), e.right = Math.min(i.right, e.right), e.bottom = Math.min(i.bottom, e.bottom), e.left = Math.max(i.left, e.left), e
        }), Yt(t, r));
        return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
    }

    function zt(t) {
        return t.split("-")[1]
    }

    function Vt(t) {
        var e, n = t.reference, i = t.element, o = t.placement, r = o ? mt(o) : null, s = o ? zt(o) : null,
            a = n.x + n.width / 2 - i.width / 2, l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case it:
                e = {x: a, y: n.y - i.height};
                break;
            case ot:
                e = {x: a, y: n.y + n.height};
                break;
            case rt:
                e = {x: n.x + n.width, y: l};
                break;
            case st:
                e = {x: n.x - i.width, y: l};
                break;
            default:
                e = {x: n.x, y: n.y}
        }
        var c = r ? Ot(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
                case"start":
                    e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
                    break;
                case"end":
                    e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
            }
        }
        return e
    }

    function Xt(t, e) {
        void 0 === e && (e = {});
        var n = e, i = n.placement, o = void 0 === i ? t.placement : i, r = n.boundary,
            s = void 0 === r ? "clippingParents" : r, a = n.rootBoundary, l = void 0 === a ? "viewport" : a,
            c = n.elementContext, u = void 0 === c ? "popper" : c, f = n.altBoundary, d = void 0 !== f && f,
            h = n.padding, p = void 0 === h ? 0 : h, g = At("number" != typeof p ? p : Ct(p, at)),
            m = "popper" === u ? "reference" : "popper", v = t.elements.reference, _ = t.rects.popper,
            b = t.elements[d ? m : u], y = qt(ht(b) ? b : b.contextElement || wt(t.elements.popper), s, l), w = Rt(v),
            E = Vt({reference: w, element: _, strategy: "absolute", placement: o}),
            T = Ft(Object.assign(Object.assign({}, _), E)), k = "popper" === u ? T : w, O = {
                top: y.top - k.top + g.top,
                bottom: k.bottom - y.bottom + g.bottom,
                left: y.left - k.left + g.left,
                right: k.right - y.right + g.right
            }, L = t.modifiersData.offset;
        if ("popper" === u && L) {
            var A = L[o];
            Object.keys(O).forEach((function (t) {
                var e = [rt, ot].indexOf(t) >= 0 ? 1 : -1, n = [it, ot].indexOf(t) >= 0 ? "y" : "x";
                O[t] += A[n] * e
            }))
        }
        return O
    }

    function $t(t, e) {
        void 0 === e && (e = {});
        var n = e, i = n.placement, o = n.boundary, r = n.rootBoundary, s = n.padding, a = n.flipVariations,
            l = n.allowedAutoPlacements, c = void 0 === l ? ct : l, u = zt(i),
            f = u ? a ? lt : lt.filter((function (t) {
                return zt(t) === u
            })) : at, d = f.filter((function (t) {
                return c.indexOf(t) >= 0
            }));
        0 === d.length && (d = f);
        var h = d.reduce((function (e, n) {
            return e[n] = Xt(t, {placement: n, boundary: o, rootBoundary: r, padding: s})[mt(n)], e
        }), {});
        return Object.keys(h).sort((function (t, e) {
            return h[t] - h[e]
        }))
    }

    var Gt = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, n = t.options, i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = e.options.placement, v = mt(m), _ = l || (v === m || !p ? [Mt(m)] : function (t) {
                    if ("auto" === mt(t)) return [];
                    var e = Mt(t);
                    return [Ht(t), e, Ht(e)]
                }(m)), b = [m].concat(_).reduce((function (t, n) {
                    return t.concat("auto" === mt(n) ? $t(e, {
                        placement: n,
                        boundary: u,
                        rootBoundary: f,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : n)
                }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, k = b[0], O = 0; O < b.length; O++) {
                    var L = b[O], A = mt(L), C = "start" === zt(L), D = [it, ot].indexOf(A) >= 0,
                        x = D ? "width" : "height",
                        S = Xt(e, {placement: L, boundary: u, rootBoundary: f, altBoundary: d, padding: c}),
                        j = D ? C ? rt : st : C ? ot : it;
                    y[x] > w[x] && (j = Mt(j));
                    var N = Mt(j), I = [];
                    if (r && I.push(S[A] <= 0), a && I.push(S[j] <= 0, S[N] <= 0), I.every((function (t) {
                        return t
                    }))) {
                        k = L, T = !1;
                        break
                    }
                    E.set(L, I)
                }
                if (T) for (var P = function (t) {
                    var e = b.find((function (e) {
                        var n = E.get(e);
                        if (n) return n.slice(0, t).every((function (t) {
                            return t
                        }))
                    }));
                    if (e) return k = e, "break"
                }, M = p ? 3 : 1; M > 0; M--) {
                    if ("break" === P(M)) break
                }
                e.placement !== k && (e.modifiersData[i]._skip = !0, e.placement = k, e.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function Zt(t, e, n) {
        return void 0 === n && (n = {x: 0, y: 0}), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function Jt(t) {
        return [it, rt, ot, st].some((function (e) {
            return t[e] >= 0
        }))
    }

    var te = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, n = t.name, i = e.rects.reference, o = e.rects.popper, r = e.modifiersData.preventOverflow,
                s = Xt(e, {elementContext: "reference"}), a = Xt(e, {altBoundary: !0}), l = Zt(s, i), c = Zt(a, o, r),
                u = Jt(l), f = Jt(c);
            e.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: u,
                hasPopperEscaped: f
            }, e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {}, {
                "data-popper-reference-hidden": u,
                "data-popper-escaped": f
            })
        }
    };
    var ee = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var e = t.state, n = t.options, i = t.name, o = n.offset, r = void 0 === o ? [0, 0] : o,
                s = ct.reduce((function (t, n) {
                    return t[n] = function (t, e, n) {
                        var i = mt(t), o = [st, it].indexOf(i) >= 0 ? -1 : 1,
                            r = "function" == typeof n ? n(Object.assign(Object.assign({}, e), {}, {placement: t})) : n,
                            s = r[0], a = r[1];
                        return s = s || 0, a = (a || 0) * o, [st, rt].indexOf(i) >= 0 ? {x: a, y: s} : {x: s, y: a}
                    }(n, e.rects, r), t
                }), {}), a = s[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = s
        }
    };
    var ne = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, n = t.name;
            e.modifiersData[n] = Vt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    };
    var ie = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, n = t.options, i = t.name, o = n.mainAxis, r = void 0 === o || o, s = n.altAxis,
                a = void 0 !== s && s, l = n.boundary, c = n.rootBoundary, u = n.altBoundary, f = n.padding,
                d = n.tether, h = void 0 === d || d, p = n.tetherOffset, g = void 0 === p ? 0 : p,
                m = Xt(e, {boundary: l, rootBoundary: c, padding: f, altBoundary: u}), v = mt(e.placement),
                _ = zt(e.placement), b = !_, y = Ot(v), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets,
                T = e.rects.reference, k = e.rects.popper,
                O = "function" == typeof g ? g(Object.assign(Object.assign({}, e.rects), {}, {placement: e.placement})) : g,
                L = {x: 0, y: 0};
            if (E) {
                if (r) {
                    var A = "y" === y ? it : st, C = "y" === y ? ot : rt, D = "y" === y ? "height" : "width", x = E[y],
                        S = E[y] + m[A], j = E[y] - m[C], N = h ? -k[D] / 2 : 0, I = "start" === _ ? T[D] : k[D],
                        P = "start" === _ ? -k[D] : -T[D], M = e.elements.arrow,
                        B = h && M ? vt(M) : {width: 0, height: 0},
                        H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, R = H[A], W = H[C], K = Lt(0, T[D], B[D]), Q = b ? T[D] / 2 - N - K - R - O : I - K - R - O,
                        U = b ? -T[D] / 2 + N + K + W + O : P + K + W + O, F = e.elements.arrow && kt(e.elements.arrow),
                        Y = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
                        q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0, z = E[y] + Q - q - Y,
                        V = E[y] + U - q, X = Lt(h ? Math.min(S, z) : S, x, h ? Math.max(j, V) : j);
                    E[y] = X, L[y] = X - x
                }
                if (a) {
                    var $ = "x" === y ? it : st, G = "x" === y ? ot : rt, Z = E[w], J = Lt(Z + m[$], Z, Z - m[G]);
                    E[w] = J, L[w] = J - Z
                }
                e.modifiersData[i] = L
            }
        }, requiresIfExists: ["offset"]
    };

    function oe(t, e, n) {
        void 0 === n && (n = !1);
        var i, o, r = wt(e), s = Rt(t), a = pt(e), l = {scrollLeft: 0, scrollTop: 0}, c = {x: 0, y: 0};
        return (a || !a && !n) && (("body" !== ft(e) || Qt(r)) && (l = (i = e) !== dt(i) && pt(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : Wt(i)), pt(e) ? ((c = Rt(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = Kt(r))), {
            x: s.left + l.scrollLeft - c.x,
            y: s.top + l.scrollTop - c.y,
            width: s.width,
            height: s.height
        }
    }

    function re(t) {
        var e = new Map, n = new Set, i = [];
        return t.forEach((function (t) {
            e.set(t.name, t)
        })), t.forEach((function (t) {
            n.has(t.name) || function t(o) {
                n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function (i) {
                    if (!n.has(i)) {
                        var o = e.get(i);
                        o && t(o)
                    }
                })), i.push(o)
            }(t)
        })), i
    }

    var se = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function ae() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some((function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function le(t) {
        void 0 === t && (t = {});
        var e = t, n = e.defaultModifiers, i = void 0 === n ? [] : n, o = e.defaultOptions, r = void 0 === o ? se : o;
        return function (t, e, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign(Object.assign({}, se), r),
                modifiersData: {},
                elements: {reference: t, popper: e},
                attributes: {},
                styles: {}
            }, l = [], c = !1, u = {
                state: a, setOptions: function (n) {
                    f(), a.options = Object.assign(Object.assign(Object.assign({}, r), a.options), n), a.scrollParents = {
                        reference: ht(t) ? Ut(t) : t.contextElement ? Ut(t.contextElement) : [],
                        popper: Ut(e)
                    };
                    var o, s, c = function (t) {
                        var e = re(t);
                        return ut.reduce((function (t, n) {
                            return t.concat(e.filter((function (t) {
                                return t.phase === n
                            })))
                        }), [])
                    }((o = [].concat(i, a.options.modifiers), s = o.reduce((function (t, e) {
                        var n = t[e.name];
                        return t[e.name] = n ? Object.assign(Object.assign(Object.assign({}, n), e), {}, {
                            options: Object.assign(Object.assign({}, n.options), e.options),
                            data: Object.assign(Object.assign({}, n.data), e.data)
                        }) : e, t
                    }), {}), Object.keys(s).map((function (t) {
                        return s[t]
                    }))));
                    return a.orderedModifiers = c.filter((function (t) {
                        return t.enabled
                    })), a.orderedModifiers.forEach((function (t) {
                        var e = t.name, n = t.options, i = void 0 === n ? {} : n, o = t.effect;
                        if ("function" == typeof o) {
                            var r = o({state: a, name: e, instance: u, options: i}), s = function () {
                            };
                            l.push(r || s)
                        }
                    })), u.update()
                }, forceUpdate: function () {
                    if (!c) {
                        var t = a.elements, e = t.reference, n = t.popper;
                        if (ae(e, n)) {
                            a.rects = {
                                reference: oe(e, kt(n), "fixed" === a.options.strategy),
                                popper: vt(n)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }));
                            for (var i = 0; i < a.orderedModifiers.length; i++) if (!0 !== a.reset) {
                                var o = a.orderedModifiers[i], r = o.fn, s = o.options, l = void 0 === s ? {} : s,
                                    f = o.name;
                                "function" == typeof r && (a = r({state: a, options: l, name: f, instance: u}) || a)
                            } else a.reset = !1, i = -1
                        }
                    }
                }, update: (o = function () {
                    return new Promise((function (t) {
                        u.forceUpdate(), t(a)
                    }))
                }, function () {
                    return s || (s = new Promise((function (t) {
                        Promise.resolve().then((function () {
                            s = void 0, t(o())
                        }))
                    }))), s
                }), destroy: function () {
                    f(), c = !0
                }
            };
            if (!ae(t, e)) return u;

            function f() {
                l.forEach((function (t) {
                    return t()
                })), l = []
            }

            return u.setOptions(n).then((function (t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            })), u
        }
    }

    var ce = le(), ue = le({defaultModifiers: [It, ne, jt, gt]}),
        fe = le({defaultModifiers: [It, ne, jt, gt, ee, Gt, ie, Dt, te]}), de = Object.freeze({
            __proto__: null,
            popperGenerator: le,
            detectOverflow: Xt,
            createPopperBase: ce,
            createPopper: fe,
            createPopperLite: ue,
            top: it,
            bottom: ot,
            right: rt,
            left: st,
            auto: "auto",
            basePlacements: at,
            start: "start",
            end: "end",
            clippingParents: "clippingParents",
            viewport: "viewport",
            popper: "popper",
            reference: "reference",
            variationPlacements: lt,
            placements: ct,
            beforeRead: "beforeRead",
            read: "read",
            afterRead: "afterRead",
            beforeMain: "beforeMain",
            main: "main",
            afterMain: "afterMain",
            beforeWrite: "beforeWrite",
            write: "write",
            afterWrite: "afterWrite",
            modifierPhases: ut,
            applyStyles: gt,
            arrow: Dt,
            computeStyles: jt,
            eventListeners: It,
            flip: Gt,
            hide: te,
            offset: ee,
            popperOffsets: ne,
            preventOverflow: ie
        }), he = "dropdown", pe = new RegExp("ArrowUp|ArrowDown|Escape"), ge = y ? "top-end" : "top-start",
        me = y ? "top-start" : "top-end", ve = y ? "bottom-end" : "bottom-start",
        _e = y ? "bottom-start" : "bottom-end", be = y ? "left-start" : "right-start",
        ye = y ? "right-start" : "left-start", we = {
            offset: 0,
            flip: !0,
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        }, Ee = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        }, Te = function (t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._popper = null, i._config = i._getConfig(n), i._menu = i._getMenuElement(), i._inNavbar = i._detectNavbar(), i._addEventListeners(), i
            }

            i(o, t);
            var r = o.prototype;
            return r.toggle = function () {
                if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                    var t = this._element.classList.contains("show");
                    o.clearMenus(), t || this.show()
                }
            }, r.show = function () {
                if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                    var t = o.getParentFromElement(this._element), e = {relatedTarget: this._element};
                    if (!H.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                        if (!this._inNavbar) {
                            if (void 0 === de) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            var n = this._element;
                            "parent" === this._config.reference ? n = t : d(this._config.reference) && (n = this._config.reference, void 0 !== this._config.reference.jquery && (n = this._config.reference[0])), this._popper = fe(n, this._menu, this._getPopperConfig())
                        }
                        var i;
                        if ("ontouchstart" in document.documentElement && !t.closest(".navbar-nav")) (i = []).concat.apply(i, document.body.children).forEach((function (t) {
                            return H.on(t, "mouseover", null, (function () {
                            }))
                        }));
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(t, "shown.bs.dropdown", e)
                    }
                }
            }, r.hide = function () {
                if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                    var t = o.getParentFromElement(this._element), e = {relatedTarget: this._element};
                    H.trigger(t, "hide.bs.dropdown", e).defaultPrevented || (this._popper && this._popper.destroy(), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), H.trigger(t, "hidden.bs.dropdown", e))
                }
            }, r.dispose = function () {
                t.prototype.dispose.call(this), H.off(this._element, ".bs.dropdown"), this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
            }, r.update = function () {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }, r._addEventListeners = function () {
                var t = this;
                H.on(this._element, "click.bs.dropdown", (function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, r._getConfig = function (t) {
                return t = n({}, this.constructor.Default, Y.getDataAttributes(this._element), t), p(he, t, this.constructor.DefaultType), t
            }, r._getMenuElement = function () {
                return q.next(this._element, ".dropdown-menu")[0]
            }, r._getPlacement = function () {
                var t = this._element.parentNode;
                if (t.classList.contains("dropend")) return be;
                if (t.classList.contains("dropstart")) return ye;
                var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return t.classList.contains("dropup") ? e ? me : ge : e ? _e : ve
            }, r._detectNavbar = function () {
                return null !== this._element.closest(".navbar")
            }, r._getPopperConfig = function () {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {altBoundary: this._config.flip, rootBoundary: this._config.boundary}
                    }]
                };
                return "static" === this._config.display && (t.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), n({}, t, this._config.popperConfig)
            }, o.dropdownInterface = function (t, e) {
                var n = T(t, "bs.dropdown");
                if (n || (n = new o(t, "object" == typeof e ? e : null)), "string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }, o.jQueryInterface = function (t) {
                return this.each((function () {
                    o.dropdownInterface(this, t)
                }))
            }, o.clearMenus = function (t) {
                if (!t || 2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)) for (var e = q.find('[data-bs-toggle="dropdown"]'), n = 0, i = e.length; n < i; n++) {
                    var r = o.getParentFromElement(e[n]), s = T(e[n], "bs.dropdown"), a = {relatedTarget: e[n]};
                    if (t && "click" === t.type && (a.clickEvent = t), s) {
                        var l = s._menu;
                        if (e[n].classList.contains("show")) if (!(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && "Tab" === t.key) && l.contains(t.target))) if (!H.trigger(r, "hide.bs.dropdown", a).defaultPrevented) {
                            var c;
                            if ("ontouchstart" in document.documentElement) (c = []).concat.apply(c, document.body.children).forEach((function (t) {
                                return H.off(t, "mouseover", null, (function () {
                                }))
                            }));
                            e[n].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove("show"), e[n].classList.remove("show"), H.trigger(r, "hidden.bs.dropdown", a)
                        }
                    }
                }
            }, o.getParentFromElement = function (t) {
                return c(t) || t.parentNode
            }, o.dataApiKeydownHandler = function (t) {
                if (!(/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !pe.test(t.key)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
                    var e = o.getParentFromElement(this), n = this.classList.contains("show");
                    if ("Escape" === t.key) return (this.matches('[data-bs-toggle="dropdown"]') ? this : q.prev(this, '[data-bs-toggle="dropdown"]')[0]).focus(), void o.clearMenus();
                    if (n && "Space" !== t.key) {
                        var i = q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", e).filter(g);
                        if (i.length) {
                            var r = i.indexOf(t.target);
                            "ArrowUp" === t.key && r > 0 && r--, "ArrowDown" === t.key && r < i.length - 1 && r++, i[r = -1 === r ? 0 : r].focus()
                        }
                    } else o.clearMenus()
                }
            }, e(o, null, [{
                key: "Default", get: function () {
                    return we
                }
            }, {
                key: "DefaultType", get: function () {
                    return Ee
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.dropdown"
                }
            }]), o
        }(R);
    H.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Te.dataApiKeydownHandler), H.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Te.dataApiKeydownHandler), H.on(document, "click.bs.dropdown.data-api", Te.clearMenus), H.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus), H.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
        t.preventDefault(), t.stopPropagation(), Te.dropdownInterface(this, "toggle")
    })), H.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function (t) {
        return t.stopPropagation()
    })), b((function () {
        var t = _();
        if (t) {
            var e = t.fn[he];
            t.fn[he] = Te.jQueryInterface, t.fn[he].Constructor = Te, t.fn[he].noConflict = function () {
                return t.fn[he] = e, Te.jQueryInterface
            }
        }
    }));
    var ke = {backdrop: !0, keyboard: !0, focus: !0},
        Oe = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean"}, Le = function (t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._dialog = q.findOne(".modal-dialog", e), i._backdrop = null, i._isShown = !1, i._isBodyOverflowing = !1, i._ignoreBackdropClick = !1, i._isTransitioning = !1, i._scrollbarWidth = 0, i
            }

            i(o, t);
            var r = o.prototype;
            return r.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, r.show = function (t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains("fade") && (this._isTransitioning = !0);
                    var n = H.trigger(this._element, "show.bs.modal", {relatedTarget: t});
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), H.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', (function (t) {
                        return e.hide(t)
                    })), H.on(this._dialog, "mousedown.dismiss.bs.modal", (function () {
                        H.one(e._element, "mouseup.dismiss.bs.modal", (function (t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function () {
                        return e._showElement(t)
                    })))
                }
            }, r.hide = function (t) {
                var e = this;
                if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !H.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                    this._isShown = !1;
                    var n = this._element.classList.contains("fade");
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), H.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.modal"), H.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
                        var i = u(this._element);
                        H.one(this._element, "transitionend", (function (t) {
                            return e._hideModal(t)
                        })), h(this._element, i)
                    } else this._hideModal()
                }
            }, r.dispose = function () {
                [window, this._element, this._dialog].forEach((function (t) {
                    return H.off(t, ".bs.modal")
                })), t.prototype.dispose.call(this), H.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, r.handleUpdate = function () {
                this._adjustDialog()
            }, r._getConfig = function (t) {
                return t = n({}, ke, t), p("modal", t, Oe), t
            }, r._showElement = function (t) {
                var e = this, n = this._element.classList.contains("fade"), i = q.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && v(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
                var o = function () {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, H.trigger(e._element, "shown.bs.modal", {relatedTarget: t})
                };
                if (n) {
                    var r = u(this._dialog);
                    H.one(this._dialog, "transitionend", o), h(this._dialog, r)
                } else o()
            }, r._enforceFocus = function () {
                var t = this;
                H.off(document, "focusin.bs.modal"), H.on(document, "focusin.bs.modal", (function (e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                }))
            }, r._setEscapeEvent = function () {
                var t = this;
                this._isShown ? H.on(this._element, "keydown.dismiss.bs.modal", (function (e) {
                    t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
                })) : H.off(this._element, "keydown.dismiss.bs.modal")
            }, r._setResizeEvent = function () {
                var t = this;
                this._isShown ? H.on(window, "resize.bs.modal", (function () {
                    return t._adjustDialog()
                })) : H.off(window, "resize.bs.modal")
            }, r._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
                    document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), H.trigger(t._element, "hidden.bs.modal")
                }))
            }, r._removeBackdrop = function () {
                this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
            }, r._showBackdrop = function (t) {
                var e = this, n = this._element.classList.contains("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), H.on(this._element, "click.dismiss.bs.modal", (function (t) {
                        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._triggerBackdropTransition() : e.hide())
                    })), n && v(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
                    var i = u(this._backdrop);
                    H.one(this._backdrop, "transitionend", t), h(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove("show");
                    var o = function () {
                        e._removeBackdrop(), t()
                    };
                    if (this._element.classList.contains("fade")) {
                        var r = u(this._backdrop);
                        H.one(this._backdrop, "transitionend", o), h(this._backdrop, r)
                    } else o()
                } else t()
            }, r._triggerBackdropTransition = function () {
                var t = this;
                if (!H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                    var n = u(this._dialog);
                    H.off(this._element, "transitionend"), H.one(this._element, "transitionend", (function () {
                        t._element.classList.remove("modal-static"), e || (H.one(t._element, "transitionend", (function () {
                            t._element.style.overflowY = ""
                        })), h(t._element, n))
                    })), h(this._element, n), this._element.focus()
                }
            }, r._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                (!this._isBodyOverflowing && t && !y || this._isBodyOverflowing && !t && y) && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), (this._isBodyOverflowing && !t && !y || !this._isBodyOverflowing && t && y) && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, r._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, r._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, r._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                    q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (e) {
                        var n = e.style.paddingRight, i = window.getComputedStyle(e)["padding-right"];
                        Y.setDataAttribute(e, "padding-right", n), e.style.paddingRight = Number.parseFloat(i) + t._scrollbarWidth + "px"
                    })), q.find(".sticky-top").forEach((function (e) {
                        var n = e.style.marginRight, i = window.getComputedStyle(e)["margin-right"];
                        Y.setDataAttribute(e, "margin-right", n), e.style.marginRight = Number.parseFloat(i) - t._scrollbarWidth + "px"
                    }));
                    var e = document.body.style.paddingRight, n = window.getComputedStyle(document.body)["padding-right"];
                    Y.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = Number.parseFloat(n) + this._scrollbarWidth + "px"
                }
                document.body.classList.add("modal-open")
            }, r._resetScrollbar = function () {
                q.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (t) {
                    var e = Y.getDataAttribute(t, "padding-right");
                    void 0 !== e && (Y.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
                })), q.find(".sticky-top").forEach((function (t) {
                    var e = Y.getDataAttribute(t, "margin-right");
                    void 0 !== e && (Y.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
                }));
                var t = Y.getDataAttribute(document.body, "padding-right");
                void 0 === t ? document.body.style.paddingRight = "" : (Y.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
            }, r._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o.jQueryInterface = function (t, e) {
                return this.each((function () {
                    var i = T(this, "bs.modal"),
                        r = n({}, ke, Y.getDataAttributes(this), "object" == typeof t && t ? t : {});
                    if (i || (i = new o(this, r)), "string" == typeof t) {
                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t](e)
                    }
                }))
            }, e(o, null, [{
                key: "Default", get: function () {
                    return ke
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.modal"
                }
            }]), o
        }(R);
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
        var e = this, i = c(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), H.one(i, "show.bs.modal", (function (t) {
            t.defaultPrevented || H.one(i, "hidden.bs.modal", (function () {
                g(e) && e.focus()
            }))
        }));
        var o = T(i, "bs.modal");
        if (!o) {
            var r = n({}, Y.getDataAttributes(i), Y.getDataAttributes(this));
            o = new Le(i, r)
        }
        o.show(this)
    })), b((function () {
        var t = _();
        if (t) {
            var e = t.fn.modal;
            t.fn.modal = Le.jQueryInterface, t.fn.modal.Constructor = Le, t.fn.modal.noConflict = function () {
                return t.fn.modal = e, Le.jQueryInterface
            }
        }
    }));
    var Ae = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        De = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        xe = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Se(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function (t, n) {
            var i, o = s[t], a = o.nodeName.toLowerCase();
            if (!r.includes(a)) return o.parentNode.removeChild(o), "continue";
            var l = (i = []).concat.apply(i, o.attributes), c = [].concat(e["*"] || [], e[a] || []);
            l.forEach((function (t) {
                (function (t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (e.includes(n)) return !Ae.has(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(De));
                    for (var i = e.filter((function (t) {
                        return t instanceof RegExp
                    })), o = 0, r = i.length; o < r; o++) if (n.match(i[o])) return !0;
                    return !1
                })(t, c) || o.removeAttribute(t.nodeName)
            }))
        }, l = 0, c = s.length; l < c; l++) a(l);
        return o.body.innerHTML
    }

    var je = "tooltip", Ne = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Ie = new Set(["sanitize", "allowList", "sanitizeFn"]), Pe = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "(null|array)",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object)"
        }, Me = {AUTO: "auto", TOP: "top", RIGHT: y ? "left" : "right", BOTTOM: "bottom", LEFT: y ? "right" : "left"},
        Be = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            container: !1,
            fallbackPlacements: null,
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: xe,
            popperConfig: null
        }, He = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        }, Re = function (t) {
            function o(e, n) {
                var i;
                if (void 0 === de) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                return (i = t.call(this, e) || this)._isEnabled = !0, i._timeout = 0, i._hoverState = "", i._activeTrigger = {}, i._popper = null, i.config = i._getConfig(n), i.tip = null, i._setListeners(), i
            }

            i(o, t);
            var r = o.prototype;
            return r.enable = function () {
                this._isEnabled = !0
            }, r.disable = function () {
                this._isEnabled = !1
            }, r.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, r.toggle = function (t) {
                if (this._isEnabled) if (t) {
                    var e = this.constructor.DATA_KEY, n = T(t.delegateTarget, e);
                    n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, r.dispose = function () {
                clearTimeout(this._timeout), H.off(this._element, this.constructor.EVENT_KEY), H.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, t.prototype.dispose.call(this)
            }, r.show = function () {
                var t = this;
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = H.trigger(this._element, this.constructor.Event.SHOW), n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this._element),
                        i = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
                    if (e.defaultPrevented || !i) return;
                    var o = this.getTipElement(), r = s(this.constructor.NAME);
                    o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
                        l = this._getAttachment(a);
                    this._addAttachmentClass(l);
                    var c = this._getContainer();
                    E(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || c.appendChild(o), H.trigger(this._element, this.constructor.Event.INSERTED), this._popper = fe(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
                    var f, d,
                        p = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
                    if (p) (f = o.classList).add.apply(f, p.split(" "));
                    if ("ontouchstart" in document.documentElement) (d = []).concat.apply(d, document.body.children).forEach((function (t) {
                        H.on(t, "mouseover", (function () {
                        }))
                    }));
                    var g = function () {
                        var e = t._hoverState;
                        t._hoverState = null, H.trigger(t._element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (this.tip.classList.contains("fade")) {
                        var m = u(this.tip);
                        H.one(this.tip, "transitionend", g), h(this.tip, m)
                    } else g()
                }
            }, r.hide = function () {
                var t = this;
                if (this._popper) {
                    var e = this.getTipElement(), n = function () {
                        "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t._element.removeAttribute("aria-describedby"), H.trigger(t._element, t.constructor.Event.HIDDEN), t._popper && (t._popper.destroy(), t._popper = null)
                    };
                    if (!H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
                        var i;
                        if (e.classList.remove("show"), "ontouchstart" in document.documentElement) (i = []).concat.apply(i, document.body.children).forEach((function (t) {
                            return H.off(t, "mouseover", m)
                        }));
                        if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                            var o = u(e);
                            H.one(e, "transitionend", n), h(e, o)
                        } else n();
                        this._hoverState = ""
                    }
                }
            }, r.update = function () {
                null !== this._popper && this._popper.update()
            }, r.isWithContent = function () {
                return Boolean(this.getTitle())
            }, r.getTipElement = function () {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, r.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(q.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
            }, r.setElementContent = function (t, e) {
                if (null !== t) return "object" == typeof e && d(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = Se(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }, r.getTitle = function () {
                var t = this._element.getAttribute("data-bs-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
            }, r.updateAttachment = function (t) {
                return "right" === t ? "end" : "left" === t ? "start" : t
            }, r._getPopperConfig = function (t) {
                var e = this, i = {name: "flip", options: {altBoundary: !0}};
                return this.config.fallbackPlacements && (i.options.fallbackPlacements = this.config.fallbackPlacements), n({}, {
                    placement: t,
                    modifiers: [i, {name: "preventOverflow", options: {rootBoundary: this.config.boundary}}, {
                        name: "arrow",
                        options: {element: "." + this.constructor.NAME + "-arrow"}
                    }, {
                        name: "onChange", enabled: !0, phase: "afterWrite", fn: function (t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }],
                    onFirstUpdate: function (t) {
                        t.options.placement !== t.placement && e._handlePopperPlacementChange(t)
                    }
                }, this.config.popperConfig)
            }, r._addAttachmentClass = function (t) {
                this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
            }, r._getContainer = function () {
                return !1 === this.config.container ? document.body : d(this.config.container) ? this.config.container : q.findOne(this.config.container)
            }, r._getAttachment = function (t) {
                return Me[t.toUpperCase()]
            }, r._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach((function (e) {
                    if ("click" === e) H.on(t._element, t.constructor.Event.CLICK, t.config.selector, (function (e) {
                        return t.toggle(e)
                    })); else if ("manual" !== e) {
                        var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        H.on(t._element, n, t.config.selector, (function (e) {
                            return t._enter(e)
                        })), H.on(t._element, i, t.config.selector, (function (e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function () {
                    t._element && t.hide()
                }, H.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = n({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, r._fixTitle = function () {
                var t = this._element.getAttribute("title"),
                    e = typeof this._element.getAttribute("data-bs-original-title");
                (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
            }, r._enter = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () {
                    "show" === e._hoverState && e.show()
                }), e.config.delay.show) : e.show())
            }, r._leave = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || T(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () {
                    "out" === e._hoverState && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, r._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
                return !1
            }, r._getConfig = function (t) {
                var e = Y.getDataAttributes(this._element);
                return Object.keys(e).forEach((function (t) {
                    Ie.has(t) && delete e[t]
                })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = n({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), p(je, t, this.constructor.DefaultType), t.sanitize && (t.template = Se(t.template, t.allowList, t.sanitizeFn)), t
            }, r._getDelegateConfig = function () {
                var t = {};
                if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, r._cleanTipClass = function () {
                var t = this.getTipElement(), e = t.getAttribute("class").match(Ne);
                null !== e && e.length > 0 && e.map((function (t) {
                    return t.trim()
                })).forEach((function (e) {
                    return t.classList.remove(e)
                }))
            }, r._handlePopperPlacementChange = function (t) {
                var e = t.state;
                e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
            }, o.jQueryInterface = function (t) {
                return this.each((function () {
                    var e = T(this, "bs.tooltip"), n = "object" == typeof t && t;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(o, null, [{
                key: "Default", get: function () {
                    return Be
                }
            }, {
                key: "NAME", get: function () {
                    return je
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.tooltip"
                }
            }, {
                key: "Event", get: function () {
                    return He
                }
            }, {
                key: "EVENT_KEY", get: function () {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType", get: function () {
                    return Pe
                }
            }]), o
        }(R);
    b((function () {
        var t = _();
        if (t) {
            var e = t.fn[je];
            t.fn[je] = Re.jQueryInterface, t.fn[je].Constructor = Re, t.fn[je].noConflict = function () {
                return t.fn[je] = e, Re.jQueryInterface
            }
        }
    }));
    var We = "popover", Ke = new RegExp("(^|\\s)bs-popover\\S+", "g"), Qe = n({}, Re.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Ue = n({}, Re.DefaultType, {content: "(string|element|function)"}), Fe = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    }, Ye = function (t) {
        function n() {
            return t.apply(this, arguments) || this
        }

        i(n, t);
        var o = n.prototype;
        return o.isWithContent = function () {
            return this.getTitle() || this._getContent()
        }, o.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(q.findOne(".popover-header", t), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)), this.setElementContent(q.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
        }, o._addAttachmentClass = function (t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }, o._getContent = function () {
            return this._element.getAttribute("data-bs-content") || this.config.content
        }, o._cleanTipClass = function () {
            var t = this.getTipElement(), e = t.getAttribute("class").match(Ke);
            null !== e && e.length > 0 && e.map((function (t) {
                return t.trim()
            })).forEach((function (e) {
                return t.classList.remove(e)
            }))
        }, n.jQueryInterface = function (t) {
            return this.each((function () {
                var e = T(this, "bs.popover"), i = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new n(this, i), E(this, "bs.popover", e)), "string" == typeof t)) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }))
        }, e(n, null, [{
            key: "Default", get: function () {
                return Qe
            }
        }, {
            key: "NAME", get: function () {
                return We
            }
        }, {
            key: "DATA_KEY", get: function () {
                return "bs.popover"
            }
        }, {
            key: "Event", get: function () {
                return Fe
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return ".bs.popover"
            }
        }, {
            key: "DefaultType", get: function () {
                return Ue
            }
        }]), n
    }(Re);
    b((function () {
        var t = _();
        if (t) {
            var e = t.fn[We];
            t.fn[We] = Ye.jQueryInterface, t.fn[We].Constructor = Ye, t.fn[We].noConflict = function () {
                return t.fn[We] = e, Ye.jQueryInterface
            }
        }
    }));
    var qe = "scrollspy", ze = {offset: 10, method: "auto", target: ""},
        Ve = {offset: "number", method: "string", target: "(string|element)"}, Xe = function (t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._scrollElement = "BODY" === e.tagName ? window : e, i._config = i._getConfig(n), i._selector = i._config.target + " .nav-link, " + i._config.target + " .list-group-item, " + i._config.target + " .dropdown-item", i._offsets = [], i._targets = [], i._activeTarget = null, i._scrollHeight = 0, H.on(i._scrollElement, "scroll.bs.scrollspy", (function (t) {
                    return i._process(t)
                })), i.refresh(), i._process(), i
            }

            i(o, t);
            var r = o.prototype;
            return r.refresh = function () {
                var t = this, e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), q.find(this._selector).map((function (t) {
                    var e = l(t), o = e ? q.findOne(e) : null;
                    if (o) {
                        var r = o.getBoundingClientRect();
                        if (r.width || r.height) return [Y[n](o).top + i, e]
                    }
                    return null
                })).filter((function (t) {
                    return t
                })).sort((function (t, e) {
                    return t[0] - e[0]
                })).forEach((function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, r.dispose = function () {
                t.prototype.dispose.call(this), H.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, r._getConfig = function (t) {
                if ("string" != typeof (t = n({}, ze, "object" == typeof t && t ? t : {})).target && d(t.target)) {
                    var e = t.target.id;
                    e || (e = s(qe), t.target.id = e), t.target = "#" + e
                }
                return p(qe, t, Ve), t
            }, r._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, r._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, r._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, r._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, r._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function (e) {
                    return e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
                })), n = q.findOne(e.join(","));
                n.classList.contains("dropdown-item") ? (q.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), q.parents(n, ".nav, .list-group").forEach((function (t) {
                    q.prev(t, ".nav-link, .list-group-item").forEach((function (t) {
                        return t.classList.add("active")
                    })), q.prev(t, ".nav-item").forEach((function (t) {
                        q.children(t, ".nav-link").forEach((function (t) {
                            return t.classList.add("active")
                        }))
                    }))
                }))), H.trigger(this._scrollElement, "activate.bs.scrollspy", {relatedTarget: t})
            }, r._clear = function () {
                q.find(this._selector).filter((function (t) {
                    return t.classList.contains("active")
                })).forEach((function (t) {
                    return t.classList.remove("active")
                }))
            }, o.jQueryInterface = function (t) {
                return this.each((function () {
                    var e = T(this, "bs.scrollspy");
                    if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, e(o, null, [{
                key: "Default", get: function () {
                    return ze
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.scrollspy"
                }
            }]), o
        }(R);
    H.on(window, "load.bs.scrollspy.data-api", (function () {
        q.find('[data-bs-spy="scroll"]').forEach((function (t) {
            return new Xe(t, Y.getDataAttributes(t))
        }))
    })), b((function () {
        var t = _();
        if (t) {
            var e = t.fn[qe];
            t.fn[qe] = Xe.jQueryInterface, t.fn[qe].Constructor = Xe, t.fn[qe].noConflict = function () {
                return t.fn[qe] = e, Xe.jQueryInterface
            }
        }
    }));
    var $e = function (t) {
        function n() {
            return t.apply(this, arguments) || this
        }

        i(n, t);
        var o = n.prototype;
        return o.show = function () {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = c(this._element), i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = q.find(o, i))[e.length - 1]
                }
                var r = null;
                if (e && (r = H.trigger(e, "hide.bs.tab", {relatedTarget: this._element})), !(H.trigger(this._element, "show.bs.tab", {relatedTarget: e}).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function () {
                        H.trigger(e, "hidden.bs.tab", {relatedTarget: t._element}), H.trigger(t._element, "shown.bs.tab", {relatedTarget: e})
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }, o._activate = function (t, e, n) {
            var i = this,
                o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? q.children(e, ".active") : q.find(":scope > li > .active", e))[0],
                r = n && o && o.classList.contains("fade"), s = function () {
                    return i._transitionComplete(t, o, n)
                };
            if (o && r) {
                var a = u(o);
                o.classList.remove("show"), H.one(o, "transitionend", s), h(o, a)
            } else s()
        }, o._transitionComplete = function (t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = q.findOne(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            (t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), v(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && q.find(".dropdown-toggle").forEach((function (t) {
                return t.classList.add("active")
            })), t.setAttribute("aria-expanded", !0));
            n && n()
        }, n.jQueryInterface = function (t) {
            return this.each((function () {
                var e = T(this, "bs.tab") || new n(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            }))
        }, e(n, null, [{
            key: "DATA_KEY", get: function () {
                return "bs.tab"
            }
        }]), n
    }(R);
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
        t.preventDefault(), (T(this, "bs.tab") || new $e(this)).show()
    })), b((function () {
        var t = _();
        if (t) {
            var e = t.fn.tab;
            t.fn.tab = $e.jQueryInterface, t.fn.tab.Constructor = $e, t.fn.tab.noConflict = function () {
                return t.fn.tab = e, $e.jQueryInterface
            }
        }
    }));
    var Ge = {animation: "boolean", autohide: "boolean", delay: "number"},
        Ze = {animation: !0, autohide: !0, delay: 5e3}, Je = function (t) {
            function o(e, n) {
                var i;
                return (i = t.call(this, e) || this)._config = i._getConfig(n), i._timeout = null, i._setListeners(), i
            }

            i(o, t);
            var r = o.prototype;
            return r.show = function () {
                var t = this;
                if (!H.trigger(this._element, "show.bs.toast").defaultPrevented) {
                    this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                    var e = function () {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), H.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"), v(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var n = u(this._element);
                        H.one(this._element, "transitionend", e), h(this._element, n)
                    } else e()
                }
            }, r.hide = function () {
                var t = this;
                if (this._element.classList.contains("show") && !H.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                    var e = function () {
                        t._element.classList.add("hide"), H.trigger(t._element, "hidden.bs.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var n = u(this._element);
                        H.one(this._element, "transitionend", e), h(this._element, n)
                    } else e()
                }
            }, r.dispose = function () {
                this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), H.off(this._element, "click.dismiss.bs.toast"), t.prototype.dispose.call(this), this._config = null
            }, r._getConfig = function (t) {
                return t = n({}, Ze, Y.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), p("toast", t, this.constructor.DefaultType), t
            }, r._setListeners = function () {
                var t = this;
                H.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (function () {
                    return t.hide()
                }))
            }, r._clearTimeout = function () {
                clearTimeout(this._timeout), this._timeout = null
            }, o.jQueryInterface = function (t) {
                return this.each((function () {
                    var e = T(this, "bs.toast");
                    if (e || (e = new o(this, "object" == typeof t && t)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t](this)
                    }
                }))
            }, e(o, null, [{
                key: "DefaultType", get: function () {
                    return Ge
                }
            }, {
                key: "Default", get: function () {
                    return Ze
                }
            }, {
                key: "DATA_KEY", get: function () {
                    return "bs.toast"
                }
            }]), o
        }(R);
    return b((function () {
        var t = _();
        if (t) {
            var e = t.fn.toast;
            t.fn.toast = Je.jQueryInterface, t.fn.toast.Constructor = Je, t.fn.toast.noConflict = function () {
                return t.fn.toast = e, Je.jQueryInterface
            }
        }
    })), {
        Alert: K,
        Button: Q,
        Carousel: Z,
        Collapse: nt,
        Dropdown: Te,
        Modal: Le,
        Popover: Ye,
        ScrollSpy: Xe,
        Tab: $e,
        Toast: Je,
        Tooltip: Re
    }
}));
!function () {
    var e = function (t, i) {
        function s() {
            this.q = [], this.add = function (e) {
                this.q.push(e)
            };
            var e, t;
            this.call = function () {
                for (e = 0, t = this.q.length; e < t; e++) this.q[e].call()
            }
        }

        function o(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }

        function n(e, t) {
            if (e.resizedAttached) {
                if (e.resizedAttached) return void e.resizedAttached.add(t)
            } else e.resizedAttached = new s, e.resizedAttached.add(t);
            e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                n = "position: absolute; left: 0; top: 0; transition: 0s;";
            e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + n + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + n + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
                fixed: 1,
                absolute: 1
            }[o(e, "position")] || (e.style.position = "relative");
            var d, r, l = e.resizeSensor.childNodes[0], c = l.childNodes[0], h = e.resizeSensor.childNodes[1],
                a = (h.childNodes[0], function () {
                    c.style.width = l.offsetWidth + 10 + "px", c.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, h.scrollLeft = h.scrollWidth, h.scrollTop = h.scrollHeight, d = e.offsetWidth, r = e.offsetHeight
                });
            a();
            var f = function () {
                e.resizedAttached && e.resizedAttached.call()
            }, u = function (e, t, i) {
                e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
            }, p = function () {
                e.offsetWidth == d && e.offsetHeight == r || f(), a()
            };
            u(l, "scroll", p), u(h, "scroll", p)
        }

        var d = Object.prototype.toString.call(t),
            r = "[object Array]" === d || "[object NodeList]" === d || "[object HTMLCollection]" === d || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
        if (r) for (var l = 0, c = t.length; l < c; l++) n(t[l], i); else n(t, i);
        this.detach = function () {
            if (r) for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]); else e.detach(t)
        }
    };
    e.detach = function (e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
    }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : window.ResizeSensor = e
}();
!function (i) {
    i.fn.theiaStickySidebar = function (t) {
        function e(t, e) {
            var a = o(t, e);
            a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
                return function (a) {
                    var n = o(t, e);
                    n && i(this).unbind(a)
                }
            }(t, e)))
        }

        function o(t, e) {
            return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0)
        }

        function a(t, e) {
            t.initialized = !0;
            var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
            0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
                function e() {
                    a.fixedScrollTop = 0, a.sidebar.css({"min-height": "1px"}), a.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function o(t) {
                    var e = t.height();
                    return t.children().each(function () {
                        e = Math.max(e, i(this).height())
                    }), e
                }

                var a = {};
                if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
                    position: a.options.defaultPosition,
                    overflow: "visible",
                    "-webkit-box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "box-sizing": "border-box"
                }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length) {
                    var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    a.sidebar.find("script").filter(function (i, t) {
                        return 0 === t.type.length || t.type.match(s)
                    }).remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar)
                }
                a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
                var r = a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight();
                a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function (a) {
                    if (a.stickySidebar.is(":visible")) {
                        if (i("body").width() < a.options.minWidth) return void e();
                        if (a.options.disableOnResponsiveLayouts) {
                            var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
                            if (s + 50 > a.container.width()) return void e()
                        }
                        var r = i(document).scrollTop(), d = "static";
                        if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
                            var c, p = a.paddingTop + t.additionalMarginTop,
                                b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                                l = a.sidebar.offset().top, f = a.sidebar.offset().top + o(a.container),
                                h = 0 + t.additionalMarginTop,
                                g = a.stickySidebar.outerHeight() + p + b < i(window).height();
                            c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
                            var u = l - r + a.paddingTop, S = f - r - a.paddingBottom - a.marginBottom,
                                y = a.stickySidebar.offset().top - r, m = a.previousScrollTop - r;
                            "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight());
                            var k = a.container.height() == a.stickySidebar.outerHeight();
                            d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed"
                        }
                        if ("fixed" == d) {
                            var v = i(document).scrollLeft();
                            a.stickySidebar.css({
                                position: "fixed",
                                width: n(a.stickySidebar) + "px",
                                transform: "translateY(" + y + "px)",
                                left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == d) {
                            var x = {};
                            "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x)
                        } else "static" == d && e();
                        "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({"min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom}), a.previousScrollTop = r
                    }
                }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a)), i(window).on("resize." + a.options.namespace, function (i) {
                    return function () {
                        i.stickySidebar.css({position: "static"}), i.onScroll(i)
                    }
                }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
                    return function () {
                        i.onScroll(i)
                    }
                }(a))
            })
        }

        function n(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width
            } catch (i) {
            }
            return "undefined" == typeof t && (t = i.width()), t
        }

        var s = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this
    }
}(jQuery);
!function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var l = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(l.exports, l, l.exports, n), l.l = !0, l.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var l in e) n.d(o, l, function (t) {
            return e[t]
        }.bind(null, l));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
    (function (o) {
        var l, r, i;
        !function (o, s) {
            r = [], l = function (e) {
                "use strict";
                var t, o, l, r = n(2), i = {}, s = {}, c = n(3), a = n(4),
                    u = !!(e && e.document && e.document.querySelector && e.addEventListener);
                if ("undefined" == typeof window && !u) return;
                var d = Object.prototype.hasOwnProperty;

                function f(e, t, n) {
                    var o, l;
                    return t || (t = 250), function () {
                        var r = n || this, i = +new Date, s = arguments;
                        o && i < o + t ? (clearTimeout(l), l = setTimeout(function () {
                            o = i, e.apply(r, s)
                        }, t)) : (o = i, e.apply(r, s))
                    }
                }

                return s.destroy = function () {
                    if (!i.skipRendering) try {
                        document.querySelector(i.tocSelector).innerHTML = ""
                    } catch (e) {
                        console.warn("Element not found: " + i.tocSelector)
                    }
                    i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(i.scrollContainer).removeEventListener("resize", this._scrollListener, !1), t && document.querySelector(i.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), t && document.removeEventListener("click", this._clickListener, !1))
                }, s.init = function (e) {
                    if (u && (i = function () {
                        for (var e = {}, t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) d.call(n, o) && (e[o] = n[o])
                        }
                        return e
                    }(r, e || {}), this.options = i, this.state = {}, i.scrollSmooth && (i.duration = i.scrollSmoothDuration, i.offset = i.scrollSmoothOffset, s.scrollSmooth = n(5).initSmoothScrolling(i)), t = c(i), o = a(i), this._buildHtml = t, this._parseContent = o, s.destroy(), null !== (l = o.selectHeadings(i.contentSelector, i.headingSelector)))) {
                        var m = o.nestHeadingsArray(l).nest;
                        i.skipRendering || t.render(i.tocSelector, m), this._scrollListener = f(function (e) {
                            t.updateToc(l);
                            var n = e && e.target && e.target.scrollingElement && 0 === e.target.scrollingElement.scrollTop;
                            (e && (0 === e.eventPhase || null === e.currentTarget) || n) && (t.updateToc(l), i.scrollEndCallback && i.scrollEndCallback(e))
                        }, i.throttleTimeout), this._scrollListener(), i.scrollContainer && document.querySelector(i.scrollContainer) ? (document.querySelector(i.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(i.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
                        var h = null;
                        return this._clickListener = f(function (e) {
                            i.scrollSmooth && t.disableTocAnimation(e), t.updateToc(l), h && clearTimeout(h), h = setTimeout(function () {
                                t.enableTocAnimation()
                            }, i.scrollSmoothDuration)
                        }, i.throttleTimeout), i.scrollContainer && document.querySelector(i.scrollContainer) ? document.querySelector(i.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this
                    }
                }, s.refresh = function (e) {
                    s.destroy(), s.init(e || this.options)
                }, e.tocbot = s, s
            }(o), void 0 === (i = "function" == typeof l ? l.apply(t, r) : l) || (e.exports = i)
        }(void 0 !== o ? o : this.window || this.global)
    }).call(this, n(1))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t) {
    e.exports = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        hasInnerContainers: !1,
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        activeListItemClass: "is-active-li",
        collapseDepth: 0,
        scrollSmooth: !0,
        scrollSmoothDuration: 420,
        scrollSmoothOffset: 0,
        scrollEndCallback: function (e) {
        },
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1,
        onClick: function (e) {
        },
        orderedList: !0,
        scrollContainer: null,
        skipRendering: !1,
        headingLabelCallback: !1,
        ignoreHiddenElements: !1,
        headingObjectCallback: null,
        basePath: ""
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = [].forEach, n = [].some, o = document.body, l = !0, r = " ";

        function i(n, o) {
            var l = o.appendChild(function (n) {
                var o = document.createElement("li"), l = document.createElement("a");
                e.listItemClass && o.setAttribute("class", e.listItemClass);
                e.onClick && (l.onclick = e.onClick);
                e.includeHtml && n.childNodes.length ? t.call(n.childNodes, function (e) {
                    l.appendChild(e.cloneNode(!0))
                }) : l.textContent = n.textContent;
                return l.setAttribute("href", e.basePath + "#" + n.id), l.setAttribute("class", e.linkClass + r + "node-name--" + n.nodeName + r + e.extraLinkClasses), o.appendChild(l), o
            }(n));
            if (n.children.length) {
                var c = s(n.isCollapsed);
                n.children.forEach(function (e) {
                    i(e, c)
                }), l.appendChild(c)
            }
        }

        function s(t) {
            var n = e.orderedList ? "ol" : "ul", o = document.createElement(n),
                l = e.listClass + r + e.extraListClasses;
            return t && (l += r + e.collapsibleClass, l += r + e.isCollapsedClass), o.setAttribute("class", l), o
        }

        return {
            enableTocAnimation: function () {
                l = !0
            }, disableTocAnimation: function (t) {
                var n = t.target || t.srcElement;
                "string" == typeof n.className && -1 !== n.className.indexOf(e.linkClass) && (l = !1)
            }, render: function (e, t) {
                var n = s(!1);
                t.forEach(function (e) {
                    i(e, n)
                });
                var o = document.querySelector(e);
                if (null !== o) return o.firstChild && o.removeChild(o.firstChild), 0 === t.length ? o : o.appendChild(n)
            }, updateToc: function (i) {
                var s;
                s = e.scrollContainer && document.querySelector(e.scrollContainer) ? document.querySelector(e.scrollContainer).scrollTop : document.documentElement.scrollTop || o.scrollTop, e.positionFixedSelector && function () {
                    var t;
                    t = e.scrollContainer && document.querySelector(e.scrollContainer) ? document.querySelector(e.scrollContainer).scrollTop : document.documentElement.scrollTop || o.scrollTop;
                    var n = document.querySelector(e.positionFixedSelector);
                    "auto" === e.fixedSidebarOffset && (e.fixedSidebarOffset = document.querySelector(e.tocSelector).offsetTop), t > e.fixedSidebarOffset ? -1 === n.className.indexOf(e.positionFixedClass) && (n.className += r + e.positionFixedClass) : n.className = n.className.split(r + e.positionFixedClass).join("")
                }();
                var c, a = i;
                if (l && null !== document.querySelector(e.tocSelector) && a.length > 0) {
                    n.call(a, function (t, n) {
                        return function t(n) {
                            var o = 0;
                            return n !== document.querySelector(e.contentSelector && null != n) && (o = n.offsetTop, e.hasInnerContainers && (o += t(n.offsetParent))), o
                        }(t) > s + e.headingsOffset + 10 ? (c = a[0 === n ? n : n - 1], !0) : n === a.length - 1 ? (c = a[a.length - 1], !0) : void 0
                    });
                    var u = document.querySelector(e.tocSelector).querySelectorAll("." + e.linkClass);
                    t.call(u, function (t) {
                        t.className = t.className.split(r + e.activeLinkClass).join("")
                    });
                    var d = document.querySelector(e.tocSelector).querySelectorAll("." + e.listItemClass);
                    t.call(d, function (t) {
                        t.className = t.className.split(r + e.activeListItemClass).join("")
                    });
                    var f = document.querySelector(e.tocSelector).querySelector("." + e.linkClass + ".node-name--" + c.nodeName + '[href="' + e.basePath + "#" + c.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g, "\\$1") + '"]');
                    -1 === f.className.indexOf(e.activeLinkClass) && (f.className += r + e.activeLinkClass);
                    var m = f.parentNode;
                    m && -1 === m.className.indexOf(e.activeListItemClass) && (m.className += r + e.activeListItemClass);
                    var h = document.querySelector(e.tocSelector).querySelectorAll("." + e.listClass + "." + e.collapsibleClass);
                    t.call(h, function (t) {
                        -1 === t.className.indexOf(e.isCollapsedClass) && (t.className += r + e.isCollapsedClass)
                    }), f.nextSibling && -1 !== f.nextSibling.className.indexOf(e.isCollapsedClass) && (f.nextSibling.className = f.nextSibling.className.split(r + e.isCollapsedClass).join("")), function t(n) {
                        return -1 !== n.className.indexOf(e.collapsibleClass) && -1 !== n.className.indexOf(e.isCollapsedClass) ? (n.className = n.className.split(r + e.isCollapsedClass).join(""), t(n.parentNode.parentNode)) : n
                    }(f.parentNode.parentNode)
                }
            }
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = [].reduce;

        function n(e) {
            return e[e.length - 1]
        }

        function o(t) {
            if (!(t instanceof window.HTMLElement)) return t;
            if (e.ignoreHiddenElements && (!t.offsetHeight || !t.offsetParent)) return null;
            var n = {
                id: t.id,
                children: [],
                nodeName: t.nodeName,
                headingLevel: function (e) {
                    return +e.nodeName.split("H").join("")
                }(t),
                textContent: e.headingLabelCallback ? String(e.headingLabelCallback(t.textContent)) : t.textContent.trim()
            };
            return e.includeHtml && (n.childNodes = t.childNodes), e.headingObjectCallback ? e.headingObjectCallback(n, t) : n
        }

        return {
            nestHeadingsArray: function (l) {
                return t.call(l, function (t, l) {
                    var r = o(l);
                    return r && function (t, l) {
                        for (var r = o(t), i = r.headingLevel, s = l, c = n(s), a = i - (c ? c.headingLevel : 0); a > 0;) (c = n(s)) && void 0 !== c.children && (s = c.children), a--;
                        i >= e.collapseDepth && (r.isCollapsed = !0), s.push(r)
                    }(r, t.nest), t
                }, {nest: []})
            }, selectHeadings: function (t, n) {
                var o = n;
                e.ignoreSelector && (o = n.split(",").map(function (t) {
                    return t.trim() + ":not(" + e.ignoreSelector + ")"
                }));
                try {
                    return document.querySelector(t).querySelectorAll(o)
                } catch (e) {
                    return console.warn("Element not found: " + t), null
                }
            }
        }
    }
}, function (e, t) {
    function n(e, t) {
        var n = window.pageYOffset,
            o = {duration: t.duration, offset: t.offset || 0, callback: t.callback, easing: t.easing || d},
            l = document.querySelector('[id="' + decodeURI(e).split("#").join("") + '"]'),
            r = typeof e === "string" ? o.offset + (e ? l && l.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : e,
            i = typeof o.duration === "function" ? o.duration(r) : o.duration, s, c;

        function a(e) {
            c = e - s;
            window.scrollTo(0, o.easing(c, n, r, i));
            if (c < i) {
                requestAnimationFrame(a)
            } else {
                u()
            }
        }

        function u() {
            if (window.scrollTo(0, n + r), "function" == typeof o.callback) {
                o.callback()
            }
        }

        function d(e, t, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
        }

        requestAnimationFrame(function (e) {
            s = e;
            a(e)
        })
    }

    t.initSmoothScrolling = function (e) {
        document.documentElement.style;
        var t = e.duration, o = e.offset, l = location.hash ? r(location.href) : location.href;

        function r(e) {
            return e.slice(0, e.lastIndexOf("#"))
        }

        !function () {
            document.body.addEventListener("click", function (i) {
                if (!function (e) {
                    return "a" === e.tagName.toLowerCase() && (e.hash.length > 0 || "#" === e.href.charAt(e.href.length - 1)) && (r(e.href) === l || r(e.href) + "#" === l)
                }(i.target) || i.target.className.indexOf("no-smooth-scroll") > -1 || "#" === i.target.href.charAt(i.target.href.length - 2) && "!" === i.target.href.charAt(i.target.href.length - 1) || -1 === i.target.className.indexOf(e.linkClass)) return;
                n(i.target.hash, {
                    duration: t, offset: o, callback: function () {
                        !function (e) {
                            var t = document.getElementById(e.substring(1));
                            t && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
                        }(i.target.hash)
                    }
                })
            }, !1)
        }()
    }
}]);
window.$ = jQuery;
var isApollo = $('meta[name=apollo-enabled]').attr('content') === '1';

function toggleCommentAuthorInfo() {
    var changeMsg = '[编辑资料]';
    var closeMsg = '[我写好了]';
    $('.comment-form-info').slideToggle('slow', function () {
        if ($('.comment-form-info').css('display') == 'none') {
            $('#toggle-comment-author-info').html(changeMsg);
        } else {
            $('#toggle-comment-author-info').html(closeMsg);
        }
    });
}

function setLightModeClass() {
    $('body').removeClass('nice-dark-mode');
    $('.logo-dark').removeClass('d-inline-block');
    $('.logo-dark').addClass('d-none');
    $('.logo-light').removeClass('d-none');
    $('.logo-light').addClass('d-inline-block');
}

function setDarkMode() {
    $.ajax({
        url: globals.ajax_url,
        type: 'POST',
        dataType: 'html',
        data: {toggle_action: 'on', action: 'pandapro_toggle_dark_mode',},
    }).done(function () {
        setDarkModeClass();
    });
}

function setDarkModeClass() {
    $('body').addClass('nice-dark-mode');
    $('.logo-dark').removeClass('d-none');
    $('.logo-dark').addClass('d-inline-block');
    $('.logo-light').removeClass('d-inline-block');
    $('.logo-light').addClass('d-none');
}

function setLightMode() {
    $.ajax({
        url: globals.ajax_url,
        type: 'POST',
        dataType: 'html',
        data: {toggle_action: 'off', action: 'pandapro_toggle_dark_mode',},
    }).done(function () {
        setLightModeClass();
    });
}

function toggleSidebar() {
    $('.sidebar-close, .mobile-overlay').on('click', function () {
        $('body').removeClass('modal-open');
        $('.mobile-sidebar').removeClass('active');
        $('.mobile-overlay').removeClass('active');
    });
    $('#sidebarCollapse').on('click', function () {
        $('body').addClass('modal-open');
        $('.mobile-sidebar').addClass('active');
        $('.mobile-overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
}

function setCurrentmenu() {
    var b = $('.mobile-sidebar-menu .current-menu-parent');
    if (b.hasClass('current-menu-ancestor')) {
        b.children().siblings('.sub-menu').stop(!0).slideDown(300);
    }
}

jQuery(document).ready(function ($) {
    toggleSidebar();
    setCurrentmenu();
    var Mwidth = 767;
    if ($(window).width() > Mwidth) {
        var headerHeight = $('.header').height();
        $(window).on('scroll', {TopPrev: 0}, function () {
            var TopCurrent = $(window).scrollTop();
            if (TopCurrent < this.TopPrev) {
                if (TopCurrent > 0 && $('.header').hasClass('fixed-header')) {
                    $('.header').addClass('visible-scroll-up');
                } else {
                    $('.header').removeClass('visible-scroll-up fixed-header');
                }
            } else {
                $('.header').removeClass('visible-scroll-up');
                if (TopCurrent > headerHeight && !$('.header').hasClass('fixed-header')) $('.header').addClass('fixed-header');
            }
            this.TopPrev = TopCurrent;
        });
    }
    $(window).scroll(function () {
        var $window = $(window), $window_width = $window.width();
        if ($(this).scrollTop() > 200 && $window_width >= 1024) {
            $('#scrollToTOP').filter(':hidden').fadeIn('fast');
        } else {
            $('#scrollToTOP').filter(':visible').fadeOut('fast');
        }
    });
    $('#scrollToTOP').on('click', function () {
        $('html, body').animate({scrollTop: 0,}, 'slow');
        return false;
    });
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({scrollTop: target.offset().top - 60,}, 1000, 'easeInOutExpo');
                return false;
            }
        }
    });
    $('.sidebar').theiaStickySidebar({additionalMarginTop: 20, additionalMarginBottom: 20,});
    $('.sidebar-author').theiaStickySidebar({additionalMarginTop: 100, additionalMarginBottom: 20,});
    if ($('.main-menu li').hasClass('menu-item-has-children')) {
        $('.main-menu .menu-item-has-children').prepend('<span class="icon-sub-menu"><i class="iconfont icon-jiantou1"></i></span>');
    }
    $('.mobile-sidebar-menu .menu-item-has-children > a').append('<div class="dropdown-sub-menu"><span class="iconfont icon-right"></span></div>'), $(document).on('click', '.mobile-sidebar-menu .menu-item-has-children > a', function (event) {
        var i = $(this);
        i.siblings('.mobile-sidebar-menu .sub-menu')[0] && (event.preventDefault(), i.parent().hasClass('in') ? (i.parent().removeClass('in'), i.parent().find('.in').removeClass('in'), i.parent().find('.sub-menu').stop(!0).slideUp(300)) : (i.closest('.in')[0] || (i.find('.menu-item-has-children.in .sub-menu').stop(!0).slideUp(300), i.find('.menu-item-has-children.in').removeClass('in')), i.parent().addClass('in'), i.parent().siblings('.in').find('.sub-menu').stop(!0).slideUp(300), i.parent().siblings('.current-menu-parent').find('.sub-menu').stop(!0).slideUp(300), i.parent().siblings('.in').removeClass('in'), i.siblings('.sub-menu').stop(!0).slideDown(300)));
    });
    var banner1 = $('.banner-style-1 .swiper-container');
    if (banner1.length > 0) {
        var banner1 = new Swiper('.banner-style-1 .swiper-container', {
            loop: true,
            spaceBetween: 15,
            autoplay: {delay: 5000, disableOnInteraction: false,},
            pagination: {el: '.swiper-pagination', clickable: true,},
        });
    }
    var banner2 = $('.banner-style-2 .swiper-container');
    if (banner2.length > 0) {
        var banner2 = new Swiper('.banner-style-2 .swiper-container', {
            loop: true,
            spaceBetween: 15,
            autoplay: {delay: 5000, disableOnInteraction: false,},
            pagination: {el: '.swiper-pagination', clickable: true,},
        });
    }
    var banner3 = $('.banner-style-3 .swiper-container');
    if (banner3.length > 0) {
        var banner3 = new Swiper('.banner-style-3 .swiper-container', {
            loop: true,
            autoplay: {delay: 5000, disableOnInteraction: false,},
            pagination: {el: '.swiper-pagination', clickable: true,},
            navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',},
        });
    }
    var mallBanner = $('.points-shop-banner .swiper-container');
    if (mallBanner.length > 0) {
        var mallBanner = new Swiper('.points-shop-banner .swiper-container', {
            loop: true,
            spaceBetween: 15,
            autoplay: {delay: 5000, disableOnInteraction: false,},
            pagination: {el: '.swiper-pagination', clickable: true,},
        });
    }
    var mallNavSwiper = $('.points-shop-navbar .swiper-container');
    if (mallNavSwiper.length > 0) {
        var mallNavSwiper = new Swiper('.points-shop-navbar .swiper-container', {
            slidesPerView: 'auto',
            freeMode: true,
            breakpoints: {
                320: {spaceBetween: 8,},
                992: {
                    spaceBetween: 20,
                    navigation: {
                        nextEl: '.points-shop-navbar .button-next',
                        prevEl: '.points-shop-navbar .button-prev',
                    },
                }
            },
        });
    }
    var ajaxSwiper = $('.list-ajax-menu .swiper-container');
    if (ajaxSwiper.length > 0) {
        var ajaxSwiper = new Swiper('.list-ajax-menu .swiper-container', {
            spaceBetween: 15,
            slidesPerView: 'auto',
            freeMode: true,
            breakpoints: {
                640: {
                    navigation: {
                        nextEl: '.list-ajax-menu .button-next',
                        prevEl: '.list-ajax-menu .button-prev',
                    },
                }
            },
        });
    }
    var columnsSwiper = $('.index-columns-cat .swiper-container');
    if (columnsSwiper.length > 0) {
        var columnsSwiper = new Swiper('.index-columns-cat .swiper-container', {
            freeMode: true,
            breakpoints: {
                320: {spaceBetween: 10, slidesPerView: 'auto',},
                640: {spaceBetween: 10, slidesPerView: 'auto',},
                1200: {
                    navigation: {
                        nextEl: '.index-columns-cat .button-next',
                        prevEl: '.index-columns-cat .button-prev',
                    }, spaceBetween: 20, slidesPerView: 6,
                }
            },
        });
    }
    $(document).on('click', '.list-ajax-menu .btn-ajaxpost', function (event) {
        event.preventDefault();
        var t = $(this);
        if (!t.hasClass('current')) {
            $('.list-ajax-menu .btn-ajaxpost').attr('class', 'btn btn-light btn-rounded btn-sm btn-ajaxpost btn-w-md');
            t.addClass('current');
            var cid = t.data('cid');
            if (cid) {
                $('.dposts-ajax-load').data('tabcid', cid);
            } else {
                $('.dposts-ajax-load').removeData('tabcid');
            }
            $('.dposts-ajax-load').data('paged', 1);
            $('.' + $('.dposts-ajax-load').data().append).html('');
            $('.dposts-ajax-load').addClass('loading').text(__.load_more);
            $('.list-ajax-menu .btn-ajaxpost').attr('disabled', true);
            ajax_load_posts($('.dposts-ajax-load').data(), function () {
                $('.list-ajax-menu .btn-ajaxpost').removeAttr('disabled');
            });
        }
    });

    function ajax_load_comments(data) {
        var buttonDOM = $('#comments-next-button');
        buttonDOM.hide();
        $.ajax({url: globals.ajax_url, type: 'POST', dataType: 'html', data: data,}).done(function (response) {
            if (response) {
                if (data.commentspage == 'newest') {
                    buttonDOM.data('paged', data.paged * 1 - 1);
                } else {
                    buttonDOM.data('paged', data.paged * 1 + 1);
                }
                $('.' + data.append).append(response);
                buttonDOM.show();
            } else {
                buttonDOM.hide();
            }
        });
    }

    var Tocwindow_width = $(window).width();
    if ($('.toc').length > 0 && Tocwindow_width > 1366) {
        var headerEl = 'h2,h3,h4', content = '.toc-class', idArr = {};
        $('.post-content').find(headerEl).parent().addClass('toc-class');
        $(content).children(headerEl).each(function () {
            var headerId = $(this).text().replace(/[\s|\~|`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\||\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\：|\，|\。]/g, '');
            headerId = headerId.toLowerCase();
            if (idArr[headerId]) {
                $(this).attr('id', headerId + '-' + idArr[headerId]);
                idArr[headerId]++;
            } else {
                idArr[headerId] = 1;
                $(this).attr('id', headerId);
            }
        });
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: content,
            headingSelector: headerEl,
            positionFixedSelector: '.toc',
            positionFixedClass: 'is-position-fixed',
            scrollSmooth: true,
            scrollSmoothOffset: -100,
            headingsOffset: 100
        });
    }
    $(document).on('click', '#comments-next-button', function (event) {
        event.preventDefault();
        ajax_load_comments($('#comments-next-button').data());
    });
    $(document).on('click', '.btn-post-like[data-action="like"]', function (event) {
        event.preventDefault();
        var $this = $('.btn-post-like');
        var id = $(this).data('id');
        if ($this.hasClass('requesting')) {
            return false;
        }
        $this.addClass('requesting');
        $.ajax({
            url: globals.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {action: 'pandapro_like', id, like_action: 'like'},
        }).done(function (data) {
            $this.addClass('current');
            $this.attr('data-action', 'unlike');
            ncPopupTips(1, __.thank_you);
            $('.like-count').html(data.trim());
            isApollo && apolloAjaxPostLikeSection(id);
        }).always(function () {
            $this.removeClass('requesting');
        });
        return false;
    });
    $(document).on('click', '.btn-post-like[data-action="unlike"]', function (event) {
        event.preventDefault();
        var $this = $('.btn-post-like');
        var id = $(this).data('id');
        if ($this.hasClass('requesting')) {
            return false;
        }
        $this.addClass('requesting');
        $this.removeClass('current');
        $.ajax({
            url: globals.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {action: 'pandapro_like', id, like_action: 'unlike'},
        }).done(function (data) {
            $this.removeClass('current');
            $this.attr('data-action', 'like');
            ncPopupTips(0, __.cancelled);
            $('.like-count').html(data.trim());
            isApollo && apolloAjaxPostLikeSection(id);
        }).always(function () {
            $this.removeClass('requesting');
        });
        return false;
    });

    function apolloAjaxPostLikeSection(id) {
        $.ajax({
            url: globals.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {action: 'ajax_apollo_userlike_section', id: id,},
        }).done(function (response) {
            $('#apollo-postlike-section').length > 0 && $('#apollo-postlike-section').remove();
            if (response.trim()) {
                $('.post-action-like').after(response);
            }
        });
    }

    $(document).on('click', '.single-popup', function (event) {
        event.preventDefault();
        var img = $(this).data('img');
        var title = $(this).data('title');
        var desc = $(this).data('desc');
        var html = '<div class="text-center"><h6 class="py-1">' +
            title + '</h6>\
                    <div class="text-muted text-sm mb-2" > ' +
            desc + ' </div>\
                    <img src="' +
            img + '" alt="' +
            title + '" style="width:100%;height:auto;">\
                    </div>';
        ncPopup('small', html);
    });
    $(document).on('click', '.plus-power-popup', function (event) {
        event.preventDefault();
        var $this = $('#plus-power-popup-wrap');
        ncPopup('no-padding', $this.html());
    });
    $(document).on('click', '.btn-share-toggler', function (event) {
        event.preventDefault();
        ncPopup('middle', $('#single-share-template').html());
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }

    function givenElementInViewport(el, fn) {
        return function () {
            if (isElementInViewport(el)) {
                fn.call();
            }
        };
    }

    function addViewportEvent(el, fn) {
        if (window.addEventListener) {
            addEventListener('DOMContentLoaded', givenElementInViewport(el, fn), false);
            addEventListener('load', givenElementInViewport(el, fn), false);
            addEventListener('scroll', givenElementInViewport(el, fn), false);
            addEventListener('resize', givenElementInViewport(el, fn), false);
        } else if (window.attachEvent) {
            attachEvent('DOMContentLoaded', givenElementInViewport(el, fn));
            attachEvent('load', givenElementInViewport(el, fn));
            attachEvent('scroll', givenElementInViewport(el, fn));
            attachEvent('resize', givenElementInViewport(el, fn));
        }
    }

    if ($('.list-ajax-load').length > 0) {
        addViewportEvent(document.querySelector('.list-ajax-load'), function () {
            if ($('.dposts-ajax-load').data('comments') == 'comments') {
                return false;
            }
            if ($('.list-ajax-load').hasClass('loading') === false) {
                var data = $('.dposts-ajax-load').data();
                if ($('.dposts-ajax-load').data('paged') <= 3) {
                    $('.list-ajax-load').addClass('loading');
                    ajax_load_posts($('.dposts-ajax-load').data());
                }
            }
        });
    }
    $(document).on('click', '.refresh-random-post', function (event) {
        event.preventDefault();
        var $this = jQuery(this);
        $.ajax({
            url: globals.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {action: 'ajax_refresh_random_post', id: $this.data().id,},
        }).done(function (response) {
            if (response.trim()) {
                $this.parents('.widget_post_card').html(response.trim());
            }
        });
    });
    if (globals.allow_switch_darkmode !== '0') {
        if (globals.allow_switch_darkmode === 'device' && window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) setDarkMode();
            window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
                e.matches && setDarkMode();
            });
            if (window.matchMedia('(prefers-color-scheme: light)').matches) setLightMode();
            window.matchMedia('(prefers-color-scheme: light)').addListener(function (e) {
                e.matches && setLightMode();
            });
        }
        $(document).on('click', '.switch-dark-mode', function (event) {
            event.preventDefault();
            $.ajax({
                url: globals.ajax_url,
                type: 'POST',
                dataType: 'html',
                data: {
                    toggle_action: $('body').hasClass('nice-dark-mode') === true ? 'off' : 'on',
                    action: 'pandapro_toggle_dark_mode',
                },
            }).done(function (response) {
                if (!$('body').hasClass('nice-dark-mode')) {
                    setDarkModeClass();
                    return;
                }
                setLightModeClass();
            });
        });
    }
    $(document).on('click', '.dposts-ajax-load', function (event) {
        event.preventDefault();
        var $this = jQuery(this);
        if ($('.list-ajax-load').hasClass('loading') === false) {
            $('.list-ajax-load').addClass('loading');
            ajax_load_posts($this.data());
        }
    });

    function ajax_load_posts(data, callback = function () {
    }) {
        $('.ajax-loading').show();
        var loadButton = $('.dposts-ajax-load');
        var listAjaxLoad = $('.list-ajax-load');
        loadButton.hide();
        $.ajax({url: globals.ajax_url, type: 'POST', dataType: 'html', data: data,}).done(function (response) {
            callback();
            loadButton.removeAttr('disabled');
            if (response.trim()) {
                loadButton.data('paged', data.paged * 1 + 1);
                $('.' + data.append).append(response);
                listAjaxLoad.removeClass('loading').show();
            } else {
                loadButton.attr('disabled', 'disabled');
                loadButton.addClass('btn-nostyle');
                loadButton.text(__.reached_the_end).show();
            }
        }).fail(function () {
            $('.ajax-loading').hide();
        }).always(function () {
            $('.ajax-loading').hide();
            loadButton.show();
        });
    }
});
console.log('\n' + ' %c PandaPRO Designed by nicetheme® %c https://www.nicetheme.cn ' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0; font-size:12px;', 'background: #fadfa3; padding:5px 0; font-size:12px;');
jQuery(document).ready(function (jQuery) {
    jQuery(document).on("submit", "#commentform", function () {
        var e = jQuery(this);
        jQuery.ajax({
            url: globals.ajax_url,
            data: e.serialize() + "&action=ajax_comment",
            type: e.attr("method"),
            error: function (e) {
                ncPopupTips(0, e.responseText)
            },
            success: function (e) {
                jQuery("textarea").each(function () {
                    this.value = ""
                });
                var t = addComment, o = t.I("cancel-comment-reply-link"), r = t.I("wp-temp-form-div"),
                    a = t.I(t.respondId), n = t.I("comment_post_ID").value, i = t.I("comment_parent").value;
                if (i != "0") {
                    jQuery("#respond").before('<ul class="children">' + e + "</ul>")
                } else if (!jQuery(".commentlist").length) {
                    jQuery("#respond").after('<ul class="commentlist">' + e + "</ul>")
                } else {
                    jQuery(".commentlist").append(e)
                }
                ncPopupTips(1, __.success)
                o.style.display = "none";
                o.onclick = null;
                t.I("comment_parent").value = "0";
                if (r && a) {
                    r.parentNode.insertBefore(a, r);
                    r.parentNode.removeChild(r)
                }
            }
        });
        return false
    });
    addComment = {
        moveForm: function (e, t, o) {
            var r = this, i, s = r.I(e), c = r.I(o), m = r.I("cancel-comment-reply-link"), l = r.I("comment_parent"),
                d = r.I("comment_post_ID");
            r.respondId = o;
            if (!r.I("wp-temp-form-div")) {
                i = document.createElement("div");
                i.id = "wp-temp-form-div";
                i.style.display = "none";
                c.parentNode.insertBefore(i, c)
            }
            !s ? (temp = r.I("wp-temp-form-div"), r.I("comment_parent").value = "0", temp.parentNode.insertBefore(c, temp), temp.parentNode.removeChild(temp)) : s.parentNode.insertBefore(c, s.nextSibling);
            jQuery("body").animate({scrollTop: jQuery("#respond").offset().top - 180}, 400);
            l.value = t;
            m.style.display = "";
            m.onclick = function () {
                var e = addComment, t = e.I("wp-temp-form-div"), o = e.I(e.respondId);
                e.I("comment_parent").value = "0";
                if (t && o) {
                    t.parentNode.insertBefore(o, t);
                    t.parentNode.removeChild(t)
                }
                this.style.display = "none";
                this.onclick = null;
                return false
            };
            try {
                r.I("comment").focus()
            } catch (u) {
            }
            return false
        }, I: function (e) {
            return document.getElementById(e)
        }
    };
    window.addComment = addComment;
});
/*! This file is auto-generated */
!function (c, d) {
    "use strict";
    var e = !1, n = !1;
    if (d.querySelector) if (c.addEventListener) e = !0;
    if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage) if (c.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t) if (t.secret || t.message || t.value) if (!/[^a-zA-Z0-9]/.test(t.secret)) {
            for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) n[o].style.display = "none";
            for (o = 0; o < s.length; o++) if (r = s[o], e.source === r.contentWindow) {
                if (r.removeAttribute("style"), "height" === t.message) {
                    if (1e3 < (i = parseInt(t.value, 10))) i = 1e3; else if (~~i < 200) i = 200;
                    r.height = i
                }
                if ("link" === t.message) if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host) if (d.activeElement === r) c.top.location.href = t.value
            }
        }
    }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
                if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || a) (t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);