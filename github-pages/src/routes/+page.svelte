<script>
import HeroSection from "organs/index/HeroSection.svelte"
import WhatIsCssLube from "organs/index/WhatIsCssLube.svelte"
import WhatsTheDifference from "organs/index/WhatsTheDifference.svelte"
import { onMount as on_mount } from "svelte"

/** @type {HTMLElement} */
let header
on_mount(
	() => header.parentElement?.scroll(0, 0)
)
</script>

<svelte:head>
	<title>CSS Lube - Highly-optimized CSS Interpreter</title>
</svelte:head>

<header bind:this={header} class="h=fit-content m=.5">
	<HeroSection />
</header>
<div class="h=2"></div>
<article class="h=fit-content
		m=0_1 @sm@m=0_2">
	<WhatIsCssLube />
	<div class="h=1"></div>
	<WhatsTheDifference />
</article>
<div class="h=4"></div>