<script lang="ts">
import AppBar from "src/components/molecules/AppBar.svelte";
import PriorityExample from "src/components/molecules/PriorityExample.svelte";
import H1 from "src/components/atoms/texts/H1.svelte";
import SimpleButton from "src/components/atoms/buttons/Button.svelte";
import BasicExample from "src/components/molecules/BasicExample.svelte";
import SelectorExample from "src/components/molecules/SelectorExample.svelte";
import MediaExample from "src/components/molecules/MediaExample.svelte";
import AbbreviationExample from "src/components/molecules/AbbreviationExample.svelte";
import TypingText from "src/components/atoms/animations/TypingText.svelte";
import HowToUse from "src/components/molecules/HowToUse.svelte";
import CenterWidth80 from "src/components/atoms/layouts/CenterWidth80.svelte";
import DarkModeExample from "src/components/molecules/DarkModeExample.svelte";
import FloatingButton from "src/components/organisms/index/FloatingButton.svelte";
import { onMount } from "svelte";
import PaperAndToolsImgSection from "src/components/atoms/sections/PaperAndToolsImgSection.svelte";

let checkScroll = null
let _root

onMount(() => _root.addEventListener("scroll", e => checkScroll(e.target.scrollTop)))
// ::-webkit-scrollbar{width: 스크롤바 넓이px;}

// ::-webkit-scrollbar-track {background-color:트랙 배경 색상;}

// ::-webkit-scrollbar-thumb {background-color:바 색상;border-radius: 바 둥근 모서리 정도px;}

// ::-webkit-scrollbar-thumb:hover {background: 마우스를 올렸을 때 색상;}

// ::-webkit-scrollbar-button:start:decrement,::-webkit-scrollbar-button:end:increment {

// width:버튼 넓이px(보통 스크롤바 넓이랑 같이 맞춰줘요);height:버튼 높이px;background:버튼 색상;} 


</script>
<AppBar
    bind:checkScroll={checkScroll}
></AppBar>
<div bind:this={_root} class="flex column bg=white h=100vh overflowX=hidden ::-webkit-scrollbar/w=0.75 ::-webkit-scrollbar-track/bg=#3b599850 ::-webkit-scrollbar-thumb/bg=--primary;br=0.25">
    <PaperAndToolsImgSection>
        <div class="h=9"></div>
        <CenterWidth80>
            <H1>Build modern websites on the spot!</H1>
            <H1>Takes only 3 minutes to learn.</H1>
        </CenterWidth80>
        <div class="h=2"></div>
        <CenterWidth80>
            <TypingText
                array={[
                    "background-color:red",
                    "bg=blue;c=white",
                    "bg=green c=white :after/content='';w=2;h=0.75;bg=#ff0;inlineBlock"
                ]}
            />
        </CenterWidth80>
        <div class="h=0.5"></div>
        <CenterWidth80>
            <SimpleButton href="https://raw.githubusercontent.com/Artxe2/instant-css/main/instant-css-0.2.0.min.js"
            >Download</SimpleButton>
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
    <PaperAndToolsImgSection>
        <CenterWidth80>
            <HowToUse />
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
    <PaperAndToolsImgSection>
        <CenterWidth80>
            <BasicExample />
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
    <PaperAndToolsImgSection>
        <CenterWidth80>
            <AbbreviationExample />
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
    <PaperAndToolsImgSection>
        <CenterWidth80>
            <SelectorExample />
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
    <PaperAndToolsImgSection>
        <CenterWidth80>
            <PriorityExample />
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
    <PaperAndToolsImgSection>
        <CenterWidth80>
            <MediaExample />
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
    <PaperAndToolsImgSection>
        <CenterWidth80>
            <DarkModeExample />
        </CenterWidth80>
        <div class="h=10"></div>
    </PaperAndToolsImgSection>
</div>
<FloatingButton />