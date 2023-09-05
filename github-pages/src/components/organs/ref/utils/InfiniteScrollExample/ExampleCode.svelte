<script>
import {
	bracket, comment, declare, func, html, keyword, name, number, string, type 
} from "js/highlighter.js"
import CodePage from "organs/$common/utils/CodePage.svelte"
import IdeTypescript from "cells/typography/IdeTypescript.svelte"

const code1 = `${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${name("LoadingCircle")} ${keyword("from")} ${string("src/instant-ui/animations/LoadingCircle.svelte")}
${keyword("import")} ${name("styles")} ${keyword("from")} ${string("js/styles.js")}
${keyword("import")} ${bracket("{")} ${name("contents$")} ${bracket("}")} ${keyword("from")} ${string("parts/ref/store")}
${keyword("import")} ${bracket("{")} ${name("onDestroy")}, ${name("onMount")} ${bracket("}")} ${keyword("from")} ${string("svelte")}
${keyword("import")} ${bracket("{")} ${name("H2")}, ${name("InfiniteScroll")} ${bracket("}")} ${keyword("from")} ${string("lube-ui")}

${declare("let")} ${name("loading")} = ${number(1)} ${comment("// 0: in progress, 1: none, 2: error")}
${declare("const")} ${name("lorem_api", true)}: ${bracket("(")}${name("i")}: ${type("number")}, ${name("n")}: ${type("number")}${bracket(")")} ${declare("=>")} ${type("Promise")}${bracket("<")}${type("any")}${bracket(">")} = ${bracket("(")}${name("i")}: ${type("number")}, ${name("n")}: ${type("number")}${bracket(")")} ${declare("=>")} ${declare("new")} ${type("Promise")}${bracket("(")}${bracket("(", 1)}${func("resolve")}, ${func("reject")}${bracket(")", 1)} ${declare("=>")} ${func("setTimeout")}${bracket("(", 1)}${bracket("()", 2)} ${declare("=>")} ${bracket("{", 2)}
	${declare("const")} ${name("r", true)} = ${name("Math")}.${func("random")}${bracket("()")}
	${keyword("if")} ${bracket("(")}${name("i")} && ${name("r", true)} < ${number(0.3)}${bracket(") {")}
		${func("reject")}${bracket("(", 1)}${string("`error:", false)} ${declare("${")}${name("r", true)}${declare("}")} ${string("< 0.3`", false)}${bracket(")", 1)}
	${bracket("}")} ${keyword("else")} ${bracket("{")}
		${declare("const")} ${name("contents", true)} = ${bracket("[]", 1)}
		${keyword("while")} ${bracket("(", 1)}${name("n")}-- > ${number(0)}${bracket(") {", 1)}
			${name("contents", true)}.${func("push")}${bracket("(", 2)}${bracket("{")} ${name("title:")} ${string("title ")} + ++${name("i")}, ${name("content:")} ${string("Lorem Ipsum is . . . . . . of Lorem Ipsum.")} ${bracket("}")}${bracket(")", 2)}
		${bracket("}", 1)}
		${func("resolve")}${bracket("(", 1)}${name("contents", true)}${bracket(")", 1)}
	${bracket("}", 0)}
${bracket("}", 2)}, ${name("i")} ? ${number(600)} : ${number(0)}${bracket(")", 1)}${bracket(")")}
${declare("const")} ${func("load_contents")} = ${bracket("()")} ${declare("=>")} ${bracket("{")}
	${keyword("if")} ${bracket("(", 1)}${name("loading")}${bracket(") {", 1)}
		${name("loading")} = ${number(0)}
		${name("lorem_api", true)}.${func("promise")}${bracket("(", 2)}${name("$contents$")}.${name("length")}, ${number(5)}${bracket(")", 2)}
			.${func("set")}${bracket("(", 2)}${name("value")} ${declare("=>")} ${bracket("{")}
				${name("$contents$")} = ${name("$contents$")}.${func("concat")}${bracket("(", 1)}${name("value")}${bracket(")", 1)}
				${name("loading")} = ${number(1)}
			${bracket("}")}${bracket(")", 2)}
			.${func("catch")}${bracket("(", 2)}${bracket("()")} ${declare("=>")} ${name("loading")} = ${number(2)}${bracket(")", 2)}
	${bracket("}", 1)}
${bracket("}")}
${func("onMount")}${bracket("(")}${bracket("()", 1)} ${declare("=>")} ${name("lorem_api", true)}.${func("promise")}${bracket("(", 1)}${number(0)}, ${number(10)}${bracket(")", 1)}.${func("then")}${bracket("(", 1)}${name("value")} ${declare("=>")} ${name("$contents$")} = ${name("value")}${bracket(")", 1)}${bracket(")")}
${func("onDestroy")}${bracket("(")}${bracket("()", 1)} ${declare("=>")} ${name("$contents$")} = ${bracket("[]", 1)}${bracket(")")}
`)}

