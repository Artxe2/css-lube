<script lang="ts">
import H2 from "src/components/atoms/texts/H2.svelte";
</script>

<div>
    <H2>How to use</H2>
    <span>사용하고 있는 JS 라이브러리와 상관없이 HTML 파일에 instant-css를 스크립트 태그로 추가하세요.</span><br />
    <span>instant-css가 자동으로 적용됩니다.</span><br />
    <br />
    <div class="bg=#bbb inlineBlock textAlign=left fw=bold p=0.5">
        &lt;body&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;...<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;script src=<span class="c=#f40">"./instant-css.js"</span>&gt;&lt;/script&gt;<br />
        &lt;/body&gt;
    </div>
</div>