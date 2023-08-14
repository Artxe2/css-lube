<script lang="ts">
import { base } from "$app/paths"
import ModalBackground from "organs/@common/ModalBackground.svelte"
import SubDrawer from "./AppBar/SubDrawer.svelte"

let isOpen: boolean
</script>

<nav class="z=9000 fixed t=0 l=0 w=100%
		c=--gray-30 @dark@c=--gray-70
		@lg@v=hidden">
	<div class="flex h=5 ai=center
			bg=--gray-95 @dark@bg=--gray-20">
		<div class="w=4.5"></div>
		<a href="{base}/">
			<div class="flex ai=center p=.2_.5 br=1.75
					:hover/bg=--gray-90 @dark@:hover/bg=--gray-30
					:hover>img/tf=scale(1.2,1.2)">
				<img src="{base}/favicon.png" alt="logo"
						class="inline-block
						w=2 h=2">
				<span class="fs=2 bold">CSS Lube</span>
				<div class="w=1"></div>
			</div>
		</a>
	</div>
	<ModalBackground bind:isOpen />
	<SubDrawer bind:isOpen />
	<button class="z=3 fixed t=.6 l=.5 p=1 br=2.5
			:hover/bg=--gray-{isOpen ? "80" : "90"} @dark@:hover/bg=--gray-{isOpen ? "40" : "30"}"
			on:click={() => isOpen = !isOpen}>
		<div class="relative w=2 h=1.8">
			<div class="absolute w=100% h=.3 t=0 tt=transform_.4s br=.15
					bg=--gray-30 @dark@bg=--gray-70
					{isOpen ? "tf=translateY(.75em)_rotate(-45deg)" : ""}"></div>
			<div class="absolute w=100% h=.3 t=.75 tt=transform_.4s_linear,opacity_.4s br=.15
					bg=--gray-30 @dark@bg=--gray-70
					{isOpen ? "tf=translateX(2.5em) op=0" : ""}"></div>
			<div class="absolute w=100% h=.3 b=0 tt=transform_.4s br=.15
					bg=--gray-30 @dark@bg=--gray-70
					{isOpen ? "tf=translateY(-.75em)_rotate(45deg)" : ""}"></div>
		</div>
	</button>
</nav>
<div class="h=5
		@lg@none"></div>