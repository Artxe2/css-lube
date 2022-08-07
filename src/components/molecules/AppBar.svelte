<script lang="ts">
import GIthubIcon from "../svg-path/GIthubIcon.svelte"
import ThemeSelector from "../organisms/common/ThemeSelector.svelte"

export const checkScroll = y => {
    _appBar.className = css1 + (y ? css3 : css2)
}

let _appBar = null
let css1 = "z=1000 absolute flex w=100vw h=4 transition=background-color_0.5s "
let css2 = "bg=#3b599850 c=black @dark@c=white boxShadow=0px_5px_5px_#3b5998"
let css3 = "bg=#3b599825 c=#00000050 @dark@c=#ffffff50 boxShadow=0px_5px_5px_#3b599850 :hover/bg=#3b599850;c=black;boxShadow=0px_5px_5px_#3b5998 @dark@:hover/c=white"
</script>

<div bind:this={_appBar} class={css1 + css2}>
    <div class="w=1"></div>
    <span class="font=3em_'sans-serif' fw=bold">InstantCSS</span>
    <div class="flexGrow=1"></div>
    <div class="flex alignItems=center">
        <ThemeSelector />
    </div>
    <div class="w=1.5"></div>
    <div class="flex alignItems=center b=1px_solid_black">
        <svg class="w=2.5 h=2.5 b=1px_solid_black">
            <GIthubIcon id="git-icon"/>
        </svg>
    </div>
    <div class="w=1.5"></div>
</div>