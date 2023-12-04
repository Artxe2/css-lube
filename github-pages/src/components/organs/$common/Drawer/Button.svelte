<script>
/**
 * @type {{
 *   children: import("svelte").Snippet
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
<button class="w=100% h=48 p=0_12 br=24 flex g=12 ai=center mb=6
		:hover/bg=--gray-70 @dark@:hover/bg=--gray-40
		{active && "bg=--primary-50!! c=--primary-90!! _svg/f=--primary-90"}
		{classs}"
		onclick={toggle_open}>
	<slot></slot>
	<span class="fs=1.25em">{menu.name}</span>
	<svg class="inline absolute r=.5em w=1.8em h=2.2em tt=transform_.3s
			tf=rotate({is_open ? 0 : "-90deg"})">
			<use xlink:href="{base}/icons.svg#expand" />
	</svg>
</button>
<ul class="ml=18 o=hidden">
	{#if menu.subs}
		{#each menu.subs as m, i}
		<li class="relative grid tt=margin-top_.3s
				{is_open || "mt=-54"}">
			<svelte:self menu={m} bind:close={close_childs[i]} />
		</li>
		{/each}
	{/if}
</ul>
{:else}
<a href={menu.href}>
	<button class="w=100% h=48 p=0_12 br=24 flex g=12 ai=center mb=6
			:hover/bg=--gray-70 @dark@:hover/bg=--gray-40
			{active && "bg=--primary-50!! c=--primary-90!!"}
			{classs}">
		<slot></slot>
		<span class="fs=1.25em">{menu.name}</span>
	</button>
</a>
{/if}