<script lang="ts">
import styles from "ts/styles"
import type monaco from "monaco-editor/esm/vs/editor/editor.api"
import { onMount } from "svelte"
import LoadingCircle from "organs/@common/animations/LoadingCircle.svelte"
    import { theme$ } from "parts/@common/store";

let isLoading = true
let container: HTMLDivElement
let editor: monaco.editor.IStandaloneCodeEditor
let content = `<div class="ta=center">
	<div class="fs=2 bold">
		Hello
	</div>
</div>`
onMount( () => {
	self.MonacoEnvironment = {
		getWorkerUrl: () => "https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js"
	}
	import('monaco-editor')
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
			isLoading = false
			editor.getModel()?.onDidChangeContent( () => content = editor.getValue() )
			theme$.subscribe(theme => {
				monaco.editor.setTheme("vs-" + theme.toLowerCase())
			})
		})
	return () => editor?.dispose()
} )
</script>

<div class="flex h=100% xw=100%
		@max-width=639px@column">
	<div class="relative w=40% bd=1px_solid p=1 oy=auto
			bg=--primary-90 @dark@bg=--primary-10
			@max-width=639px@w=100% @max-width=639px@h=30%
			{styles.scrollbar.primary}">
		{@html content}
	</div>
	<div bind:this={container}
			class="fg=1 fsk=1 xw=60% pt=1 tt=background_.3s
			bg=#fff @dark@bg=--cod-gray
			@max-width=639px@xw=100%
			@max-width=639px@xh=70%
			_.monaco-editor_*/tt=background_.3s">
		{#if isLoading} 
			<div class="flex h=100% jc=center ai=center">
				<LoadingCircle />
			</div>
		{/if}
	</div>
</div>