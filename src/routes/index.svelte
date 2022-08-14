<script lang="ts">
import AppBar from "src/components/tissues/AppBar.svelte";
import PriorityExample from "src/components/organs/index/PriorityExample.svelte";
import BasicExample from "src/components/organs/index/BasicExample.svelte";
import SelectorExample from "src/components/organs/index/SelectorExample.svelte";
import MediaQueryExample from "src/components/organs/index/MediaQueryExample.svelte";
import AbbreviationExample from "src/components/organs/index/AbbreviationExample.svelte";
import HowToUse from "src/components/organs/index/HowToUse.svelte";
import DarkModeExample from "src/components/organs/index/DarkModeExample.svelte";
import MainPageTopicDiv from "src/layouts/index/MainPageTopicDiv.svelte";
import Root from "src/layouts/RootDiv.svelte";
import MainPromotion from "src/components/organs/index/MainPromotion.svelte";
import WhyUseInstantCss from "src/components/organs/index/WhatisInstantCss.svelte";
</script>

<AppBar />
<Root>
    <MainPageTopicDiv>
        <div class="h=10"></div>
        <MainPromotion />
        <div class="h=5"></div>
        <WhyUseInstantCss />
        <div class="h=5"></div>
        <HowToUse />
        <div class="h=5"></div>
    </MainPageTopicDiv>
    <MainPageTopicDiv>
        <BasicExample />
        <div class="h=5"></div>
        <SelectorExample />
        <div class="h=5"></div>
        <AbbreviationExample />
        <div class="h=5"></div>
        <PriorityExample />
        <div class="h=5"></div>
        <MediaQueryExample />
        <div class="h=5"></div>
        <DarkModeExample />
        <div class="h=5"></div>
    </MainPageTopicDiv>
</Root>