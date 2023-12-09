<script>
/**
 * @type {{
 *   classs?: string
 *   children?: import("svelte").Snippet
 *   disabled?: boolean
 *   helper?: string
 *   label: string
 *   prefixWidth?: string
 *   readonly?: boolean
 *   required?: boolean
 *   suffixWidth?: string
 *   type?: import("svelte/elements").HTMLInputTypeAttribute
 *   value?: string
 * }}
 */
let {
	classs = "",
	disabled,
	helper,
	label = "",
	prefixWidth = "0",
	readonly,
	required,
	suffixWidth = "0",
	type = "text",
	value
} = $props()

import { untrack } from "svelte"

let input = /** @type {HTMLInputElement} */($state())/**/

$effect(
	() => {
		untrack(
			() => {
				input.type = type
			}
		)
	}
)
</script>

<fieldset class="relative inline-block br=4 bdw=1 box-size=border-box
		:has(:focus)/bdw=3;m=-2
		:has(:focus,input:not(:placeholder-shown))>legend/xw=100%
		:has(:focus,input:not(:placeholder-shown))>label:first-child/tf=translate(12px,calc(-.75em-2px));fs=.75em
		{classs}">
	<label class="absolute cs=text tt=.3s tf=translate(8px,8px)
			l={prefixWidth}"
			for={label}>{label}
	</label>
	<legend class="xw=0 h=0 ml=8 fs=.75em v=hidden o=hidden ws=nowrap
			ml=calc(8px+{prefixWidth})">
		<span>.{label}.</span>
	</legend>
	{#if $$slots.prefix}
	<label class="absolute ow=normal"
			for={label}>
		<slot name="prefix"></slot>
	</label>
	{/if}
	<input bind:this={input}
			bind:value
			class="br=4 p=8 bd=none ol=none bg=inherit
			m=0_{suffixWidth}_0_{prefixWidth}"
			{disabled}
			id={label}
			placeholder=" "
			{readonly}
			{required} />
	{#if $$slots.suffix}
	<label class="absolute r=0 ow=normal"
			for={label}>
		<slot name="suffix"></slot>
	</label>
	{/if}
	{#if helper}
	<p class="absolute fs=.75em tf=translate(8px,4px)">{helper}</p>
	{/if}
</fieldset>