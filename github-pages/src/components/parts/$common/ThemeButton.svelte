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

<button class="w=2 h=2 br=1 ol=.1_solid o=hidden
		:hover/bg=--gray-90 @dark@:hover/bg=--gray-30
		_svg/f=--gray-60
		:not(:hover)>div>div>div:nth-of-type(even)>svg>path/op=0"
		on:click={change_theme}>
	<div class="flex column ai=center p=0_2
			{animation ? "tt=transform_cubic-bezier(.9,0,.45,1.8)_.5s" : ""}
			tf=translateX(-1em)_rotate({deg}deg)">
		<div class="relative w=2 h=2">
			<IDarkMode classs="absolute i=.25 w=1.5 h=1.5" />
			<IDarkModeFill classs="absolute i=.25 w=1.5 h=1.5 t=0.25 tt=opacity_.3s" />
		</div>
		<div class="relative w=2 h=2">
			<ILightMode classs="absolute i=.25 w=1.5 h=1.5" />
			<ILightModeFill classs="absolute i=.25 w=1.5 h=1.5 t=0.25 tt=opacity_.3s" />
		</div>
	</div>
</button>