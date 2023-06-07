<script lang="ts">
import IRefresh from "cells/svgs/i_refresh.svelte"
import H1 from "cells/typography/H1.svelte"
import { contents$ } from "parts/ref/store"
import LoadingCircle from "organs/@common/animations/LoadingCircle.svelte"
import InfiniteScroll from "organs/@common/utils/InfiniteScroll.svelte"
import styles from "styles"
import { onDestroy, onMount } from "svelte"
import { bracket, comment, declare, func, html, keyword, name, number, string, type } from "ts/highlighter"
import ComponentTabView from "organs/ref/ComponentTabView.svelte"
import CodePage from "organs/@common/utils/CodePage.svelte"
import IdeTypescript from "cells/typography/IdeTypescript.svelte"

const code1 = `${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${name("H1")} ${keyword("from")} ${string("cells/typography/H1.svelte")}
${keyword("import")} ${name("InfiniteScroll")} ${keyword("from")} ${string("organs/@common/utils/InfiniteScroll.svelte")}
${keyword("import")} ${name("IRefresh")} ${keyword("from")} ${string("cells/svgs/i_refresh.svelte")}
${keyword("import")} ${name("LoadingCircle")} ${keyword("from")} ${string("src/instant-ui/animations/LoadingCircle.svelte")}
${keyword("import")} ${name("styles")} ${keyword("from")} ${string("src/styles")}
${keyword("import")} ${bracket("{")} ${name("contents$")} ${bracket("}")} ${keyword("from")} ${string("parts/ref/store")}
${keyword("import")} ${bracket("{")} ${name("onDestroy")}, ${name("onMount")} ${bracket("}")} ${keyword("from")} ${string("svelte")}

${declare("let")} ${name("loading")} = ${number(1)} ${comment("// 0: in progress, 1: none, 2: error")}
${declare("const")} ${name("loremApi", true)}: ${bracket("(")}${name("i")}: ${type("number")}, ${name("n")}: ${type("number")}${bracket(")")} ${declare("=>")} ${type("Promise")}${bracket("<")}${type("any")}${bracket(">")} = ${bracket("(")}${name("i")}: ${type("number")}, ${name("n")}: ${type("number")}${bracket(")")} ${declare("=>")} ${declare("new")} ${type("Promise")}${bracket("(")}${bracket("(", 1)}${func("resolve")}, ${func("reject")}${bracket(")", 1)} ${declare("=>")} ${func("setTimeout")}${bracket("(", 1)}${bracket("()", 2)} ${declare("=>")} ${bracket("{", 2)}
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
${declare("const")} ${func("loadContents")} = ${bracket("()")} ${declare("=>")} ${bracket("{")}
	${keyword("if")} ${bracket("(", 1)}${name("loading")}${bracket(") {", 1)}
		${name("loading")} = ${number(0)}
		${name("loremApi", true)}.${func("promise")}${bracket("(", 2)}${name("$contents$")}.${name("length")}, ${number(5)}${bracket(")", 2)}
			.${func("set")}${bracket("(", 2)}${name("value")} ${declare("=>")} ${bracket("{")}
				${name("$contents$")} = ${name("$contents$")}.${func("concat")}${bracket("(", 1)}${name("value")}${bracket(")", 1)}
				${name("loading")} = ${number(1)}
			${bracket("}")}${bracket(")", 2)}
			.${func("catch")}${bracket("(", 2)}${bracket("()")} ${declare("=>")} ${name("loading")} = ${number(2)}${bracket(")", 2)}
	${bracket("}", 1)}
${bracket("}")}
${func("onMount")}${bracket("(")}${bracket("()", 1)} ${declare("=>")} ${name("loremApi", true)}.${func("promise")}${bracket("(", 1)}${number(0)}, ${number(10)}${bracket(")", 1)}.${func("then")}${bracket("(", 1)}${name("value")} ${declare("=>")} ${name("$contents$")} = ${name("value")}${bracket(")", 1)}${bracket(")")}
${func("onDestroy")}${bracket("(")}${bracket("()", 1)} ${declare("=>")} ${name("$contents$")} = ${bracket("[]", 1)}${bracket(")")}
`)}

