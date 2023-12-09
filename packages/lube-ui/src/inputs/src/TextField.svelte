<script>
/**
 * @type {{
 *   classs?: string
 *   disabled?: boolean
 *   helper?: string
 *   label: string
 *   readonly?: boolean
 *   required?: boolean
 *   type?: import("svelte/elements").HTMLInputTypeAttribute
 *   value?: string
 * }}
 */
let {
	classs = "",
	disabled,
	helper,
	label = "",
	readonly,
	required,
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

<fieldset class="inline-block br=4 bdw=1 box-size=border-box
		:has(:focus)/bdw=3;m=-2
		:has(:focus,input:not(:placeholder-shown))>legend/xw=100%
		:has(:focus,input:not(:placeholder-shown))>label/tf=translate(12px,calc(-.75em-2px));fs=.75em
		{classs}">
	<legend class="xw=0 h=0 ml=8 fs=.75em v=hidden o=hidden ws=nowrap">
		<span>_{label}_</span>
	</legend>
	<label class="absolute cs=text tt=.3s tf=translate(8px,8px)" for={label}>{label}</label>
	<input bind:this={input}
			bind:value
			class="br=4 p=8 bd=none ol=none bg=inherit"
			{disabled}
			id={label}
			placeholder=" "
			{readonly}
			{required} />
	{#if helper}
	<p class="absolute fs=.75em tf=translate(8px,4px)">{helper}</p>
	{/if}
</fieldset>