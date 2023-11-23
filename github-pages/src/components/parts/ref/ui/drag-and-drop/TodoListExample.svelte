<script>
import { todo_list } from "parts/ref/ui/drag-and-drop/$.svelte.js"
import DragItem from "parts/ref/ui/drag-and-drop/TodoListExample/DragItem.svelte"
import DragItemPlaceHolder from "parts/ref/ui/drag-and-drop/TodoListExample/DragItemPlaceHolder.svelte"
import { DragContainer } from "lube-ui/utils"
import styles from "js/styles.js"

let set_drag_element = /** @type {(clientX: number, clientY: number, drag: HTMLElement) => any} */($state())/**/
</script>

<a href="https://github.com/Artxe2/css-lube/blob/main/github-pages/src/components/parts/ref/ui/drag-and-drop/TodoListExample.svelte" target="_blank"
		class="w=fit-content {styles.$common.link}">
	TodoListExample.svelte
</a>
<div class="h=1"></div>
<DragContainer
		bind:setDragElement={set_drag_element}
		ondragend={todo_list.end_drag}>
	<div class="flex flex-wrap=wrap">
		<div class="flex column">
			<span class="fs=2 bold">To do</span>
			<div class="h=.5"></div>
			{#each todo_list.$items["todo"] as v, i}
			<DragItem setDragElement={set_drag_element}
					type="todo"
					index={i} />
			{/each}
			{#if todo_list.$items["todo"].length === 1}
			<DragItemPlaceHolder type="todo" />
			{/if}
		</div>
		<div class="w=5 h=5"></div>
		<div class="flex column">
			<span class="fs=2 bold">Done</span>
			<div class="h=.5"></div>
			{#each todo_list.$items["done"] as v, i}
			<DragItem setDragElement={set_drag_element}
					type="done"
					index={i} />
			{/each}
			{#if todo_list.$items["done"].length === 1}
			<DragItemPlaceHolder type="done" />
			{/if}
		</div>
	</div>
</DragContainer>