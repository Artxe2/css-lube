import{s as G,M as O,e as N,N as Q,i as r,u as U,d as l,a as h,f as d,L as X,c as p,g as b,h as W,y as E,j as w,l as Z,m as tt}from"../chunks/scheduler.526307f2.js";import{S as J,i as K,b as q,d as z,m as B,a as D,t as I,e as P}from"../chunks/index.cddfbdc7.js";import{b as A}from"../chunks/paths.230ebb6a.js";import{H as et}from"../chunks/H5.f9dda08d.js";import{C as st}from"../chunks/CodePage.93f49b6b.js";import{a as v,h as g,n as x,s as y}from"../chunks/highlighter.365a0e63.js";import{s as V}from"../chunks/styles.eedd47e4.js";function at(i){let e,s;return{c(){e=new O(!1),s=N(),this.h()},l(a){e=Q(a,!1),s=N(),this.h()},h(){e.a=s},m(a,o){e.m(i[0],a,o),r(a,s,o)},p:U,d(a){a&&(l(s),e.d())}}}function nt(i){let e,s;return e=new st({props:{$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){q(e.$$.fragment)},l(a){z(e.$$.fragment,a)},m(a,o){B(e,a,o),s=!0},p(a,[o]){const $={};o&2&&($.$$scope={dirty:o,ctx:a}),e.$set($)},i(a){s||(D(e.$$.fragment,a),s=!0)},o(a){I(e.$$.fragment,a),s=!1},d(a){P(e,a)}}}function lt(i){return[`${v("<!-- For convenience, you can enter (=) instead of (:) -->")}
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
`)}`]}class rt extends J{constructor(e){super(),K(this,e,lt,nt,G,{})}}function ot(i){let e;return{c(){e=Z("Shorthand")},l(s){e=tt(s,"Shorthand")},m(s,a){r(s,e,a)},d(s){s&&l(e)}}}function it(i){let e,s,a,o,$,c,R=`<button class="${V.button.link}">shorthand keys</button> `,k,H,u,Y=`<button class="${V.button.link}">shorthand values</button> `,L,S,m,j=`<button class="${V.button.link}">shorthand medias</button>`,T,_,C,f,M;return s=new et({props:{$$slots:{default:[ot]},$$scope:{ctx:i}}}),f=new rt({}),{c(){e=h(),q(s.$$.fragment),a=h(),o=d("div"),$=h(),c=d("a"),c.innerHTML=R,k=d("br"),H=h(),u=d("a"),u.innerHTML=Y,L=d("br"),S=h(),m=d("a"),m.innerHTML=j,T=h(),_=d("div"),C=h(),q(f.$$.fragment),this.h()},l(t){X("svelte-1gq0v36",document.head).forEach(l),e=p(t),z(s.$$.fragment,t),a=p(t),o=b(t,"DIV",{class:!0}),W(o).forEach(l),$=p(t),c=b(t,"A",{href:!0,"data-svelte-h":!0}),E(c)!=="svelte-108afr4"&&(c.innerHTML=R),k=b(t,"BR",{}),H=p(t),u=b(t,"A",{href:!0,"data-svelte-h":!0}),E(u)!=="svelte-18xdyxw"&&(u.innerHTML=Y),L=b(t,"BR",{}),S=p(t),m=b(t,"A",{href:!0,"data-svelte-h":!0}),E(m)!=="svelte-v4ngci"&&(m.innerHTML=j),T=p(t),_=b(t,"DIV",{class:!0}),W(_).forEach(l),C=p(t),z(f.$$.fragment,t),this.h()},h(){document.title="Shorthand | CSS Lube",w(o,"class","h=1"),w(c,"href",A+"/docs/custom/shorthand-keys"),w(u,"href",A+"/docs/custom/shorthand-values"),w(m,"href",A+"/docs/custom/shorthand-medias"),w(_,"class","h=1")},m(t,n){r(t,e,n),B(s,t,n),r(t,a,n),r(t,o,n),r(t,$,n),r(t,c,n),r(t,k,n),r(t,H,n),r(t,u,n),r(t,L,n),r(t,S,n),r(t,m,n),r(t,T,n),r(t,_,n),r(t,C,n),B(f,t,n),M=!0},p(t,[n]){const F={};n&1&&(F.$$scope={dirty:n,ctx:t}),s.$set(F)},i(t){M||(D(s.$$.fragment,t),D(f.$$.fragment,t),M=!0)},o(t){I(s.$$.fragment,t),I(f.$$.fragment,t),M=!1},d(t){t&&(l(e),l(a),l(o),l($),l(c),l(k),l(H),l(u),l(L),l(S),l(m),l(T),l(_),l(C)),P(s,t),P(f,t)}}}class pt extends J{constructor(e){super(),K(this,e,null,it,G,{})}}export{pt as component};
