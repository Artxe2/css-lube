<script>
import CarouselSliderExample from "organs/ref/ui/carousel-slider/CarouselSliderExample.svelte"
import { H2 } from "lube-ui/typography"
import styles from "js/styles.js"

let header = /** @type {HTMLElement} */($state())/**/

$effect(
	() => header.parentElement?.scroll(0, 0)
)
</script>

<svelte:head>
	<title>Carousel Slider - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=.5">
	<div class="flex br=1.5 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=3"></div>
			<div class="fg=1 fsk=1">
				<div class="h=2"></div>
				<H2>Carousel Slider</H2>
				<span>Lube UI may be released someday</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=.5">
	<article class="m=2_1 @md@m=2">
		<CarouselSliderExample />
	</article>
</div>
<div class="h=2"></div>