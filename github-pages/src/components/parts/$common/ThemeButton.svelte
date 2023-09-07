<script>
import { theme$ } from "parts/$common/store.js"
import { onMount as on_mount } from "svelte"
import { base } from "$app/paths"

let deg = -180
/** @type {boolean} */
let animation

const change_theme = () => {
	deg -= 180
	$theme$ = $theme$ == "DARK"
		? "LIGHT"
		: "DARK"
	localStorage.setItem("THEME", $theme$)
	/* @ts-ignore: window.cssLube */// eslint-disable-next-line no-undef
	cssLube()
}
on_mount(() => {
	let theme = localStorage.getItem("THEME") || ""
	if (!theme && matchMedia?.("(prefers-color-scheme: dark)").matches) {
		theme = "DARK"
		localStorage.setItem("THEME", "DARK")
	}
	$theme$ = theme
	if (theme == "DARK") deg = 0
	setTimeout(
		() => animation = true
		,
		50
	)
})
</script>

<button class="w=2 h=2 br=1 ol=.1_solid o=hidden
		:hover/bg=--gray-90 @dark@:hover/bg=--gray-30
		_svg/f=--gray-60
		:not(:hover)>div>div>svg:nth-of-type(even)/op=0"
		on:click={change_theme}>
	<div class="flex column ai=center p=0_2
			{animation && "tt=transform_cubic-bezier(.9,0,.45,1.8)_.5s"}
			tf=translateX(-1em)_rotate({deg}deg)">
		<div class="relative w=2 h=2">
			<svg class="absolute i=.25 w=1.5 h=1.5">
				<use xlink:href="{base}/icons.svg#dark-mode" />
			</svg>
			<svg class="absolute i=.25 w=1.5 h=1.5 tt=opacity_.3s">
				<use xlink:href="{base}/icons.svg#dark-mode-fill" />
			</svg>
		</div>
		<div class="relative w=2 h=2">
			<svg class="absolute i=.25 w=1.5 h=1.5">
				<use xlink:href="{base}/icons.svg#light-mode" />
			</svg>
			<svg class="absolute i=.25 w=1.5 h=1.5 tt=opacity_.3s">
				<use xlink:href="{base}/icons.svg#light-mode-fill" />
			</svg>
		</div>
	</div>
</button>