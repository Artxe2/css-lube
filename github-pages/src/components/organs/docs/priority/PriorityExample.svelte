<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { comment, css, html, name, string } from "ts/highlighter"

const code = `${html("style", ` ${name("css-lube")}=${string("v1.1.1")}`, `
	${css("<span class='bold'>[class][class][class]</span>.c\\=yellow\\!\\!\\!", ["color", "yellow"])}
	${css("<span class='bold'>[class][class]</span>.c\\=orange\\!\\!", ["color", "orange"])}
	${css("<span class='bold'>[class]</span>.c\\=red\\!", ["color", "red"])}
	${css(".\\>span\\/c\\=red>span", ["color", "red"])}
	${css(".c\\=blue", ["color", "blue"])}
	${css("<span class='bold'>[class]</span>.c\\=blue\\!", ["color", "blue"])}
`)}

${comment("<!-- If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important -->")}
${html("span", ` ${name("class")}=${string("c=yellow!!! c=orange!! c=red!")}`, `
	{ color: yellow }
	<span class="td=line-through">{ color: orange }</span>
	<span class="td=line-through">{ color: red }</span>
`)}
${html("div", ` ${name("class")}=${string(">span/c=red")}`, `
	${html("span", "", `
		{ color: red }
	`)}
	${html("span", ` ${name("class")}=${string("c=blue")}`, `
		{ color: red }
		<span class="td=line-through">{ color: blue }</span>
	`)}
	${html("span", ` ${name("class")}=${string("c=blue!")}`, `
		<span class="td=line-through">{ color: red }</span>
		{ color: blue }
	`)}
`)}`
</script>

<CodePage>{@html code}</CodePage>