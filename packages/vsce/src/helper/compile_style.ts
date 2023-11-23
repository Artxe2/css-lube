import {
	default_unit,
	shorthand_for_media_condition,
	shorthand_for_properties,
	shorthand_for_values
} from "./get_config"

const replace_default_unit_inner_regex = /(?:^| )-?(?:\d*\.)?\d+(?= |$)/g
const replace_default_unit_regex = /((?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):)(.+?)(?=;|$)/g
const check_has_value_regex = RegExp(
	".[:=].|"
	+ [ ...shorthand_for_values.keys() ].join("|")
)
const replace_and_regex = /&/g
const replace_colon_regex = /=/g
const replace_condition_regex = /[^ ,]+=[^ ,]+/g
const replace_calc_oper_inner_regex = /[^ ][+-][^ ]/g
const replace_calc_oper_regex = /calc\(.+?\)/g
const replace_media_condition_regex = RegExp(
	"(^| )("
	+ [ ...shorthand_for_media_condition.keys() ].join("|")
	+ ")(?= |$)",
	"g"
)
const replace_properties_regex = RegExp(
	"(^|/|;)("
	+ [ ...shorthand_for_properties.keys() ].join("|")
	+ ")(?=:)",
	"g"
)
const replace_space_regex = /_/g
const replace_var_regex = /[: ,]--[^ ;,)]+/g
const replace_value_regex = RegExp(
	"(^|/|;)("
	+ [ ...shorthand_for_values.keys() ].join("|")
	+ ")(?=;|!|$)",
	"g"
)


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
	return parse_query(query) + "&nbsp;&nbsp;&nbsp;&nbsp;"
		+ get_priority(name) + (check_is_raw(name) ? compile_raw : compile_special)(name)
		+ "<br>}"
}

const compile_raw = (cname: string) => "{ " + parse_value(cname) + " }"

const compile_special = (cname: string) => {
	const i = cname.indexOf("/")
	return `<span style="color:#d7ba7d;">&${cname.slice(0, i).replace(replace_space_regex, " ")}</span> { ${parse_value(cname.slice(i + 1))} }`
}

const get_priority = (cname: string) => {
	let index = cname.length - 1
	if (cname[index] != "!") return ""
	let prefix = "[class]"
	while (cname[--index] == "!") prefix += "[class]"
	return prefix ? `<span style="color:#d7ba7d;">${prefix}</span> ` : ""
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
	return `<span style="color:#b67bb1;">@${
		query.replace(replace_space_regex, " ")
			.replace(replace_and_regex, " and ")
			.replace(replace_condition_regex, parse_condition)
			.replace(replace_media_condition_regex, replace_media_callback)
	}</span> {<br>`
}

const replace_semi_gap_regex = /span>;<span/g
const replace_value_color_regex = /(?<=^|;)(.+?):(.+?)(?=;|$)/g
const replace_value_color_callback = (_: string, p: string, v: string) => `<span style="color:#9cdcfe;">${p}</span>: <span style="color:#ce9178;">${v}</span>`

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
		.replace(
			replace_default_unit_regex,
			replace_shorthand_unit_callback
		)
		.replace(replace_calc_oper_regex, replace_calc_oper_callback)
		.replace(replace_var_regex, replace_var_callback)
		.replace(
			replace_value_color_regex,
			replace_value_color_callback
		)
		.replace(replace_semi_gap_regex, "span>; <span")
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

export default (cname: string) => {
	return check_has_value_regex.test(cname) && !check_is_open(cname)
		? check_is_raw(cname)
			? get_priority(cname) + compile_raw(cname)
			: cname[0] == "@"
				? compile_media(cname)
				: get_priority(cname) + compile_special(cname)
		: ""
}