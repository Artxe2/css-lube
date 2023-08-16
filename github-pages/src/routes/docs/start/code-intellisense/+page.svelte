<script lang="ts">
import { H5 } from "lube-ui"
import SafeImg from "organs/@common/utils/SafeImg.svelte"
import { Download } from "lube-ui"
</script>

<svelte:head>
	<title>Code Intellisense | CSS Lube</title>
</svelte:head>

<H5>Code Intellisense</H5>
<div class="h=1"></div>
<span>CSS Lube provides simple code intelligence in vscode extension</span><br>
<span>It's easy to see the shortand that the library provides.</span>
<div class="h=1"></div>
<Download classs="h=2.5 br=1.25 p=0_1 jc=center c=#fff
		bg=--primary-50 :hover/bg=--primary-40
		:hover/ts=0_0_.5
		:active/bg=--primary-50!"
		url="https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/intellisense-css-lube-0.0.2.vsix">
	<span class="fs=1.5">intellisense.vsix v0.0.2</span>
</Download>
<div class="h=1"></div>
<SafeImg aspectRatio={16 / 9} src="https://github.com/Artxe2/css-lube/raw/main/github-pages/static/imgs/intellisense.webp" />