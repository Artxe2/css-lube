<script lang="ts">
import H3 from "src/components/cells/texts/H3.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import TextLink from "src/components/cells/buttons/TextLink.svelte";
</script>

<H3>Dark Mode</H3>
<span>InstantCSS dynamically builds stylesheets based on the "THEME" values in local storage.</span><br />
<!-- InstantCSS는 로컬스토리지의 "THEME" 값에 따라 동적으로 스타일시트를 작성합니다. -->
<span>You can easily apply a dark mode design to elements by using "@dark@" to apply dark mode as a media query and manipulating local storage.</span><br />
<!-- "@dark@"를 이용하여 다크모드를 미디어 쿼리로 적용하고 로컬 스토리지를 조작하면 요소에 손쉽게 다크모드 디자인을 적용할 수 있습니다. -->
<TextLink href="/docu/dark-mode">dark-mode</TextLink>
<div class="h=1"></div>
<div class="w=fit-content mw=50% xw=80%  m=auto">
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2}/>. . . . . .<br />
                <TabSpace repeat={2}/>.c\=red{"{"}color:red{"}"}<br />
                <TabSpace repeat={2}/>/* @media (prefers-color-scheme:dark)is ignored */<br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="span" attr={{class: "c=red @dark@c=blue"}}>im red</Html><br />
        </Html><br />
        <Html tag="script"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace />localStorage.setItem{"(\"THEME\", \"LIGHT\")"} // if THEME is not DARK and true<br />
            <TabSpace />window{"[\"instantCss\"]() // update style sheet"}  <br />
        </Html>
    </CodePage>
    <div class="h=1"></div>
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2}/>. . . . . .<br />
                <TabSpace repeat={2}/>.c\=red{"{"}color:red{"}"}<br />
                <TabSpace repeat={2}/>/* @media (prefers-color-scheme:dark)is enabled */<br />
                <TabSpace repeat={3}/>.\@dark\@c\=blue{"{"}color:blue{"}"}<br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="span" attr={{class: "c=red @dark@c=blue"}}>im blue</Html><br />
        </Html><br />
        <Html tag="script"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace />localStorage.setItem{"(\"THEME\", \"DARK\")"} // if THEME is DARK<br />
            <TabSpace />window{"[\"instantCss\"]() // update style sheet"}  <br />
        </Html>
    </CodePage>
    <div class="h=1"></div>
    <CodePage>
        <Html tag="head"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
            <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
                <TabSpace repeat={2}/>. . . . . .<br />
                <TabSpace repeat={2}/>.c\=red{"{"}color:red{"}"}<br />
                <TabSpace repeat={2}/>@media (prefers-color-scheme:dark){"{"}<br />
                <TabSpace repeat={3}/>.\@dark\@c\=blue{"{"}color:blue{"}"}<br />
                <TabSpace repeat={2}/>{"}"}<br />
            <TabSpace /></Html><br />
        </Html><br />
        <Html tag="body"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace /><Html tag="span" attr={{class: "c=red @dark@c=blue"}}>im follow system</Html><br />
        </Html><br />
        <Html tag="script"><br />
            <TabSpace />. . . . . .<br />
            <TabSpace />localStorage.removeItem{"(\"THEME\")"} // if THEME is false<br />
            <TabSpace />window{"[\"instantCss\"]() // update style sheet"}  <br />
        </Html>
    </CodePage>
</div>