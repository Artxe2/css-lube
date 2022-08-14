<script>
import CodePage from "src/components/cells/boxs/CodePage.svelte";
</script>

<span class="bold">Default Unit</span>
<div class="fs=0.75">
    <span>Default Unit of InstantCSS.</span><br />
    <!-- InstantCSS의 기본 단위입니다. -->
</div>
<div class="h=2"></div>
<CodePage>
    <pre>const abbrUnits = <span class="c=red">{`/(?<=(^|;|-)(border-radius|bottom|font-size|gap|height|left|margin|padding|right|top|width)):-?\d+\.?\d*(?=;|$)/`}</span><span class="bold c=blue">g</span>
const DEFAULT_UNIT = <span class="c=#f40 @dark@c=#fd6">{`"em"`}</span></pre>
</CodePage>