<script lang="ts">
import { base } from "$app/paths"
import { page } from "$app/stores"
import { onMount } from "svelte"

export let href: string
export let text: string
export let classs = ""

let active: boolean
let activeAfter: boolean

onMount(() => {
	page.subscribe(() => {
		active = href == base + "/"
				? location.pathname == href || location.pathname + "/" == href
				: location.pathname.startsWith(href)
		if (active != activeAfter) setTimeout( () => activeAfter = active, 50)
	})
})
</script>

<a {href} on:mouseenter
		class="flex column ai=center
		:hover/bold
		:hover/c=--gray-10 @dark@:hover/c=--gray-80
		:hover>div/bg=--gray-80 @dark@:hover>div/bg=--gray-30
		{active ? "c=--primary-50!!" : ""}
		{classs}">
	<div class="relative flex jc=center ai=center w=3 h=1.5 br=.75">
		<div class="absolute bg=--primary-50 w=3 h=1.5 br=.75
				{active ? "tt=transform_.3s" : ""}
				{activeAfter ? "" : "tf=rotateY(90deg)"}"></div>
		<slot></slot>
	</div>
	<span class="fs=.6">{text}</span>
</a>