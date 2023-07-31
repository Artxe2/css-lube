<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, comment, css, html, keyword, name, string } from "ts/highlighter"

const code = `${html("style", ` ${name("css-lube")}=${string("v1.1.2")}`, `
	${css(".c\\=red", ["color", "red"])}
	${css(".fs\\=16px", ["font-size", "16px"])}
	${css("[class].fs\\=16px\\!", ["font-size", "16px"])}
	${comment("/* Styles with the same prefix are grouped in the same group */")}
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@min-width\\=768px\\@fs\\=12px", ["font-size", "12px"])}
		${css(".\\@min-width\\=768px\\@c\\=blue", ["color", "blue"])}
		${css(".\\@min-width\\=768px\\@\\:active\\/fs\\=12px:active", ["font-size", "1.25em"])}
	${bracket("}")}
`)}

${comment("<!-- Classes that begin with an at (@) apply media queries and use the second at to separate styles from media queries -->")}
${html("span", ` ${name("class")}=${string("c=red fs=16px @min-width=768px@fs=12px")}`, `
{ color: red }
<span class="td=line-through">{ font-size: 16px }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${html("span", ` ${name("class")}=${string("c=red @min-width=768px@c=blue fs=16px! @min-width=768px@fs=12px")}`, `
<span class="td=line-through">{ color: red }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
{ font-size: 16px }
<span class="td=line-through bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${html("span", ` ${name("class")}=${string("@min-width=768px@:active/fs=1.25")}`, `
<span class="bold c=--electric-violet @dark@c=--bouquet">:active { font-size: 1.25em }</span>
`)}
`
</script>

<CodePage>{@html code}</CodePage>