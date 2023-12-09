<script>
import styles from "js/styles.js"
import { page } from "$app/stores"
import { TextField } from "lube-ui/inputs"
import { H2 } from "lube-ui/typography"

let header = /** @type {HTMLElement} */($state())/**/

$effect(
	() => {
		page.subscribe(
			() => header?.parentElement?.scroll(0, 0)
		)
	}
)
</script>

<svelte:head>
	<title>UI - CSS Lube</title>
</svelte:head>

<header bind:this={header} class="m=12">
	<div class="flex br=36 o=hidden
			{styles.$common.background_grid}">
		<div class="flex w=100%
				{styles.$common.background_conic}">
			<div class="w=48"></div>
			<div class="fg=1 fsk=1">
				<div class="h=48"></div>
				<H2>Lube UI</H2>
				<span>Lube UI may be released someday</span>
				<H2 classs="v=hidden">.</H2>
			</div>
		</div>
	</div>
</header>
<article class="m=18_36 flex column ai=start g=12">
	<a href="https://mui.com/material-ui/react-text-field/" class={styles.$common.link}>https://mui.com/material-ui/react-text-field/</a>
	<TextField label="Required *" required />
	<TextField label="Disabled" disabled value="Hello World" />
	<TextField label="Password" type="password" />
	<TextField label="Readonly" readonly value="Hello World" />
	<TextField label="Number" type="number" />
	<TextField label="Search" type="search" />
	<TextField helper="Some important text" label="Helper text" />
	<div class="h=1em"></div>
	<TextField classs="fs=2em
			bdc=#00f :hover/bdc=#f0f :has(:focus)/bdc=#f00
			>label/c=#88f
			>input/c=#44f
			>p/c=red"
			helper="Some important text"
			label="Custom" />
</article>
<div class="flex jc=center">
	<button class="mb=24 fs=1.5em
			:hover/c=--primary-50;bold" onclick={() => header?.parentElement?.scroll(0, 0)}>
		Back to top
	</button>
</div>