<script lang="ts">
import { scaleLinear as scale_linear } from "d3-scale"
import { H2 } from "lube-ui"

const data: {
	name: string,
	first_contentful_paint: number,
	total_blocking_time: number,
	speed_index: number
}[] = [
	{
		name: "Inline Style",
		first_contentful_paint: 1.2,
		total_blocking_time: 200,
		speed_index: 1.2
	},
	{
		name: "Atomic CSS",
		first_contentful_paint: 1.7,
		total_blocking_time: 50,
		speed_index: 1.8
	},
	{
		name: "CSS Lube",
		first_contentful_paint: 1.1,
		total_blocking_time: 790,
		speed_index: 1.7
	},
	{
		name: "Tailwind JIT",
		first_contentful_paint: 2.7,
		total_blocking_time: 17480,
		speed_index: 8.4
	}
]
const max_first_contentful_paint = Math.max(...data.map(v => v.first_contentful_paint))
const first_contentful_paint_ticks = [
	0,
	.25 * max_first_contentful_paint,
	.5 * max_first_contentful_paint,
	.75 * max_first_contentful_paint,
	max_first_contentful_paint
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
const padding = { top: 20, right: 15, bottom: 20, left: 25 }

let width: number
let height: number

$: x_scale = scale_linear()
	.domain([0, data.length])
	.range([padding.left, width - padding.right])
$: first_contentful_paint_scale = scale_linear()
	.domain([0, Math.max(...first_contentful_paint_ticks)])
	.range([height - padding.bottom, padding.top])
$: total_blocking_time_scale = scale_linear()
	.domain([0, Math.max(...total_blocking_time_ticks)])
	.range([height - padding.bottom, padding.top])
$: speed_index_scale = scale_linear()
	.domain([0, Math.max(...speed_index_ticks)])
	.range([height - padding.bottom, padding.top])

$: innerWidth = width - padding.left - padding.right
$: bar_width = innerWidth / data.length / 3 - 4
</script>

<H2 classs="ta=center">PageSpeed Insights</H2>

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
							stroke-dasharray={i ? 2 : 0}" x2="100%" />
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
			{#each data as { first_contentful_paint, total_blocking_time, speed_index }, i}
				<rect class="f=#a11 stroke=none op=.65"
						x={x_scale(i) + 4}
						y={first_contentful_paint_scale(first_contentful_paint)}
						width={bar_width}
						height={first_contentful_paint_scale(0) - first_contentful_paint_scale(first_contentful_paint)} />
				<text class="fs=.75 text-anchor=middle"
						x={x_scale(i) + 4 + bar_width / 2}
						y={first_contentful_paint_scale(first_contentful_paint)}>
					{first_contentful_paint}s
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
					{speed_index}s
				</text>
			{/each}
		</g>
	</svg>
</div>