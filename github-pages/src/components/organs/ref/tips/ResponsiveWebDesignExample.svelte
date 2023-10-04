<script>
import { H3 } from "lube-ui"
import CodePage from "organs/$common/utils/CodePage.svelte"
import { comment, html, name, string } from "js/highlighter.js"

const code = `. . . . . .
${html("body", "", `
	${html("div", ` ${name("class")}=${string(`<span class="bold">h=100% ox=hidden
			fs=16px @md@fs=20px @xl@fs=24px</span>
			bg=#fff @dark@bg=--gray-10
			c=#000 @dark@c=--gray-90
			_svg/f=currentcolor`)}`, `
		${html("div", ` ${name(". . .")}`, `
			. . . . . .
		`)}
	`)}
	${comment("<!--<RootDiv>-->")}
`)}`
</script>

<H3>Responsive Web Design</H3>
<div class="m=1_0_2_0">
	<span>CSS Lube recommends using "em" as the default unit.</span><br>
	<span>This website provides a responsive web by adjusting the "font size" according to "device width" as shown below.</span>
	<div class="h=1"></div>
	<CodePage>{@html code}</CodePage>
</div>