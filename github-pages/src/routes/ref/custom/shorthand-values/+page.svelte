<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { H5 } from "lube-ui"
import JsMap from "cells/typography/JsMap.svelte"
</script>

<svelte:head>
	<title>Shorthand for Values - CSS Lube</title>
</svelte:head>

<H5>Shorthand Values</H5>
<div class="h=1"></div>
<span>Shorthand for Values of CSS Lube.</span><br>
<div class="h=2"></div>
<CodePage>
	<JsMap
		name="shorthand_for_values" 
		json={`[
	["not-allowed", "cursor:not-allowed"],
	["pointer", "cursor:pointer"],
	["wait", "cursor:wait"],

	["block", "display:block"],
	["flex", "display:flex"],
	["grid", "display:grid"],
	["inline", "display:inline"],
	["inline-block", "display:inline-block"],
	["inline-flex", "display:inline-flex"],
	["none", "display:none"],

	["column", "flex-direction:column"],
	["column-reverse", "flex-direction:column-reverse"],
	["row", "flex-direction:row"],
	["row-reverse", "flex-direction:row-reverse"],

	["bold", "font-weight:bold"],

	["absolute", "position:absolute"],
	["fixed", "position:fixed"],
	["relative", "position:relative"],
	["static", "position:static"],
	["sticky", "position:sticky"]
]`} />
</CodePage>