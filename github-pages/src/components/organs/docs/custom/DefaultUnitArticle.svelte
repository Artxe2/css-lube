<script>
import CodePage from "organs/$common/utils/CodePage.svelte"
import {
	color,
	declare,
	escape_tag,
	name,
	string
} from "js/highlighter.js"

const code = `${declare("let")} ${name("replace_default_unit_regex")} = ${color("--chestnut-rose", "--chestnut-rose", escape_tag("/((?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):)(.+?)(?=;|$)/"))}${declare("g")}
${declare("let")} ${name("default_unit")} = ${string("px")}`
</script>

<h3 class="fs=2em bold">
	<a id="default-unit" href="#default-unit">Default Unit</a>
</h3>
<CodePage is_code>{@html code}</CodePage>