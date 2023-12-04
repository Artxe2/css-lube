<script>
/** @type {{ is_open?: boolean }} */
const { is_open } = $props()

import ThemeButton from "parts/$common/ThemeButton.svelte"
import { base } from "$app/paths"
import Button from "organs/$common/Drawer/Button.svelte"
import sub_menu from "js/menu.js"
import styles from "js/styles.js"
</script>

<nav class="z=2 fixed t=0 l=-300 w=300 pr=6 h=100% br=0_18_18_0 tt=transform_.3s o=auto
		c=--gray-30 @dark@c=--gray-70
		bg=--gray-90 @dark@bg=--gray-30
		_svg/f=--gray-20 @dark@_svg/f=--gray-70
		{is_open && "tf=translateX(300px)"}">
	<div class="h=100% oy=auto flex column pl=18 pb=18
			{styles.scrollbar.primary}">
		<div class="h=96"></div>
		<div class="flex column fg=1">
			<Button classs=":hover_.icon/tf=scale(1.25)"
					menu={sub_menu[0]}>
				<img src="{base}/favicon.svg" alt="logo" class="icon h=36">
			</Button>
			<Button classs=":not(:hover)_.icon>svg:nth-of-type(even)/op=0
					:hover_.icon>svg:nth-of-type(odd)/op=0"
					menu={sub_menu[1]}>
				<div class="icon relative inline-block w=36 h=36">
					<svg class="absolute l=0 w=36 h=36">
						<use xlink:href="{base}/icons.svg#library-books" />
					</svg>
					<svg class="absolute l=0 w=36 h=36">
						<use xlink:href="{base}/icons.svg#library-books-fill" />
					</svg>
				</div>
			</Button>
			<Button classs=":hover_.icon/tf=scale(1.2)"
					menu={sub_menu[2]}>
				<svg class="icon w=36 h=36">
					<use xlink:href="{base}/icons.svg#code" />
				</svg>
			</Button>
			<Button classs=":not(:hover)_.icon>svg:nth-of-type(even)/op=0
					:hover_.icon>svg:nth-of-type(odd)/op=0"
					menu={sub_menu[3]}>
				<div class="icon relative inline-block w=36 h=36">
					<svg class="absolute l=0 w=36 h=36">
						<use xlink:href="{base}/icons.svg#quick-reference" />
					</svg>
					<svg class="absolute l=0 w=36 h=36">
						<use xlink:href="{base}/icons.svg#quick-reference-fill" />
					</svg>
				</div>
			</Button>
			<Button classs=":hover_.icon/tf=scale(1.25)"
					menu={sub_menu[4]}>
				<img src="{base}/favicon.svg" alt="logo" class="icon h=36">
			</Button>
		</div>
		<div class="h=7"></div>
		<div class="flex w=100% jc=center">
			<div class="flex ai=center">
				<a href="https://github.com/Artxe2/css-lube" target="_blank"
						class="flex ai=center fs=1.5em
						:hover_svg/f=#000 @dark@:hover_svg/f=#fff">
					<svg class="w=36 h=36">
						<use xlink:href="{base}/icons.svg#github" />
					</svg>
				</a>
				<div class="w=18"></div>
				<ThemeButton />
			</div>
		</div>
	</div>
</nav>