<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import TypingText from "src/components/atoms/texts/TypingText.svelte";
</script>

<div class="text-align=center">
    <H3>BasicExample</H3>
    <TypingText
        words={[
            "background-color:red",
            "background-color=blue",
            "background-color=green;color=white"
        ]}
    />
</div>