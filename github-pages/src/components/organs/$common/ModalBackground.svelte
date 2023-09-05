<script>
/** @type {boolean} */
export let is_open
export let z_level = 0
</script>
<button class="fixed t=0 l=0 w=100% h=100% bg=rgb(15,23,42,.4)
		{is_open ? `z=${z_level}` : "none"}"
		on:click={() => is_open = false}></button>