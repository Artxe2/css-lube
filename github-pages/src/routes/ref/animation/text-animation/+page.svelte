<script>
import MorphingTextExample from "organs/ref/animation/text-animation/MorphingTextExample.svelte"
import TypingTextExample from "organs/ref/animation/text-animation/TypingTextExample.svelte"
import { H2, H5 } from "lube-ui"
import styles from "js/styles.js"
import { onMount as on_mount } from "svelte"

/** @type {HTMLElement} */
let header
on_mount(() => header.parentElement?.scroll(0, 0))
</script>

<svelte:head>
	<title>Text Animation - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=.5">
	<div class="flex br=1.5 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=3"></div>
			<div class="fg=1 fsk=1">
				<div class="h=2"></div>
				<H2>Text Animation</H2>
				<span>Lube UI may be released someday</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=.5">
	<article class="m=2_1 @md@m=2">
		<H5>Morphing Text</H5>
		<MorphingTextExample />
		<div class="h=1"></div>
		<H5>Typing Text</H5>
		<TypingTextExample />
	</article>
</div>
<div class="h=2"></div>