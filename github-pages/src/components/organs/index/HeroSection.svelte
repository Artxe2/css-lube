<script>
import { base } from "$app/paths"
import TypingText from "organs/$common/animations/TypingText.svelte"
import { H1 } from "lube-ui/typography"
import GithubStars from "parts/$common/GithubStars.svelte"
import styles from "js/styles.js"

/** @type {number} */
// eslint-disable-next-line lube/svelte-naming-convention
let innerHeight
</script>

<svelte:window bind:innerHeight />

<div class="relative flex column br=1.5 o=hidden
		{styles.$common.background_grid}">
	<div class="relative w=100% ta=center
			{styles.$common.background_conic}">
		<div class="h=2"></div>
			<H1>CSS Lube</H1>
		<div class="absolute w=100% ts=0_0_.5_#f80">
			<TypingText bgc="" dark_bgc="">
				<span><f>Implement your web designs rapidly on the spot!</f></span><br>
				<span><f>It takes only 3 minutes to learn this.</f></span>
			</TypingText>
		</div>
		<div class="h=17 @sm@h=12"></div>
	</div>
	<div class="absolute b=4 w=100% flex jc=center
			@!sm@column">
		<div class="flex ai=center
				@!lg@column">
			<a href="{base}/docs">
				<button class="w=10 h=3.5 br=1.75 jc=center
						{styles.index.hero_section.button}">
					<code class="fs=1.25 bold">Get Started</code>
					<code class="block mt=-.5 mb=-.2">docs</code>
				</button>
			</a>
		</div>
		<div class="w=2 h=1"></div>
		<div class="flex ai=center
				@!sm@jc=center">
			<GithubStars />
		</div>
	</div>
</div>