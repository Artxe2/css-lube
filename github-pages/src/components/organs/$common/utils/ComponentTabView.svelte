<script>
import TabPage from "organs/$common/utils/TabPage.svelte.js"

let index = $state(0)
</script>

<div class="@!sm@fs=.6">
	<div class="flex h=3 br=1.5
			bg=--gray-95 @dark@bg=--gray-20">
		<button onclick={() => index = 0}
				class="fg=1 br=1.5
				:hover/bg=--gray-70 @dark@:hover/bg=--gray-30
				{index == 0 && "bg=--primary-50!! c=--primary-90!!"}">
			<span class="fs=1.25 bold">Result</span>
		</button>
		<button onclick={() => index = 1}
				class="fg=1 br=1.5
				:hover/bg=--gray-70 @dark@:hover/bg=--gray-30
				{index == 1 && "bg=--primary-50!! c=--primary-90!!"}">
			<span class="fs=1.25 bold">Code</span>
		</button>
	</div>
	<div class="h=1"></div>
	<TabPage {index}>
		<slot></slot>
	</TabPage>
</div>