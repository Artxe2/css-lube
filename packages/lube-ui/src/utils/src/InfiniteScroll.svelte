<script>
/**
 * @type {{
 *   children: import("svelte").Snippet
 *   classs?: string
 *   onlast: (event: CustomEvent<void>) => void
 *   ready: boolean
 * }}
 */
const { classs = "", onlast, ready } = $props()

let container = /** @type {HTMLDivElement} */($state())/**/
/** @type {IntersectionObserver} */
let observer

$effect(
	() => {
		observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					observer.unobserve(entries[0].target)
					onlast(new CustomEvent("last"))
				}
			},
			{ root: container, threshold: 0 }
		)
		if (ready && container.lastElementChild) {
			observer.observe(container.lastElementChild)
		}
	}
)
</script>

<div bind:this={container}
		class={classs}
		style="overflow:auto;">
	<slot></slot>
</div>