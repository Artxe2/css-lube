<script lang="ts">
import styles from "ts/styles"
import BenchmarkChart from "organs/ref/benchmark/BenchmarkChart.svelte"
</script>

<svelte:head>
	<title>CSS Lube - Benchmark</title>
</svelte:head>

<div class="bg=--gray-80 p=1 br=1.5">
	<a href="https://pagespeed.web.dev" target="_blank"
			class="fs=2 {styles["@common"].link}">
		PageSpeed Insights
	</a>
	<div class="h=.5"></div>
	<div class="br=.5 o=hidden">
		<div style="background:#000000;">
			<span style="color:#000000;filter:invert(1);">000000</span>
		</div>
		<div style="background:#000bb8;">
			<span style="color:#000bb8;filter:invert(1);">000bb8</span>
		</div>
		<div style="background:#001770;">
			<span style="color:#001770;filter:invert(1);">001770</span>
		</div>
		<div style="background:#002328;">
			<span style="color:#002328;filter:invert(1);">002328</span>
		</div>
		<div style="background:#002ee0;">
			<span style="color:#002ee0;filter:invert(1);">002ee0</span>
		</div>
		<div style="background:#003a98;">
			<span style="color:#003a98;filter:invert(1);">003a98</span>
		</div>
	</div>
	<span class="c=--gray-10">...5593 rows</span>
</div>
<div class="h=2"></div>
<BenchmarkChart />
<div class="h=1"></div>
<a href="https://artxe2.github.io/test/inline-style.html" target="_blank"
		class="fs=1.5 {styles["@common"].link}">
	inline-style.html
</a><br>
<a href="https://artxe2.github.io/test/atomic-css.html" target="_blank"
		class="fs=1.5 {styles["@common"].link}">
	atomic-css.html
</a><br>
<a href="https://artxe2.github.io/test/css-lube.html" target="_blank"
		class="fs=1.5 {styles["@common"].link}">
	css-lube.html
</a><br>
<a href="https://artxe2.github.io/test/tailwind-jit.html" target="_blank"
		class="fs=1.5 {styles["@common"].link}">
	tailwind-jit.html
</a>