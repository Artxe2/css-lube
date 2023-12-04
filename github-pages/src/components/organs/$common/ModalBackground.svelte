<script>
/**
 * @type {{ is_open: boolean }}
 */
let { is_open } = $props()
</script>
<button class="fixed t=0 l=0 w=100% h=100% bg=rgb(15,23,42,.4)
		{is_open || "none"}"
		onclick={() => is_open = false}></button>