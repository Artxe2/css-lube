<script>
import TypingText from "organs/@common/animations/TypingText.svelte"
import CodePage from "organs/@common/utils/CodePage.svelte"
import { html, name, string } from "ts/highlighter"

const code = `${html("head", "", `
	. . . . . .
	${html("script", ` ${name("src")}=${string("<f>/css-lubricant.min.js</f>")}`, "")}
`)}
${html("body", "", `
	. . . . . .
`)}`
</script>

<CodePage><TypingText>{@html code}</TypingText></CodePage>