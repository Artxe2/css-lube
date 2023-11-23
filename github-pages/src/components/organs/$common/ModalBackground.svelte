<script>
/**
 * @type {{
 *   is_open?: boolean
 *   z_level?: number
 * }}
 */
let { is_open, z_level = 0 } = $props()
</script>
<button class="fixed t=0 l=0 w=100% h=100% bg=rgb(15,23,42,.4)
		{is_open ? `z=${z_level}` : "none"}"
		onclick={() => is_open = false}></button>