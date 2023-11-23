<script>
/**
 * @type {{
 *   classs?: string
 *   close?: Function
 *   menu: import("js/types.js").Menu
 * }}
 */
let { classs = "", close, menu } = $props()
close = () => {
	is_open = false
	for (const c of close_childs) c()
}

import { base } from "$app/paths"
import { page } from "$app/stores"

/** @type {boolean} */
let is_open = $state(false)
/** @type {boolean} */
let active = $state(false)
/** @type {Function[]} */
const close_childs = $state([])

const toggle_open = () => {
	if (is_open) close?.()
	else is_open = true
}

$effect.pre(
	() => {
		page.subscribe(
			() => {
				active = menu.href == base + "/"
					? location.pathname == menu.href || location.pathname + "/" == menu.href
					: location.pathname.startsWith(menu.href)
			}
		)
	}
)
</script>

{#if menu.subs}
<button class="relative w=100% h=3.5 br=1.75 pl=1 ta=left mb=.25
		:hover/bg=--gray-70 @dark@:hover/bg=--gray-40
		{active && "bg=--primary-50!! c=--primary-90!! _svg/f=--primary-90!!"}
		{classs}"
		onclick={toggle_open}>
	<slot></slot>
	<span class="fs=1.5">{menu.name}</span>
	<svg class="inline absolute r=.5 w=1.8 h=2.2 tt=transform_.3s
			tf=rotate({is_open ? 0 : "-90deg"})">
			<use xlink:href="{base}/icons.svg#expand" />
	</svg>
</button>
<ul class="ml=1 o=hidden">
	{#if menu.subs}
		{#each menu.subs as m, i}
		<li class="relative tt=margin-top_.3s
				{is_open || "mt=-3.75"}">
			<svelte:self menu={m} bind:close={close_childs[i]} />
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