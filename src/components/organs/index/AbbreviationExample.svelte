<script lang="ts">
import H3 from "src/components/cells/texts/H3.svelte";
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
import TextLink from "src/components/cells/buttons/TextLink.svelte";
</script>


<H3>Abbreviation</H3>
<span>In addition to the basic syntax, InstantCSS supports several abbreviations for faster coding.</span><br />
<!-- InstantCSS는 인스턴트는 기본 문법 외에도 더 빠른 코딩을 위한 여러가지 약어들을 지원합니다. -->
<span>There's no problem with coding if you don't know the abbreviation, but using the abbreviation makes things a lot faster.</span><br />
<!-- 약어들을 몰라도 코딩을 하는데는 아무런 지장이 없지만 약어를 사용하면 작업속도가 훨씬 빨라지게 됩니다. -->
<TextLink href="/docu/abbreviation">abbreviation</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80%  m=auto">
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2}/> . . . . .<br />
                <TabSpace repeat={2}/>.background-color\=red{"{"}background<span class="bold">:</span>red{"}"}<br />
                <TabSpace repeat={2}/>.bgc\=blue{"{"}<span class="bold">background-color</span>:blue{"}"}<br />
                <TabSpace repeat={2}/>.pointer{"{"}<span class="bold">cursor:pointer</span>{"}"}<br />
                <TabSpace repeat={2}/>.bg\=blue{"{"}background:blue{"}"}<br />
                <TabSpace repeat={2}/>.w\=10{"{"}width:10<span class="bold">em</span>{"}"}<br />
                <TabSpace repeat={2}/>.fs\=calc\(10px\/2\){"{"}font-size:<span class="bold">calc(10px / 2)</span>{"}"}<br />
                <TabSpace repeat={2}/>.c\=\-\-primary{"{"}background:<span class="bold">var(--primary)</span>{"}"}<br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="div" attr={{class: "background=red"}}>"=" for ":"</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "bgc=red"}}>key abbreviation</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "pointer"}}>value abbreviation</Html><br />
            <TabSpace /><Html tag="div" attr={{class: "bg=blue w=10"}}>skip "em"</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "fs=calc(10px/2)"}}>skip calc space</Html><br />
            <TabSpace /><Html tag="div" attr={{class: "bg=--primary"}}>var func</Html><br />
        </Html>
    </CodePage>
</div>