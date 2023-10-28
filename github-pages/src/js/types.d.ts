export type Menu<T extends string = ""> = {
	href: `${T}/${string}`,
	name: string,
	subs?: Menu<`${T}/${string}`>[]
}