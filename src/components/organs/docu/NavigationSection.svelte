<script>
import { page } from "$app/stores"
import { base } from "$app/paths"
export let title
export let list = []

const useActive = (el) => {
    page.subscribe(v => {
        let active = location.origin + v.url.pathname === el.href
        el.classList.toggle("bold", active)
        el.classList.toggle("c=--primary", active)
        el.classList.toggle("@dark@c=--primary-l", active)
    })
}
</script>

<div class="h=1.5"></div>
<li>
    <span class="bold">{title}</span>
    <div class="h=0.5"></div>
    <ul class="bdl=1px_solid_gray >li/pl=1.5">
        {#each list as item}
        <li>
            <a href="{base}{item.href}" use:useActive>
                <button class=":hover/c=--primary @dark@:hover/c=--primary-l">{item.text}</button>
            </a>
        </li>
        {/each}
    </ul>
</li>