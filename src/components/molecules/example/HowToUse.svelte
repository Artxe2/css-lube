<script lang="ts">
import H2 from "src/components/atoms/texts/H2.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>

<div class="textAlign=center @maxWidth=800@>span/fs=0.75rem">
    <H2>How to use</H2>
    <span>사용하고 있는 JS 라이브러리와 상관없이 HTML 파일에 instant-css를 스크립트 태그로 추가하세요.</span><br />
    <span>instant-css가 자동으로 적용됩니다.</span><br />
    <div class="bg=#bbb inlineBlock textAlign=left fw=bold">
        &lt;body&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;...<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=<span class="c=#f40">"./instant-css.js"</span>&gt;&lt;/script&gt;<br />
        &lt;/body&gt;
    </div><br />
    <span><a href="./test" class="c=blue fw=bold">기능 테스트 페이지</a>에서 미리 사용해보실 수도 있습니다.</span>
</div>