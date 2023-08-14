<script lang="ts">
import { page } from "$app/stores"

export let title: string
export let list: { href: string, text: string }[] = []

const use_active = (e: HTMLAnchorElement) => {
	page.subscribe(v => {
		let active = location.origin + v.url.pathname === e.href
		e.classList.toggle("bold", active)
		e.classList.toggle("c=--primary", active)
		e.classList.toggle("@dark@c=--havelock-blue", active)
	})
}
</script>

<div class="h=1.5"></div>
<li>
	<span class="bold">{title}</span>
	<div class="h=.5"></div>
	<ul class="bdl=1px_solid_gray >li/pl=1.5">
		{#each list as item}
		<li>
			<a href="{item.href}" use:use_active>
				<button class=":hover/c=--primary @dark@:hover/c=--havelock-blue">{item.text}</button>
			</a>
		</li>
		{/each}
	</ul>
</li>