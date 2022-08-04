<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import { onMount } from "svelte";

let word
onMount(() => {
    let start = "bg=violet bg=navy bg=blue bg=green bg=yellow bg=orange bg=red color=white"
    let text = " "
    word.className = [
        "bg=violet!!!!!!!",
        "bg=violet!!!!!!",
        "bg=violet!!!!!",
        "bg=violet!!!!",
        "bg=violet!!!",
        "bg=violet!!",
        "bg=violet!",
        "bg=navy!!!!!!",
        "bg=navy!!!!!",
        "bg=navy!!!!",
        "bg=navy!!!",
        "bg=navy!!",
        "bg=navy!",
        "bg=blue!!!!!",
        "bg=blue!!!!",
        "bg=blue!!!",
        "bg=blue!!",
        "bg=blue!",
        "bg=green!!!!",
        "bg=green!!!",
        "bg=green!!",
        "bg=green!",
        "bg=yellow!!!",
        "bg=yellow!!",
        "bg=yellow!",
        "bg=orange!!",
        "bg=orange!",
        "bg=red!"
    ].join(" ")
    const setText = (a, b) => {
        text = text.replace(a, b)
        word.innerText = text
        word.className = text
    }
    const animation = () => {
    	let time = 10
        setTimeout(() => setText(/.+/, start), time)
        setTimeout(() => setText(/red/, "red!"), time = 900)
        setTimeout(() => setText(/orange/, "orange!"), time += 800)
        setTimeout(() => setText(/orange/, "orange!"), time += 100)
        setTimeout(() => setText(/yellow/, "yellow!"), time += 700)
        setTimeout(() => setText(/yellow/, "yellow!"), time += 100)
        setTimeout(() => setText(/yellow/, "yellow!"), time += 100)
        setTimeout(() => setText(/white/, "black"), time)
        setTimeout(() => setText(/green/, "green!"), time += 600)
        setTimeout(() => setText(/green/, "green!"), time += 100)
        setTimeout(() => setText(/green/, "green!"), time += 100)
        setTimeout(() => setText(/green/, "green!"), time += 100)
        setTimeout(() => setText(/black/, "white"), time)
        setTimeout(() => setText(/blue/, "blue!"), time += 500)
        setTimeout(() => setText(/blue/, "blue!"), time += 100)
        setTimeout(() => setText(/blue/, "blue!"), time += 100)
        setTimeout(() => setText(/blue/, "blue!"), time += 100)
        setTimeout(() => setText(/blue/, "blue!"), time += 100)
        setTimeout(() => setText(/navy/, "navy!"), time += 400)
        setTimeout(() => setText(/navy/, "navy!"), time += 100)
        setTimeout(() => setText(/navy/, "navy!"), time += 100)
        setTimeout(() => setText(/navy/, "navy!"), time += 100)
        setTimeout(() => setText(/navy/, "navy!"), time += 100)
        setTimeout(() => setText(/navy/, "navy!"), time += 100)
        setTimeout(() => setText(/violet/, "violet!"), time += 300)
        setTimeout(() => setText(/violet/, "violet!"), time += 100)
        setTimeout(() => setText(/violet/, "violet!"), time += 100)
        setTimeout(() => setText(/violet/, "violet!"), time += 100)
        setTimeout(() => setText(/violet/, "violet!"), time += 100)
        setTimeout(() => setText(/violet/, "violet!"), time += 100)
        setTimeout(() => setText(/violet/, "violet!"), time += 100)
        setTimeout(animation, time += 1000)
    }
    animation()
})
</script>

<div class="text-align=center">
    <div class="inline-block w=300 h=150">
        <H3>Important</H3>
        <span bind:this={word}></span>
    </div>
</div>