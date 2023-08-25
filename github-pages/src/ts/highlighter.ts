const bracket = (() => {
	const colors = [ "blue", "--forest-green", "--copper-canyon" ]
	const dark_colors = [ "--gold", "--bouquet", "--dotger-blue" ]
	return (bracket: string, depth?: number) => color(colors[depth || 0], dark_colors[depth || 0], bracket)
})()

const close_tag = (tag: string) => {
	const tag_color = tag.charCodeAt(0) > 90 ? "--maroon" : "--jelly-bean"
	const dark_tag_color = tag.charCodeAt(0) > 90 ? "--havelock-blue" : "--puerto-rico"
	return color("--maroon", "gray", "&lt;/") + color(tag_color, dark_tag_color, tag) + color("--maroon", "gray", "&gt;")
}

const color = (color: string, dark: string, text: string) => `<span class="c=${color} @dark@c=${dark}">${text}</span>`

const css = (selector: string, ...properties: [string, string][]) => `${color("--maroon", "--straw", selector)}${bracket("{")}${properties.map(([key, value]) => `${color("red", "--anakiwa", key)}:${color("--endeavour", "--raw-sienna", value)}`).join(";")}${bracket("}")}`

const comment = (text: string) => color("--japanese-laurel", "--asparagus", escape_tag(text))

const declare = (text: string) => color("blue", "--havelock-blue", text)

const escape_tag = (html: string) => html.replace(/</g, "&lt;").replace(/>/g, "&gt;")

const func = (text: string) => color("--dallas", "--sapling", text)

const html = (tag: string, attr: string, child: string | false) => {
	const tag_color = tag.charCodeAt(0) > 90 ? "--maroon" : "--jelly-bean"
	const dark_tag_color = tag.charCodeAt(0) > 90 ? "--havelock-blue" : "--puerto-rico"
	let text = color("--maroon", "gray", "&lt;")
			+ color(tag_color, dark_tag_color, tag)
			+ attr
	if (child === false) {
		text += color("--maroon", "gray", " /&gt;")
	} else {
		text += color("--maroon", "gray", "&gt;")
		text += child
		text += color("--maroon", "gray", "&lt;/")
		text += color(tag_color, dark_tag_color, tag)
		text += color("--maroon", "gray", "&gt;")
	}
	return text
}

const keyword = (text: string) => color("--electric-violet", "--bouquet", text)

const name = (text: string, final?: boolean) => final ? color("--lochmara", "--malibu", text) : color("--navy-blue", "--anakiwa", text)

const number = (number: number) => color("--salem", "--coriander", number.toString())

const open_tag = (tag: string, attr: string) => {
	const tag_color = tag.charCodeAt(0) > 90 ? "--maroon" : "--jelly-bean"
	const dark_tag_color = tag.charCodeAt(0) > 90 ? "--havelock-blue" : "--puerto-rico"
	return color("--maroon", "gray", "&lt;") + color(tag_color, dark_tag_color, tag) + attr + color("--maroon", "gray", "&gt;")
}

const string = (text: string, quote?: string | false) => {
	if (quote === false) {
		return color("--tamarillo", "--raw-sienna", text)
	}
	if (!quote) {
		quote = "\""  
	}
	return color("--tamarillo", "--raw-sienna", quote + text + quote)
}

const type = (text: string) => color("--jelly-bean", "--puerto-rico", text)
export {
	bracket,
	close_tag,
	color,
	comment,
	css,
	declare,
	escape_tag,
	func,
	html,
	keyword,
	name,
	number,
	open_tag,
	string,
	type
}