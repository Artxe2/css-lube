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
            "pointer bg=green c=white padding-right=calc(50px+40px-30px*0.2/1)"
        ]}
    />
</div>