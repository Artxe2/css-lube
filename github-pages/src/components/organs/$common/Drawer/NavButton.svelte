<script>
import { base } from "$app/paths"
import { page } from "$app/stores"
import { onMount as on_mount } from "svelte"

/** @type {string} */
export let href

/** @type {string} */
export let text
export let classs = ""

/** @type {boolean} */
let active

/** @type {boolean} */
let active_after

on_mount(() => {
	page.subscribe(() => {
		active = href == base + "/"
			? location.pathname == href || location.pathname + "/" == href
			: location.pathname.startsWith(href)
		if (active != active_after) setTimeout(() => active_after = active, 50)
	})
})
</script>

<a {href} on:mouseenter
		class="flex column ai=center
		:hover/bold
		:hover/c=--gray-10 @dark@:hover/c=--gray-80
		:hover>div/bg=--gray-80 @dark@:hover>div/bg=--gray-30
		{active && "c=--primary-50!! _svg/f=--primary-90"}
		{classs}">
	<div class="relative flex jc=center ai=center w=3 h=1.5 br=.75">
		<div class="absolute bg=--primary-50 w=3 h=1.5 br=.75
				{active && "tt=transform_.3s"}
				{active_after || "tf=rotateY(90deg)"}"></div>
		<slot></slot>
	</div>
	<span class="fs=.6">{text}</span>
</a>