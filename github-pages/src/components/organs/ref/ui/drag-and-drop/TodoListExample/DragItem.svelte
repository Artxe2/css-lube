<script>
/**
 * @type {{
 *   duration?: number
 *   index: number
 *   set_drag_element: (clientX: number, clientY: number, drag: HTMLElement) => void
 *   todo_list: ReturnType<typeof import("../TodoListExample.svelte").create_todo_list>
 *   type: "done" | "todo"
 * }}
 */
const {
	duration = 400,
	index,
	set_drag_element,
	todo_list,
	type
} = $props()

import { Dragable } from "lube-ui/utils"

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
</script>

<Dragable delay={300}
		ondragstart={handle_dragstart}
		setDragElement={set_drag_element}>
	<div bind:offsetHeight={todo_list.heights[type][index]}
			class="br=.5 w=6 ol=.1_solid ta=center fs=2 pointer tf=translateY({transform}px)
			{todo_list.$is_dragging && todo_list.$drag_type == type && `tt=${duration}ms`}
			{is_dragging && "op=.2 ol=.2_solid_#aaa"}
			{!todo_list.$items[type][index] && "none"}"
			onclick={handle_click}
			ondragenter={handle_dragenter}>
		{todo_list.$items[type][index]}
	</div>
	<div slot="drag" class="w=5 ta=center fs=2.5 cs=move c=#000 @dark@c=#fff">
		{todo_list.$items[type][index] + "!!"}
	</div>
</Dragable>