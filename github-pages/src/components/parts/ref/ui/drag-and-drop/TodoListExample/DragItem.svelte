<script>
/**
 * @type {{
 *   duration?: number
 *   index: number
 *   setDragElement: (clientX: number, clientY: number, drag: HTMLElement) => void
 *   type: "done" | "todo"
 * }}
 */
const {
	duration = 400,
	index,
	setDragElement,
	type
} = $props()

import { todo_list } from "parts/ref/ui/drag-and-drop/$.svelte.js"
import { Dragable } from "lube-ui/utils"

let offset_height = /** @type {number} */($state())/**/
const is_dragging = $derived(
	todo_list.$is_dragging
	&& todo_list.$start_index === index
	&& todo_list.$drag_type === type
)
const transform = $derived(
	todo_list.$is_dragging && todo_list.$drag_type === type
		? todo_list.$start_index == index
			? todo_list.$transform.reduce((p, c) => c ? p - c : p, 0)
			: todo_list.$transform[index]
		: 0
)

/**
 * @param {MouseEvent} event
 * @returns {void}
 */
const handle_click = event => {
	alert(
		/** @type {HTMLElement} */(event.target)/**/?.textContent
	)
}
const handle_dragenter = () => {
	todo_list.enter_drag(index, type)
}
const handle_dragstart = () => todo_list.start_drag(index, type)

$effect(
	() => {
		todo_list.heights[type][index] = offset_height
	}
)
</script>

<Dragable ondragstart={handle_dragstart}
		delay={300}
		{setDragElement}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div bind:offsetHeight={offset_height}
			onclick={handle_click}
			ondragenter={handle_dragenter}
			class="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY({transform}px)
			{todo_list.$is_dragging && `tt=${duration}ms`}
			{is_dragging && "opacity=.2 ol=.2_solid_#aaa"}
			{!todo_list.$items[type][index] && "none"}">
		{todo_list.$items[type][index]}
	</div>
	<div slot="drag" class="w=5 ta=center fs=2.5 cs=move c=#000 @dark@c=#fff">
		{todo_list.$items[type][index] + "!!"}
	</div>
</Dragable>