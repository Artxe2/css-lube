<script>
import styles from "js/styles.js"
import { page } from "$app/stores"
import { Autocomplete } from "lube-ui/inputs"
import { H2 } from "lube-ui/typography"

let header = /** @type {HTMLElement} */($state())/**/

$effect(
	() => {
		page.subscribe(
			() => header?.parentElement?.scroll(0, 0)
		)
	}
)
</script>

<svelte:head>
	<title>UI - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=12">
	<div class="flex br=36 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=48"></div>
			<div class="fg=1 fsk=1">
				<div class="h=48"></div>
				<H2>Lube UI</H2>
				<span>Lube UI may be released someday</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<article class="m=18_36">
	<Autocomplete label="auto complete" />
</article>
<div class="flex jc=center">
	<button class="mb=24 fs=1.5em
			:hover/c=--primary-50;bold" onclick={() => header?.parentElement?.scroll(0, 0)}>
		Back to top
	</button>
</div>