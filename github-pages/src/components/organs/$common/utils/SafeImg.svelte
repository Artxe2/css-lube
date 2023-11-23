<script>
/**
 * @type {{
 *   aspect_ratio: number
 *   classs?: string
 *   src: string
 * }}
 */
const { classs = "", aspect_ratio, src } = $props()

import LoadingCircle from "organs/$common/animations/LoadingCircle.svelte"

const alt = src.slice(src.lastIndexOf("/") + 1)
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
			{loaded || "absolute t=0"}" {src} {alt}
			onload={() => loaded = true} />
</div>