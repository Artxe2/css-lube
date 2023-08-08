// https://www.toptal.com/developers/javascript-minifier
(() => {
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
	let shorthandKeys = new Map([
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
	let shorthandValues = new Map([
		/* cursor */
		["not-allowed", "cursor:not-allowed"],
		["pointer", "cursor:pointer"],
		["wait", "cursor:wait"],
		/* display */
		["block", "display:block"],
		["flex", "display:flex"],
		["grid", "display:grid"],
		["inline", "display:inline"],
		["inline-block", "display:inline-block"],
		["inline-flex", "display:inline-flex"],
		["none", "display:none"],
		/* flex-direction */
		["column", "flex-direction:column"],
		["column-reverse", "flex-direction:column-reverse"],
		["row", "flex-direction:row"],
		["row-reverse", "flex-direction:row-reverse"],
		/* font-weight */
		["bold", "font-weight:bold"],
		/* position */
		["absolute", "position:absolute"],
		["fixed", "position:fixed"],
		["relative", "position:relative"],
		["static", "position:static"],
		["sticky", "position:sticky"]
	])
	let shorthandMedias = new Map([
		["dark", "(prefers-color-scheme:dark)"],
		["sm", "(min-width:640px)"],
		["md", "(min-width:768px)"],
		["lg", "(min-width:1024px)"],
		["xl", "(min-width:1280px)"],
		["2xl", "(min-width:1536px)"]
	])
	let shorthandUnitRE = /(?<=(?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):(?:[^; ]* )*?-?(?:\d*\.)?\d+)(?= |;|$)/g
	let defaultUnit = "em"
/* <- custom field / shortand -> */
	let dom = document
	let escape = CSS.escape
	let MO = MutationObserver
/* <- shortand / field -> */
	let classes = new Set()
	let elements = new Set()
	let media = new Map()
	let requestId
/* <- field / regex -> */
	let dbQuoteRE = /^(?:[^"]*"[^"]*"[^"]*|[^"])*$/
	let calcRE = /(?<=calc\([^;]+?)(?<! )[+-](?! )(?=.+?\))/g
	let conditionRE = /[^ ,]+:[^ ,]+/g
	let colonRE = /=/g

	let cssRE = ".+[:=].+"
	for (let k of shorthandValues.keys()) cssRE += "|" + k
	cssRE = new RegExp(cssRE)

	let darkThemeRE = /prefers-color-scheme:dark/g

	let keyRE = "(?<=^|/|;)(?:"
	for (let k of shorthandKeys.keys()) keyRE += k + "|"
	keyRE = new RegExp(keyRE.slice(0, keyRE.length - 1) + ")(?=:)", "g")

	let mediaRE = "\\b(?:"
	for (let k of shorthandMedias.keys()) mediaRE += k + "|"
	mediaRE = new RegExp(mediaRE.slice(0, mediaRE.length - 1) + ")\\b", "g")

	let openRE = /\([^)]*$|\\$/
	let priorityRE = /!$/
	let quoteRE = /^(?:[^']*'[^']*'[^']*|[^'])*$/
	let rawRE = /^[-a-z]/
	let spaceRE = /_/g
	let tildeRE = /~/

	let valueRE = "(?<=^|/|;)(?:"
	for (let k of shorthandValues.keys()) valueRE += k + "|"
	valueRE = new RegExp(valueRE.slice(0, valueRE.length - 1) + ")(?=;|$|!)", "g")

	let varRE = /(?<!var\()--[^ ;,)]+/g
/* <- regex / function -> */
	let check_element = mr => elements.add(mr.target)
	let check_class_style = t => {
		if (classes.size != classes.add(t).size) compile_style(t)
	}
	let search_class_list = target => target.classList.forEach(check_class_style)
	let get_priority = t => {
		if (!priorityRE.test(t)) return ""
		let index = t.length - 2
		let prefix = "[class]"
		while (t[index--] == "!") prefix += "[class]"
		return prefix
	}
	let replace_key_callback = s => shorthandKeys.get(s)
	let replace_value_callback = s => shorthandValues.get(s)
	let replace_calc_callback = s => " " + s + " "
	let replace_var_callback = s => "var(" + s + ")"
	let parse_value = t => {
		let i = t.length
		if (t[--i] == "!") {
			while (t[--i] == '!');
			t = t.slice(0, i + 1)
		}
		return t.replace(spaceRE, " ").replace(colonRE, ":")
			.replace(keyRE, replace_key_callback)
			.replace(valueRE, replace_value_callback)
			.replace(shorthandUnitRE, defaultUnit)
			.replace(calcRE, replace_calc_callback)
			.replace(varRE, replace_var_callback)
	}
	let compile_raw = t => escape(t) + "{" + parse_value(t) + "}"
	let compile_special = t => {
		let i = t.indexOf("/")
		return escape(t) + t.slice(0, i).replace(spaceRE, " ") + "{" + parse_value(t.slice(i + 1)) + "}"
	}
	let parse_condition = s => {
		if (tildeRE.test(s)) {
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
	let replace_media_callback = s => shorthandMedias.get(s)
	let parse_query = t => {
		let c = t[0]
		t = c == "@"
				? t.slice(1)
				: c == "!"
					? "media not " + t.slice(1)
					: "media " + t
		return "\n@" + t.replace(spaceRE, " ")
			.replace(colonRE, ":")
			.replace(conditionRE, parse_condition)
			.replace(mediaRE, replace_media_callback) + "{"
	}
	let compile_media = t => {
		let i = t.indexOf("@", 2)
		let query = t.slice(1, i)
		let group = media.get(query)
		if (!group) {
			group = [ parse_query(query), "" ]
			if (darkThemeRE.test(group[0])) group[2] = 1
			media.set(query, group)
		} else if (group[t]) return
		let name = t.slice(i + 1)
		group[1] += "\n\t" + get_priority(name) + ".\\@" + escape(query) + "\\@" + (rawRE.test(name) ? compile_raw : compile_special)(name)
	}
	let compile_style = t => {
		if (
			!cssRE.test(t)
			|| !quoteRE.test(t)
			|| !dbQuoteRE.test(t)
			|| openRE.test(t)
		) return
		if (rawRE.test(t)) style += "\n" + get_priority(t) + "." + compile_raw(t)
		else if (t[0] == "@") compile_media(t)
		else style += "\n" + get_priority(t) + "." + compile_special(t)
	}
	let build_style_sheet = () => {
		requestId = 0
		let theme = localStorage.getItem("THEME")
		let temp = style
		for (let v of media.values()) {
			temp += theme && v[2]
					? v[0].replace(darkThemeRE, `width${theme == "DARK" ? ">" : "<"}0`)
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
/* <- function / runtime -> */
	let styleSheet = dom.createElement("style")
	styleSheet.setAttribute("css-lube", "v1.1.2")
	styleSheet.textContent = "body{display:none}"
	dom.head.appendChild(styleSheet)

	let classListObserver = new MO(mrList => {
		let size = classes.size
		mrList.forEach(check_element)
		for (let e of elements) search_class_list(e)
		elements.clear()
		if (classes.size != size) refresh_style_sheet()
	})
	let childListObserver = new MO(mrList => {
		let size = classes.size
		mrList.forEach(check_element_by_document_position)
		for (let e of elements) search_child_list(e)
		elements.clear()
		if (classes.size != size) refresh_style_sheet()
	})
	dom.addEventListener(
		"readystatechange",
		() => {
			search_class_list(dom.body)
			search_child_list(dom.body)
			build_style_sheet()
			classListObserver.observe(
				dom.body,
				{
					attributeFilter: ["class"],
					subtree: 1
				}
			)
			childListObserver.observe(
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