<script>
import { base } from "$app/paths"
import { page } from "$app/stores"
import { onMount } from "svelte"

/** @type {import("js/types.js").Menu} */
export let menu
export let classs = ""

/** @type {boolean} */
let is_open
/** @type {boolean} */
let active

onMount(() => {
	page.subscribe(() => {
		active = menu.href == base + "/"
			? location.pathname == menu.href || location.pathname + "/" == menu.href
			: location.pathname.startsWith(menu.href)
	})
})
</script>

{#if menu.subs}
<button class="relative w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25
		:hover/bg=--gray-70 @dark@:hover/bg=--gray-40
		{active && "bg=--primary-50!! c=--primary-90!!"}
		{classs}"
		on:click={() => is_open = !is_open}>
	<slot></slot>
	<span class="fs=1.5">{menu.name}</span>
	<div class="absolute b=50% r=1 h=.75 w=.25 br=.125
			tt=transform_.3s tfo=bottom
			tf=rotate({is_open ? "-135deg" : "-45deg"})_translateY(.1em)
			bg=--gray-30 @dark@bg=--gray-70
			{active && "bg=--primary-90!"}"></div>
	<div class="absolute b=50% r=1 h=.75 w=.25 br=.125
			tt=transform_.3s tfo=bottom
			tf=rotate({is_open ? "135deg" : "45deg"})_translateY(.1em)
			bg=--gray-30 @dark@bg=--gray-70
			{active && "bg=--primary-90!"}"></div>
</button>
<ul class="ml=1 o=hidden">
	{#if menu.subs}
		{#each menu.subs as m}
		<li class="relative tt=margin-top_.3s
				{is_open || "mt=-3.75"}">
			<svelte:self menu={m} />
		</li>
		{/each}
	{/if}
</ul>
{:else}
<a href={menu.href}>
	<button class="w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25
			:hover/bg=--gray-70 @dark@:hover/bg=--gray-40
			{active && "bg=--primary-50!! c=--primary-90!!"}
			{classs}">
		<slot></slot>
		<span class="fs=1.5">{menu.name}</span>
	</button>
</a>
{/if}