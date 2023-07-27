<script>
import H5 from "cells/typography/H5.svelte"
import SafeImg from "organs/@common/utils/SafeImg.svelte"
import styles from "styles"
import { Download } from "svelte-ts-lube"
</script>

<svelte:head>
	<title>Code Intellisense | CSS Lube</title>
</svelte:head>

<H5>Code Intellisense</H5>
<div class="h=1"></div>
<span>CSS Lube provides simple code intelligence in vscode extension</span><br>
<span>It's easy to see the shortand that the library provides.</span>
<div class="h=1"></div>
<div class="h=1"></div>
<Download classs="bold va=bottom {styles.button.resources}"
		url="https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/intellisense-css-lube-0.0.2.vsix">
	intellisense.vsix v0.0.2
</Download>
<span>vscode extension</span>
<div class="h=1"></div>
<SafeImg aspectRatio={16 / 9} src="https://github.com/Artxe2/css-lube/raw/main/github-pages/static/imgs/intellisense.webp" />