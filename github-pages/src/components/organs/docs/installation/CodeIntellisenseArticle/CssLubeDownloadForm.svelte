<script lang="ts">
import IDownload from "cells/svgs/i_download.svelte"
import { client } from "fetch-lube"
import styles from "ts/styles"
import version from "ts/version"

let using_px_for_default_unit = false
let is_uncompressed = false

const get_source = client("https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/:file_name")
	.get()
	.query
const download_file = async () => {
	let file_name = is_uncompressed
		? "css-lube.js"
		: "download/css-lube.min.js"
	let response = await get_source({ file_name })
	let text = await response.text()
	if (using_px_for_default_unit) text = text.replace("\"em\"", "\"px\"")
	const link = document.createElement("a")
	link.href = URL.createObjectURL(new Blob([ text ]))
	link.download = is_uncompressed ? "css-lube.js" : "css-lube.min.js"
	link.style.display = "none"
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
	URL.revokeObjectURL(link.href)
}
</script>

<div class="relative">
	<input bind:checked={using_px_for_default_unit}
			id="2" type="checkbox"
			class={styles.checkbox.docs_input}>
	<label for="2" class={styles.checkbox.docs_label}></label>
	<span class="bold">Using "px" for default unit</span>
	<div class="h=.5"></div>
	<input bind:checked={is_uncompressed}
			id="3" type="checkbox"
			class={styles.checkbox.docs_input}>
	<label for="3" class={styles.checkbox.docs_label}></label>
	<span class="bold">Uncompressed File</span>
	<div class="h=1"></div>
	<button class="h=2.5 br=1.25 p=0_1 jc=center
			bg=--primary-50 :hover/bg=--primary-40
			:hover/ts=0_0_.5
			:hover_svg/tf=scale(1.2)
			:active/bg=--primary-50!"
			on:click={download_file}>
		<IDownload classs="inline-block w=2 _svg/f=#fff" />
		<span class="fs=1.5 c=#fff">css-lube.{is_uncompressed ? "" : "min."}js {version}</span>
	</button>
</div>