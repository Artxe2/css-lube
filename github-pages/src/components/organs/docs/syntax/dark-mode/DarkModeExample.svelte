<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, comment, css, func, html, keyword, name, number, string } from "ts/highlighter"
import version from "ts/version"

const code = `${comment("<!-- In light theme, dark mode styles are disabled with FALSE(width<0) -->")}
${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${css(".c\\=red", ["color", "red"])}
	${keyword("@media")} ${bracket("(")}${number(0)}${bracket("){")}
		${css(".\\@dark\\@c\\=blue", ["color", "blue"])}
	${bracket("}")}
`)}

${comment("<!-- In dark theme, dark mode styles are applied with TRUE(width>0) -->")}
${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${css(".c\\=red", ["color", "red"])}
	${keyword("@media")} ${bracket("(")}${keyword("color")}${bracket("){")}
		${css(".\\@dark\\@c\\=blue", ["color", "blue"])}
	${bracket("}")}
`)}
${comment("<!-- In system theme, the dark mode style is applied as a media query -->")}
${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${css(".c\\=red", ["color", "red"])}
	${keyword("@media")} ${bracket("(")}${name("prefers-color-scheme")}:${string("dark", false)}${bracket("){")}
		${css(".\\@dark\\@c\\=blue", ["color", "blue"])}
	${bracket("}")}
`)}

${html("span", ` ${name("class")}=${string("c=red @dark@c=blue")}`, `
	<span class="td=line-through">{ color: red }</span>
	<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
`)}

${html("script", "", `
	${name("localStorage")}.${func("setItem")}${bracket("(")}${string("THEME")}, ${string("LIGHT")}${bracket(")")} ${comment("// if THEME is not DARK and true, light theme is applied")}
	${name("localStorage")}.${func("setItem")}${bracket("(")}${string("THEME")}, ${string("DARK")}${bracket(")")} ${comment("// if THEME is DARK, dark theme is applied")}
	${name("localStorage")}.${func("removeItem")}${bracket("(")}${string("THEME")}${bracket(")")} ${comment("// if THEME is false, theme is follow system settings")}
	${name("window")}${bracket("[")}${string("CSS Lube")}${bracket("]()")} ${comment("// update style sheet")}
`)}`
</script>

<div class="@!lg@_pre/fs=.85 @!lg@_pre/fs=.7">
	<CodePage>{@html code}</CodePage>
</div>