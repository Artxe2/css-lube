<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import TypingText from "organs/@common/animations/TypingText.svelte"
import { base } from "$app/paths"
import { closeTag, comment, css, html, name, openTag, string } from "ts/highlighter"
import styles from "styles"

const code1 = `
${openTag("head", "")}
	. . . . . .
	${html("script", ` ${name("src")}=${string("/css-lube.js")}`, "")}
	${comment("<!-- Automatically generated styles at runtime using MutationObserver by CSS Lube -->")}
	${openTag("style ", ` ${name("css-lube")}=${string("v1.0.3")}`)}
		. . . . . .
`
$: code2 = `		${css(".fv\\=small-caps", ["font-variant", "small-caps"])}`
$: code3 = `		${css("._span\\/ff\\=\\'Times_New_Roman\\'\\,Times\\,serif span", ["font-family", "'Times New Roman',Times,serif"])}`
$: code4 = `		${css(".tf\\=rotate\\(-15deg\\)", ["transform", "rotate(-15deg)"])}`
const code5 = `	${closeTag("style ")}
${closeTag("head")}
`
const code6 = `${html("body", "", `
	${html("div", ` ${name("class")}=${string("flex h=10 ai=center jc=center")}`, `
		${html("div", ` ${name("class")}=${string("flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray")}`, `
			${html("img", ` ${name("class")}=${string(`w=4 h=4<f>tf=rotate(-15deg)</f>`)} ${name("src")}=${string(base + "/favicon.png")} ${name("alt")}=${string("favicon")}`, false)} 
			${html("div", "", `
				${html("h3", ` ${name("class")}=${string(`bold fs=2<f>fv=small-caps</f>`)}`, "CSS Lube")} 
				${html("div", ` ${name("class")}=${string(`relative mt=-1.5 w=fit-content<f>_span/ff='Times_New_Roman',Times,serif</f>`)}`, `
					${html("span", "", "Near-Atomic CSS Library")}
				`)}
			`)}
		`)}
	`)}
`)}`
let index = -1
const handleEndtype = ({ detail }: CustomEvent) => index = detail
</script>

<CodePage>
	<div class="flex h=10 ai=center jc=center">
		<div class="flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray">
			<img class="w=4 h=4{index < 2 ? "": " tt=transform_.5s tf=rotate(-15deg)"}" src="{base}/favicon.png" alt="favicon" />
			<div>
				<h3 class="bold fs=2{index < 0 ? "": " fv=small-caps"}">CSS Lube</h3>
				<div class="relative mt=-1.5 w=fit-content{index < 1 ? "" : " _span/ff='Times_New_Roman',Times,serif"}">
					<span>Near-Atomic CSS Library</span>
				</div>
			</div>
		</div>
	</div>
</CodePage>
<div class="h=1"></div>
<CodePage>{@html code1}<span class="op={index < 0 ? "0" : "1 tt=opacity_1s_linear"}">{@html code2}</span><br><span class="op={index < 1 ? "0" : "1 tt=opacity_1s_linear"}">{@html code3}</span><br><span class="op={index < 2 ? "0" : "1 tt=opacity_1s_linear"}">{@html code4}</span><br>{@html code5}<TypingText classs={styles.util.typingTextInMiddle} orders={[ 1, 2, 0 ]} on:endtype={handleEndtype}>{@html code6}</TypingText></CodePage>