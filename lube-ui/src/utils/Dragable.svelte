<script lang="ts">
import { createEventDispatcher } from "svelte"

export let classs = ""
export let delay = 0
export let setDragElement: (clientX: number, clientY: number, drag: HTMLElement) => any

const dispatch = createEventDispatcher()
let container: HTMLDivElement
let dragView: HTMLDivElement
let timer: number

const handle_mousedown = (event: { clientX: number, clientY: number }) => {
	timer = setTimeout(() => {
		const drag = (dragView.firstChild || container).cloneNode(true) as HTMLDivElement
		drag.style.position = "absolute"
		drag.style.top = container.offsetTop + "px"
		drag.style.left = container.offsetLeft + "px"
		setDragElement(event.clientX, event.clientY, drag)
		dispatch("dragstart")
	}, delay)
}
const handle_touchstart = (event: TouchEvent) => {
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