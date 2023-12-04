<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import { declare, name, string } from "js/highlighter.js"

const code = `${declare("let")} ${name("style")} = ${string(`*{margin:0;padding:0;font:inherit;color:inherit}
*,:after,:before{box-sizing:border-box;flex-shrink:0}
html,body{height:100%;max-height:100%}
ol,ul,menu,dir{list-style:none}
img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}button{background:none;border:0;cursor:pointer}b,strong{font-weight:bold}
a{text-decoration:none}
pre{white-space:pre-wrap}
table{border-collapse:collapse;border-spacing:0}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}`)}`
</script>

<h3 class="fs=2em bold">
	<a id="css-reset" href="#css-reset">CSS Reset</a>
</h3>
<div class="m=1_0_2_0">
	<CodePage is_code>{@html code}</CodePage>
</div>