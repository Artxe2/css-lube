<script>
/**
 * @type {{
 *   children: import("svelte").Snippet
 *   classs?: string
 * }}
 */
const { classs = "" } = $props()
</script>

<h2 class="bold fs=3.5em {classs}"><slot></slot></h2>