<script>
import H5 from "cells/typography/H5.svelte"
import Download from "organs/@common/utils/Download.svelte"
import InstallationExample from "organs/docs/installation/InstallationExample.svelte"
import styles from "styles"
</script>

<svelte:head>
	<title>Installation | CSS Lube</title>
</svelte:head>

<H5>Installation</H5>
<div class="h=1"></div>
<span>CSS Lube can download both compressed and original files.</span><br>
<span>The uncompressed file is can be used for development or debugging, the compressed file saves bandwidth and improves performance in production.</span>
<div class="h=1"></div>
<Download url="https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/css-lube.min.js">
	<button class="bold va=bottom {styles.button.resources}">css-lube.min.js v1.0.0</button>
</Download>
<span>compressed for production</span>
<div class="h=1"></div>
<Download url="https://raw.githubusercontent.com/Artxe2/css-lube/main/lib/css-lube.js">
	<button class="bold va=bottom {styles.button.resources}">css-lube.js v1.0.0</button>
</Download>
<span>uncompressed for development</span>
<div class="h=1"></div>
<InstallationExample />
<pre>{`
MIT License

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
SOFTWARE.
`}</pre>