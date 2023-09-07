<script>
import { afterUpdate as after_update, onMount as on_mount } from "svelte"

export let classs = ""

/** @type {boolean} */
export let ready

/** @type {Function} */
export let onlast

/** @type {HTMLDivElement} */
let container

/** @type {IntersectionObserver} */
let observer

on_mount(() => {
	observer = new IntersectionObserver(
		entries => {
			if (entries[0].isIntersecting) {
				observer.unobserve(entries[0].target)
				onlast()
			}
		},
		{
			root: container,
			threshold: 0
		}
	)
})
after_update(() => {
	if (ready && container.lastElementChild) {
		observer.observe(container.lastElementChild)
	}
})
</script>

<div bind:this={container}
		class={classs}
		style="overflow:auto;">
	<slot></slot>
</div>