import * as vscode from "vscode"

import auto_completion from "./extensions/auto_completion"
import highlighter from "./extensions/highlighter"

export function activate(context: vscode.ExtensionContext) {
	auto_completion(context)
	highlighter(context)
}