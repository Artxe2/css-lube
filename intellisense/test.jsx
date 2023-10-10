var n = 5
const a = <a class="fs=2">{n}</a>
const text = "<div></div>"
const props = {}

export function App() {
	const is_active = false
	return (
		<div {...props} style="color: red; background: blue;"
			className={`:hover/c=--primary-50;bold
			c=red bg=blue
			@dark@c=white
			:active/tf=scale(1.2)
			${is_active ?? "bold;fs=1.2"}`}>
			{a}
			{text}
		</div>
	)
}