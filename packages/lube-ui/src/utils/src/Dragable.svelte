<script>
/**
 * @type {{
 *   classs?: string
 *   delay?: number
 *   ondragstart?: (event: DragEvent) => void
 *   setDragElement: (clientX: number, clientY: number, drag_element: HTMLElement) => void
 * }}
 */
const {
	classs = "",
	delay,
	ondragstart,
	setDragElement
} = $props()

/** @type {HTMLDivElement} */
let container
/** @type {HTMLDivElement} */
let drag_view
/** @type {ReturnType<typeof setTimeout> | 0} */
let timeout

/** @param {{ clientX: number, clientY: number }} event */
const handle_mousedown = ({ clientX, clientY }) => {
	if (delay) timeout = setTimeout(start_drag, delay, clientX, clientY)
	else start_drag(clientX, clientY)
}
const handle_mouseup = () => {
	if (timeout) {
		clearTimeout(timeout)
		timeout = 0
	}
}
/** @param {TouchEvent} event */
const handle_touchstart = event => {
	handle_mousedown(event.touches[0])
}
const handle_touchend = () => {
	handle_mouseup()
}
/**
 * @param {number} client_x
 * @param {number} client_y
 */
const start_drag = (client_x, client_y) => {
	const drag_element = /** @type {HTMLDivElement} */((drag_view.children[0] || container).cloneNode(true))/**/
	drag_element.style.position = "absolute"
	drag_element.style.top = container.offsetTop + "px"
	drag_element.style.left = container.offsetLeft + "px"
	setDragElement(client_x, client_y, drag_element)
	ondragstart?.(new DragEvent("dragstart"))
}
</script>

<svelte:window onmouseup={handle_mouseup}
	ontouchend={handle_touchend} />

<div bind:this={container}
		class={classs}
		style="touch-action:none;user-select:none;width:fit-content;"
		onmousedown={handle_mousedown}
		ontouchstart={handle_touchstart}>
	<slot></slot>
</div>
<div bind:this={drag_view} style="display:none;">
	<slot name="drag"></slot>
</div>