<script lang="ts">
export let href = null
export let onClick = null
</script>
<a class="inline-block" href={href}>
    <button class="bg=var(--primary) w=6.25 h=2.5 br=0.25"
        on:click={onClick}
    >
        <span>
            <slot></slot>
        </span>
    </button>
</a>