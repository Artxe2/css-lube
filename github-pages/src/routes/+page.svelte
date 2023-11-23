<script>
import HeroSection from "organs/index/HeroSection.svelte"
import WhatIsCssLube from "organs/index/WhatIsCssLube.svelte"
import WhatsTheDifference from "organs/index/WhatsTheDifference.svelte"

/** @type {HTMLElement} */
let header

$effect(
	() => header.parentElement?.scroll(0, 0)
)
</script>

<svelte:head>
	<title>CSS Lube - Highly-optimized CSS Interpreter</title>
</svelte:head>

<header bind:this={header} class="h=fit-content m=.5">
	<HeroSection />
</header>
<article class="flex column h=fit-content p=2_0_4 g=1
		m=0_1 @sm@m=0_2">
	<WhatIsCssLube />
	<WhatsTheDifference />
</article>