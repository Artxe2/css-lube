<script>
/** @type {{ content?: string }} */
let { content = "" } = $props()

import styles from "js/styles.js"
import LoadingCircle from "organs/$common/animations/LoadingCircle.svelte"
import { theme } from "parts/$common/$.svelte.js"
import { untrack } from "svelte"

let is_loading = $state(true)
/** @type {HTMLDivElement} */
let container
let monaco = /** @type {import("monaco-editor").editor.IStandaloneCodeEditor} */($state())/**/

const init_monaco = () => {
	untrack(
		async () => {
			self.MonacoEnvironment = {
				getWorkerUrl: () => "https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js"
			}
			monaco = (await import("monaco-editor")).editor.create(
				container,
				{
					automaticLayout: true,
					language: "html",
					minimap: { enabled: false },
					theme: "vs-light",
					value: content
				}
			)
			is_loading = false
			monaco.getModel()?.onDidChangeContent(
				() => content = monaco.getValue()
			)
		}
	)
	return () => monaco?.dispose()
}
const update_theme = () => {
	monaco?.updateOptions(
		{
			theme: "vs-" + theme.$.toLowerCase()
		}
	)
}

$effect.pre(init_monaco)
$effect.pre(update_theme)
</script>

<div class="flex h=100% xw=100%
		@!md@column">
	<div class="flex
			w=100% @md@w=45%
			@!md@h=40%">
		<div class="fg=1 flex jc=center relative w=100% p=1 o=auto
				bg=--primary-90 @dark@bg=--primary-10
				{styles.scrollbar.primary}">
			{@html content}
		</div>
	</div>
	<div bind:this={container}
			class="fg=1 pt=1
			bg=#fff @dark@bg=--cod-gray
			xw=99.99% @md@xw=60%
			@!md@xh=70%">
		{#if is_loading}
		<div class="flex h=100% jc=center ai=center">
			<LoadingCircle />
		</div>
		{/if}
	</div>
</div>