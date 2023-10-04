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


	// eslint-disable-next-line max-len
	let pure_style = "*{margin:0;padding:0;font:inherit;color:inherit}*,:after,:before{box-sizing:border-box;flex-shrink:0}html,body{height:100%;max-height:100%}ol,ul,menu,dir{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}button{background:none;border:0;cursor:pointer}b,strong{font-weight:bold}a{text-decoration:none}pre{white-space:pre-wrap}table{border-collapse:collapse;border-spacing:0}:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}"
	let shorthand_for_properties = new M([
		["acc", "accent-color"],
		["ac", "align-content"],
		["ai", "align-items"],
		["as", "align-self"],
		["a", "animation"],
		["bf", "backdrop-filter"],
		["bg", "background"],
		["bgc", "background-color"],
		["bgi", "background-image"],
		["bd", "border"],
		["bdb", "border-bottom"],
		["bdc", "border-color"],
		["bdl", "border-left"],
		["br", "border-radius"],
		["bdr", "border-right"],
		["bds", "border-style"],
		["bdt", "border-top"],
		["bdw", "border-width"],
		["b", "bottom"],
		["bs", "box-shadow"],
		["cp", "clip-path"],
		["c", "color"],
		["ct", "content"],
		["cs", "cursor"],
		["d", "display"],
		["f", "fill"],
		["ft", "filter"],
		["fg", "flex-grow"],
		["fsk", "flex-shrink"],
		["fw", "flex-wrap"],
		["fl", "float"],
		["ff", "font-family"],
		["fs", "font-size"],
		["fv", "font-variant"],
		["g", "gap"],
		["gc", "grid-column"],
		["gr", "grid-row"],
		["gtc", "grid-template-columns"],
		["gtr", "grid-template-rows"],
		["h", "height"],
		["i", "inset"],
		["is", "isolation"],
		["jc", "justify-content"],
		["l", "left"],
		["lsp", "letter-spacing"],
		["lb", "line-break"],
		["lh", "line-height"],
		["ls", "list-style"],
		["m", "margin"],
		["mb", "margin-bottom"],
		["ml", "margin-left"],
		["mr", "margin-right"],
		["mt", "margin-top"],
		["xh", "max-height"],
		["xw", "max-width"],
		["mh", "min-height"],
		["mw", "min-width"],
		["mbm", "mix-blend-mode"],
		["of", "object-fit"],
		["op", "opacity"],
		["ol", "outline"],
		["o", "overflow"],
		["ow", "overflow-wrap"],
		["ox", "overflow-x"],
		["oy", "overflow-y"],
		["p", "padding"],
		["pb", "padding-bottom"],
		["pi", "padding-inline"],
		["pl", "padding-left"],
		["pr", "padding-right"],
		["pt", "padding-top"],
		["ps", "perspective"],
		["pso", "perspective-origin"],
		["rs", "resize"],
		["r", "right"],
		["ssa", "scroll-snap-align"],
		["sst", "scroll-snap-type"],
		["so", "shape-outside"],
		["tz", "tab-size"],
		["tl", "table-layout"],
		["ta", "text-align"],
		["td", "text-decoration"],
		["ts", "text-shadow"],
		["ttf", "text-transform"],
		["t", "top"],
		["tf", "transform"],
		["tfo", "transform-origin"],
		["tt", "transition"],
		["us", "user-select"],
		["va", "vertical-align"],
		["v", "visibility"],
		["ws", "white-space"],
		["w", "width"],
		["wc", "will-change"],
		["wb", "word-break"],
		["wsp", "word-spacing"],
		["ww", "word-wrap"],
		["wm", "writing-mode"],
		["z", "z-index"]
	])
	let shorthand_for_values = new M([
		["not-allowed", "cursor:not-allowed"],
		["pointer", "cursor:pointer"],
		["wait", "cursor:wait"],
		["block", "display:block"],
		["flex", "display:flex"],
		["grid", "display:grid"],
		["inline", "display:inline"],
		["inline-block", "display:inline-block"],
		["inline-flex", "display:inline-flex"],
		["none", "display:none"],
		["column", "flex-direction:column"],
		["column-reverse", "flex-direction:column-reverse"],
		["row", "flex-direction:row"],
		["row-reverse", "flex-direction:row-reverse"],
		["bold", "font-weight:bold"],
		["absolute", "position:absolute"],
		["fixed", "position:fixed"],
		["relative", "position:relative"],
		["static", "position:static"],
		["sticky", "position:sticky"]
	])
	let shorthand_for_media_condition = new M([
		["dark", "(prefers-color-scheme:dark)"],
		["sm", "(min-width:640px)"],
		["md", "(min-width:768px)"],
		["lg", "(min-width:1024px)"],
		["xl", "(min-width:1280px)"],
		["2xl", "(min-width:1536px)"],
		["!sm", "(max-width:639px)"],
		["!md", "(max-width:767px)"],
		["!lg", "(max-width:1023px)"],
		["!xl", "(max-width:1280px)"],
		["!2xl", "(max-width:1536px)"]
	])
	let replace_default_unit_inner_regex = /(?:^| )-?(?:\d*\.)?\d+(?= |$)/g
	// eslint-disable-next-line max-len
	let replace_default_unit_regex = /((?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):)(.+?)(?=;|$)/g
	let default_unit = "em"


	/** @type {Set<string>} */
	let classes = new Set
	/** @type {Set<Element>} */
	let elements = new Set
	/** @type {Map<string, [string, string, true?]>} */
	let media = new M
	/** @type {number} */
	let request_id
	let style_sheet = dom.createElement("style")


	/** @type {RegExp} */// @ts-ignore: string -> RegExp
	let check_has_value_regex = ".[:=]."
	let dark_theme_regex = /prefers-color-scheme:dark/g
	let replace_and_regex = /&/g
	let replace_colon_regex = /=/g
	let replace_condition_regex = /[^ ,]+=[^ ,]+/g
	let replace_calc_oper_inner_regex = /[^ ][+-][^ ]/g
	let replace_calc_oper_regex = /calc\(.+?\)/g
	/** @type {RegExp} */// @ts-ignore: string -> RegExp
	let replace_media_condition_regex = "(^| )("
	/** @type {RegExp} */// @ts-ignore: string -> RegExp
	let replace_properties_regex = "(^|/|;)("
	let replace_space_regex = /_/g
	let replace_var_regex = /[: ,]--[^ ;,)]+/g
	/** @type {RegExp} */// @ts-ignore: string -> RegExp
	let replace_value_regex = replace_properties_regex


	let build_style_sheet = () => {
		request_id = 0
		let theme = localStorage.getItem("THEME")
		let temp = pure_style
		for (let [query, style, is_dark_query] of media.values()) {
			temp += theme && is_dark_query
				? query.replace(
					dark_theme_regex,
					// @ts-ignore: 0 -> "0"
					theme == "DARK"
						? "color"
						: 0
				)
				: query
			temp += style + "}"
		}
		style_sheet.textContent = temp
	}

	/** @param {Node} node */
	let collect_unique_top_nodes = node => {
		if (
			!(
				/** @type {Element} */ (node)
			).className
			|| elements.has(
				/** @type {Element} */ (node)
			)
		) return
		for (let e of elements) {
			let compare = node.compareDocumentPosition(e)
			if (compare & 8) return
			if (compare & 16) elements.delete(e)
		}
		elements.add(
			/** @type {Element} */ (node)
		)
	}

	/** @param {string} cname */
	let check_is_raw = cname => {
		let c = cname[0]
		return c == "-" || c >= "a" && c <= "z"
	}

	/** @param {string} cname */
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

	/** @param {string} cname */
	let compile_media = cname => {
		let i = cname.indexOf("@", 2)
		let query = cname.slice(1, i)
		let group = media.get(query)
		if (!group) {
			group = [ parse_query(query), "" ]
			if (dark_theme_regex.test(group[0])) group[2] = true
			media.set(query, group)
		}
		let name = cname.slice(i + 1)
		group[1] += get_priority(name) + ".\\@" + escape(query) + "\\@"
			+ (check_is_raw(name) ? compile_raw : compile_special)(name)
	}

	/** @param {string} cname */
	let compile_raw = cname => escape(cname) + "{" + parse_value(cname) + "}"

	/** @param {string} cname */
	let compile_special = cname => {
		let i = cname.indexOf("/")
		return escape(cname) + cname.slice(0, i)
			.replace(replace_space_regex, " ") + "{" + parse_value(cname.slice(i + 1)) + "}"
	}

	/** @param {string} cname */
	let compile_style = cname => {
		if (check_has_value_regex.test(cname) && !check_is_open(cname)) {
			if (check_is_raw(cname)) pure_style += get_priority(cname) + "." + compile_raw(cname)
			else if (cname[0] == "@") compile_media(cname)
			else pure_style += get_priority(cname) + "." + compile_special(cname)
		}
	}

	/** @param {Element} target */
	let detect_pending_styles = target => {
		for (let cname of target.classList) {
			if (classes.size != classes.add(cname).size) compile_style(cname)
		}
	}

	/** @param {Element} target */
	let detect_childs_with_classes = target => {
		for (let e of target.querySelectorAll("[class]")) detect_pending_styles(e)
	}

	/** @param {string} cname */
	let get_priority = cname => {
		let index = cname.length - 1
		if (cname[index] != "!") return ""
		let prefix = "[class]"
		while (cname[--index] == "!") prefix += "[class]"
		return prefix
	}

	/** @param {string} substr */
	let parse_condition = substr => {
		let i = substr.indexOf("=")
		return "(" + substr.slice(0, i) + ":" + substr.slice(i + 1) + ")"
	}

	/** @param {string} query */
	let parse_query = query => {
		let char = query[0]
		query = char == "@"
			? query.slice(1)
			: "media " + query
		return "@" + query.replace(replace_space_regex, " ")
			.replace(replace_and_regex, " and ")
			.replace(replace_condition_regex, parse_condition)
			.replace(replace_media_condition_regex, replace_media_callback) + "{"
	}

	/** @param {string} cname */
	let parse_value = cname => {
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

	let ready_state_change_callback = () => {
		detect_pending_styles(dom.body)
		detect_childs_with_classes(dom.body)
		build_style_sheet()
		dom.body.hidden = false
		new MO(mr_list => {
			let size = classes.size
			for (let mr of mr_list) {
				elements.add(
					/** @type {Element} */ (mr.target)
				)
			}
			for (let e of elements) detect_pending_styles(e)
			elements.clear()
			if (classes.size != size) refresh_style_sheet()
		}).observe(
			dom.body,
			{
				attributeFilter: ["class"],
				subtree: true
			}
		)
		new MO(mr_list => {
			let size = classes.size
			for (let mr of mr_list) mr.addedNodes.forEach(collect_unique_top_nodes)
			for (let e of elements) detect_childs_with_classes(e)
			elements.clear()
			if (classes.size != size) refresh_style_sheet()
		}).observe(
			dom.body,
			{
				childList: true,
				subtree: true
			}
		)
	}

	let refresh_style_sheet = () => {
		if (!request_id) request_id = requestAnimationFrame(build_style_sheet)
	}

	/** @param {string} substr */
	let replace_calc_oper_callback = substr => substr.replace(
		replace_calc_oper_inner_regex,
		replace_calc_oper_inner_callback
	)

	/** @param {string} substr */
	let replace_calc_oper_inner_callback = substr => substr[0] + " " + substr[1] + " " + substr[2]

	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 */
	let replace_media_callback = (_, lookbehind, substr) => lookbehind + shorthand_for_media_condition.get(substr)

	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 */
	let replace_property_callback = (_, lookbehind, substr) => lookbehind + shorthand_for_properties.get(substr)

	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 */
	let replace_shorthand_unit_callback = (_, lookbehind, substr) => lookbehind + substr.replace(
		replace_default_unit_inner_regex,
		replace_shorthand_unit_inner_callback
	)

	/** @param {string} substr */
	let replace_shorthand_unit_inner_callback = substr => substr + default_unit

	/**
	 * @param {string} _
	 * @param {string} lookbehind
	 * @param {string} substr
	 */
	let replace_value_callback = (_, lookbehind, substr) => lookbehind + shorthand_for_values.get(substr)

	/** @param {string} substr */
	let replace_var_callback = substr => substr[0] + "var(" + substr.slice(1) + ")"


	// @ts-ignore: string -> RegExp
	for (let key of shorthand_for_values.keys()) check_has_value_regex += "|" + key
	check_has_value_regex = RE(check_has_value_regex)
	// @ts-ignore: string -> RegExp
	for (let key of shorthand_for_media_condition.keys()) replace_media_condition_regex += key + "|"
	replace_media_condition_regex = RE(
		// @ts-ignore: string -> RegExp
		replace_media_condition_regex.slice(0, replace_media_condition_regex.length - 1) + ")(?= |$)",
		"g"
	)
	// @ts-ignore: string -> RegExp
	for (let key of shorthand_for_properties.keys()) replace_properties_regex += key + "|"
	replace_properties_regex = RE(
		// @ts-ignore: string -> RegExp
		replace_properties_regex.slice(0, replace_properties_regex.length - 1) + ")(?=:)",
		"g"
	)
	// @ts-ignore: string -> RegExp
	for (let key of shorthand_for_values.keys()) replace_value_regex += key + "|"
	// @ts-ignore: string -> RegExp
	replace_value_regex = RE(replace_value_regex.slice(0, replace_value_regex.length - 1) + ")(?=;|!|$)", "g")

	style_sheet.setAttribute("css-lube", "v1.5.0")
	dom.head.append(style_sheet)
	if (dom.body) ready_state_change_callback()
	else {
		dom.addEventListener(
			"readystatechange",
			ready_state_change_callback,
			{ once: true }
		)
	}
	/* @ts-ignore: window.cssLube */// eslint-disable-next-line no-undef
	cssLube = refresh_style_sheet
}