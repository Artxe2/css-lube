<script lang="ts">
import H3 from "src/components/cells/texts/H3.svelte";
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TextLink from "src/components/cells/buttons/TextLink.svelte";
</script>

<H3>Media Query</H3>
<span>To apply a media query, you can write a condition between two at"@" in before the class name.</span><br />
<!-- 미디어쿼리를 적용하기 위해서는 클래스 명 앞 앳"@" 두 개 사이에 조건을 작성하면 됩니다. -->
<span>You can use the logical join function by using the exclamation mark"!" instead of not and the ampersand"&" instead of and.</span><br />
<!-- not 대신 느낌표"!"를 사용하고 and 대신 앰퍼샌드"&"를 사용하여 논리 결합 기능을 사용할 수 있습니다. -->
<span>Also, in media queries, you can shorten typing by using some abbreviations such as "md" or "dark" and range expressions using tilde"~".</span><br />
<!-- 또한 미디어 쿼리에서도 몇 가지 약어와 물결표"~"를 이용한 범위 표현을 이용해 타이핑을 단축시킬 수 있습니다. -->
<TextLink href="/docu/media-query">media-query</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80%  m=auto">
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2}/>. . . . . .<br />
                <TabSpace repeat={2}/>.c\=red{"{"}color:red{"}"}<br />
                <TabSpace repeat={2}/>.fs\=16px{"{"}font-size:16px{"}"}<br />
                <TabSpace repeat={2}/>[class].fs\=16px\!{"{"}font-size:16px{"}"}<br />
                <TabSpace repeat={2}/>@media (max-width:767px){"{"}<br />
                <TabSpace repeat={3}/>.\@max-width\=767px\@fs\=12px{"{"}font-size:12px{"}"}<br />
                <TabSpace repeat={3}/>.\@max-width\=767px\@\:active\/fs\=12px:active{"{"}font-size:1.25em{"}"}<br />
                <TabSpace repeat={2}/>{"}"}<br />
                <TabSpace repeat={2}/>@media not screen and (min-width:640px) and (max-width:767px){"{"}<br />
                <TabSpace repeat={3}/>.\@\!screen\&min-width\=640px\&max-width\=767px\@fs\=10px{"{"}font-size:10px{"}"}<br />
                <TabSpace repeat={2}/>{"}"}<br />
                <TabSpace repeat={2}/>@media not screen and (min-width:640px) and (max-width:767px){"{"}<br />
                <TabSpace repeat={3}/>.\@width\=640\~767px\@fs\=10px{"{"}font-size:10px{"}"}<br />
                <TabSpace repeat={2}/>{"}"}<br />
                <TabSpace repeat={2}/>@media (min-width:768px){"{"}<br />
                <TabSpace repeat={3}/>.\@md\@fs\=12px{"{"}font-size:12px{"}"}<br />
                <TabSpace repeat={2}/>{"}"}<br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="span" attr={{class: "@max-width=767px@fs=12px"}}>default</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "@max-width=767px@:active/fs=1.25"}}>with selector</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "@!screen&min-width=640px&max-width=767px@fs=10px"}}>not, and</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "@width=640~767px@fs=10px"}}>range</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "@md@fs=12px"}}>abbreviation</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "c=red fs=16px @md@fs=12px"}}>if width >= 768: im 12px</Html><br />
            <TabSpace /><Html tag="span" attr={{class: "c=red fs=16px! @md@fs=12px"}}>im 16px</Html><br />
        </Html>
    </CodePage>
</div>