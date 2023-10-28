<script>
import { contents$ } from "parts/ref/store.js"
import LoadingCircle from "organs/$common/animations/LoadingCircle.svelte"
import styles from "js/styles.js"
import { onDestroy, onMount } from "svelte"
import { H2 } from "lube-ui/typography"
import { InfiniteScroll } from "lube-ui/utils"
import { base } from "$app/paths"

let loading = 1 // 0: in progress, 1: none, 2: error
/**
 * @param {number} i
 * @param {number} n
 */
const lorem_api = (i, n) =>
	new Promise((resolve, reject) =>
		setTimeout(() => {
			const r = Math.random()
			if (i && r < 0.3) {
				reject(`error: ${r} < 0.3`)
			} else {
				const contents = []
				while (n-- > 0) {
					contents.push({
						title: "title " + ++i,
						content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					})
				}
				resolve(contents)
			}
		}, i ? 600 : 0)
	)
const load_contents = () => {
	if (loading) {
		loading = 0
		lorem_api($contents$.length, 5)
			.then(value => {
				$contents$ = $contents$.concat(value)
				loading = 1
			})
			.catch(() => loading = 2)
	}
}
onMount(() => lorem_api(0, 10).then(value => $contents$ = value))
onDestroy(() => $contents$ = [])
</script>

<a href="https://github.com/Artxe2/css-lube/blob/main/github-pages/src/components/parts/ref/utils/infinite-scroll/InfiniteScrollExample.svelte" target="_blank"
		class="w=fit-content {styles.$common.link}">
	InfiniteScrollExample.svelte
</a>
<div class="h=1"></div>
<InfiniteScroll classs="bd=1px_solid_black xh=15 p=1 {styles.scrollbar.primary}"
		onlast={load_contents}
		ready={loading === 1}>
	{#each $contents$ as c}
		<div>
			<H2>{c.title}</H2>
			<span>{c.content}</span>
		</div>
	{/each}
	{#if !loading}
		<div class="flex h=6.5 jc=center">
			<LoadingCircle />
		</div>
	{:else if loading === 2}
		<div class="relative flex h=6.5 jc=center ai=center">
			<div class="w=6 absolute">
				<svg class="f=#88888888!">
					<use xlink:href="{base}/icons.svg#refresh" />
				</svg>
			</div>
			<button class="absolute fs=1.5 bold
					ts=0_0_.5_#fff @dark@ts=0_0_.5_#000" on:click={load_contents}>
				server error
			</button>
		</div>
	{/if}
</InfiniteScroll>