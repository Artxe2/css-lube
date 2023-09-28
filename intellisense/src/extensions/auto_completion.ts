import * as vscode from "vscode"

import {
	shorthand_for_media_condition,
	shorthand_for_properties,
	shorthand_for_values
} from "../helper/get_config.js"

import { parseDom } from "dom-eater"

export default (context: vscode.ExtensionContext) => {
	function is_in_class_name(document: vscode.TextDocument, position: vscode.Position) {
		const text = document.getText()
		let index = 0
		for (let i = 0; i < position.line; i++) {
			while (text.charAt(index++) !== "\n");
		}
		const ast = parseDom(text.slice(0, index + position.character)).ast
		const last_node = ast[ast.length - 1]
		if (last_node.type != "Element" || !last_node.attributes.length) return
		const last_attr = last_node.attributes[last_node.attributes.length - 1]
		return last_attr.name == "class" || last_attr.name == "className" || last_attr.name == "classs"
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
					if (is_in_class_name(document, position)) {
						const keys = [...shorthand_for_properties].map(([k, v]) => {
							const comp = new vscode.CompletionItem(v + ":?")
							comp.insertText = k + "="
							comp.kind = vscode.CompletionItemKind.EnumMember
							comp.detail = `${k}= * * * shorthand_for_properties of css-lube`
							comp.sortText = v
							return comp
						})
						const values = [...shorthand_for_values].map(([k, v]) => {
							const comp = new vscode.CompletionItem(v)
							comp.insertText = k
							comp.kind = vscode.CompletionItemKind.Value
							comp.detail = `${k} * * * shorthand_for_values of css-lube`
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
					if (is_in_class_name(document, position)) {
						const medias = [...shorthand_for_media_condition].map(([k, v]) => {
							const comp = new vscode.CompletionItem("@media " + v)
							comp.insertText = "@" + k + "@"
							comp.kind = vscode.CompletionItemKind.Constructor
							comp.detail = `@${k}@ * * * shorthand_for_media_condition of css-lube`
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