${html("InfiniteScroll", ` ${name("classs")}=${string('"bd=1px_solid_black xh=15', false)} ${bracket("{", 2)}${name("styles")}.${name("scrollbar")}.${name("primary")}${bracket("}", 2)}${string('"', false)}
		${name("onlast")}=${bracket("{")}${func("loadContents")}${bracket("}")}
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
				${html("IRefresh", ` ${name("classs")}=${string("f=#88888888")}`, false)}
			`)}
			${html("button", ` ${name("class")}=${string("absolute fs=1.5 bold")} ${keyword("on")}:${type("click")}=${bracket("{")}${func("loadContents")}${bracket("}")}`, "server error")}
		`)}
	${bracket("{")}/${keyword("if")}${bracket("}")}
`)}`
const code2 = `

${keyword("import")} ${bracket("{")} ${name("writable")}, ${keyword("type")} ${name("Writable")} ${bracket("}")} ${keyword("from")} ${string("svelte/store")}

${keyword("export")} ${declare("const")} ${name("contents$", true)}: ${type("Writable")}${bracket("<")}${bracket("{", 1)} ${name("title")}: ${type("string")}, ${name("content")}: ${type("string")} ${bracket("}[]", 1)}${bracket(")")} = ${func("writable")}${bracket("(")}${bracket("[]", 1)}${bracket(")")}`
const code3 = `

${keyword("export default")} ${bracket("{")}
	${name("scrollbar:")} ${bracket("{", 1)}
		${name("primary:")} ${string("::-webkit-scrollbar/w=.5 ::-webkit-scrollbar-track/bg=--primary-55 ::-webkit-scrollbar-thumb/bg=--primary;br=.25")}
	${bracket("}", 1)}
${bracket("}")}`

let loading = 1 // 0: in progress, 1: none, 2: error
const loremApi: (i: number, n: number) => Promise<any> = (i: number, n: number) => new Promise((resolve, reject) => setTimeout(() => {
	const r = Math.random()
	if (i && r < 0.3) {
		reject(`error: ${r} < 0.3`)
	} else {
		const contents = []
		while (n-- > 0) {
			contents.push({ title: "title " + ++i, content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." })
		}
		resolve(contents)
	}
}, i ? 600 : 0))
const loadContents = () => {
	if (loading) {
		loading = 0
		loremApi($contents$.length, 5)
			.then(value => {
				$contents$ = $contents$.concat(value)
				loading = 1
			})
			.catch(() => loading = 2)
	}
}
onMount(() => loremApi(0, 10).then(value => $contents$ = value))
onDestroy(() => $contents$ = [])
</script>

<ComponentTabView>
	<InfiniteScroll classs="bd=1px_solid_black xh=15 {styles.scrollbar.primary}"
			onlast={loadContents}
			ready={loading === 1}>
		{#each $contents$ as c}
			<div>
				<H1>{c.title}</H1>
				<span>{c.content}</span>
			</div>
		{/each}
		{#if !loading}
			<div class="flex h=6.5 jc=center">
				<LoadingCircle />
			</div>
		{:else if loading === 2}
			<div class="relative flex h=6.5 jc=center ai=center">
				<div class="w=6 absolute">
					<IRefresh classs="f=#88888888" />
				</div>
				<button class="absolute fs=1.5 bold" on:click={loadContents}>server error</button>
			</div>
		{/if}
	</InfiniteScroll>
	<div>
		<CodePage isCode>{@html code1}</CodePage>
		<div class="h=1"></div>
		<CodePage isCode>
			<IdeTypescript name="store" />
			{@html code2}
		</CodePage>
		<div class="h=1"></div>
		<CodePage isCode>
			styles / <IdeTypescript name="index" />
			{@html code3}
		</CodePage>
	</div>
</ComponentTabView>