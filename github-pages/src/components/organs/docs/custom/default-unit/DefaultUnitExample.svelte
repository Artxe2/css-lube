<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { color, declare, escapeTag, name, string } from "ts/highlighter"

const code = `${declare("let")} ${name("replace_default_unit_regex")} = ${color("--chestnut-rose", "--chestnut-rose", escapeTag("/(?<=(?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|font-size|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):(?:[^; ]* )*?-?(?:\d*\.)?\d+)(?= |;|$)/"))}${declare("g")}
${declare("let")} ${name("default_unit")} = ${string("em")}`
</script>

<CodePage>{@html code}</CodePage>