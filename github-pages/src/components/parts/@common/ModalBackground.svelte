<script lang="ts">
import { modal$ } from "parts/@common/store"
</script>

<div class="{$modal$ ? "z=" + $modal$ : "none"} absolute i=0 bg=rgb(15,23,42,.8) bf=blur(.25em)"
		on:click={() => $modal$ = 0}></div>
