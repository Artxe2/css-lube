<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, comment, css, html, keyword, name, string } from "ts/highlighter"

const code = `${comment("<!-- Media queries also provide some shorthands -->")}
${html("style", ` ${name("css-lube")}=${string("v1.1.2")}`, `
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("640px", false)}${bracket(")")} ${keyword("and")} ${bracket("(")}${name("max-width")}:${string("767px", false)}${bracket("){")}
		${css(".\\@\\!width\\=640\\~767px\\@fs\\=10px", ["color", "red"])}
	${bracket("}")}
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@md\\@fs\\=12px", ["color", "red"])}
	${bracket("}")}
	${keyword("@media not")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@\\!md\\@fs\\=12px", ["color", "red"])}
	${bracket("}")}
	${keyword("@media")} ${bracket("(")}${name("prefers-color-scheme")}:${string("dark", false)}${bracket(")")} ${keyword("and")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@\\@dark_and_md\\@fs\\=12px", ["color", "red"])}
	${bracket("}")}
`)}

${html("span", ` ${name("class")}=${string("@width=640~767px@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${html("span", ` ${name("class")}=${string("@md@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${html("span", ` ${name("class")}=${string("@!md@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${html("span", ` ${name("class")}=${string("@@all_and_md@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
`
</script>

<CodePage>{@html code}</CodePage>