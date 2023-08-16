<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { H5 } from "lube-ui"
import JsMap from "cells/typography/JsMap.svelte"
</script>

<svelte:head>
	<title>Shorthand for Media Condition | CSS Lube</title>
</svelte:head>

<H5>Shorthand Medias</H5>
<div class="h=1"></div>
<span>Shorthand for Media Condition of CSS Lube.</span><br>
<div class="h=2"></div>
<CodePage>
	<JsMap
		name="shorthand_for_media_condition"
		json={`[
	["dark", "(prefers-color-scheme:dark)"],

	["sm", "(min-width:640px)"],
	["md", "(min-width:768px)"],
	["lg", "(min-width:1024px)"],
	["xl", "(min-width:1280px)"],
	["2xl", "(min-width:1536px)"],

	["!sm", "(max-width:639px)"],
	["!md", "(max-width:767px)"],
	["!lg", "(max-width:1023px)"],
	["!xl", "(max-width:1280px)"],
	["!2xl", "(max-width:1536px)"]
]`}/>
</CodePage>