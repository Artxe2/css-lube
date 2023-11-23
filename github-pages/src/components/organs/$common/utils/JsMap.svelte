<script>
/**
 * @type {{
 *   name: string
 *   json: string
 * }}
 */
const { name, json } = $props()

const html = json.replace(/,/g, s => "<x1>" + s + "</x1>")
	.replace(
		/(^\[)|(]$)/g,
		s => "<x2>" + s + "</x2>"
	)
	.replace(
		/\[|]/g,
		s => "<x2>" + s + "</x2>"
	)
	.replace(
		/\/\*.+?\*\//g,
		s => "<x3>" + s + "</x3>"
	)
	.replace(
		/\/\/.*\n/g,
		s => "<x3>" + s + "</x3>"
	)
</script>

<pre>{@html
	""
	}<span class="c=blue @dark@c=--havelock-blue">let</span>{@html
		" "
	}<span class="c=--navy-blue @dark@c=--anakiwa">{name}</span>{@html
		" = "
	}<span class="c=blue @dark@c=--havelock-blue">new</span>{@html
		" "
	}<span class="c=--jelly-bean @dark@c=--puerto-rico">Map</span>{@html
		""
	}<span class="c=--copper-canyon @dark@c=--dotger-blue">{"("}</span>{@html
		""
	}<span class="c=--tamarillo @dark@c=--raw-sienna
			>x1/c=#000 @dark@>x1/c=--gray-90
			>x2/c=--forest-green @dark@>x2/c=--bouquet
			>x2>x2/c=blue @dark@>x2>x2/c=--gold
			>x3/c=--japanese-laurel @dark@>x3/c=--asparagus">{@html
		html
	}</span>{@html
	""
	}<span class="c=--copper-canyon @dark@c=--dotger-blue">{")"}</span>{@html
	""
}</pre>