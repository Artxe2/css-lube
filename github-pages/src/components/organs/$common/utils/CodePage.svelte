<script>
/** @type {"p"|"pre"} */
export let type = "pre"
export let is_code = false

/** @type {HTMLElement} */
let wrapper

const copy = () => navigator.clipboard.writeText(wrapper.textContent || "")
</script>

<div class="br=.5 ta=right bs=0_.5_.5_#00000088
		bg=#fff @dark@bg=--cod-gray">
	{#if is_code}
	<button class="p=.5 br=.5 :hover/bg=#eee :active/bg=#ddd! @dark@:hover/bg=#333 @dark@:active/bg=#444! fs=.75" on:click={copy}>copy</button>
	<div class="m=0_.5 bd=.1_solid_#888"></div>
	{/if}
	<svelte:element this={type} bind:this={wrapper}
			class="ta=left p=1 {is_code && "pt=0"}
			_*/wb=break-all letter-spacing=.075
			"><code><slot></slot></code></svelte:element>
</div>