<script>
import AppBar from "organs/$common/AppBar.svelte"
import Drawer from "organs/$common/Drawer.svelte"
import styles from "js/styles.js"
</script>

<div class="flex column h=100% ox=hidden
		fs=16px @md@fs=20px @xl@fs=24px
		bg=#fff @dark@bg=--gray-10
		c=#000 @dark@c=--gray-90
		_svg/f=currentcolor">
	<AppBar />
	<main class="relative fsk=1 fg=1 flex column o=auto
			{styles.scrollbar.primary}">
		<slot></slot>
	</main>
</div>