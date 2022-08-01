(() => {
	if (typeof document !== "undefined") {
		const RESET = `/*reset↘*/
*{margin:0;padding:0;font:inherit;color:inherit;}
*,:after,:before{box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}
/*↖reset
instant↘*/`
		const set = new Set()
		const media = {}
		const css = {}
		const parseCss = (() => {
			const parseValue = t => {
				console.log("parseValue(", t, ")")
				return t.replace(/=/g, ":").replace(/_/g, " ")
			}
			const special = t => {
				if (/@.+@.+/.test(t)) {
					mediaQuery(t)
				} else {
					const name = CSS.escape(t)
					const selector = t.replace(/\/.+/, "").replace(/_/g, " ")
					const value = parseValue(t.replace(/.+?\//, ""))
					css[t] = [".", name, selector, "{", value, "}"].join("")
				}
			}
			const mediaQuery = t => {
				console.log(t)
			}
			const raw = t => {
				const name = CSS.escape(t)
				const value = parseValue(t)
				css[t] = [".", name, "{", value, "}"].join("")
			}
			return t => !css[t]
				&& (!/^[^a-z]/.test(t) || special(t))
				&& raw(t)
		})()

		const styles = document.createElement("style")
		styles.innerHTML = "body{display:none!important}"
		document.head.appendChild(styles)

		const compileStyles = () => {
			set.forEach(t => parseCss(t))
			styles.innerHTML = [RESET, ...Object.values(css), "/*↖instant*/"].join(`
`)
		}
		const readClassList = () => {
			const size = set.size
			Array.from(document.querySelectorAll("*[class]"))
				.forEach(e => Array.from(e.classList).forEach(c => set.add(c)))
			size !== set.size && compileStyles()
			styles.parentNode !== document.head && document.head.appendChild(styles)
		}
		const observeDocument = () => {
			document.body && new MutationObserver(readClassList).observe(
				document.documentElement
				, {
					attributes: !0,
					attributeFilter: ["class"],
					childList: !0,
					subtree: !0,
				}
			)
		}

		const handleReadyStateChange = () => {
			readClassList()
			observeDocument()
			document.removeEventListener("readystatechange", handleReadyStateChange)
		}
		handleReadyStateChange()
		document.addEventListener("readystatechange", handleReadyStateChange)
	}
})()