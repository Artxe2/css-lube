<script>
import styles from "js/styles.js"
import TestEditor from "parts/$common/TestEditor.svelte"
</script>

<div class={styles.$common.contents_div}>
	<span>Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles</span>
	<div class="h=.5"></div>
	<div class="h=10 @!md@h=20">
		<TestEditor content={`<div class="w=3.5 ta=center >div.target/bgc=red _div:nth-of-type(2n+1)/bgc=blue">
	<div>1</div>
	<div class="target">2</div>
	<div>3</div>
	<div>4</div>
</div>`} />
	</div>
	<br>
	<span>The pseudo class is also applied in the same way as the selector</span>
	<div class="h=.5"></div>
	<div class="h=10 @!md@h=20">
		<TestEditor content={`<div class="bg=--primary-40 c=#ccc w=3.5 h=3.5 :active/bg=--primary-60;c=#fff">
	:active
</div>`} />
	</div>
	<br>
	<span>If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important</span>
	<div class="h=.5"></div>
	<div class="h=10">
	<TestEditor content={`<pre>
	<span class="c=purple!!!!!! c=navy!!!!!">[class] * 6 { color: purple }</span>
	<span class="c=navy!!!!! c=blue!!!!">[class] * 5 { color: navy }</span>
	<span class="c=blue!!!! c=green!!!">[class] * 4 { color: blue }</span>
	<span class="c=green!!! yellow!!">[class] * 3 { color: green }</span>
	<span class="c=yellow!! c=orange!">[class] * 2 { color: yellow }</span>
	<span class="c=orange! c=red">[class] { color: orange }</span>
	<span class="c=red">{ color: red }</span>
</pre>`} />
	</div>
	<br>
</div>