import{S as u,i as h,s as p,e as l,k as w,c as s,a as n,d as t,m as _,b as o,g as x,J as v,K as b,v as k}from"../chunks/vendor-f0095a1c.js";function f(g){let e,i,d,r;return{c(){e=l("div"),i=l("textarea"),d=w(),r=l("div"),this.h()},l(c){e=s(c,"DIV",{id:!0,class:!0});var a=n(e);i=s(a,"TEXTAREA",{id:!0,class:!0}),n(i).forEach(t),d=_(a),r=s(a,"DIV",{id:!0,class:!0}),n(r).forEach(t),a.forEach(t),this.h()},h(){o(i,"id","editor"),o(i,"class","bg=#00000000;width=50%;border=1px_solid_black"),i.value=`<div id="view">
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="bg=violet!!!!!! bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=navy!!!!! bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=blue!!!! bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=green!!! bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=yellow!! bg=orange! bg=red c=white">div</div>
        <div class="bg=orange! bg=red c=white">div</div>
        <div class="bg=red c=white">div</div>
    </div>
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="background-color=red">div</div>
        <div class="background-color=#ff0000;color=white;width=calc(20px_+_1rem)">div</div>
        <div class="background-color=red :after/display=block;content='';width=calc(50px_/_2);height=10px;background-color=blue">after</div>
        <div class="background-color=red :after/display=block;content='';width=25px;height=10px;background-color=blue :active/background-color=blue;color=white :active:after/background-color=green pointer">active</div>
    </div>
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="background-color=red @min-width=400px@background-color=blue!">div</div>
        <div class="background-color=red @!screen&width=400~600@background-color=green!">div</div>
        <div class="background-color=red @min-width=400px@:active/pointer;background-color=blue @!screen&width=400~600@:active/background-color=green;pointer">active</div>
    </div>
</div>`,o(r,"id","view"),o(r,"class","width=50%;border=1px_solid_black"),o(e,"id","root"),o(e,"class","bg=#dddddd;width=100%;height=100%;display:flex")},m(c,a){x(c,e,a),v(e,i),v(e,d),v(e,r)},p:b,i:b,o:b,d(c){c&&t(e)}}}function m(g){return k(()=>{const e=document.querySelector("#editor"),i=document.querySelector("#view");i.innerHTML=e.value,e.addEventListener("input",d=>{i.innerHTML=e.value}),document.querySelectorAll("div[class]").forEach(d=>{d.setAttribute("title",d.getAttribute("class"))})}),[]}class E extends u{constructor(e){super();h(this,e,m,f,p,{})}}export{E as default};
