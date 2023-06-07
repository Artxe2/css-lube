<script>
import AppBar from "parts/@common/AppBar.svelte"
import HeroSection from "organs/index/HeroSection.svelte"
import WhatIsCssLubricant from "organs/index/WhatIsCssLubricant.svelte"
import styles from "styles";
</script>

<svelte:head>
	<title>CSS Lubricant - Near-Atomic CSS Library</title>
</svelte:head>

<AppBar />
<div class="bgc=--azure-66 ta=center {styles.background.grid}">
	<div class="bg=conic-gradient(from_45deg_at_67%_67%,--primary-88,--primary-22)
			@dark@bg=conic-gradient(from_-45deg_at_33%_67%,--firefly,#000000cc)">
		<div class="w=80% m=auto">
			<HeroSection />
		</div>
	</div>
</div>
<div class="bgc=#000000cc ta=center {styles.background.grid}">
	<div class="bg=#ffffff77 @dark@bg=#000000cc">
		<div class="w=80% m=auto ts=0_0_.5_#fff @dark@ts=0_0_.5_#000">
			<div class="h=3"></div>
			<WhatIsCssLubricant />
			<div class="h=10"></div>
		</div>
	</div>
</div>