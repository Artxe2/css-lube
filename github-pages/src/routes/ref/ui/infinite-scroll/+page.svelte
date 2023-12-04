<script>
import { H2 } from "lube-ui/typography"
import InfiniteScrollExample from "organs/ref/ui/infinite-scroll/InfiniteScrollExample.svelte"
import styles from "js/styles.js"

let header = /** @type {HTMLElement} */($state())/**/

$effect(
	() => header.parentElement?.scroll(0, 0)
)
</script>

<svelte:head>
	<title>Infinite Scroll - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=4">
	<div class="flex br=12 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=24"></div>
			<div class="fg=1 fsk=1">
				<div class="h=16"></div>
				<H2>Infinite Scroll</H2>
				<span>Lube UI may be released someday</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=4">
	<article class="m=16_8 @md@m=16">
		<InfiniteScrollExample />
	</article>
</div>
<div class="h=16"></div>