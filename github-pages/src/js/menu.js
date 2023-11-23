import { base } from "$app/paths"

/** @type {import("./types.js").Menu[]} */
const menu = [
	{ href: `${base}/`, name: "Home" },
	{
		href: `${base}/docs`,
		name: "Documents",
		subs: [
			{
				href: `${base}/docs/start`,
				name: "Getting Started"
			},
			{
				href: `${base}/docs/syntax`,
				name: "Syntax"
			},
			{
				href: `${base}/docs/custom`,
				name: "Customizing"
			}
		]
	},
	{
		href: `${base}/repl`,
		name: "REPl"
	},
	{
		href: `${base}/ref`,
		name: "Reference",
		subs: [
			{
				href: `${base}/ref/benchmark`,
				name: "Benchmark"
			},
			{
				href: `${base}/ref/ui`,
				name: "Lube UI",
				subs: [
					{
						href: `${base}/ref/ui/carousel-slider`,
						name: "Carousel Slider"
					},
					{
						href: `${base}/ref/ui/drag-and-drop`,
						name: "Drag and Drop"
					},
					{
						href: `${base}/ref/ui/infinite-scroll`,
						name: "Infinite Scroll"
					}
				]
			}
		]
	}
]

export default menu