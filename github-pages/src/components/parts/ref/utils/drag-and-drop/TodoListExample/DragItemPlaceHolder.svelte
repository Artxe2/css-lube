<script lang="ts">
import { drag$ } from "parts/ref/store"

export let move_item: (index: number) => any

const handle_dragenter = () => {
	const i = $drag$?.index
	if (i === undefined) {
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