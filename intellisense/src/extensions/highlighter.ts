import * as vscode from "vscode"

import {
	default_unit,
	shorthand_for_media_condition,
	shorthand_for_properties,
	shorthand_for_values
} from "../helper/get_config"

const replace_default_unit_inner_regex = /(?:^| )-?(?:\d*\.)?\d+(?= |$)/g
// eslint-disable-next-line max-len
const replace_default_unit_regex = /((?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):)(.+?)(?=;|$)/g
// @ts-ignore: string -> RegExp
let check_has_value_regex: RegExp = ".[:=]."
const replace_and_regex = /&/g
const replace_colon_regex = /=/g
const replace_condition_regex = /[^ ,]+=[^ ,]+/g
const replace_calc_oper_inner_regex = /[^ ][+-][^ ]/g
const replace_calc_oper_regex = /calc\(.+?\)/g
// @ts-ignore: string -> RegExp
let replace_media_condition_regex: RegExp = "(^| )("
// @ts-ignore: string -> RegExp
let replace_properties_regex: RegExp = "(^|/|;)("
const replace_space_regex = /_/g
const replace_var_regex = /[: ,]--[^ ;,)]+/g
// @ts-ignore: string -> RegExp
let replace_value_regex: RegExp = replace_properties_regex
// @ts-ignore: string -> RegExp
for (const key of shorthand_for_values.keys()) check_has_value_regex += "|" + key
check_has_value_regex = RegExp(check_has_value_regex)
// @ts-ignore: string -> RegExp
for (const key of shorthand_for_media_condition.keys()) replace_media_condition_regex += key + "|"
replace_media_condition_regex = RegExp(
	// @ts-ignore: string -> RegExp
	replace_media_condition_regex.slice(0, replace_media_condition_regex.length - 1) + ")(?= |$)",
	"g"
)
// @ts-ignore: string -> RegExp
for (const key of shorthand_for_properties.keys()) replace_properties_regex += key + "|"
replace_properties_regex = RegExp(
	// @ts-ignore: string -> RegExp
	replace_properties_regex.slice(0, replace_properties_regex.length - 1) + ")(?=:)",
	"g"
)
// @ts-ignore: string -> RegExp
for (const key of shorthand_for_values.keys()) replace_value_regex += key + "|"
// @ts-ignore: string -> RegExp
replace_value_regex = RegExp(replace_value_regex.slice(0, replace_value_regex.length - 1) + ")(?=;|!|$)", "g")


const check_is_raw = (cname: string) => {
	const c = cname[0]
	return c == "-" || c >= "a" && c <= "z"
}

const check_is_open = (cname: string) => {
	let quote = 0
	let db_quote = 0
	let paren = 0
	for (const c of cname) {
		if (c == "'") quote++
		else if (c == "\"") db_quote++
		else if (c == "(") paren++
		else if (c == ")") paren--
	}
	return quote % 2 || db_quote % 2 || paren || cname[cname.length - 1] == "\\"
}

const compile_media = (cname: string) => {
	const i = cname.indexOf("@", 2)
	const query = cname.slice(1, i)
	const name = cname.slice(i + 1)
	return parse_query(query) + "  "
		+ get_priority(name) + (check_is_raw(name) ? compile_raw : compile_special)(name)
		+ "  }"
}

const compile_raw = (cname: string) => "{ " + parse_value(cname) + " }"

const compile_special = (cname: string) => {
	const i = cname.indexOf("/")
	return cname.slice(0, i).replace(replace_space_regex, " ") + " { " + parse_value(cname.slice(i + 1)) + " }"
}

const compile_style = (cname: string) => {
	return check_has_value_regex.test(cname) && !check_is_open(cname)
		? check_is_raw(cname)
			? get_priority(cname) + compile_raw(cname)
			: cname[0] == "@"
				? compile_media(cname)
				: get_priority(cname) + compile_special(cname)
		: "_invalid_"
}

const get_priority = (cname: string) => {
	let index = cname.length - 1
	if (cname[index] != "!") return ""
	let prefix = "[class]"
	while (cname[--index] == "!") prefix += "[class]"
	return prefix + (prefix ? " " : "")
}

const parse_condition = (substr: string) => {
	const i = substr.indexOf("=")
	return "(" + substr.slice(0, i) + ":" + substr.slice(i + 1) + ")"
}

