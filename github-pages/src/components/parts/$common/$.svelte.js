import { client } from "async-lube"

let theme$ = $state("")
const theme = {
	get $() {
		return theme$
	},
	change_theme() {
		theme$ = theme$ == "DARK"
			? "LIGHT"
			: "DARK"
		localStorage.setItem("THEME", theme$)
		cssLube()
	},
	init() {
		let data = localStorage.getItem("THEME") || ""
		if (!theme && matchMedia?.("(prefers-color-scheme: dark)").matches) {
			data = "DARK"
			localStorage?.setItem("THEME", "DARK")
		}
		theme$ = data
	}
}

const fetch_github_info = client(
	"https://api.github.com/repos/:user/:repo/stargazers"
).get().query
/** @returns {Promise<number>} */
const fetch_star = async () => {
	const response = await fetch_github_info(
		{ user: "artxe2", repo: "css-lube" }
	)
	if (response.status > 399) return NaN
	const json = await response.json()
	return json.length
}
const github_star$ = $state(fetch_star())
const github_star = {
	get $() {
		return github_star$
	}
}

export { theme, github_star }