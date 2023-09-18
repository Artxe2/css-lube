import * as vscode from "vscode"

export const shorthand_for_properties = new Map(
	vscode.workspace.getConfiguration()
		.get("css-lube.custom.shorthand_for_properties") as [string, string][]
)
export const shorthand_for_values = new Map(
	vscode.workspace.getConfiguration()
		.get("css-lube.custom.shorthand_for_values") as [string, string][]
)
export const shorthand_for_media_condition = new Map(
	vscode.workspace.getConfiguration()
		.get("css-lube.custom.shorthand_for_media_condition") as [string, string][]
)
export const default_unit = vscode.workspace.getConfiguration()
	.get("css-lube.custom.default_unit") as string