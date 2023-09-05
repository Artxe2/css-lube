(async () => {
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
		["acc","accent-color"],
		["ac","align-content"],
		["ai","align-items"],
		["as","align-self"],
		["a","animation"],
		["bf","backdrop-filter"],
		["bg","background"],
		["bgc","background-color"],
		["bgi","background-image"],
		["bd","border"],
		["bdb","border-bottom"],
		["bdc","border-color"],
		["bdl","border-left"],
		["br","border-radius"],
		["bdr","border-right"],
		["bds","border-style"],
		["bdt","border-top"],
		["bdw","border-width"],
		["b","bottom"],
		["bs","box-shadow"],
		["cp","clip-path"],
		["c","color"],
		["ct","content"],
		["cs","cursor"],
		["d","display"],
		["f","fill"],
		["ft","filter"],
		["fg","flex-grow"],
		["fsk","flex-shrink"],
		["fw","flex-wrap"],
		["fl","float"],
		["ff","font-family"],
		["fs","font-size"],
		["fv","font-variant"],
		["g","gap"],
		["gc","grid-column"],
		["gr","grid-row"],
		["gtc","grid-template-columns"],
		["gtr","grid-template-rows"],
		["h","height"],
		["i","inset"],
		["is","isolation"],
		["jc","justify-content"],
		["l","left"],
		["lsp","letter-spacing"],
		["lb","line-break"],
		["lh","line-height"],
		["ls","list-style"],
		["m","margin"],
		["mb","margin-bottom"],
		["ml","margin-left"],
		["mr","margin-right"],
		["mt","margin-top"],
		["xh","max-height"],
		["xw","max-width"],
		["mh","min-height"],
		["mw","min-width"],
		["mbm","mix-blend-mode"],
		["of","object-fit"],
		["op","opacity"],
		["ol","outline"],
		["o","overflow"],
		["ow","overflow-wrap"],
		["ox","overflow-x"],
		["oy","overflow-y"],
		["p","padding"],
		["pb","padding-bottom"],
		["pi","padding-inline"],
		["pl","padding-left"],
		["pr","padding-right"],
		["pt","padding-top"],
		["ps","perspective"],
		["pso","perspective-origin"],
		["rs","resize"],
		["r","right"],
		["ssa","scroll-snap-align"],
		["sst","scroll-snap-type"],
		["so","shape-outside"],
		["tz","tab-size"],
		["tl","table-layout"],
		["ta","text-align"],
		["td","text-decoration"],
		["ts","text-shadow"],
		["ttf","text-transform"],
		["t","top"],
		["tf","transform"],
		["tfo","transform-origin"],
		["tt","transition"],
		["us","user-select"],
		["va","vertical-align"],
		["v","visibility"],
		["ws","white-space"],
		["w","width"],
		["wc","will-change"],
		["wb","word-break"],
		["wsp","word-spacing"],
		["ww","word-wrap"],
		["wm","writing-mode"],
		["z","z-index"]
	])
	let shorthandValues = new Map([
		/* cursor */
		["not-allowed","cursor:not-allowed"],
		["pointer","cursor:pointer"],
		["wait","cursor:wait"],
		/* display */
		["block","display:block"],
		["flex","display:flex"],
		["grid","display:grid"],
		["inline","display:inline"],
		["inline-block","display:inline-block"],
		["inline-flex","display:inline-flex"],
		["none","display:none"],
		/* flex-direction */
		["column","flex-direction:column"],
		["column-reverse","flex-direction:column-reverse"],
		["row","flex-direction:row"],
		["row-reverse","flex-direction:row-reverse"],
		/* font-weight */
		["bold","font-weight:bold"],
		/* position */
		["absolute","position:absolute"],
		["fixed","position:fixed"],
		["relative","position:relative"],
		["static","position:static"],
		["sticky","position:sticky"]
	])
	let shorthandMedias = new Map([
		["dark","(prefers-color-scheme:dark)"],
		["sm","(min-width:640px)"],
		["md","(min-width:768px)"],
		["lg","(min-width:1024px)"],
		["xl","(min-width:1280px)"],
		["2xl","(min-width:1536px)"]
	])
	let shorthandUnitRE = /(?<=(?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|(?<!tab-)size|spacing|start|top|width):(?:[^; ]* )*?-?(?:\d*\.)?\d+)(?=(?: |;|$))/g
	let defaultUnit = "em"
