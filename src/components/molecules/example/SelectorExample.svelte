<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>
<div class="textAlign=center">
    <H3>Selector & Pseudo Class</H3>
    <span>selector</span>
    <MorphingText
        array={[
            `<span class="c=blue">_div>.child/</span><span class="c=red">bg=red</span>`,
            `._div\\>\\.child\\/bg\\=red<span class="c=blue"> div>.child</span>{<span class="c=red">background-color:red</span>}`
        ]}
    />
    <div class="h=30"></div>
    <span>pseudo class</span>
    <MorphingText
        array={[
            `<span class="c=blue">:after:active/</span><span class="c=red">bg=blue</span>`,
            `.\\:after\\:active\\/bg\\=blue<span class="c=blue">:after:active</span>{<span class="c=red">background-color:blue</span>}`
        ]}
    />
</div>