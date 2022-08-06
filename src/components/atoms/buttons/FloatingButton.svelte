<script lang="ts">
export let href = null
export let onClick = null
</script>
<a class="fixed right=-20 bottom=-20" href={href}>
    <button class="bg=var(--primary) color=white w=70 h=70 br=5 :hover/w=80;h=80 transition=1s"
        on:click={onClick}
    >
        <span>
            <slot></slot>
        </span>
    </button>
</a>