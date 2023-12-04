<script>
/**
 * @type {{
 *   classs?: string
 *   customRegExp?: (value: string) => RegExp
 *   label: string
 * }}
 */
const {
	classs = "",
	customRegExp = value => new RegExp(value),
	label = ""
} = $props()


let value = /** @type {string} */($state())/**/

/** @type {RegExp} */
const regex = $derived(customRegExp(value))
</script>

<fieldset class="inline-block br=4
		:has(:focus,input:not(:placeholder-shown))>legend/xw=100%
		:has(:focus,input:not(:placeholder-shown))>label/tf=translate(12px,-12px);fs=.75em
		{classs}">
	<legend class="xw=0 h=0 ml=8 fs=.75em v=hidden o=hidden ws=nowrap">
		<span>_{label}_</span>
	</legend>
	<label class="absolute cs=text tt=.3s tf=translate(8px,8px)" for={label}>{label}</label>
	<input bind:value class="br=4 p=8 bd=none ol=none"
			id={label}
			placeholder=" "
			type="text" />
</fieldset>