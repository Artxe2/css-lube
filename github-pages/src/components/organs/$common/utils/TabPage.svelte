<script>
export let classs = ""
export let index = 0

/** @type {HTMLDivElement} */
let container
</script>

<div bind:this={container}
		class=">:not(:nth-child({index + 1}))/none {classs}">
	<slot></slot>
</div>