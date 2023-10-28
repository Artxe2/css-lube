import { base } from "$app/paths"

/** @type {import("./types.js").Menu[]} */
const menu = [
	{
		href: `${base}/`,
		name: "Home"
	},
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
				href: `${base}/ref/custom`,
				name: "Customizing"
			},
			{
				href: `${base}/ref/benchmark`,
				name: "Benchmark"
			},
			{
				href: `${base}/ref/tips`,
				name: "Useful Tips"
			},
			{
				href: `${base}/ref/utils`,
				name: "Utils",
				subs: [
					{
						href: `${base}/ref/utils/carousel-slider`,
						name: "Carousel Slider"
					},
					{
						href: `${base}/ref/utils/drag-and-drop`,
						name: "Drag and Drop"
					},
					{
						href: `${base}/ref/utils/infinite-scroll`,
						name: "Infinite Scroll"
					}
				]
			}
		]
	}
]

export default menu