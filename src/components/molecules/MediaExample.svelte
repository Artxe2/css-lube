<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import MorphingText from "src/components/atoms/animations/MorphingText.svelte";
</script>
<div>
    <H3>Media</H3>
    <span>미디어 쿼리를 적용하기 위해서는 "@" 두 개 사이에 조건문을 작성하면 됩니다.</span>
    <MorphingText
        array={[
            `<span class="c=violet">@maxWidth=800px@</span><span class="c=blue">:active/</span><span class="c=red">bg=red</span>`,
            `<span class="c=violet">@media (max-width:800px){&nbsp;&nbsp;</span>.\\@maxWidth\\=800px\\@bg\\=red<span class="c=blue">:active</span>{<span class="c=red">background-color:red</span>}&nbsp;&nbsp;<span class="c=violet">}</span>`
        ]}
    />
    <div class="h=7"></div>
    <span>not 또는 and 조건을 추가하고 싶다면 not 대신 "!", and 대신 "&"를 사용해야하며 ","는 지원하지 않습니다.</span>
    <MorphingText
        array={[
            `<span class="c=violet">@!screen&minWidth=400px&maxWidth=800px@</span><span class="c=red">bg=red</span>`,
            `<span class="c=violet">@media not screen and (min-width:400px) and (max-width:800px){&nbsp;&nbsp;</span>.\\@\\!screen\\&minWidth\\=400px\\&maxWidth\\=800px\\@bg\\=red{<span class="c=red">background-color:red</span>}&nbsp;&nbsp;<span class="c=violet">}</span>`
        ]}
    />
    <div class="h=11.5"></div>
    <span>범위조건을 사용할 경우에는 "~"를 이용한 약어를 지원합니다.</span>
    <MorphingText
        array={[
            `<span class="c=violet">@width=20~40em@</span><span class="c=red">bg=red</span>`,
            `<span class="c=violet">@media (min-width:20em) and (max-width:40em){&nbsp;&nbsp;</span>.\\@\width\\=20\\~40em\\@bg\\=red{<span class="c=red">background-color:red</span>}&nbsp;&nbsp;<span class="c=violet">}</span>`
        ]}
    />
    <div class="h=9.5"></div>
    <span>미디어 쿼리는 스타일시트에서 나중에 추가되기 때문에 "!" 를 붙이지 않아도 우선순위가 더 높습니다.</span><br />
    <br />
    <div class="bg=#bbb inlineBlock textAlign=left fw=bold p=0.5">
        &lt;style&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;...<br />
        &nbsp;&nbsp;&nbsp;&nbsp;.bg\=red{"{background-color:red}"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;@media {"(max-width: 800px) {"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.\@maxWidth\=800\@bg\=blue{"{background-color:blue}"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.\@maxWidth\=800\@c\=white{"{color:white}"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"}"}<br />
        &lt;/style&gt;
    </div>
</div>