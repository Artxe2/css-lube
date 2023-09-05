import {
	readable,
	writable
} from "svelte/store"

import { client } from "fetch-lube"

export const theme$ = writable("")

/** @type {import("svelte/store").Writable<DrawerSubList>} */
export const drawer_sub_list$ = writable([])

const fetch_github_info = client("https://api.github.com/repos/:user/:repo")
	.get()
	.query

/** @returns {Promise<number>} */
const fetch_star = async () => {
	const response = await fetch_github_info({
		user: "artxe2",
		repo: "css-lube" 
	})
	if (response.status > 299) throw Error("Err:" + response.status)
	const json = await response.json()
	return json.stargazers_count
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