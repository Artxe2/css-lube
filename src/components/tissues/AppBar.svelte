<script lang="ts">
import { base } from "$app/paths"
import { onMount } from "svelte"
import { _scroll } from "src/stores/common";
import ThemeSelector from "./ThemeSelector.svelte"
import MorphingText from "src/components/cells/animations/MorphingText.svelte";
import { page } from "$app/stores";

let scroll
const useActive = (el) => {
    page.subscribe(v => {
        let active = (location.origin + v.url.pathname).startsWith(el.href)
        el.classList.toggle("c=--primary", active)
        el.classList.toggle("@dark@c=--primary-l", active)
    })
}
onMount(() => {
    _scroll.subscribe(v => scroll = v)
})
</script>

<div class="z=1000 absolute flex ai=center w=100% h=4 tt=background-color_.5s {scroll ? "bgc=#3b599825 c=#00000050 @dark@c=#ffffff50 bs=0px_5px_5px_#3b599850 :hover/bgc=#3b599850;c=black;bs=0px_5px_5px_#3b5998 @dark@:hover/c=white" : "bgc=#3b599850 c=black @dark@c=white bs=0px_5px_5px_#3b5998"}">
    <div class="w=1"></div>
    <a href="{base}/">
        <button class="z=1050 fs=2 @lg@fs=2.5 c=black @dark@c=white >div/ta=left">
            <MorphingText
                array={[
                    `easy`,
                    `rapid`,
                    `intuitive`,
                    `<span class="fv=small-caps">InstantCSS</span>`
                ]}
                longest={3}
            />
        </button>
    </a>
    <div class="fg=1"></div>
    <a href="{base}/docu" use:useActive>
        <button class=":hover/c=--primary @dark@:hover/c=--primary-l h=2.5 fw=bold">Docs</button>
    </a>
    <div class="w=2 @!md@w=1"></div>
    <a href="{base}/test" use:useActive>
        <button class=":hover/c=--primary @dark@:hover/c=--primary-l h=2.5 fw=bold">Test</button>
    </a>
    <div class="w=2 @!md@w=1"></div>
    <ThemeSelector />
    <div class="w=1 @!md@none"></div>
    <a href="https://github.com/Artxe2/instant-css">
        <button class="@!md@none">
            <img class="w=2.5 h=2.5 :not(:hover)/ft=invert(0.3) @dark@ft=invert(1) @dark@:not(:hover)/ft=invert(0.7)" alt="github" src="{base}/svg/iconmonstr-github-1.svg" />
        </button>
    </a>
    <div class="w=1.5"></div>
</div>