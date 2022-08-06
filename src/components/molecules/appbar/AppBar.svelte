<script lang="ts">
import SimpleButton from "src/components/atoms/buttons/SimpleButton.svelte";
import { onMount } from "svelte";

let setPrefersColorScheme
onMount(() => {
    setPrefersColorScheme = window["setPrefersColorScheme"]
})
</script>
<div class="relative bg=#ff000050 w=100% h=60">
    <div class="flex">
        <div class="flexGrow=1"></div>
        <SimpleButton onClick={() => setPrefersColorScheme("LIGHT")}>LIGHT</SimpleButton>
        <SimpleButton onClick={() => setPrefersColorScheme("DARK")}>DARK</SimpleButton>
        <SimpleButton onClick={() => setPrefersColorScheme(undefined)}>SYSTEM</SimpleButton>
    </div>
</div>