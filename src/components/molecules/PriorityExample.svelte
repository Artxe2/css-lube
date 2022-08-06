<script lang="ts">
import PriorityText from "src/components/atoms/animation/PriorityText.svelte";
import H3 from "src/components/atoms/texts/H3.svelte";
</script>

<div class="@maxWidth=800@_span/fs=0.75rem">
    <H3>Priority</H3>
    <span>기본 문법으로 직접 스타일에 important를 선언해줄 수도 있지만</span><br />
    <span>instant-css에서는 클래스명 뒤에 !를 붙이는 것으로 우선순위를 높일 수 있습니다.</span><br />
    <br />
    <div class="bg=#bbb inlineBlock textAlign=left fw=bold p=10">
        &lt;style&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;...<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"[class][class][class]"}.c\=yellow\!\!\!{"{color:yellow}"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"[class][class]"}.c\=orange\!\!{"{color:orange}"}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{"[class]"}.c\=red\!{"{color:red}"}<br />
        &lt;/style&gt;
    </div><br />
    <br />
    <PriorityText />
</div>