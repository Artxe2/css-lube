<script>
import { html, name, string } from "js/highlighter.js"
import CodePage from "organs/$common/utils/CodePage.svelte"
import TypingText from "organs/$common/animations/TypingText.svelte"
import CssLubeDownloadForm from "organs/docs/start/StartArticle/CssLubeDownloadForm.svelte"
import styles from "js/styles.js"
import SafeImg from "organs/$common/utils/SafeImg.svelte"

const code = `${html("head", "", `
	. . . . . .
	${html("script", ` ${name("src")}=${string("<f>/css-lube.min.js</f>")}`, "")}
`)}
${html("body", ` ${name("class")}=${string("...")}`, `
	. . . . . .
`)}`
</script>

<div class={styles.$common.contents_div}>
	<h3 class="fs=2em bold">Installation</h3>
	<div class="h=24"></div>
	<CssLubeDownloadForm />
	<div class="h=24"></div>
	<CodePage><TypingText>{@html code}</TypingText></CodePage>
	<div class="h=36"></div>
	<h3 class="fs=2em bold">VS Code Extension</h3>
	<div class="h=24"></div>
	<a class="w=fit-content" href="https://marketplace.visualstudio.com/items?itemName=Artxe.intellisense-css-lube" target="_blank">
		<button class="h=48 br=24 p=0_12 jc=center
				bg=--primary-50 :hover/bg=--primary-40
				:hover/ts=0_0_12
				:active/bg=--primary-50!">
			<span class="c=#fff fs=1.5em">VSCE:intellisense.vsix</span>
		</button>
	</a>
	<div class="h=24"></div>
	<SafeImg classs="br=24 o=hidden" aspect_ratio={5 / 2} src="https://github.com/Artxe2/css-lube/raw/main/github-pages/static/imgs/intellisense.gif" />
</div>