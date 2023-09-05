<script>
import { base } from "$app/paths"
import { github_star$ } from "parts/$common/store.js"
</script>

<div class="flex fs=1.25">
	<a class="bgi=linear-gradient(to_bottom,#fcfcfc_0,#eee_100%) bd=.1_solid_#d5d5d5 :hover/bdc=#ccc p=.25_.75_.25_.5 pr=.75! br=.25 bold
			:hover/bgi=linear-gradient(to_bottom,#eee,#ddd_100%)"
		href="https://github.com/artxe2/css-lube"
		target="_blank"
	>
		<svg class="inline-block w=1.5 h=1.5 f=#333!">
			<use xlink:href="{base}/icons.svg#github" />
		</svg>
		<span class="c=#333">css-lube</span>
	</a>
	<div class="w=.5"></div>
	<div class="relative">
		<a class="absolute wb=keep-all bgc=#fafafa c=#333 :hover/c=#0366d6 block bd=.1_solid_#d4d4d4 p=.25_.75 br=.25 bold
				:before/absolute;block;ct='';t=.6;l=-.45;bd=.4_solid_transparent :before/bdl=0;bdr=.4_solid_#d4d4d4
				:after/absolute;block;ct='';t=.66;l=-.29;bd=.35_solid_transparent :after/bdl=0;bdr=.35_solid_#fafafa"
			href="https://github.com/artxe2/css-lube/stargazers"
			target="_blank"
		>
			{#await $github_star$}
				...
			{:then star} 
				{star}
			{:catch err}
				{err}
			{/await}
		</a>
	</div>
</div>