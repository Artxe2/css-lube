import { base } from "$app/paths"

const subMenu = {
	"Home": { href: base + "/" },
	"Documents": {
		href: base + "/docs",
		childs: {
			"Getting Started": {
				href: base + "/docs/start",
				childs: {
					"Installation": { href: base + "/docs/start/installation" },
					"Code Intellisense": { href: base + "/docs/start/code-intellisense" }
				}
			},
			"Syntax": {
				href: base + "/docs/syntax",
				childs: {
					"Basic": { href: base + "/docs/syntax/basic" },
					"Shorthand": { href: base + "/docs/syntax/shorthand" },
					"Pseudo Class": { href: base + "/docs/syntax/selector" },
					"Priority": { href: base + "/docs/syntax/priority" },
					"Media Query": { href: base + "/docs/syntax/media-query" },
					"Dark mode": { href: base + "/docs/syntax/dark-mode" }
				}
			},
			"Customizing": {
				href: base + "/docs/custom",
				childs: {
					"CSS Reset": { href: base + "/docs/custom/css-reset" },
					"Shorthand Keys": { href: base + "/docs/custom/shorthand-keys" },
					"Shorthand Values": { href: base + "/docs/custom/shorthand-values" },
					"Shorthand Medias": { href: base + "/docs/custom/shorthand-medias" },
					"Default Unit": { href: base + "/docs/custom/default-unit" }
				}
			}
		}
	},
	"REPl": { href: base + "/repl" },
	"Reference": {
		href: base + "/ref",
		childs: {
			"Atomic for CSS Lube": { href: base + "/ref/atomic-for-lube" },
			"Animations": {
				href: base + "/ref/anim",
				childs: {
					"Loading Circle": { href: base + "/ref/anim/loading-circle" },
					"Text Animation": { href: base + "/ref/anim/text-animation" }
				}
			},
			"Utils": {
				href: base + "/ref/utils",
				childs: {
					"Carousel Slider": { href: base + "/ref/utils/carousel-slider" },
					"Drag and Drop": { href: base + "/ref/utils/drag-and-drop" },
					"Infinite Scroll": { href: base + "/ref/utils/infinite-scroll" }
				}
			},
			"Benchmark": { href: base + "/ref/benchmark" }
		}
	}
}

export default subMenu