<script lang="ts">
import H3 from "src/components/cells/texts/H3.svelte";
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
import TextLink from "src/components/cells/buttons/TextLink.svelte";
</script>

<H3>Selector & Pseudo Class</H3>
<span>Using slash"/" allows selector to be applied to a class.</span><br />
<!-- 슬래시"/"를 사용하면 클래스에 선택자를 적용할 수 있습니다. -->
<span>Regardless of the type of selector, there is no singularity except that the selector written before the slash"/" is appended to the class name.</span><br />
<!-- 선택자의 종류에 상관없이 슬래시"/" 앞에 작성한 선택자가 클래스명 뒤에 붙는 것 외의 특이점은 없습니다. -->
<TextLink href="/docu/selector">selector</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80%  m=auto">
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2}/>. . . . . .<br />
                <TabSpace repeat={2}/>._span\.child\/bg\=red<span class="bold">{" span.child"}</span>{"{background-color:red}"}<br />
                <TabSpace repeat={2}/>.\:active\/bg\=blue\;c\=red<span class="bold">{":active"}</span>{"{background-color:blue;color:red}"}<br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="div" attr={{class: "_span.target/bgc=red"}}><br />
                <TabSpace repeat={2}/><Html tag="span">child</Html><br />
                <TabSpace repeat={2}/><Html tag="span" attr={{class: "target"}}>target</Html><br />
                <TabSpace repeat={2}/><Html tag="span">child</Html><br />
                <TabSpace /></Html><br />
            <TabSpace /><Html tag="span" attr={{class: ":active/bgc=blue;c=red"}}>pseudo class</Html><br />
        </Html>
    </CodePage>
</div>