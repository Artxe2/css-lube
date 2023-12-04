<script>
import TabPage from "organs/$common/utils/TabPage.svelte"
import styles from "js/styles.js"
import BasicArticle from "organs/docs/syntax/BasicArticle.svelte"
import SelectorArticle from "organs/docs/syntax/SelectorArticle.svelte"
import MediaQueryArticle from "organs/docs/syntax/MediaQueryArticle.svelte"
import { page } from "$app/stores"
import { H2 } from "lube-ui/typography"

const tabs = [ "Basic", "Selector", "Media Query" ]
let index = $state(0)
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
	<title>Syntax - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=12">
	<div class="flex br=36 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=48"></div>
			<div class="fg=1 fsk=1">
				<div class="h=48"></div>
				<H2>Syntax</H2>
				<span>It takes only 3 minutes to learn this</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=12">
	<div class="flex br=24 h=48
			bg=--gray-95 @dark@bg=--gray-20">
		{#each tabs as title, i}
		<button onclick={() => index = i}
				class="fg=1 br=24
				:hover/bg=--gray-70 @dark@:hover/bg=--gray-30
				{index == i && "bg=--primary-50!! c=--primary-90!!"}">
			<span class="bold">{title}</span>
		</button>
		{/each}
	</div>
	<TabPage {index}>
		<article class="m=48_24">
			<BasicArticle />
		</article>
		<article class="m=48_24">
			<SelectorArticle />
		</article>
		<article class="m=48_24">
			<MediaQueryArticle />
		</article>
	</TabPage>
</div>
<div class="flex jc=center">
	<button class="mb=24 fs=1.5em
			:hover/c=--primary-50;bold" onclick={() => header?.parentElement?.scroll(0, 0)}>
		Back to top
	</button>
</div>