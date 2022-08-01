import{S as p,i as b,s as _,e as l,k as f,c as s,a as n,d as c,m as x,b as d,g,J as u,K as v,v as k}from"../chunks/vendor-f0095a1c.js";function m(h){let e,t,i,a;return{c(){e=l("div"),t=l("textarea"),i=f(),a=l("div"),this.h()},l(o){e=s(o,"DIV",{id:!0,class:!0});var r=n(e);t=s(r,"TEXTAREA",{id:!0,class:!0}),n(t).forEach(c),i=x(r),a=s(r,"DIV",{id:!0,class:!0}),n(a).forEach(c),r.forEach(c),this.h()},h(){d(t,"id","editor"),d(t,"class","width=50%;border=1px_solid_black"),t.value=`<div id="view">
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="background-color=red">div</div>
        <div class="background-color=#ff0000;color=white;width=calc(20px_+_1rem)">div</div>
        <div class="background-color=red :after/display=block;content='';width=calc(50px_/_2);height=10px;background-color=blue">after</div>
        <div class="background-color=red :after/display=block;content='';width=25px;height=10px;background-color=blue :active/background-color=blue;color=white :active:after/background-color=green">active</div>
    </div>
    <div class="display=flex;border=1px_solid_black _div/margin=10px">
        <div class="background-color=red @max-width=500px@background-color=blue">div</div>
    </div>
</div>`,d(a,"id","view"),d(a,"class","width=50%;border=1px_solid_black"),d(e,"id","root"),d(e,"class","width=100%;height=100%;display:flex")},m(o,r){g(o,e,r),u(e,t),u(e,i),u(e,a)},p:v,i:v,o:v,d(o){o&&c(e)}}}function w(h){return k(()=>{const e=document.querySelector("#editor"),t=document.querySelector("#view");t.innerHTML=e.value,e.addEventListener("input",i=>{t.innerHTML=e.value}),document.querySelectorAll("div[class]").forEach(i=>{i.setAttribute("title",i.getAttribute("class"))})}),[]}class E extends p{constructor(e){super();b(this,e,w,m,_,{})}}export{E as default};
