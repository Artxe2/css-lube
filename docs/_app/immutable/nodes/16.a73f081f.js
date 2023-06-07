import{S as ot,i as rt,s as nt,y as j,z as G,A as J,g as K,d as M,B as X,R as lt,e as at,T as ut,b as n,D as ft,h as o,a as c,k as u,q as U,Q as it,c as m,l as f,m as p,r as V,n as d,H as b}from"../chunks/index.e72184b5.js";import{b as Q}from"../chunks/paths.5cf49692.js";import{H as ct}from"../chunks/H5.546393c9.js";import{C as mt}from"../chunks/CodePage.abe9804b.js";import{c as S,h as B,n as H,s as g}from"../chunks/highlighter.d5787206.js";import{s as W}from"../chunks/index.e4ba7d5f.js";function $t(i){let e,a;return{c(){e=new lt(!1),a=at(),this.h()},l(s){e=ut(s,!1),a=at(),this.h()},h(){e.a=a},m(s,l){e.m(i[0],s,l),n(s,a,l)},p:ft,d(s){s&&o(a),s&&e.d()}}}function ht(i){let e,a;return e=new mt({props:{$$slots:{default:[$t]},$$scope:{ctx:i}}}),{c(){j(e.$$.fragment)},l(s){G(e.$$.fragment,s)},m(s,l){J(e,s,l),a=!0},p(s,[l]){const _={};l&2&&(_.$$scope={dirty:l,ctx:s}),e.$set(_)},i(s){a||(K(e.$$.fragment,s),a=!0)},o(s){M(e.$$.fragment,s),a=!1},d(s){X(e,s)}}}function pt(i){return[`${S("<!-- For convenience, you can enter (=) instead of (:) -->")}
${B("span",` ${H("class")}=${g("background=red")}`,`
{ background: red }
`)}

${S("<!-- You can abbreviate and use properties with shorthands -->")}
${B("span",` ${H("class")}=${g("bgc=blue")}`,`
{ background-color: blue }
`)}

${S("<!-- You can abbreviate and use value too with shorthands -->")}
${B("span",` ${H("class")}=${g("bold")}`,`
{ font-weight: bold }
`)}

${S("<!-- The default unit is applied to styles such as width and height -->")}
${B("span",` ${H("class")}=${g("bg=blue fs=2")}`,`
{ background: blue }
{ font-size: 2em }
`)}

${S("<!-- When you use minus(-) or plus(+) in the calc function, spaces are automatically added -->")}
${B("span",` ${H("class")}=${g("fs=calc(30px-5px)")}`,`
{ font-size: calc(30px - 5px) }
`)}

${S("<!-- Values starting with two hyphens automatically wrap the var function -->")}
${B("span",` ${H("class")}=${g("bg=--primary")}`,`
{ background: var(--primary) }
`)}`]}class dt extends ot{constructor(e){super(),rt(this,e,pt,ht,nt,{})}}function bt(i){let e;return{c(){e=U("Shorthand")},l(a){e=V(a,"Shorthand")},m(a,s){n(a,e,s)},d(a){a&&o(e)}}}function _t(i){let e,a,s,l,_,$,k,q,I,A,C,h,x,P,Y,z,D,v,w,F,N,E,O,y,R;return a=new ct({props:{$$slots:{default:[bt]},$$scope:{ctx:i}}}),y=new dt({}),{c(){e=c(),j(a.$$.fragment),s=c(),l=u("div"),_=c(),$=u("a"),k=u("button"),q=U("shorthand keys"),I=c(),A=u("br"),C=c(),h=u("a"),x=u("button"),P=U("shorthand values"),Y=c(),z=u("br"),D=c(),v=u("a"),w=u("button"),F=U("shorthand medias"),N=c(),E=u("div"),O=c(),j(y.$$.fragment),this.h()},l(t){it("svelte-9mro64",document.head).forEach(o),e=m(t),G(a.$$.fragment,t),s=m(t),l=f(t,"DIV",{class:!0}),p(l).forEach(o),_=m(t),$=f(t,"A",{href:!0});var T=p($);k=f(T,"BUTTON",{class:!0});var Z=p(k);q=V(Z,"shorthand keys"),Z.forEach(o),I=m(T),T.forEach(o),A=f(t,"BR",{}),C=m(t),h=f(t,"A",{href:!0});var L=p(h);x=f(L,"BUTTON",{class:!0});var tt=p(x);P=V(tt,"shorthand values"),tt.forEach(o),Y=m(L),L.forEach(o),z=f(t,"BR",{}),D=m(t),v=f(t,"A",{href:!0});var et=p(v);w=f(et,"BUTTON",{class:!0});var st=p(w);F=V(st,"shorthand medias"),st.forEach(o),et.forEach(o),N=m(t),E=f(t,"DIV",{class:!0}),p(E).forEach(o),O=m(t),G(y.$$.fragment,t),this.h()},h(){document.title="Shorthand | CSS Lubricant",d(l,"class","h=1"),d(k,"class",W.button.link),d($,"href",Q+"/docs/shorthand-keys"),d(x,"class",W.button.link),d(h,"href",Q+"/docs/shorthand-values"),d(w,"class",W.button.link),d(v,"href",Q+"/docs/shorthand-medias"),d(E,"class","h=1")},m(t,r){n(t,e,r),J(a,t,r),n(t,s,r),n(t,l,r),n(t,_,r),n(t,$,r),b($,k),b(k,q),b($,I),n(t,A,r),n(t,C,r),n(t,h,r),b(h,x),b(x,P),b(h,Y),n(t,z,r),n(t,D,r),n(t,v,r),b(v,w),b(w,F),n(t,N,r),n(t,E,r),n(t,O,r),J(y,t,r),R=!0},p(t,[r]){const T={};r&1&&(T.$$scope={dirty:r,ctx:t}),a.$set(T)},i(t){R||(K(a.$$.fragment,t),K(y.$$.fragment,t),R=!0)},o(t){M(a.$$.fragment,t),M(y.$$.fragment,t),R=!1},d(t){t&&o(e),X(a,t),t&&o(s),t&&o(l),t&&o(_),t&&o($),t&&o(A),t&&o(C),t&&o(h),t&&o(z),t&&o(D),t&&o(v),t&&o(N),t&&o(E),t&&o(O),X(y,t)}}}class Tt extends ot{constructor(e){super(),rt(this,e,null,_t,nt,{})}}export{Tt as component};
