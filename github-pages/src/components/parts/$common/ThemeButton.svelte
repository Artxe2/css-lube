<script>
/** @type {{ classs?: string }} */
const { classs = "" } = $props()

import { theme } from "parts/$common/$.svelte.js"
import { base } from "$app/paths"
import { untrack } from "svelte"

let deg = $state(180)
let mounted = /** @type {boolean} */($state())/**/

const handle_click = () => {
	theme.change_theme()
	cssLube()
}
const spin_icons = () => {
	untrack(
		() => {
			if (deg > 0) {
				if (theme.$ == "DARK") deg = 0
			} else {
				deg -= 180
			}
		}
	)
	theme.$
}

$effect.pre(theme.init)
$effect.pre(spin_icons)
$effect(
	() => {
		mounted = true
	}
)
</script>

<button class="relative flex ai=center h=36 br=18 pr=18 ol=.1_solid o=hidden us=none
		_svg/f=currentcolor
		:not(:hover)>div>div>svg:nth-of-type(even)/op=0
		:hover/c=--gray-20 @dark@:hover/c=--gray-90
		:hover/bg=--gray-80 @dark@:hover/bg=--gray-40
		{classs}"
		onclick={handle_click}>
	<div class="flex column ai=center g=72
			{mounted && "tt=transform_cubic-bezier(.9,0,.45,1.35)_.6s"}
			tf=translate(0,54px)_rotate({deg}deg)">
		<div class="relative w=36 h=36">
			<svg class="absolute l=0 w=36 h=36">
				<use xlink:href="{base}/icons.svg#dark-mode" />
			</svg>
			<svg class="absolute l=0 w=36 h=36 tt=opacity_.3s">
				<use xlink:href="{base}/icons.svg#dark-mode-fill" />
			</svg>
		</div>
		<div class="relative w=36 h=36">
			<svg class="absolute l=0 w=36 h=36">
				<use xlink:href="{base}/icons.svg#light-mode" />
			</svg>
			<svg class="absolute l=0 w=36 h=36 tt=opacity_.3s">
				<use xlink:href="{base}/icons.svg#light-mode-fill" />
			</svg>
		</div>
	</div>
	<span class="pl=18">Switch theme</span>
</button>