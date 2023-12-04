<script>
/**
 * @type {{
 *   children: import("svelte").Snippet
 *   classs?: string
 *   dragElement?: HTMLElement?;
 *   ondragend?: (event: DragEvent) => void
 *   ondragmove?: (event: DragEvent) => void
 *   setDragElement: (clientX: number, clientY: number, drag_element: HTMLElement) => void
 * }}
 */
let {
	classs = "",
	dragElement = null,
	ondragend,
	ondragmove,
	setDragElement
} = $props()
setDragElement = (client_x, client_y, drag_element) => {
	dragElement = drag_element
	const container_rect = container.getBoundingClientRect()
	x = client_x - container_rect.left
	y = client_y - container_rect.top
	container.append(dragElement)
	is_dragging = true
}
setDragElement

let container = /** @type {HTMLElement} */($state())/**/
let cx = 0
let cy = 0
/** @type {boolean} */
let is_dragging
/** @type {number} */
let request_id
/** @type {HTMLElement?} */
let terrain
let x = 0
let y = 0

/** @param {{ clientX: number, clientY: number }} event */
const handle_mousemove = ({ clientX, clientY }) => {
	if (is_dragging) {
		const current = get_terrain(
			/** @type {HTMLElement[]} */(document.elementsFromPoint(clientX, clientY))/**/
		)
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
		ondragmove?.(new DragEvent("dragmove"))
		request_scroll_with_drag(Date.now())
	}
}
const handle_touchend = () => {
	handle_mouseup()
}
/** @param {TouchEvent} event */
const handle_touchmove = event => {
	handle_mousemove(event.touches[0])
}
const handle_mouseup = () => {
	if (is_dragging) {
		dragElement && container.removeChild(dragElement)
		if (terrain) {
			terrain.dispatchEvent(new DragEvent("drop"))
			terrain = null
		}
		dragElement = null
		is_dragging = false
		ondragend?.(new DragEvent("dragend"))
	}
}

/** @param {HTMLElement[]} terrains */
const get_terrain = terrains => {
	const length = terrains.length
	for (let i = 0; i < length; i++) {
		if (dragElement == terrains[i]) {
			return terrains[i + 1]
		}
	}
	return terrains[0]
}
const translate = () => {
	const container_rect = container.getBoundingClientRect()
	if (dragElement) {
		dragElement.style.transform = `translate(${cx - x - container_rect.left}px, ${cy - y - container_rect.top}px)`
	}
}

/** @param {number} time */
const request_scroll_with_drag = time => {
	if (request_id) return
	request_id = requestAnimationFrame(() => scroll_with_drag(time))
}

/** @param {number} time */
const scroll_with_drag = time => {
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
	const drag_rect = dragElement?.getBoundingClientRect()
	if (!drag_rect) {
		return
	}
	const x_rect = xs.getBoundingClientRect()
	const y_rect = ys.getBoundingClientRect()
	if (drag_rect.left >= x_rect.left && drag_rect.right <= x_rect.right && drag_rect.top >= y_rect.top && drag_rect.bottom <= y_rect.bottom) {
		return
	}
	const now = Date.now()
	time = now - time
	if (drag_rect.left < x_rect.left) {
		xs.scrollBy(
			(drag_rect.left - x_rect.left) * time / 30,
			0
		)
	} else if (drag_rect.right > x_rect.right) {
		xs.scrollBy(
			(drag_rect.right - x_rect.right) * time / 30,
			0
		)
	}
	if (drag_rect.top < y_rect.top) {
		ys.scrollBy(
			0,
			(drag_rect.top - y_rect.top) * time / 30
		)
	} else if (drag_rect.bottom > y_rect.bottom) {
		ys.scrollBy(
			0,
			(drag_rect.bottom - y_rect.bottom) * time / 30
		)
	}
	translate()
	request_scroll_with_drag(now)
}
</script>

<svelte:window
		onmousemove={handle_mousemove}
		onmouseup={handle_mouseup}
		ontouchmove={handle_touchmove}
		ontouchend={handle_touchend} />

<div bind:this={container}
		class={classs}
		style="position:relative;">
	<slot></slot>
</div>