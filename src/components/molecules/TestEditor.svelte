<script lang="ts">
import { onMount } from "svelte"

let editor
let view
onMount(() => {
    view.innerHTML = editor.value
    editor.addEventListener("input", e => {
        view.innerHTML = editor.value
    })
    document.querySelectorAll("div[class]").forEach(e => {
        e.setAttribute("title", e.getAttribute("class"))
    })
})
</script>

<div class="flex h=100% bg=--background c=black >*/width=50%;b=1px_solid_black">
    <div bind:this={view}></div>
    <textarea bind:this={editor} class="bg=inherit resize=none">{`<span class="c=red">hello world</span>`}</textarea>
</div>