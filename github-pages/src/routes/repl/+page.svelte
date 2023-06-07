<script>
import AppBar from "parts/@common/AppBar.svelte"
import TestEditor from "organs/repl/TestEditor.svelte"
</script>

<svelte:head>
	<title>REPL | CSS Lubricant</title>
</svelte:head>

<div class="h=100% xh=100% bg=--primary-55 @dark@bg=--firefly">
	<AppBar />
	<div class="h=4"></div>
	<div class="h=calc(100%-4em)">
		<TestEditor />
	</div>
</div>