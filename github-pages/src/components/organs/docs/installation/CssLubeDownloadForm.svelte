<script lang="ts">
import { client } from "fetch-lube"
import styles from "ts/styles"
import version from "ts/version"

let isSafariCompatible = false
let usingPxForDefaultUnit = false
let isUncompressed = false

const get_source = client("https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/:fileName")
		.get()
		.query
const download_file = async () => {
	let fileName = isSafariCompatible
			? isUncompressed
				? "css-lube-sc.js"
				: "download/css-lube-sc.min.js"
			: isUncompressed
				? "css-lube.js"
				: "download/css-lube.min.js"
	let response = await get_source({ fileName })
	let text = await response.text()
	if (usingPxForDefaultUnit) text = text.replace(`"em"`, `"px"`)
	const link = document.createElement("a")
	link.href = URL.createObjectURL( new Blob([ text ]) )
	link.download = isUncompressed ? "css-lube.js" : "css-lube.min.js"
	link.style.display = "none"
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
	URL.revokeObjectURL(link.href)
}
</script>

<input bind:checked={isSafariCompatible}
		id="1" type="checkbox"
		class={styles.checkbox.docsInput}>
<label for="1" class={styles.checkbox.docsLabel}></label>
<span class="bold">Safari Compatible</span>
<div class="h=.5"></div>
<input bind:checked={usingPxForDefaultUnit}
		id="2" type="checkbox"
		class={styles.checkbox.docsInput}>
<label for="2" class={styles.checkbox.docsLabel}></label>
<span class="bold">Using "px" for default unit</span>
<div class="h=.5"></div>
<input bind:checked={isUncompressed}
		id="3" type="checkbox"
		class={styles.checkbox.docsInput}>
<label for="3" class={styles.checkbox.docsLabel}></label>
<span class="bold">Uncompressed File</span>
<div class="h=1"></div>
<button class="h=2.5 br=1.25 p=0_1 jc=center c=#fff
		bg=--primary-50 :hover/bg=--primary-40
		:hover/ts=0_0_.5
		:active/bg=--primary-50!"
		on:click={download_file}>
	<span class="fs=1.5">css-lube.{isUncompressed ? "" : "min."}js {version}</span>
</button>