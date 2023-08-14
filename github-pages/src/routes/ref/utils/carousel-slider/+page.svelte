<script lang="ts">
import CarouselSliderBasicExample from "organs/ref/utils/carousel-slider/CarouselSliderBasicExample.svelte"
import CarouselSliderCopyExample from "organs/ref/utils/carousel-slider/CarouselSliderCopyExample.svelte"
import CarouselSliderSnapExample from "organs/ref/utils/carousel-slider/CarouselSliderSnapExample.svelte"
import { H5 } from "lube-ui"
</script>

<svelte:head>
	<title>Carousel Slider | Reference</title>
</svelte:head>

<H5>Basic</H5>
<CarouselSliderBasicExample />
<div class="h=1"></div>
<H5>Copy Childs</H5>
<CarouselSliderCopyExample />
<div class="h=1"></div>
<H5>Snap Buttons</H5>
<CarouselSliderSnapExample />