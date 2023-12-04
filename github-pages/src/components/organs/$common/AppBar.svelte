<script>
import { base } from "$app/paths"
import ModalBackground from "organs/$common/ModalBackground.svelte"
import Drawer from "organs/$common/Drawer.svelte"
import ThemeButton from "parts/$common/ThemeButton.svelte"

let is_open = /** @type {boolean} */($state())/**/

const toggle_open = () => is_open = !is_open
</script>

<nav class="z=9000 fixed t=0 l=0 w=100%
		c=--gray-30 @dark@c=--gray-70 bg=red">
	<button class="z=3 fixed t=12 l=6 p=18 br=36
			:hover/bg=--gray-{is_open ? "80" : "90"} @dark@:hover/bg=--gray-{is_open ? "40" : "30"}"
			onclick={toggle_open}>
		<div class="relative w=36 h=36">
			<div class="absolute w=100% h=6 t=0 tt=transform_.4s br=.15em
					bg=--gray-30 @dark@bg=--gray-70
					{is_open && "tf=translateY(15px)_rotate(-45deg)"}"></div>
			<div class="absolute w=100% h=6 t=15 tt=transform_.4s_linear,opacity_.4s br=.15em
					bg=--gray-30 @dark@bg=--gray-70
					{is_open && "tf=translateX(36px) op=0"}"></div>
			<div class="absolute w=100% h=6 b=0 tt=transform_.4s br=.15em
					bg=--gray-30 @dark@bg=--gray-70
					{is_open && "tf=translateY(-15px)_rotate(45deg)"}"></div>
		</div>
	</button>
	<div class="flex h=96 ai=center
			bg=--gray-95 @dark@bg=--gray-20 pl=78 pr=24">
		<a href="{base}/">
			<div class="flex ai=center h=72 p=0_18 br=36 g=6
					:hover/bg=--gray-90 @dark@:hover/bg=--gray-30
					:hover>img/tf=scale(1.25)">
				<img src="{base}/favicon.svg" alt="logo"
						class="inline-block w=36 h=36">
				<span class="fs=2em bold">CSS Lube</span>
			</div>
		</a>
		<div class="fg=1"></div>
		<a href="https://github.com/Artxe2/css-lube" target="_blank"
				class="flex ai=center p=18
				:hover_svg/f=#000 @dark@:hover_svg/f=#fff
				@!sm@none">
			<svg class="w=36 h=36 f=--gray-10">
				<use xlink:href="{base}/icons.svg#github" />
			</svg>
		</a>
		<ThemeButton classs="@!sm@none" />
	</div>
	<ModalBackground bind:is_open />
	<Drawer bind:is_open />
</nav>
<div class="h=96"></div>