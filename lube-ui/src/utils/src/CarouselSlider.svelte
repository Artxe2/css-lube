<script>
import { onDestroy, onMount } from "svelte"

/** @type {""|"start"|"center"|"end"} */
export let align = ""
export let classs = ""
export let duration = 800
/**
 * @param {-1|0|1} direction
 * @param {"start" |"center" | "end"} [snapAlign]
 */
export const snap = (direction, snapAlign) => {
	const now = Date.now()
	if (snapAlign) align = snapAlign
	request_snapping(calculate_snap_move(0, direction) / duration, now, duration, 0)
}

/** @type {HTMLDivElement} */
let container
let isDragging = false
let startX = 0
let startTime = 0
let accumulate = 0
/** @type {number} */
let request
/** @type {number} */
let timer

/** @param {{ clientX: number }} event */
const handle_mousedown = event => {
	isDragging = true
	startX = event.clientX
	startTime = Date.now()
}
/** @param {TouchEvent} event */
const handle_touchstart = event => {
	handle_mousedown(event.touches[0])
}
/** @param {MouseEvent} event */
const handle_mousemove = event => {
	if (isDragging) {
		event.preventDefault()
		const scroll = startX - event.clientX
		container.scrollBy(scroll, event.clientY)
		startX = event.clientX
		if (scroll < 0 && accumulate > 0 || scroll > 0 && accumulate < 0) {
			startTime = Date.now()
			accumulate = scroll
		} else {
			accumulate += scroll
		}
	}
}
/** @param {TouchEvent} event */
const handle_touchmove = event => {
	handle_mousemove(new MouseEvent("mousemove", event.touches[0]))
}
const handle_mouseup = () => {
	if (isDragging) {
		const now = Date.now()
		if (align === "") {
			const speed = accumulate / (now - startTime)
			request_slipping(speed, now, duration, 0)
		} else {
			const speed = calculate_snap_move(accumulate * duration * 2 / (now - startTime), 0)
			request_snapping(speed / duration, now, duration, 0)
		}
		accumulate = 0
		isDragging = false
	}
}
const handle_touchend = () => {
	handle_mouseup()
}
/**
 * @param {number} speed
 * @param {number} prev
 * @param {number} time
 * @param {number} move
 */
const request_slipping = (speed, prev, time, move) => {
	cancelAnimationFrame(request)
	request = requestAnimationFrame( () => slipping(speed, prev, time, move) )
}
/**
 * @param {number} speed
 * @param {number} prev
 * @param {number} time
 * @param {number} move
 */
