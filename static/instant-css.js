(() => {
	const RESET = `*{margin:0;padding:0;font:inherit;color:inherit}
*,:after,:before{box-sizing:border-box;flex-shrink:0}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}
html,body{height:100%;overflow:hidden}
img,picture,video,canvas{display:block;max-width:100%}
button{background:none;border:0;cursor:pointer}
a{text-decoration:none}
table{border-collapse:collapse;border-spacing:0}
ol,ul,menu,dir{list-style:none}`
	const abbrKeys = JSON.parse(`{
"b":"border",
"bg":"background-color",
"br":"border-radius",
"c":"color",
"fs":"font-size",
"ff":"font-family",
"fw":"font-weight",
"h":"height",
"lh":"line-height",
"m":"margin",
"p":"padding",
"w":"width",
"z":"z-index"
}`)
	const abbrValues = JSON.parse(`{
"absolute":"position:absolute",
"block":"display:block",
"column":"flex-direction:column",
"flex":"display:flex",
"fixed":"position:fixed",
"inline-block":"display:inline-block",
"inlineBlock":"display:inline-block",
"none":"display:none",
"pointer":"cursor:pointer",
"row":"flex-direction:row",
"relative":"position:relative"
}`)
	const styleSheet = document.createElement("style")
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
		const parseQuery = t => {
			const func = t => t.replace(/=/g, ":")
				.replace(/[A-Z](?!\()/g, s => "-" + s.toLowerCase())
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
					return ["(", func(s), ")"].join("")
				})
				.replace(/\bdark\b/, "(prefers-color-scheme:dark)")
			return ["@media ", t, "{"].join("")
		}
		const parseValue = (() => {
			const abbrEqual = t => t.replace(/=/g, ":")
			const abbrUpper = t => t.replace(/[A-Z](?!\()/g, s => "-" + s.toLowerCase())
			const abbrKey = (() => {
				let r = new RegExp(["(?<=^|\/|;)(", Object.keys(abbrKeys).join("|"), ")(?=:)"].join(""), "g")
				return t => t.replace(r, s => abbrKeys[s])
			})()
			const abbrValue = (() => {
				let r = new RegExp(["(?<=^|\/|;)(", Object.keys(abbrValues).join("|"), ")(?=;|$)"].join(""), "g")
				return t => t.replace(r, s => abbrValues[s])
			})()
			const abbrEm = (() => {
				return t => t.replace(/(?<=(^|;)(border-radius|bottom|font-size|height|left|margin|padding|right|top|width)):-?\d+\.?\d*(?=;|$)/g, s => s + "em")
			})()
			const abbrCalc = (() => {
				let r = /(?<=calc\(.+?) *[+\-*/] *(?=.+?\))/g
				return t => t.replace(r, s => [" ", s, " "].join(""))
			})()
			const abbrVar = (() => {
				let r = /(?<=:)--[^ ;]+(?=;|$)/g
				return t => t.replace(r, s => ["var(", s, ")"].join(""))
			})()
			return t => abbrVar(
				abbrCalc(
					abbrEm(
						abbrValue(
							abbrKey(
								abbrUpper(
									abbrEqual(
										t.replace(/_/g, " ").replace(/\!+$/, "")
									)
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