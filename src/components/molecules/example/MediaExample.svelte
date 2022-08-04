<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>
<div class="textAlign=center">
    <H3>Media</H3>
    <MorphingText
        array={[
            `<span class="c=violet">@maxWidth=800px@</span><span class="c=red">bg=red</span>`,
            `<span class="c=violet">@media (max-width:800px){</span> .\\@maxWidth\\=800px\\@bg\\=red{<span class="c=red">background-color:red</span>} <span class="c=violet">}</span>`
        ]}
    />
</div>