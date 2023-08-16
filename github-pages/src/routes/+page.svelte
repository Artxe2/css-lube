<script lang="ts">
import HeroSection from "organs/index/HeroSection.svelte"
import WhatIsCssLube from "organs/index/WhatIsCssLube.svelte"
</script>

<svelte:head>
	<title>CSS Lube : Highly-optimized JIT CSS Generator</title>
</svelte:head>

<header class="h=fit-content m=.5">
	<HeroSection />
</header>
<div class="h=2"></div>
<article class="h=fit-content m=0_4 @!sm@m=1">
	<WhatIsCssLube />
</article>
<div class="h=4"></div>