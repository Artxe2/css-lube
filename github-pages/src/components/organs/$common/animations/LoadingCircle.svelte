<script>
/** @type {{ classs?: string }} */
const { classs = "" } = $props()

/** @type {ReturnType<typeof setInterval>} */
let timer
let index = $state(0)

$effect(
	() => {
		timer = setInterval(() => index = ++index % 12, 90)
		return () => clearInterval(timer)
	}
)
</script>

<div class="flex relative w=4em h=4em jc=center ai=center c=#000 fs=1.5em
		>div/absolute;pb=3em;bold
		>div>div/h=1em;w=.2em;br=.1em
		>div>div/bg=#000 @dark@>div>div/bg=--gray-90
		{classs}">
	{#each new Array(12) as n, i}<div class="tf=rotate({i * 30}deg) op={(index - i % 12) === 0 ? "1" : (index - i % 12) === 1 || (index - i % 12) === -11 ? ".75" : (index - i % 12) === 2 || (index - i % 12) === -10 ? ".5" : ".25"}"><div></div></div>{/each}
</div>