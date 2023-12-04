<script>
/**
 * @type {{
 *   todo_list: ReturnType<typeof import("../TodoListExample.svelte").create_todo_list>
 *   type: "done" | "todo"
 * }}
 */
const { todo_list, type } = $props()

const handle_dragenter = () => {
	todo_list.enter_drag(
		todo_list.$items[type].length,
		type
	)
}
</script>

<div class="us=none w=6 ol=.1_dashed ta=center fs=2 op=.75 cs=pointer"
		ondragenter={handle_dragenter}>
	Drag here!
</div>