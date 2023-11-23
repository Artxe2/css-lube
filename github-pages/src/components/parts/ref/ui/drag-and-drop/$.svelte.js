let items$ = $state(
	{
		done: [ "Task Z", "" ],
		todo: [
			"Task A",
			"Task B",
			"Task C",
			"Task D",
			"Task E",
			"Task F",
			"Task G",
			"Task H",
			"Task I",
			"Task J",
			"Task K",
			"Task L",
			""
		]
	}
)
const heights = {
	done: /** @type {number[]} */([])/**/,
	todo: /** @type {number[]} */([])/**/
}
let is_dragging$ = $state(false)
/** @type {number[]} */
let transform$ = $state([])
/** @type {"done" | "todo"} */
let drag_type$ = $state("done")
let index$ = $state(0)
let start_index$ = $state(0)

/** @returns {void} */
const end_drag = () => {
	if (is_dragging$) {
		if (start_index$ != index$) {
			const item = items$[drag_type$].splice(start_index$, 1)[0]
			items$[drag_type$].splice(index$, 0, item)
		}
	}
	is_dragging$ = false
}
/**
 * @param {number} index
 * @param {"done" | "todo"} type
 * @returns {void}
 */
const enter_drag = (index, type) => {
	if (type != drag_type$) move_item(index, type)
	else if (index != start_index$) transition_list(index)
}
/**
 * @param {number} index
 * @param {"done" | "todo"} type
 * @returns {void}
 */
const move_item = (index, type) => {
	const item = items$[drag_type$].splice(start_index$, 1)[0]
	items$[type].splice(index, 0, item)
	start_index$ = index$ = index
	drag_type$ = type
	transform$ = []
	items$ = { ...items$ }
}
/**
 * @param {number} index
 * @param {"done" | "todo"} type
 * @returns {void}
 */
const start_drag = (index, type) => {
	transform$ = []
	index$ = index
	start_index$ = index
	drag_type$ = type
	is_dragging$ = true
}
/** @param {number} index */
const transition_list = index => {
	if (transform$[index]) {
		if (index$ > start_index$) {
			for (let i = index$; i >= index; i--) {
				transform$[i] = 0
			}
		} else {
			for (let i = index$; i <= index; i++) {
				transform$[i] = 0
			}
		}
		transform$ = [ ...transform$ ]
	} else {
		transform$ = []
		if (index > start_index$) {
			for (let i = start_index$ + 1; i <= index; i++) {
				transform$[i] = -heights[drag_type$][start_index$]
			}
		} else {
			for (let i = start_index$ - 1; i >= index; i--) {
				transform$[i] = heights[drag_type$][start_index$]
			}
		}
	}
	index$ = index
}
const todo_list = {
	heights,
	get $drag_type() {
		return drag_type$
	},
	get $is_dragging() {
		return is_dragging$
	},
	get $items() {
		return items$
	},
	get $start_index() {
		return start_index$
	},
	get $transform() {
		return transform$
	},
	end_drag,
	enter_drag,
	start_drag
}

export { todo_list }