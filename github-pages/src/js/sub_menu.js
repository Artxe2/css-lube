import { base } from "$app/paths"

const sub_menu = {
	"Home": { href: base + "/" },
	"Documents": {
		href: base + "/docs",
		childs: {
			"Getting Started": { href: base + "/docs/start" },
			"Syntax": { href: base + "/docs/syntax" }
		}
	},
	"REPl": { href: base + "/repl" },
	"Reference": {
		href: base + "/ref",
		childs: {
			"Customizing": { href: base + "/ref/custom" },
			"Benchmark": { href: base + "/ref/benchmark" },
			"Useful Tips": { href: base + "/ref/tips" },
			"Utils": {
				href: base + "/ref/utils",
				childs: {
					"Carousel Slider": { href: base + "/ref/utils/carousel-slider" },
					"Drag and Drop": { href: base + "/ref/utils/drag-and-drop" },
					"Infinite Scroll": { href: base + "/ref/utils/infinite-scroll" }
				}
			}
		}
	}
}

export default sub_menu