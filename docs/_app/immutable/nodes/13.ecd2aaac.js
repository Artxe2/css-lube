import{s as G,f,g as $,h as A,d as n,j as w,i as o,L as O,e as W,M as Q,u as U,a as p,N as X,c as _,y as E,l as Z,m as tt}from"../chunks/scheduler.f6e53d32.js";import{S as J,i as K,b as D,d as I,m as q,a as z,t as B,e as P}from"../chunks/index.c26f0603.js";import{b as V}from"../chunks/paths.cdd0e3f2.js";import{H as et}from"../chunks/H5.ebc619f0.js";import{C as st}from"../chunks/CodePage.9e282020.js";import{c as v,h as g,n as x,s as y}from"../chunks/highlighter.ff4ee7c2.js";import{s as j}from"../chunks/styles.1c89ec47.js";function at(u){let s,e;return{c(){s=new O(!1),e=W(),this.h()},l(l){s=Q(l,!1),e=W(),this.h()},h(){s.a=e},m(l,a){s.m(u[0],l,a),o(l,e,a)},p:U,d(l){l&&(n(e),s.d())}}}function nt(u){let s,e,l;return e=new st({props:{$$slots:{default:[at]},$$scope:{ctx:u}}}),{c(){s=f("div"),D(e.$$.fragment),this.h()},l(a){s=$(a,"DIV",{class:!0});var i=A(s);I(e.$$.fragment,i),i.forEach(n),this.h()},h(){w(s,"class","@!lg@_pre/fs=.85 @!lg@_pre/fs=.7")},m(a,i){o(a,s,i),q(e,s,null),l=!0},p(a,[i]){const c={};i&2&&(c.$$scope={dirty:i,ctx:a}),e.$set(c)},i(a){l||(z(e.$$.fragment,a),l=!0)},o(a){B(e.$$.fragment,a),l=!1},d(a){a&&n(s),P(e)}}}function rt(u){return[`${v("<!-- For convenience, you can enter (=) instead of (:) -->")}
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
`)}`]}class lt extends J{constructor(s){super(),K(this,s,rt,nt,G,{})}}function ot(u){let s;return{c(){s=Z("Shorthand")},l(e){s=tt(e,"Shorthand")},m(e,l){o(e,s,l)},d(e){e&&n(s)}}}function it(u){let s,e,l,a,i,c,R=`<button class="${j["@common"].link}">shorthand keys</button> `,k,H,m,Y=`<button class="${j["@common"].link}">shorthand values</button> `,L,S,h,F=`<button class="${j["@common"].link}">shorthand medias</button>`,T,b,C,d,M;return e=new et({props:{$$slots:{default:[ot]},$$scope:{ctx:u}}}),d=new lt({}),{c(){s=p(),D(e.$$.fragment),l=p(),a=f("div"),i=p(),c=f("a"),c.innerHTML=R,k=f("br"),H=p(),m=f("a"),m.innerHTML=Y,L=f("br"),S=p(),h=f("a"),h.innerHTML=F,T=p(),b=f("div"),C=p(),D(d.$$.fragment),this.h()},l(t){X("svelte-1gq0v36",document.head).forEach(n),s=_(t),I(e.$$.fragment,t),l=_(t),a=$(t,"DIV",{class:!0}),A(a).forEach(n),i=_(t),c=$(t,"A",{href:!0,"data-svelte-h":!0}),E(c)!=="svelte-rry4ar"&&(c.innerHTML=R),k=$(t,"BR",{}),H=_(t),m=$(t,"A",{href:!0,"data-svelte-h":!0}),E(m)!=="svelte-h318hj"&&(m.innerHTML=Y),L=$(t,"BR",{}),S=_(t),h=$(t,"A",{href:!0,"data-svelte-h":!0}),E(h)!=="svelte-1rx1j3x"&&(h.innerHTML=F),T=_(t),b=$(t,"DIV",{class:!0}),A(b).forEach(n),C=_(t),I(d.$$.fragment,t),this.h()},h(){document.title="Shorthand | CSS Lube",w(a,"class","h=1"),w(c,"href",V+"/ref/custom/shorthand-keys"),w(m,"href",V+"/ref/custom/shorthand-values"),w(h,"href",V+"/ref/custom/shorthand-medias"),w(b,"class","h=1")},m(t,r){o(t,s,r),q(e,t,r),o(t,l,r),o(t,a,r),o(t,i,r),o(t,c,r),o(t,k,r),o(t,H,r),o(t,m,r),o(t,L,r),o(t,S,r),o(t,h,r),o(t,T,r),o(t,b,r),o(t,C,r),q(d,t,r),M=!0},p(t,[r]){const N={};r&1&&(N.$$scope={dirty:r,ctx:t}),e.$set(N)},i(t){M||(z(e.$$.fragment,t),z(d.$$.fragment,t),M=!0)},o(t){B(e.$$.fragment,t),B(d.$$.fragment,t),M=!1},d(t){t&&(n(s),n(l),n(a),n(i),n(c),n(k),n(H),n(m),n(L),n(S),n(h),n(T),n(b),n(C)),P(e,t),P(d,t)}}}class pt extends J{constructor(s){super(),K(this,s,null,it,G,{})}}export{pt as component};
