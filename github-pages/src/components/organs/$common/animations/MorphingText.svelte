<script>
import { onDestroy as on_destroy, onMount as on_mount } from "svelte"

export let classs = ""
/** @type {[ string, number ][]} */
export let array = []
/** @type {number} */
export let longest
export let transition = 500

/** @type {number} */
let timer
let index = 0
let text1 = array[0][0]
let text2 = ""
let filter = false
let class1 = ""
let class2 = ""

/** @param {number} ms */
const sleep = async ms =>
	new Promise(
		resolve => timer = setTimeout(resolve, ms)
	)
const animation = async () => {
	await sleep(array[index][1] - transition)
	filter = true
	class2 = "ft=blur(.5em)"
	await sleep(transition * 0.1)
	index = ++index % array.length
	text2 = array[index][0]
	class1 = "tt=filter_" + transition + "ms ft=blur(.5em)"
	class2 = "tt=filter_" + transition + "ms"
	await sleep(transition * 0.9)
	text1 = array[index][0]
	filter = false
	class1 = ""
	class2 = ""
	animation()
}
on_mount(animation)
on_destroy(() => clearTimeout(timer))
</script>

<div class="relative ta=center wc=filter
		{filter && "ft=url(#ft)"}
		>span/absolute >span/w=100% >span/l=0 >span/us=none
		{classs}">
	<span class={class1}>{@html text1}</span>
	<span class={class2}>{@html text2}</span>
	<span class="static! op=0">{@html array[longest]}</span>
	<svg class="none">
		<defs>
			<filter id="ft">
				<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
					0 1 0 0 0
					0 0 1 0 0
					0 0 0 255 -140" />
			</filter>
		</defs>
	</svg>
</div>