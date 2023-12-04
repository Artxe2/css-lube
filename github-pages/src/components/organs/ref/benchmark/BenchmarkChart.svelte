<script>
import { scaleLinear } from "d3-scale"

/**
 * @type {{
		name: string
		first_contentful_paint: number
		total_blocking_time: number
		page_weight: number
	}[]}
 */
const data = [
	{
		name: "Inline Style",
		first_contentful_paint: 812,
		total_blocking_time: 0,
		page_weight: 164
	},
	{
		name: "CSS Lube v2.2.0",
		first_contentful_paint: 1095,
		total_blocking_time: 1945,
		page_weight: 166
	},
	{
		name: "Atomic CSS",
		first_contentful_paint: 1956,
		total_blocking_time: 546,
		page_weight: 197
	},
	{
		name: "Tailwind CDN v3.3.5",
		first_contentful_paint: 3908,
		total_blocking_time: 11194,
		page_weight: 270
	}
]
const max_first_contentful_paint = Math.max(
	...data.map(v => v.first_contentful_paint)
)
const first_contentful_paint_ticks = [
	0,
	.25 * max_first_contentful_paint,
	.5 * max_first_contentful_paint,
	.75 * max_first_contentful_paint,
	max_first_contentful_paint
]
const total_blocking_time_paint = Math.max(
	...data.map(v => v.total_blocking_time)
)
const total_blocking_time_ticks = [
	0,
	.25 * total_blocking_time_paint,
	.5 * total_blocking_time_paint,
	.75 * total_blocking_time_paint,
	total_blocking_time_paint
]
const max_page_weight = Math.max(
	...data.map(v => v.page_weight)
)
const page_weight_ticks = [
	0,
	.25 * max_page_weight,
	.5 * max_page_weight,
	.75 * max_page_weight,
	max_page_weight
]
const padding = {
	top: 20,
	right: 15,
	bottom: 20,
	left: 25
}
let width = $state(100)
let height = $state(100)

const x_scale = $derived(
	scaleLinear()
		.domain([ 0, data.length ])
		.range(
			[
				padding.left,
				width - padding.right
			]
		)
)
const page_weight_scale = $derived(
	scaleLinear()
		.domain(
			[
				0,
				Math.max(...page_weight_ticks)
			]
		)
		.range(
			[
				height - padding.bottom,
				padding.top
			]
		)
)
const total_blocking_time_scale = $derived(
	scaleLinear()
		.domain(
			[
				0,
				Math.max(...total_blocking_time_ticks)
			]
		)
		.range(
			[
				height - padding.bottom,
				padding.top
			]
		)
)
const first_contentful_paint_scale = $derived(
	scaleLinear()
		.domain(
			[
				0,
				Math.max(
					...first_contentful_paint_ticks
				)
			]
		)
		.range(
			[
				height - padding.bottom,
				padding.top
			]
		)
)
const inner_width = $derived(
	width - padding.left - padding.right
)
const bar_width = $derived(
	inner_width / data.length / 3 - 4
)
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg class="relative w=100% h=480">
		<rect width="15" height="15" y="26" fill="#a11" />
		<rect width="15" height="15" y="46" fill="#1a1" />
		<rect width="15" height="15" y="66" fill="#11a" />
		<g transform="translate(20, 40)">
			<text>first contentful paint</text>
		</g>
		<g transform="translate(20, 60)">
			<text>total blocking time</text>
		</g>
		<g transform="translate(20, 80)">
			<text>page weight</text>
		</g>
		<g>
			{#each first_contentful_paint_ticks as tick, i}
				<g transform="translate(0, {first_contentful_paint_scale(tick)})">
					<line class="stroke=--gray-50
							{i ? "stroke-dasharray=2" : "stroke-dasharray=0"}" x2="100%" />
				</g>
			{/each}
		</g>
		<g>
			{#each data as { name }, i}
				<g transform="translate({x_scale(i)},{height})">
					<text class="text-anchor=middle" x={bar_width * 1.5 + 6} y="-4">{name}</text>
				</g>
			{/each}
		</g>
		<g>
			{#each data as {
				page_weight,
				total_blocking_time,
				first_contentful_paint
			}, i}
				<rect class="f=#a11 stroke=none op=.65"
						x={x_scale(i) + 4}
						y={first_contentful_paint_scale(first_contentful_paint)}
						width={bar_width}
						height={first_contentful_paint_scale(0) - first_contentful_paint_scale(first_contentful_paint)} />
				<text class="text-anchor=middle"
						x={x_scale(i) + 4 + bar_width / 2}
						y={first_contentful_paint_scale(first_contentful_paint)}>
					{first_contentful_paint}ms
				</text>
				<rect class="f=#1a1 stroke=none op=.65"
						x={x_scale(i) + 6 + bar_width}
						y={total_blocking_time_scale(total_blocking_time)}
						width={bar_width}
						height={total_blocking_time_scale(0) - total_blocking_time_scale(total_blocking_time)} />
				<text class="text-anchor=middle"
						x={x_scale(i) + 6 + bar_width * 1.5}
						y={total_blocking_time_scale(total_blocking_time)}>
					{total_blocking_time}ms
				</text>
				<rect class="f=#11a stroke=none op=.65"
						x={x_scale(i) + 8 + bar_width * 2}
						y={page_weight_scale(page_weight)}
						width={bar_width}
						height={page_weight_scale(0) - page_weight_scale(page_weight)} />
				<text class="text-anchor=middle"
						x={x_scale(i) + 8 + bar_width * 2.5}
						y={page_weight_scale(page_weight)}>
					{page_weight}KB
				</text>
			{/each}
		</g>
	</svg>
</div>