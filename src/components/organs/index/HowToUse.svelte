<script lang="ts">
import H2 from "src/components/cells/texts/H2.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import TextLink from "src/components/cells/buttons/TextLink.svelte";
</script>

<H2>How to use</H2>
<span>Install InstantCSS and add inside your head tag. that's all</span><br />
<!-- InstantCSS를 설치하고 head 태그 안에 추가하세요. 이게 전부입니다. -->
<TextLink href="/docu/installation">installation</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80%  m=auto">
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2}/>. . . . . .<br />
                <TabSpace repeat={2}/><span class="bold">.bgc\=red{"{"}background-color:red{"}"}</span><br />
                <TabSpace repeat={2}/><span class="bold">.c\=white{"{"}color:white{"}"}</span><br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="div" attr={{class: "bgc=red c=white"}}>Hello</Html><br />
        </Html>
    </CodePage>
</div>