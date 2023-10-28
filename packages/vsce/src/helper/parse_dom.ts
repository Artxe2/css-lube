import { parseHtml, parseJsx } from "dom-eater"
import { AstNode } from "dom-eater/@types"

export default (file_name: string, text: string): AstNode[] => {
	const index = file_name.lastIndexOf(".")
	if (index < 0) return []
	const extension = file_name.slice(index + 1)
	if (extension == "jsx" || extension == "tsx") return parseJsx(text).ast
	return parseHtml(text).ast
}