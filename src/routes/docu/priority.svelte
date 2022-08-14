<script>
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
</script>

<span class="bold">Priority</span>
<div class="fs=0.75">
    <span>Using utility-first css can greatly reduce css conflicts, but still sometimes messes up the order of applying styles.</span><br />
    <!-- 유틸리티 우선 css를 사용하면 css충돌이 일어나는 경우를 크게 줄일 수 있지만 그래도 스타일 적용 순서가 꼬이는 경우가 있습니다. -->
    <span>Instant supports the ability to easily adjust style priorities using the exclamation mark"!".</span><br />
    <!-- InstantCSS에서는 느낌표"!"를 이용하여 스타일 우선순위를 간편하게 조정할 수 있는 기능을 지원합니다. -->
</div>
<div class="h=2"></div>
<CodePage>
    <Html tag="head"><br />
        <TabSpace />. . . . . .<br />
        <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
        <TabSpace /><Html tag="style" attr={{"instant-css": "v0.5.0"}}><br />
            <TabSpace repeat={2}/>. . . . . .<br />
            <TabSpace repeat={2}/><span class="bold">[class][class][class]</span>.c\=yellow\!\!\!{"{"}color:yellow{"}"}<br />
            <TabSpace repeat={2}/><span class="bold">[class][class]</span>.c\=orange\!\!{"{"}color:orange{"}"}<br />
            <TabSpace repeat={2}/><span class="bold">[class].c\=red\!</span>{"{"}color:red{"}"}<br />
            <TabSpace repeat={2}/>.\>span\/c\=red>span{"{"}color:red{"}"}<br />
            <TabSpace repeat={2}/>.c\=blue{"{"}color:blue{"}"}<br />
            <TabSpace repeat={2}/><span class="bold">[class]</span>.c\=blue{"{"}color:blue{"}"}<br />
        <TabSpace /></Html><br />
    </Html><br />
    <Html tag="body"><br />
        <TabSpace />. . . . . .<br />
        <TabSpace /><Html tag="span" attr={{class: "c=yellow!!! c=orange!! c=red!"}}>im yellow</Html><br />
        <TabSpace /><Html tag="div" attr={{class: ">span/c=red"}}><br />
            <TabSpace repeat={2}/><Html tag="span">im red</Html><br />
            <TabSpace repeat={2}/><Html tag="span" attr={{class: "c=blue"}}>im red</Html><br />
            <TabSpace repeat={2}/><Html tag="span" attr={{class: "c=blue!"}}>im blue</Html><br />
        <TabSpace /></Html><br />
    </Html>
</CodePage>