<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>

<div class="textAlign=center">
    <H3>Basic</H3>
    <span>class.replace("_", " ").replace("=", ":")</span>
    <MorphingText
        array={[
            `<span class="c=red">background-color=red</span>`,
            `.background-color\\=red{<span class="c=red">background-color:red</span>}`
        ]}
    />
    <MorphingText
        array={[
            `<span class="c=red">color=blue;font-size=14px</span>`,
            `.color\\=blue\\;font-size=14px{<span class="c=red">color:red;font-size:14px</span>}`
        ]}
    />
</div>