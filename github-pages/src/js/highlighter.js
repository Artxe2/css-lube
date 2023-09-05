const colors = [ "blue", "--forest-green", "--copper-canyon" ]
const dark_colors = [ "--gold", "--bouquet", "--dotger-blue" ]
/**
 * @param {string} bracket
 * @param {number} [depth]
 */
const bracket = (bracket, depth) => color(colors[depth || 0], dark_colors[depth || 0], bracket)

/** @param {string} tag */
const close_tag = tag => {
	const tag_color = tag.charCodeAt(0) > 90 ? "--maroon" : "--jelly-bean"
	const dark_tag_color = tag.charCodeAt(0) > 90 ? "--havelock-blue" : "--puerto-rico"
	return color("--maroon", "gray", "&lt;/") + color(tag_color, dark_tag_color, tag) + color("--maroon", "gray", "&gt;")
}

/**
 * @param {string} color
 * @param {string} dark
 * @param {string} text
 */
const color = (color, dark, text) => `<span class="c=${color} @dark@c=${dark}">${text}</span>`

/**
 * @param {string} selector
 * @param  {...[string, string]} properties
 */
const css = (selector, ...properties) => `${color("--maroon", "--straw", selector)}${bracket("{")}${properties.map(([key, value]) => `${color("red", "--anakiwa", key)}:${color("--endeavour", "--raw-sienna", value)}`).join(";")}${bracket("}")}`

/** @param {string} text */
const comment = text => color("--japanese-laurel", "--asparagus", escape_tag(text))

/** @param {string} text */
const declare = text => color("blue", "--havelock-blue", text)

const lt_regex = /</g
const gt_regex = />/g
/** @param {string} html */
const escape_tag = html => html.replace(lt_regex, "&lt;").replace(gt_regex, "&gt;")

/** @param {string} text */
const func = text => color("--dallas", "--sapling", text)

/**
 * @param {string} tag
 * @param {string} attr
 * @param {string|false} child
 */
const html = (tag, attr, child) => {
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

/** @param {string} text */
const keyword = text => color("--electric-violet", "--bouquet", text)

/**
 * @param {string} text
 * @param {boolean} [is_final]
 */
const name = (text, is_final) => is_final ? color("--lochmara", "--malibu", text) : color("--navy-blue", "--anakiwa", text)

/** @param {number} number */
const number = number => color("--salem", "--coriander", number.toString())

/**
 * @param {string} tag
 * @param {string} attr
 */
const open_tag = (tag, attr) => {
	const tag_color = tag.charCodeAt(0) > 90 ? "--maroon" : "--jelly-bean"
	const dark_tag_color = tag.charCodeAt(0) > 90 ? "--havelock-blue" : "--puerto-rico"
	return color("--maroon", "gray", "&lt;") + color(tag_color, dark_tag_color, tag) + attr + color("--maroon", "gray", "&gt;")
}

/**
 * @param {string} text 
 * @param {string|false} [quote] 
 * @returns 
 */
const string = (text, quote) => {
	if (quote === false) {
		return color("--tamarillo", "--raw-sienna", text)
	}
	if (!quote) {
		quote = "\""  
	}
	return color("--tamarillo", "--raw-sienna", quote + text + quote)
}

/** @param {string} text */
const type = (text) => color("--jelly-bean", "--puerto-rico", text)

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