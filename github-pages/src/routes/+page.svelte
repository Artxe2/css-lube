<script>
import styles from "js/styles.js"
import { H2 } from "lube-ui/typography"
import HeroSection from "organs/index/HeroSection.svelte"

let header = /** @type {HTMLElement} */($state())/**/

$effect(
	() => header.parentElement?.scroll(0, 0)
)
</script>

<svelte:head>
	<title>CSS Lube - Highly-optimized CSS Interpreter</title>
</svelte:head>

<header bind:this={header} class="h=fit-content m=6">
	<HeroSection />
</header>
<article class="flex column h=fit-content p=24_0_48 g=12
		m=0_12 @sm@m=0_24">
	<div class={styles.$common.contents_div}>
		<H2>What is CSS Lube?</H2>
		<span>CSS Lube is Highly-optimized CSS Interpreter.</span>
		<span>It is makes improved your developer experience by implement any designs directly in markup and immediately reflect feedback.</span>
		<span>In addition, CSS Lube parses HTML documents at runtime and render styles, so it can completely replace style files that become bloated whenever updated with a 6,002 byte(2,562 byte on gzip) js file.</span>
	</div>
</article>