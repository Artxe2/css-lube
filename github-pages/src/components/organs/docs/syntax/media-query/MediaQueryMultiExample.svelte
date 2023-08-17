<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, comment, css, html, keyword, name, string } from "ts/highlighter"
import version from "ts/version"

const code = `${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${keyword("@@container")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@\\@container_\\(min-width\\:768px\\)\\@fs\\=10px", ["font-size", "10px"])}
	${bracket("}")}
	${keyword("@media screen and")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@screen_and_\\(min-width\\:768px\\)\\@fs\\=10px", ["font-size", "10px"])}
	${bracket("}")}
`)}

${comment("<!-- If you use two at (@), the query does not have media as a prefix -->")}
${html("span", ` ${name("class")}=${string("@@container_(min-width:768px)@fs=10px")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
${html("span", ` ${name("class")}=${string("@screen_and_(min-width:768px)@fs=10px")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
`
</script>

<div class="@!lg@_pre/fs=.85 @!lg@_pre/fs=.7">
	<CodePage>{@html code}</CodePage>
</div>