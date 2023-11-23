<script>
const { classs } = $props()

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

<div class="flex relative w=4 h=4 jc=center ai=center c=#000 fs=1.5
		>div/absolute;pb=3;bold
		>div>div/h=1;w=.2;br=.1
		>div>div/bg=#000 @dark@>div>div/bg=--gray-90
		{classs}">
	{#each new Array(12) as n, i}<div class="tf=rotate({i * 30}deg) op={(index - i % 12) === 0 ? "1" : (index - i % 12) === 1 || (index - i % 12) === -11 ? ".75" : (index - i % 12) === 2 || (index - i % 12) === -10 ? ".5" : ".25"}"><div></div></div>{/each}
</div>