<script lang="ts">
import { onMount } from "svelte";

export let array = []
export let longest = 0

let text1
let text2
let class1 = "tt=.5s ft=blur(0.5em)"
let class2 = "tt=.5s ft=blur(0.5em)"
let index = 0
onMount(() => {
    const animation = () => {
		if (++index == array.length) {
			index = 0
		}
		text2 = array[index]
		class1 = "tt=.5s ft=blur(0.5em)"
		class2 = "tt=.5s ft=blur(0px)"
		setTimeout(() => {
			text1 = array[index]
			class1 = "tt=0s ft=blur(0px)"
			class2 = "tt=0s ft=blur(0.5em)"
		}, 500)
        setTimeout(animation, 2000)
    }
	text1 = array[index]
	class1 = "tt=.5s ft=blur(0px)"
	setTimeout(() => class1 = "tt=.5s ft=blur(0px)", 500)
	setTimeout(animation, 1500)
})
</script>

<div class="relative ft=url(#ft) w=100% ta=center fw=bold >span/absolute;w=100%;l=0;user-select=none">
	<span class={class1}>{@html text1}</span>
	<span class={class2}>{@html text2}</span>
	<span class="static! opacity=0">{@html array[longest]}</span>
	<svg class="display=none">
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