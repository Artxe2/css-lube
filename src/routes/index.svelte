<script lang="ts">
import AppBar from "src/components/molecules/AppBar.svelte";
import ImportantExample from "src/components/molecules/example/ImportantExample.svelte";
import H1 from "src/components/atoms/texts/H1.svelte";
import SimpleButton from "src/components/atoms/buttons/SimpleButton.svelte";
import BasicExample from "src/components/molecules/example/BasicExample.svelte";
import SelectorExample from "src/components/molecules/example/SelectorExample.svelte";
import MediaExample from "src/components/molecules/example/MediaExample.svelte";
import AriasExample from "src/components/molecules/example/AriasExample.svelte";
</script>
<div id="root" class="flex column bg=var(--background) h=100%">
    <AppBar></AppBar>
    <div class="text-align=center">
        <H1>Build modern websites on the spot!</H1>
        <H1>Takes only 3 minutes to learn.</H1>
    </div>
    <div class="h=50"></div>
    <div class="text-align=center">
        <SimpleButton href="./test">Test Page</SimpleButton>
        <div class="inline-block w=50"></div>
        <SimpleButton href="https://raw.githubusercontent.com/Artxe2/instant-css/main/instant-css-0.2.0.min.js"
        >Download</SimpleButton>
    </div>
    <div class="h=50"></div>
    <BasicExample />
    <AriasExample />
    <SelectorExample />
    <ImportantExample />
    <MediaExample />
</div>