const slipping = (speed, prev, time, move) => {
	if (!speed) return
	const curr = Date.now()
	const ms = Math.min(time, curr - prev)
	move += speed * ms * time / duration + container.scrollLeft
	container.scrollLeft = move
	move -= container.scrollLeft
	if ((time -= ms) > 0) {
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
	cancelAnimationFrame(request)
	request = requestAnimationFrame(() => snapping(speed, prev, time, move))
}
/**
 * @param {number} speed
 * @param {number} prev
 * @param {number} time
 * @param {number} move
 */
const snapping = (speed, prev, time, move) => {
	if (!speed) return
	const curr = Date.now()
	const ms = Math.min(time, curr - prev)
	move += speed * ms + container.scrollLeft
	container.scrollLeft = move
	move -= container.scrollLeft
	if ((time -= ms) > 0) {
		request_snapping(speed, curr, time, move)
	} else {
		container.scrollLeft += move
	}
}
/**
 * @param {number} offset
 * @param {number} direction
 */
const calculate_snap_move = (offset, direction) => {
	/** @type {HTMLElement[]} */
	// @ts-ignore
	const childElements = [...container.children]
	const length = container.childElementCount
	if (length == 0) {
		return 0
	}
	let left = 0
	if (align === "" || align === "start") {
		const scrollLeft = container.scrollLeft
		for (let i = 0; ; i++) {
			if (left + childElements[i % length].offsetWidth >= scrollLeft + offset) {
				if (scrollLeft - left + offset < childElements[i % length].offsetWidth / 2) {
					if (direction < 0) {
						return left - scrollLeft - childElements[(i - 1 + length) % length].offsetWidth
					} else if (direction > 0) {
						return left - scrollLeft + childElements[i % length].offsetWidth
					} else {
						return left - scrollLeft
					}
				}
				if (direction < 0) {
					return left - scrollLeft
				} else if (direction > 0) {
					return left - scrollLeft + childElements[i % length].offsetWidth + childElements[(i + 1) % length].offsetWidth
				} else {
					return left - scrollLeft + childElements[i % length].offsetWidth
				}
			} else {
				left += childElements[i % length].offsetWidth
			}
		}
	} else if (align === "end") {
		const scrollLeft = container.scrollLeft + container.clientWidth
		for (let i = 0; ; i++) {
			if (left + childElements[i % length].offsetWidth >= scrollLeft + offset) {
				if (scrollLeft - left + offset < childElements[i % length].offsetWidth / 2) {
					if (direction < 0) {
						return left - scrollLeft - childElements[(i - 1 + length) % length].offsetWidth
					} else if (direction > 0) {
						return left - scrollLeft + childElements[i % length].offsetWidth
					} else {
						return left - scrollLeft
					}
				}
				if (direction < 0) {
					return left - scrollLeft
				} else if (direction > 0) {
					return left - scrollLeft + childElements[i % length].offsetWidth + childElements[(i + 1) % length].offsetWidth
				} else {
					return left - scrollLeft + childElements[i % length].offsetWidth
				}
			} else {
				left += childElements[i % length].offsetWidth
			}
		}
	} else {
		const scrollLeft = container.scrollLeft + container.clientWidth / 2
		for (let i = 0; ; i++) {
			if (left + childElements[i % length].offsetWidth / 2 >= scrollLeft + offset) {
				if (scrollLeft - left + offset < 0) {
					if (direction < 0) {
						return Math.floor(left - scrollLeft - childElements[(i - 1) % length].offsetWidth - childElements[(i - 2 + length) % length].offsetWidth / 2)
					} else if (direction > 0) {
						return Math.floor(left - scrollLeft + childElements[i % length].offsetWidth / 2)
					} else {
						return Math.floor(left - scrollLeft - childElements[(i - 1 + length) % length].offsetWidth / 2)
					}
				}
				if (direction < 0) {
					return Math.floor(left - scrollLeft - childElements[(i - 1 + length) % length].offsetWidth / 2)
				} else if (direction > 0) {
					return Math.floor(left - scrollLeft + childElements[i % length].offsetWidth + childElements[(i + 1) % length].offsetWidth / 2)
				} else {
					return Math.floor(left - scrollLeft + childElements[i % length].offsetWidth / 2)
				}
			} else {
				left += childElements[i % length].offsetWidth
			}
		}
	}
}
const copyChildsFull = () => {
	let maxChildWidth = 0
	/** @type {HTMLElement[]} */
	// @ts-ignore
	const childElements = [...container.children]
	for (const child of childElements) {
		maxChildWidth = Math.max(maxChildWidth, child.offsetWidth)
	}
	const safeWidth = container.offsetWidth + maxChildWidth * 3
	while (container.scrollWidth < safeWidth) {
		for (const child of childElements) {
			container.append(child.cloneNode(true))
		}
	}
}
onMount(() => {
	if (container.childElementCount == 0) {
		return
	}
	copyChildsFull()
	let first = container.firstElementChild
	let last = container.lastElementChild
	last && first?.before(last)
	first = container.firstElementChild
	last = container.lastElementChild
	const observer = new IntersectionObserver(
		entries => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					first && observer.unobserve(first)
					last && observer.unobserve(last)
					const target = entry.target
					if (target === first) {
						last && target.before(last)
						// @ts-ignore
						container.scrollLeft += last?.offsetWidth + 1
					} else {
						first && target.after(first)
						// @ts-ignore
						container.scrollLeft -= first?.offsetWidth + 1
					}
					first = container.firstElementChild
					last = container.lastElementChild
					first && observer.observe(first)
					last && observer.observe(last)
				}
			}
		}, {
			root: container
			,threshold: 0
		})
	first && observer.observe(first)
	last && observer.observe(last)
	timer = setInterval(() => {
		const initScroll = calculate_snap_move(0, 1)
		if (!initScroll || container.scrollLeft != (container.scrollLeft += initScroll)) {
			clearTimeout(timer)
		}
	}, 50)
})
onDestroy(() => clearInterval(timer))
</script>

<svelte:window
		on:mousemove={handle_mousemove}
		on:mouseup={handle_mouseup}/>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div bind:this={container}
		class={classs}
		style="overflow:scroll;touch-action:none;"
		on:mousedown={handle_mousedown}
		on:touchstart={handle_touchstart}
		on:touchmove={handle_touchmove}
		on:touchend={handle_touchend}>
	<slot></slot>
</div>