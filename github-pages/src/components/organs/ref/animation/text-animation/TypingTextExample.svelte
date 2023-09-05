<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import ComponentTabView from "organs/$common/utils/ComponentTabView.svelte"
import TypingText from "organs/$common/animations/TypingText.svelte"
import {
	bracket, declare, escape_tag, func, html, keyword, name, string 
} from "js/highlighter.js"
import styles from "js/styles.js"

const text = `${html("body", "", `
	. . . . . .
	${html("span", ` ${name("class")}=${string("<f>Lorem Ipsum</f><f>is simply dummy text of the printing</f><f>and typesetting industry</f>")}`, "duration: 1000")}
`)}`
</script>

<ComponentTabView>
	<TypingText classs={styles.util.typing_text}>
		<CodePage>{@html text}</CodePage>
	</TypingText>
	<CodePage is_code>{@html
`${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${name("CodePage")} ${keyword("from")} ${string("cells/boxs/CodePage.svelte")}
${keyword("import")} ${name("TypingText")} ${keyword("from")} ${string("src/instant-ui/animations/TypingText.svelte")}
${keyword("import")} ${bracket("{")} ${name("bracket")}, ${name("declare")}, ${name("escape_tag")}, ${name("func")}, ${name("html")}, ${name("keyword")}, ${name("name")}, ${name("string")} ${bracket("}")} ${keyword("from")} ${string("js/highlighter.js")}

${declare("const")} ${name("text", true)} = ${string("`", false)}${declare("${")}${func("html")}${bracket("(")}${string("body")}, ${string("")}, ${string("`", false)}
	${string(". . . . . .", false)}
	${declare("${")}${func("html")}${bracket("(", 1)}${string("span")}, ${string("`", false)} ${declare("${")}${func("name")}${bracket("(", 2)}${string("class")}${bracket(")", 2)}${declare("}")}${string(escape_tag("="), false)}${declare("${")}${func("string")}${bracket("(", 2)}${string(escape_tag("<span class=\"foldable\">Lorem Ipsum</span><span class=\"foldable\">is simply dummy text of the printing</span><span class=\"foldable\">and typesetting industry</span>"), "`")}${bracket(")", 2)}${declare("}")}${string("`", false)}, ${string("duration: 1000")}${bracket(")", 1)}${declare("}")}
${string("`", false)}${bracket("}")}${declare("}")}${string("`", false)}
`)}

${html("TypingText", ` ${name("classs")}=${string("_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=#fff @dark@_.foldable:not(:empty):nth-child(n+2):before/inline-block;ct='\\00a0';bg=--cod-gray")}`, `
	${html("CodePage", "", `${bracket("{")}@${declare("html")} ${name("text", true)}${bracket("}")}`)}
`)}`
	}</CodePage>
</ComponentTabView>