<script>
import { createEventDispatcher } from "svelte"

export let classs = ""
export let isDragging = false

/** @type {HTMLElement?} */
export let dragElement = null

/**
 * @param {number} clientX
 * @param {number} clientY
 * @param {HTMLElement} drag
 */
export const setDragElement = (clientX, clientY, drag) => {
	const containerRect = container.getBoundingClientRect()
	dragElement = drag
	x = clientX - containerRect.left
	y = clientY - containerRect.top
	container.append(dragElement)
	isDragging = true
}

const dispatch = createEventDispatcher()

/** @type {HTMLElement} */
let container

/** @type {HTMLElement?} */
let terrain
let x = 0
let y = 0
let cx = 0
let cy = 0

/** @type {number} */
let request_id

/** @param {{ clientX: number, clientY: number }} event */
const handle_mousemove = ({ clientX, clientY }) => {
	if (isDragging) {
		// @ts-ignore
		const current = get_terrain(document.elementsFromPoint(clientX, clientY))
		if (current && terrain != current) {
			if (terrain) {
				terrain.dispatchEvent(new DragEvent("dragleave"))
			}
			terrain = current
			terrain.dispatchEvent(new DragEvent("dragenter"))
		}
		cx = clientX
		cy = clientY
		translate()
		dispatch("dragmove")
		scroll(Date.now())
	}
}

/** @param {TouchEvent} event */
const handle_touchmove = event => {
	handle_mousemove(event.touches[0])
}
const handle_mouseup = () => {
	if (isDragging) {
		dragElement && container.removeChild(dragElement)
		if (terrain) {
			terrain.dispatchEvent(new DragEvent("drop"))
			terrain = null
		}
		dragElement = null
		isDragging = false
		dispatch("dragend")
	}
}
const handle_touchend = () => {
	handle_mouseup()
}

/** @param {HTMLElement[]} terrains */
const get_terrain = terrains => {
	const length = terrains.length
	for (let i = 0; i < length; i++) {
		if (!dragElement?.compareDocumentPosition(terrains[i])) {
			return terrains[i + 1]
		}
	}
}
const translate = () => {
	const containerRect = container.getBoundingClientRect()
	if (dragElement) {
		dragElement.style.transform = `translate(${cx - x - containerRect.left}px, ${cy - y - containerRect.top}px)`
	}
}

/** @param {number} time */
function scroll(time) {
	if (request_id) {
		return
	}
	request_id = requestAnimationFrame(() => {
		request_id = 0
		let xs = container
		for (;;) {
			if (xs === document.body) {
				break
			}
			if (xs.scrollWidth > xs.clientWidth) {
				if (xs.scrollLeft) {
					break
				} else {
					xs.scrollLeft = 1
					if (xs.scrollLeft) {
						xs.scrollLeft = 0
						break
					}
				}
			}
			if (xs.parentElement) {
				xs = xs.parentElement
			}
		}
		let ys = container
		for (;;) {
			if (ys === document.body) {
				break
			}
			if (ys.scrollHeight > ys.clientHeight) {
				if (ys.scrollTop) {
					break
				} else {
					ys.scrollTop = 1
					if (ys.scrollTop) {
						ys.scrollTop = 0
						break
					}
				}
			}
			if (ys.parentElement) {
				ys = ys.parentElement
			}
		}
		const dragRect = dragElement?.getBoundingClientRect()
		if (!dragRect) {
			return
		}
		const xRect = xs.getBoundingClientRect()
		const yRect = ys.getBoundingClientRect()
		if (dragRect.left >= xRect.left && dragRect.right <= xRect.right && dragRect.top >= yRect.top && dragRect.bottom <= yRect.bottom) {
			return
		}
		const now = Date.now()
		time = now - time
		if (dragRect.left < xRect.left) {
			xs.scrollBy((dragRect.left - xRect.left) * time / 30, 0)
		} else if (dragRect.right > xRect.right) {
			xs.scrollBy((dragRect.right - xRect.right) * time / 30, 0)
		}
		if (dragRect.top < yRect.top) {
			ys.scrollBy(0, (dragRect.top - yRect.top) * time / 30)
		} else if (dragRect.bottom > yRect.bottom) {
			ys.scrollBy(0, (dragRect.bottom - yRect.bottom) * time / 30)
		}
		translate()
		scroll(now)
	})
}
</script>

<svelte:body
		on:mousemove={handle_mousemove}
		on:mouseup={handle_mouseup}
		on:touchmove={handle_touchmove}
		on:touchend={handle_touchend} />

<div bind:this={container}
		class={classs}
		style="position:relative;">
	<slot></slot>
</div>