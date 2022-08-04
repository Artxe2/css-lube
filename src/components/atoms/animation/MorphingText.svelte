<script lang="ts">
import { onMount } from "svelte";

export let array = []

let t1
let t2
let index = array.length - 2
onMount(() => {
    const animation = () => {
		t1.innerHTML = array[index]
		if (++index == array.length) {
			index = 0
		}
		t2.innerHTML = array[index]
		t1.className = t1.className.replace(/transition\=0s/, "transition=1s")
			.replace(
				"filter=blur(0px)",
				"filter=blur(0.5rem) @maxWidth=800@filter=blur(0.25rem)"
			)
		t2.className = t2.className.replace(/transition\=0s/, "transition=1s")
			.replace(
				"filter=blur(0.5rem) @maxWidth=800@filter=blur(0.25rem)",
				"filter=blur(0px)",
			)
		setTimeout(() => {
			t1.className = t1.className.replace(/transition\=1s/, "transition=0s")
				.replace(
					"filter=blur(0.5rem) @maxWidth=800@filter=blur(0.25rem)",
					"filter=blur(0px)",
				)
			t2.className = t2.className.replace(/transition\=1s/, "transition=0s")
				.replace(
					"filter=blur(0px)",
					"filter=blur(0.5rem) @maxWidth=800@filter=blur(0.25rem)"
				)
			t1.innerHTML = array[index]
		}, 500)
        setTimeout(animation, 2500)
    }
    animation()
})
</script>

<div class="w=100% h=2rem fontSize=1.5rem @maxWidth=800@fontSize=0.75rem fontWeight=bold textAlign=left filter=url(#filter) >span/absolute;w=100%;textAlign=center;user-select=none ">
	<span class="transition=1s filter=blur(0px)" bind:this={t1}></span>
	<span class="transition=1s filter=blur(0.5rem) @maxWidth=800@filter=blur(0.25rem)" bind:this={t2}></span>
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