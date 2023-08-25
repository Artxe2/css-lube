<script lang="ts">
import LoadingCircle from "organs/$common/animations/LoadingCircle.svelte"

export let classs: string = ""
export let aspect_ratio: number
export let src: string

$: alt = src.slice(src.lastIndexOf("/") + 1)

let loaded: boolean
</script>

<div class="relative {classs}">
	{#if !loaded}
	<div class="flex jc=center w=100% p=calc({100 / aspect_ratio / 2}%-3em)_0">
		<LoadingCircle />
	</div>
	{/if}
	<img class="w=100%{loaded ? "" : " absolute t=0"}" src={src} alt={alt}
			on:load={() => loaded = true} />
</div>