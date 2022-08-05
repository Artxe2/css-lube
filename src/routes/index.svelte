<script lang="ts">
import AppBar from "src/components/molecules/AppBar.svelte";
import ImportantExample from "src/components/molecules/example/ImportantExample.svelte";
import H1 from "src/components/atoms/texts/H1.svelte";
import SimpleButton from "src/components/atoms/buttons/SimpleButton.svelte";
import BasicExample from "src/components/molecules/example/BasicExample.svelte";
import SelectorExample from "src/components/molecules/example/SelectorExample.svelte";
import MediaExample from "src/components/molecules/example/MediaExample.svelte";
import AbbreviationExample from "src/components/molecules/example/AbbreviationExample.svelte";
import TypingText from "src/components/atoms/animation/TypingText.svelte";
import HowToUse from "src/components/molecules/example/HowToUse.svelte";
</script>
<div id="root" class="flex column bg=var(--background) min-height=100%">
    <AppBar></AppBar>
    <div class="text-align=center">
        <H1>Build modern websites on the spot!</H1>
        <H1>Takes only 3 minutes to learn.</H1>
    </div>
    <div class="h=30"></div>
    <TypingText
        array={[
            "background-color:red",
            "bg=blue;c=white",
            "bg=green c=white :after/content='';w=25;h=10;bg=#ff0;inlineBlock"
        ]}
    />
    <div class="text-align=center">
        <SimpleButton href="https://raw.githubusercontent.com/Artxe2/instant-css/main/instant-css-0.2.0.min.js"
        >Download</SimpleButton>
    </div>
    <div class="h=10"></div>
    <HowToUse />
    <div class="h=50"></div>
    <BasicExample />
    <div class="h=50"></div>
    <AbbreviationExample />
    <div class="h=50"></div>
    <SelectorExample />
    <div class="h=50"></div>
    <ImportantExample />
    <div class="h=50"></div>
    <MediaExample />
    <div class="h=100"></div>
</div>