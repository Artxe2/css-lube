<script lang="ts">
import { afterNavigate } from "$app/navigation"
import { naviOpen$ } from "parts/@common/store"
import styles from "styles"
import { contentScrollStack$ } from "parts/@common/store"

let container: HTMLDivElement

const handleScroll = () => {
	const index = window.history.state["sveltekit:index"]
	$contentScrollStack$[index] = container.scrollTop
}
afterNavigate(() => {
	const index = window.history.state["sveltekit:index"]
	container.scrollTop = $contentScrollStack$[index]
})
</script>

<div bind:this={container}
		class="h=100% oy=auto
		@max-width=767px@tt=transform_.3s
		{$naviOpen$ ? "tf=translateX(20em)" : ""}
		{styles.scrollbar.primary}"
		on:scroll={handleScroll}>
	<div class="w=80% h=100% m=auto">
		<div class="h=2"></div>
		<slot></slot>
		<div class="h=2"></div>
	</div>
</div>