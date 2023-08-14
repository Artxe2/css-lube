<script lang="ts">
export let classs = ""
export let url: string

const downloadFile = () =>
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
		})
</script>

<button class={classs} on:click={downloadFile}>
	<slot></slot>
</button>