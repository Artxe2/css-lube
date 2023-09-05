<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import ComponentTabView from "organs/$common/utils/ComponentTabView.svelte"
import LoadingCircle from "organs/$common/animations/LoadingCircle.svelte"
import {
	html, keyword, name, string 
} from "js/highlighter.js"
</script>

<ComponentTabView>
	<div class="flex jc=center">
		<div class="flex ai=center w=fit-content p=1 br=1">
			<LoadingCircle />
			<div class="w=1"></div>
			<div class="fs=.75">
				<LoadingCircle />
			</div>
			<div class="w=1"></div>
			<div class="fs=.5">
				<LoadingCircle />
			</div>
			<div class="w=1"></div>
			<div class="fs=.25">
				<LoadingCircle />
			</div>
		</div>
	</div>
	<CodePage is_code>{@html
`${html("script", ` ${name("lang")}=${string("ts")}`, `
${keyword("import")} ${name("LoadingCircle")} ${keyword("from")} ${string("src/instant-ui/animations/LoadingCircle.svelte")}
`)}

${html("div", ` ${name("class")}=${string("flex ai=center w=fit-content p=1 br=1")}`, `
	${html("LoadingCircle", " ", false)}
	${html("div", ` ${name("class")}=${string("w=1")}`, "")}
	${html("div", ` ${name("class")}=${string("fs=.75")}`, `
		${html("LoadingCircle", " ", false)}
	`)}
	${html("div", ` ${name("class")}=${string("w=1")}`, "")}
	${html("div", ` ${name("class")}=${string("fs=.5")}`, `
		${html("LoadingCircle", " ", false)}
	`)}
	${html("div", ` ${name("class")}=${string("w=1")}`, "")}
	${html("div", ` ${name("class")}=${string("fs=.25")}`, `
		${html("LoadingCircle", " ", false)}
	`)}
`)}`
	}</CodePage>
</ComponentTabView>