declare var click: () => void
declare module "*?factory" {
	const factory: () => void
	export default factory
}
type Instance = {
	insert: (...targets: ElementStub[]) => string
	rebuild: (theme?: string) => string
	reset: string
	via_class_change: (...names: string[]) => string
	via_insertion: (...names: string[]) => string
	via_insertion_html: (html: string) => string
}
type ElementStub = {
	contains: (other: ElementStub) => boolean
	getAttribute: (name: string) => string | null
	nodeType: number
	querySelectorAll: (selector: string) => ElementStub[]
}
type MutationRecordStub = { target: ElementStub }