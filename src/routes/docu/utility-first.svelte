<script>
import { base } from "$app/paths";
import CodePage from "src/components/cells/boxs/CodePage.svelte";
import Html from "src/components/cells/texts/Html.svelte";
import TabSpace from "src/components/cells/texts/TabSpace.svelte";
</script>

<style>
    .content-container {
        display: flex;
        height: 10em;
        align-items: center;
        justify-content: center;
    }
    .content-box {
        display: flex;
        width: fit-content;
        background: white;
        color: black;
        padding: 0.5em;
        border-radius: 0.5em;
        box-shadow: 0em 1em 1em gray;
    }
    .content-icon {
        width: 4em;
        height: 4em;
        transform: rotate(-15deg);
    }
    .content-subject {
        font-weight: bold;
        font-size: 2em;
        font-variant: small-caps;
    }
    .content-description {
        position: relative;
        margin-top: -0.5em;
        width: fit-content;
    }
    .content-description span {
        font-family: 'Times New Roman', Times, serif
    }
</style>

<span class="bold">Utillity-First Fundamentals</span>
<div class="h=2"></div>
<span class="bold">Semantic CSS</span>
<CodePage>
    <div class="content-container">
        <div class="content-box">
            <img class="content-icon" src="{base}/favicon.png" alt="favicon" />
            <div>
                <h3 class="content-subject">InstantCSS</h3>
                <div class="content-description">
                    <span>easy & rapid & intuitive</span>
                </div>
            </div>
        </div>
    </div>
</CodePage>
<div class="fs=0.75">
    <span>In the old way, whenever you needed to style the web, you had to name a class and write CSS.</span><br />
    <!-- 기존 방식에서는 웹에서 스타일을 지정해야 할 때마다 클래스 명을 정하고 CSS를 작성해야 합니다. -->
</div>
<CodePage>
    <Html tag="head"><br />
        <TabSpace /><Html tag="style"><br />
            <TabSpace repeat={2} />.content-container {"{"}<br />
                <TabSpace repeat={3} />display: flex;<br />
                <TabSpace repeat={3} />height: 10em;<br />
                <TabSpace repeat={3} />align-items: center;<br />
                <TabSpace repeat={3} />justify-content: center;<br />
            <TabSpace repeat={2} />{"}"}<br />
            <TabSpace repeat={2} />.content-box {"{"}<br />
                <TabSpace repeat={3} />display: flex;<br />
                <TabSpace repeat={3} />width: fit-content;<br />
                <TabSpace repeat={3} />background: white;<br />
                <TabSpace repeat={3} />color: black;<br />
                <TabSpace repeat={3} />padding: 0.5em;<br />
                <TabSpace repeat={3} />border-radius: 0.5em;<br />
                <TabSpace repeat={3} />box-shadow: 0em 1em 1em gray;<br />
            <TabSpace repeat={2} /> {"}"}<br />
            <TabSpace repeat={2} />.content-icon {"{"}<br />
                <TabSpace repeat={3} />width: 4em;<br />
                <TabSpace repeat={3} />height: 4em;<br />
                <TabSpace repeat={3} />transform: rotate(-15deg);<br />
            <TabSpace repeat={2} />{"}"}<br />
            <TabSpace repeat={2} />.content-subject {"{"}<br />
                <TabSpace repeat={3} />font-weight: bold;<br />
                <TabSpace repeat={3} />font-size: 2em;<br />
                <TabSpace repeat={3} />font-variant: small-caps;<br />
            <TabSpace repeat={2} />{"}"}<br />
            <TabSpace repeat={2} />.content-description {"{"}<br />
                <TabSpace repeat={3} />position: relative;<br />
                <TabSpace repeat={3} />margin-top: -0.5em;<br />
                <TabSpace repeat={3} />width: fit-content;<br />
            <TabSpace repeat={2} />{"}"}<br />
            <TabSpace repeat={2} />.content-description span {"{"}<br />
                <TabSpace repeat={3} />font-family: 'Times New Roman', Times, serif<br />
            <TabSpace repeat={2} />{"}"}<br />
        <TabSpace /></Html><br />
    </Html><br />
    <Html tag="body"><br />
        <TabSpace /><Html tag="div" attr={{class: "content-container"}}><br />
            <TabSpace repeat={2} /><Html tag="div" attr={{class: "content-box"}}><br />
                <TabSpace repeat={3} /><Html tag="img" attr={{class: "content-icon", src: base + "/favicon.png", alt: "favicon"}}></Html><br />
                <TabSpace repeat={3} /><Html tag="div"><br />
                    <TabSpace repeat={4} /><Html tag="h3" attr={{class: "content-subject"}}>InstantCSS</Html><br />
                    <TabSpace repeat={4} /><Html tag="div" attr={{class: "content-description"}}><br />
                        <TabSpace repeat={5} /><Html tag="span">easy & rapid & intuitive</Html><br />
                    <TabSpace repeat={4} /></Html><br />
                <TabSpace repeat={3} /></Html><br />
            <TabSpace repeat={2} /></Html><br />
        <TabSpace /></Html><br />
    </Html>
</CodePage>
<div class="h=2"></div>
<span class="bold">Utillity-First CSS</span>
<CodePage>
    <div class="flex h=10 ai=center jc=center">
        <div class="flex w=fit-content bg=white c=black p=0.5 br=0.5 bs=0em_1em_1em_gray">
            <img class="w=4 h=4 tf=rotate(-15deg)" src="{base}/favicon.png" alt="favicon" />
            <div>
                <h3 class="bold fs=2 fv=small-caps">InstantCSS</h3>
                <div class="relative mt=-0.5 w=fit-content _span/ff='Times_New_Roman',Times,serif">
                    <span>easy & rapid & intuitive</span>
                </div>
            </div>
        </div>
    </div>
</CodePage>
<div class="fs=0.75">
    <span>With InstantCSS, you style elements by applying pre-existing classes directly in your HTML.</span><br />
    <!-- InstantCSS를 사용하면 HTML에서 직접 기존 클래스를 적용하여 요소의 스타일을 지정할 수 있습니다. -->
</div>
<CodePage>
    <Html tag="head"><br />
        <TabSpace /><Html tag="script" attr={{src: "/instant-css.js"}}></Html><br />
    </Html><br />
    <Html tag="body"><br />
        <TabSpace /><Html tag="div" attr={{class: "flex h=10 ai=center jc=center"}}><br />
            <TabSpace repeat={2} /><Html tag="div" attr={{class: "flex w=fit-content bg=white c=black p=0.5 br=0.5 bs=0em_1em_1em_gray"}}><br />
                <TabSpace repeat={3} /><Html tag="img" attr={{class: "w=4 h=4 tf=rotate(-15deg)", src: base + "/favicon.png", alt: "favicon"}}></Html><br />
                <TabSpace repeat={3} /><Html tag="div"><br />
                    <TabSpace repeat={4} /><Html tag="h3" attr={{class: "bold fs=2 fv=small-caps"}}>InstantCSS</Html><br />
                    <TabSpace repeat={4} /><Html tag="div" attr={{class: "relative mt=-0.5 w=fit-content _span/ff='Times_New_Roman',Times,serif"}}><br />
                        <TabSpace repeat={5} /><Html tag="span">easy & rapid & intuitive</Html><br />
                    <TabSpace repeat={4} /></Html><br />
                <TabSpace repeat={3} /></Html><br />
            <TabSpace repeat={2} /></Html><br />
        <TabSpace /></Html><br />
    </Html>
</CodePage>