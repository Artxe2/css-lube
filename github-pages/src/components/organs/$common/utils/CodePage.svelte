<script>
/**
 * @type {{
 *   children: import("svelte").Snippet
 *   is_code?: boolean
 *   type?: "p" | "pre"
 * }}
 */
const { is_code = false, type = "pre" } = $props()

let wrapper = /** @type {HTMLElement} */($state())/**/

const copy = () => navigator.clipboard.writeText(wrapper.textContent || "")
</script>

<div class="br=12 ta=right bs=0_12_12_#00000088
		bg=#fff @dark@bg=--cod-gray">
	{#if is_code}
	<button class="p=12 br=12 :hover/bg=#eee :active/bg=#ddd! @dark@:hover/bg=#333 @dark@:active/bg=#444! fs=18" onclick={copy}>copy</button>
	<div class="m=0_12 bd=2_solid_#888"></div>
	{/if}
	<svelte:element this={type} bind:this={wrapper}
			class="ta=left p=24 {is_code && "pt=0"}
			_*/wb=break-all ls=1
			"><code><slot></slot></code></svelte:element>
</div>