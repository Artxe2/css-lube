import { onMount } from 'svelte'
import { writable } from 'svelte/store'

export const _theme = writable("")

onMount(() => {
    _theme.set(localStorage.getItem("THEME"))
})