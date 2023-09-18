import * as vscode from "vscode"

import auto_completion from "./src/extensions/auto_completion"
import highlighter from "./src/extensions/highlighter"

export function activate(context: vscode.ExtensionContext) {
	auto_completion(context)
	highlighter(context)
}