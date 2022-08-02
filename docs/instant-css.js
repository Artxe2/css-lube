(() => {
	let RESET = `*{margin:0;padding:0;font:inherit;color:inherit;}
*,:after,:before{box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}`
	let ARIAS = {
		"bg": "background-color",
		"c": "color"
	}
	let ARIAS_REGEX = new RegExp(["(?<=^|;)", Object.keys(ARIAS).join("|"), "(?=:)"].join(""), "g")
	let set = new Set()
	let media = {}
	let css = {}
	let compileStyle = (() => {
		let raw = t => {
			let name = CSS.escape(t)
			let value = parseValue(t)
			return [name, "{", value, "}"].join("")
		}
		let special = t => {
			let name = CSS.escape(t)
			let selector = t.replace(/\/.+/, "").replace(/_/g, " ")
			let value = parseValue(t.replace(/.+?\//, ""))
			return [name, selector, "{", value, "}"].join("")
		}
		let important = t => {
			if (!/\!$/.test(t)) {
				return ""
			}
			let index = t.length - 2
			let count = 1
			while (t.charAt(index--) === "!") {
				count++
			}
			let array = [count % 3 == 2 ? "html " : "", count % 3 ? "body " : ""]
			count = parseInt(count / 3)
			while (count--) {
				array.push("[class]")
			}
			return array.join("")
		}
		let arias = t => t.replace(ARIAS_REGEX, s => ARIAS[s])
		let parseValue = t => arias(t.replace(/=/g, ":").replace(/_/g, " ").replace(/\!+$/, ""))
		let parseQuery = t => {
			t = t.replace(/^!/, "not ").replace(/&/g, " and ")
				.replace(/[^ ]+=[^ ]+/g, s => {
					if (/~/.test(s)) {
						let name = s.replace(/=.+/, "")
						let min = s.replace(/.+=|~.+/g, "")
						let max = s.replace(/.+~|[^\d]+/g, "")
						let unit = s.replace(/.+~\d+/, "") || "px"
						return ["(min-", name, ":", min, unit, ") and (max-", name, ":", max, unit, ")"].join("")
					}
					return ["(", parseValue(s), ")"].join("")
				})
			return ["@media ", t, "{"].join("")
		}
		let compileMedia = t => {
			let query = t.replace(/^@|@.+/g, "")
			let group = media[query]
			if (!group) {
				media[query] = [parseQuery(query), {}]
				group = media[query]
			} else if (group[t]) {
				return
			}
			let prefix = CSS.escape(t.replace(/(?<=.+@).+/, ""))
			let tt = t.replace(/.+@/, "")
			let name = /^[^a-z]/.test(tt) ? special(tt) : raw(tt)
			group[1][t] = ["	", important(tt), ".", prefix, name].join("")
		}
		return t => {
			if (css[t]) {
				return
			}
			if (/^[^a-z]/.test(t)) {
				if (/@.+@.+/.test(t)) {
					compileMedia(t)
				} else {
					css[t] = [important(t), ".", special(t)].join("")
				}
			} else {
				css[t] = [important(t), ".", raw(t)].join("")
			}
		}
	})()

	let styles = document.createElement("style")
	styles.innerHTML = "body{display:none!important}"
	document.head.appendChild(styles)

	let compileStyles = () => {
		set.forEach(t => compileStyle(t))
		styles.innerHTML = ["/*reset↘*/", RESET, `/*↖reset\ninstant↘*/`, ...Object.values(media).map(v => [v[0], ...Object.values(v[1]), "}"].join("\n")), ...Object.values(css), "/*↖instant*/"].join("\n")
	}
	let readClassList = () => {
		let size = set.size
		Array.from(document.querySelectorAll("*[class]"))
			.forEach(e => Array.from(e.classList).forEach(c => set.add(c)))
		size !== set.size && compileStyles()
		styles.parentNode !== document.head && document.head.appendChild(styles)
	}
	let observeDocument = () => {
		document.body && new MutationObserver(readClassList).observe(
			document.documentElement,
			{
				attributes: !0,
				attributeFilter: ["class"],
				childList: !0,
				subtree: !0,
			}
		)
	}

	let onReady = () => {
		readClassList()
		observeDocument()
		document.removeEventListener("readystatechange", onReady)
	}
	onReady()
	document.addEventListener("readystatechange", onReady)
})()