<script lang="ts">
export let isOpen: boolean
export let zLevel = 0
</script>
<button class="fixed t=0 l=0 w=100% h=100% bg=rgb(15,23,42,.4) bf=blur(.25em)
		{isOpen ? `z=${zLevel}` : "none"}"
		on:click={() => isOpen = false}></button>