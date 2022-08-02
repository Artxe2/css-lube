<script lang="ts">
import { onMount } from "svelte"

onMount(() => {
    const editor = document.querySelector("#editor") as HTMLInputElement
    const view = document.querySelector("#view")
    view.innerHTML = editor.value
    editor.addEventListener("input", e => {
        view.innerHTML = editor.value
    })
    document.querySelectorAll("div[class]").forEach(e => {
        e.setAttribute("title", e.getAttribute("class"))
    })
})
</script>

<div id="root" class="bg=#dddddd;width=100%;height=100%;display:flex">
    <textarea id="editor" class="bg=#00000000;width=50%;border=1px_solid_black">{`<div id="view">
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="bg=violet!!!!!! bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=orange! bg=red c=white">div</div>
        <div class="bg=red c=white">div</div>
    </div>
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="background-color=red">div</div>
        <div class="background-color=#ff0000;color=white;width=calc(20px_+_1rem)">div</div>
        <div class="background-color=red :after/display=block;content='';width=calc(50px_/_2);height=10px;background-color=blue">after</div>
        <div class="background-color=red :after/display=block;content='';width=25px;height=10px;background-color=blue :active/background-color=blue;color=white :active:after/background-color=green">active</div>
    </div>
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="background-color=red @min-width=400px@background-color=blue!">div</div>
        <div class="background-color=red @!screen&width=400~600@background-color=green!">div</div>
        <div class="background-color=red @min-width=400px@:active/background-color=blue @!screen&width=400~600@:active/background-color=green">active</div>
    </div>
</div>`}</textarea>
    <div id="view" class="width=50%;border=1px_solid_black"></div>
</div>