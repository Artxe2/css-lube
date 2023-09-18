import * as vscode from "vscode"

import {
	shorthand_for_media_condition,
	shorthand_for_properties,
	shorthand_for_values
} from "../helper/get_config"

export default (context: vscode.ExtensionContext) => {
	const class_name_regex = /(?<=class(?:Name)?=['"])[-+=:;*/.,()!@#%"\w\t\r\n \\]*$/
	function get_class_name(document: vscode.TextDocument, position: vscode.Position) {
		const text = document.getText()
		let index = 0
		for (let i = 0; i < position.line; i++) {
			while (text.charAt(index++) !== "\n");
		}
		return class_name_regex.exec(text.slice(0, index + position.character))?.[0]
	}
	const selector = ["html", "javascriptreact", "svelte", "typescriptreact", "vue"]
	const trigger_characters = ["\"", "'", " ", "/", ";"]

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			selector,
			{
				provideCompletionItems(
					document: vscode.TextDocument,
					position: vscode.Position
				) {
					const class_name = get_class_name(document, position)
					if (class_name != null && /(?:^.|[ ;/@])$/.test(class_name)) {
						const keys = [...shorthand_for_properties].map(([k, v]) => {
							const comp = new vscode.CompletionItem(v + ":?")
							comp.insertText = k + "="
							comp.kind = vscode.CompletionItemKind.EnumMember
							comp.detail = `${k}= * * * shorthandKeys of css-lube`
							comp.sortText = v
							return comp
						})
						const values = [...shorthand_for_values].map(([k, v]) => {
							const comp = new vscode.CompletionItem(v)
							comp.insertText = k
							comp.kind = vscode.CompletionItemKind.Value
							comp.detail = `${k} * * * shorthandValues of css-lube`
							comp.sortText = v
							return comp
						})
						return [...keys, ...values]
					}
				}
			},
			...trigger_characters
		),
		vscode.languages.registerCompletionItemProvider(
			selector,
			{
				provideCompletionItems(
					document: vscode.TextDocument,
					position: vscode.Position
				) {
					const class_name = get_class_name(document, position)
					if (class_name != null && /(?:^.| )$/.test(class_name)) {
						const medias = [...shorthand_for_media_condition].map(([k, v]) => {
							const comp = new vscode.CompletionItem("@media " + v)
							comp.insertText = "@" + k + "@"
							comp.kind = vscode.CompletionItemKind.Constructor
							comp.detail = `@${k}@ * * * shorthandMedias of css-lube`
							comp.sortText = v
							comp.command = {
								"command": "editor.action.triggerSuggest",
								"title": "Re-trigger completions..."
							}
							return comp
						})
						return [...medias]
					}
				}
			},
			...trigger_characters
		)
	)
}
