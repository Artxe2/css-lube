<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import TypingText from "src/components/atoms/texts/TypingText.svelte";
</script>

<div class="text-align=center">
    <H3>AriasExample</H3>
    <TypingText
        words={[
            "bg:red",
            "bg=blue c=white",
            "inline-block bg=green c=white w=calc(20px*20)"
        ]}
    />
</div>