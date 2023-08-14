<script lang="ts">
import { page } from "$app/stores"
import { onMount } from "svelte"

export let text: string
export let data: any

let isOpen: boolean
let active: boolean
let activeAfter: boolean

onMount(() => {
	page.subscribe(() => {
		// @ts-ignore
		active = location.pathname.startsWith(data.href)
		if (active != activeAfter) setTimeout( () => activeAfter = active, 50)
	})
})
</script>

{#if "childs" in data}
<button class="relative w=100% h=2.5 br=1.25 pl=1 ta=left mb=.25
		:hover/bg=--gray-80 @dark@:hover/bg=--gray-30
		{active ? "bg=--primary-50!! c=--primary-90!!" : ""}"
		on:click={() => isOpen = !isOpen}>
	<span>{text}</span>
	<div class="absolute b=50% r=1 h=.5 w=.15 br=.1
			tt=transform_.3s tfo=bottom
			tf=rotate({isOpen ? "-135deg" : "-45deg"})_translateY(.05em)
			bg=--gray-30 @dark@bg=--gray-70"></div>
	<div class="absolute b=50% r=1 h=.5 w=.15 br=.1
			tt=transform_.3s tfo=bottom
			tf=rotate({isOpen ? "135deg" : "45deg"})_translateY(.05em)
			bg=--gray-30 @dark@bg=--gray-70"></div>
</button>
<ul class="ml=1 o=hidden tt=height_.3s
		h={isOpen ? Object.keys(data.childs).length * 2.75 : 0}">
	{#each Object.keys(data.childs) as text}
	<li>
		<svelte:self {text} data={data.childs[text]} />
	</li>
	{/each}
</ul>
{:else}
<a href={data.href}>
	<button class="w=100% h=2.5 br=1.25 pl=1 ta=left mb=.25
			:hover/bg=--gray-80 @dark@:hover/bg=--gray-30
			{active ? "bg=--primary-50!! c=--primary-90!!" : ""}">
		{text}
	</button>
</a>
{/if}