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
	<h3 class="fs=2 bold">Installation</h3>
	<div class="h=1"></div>
	<CssLubeDownloadForm />
	<div class="h=1"></div>
	<CodePage><TypingText>{@html code}</TypingText></CodePage>
	<div class="h=3"></div>
	<h3 class="fs=2 bold">VS Code Extension</h3>
	<div class="h=1"></div>
	<a href="https://marketplace.visualstudio.com/items?itemName=Artxe.intellisense-css-lube" target="_blank">
		<button class="h=2.5 br=1.25 p=0_1 jc=center c=#fff
				bg=--primary-50 :hover/bg=--primary-40
				:hover/ts=0_0_.5
				:active/bg=--primary-50!">
			<span class="@md@fs=1.5">VSCE:intellisense.vsix</span>
		</button>
	</a>
	<div class="h=1"></div>
	<SafeImg classs="br=1 o=hidden" aspect_ratio={5 / 2} src="https://github.com/Artxe2/css-lube/raw/main/github-pages/static/imgs/intellisense.gif" />
</div>