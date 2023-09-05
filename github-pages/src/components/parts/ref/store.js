import { writable } from "svelte/store"

/** @type {import("svelte/store").Writable<{ title: string, content: string }[]>} */
export const contents$ = writable([])

/** @type {import("svelte/store").Writable<string[]>} */
export const todo$ = writable([])

/** @type {import("svelte/store").Writable<number[]>} */
export const todo_tf$ = writable([])

/** @type {import("svelte/store").Writable<string[]>} */
export const done$ = writable([])

/** @type {import("svelte/store").Writable<number[]>} */
export const done_tf$ = writable([])

export const transition$ = writable(false)

/** @type {import("svelte/store").Writable<{ type: "todo"|"done", index: number }|null>} */
export const drag$ = writable(null)