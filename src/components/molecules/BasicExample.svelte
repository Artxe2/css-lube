<script lang="ts">
import H2 from "src/components/atoms/texts/H2.svelte";
import MorphingText from "src/components/atoms/animations/MorphingText.svelte";
</script>

<div>
    <H2>Basic</H2>
    <span>instant-css를 사용하면 클래스명 그대로 스타일에 적용해줍니다.</span>
    <MorphingText
        array={[
            `<span class="c=red">background-color:red</span>`,
            `.background-color\\:red{<span class="c=red">background:color:red</span>}`
        ]}
    />
    <div class="h=5"></div>
    <span>클래스명에는 공백을 사용할 수 없으므로 공백을 입력해야할 경우 "_"로 대신합니다.</span>
    <MorphingText
        array={[
            `<span class="c=red">border:1px_solid_black</span>`,
            `.border\\:border:1px_solid_black{<span class="c=red">border:1px&nbsp;&nbsp;solid&nbsp;&nbsp;black</span>}`
        ]}
    />
    <div class="h=5"></div>
    <span>클래스명이 그대로 스타일에 적용되기 때문에 ";"를 사용하면 클래스명 하나에 여러 스타일을 적용할 수도 있습니다.</span>
    <MorphingText
        array={[
            `<span class="c=red">color:blue;font-size:14px</span>`,
            `.color\\:blue\\;font-size:14px{<span class="c=red">color:red;font-size:14px</span>}`
        ]}
    />
    <div class="h=5"></div>
    <span>기본 문법을 활용하면 기능의 제약 없이 그 어떤 스타일이라도 클래스명에 적용이 가능합니다.</span>
    <MorphingText
        array={[
            `<span class="c=red">color:white!important</span>`,
            `.color\\:white\\!important{<span class="c=red">color:white!important</span>}`
        ]}
    />
    <div class="h=5"></div>
    <MorphingText
        array={[
            `<span class="c=red">background-image:conic-gradient(from_45deg_at_25%_75%,black,white)</span>`,
            `.background-image\\:conic-gradient\\(from_45deg_at_25\\%_75\\%\\,black\\,white\\){<span class="c=red">background-image:conic-gradient(from&nbsp;&nbsp;45deg&nbsp;&nbsp;at&nbsp;&nbsp;25%&nbsp;&nbsp;75%,black,white)</span>}`
        ]}
    />
    <div class="h=13"></div>
</div>