<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import ComponentTabView from "organs/$common/utils/ComponentTabView.svelte"
import MorphingText from "organs/$common/animations/MorphingText.svelte"
import {
	bracket, escape_tag, html, keyword, name, number, string 
} from "js/highlighter.js"
</script>

<ComponentTabView>
	<div class="flex jc=center">
		<div class="flex jc=center fs=2 bold w=fit-content">
			<MorphingText
				array={[
					[ "<div class=\"c=red\">500ms<span>", 500 ],
					[ "<div class=\"c=orange\">1000ms<span>", 1000 ],
					[ "<div class=\"c=yellow\">1500ms<span>", 1500 ],
					[ "<div class=\"c=green\">2000ms<span>", 2000 ],
					[ "<div class=\"c=blue\">2500ms<span>", 2500 ],
					[ "<div class=\"c=navy\">3000ms<span>", 3000 ],
					[ "<div class=\"c=purple\">3500ms<span>", 3500 ]
				]}
				longest={6}
			/>
		</div>
	</div>
	<CodePage is_code>{@html
`${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${name("MorphingText")} ${keyword("from")} ${string("src/instant-ui/animations/MorphingText.svelte")}
`)}

${html("div", ` ${name("class")}=${string("fs=2 bold w=fit-content")}`, `
	${html("MorpingText", `
		${name("array")}=${bracket("{")}${bracket("[", 1)}
			${bracket("[", 2)} ${string(escape_tag("<div class=\"c=red\">500ms<span>"), "'")}, ${number(500)} ${bracket("]", 2)},
			${bracket("[", 2)} ${string(escape_tag("<div class=\"c=orange\">1000ms<span>"), "'")}, ${number(1000)} ${bracket("]", 2)},
			${bracket("[", 2)} ${string(escape_tag("<div class=\"c=yellow\">1500ms<span>"), "'")}, ${number(1500)} ${bracket("]", 2)},
			${bracket("[", 2)} ${string(escape_tag("<div class=\"c=green\">2000ms<span>"), "'")}, ${number(2000)} ${bracket("]", 2)},
			${bracket("[", 2)} ${string(escape_tag("<div class=\"c=blue\">2500ms<span>"), "'")}, ${number(2500)} ${bracket("]", 2)},
			${bracket("[", 2)} ${string(escape_tag("<div class=\"c=navy\">3000ms<span>"), "'")}, ${number(3000)} ${bracket("]", 2)},
			${bracket("[", 2)} ${string(escape_tag("<div class=\"c=purple\">3500ms<span>"), "'")}, ${number(3500)} ${bracket("]", 2)},
		${bracket("]", 1)}${bracket("}")}
		${name("longest")}=${bracket("{")}${number(6)}${bracket("}")}
	`, false)}
`)}`
	}</CodePage>
</ComponentTabView>