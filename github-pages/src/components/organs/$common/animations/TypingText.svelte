<script lang="ts">
import {
	createEventDispatcher as create_event_dispatcher,
	onDestroy as on_destroy,
	onMount as on_mount
} from "svelte"

export let classs = ""
export let selector = "f"
export let bgc = "--anakiwa"
export let dark_bgc = "--astronaut"
export let orders: number[] | undefined = undefined
export let duration = 1000

const dispatch = create_event_dispatcher()
let timer: number
let wrapper: HTMLElement
let index = 0
let temp = ` _${selector}/none` 
const cursor = ":after/ct='|';c=#000;m=0_-.35_0_-.25;fs=1.5;lh=calc(2em/3)"
const dark_cursor = "@dark@:after/ct='|';c=#fff;m=0_-.35_0_-.25;fs=1.5;lh=calc(2em/3)"
const blink = ":after/a=blink_1s_step-end_infinite"
const sleep = async (ms: number) => new Promise(resolve => timer = setTimeout(resolve, ms))
const get_foldables = () => {
	if (!wrapper) {
		return
	}
	const foldables = wrapper.querySelectorAll(selector)
	const array = []
	if (orders) {
		for (let i = 0; i < orders.length; i++) {
			array[i] = foldables[orders[i]]
		}
	} else {
		for (let i = 0; i < foldables.length; i++) {
			array[i] = foldables[i]
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
	const texts = foldables.map(e => {
		const t = e.textContent
		e.textContent = ""
		return t
	})
	temp = ""
	dispatch("starttype", -1)
	dispatch("endtype", -1)
	index = 0
	foldables[0].classList.add(cursor, dark_cursor, blink)
	await sleep(duration)
	foldables[0].classList.remove(blink)
	while (index < length) {
		dispatch("starttype", index)
		foldables[index].classList.add(cursor, dark_cursor, "bg=" + bgc, "@dark@bg=" + dark_bgc)
		for (const t of texts[index]!) {
			foldables[index].textContent += t
			await sleep(30)
		}
		foldables[index].classList.add(blink)
		dispatch("endtype", index)
		await sleep(duration)
		foldables[index].classList.remove(cursor, dark_cursor, blink, "bg=" + bgc, "@dark@bg=" + dark_bgc)
		index++
	}
	foldables[index - 1].classList.add(cursor, dark_cursor, blink)
	await sleep(duration * 2)
	foldables[index - 1].classList.remove(cursor, dark_cursor, blink)
	animation()
}
on_mount(animation)
on_destroy(
	() => clearTimeout(timer)
)
</script>

<span bind:this={wrapper}
		class={classs + temp}><slot></slot></span>