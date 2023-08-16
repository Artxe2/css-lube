<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, comment, css, html, keyword, name, string } from "ts/highlighter"
import version from "ts/version"

const code = `${comment("<!-- Media queries also provide some shorthands -->")}
${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@min-width\\=768px\\@c\\=red", ["color", "red"])}
	${bracket("}")}
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@md\\@c\\=red", ["color", "red"])}
	${bracket("}")}
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("640px", false)}${bracket(")")} ${keyword("and")} ${bracket("(")}${name("max-width")}:${string("1023px", false)}${bracket("){")}
		${css(".\\@sm\\&\\!lg\\@c\\=red", ["color", "red"])}
	${bracket("}")}
	${keyword("@media")} ${bracket("(")}${name("max-width")}:${string("767px", false)}${bracket("){")}
		${css(".\\@\\!md\\@c\\=red", ["color", "red"])}
	${bracket("}")}
	${keyword("@media")} ${bracket("(")}${name("prefers-color-scheme")}:${string("dark", false)}${bracket(")")} ${keyword("and")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@dark\\&md\\@c\\=red", ["color", "red"])}
	${bracket("}")}
`)}

${html("span", ` ${name("class")}=${string("@min-width=768px@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${html("span", ` ${name("class")}=${string("@md@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${html("span", ` ${name("class")}=${string("@sm&lg@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${html("span", ` ${name("class")}=${string("@!md@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${html("span", ` ${name("class")}=${string("@dark&md@c=red")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
`
</script>

<CodePage>{@html code}</CodePage>