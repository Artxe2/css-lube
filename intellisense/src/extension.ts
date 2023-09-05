import * as vscode from "vscode"

// eslint-disable-next-line max-len
const class_name_regex = /(?<=class=|className=)(?:'[-+=:;*/.,()!@#%"\w\t\r\n \\]*|"[-+=:;*/.,()!@#%'\w\t\r\n \\]*)$/
function get_class_name(document: vscode.TextDocument, position: vscode.Position) {
	const text = document.getText()
	let index = 0
	for (let i = 0; i < position.line; i++) {
		while (text.charAt(index++) !== "\n");
	}
	return class_name_regex.exec(text.slice(0, index + position.character))?.[0]
}
const shorthand_for_properties = new Map(
	vscode.workspace.getConfiguration()
		.get("css-lube.custom.shorthand_for_properties") as [string, string][]
)
const shorthand_for_values = new Map(
	vscode.workspace.getConfiguration()
		.get("css-lube.custom.shorthand_for_values") as [string, string][]
)
const shorthand_for_media_condition = new Map(
	vscode.workspace.getConfiguration()
		.get("css-lube.custom.shorthand_for_media_condition") as [string, string][]
)
const selector = ["html", "javascriptreact", "svelte", "typescriptreact", "vue"]
const trigger_characters = ["\"", "'", " ", "/", ";"]
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(selector, {
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
					return [...keys]
				}
			}
		}, ...trigger_characters),
		vscode.languages.registerCompletionItemProvider(selector, {
			provideCompletionItems(
				document: vscode.TextDocument,
				position: vscode.Position,
			) {
				const class_name = get_class_name(document, position)
				if (class_name != null && /(?:^.|[ ;/@])$/.test(class_name)) {
					const values = [...shorthand_for_values].map(([k, v]) => {
						const comp = new vscode.CompletionItem(v)
						comp.insertText = k
						comp.kind = vscode.CompletionItemKind.Value
						comp.detail = `${k} * * * shorthandValues of css-lube`
						comp.sortText = v
						return comp
					})
					return [...values]
				}
			}
		}, ...trigger_characters),
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
		),
	)
}
