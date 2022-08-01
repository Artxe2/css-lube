var et = Object.defineProperty;
var I = Object.getOwnPropertySymbols;
var rt = Object.prototype.hasOwnProperty,
ot = Object.prototype.propertyIsEnumerable;
var B = (t, e, o) = >e in t ? et(t, e, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: o
}) : t[e] = o,
w = (t, e) = >{
	for (var o in e || (e = {})) rt.call(e, o) && B(t, o, e[o]);
	if (I) for (var o of I(e)) ot.call(e, o) && B(t, o, e[o]);
	return t
};
var X = {
	"--*": 1,
	"-ms-accelerator": 1,
	"-ms-block-progression": 1,
	"-ms-content-zoom-chaining": 1,
	"-ms-content-zooming": 1,
	"-ms-content-zoom-limit": 1,
	"-ms-content-zoom-limit-max": 1,
	"-ms-content-zoom-limit-min": 1,
	"-ms-content-zoom-snap": 1,
	"-ms-content-zoom-snap-points": 1,
	"-ms-content-zoom-snap-type": 1,
	"-ms-filter": 1,
	"-ms-flow-from": 1,
	"-ms-flow-into": 1,
	"-ms-grid-columns": 1,
	"-ms-grid-rows": 1,
	"-ms-high-contrast-adjust": 1,
	"-ms-hyphenate-limit-chars": 1,
	"-ms-hyphenate-limit-lines": 1,
	"-ms-hyphenate-limit-zone": 1,
	"-ms-ime-align": 1,
	"-ms-overflow-style": 1,
	"-ms-scrollbar-3dlight-color": 1,
	"-ms-scrollbar-arrow-color": 1,
	"-ms-scrollbar-base-color": 1,
	"-ms-scrollbar-darkshadow-color": 1,
	"-ms-scrollbar-face-color": 1,
	"-ms-scrollbar-highlight-color": 1,
	"-ms-scrollbar-shadow-color": 1,
	"-ms-scrollbar-track-color": 1,
	"-ms-scroll-chaining": 1,
	"-ms-scroll-limit": 1,
	"-ms-scroll-limit-x-max": 1,
	"-ms-scroll-limit-x-min": 1,
	"-ms-scroll-limit-y-max": 1,
	"-ms-scroll-limit-y-min": 1,
	"-ms-scroll-rails": 1,
	"-ms-scroll-snap-points-x": 1,
	"-ms-scroll-snap-points-y": 1,
	"-ms-scroll-snap-type": 1,
	"-ms-scroll-snap-x": 1,
	"-ms-scroll-snap-y": 1,
	"-ms-scroll-translation": 1,
	"-ms-text-autospace": 1,
	"-ms-touch-select": 1,
	"-ms-user-select": 1,
	"-ms-wrap-flow": 1,
	"-ms-wrap-margin": 1,
	"-ms-wrap-through": 1,
	"-moz-appearance": 1,
	"-moz-binding": 1,
	"-moz-border-bottom-colors": 1,
	"-moz-border-left-colors": 1,
	"-moz-border-right-colors": 1,
	"-moz-border-top-colors": 1,
	"-moz-context-properties": 1,
	"-moz-float-edge": 1,
	"-moz-force-broken-image-icon": 1,
	"-moz-image-region": 1,
	"-moz-orient": 1,
	"-moz-outline-radius": 1,
	"-moz-outline-radius-bottomleft": 1,
	"-moz-outline-radius-bottomright": 1,
	"-moz-outline-radius-topleft": 1,
	"-moz-outline-radius-topright": 1,
	"-moz-stack-sizing": 1,
	"-moz-text-blink": 1,
	"-moz-user-focus": 1,
	"-moz-user-input": 1,
	"-moz-user-modify": 1,
	"-moz-window-dragging": 1,
	"-moz-window-shadow": 1,
	"-webkit-appearance": 1,
	"-webkit-border-before": 1,
	"-webkit-border-before-color": 1,
	"-webkit-border-before-style": 1,
	"-webkit-border-before-width": 1,
	"-webkit-box-reflect": 1,
	"-webkit-line-clamp": 1,
	"-webkit-mask": 1,
	"-webkit-mask-attachment": 1,
	"-webkit-mask-clip": 1,
	"-webkit-mask-composite": 1,
	"-webkit-mask-image": 1,
	"-webkit-mask-origin": 1,
	"-webkit-mask-position": 1,
	"-webkit-mask-position-x": 1,
	"-webkit-mask-position-y": 1,
	"-webkit-mask-repeat": 1,
	"-webkit-mask-repeat-x": 1,
	"-webkit-mask-repeat-y": 1,
	"-webkit-mask-size": 1,
	"-webkit-overflow-scrolling": 1,
	"-webkit-tap-highlight-color": 1,
	"-webkit-text-fill-color": 1,
	"-webkit-text-stroke": 1,
	"-webkit-text-stroke-color": 1,
	"-webkit-text-stroke-width": 1,
	"-webkit-touch-callout": 1,
	"-webkit-user-modify": 1,
	"accent-color": 1,
	"align-content": 1,
	"align-items": 1,
	"align-self": 1,
	"align-tracks": 1,
	all: 1,
	animation: 1,
	"animation-delay": 1,
	"animation-direction": 1,
	"animation-duration": 1,
	"animation-fill-mode": 1,
	"animation-iteration-count": 1,
	"animation-name": 1,
	"animation-play-state": 1,
	"animation-timing-function": 1,
	appearance: 1,
	"aspect-ratio": 1,
	azimuth: 1,
	"backdrop-filter": 1,
	"backface-visibility": 1,
	background: 1,
	"background-attachment": 1,
	"background-blend-mode": 1,
	"background-clip": 1,
	"background-color": 1,
	"background-image": 1,
	"background-origin": 1,
	"background-position": 1,
	"background-position-x": 1,
	"background-position-y": 1,
	"background-repeat": 1,
	"background-size": 1,
	"block-overflow": 1,
	"block-size": 1,
	border: 1,
	"border-block": 1,
	"border-block-color": 1,
	"border-block-style": 1,
	"border-block-width": 1,
	"border-block-end": 1,
	"border-block-end-color": 1,
	"border-block-end-style": 1,
	"border-block-end-width": 1,
	"border-block-start": 1,
	"border-block-start-color": 1,
	"border-block-start-style": 1,
	"border-block-start-width": 1,
	"border-bottom": 1,
	"border-bottom-color": 1,
	"border-bottom-left-radius": 1,
	"border-bottom-right-radius": 1,
	"border-bottom-style": 1,
	"border-bottom-width": 1,
	"border-collapse": 1,
	"border-color": 1,
	"border-end-end-radius": 1,
	"border-end-start-radius": 1,
	"border-image": 1,
	"border-image-outset": 1,
	"border-image-repeat": 1,
	"border-image-slice": 1,
	"border-image-source": 1,
	"border-image-width": 1,
	"border-inline": 1,
	"border-inline-end": 1,
	"border-inline-color": 1,
	"border-inline-style": 1,
	"border-inline-width": 1,
	"border-inline-end-color": 1,
	"border-inline-end-style": 1,
	"border-inline-end-width": 1,
	"border-inline-start": 1,
	"border-inline-start-color": 1,
	"border-inline-start-style": 1,
	"border-inline-start-width": 1,
	"border-left": 1,
	"border-left-color": 1,
	"border-left-style": 1,
	"border-left-width": 1,
	"border-radius": 1,
	"border-right": 1,
	"border-right-color": 1,
	"border-right-style": 1,
	"border-right-width": 1,
	"border-spacing": 1,
	"border-start-end-radius": 1,
	"border-start-start-radius": 1,
	"border-style": 1,
	"border-top": 1,
	"border-top-color": 1,
	"border-top-left-radius": 1,
	"border-top-right-radius": 1,
	"border-top-style": 1,
	"border-top-width": 1,
	"border-width": 1,
	bottom: 1,
	"box-align": 1,
	"box-decoration-break": 1,
	"box-direction": 1,
	"box-flex": 1,
	"box-flex-group": 1,
	"box-lines": 1,
	"box-ordinal-group": 1,
	"box-orient": 1,
	"box-pack": 1,
	"box-shadow": 1,
	"box-sizing": 1,
	"break-after": 1,
	"break-before": 1,
	"break-inside": 1,
	"caption-side": 1,
	"caret-color": 1,
	clear: 1,
	clip: 1,
	"clip-path": 1,
	color: 1,
	"color-adjust": 1,
	"color-scheme": 1,
	"column-count": 1,
	"column-fill": 1,
	"column-gap": 1,
	"column-rule": 1,
	"column-rule-color": 1,
	"column-rule-style": 1,
	"column-rule-width": 1,
	"column-span": 1,
	"column-width": 1,
	columns: 1,
	contain: 1,
	content: 1,
	"content-visibility": 1,
	"counter-increment": 1,
	"counter-reset": 1,
	"counter-set": 1,
	cursor: 1,
	direction: 1,
	display: 1,
	"empty-cells": 1,
	filter: 1,
	flex: 1,
	"flex-basis": 1,
	"flex-direction": 1,
	"flex-flow": 1,
	"flex-grow": 1,
	"flex-shrink": 1,
	"flex-wrap": 1,
	float: 1,
	font: 1,
	"font-family": 1,
	"font-feature-settings": 1,
	"font-kerning": 1,
	"font-language-override": 1,
	"font-optical-sizing": 1,
	"font-variation-settings": 1,
	"font-size": 1,
	"font-size-adjust": 1,
	"font-smooth": 1,
	"font-stretch": 1,
	"font-style": 1,
	"font-synthesis": 1,
	"font-variant": 1,
	"font-variant-alternates": 1,
	"font-variant-caps": 1,
	"font-variant-east-asian": 1,
	"font-variant-ligatures": 1,
	"font-variant-numeric": 1,
	"font-variant-position": 1,
	"font-weight": 1,
	"forced-color-adjust": 1,
	gap: 1,
	grid: 1,
	"grid-area": 1,
	"grid-auto-columns": 1,
	"grid-auto-flow": 1,
	"grid-auto-rows": 1,
	"grid-column": 1,
	"grid-column-end": 1,
	"grid-column-gap": 1,
	"grid-column-start": 1,
	"grid-gap": 1,
	"grid-row": 1,
	"grid-row-end": 1,
	"grid-row-gap": 1,
	"grid-row-start": 1,
	"grid-template": 1,
	"grid-template-areas": 1,
	"grid-template-columns": 1,
	"grid-template-rows": 1,
	"hanging-punctuation": 1,
	height: 1,
	hyphens: 1,
	"image-orientation": 1,
	"image-rendering": 1,
	"image-resolution": 1,
	"ime-mode": 1,
	"initial-letter": 1,
	"initial-letter-align": 1,
	"inline-size": 1,
	"input-security": 1,
	inset: 1,
	"inset-block": 1,
	"inset-block-end": 1,
	"inset-block-start": 1,
	"inset-inline": 1,
	"inset-inline-end": 1,
	"inset-inline-start": 1,
	isolation: 1,
	"justify-content": 1,
	"justify-items": 1,
	"justify-self": 1,
	"justify-tracks": 1,
	left: 1,
	"letter-spacing": 1,
	"line-break": 1,
	"line-clamp": 1,
	"line-height": 1,
	"line-height-step": 1,
	"list-style": 1,
	"list-style-image": 1,
	"list-style-position": 1,
	"list-style-type": 1,
	margin: 1,
	"margin-block": 1,
	"margin-block-end": 1,
	"margin-block-start": 1,
	"margin-bottom": 1,
	"margin-inline": 1,
	"margin-inline-end": 1,
	"margin-inline-start": 1,
	"margin-left": 1,
	"margin-right": 1,
	"margin-top": 1,
	"margin-trim": 1,
	mask: 1,
	"mask-border": 1,
	"mask-border-mode": 1,
	"mask-border-outset": 1,
	"mask-border-repeat": 1,
	"mask-border-slice": 1,
	"mask-border-source": 1,
	"mask-border-width": 1,
	"mask-clip": 1,
	"mask-composite": 1,
	"mask-image": 1,
	"mask-mode": 1,
	"mask-origin": 1,
	"mask-position": 1,
	"mask-repeat": 1,
	"mask-size": 1,
	"mask-type": 1,
	"masonry-auto-flow": 1,
	"math-style": 1,
	"max-block-size": 1,
	"max-height": 1,
	"max-inline-size": 1,
	"max-lines": 1,
	"max-width": 1,
	"min-block-size": 1,
	"min-height": 1,
	"min-inline-size": 1,
	"min-width": 1,
	"mix-blend-mode": 1,
	"object-fit": 1,
	"object-position": 1,
	offset: 1,
	"offset-anchor": 1,
	"offset-distance": 1,
	"offset-path": 1,
	"offset-position": 1,
	"offset-rotate": 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	outline: 1,
	"outline-color": 1,
	"outline-offset": 1,
	"outline-style": 1,
	"outline-width": 1,
	overflow: 1,
	"overflow-anchor": 1,
	"overflow-block": 1,
	"overflow-clip-box": 1,
	"overflow-clip-margin": 1,
	"overflow-inline": 1,
	"overflow-wrap": 1,
	"overflow-x": 1,
	"overflow-y": 1,
	"overscroll-behavior": 1,
	"overscroll-behavior-block": 1,
	"overscroll-behavior-inline": 1,
	"overscroll-behavior-x": 1,
	"overscroll-behavior-y": 1,
	padding: 1,
	"padding-block": 1,
	"padding-block-end": 1,
	"padding-block-start": 1,
	"padding-bottom": 1,
	"padding-inline": 1,
	"padding-inline-end": 1,
	"padding-inline-start": 1,
	"padding-left": 1,
	"padding-right": 1,
	"padding-top": 1,
	"page-break-after": 1,
	"page-break-before": 1,
	"page-break-inside": 1,
	"paint-order": 1,
	perspective: 1,
	"perspective-origin": 1,
	"place-content": 1,
	"place-items": 1,
	"place-self": 1,
	"pointer-events": 1,
	position: 1,
	quotes: 1,
	resize: 1,
	right: 1,
	rotate: 1,
	"row-gap": 1,
	"ruby-align": 1,
	"ruby-merge": 1,
	"ruby-position": 1,
	scale: 1,
	"scrollbar-color": 1,
	"scrollbar-gutter": 1,
	"scrollbar-width": 1,
	"scroll-behavior": 1,
	"scroll-margin": 1,
	"scroll-margin-block": 1,
	"scroll-margin-block-start": 1,
	"scroll-margin-block-end": 1,
	"scroll-margin-bottom": 1,
	"scroll-margin-inline": 1,
	"scroll-margin-inline-start": 1,
	"scroll-margin-inline-end": 1,
	"scroll-margin-left": 1,
	"scroll-margin-right": 1,
	"scroll-margin-top": 1,
	"scroll-padding": 1,
	"scroll-padding-block": 1,
	"scroll-padding-block-start": 1,
	"scroll-padding-block-end": 1,
	"scroll-padding-bottom": 1,
	"scroll-padding-inline": 1,
	"scroll-padding-inline-start": 1,
	"scroll-padding-inline-end": 1,
	"scroll-padding-left": 1,
	"scroll-padding-right": 1,
	"scroll-padding-top": 1,
	"scroll-snap-align": 1,
	"scroll-snap-coordinate": 1,
	"scroll-snap-destination": 1,
	"scroll-snap-points-x": 1,
	"scroll-snap-points-y": 1,
	"scroll-snap-stop": 1,
	"scroll-snap-type": 1,
	"scroll-snap-type-x": 1,
	"scroll-snap-type-y": 1,
	"shape-image-threshold": 1,
	"shape-margin": 1,
	"shape-outside": 1,
	"tab-size": 1,
	"table-layout": 1,
	"text-align": 1,
	"text-align-last": 1,
	"text-combine-upright": 1,
	"text-decoration": 1,
	"text-decoration-color": 1,
	"text-decoration-line": 1,
	"text-decoration-skip": 1,
	"text-decoration-skip-ink": 1,
	"text-decoration-style": 1,
	"text-decoration-thickness": 1,
	"text-emphasis": 1,
	"text-emphasis-color": 1,
	"text-emphasis-position": 1,
	"text-emphasis-style": 1,
	"text-indent": 1,
	"text-justify": 1,
	"text-orientation": 1,
	"text-overflow": 1,
	"text-rendering": 1,
	"text-shadow": 1,
	"text-size-adjust": 1,
	"text-transform": 1,
	"text-underline-offset": 1,
	"text-underline-position": 1,
	top: 1,
	"touch-action": 1,
	transform: 1,
	"transform-box": 1,
	"transform-origin": 1,
	"transform-style": 1,
	transition: 1,
	"transition-delay": 1,
	"transition-duration": 1,
	"transition-property": 1,
	"transition-timing-function": 1,
	translate: 1,
	"unicode-bidi": 1,
	"user-select": 1,
	"vertical-align": 1,
	visibility: 1,
	"white-space": 1,
	widows: 1,
	width: 1,
	"will-change": 1,
	"word-break": 1,
	"word-spacing": 1,
	"word-wrap": 1,
	"writing-mode": 1,
	"z-index": 1,
	zoom: 1
};
var W = t = >{
	let e = t.length,
	o = t.charCodeAt(0),
	i = -1,
	n,
	l = "";
	for (; ++i < e;) {
		if (n = t.charCodeAt(i), n == 0) {
			l += "\uFFFD";
			continue
		}
		if (n >= 1 && n <= 31 || n == 127 || i == 0 && n >= 48 && n <= 57 || i == 1 && n >= 48 && n <= 57 && o == 45) {
			l += "\\" + n.toString(16) + " ";
			continue
		}
		if (i == 0 && e == 1 && n == 45) {
			l += "\\" + t.charAt(i);
			continue
		}
		if (n >= 128 || n == 45 || n == 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
			l += t.charAt(i);
			continue
		}
		l += "\\" + t.charAt(i)
	}
	return l
};
var E = t = >t.toFixed(2).replace(/^0+|\.00$|0+$/g, "") || "0",
s = t = >String(t).startsWith("--") ? `
var ($ {
	t
})`: t;
var r = t = >{
	if (t == null) throw new Error("px: value is undefined");
	if (t === 0 || t === "0") return 0;
	if (String(t).startsWith("--")) return s("" + t);
	let[e, o] = String(t).split("/");
	return + e > 0 && +o > 0 ? E( + e / +o * 100) + "%": /.[-+*/] / .test(String(t)) ? "calc(" + String(t).replace(/[-+]/g, i = >`$ {
		i
	}`) + ")": +t == +t ? t + "px": t
},
P = t = >t.endsWith("%") ? +t.slice(0, -1) / 100 + "em": r(t),
_ = t = >{
	let[e, o] = t.split(".");
	return o && e.length === 4 ? "rgba(" + e.slice(1).split("").map(i = >parseInt(i + i, 16)).join(",") + ",." + o + ")": o ? "rgba(" + [e.slice(1, 3), e.slice(3, 5), e.slice(5, 7)].map(i = >parseInt(i, 16)).join(",") + ",." + o + ")": t
},
it = t = >{
	let[e, o, i, n] = t.split(",");
	return "hsl" + (n ? "a": "") + "(" + [e, o, i, n].filter(Boolean).map(s).join() + ")"
},
nt = t = >{
	let[e, o, i, n] = t.split(",");
	return "rgb" + (n ? "a": "") + "(" + [e, o, i, n].filter(Boolean).map(s).join() + ")"
},
g = (t = "transparent") = >t === "-" || t === "transparent" ? "transparent": t.startsWith("--") ? `
var ($ {
	t
})`: t.split(",").every(e = >parseFloat(e) >= 0) ? t.includes("%") ? it(t) : nt(t) : t,
U = t = >{
	if (!t) throw new Error("makeFont: value is undefined");
	return (t || "").split("/").map((e, o) = >{
		if (e !== "-") {
			if (String(e).startsWith("--")) return`
			var ($ {
				e
			})`;
			switch (o) {
			case 0:
				return`font - size: $ {
					r(e)
				}`;
			case 1:
				return`line - height: $ { + e < 4 ? E( + e) : r(e)
				}`;
			case 2:
				return`letter - spacing: $ {
					r(P(e))
				}`
			}
		}
	}).filter(Boolean).join(";")
},
u = t = >`font - family: $ {
	t
};
font - family: var (--$ {
	t
},
$ {
	t
});`,
k = t = >{
	if (!t || t === "none" || t === "0" || t === "-") return "none";
	let e = ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"],
	o = !1,
	i = !1,
	n = t.split("/").map(l = >parseInt(l) > 0 ? (o = !0, l.includes(",") ? g(l) : r(l)) : e.includes(l) ? (i = !0, l) : g(l));
	return o || n.unshift("1px"),
	i || n.unshift("solid"),
	n.join(" ")
},
f = (t, e = s) = >String(t).startsWith("--") ? `
var ($ {
	t
})`: t && t.split("/").map(e).join(" "),
b = (t, e = o = >o) = >String(t).startsWith("--") ? `
var ($ {
	t
})`: t && t.split(",").map(e).join(","),
x = t = >f(t, r),
T = t = >{
	let[e, o] = t.split(":");
	return ( + o / +e * 100).toFixed(2) + "%"
},
O = (t = "") = >{
	let e = t.split("+"),
	o = e.map(i = >{
		switch (i) {
		case "top":
			return "align-items:flex-start;";
		case "middle":
			return "align-items:center;";
		case "bottom":
			return "align-items:flex-end;";
		case "fill":
			return "align-items:stretch;";
		case "stretch":
			return "align-items:stretch;";
		case "left":
			return e.includes("reverse") ? "justify-content:flex-end;": "";
		case "right":
			return e.includes("reverse") ? "": "justify-content:flex-end;";
		case "reverse":
			return "flex-direction:row-reverse;";
		case "center":
			return "justify-content:center;"
		}
		return ""
	});
	return o.find(i = >i.startsWith("align-items:")) || o.unshift("align-items:center;"),
	[...new Set(o)].join("")
},
D = (t = "") = >{
	let e = t.split("+"),
	o = e.map(i = >{
		switch (i) {
		case "left":
			return "align-items:flex-start;";
		case "center":
			return "align-items:center;";
		case "right":
			return "align-items:flex-end;";
		case "fill":
			return "align-items:stretch;";
		case "top":
			return e.includes("reverse") ? "justify-content:flex-end;": "";
		case "middle":
			return "justify-content:center;";
		case "bottom":
			return e.includes("reverse") ? "": "justify-content:flex-end;";
		case "reverse":
			return "flex-direction:column-reverse;"
		}
		return ""
	});
	return o.find(i = >i.startsWith("align-items:")) || o.unshift("align-items:stretch;"),
	[...new Set(o)].join("")
},
M = t = >/\d/.test(t) ? t.includes("=") ? t.split("/").map(e = >e.replace("=", " ")).join(",") : `all $ {
	t
}`: t;
var Y = ` * {
	margin: 0;
	padding: 0;
	font: inherit;
	color: inherit;
} * ,
:after,
:before {
	box - sizing: border - box;
	flex - shrink: 0;
}: root { - webkit - tap - highlight - color: transparent;
	text - size - adjust: 100 % ; - webkit - text - size - adjust: 100 % ;
	line - height: 1.5;
	overflow - wrap: break - word;
	word -
	break: break - word;
	tab - size: 2
}
html,
body {
	height: 100 % ;
}
img,
picture,
video,
canvas {
	display: block;
	max - width: 100 % ;
}
button {
	background: none;
	border: 0;
	cursor: pointer;
}
a {
	text - decoration: none;
}
table {
	border - collapse: collapse;
	border - spacing: 0;
}
ol,
ul,
menu,
dir {
	list - style: none;
}`,
R = {
	c: t = >`color: $ {
		g(t)
	};`,
	color: t = >R.c(t),
	caret: t = >`caret - color: $ {
		g(t)
	};`,
	"caret-current": () = >"color:currentColor",
	font: t = >U(t),
	"font-size": t = >`font - size: $ {
		r(t)
	};`,
	"line-height": t = >`line - height: $ { + t < 4 ? E( + t) : r(t)
	}`,
	"letter-spacing": t = >`letter - spacing: $ {
		P(t)
	};`,
	"word-spacing": t = >`word - spacing: $ {
		r(t)
	};`,
	sans: () = >u("sans-serif"),
	"sans-serif": () = >u("sans-serif"),
	serif: () = >u("serif"),
	cursive: () = >u("cursive"),
	fantasy: () = >u("fantasy"),
	"system-ui": () = >u("system-ui"),
	monospace: t = >t === "number" ? "font-variant-numeric:tabular-nums;": u("monospace"),
	AppleSD: () = >'font-family:"Apple SD Gothic Neo";',
	Roboto: () = >u("Roboto"),
	"100": () = >"font-weight:100;",
	"200": () = >"font-weight:200;",
	"300": () = >"font-weight:300;",
	"400": () = >"font-weight:400;",
	"500": () = >"font-weight:500;",
	"600": () = >"font-weight:600;",
	"700": () = >"font-weight:700;",
	"800": () = >"font-weight:800;",
	"900": () = >"font-weight:900;",
	thin: () = >"font-weight:200;",
	light: () = >"font-weight:300;",
	regular: () = >"font-weight:normal;",
	medium: () = >"font-weight:500;",
	semibold: () = >"font-weight:600;",
	bold: () = >"font-weight:bold;",
	heavy: () = >"font-weight:900;",
	thicker: (t = "1") = >`text - shadow: 0 0 $ {
		r(t)
	}
	currentColor;`,
	italic: () = >"font-style:italic;",
	overline: () = >"text-decoration:overline;",
	underline: () = >"text-decoration:underline;",
	"line-through": () = >"text-decoration:line-through;",
	strike: () = >"text-decoration:line-through;",
	del: () = >"text-decoration:line-through;",
	"small-caps": () = >"font-variant-caps:small-caps;",
	"all-small-caps": () = >"font-variant-caps:all-small-caps;",
	"slashed-zero": () = >"font-variant-numeric:slashed-zero;",
	"tabular-nums": () = >"font-variant-numeric:tabular-nums;",
	lowercase: () = >"text-transform:lowercase;",
	uppercase: () = >"text-transform:uppercase;",
	capitalize: () = >"text-transform:capitalize;",
	"text-justify": () = >"text-align:justify;",
	"text-center": () = >"text-align:center;",
	"text-right": () = >"text-align:right;",
	"text-left": () = >"text-align:left;",
	"vertical-top": () = >"vertical-align:top;",
	"vertical-middle": () = >"vertical-align:middle;",
	"vertical-bottom": () = >"vertical-align:bottom;",
	sub: () = >"vertical-align:sub;",
	super: () = >"vertical-align:super;",
	"text-top": () = >"vertical-align:text-top;",
	"text-bottom": () = >"vertical-align:text-bottom;",
	"break-all": () = >"word-break:break-all;",
	"break-word": () = >"overflow-wrap:break-word;",
	"keep-all": () = >"word-break:keep-all;",
	hyphens: (t = "auto") = >`hyphens: $ {
		t
	};`,
	block: () = >"display:block;",
	"inline-block": () = >"display:inline-block;",
	inline: () = >"display:inline;",
	"inline-flex": () = >"display:inline-flex;",
	table: () = >"display:table;",
	"inline-table": () = >"display:inline-table;",
	"table-caption": () = >"display:table-caption;",
	"table-cell": () = >"display:table-cell;",
	"table-column": () = >"display:table-column;",
	"table-column-group": () = >"display:table-column-group;",
	"table-footer-group": () = >"display:table-footer-group;",
	"table-header-group": () = >"display:table-header-group;",
	"table-row-group": () = >"display:table-row-group;",
	"table-row": () = >"display:table-row;",
	"flow-root": () = >"display:flow-root;",
	contents: () = >"display:contents;",
	"list-item": () = >"display:list-item;",
	grid: t = >{
		let e = ["display:grid;"];
		return + t == +t ? e.push(`grid - template - columns: repeat($ {
			t
		},
		1fr);`) : t && e.push(`grid - template - columns: $ {
			t
		};`),
		e.join("")
	},
	"grid-cols": t = >{
		let e = ["display:grid;"];
		return + t == +t ? e.push(`grid - template - columns: repeat($ {
			t
		},
		1fr);`) : t && e.push(`grid - template - columns: $ {
			t
		};`),
		e.join("")
	},
	"inline-grid": () = >"display:inline-grid;",
	hbox: (t = "") = >`display: flex;
	flex - flow: row;
	$ {
		O(t)
	}`,
	vbox: (t = "") = >`display: flex;
	flex - flow: column;
	$ {
		D(t)
	}`,
	pack: () = >"display:flex;align-items:center;justify-content:center;",
	hpack: () = >"display:flex;flex-flow:row;align-items:center;justify-content:center;",
	vpack: () = >"display:flex;flex-flow:column;align-items:center;justify-content:center;",
	"hbox(": () = >"",
	"vbox(": () = >"",
	subbox: () = >"display:flex;flex-flow:inherit;align-items:inherit;justify-content:inherit;",
	gap: t = >`gap: $ {
		x(t)
	};
	grid - gap: $ {
		x(t)
	};`,
	hgap: t = >` & >*+*{
		margin - left: $ {
			r(t)
		};
	}`,
	"hgap-reverse": t = >` & >*+*{
		margin - right: $ {
			r(t)
		};
	}`,
	vgap: t = >` & >*+*{
		margin - top: $ {
			r(t)
		};
	}`,
	"vgap-reverse": t = >` & >*+*{
		margin - bottom: $ {
			r(t)
		};
	}`,
	"space-between": () = >"justify-content:space-between;",
	"space-around": () = >"justify-content:space-around;",
	"space-evenly": () = >"justify-content:space-evenly;",
	flex: (t = "1") = >`flex: $ {
		f(t)
	};`,
	space: t = >` [class *= "hbox"] > &{
		width: $ {
			r(t)
		};
	} [class *= "vbox"] > &{
		height: $ {
			r(t)
		};
	}`,
	"flex-grow": (t = "1") = >`flex - grow: $ {
		s(t)
	};`,
	"flex-shrink": (t = "1") = >`flex - shrink: $ {
		s(t)
	};`,
	"flex-basis": t = >`flex - basis: $ {
		r(t)
	};`,
	"flex-wrap": () = >"&{flex-wrap:wrap;}&>*{max-width:100%;max-height:100%;}",
	"flex-wrap-reverse": () = >"&{flex-wrap:wrap-reverse;}&>*{max-width:100%;max-height:100%;}",
	"flex-nowrap": () = >"flex-wrap:nowrap;",
	order: t = >`order: $ {
		s(t)
	};`,
	"border-box": () = >"box-sizing:border-box",
	"content-box": () = >"box-sizing:content-box",
	w: t = >{
		if (t.includes("~")) {
			let e = [],
			o = t.split("~");
			if (o.length <= 2) {
				let[c, d] = o;
				return c && e.push(`min - width: $ {
					r(c)
				};`),
				d && e.push(`max - width: $ {
					r(d)
				};`),
				e.join("")
			}
			let[i, n, l] = o;
			return i && e.push(`min - width: $ {
				r(i)
			};`),
			e.push(`width: $ {
				r(n)
			};`),
			l && e.push(`max - width: $ {
				r(l)
			};`),
			e.join("")
		}
		return t === "stretch" || t === "fill" ? "align-self:stretch": `width: $ {
			r(t)
		};`
	},
	h: t = >{
		if (t.includes("~")) {
			let e = [],
			o = t.split("~");
			if (o.length <= 2) {
				let[c, d] = t.split("~");
				return c && e.push(`min - height: $ {
					r(c)
				};`),
				d && e.push(`max - height: $ {
					r(d)
				};`),
				e.join("")
			}
			let[i, n, l] = o;
			return i && e.push(`min - height: $ {
				r(i)
			};`),
			e.push(`height: $ {
				r(n)
			};`),
			l && e.push(`max - height: $ {
				r(l)
			};`),
			e.join("")
		}
		return t === "stretch" || t === "fill" ? "align-self:stretch": `height: $ {
			r(t)
		};`
	},
	m: t = >`margin: $ {
		x(t)
	};`,
	mt: t = >`margin - top: $ {
		r(t)
	};`,
	mr: t = >`margin - right: $ {
		r(t)
	};`,
	mb: t = >`margin - bottom: $ {
		r(t)
	};`,
	ml: t = >`margin - left: $ {
		r(t)
	};`,
	p: t = >`padding: $ {
		x(t)
	};`,
	pt: t = >`padding - top: $ {
		r(t)
	};`,
	pr: t = >`padding - right: $ {
		r(t)
	};`,
	pb: t = >`padding - bottom: $ {
		r(t)
	};`,
	pl: t = >`padding - left: $ {
		r(t)
	};`,
	b: t = >`border: $ {
		k(t)
	};`,
	bt: t = >`border - top: $ {
		k(t)
	};`,
	br: t = >`border - right: $ {
		k(t)
	};`,
	bb: t = >`border - bottom: $ {
		k(t)
	};`,
	bl: t = >`border - left: $ {
		k(t)
	};`,
	bw: t = >`border - width: $ {
		r(t)
	};`,
	btw: t = >`border - top - width: $ {
		r(t)
	};`,
	brw: t = >`border - right - width: $ {
		r(t)
	};`,
	bbw: t = >`border - bottom - width: $ {
		r(t)
	};`,
	blw: t = >`border - left - width: $ {
		r(t)
	};`,
	bs: t = >`border - style: $ {
		s(t)
	};`,
	bts: t = >`border - top - style: $ {
		s(t)
	};`,
	brs: t = >`border - right - style: $ {
		s(t)
	};`,
	bbs: t = >`border - bottom - style: $ {
		s(t)
	};`,
	bls: t = >`border - left - style: $ {
		s(t)
	};`,
	bc: t = >`border - color: $ {
		g(t)
	};`,
	btc: t = >`border - top - color: $ {
		g(t)
	};`,
	brc: t = >`border - right - color: $ {
		g(t)
	};`,
	bbc: t = >`border - bottom - color: $ {
		g(t)
	};`,
	blc: t = >`border - left - color: $ {
		g(t)
	};`,
	r: t = >`border - radius: $ {
		x(t)
	};`,
	rt: t = >`border - top - left - radius: $ {
		r(t)
	};
	border - top - right - radius: $ {
		r(t)
	};`,
	rr: t = >`border - top - right - radius: $ {
		r(t)
	};
	border - bottom - right - radius: $ {
		r(t)
	};`,
	rb: t = >`border - bottom - left - radius: $ {
		r(t)
	};
	border - bottom - right - radius: $ {
		r(t)
	};`,
	rl: t = >`border - top - left - radius: $ {
		r(t)
	};
	border - bottom - left - radius: $ {
		r(t)
	};`,
	rtl: t = >`border - top - left - radius: $ {
		r(t)
	};`,
	rtr: t = >`border - top - right - radius: $ {
		r(t)
	};`,
	rbr: t = >`border - bottom - right - radius: $ {
		r(t)
	};`,
	rbl: t = >`border - bottom - left - radius: $ {
		r(t)
	};`,
	ring: t = >{
		let[e, o = 1] = t.split("/");
		return`box - shadow: 0 0 0 $ {
			r(o)
		}
		$ {
			g(e)
		};`
	},
	"box-shadow": t = >`box - shadow: $ {
		f(t)
	}`,
	outline: t = >`outline: $ {
		k(t)
	};`,
	guide: (t = "#4f80ff") = >` & ,
	&>*{
		outline: 1px solid $ {
			g(t)
		};
	}`,
	bg: t = >t.startsWith("linear-gradient") ? `background: $ {
		t.replace(/\//g, " ")
	};`: t.startsWith("radial-gradient") ? `background: $ {
		t.replace(/\//g, " ")
	};`: t.startsWith("url") ? `background - image: $ {
		t
	};`: /^(http|[./]) / .test(t) ? `background - image: url($ {
		t
	});`: t === "transparent" ? "background-color:transparent;": `background - color: $ {
		g(t)
	};`, "bg-image": t = >t.startsWith("url") ? `background - image: $ {
		t
	};`: `background - image: url($ {
		t
	});`, "background-image": t = >R["bg-image"](t), "bg-position": t = >`background - position: $ {
		t
	};`, "bg-repeat-x": () = >"background-repeat:repeat-x;", "bg-repeat-y": () = >"background-repeat:repeat-y;", "bg-no-repeat": () = >"background-repeat:no-repeat;", "bg-fixed": () = >"background-attachment:fixed;", "bg-scroll": () = >"background-attachment:scroll;", contain: () = >"background-size:contain;background-position:center;background-repeat:no-repeat;object-fit:contain;", cover: () = >"background-size:cover;background-position:center;background-repeat:no-repeat;object-fit:cover;", overflow: t = >`overflow: $ {
		t
	};`, "overflow-x": t = >`overflow - x: $ {
		t
	};`, "overflow-y": t = >`overflow - y: $ {
		t
	};`, clip: () = >"overflow:hidden;", scroll: () = >"overflow:auto;", "scroll-x": () = >"overflow-x:auto;overflow-y:hidden;", "scroll-y": () = >"overflow-x:hidden;overflow-y:auto;", scrollbar: () = >"&{overflow:scroll;}&.scroll{overflow:scroll;}&.scroll-x{overflow-x:scroll;}&.scroll-y{overflow-y:scroll;}", "no-scrollbar": () = >"&::-webkit-scrollbar{display:none;}", "no-scrollbar-x": () = >"&::-webkit-scrollbar:horizontal{display:none;}", "scroll-m": t = >`scroll - margin: $ {
		x(t)
	};`, "scroll-mt": t = >`scroll - margin - top: $ {
		r(t)
	};`, "scroll-mr": t = >`scroll - margin - right: $ {
		r(t)
	};`, "scroll-mb": t = >`scroll - margin - bottom: $ {
		r(t)
	};`, "scroll-ml": t = >`scroll - margin - left: $ {
		r(t)
	};`, "scroll-p": t = >`scroll - padding: $ {
		x(t)
	};`, "scroll-pt": t = >`scroll - padding - top: $ {
		r(t)
	};`, "scroll-pr": t = >`scroll - padding - right: $ {
		r(t)
	};`, "scroll-pb": t = >`scroll - padding - bottom: $ {
		r(t)
	};`, "scroll-pl": t = >`scroll - padding - left: $ {
		r(t)
	};`, snap: t = >`scroll - snap - align: $ {
		s(t)
	};`, "snap-start": () = >"scroll-snap-align:start;", "snap-end": () = >"scroll-snap-align:end;", "snap-center": () = >"scroll-snap-align:center;", "snap-align-none": () = >"scroll-snap-align:none;", "snap-none": () = >"scroll-snap-type:none;", "snap-x": () = >"scroll-snap-type:x var(--a-scroll-snap-strictness, mandatory);", "snap-x-proximity": () = >"scroll-snap-type:x proximity;", "snap-y": () = >"scroll-snap-type:y var(--a-scroll-snap-strictness, mandatory);", "snap-y-proximity": () = >"scroll-snap-type:y proximity;", "snap-both": () = >"scroll-snap-type:both var(--a-scroll-snap-strictness, mandatory);", "snap-both-proximity": () = >"scroll-snap-type:both proximity;", "snap-mandatory": () = >"--a-scroll-snap-strictness:mandatory;", "snap-proximity": () = >"--a-scroll-snap-strictness:proximity;", "snap-normal": () = >"scroll-snap-stop: normal;", "snap-always": () = >"scroll-snap-stop: always;", overscroll: t = >`overscroll - behavior: $ {
		t
	};`, "overscroll-x": t = >`overscroll - behavior - x: $ {
		t
	};`, "overscroll-y": t = >`overscroll - behavior - y: $ {
		t
	};`, "no-bouncing": () = >"", "no-overscroll": () = >"", pre: () = >"white-space:pre-wrap;", "pre-wrap": () = >"white-space:pre-wrap;", "pre-line": () = >"white-space:pre-line;", nowrap: () = >"white-space:nowrap;flex-shrink:0;", "nowrap...": () = >"white-space:nowrap;text-overflow:ellipsis;overflow:hidden;flex-shrink:1;", "line-clamp": t = >`display: -webkit - box; - webkit - line - clamp: $ {
		t
	}; - webkit - box - orient: vertical;overflow: hidden;`, "max-lines": t = >`display: -webkit - box; - webkit - line - clamp: $ {
		t
	}; - webkit - box - orient: vertical;overflow: hidden;`, "text-indent": t = >`text - indent: $ {
		r(t)
	};`, layer: (t = "") = >{
		let e = {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		};
		return t.split("+").forEach(o = >{
			switch (o) {
			case "top":
				return delete e.bottom;
			case "right":
				return delete e.left;
			case "bottom":
				return delete e.top;
			case "left":
				return delete e.right
			}
		}),
		"position:absolute;" + Object.keys(e).map(o = >`$ {
			o
		}: 0;`).join("")
	},
	absolute: () = >"position:absolute;", relative: () = >"position:relative;", sticky: () = >"position:sticky;", "sticky-top": (t = "0") = >`position: sticky;top: $ {
		r(t)
	};`, "sticky-right": (t = "0") = >`position: sticky;right: $ {
		r(t)
	};`, "sticky-bottom": (t = "0") = >`position: sticky;bottom: $ {
		r(t)
	};`, "sticky-left": (t = "0") = >`position: sticky;left: $ {
		r(t)
	};`, fixed: () = >"position:fixed;", static: () = >"position:static;", x: t = >`left: $ {
		r(t)
	};`, y: t = >`top: $ {
		r(t)
	};`, z: t = >`z - index: $ {
		s(t)
	};`, top: t = >`top: $ {
		r(t)
	};`, left: t = >`left: $ {
		r(t)
	};`, right: t = >`right: $ {
		r(t)
	};`, bottom: t = >`bottom: $ {
		r(t)
	};`, none: () = >"display:none;", hidden: () = >"visibility:hidden;", invisible: () = >"visibility:hidden;", gone: () = >"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);", opacity: t = >`opacity: $ {
		s(t)
	};`, visible: () = >"visibility:visible;", "col-resize": () = >"cursor: col-resize;", crosshair: () = >"cursor: crosshair;", "e-resize": () = >"cursor: e-resize;", "ew-resize": () = >"cursor: ew-resize;", grab: () = >"&{cursor:grab;}&:active{cursor:grabbing;}", grabbing: () = >"cursor: grabbing;", "n-resize": () = >"cursor: n-resize;", "ne-resize": () = >"cursor: ne-resize;", "nesw-resize": () = >"cursor: nesw-resize;", "ns-resize": () = >"cursor: ns-resize;", "nw-resize": () = >"cursor: nw-resize;", "nwse-resize": () = >"cursor: nwse-resize;", "not-allowed": () = >"cursor: not-allowed;", pointer: () = >"cursor: pointer;", progress: () = >"cursor: progress;", "row-resize": () = >"cursor: row-resize;", "s-resize": () = >"cursor: s-resize;", "se-resize": () = >"cursor: se-resize;", "sw-resize": () = >"cursor: sw-resize;", "w-resize": () = >"cursor: w-resize;", "zoom-in": () = >"cursor: zoom-in;", "zoom-out": () = >"cursor: zoom-out;", cursor: t = >`cursor: $ {
		t
	};`, "user-select-none": () = >"user-select:none;-webkit-user-select:none;", "user-select-all": () = >"user-select:all;-webkit-user-select:all;", "user-select-auto": () = >"user-select:auto;-webkit-user-select:auto;", "user-select-text": () = >"user-select:text;-webkit-user-select:text;", "user-select": t = >`user - select: $ {
		s(t)
	}; - webkit - user - select: $ {
		s(t)
	};`, "pointer-events-none": () = >"pointer-events:none;", "pointer-events-auto": () = >"pointer-events:auto;", transition: t = >`transition: $ {
		M(t)
	};`, translate: t = >`transform: translate($ {
		b(t)
	});`, translateX: t = >`transform: translateX($ {
		s(t)
	});`, translateY: t = >`transform: translateY($ {
		s(t)
	});`, translateZ: t = >`transform: translateZ($ {
		s(t)
	});`, translate3d: t = >`transform: translate3d($ {
		b(t)
	});`, rotate: t = >`transform: rotate($ {
		b(t)
	});`, rotateX: t = >`transform: rotateX($ {
		s(t)
	});`, rotateY: t = >`transform: rotateY($ {
		s(t)
	});`, rotateZ: t = >`transform: rotateZ($ {
		s(t)
	});`, rotate3d: t = >`transform: rotateZ($ {
		b(t)
	});`, scale: t = >`transform: scale($ {
		b(t)
	});`, scaleX: t = >`transform: scaleX($ {
		b(t)
	});`, scaleY: t = >`transform: scaleY($ {
		b(t)
	});`, scaleZ: t = >`transform: scaleZ($ {
		b(t)
	});`, skew: t = >`transform: skew($ {
		b(t)
	});`, skewX: t = >`transform: skewX($ {
		b(t)
	});`, skewY: t = >`transform: skewY($ {
		b(t)
	});`, skewZ: t = >`transform: skewZ($ {
		b(t)
	});`, ratio: t = >` & {
		position: relative;
	} & :before {
		content: "";
		display: block;
		width: 100 % ;
		padding - top: $ {
			T(t)
		};
	} & >*{
		position: absolute;
		top: 0;
		left: 0;
		width: 100 % ;
		height: 100 % ;
	}`, gpu: () = >"transform:translateZ(0.1px);", "no-border": () = >"border:none;outline:none;", "app-region": t = >` - webkit - app - region: $ {
		t
	};`, content: (t = "''") = >`content: $ {
		s(t)
	}`, "clip-path": t = >`clip - path: $ {
		s(t)
	}; - webkit - clip - path: $ {
		s(t)
	};`, "table-layout-fixed": () = >"table-layout:fixed;", "table-layout-auto": () = >"table-layout:auto;", "aspect-ratio": t = >`aspect - ratio: $ {
		s(t.replace(/:/g, "/"))
	}`, float: t = >`float: $ {
		s(t)
	};`, clear: t = >`clear: $ {
		s(t)
	};`, blur: t = >`filter: blur($ {
		r(t)
	})`, brightness: t = >`filter: brightness($ {
		s(t)
	})`, contrast: t = >`filter: contrast($ {
		s(t)
	})`, "drop-shadow": t = >`filter: drop - shadow($ {
		f(t, r)
	})`, grayscale: t = >`filter: grayscale($ {
		s(t)
	})`, "hue-rotate": t = >`filter: hue - rotate($ {
		s(t)
	})`, invert: t = >`filter: invert($ {
		s(t)
	})`, sepia: t = >`filter: sepia($ {
		s(t)
	})`, saturate: t = >`filter: saturate($ {
		s(t)
	})`, "backdrop-blur": t = >`backdrop - filter: blur($ {
		r(t)
	})`, "backdrop-brightness": t = >`backdrop - filter: brightness($ {
		s(t)
	})`, "backdrop-contrast": t = >`backdrop - filter: contrast($ {
		s(t)
	})`, "backdrop-drop-shadow": t = >`backdrop - filter: drop - shadow($ {
		f(t, r)
	})`, "backdrop-grayscale": t = >`backdrop - filter: grayscale($ {
		s(t)
	})`, "backdrop-hue-rotate": t = >`backdrop - filter: hue - rotate($ {
		s(t)
	})`, "backdrop-invert": t = >`backdrop - filter: invert($ {
		s(t)
	})`, "backdrop-sepia": t = >`backdrop - filter: sepia($ {
		s(t)
	})`, "backdrop-saturate": t = >`backdrop - filter: saturate($ {
		s(t)
	})`, triangle: t = >{
		let[e, o, i = 0] = t.split("/"),
		n = ["top", "right", "bottom", "left", "top", "right", "bottom", "left"],
		l = n.slice(n.indexOf(e)),
		c = .5,
		d = "width:0;height:0;border:0 solid transparent;";
		return d += "border-" + l[1] + "-width:" + Math.round( + o * ( - i + 1) / 2) + "px;",
		d += "border-" + l[3] + "-width:" + Math.round( + o * ( + i + 1) / 2) + "px;",
		d += "border-" + l[2] + ":" + Math.round( + o * c) + "px solid black;",
		d
	},
	elevation: t = >{
		let e = +t;
		if (!e) return "box-shadow:none;";
		let o = e == 1 ? 3 : e * 2,
		i = (e + 10 + e / 9.38) / 100,
		n = e < 10 ? e % 2 == 0 ? e - (e / 2 - 1) : e - (e - 1) / 2 : e - 4,
		l = (24 - Math.round(e / 10)) / 100;
		return`box - shadow: 0px $ {
			r(e)
		}
		$ {
			r(o)
		}
		rgba(0, 0, 0, $ {
			i
		}),
		0px $ {
			r(n)
		}
		$ {
			r(o)
		}
		rgba(0, 0, 0, $ {
			l
		});`
	}
},
Z = {
	"hover:": {
		media: "(hover:hover)",
		selector: "&:hover,&.\\:hover"
	},
	"active:": {
		selector: "html &:active,html &.\\:active"
	},
	"focus:": {
		selector: "html &:focus,html &.\\:focus"
	},
	"focus-visible": {
		selector: "html &:focus-visible,html &.\\:focus-visible"
	},
	"focus-within:": {
		selector: "html &:focus-within,html &.\\:focus-within"
	},
	"checked:": {
		selector: "html &:checked,html &.\\:checked"
	},
	"read-only:": {
		selector: "html &:read-only,html &.\\:read-only"
	},
	"enabled:": {
		selector: "html &:enabled,html &.\\:enabled"
	},
	"disabled:": {
		selector: "html body &:disabled,html body &.\\:disabled,html body &[disabled]"
	},
	"group-hover:": {
		selector: ".group:hover &,html .group.\\:hover &"
	},
	"group-active:": {
		selector: "html .group:active &,html .group.\\:active &"
	},
	"group-focus:": {
		selector: "html .group:focus &,html .group.\\:focus &"
	},
	"group-focus-within:": {
		selector: "html .group:focus-within &,html .group\\:focus-within"
	},
	"group-checked:": {
		selector: "html .group:checked &,html .group.\\:checked &"
	},
	"group-read-only:": {
		selector: "html .group:read-only &,html .group.\\:read-only &"
	},
	"group-enabled:": {
		selector: "html .group:enabled &,html .group.\\:enabled &"
	},
	"group-disabled:": {
		selector: "html body .group:disabled &,html body .group[disabled] &,html body .group.disabled &"
	},
	"placeholder:": {
		selector: "&::placeholder"
	},
	"odd:": {
		selector: "&:nth-child(2n+1)"
	},
	"even:": {
		selector: "&:nth-child(2n)"
	},
	"first:": {
		selector: "&:first-child"
	},
	"last:": {
		selector: "&:last-child"
	},
	"after:": {
		selector: "&::after"
	},
	"before:": {
		selector: "&::before"
	},
	"selection::": {
		selector: "&::selection,& *::selection"
	}
},
H = {
	"sm:": {
		media: "(min-width:480px)",
		selector: "html &"
	},
	"md:": {
		media: "(min-width:768px)",
		selector: "html &"
	},
	"lg:": {
		media: "(min-width:1024px)",
		selector: "html &"
	},
	"xl:": {
		media: "(min-width:1280px)",
		selector: "html &"
	},
	"sm~:": {
		media: "(min-width:480px)",
		selector: "html &"
	},
	"md~:": {
		media: "(min-width:768px)",
		selector: "html &"
	},
	"lg~:": {
		media: "(min-width:1024px)",
		selector: "html &"
	},
	"xl~:": {
		media: "(min-width:1280px)",
		selector: "html &"
	},
	"~sm:": {
		media: "(max-width:479.98px)",
		selector: "html &"
	},
	"~md:": {
		media: "(max-width:767.98px)",
		selector: "html &"
	},
	"~lg:": {
		media: "(max-width:1023.98px)",
		selector: "html &"
	},
	"~xl:": {
		media: "(max-width:1279.98px)",
		selector: "html &"
	},
	"mobile:": {
		media: "(max-device-width:767.98px)",
		selector: "html &"
	},
	"tablet:": {
		media: "(min-device-width:768px) and (max-device-width:1023.98px)",
		selector: "html &"
	},
	"desktop:": {
		media: "(min-device-width:1024px)",
		selector: "html &"
	},
	"!mobile:": {
		media: "(min-device-width:768px)",
		selector: "html &"
	},
	"!desktop:": {
		media: "(max-device-width:1023.98px)",
		selector: "html &"
	},
	"touch:": {
		media: "(max-device-width:1023.98px)",
		selector: "html &"
	},
	"!touch:": {
		media: "(min-device-width:1024px)",
		selector: "html &"
	},
	"portrait:": {
		media: "(orientation:portrait)",
		selector: "html &"
	},
	"landscape:": {
		media: "(orientation:landscape)",
		selector: "html &"
	},
	"print:": {
		media: "print",
		selector: "html &"
	},
	"screen:": {
		media: "screen",
		selector: "html &"
	},
	"speech:": {
		media: "speech",
		selector: "html &"
	},
	"dark:": {
		selector: "html.dark &"
	}
},
V = {
	"@w": (t, e) = >{
		var c, d;
		if (((c = e[2]) == null ? void 0 : c.value) !== "(" || ((d = e[e.length - 1]) == null ? void 0 : d.value) !== ")") throw Error("invalid syntax!");
		let o = e.slice(3, -1).map(h = >h.value).join("");
		if (!o.includes("~")) throw Error("invalid syntax! required '~'.");
		let[i, n] = o.split("~");
		return i && (i = ` (min - width: $ {
			r( + i)
		})`),
		n && (n = ` (max - width: $ {
			r( + n - .02)
		})`),
		{
			media: `only screen and $ { [i, n].filter(Boolean).join(" and ")
			}`,
			selector: "html &"
		}
	}
},
N = {
	">>": t = >` & $ {
		t.slice(2)
	}`,
	"&:": t = >`$ {
		t
	}`,
	"&.": t = >`$ {
		t
	}`,
	"&[": t = >`$ {
		t
	}`,
	".": t = >` & $ {
		t
	},
	$ {
		t
	} & `,
	"[": t = >` & $ {
		t
	},
	$ {
		t
	} & `,
	">": t = >` & $ {
		t
	}`,
	"+": t = >` & $ {
		t
	}`,
	"~": t = >` & $ {
		t
	}`,
	"#": t = >` & $ {
		t
	}`
};
var st = w(w({},
Z), H);
var q = [["(hexcolor)", /(#(?:[0-9a-fA-F]{3}){1,2}(?:\.\d+)?)/], ["(important)", /(!+$|!+\+)/], ["(string)", /('(?:[^']|\\')*'|"(?:[^"]|\\")*")/], ["(operator)", /(::|>>|&:|&\.|&\[|[-+~|*/ % !#@ ? :;., <>=[\]() {}]) / ], ["(ident)", /((?:\\.|[^!'":+[\](){}#])+)/], ["(unknown)", /./]], lt = new RegExp(q.map(t = >t[1].source).join("|"), "g"), A = [], a, G = 0, F = t = >{
	if (t && a && a.id && a.id !== t) throw new Error("Unexpected token: " + a.id + " expected: " + t);
	let e = a;
	return a = A[G++],
	e
},
at = t = >{
	A = [],
	G = 0,
	t.replace(lt, (e, ...o) = >{
		let i = o[o.length - 2],
		n = q[o.findIndex(c = >c !== void 0)][0],
		l = n === "(operator)" ? e: n;
		return e = n === "(hexcolor)" ? _(e) : e,
		A.push({
			type: n,
			id: l,
			value: e,
			index: i
		}),
		e
	}),
	F()
},
ct = () = >{
	let t = [],
	e = i = >t.push(i),
	o = [];
	for (; a;) {
		if (a.id === "(" || a.id === "[" || a.id === "{") o.push(a.id);
		else if (a.id === ")" || a.id === "]" || a.id === "}") {
			let i = o.pop();
			if (! (i === "(" && a.id === ")")) {
				if (! (i === "[" && a.id === "]")) {
					if (! (i === "{" && a.id === "}")) throw new Error("Unexpected:" + a.id)
				}
			}
		} else if (o.length === 0 && (a.id === ":" || a.id === "::" || a.id === "(important)" || a.id === "+")) break;
		e(F())
	}
	if (o.length > 0) throw new Error("Unexpected end of input");
	return t
},
dt = (t, e) = >{
	let o = e[0].value,
	i = e.map(h = >h.value).join(""),
	n = N[o];
	if (n) return {
		selector: n(i).replace(/>>/g, " ")
	};
	let l = e.slice(0, 2).map(h = >h.value).join(""),
	c = V[l];
	if (c) return c(i, e);
	let d = t[i + a.id];
	if (d) return d;
	if (/^[-a-z]+$/.test(o)) return {
		selector: ` & $ {
			a.id
		}
		$ {
			i
		}`
	};
	throw new Error("Invalid Prefix Syntax:" + a.id)
},
pt = (t, e) = >{
	let o = Object.fromEntries(Object.keys(t).map((i, n) = >[i, n + 1]));
	return i = >{
		try {
			at(i);
			let n = [];
			for (; a;) {
				let p = ct();
				if (p.find(m = >m.id === "(") && p[p.length - 1].id !== ")") throw new Error("Invalid Syntax!");
				if (a && (a.id === ":" || a.id === "::")) {
					let m = dt(e, p);
					n.push(m)
				} else if (!a || a.id === "(important)" || a.id === "+") {
					let m = p[0].value,
					y = p.slice(2, -1).map(S = >S.value).join(""),
					$ = t[m],
					C = o[m + m.includes("(") ? "(": ""] || o[m] || 0,
					j = (() = >{
						if ($) return y === "" ? $() : $(y);
						if (y && X[m]) return`$ {
							m
						}: $ {
							f(y)
						};`;
						throw new Error("Not defined property: " + m)
					})();
					if (j.search("undefined") >= 0) throw new Error("Not defined property: " + m);
					a && a.id === "(important)" && (j = j.replace(/;/g, (S, K, tt) = >tt.charAt(K - 1) !== "\\" ? "!important;": S), C = 9999 + a.value.length),
					n.push({
						declaration: j,
						priority: C
					})
				}
				F()
			}
			let l = n.map(p = >p.media).filter(Boolean),
			c = l.length ? "@media" + l.join(" and ") : "",
			d = "." + W(i),
			h = n.map(p = >p.selector).filter(Boolean).map(p = >p.split(",")).reduce((p, m) = >p.map(y = >m.map($ = >$.replace(/&/g, y))).flat(), [d]).join(","),
			z = n.map(p = >p.declaration).filter(Boolean).join("");
			if (!z) throw new Error("no declaration");
			let J = n.map(p = >p.priority).filter(Boolean).reduce((p, m) = >Math.max(p, m), 0),
			L = z.includes("&") ? z.replace(/&/g, h) : h + "{" + z + "}";
			return [c ? c + "{" + L + "}": L, J]
		} catch {}
	}
},
mt = (t, e) = >t[1] - e[1], gt = (t = {},
e = {}) = >(t = w(w({},
R), t), e = w(w({},
st), e), o = >o.map(pt(t, e)).filter(Boolean).sort(mt).map(i = >i[0])), Q = gt();
if (typeof document != "undefined") {
	let t = document.createElement("style");
	t.innerHTML = "body {display:none!important}",
	document.head.appendChild(t);
	let e = new Set,
	o = () = >t.innerHTML = Y + Q([...e]).join(``),
	i = () = >{
		if (!document.body) return;
		new MutationObserver(() = >n()).observe(document.documentElement, {
			attributes: !0,
			attributeFilter: ["class"],
			childList: !0,
			subtree: !0
		})
	},
	n = () = >{
		let c = e.size;
		Array.from(document.querySelectorAll("*[class]")).forEach(d = >Array.from(d.classList).forEach(h = >e.add(h))),
		c !== e.size && o(),
		t.parentNode !== document.head && document.head.appendChild(t)
	},
	l = () = >{
		n(),
		i(),
		document.removeEventListener("readystatechange", l)
	};
	l(),
	document.addEventListener("readystatechange", l)
}