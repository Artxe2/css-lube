<script lang="ts">
import AppBar from "src/components/molecules/AppBar.svelte";
import PriorityExample from "src/components/molecules/PriorityExample.svelte";
import H1 from "src/components/atoms/texts/H1.svelte";
import SimpleButton from "src/components/atoms/buttons/SimpleButton.svelte";
import BasicExample from "src/components/molecules/BasicExample.svelte";
import SelectorExample from "src/components/molecules/SelectorExample.svelte";
import MediaExample from "src/components/molecules/MediaExample.svelte";
import AbbreviationExample from "src/components/molecules/AbbreviationExample.svelte";
import TypingText from "src/components/atoms/animation/TypingText.svelte";
import HowToUse from "src/components/molecules/HowToUse.svelte";
import CenterWidth80 from "src/components/atoms/layout/CenterWidth80.svelte";
import DarkModeExample from "src/components/molecules/DarkModeExample.svelte";
import FloatingButton from "src/components/molecules/FloatingButton.svelte";

</script>
<AppBar></AppBar>
<div id="root" class="flex column bg=--background @prefersColorScheme=dark@bg=--backgroundD h=calc(100vh-60px) overflow=scroll overflowX=hidden">
    <CenterWidth80>
        <H1>Build modern websites on the spot!</H1>
        <H1>Takes only 3 minutes to learn.</H1>
    </CenterWidth80>
    <div class="h=30"></div>
    <CenterWidth80>
        <TypingText
            array={[
                "background-color:red",
                "bg=blue;c=white",
                "bg=green c=white :after/content='';w=25;h=10;bg=#ff0;inlineBlock"
            ]}
        />
    </CenterWidth80>
    <div class="h=10"></div>
    <div class="textAlign=center">
        <SimpleButton href="https://raw.githubusercontent.com/Artxe2/instant-css/main/instant-css-0.2.0.min.js"
        >Download</SimpleButton>
    </div>
    <div class="h=10"></div>
    <CenterWidth80>
        <HowToUse />
    </CenterWidth80>
    <div class="h=50"></div>
    <CenterWidth80>
        <BasicExample />
    </CenterWidth80>
    <div class="h=70"></div>
    <CenterWidth80>
        <AbbreviationExample />
    </CenterWidth80>
    <div class="h=50"></div>
    <CenterWidth80>
        <SelectorExample />
    </CenterWidth80>
    <div class="h=50"></div>
    <CenterWidth80>
        <PriorityExample />
    </CenterWidth80>
    <div class="h=50"></div>
    <CenterWidth80>
        <MediaExample />
    </CenterWidth80>
    <div class="h=50"></div>
    <CenterWidth80>
        <DarkModeExample />
    </CenterWidth80>
    <div class="h=100"></div>
</div>
<FloatingButton />