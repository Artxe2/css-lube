<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, comment, css, html, keyword, name, string } from "ts/highlighter"

const code = `${html("style", ` ${name("css-lube")}=${string("v1.0.0")}`, `
	${keyword("@media not")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@\\!min-width\\=768px\\@fs\\=12px", ["font-size", "12px"])}
	${bracket("}")}
`)}

${comment("<!-- Media queries can use an exclamation point (!) to apply the not logic -->")}
${html("span", ` ${name("class")}=${string("@!min-width=768px@fs=12px")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
`
</script>

<CodePage>{@html code}</CodePage>