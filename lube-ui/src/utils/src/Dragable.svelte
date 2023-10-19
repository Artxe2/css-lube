<script>
import { createEventDispatcher } from "svelte"

export let classs = ""
export let delay = 0

/** @type {
	(clientX: number, clientY: number, drag_element: HTMLElement) => void
} */
export let setDragElement

const dispatch = createEventDispatcher()

/** @type {HTMLDivElement} */
let container

/** @type {HTMLDivElement} */
let drag_view

/** @type {number} */
let timer

/**
 * @param {number} client_x
 * @param {number} client_y
 */
const start_drag = (client_x, client_y) => {
	const drag_element = /** @type {HTMLDivElement} */ (
		(drag_view.firstChild || container).cloneNode(true)
	)
	drag_element.style.position = "absolute"
	drag_element.style.top = container.offsetTop + "px"
	drag_element.style.left = container.offsetLeft + "px"
	setDragElement(client_x, client_y, drag_element)
	dispatch("dragstart")
}

/** @param {{ clientX: number, clientY: number }} event */
const handle_mousedown = ({ clientX, clientY }) => {
	if (delay) timer = setTimeout(start_drag, delay, clientX, clientY)
	else start_drag(clientX, clientY)
}

/** @param {TouchEvent} event */
const handle_touchstart = event => {
	handle_mousedown(event.touches[0])
}
const handle_mouseup = () => {
	clearTimeout(timer)
}
const handle_touchend = () => {
	clearTimeout(timer)
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
<div bind:this={drag_view} style="display:none;">
	<slot name="drag"></slot>
</div>