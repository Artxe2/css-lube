<script>
import LoadingCircle from "organs/$common/animations/LoadingCircle.svelte"

export let classs = ""

/** @type {number} */
export let aspect_ratio

/** @type {string} */
export let src

$: alt = src.slice(src.lastIndexOf("/") + 1)

/** @type {boolean} */
let loaded
</script>

<div class="relative {classs}">
	{#if !loaded}
	<div class="flex jc=center w=100% p=calc({100 / aspect_ratio / 2}%-3em)_0">
		<LoadingCircle />
	</div>
	{/if}
	<img class="w=100%
			{loaded || "absolute t=0"}" src={src} alt={alt}
			on:load={() => loaded = true} />
</div>