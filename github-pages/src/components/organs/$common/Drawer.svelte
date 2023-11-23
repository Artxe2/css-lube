<script>
/** @type {{ is_open?: boolean }} */
const { is_open } = $props()

import ThemeButton from "parts/$common/ThemeButton.svelte"
import { base } from "$app/paths"
import Button from "organs/$common/Drawer/Button.svelte"
import sub_menu from "js/menu.js"
import styles from "js/styles.js"
</script>

<nav class="z=2 fixed t=0 l=-30 w=30 pl=10 h=100% br=0_1_1_0 tt=transform_.3s o=auto
		c=--gray-30 @dark@c=--gray-70
		bg=--gray-90 @dark@bg=--gray-30
		_svg/f=--gray-10 @dark@_svg/f=--gray-70
		{is_open && "tf=translateX(20em)"}">
	<div class="h=100% oy=auto flex column
			{styles.scrollbar.primary}">
		<div class="h=5"></div>
		<div class="flex column p=.5 fg=1">
			<Button classs=":hover_.icon/tf=scale(1.2)"
					menu={sub_menu[0]}>
				<img src="{base}/favicon.svg" alt="logo" class="icon w=1.7 pb=.2 mr=.5">
			</Button>
			<Button classs=":not(:hover)_.icon>svg:nth-of-type(even)/op=0
					:hover_.icon>svg:nth-of-type(odd)/op=0"
					menu={sub_menu[1]}>
				<div class="icon relative inline-block w=1.5 h=1.3 mr=.5">
					<svg class="absolute w=1.5 h=1.5">
						<use xlink:href="{base}/icons.svg#library-books" />
					</svg>
					<svg class="absolute w=1.5 h=1.5">
						<use xlink:href="{base}/icons.svg#library-books-fill" />
					</svg>
				</div>
			</Button>
			<Button classs=":hover_.icon/tf=scale(1.2)"
					menu={sub_menu[2]}>
				<svg class="icon w=2 h=2 m=0_-.25 lh=1.7 mr=.25">
					<use xlink:href="{base}/icons.svg#code" />
				</svg>
			</Button>
			<Button classs=":not(:hover)_.icon>svg:nth-of-type(even)/op=0
					:hover_.icon>svg:nth-of-type(odd)/op=0"
					menu={sub_menu[3]}>
				<div class="icon relative inline-block w=1.5 h=1.3 mr=.5">
					<svg class="absolute w=1.5 h=1.5">
						<use xlink:href="{base}/icons.svg#quick-reference" />
					</svg>
					<svg class="absolute w=1.5 h=1.5">
						<use xlink:href="{base}/icons.svg#quick-reference-fill" />
					</svg>
				</div>
			</Button>
		</div>
		<div class="h=7"></div>
		<div class="flex w=100% jc=center">
			<div class="flex ai=center">
				<a href="https://github.com/Artxe2/css-lube" target="_blank"
						class="flex ai=center fs=1.5
						:hover_svg/f=#000 @dark@:hover_svg/f=#fff">
					<svg class="w=2.2 h=2.2 f=--gray-10">
						<use xlink:href="{base}/icons.svg#github" />
					</svg>
				</a>
				<div class="w=1"></div>
				<ThemeButton />
			</div>
		</div>
		<div class="h=1"></div>
	</div>
</nav>
<div class="w=4 @!lg@none"></div>