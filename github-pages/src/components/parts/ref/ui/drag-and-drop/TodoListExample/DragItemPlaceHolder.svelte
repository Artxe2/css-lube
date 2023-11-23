<script>
/** @type {{ type: "done" | "todo" }} */
const { type } = $props()
import { todo_list } from "parts/ref/ui/drag-and-drop/$.svelte.js"

const handle_dragenter = () => {
	todo_list.enter_drag(0, type)
}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer"
		ondragenter={handle_dragenter}>
	Empty
</div>