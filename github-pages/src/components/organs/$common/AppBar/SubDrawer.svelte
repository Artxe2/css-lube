<script lang="ts">
import IGithub from "cells/svgs/i_github.svelte"
import ThemeButtonStick from "parts/$common/ThemeButtonStick.svelte"
import { base } from "$app/paths"
import NavButton from "./SubDrawer/NavButton.svelte"
import sub_menu from "ts/sub_menu"
import styles from "ts/styles"
import ICode from "cells/svgs/i_code.svelte"
import IQuickReference from "cells/svgs/i_quick_reference.svelte"
import IQuickReferenceFill from "cells/svgs/i_quick_reference_fill.svelte"
import ILibraryBooks from "cells/svgs/i_library_books.svelte"
import ILibraryBooksFill from "cells/svgs/i_library_books_fill.svelte"

export let is_open: boolean
</script>

<nav class="z=2 fixed t=0 l=-30 w=30 pl=10 h=100% br=0_1_1_0 tt=transform_.3s o=auto
		c=--gray-30 @dark@c=--gray-70
		bg=--gray-90 @dark@bg=--gray-30
		_svg/f=--gray-10
		{is_open ? "tf=translateX(20em)" : ""}">
	<div class="h=100% oy=auto flex column
			{styles.scrollbar.primary}">
		<div class="h=5"></div>
		<div class="flex column p=.5 fg=1">
			<NavButton classs=":hover_.icon/tf=scale(1.2)"
					text="Home" data={sub_menu["Home"]}>
				<img src="{base}/favicon.png" alt="logo" class="icon w=1.7 pb=.2 mr=.5">
			</NavButton>
			<NavButton classs=":not(:hover)_.icon>div:nth-of-type(even)/op=0
					:hover_.icon>div:nth-of-type(odd)/op=0"
					text="Documents" data={sub_menu["Documents"]}>
				<div class="icon relative inline-block w=1.5 h=1.1 mr=.5">
					<ILibraryBooks classs="absolute t=-.15 w=1.5" />
					<ILibraryBooksFill classs="absolute t=-.15 w=1.5" />
				</div>
			</NavButton>
			<NavButton classs=":hover_.icon/tf=scale(1.2)"
					text="REPl" data={sub_menu["REPl"]}>
				<ICode classs="icon inline-block w=2 m=0_-.25 lh=1.7 mr=.25!" />
			</NavButton>
			<NavButton classs=":not(:hover)_.icon>div:nth-of-type(even)/op=0
					:hover_.icon>div:nth-of-type(odd)/op=0"
					text="Reference" data={sub_menu["Reference"]}>
				<div class="icon relative inline-block w=1.5 h=1.1 mr=.5">
					<IQuickReference classs="absolute t=-.15 w=1.5" />
					<IQuickReferenceFill classs="absolute t=-.15 w=1.5" />
				</div>
			</NavButton>
		</div>
		<div class="h=7"></div>
		<div class="flex w=100% jc=center">
			<div class="flex ai=center">
				<a href="https://github.com/Artxe2/css-lube" target="_blank"
						class="flex ai=center fs=1.5
						:hover_svg/f=#000 @dark@:hover_svg/f=#fff">
					<IGithub classs="w=2.2 h=2.2 _svg/f=--gray-10" />
				</a>
				<div class="w=1"></div>
				<ThemeButtonStick />
			</div>
		</div>
		<div class="h=1"></div>
	</div>
</nav>
<div class="w=4 @!lg@none"></div>