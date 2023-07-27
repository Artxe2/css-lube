<script>
import CodePage from "organs/@common/utils/CodePage.svelte"
import H2 from "cells/typography/H2.svelte"
import H5 from "cells/typography/H5.svelte"
import IdeFolder from "cells/typography/IdeFolder.svelte"
import IdeSvelte from "cells/typography/IdeSvelte.svelte"
import IdeTypescript from "cells/typography/IdeTypescript.svelte"
import ComponentRulesExample from "organs/docs/atomic-for-lube/ComponentRulesExample.svelte"
import ResponsiveWebDesignExample from "organs/docs/atomic-for-lube/ResponsiveWebDesignExample.svelte"
import GithubStars from "organs/index/GithubStars.svelte"
</script>

<svelte:head>
	<title>Atomic for CSS Lube | CSS Lube</title>
</svelte:head>

<H2>Atomic for CSS Lube</H2>
<div class="h=3"></div>
<H5>Folder structure</H5><br>
<span>First of all, CSS Lube divides components into three layers.</span><br>
<CodePage>
	<IdeFolder name="src" />{`
	`}<IdeFolder name="components" />{`
		`}<IdeFolder name="cells" />{`
		`}<IdeFolder name="organs" />{`
		`}<IdeFolder name="parts" />
. . . . . .
</CodePage>
<div class="h=1"></div>
<span>"cells" corresponds to "atoms" in Atomic Design, "organs" corresponds to "molecules" and "organisms", and "parts" manages components that are essentially the same as "organs" but use global status.</span><br>
<div class="h=1"></div>
<span>Typically, the "cells" subfolders are separated by the type of component, subfolders of "organs" and "parts" are page-by-page.</span><br>
<CodePage>
	<IdeFolder name="src" />{`
	`}<IdeFolder name="components" />{`
		`}<IdeFolder name="cells" />{`
			`}<IdeFolder name="buttons" />{`
				`}<IdeSvelte name="SomeButton" />{`
			`}<IdeFolder name="svgs" />{`
				`}<IdeSvelte name="i_someSvg" />{`
		`}<IdeFolder name="organs" />{`
			`}<IdeFolder name="@common" />{`
				`}<IdeSvelte name="SomeCommonOrgans" />{`
			`}<IdeFolder name="docs" />{`
				`}<IdeSvelte name="SomeDocsComponent" />{`
			`}<IdeFolder name="main" />{`
				`}<IdeFolder name="sub" />{`
					`}<IdeSvelte name="SomeMainSubComponent" />{`
				`}<IdeSvelte name="SomeMainComponent" />{`
		`}<IdeFolder name="parts" />{`
			`}<IdeFolder name="@common" />{`
				`}<IdeSvelte name="SomeCommonParts" />{`
				`}<IdeTypescript name="store" />{`
			`}<IdeFolder name="docs" />{`
				`}<IdeSvelte name="SomeDocsComponent" />{`
				`}<IdeTypescript name="store" />{`
			`}<IdeFolder name="main" />{`
				`}<IdeSvelte name="SomeMainComponent" />{`
				`}<IdeTypescript name="store" />
. . . . . .
</CodePage>
<div class="h=1"></div>
<span>For example, the component below named "GithubStars" uses data binding, but does not use the global state, and therefore corresponds to "organs".</span><br>
<CodePage>
	<GithubStars />
</CodePage>
<div class="h=3"></div>
<H5>Component Rules</H5><br>
<span>By default, CSS Lube can easily customize the style of components using selectors.</span><br>
<ComponentRulesExample />
<span>However, CSS Lube recommends separating components from layouts and delegating layouts to parent components.</span><br>
<span>To do this, the "width" and "height" of the component should be "100%" or "fit-content", the "margin" should be "0", and the "position" should be any property other than "absolute".</span>
<div class="h=3"></div>
<H5>Responsive Web Design</H5><br>
<span>CSS Lube recommends using "em" as the default unit.</span><br>
<span>This website provides a responsive web by adjusting the "font size" according to "device width" as shown below.</span><br>
<ResponsiveWebDesignExample />