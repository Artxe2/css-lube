<script lang="ts">
import { base } from "$app/paths";
export let href = ""
</script>
<a href="{base}{href}">
    <button class="c=#f40 @dark@c=#fd6 :hover/c=--primary @dark@:hover/c=--primary-l">
        <slot></slot>
    </button>
</a>