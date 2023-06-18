<script lang="ts">
import { base } from "$app/paths"
import { page } from "$app/stores"
import { modal$ } from "parts/@common/store"
import { onDestroy } from "svelte"
import IGithub from "cells/svgs/i_github.svelte"
import ThemeSelector from "parts/@common/ThemeSelector.svelte"
import styles from "styles"

const useActive = (e: HTMLAnchorElement) => {
	page.subscribe(v => {
		let active = (location.origin + v.url.pathname).startsWith(e.href)
		e.classList.toggle("c=--primary", active)
		e.classList.toggle("@dark@c=--havelock-blue", active)
	})
}
const handleClick = () => {
	$modal$ = $modal$ ? 0 : 2
}
onDestroy(() => {
	$modal$ = 0
})
</script>

<div class="z=10 relative">
	<button class="z=1 relative w=2.5 h=2.25 @sm@none"
			aria-label="hamburger"
			on:click={handleClick}>
		<div class="absolute w=100% h=.25 bg=#000 @dark@bg=#fff t=0 tt=transform_.4s
				{$modal$ ? "tf=translateY(1em)_rotate(-45deg)" : ""}"></div>
		<div class="absolute w=100% h=.25 bg=#000 @dark@bg=#fff t=1 tt=transform_.4s_linear,opacity_.4s
				{$modal$ ? "tf=translateX(3em) op=0" : ""}"></div>
		<div class="absolute w=100% h=.25 bg=#000 @dark@bg=#fff b=0 tt=transform_.4s
				{$modal$ ? "tf=translateY(-1em)_rotate(45deg)" : ""}"></div>
	</button>
	<div class="flex @sm@bg=none! bg=--catskill-white @dark@bg=--firefly @!sm@absolute @!sm@column @!sm@t=-.5 @!sm@r=-.5 @!sm@p=1.5 @!sm@br=1 @!sm@bd=2px_solid{$modal$ ? "" : " @!sm@v=hidden"}">
		<a href="{base}/docs" use:useActive>
			<button class={styles.button.appbarMenu}>Docs</button>
		</a>
		<div class="w=2 @!sm@w=1"></div>
		<a href="{base}/repl" use:useActive>
			<button class={styles.button.appbarMenu}>REPL</button>
		</a>
		<div class="w=2 @!sm@w=1"></div>
		<a href="{base}/ref" use:useActive>
			<button class={styles.button.appbarMenu}>Reference</button>
		</a>
		<div class="w=2 @!sm@w=1"></div>
		<div class="flex @!sm@column-reverse">
			<ThemeSelector />
			<div class="w=1 h=1"></div>
			<a href="https://github.com/Artxe2/css-lube" target="_blank">
				<button class="flex ai=center :hover_svg/f=#000 @dark@:hover_svg/f=#fff :hover_span/c=--primary @dark@:hover_span/c=--havelock-blue" aria-label="github">
					<IGithub classs="w=2.5 h=2.5 f=#444 @dark@f=#aaa" />
					<span class="@sm@none pl=.5 bold">GitHub</span>
				</button>
			</a>
		</div>
	</div>
</div>
<div class="w=1.5"></div>