${html("InfiniteScroll", ` ${name("classs")}=${string("\"bd=1px_solid_black xh=15 p=1", false)} ${bracket("{", 2)}${name("styles")}.${name("scrollbar")}.${name("primary")}${bracket("}", 2)}${string("\"", false)}
		${name("onlast")}=${bracket("{")}${func("load_contents")}${bracket("}")}
		${name("ready")}=${bracket("{")}${name("loading")} === ${number(1)}${bracket("}")}`, `
	${bracket("{")}#${keyword("each")} ${name("$contents$")} ${keyword("as")} ${name("c")}${bracket("}")}
		${html("div", "", `
			${html("H1", "", `${bracket("{")}${name("c")}.${name("title")}${bracket("}")}`)}
			${html("span", "", `${bracket("{")}${name("c")}.${name("content")}${bracket("}")}`)}
		`)}
	${bracket("{")}/${keyword("each")}${bracket("}")}
	${bracket("{")}#${keyword("if")} !${name("loading")}${bracket("}")}
		${html("div", ` ${name("class")}=${string("flex h=6.5 jc=center")}`, `
			${html("LoadingCircle", "", false)}
		`)}
	${bracket("{")}:${keyword("else if")} ${name("loading")} === ${number(2)}${bracket("}")}
		${html("div", ` ${name("class")}=${string("relative flex h=6.5 jc=center ai=center")}`, `
			${html("div", ` ${name("class")}=${string("w=6 absolute")}`, `
				${html("svg", ` ${name("classs")}=${string("f=#88888888")}`, `
					${html("use", ` ${name("xlink")}:${name("xlink")}=${string(`${declare("{")}base${declare("}")}/icons.svg#refresh`)}`, false)}
				`)}
			`)}
			${html("button", ` ${name("class")}=${string(`absolute fs=1.5 bold
					ts=0_0_.5_#fff @dark@ts=0_0_.5_#000`)} ${keyword("on")}:${type("click")}=${bracket("{")}${func("load_contents")}${bracket("}")}`, `
				server error
			`)}
		`)}
	${bracket("{")}/${keyword("if")}${bracket("}")}
`)}`
const code2 = `

${keyword("import")} ${bracket("{")} ${name("writable")}, ${keyword("type")} ${name("Writable")} ${bracket("}")} ${keyword("from")} ${string("svelte/store")}

${keyword("export")} ${declare("const")} ${name("contents$", true)}: ${type("Writable")}${bracket("<")}${bracket("{", 1)} ${name("title")}: ${type("string")}, ${name("content")}: ${type("string")} ${bracket("}[]", 1)}${bracket(")")} = ${func("writable")}${bracket("(")}${bracket("[]", 1)}${bracket(")")}`
const code3 = `

${keyword("export default")} ${bracket("{")}
	${name("scrollbar:")} ${bracket("{", 1)}
		${name("primary:")} ${string("::-webkit-scrollbar/w=.5 ::-webkit-scrollbar-track/bg=--primary-70 ::-webkit-scrollbar-thumb/bg=--primary-50;br=.25")}
	${bracket("}", 1)}
${bracket("}")}`
</script>

<CodePage is_code>{@html code1}</CodePage>
<div class="h=1"></div>
<CodePage is_code>
	<IdeTypescript name="store" />
	{@html code2}
</CodePage>
<div class="h=1"></div>
<CodePage is_code>
	ts / <IdeTypescript name="styles" />
	{@html code3}
</CodePage>