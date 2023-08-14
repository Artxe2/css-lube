<script lang="ts">
import { H2 } from "lube-ui"
import styles from "ts/styles"
</script>

<div class="flex column br=1.5 o=hidden p=1.5
		bg=--gray-80 @dark@bg=--gray-20">
	<H2>What is CSS Lube</H2>
	<span>CSS Lube is Highly-optimized JIT CSS Generator.</span>
	<span>This makes improved your developer experience by implement any designs directly in markup and immediately reflect feedback.</span>
	<span>In addition, CSS Lube parses HTML documents at runtime and render styles, so it can completely replace style files that become bloated whenever updated with a 6,450 byte js file.</span>
	<div>
		<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion" target="_blank">
			<button class={styles.button.link}>Browser compatibility</button>
		</a>
	</div>
</div>