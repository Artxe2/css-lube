<script>
import { base } from "$app/paths";

import CodePage from "src/components/cells/boxs/CodePage.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";

let index = 0;

const next = () => {
    if (index++ === 3) {
        index = 0;
    }
    setTimeout(next, 1500);
}
setTimeout(next, 1500)
</script>

<span class="bold">Runtime Build Style</span>
<div class="fs=0.75">
    <span>In InstantCSS, all classes each match one style and are built dynamically at runtime.</span><br />
    <!-- InstantCSS에서 모든 클래스들은 각각 하나의 스타일과 매칭되며 런타임에 동적으로 빌드됩니다. -->
    <span>Most importantly, you don't have to waste time naming class or memorizing CSS library class names.</span>
    <!-- 가장 중요한 것은 클래스 명을 짓거나 CSS 라이브러리의 클래스 명을 외우기 위해 시간을 허비할 필요가 없다는 것입니다. -->
</div>
<div class="h=2"></div>
<CodePage>
    <div class="flex h=10 ai=center jc=center">
        <div class="flex w=fit-content bg=white c=black p=0.5 br=0.5 bs=0em_1em_1em_gray">
            <img class="w=4 h=4{index > 2 ? " tt=.5s tf=rotate(-15deg)" : ""}" src="{base}/favicon.png" alt="favicon" />
            <div>
                <h3 class="bold fs=2{index > 0 ? " fv=small-caps" : ""}">InstantCSS</h3>
                <div class="relative mt=-0.5 w=fit-content{index > 1 ? " _span/ff='Times_New_Roman',Times,serif" : ""}">
                    <span>easy & rapid & intuitive</span>
                </div>
            </div>
        </div>
    </div>
</CodePage>
<div class="h=1"></div>
<CodePage>
    <Html tag="head"><br />
        <TabSpace />. . . . . .<br />
        <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
        <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
            <TabSpace repeat={2} />. . . . . .<br />
            <span class="opacity={index < 1 ? "0" : "1 tt=1s"}"><TabSpace repeat={2} />.fv\=small-caps{"{"}font-variant:small-caps{"}"}<br /></span>
            <span class="opacity={index < 2 ? "0" : "1 tt=1s"}"><TabSpace repeat={2} />._span\/ff\=\'Times_New_Roman\'\,Times\,serif span{"{"}font-family:'Times New Roman',Times,serif{"}"}<br /></span>
            <span class="opacity={index < 3 ? "0" : "1 tt=1s"}"><TabSpace repeat={2} />.tf\=rotate\(-15deg\){"{"}transform:rotate(-15deg){"}"}<br /></span>
        <TabSpace /></Html><br />
    </Html><br />
    <Html tag="body"><br />
        <TabSpace /><Html tag="div" attr={{class: "flex h=10 ai=center jc=center"}}><br />
            <TabSpace repeat={2} /><Html tag="div" attr={{class: "flex w=fit-content bg=white c=black p=0.5 br=0.5 bs=0em_1em_1em_gray"}}><br />
                <TabSpace repeat={3} /><Html tag="img" attr={{class: "w=4 h=4" + (index > 2 ? " tf=rotate(-15deg)" : ""), src: base + "/favicon.png", alt: "favicon"}}></Html><span class="{index > 2 ? "none" : "hidden"}">&nbsp;tf=rotate(-15deg)</span><br />
                <TabSpace repeat={3} /><Html tag="div"><br />
                    <TabSpace repeat={4} /><Html tag="h3" attr={{class: "bold fs=2" + (index > 0 ? " fv=small-caps" : "")}}>InstantCSS</Html><br />
                    <TabSpace repeat={4} /><Html tag="div" attr={{class: "relative mt=-0.5 w=fit-content" + (index > 1 ? " _span/ff='Times_New_Roman',Times,serif" : "")}}><span class="{index > 1 ? "none" : "hidden"}">&nbsp;_span/ff='Times_New_Roman',Times,serif</span><br />
                        <TabSpace repeat={5} /><Html tag="span">easy & rapid & intuitive</Html><br />
                    <TabSpace repeat={4} /></Html><br />
                <TabSpace repeat={3} /></Html><br />
            <TabSpace repeat={2} /></Html><br />
        <TabSpace /></Html><br />
    </Html>
</CodePage>