<script lang="ts">
import { onMount } from "svelte";

export let words = []

let part,
i = 0,
offset = 0,
len = words.length,
forwards = true,
skip_count = 0,
skip_delay = 25,
speed = 40;
let word
let wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    word.innerText = part
    word.className = part
  },speed);
}
onMount(wordflick)
</script>

<div class="text-align=center">
  <div class="inline-block w=300 h=150">
    <span bind:this={word}></span>
    <span class="font-size=1.5rem font-weight=bold">|</span>
  </div>
</div>