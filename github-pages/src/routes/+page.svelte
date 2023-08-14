<script lang="ts">
import HeroSection from "organs/index/HeroSection.svelte"
import WhatIsCssLube from "organs/index/WhatIsCssLube.svelte"
import AppBar from "organs/@common/AppBar.svelte"
import Drawer from "organs/@common/Drawer.svelte"
import styles from "ts/styles"
</script>

<svelte:head>
	<title>CSS Lube : Highly-optimized JIT CSS Generator</title>
</svelte:head>

<header class="h=fit-content m=.5">
	<HeroSection />
</header>
<article class="h=fit-content m=4 @!sm@m=1">
	<WhatIsCssLube />
</article>
<div class="h=1"></div>