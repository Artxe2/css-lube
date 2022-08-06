<script lang="ts">
import { onMount } from "svelte";

export let array = []

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
			if (!t1) return
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
	t1.innerHTML = array[index]
	t1.className = t1.className.replace(
		"filter=blur(0.5rem) @maxWidth=800@filter=blur(0.25rem)",
		"filter=blur(0px)"
	)
	setTimeout(animation, 2500)
})
</script>

<div class="w=100% h=3rem textAlign=center fs=1.5rem @maxWidth=800@h=2.25rem;fs=0.75rem fw=bold filter=url(#filter) >span/absolute;w=100%;transform=translateX(-50%);user-select=none">
	<span class="transition=1s filter=blur(0.5rem) @maxWidth=800@filter=blur(0.25rem)" bind:this={t1}></span>
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