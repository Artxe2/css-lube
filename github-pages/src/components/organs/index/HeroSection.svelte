<script>
import { base } from "$app/paths"
import TypingText from "organs/$common/animations/TypingText.svelte"
import { H1 } from "lube-ui/typography"
import GithubStars from "parts/$common/GithubStars.svelte"
import styles from "js/styles.js"
</script>

<div class="relative flex column br=18 o=hidden
		{styles.$common.background_grid}">
	<div class="relative w=100% ta=center
			{styles.$common.background_conic}">
		<div class="h=36"></div>
			<H1 classs="@!sm@fs=4em">CSS Lube</H1>
		<div class="absolute w=100% ts=0_0_6_#f80">
			<TypingText bgc="" dark_bgc="" classs="@!sm@fs=.75em">
				<span><f>Implement your web designs rapidly on the spot!</f></span><br>
				<span><f>It takes only 3 minutes to learn this.</f></span>
			</TypingText>
		</div>
		<div class="h=180"></div>
	</div>
	<div class="absolute b=36 w=100% flex g=18 jc=center
			@!sm@tf=scale(.75)">
		<div class="flex ai=center">
			<a class="p=6_12 br=12 jc=center
					{styles.index.hero_section.button}"
					href="{base}/docs">
				<code class="fs=1.25em bold">Get Started</code>
			</a>
		</div>
		<GithubStars />
	</div>
</div>