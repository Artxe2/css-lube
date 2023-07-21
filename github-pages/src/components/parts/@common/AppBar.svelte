<script lang="ts">
import { base } from "$app/paths"
import { scroll$ } from "parts/@common/store"
import MorphingText from "organs/@common/animations/MorphingText.svelte"
import AppBarMenu from "parts/@common/AppBarMenu.svelte"
</script>

<header class="z=10 fixed flex ai=center w=100% h=4 tt=background-color_.5s
		bg=--primary-dd bs=0_.5_.5_--primary-55 bdb=.1_solid_#fff
		{$scroll$ ? "op=.6 :hover/op=1" : ""}">
	<div class="w=1"></div>
	<a href="{base}/">
		<button>
			<code class="fs=2 >div/ta=left _span/bold @lg@fs=2.5 c=#000 @dark@c=#fff">
				<MorphingText
					array={[
						[ `<span class="c=red">J</span>ust-<span class="c=red">i</span>n-<span class="c=red">t</span>ime`, 1500 ],
						[ `<span class="c=red">U</span>tility-<span class="c=red">f</span>irst`, 1500 ],
						[ `C<span class="c=red">SS</span> <span class="fv=small-caps">L<span class="c=red">ube</span></span>`, 2500 ]
					]}
					longest={2}
					transition={500}
				/>
			</code>
		</button>
	</a>
	<div class="fg=1"></div>
	<AppBarMenu />
</header>