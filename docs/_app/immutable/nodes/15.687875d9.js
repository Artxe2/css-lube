import{S as ot,i as nt,s as rt,y as j,z as G,A as J,g as K,d as M,B as X,R as lt,e as at,T as ut,b as r,D as ft,h as o,a as c,k as u,q as R,Q as it,c as m,l as f,m as p,r as U,n as d,H as b}from"../chunks/index.e72184b5.js";import{b as Q}from"../chunks/paths.07b31093.js";import{H as ct}from"../chunks/H5.546393c9.js";import{C as mt}from"../chunks/CodePage.abe9804b.js";import{c as S,h as B,n as g,s as H}from"../chunks/highlighter.e3fc48dc.js";import{s as W}from"../chunks/index.51f989cf.js";function $t(i){let e,a;return{c(){e=new lt(!1),a=at(),this.h()},l(s){e=ut(s,!1),a=at(),this.h()},h(){e.a=a},m(s,l){e.m(i[0],s,l),r(s,a,l)},p:ft,d(s){s&&o(a),s&&e.d()}}}function ht(i){let e,a;return e=new mt({props:{$$slots:{default:[$t]},$$scope:{ctx:i}}}),{c(){j(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,l){J(e,s,l),a=!0},p(s,[l]){const _={};l&2&&(_.$$scope={dirty:l,ctx:s}),e.$set(_)},i(s){a||(K(e.$$.fragment,s),a=!0)},o(s){M(e.$$.fragment,s),a=!1},d(s){X(e,s)}}}function pt(i){return[`${S("<!-- For convenience, you can enter (=) instead of (:) -->")}
${B("span",` ${g("class")}=${H("background=red")}`,`
{ background: red }
`)}

${S("<!-- You can abbreviate and use properties with shorthands -->")}
${B("span",` ${g("class")}=${H("bgc=blue")}`,`
{ background-color: blue }
`)}

${S("<!-- You can abbreviate and use value too with shorthands -->")}
${B("span",` ${g("class")}=${H("bold")}`,`
{ font-weight: bold }
`)}

${S("<!-- The default unit is applied to styles such as width and height -->")}
${B("span",` ${g("class")}=${H("bg=blue fs=2")}`,`
{ background: blue }
{ font-size: 2em }
`)}

${S("<!-- When you use minus(-) or plus(+) in the calc function, spaces are automatically added -->")}
${B("span",` ${g("class")}=${H("fs=calc(30px-5px)")}`,`
{ font-size: calc(30px - 5px) }
`)}

${S("<!-- Values starting with two hyphens automatically wrap the var function -->")}
${B("span",` ${g("class")}=${H("bg=--primary")}`,`
{ background: var(--primary) }
`)}`]}class dt extends ot{constructor(e){super(),nt(this,e,pt,ht,rt,{})}}function bt(i){let e;return{c(){e=R("Shorthand")},l(a){e=U(a,"Shorthand")},m(a,s){r(a,e,s)},d(a){a&&o(e)}}}function _t(i){let e,a,s,l,_,$,k,V,I,A,C,h,x,P,Y,q,z,v,w,F,D,E,N,y,O;return a=new ct({props:{$$slots:{default:[bt]},$$scope:{ctx:i}}}),y=new dt({}),{c(){e=c(),j(a.$$.fragment),s=c(),l=u("div"),_=c(),$=u("a"),k=u("button"),V=R("shorthand keys"),I=c(),A=u("br"),C=c(),h=u("a"),x=u("button"),P=R("shorthand values"),Y=c(),q=u("br"),z=c(),v=u("a"),w=u("button"),F=R("shorthand medias"),D=c(),E=u("div"),N=c(),j(y.$$.fragment),this.h()},l(t){it("svelte-1gq0v36",document.head).forEach(o),e=m(t),G(a.$$.fragment,t),s=m(t),l=f(t,"DIV",{class:!0}),p(l).forEach(o),_=m(t),$=f(t,"A",{href:!0});var T=p($);k=f(T,"BUTTON",{class:!0});var Z=p(k);V=U(Z,"shorthand keys"),Z.forEach(o),I=m(T),T.forEach(o),A=f(t,"BR",{}),C=m(t),h=f(t,"A",{href:!0});var L=p(h);x=f(L,"BUTTON",{class:!0});var tt=p(x);P=U(tt,"shorthand values"),tt.forEach(o),Y=m(L),L.forEach(o),q=f(t,"BR",{}),z=m(t),v=f(t,"A",{href:!0});var et=p(v);w=f(et,"BUTTON",{class:!0});var st=p(w);F=U(st,"shorthand medias"),st.forEach(o),et.forEach(o),D=m(t),E=f(t,"DIV",{class:!0}),p(E).forEach(o),N=m(t),G(y.$$.fragment,t),this.h()},h(){document.title="Shorthand | CSS Lube",d(l,"class","h=1"),d(k,"class",W.button.link),d($,"href",Q+"/docs/shorthand-keys"),d(x,"class",W.button.link),d(h,"href",Q+"/docs/shorthand-values"),d(w,"class",W.button.link),d(v,"href",Q+"/docs/shorthand-medias"),d(E,"class","h=1")},m(t,n){r(t,e,n),J(a,t,n),r(t,s,n),r(t,l,n),r(t,_,n),r(t,$,n),b($,k),b(k,V),b($,I),r(t,A,n),r(t,C,n),r(t,h,n),b(h,x),b(x,P),b(h,Y),r(t,q,n),r(t,z,n),r(t,v,n),b(v,w),b(w,F),r(t,D,n),r(t,E,n),r(t,N,n),J(y,t,n),O=!0},p(t,[n]){const T={};n&1&&(T.$$scope={dirty:n,ctx:t}),a.$set(T)},i(t){O||(K(a.$$.fragment,t),K(y.$$.fragment,t),O=!0)},o(t){M(a.$$.fragment,t),M(y.$$.fragment,t),O=!1},d(t){t&&o(e),X(a,t),t&&o(s),t&&o(l),t&&o(_),t&&o($),t&&o(A),t&&o(C),t&&o(h),t&&o(q),t&&o(z),t&&o(v),t&&o(D),t&&o(E),t&&o(N),X(y,t)}}}class Tt extends ot{constructor(e){super(),nt(this,e,null,_t,rt,{})}}export{Tt as component};
