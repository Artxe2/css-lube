<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import MorphingText from "../atoms/animations/MorphingText.svelte";
</script>
<div>
    <H3>Dark mode</H3>
    <span>기본적으로 다크모드는 미디어쿼리의 "prefers-color-scheme" 옵션을 사용해서 구현합니다.</span>
    <MorphingText
        array={[
            `<span class="c=violet">@dark@</span><span class="c=red">bg=--backgroundD</span>`,
            `<span class="c=violet">@media (prefers-color-scheme:dark){&nbsp;&nbsp;</span>.\\@dark\\@bg\\=--backgroundD{<span class="c=red">background-color:var(--background-d)</span>}&nbsp;&nbsp;<span class="c=violet">}</span>`
        ]}
    />
    <div class="h=9.5"></div>
    <span>!!window.localStorage.getItem{"(\"THEME\")"}가 true이고 그 값이 "DARK"가 아니라면 기기 설정과 상관없이 다크모드가 적용되지 않습니다.</span>
    <MorphingText
        array={[
            `<span class="c=violet">@dark@</span><span class="c=red">bg=--backgroundD</span>`,
            `<span class="c=green">/* @media (prefers-color-scheme:dark)is ignored */</span>`
        ]}
    />
    <div class="h=5"></div>
    <span>!!window.localStorage.getItem{"(\"THEME\")"}가 true이고 그 값이 "DARK"라면 기기 설정과 상관없이 다크모드가 적용됩니다.</span>
    <MorphingText
        array={[
            `<span class="c=violet">@dark@</span><span class="c=red">bg=--backgroundD</span>`,
            `<span class="c=green">/* @media (prefers-color-scheme:dark)is enabled */</span><br />&nbsp;&nbsp;</span>.\\@dark\\@bg\\=--backgroundD{<span class="c=red">background-color:var(--background-d)</span>}`
        ]}
    />
    <div class="h=9.5"></div>
    <div class="bg=#bbb inlineBlock textAlign=left fw=bold p=0.5">
        &lt;script&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;...<br />
        &nbsp;&nbsp;&nbsp;&nbsp;localStorage.setItem{"(\"THEME\", \"LIGHT\")"} // LIGHT MODE<br />
        &nbsp;&nbsp;&nbsp;&nbsp;localStorage.setItem{"(\"THEME\", \"DARK\")"} // DARK MODE<br />
        &nbsp;&nbsp;&nbsp;&nbsp;localStorage.removeItem{"(\"THEME\")"} // SYSTEM MODE<br />
        &lt;/script&gt;
    </div>
</div>