<script lang="ts">
import { base } from "$app/paths"
import TypingText from "organs/@common/animations/TypingText.svelte"
import H1 from "cells/typography/H1.svelte"
import GithubStars from "organs/index/GithubStars.svelte"
import styles from "styles"

let innerHeight: number
</script>

<svelte:window bind:innerHeight />

<div class="relative flex column jc=center mh=100vh
		mh={innerHeight}px!">
	<div class="relative">
		<H1 classs="v=hidden"><f>Implement your web designs rapidly on the spot!</f></H1>
		<H1 classs="v=hidden"><f>It takes only 3 minutes to learn this.</f></H1>
		<div class="absolute w=100% t=0">
			<TypingText bgc="" dark_bgc="">
				<H1><f>Implement your web designs rapidly on the spot!</f></H1>
				<H1><f>It takes only 3 minutes to learn this.</f></H1>
			</TypingText>
		</div>
	</div>
	<div class="absolute b=2 w=100% flex jc=center">
		<div class="@md@flex">
			<a href="{base}/docs">
				<button class="{styles.button.contained} jc=center p=.2_1!">
					<code class="fs=1.25 bold">Get Started</code>
					<code class="block mt=-.5 mb=-.2">docs</code>
				</button>
			</a>
			<div class="w=2 h=1"></div>
			<a href="{base}/repl">
				<button class="{styles.button.contained} jc=center p=.2_1!">
					<code class="fs=1.25 bold">Try it now!</code>
					<code class="block mt=-.5 mb=-.2">repl</code>
				</button>
			</a>
		</div>
		<div class="w=2"></div>
		<div class="flex ai=center">
			<GithubStars />
		</div>
	</div>
</div>