<script lang="ts">
import H2 from "cells/typography/H2.svelte"
import CodePage from "organs/@common/utils/CodePage.svelte"
import { bracket, declare, html, keyword, name, string } from "ts/highlighter"

const h1 = 16
const h2 = 16 ** 2
const h3 = 16 ** 3
const h4 = 16 ** 4
const h5 = 16 ** 5
const h6 = 16 ** 6
const chars = '0123456789abcdef'
const background: string[] = []

for (let i = 0; i < h6; i += 1000) {
	background.push(
		`${chars[Math.trunc(i / h5)]
		}${chars[Math.trunc(i % h5 / h4)]
		}${chars[Math.trunc(i % h4 / h3)]
		}${chars[Math.trunc(i % h3 / h2)]
		}${chars[Math.trunc(i % h2 / h1)]
		}${chars[Math.trunc(i % h1)]}`
	)
}
const code = `${html("div", "", `
	${bracket("{")}#${keyword("each")} ${name("background", true)} ${keyword("as")} ${name("bg")}${bracket("}")}
	${html("div", ` ${name("style")}=${string(`background:#${declare(`{${name("bg")}}`)};`)}`, `${html("span", ` ${name("style")}=${string(`color:#${declare(`{${name("bg")}}`)};filter:invert(1);`)}`, `${bracket(`{${name("bg")}}`)}`)}`)}
	${bracket("{")}/${keyword("each")}${bracket("}")}
`)}`
</script>

<svelte:head>
	<title>CSS Lubricant - Performance Test Page</title>
</svelte:head>

<H2 classs="">Performance Test Page - inline style</H2>
{background.length}rows
<CodePage>{@html code}</CodePage>
<div>
	{#each background as bg}
	<div style="background:#{bg};"><span style="color:#{bg};filter:invert(1);">{bg}</span></div>
	{/each}
</div>