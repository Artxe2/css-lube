<script>
/**
 * @type {{
 *   bgc?: string
 *   children: import("svelte").Snippet
 *   classs?: string
 *   dark_bgc?: string
 *   duration?: number
 *   onendtype?: (event: CustomEvent<number>) => void
 *   onstarttype?: (event: CustomEvent<number>) => void
 *   orders?: number[]
 *   selector?: string
 * }}
 */
const {
	bgc = "--anakiwa",
	classs = "",
	dark_bgc = "--astronaut",
	duration = 1000,
	onendtype,
	onstarttype,
	orders,
	selector = "f"
} = $props()

/** @type {ReturnType<typeof setInterval>} */
let timer
let wrapper = /** @type {HTMLElement} */($state())/**/
let index = 0
let temp = $state(
	/** @type {string} */(` _${selector}/none`)/**/
)
const cursor = ":after/ct='|';c=#000;m=0_-.35em_0_-.25em;fs=1.5em;lh=calc(2em/3)"
const dark_cursor = "@dark@:after/ct='|';c=#fff;m=0_-.35em_0_-.25em;fs=1.5em;lh=calc(2em/3)"
const blink = ":after/a=blink_1s_step-end_infinite"
/** @param {number} ms */
const sleep = async ms =>
	new Promise(
		resolve => timer = setTimeout(resolve, ms)
	)
const get_foldables = () => {
	if (!wrapper) {
		return
	}
	const foldables = wrapper.querySelectorAll(selector)
	const array = []
	if (orders) {
		for (let i = 0; i < orders.length; i++) {
			array[i] = /** @type {Element} */(foldables[/** @type {number} */(orders[i])/**/])/**/
		}
	} else {
		for (let i = 0; i < foldables.length; i++) {
			array[i] = /** @type {Element} */(foldables[i])/**/
		}
	}

	return array
}
const animation = async () => {
	const foldables = get_foldables()
	if (!foldables) {
		return
	}
	const length = foldables.length
	const texts = foldables.map(
		e => {
			const t = e.textContent
			e.textContent = ""
			return t || ""
		}
	)
	temp = ""
	onstarttype?.(
		new CustomEvent("starttype", { detail: -1 })
	)
	onendtype?.(
		new CustomEvent("endtype", { detail: -1 })
	)
	index = 0
	;/** @type {Element} */(foldables[0])/**/.classList.add(cursor, dark_cursor, blink)
	await sleep(duration)
	;/** @type {Element} */(foldables[0])/**/.classList.remove(blink)
	while (index < length) {
		onstarttype?.(
			new CustomEvent("starttype", { detail: index })
		)
		;/** @type {Element} */(foldables[index])/**/.classList.add(
			cursor,
			dark_cursor,
			"bg=" + bgc,
			"@dark@bg=" + dark_bgc
		)
		for (const t of /** @type {string} */(texts[index])/**/) {
			/** @type {Element} */(foldables[index])/**/.textContent += t
			await sleep(30)
		}
		/** @type {Element} */(foldables[index])/**/.classList.add(blink)
		onendtype?.(
			new CustomEvent("endtype", { detail: index })
		)
		await sleep(duration)
		;/** @type {Element} */(foldables[index])/**/.classList.remove(
			cursor,
			dark_cursor,
			blink,
			"bg=" + bgc,
			"@dark@bg=" + dark_bgc
		)
		index++
	}
	/** @type {Element} */(foldables[index - 1])/**/.classList.add(cursor, dark_cursor, blink)
	await sleep(duration * 2)
	;/** @type {Element} */(foldables[index - 1])/**/.classList.remove(cursor, dark_cursor, blink)
	animation()
}
$effect(
	() => {
		animation()
		return () => clearTimeout(timer)
	}
)
</script>

<span bind:this={wrapper}
		class={classs + temp}><slot></slot></span>