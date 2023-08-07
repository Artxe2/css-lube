<script>
import TypingText from "organs/@common/animations/TypingText.svelte"
import CodePage from "organs/@common/utils/CodePage.svelte"
import { html, name, string } from "ts/highlighter"

const code = `${html("head", "", `
	. . . . . .
	${html("script", ` ${name("src")}=${string("<f>/css-lube.min.js</f>")} ${name("<f>async</f>")}`, "")}
`)}
${html("body", ` ${name("<f>hidden</f>")} ${name("class")}=${string("...")}`, `
	. . . . . .
`)}`
</script>

<CodePage><TypingText>{@html code}</TypingText></CodePage>