(() => {
	const RESET = `*{margin:0;padding:0;font:inherit;color:inherit}
*,:after,:before{box-sizing:border-box;flex-shrink:0}
html,body{height:100%;max-height:100%}
ol,ul,menu,dir{list-style:none}
img,svg,video,canvas,audio,iframe,embed,object{vertical-align:bottom;max-width:100%}
button{background:none;border:0;cursor:pointer}
a{text-decoration:none}
pre{white-space:pre-wrap}
table{border-collapse:collapse;border-spacing:0}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}`
	const abbrKeys = JSON.parse(`{
"ac":"align-content",
"ai":"align-items",
"as":"align-self",
"b":"bottom",
"bd":"border",
"bdb":"border-bottom",
"bdl":"border-left",
"bdr":"border-right",
"bdt":"border-top",
"bg":"background",
"bgc":"background-color",
"bgi":"background-image",
"bgp":"background-position",
"bgs":"background-size",
"br":"border-radius",
"bs":"box-shadow",
"c":"color",
"d":"display",
"f":"float",
"ff":"font-family",
"fg":"flex-grow",
"fs":"font-size",
"ft":"filter",
"fv":"font-variant",
"fw":"font-weight",
"gc":"grid-column",
"gg":"grid-gap",
"gr":"grid-row",
"gtc":"grid-template-columns",
"gtr":"grid-template-row",
"h":"height",
"jc":"justify-content",
"l":"left",
"lh":"line-height",
"ls":"list-style",
"m":"margin",
"mb":"margin-bottom",
"mh":"min-height",
"ml":"margin-left",
"mr":"margin-right",
"mt":"margin-top",
"mw":"min-width",
"o":"overflow",
"ol":"outline",
"ox":"overflow-x",
"oy":"overflow-y",
"p":"padding",
"pb":"padding-bottom",
"pl":"padding-left",
"pr":"padding-right",
"pt":"padding-top",
"r":"right",
"t":"top",
"ta":"text-align",
"tt":"transition",
"tf":"transform",
"va":"vertical-align",
"w":"width",
"ws":"white-space",
"xh":"max-height",
"xw":"max-width",
"z":"z-index"
}`)
	const abbrValues = JSON.parse(`{
"absolute":"position:absolute",
"block":"display:block",
"bold":"font-weight:bold",
"column":"flex-direction:column",
"flex":"display:flex",
"fixed":"position:fixed",
"grid":"display:grid",
"hidden":"visibility:hidden",
"inline":"display:inline",
"inline-block":"display:inline-block",
"none":"display:none",
"pointer":"cursor:pointer",
"relative":"position:relative",
"row":"flex-direction:row",
"static":"position:static"
}`)
	const abbrMedias = JSON.parse(`{
"2xl":"(min-width: 1536px)",
"dark":"(prefers-color-scheme:dark)",
"sm":"(min-width: 640px)",
"lg":"(min-width: 1024px)",
"md":"(min-width: 768px)",
"xl":"(min-width: 1280px)"
}`)
	const abbrUnits = /(?<=(^|;|-)(border-radius|bottom|font-size|gap|height|left|margin|padding|right|top|width)):-?\d+\.?\d*(?=;|$)/g
	const DEFAULT_UNIT = "em"

	const styleSheet = document.createElement("style")
	styleSheet.setAttribute("instant-css", "v0.5.0")
	styleSheet.innerHTML = "body{display:none!important}"
	document.head.appendChild(styleSheet)
	const set = new Set()
	const media = {}
	const css = {}

	const compileStyle = (() => {
		const compileRaw = t => [
			CSS.escape(t),
			"{", parseValue(t), "}"
		].join("")
		const compileSpecial = t => [
			CSS.escape(t),
			t.replace(/\/.+/, "").replace(/_/g, " "),
			"{", parseValue(t.replace(/.+?\//, "")), "}"
		].join("")
		const compileMedia = t => {
			let query = t.replace(/^@|@.+/g, "")
			let group = media[query]
			if (!group) {
				media[query] = [parseQuery(query), {}]
				group = media[query]
			} else if (group[t]) return
			let name = t.replace(/.+@/, "")
			group[1][t] = [
				"	", parsePriority(name), ".",
				CSS.escape(t.replace(/(?<=.+@).+/, "")),
				/^[^a-z]/.test(name) ? compileSpecial(name) : compileRaw(name)
			].join("")
		}
		const parsePriority = t => {
			if (!/\!$/.test(t)) return ""
			let index = t.length - 2
			let prefix = ["[class]"]
			while (t.charAt(index--) === "!") prefix.push("[class]")
			return prefix.join("")
		}
		const parseQuery = (() => {
			const abbrMedia = (() => {
				let r = new RegExp(["\\b(", Object.keys(abbrMedias).join("|"), ")\\b"].join(""), "g")
				return t => t.replace(r, s => abbrMedias[s])
			})()
			return t => {
				t = t.replace(/^!/, "not ").replace(/&/g, " and ")
					.replace(/[^ ]+=[^ ]+/g, s => {
						if (/~/.test(s)) {
							let name = s.replace(/=.+/, "")
							let unit = s.replace(/.+~\d+/, "")
							return [
								"(min-",
								name, ":", s.replace(/.+=|~.+/g, ""), unit,
								") and (max-",
								name, ":", s.replace(/.+~|[^\d]+/g, ""), unit,
								")"
							].join("")
						}
						return ["(", s.replace(/=/g, ":"), ")"].join("")
					})
				return ["@media ", abbrMedia(t), "{"].join("")
			}
		})()
		const parseValue = (() => {
			const abbrEqual = t => t.replace(/=/g, ":")
			const abbrKey = (() => {
				let r = new RegExp(["(?<=^|\/|;)(", Object.keys(abbrKeys).join("|"), ")(?=:)"].join(""), "g")
				return t => t.replace(r, s => abbrKeys[s])
			})()
			const abbrValue = (() => {
				let r = new RegExp(["(?<=^|\/|;)(", Object.keys(abbrValues).join("|"), ")(?=;|$)"].join(""), "g")
				return t => t.replace(r, s => abbrValues[s])
			})()
			const abbrUnit = (() => {
				return t => t.replace(abbrUnits, s => s + DEFAULT_UNIT)
			})()
			const abbrCalc = (() => {
				let r = /(?<=calc\(.+?) *[+\-*/] *(?=.+?\))/g
				return t => t.replace(r, s => [" ", s, " "].join(""))
			})()
			const abbrVar = (() => {
				let r = /(?<!var\()--[^ ;,)]+/g
				return t => t.replace(r, s => ["var(", s, ")"].join(""))
			})()
			return t => abbrVar(
				abbrCalc(
					abbrUnit(
						abbrValue(
							abbrKey(
								abbrEqual(
									t.replace(/_/g, " ").replace(/\!+$/, "")
								)
							)
						)
					)
				)
			)
		})()
		return (() => {
			let r = new RegExp(["[;=:]", ...Object.keys(abbrValues)].join("|"))
			return t => {
				if (css[t]) return
				if (
					!r.test(t)
					|| !/^([^']*\'[^']*\'[^']*|[^'])*$/.test(t)
					|| !/^([^"]*\"[^"]*\"[^"]*|[^"])*$/.test(t)
					|| /\([^)]*$/.test(t)
				) css[t] = " "
				else if (/^[^A-Za-z]/.test(t)) {
					if (/@.+@.+/.test(t)) {
						compileMedia(t)
						css[t] = " "
					} else {
						css[t] = [parsePriority(t), ".", compileSpecial(t)].join("")
					}
				} else css[t] = [parsePriority(t), ".", compileRaw(t)].join("")
			}
		})()
	})()

	const buildStyleSheet = () => {
		let theme = localStorage.getItem("THEME")
		set.forEach(t => compileStyle(t))
		styleSheet.innerHTML = [
			"/*reset↘*/",
			RESET,
			`/*↖reset\ninstant↘*/`,
			...Object.values(css).filter(v => v !== " "),
			...Object.values(media).map(v => {
				if (
					theme
					&& /prefers-color-scheme:dark/.test(v[0])
				) {
					let substr = v[0].slice(0, v[0].length - 1)
					return theme === "DARK"
						? [
							["/* ", substr, "is enabled */"].join(""),
							...Object.values(v[1]),
							""
						].join("\n")
						: ["/* ", substr, "is ignored */"].join("")
				}
				return [v[0], ...Object.values(v[1]), "}"].join("\n")
			}),
			"/*↖instant*/"
		].join("\n")
	}

	const colectClassList = () => {
		let size = set.size
		document.querySelectorAll("*[class]").forEach(
			A => A.classList.forEach(B => set.add(B))
		)
		set.size - size && buildStyleSheet()
		styleSheet.parentNode !== document.head 
			&& document.head.appendChild(styleSheet)
	}

	const observeClassList = () => document.body
		&& new MutationObserver(colectClassList)
			.observe(document.body, {
				attributeFilter: ["class"],
				childList: 1,
				subtree: 1,
			})

	const onReady = () => {
		colectClassList()
		observeClassList()
		document.removeEventListener("readystatechange", onReady)
	}
	window.instantCss = () => buildStyleSheet()
	document.addEventListener("readystatechange", onReady)
})()