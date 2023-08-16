import { base } from "$app/paths"

const sub_menu = {
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
			}
		}
	},
	"REPl": { href: base + "/repl" },
	"Reference": {
		href: base + "/ref",
		childs: {
			"Customizing": {
				href: base + "/ref/custom",
				childs: {
					"CSS Reset": { href: base + "/ref/custom/css-reset" },
					"Shorthand Keys": { href: base + "/ref/custom/shorthand-keys" },
					"Shorthand Values": { href: base + "/ref/custom/shorthand-values" },
					"Shorthand Medias": { href: base + "/ref/custom/shorthand-medias" },
					"Default Unit": { href: base + "/ref/custom/default-unit" }
				}
			},
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
			"Benchmark": { href: base + "/ref/benchmark" },
			"Atomic for CSS Lube": { href: base + "/ref/atomic-for-lube" }
		}
	}
}

export default sub_menu