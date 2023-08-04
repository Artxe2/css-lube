import{s as W,J as O,e as J,K as Q,i as r,u as U,d as l,a as f,f as d,I as X,c as p,g as b,h as K,F as E,j as w,l as Z,m as tt}from"../chunks/scheduler.37114a5d.js";import{S as G,i as N,b as I,d as V,m as q,a as B,t as D,e as F}from"../chunks/index.80e0ab0e.js";import{b as z}from"../chunks/paths.fe00bbae.js";import{H as et}from"../chunks/H5.c701e45b.js";import{C as st}from"../chunks/CodePage.aad8268b.js";import{c as v,h as g,n as x,s as y}from"../chunks/highlighter.e3fc48dc.js";import{s as A}from"../chunks/index.2c1c1e71.js";function at(i){let e,s;return{c(){e=new O(!1),s=J(),this.h()},l(a){e=Q(a,!1),s=J(),this.h()},h(){e.a=s},m(a,o){e.m(i[0],a,o),r(a,s,o)},p:U,d(a){a&&(l(s),e.d())}}}function nt(i){let e,s;return e=new st({props:{$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){I(e.$$.fragment)},l(a){V(e.$$.fragment,a)},m(a,o){q(e,a,o),s=!0},p(a,[o]){const $={};o&2&&($.$$scope={dirty:o,ctx:a}),e.$set($)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){D(e.$$.fragment,a),s=!1},d(a){F(e,a)}}}function lt(i){return[`${v("<!-- For convenience, you can enter (=) instead of (:) -->")}
${g("span",` ${x("class")}=${y("background=red")}`,`
{ background: red }
`)}

${v("<!-- You can abbreviate and use properties with shorthands -->")}
${g("span",` ${x("class")}=${y("bgc=blue")}`,`
{ background-color: blue }
`)}

${v("<!-- You can abbreviate and use value too with shorthands -->")}
${g("span",` ${x("class")}=${y("bold")}`,`
{ font-weight: bold }
`)}

${v("<!-- The default unit is applied to styles such as width and height -->")}
${g("span",` ${x("class")}=${y("bg=blue fs=2")}`,`
{ background: blue }
{ font-size: 2em }
`)}

${v("<!-- When you use minus(-) or plus(+) in the calc function, spaces are automatically added -->")}
${g("span",` ${x("class")}=${y("fs=calc(30px-5px)")}`,`
{ font-size: calc(30px - 5px) }
`)}

${v("<!-- Values starting with two hyphens automatically wrap the var function -->")}
${g("span",` ${x("class")}=${y("bg=--primary")}`,`
{ background: var(--primary) }
`)}`]}class rt extends G{constructor(e){super(),N(this,e,lt,nt,W,{})}}function ot(i){let e;return{c(){e=Z("Shorthand")},l(s){e=tt(s,"Shorthand")},m(s,a){r(s,e,a)},d(s){s&&l(e)}}}function it(i){let e,s,a,o,$,c,P=`<button class="${A.button.link}">shorthand keys</button> `,k,H,u,R=`<button class="${A.button.link}">shorthand values</button> `,S,T,m,Y=`<button class="${A.button.link}">shorthand medias</button>`,C,_,L,h,M;return s=new et({props:{$$slots:{default:[ot]},$$scope:{ctx:i}}}),h=new rt({}),{c(){e=f(),I(s.$$.fragment),a=f(),o=d("div"),$=f(),c=d("a"),c.innerHTML=P,k=d("br"),H=f(),u=d("a"),u.innerHTML=R,S=d("br"),T=f(),m=d("a"),m.innerHTML=Y,C=f(),_=d("div"),L=f(),I(h.$$.fragment),this.h()},l(t){X("svelte-1gq0v36",document.head).forEach(l),e=p(t),V(s.$$.fragment,t),a=p(t),o=b(t,"DIV",{class:!0}),K(o).forEach(l),$=p(t),c=b(t,"A",{href:!0,"data-svelte-h":!0}),E(c)!=="svelte-7blg5i"&&(c.innerHTML=P),k=b(t,"BR",{}),H=p(t),u=b(t,"A",{href:!0,"data-svelte-h":!0}),E(u)!=="svelte-eo8x22"&&(u.innerHTML=R),S=b(t,"BR",{}),T=p(t),m=b(t,"A",{href:!0,"data-svelte-h":!0}),E(m)!=="svelte-ivnz6s"&&(m.innerHTML=Y),C=p(t),_=b(t,"DIV",{class:!0}),K(_).forEach(l),L=p(t),V(h.$$.fragment,t),this.h()},h(){document.title="Shorthand | CSS Lube",w(o,"class","h=1"),w(c,"href",z+"/docs/shorthand-keys"),w(u,"href",z+"/docs/shorthand-values"),w(m,"href",z+"/docs/shorthand-medias"),w(_,"class","h=1")},m(t,n){r(t,e,n),q(s,t,n),r(t,a,n),r(t,o,n),r(t,$,n),r(t,c,n),r(t,k,n),r(t,H,n),r(t,u,n),r(t,S,n),r(t,T,n),r(t,m,n),r(t,C,n),r(t,_,n),r(t,L,n),q(h,t,n),M=!0},p(t,[n]){const j={};n&1&&(j.$$scope={dirty:n,ctx:t}),s.$set(j)},i(t){M||(B(s.$$.fragment,t),B(h.$$.fragment,t),M=!0)},o(t){D(s.$$.fragment,t),D(h.$$.fragment,t),M=!1},d(t){t&&(l(e),l(a),l(o),l($),l(c),l(k),l(H),l(u),l(S),l(T),l(m),l(C),l(_),l(L)),F(s,t),F(h,t)}}}class pt extends G{constructor(e){super(),N(this,e,null,it,W,{})}}export{pt as component};
