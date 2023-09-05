<script>

export let classs = ""

/** @type {string} */
export let url

const download_file = () =>
	fetch(url)
		.then(response => response.blob())
		.then(blob => {
			const link = document.createElement("a")
			link.href = URL.createObjectURL(blob)
			link.download = url.slice(url.lastIndexOf('/') + 1)
			link.style.display = "none"
			document.body.append(link)
			link.click()
			document.body.removeChild(link)
			URL.revokeObjectURL(link.href)
		})
</script>

<button class={classs} on:click={download_file}>
	<slot></slot>
</button>