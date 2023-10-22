<script>
import { scaleLinear } from "d3-scale"
import { H2 } from "lube-ui"

/**
 * @type {{
		name: string,
		page_weight: number,
		total_blocking_time: number,
		speed_index: number
	}[]}
 */
const data = [
	{
		name: "Inline Style",
		page_weight: 51,
		total_blocking_time: 1018,
		speed_index: 934
	},
	{
		name: "Atomic CSS",
		page_weight: 108,
		total_blocking_time: 0,
		speed_index: 2599
	},
	{
		name: "CSS Lube",
		page_weight: 52,
		total_blocking_time: 173,
		speed_index: 2980
	},
	{
		name: "Tailwind JIT",
		page_weight: 157,
		total_blocking_time: 2291,
		speed_index: 4051
	}
]
const max_page_weight = Math.max(...data.map(v => v.page_weight))
const page_weight_ticks = [
	0,
	.25 * max_page_weight,
	.5 * max_page_weight,
	.75 * max_page_weight,
	max_page_weight
]
const total_blocking_time_paint = Math.max(...data.map(v => v.total_blocking_time))
const total_blocking_time_ticks = [
	0,
	.25 * total_blocking_time_paint,
	.5 * total_blocking_time_paint,
	.75 * total_blocking_time_paint,
	total_blocking_time_paint
]
const max_speed_index = Math.max(...data.map(v => v.speed_index))
const speed_index_ticks = [
	0,
	.25 * max_speed_index,
	.5 * max_speed_index,
	.75 * max_speed_index,
	max_speed_index
]
const padding = {
	top: 20,
	right: 15,
	bottom: 20,
	left: 25
}
let width = 100
let height = 100

$: x_scale = scaleLinear()
	.domain([0, data.length])
	.range([padding.left, width - padding.right])
$: page_weight_scale = scaleLinear()
	.domain([0, Math.max(...page_weight_ticks)])
	.range([height - padding.bottom, padding.top])
$: total_blocking_time_scale = scaleLinear()
	.domain([0, Math.max(...total_blocking_time_ticks)])
	.range([height - padding.bottom, padding.top])
$: speed_index_scale = scaleLinear()
	.domain([0, Math.max(...speed_index_ticks)])
	.range([height - padding.bottom, padding.top])

$: innerWidth = width - padding.left - padding.right
$: bar_width = innerWidth / data.length / 3 - 4
</script>

<div class="chart" bind:clientWidth={width} bind:clientHeight={height}>
	<svg class="relative w=100% h=20">
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
			<text>speed index</text>
		</g>
		<g>
			{#each speed_index_ticks as tick, i}
				<g class="fs=.75" transform="translate(0, {speed_index_scale(tick)})">
					<line class="stroke=--gray-50
							{i ? "stroke-dasharray=2" : "stroke-dasharray=0"}" x2="100%" />
				</g>
			{/each}
		</g>
		<g>
			{#each data as { name }, i}
				<g class="fs=.75" transform="translate({x_scale(i)},{height})">
					<text class="text-anchor=middle" x={bar_width * 1.5 + 6} y="-4">{name}</text>
				</g>
			{/each}
		</g>
		<g>
			{#each data as {
				page_weight, total_blocking_time, speed_index
			}, i}
				<rect class="f=#a11 stroke=none op=.65"
						x={x_scale(i) + 4}
						y={page_weight_scale(page_weight)}
						width={bar_width}
						height={page_weight_scale(0) - page_weight_scale(page_weight)} />
				<text class="fs=.75 text-anchor=middle"
						x={x_scale(i) + 4 + bar_width / 2}
						y={page_weight_scale(page_weight)}>
					{page_weight}KB
				</text>
				<rect class="f=#1a1 stroke=none op=.65"
						x={x_scale(i) + 6 + bar_width}
						y={total_blocking_time_scale(total_blocking_time)}
						width={bar_width}
						height={total_blocking_time_scale(0) - total_blocking_time_scale(total_blocking_time)} />
				<text class="fs=.75 text-anchor=middle"
						x={x_scale(i) + 6 + bar_width * 1.5}
						y={total_blocking_time_scale(total_blocking_time)}>
					{total_blocking_time}ms
				</text>
				<rect class="f=#11a stroke=none op=.65"
						x={x_scale(i) + 8 + bar_width * 2}
						y={speed_index_scale(speed_index)}
						width={bar_width}
						height={speed_index_scale(0) - speed_index_scale(speed_index)} />
				<text class="fs=.75 text-anchor=middle"
						x={x_scale(i) + 8 + bar_width * 2.5}
						y={speed_index_scale(speed_index)}>
					{speed_index}ms
				</text>
			{/each}
		</g>
	</svg>
</div>