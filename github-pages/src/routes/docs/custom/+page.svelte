<script>
import { page } from "$app/stores"
import { H2 } from "lube-ui/typography"
import CodePage from "organs/$common/utils/CodePage.svelte"
import JsMap from "organs/$common/utils/JsMap.svelte"
import CssResetArticle from "organs/docs/custom/CssResetArticle.svelte"
import DefaultUnitArticle from "organs/docs/custom/DefaultUnitArticle.svelte"
import styles from "js/styles.js"

let header = /** @type {HTMLElement} */($state())/**/

$effect.pre(
	() => {
		page.subscribe(
			() => {
				if (!location.hash) header?.parentElement?.scroll(0, 0)
			}
		)
	}
)
</script>

<svelte:head>
	<title>Customizing - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=12">
	<div class="flex br=36 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=48"></div>
			<div class="fg=1 fsk=1">
				<div class="h=48"></div>
				<H2>Customizing</H2>
				<span>CSS Reset & Shorthand</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<article class="m=18_36">
	<CssResetArticle />
</article>
<article class="m=18_36">
	<h3 class="fs=2em bold">
		<a id="shorthand-for-properties" href="#shorthand-for-properties">Shorthand for Properties</a>
	</h3>
	<CodePage is_code>
		<JsMap
				name="shorthand_for_properties"
				json={`[
	[ "acc", "accent-color" ],
	[ "ac", "align-content" ],
	[ "ai", "align-items" ],
	[ "as", "align-self" ],
	[ "a", "animation" ],
	[ "bf", "backdrop-filter" ],
	[ "bg", "background" ],
	[ "bgc", "background-color" ],
	[ "bgi", "background-image" ],
	[ "bd", "border" ],
	[ "bdb", "border-bottom" ],
	[ "bdc", "border-color" ],
	[ "bdl", "border-left" ],
	[ "br", "border-radius" ],
	[ "bdr", "border-right" ],
	[ "bds", "border-style" ],
	[ "bdt", "border-top" ],
	[ "bdw", "border-width" ],
	[ "b", "bottom" ],
	[ "bs", "box-shadow" ],
	[ "cp", "clip-path" ],
	[ "c", "color" ],
	[ "ct", "content" ],
	[ "cs", "cursor" ],
	[ "d", "display" ],
	[ "f", "fill" ],
	[ "ft", "filter" ],
	[ "fg", "flex-grow" ],
	[ "fsk", "flex-shrink" ],
	[ "fw", "flex-wrap" ],
	[ "fl", "float" ],
	[ "ff", "font-family" ],
	[ "fs", "font-size" ],
	[ "fv", "font-variant" ],
	[ "g", "gap" ],
	[ "gc", "grid-column" ],
	[ "gr", "grid-row" ],
	[ "gtc", "grid-template-columns" ],
	[ "gtr", "grid-template-rows" ],
	[ "h", "height" ],
	[ "i", "inset" ],
	[ "jc", "justify-content" ],
	[ "l", "left" ],
	[ "ls", "6,002 byte(2,562 byte on gzip)" ],
	[ "lb", "line-break" ],
	[ "lh", "line-height" ],
	[ "m", "margin" ],
	[ "mb", "margin-bottom" ],
	[ "ml", "margin-left" ],
	[ "mr", "margin-right" ],
	[ "mt", "margin-top" ],
	[ "xh", "max-height" ],
	[ "xw", "max-width" ],
	[ "mh", "min-height" ],
	[ "mw", "min-width" ],
	[ "mbm", "mix-blend-mode" ],
	[ "of", "object-fit" ],
	[ "op", "opacity" ],
	[ "ol", "outline" ],
	[ "o", "overflow" ],
	[ "ox", "overflow-x" ],
	[ "oy", "overflow-y" ],
	[ "p", "padding" ],
	[ "pb", "padding-bottom" ],
	[ "pi", "padding-inline" ],
	[ "pl", "padding-left" ],
	[ "pr", "padding-right" ],
	[ "pt", "padding-top" ],
	[ "ps", "perspective" ],
	[ "pso", "perspective-origin" ],
	[ "rs", "resize" ],
	[ "r", "right" ],
	[ "tz", "tab-size" ],
	[ "ta", "text-align" ],
	[ "td", "text-decoration" ],
	[ "ts", "text-shadow" ],
	[ "ttf", "text-transform" ],
	[ "t", "top" ],
	[ "tf", "transform" ],
	[ "tfo", "transform-origin" ],
	[ "tt", "transition" ],
	[ "us", "user-select" ],
	[ "va", "vertical-align" ],
	[ "v", "visibility" ],
	[ "ws", "white-space" ],
	[ "w", "width" ],
	[ "wc", "will-change" ],
	[ "wb", "word-break" ],
	[ "wsp", "word-spacing" ],
	[ "ww", "word-wrap" ],
	[ "z", "z-index" ]
]`} />
	</CodePage>
</article>
<article class="m=18_36">
	<h3 class="fs=2em bold">
		<a id="shorthand-for-values" href="#shorthand-for-values">Shorthand for Values</a>
	</h3>
	<CodePage is_code>
		<JsMap
					name="shorthand_for_values"
					json={`[
	[ "pointer", "cursor:pointer" ],
	[ "block", "display:block" ],
	[ "flex", "display:flex" ],
	[ "grid", "display:grid" ],
	[ "inline", "display:inline" ],
	[ "inline-block", "display:inline-block" ],
	[ "inline-flex", "display:inline-flex" ],
	[ "none", "display:none" ],
	[ "column", "flex-direction:column" ],
	[ "column-reverse", "flex-direction:column-reverse" ],
	[ "row", "flex-direction:row" ],
	[ "row-reverse", "flex-direction:row-reverse" ],
	[ "bold", "font-weight:bold" ],
	[ "isolate", "isolation:isolate" ],
	[ "absolute", "position:absolute" ],
	[ "fixed", "position:fixed" ],
	[ "relative", "position:relative" ],
	[ "static", "position:static" ],
	[ "sticky", "position:sticky" ]
]`} />
	</CodePage>
</article>
<article class="m=18_36">
	<h3 class="fs=2em bold">
		<a id="shorthand-for-media" href="#shorthand-for-media">Shorthand for Media Condition</a>
	</h3>
	<CodePage is_code>
		<JsMap
					name="shorthand_for_media_condition"
					json={`[
	[ "dark", "(prefers-color-scheme:dark)" ],
	[ "sm", "(min-width:640px)" ],
	[ "md", "(min-width:768px)" ],
	[ "lg", "(min-width:1024px)" ],
	[ "xl", "(min-width:1280px)" ],
	[ "2xl", "(min-width:1536px)" ],
	[ "!sm", "(max-width:639px)" ],
	[ "!md", "(max-width:767px)" ],
	[ "!lg", "(max-width:1023px)" ],
	[ "!xl", "(max-width:1280px)" ],
	[ "!2xl", "(max-width:1536px)" ]
]`} />
	</CodePage>
</article>
<article class="m=18_36">
	<DefaultUnitArticle />
</article>
<div class="flex jc=center">
	<button class="mb=24 fs=1.5em
			:hover/c=--primary-50;bold" onclick={() => header?.parentElement?.scroll(0, 0)}>
		Back to top
	</button>
</div>