<script>
import styles from "js/styles.js"
import { CarouselSlider } from "lube-ui/utils"

let is_snap = false
/** @type {(direction: number) => void} */
let snap

let index = 0

const toggle_snap = () => {
	is_snap = !is_snap
	if (is_snap) snap(0)
}
</script>

<a href="https://github.com/Artxe2/css-lube/blob/main/github-pages/src/components/organs/ref/utils/carousel-slider/CarouselSliderExample.svelte" target="_blank"
		class="w=fit-content {styles.$common.link}">
	CarouselSliderExample.svelte
</a>
<div class="h=1"></div>
<CarouselSlider bind:snap
		bind:is_snap
		on:changeindex={e => index = e.detail}
		classs="h=6 op=.8 ::-webkit-scrollbar/none"
		duration={is_snap ? 200 : 800}>
	<div class="w=10% h=100% bg=red ta=center">red</div>
	<div class="w=20% h=100% bg=orange ta=center">orange</div>
	<div class="w=30% h=100% bg=yellow ta=center">yellow</div>
	<div class="w=40% h=100% bg=green ta=center">green</div>
	<div class="w=50% h=100% bg=blue ta=center">blue</div>
	<div class="w=60% h=100% bg=navy ta=center">navy</div>
	<div class="w=70% h=100% bg=purple ta=center">purple</div>
</CarouselSlider>
<div class="h=1"></div>
<span class="pr=3">Index: {index}</span>
<span>Snap: {is_snap}</span>
<div class="h=1"></div>
<div class="flex jc=space-between g=1
		>button/flex=auto">
	<button class="bg=--primary-50 w=6.25 h=2.5 br=.25 fs=.75
			:hover/bg=--havelock-blue"
			on:click={() => snap(-1)}>PREV</button>
	<button class="bg=--primary-50 w=6.25 h=2.5 br=.25 fs=.75
			:hover/bg=--havelock-blue"
			on:click={toggle_snap}>Toggle Snap</button>
	<button class="bg=--primary-50 w=6.25 h=2.5 br=.25 fs=.75
			:hover/bg=--havelock-blue"
			on:click={() => snap(1)}>NEXT</button>
</div>