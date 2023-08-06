<script>
import { client } from "fetch-lube"
import styles from "styles"

let isSafariCompatible = false
let usingPxForDefaultUnit = false

const getSource = client("https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/download/:fileName")
		.get()
const downloadFile = async () => {
	let response = await getSource.query({ fileName: `css-lube${isSafariCompatible ? "-sc" : ""}.min.js` })
	let text = await response.text()
	if (usingPxForDefaultUnit) text.replace(`="em"`, `="px"`)
	const link = document.createElement("a")
	link.href = URL.createObjectURL( new Blob([ text ]) )
	link.download = "css-lube.min.js"
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
<button class="bold va=bottom {styles.button.resources}" on:click={downloadFile}>
	css-lube.min.js v1.1.4
</button>