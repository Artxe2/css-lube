<script lang="ts">
import { onMount } from "svelte";

export let array = []

let wrap
let t1
let t2
let index = array.length - 2
onMount(() => {
    const animation = () => {
		if (!t1) return
		if (++index == array.length) {
			index = 0
		}
		t2.innerHTML = array[index]
		t1.className = "transition=1s filter=blur(0.5em)"
		t2.className = "transition=1s filter=blur(0px)"
		setTimeout(() => {
			if (!t1) return
			t1.className = "transition=0s filter=blur(0px)"
			t2.className = "transition=0s filter=blur(0.5em)"
			t1.innerHTML = array[index]
		}, 500)
        setTimeout(animation, 2500)
    }
	t1.innerHTML = array[index]
	t1.className = "transition=1s filter=blur(0px)"
	setTimeout(animation, 2000)
})
</script>

<div bind:this={wrap}
	class="filter=url(#filter) w=100% textAlign=center fs=1.5em fw=bold >span/absolute;w=100%;transform=translateX(-50%);user-select=none"
>
	<span class="transition=1s filter=blur(0.5em)" bind:this={t1}></span>
	<span class="transition=1s filter=blur(0.5em)" bind:this={t2}></span>
	<svg class="display=none">
		<defs>
			<filter id="filter">
				<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
					  0 1 0 0 0
					  0 0 1 0 0
					  0 0 0 255 -140" />
			</filter>
		</defs>
	</svg>
</div>