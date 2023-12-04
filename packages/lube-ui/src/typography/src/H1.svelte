<script>
/**
 * @type {{
 *   children: import("svelte").Snippet
 *   classs?: string
 * }}
 */
const { classs = "" } = $props()
</script>

<h1 class="bold fs=6em {classs}"><slot></slot></h1>