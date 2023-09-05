<script>
import { H2 } from "lube-ui"
import TodoListExample from "parts/ref/utils/drag-and-drop/TodoListExample.svelte"
import { onMount as on_mount } from "svelte"
import styles from "js/styles.js"

/** @type {HTMLElement} */
let header
on_mount(
	() => header.parentElement?.scroll(0, 0)
)
</script>

<svelte:head>
	<title>Drag and Drop - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=.5">
	<div class="flex br=1.5 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=3"></div>
			<div class="fg=1 fsk=1">
				<div class="h=2"></div>
				<H2>Drag and Drop</H2>
				<span>Lube UI may be released someday</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=.5">
	<article class="m=2_1 @md@m=2">
		<TodoListExample />
	</article>
</div>
<div class="h=2"></div>