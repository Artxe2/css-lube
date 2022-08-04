<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import TypingText from "src/components/atoms/animation/TypingText.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>

<div class="textAlign=center">
    <H3>Basic</H3>
    <span>class.replace("_", " ").replace("=", ":")</span>
    <MorphingText
        array={[
            `<span class="c=red">backgroun-color=red</span>`,
            `.backgroun-color\\=red{<span class="c=red">backgroun-color:red</span>}`
        ]}
    />
    <MorphingText
        array={[
            `<span class="c=blue">color=blue;font-size=14px</span>`,
            `.color\\=blue\\;font-size=14px{<span class="c=blue">color:red;font-size:14px</span>}`
        ]}
    />
    <div class="h=30"></div>
    <TypingText
        array={[
            "background-color:red",
            "background-color=blue",
            "background-color=green;color=white"
        ]}
    />
</div>