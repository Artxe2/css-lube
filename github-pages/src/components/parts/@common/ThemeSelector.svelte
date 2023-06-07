<script lang="ts">
import { onMount } from "svelte"
import { theme$ } from "parts/@common/store"
import styles from "styles"

const setTheme = (t: string) => {
	localStorage.setItem("THEME", t)
	;(window as any).cssLubricant()
	$theme$ = t
}
const resetTheme = () => {
	localStorage.removeItem("THEME")
	;(window as any).cssLubricant()
	$theme$ = ""
}
onMount(() => $theme$ = localStorage.getItem("THEME") as string)
</script>

<div class="w=6.25 h=2.5">
	<div class="relative h=2.5 top=0 o=hidden br=.25 fw=normal :hover/tt=height_.5s :hover/h=8.5">
		<div class="absolute flex column r=0 t=0 :hover/tt=transform_.5s {$theme$ ? $theme$ === "LIGHT" ? "" : ":not(:hover)/tf=translateY(-3em)" : ":not(:hover)/tf=translateY(-6em)"}">
			<button class="{styles.button.themeSelector}
					{$theme$ === "LIGHT" ? "bold" : ""}"
					on:click={() => setTheme("LIGHT")}>LIGHT</button>
			<div class="h=.5"></div>
			<button class="{styles.button.themeSelector}
					{$theme$ === "DARK" ? "bold" : ""}"
					on:click={() => setTheme("DARK")}>DARK</button>
			<div class="h=.5"></div>
			<button class="{styles.button.themeSelector}
					{!$theme$ ? "bold" : ""}"
					on:click={resetTheme}>SYSTEM</button>
		</div>
	</div>

</div>