/* <- custom field
	core logic -> */
	let dom = document
	let styleSheet = dom.createElement("style")
	styleSheet.setAttribute("css-lube", "v1.0.0")
	styleSheet.textContent = "body{display:none}"
	dom.head.appendChild(styleSheet)

	let classes = new Set()
	let refreshStyleSheet = (() => {
		let requestId
		let buildStyleSheet = (() => {
			let media = new Map()
			let checkMemo  = (() => {
				let compileStyle = (() => {
					let escape = CSS.escape
					let spaceRE = /_/g
					let colonRE = /=/g
					let parseValue = (() => {
						let keyRE = "(?<=^|/|;)("
						for (let k of shorthandKeys.keys()) keyRE += k + "|"
						keyRE = new RegExp(keyRE.slice(0, keyRE.length - 1) + ")(?=:)", "g")
						let replaceKeyCb = s => shorthandKeys.get(s)
						let valueRE = "(?<=^|/|;)("
						for (let k of shorthandValues.keys()) valueRE += k + "|"
						valueRE = new RegExp(valueRE.slice(0, valueRE.length - 1) + ")(?=;|$|!)", "g")
						let replaceValueCb = s => shorthandValues.get(s)
						let calcRE = /(?<=calc\([^;]+?)(?<! )[+-](?! )(?=.+?\))/g
						let replaceCalcCb = s => " " + s + " "
						let varRE = /(?<!var\()--[^ ;,)]+/g
						let replaceVarCb = s => "var(" + s + ")"
						return /* parseValue */ t => {
							let i = t.length
							if (t[--i] == "!") {
								while (t[--i] == '!');
								t = t.slice(0, i + 1)
							}
							return t.replace(spaceRE, " ").replace(colonRE, ":")
								.replace(keyRE, replaceKeyCb)
								.replace(valueRE, replaceValueCb)
								.replace(shorthandUnitRE, defaultUnit)
								.replace(calcRE, replaceCalcCb)
								.replace(varRE, replaceVarCb)
						}
					})()
					let compileRaw = t => escape(t) + "{" + parseValue(t) + "}"
					let compileSpecial = t => {
						let i = t.indexOf("/")
						return escape(t) + t.slice(0, i).replace(spaceRE, " ") + "{" + parseValue(t.slice(i + 1)) + "}"
					}
					let rawRE = /^[-a-z]/
					let compileMedia = (() => {
						let parseQuery = (() => {
							let mediaRE = "\\b("
							let replaceMediaCb = s => shorthandMedias.get(s)
							for (let k of shorthandMedias.keys()) mediaRE += k + "|"
							mediaRE = new RegExp(mediaRE.slice(0, mediaRE.length - 1) + ")\\b", "g")
							let conditionRE = /[^ ,]+:[^ ,]+/g
							let tildeRE = /~/
							let parseCondition = s => {
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
							return /* parseQuery */ t => {
								let c = t[0]
								t = c == "@"
										? t.slice(1)
										: c == "!"
												? "media not " + t.slice(1)
												: "media " + t
								return "\n@" + t.replace(spaceRE, " ")
									.replace(colonRE, ":")
									.replace(conditionRE, parseCondition)
									.replace(mediaRE, replaceMediaCb) + "{"
							}
						})()
						return /* compileMedia */ t => {
							let i = t.indexOf("@", 2)
							let query = t.slice(1, i)
							let group = media.get(query)
							if (!group) {
								group = [ parseQuery(query), "", 0 ]
								if (group[0] == "\n@media (prefers-color-scheme:dark){") group[2] = 1
								media.set(query, group)
							} else if (group[t]) return
							let name = t.slice(i + 1)
							group[1] += "\n\t" + getPriority(name) + ".\\@" + escape(query) + "\\@" + (rawRE.test(name) ? compileRaw : compileSpecial)(name)
						}
					})()
					let getPriority = (() => {
						let priorityRE = /!$/
						return /* getPriority */ t => {
							if (!priorityRE.test(t)) return ""
							let index = t.length - 2
							let prefix = "[class]"
							while (t[index--] == "!") prefix += "[class]"
							return prefix
						}
					})()
					let cssRE = ".+[:=].+"
					for (let k of shorthandValues.keys()) cssRE += "|" + k
					cssRE = new RegExp(cssRE)
					let quoteRE = /^(?:[^']*'[^']*'[^']*|[^'])*$/
					let dbQuoteRE = /^(?:[^"]*"[^"]*"[^"]*|[^"])*$/
					let openRE = /\([^)]*$|\\$/
					return /* compileStyle */ t => {
						if (
							!cssRE.test(t)
							|| !quoteRE.test(t)
							|| !dbQuoteRE.test(t)
							|| openRE.test(t)
						) return
						if (rawRE.test(t)) style += "\n" + getPriority(t) + "." + compileRaw(t)
						else if (t[0] == "@") compileMedia(t)
						else style += "\n" + getPriority(t) + "." + compileSpecial(t)
					}
				})()
				let memo = new Set()
				return /* checkMemo */ t => {
					if (memo.size != memo.add(t).size) compileStyle(t)
				}
			})()
			return /* buildStyleSheet */ () => {
				requestId = 0
				classes.forEach(checkMemo)
				let theme = localStorage.getItem("THEME")
				let temp = style
				for (let v of media.values())
					if (theme && v[2]) {
						if (theme == "DARK") temp += v[1]
					}
					else temp += v[0] + v[1] + "\n}"
				styleSheet.textContent = temp
			}
		})()
		return /* refreshStyleSheet */ () => {
			if (!requestId) requestId = requestAnimationFrame(buildStyleSheet)
		}
	})()
	let searchClassList = (() => {
		let addClass = c => classes.add(c)
		return /* searchClassList */ target => target.classList.forEach(addClass)
	})()
	let searchChildList = target => {
		for (let e of target.getElementsByTagName('*')) searchClassList(e)
	}
	let elements = new Set()
	let observer = MutationObserver
	let classListObserver =  (() => {
		let checkElement = mr => elements.add(mr.target)
		return new observer(mrList => {
			let size = classes.size
			mrList.forEach(checkElement)
			for (let e of elements) searchClassList(e)
			elements.clear()
			if (classes.size != size) refreshStyleSheet()
		})
	})()
	let childListObserver = (() => {
		let checkDocumentPosition = mr => {
			let target = mr.target
			if (elements.has(target)) return
			for (let e of elements) {
				let compare = target.compareDocumentPosition(e)
				if (compare & 8) return
				if (compare & 16) elements.delete(e)
			}
			elements.add(target)
		}
		return new observer(mrList => {
			let size = classes.size
			mrList.forEach(checkDocumentPosition)
			for (let e of elements) searchChildList(e)
			elements.clear()
			if (classes.size != size) refreshStyleSheet()
		})
	})()
	dom.addEventListener("readystatechange", () => {
		searchClassList(dom.body)
		searchChildList(dom.body)
		refreshStyleSheet()
		classListObserver.observe(dom.body, {
			attributeFilter: ["class"],
			subtree: 1
		})
		childListObserver.observe(dom.body, {
			childList: 1,
			subtree: 1
		})
	}, { once: 1 })
	window.cssLube = refreshStyleSheet
})()