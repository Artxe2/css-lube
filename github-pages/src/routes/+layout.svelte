<script lang="ts">
import AppBar from "organs/$common/AppBar.svelte"
import Drawer from "organs/$common/Drawer.svelte"
import RootDiv from "organs/$common/RootDiv.svelte"
import styles from "ts/styles"
</script>

<RootDiv>
	<div class="flex w=100% h=100%">
		<Drawer />
		<div class="fsk=1 fg=1 flex column">
			<AppBar />
			<main class="relative fsk=1 fg=1 flex column o=auto
					{styles.scrollbar.primary}">
				<slot></slot>
			</main>
		</div>
	</div>
</RootDiv>