<script>
/**
 * @type {{
 *   classs?: string
 *   index: number
 * }}
 */
const { classs = "", index } = $props()
</script>

<div class=">:not(:nth-child({index + 1}))/none {classs}">
	<slot></slot>
</div>