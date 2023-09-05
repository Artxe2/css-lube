<script>
import { base } from "$app/paths"
import CodePage from "organs/$common/utils/CodePage.svelte"
import {
	html, name, string 
} from "js/highlighter.js"
import styles from "js/styles.js"

const code1 = `${html("div", ` ${name("class")}=${string("background:#08f  width:4em;height:4em!important")}`, `
	Box
`)}`
const code2 = `${html("div", ` ${name("class")}=${string("background:#08f width:3.5 height:3.5")}`, `
	Box
`)}`
const code3 = `${html("div", ` ${name("class")}=${string("bg:blue w:3.5 h:3.5")}`, `
	Box
`)}`
const code4 = `${html("div", ` ${name("class")}=${string("bd=2px_solid_red bg=#08f w=3.5 h=3.5")}`, `
	Box
`)}`
const code5 = `${html("div", ` ${name("class")}=${string("bg=#08f w=3.5 h=3.5")}`, `
	${html("span", ` ${name("class")}=${string("fs=1.5 bold")}`, "Box")}
`)}`
const code6 = `${html("div", ` ${name("class")}=${string("bg=#08f w=calc(4em-1px) h=calc(4em+1px)")}`, `
	Box
`)}`
const code7 = `${html("div", ` ${name("class")}=${string("bg=--primary-50 w=3.5 h=3.5")}`, `
	Box
`)}`
</script>

<div class={styles.$common.contents_div}>
	<span>By default, class names behave like inline styles</span>
	<span>Multiple styles or other attributes are also freely applicable in basic syntax</span>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="background:#08f  width:4em;height:4em!important">Box</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code1}</CodePage>
		</div>
	</div>
	<span>The default unit is applied to styles such as width and height</span>
	<a href="{base}/ref/custom#Default Unit" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Default Unit
	</a>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="background:#08f width:3.5 height:3.5">Box</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code2}</CodePage>
		</div>
	</div>
	<span>You can abbreviate and use properties with shorthands</span>
	<a href="{base}/ref/custom#Shorthand for Properties" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Shorthand for Properties
	</a>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="bg:blue w:3.5 h:3.5">Box</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code3}</CodePage>
		</div>
	</div>
	<span>Because class names use spaces( ) as delimiters, values that contain spaces should use underscores(_) instead of spaces</span>
	<span>A colon(:) can be included in the class name, but can be replaced by an equal sign(=) depending on your preference</span>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="bd=2px_solid_red bg=#08f w=3.5 h=3.5">Box</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code4}</CodePage>
		</div>
	</div>
	<span>You can abbreviate and use value too with shorthands</span>
	<a href="{base}/ref/custom#Shorthand for Values" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Shorthand for Values
	</a>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="bg=#08f w=3.5 h=3.5">
				<span class="fs=1.5 bold">Box</span>
			</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code5}</CodePage>
		</div>
	</div>
	<span>When you use minus(-) or plus(+) in the calc function, spaces are automatically added</span>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="bg=#08f w=calc(4em-1px) h=calc(4em+1px)">Box</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code6}</CodePage>
		</div>
	</div>
	<span>Values starting with two hyphens automatically wrap the var function</span>
	<div class="flex jc=left m=1_0_2_0">
		<div class="flex m=0_1">
			<div class="bg=--primary-50 w=3.5 h=3.5">Box</div>
		</div>
		<div class="fsk=1">
			<CodePage>{@html code7}</CodePage>
		</div>
	</div>
</div>