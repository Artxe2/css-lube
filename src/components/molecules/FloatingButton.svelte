<script lang="ts">
import TestEditor from "./TestEditor.svelte";



let modalOut
let modal
let isOpen = false
const css1 = "fixed bg=var(--primary) color=white br=0.25 transition=0.5s "
const css2 = "top=calc(100vh-4em) left=calc(100vw-4em) right=-1.25 bottom=-1.25 :hover/top=calc(100vh-5em) :hover/left=calc(100vw-5em) :hover/fs=1.25em :hover_span/opacity=1"
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
<div class={css1 + css2}
    bind:this={modal}
    on:click={openEditor}
>
    {#if isOpen}
        <div class="p=0.5 height=100%">
            <TestEditor />
        </div>
    {:else}
        <div class="pointer flex height=100%">
            <span class="opacity=0 fs=1.25em margin=auto">Test</span>
        </div>
    {/if}
</div>