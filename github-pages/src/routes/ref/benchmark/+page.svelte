<script>
import styles from "js/styles.js"
import BenchmarkChart from "organs/ref/benchmark/BenchmarkChart.svelte"
import { H2 } from "lube-ui/typography"

let header = /** @type {HTMLElement} */($state())/**/

$effect(
	() => header.parentElement?.scroll(0, 0)
)
</script>

<svelte:head>
	<title>Benchmark - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=12">
	<div class="flex br=36 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=48"></div>
			<div class="fg=1 fsk=1">
				<div class="h=48"></div>
				<H2>Benchmark</H2>
				<span>Measuring Speed with WebPageTest</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<article class="m=18_36">
	<div class="bg=--gray-80 p=24 br=24">
		<div class="br=.5 o=hidden">
			<div style="background:#000000;">
				<span style="color:#000000;filter:invert(1);">000000</span>
			</div>
			<div style="background:#001388;">
				<span style="color:#001388;filter:invert(1);">001388</span>
			</div>
			<div style="background:#002710;">
				<span style="color:#002710;filter:invert(1);">002710</span>
			</div>
			<div style="background:#003a98;">
				<span style="color:#003a98;filter:invert(1);">003a98</span>
			</div>
			<div style="background:#004e20;">
				<span style="color:#004e20;filter:invert(1);">004e20</span>
			</div>
			<div style="background:#0061a8;">
				<span style="color:#0061a8;filter:invert(1);">0061a8</span>
			</div>
		</div>
		<span class="c=--gray-10">...6712 rows</span>
	</div>
	<div class="h=48"></div>
	<H2 classs="ta=center">WebPageTest</H2>
	<BenchmarkChart />
	<div class="h=24"></div>
	<a href="https://www.webpagetest.org/" target="_blank"
			class="fs=1.5em {styles.$common.link}">
		WebPageTest
	</a><br>
	<a href="https://artxe2.github.io/test/inline-style.html" target="_blank"
			class="fs=1.5em {styles.$common.link}">
		inline-style.html
	</a><br>
	<a href="https://artxe2.github.io/test/atomic-css.html" target="_blank"
			class="fs=1.5em {styles.$common.link}">
		atomic-css.html
	</a><br>
	<a href="https://artxe2.github.io/test/css-lube.html" target="_blank"
			class="fs=1.5em {styles.$common.link}">
		css-lube.html
	</a><br>
	<a href="https://artxe2.github.io/test/tailwind-cdn.html" target="_blank"
			class="fs=1.5em {styles.$common.link}">
		tailwind-cdn.html
	</a>
</article>
<div class="flex jc=center">
	<button class="m=36 fs=1.5em
			:hover/c=--primary-50;bold" onclick={() => header?.parentElement?.scroll(0, 0)}>
		Back to top
	</button>
</div>