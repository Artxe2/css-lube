<script lang="ts">
import CodePage from "organs/@common/utils/CodePage.svelte"
import { color, declare, escapeTag, name, string } from "ts/highlighter"

const code = `${declare("let")} ${name("shorthandUnitRE")} = ${color("--chestnut-rose", "--chestnut-rose", escapeTag("/(?<=(?:^|;|-)(?:border|bottom|column-rule|end|flex-basis|gap|grid-template-(?:columns|rows)|height|inset|left|margin(?:-[a-z]+)*|origin|outline|padding(?:-[a-z]+)*|perspective|position|radius|right|shadow|spacing|start|top|width):(?:[^; ]* )*?-?(?:\d*\.)?\d+)(?=(?: |;|$))/"))}${declare("g")}
${declare("let")} ${name("defaultUnit")} = ${string("em")}`
</script>

<CodePage>{@html code}</CodePage>