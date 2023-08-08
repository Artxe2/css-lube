(() => {
	let dom = document
	let escape = CSS.escape
	let RE = RegExp
	let M = Map
	let MO = MutationObserver
/* <- custom field / custom -> */
	let style = `*{margin:0;padding:0;font:inherit;color:inherit}
*,:after,:before{box-sizing:border-box;flex-shrink:0}
html,body{height:100%;max-height:100%}
ol,ul,menu,dir{list-style:none}
img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}
button{background:none;border:0;cursor:pointer}
b,strong{font-weight:bold}
a{text-decoration:none}
pre{white-space:pre-wrap}
table{border-collapse:collapse;border-spacing:0}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:4}`
	let shorthandForProperties = new M([
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
	let shorthandForValues = new M([
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
	let shorthandForMediaCondition = new M([
		["dark", "(prefers-color-scheme:dark)"],
		["sm", "(min-width:640px)"],
		["md", "(min-width:768px)"],
		["lg", "(min-width:1024px)"],
		["xl", "(min-width:1280px)"],
		["2xl", "(min-width:1536px)"]
	])
	let replaceDefaultUnitInnerRegex = /(?:^| )-?(?:\d*\.)?\d+(?= |$)/g
	let replaceDefaultUnitRegex = /((?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):)(.+?)(?=;|$)/g
	let defaultUnit = "em"
/* <- field / field -> */
	let classes = new Set()
	let elements = new Set()
	let media = new M()
	let requestId
/* <- field / regex -> */
	let checkHasValueRegex = ".[:=]."
	for (let k of shorthandForValues.keys()) checkHasValueRegex += "|" + k
	checkHasValueRegex = RE(checkHasValueRegex)

	let checkOpenRegex = /\\$|\([^)]*$|^[^']*(?:[^']*'[^']*')*'[^']*$|^[^"]*(?:[^"]*"[^"]*")*"[^"]*$/
	let checkRawRegex = /^[-a-z]/
	let darkThemeRegex = /prefers-color-scheme:dark/g
	let replaceColonRegex = /=/g
	let replaceConditionRegex = /[^ ,]+:[^ ,]+/g
	let replaceCalcOperInnerRegex = /(\b%?)(?! )([+-])(?! )/g
	let replaceCalcOperRegex = /(calc\()(.+?)(?=\))/g

	let replaceMediaConditionRegex = "\\b(?:"
	for (let k of shorthandForMediaCondition.keys()) replaceMediaConditionRegex += k + "|"
	replaceMediaConditionRegex = RE(replaceMediaConditionRegex.slice(0, replaceMediaConditionRegex.length - 1) + ")\\b", "g")

	let replacePropertiesRegex = "(^|/|;)("
	for (let k of shorthandForProperties.keys()) replacePropertiesRegex += k + "|"
	replacePropertiesRegex = RE(replacePropertiesRegex.slice(0, replacePropertiesRegex.length - 1) + ")(?=:)", "g")

	let replaceSpaceRegex = /_/g
	let replaceVarRegex = /(:|\s|,)(--[^ ;,)]+)/g

	let replaceValueRegex = "(^|/|;)("
	for (let k of shorthandForValues.keys()) replaceValueRegex += k + "|"
	replaceValueRegex = RE(replaceValueRegex.slice(0, replaceValueRegex.length - 1) + ")(?=;|!|$)", "g")
/* <- regex / function -> */
	let check_element = mr => elements.add(mr.target)
	let check_class_style = t => {
		if (classes.size != classes.add(t).size) compile_style(t)
	}
	let search_class_list = target => target.classList.forEach(check_class_style)
	let get_priority = t => {
		let index = t.length - 1
		if (t[index] != "!") return ""
		let prefix = "[class]"
		while (t[--index] == "!") prefix += "[class]"
		return prefix
	}
	let replace_property_callback = (_, a, b) => a + shorthandForProperties.get(b)
	let replace_value_callback = (_, a, b) => a + shorthandForValues.get(b)
	let replace_shorthand_unit_inner_callback = s => s + defaultUnit
	let replace_shorthand_unit_callback = (_, a, b) =>
		a + b.replace(replaceDefaultUnitInnerRegex, replace_shorthand_unit_inner_callback)
	let replace_calc_oper_inner_callback = (_, a, b) => a + " " + b + " "
	let replace_calc_oper_callback = (_, a, b) => a + b.replace(replaceCalcOperInnerRegex, replace_calc_oper_inner_callback)
	let replace_var_callback = (_, a, b) => a + "var(" + b + ")"
	let parse_value = t => {
		let i = t.length
		if (t[--i] == "!") {
			while (t[--i] == '!');
			t = t.slice(0, i + 1)
		}
		return t.replace(replaceSpaceRegex, " ").replace(replaceColonRegex, ":")
			.replace(replacePropertiesRegex, replace_property_callback)
			.replace(replaceValueRegex, replace_value_callback)
			.replace(replaceDefaultUnitRegex, replace_shorthand_unit_callback)
			.replace(replaceCalcOperRegex, replace_calc_oper_callback)
			.replace(replaceVarRegex, replace_var_callback)
	}
	let compile_raw = t => escape(t) + "{" + parse_value(t) + "}"
	let compile_special = t => {
		let i = t.indexOf("/")
		return escape(t) + t.slice(0, i).replace(replaceSpaceRegex, " ") + "{" + parse_value(t.slice(i + 1)) + "}"
	}
	let parse_condition = s => {
		if (s.includes("~")) {
			let i = s.indexOf(":")
			let j = s.indexOf("~", i + 2)
			let k = j + 1
			while (s[++k] < "a");
			let name = s.slice(0, i)
			let unit = s.slice(k)
			return "(min-" + name + ":" + s.slice(i + 1, j) + unit + ") and (max-" + name + ":" + s.slice(j + 1, k) + unit + ")"
		}
		return "(" + s + ")"
	}
	let replace_media_callback = s => shorthandForMediaCondition.get(s)
	let parse_query = t => {
		let c = t[0]
		t = c == "@"
				? t.slice(1)
				: c == "!"
					? "media not " + t.slice(1)
					: "media " + t
		return "\n@" + t.replace(replaceSpaceRegex, " ")
			.replace(replaceColonRegex, ":")
			.replace(replaceConditionRegex, parse_condition)
			.replace(replaceMediaConditionRegex, replace_media_callback) + "{"
	}
	let compile_media = t => {
		let i = t.indexOf("@", 2)
		let query = t.slice(1, i)
		let group = media.get(query)
		if (!group) {
			group = [ parse_query(query), "" ]
			if (darkThemeRegex.test(group[0])) group[2] = 1
			media.set(query, group)
		} else if (group[t]) return
		let name = t.slice(i + 1)
		group[1] += "\n\t" + get_priority(name) + ".\\@" + escape(query) + "\\@" + (checkRawRegex.test(name) ? compile_raw : compile_special)(name)
	}
	let compile_style = t => {
		if (checkHasValueRegex.test(t) && !checkOpenRegex.test(t)) {
			if (checkRawRegex.test(t)) style += "\n" + get_priority(t) + "." + compile_raw(t)
			else if (t[0] == "@") compile_media(t)
			else style += "\n" + get_priority(t) + "." + compile_special(t)
		}
	}
	let build_style_sheet = () => {
		requestId = 0
		let theme = localStorage.getItem("THEME")
		let temp = style
		for (let v of media.values()) {
			temp += theme && v[2]
					? v[0].replace(darkThemeRegex, `m${theme == "DARK" ? "in" : "ax"}-width:0`)
					: v[0]
			temp += v[1] + "\n}"
		}
		styleSheet.textContent = temp
	}
	let refresh_style_sheet = () => {
		if (!requestId) requestId = requestAnimationFrame(build_style_sheet)
	}
	let check_element_by_document_position = mr => {
		let target = mr.target
		if (elements.has(target)) return
		for (let e of elements) {
			let compare = target.compareDocumentPosition(e)
			if (compare & 8) return
			if (compare & 16) elements.delete(e)
		}
		elements.add(target)
	}
	let search_child_list = target => {
		for (let e of target.getElementsByTagName('*')) search_class_list(e)
	}
/* <- function / main -> */
	let styleSheet = dom.createElement("style")
	styleSheet.setAttribute("css-lube-sc", "v1.2.2")
	dom.head.append(styleSheet)
	dom.addEventListener(
		"readystatechange",
		() => {
			search_class_list(dom.body)
			search_child_list(dom.body)
			build_style_sheet()
			dom.body.hidden = 0
			new MO(mrList => {
				let size = classes.size
				mrList.forEach(check_element)
				for (let e of elements) search_class_list(e)
				elements.clear()
				if (classes.size != size) refresh_style_sheet()
			})	.observe(
					dom.body,
					{
						attributeFilter: ["class"],
						subtree: 1
					}
				)
			new MO(mrList => {
				let size = classes.size
				mrList.forEach(check_element_by_document_position)
				for (let e of elements) search_child_list(e)
				elements.clear()
				if (classes.size != size) refresh_style_sheet()
			})	.observe(
					dom.body,
					{
						childList: 1,
						subtree: 1
					}
				)
		},
		{ once: 1 }
	)
	/*window.*/cssLube = refresh_style_sheet
})()