import{S as u,i as p,s as h,e as t,k as w,c as s,a as n,d as l,m as _,b as c,g as x,J as v,K as b,v as k}from"../chunks/vendor-f0095a1c.js";function f(g){let e,d,i,r;return{c(){e=t("div"),d=t("textarea"),i=w(),r=t("div"),this.h()},l(o){e=s(o,"DIV",{id:!0,class:!0});var a=n(e);d=s(a,"TEXTAREA",{id:!0,class:!0}),n(d).forEach(l),i=_(a),r=s(a,"DIV",{id:!0,class:!0}),n(r).forEach(l),a.forEach(l),this.h()},h(){c(d,"id","editor"),c(d,"class","bg=#00000000;w=50%;border=1px_solid_black"),d.value=`<div id="view">
    <div class="display=flex;border=1px_solid_black _div/m=10px">
        <div class="bg=red c=white">div</div>
        <div class="bg=orange! bg=red c=white">div</div>
        <div class="bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=violet!!!!!! bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
    </div>
    <div class="display=flex;border=1px_solid_black _div/m=10px">
        <div class="background-color=red">div</div>
        <div class="background-color=#ff0000;color=white;w=calc(20px_+_1rem)">div</div>
        <div class="background-color=red :after/display=block;content='';w=calc(50px_/_2);h=10px;background-color=blue">after</div>
        <div class="background-color=red :after/display=block;content='';w=25px;h=10px;background-color=blue :active/background-color=blue;color=white :active:after/background-color=green pointer">active</div>
    </div>
    <div class="display=flex;border=1px_solid_black _div/m=10px">
        <div class="background-color=red @min-width=400px@background-color=blue!">div</div>
        <div class="background-color=red @!screen&width=400~600@background-color=green!">div</div>
        <div class="background-color=red @min-width=400px@:active/pointer;background-color=blue @!screen&width=400~600@:active/background-color=green;pointer">active</div>
    </div>
</div>`,c(r,"id","view"),c(r,"class","width=50%;border=1px_solid_black"),c(e,"id","root"),c(e,"class","bg=#dddddd;w=100%;h=100%;display:flex")},m(o,a){x(o,e,a),v(e,d),v(e,i),v(e,r)},p:b,i:b,o:b,d(o){o&&l(e)}}}function m(g){return k(()=>{const e=document.querySelector("#editor"),d=document.querySelector("#view");d.innerHTML=e.value,e.addEventListener("input",i=>{d.innerHTML=e.value}),document.querySelectorAll("div[class]").forEach(i=>{i.setAttribute("title",i.getAttribute("class"))})}),[]}class E extends u{constructor(e){super();p(this,e,m,f,h,{})}}export{E as default};
