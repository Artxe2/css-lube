<script lang="ts">
import { base } from "$app/paths"
import ICode from "cells/svgs/i_code.svelte"
import IGithub from "cells/svgs/i_github.svelte"
import NavButton from "organs/$common/Drawer/NavButton.svelte"
import SubDrawer from "organs/$common/Drawer/SubDrawer.svelte"
import ThemeButton from "parts/$common/ThemeButton.svelte"
import sub_menu from "ts/sub_menu"
import ILibraryBooks from "cells/svgs/i_library_books.svelte"
import ILibraryBooksFill from "cells/svgs/i_library_books_fill.svelte"
import IQuickReference from "cells/svgs/i_quick_reference.svelte"
import IQuickReferenceFill from "cells/svgs/i_quick_reference_fill.svelte"

const sub_list_open = {
	docs: false,
	ref: false
}
</script>

<nav class="z=10000 fixed t=0 l=0 h=100%
		c=--gray-30 @dark@c=--gray-70
		_svg/f=--gray-10
		@!lg@v=hidden">
	<div class="flex column h=100% w=4
			bg=--gray-95 @dark@bg=--gray-20">
		<div class="h=1"></div>
		<div class="flex column">
			<NavButton classs=":hover_.icon/tf=scale(1.2)"
					href="{base}/" text="Home">
				<img src="{base}/favicon.png" alt="logo" class="icon z=1 w=1.5">
			</NavButton>
		</div>
		<div class="h=.5"></div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex column"
				on:mouseleave={() => sub_list_open.docs = false}>
			<NavButton classs=":not(:hover)_.icon>div:nth-of-type(even)/op=0
					:hover_.icon>div:nth-of-type(odd)/op=0"
					on:mouseenter={() => sub_list_open.docs = true}
					href="{base}/docs" text="Documents">
				<div class="icon z=1 relative w=1.2 h=1.5">
					<ILibraryBooks classs="absolute t=-.15 w=1.2" />
					<ILibraryBooksFill classs="absolute t=-.15 w=1.2" />
				</div>
			</NavButton>
			<SubDrawer data={sub_menu["Documents"]} bind:is_open={sub_list_open.docs} />
		</div>
		<div class="h=.5"></div>
		<div class="flex column">
			<NavButton classs=":hover_.icon>div/tf=scale(1.2)"
					href="{base}/repl" text="REPL">
				<div class="icon z=1 relative w=1.5 h=1.5">
					<ICode classs="absolute i=0 w=1.5" />
				</div>
			</NavButton>
		</div>
		<div class="h=.5"></div>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="flex column"
				on:mouseleave={() => sub_list_open.ref = false}>
			<NavButton classs=":not(:hover)_.icon>div:nth-of-type(even)/op=0
					:hover_.icon>div:nth-of-type(odd)/op=0"
					on:mouseenter={() => sub_list_open.ref = true}
					href="{base}/ref" text="Reference">
				<div class="icon z=1 relative w=1.2 h=1.5">
					<IQuickReference classs="absolute t=-.15 w=1.2" />
					<IQuickReferenceFill classs="absolute t=-.15 w=1.2" />
				</div>
			</NavButton>
			<SubDrawer data={sub_menu["Reference"]} bind:is_open={sub_list_open.ref} />
		</div>
		<div class="fg=1"></div>
		<div class="h=1"></div>
		<div class="flex w=100% jc=center">
			<a href="https://github.com/Artxe2/css-lube" target="_blank"
					class="flex ai=center :hover_svg/f=#000 @dark@:hover_svg/f=#fff">
				<IGithub classs="w=2.2 h=2.2" />
			</a>
		</div>
		<div class="h=1"></div>
		<div class="flex w=100% jc=center">
			<ThemeButton />
		</div>
		<div class="h=1"></div>
	</div>
</nav>
<div class="w=4 @!lg@none"></div>