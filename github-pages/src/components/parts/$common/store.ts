import { client } from "fetch-lube"
import { readable, writable, type Writable } from "svelte/store"

export const theme$ = writable("")

export declare type DrawerSubList = ({ href: string, text: string } | { summary: string, list: { href: string, text: string }[] })[]
export const drawer_sub_list$: Writable<DrawerSubList> = writable([])

const fetch_github_info = client("https://api.github.com/repos/:user/:repo")
	.get()
	.query
const fetch_star = async () => {
	const response = await fetch_github_info({ user: "artxe2", repo: "css-lube" })
	if (response.status > 299) throw Error("Err:" + response.status)
	const json = await response.json()
	return json.stargazers_count as number
}
export const github_star$ = readable(
	fetch_star(),
	set => {
		const timer = setInterval(
			async () => set(fetch_star()),
			5 * 60 * 1000
		)
		return () => clearInterval(timer)
	}
)