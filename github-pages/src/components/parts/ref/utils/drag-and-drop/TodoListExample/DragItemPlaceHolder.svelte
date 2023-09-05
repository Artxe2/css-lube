<script>
import { drag$ } from "parts/ref/store.js"

/** @type {(index: number) => any} */
export let move_item

const handle_dragenter = () => {
	const i = $drag$?.index
	if (i === void 0) {
		return
	}
	move_item(0)
}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer"
		on:dragenter={handle_dragenter}>
	Empty
</div>