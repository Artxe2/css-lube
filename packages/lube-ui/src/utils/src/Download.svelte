<script>
/**
 * @type {{
 *   children: import("svelte").Snippet
 *   classs?: string
 *   url: string
 * }}
 */
const { classs = "", url } = $props()

const download_file = () => fetch(url)
	.then(response => response.blob())
	.then(
		blob => {
			const link = document.createElement("a")
			link.href = URL.createObjectURL(blob)
			link.download = url.slice(url.lastIndexOf("/") + 1)
			link.style.display = "none"
			document.body.append(link)
			link.click()
			document.body.removeChild(link)
			URL.revokeObjectURL(link.href)
		}
	)
</script>

<button class={classs} onclick={download_file}>
	<slot></slot>
</button>