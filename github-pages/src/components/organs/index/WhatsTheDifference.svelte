<script>
import { H2 } from "lube-ui"
import styles from "js/styles.js"
</script>

<div class={styles.$common.contents_div}>
	<H2>What's the difference?</H2>
	<span>One of the key things about lube is that it's a zero-buildtime css Luberary.</span>
	<span>More than half of the CSS Lube code is the part that defines shorthand, and the actual logic is less than 3kb.</span>
	<span>With syntax and various optimizations that can be completely converted to css with just a simple string replacement, CSS Lube was able to achieve the same level of performance as zero-runtime css in js with this small bundle size.</span>
	<ul>
		<li class="mt=1">
			<span class="bold">VS. Traditional way</span><br>
			<span>- Utility-first CSS is much better in terms of maintenance and developer experience than semantic CSS.</span>
		</li>
		<li class="mt=1">
			<span class="bold">VS. Existing CSS In JS libraries</span><br>
			<span>- This is enough. Css Lube is incredibly fast.</span>
		</li>
		<li class="mt=1">
			<span class="bold">VS. Tailwind CSS</span><br>
			<span>- There are no additional learning curves except for a few syntax and shorthand.</span><br>
			<span>- All styles are available without write custom, and all changes are immediately reflected in the development phase.</span><br>
			<span>- You can easily switch to dark mode using basic media queries.</span><br>
			<span>- Build time is much faster because no additional steps are required to build.</span>
		</li>
		<li class="mt=1">
			<span class="bold">VS. vanilla-extract</span><br>
			<span>- It is much more productive using various convenient shorthand without having to write a separate ts phrase.</span>
		</li>
	</ul>
	<br>
	<span>Overall, CSS Lube aims to eliminate various constraints from the convenience of utility-first and to achieve the same level of performance as zero-runtime performance based on zero build time.</span>
</div>