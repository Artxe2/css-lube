<script>
import { page } from "$app/stores"
import { H2, H3 } from "lube-ui"
import CodePage from "organs/$common/utils/CodePage.svelte"
import JsMap from "organs/$common/utils/JsMap.svelte"
import CssResetArticle from "organs/ref/custom/CssResetArticle.svelte"
import DefaultUnitArticle from "organs/ref/custom/DefaultUnitArticle.svelte"
import { onMount } from "svelte"
import styles from "js/styles.js"

/** @type {HTMLElement} */
let header

onMount(() => {
	page.subscribe(() => {
		if (!location.hash) header?.parentElement?.scroll(0, 0)
	})
})
</script>

<svelte:head>
	<title>Customizing - CSS Lube</title>
</svelte:head>

<header class="m=.5" bind:this={header}>
	<div class="flex br=1.5 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=3"></div>
			<div class="fg=1 fsk=1">
				<div class="h=2"></div>
				<H2>Customizing</H2>
				<span>CSS Reset & Shorthand</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<div class="m=.5">
	<article id="CSS Reset" class="m=2_1 @md@m=2">
		<CssResetArticle />
	</article>
	<article id="Shorthand for Properties" class="m=2_1 @md@m=2">
		<H3>Shorthand for Properties</H3>
		<CodePage>
			<JsMap
			name="shorthand_for_properties"
			json={`[
	["acc", "accent-color"],
	["ac", "align-content"],
	["ai", "align-items"],
	["as", "align-self"],
	["a", "animation"],
	["bf", "backdrop-filter"],
	["bg", "background"],
	["bgc", "background-color"],
	["bgi", "background-image"],
	["bd", "border"],
	["bdb", "border-bottom"],
	["bdc", "border-color"],
	["bdl", "border-left"],
	["br", "border-radius"],
	["bdr", "border-right"],
	["bds", "border-style"],
	["bdt", "border-top"],
	["bdw", "border-width"],
	["b", "bottom"],
	["bs", "box-shadow"],
	["cp", "clip-path"],
	["c", "color"],
	["ct", "content"],
	["cs", "cursor"],
	["d", "display"],
	["f", "fill"],
	["ft", "filter"],
	["fg", "flex-grow"],
	["fsk", "flex-shrink"],
	["fw", "flex-wrap"],
	["fl", "float"],
	["ff", "font-family"],
	["fs", "font-size"],
	["fv", "font-variant"],
	["g", "gap"],
	["gc", "grid-column"],
	["gr", "grid-row"],
	["gtc", "grid-template-columns"],
	["gtr", "grid-template-rows"],
	["h", "height"],
	["i", "inset"],
	["is", "isolation"],
	["jc", "justify-content"],
	["l", "left"],
	["lsp", "letter-spacing"],
	["lb", "line-break"],
	["lh", "line-height"],
	["ls", "list-style"],
	["m", "margin"],
	["mb", "margin-bottom"],
	["ml", "margin-left"],
	["mr", "margin-right"],
	["mt", "margin-top"],
	["xh", "max-height"],
	["xw", "max-width"],
	["mh", "min-height"],
	["mw", "min-width"],
	["mbm", "mix-blend-mode"],
	["of", "object-fit"],
	["op", "opacity"],
	["ol", "outline"],
	["o", "overflow"],
	["ow", "overflow-wrap"],
	["ox", "overflow-x"],
	["oy", "overflow-y"],
	["p", "padding"],
	["pb", "padding-bottom"],
	["pi", "padding-inline"],
	["pl", "padding-left"],
	["pr", "padding-right"],
	["pt", "padding-top"],
	["ps", "perspective"],
	["pso", "perspective-origin"],
	["rs", "resize"],
	["r", "right"],
	["ssa", "scroll-snap-align"],
	["sst", "scroll-snap-type"],
	["so", "shape-outside"],
	["tz", "tab-size"],
	["tl", "table-layout"],
	["ta", "text-align"],
	["td", "text-decoration"],
	["ts", "text-shadow"],
	["ttf", "text-transform"],
	["t", "top"],
	["tf", "transform"],
	["tfo", "transform-origin"],
	["tt", "transition"],
	["us", "user-select"],
	["va", "vertical-align"],
	["v", "visibility"],
	["ws", "white-space"],
	["w", "width"],
	["wc", "will-change"],
	["wb", "word-break"],
	["wsp", "word-spacing"],
	["ww", "word-wrap"],
	["wm", "writing-mode"],
	["z", "z-index"]
]`}
			/>
		</CodePage>
	</article>
	<article id="Shorthand for Values" class="m=2_1 @md@m=2">
		<H3>Shorthand for Values</H3>
		<CodePage>
			<JsMap
			name="shorthand_for_values"
			json={`[
	["not-allowed", "cursor:not-allowed"],
	["pointer", "cursor:pointer"],
	["wait", "cursor:wait"],

	["block", "display:block"],
	["flex", "display:flex"],
	["grid", "display:grid"],
	["inline", "display:inline"],
	["inline-block", "display:inline-block"],
	["inline-flex", "display:inline-flex"],
	["none", "display:none"],

	["column", "flex-direction:column"],
	["column-reverse", "flex-direction:column-reverse"],
	["row", "flex-direction:row"],
	["row-reverse", "flex-direction:row-reverse"],

	["bold", "font-weight:bold"],

	["absolute", "position:absolute"],
	["fixed", "position:fixed"],
	["relative", "position:relative"],
	["static", "position:static"],
	["sticky", "position:sticky"]
]`}
			/>
		</CodePage>
	</article>
	<article id="Shorthand for Media Condition" class="m=2_1 @md@m=2">
		<H3>Shorthand for Media Condition</H3>
		<CodePage>
			<JsMap
			name="shorthand_for_media_condition"
			json={`[
	["dark", "(prefers-color-scheme:dark)"],

	["sm", "(min-width:640px)"],
	["md", "(min-width:768px)"],
	["lg", "(min-width:1024px)"],
	["xl", "(min-width:1280px)"],
	["2xl", "(min-width:1536px)"],

	["!sm", "(max-width:639px)"],
	["!md", "(max-width:767px)"],
	["!lg", "(max-width:1023px)"],
	["!xl", "(max-width:1280px)"],
	["!2xl", "(max-width:1536px)"]
]`}
			/>
		</CodePage>
	</article>
	<article id="Default Unit" class="m=2_1 @md@m=2">
		<DefaultUnitArticle />
	</article>
</div>
<div class="h=2"></div>