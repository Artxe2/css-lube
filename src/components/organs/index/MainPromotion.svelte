<script lang="ts">
import { base } from "$app/paths"
import H1 from "src/components/cells/texts/H1.svelte";
</script>
<div>
    <H1>Implement your web designs rapidly on the spot!</H1>
    <!-- 즉석에서 빠르게 당신의 웹 디자인을 구현하세요! -->
    <H1>It takes only 3 minutes to learn this.</H1>
    <!-- 이것을 배우는데는 3분밖에 걸리지 않습니다. -->
    <div class="h=3"></div>
    <a href="{base}/instant-css.min.js" target="_blank">
        <button class="h=3.25 bgc=--primary @dark@bgc=--primary-d br=0.25 pl=0.75 pr=0.75 bd=2px_solid_--primary :hover/bgc=--primary-l">
            <span class="fs=1.25 bold va=bottom">Download</span><span class="fs=0.75 va=top"><br />v0.5.0</span>
        </button>
    </a>
</div>