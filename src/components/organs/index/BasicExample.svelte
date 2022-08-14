<script lang="ts">
import H2 from "src/components/cells/texts/H2.svelte";
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
import TextLink from "src/components/cells/buttons/TextLink.svelte";
</script>

<H2>Basic</H2>
<span>InstantCSS basically build the class name of the HTML element as a styles.</span><br />
<!-- InstantCSS는 기본적으로 HTML요소의 클래스 명을 그대로 스타일로 생성해줍니다. -->
<span>Class names can't contain spaces" ", so underscores"_" must be used instead of spaces" ".</span><br />
<!-- 클래스 명은 공백" "을 포함할 수 없으므로 공백" " 대신 언더바"_"를 사용해야 합니다. -->
<span>Using semicolon";" allows multiple styles to be applied to one class.</span><br />
<!-- 세미콜론";"을 사용하면 하나의 클래스에 여러 개의 스타일을 적용할 수 있습니다. -->
<TextLink href="/docu/basic">basic</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80%  m=auto">
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2} />. . . . . .<br />
                <TabSpace repeat={2} />.background-color\:red<span class="bold">{"{"}background-color:red{"}"}</span><br />
                <TabSpace repeat={2} />.border\:1px_solid<span class="bold">{"{"}border:1px solid{"}"}</span><br />
                <TabSpace repeat={2} />.color\:blue\;font-size\:8px\!important<span class="bold">{"{"}color:red;font-size:14px!important{"}"}</span><br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="span" attr={{class: "background-color:red"}}>raw</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "border:1px_solid"}}>use space</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "color:red;font-size:8px!important"}}>multi style</Html><br />
        </Html>
    </CodePage>
</div>