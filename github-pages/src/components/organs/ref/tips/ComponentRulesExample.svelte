<script lang="ts">
import CodePage from "organs/$common/utils/CodePage.svelte"
import { html, name, string } from "ts/highlighter"
import GithubStars from "parts/$common/GithubStars.svelte"
import { H3 } from "lube-ui"

const code = `${html("GithubStars", "", false)}
${html("div", ` ${name("class")}=${string(`>div>a/br=.75
		_*/f=blue
		_.c\\=\\#333/c=blue`)}`, `
	${html("GithubStars", "", false)}
`)}
`
</script>

<H3>Component Rules</H3>
<div class="m=1_0_2_0">
	<span>By default, CSS Lube can easily customize the style of components using selectors.</span><br>
	<span>However, CSS Lube recommends separating components from layouts and delegating layouts to parent components.</span><br>
	<span>To do this, the "width" and "height" of the component should be "100%" or "fit-content", the "margin" should be "0", and the "position" should be any property other than "absolute".</span>
	<div class="h=1"></div>
	<CodePage>{@html code}
		<GithubStars />
		<div class=">div>a/br=.75
					_*/f=blue
					_.c\=\#333/c=blue">
			<GithubStars />
		</div>
	</CodePage>
</div>