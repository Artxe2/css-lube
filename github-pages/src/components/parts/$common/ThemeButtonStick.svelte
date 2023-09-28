<script>
import { theme$ } from "parts/$common/store.js"
import { onMount } from "svelte"
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
onMount(() => {
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

<button class="relative w=14 h=3 br=1.75 ol=.1_solid o=hidden us=none
		_svg/f=currentcolor
		:not(:hover)>div>div>svg:nth-of-type(even)/op=0
		:hover/c=--gray-20 @dark@:hover/c=--gray-90
		:hover/bg=--gray-80 @dark@:hover/bg=--gray-40"
		on:click={change_theme}>
	<div class="flex column ai=center p=6_15
			{animation && "tt=transform_cubic-bezier(.9,0,.45,1.35)_.6s"}
			tf=translate(-13em,-6em)_rotate({deg}deg)">
		<div class="relative w=3 h=3">
			<svg class="absolute i=.25 w=2.5 h=2.5 t=0.25">
				<use xlink:href="{base}/icons.svg#dark-mode" />
			</svg>
			<svg class="absolute i=.25 w=2.5 h=2.5 t=0.25 tt=opacity_.3s">
				<use xlink:href="{base}/icons.svg#dark-mode-fill" />
			</svg>
		</div>
		<div class="h=10"></div>
		<div class="relative w=3 h=3">
			<svg class="absolute i=.25 w=2.5 h=2.5 t=0.25">
				<use xlink:href="{base}/icons.svg#light-mode" />
			</svg>
			<svg class="absolute i=.25 w=2.5 h=2.5 t=0.25 tt=opacity_.3s">
				<use xlink:href="{base}/icons.svg#light-mode-fill" />
			</svg>
		</div>
	</div>
	<div class="absolute t=0 l=4 ai=center flex h=3">
		<span class="fs=1.25">Switch theme</span>
	</div>
</button>