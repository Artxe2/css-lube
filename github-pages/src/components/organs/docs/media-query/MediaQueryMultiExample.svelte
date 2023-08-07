<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, comment, css, html, keyword, name, string } from "ts/highlighter"

const code = `${html("style", ` ${name("css-lube")}=${string("v1.2.0")}`, `
	${keyword("@container")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@\\@container_min-width\\=768px\\@fs\\=10px", ["font-size", "10px"])}
	${bracket("}")}
	${keyword("@media screen and")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@screen_and_min-width\\=768px\\@fs\\=10px", ["font-size", "10px"])}
	${bracket("}")}
`)}

${comment("<!-- If you use two at (@), the query does not have media as a prefix -->")}
${html("span", ` ${name("class")}=${string("@@container_min-width=768px@fs=10px")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
${html("span", ` ${name("class")}=${string("@screen_and_min-width=768px@fs=10px")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
`
</script>

<CodePage>{@html code}</CodePage>