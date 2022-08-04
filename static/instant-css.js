(() => {
	let R/*RESET*/ = `*{margin:0;padding:0;font:inherit;color:inherit;}
*,:after,:before{box-sizing:border-box;flex-shrink:0;}
:root{-webkit-tap-highlight-color:transparent;text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.5;overflow-wrap:break-word;word-break:break-word;tab-size:2}
html,body{height:100%;}
img,picture,video,canvas{display:block;max-width:100%;}
button{background:none;border:0;cursor:pointer;}
a{text-decoration:none;}
table{border-collapse:collapse;border-spacing:0;}
ol,ul,menu,dir{list-style:none;}`
	let K/*ARIAS_KEYS*/ = JSON.parse(`{
"bg":"background-color",
"c":"color",
"w":"width",
"h":"height",
"m":"margin",
"p":"padding",
"br":"border-radius"
}`)
	let V/*ARIAS_VALUES*/ = JSON.parse(`{
"block":"display:block",
"flex":"display:flex",
"inline-block":"display:inline-block",
"pointer":"cursor:pointer",
"column":"flex-direction:column",
"row":"flex-direction:row",
"absolute":"position:absolute",
"relative":"position:relative"
}`)
	let S/*styles*/ = document.createElement("style")
	S.innerHTML = "body{display:none!important}"
	document.head.appendChild(S)
	let set = new Set()
	let M/*media*/ = {}
	let C/*css*/ = {}
	let e/*compileStyle*/ = (() => {
		let k/*raw*/ = t => [
			CSS.escape(t),
			"{", h(t), "}"
		].join("")
		let j/*special*/ = t => [
			CSS.escape(t),
			t.replace(/\/.+/, "").replace(/_/g, " "),
			"{", h(t.replace(/.+?\//, "")), "}"
		].join("")
		let i/*important*/ = t => {
			if (!/\!$/.test(t)) return ""
			let A/*index*/ = t.length - 2
			let B/*count*/ = 1
			while (t.charAt(A--) === "!") B++
			let D/*prefix*/ = [B % 3 == 2 ? "html " : "", B % 3 ? "body " : ""]
			B = parseInt(B / 3)
			while (B--) D.push("[class]")
			return D.join("")
		}
		let h/*parseValue*/ = (() => {
			let z/*ariasKey*/ = (() => {
				let r = new RegExp(["(?<=^|\/|;)(", Object.keys(K).join("|"), ")(?=:)"].join(""), "g")
				return t => t.replace(r, s => K[s])
			})()
			let y/*ariasValue*/ = (() => {
				let r = new RegExp(["(?<=^|\/|;)(", Object.keys(V).join("|"), ")(?=;|$)"].join(""), "g")
				return t => t.replace(r, s => V[s])
			})()
			let x/*ariasCalc*/ = (() => {
				let r = /(?<=calc\(.+?) *[+\-*/] *(?=.+?\))/g
				return t => t.replace(r, s => [" ", s, " "].join(""))
			})()
			let w/*ariasUpper*/ = (() => {
				let r = /[A-Z]/g
				return t => t.replace(r, s => "-" + s.toLowerCase())
			})()
			let v/*ariasPx*/ = (() => {
				let r = /(?<=width|height|margin|padding|border-radius|left|right|top|bottom):-?\d+(?=;|$)/g
				return t => t.replace(r, s => s + "px")
			})()
			return t => v(w(x(y(z(
				t.replace(/=/g, ":").replace(/_/g, " ").replace(/\!+$/, "")
			)))))
		})()
		let g/*parseQuery*/ = t => {
			t = t.replace(/^!/, "not ").replace(/&/g, " and ")
				.replace(/[^ ]+=[^ ]+/g, s => {
					if (/~/.test(s)) {
						let A/*name*/ = s.replace(/=.+/, "")
						let B/*unit*/ = s.replace(/.+~\d+/, "") || "px"
						return [
							"(min-",
							A, ":", s.replace(/.+=|~.+/g, ""), B,
							") and (max-",
							A, ":", s.replace(/.+~|[^\d]+/g, ""), B,
							")"
						].join("")
					}
					return ["(", h(s), ")"].join("")
				})
			return ["@media ", t, "{"].join("")
		}
		let f/*compileMedia*/ = t => {
			let A/*query*/ = t.replace(/^@|@.+/g, "")
			let B/*group*/ = M[A]
			if (!B) {
				M[A] = [g(A), {}]
				B = M[A]
			} else if (B[t]) return
			let D/*name*/ = t.replace(/.+@/, "")
			B[1][t] = [
				"	", i(D), ".",
				CSS.escape(t.replace(/(?<=.+@).+/, "")),
				/^[^a-z]/.test(D) ? j(D) : k(D)
			].join("")
		}
		return (() => {
			let r = new RegExp(["[;=:]", ...Object.keys(V)].join("|"))
			return t => {
				if (C[t]) return
				if (!r.test(t) || /\([^)]*$/.test(t)) C[t] = ""
				else if (/^[^A-Za-z]/.test(t)) {
					if (/@.+@.+/.test(t)) {
						f(t)
					} else {
						C[t] = [i(t), ".", j(t)].join("")
					}
				} else C[t] = [i(t), ".", k(t)].join("")
			}
		})()
	})()
	let d/*compileStyles*/ = () => {
		set.forEach(t => e(t))
		S.innerHTML = [
			"/*reset↘*/",
			R,
			`/*↖reset\ninstant↘*/`,
			...Object.values(M).map(v => [v[0], ...Object.values(v[1]), "}"].join("\n")),
			...Object.values(C).filter(v => v), "/*↖instant*/"
		].join("\n")
	}
	let c/*readClasslist*/ = () => {
		let size = set.size
		Array.from(document.querySelectorAll("*[class]"))
			.forEach(A => Array.from(A.classList).forEach(B => set.add(B)))
		set.size - size && d() && S.parentNode !== document.head && document.head.appendChild(S)
	}
	let b/*observe*/ = () => document.body && new MutationObserver(c)
		.observe(document.body, {
			attributeFilter: ["class"],
			childList: 1,
			subtree: 1,
		})
	let a/*onReady*/ = () => {
		c()
		b()
		document.removeEventListener("readystatechange", a)
	}
	document.addEventListener("readystatechange", a)
})()