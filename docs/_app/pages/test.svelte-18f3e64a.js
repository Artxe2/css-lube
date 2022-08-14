import{S as D,i as T,s as I,e as d,k as $,c as o,a as u,d as l,m as k,b as m,g as y,J as b,K as f,v as V,U as A,w as v,x as h,y as g,q as x,o as _,B as w}from"../chunks/vendor-db5e62c2.js";import{A as H,R as M}from"../chunks/RootDiv-4c51d663.js";import"../chunks/paths-4b3c6e7e.js";function S(c){let a,r,t,e;return{c(){a=d("div"),r=d("div"),t=$(),e=d("textarea"),this.h()},l(s){a=o(s,"DIV",{class:!0});var i=u(a);r=o(i,"DIV",{class:!0}),u(r).forEach(l),t=k(i),e=o(i,"TEXTAREA",{class:!0}),u(e).forEach(l),i.forEach(l),this.h()},h(){m(r,"class","p=1 oy=auto ::-webkit-scrollbar/w=0.5 ::-webkit-scrollbar-track/bgc=#3b599850 ::-webkit-scrollbar-thumb/bgc=--primary;br=0.25"),m(e,"class","p=1 bgc=inherit resize=none ::-webkit-scrollbar/w=0.5 ::-webkit-scrollbar-track/bgc=#3b599850 ::-webkit-scrollbar-thumb/bgc=--primary;br=0.25"),e.value=`<!-- TODO: monaco editor -->
<div>
    <!-- How to use -->
    <div class="bgc=red c=white">Hello</div>
</div>

<div>
    <!-- Basic -->
    <span class="background-color:red">raw</span>
    <span class="border:1px_solid">use space</span>
    <span class="color:red;font-size:8px!important">multi style</span>
</div>

<div>
    <!-- Selector & Pseudo Class -->
    <div class="_span.target/bgc=red">
        <span>child</span>
        <span class="target">target</span>
        <span>child</span>
    </div>
    <span class=":active/bgc=blue;c=red">pseudo class</span>
</div>

<div>
    <!-- Abbreviation -->
    <div class="background=red">"=" for ":"</div>
    <span class="bgc=red">key abbreviation</span>
    <span class="pointer">value abbreviation</span>
    <div class="bg=blue w=10">skip "em"</div>
    <span class="fs=calc(10px/2)">skip calc space</span>
    <div class="bg=--primary">var func</div>
</div>

<div>
    <!-- Priority -->
    <span class="c=yellow!!! c=orange!! c=red!">im yellow</span>
    <div class=">span/c=red">
        <span>im red</span>
        <span class="c=blue">im red</span>
        <span class="c=blue!">im blue</span>
    </div>
</div>

<div>
    <!-- Media Query -->
    <span class="@max-width=767px@fs=12px">default</span>
    <span class="@max-width=767px@:active/fs=1.25">with selector</span>
    <span class="@!screen&min-width=640px&max-width=767px@fs=10px">not, and</span>
    <span class="@width=640~767px@fs=10px">range</span>
    <span class="@md@fs=12px">abbreviation</span>
    <span class="c=red fs=16px @md@fs=12px">if width >= 768: im 12px</span>
    <span class="c=red fs=16px! @md@fs=12px">im 16px</span>
</div>

<div>
    <!-- Dark mode -->
    <span class="c=red @dark@c=blue">light: red, dark: blue</span>
</div>
`,m(a,"class","flex h=100% >*/width=50%;bd=1px_solid_black @dark@>*/bd=1px_solid_white")},m(s,i){y(s,a,i),b(a,r),c[2](r),b(a,t),b(a,e),c[3](e)},p:f,i:f,o:f,d(s){s&&l(a),c[2](null),c[3](null)}}}function q(c,a,r){let t,e;V(()=>{r(1,e.innerHTML=t.value,e),t.addEventListener("input",n=>{r(1,e.innerHTML=t.value,e)}),document.querySelectorAll("div[class]").forEach(n=>{n.setAttribute("title",n.getAttribute("class"))})});function s(n){A[n?"unshift":"push"](()=>{e=n,r(1,e)})}function i(n){A[n?"unshift":"push"](()=>{t=n,r(0,t)})}return[t,e,s,i]}class B extends D{constructor(a){super();T(this,a,q,S,I,{})}}function L(c){let a,r,t,e,s,i;return s=new B({}),{c(){a=d("div"),r=d("div"),t=$(),e=d("div"),v(s.$$.fragment),this.h()},l(n){a=o(n,"DIV",{class:!0});var p=u(a);r=o(p,"DIV",{class:!0}),u(r).forEach(l),t=k(p),e=o(p,"DIV",{class:!0});var E=u(e);h(s.$$.fragment,E),E.forEach(l),p.forEach(l),this.h()},h(){m(r,"class","h=4.5"),m(e,"class","h=calc(100%-4.5em)"),m(a,"class","h=100% bgc=--primary50 @dark@bgc=--primary-d")},m(n,p){y(n,a,p),b(a,r),b(a,t),b(a,e),g(s,e,null),i=!0},p:f,i(n){i||(x(s.$$.fragment,n),i=!0)},o(n){_(s.$$.fragment,n),i=!1},d(n){n&&l(a),w(s)}}}function R(c){let a,r,t,e;return a=new H({}),t=new M({props:{$$slots:{default:[L]},$$scope:{ctx:c}}}),{c(){v(a.$$.fragment),r=$(),v(t.$$.fragment)},l(s){h(a.$$.fragment,s),r=k(s),h(t.$$.fragment,s)},m(s,i){g(a,s,i),y(s,r,i),g(t,s,i),e=!0},p(s,[i]){const n={};i&1&&(n.$$scope={dirty:i,ctx:s}),t.$set(n)},i(s){e||(x(a.$$.fragment,s),x(t.$$.fragment,s),e=!0)},o(s){_(a.$$.fragment,s),_(t.$$.fragment,s),e=!1},d(s){w(a,s),s&&l(r),w(t,s)}}}class P extends D{constructor(a){super();T(this,a,null,R,I,{})}}export{P as default};
