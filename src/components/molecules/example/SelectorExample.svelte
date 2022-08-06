<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>
<div class="@maxWidth=800@_span/fs=0.75rem">
    <H3>Selector & Pseudo Class</H3>
    <span>"/"를 이용하면 선택자로 하위 객체에 스타일을 적용할 수 있습니다.</span>
    <MorphingText
        array={[
            `<span class="c=blue">_div>.child/</span><span class="c=red">bg=red</span>`,
            `._div\\>\\.child\\/bg\\=red<span class="c=blue"> div>.child</span>{<span class="c=red">background-color:red</span>}`
        ]}
    />
    <div class="h=30"></div>
    <span>가상 클래스 역시 같은 방식으로 스타일을 적용할 수 있습니다.</span>
    <MorphingText
        array={[
            `<span class="c=blue">:after:active/</span><span class="c=red">bg=blue</span>`,
            `.\\:after\\:active\\/bg\\=blue<span class="c=blue">:after:active</span>{<span class="c=red">background-color:blue</span>}`
        ]}
    />
</div>