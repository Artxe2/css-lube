<script lang="ts">
export let tag
export let attr = {}
</script>

{"<"}<span class="c=#f07 @dark@c=#f7b">{tag}</span>{#each Object.keys(attr) as v}{" " + v}=<span class="c=#f40 @dark@c=#fd6">"{attr[v]}"</span>{/each}&gt;<slot></slot>&lt;/<span class="c=#f07 @dark@c=#f7b">{tag}</span>{">"}