<script>
import styles from "js/styles.js"
import { onMount } from "svelte"
import LoadingCircle from "organs/$common/animations/LoadingCircle.svelte"
import { theme$ } from "parts/$common/store.js"

let is_loading = true

/** @type {HTMLDivElement} */
let container

/** @type {import("monaco-editor").editor.IStandaloneCodeEditor} */
let editor
let content = `<div class="ta=center">
	<div class="fs=2 bold">
		Hello
	</div>
</div>`
onMount(() => {
	self.MonacoEnvironment = {
		getWorkerUrl: () => "https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js"
	}
	import("monaco-editor")
		.then(monaco => {
			editor = monaco.editor.create(container, {
				automaticLayout: true,
				language: "html",
				minimap: {
					enabled: false,
				},
				theme: "vs-dark",
				value: content
			})
			is_loading = false
			editor.getModel()?.onDidChangeContent(() => content = editor.getValue())
			theme$.subscribe(theme => {
				monaco.editor.setTheme("vs-" + theme.toLowerCase())
			})
		})
	return () => editor?.dispose()
})
</script>

<div class="flex h=100% xw=100%
		@!sm@column">
	<div class="flex
			w=100% @sm@w=40% 
			@!sm@h=30%">
		<div class="fg=1 relative bd=1px_solid p=1 oy=auto
				bg=--primary-90 @dark@bg=--primary-10
				{styles.scrollbar.primary}">
			{@html content}
		</div>
	</div>
	<div bind:this={container}
			class="fg=1 pt=1
			bg=#fff @dark@bg=--cod-gray
			xw=99.99% @sm@xw=60%
			@!sm@xh=70%">
		{#if is_loading} 
		<div class="flex h=100% jc=center ai=center">
			<LoadingCircle />
		</div>
		{/if}
	</div>
</div>