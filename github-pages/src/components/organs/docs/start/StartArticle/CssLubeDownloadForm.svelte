<script>
import { client } from "async-lube"
import styles from "js/styles.js"
import version from "js/version.js"
import { base } from "$app/paths"

const using_px_for_default_unit = /** @type {boolean} */($state())/**/
let is_uncompressed = /** @type {boolean} */($state())/**/

const get_source = client(
	"https://raw.githubusercontent.com/Artxe2/css-lube/main/packages/lib/:file_name"
)
	.get()
	.query
const download_file = async () => {
	const file_name = is_uncompressed
		? "css-lube.js"
		: "css-lube.min.js"
	const response = await get_source({ file_name })
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
	<input bind:checked={is_uncompressed}
			id="1" type="checkbox"
			class={styles.checkbox.docs_input}>
	<label for="1" class={styles.checkbox.docs_label}></label>
	<span class="bold va=6px">Uncompressed File</span>
	<div class="h=12"></div>
	<button class="h=48 br=24 p=0_12 flex ai=center
			bg=--primary-50 :hover/bg=--primary-40
			:hover/ts=0_0_12
			:hover_svg/tf=scale(1.25)
			:active/bg=--primary-50!"
			onclick={download_file}>
		<svg class="w=36 h=36 f=#fff!">
			<use xlink:href="{base}/icons.svg#download" />
		</svg>
		<span class="c=#fff fs=1.5em">css-lube.{is_uncompressed ? "" : "min."}js {version}</span>
	</button>
</div>