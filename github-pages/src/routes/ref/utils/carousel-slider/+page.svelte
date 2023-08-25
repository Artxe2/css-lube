<script lang="ts">
import CarouselSliderBasicExample from "organs/ref/utils/carousel-slider/CarouselSliderBasicExample.svelte"
import CarouselSliderCopyExample from "organs/ref/utils/carousel-slider/CarouselSliderCopyExample.svelte"
import CarouselSliderSnapExample from "organs/ref/utils/carousel-slider/CarouselSliderSnapExample.svelte"
import { H2, H5 } from "lube-ui"
import styles from "ts/styles"
import { onMount as on_mount } from "svelte"

let header: HTMLElement
on_mount(() => header.parentElement?.scroll(0, 0))
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
		<H5>Basic</H5>
		<CarouselSliderBasicExample />
		<div class="h=1"></div>
		<H5>Copy Childs</H5>
		<CarouselSliderCopyExample />
		<div class="h=1"></div>
		<H5>Snap Buttons</H5>
		<CarouselSliderSnapExample />
	</article>
</div>
<div class="h=2"></div>