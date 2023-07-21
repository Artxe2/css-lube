import{s as nt,J as lt,e as st,K as ct,i as r,u as ut,d as n,a as h,f as c,l as q,I as it,c as m,g as u,h as d,m as z,j as p,y as b}from"../chunks/scheduler.37114a5d.js";import{S as ot,i as rt,b as L,d as W,m as G,a as M,t as Q,e as X}from"../chunks/index.80e0ab0e.js";import{b as J}from"../chunks/paths.1f47b9a6.js";import{H as ht}from"../chunks/H5.c701e45b.js";import{C as mt}from"../chunks/CodePage.aad8268b.js";import{c as S,h as T,n as B,s as C}from"../chunks/highlighter.e3fc48dc.js";import{s as K}from"../chunks/index.00bbd8d4.js";function ft(i){let e,a;return{c(){e=new lt(!1),a=st(),this.h()},l(s){e=ct(s,!1),a=st(),this.h()},h(){e.a=a},m(s,l){e.m(i[0],s,l),r(s,a,l)},p:ut,d(s){s&&(n(a),e.d())}}}function $t(i){let e,a;return e=new mt({props:{$$slots:{default:[ft]},$$scope:{ctx:i}}}),{c(){L(e.$$.fragment)},l(s){W(e.$$.fragment,s)},m(s,l){G(e,s,l),a=!0},p(s,[l]){const _={};l&2&&(_.$$scope={dirty:l,ctx:s}),e.$set(_)},i(s){a||(M(e.$$.fragment,s),a=!0)},o(s){Q(e.$$.fragment,s),a=!1},d(s){X(e,s)}}}function dt(i){return[`${S("<!-- For convenience, you can enter (=) instead of (:) -->")}
${T("span",` ${B("class")}=${C("background=red")}`,`
{ background: red }
`)}

${S("<!-- You can abbreviate and use properties with shorthands -->")}
${T("span",` ${B("class")}=${C("bgc=blue")}`,`
{ background-color: blue }
`)}

${S("<!-- You can abbreviate and use value too with shorthands -->")}
${T("span",` ${B("class")}=${C("bold")}`,`
{ font-weight: bold }
`)}

${S("<!-- The default unit is applied to styles such as width and height -->")}
${T("span",` ${B("class")}=${C("bg=blue fs=2")}`,`
{ background: blue }
{ font-size: 2em }
`)}

${S("<!-- When you use minus(-) or plus(+) in the calc function, spaces are automatically added -->")}
${T("span",` ${B("class")}=${C("fs=calc(30px-5px)")}`,`
{ font-size: calc(30px - 5px) }
`)}

${S("<!-- Values starting with two hyphens automatically wrap the var function -->")}
${T("span",` ${B("class")}=${C("bg=--primary")}`,`
{ background: var(--primary) }
`)}`]}class pt extends ot{constructor(e){super(),rt(this,e,dt,$t,nt,{})}}function bt(i){let e;return{c(){e=q("Shorthand")},l(a){e=z(a,"Shorthand")},m(a,s){r(a,e,s)},d(a){a&&n(e)}}}function _t(i){let e,a,s,l,_,f,y,D,P,H,A,$,x,R,Y,I,N,v,k,j,O,w,U,g,V;return a=new ht({props:{$$slots:{default:[bt]},$$scope:{ctx:i}}}),g=new pt({}),{c(){e=h(),L(a.$$.fragment),s=h(),l=c("div"),_=h(),f=c("a"),y=c("button"),D=q("shorthand keys"),P=h(),H=c("br"),A=h(),$=c("a"),x=c("button"),R=q("shorthand values"),Y=h(),I=c("br"),N=h(),v=c("a"),k=c("button"),j=q("shorthand medias"),O=h(),w=c("div"),U=h(),L(g.$$.fragment),this.h()},l(t){it("svelte-1gq0v36",document.head).forEach(n),e=m(t),W(a.$$.fragment,t),s=m(t),l=u(t,"DIV",{class:!0}),d(l).forEach(n),_=m(t),f=u(t,"A",{href:!0});var E=d(f);y=u(E,"BUTTON",{class:!0});var Z=d(y);D=z(Z,"shorthand keys"),Z.forEach(n),P=m(E),E.forEach(n),H=u(t,"BR",{}),A=m(t),$=u(t,"A",{href:!0});var F=d($);x=u(F,"BUTTON",{class:!0});var tt=d(x);R=z(tt,"shorthand values"),tt.forEach(n),Y=m(F),F.forEach(n),I=u(t,"BR",{}),N=m(t),v=u(t,"A",{href:!0});var et=d(v);k=u(et,"BUTTON",{class:!0});var at=d(k);j=z(at,"shorthand medias"),at.forEach(n),et.forEach(n),O=m(t),w=u(t,"DIV",{class:!0}),d(w).forEach(n),U=m(t),W(g.$$.fragment,t),this.h()},h(){document.title="Shorthand | CSS Lube",p(l,"class","h=1"),p(y,"class",K.button.link),p(f,"href",J+"/docs/shorthand-keys"),p(x,"class",K.button.link),p($,"href",J+"/docs/shorthand-values"),p(k,"class",K.button.link),p(v,"href",J+"/docs/shorthand-medias"),p(w,"class","h=1")},m(t,o){r(t,e,o),G(a,t,o),r(t,s,o),r(t,l,o),r(t,_,o),r(t,f,o),b(f,y),b(y,D),b(f,P),r(t,H,o),r(t,A,o),r(t,$,o),b($,x),b(x,R),b($,Y),r(t,I,o),r(t,N,o),r(t,v,o),b(v,k),b(k,j),r(t,O,o),r(t,w,o),r(t,U,o),G(g,t,o),V=!0},p(t,[o]){const E={};o&1&&(E.$$scope={dirty:o,ctx:t}),a.$set(E)},i(t){V||(M(a.$$.fragment,t),M(g.$$.fragment,t),V=!0)},o(t){Q(a.$$.fragment,t),Q(g.$$.fragment,t),V=!1},d(t){t&&(n(e),n(s),n(l),n(_),n(f),n(H),n(A),n($),n(I),n(N),n(v),n(O),n(w),n(U)),X(a,t),X(g,t)}}}class St extends ot{constructor(e){super(),rt(this,e,null,_t,nt,{})}}export{St as component};
