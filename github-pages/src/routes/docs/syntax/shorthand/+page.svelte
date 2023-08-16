<script lang="ts">
import { base } from "$app/paths"
import { H5 } from "lube-ui"
import ShorthandExample from "organs/docs/syntax/shorthand/ShorthandExample.svelte"
import styles from "ts/styles"
</script>

<svelte:head>
	<title>Shorthand | CSS Lube</title>
</svelte:head>

<H5>Shorthand</H5>
<div class="h=1"></div>
<a href="{base}/ref/custom/shorthand-keys">
	<button class={styles["@common"].link}>shorthand keys</button>
</a><br>
<a href="{base}/ref/custom/shorthand-values">
	<button class={styles["@common"].link}>shorthand values</button>
</a><br>
<a href="{base}/ref/custom/shorthand-medias">
	<button class={styles["@common"].link}>shorthand medias</button>
</a>
<div class="h=1"></div>
<ShorthandExample />