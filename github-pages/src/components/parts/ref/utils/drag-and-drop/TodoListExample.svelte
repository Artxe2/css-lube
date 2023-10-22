<script>
import {
	done$,
	done_tf$,
	drag$,
	todo$,
	todo_tf$,
	transition$
} from "parts/ref/store.js"
import { onDestroy, onMount } from "svelte"
import DragItem from "parts/ref/utils/drag-and-drop/TodoListExample/DragItem.svelte"
import DragItemPlaceHolder from "parts/ref/utils/drag-and-drop/TodoListExample/DragItemPlaceHolder.svelte"
import { DragContainer } from "lube-ui"
import styles from "js/styles.js"

/** @type {number[]} */
const todo_heights = []

/** @type {number[]} */
const done_heights = []

/**
 * @type {(clientX: number, clientY: number, drag: HTMLElement) => any}
 */// eslint-disable-next-line lube/svelte-naming-convention
let setDragElement

const handle_dragend = () => {
	const from = $drag$?.index
	const type = $drag$?.type
	$drag$ = null
	from && type && re_ordering(from, type)
}

/** @param {number} index */
const transfer_list = index => {
	const from = $drag$?.index || 0
	const type = $drag$?.type
	const transforms = [...(type === "todo" ? $todo_tf$ : $done_tf$)]
	const heights = type === "todo" ? todo_heights : done_heights
	if (from < index) {
		if (transforms[index]) {
			for (let i = index; transforms[i]; i++) {
				transforms[from] -= heights[i]
				transforms[i] = 0
			}
		} else {
			for (let i = index; !transforms[i]; i--) {
				transforms[from] += heights[i]
				transforms[i] = -heights[from]
			}
		}
	} else if (transforms[index]) {
		for (let i = index; transforms[i]; i--) {
			transforms[from] += heights[i]
			transforms[i] = 0
		}
	} else {
		for (let i = index; !transforms[i]; i++) {
			transforms[from] -= heights[i]
			transforms[i] = heights[from]
		}
	}
	(type === "todo" ? todo_tf$ : done_tf$).set(transforms)
}

/** @param {number} index */
const move_item = index => {
	const from = $drag$?.index || 0
	const type = $drag$?.type
	if (type === "todo") {
		const before = [...$todo$]
		const after = [...$done$]
		after.splice(index, 0, before[from])
		before.splice(from, 1)
		$todo$ = before
		$done$ = after
		$todo_tf$ = new Array(before.length).fill(0)
		$done_tf$ = new Array(after.length).fill(0)
		$drag$ = {
			type: "done",
			index: index
		}
		done_heights.splice(index, 0, todo_heights[from])
		todo_heights.splice(from, 1)
	} else {
		const before = [...$done$]
		const after = [...$todo$]
		after.splice(index, 0, before[from])
		before.splice(from, 1)
		$done$ = before
		$todo$ = after
		$done_tf$ = new Array(before.length).fill(0)
		$todo_tf$ = new Array(after.length).fill(0)
		$drag$ = {
			type: "todo",
			index: index
		}
		todo_heights.splice(index, 0, done_heights[from])
		done_heights.splice(from, 1)
	}
}

/**
 * @param {number} from
 * @param {string} type
 */
const re_ordering = (from, type) => {
	const transforms = [...(type === "todo" ? $todo_tf$ : $done_tf$)]
	if (transforms[from] === 0) {
		return
	}
	const list = [...(type === "todo" ? $todo$ : $done$)]
	const temp = list[from]
	let i
	if (transforms[from] < 0) {
		for (i = from - 1; transforms[i]; i--) {
			list[i + 1] = list[i]
			transforms[i] = 0
		}
		list[i + 1] = temp
	} else {
		for (i = from + 1; transforms[i]; i++) {
			list[i - 1] = list[i]
			transforms[i] = 0
		}
		list[i - 1] = temp
	}
	transforms[from] = 0
	$transition$ = false
	;(type === "todo" ? todo$ : done$).set(list)
	;(type === "todo" ? todo_tf$ : done_tf$).set(transforms)
}
onMount(() => {
	$todo$ = [
		"Task A",
		"Task B",
		"Task C",
		"Task D",
		"Task E",
		"Task F",
		"Task G",
		"Task H",
		"Task I",
		"Task J",
		"Task K",
		"Task L",
		""
	]
	$todo_tf$ = new Array($todo$.length).fill(0)
	$done$ = [ "Task Z", "" ]
	$done_tf$ = new Array($done$.length).fill(0)
})
onDestroy(() => {
	$todo$ = []
	$todo_tf$ = []
	$done$ = []
	$done_tf$ = []
	$transition$ = false
	$drag$ = null
})
</script>

<a href="https://github.com/Artxe2/css-lube/blob/main/github-pages/src/components/parts/ref/utils/drag-and-drop/TodoListExample.svelte" target="_blank"
		class="w=fit-content {styles.$common.link}">
	TodoListExample.svelte
</a>
<div class="h=1"></div>
<DragContainer
		bind:setDragElement
		on:dragend={handle_dragend}>
	<div class="flex flex-wrap=wrap">
		<div class="flex column">
			<span class="fs=2 bold">To do</span>
			<div class="h=.5"></div>
			{#each $todo$ as v, i}
			<DragItem bind:clientHeight={todo_heights[i]}
					{setDragElement}
					list={$todo$}
					transforms={$todo_tf$}
					type="todo"
					index={i}
					{transfer_list}
					{move_item} />
			{/each}
			{#if $todo$.length === 1}
			<DragItemPlaceHolder {move_item} />
			{/if}
		</div>
		<div class="w=5 h=5"></div>
		<div class="flex column">
			<span class="fs=2 bold">Done</span>
			<div class="h=.5"></div>
			{#each $done$ as v, i}
			<DragItem bind:clientHeight={done_heights[i]}
					{setDragElement}
					list={$done$}
					transforms={$done_tf$}
					type="done"
					index={i}
					{transfer_list}
					{move_item} />
			{/each}
			{#if $done$.length === 1}
			<DragItemPlaceHolder {move_item} />
			{/if}
		</div>
	</div>
</DragContainer>