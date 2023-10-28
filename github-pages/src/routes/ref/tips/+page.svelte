<script>
import { H2 } from "lube-ui/typography"
import ComponentRulesExample from "organs/ref/tips/ComponentRulesExample.svelte"
import ResponsiveWebDesignExample from "organs/ref/tips/ResponsiveWebDesignExample.svelte"
import { onMount } from "svelte"
import styles from "js/styles.js"

/** @type {HTMLElement} */
let header
onMount(() => header.parentElement?.scroll(0, 0))
</script>

<svelte:head>
	<title>Useful Tips - CSS Lube</title>
</svelte:head>

<header class="m=.5" bind:this={header}>
	<div class="flex br=1.5 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=3"></div>
			<div class="fg=1 fsk=1">
				<div class="h=2"></div>
				<H2>Useful Tips</H2>
				<span>It might not be very useful</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=.5">
	<article class="m=2_1 @md@m=2">
		<ComponentRulesExample />
		<ResponsiveWebDesignExample />
	</article>
</div>
<div class="h=2"></div>