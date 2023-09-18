<script>
import TabPage from "organs/$common/utils/TabPage.svelte"
import styles from "js/styles.js"
import BasicArticle from "organs/docs/syntax/BasicArticle.svelte"
import SelectorArticle from "organs/docs/syntax/SelectorArticle.svelte"
import MediaQueryArticle from "organs/docs/syntax/MediaQueryArticle.svelte"
import { onMount } from "svelte"
import { page } from "$app/stores"
import { H2 } from "lube-ui"

const tabs = [ "Basic", "Selector", "Media Query" ]
let index = 0
/** @type {HTMLElement} */
let header

onMount(() => {
	page.subscribe(() => header?.parentElement?.scroll(0, 0))
})
</script>

<svelte:head>
	<title>Syntax - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=.5">
	<div class="flex br=1.5 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=3"></div>
			<div class="fg=1 fsk=1">
				<div class="h=2"></div>
				<H2>Syntax</H2>
				<span>It takes only 3 minutes to learn this</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=.5">
	<div class="flex br=2.5
			h=3 @md@h=5
			bg=--gray-95 @dark@bg=--gray-20">
		{#each tabs as title, i}
		<button on:click={() => index = i}
				class="fg=1 br=2.5
				:hover/bg=--gray-70 @dark@:hover/bg=--gray-30
				{index == i && "bg=--primary-50!! c=--primary-90!!"}">
			<span class="bold @md@fs=1.5">{title}</span>
		</button>
		{/each}
	</div>
	<TabPage {index}>
		<article class="m=2_1 @md@m=2">
			<BasicArticle />
		</article>
		<article class="m=2_1 @md@m=2">
			<SelectorArticle />
		</article>
		<article class="m=2_1 @md@m=2">
			<MediaQueryArticle />
		</article>
	</TabPage>
</div>
<button class="h=2 :hover/c=--primary-50;bold" on:click={() => header?.parentElement?.scroll(0, 0)}>Back to top</button>
<div class="h=2"></div>