<script>
import { base } from "$app/paths"
import { github_star } from "parts/$common/$.svelte.js"
</script>

<div class="flex">
	<a class="bgi=linear-gradient(to_bottom,#fcfcfc_0,#eee_100%) bd=2_solid_#d5d5d5 :hover/bdc=#ccc p=6_18_6_12 pr=18! br=6 bold flex ai=center g=12
			:hover/bgi=linear-gradient(to_bottom,#eee,#ddd_100%)"
			href="https://github.com/artxe2/css-lube"
			target="_blank">
		<svg class="inline-block w=36 h=36 f=#333!">
			<use xlink:href="{base}/icons.svg#github" />
		</svg>
		<span class="c=#333 fs=1.5em">css-lube</span>
	</a>
	<div class="w=12"></div>
	<div class="relative">
		<a class=" wb=keep-all bgc=#fafafa c=#333 :hover/c=#0366d6 block bd=2_solid_#d4d4d4 p=6_18 br=6 bold fs=1.5em
				:before/absolute;block;ct='';t=15;l=-9;bd=11_solid_transparent :before/bdl=0;bdr=10_solid_#d4d4d4
				:after/absolute;block;ct='';t=18;l=-6;bd=8_solid_transparent :after/bdl=0;bdr=8_solid_#fafafa"
			href="https://github.com/artxe2/css-lube/stargazers"
			target="_blank"
		>
			{#await github_star.$}
				...
			{:then star}
				{star}
			{:catch err}
				{err}
			{/await}
		</a>
	</div>
</div>