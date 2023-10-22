<script>
import {
	afterUpdate,
	createEventDispatcher,
	tick
} from "svelte"

export let classs = ""
export let duration = 800
export let is_snap = false
/**
 * @param {-1|0|1} direction
 */
export const snap = direction => {
	request_snapping(
		calculate_snap_move(0, direction) / duration,
		now(),
		duration,
		0
	)
}

const dispatch = createEventDispatcher()

/** @type {number[]} */
const move_record = []
const now = Date.now
const record_length = 3
/** @type {number[]} */
const time_record = []
/** @type {(callback: FrameRequestCallback) => number} */
let raf
/** @type {(handle: number) => void} */
let caf
/** @type {IntersectionObserver} */
let observer
/** @type {HTMLDivElement} */
let container
let is_dragging = false
/** @type {number} */
let start_x
/** @type {number} */
let request
let index = 0
let observe_index = 1

/** @param {{ clientX: number }} event */
const handle_mousedown = event => {
	is_dragging = true
	start_x = event.clientX
	time_record[0] = now()
}
/** @param {TouchEvent} event */
const handle_touchstart = event => {
	handle_mousedown(event.touches[0])
}
/** @param {MouseEvent} event */
const handle_mousemove = event => {
	if (is_dragging) {
		event.preventDefault()
		const scroll = start_x - event.clientX
		container.scrollBy(scroll, event.clientY)
		start_x = event.clientX
		if (move_record.length == record_length) {
			move_record.shift()
			time_record.shift()
		}
		move_record.push(scroll)
		time_record.push(now())
	}
}
/** @param {TouchEvent} event */
const handle_touchmove = event => {
	handle_mousemove(
		new MouseEvent("mousemove", event.touches[0])
	)
}
const handle_mouseup = () => {
	if (is_dragging) {
		const curr = now()
		let accumulate = 0
		for (const n of move_record) accumulate += n
		if (is_snap) {
			const speed = calculate_snap_move(accumulate * duration * 2 / (curr - time_record[0]), 0)
			request_snapping(speed / duration, curr, duration, 0)
		} else {
			const speed = accumulate / (curr - time_record[0])
			request_slipping(speed, curr, duration, 0)
		}
		move_record.length = 0
		time_record.length = 0
		is_dragging = false
	}
}
const handle_touchend = handle_mouseup
const handle_scroll = () => {
	const child_elements = /** @type {HTMLElement[]} */([...container.children])/**/
	let scroll_left = container.scrollLeft - child_elements[0].offsetWidth
	let scroll_index = 0
	while (scroll_left >= 0) {
		scroll_left -= child_elements[++scroll_index].offsetWidth
	}
	if (child_elements[scroll_index].offsetWidth + scroll_left < child_elements[scroll_index].offsetWidth / 2) {
		scroll_index--
	}
	if (index != (observe_index + scroll_index) % container.childElementCount) {
		index = (observe_index + scroll_index) % container.childElementCount
		dispatch("changeindex", index)
	}
}
/**
 * @param {number} speed
 * @param {number} prev
 * @param {number} time
 * @param {number} move
 */
const request_slipping = (speed, prev, time, move) => {
	if (request) caf(request)
	request = raf(
		() => slipping(speed, prev, time, move)
	)
}
/**
 * @param {number} speed
 * @param {number} prev
 * @param {number} time
 * @param {number} move
 */
const slipping = (speed, prev, time, move) => {
	if (!speed) return
	const curr = now()
	const ms = Math.min(time, curr - prev)
	move += speed * ms * time / duration + container.scrollLeft
	container.scrollLeft = move
	move -= container.scrollLeft
	time -= ms
	if (time > 0) {
		request_slipping(speed, curr, time, move)
	} else {
		container.scrollLeft += move
	}
}
/**
 * @param {number} speed
 * @param {number} prev
 * @param {number} time
 * @param {number} move
 */
const request_snapping = (speed, prev, time, move) => {
	if (request) caf(request)
	request = raf(() => snapping(speed, prev, time, move))
}
/**
 * @param {number} speed
 * @param {number} prev
 * @param {number} time
 * @param {number} move
 */
const snapping = (speed, prev, time, move) => {
	if (!speed) return
	const curr = now()
	const ms = Math.min(time, curr - prev)
	move += speed * ms + container.scrollLeft
	container.scrollLeft = move
	move -= container.scrollLeft
	time -= ms
	if (time > 0) {
		request_snapping(speed, curr, time, move)
	} else {
		container.scrollLeft += move
	}
}
/**
 * @param {number} inertia
 * @param {number} direction
 */
const calculate_snap_move = (inertia, direction) => {
	if (!observer) return 0
	const child_elements = /** @type {HTMLElement[]} */([...container.children])/**/
	const length = child_elements.length
	let left = 0
	const scroll_left = container.scrollLeft
	let i = 0
	while (left + child_elements[i % length].offsetWidth < scroll_left + inertia) {
		left += child_elements[i++ % length].offsetWidth
	}
	if (scroll_left - left + inertia < child_elements[i % length].offsetWidth / 2) {
		return direction < 0
			? left - scroll_left - child_elements[(i - 1 + length) % length].offsetWidth
			: direction > 0
				? left - scroll_left + child_elements[i % length].offsetWidth
				: left - scroll_left
	}
	return direction < 0
		? left - scroll_left
		: direction > 0
			? left - scroll_left + child_elements[i % length].offsetWidth + child_elements[(i + 1) % length].offsetWidth
			: left - scroll_left + child_elements[i % length].offsetWidth
}
afterUpdate(() => {
	if (observer) return
	const count = container.childElementCount
	if (count < 4) return
	let max_child_width = 0
	const child_elements = /** @type {HTMLElement[]} */([...container.children])/**/
	for (const child of child_elements) {
		max_child_width = Math.max(max_child_width, child.offsetWidth)
	}
	const safe_width = container.offsetWidth + max_child_width * 3
	if (container.clientWidth >= safe_width) return
	raf = requestAnimationFrame
	caf = cancelAnimationFrame
	tick().then(() => {
		let first = container.firstElementChild
		let last = container.lastElementChild
		observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						first && observer.unobserve(first)
						last && observer.unobserve(last)
						const target = entry.target
						if (target === first) {
							last && target.before(last)
							container.scrollLeft += /** @type {HTMLElement} */(last)/**/.offsetWidth
							observe_index = (observe_index - 1 + count) % count
						} else if (target === last) {
							first && target.after(first)
							container.scrollLeft -= /** @type {HTMLElement} */(first)/**/.offsetWidth
							observe_index = (observe_index + 1) % count
						}
						first = container.firstElementChild
						last = container.lastElementChild
						first && observer.observe(first)
						last && observer.observe(last)
					}
				}
			}, {
				root: container,
				threshold: 0
			}
		)
		first && observer.observe(first)
	})
})
</script>

<svelte:window
		on:mousemove={handle_mousemove}
		on:mouseup={handle_mouseup}/>

<div bind:this={container}
		class={classs}
		style="display:flex;overflow:scroll;touch-action:none;"
		role="none"
		on:mousedown={handle_mousedown}
		on:touchstart={handle_touchstart}
		on:touchmove={handle_touchmove}
		on:touchend={handle_touchend}
		on:scroll={handle_scroll}>
	<slot></slot>
</div>