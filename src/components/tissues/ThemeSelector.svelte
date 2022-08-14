<script>
import { onMount } from "svelte"
import { _theme } from "src/stores/common";

const setTheme = t => {
    _theme.set(t)
    localStorage.setItem("THEME", t)
    window["instantCss"]()
}
const resetTheme = () => {
    localStorage.removeItem("THEME")
    window["instantCss"]()
    _theme.set("")
}

let theme
const css1 = "bgc=--primary :hover/bgc=--primary-l w=6.25 h=2.5 br=0.25"
const css2 = "bgc=--primary :hover/bgc=--primary-l w=6.25 h=2.5 br=0.25 fw=bold"
onMount(() => {
    _theme.set(localStorage.getItem("THEME"))
    _theme.subscribe(v => theme = v)
})
</script>

<div class="relative w=6.25 h=2.5 top=0 o=hidden br=0.25 :hover/tt=.5s :hover/h=8.5 :hover/top=3">
    <div class="absolute flex column r=0 t=0 :hover/tt=top_.5s {theme ? theme === "LIGHT" ? "" : ":not(:hover)/t=-3" : ":not(:hover)/t=-6"}">
        <button class="{theme === "LIGHT" ? css2 : css1}"
            on:click={() => setTheme("LIGHT")}
        >LIGHT</button>
        <div class="h=0.5"></div>
        <button class="{theme === "DARK" ? css2 : css1}"
            on:click={() => setTheme("DARK")}
        >DARK</button>
        <div class="h=0.5"></div>
        <button class="{theme ? css1 : css2}"
            on:click={resetTheme}
        >SYSTEM</button>
    </div>
</div>