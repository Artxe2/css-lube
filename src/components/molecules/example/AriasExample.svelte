<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import TypingText from "src/components/atoms/animation/TypingText.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>

<div class="text-align=center">
    <H3>Arias</H3>
    <span>key arias</span>
    <MorphingText
        array={[
            `<span class="c=red">bg=red</span>`,
            `.bg\\=red{<span class="c=red">backgroun-color:red</span>}`
        ]}
    />
    <div class="h=30"></div>
    <span>value arias</span>
    <MorphingText
        array={[
            `<span class="c=red">pointer</span>`,
            `.pointer{<span class="c=red">cursor:pointer</span>}`
        ]}
    />
    <div class="h=30"></div>
    <TypingText
        array={[
            "bg:red",
            "bg=blue c=white",
            "pointer bg=green c=white padding-right=calc(50px+40px-30px*0.2/1)"
        ]}
    />
</div>