import * as vscode from "vscode"

import { AstNode, String } from "dom-eater/@types"

import compile_style from "../helper/compile_style.js"
import parse_dom from "../helper/parse_dom.js"

export default (context: vscode.ExtensionContext) => {
	const decorator = vscode.window.createTextEditorDecorationType
	let timeout: NodeJS.Timeout|0
	let active_editor = vscode.window.activeTextEditor

	const token_regex = /(?<=^| |\t)[^ \r\t]+/g
	const token_decorator = decorator({})
	const media_query_decorator = decorator({
		border: "solid #b67bb188",
		borderWidth: "0 0 3px 0"
	})
	const selector_decorator = decorator({
		border: "solid #d7ba7d88",
		borderWidth: "0 0 3px 0"
	})
	const property_decorator = decorator({
		border: "solid #9cdcfe88",
		borderWidth: "0 0 3px 0"
	})
	const value_decorator = decorator({
		border: "solid #ce917888",
		borderWidth: "0 0 3px 0"
	})
	const check_is_special = (cname: string, index: number) => {
		const c = cname[index]
		return c != "-" && (c < "a" || c > "z")
	}
	function analysis_class_name(text: string, str_node: String, class_names: { text: string, start: number }[]) {
		let index = str_node.start + 1
		for (const script of str_node.scripts) {
			if (script.start > index) {
				class_names.push({
					text: text.slice(index, script.start),
					start: index
				})
			}
			for (const string of script.strings) {
				analysis_class_name(text, string, class_names)
			}
			index = script.end
		}
		if (index < str_node.end - 1) {
			class_names.push({
				text: text.slice(index, str_node.end - 1),
				start: index
			})
		}
	}
	function dfs_ast(text: string, node: AstNode, class_names: { text: string, start: number }[]) {
		if (node.type == "Element") {
			for (const attr of node.attributes) {
				if (attr.name == "class" || attr.name == "className" || attr.name == "classs") {
					if (typeof attr.value != "boolean") {
						if (attr.value.type == "String") {
							analysis_class_name(text, attr.value, class_names)
						} else {
							for (const string of attr.value.strings) {
								analysis_class_name(text, string, class_names)
							}
						}
					}
				}
			}
			for (const child of node.children) {
				dfs_ast(text, child, class_names)
			}
		}
	}
	async function update_decorations() {
		if (!active_editor) return
		const text = active_editor.document.getText()
		const ast = parse_dom(active_editor.document.fileName, text)
		const cname_array: vscode.DecorationOptions[] = []
		const media_query_array: vscode.Range[] = []
		const selector_array: vscode.Range[] = []
		const property_array: vscode.Range[] = []
		const value_array: vscode.Range[] = []
		const class_names: { text: string, start: number }[] = []
		for (const node of ast) {
			dfs_ast(text, node, class_names)
		}
		let match: RegExpExecArray|null
		for (const { text: class_name, start: class_name_index } of class_names) {
			while ((match = token_regex.exec(class_name))) {
				const cname = match[0]
				const style = compile_style(cname)
				if (!style) continue
				const cname_index = class_name_index + match.index
				const cname_start = active_editor.document.positionAt(cname_index)
				const cname_end = active_editor.document.positionAt(cname_index + cname.length)
				let parse_index = 0
				if (cname[0] == "@") {
					const index = cname.indexOf("@", 2)
					if (index >= 0) {
						const media_query_start = active_editor.document.positionAt(cname_index)
						const media_query_end = active_editor.document.positionAt(cname_index + index + 1)
						media_query_array.push(new vscode.Range(media_query_start, media_query_end))
						parse_index = index + 1
					}
				}
				if (check_is_special(cname, parse_index)) {
					const index = cname.indexOf("/", parse_index + 1)
					if (index >= 0) {
						const selector_start = active_editor.document.positionAt(cname_index + parse_index)
						const selector_end = active_editor.document.positionAt(cname_index + index + 1)
						selector_array.push(new vscode.Range(selector_start, selector_end))
						parse_index = index + 1
					}
				}
				const index_array: number[] = []
				let index = cname.indexOf("=", parse_index)
				if (index >= 0) {
					do {
						index_array.push(index)
						index = cname.indexOf("=", index + 1)
					} while (index >= 0)
				}
				index = cname.indexOf(";", parse_index)
				if (index >= 0) {
					do {
						index_array.push(index)
						index = cname.indexOf(";", index + 1)
					} while (index >= 0)
				}
				index_array.sort((a, b) => a - b)
				index = parse_index
				for (const i of index_array) {
					const range = new vscode.Range(
						active_editor.document.positionAt(cname_index + index),
						active_editor.document.positionAt(cname_index + i + 1)
					)
					if (cname[i] == "=") {
						property_array.push(range)
					} else {
						value_array.push(range)
					}
					index = i + 1
				}
				const range = new vscode.Range(
					active_editor.document.positionAt(cname_index + index),
					cname_end
				)
				value_array.push(range)
				const hover_message = new vscode.MarkdownString()
				hover_message.supportHtml = true
				hover_message.appendMarkdown("**" + compile_style(cname) + "**")
				cname_array.push({
					range: new vscode.Range(cname_start, cname_end),
					hoverMessage: hover_message
				})
			}
		}
		active_editor.setDecorations(token_decorator, cname_array)
		active_editor.setDecorations(media_query_decorator, media_query_array)
		active_editor.setDecorations(selector_decorator, selector_array)
		active_editor.setDecorations(property_decorator, property_array)
		active_editor.setDecorations(value_decorator, value_array)
	}
	function trigger_update_decorations(throttle = false) {
		if (timeout) {
			clearTimeout(timeout)
			timeout = 0
		}
		if (throttle) {
			timeout = setTimeout(update_decorations, 250)
		} else {
			update_decorations()
		}
	}
	if (active_editor) {
		trigger_update_decorations()
	}
	vscode.window.onDidChangeActiveTextEditor(
		editor => {
			active_editor = editor
			if (editor) {
				trigger_update_decorations()
			}
		},
		null,
		context.subscriptions
	)
	vscode.workspace.onDidChangeTextDocument(
		event => {
			if (active_editor && event.document === active_editor.document) {
				trigger_update_decorations(true)
			}
		},
		null,
		context.subscriptions
	)
}