<script>
import CodePage from "src/components/cells/boxs/CodePage.svelte";

</script>
<span class="bold">Value Abbreviation</span>
<div class="fs=0.75">
    <span>Value Abbreviations of InstantCSS.</span><br />
    <!-- InstantCSS의 밸류 약어입니다. -->
</div>
<div class="h=2"></div>
<CodePage>
    <pre>const abbrValues = JSON.parse(<span class="c=#f40 @dark@c=#fd6">{`\`{
    "absolute":"position:absolute",
    "block":"display:block",
    "bold":"font-weight:bold",
    "column":"flex-direction:column",
    "flex":"display:flex",
    "fixed":"position:fixed",
    "grid":"display:grid",
    "hidden":"visibility:hidden",
    "inline":"display:inline",
    "inline-block":"display:inline-block",
    "none":"display:none",
    "pointer":"cursor:pointer",
    "relative":"position:relative",
    "row":"flex-direction:row",
    "static":"position:static"
}\``}</span>)</pre>
</CodePage>