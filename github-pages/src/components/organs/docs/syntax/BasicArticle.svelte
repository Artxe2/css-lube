<script>
import { base } from "$app/paths"
import styles from "js/styles.js"
import TestEditor from "parts/$common/TestEditor.svelte"
</script>

<div class={styles.$common.contents_div}>
	<span>By default, class names behave like inline styles</span>
	<span>Multiple styles or other attributes are also freely applicable in basic syntax</span>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="background:#08f width:72px;height:72px!important">
	Box
</div>`} />
	</div>
	<br>
	<span>The default unit is applied to styles such as width and height</span>
	<a href="{base}/docs/custom#default-unit" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Default Unit
	</a>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="background:#08f; width:96 height:96">
	Box
</div>`} />
	</div>
	<br>
	<span>You can abbreviate and use properties with shorthands</span>
	<a href="{base}/docs/custom#shorthand-for-properties" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Shorthand for Properties
	</a>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="bg:blue w:72 h:72">
	Box
</div>`} />
	</div>
	<br>
	<span>Because class names use spaces( ) as delimiters, values that contain spaces should use underscores(_) instead of spaces</span>
	<span>A colon(:) can be included in the class name, but can be replaced by an equal sign(=) depending on your preference</span>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="bd=2px_solid_red bg=#08f w=72 h=72">
	Box
</div>`} />
	</div>
	<br>
	<span>You can abbreviate and use value too with shorthands</span>
	<a href="{base}/docs/custom#shorthand-for-values" target="_blank"
			class="w=fit-content {styles.$common.link}">
		Shorthand for Values
	</a>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="bg=#08f w=72 h=72">
	<span class="fs=1.5em bold">Box</span>
</div>`} />
	</div>
	<br>
	<span>When you use minus(-) or plus(+) in the calc function, spaces are automatically added</span>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="bg=#08f w=calc(4em-1px) h=calc(4em+1px)">
	Box
</div>`} />
	</div>
	<br>
	<span>Values starting with two hyphens automatically wrap the var function</span>
	<div class="h=12"></div>
	<div class="h=180 @!md@h=360">
		<TestEditor content={`<div class="bg=--primary-50 w=72 h=72">
	Box
</div>`} />
	</div>
	<br>
</div>