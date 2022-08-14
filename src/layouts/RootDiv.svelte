<script lang="ts">
import { _scroll } from "src/stores/common";
import { onMount } from "svelte";

const setScroll = e => _scroll.set(e.target.scrollTop)
onMount(() => _scroll.set(0))
</script>

<div on:scroll={setScroll} class="flex column h=100% c=black @dark@c=white ox=hidden ::-webkit-scrollbar/w=0.5 ::-webkit-scrollbar-track/bgc=#3b599850 ::-webkit-scrollbar-thumb/bgc=--primary;br=0.25">
    <slot></slot>
</div>