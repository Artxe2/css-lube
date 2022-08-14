<script lang="ts">
import AppBar from "src/components/tissues/AppBar.svelte";
import Root from "src/layouts/RootDiv.svelte";
import TestEditor from "src/components/organs/test/TestEditor.svelte";
</script>

<AppBar />
<Root>
	<div class="h=100% bgc=--primary50 @dark@bgc=--primary-d">
		<div class="h=4.5"></div>
		<div class="h=calc(100%-4.5em)">
			<TestEditor />
		</div>
	</div>
</Root>