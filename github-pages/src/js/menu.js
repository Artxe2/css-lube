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
			}
		]
	},
	{
		href: `${base}/ui`,
		name: "Lube UI"
	}
]

export default menu