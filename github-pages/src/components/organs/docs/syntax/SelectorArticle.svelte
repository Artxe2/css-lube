<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import { html, name, string } from "ts/highlighter"
import styles from "ts/styles"

const code1 = `${html("div", ` ${name("class")}=${string("w=3.5 ta=center >div.target/bgc=red _div:nth-of-type(2n+1)/bgc=blue")}`, `
	${html("div", "", "1")}
	${html("div", ` ${name("class")}=${string("target")}`, "2")}
	${html("div", "", "3")}
	${html("div", "", "4")}
`)}`
const code2 = `${html("div", ` ${name("class")}=${string("bg=--primary-40 c=#ccc w=3.5 h=3.5 :active/bg=--primary-60;c=#fff")}`, `
	:active
`)}`
const code3 = `${html("div", ` ${name("class")}=${string("bg=#888 bold br=1 p=1")}`, `
	${html("div", ` ${name("class")}=${string("c=purple!!!!!! c=navy!!!!!")}`, `
		<span class="c=purple!!!!!! c=navy!!!!!">[class] * 6 { color: purple }</span>
	`)}
	${html("div", ` ${name("class")}=${string("c=navy!!!!! c=blue!!!!")}`, `
		<span class="c=navy!!!!! c=blue!!!!">[class] * 5 { color: navy }</span>
	`)}
	${html("div", ` ${name("class")}=${string("c=blue!!!! c=green!!!")}`, `
		<span class="c=blue!!!! c=green!!!">[class] * 4 { color: blue }</span>
	`)}
	${html("div", ` ${name("class")}=${string("c=green!!! yellow!!")}`, `
		<span class="c=green!!! yellow!!">[class] * 3 { color: green }</span>
	`)}
	${html("div", ` ${name("class")}=${string("c=yellow!! c=orange!")}`, `
		<span class="c=yellow!! c=orange!">[class] * 2 { color: yellow }</span>
	`)}
	${html("div", ` ${name("class")}=${string("c=orange! c=red")}`, `
		<span class="c=orange! c=red">[class] { color: orange }</span>
	`)}
	${html("div", ` ${name("class")}=${string("c=red")}`, `
		<span class="c=red">{ color: red }</span>
	`)}
`)}`
</script>

<div class={styles.$common.contents_div}>
	<span>Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles</span>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="w=3.5 ta=center >div.target/bgc=red _div:nth-of-type(2n+1)/bgc=blue">
				<div>1</div>
				<div class="target">2</div>
				<div>3</div>
				<div>4</div>
			</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code1}</CodePage>
		</div>
	</div>
	<span>The pseudo class is also applied in the same way as the selector</span>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="bg=--primary-40 c=#ccc w=3.5 h=3.5 :active/bg=--primary-60;c=#fff">
				:active
			</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code2}</CodePage>
		</div>
	</div>
	<span>If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important</span>
	<div class="flex jc=left m=1_0_2_0">
		<div class="fsk=1 @!sm@fs=.75">
			<CodePage>{@html code3}</CodePage>
		</div>
	</div>
</div>