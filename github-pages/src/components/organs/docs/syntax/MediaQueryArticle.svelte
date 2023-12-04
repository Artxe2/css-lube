<script>
import { base } from "$app/paths"
import CodePage from "organs/$common/utils/CodePage.svelte"
import {
	bracket,
	comment,
	css,
	func,
	html,
	keyword,
	name,
	number,
	string
} from "js/highlighter.js"
import styles from "js/styles.js"
import version from "js/version.js"
import TestEditor from "parts/$common/TestEditor.svelte"

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
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<span class="c=red @(min-width:768px)@c=blue">
	Red? Blue?
</span>
<span class=":active/c=red @(min-width:768px)@:active/c=blue">
	Red? Blue?
</span>`} />
	</div>
	<br>
	<span>Media queries also provide some shorthands</span>
	<a href="{base}/docs/custom#shorthand-for-media" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Shorthand for Media Condition
	</a>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<pre>
	<span class="c=red @min-width=768px@c=blue">Red? Blue?</span>
	<span class="c=red @md@c=blue">Red? Blue?</span>
	<span class="c=red @sm&!lg@c=blue">Red? Blue?</span>
	<span class="c=red @!md@c=blue">Red? Blue?</span>
	<span class="c=red @dark&md@c=blue">Red? Blue?</span>
</pre>`} />
	</div>
	<br>
	<span>If you use two at (@), the query does not have media as a prefix</span>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="bg=#fff inline-block o=auto resize=horizontal w=120 h=120">
	<div class="container-type=size ta=center">
		<span class="c=red @@container_(width>180px)@c=blue">Red? Blue?</span>
	</div>
</div>`} />
	</div>
	<br>
	<h3 class="fs=2em bold">Dark Mode</h3>
	<span>The dark mode transition of CSS Lube is applied using media queries.</span><br>
	<span>In light theme, dark mode styles are disabled with FALSE(0)</span>
	<div class="m=12_0_24_0">
		<CodePage>{@html code4}</CodePage>
	</div>
	<span>In dark theme, dark mode styles are applied with TRUE(color)</span>
	<div class="m=12_0_24_0">
		<CodePage>{@html code5}</CodePage>
	</div>
	<span>In system theme, the dark mode style is applied as a media query</span>
	<div class="m=12_0_24_0">
		<CodePage>{@html code6}</CodePage>
	</div>
</div>