const auto_completion = require("./extensions/auto_completion")
const highlighter = require("./extensions/highlighter")

module.exports = {
	/**
	 * @param {import("vscode").ExtensionContext} context
	 * @returns
	 */
	activate(context) {
		auto_completion(context)
		highlighter(context)
	}
}