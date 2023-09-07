<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import { CarouselSlider } from "lube-ui"
import ComponentTabView from "organs/$common/utils/ComponentTabView.svelte"
import {
	bracket, html, keyword, name, string 
} from "js/highlighter.js"
</script>

<ComponentTabView>
	<CarouselSlider classs="h=3 op=.5
			::-webkit-scrollbar/none">
		<div class="w=10% h=100% bg=red ta=center">red</div>
		<div class="w=20% h=100% bg=orange ta=center">orange</div>
	</CarouselSlider>
	<div>
		<CodePage is_code>{@html
`${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${bracket("{")} ${name("CarouselSlider")} ${bracket("}")} ${keyword("from")} ${string("lube-ui")}
`)}

${html("CarouselSlider", ` ${name("classs")}=${string(`h=3 op=.5
		::-webkit-scrollbar/none`)}`, `
	${html("div", ` ${name("class")}=${string("w=10% h=100% bg=red ta=center")}`, "red")}
	${html("div", ` ${name("class")}=${string("w=20% h=100% bg=orange ta=center")}`, "orange")}
`)}`
		}</CodePage>
	</div>
</ComponentTabView>