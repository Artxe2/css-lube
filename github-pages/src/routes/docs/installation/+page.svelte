<script>
import H5 from "cells/typography/H5.svelte"
import InstallationExample from "organs/docs/installation/InstallationExample.svelte"
import CssLubeDownloadForm from "organs/docs/installation/CssLubeDownloadForm.svelte"
</script>

<svelte:head>
	<title>Installation | CSS Lube</title>
</svelte:head>

<H5>Installation</H5>
<div class="h=1"></div>
<span>CSS Lube can select the download option.</span><br>
<span>Checking Safari Compatible, will change the way some regular expressions and dark modes are applied.</span><br>
<span>Checking Using "px" for default unit, sets "px" instead of "em" as the default unit.</span>
<div class="h=1"></div>
<CssLubeDownloadForm />
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