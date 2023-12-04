<script>
/**
 * @type {{
 *   classs?: string
 *   label: string
 *   name?: string
 * }}
 */
const { classs = "", label = "", name = "" } = $props()
</script>

<fieldset class="inline-block br=4
		:has(:focus,input:not(:placeholder-shown))>legend/xw=100%
		:has(:focus,input:not(:placeholder-shown))>label/tf=translate(12px,-12px);fs=.75em
		{classs}">
	<legend class="xw=0 h=0 ml=8 fs=.75em v=hidden o=hidden ws=nowrap">
		<span>_{label}_</span>
	</legend>
	<label class="absolute tt=.3s tf=translate(8px,8px)" for={name}>{label}</label>
	<input class="br=4 p=8 bd=none ol=none" type="text" id={name} placeholder=" " />
</fieldset>