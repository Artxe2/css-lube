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

<div id="root" class="bg=#dddddd;w=100%;min-height=100%;display:flex">
    <textarea id="editor" class="bg=#00000000;w=50%;border=1px_solid_black">{`<div id="view">
    <div class="flex flexWrap=wrap;border=1px_solid_black _div/inlineBlock;m=10px">
        <div class="bg=red c=white">div</div>
        <div class="bg=orange! bg=red c=white">div</div>
        <div class="bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=violet!!!!!! bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
    </div>
    <div class="display=flex;flexWrap=wrap;border=1px_solid_black _div/m=10px">
        <div class="background-color=red">div</div>
        <div class="background-color=#ff0000;color=white;w=calc(20px_+_1rem)">div</div>
        <div class="background-color=red :after/display=block;content='';w=calc(50px_/_2);h=10px;background-color=blue">after</div>
        <div class="background-color=red :after/display=block;content='';w=25px;h=10px;background-color=blue :active/background-color=blue;color=white :active:after/background-color=green pointer">active</div>
    </div>
    <div class="display=flex;flex-wrap=wrap;border=1px_solid_black _div/m=10px">
        <div class="background-color=red @min-width=400px@background-color=blue!">div</div>
        <div class="background-color=red @!screen&width=400~600@background-color=green!">div</div>
        <div class="background-color=red @min-width=400px@:active/pointer;background-color=blue @!screen&width=400~600@:active/background-color=green;pointer">active</div>
    </div>
</div>`}</textarea>
    <div id="view" class="width=50%;border=1px_solid_black"></div>
</div>