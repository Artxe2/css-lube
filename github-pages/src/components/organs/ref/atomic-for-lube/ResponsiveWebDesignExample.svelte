<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { comment, html, name, string } from "ts/highlighter"

const code = `. . . . . .
${html("body", "", `
	${html("div", ` ${name("class")}=${string(`<span class="bold">h=100% ox=hidden
			fs=16px @md@fs=20px @xl@fs=24px</span>
			bg=#fff @dark@bg=--gray-10
			c=#000 @dark@c=--gray-90
			_svg/f=#000 @dark@_svg/f=--gray-90
			tt=color_.3s,background_.3s _svg/tt=fill_.3s`)}`, `
		${html("div", ` ${name(". . .")}`, `
			. . . . . .
		`)}
	`)}
	${comment("<!--<RootDiv>-->")}
`)}`
</script>

<CodePage>{@html code}</CodePage>