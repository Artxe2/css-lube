<script>
import { Download } from "lube-ui"
import SafeImg from "organs/$common/utils/SafeImg.svelte"
import styles from "js/styles.js"
</script>

<div class={styles.$common.contents_div}>
	<span>CSS Lube provides simple code intelligence in vscode extension</span><br>
	<span>It's easy to see the shortand that the library provides.</span>
	<div class="h=1"></div>
	<div>
		<a href="https://marketplace.visualstudio.com/items?itemName=Artxe.intellisense-css-lube" target="_blank">
			<button class="h=2.5 br=1.25 p=0_1 jc=center c=#fff
					bg=--primary-50 :hover/bg=--primary-40
					:hover/ts=0_0_.5
					:active/bg=--primary-50!">
				<span class="@md@fs=1.5">intellisense.vsix v0.2.0</span>
			</button>
		</a>
	</div>
	<div class="h=1"></div>
	<SafeImg classs="br=1 o=hidden" aspect_ratio={16 / 9} src="https://github.com/Artxe2/css-lube/raw/main/github-pages/static/imgs/intellisense.gif" />
</div>