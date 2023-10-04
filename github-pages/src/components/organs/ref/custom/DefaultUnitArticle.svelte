<script>
import { H3 } from "lube-ui"
import CodePage from "organs/$common/utils/CodePage.svelte"
import {
	color,
	declare,
	escape_tag,
	name,
	string
} from "js/highlighter.js"

const code = `${declare("let")} ${name("replace_default_unit_regex")} = ${color("--chestnut-rose", "--chestnut-rose", escape_tag("/((?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):)(.+?)(?=;|$)/"))}${declare("g")}
${declare("let")} ${name("default_unit")} = ${string("em")}`
</script>

<H3>Default Unit</H3>
<CodePage>{@html code}</CodePage>