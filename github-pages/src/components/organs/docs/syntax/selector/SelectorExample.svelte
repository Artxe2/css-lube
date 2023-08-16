<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { comment, html, name, string } from "ts/highlighter"

const code = `${comment("<!-- Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles -->")}
${html("div", ` ${name("class")}=${string(">span.target/bgc=red<span class='inline-block w=0'> </span>_span:nth-of-type(2n+1)/bgc=blue")}`, `
	${html("span", "", `
		{ background-color: blue }
	`)}
	${html("span", ` ${name("class")}=${string("target")}`, `
		{ background-color: red }
	`)}
	${html("span", "", `
		{ background-color: blue }
	`)}
	${html("span", "", "")}
`)}

${comment("<!-- The pseudo class is also applied in the same way as the selector -->")}
${html("span", ` ${name("class")}=${string(":active/bgc=blue;c=red")}`, `
	:active { background-color:blue;color:red }
`)}`
</script>

<CodePage>{@html code}</CodePage>