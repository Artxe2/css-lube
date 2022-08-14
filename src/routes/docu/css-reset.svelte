<script>
import CodePage from "src/components/cells/boxs/CodePage.svelte";
</script>

<span class="bold">CSS Reset</span>
<div class="fs=0.75">
    <span>CSS Reset of InstantCSS.</span><br />
    <!-- InstantCSS의 CSS Reset입니다. -->
</div>
<div class="h=2"></div>
<CodePage>
    <pre>const RESET = <span class="c=#f40 @dark@c=#fd6">{`\`*{margin:0;padding:0;font:inherit;color:inherit}
    *,:after,:before{box-sizing:border-box;flex-shrink:0}
    html,body{height:100%;max-height:100%}
    ol,ul,menu,dir{list-style:none}
    img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}
    button{background:none;border:0;cursor:pointer}
    a{text-decoration:none}
    pre{white-space:pre-wrap}
    table{border-collapse:collapse;border-spacing:0}
    :root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}\``}</span></pre>
</CodePage>