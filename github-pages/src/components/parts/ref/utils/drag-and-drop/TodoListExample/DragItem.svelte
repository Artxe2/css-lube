<script>
import { drag$, transition$ } from "parts/ref/store.js"
import { Dragable } from "lube-ui"

/** @type {string[]} */
export let list
/** @type {number[]} */
export let transforms
/** @type {"todo"|"done"} */
export let type
/** @type {number} */
export let index
/** @type {number} */
export let clientHeight
export let duration = 400
/** @type {(clientX: number, clientY: number, drag: HTMLElement) => void} */
export let setDragElement
/** @type {(index: number) => void} */
export let transfer_list
/** @type {(index: number) => void} */
export let move_item

/** @param {MouseEvent} event */
const handle_click = event => {
	alert(/** @type {HTMLElement} */(event.target)/**/?.textContent)
}
const handle_dragenter = () => {
	const i = $drag$?.index
	const t = $drag$?.type
	if (i === void 0 || i === index && t === type) {
		return
	}
	if (t === type) {
		transfer_list(index)
	} else {
		move_item(index)
	}
}
const handle_dragstart = () => {
	$drag$ = {
		type: type,
		index: index
	}
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
			{$transition$ && `tt=${duration}ms`}
			{$drag$?.index === index && $drag$?.type === type && "opacity=.2 ol=.2_solid_#aaa"}
			{!list[index] && "none"}"
			on:dragenter={handle_dragenter}>
		{list[index]}
	</div>
	<div slot="drag"
			bind:clientHeight
			class="ta=center fs=2.5 cs=move c=#000 @dark@c=#fff">
		{list[index] + "!!"}
	</div>
</Dragable>