const parse_query = (query: string) => {
	const char = query[0]
	query = char == "@"
		? query.slice(1)
		: "media " + query
	return "@" + query.replace(replace_space_regex, " ")
		.replace(replace_and_regex, " and ")
		.replace(replace_condition_regex, parse_condition)
		.replace(replace_media_condition_regex, replace_media_callback) + "{"
}

const parse_value = (cname: string) => {
	let i = cname.length
	if (cname[--i] == "!") {
		while (cname[--i] == "!");
		cname = cname.slice(0, i + 1)
	}
	return cname.replace(replace_space_regex, " ")
		.replace(replace_colon_regex, ":")
		.replace(replace_properties_regex, replace_property_callback)
		.replace(replace_value_regex, replace_value_callback)
		.replace(replace_default_unit_regex, replace_shorthand_unit_callback)
		.replace(replace_calc_oper_regex, replace_calc_oper_callback)
		.replace(replace_var_regex, replace_var_callback)
}

const replace_calc_oper_callback = (substr: string) => substr.replace(
	replace_calc_oper_inner_regex,
	replace_calc_oper_inner_callback
)

const replace_calc_oper_inner_callback = (substr: string) => substr[0] + " " + substr[1] + " " + substr[2]

const replace_media_callback = (_: string, lookbehind: string, substr: string) => lookbehind + shorthand_for_media_condition.get(substr)

const replace_property_callback = (_: string, lookbehind: string, substr: string) => lookbehind + shorthand_for_properties.get(substr)

const replace_shorthand_unit_callback = (_: string, lookbehind: string, substr: string) => lookbehind + substr.replace(
	replace_default_unit_inner_regex,
	replace_shorthand_unit_inner_callback
)

const replace_shorthand_unit_inner_callback = (substr: string) => substr + default_unit

const replace_value_callback = (_: string, lookbehind: string, substr: string) => lookbehind + shorthand_for_values.get(substr)

const replace_var_callback = (substr: string) => substr[0] + "var(" + substr.slice(1) + ")"


export default (context: vscode.ExtensionContext) => {
	const decorator = vscode.window.createTextEditorDecorationType
	let timeout: NodeJS.Timeout|0
	let active_editor = vscode.window.activeTextEditor

	const class_name_regex = /(?<=class(?:Name)?=")[^"{]*/g
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
	function update_decorations() {
		if (!active_editor) return
		const text = active_editor.document.getText()
		const cname_array: vscode.DecorationOptions[] = []
		const media_query_array: vscode.DecorationOptions[] = []
		const selector_array: vscode.DecorationOptions[] = []
		const property_array: vscode.DecorationOptions[] = []
		const value_array: vscode.DecorationOptions[] = []
		let match: RegExpExecArray|null
		while ((match = class_name_regex.exec(text))) {
			const class_name = match[0]
			const class_name_index = match.index
			while ((match = token_regex.exec(class_name))) {
				const cname = match[0]
				const cname_index = class_name_index + match.index
				const cname_start = active_editor.document.positionAt(cname_index)
				const cname_end = active_editor.document.positionAt(cname_index + cname.length)
				let parse_index = 0
				if (cname[0] == "@") {
					const index = cname.indexOf("@", 2)
					if (index >= 0) {
						const media_query_start = active_editor.document.positionAt(cname_index)
						const media_query_end = active_editor.document.positionAt(cname_index + index + 1)
						media_query_array.push({ range: new vscode.Range(media_query_start, media_query_end) })
						parse_index = index + 1 
					}
				}
				if (check_is_special(cname, parse_index)) {
					const index = cname.indexOf("/", parse_index + 1)
					if (index >= 0) {
						const selector_start = active_editor.document.positionAt(cname_index + parse_index)
						const selector_end = active_editor.document.positionAt(cname_index + index + 1)
						selector_array.push({ range: new vscode.Range(selector_start, selector_end) })
						parse_index = index + 1 
					}
				}
				const index = cname.indexOf("=", parse_index)
				if (index >= 0) {
					const property_start = active_editor.document.positionAt(cname_index + parse_index)
					const property_end = active_editor.document.positionAt(cname_index + index + 1)
					property_array.push({ range: new vscode.Range(property_start, property_end) })
					parse_index = index + 1 
				}
				const value_start = active_editor.document.positionAt(cname_index + parse_index)
				value_array.push({ range: new vscode.Range(value_start, cname_end) })
				cname_array.push({
					range: new vscode.Range(cname_start, cname_end),
					hoverMessage: "**" + compile_style(cname) + "**" 
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