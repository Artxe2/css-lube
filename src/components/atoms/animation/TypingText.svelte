<script lang="ts">
import { onMount } from "svelte";

export let array = []

let word
onMount(() => {
    let tab = -1
    const setText = t => {
        word.innerText = t
        word.className = t
    }
    const animation = () => {
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
		time += 1000
		while (index-- > 0) {
			const t = text.slice(0, index)
			setTimeout(() => setText(t), time += 25)
		}
        setTimeout(animation, time += 500)
    }
    animation()
})
</script>

<div class="text-align=center">
  <div class="inlineBlock w=300 h=5rem">
    <span bind:this={word}></span>
    <span class="font-size=1.5rem font-weight=bold">|</span>
  </div>
</div>