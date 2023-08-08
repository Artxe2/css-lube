<script lang="ts">
import { client } from "fetch-lube"
import IGithub from "cells/svgs/i_github.svelte"

const fetch_github_info = client("https://api.github.com/repos/:user/:repo")
	.get()
	.query

const fetch_star = async () => {
	let response = await fetch_github_info({ user: "artxe2", repo: "css-lube" })
	if (response.status > 299) throw Error("Err:" + response.status)
	let json = await response.json()
	return json.stargazers_count
}
</script>

<div class="flex fs=1.25">
	<a class="bgi=linear-gradient(to_bottom,#fcfcfc_0,#eee_100%) bd=.1_solid_#d5d5d5 :hover/bdc=#ccc p=.25_.75_.25_.5 pr=.75! br=.25 bold
			:hover/bgi=linear-gradient(to_bottom,#eee,#ddd_100%)"
		href="https://github.com/artxe2/css-lube"
		target="_blank"
	>
		<IGithub classs="inline-block w=1.5 f=#333" />
		<span class="c=#333">css-lube</span>
	</a>
	<div class="w=.5"></div>
	<a class="relative bgc=#fafafa c=#333 :hover/c=#0366d6 block bd=.1_solid_#d4d4d4 p=.25_.75 pl=.5 br=.25 bold
			:before/absolute;block;ct='';t=.6;l=-.45;bd=.4_solid_transparent :before/bdl=0;bdr=.4_solid_#d4d4d4
			:after/absolute;block;ct='';t=.66;l=-.29;bd=.35_solid_transparent :after/bdl=0;bdr=.35_solid_#fafafa"
		href="https://github.com/artxe2/css-lube/stargazers"
		target="_blank"
	>
		{#await fetch_star()}
			{"..."}
		{:then star}
			{star}
		{:catch error}
			{error.message}
		{/await}
	</a>
</div>