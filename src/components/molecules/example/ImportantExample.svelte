<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import { onMount } from "svelte";

let word
let part
let start = "bg=violet bg=navy bg=blue bg=green bg=yellow bg=orange bg=red c=white!important"
let colors = ["", "red", "orange", "yellow", "green", "blue", "navy", "violet" ]

onMount(() => {
    part = start
    word.innerText = part
    word.className = part
    for (let i = 1; i < colors.length; i++) {
        for (let j = 1; j < colors.length; j++) {
        }
    }
})
</script>

<div class="text-align=center">
    <H3>ImportantExample</H3>
    <span bind:this={word}></span>
</div>