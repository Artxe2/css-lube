<script lang="ts">
import { H5 } from "lube-ui"
import MediaQueryShorthandExample from "organs/docs/syntax/media-query/MediaQueryShorthandExample.svelte"
import MediaQueryExample from "organs/docs/syntax/media-query/MediaQueryExample.svelte"
import MediaQueryMultiExample from "organs/docs/syntax/media-query/MediaQueryMultiExample.svelte"
</script>

<svelte:head>
	<title>Media Query | CSS Lube</title>
</svelte:head>

<H5>Media Query</H5>
<div class="h=1"></div>
<MediaQueryExample />
<div class="h=2"></div>
<MediaQueryMultiExample />
<div class="h=2"></div>
<MediaQueryShorthandExample />