<script>
import styles from "js/styles.js"
import NavButton from "organs/$common/Drawer/SubDrawer/NavButton.svelte"

/** @type {*} */
export let data

/** @type {boolean} */
export let is_open
</script>

<div class="fixed t=0 l=4 h=100% w=14 o=hidden
		{is_open ? "z=1" : "v=hidden"}">
	<div class="relative h=100%">
		<div class="absolute l=-13 h=100% w=13 br=0_1_1_0 bdl=.1_solid tt=transform_.3s o=hidden
				bg=--gray-95 @dark@bg=--gray-20
				{is_open && "tf=translateX(13em) bs=0_0_.4"}">
			<div class="h=100% oy=auto
					{styles.scrollbar.primary}">
				<ul class="flex column p=.5 fs=.75">
					{#if data.childs}
						{#each Object.keys(data.childs) as text}
						<li>
							<NavButton {text} data={data.childs[text]} />
						</li>
						{/each}
					{/if}
				</ul>
			</div>
		</div>
	</div>
</div>