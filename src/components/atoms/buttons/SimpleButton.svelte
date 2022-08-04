<script lang="ts">
export let href = null
</script>
<a class="inline-block" href={href}>
    <button class="bg=var(--primary) color=white w=100 h=40 br=5px">
        <span>
            <slot></slot>
        </span>
    </button>
</a>