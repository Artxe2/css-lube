import { writable } from "svelte/store"

export const contents$ = writable(
	/** @type {{ title: string, content: string }[]} */([])/**/
)

export const todo$ = writable(
	/** @type {string[]} */([])/**/
)

export const todo_tf$ = writable(
	/** @type {number[]} */([])/**/
)

export const done$ = writable(
	/** @type {string[]} */([])/**/
)

export const done_tf$ = writable(
	/** @type {number[]} */([])/**/
)

export const transition$ = writable(false)

export const drag$ = writable(
	/** @type {{ type: "todo"|"done", index: number }?} */(null)/**/
)