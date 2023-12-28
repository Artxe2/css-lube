// https://dafrok.github.io/gzip-size-online/ LEVEL: 5
/* terser options
{
	module: true,
	compress: {
		booleans_as_integers: true
	},
	mangle: {},
	output: {},
	parse: {},
	rename: {},
}
*/
{
	let dom = document
	let escape = CSS.escape
	let RE = RegExp
	let M = Map
	let MO = MutationObserver
	let pure_style = "*{margin:0;padding:0;font:inherit;color:inherit}"
		+ "*,:after,:before{box-sizing:border-box;flex-shrink:0}"
		+ "html,body{height:100%;max-height:100%}"
		+ "ol,ul,menu,dir{list-style:none}"
		+ "img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}"
		+ "button{background:none;border:0;cursor:pointer}"
		+ "b,strong{font-weight:bold}"
		+ "a{text-decoration:none}"
		+ "pre{white-space:pre-wrap}"
		+ "table{border-collapse:collapse;border-spacing:0}"
		+ ":root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}"
	let shorthand_for_properties = new M(
		[
			[ "acc", "accent-color" ],
			[ "ac", "align-content" ],
			[ "ai", "align-items" ],
			[ "as", "align-self" ],
			[ "a", "animation" ],
			[ "bf", "backdrop-filter" ],
			[ "bg", "background" ],
			[ "bgc", "background-color" ],
			[ "bgi", "background-image" ],
			[ "bd", "border" ],
			[ "bdb", "border-bottom" ],
			[ "bdc", "border-color" ],
			[ "bdl", "border-left" ],
			[ "br", "border-radius" ],
			[ "bdr", "border-right" ],
			[ "bds", "border-style" ],
			[ "bdt", "border-top" ],
			[ "bdw", "border-width" ],
			[ "b", "bottom" ],
			[ "bs", "box-shadow" ],
			[ "cp", "clip-path" ],
			[ "c", "color" ],
			[ "ct", "content" ],
			[ "cs", "cursor" ],
			[ "d", "display" ],
			[ "f", "fill" ],
			[ "ft", "filter" ],
			[ "fg", "flex-grow" ],
			[ "fsk", "flex-shrink" ],
			[ "fw", "flex-wrap" ],
			[ "fl", "float" ],
			[ "ff", "font-family" ],
			[ "fs", "font-size" ],
			[ "fv", "font-variant" ],
			[ "g", "gap" ],
			[ "gc", "grid-column" ],
			[ "gr", "grid-row" ],
			[ "gtc", "grid-template-columns" ],
			[ "gtr", "grid-template-rows" ],
			[ "h", "height" ],
			[ "i", "inset" ],
			[ "jc", "justify-content" ],
			[ "l", "left" ],
			[ "ls", "letter-spacing" ],
			[ "lb", "line-break" ],
			[ "lh", "line-height" ],
			[ "m", "margin" ],
			[ "mb", "margin-bottom" ],
			[ "ml", "margin-left" ],
			[ "mr", "margin-right" ],
			[ "mt", "margin-top" ],
			[ "xh", "max-height" ],
			[ "xw", "max-width" ],
			[ "mh", "min-height" ],
			[ "mw", "min-width" ],
			[ "mbm", "mix-blend-mode" ],
			[ "of", "object-fit" ],
			[ "op", "opacity" ],
			[ "ol", "outline" ],
			[ "o", "overflow" ],
			[ "ow", "overflow-wrap" ],
			[ "ox", "overflow-x" ],
			[ "oy", "overflow-y" ],
			[ "p", "padding" ],
			[ "pb", "padding-bottom" ],
			[ "pi", "padding-inline" ],
			[ "pl", "padding-left" ],
			[ "pr", "padding-right" ],
			[ "pt", "padding-top" ],
			[ "ps", "perspective" ],
			[ "pso", "perspective-origin" ],
			[ "rs", "resize" ],
			[ "r", "right" ],
			[ "tz", "tab-size" ],
			[ "ta", "text-align" ],
			[ "td", "text-decoration" ],
			[ "ts", "text-shadow" ],
			[ "ttf", "text-transform" ],
			[ "t", "top" ],
			[ "tf", "transform" ],
			[ "tfo", "transform-origin" ],
			[ "tt", "transition" ],
			[ "us", "user-select" ],
			[ "va", "vertical-align" ],
			[ "v", "visibility" ],
			[ "ws", "white-space" ],
			[ "w", "width" ],
			[ "wc", "will-change" ],
			[ "wb", "word-break" ],
			[ "wsp", "word-spacing" ],
			[ "ww", "word-wrap" ],
			[ "z", "z-index" ]
		]
	)
	let shorthand_for_values = new M(
		[
			[ "pointer", "cursor:pointer" ],
			[ "block", "display:block" ],
			[ "flex", "display:flex" ],
			[ "grid", "display:grid" ],
			[ "inline", "display:inline" ],
			[ "inline-block", "display:inline-block" ],
			[ "inline-flex", "display:inline-flex" ],
			[ "none", "display:none" ],
			[ "column", "flex-direction:column" ],
			[ "column-reverse", "flex-direction:column-reverse" ],
			[ "row", "flex-direction:row" ],
			[ "row-reverse", "flex-direction:row-reverse" ],
			[ "bold", "font-weight:bold" ],
			[ "isolate", "isolation:isolate" ],
			[ "absolute", "position:absolute" ],
			[ "fixed", "position:fixed" ],
			[ "relative", "position:relative" ],
			[ "static", "position:static" ],
			[ "sticky", "position:sticky" ]
		]
	)
	let shorthand_for_media_condition = new M(
		[
			[ "dark", "(prefers-color-scheme:dark)" ],
			[ "sm", "(min-width:640px)" ],
			[ "md", "(min-width:768px)" ],
			[ "lg", "(min-width:1024px)" ],
			[ "xl", "(min-width:1280px)" ],
			[ "2xl", "(min-width:1536px)" ],
			[ "!sm", "(max-width:639px)" ],
			[ "!md", "(max-width:767px)" ],
			[ "!lg", "(max-width:1023px)" ],
			[ "!xl", "(max-width:1280px)" ],
			[ "!2xl", "(max-width:1536px)" ]
		]
	)
	let replace_default_unit_inner_regex = /(?:^| )-?(?:\d*\.)?\d+(?= |$)/g
	let replace_default_unit_regex = /((?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):)(.+?)(?=;|$)/g
	let default_unit = "px"


	let style_sheet = dom.createElement("style")
	/** @type {Set<string>} */
	let classes = new Set
	/** @type {Set<Element>} */
	let elements = new Set
	let media_style = ""
	/**
	 * @type {RegExp}
	 * ```
	 * /.[:=].|not-allowed|pointer|wait... ...|sticky/
	 * ```
	 */
	let check_has_value_regex = RE(
		".[:=].|"
		+ [ ...shorthand_for_values.keys() ].join("|")
	)
	/** ```
	 * /class="([^"]+)"/g
	 * ``` */
	let get_class_name_regex = /class="([^"]+)"/g
	/** ```
	 * /\S+/g
	 * ``` */
	let get_cname_regex = /\S+/g
	/** ```
	 * /prefers-color-scheme:dark/g
	 * ``` */
	let dark_theme_regex = /prefers-color-scheme:dark/g
	/** ```
	 * /&/g
	 * ``` */
	let replace_and_regex = /&/g
	/** ```
	 * /=/g
	 * ``` */
	let replace_colon_regex = /=/g
	/** ```
	 * /[^ ][+-][^ ]/g
	 * ``` */
	let replace_calc_oper_inner_regex = /[^ (][+-][^ ]/g
	/** ```
	 * /calc\(.+?\)/g
	 * ``` */
	let replace_calc_oper_regex = /calc\(.+?\)/g
	/** ```
	 * /[^ ,]+=[^ ,]+/g
	 * ``` */
	let replace_condition_regex = /[^ ,]+=[^ ,]+/g
	/**
	 * @type {RegExp}
	 * ```
	 * /(^| )(dark|sm|md... ...|!2xl)(?= |$)/g
	 * ```
	 */
	let replace_media_condition_regex = RE(
		"(^| )("
		+ [ ...shorthand_for_media_condition.keys() ].join("|")
		+ ")(?= |$)",
		"g"
	)
	/**
	 * @type {RegExp}
	 * ```
	 * /(^|/|;)(acc|ac|ai... ...|z)(?=:)/g
	 * ```
	 */
	let replace_properties_regex = RE(
		"(^|/|;)("
		+ [ ...shorthand_for_properties.keys() ].join("|")
		+ ")(?=:)",
		"g"
	)
	/** ```
	 * /_/g
	 * ``` */
	let replace_space_regex = /_/g
	/** ```
	 * /[: ,]--[^ ;,)]+/g
	 * ``` */
	let replace_var_regex = /[: ,]--[^ ;,)]+/g
	/**
	 * @type {RegExp}
	 * ```
	 * /(^|/|;)(not-allowed|pointer|wait... ...|sticky)(?=;|!|$)/g
	 * ```
	 */
	let replace_value_regex = RE(
		"(^|/|;)("
		+ [ ...shorthand_for_values.keys() ].join("|")
		+ ")(?=;|!|$)",
		"g"
	)
	/** @returns {void} */
	let build_style_sheet = () => {
		let theme = localStorage.getItem("THEME")
		style_sheet.textContent = pure_style + (
			theme
				? media_style.replace(dark_theme_regex, theme == "DARK" ? "color" : "")
				: media_style
		)
	}
	/**
	 * @param {Element} target
	 * @returns {void}
	 */
	let collect_unique_top_nodes = target => {
		if (target.nodeType != 1 || elements.has(target)) return
		for (let e of elements) {
			if (e.contains(target)) return
			if (target.contains(e)) elements.delete(e)
		}
		elements.add(target)
	}
	/**
	 * @param {string} cname
	 * @returns {boolean}
	 */
	let check_is_raw = cname => {
		let c = /** @type {string} */(cname[0])/**/
		return c == "-" || c >= "a" && c <= "z"
	}
	/**
	 * @param {string} cname
	 * @returns {number | boolean}
	 */
	let check_is_open = cname => {
		let quote = 0
		let db_quote = 0
		let paren = 0
		for (let c of cname) {
			if (c == "'") quote++
			else if (c == "\"") db_quote++
			else if (c == "(") paren++
			else if (c == ")") paren--
		}
		return quote % 2 || db_quote % 2 || paren || cname[cname.length - 1] == "\\"
	}
	/**
	 * @param {string} cname
	 * @returns {void}
	 */
	let compile_media = cname => {
		let i = cname.indexOf("@", 2)
		let query = cname.slice(1, i)
		let name = cname.slice(i + 1)
		media_style += parse_query(query) + get_priority(name) + ".\\@" + escape(query) + "\\@"
			+ (check_is_raw(name) ? compile_raw : compile_special)(name) + "}"
	}
	/**
	 * @param {string} cname
	 * @returns {string}
	 */
	let compile_raw = cname => escape(cname) + "{" + parse_value(cname) + "}"
	/**
	 * @param {string} cname
	 * @returns {string}
	 */
	let compile_special = cname => {
		let i = cname.indexOf("/")
		return escape(cname) + cname.slice(0, i)
			.replace(replace_space_regex, " ") + "{" + parse_value(cname.slice(i + 1)) + "}"
	}
	/**
	 * @param {string} cname
	 * @returns {void}
	 */
	let compile_style = cname => {
		if (check_has_value_regex.test(cname) && !check_is_open(cname)) {
			if (check_is_raw(cname)) pure_style += get_priority(cname) + "." + compile_raw(cname)
			else if (cname[0] == "@") compile_media(cname)
			else pure_style += get_priority(cname) + "." + compile_special(cname)
		}
	}
	/**
	 * @param {Element} target
	 * @returns {void}
	 */
	let detect_pending_styles = target => {
		target.classList.forEach(get_cname_handler)
	}
	/**
	 * @param {Element} target
	 * @returns {void}
	 */
	let detect_childs_with_classes = target => {
		let class_name = ""
		for (let [ , substr ] of target.outerHTML.matchAll(get_class_name_regex)) {
			class_name += " " + substr
		}
		class_name.match(get_cname_regex)?.forEach(get_cname_handler)
	}
	/**
	 * @param {string} cname
	 * @returns {void}
	 */
	let get_cname_handler = cname => {
		if (!classes.has(cname)) {
			classes.add(cname)
			compile_style(cname)
		}
	}
	/**
	 * @param {string} cname
	 * @returns {string}
	 */
	let get_priority = cname => {
		let i = cname.length - 1
		if (cname[i] != "!") return ""
		let prefix = "[class]"
		while (cname[--i] == "!") prefix += "[class]"
		return prefix
	}
	/**
	 * @param {string} substr
	 * @returns {string}
	 */
	let parse_condition = substr => {
		let i = substr.indexOf("=")
		return "(" + substr.slice(0, i) + ":" + substr.slice(i + 1) + ")"
	}
	/**
	 * @param {string} query
	 * @returns {string}
	 */
	let parse_query = query => {
		let char = query[0]
		query = char == "@"
			? query.slice(1)
			: "media " + query
		return "@" + query.replace(replace_space_regex, " ")
			.replace(replace_and_regex, " and ")
			.replace(replace_condition_regex, parse_condition)
			.replace(replace_media_condition_regex, replace_media_handler) + "{"
	}
	/**
	 * @param {string} cname
	 * @returns {string}
	 */
	let parse_value = cname => {
		let i = cname.length
		if (cname[--i] == "!") {
			while (cname[--i] == "!");
			cname = cname.slice(0, i + 1)
		}
		return cname.replace(replace_space_regex, " ")
			.replace(replace_colon_regex, ":")
			.replace(replace_properties_regex, replace_property_handler)
			.replace(replace_value_regex, replace_value_handler)
			.replace(
				replace_default_unit_regex,
				replace_shorthand_unit_handler
			)
			.replace(replace_calc_oper_regex, replace_calc_oper_handler)
			.replace(replace_var_regex, replace_var_handler)
	}
	/**
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_calc_oper_handler = substr => substr.replace(
		replace_calc_oper_inner_regex,
		replace_calc_oper_inner_handler
	)
	/**
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_calc_oper_inner_handler = substr => substr[0] + " " + substr[1] + " " + substr[2]
	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_media_handler = (_, lookbehind, substr) => lookbehind + shorthand_for_media_condition.get(substr)
	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_property_handler = (_, lookbehind, substr) => lookbehind + shorthand_for_properties.get(substr)
	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_shorthand_unit_handler = (_, lookbehind, substr) => lookbehind + substr.replace(
		replace_default_unit_inner_regex,
		replace_shorthand_unit_inner_handler
	)
	/**
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_shorthand_unit_inner_handler = substr => substr + default_unit
	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_value_handler = (_, lookbehind, substr) => lookbehind + shorthand_for_values.get(substr)
	/**
	 * @param {string} substr
	 * @returns {string}
	 */
	let replace_var_handler = substr => substr[0] + "var(" + substr.slice(1) + ")"


	style_sheet.setAttribute("css-lube", "v2.3.0")
	dom.head.append(style_sheet)
	new MO(
		mr_list => {
			let size = classes.size
			for (let mr of mr_list) elements.add(/** @type {Element} */(mr.target)/**/)
			for (let e of elements) detect_pending_styles(e)
			elements.clear()
			if (classes.size != size) build_style_sheet()
		}
	).observe(
		dom.documentElement,
		{ attributeFilter: [ "class" ], subtree: true }
	)
	new MO(
		mr_list => {
			let size = classes.size
			for (let mr of mr_list) collect_unique_top_nodes(/** @type {Element} */(mr.target)/**/)
			for (let e of elements) detect_childs_with_classes(e)
			elements.clear()
			if (classes.size != size) build_style_sheet()
		}
	).observe(
		dom.documentElement,
		{ childList: true, subtree: true }
	)
	cssLube = build_style_sheet
}