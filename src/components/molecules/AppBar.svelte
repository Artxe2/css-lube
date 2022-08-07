<script lang="ts">
import SimpleButton from "src/components/atoms/buttons/SimpleButton.svelte";

let _appBar = null
let css1 = "absolute flex w=100vw h=4 transition=0.5s @dark@c=white "
let css2 = "bg=#3b599850 boxShadow=0px_5px_5px_#3b5998"
let css3 = "bg=transparent boxShadow=0px_5px_5px_#3b599850"
export const checkScroll = y => {
    _appBar.className = css1 + (y ? css3 : css2)
}

const setTheme = t => {
    localStorage.setItem("THEME", t)
    window["instantCss"]()
}
const resetTheme = () => {
    localStorage.removeItem("THEME")
    window["instantCss"]()
}
</script>
<div bind:this={_appBar} class={css1 + css2}>
    <div class="w=1"></div>
    <span class="font=3em_'sans-serif' fw=bold">InstantCSS</span>
    <div class="flexGrow=1"></div>
    <SimpleButton onClick={() => setTheme("LIGHT")}>LIGHT</SimpleButton>
    <SimpleButton onClick={() => setTheme("DARK")}>DARK</SimpleButton>
    <SimpleButton onClick={resetTheme}>SYSTEM</SimpleButton>
</div>