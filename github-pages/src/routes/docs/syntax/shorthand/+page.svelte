<script lang="ts">
import { base } from "$app/paths"
import { H5 } from "lube-ui"
import ShorthandExample from "organs/docs/shorthand/ShorthandExample.svelte"
import styles from "ts/styles"
</script>

<svelte:head>
	<title>Shorthand | CSS Lube</title>
</svelte:head>

<H5>Shorthand</H5>
<div class="h=1"></div>
<a href="{base}/docs/custom/shorthand-keys">
	<button class={styles.button.link}>shorthand keys</button>
</a><br>
<a href="{base}/docs/custom/shorthand-values">
	<button class={styles.button.link}>shorthand values</button>
</a><br>
<a href="{base}/docs/custom/shorthand-medias">
	<button class={styles.button.link}>shorthand medias</button>
</a>
<div class="h=1"></div>
<ShorthandExample />