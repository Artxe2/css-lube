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
		total_blocking_time: 440,
		speed_index: 1.2
	},
	{
		name: "Atomic CSS",
		first_contentful_paint: 1.9,
		total_blocking_time: 80,
		speed_index: 2.0
	},
	{
		name: "CSS Lube",
		first_contentful_paint: 1.2,
		total_blocking_time: 1340,
		speed_index: 2.6
	},
	{
		name: "Tailwind JIT",
		first_contentful_paint: 2.8,
		total_blocking_time: 22370,
		speed_index: 11.3
	}
]
const first_contentful_paint_ticks = [0, .75, 1.5, 2.25, 3]
const total_blocking_time_ticks = [0, 5750, 11500, 17250, 23000]
const speed_index_ticks = [0, 3, 6, 9, 12]
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