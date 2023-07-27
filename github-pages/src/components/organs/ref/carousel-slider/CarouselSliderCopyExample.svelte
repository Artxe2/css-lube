<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { CarouselSlider } from "svelte-ts-lube"
import ComponentTabView from "organs/ref/ComponentTabView.svelte"
import { bracket, html, keyword, name, string } from "ts/highlighter"
</script>

<ComponentTabView>
	<CarouselSlider classs="flex h=3 op=.5
			::-webkit-scrollbar/none">
		<div class="w=10% h=100% bg=red ta=center">red</div>
		<div class="w=20% h=100% bg=orange ta=center">orange</div>
	</CarouselSlider>
	<div>
		<CodePage isCode>{@html
`${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${bracket("{")} ${name("CarouselSlider")} ${bracket("}")} ${keyword("from")} ${string("svelte-ts-lube")}
`)}

${html("CarouselSlider", ` ${name("classs")}=${string(`flex h=3 op=.5
		::-webkit-scrollbar/none`)}`, `
	${html("div", ` ${name("class")}=${string("w=10% h=100% bg=red ta=center")}`, "red")}
	${html("div", ` ${name("class")}=${string("w=20% h=100% bg=orange ta=center")}`, "orange")}
`)}`
		}</CodePage>
	</div>
</ComponentTabView>