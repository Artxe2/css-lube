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

<div class="flex h=100% >*/width=50%;bd=1px_solid_black @dark@>*/bd=1px_solid_white">
    <div bind:this={view} class="p=1 oy=auto ::-webkit-scrollbar/w=0.5 ::-webkit-scrollbar-track/bgc=#3b599850 ::-webkit-scrollbar-thumb/bgc=--primary;br=0.25"></div>
    <textarea bind:this={editor} class="p=1 bgc=inherit resize=none ::-webkit-scrollbar/w=0.5 ::-webkit-scrollbar-track/bgc=#3b599850 ::-webkit-scrollbar-thumb/bgc=--primary;br=0.25">{
`<!-- TODO: monaco editor -->
<div>
    <!-- How to use -->
    <div class="bgc=red c=white">Hello</div>
</div>

<div>
    <!-- Basic -->
    <span class="background-color:red">raw</span>
    <span class="border:1px_solid">use space</span>
    <span class="color:red;font-size:8px!important">multi style</span>
</div>

<div>
    <!-- Selector & Pseudo Class -->
    <div class="_span.target/bgc=red">
        <span>child</span>
        <span class="target">target</span>
        <span>child</span>
    </div>
    <span class=":active/bgc=blue;c=red">pseudo class</span>
</div>

<div>
    <!-- Abbreviation -->
    <div class="background=red">"=" for ":"</div>
    <span class="bgc=red">key abbreviation</span>
    <span class="pointer">value abbreviation</span>
    <div class="bg=blue w=10">skip "em"</div>
    <span class="fs=calc(10px/2)">skip calc space</span>
    <div class="bg=--primary">var func</div>
</div>

<div>
    <!-- Priority -->
    <span class="c=yellow!!! c=orange!! c=red!">im yellow</span>
    <div class=">span/c=red">
        <span>im red</span>
        <span class="c=blue">im red</span>
        <span class="c=blue!">im blue</span>
    </div>
</div>

<div>
    <!-- Media Query -->
    <span class="@max-width=767px@fs=12px">default</span>
    <span class="@max-width=767px@:active/fs=1.25">with selector</span>
    <span class="@!screen&min-width=640px&max-width=767px@fs=10px">not, and</span>
    <span class="@width=640~767px@fs=10px">range</span>
    <span class="@md@fs=12px">abbreviation</span>
    <span class="c=red fs=16px @md@fs=12px">if width >= 768: im 12px</span>
    <span class="c=red fs=16px! @md@fs=12px">im 16px</span>
</div>

<div>
    <!-- Dark mode -->
    <span class="c=red @dark@c=blue">light: red, dark: blue</span>
</div>
`
    }</textarea>
</div>