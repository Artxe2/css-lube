import { writable } from 'svelte/store'

export const _title = writable("")

const documents: DocumentItem[] = []
export const _documents = writable(documents)

const document: DocumentItem = null
export const _currentDocument = writable(document)