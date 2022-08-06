<script lang="ts">
import TestEditor from "./TestEditor.svelte";



let modalOut
let modal
let isOpen = false
const css1 = "fixed bg=var(--primary) color=white br=5 transition=0.5s "
const css2 = "top=calc(100vh-60px) left=calc(100vw-60px) right=-20 bottom=-20 :hover/top=calc(100vh-80px);left=calc(100vw-80px);fs=1.25rem"
const css3 = "top=5vh left=5vw right=5vw bottom=5vh"
const openEditor = () => {
    if (!isOpen) {
        isOpen = true
        modalOut.className = modalOut.className.replace(/none/, "fixed")
        modal.className = css1 + css3
    }
}
const closeEditor = () => {
    if (isOpen) {
        isOpen = false
        modalOut.className = modalOut.className.replace(/fixed/, "none")
        modal.className = css1 + css2
    }
}
</script>

<div class="none pointer bg=#00000030 top=0 left=0 right=0 bottom=0"
    bind:this={modalOut}
    on:click={closeEditor}
></div>
<div class="fixed bg=var(--primary) color=white br=5 transition=0.5s top=calc(100vh-45px) left=calc(100vw-45px) right=-15 bottom=-15 :hover/top=calc(100vh-80px);left=calc(100vw-80px);fs=1.25rem"
    bind:this={modal}
    on:click={openEditor}
>
    {#if isOpen}
        <div class="p=5 height=100%">
            <TestEditor />
        </div>
    {:else}
        <div class="pointer flex height=100%">
            <span class="margin=auto">Test</span>
        </div>
    {/if}
</div>