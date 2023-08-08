<script>
import { client } from "fetch-lube"
import styles from "styles"

let isSafariCompatible = false
let usingPxForDefaultUnit = false
let isUncompressed = false

const getSource = client("https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/:fileName")
		.get()
const downloadFile = async () => {
	let fileName = isSafariCompatible
			? isUncompressed
				? "css-lube-sc.js"
				: "download/css-lube-sc.min.js"
			: isUncompressed
				? "css-lube.js"
				: "download/css-lube.min.js"
	let response = await getSource.query({ fileName })
	let text = await response.text()
	if (usingPxForDefaultUnit) text = text.replace(`"em"`, `"px"`)
	const link = document.createElement("a")
	link.href = URL.createObjectURL( new Blob([ text ]) )
	link.download = isUncompressed ? "css-lube.js" : "css-lube.min.js"
	link.style.display = "none"
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
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
<div class="h=.5"></div>
<button class="bold va=bottom {styles.button.resources}" on:click={downloadFile}>
	css-lube.{isUncompressed ? "" : "min."}js v1.2.1
</button>