<script>
import { onMount } from "svelte"
import { _theme } from "src/stores/common";

import SimpleButton from "../../atoms/buttons/Button.svelte";

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
const css1 = "bg=var(--primary) w=6.25 h=2.5 br=0.25"
const css2 = "bg=var(--primary) w=6.25 h=2.5 br=0.25 fw=bold"
onMount(() => {
    _theme.set(localStorage.getItem("THEME"))
    _theme.subscribe(v => theme = v)
})
</script>

<div class="relative w=6.25 h=2.5 top=0 overflow=hidden :hover/transition=0.5s :hover/h=8.5 :hover/top=3">
    <div class={"absolute flex column right=0 top=0 :hover/transition=top_0.5s" + (theme ? theme === "LIGHT" ? "" : " :not(:hover)/top=-3" : " :not(:hover)/top=-6")}>
        <SimpleButton classs={theme === "LIGHT" ? css2 : css1}
            onClick={() => setTheme("LIGHT")}
        >LIGHT</SimpleButton>
        <div class="h=0.5"></div>
        <SimpleButton classs={theme === "DARK" ? css2 : css1}
            onClick={() => setTheme("DARK")}
        >DARK</SimpleButton>
        <div class="h=0.5"></div>
        <SimpleButton classs={theme ? css1 : css2}
            onClick={resetTheme}
        >SYSTEM</SimpleButton>
    </div>
</div>