<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import ComponentTabView from "organs/$common/utils/ComponentTabView.svelte"
import { CarouselSlider } from "lube-ui"
import {
	bracket, html, keyword, name, string 
} from "js/highlighter.js"
</script>

<ComponentTabView>
	<CarouselSlider classs="op=.5
			::-webkit-scrollbar/none">
		<div class="w=90% h=100% bg=red ta=center">red</div>
		<div class="w=90% h=100% bg=orange ta=center">orange</div>
		<div class="w=90% h=100% bg=yellow ta=center">yellow</div>
		<div class="w=90% h=100% bg=green ta=center">green</div>
		<div class="w=90% h=100% bg=blue ta=center">blue</div>
		<div class="w=90% h=100% bg=navy ta=center">navy</div>
		<div class="w=90% h=100% bg=purple ta=center">purple</div>
	</CarouselSlider>
	<CodePage is_code>{@html
`${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${bracket("{")} ${name("CarouselSlider")} ${bracket("}")} ${keyword("from")} ${string("lube-ui")}
`)}

${html("CarouselSlider", ` ${name("classs")}=${string(`op=.5
		::-webkit-scrollbar/none`)}`, `
	${html("div", ` ${name("class")}=${string("w=90% h=100% bg=red ta=center")}`, "red")}
	${html("div", ` ${name("class")}=${string("w=90% h=100% bg=orange ta=center")}`, "orange")}
	${html("div", ` ${name("class")}=${string("w=90% h=100% bg=yellow ta=center")}`, "yellow")}
	${html("div", ` ${name("class")}=${string("w=90% h=100% bg=green ta=center")}`, "green")}
	${html("div", ` ${name("class")}=${string("w=90% h=100% bg=blue ta=center")}`, "blue")}
	${html("div", ` ${name("class")}=${string("w=90% h=100% bg=navy ta=center")}`, "navy")}
	${html("div", ` ${name("class")}=${string("w=90% h=100% bg=purple ta=center")}`, "purple")}
`)}`
	}</CodePage>
</ComponentTabView>