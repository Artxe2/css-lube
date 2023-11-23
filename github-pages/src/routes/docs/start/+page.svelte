<script>
import styles from "js/styles.js"
import StartArticle from "organs/docs/start/StartArticle.svelte"
import { page } from "$app/stores"
import { H2 } from "lube-ui/typography"

/** @type {HTMLElement} */
let header

$effect(
	() => {
		page.subscribe(
			() => header?.parentElement?.scroll(0, 0)
		)
	}
)
</script>

<svelte:head>
	<title>Getting Started - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=.5">
	<div class="flex br=1.5 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=3"></div>
			<div class="fg=1 fsk=1">
				<div class="h=2"></div>
				<H2>Getting Started</H2>
				<span>CSS Lube is not constrained by frameworks</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<article class="m=2.5_1.5 @md@m=2.5">
	<StartArticle />
</article>
<button class="h=2 :hover/c=--primary-50;bold" onclick={() => header?.parentElement?.scroll(0, 0)}>Back to top</button>
<div class="h=2"></div>