<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import TypingText from "organs/$common/animations/TypingText.svelte"
import { base } from "$app/paths"
import { html, name, string } from "js/highlighter.js"
import styles from "js/styles.js"
import { H2 } from "lube-ui/typography"

const code = `${html("div", ` ${name("class")}=${string("flex column ai=center ta=center w=12 bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray")}`, `
	${html("img", ` ${name("class")}=${string("w=4 h=4<f>tf=rotate(-20deg)</f>")} ${name("src")}=${string(base + "/favicon.svg")} ${name("alt")}=${string("favicon")}`, false)} 
	${html("div", "", `
		${html("h3", ` ${name("class")}=${string("bold fs=1.5<f>fv=small-caps</f>")}`, "CSS Lube")} 
		${html("div", ` ${name("class")}=${string("relative mt=-1.5<f>_span/ff='Times_New_Roman',Times,serif</f>")}`, `
			${html("h5", ` ${name("class")}=${string("fs=.75 lh=1")}`, "Just-In-Time")}
			${html("h5", ` ${name("class")}=${string("fs=.75 lh=1")}`, "Zero-Buildtime")}
			${html("h5", ` ${name("class")}=${string("fs=.75 lh=1")}`, "CSS Interpreter")}
		`)}
	`)}
`)}`
let index = $state(-1)

/** @param {CustomEvent<number>} event */
const handle_endtype = ({ detail }) => index = detail
</script>

<div class={styles.$common.contents_div}>
	<H2>What is CSS Lube?</H2>
	<span>CSS Lube is Highly-optimized CSS Interpreter.</span>
	<span>It is makes improved your developer experience by implement any designs directly in markup and immediately reflect feedback.</span>
	<span>In addition, CSS Lube parses HTML documents at runtime and render styles, so it can completely replace style files that become bloated whenever updated with a 6,033 byte(2,572 byte on gzip) js file.</span>
	<div class="h=1"></div>
	<div class="flex
			@!md@column
			@!lg@_pre/fs=.7">
		<div class="flex
				>div/fg=1
				>div>pre/flex;jc=center">
			<CodePage>
				<div class="flex column ai=center ta=center w=12 bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray">
					<img class="w=4 h=4
							{index < 2 || "tt=transform_.5s tf=rotate(-20deg)"}"
							src="{base}/favicon.svg" alt="favicon" />
					<div>
						<h3 class="bold fs=1.5
								{index < 0 || "fv=small-caps"}">
							CSS Lube
						</h3>
						<div class="relative _h5/mt=-1.5
								{index < 1 || "_h5/ff='Times_New_Roman',Times,serif"}">
							<h5 class="fs=.75 lh=1">Just-In-Time</h5>
							<h5 class="fs=.75 lh=1">Zero-Buildtime</h5>
							<h5 class="fs=.75 lh=1">CSS Interpreter</h5>
						</div>
					</div>
				</div>
			</CodePage>
		</div>
		<div class="w=1 h=1"></div>
		<div class="relative fg=1 fsk=1 >div/br=1">
			<div class="v=hidden _f:not(:empty):before/inline-block;ct='_'">
				<pre class="p=1 wb=break-all letter-spacing=.075">{@html code}</pre>
			</div>
			<div class="absolute t=0 >div/h=100%">
				<CodePage>
					<TypingText classs={styles.util.typing_text_in_middle} orders={[ 1, 2, 0 ]} onendtype={handle_endtype}>{@html code}</TypingText>
				</CodePage>
			</div>
		</div>
	</div>
</div>