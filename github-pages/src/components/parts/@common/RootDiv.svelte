<script lang="ts">
import Style from "styles"
import { scroll$, rootScrollStack$ } from "parts/@common/store"
import { onDestroy } from "svelte"
import ModalBackground from "parts/@common/ModalBackground.svelte"
import { afterNavigate } from "$app/navigation"

let container: HTMLDivElement

const handleScroll = () => {
	$scroll$ = container.scrollTop
	const index = window.history.state["sveltekit:index"]
	$rootScrollStack$[index] = container.scrollTop
}
afterNavigate(() => {
	const index = window.history.state["sveltekit:index"]
	container.scrollTop = $rootScrollStack$[index]
})
onDestroy(() => {
	$scroll$ = 0
})
</script>

<div bind:this={container}
		class="h=100% ox=hidden
		{Style.scrollbar.primary}"
		on:scroll={handleScroll}>
	<ModalBackground />
	<slot></slot>
</div>