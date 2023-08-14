<script lang="ts">
let container: HTMLDivElement

</script>

<div bind:this={container}
		class="h=100% ox=hidden
		fs=16px @md@fs=20px @xl@fs=24px
		bg=#fff @dark@bg=--gray-10
		c=#000 @dark@c=--gray-90
		_svg/f=#000 @dark@_svg/f=--gray-90
		tt=color_.3s,background_.3s _svg/tt=fill_.3s">
	<slot></slot>
</div>