<script lang="ts">
import ILightMode from "cells/svgs/i_light_mode.svelte"
import ILightModeFill from "cells/svgs/i_light_mode_fill.svelte"
import IDarkMode from "cells/svgs/i_dark_mode .svelte"
import IDarkModeFill from "cells/svgs/i_dark_mode_fill.svelte"
import { theme$ } from "./store"
import { onMount as on_mount } from "svelte"

let deg = -180
let animation: boolean

const change_theme = () => {
	deg -= 180
	$theme$ = $theme$ == "DARK"
		? "LIGHT"
		: "DARK"
	localStorage.setItem("THEME", $theme$)
	// @ts-ignore
	// eslint-disable-next-line no-undef
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

<button class="relative w=14 h=3 br=1.75 ol=.1_solid o=hidden
		_svg/f=--gray-60
		:not(:hover)>div>div>div:nth-of-type(even)>svg>path/op=0
		:hover/c=--gray-20 @dark@:hover/c=--gray-90
		:hover/bg=--gray-80 @dark@:hover/bg=--gray-40"
		on:click={change_theme}>
	<div class="flex column ai=center p=6_15
			{animation ? "tt=transform_cubic-bezier(.9,0,.45,1.35)_.6s" : ""}
			tf=translate(-13em,-6em)_rotate({deg}deg)">
		<div class="relative w=3 h=3">
			<IDarkMode classs="absolute i=.25 w=2.5 h=2.5" />
			<IDarkModeFill classs="absolute i=.25 w=2.5 h=2.5 t=0.25 tt=opacity_.3s" />
		</div>
		<div class="h=10"></div>
		<div class="relative w=3 h=3">
			<ILightMode classs="absolute i=.25 w=2.5 h=2.5" />
			<ILightModeFill classs="absolute i=.25 w=2.5 h=2.5 t=0.25 tt=opacity_.3s" />
		</div>
	</div>
	<div class="absolute t=0 l=4 ai=center flex h=3">
		<span class="fs=1.25">Switch theme</span>
	</div>
</button>