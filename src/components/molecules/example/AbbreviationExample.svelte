<script lang="ts">
import H3 from "src/components/atoms/texts/H3.svelte";
import MorphingText from "src/components/atoms/animation/MorphingText.svelte";
</script>

<div class="text-align=center">
    <H3>Abbreviation</H3>
    <span>instant-css는 개발 속도 향상을 위해 여러가지 방식의 약어를 지원합니다.</span><br />
    <span>자세한 명세서는 </span><a href="./grammar" class="c=blue fw=bold">추가 문법 페이지</a><span>에서 확인이 가능합니다.</span><br /><br />
    <span>":" 대신 "=" 사용 가능</span>
    <MorphingText
        array={[
            `<span class="c=red">background-color=red</span>`,
            `.background-color\\=red{<span class="c=red">background-color:red</span>}`
        ]}
    />
    <div class="h=15"></div>
    <span>대문자 사용시 "-" + 소문자로 치환</span>
    <MorphingText
        array={[
            `<span class="c=red">fontSize=14px</span>`,
            `.fontSize\\=14px{<span class="c=red">font-size:14px</span>}`
        ]}
    />
    <div class="h=15"></div>
    <span>자주 쓰는 스타일 이름</span>
    <MorphingText
        array={[
            `<span class="c=red">bg=red</span>`,
            `.bg\\=red{<span class="c=red">background-color:red</span>}`
        ]}
    />
    <div class="h=15"></div>
    <span>이름이 필요없는 스타일 값</span>
    <MorphingText
        array={[
            `<span class="c=red">pointer</span>`,
            `.pointer{<span class="c=red">cursor:pointer</span>}`
        ]}
    />
    <div class="h=15"></div>
    <span>일부 스타일 사용시 "px" 생략</span>
    <MorphingText
        array={[
            `<span class="c=red">w=100</span>`,
            `.w\\=100{<span class="c=red">width:100px</span>}`
        ]}
    />
    <div class="h=15"></div>
    <span>calc 함수 사용시 공백 생략</span>
    <MorphingText
        array={[
            `<span class="c=red">fs=calc(10px/2)</span>`,
            `.fs\\=calc\\(10px\\/2\\){<span class="c=red">font-size:calc(10px&nbsp;&nbsp;/&nbsp;&nbsp;2)</span>}`
        ]}
    />
    <div class="h=15"></div>
    <span>"--" 사용시 var 함수 생략</span>
    <MorphingText
        array={[
            `<span class="c=red">c=--primary</span>`,
            `.c\\=\\-\\-primary{<span class="c=red">color:var(--primary)</span>}`
        ]}
    />
</div>