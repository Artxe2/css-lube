<script lang="ts">
import { onMount } from "svelte";

export let array = []

let wrap
let word
onMount(() => {
    let tab = -1
    const setText = t => {
		if (!word) return
        wrap.className = t
        word.innerText = t
    }
    const animation = () => {
		if (!word) return
		if (++tab == array.length) {
			tab = 0
		}
		let text = array[tab]
		let index = 0
		let time = 0
		setText("")
		while (index++ < text.length) {
			const t = text.slice(0, index)
			setTimeout(() => setText(t), time += 50)
		}
		time += 2000
		while (index-- > 0) {
			const t = text.slice(0, index)
			setTimeout(() => setText(t), time += 25)
		}
        setTimeout(animation, time += 600)
    }
    animation()
})
</script>

<span bind:this={wrap} class="relative fw=bold">
	&lt;span class="<span bind:this={word}></span>
	<span class="marginLeft=-0.25em fs=1 fw=bold verticalAlign=0.125em">|</span>"&gt;&lt;/span&gt;
</span>