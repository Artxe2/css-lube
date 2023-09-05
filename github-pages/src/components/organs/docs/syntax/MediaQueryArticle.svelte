<script>
import { base } from "$app/paths"
import { H3 } from "lube-ui"
import CodePage from "organs/$common/utils/CodePage.svelte"
import {
	bracket, comment, css, func, html, keyword, name, number, string 
} from "js/highlighter.js"
import styles from "js/styles.js"
import version from "js/version.js"

const code1 = `${html("span", ` ${name("class")}=${string("fs=12px @(min-width:768px)@fs=16px  @(min-width:768px)@:hover/fs=20px")}`, `
	${css(".fs\\=12px", ["font-size", "12px"])}
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@\\(min-width\\:768px\\)\\@fs\\=16px", ["font-size", "16px"])}
		${css(".\\@\\(min-width\\:768px\\)\\@\\:hover\\/fs\\=20px", ["font-size", "20px"])}
	${bracket("}")}
`)}`
const code2 = `${html("span", ` ${name("class")}=${string("@min-width=768px@c=red")}`, `
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@min-width\\=768px\\@c\\=red", ["color", "red"])}
	${bracket("}")}
`)}
${html("span", ` ${name("class")}=${string("@md@c=red")}`, `
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@md\\@c\\=red", ["color", "red"])}
	${bracket("}")}
`)}
${html("span", ` ${name("class")}=${string("@sm&!lg@c=red")}`, `
	${keyword("@media")} ${bracket("(")}${name("min-width")}:${string("640px", false)}${bracket(")")} ${keyword("and")} ${bracket("(")}${name("max-width")}:${string("1023px", false)}${bracket("){")}
		${css(".\\@sm\\&\\!lg\\@c\\=red", ["color", "red"])}
	${bracket("}")}
`)}
${html("span", ` ${name("class")}=${string("@!md@c=red")}`, `
	${keyword("@media")} ${bracket("(")}${name("max-width")}:${string("767px", false)}${bracket("){")}
		${css(".\\@\\!md\\@c\\=red", ["color", "red"])}
	${bracket("}")}
`)}
${html("span", ` ${name("class")}=${string("@dark&md@c=red")}`, `
	${keyword("@media")} ${bracket("(")}${name("prefers-color-scheme")}:${string("dark", false)}${bracket(")")} ${keyword("and")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@dark\\&md\\@c\\=red", ["color", "red"])}
	${bracket("}")}
`)}`
const code3 = `${html("span", ` ${name("class")}=${string("@@container_md@fs=10px")}`, `
	${keyword("@container")} ${bracket("(")}${name("min-width")}:${string("768px", false)}${bracket("){")}
		${css(".\\@\\@container_md\\@fs\\=10px", ["font-size", "10px"])}
	${bracket("}")}
`)}`
const code4 = `${html("script", "", `
	${comment("// if THEME is not DARK and true, light theme is applied")}
	${name("localStorage")}.${func("setItem")}${bracket("(")}${string("THEME")}, ${string("LIGHT")}${bracket(")")}
	${name("window")}.${name("cssLube")}${bracket("()")} ${comment("// update style sheet")}
`)}

${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${css(".c\\=red", ["color", "#000"])}
	${keyword("@media")} ${bracket("(")}${number(0)}${bracket("){")}
		${css(".\\@dark\\@c\\=blue", ["color", "#fff"])}
	${bracket("}")}
`)}`
const code5 = `${html("script", "", `
	${comment("// if THEME is DARK, dark theme is applied")}
	${name("localStorage")}.${func("setItem")}${bracket("(")}${string("THEME")}, ${string("DARK")}${bracket(")")}
	${name("window")}.${name("cssLube")}${bracket("()")} ${comment("// update style sheet")}
`)}

${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${css(".c\\=red", ["color", "red"])}
	${keyword("@media")} ${bracket("(")}${keyword("color")}${bracket("){")}
		${css(".\\@dark\\@c\\=blue", ["color", "blue"])}
	${bracket("}")}
`)}`
const code6 = `${html("script", "", `
	${comment("// if THEME is false, theme is follow system settings")}
	${name("localStorage")}.${func("removeItem")}${bracket("(")}${string("THEME")}${bracket(")")}
	${name("window")}.${name("cssLube")}${bracket("()")} ${comment("// update style sheet")}
`)}

${html("style", ` ${name("css-lube")}=${string(version)}`, `
	${css(".c\\=red", ["color", "red"])}
	${keyword("@media")} ${bracket("(")}${name("prefers-color-scheme")}:${string("dark", false)}${bracket("){")}
		${css(".\\@dark\\@c\\=blue", ["color", "blue"])}
	${bracket("}")}
`)}`
</script>

<div class={styles.$common.contents_div}>
	<span>Classes that begin with an at (@) apply media queries and use the second at to separate styles from media queries</span>
	<div class="m=1_0_2_0">
		<CodePage>{@html code1}</CodePage>
	</div>
	<span>Media queries also provide some shorthands</span>
	<a href="{base}/ref/custom#Shorthand for Media Condition" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Shorthand for Media Condition
	</a>
	<div class="m=1_0_2_0">
		<CodePage>{@html code2}</CodePage>
	</div>
	<span>If you use two at (@), the query does not have media as a prefix</span>
	<div class="m=1_0_2_0">
		<CodePage>{@html code3}</CodePage>
	</div>
	<H3>Dark Mode</H3>
	<span>The dark mode transition of CSS Lube is applied using media queries.</span><br>
	<span>In light theme, dark mode styles are disabled with FALSE(0)</span>
	<div class="m=1_0_2_0">
		<CodePage>{@html code4}</CodePage>
	</div>
	<span>In dark theme, dark mode styles are applied with TRUE(color)</span>
	<div class="m=1_0_2_0">
		<CodePage>{@html code5}</CodePage>
	</div>
	<span>In system theme, the dark mode style is applied as a media query</span>
	<div class="m=1_0_2_0">
		<CodePage>{@html code6}</CodePage>
	</div>
</div>