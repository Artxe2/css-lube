<script lang="ts">
import { html, name, string } from "ts/highlighter"
import CodePage from "organs/$common/utils/CodePage.svelte"
import TypingText from "organs/$common/animations/TypingText.svelte"
import CssLubeDownloadForm from "./CodeIntellisenseArticle/CssLubeDownloadForm.svelte"
    import styles from "ts/styles"

const code = `${html("head", "", `
	. . . . . .
	${html("script", ` ${name("src")}=${string("<f>/css-lube.min.js</f>")} ${name("<f>async</f>")}`, "")}
`)}
${html("body", ` ${name("<f>hidden</f>")} ${name("class")}=${string("...")}`, `
	. . . . . .
`)}`
</script>

<div class={styles.$common.contents_div}>
	<span>CSS Lube can select the download option.</span><br>
		<span>Checking Safari Compatible, will change the way some regular expressions and dark modes are applied.</span><br>
		<span>Checking Using "px" for default unit, sets "px" instead of "em" as the default unit.</span><br>
		<span>Checking Uncompressed File, file are not compressed into terser, and can be used for debugging purposes.</span><br>
		<div class="h=1"></div>
		<CssLubeDownloadForm />
		<div class="h=2"></div>
		<CodePage><TypingText>{@html code}</TypingText></CodePage>
		<div class="h=1"></div>
		<pre class="m=1">{`MIT License

	Copyright (c) 2022 Artxe2

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.`}</pre>
</div>