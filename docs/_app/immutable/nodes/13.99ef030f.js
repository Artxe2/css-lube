import{s as G,L as O,e as N,M as Q,i as l,u as U,d as r,a as h,f as p,N as X,c as d,g as b,h as W,y as E,j as w,l as Z,m as tt}from"../chunks/scheduler.f6e53d32.js";import{S as J,i as K,b as V,d as q,m as z,a as B,t as D,e as I}from"../chunks/index.c26f0603.js";import{b as j}from"../chunks/paths.21e912a5.js";import{H as et}from"../chunks/H5.ebc619f0.js";import{C as st}from"../chunks/CodePage.9e282020.js";import{c as v,h as g,n as x,s as y}from"../chunks/highlighter.ff4ee7c2.js";import{s as A}from"../chunks/styles.ef402c30.js";function at(i){let e,s;return{c(){e=new O(!1),s=N(),this.h()},l(a){e=Q(a,!1),s=N(),this.h()},h(){e.a=s},m(a,o){e.m(i[0],a,o),l(a,s,o)},p:U,d(a){a&&(r(s),e.d())}}}function nt(i){let e,s;return e=new st({props:{$$slots:{default:[at]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,o){z(e,a,o),s=!0},p(a,[o]){const $={};o&2&&($.$$scope={dirty:o,ctx:a}),e.$set($)},i(a){s||(B(e.$$.fragment,a),s=!0)},o(a){D(e.$$.fragment,a),s=!1},d(a){I(e,a)}}}function rt(i){return[`${v("<!-- For convenience, you can enter (=) instead of (:) -->")}
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
`)}`]}class lt extends J{constructor(e){super(),K(this,e,rt,nt,G,{})}}function ot(i){let e;return{c(){e=Z("Shorthand")},l(s){e=tt(s,"Shorthand")},m(s,a){l(s,e,a)},d(s){s&&r(e)}}}function it(i){let e,s,a,o,$,c,P=`<button class="${A["@common"].link}">shorthand keys</button> `,k,H,u,R=`<button class="${A["@common"].link}">shorthand values</button> `,L,S,m,Y=`<button class="${A["@common"].link}">shorthand medias</button>`,T,_,C,f,M;return s=new et({props:{$$slots:{default:[ot]},$$scope:{ctx:i}}}),f=new lt({}),{c(){e=h(),V(s.$$.fragment),a=h(),o=p("div"),$=h(),c=p("a"),c.innerHTML=P,k=p("br"),H=h(),u=p("a"),u.innerHTML=R,L=p("br"),S=h(),m=p("a"),m.innerHTML=Y,T=h(),_=p("div"),C=h(),V(f.$$.fragment),this.h()},l(t){X("svelte-1gq0v36",document.head).forEach(r),e=d(t),q(s.$$.fragment,t),a=d(t),o=b(t,"DIV",{class:!0}),W(o).forEach(r),$=d(t),c=b(t,"A",{href:!0,"data-svelte-h":!0}),E(c)!=="svelte-rry4ar"&&(c.innerHTML=P),k=b(t,"BR",{}),H=d(t),u=b(t,"A",{href:!0,"data-svelte-h":!0}),E(u)!=="svelte-h318hj"&&(u.innerHTML=R),L=b(t,"BR",{}),S=d(t),m=b(t,"A",{href:!0,"data-svelte-h":!0}),E(m)!=="svelte-1rx1j3x"&&(m.innerHTML=Y),T=d(t),_=b(t,"DIV",{class:!0}),W(_).forEach(r),C=d(t),q(f.$$.fragment,t),this.h()},h(){document.title="Shorthand | CSS Lube",w(o,"class","h=1"),w(c,"href",j+"/ref/custom/shorthand-keys"),w(u,"href",j+"/ref/custom/shorthand-values"),w(m,"href",j+"/ref/custom/shorthand-medias"),w(_,"class","h=1")},m(t,n){l(t,e,n),z(s,t,n),l(t,a,n),l(t,o,n),l(t,$,n),l(t,c,n),l(t,k,n),l(t,H,n),l(t,u,n),l(t,L,n),l(t,S,n),l(t,m,n),l(t,T,n),l(t,_,n),l(t,C,n),z(f,t,n),M=!0},p(t,[n]){const F={};n&1&&(F.$$scope={dirty:n,ctx:t}),s.$set(F)},i(t){M||(B(s.$$.fragment,t),B(f.$$.fragment,t),M=!0)},o(t){D(s.$$.fragment,t),D(f.$$.fragment,t),M=!1},d(t){t&&(r(e),r(a),r(o),r($),r(c),r(k),r(H),r(u),r(L),r(S),r(m),r(T),r(_),r(C)),I(s,t),I(f,t)}}}class dt extends J{constructor(e){super(),K(this,e,null,it,G,{})}}export{dt as component};
