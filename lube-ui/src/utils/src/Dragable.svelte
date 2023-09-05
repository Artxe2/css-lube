<script>
import { createEventDispatcher } from "svelte"

export let classs = ""
export let delay = 0

/** @type {(clientX: number, clientY: number, drag: HTMLElement) => void} */
export let setDragElement

const dispatch = createEventDispatcher()

/** @type {HTMLDivElement} */
let container

/** @type {HTMLDivElement} */
let dragView

/** @type {number} */
let timer

/** @param {{ clientX: number, clientY: number }} event */
const handle_mousedown = ({ clientX, clientY }) => {
	timer = setTimeout(() => {
		/** @type {HTMLDivElement} */
		// @ts-ignore
		const drag = (dragView.firstChild || container).cloneNode(true)
		drag.style.position = "absolute"
		drag.style.top = container.offsetTop + "px"
		drag.style.left = container.offsetLeft + "px"
		setDragElement(clientX, clientY, drag)
		dispatch("dragstart")
	}, delay)
}

/** @param {TouchEvent} event */
const handle_touchstart = event => {
	handle_mousedown(event.touches[0])
}
const handle_mouseup = () => {
	clearTimeout(timer);
}
const handle_touchend = () => {
	clearTimeout(timer);
}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div bind:this={container}
		class={classs}
		style="touch-action:none;user-select:none;width:fit-content;"
		on:mousedown={handle_mousedown}
		on:mouseup={handle_mouseup}
		on:touchstart={handle_touchstart}
		on:touchend={handle_touchend}>
	<slot></slot>
</div>
<div bind:this={dragView} style="display:none;">
	<slot name="drag"></slot>
</div>