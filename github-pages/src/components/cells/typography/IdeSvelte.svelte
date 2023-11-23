<script>
import { base } from "$app/paths"

/** @type {{ name: string }} */
const { name } = $props()
</script>

<svg class="inline-block w=1 h=1.5 --fill-1=#ff3e00 --fill-2=#fff"><use xlink:href="{base}/icons.svg#svelte" /></svg> {@html name}.svelte