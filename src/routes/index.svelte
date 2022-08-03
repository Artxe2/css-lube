<script lang="ts">
import AppBar from "src/components/molecules/AppBar.svelte";
import PromotionTitle from "src/components/atoms/PromotionTitle.svelte";
import GotoTextButton from "src/components/organisms/index/GotoTextButton.svelte";
</script>
<div id="root" class="flex column bg=var(--background) h=100%">
    <AppBar></AppBar>
    <div class="text-align=center">
        <PromotionTitle>Build modern websites on the spot!</PromotionTitle>
        <PromotionTitle>Takes only 3 minutes to learn.</PromotionTitle>
    </div>
    <GotoTextButton />
</div>