<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { comment, html, name, string } from "ts/highlighter"

const code = `${comment("<!-- By default, class names behave like inline styles -->")}
${html("span", ` ${name("class")}=${string("background-color:red color:blue")}`, `
{ background-color: red }
{ color: blue }
`)}

${comment(`<!-- Because class names use spaces( ) as delimiters, values that contain spaces should use underscores(_) instead of spaces.
A colon(:) can be included in the class name, but can be replaced by an equal sign(=) depending on your preference -->`)}
${html("span", ` ${name("class")}=${string("border=1px_solid_black")}`, `
{ border: 1px solid black }
`)}

${comment("<!-- Multiple styles or other attributes are also freely applicable in basic syntax -->")}
${html("span", ` ${name("class")}=${string("color=red;font-size=calc(8px*2)!important")}`, `
{ color:red;font-size:calc(8px*2)!important }
`)}`
</script>

<div class="@!lg@_pre/fs=.85 @!lg@_pre/fs=.7">
	<CodePage>{@html code}</CodePage>
</div>