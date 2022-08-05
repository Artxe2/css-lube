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

<div class="text-align=center">
  <div class="inlineBlock w=400 h=5rem fw=bold @maxWidth=800@fs=0.75rem">
	<span bind:this={wrap}>
		&lt;span class="<span bind:this={word}></span>
		<span class="absolute transform=translate(-5px,-5px) fontSize=1.2rem @maxWidth=800@fs=0.9rem;transform=translate(-4px,-4px) fw=bold">|</span>"&gt;&lt;/span&gt;
	</span>
  </div>
</div>