<script lang="ts">
import CodePage from "organs/$common/utils/CodePage.svelte"
import { CarouselSlider } from "lube-ui"
import ComponentTabView from "organs/$common/utils/ComponentTabView.svelte"
import { bracket, declare, func, html, keyword, name, number, string, type } from "ts/highlighter"

let align: "" | "start" |"center" | "end" = "center"
let snap: (direction: number, snapAlign?: "start" |"center" | "end") => void
</script>

<ComponentTabView>
	<div>
		<CarouselSlider bind:snap
				bind:align
				classs="flex h=3 op=.5 ::-webkit-scrollbar/none"
				duration={200}>
			<div class="w=10% h=100% bg=red ta=center">red</div>
			<div class="w=20% h=100% bg=orange ta=center">orange</div>
			<div class="w=30% h=100% bg=yellow ta=center">yellow</div>
			<div class="w=40% h=100% bg=green ta=center">green</div>
			<div class="w=50% h=100% bg=blue ta=center">blue</div>
			<div class="w=60% h=100% bg=navy ta=center">navy</div>
			<div class="w=70% h=100% bg=purple ta=center">purple</div>
		</CarouselSlider>
		<div class="h=1"></div>
		<div class="flex jc=space-between g=1
				>button/flex=auto">
			<button class="bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
					:hover/bg=--havelock-blue"
					on:click={() => snap(-1)}>PREV</button>
			<button class="bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
					:hover/bg=--havelock-blue"
					on:click={() => snap(0, "start")}>START</button>
			<button class="bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
					:hover/bg=--havelock-blue"
					on:click={() => snap(0, "center")}>CENTER</button>
			<button class="bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
					:hover/bg=--havelock-blue"
					on:click={() => snap(0, "end")}>END</button>
			<button class="bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
					:hover/bg=--havelock-blue"
					on:click={() => snap(1)}>NEXT</button>
		</div>
	</div>
	<CodePage isCode>{@html
`${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${bracket("{")} ${name("CarouselSlider")} ${bracket("}")} ${keyword("from")} ${string("lube-ui")}

${declare("let")} ${name("align")}: ${string("")} | ${string("start")} | ${string("center")} | ${string("end")} = ${string("center")}
${declare("let")} ${func("snap")}: ${bracket("(")}${name("direction")}: ${type("number")}, ${name("snapAlign")}: ${string("start")} | ${string("center")} | ${string("end")}${bracket(")")} ${declare("=>")} ${type("void")}
`)}

${html("div", "", `
	${html("CarouselSlider", ` ${keyword("bind")}:${func("snap")}
				${keyword("bind")}:${name("align")}
				${name("classs")}=${string("flex h=3 op=.5 ::-webkit-scrollbar/none")}
				${name("duration")}=${bracket("{")}${number(200)}${bracket("}")}`, `
		${html("div", ` ${name("class")}=${string("w=10% h=100% bg=red ta=center")}`, "red")}
		${html("div", ` ${name("class")}=${string("w=20% h=100% bg=orange ta=center")}`, "orange")}
		${html("div", ` ${name("class")}=${string("w=30% h=100% bg=yellow ta=center")}`, "yellow")}
		${html("div", ` ${name("class")}=${string("w=40% h=100% bg=green ta=center")}`, "green")}
		${html("div", ` ${name("class")}=${string("w=50% h=100% bg=blue ta=center")}`, "blue")}
		${html("div", ` ${name("class")}=${string("w=60% h=100% bg=navy ta=center")}`, "navy")}
		${html("div", ` ${name("class")}=${string("w=70% h=100% bg=purple ta=center")}`, "purple")}
	`)}
	${html("div", ` ${name("class")}=${string("h=1")}`, "")}
	${html("div", ` ${name("class")}=${string(`flex jc=space-between g=1
			>button/flex=auto`)}`, `
		${html("button", ` ${name("class")}=${string(`bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${keyword("on")}:${type("click")}=${bracket("{")}${bracket("()", 1)} ${declare("=>")} ${func("snap")}${bracket("(", 1)}${number(-1)}${bracket(")", 1)}${bracket("}")}`, "PREV")}
		${html("button", ` ${name("class")}=${string(`bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${keyword("on")}:${type("click")}=${bracket("{")}${bracket("()", 1)} ${declare("=>")} ${func("snap")}${bracket("(", 1)}${number(0)}, ${string("start")}${bracket(")", 1)}${bracket("}")}`, "START")}
		${html("button", ` ${name("class")}=${string(`bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${keyword("on")}:${type("click")}=${bracket("{")}${bracket("()", 1)} ${declare("=>")} ${func("snap")}${bracket("(", 1)}${number(0)}, ${string("center")}${bracket(")", 1)}${bracket("}")}`, "CENTER")}
		${html("button", ` ${name("class")}=${string(`bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${keyword("on")}:${type("click")}=${bracket("{")}${bracket("()", 1)} ${declare("=>")} ${func("snap")}${bracket("(", 1)}${number(0)}, ${string("end")}${bracket(")", 1)}${bracket("}")}`, "END")}
		${html("button", ` ${name("class")}=${string(`bg=--primary-50 w=6.25 h=1.5 br=.25 fs=.75
				:hover/bg=--havelock-blue`)}
				${keyword("on")}:${type("click")}=${bracket("{")}${bracket("()", 1)} ${declare("=>")} ${func("snap")}${bracket("(", 1)}${number(1)}${bracket(")", 1)}${bracket("}")}`, "NEXT")}
	`)}
`)}`
	}</CodePage>
</ComponentTabView>