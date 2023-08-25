<script lang="ts">
import { drag$, transition$ } from "parts/ref/store"
import { Dragable } from "lube-ui"

export let list: string[]
export let transforms: number[]
export let type: "todo" | "done"
export let index: number
// eslint-disable-next-line id-match
export let clientHeight: number
export let duration = 400
// eslint-disable-next-line id-match
export let setDragElement: (clientX: number, clientY: number, drag: HTMLElement) => any
export let transfer_list: (index: number) => any
export let move_item: (index: number) => any

const handle_click = (event: MouseEvent) => {
	alert((event.target as HTMLElement).textContent)
}
const handle_dragenter = () => {
	const i = $drag$?.index
	const t = $drag$?.type
	if (i === undefined || i === index && t === type) {
		return
	}
	if (t === type) {
		transfer_list(index)
	} else {
		move_item(index)
	}
}
const handle_dragstart = () => {
	$drag$ = { type: type, index: index }
	$transition$ = true
}
</script>

<Dragable on:dragstart={handle_dragstart}
		delay={300}
		{setDragElement}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div bind:clientHeight on:click={handle_click}
			class="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY({transforms[index]}px)
			{$transition$ ? "tt=" + duration + "ms" : ""}
			{$drag$?.index === index && $drag$?.type === type ? " opacity=.2 ol=.2_solid_#aaa" : ""}
			{!list[index] ? "none" : ""}"
			on:dragenter={handle_dragenter}>
		{list[index]}
	</div>
	<div slot="drag"
			bind:clientHeight
			class="ta=center fs=2.5 cs=move c=#000 @dark@c=#fff">
		{list[index] + "!!"}
	</div>
</Dragable>