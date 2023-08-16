import{s as L,L as F,e as Q,M as G,i as d,u as J,d as o,a as g,f as N,N as U,c as w,g as T,h as A,j as B,l as W,m as X}from"../chunks/scheduler.f6e53d32.js";import{S as P,i as j,b,d as v,m as q,a as y,t as k,e as z}from"../chunks/index.c26f0603.js";import{H as Y}from"../chunks/H5.ebc619f0.js";import{C as K}from"../chunks/CodePage.9e282020.js";import{c as V,h as m,k as u,b as n,n as r,s as c,a as f}from"../chunks/highlighter.ff4ee7c2.js";import{v as O}from"../chunks/version.28fb0bd0.js";function Z(l){let e,s;return{c(){e=new F(!1),s=Q(),this.h()},l(t){e=G(t,!1),s=Q(),this.h()},h(){e.a=s},m(t,$){e.m(l[0],t,$),d(t,s,$)},p:J,d(t){t&&(o(s),e.d())}}}function ee(l){let e,s;return e=new K({props:{$$slots:{default:[Z]},$$scope:{ctx:l}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,$){q(e,t,$),s=!0},p(t,[$]){const p={};$&2&&(p.$$scope={dirty:$,ctx:t}),e.$set(p)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function te(l){return[`${V("<!-- Media queries also provide some shorthands -->")}
${m("style",` ${r("css-lube")}=${c(O)}`,`
	${u("@media")} ${n("(")}${r("min-width")}:${c("768px",!1)}${n("){")}
		${f(".\\@min-width\\=768px\\@c\\=red",["color","red"])}
	${n("}")}
	${u("@media")} ${n("(")}${r("min-width")}:${c("768px",!1)}${n("){")}
		${f(".\\@md\\@c\\=red",["color","red"])}
	${n("}")}
	${u("@media")} ${n("(")}${r("min-width")}:${c("640px",!1)}${n(")")} ${u("and")} ${n("(")}${r("max-width")}:${c("1023px",!1)}${n("){")}
		${f(".\\@sm\\&\\!lg\\@c\\=red",["color","red"])}
	${n("}")}
	${u("@media")} ${n("(")}${r("max-width")}:${c("767px",!1)}${n("){")}
		${f(".\\@\\!md\\@c\\=red",["color","red"])}
	${n("}")}
	${u("@media")} ${n("(")}${r("prefers-color-scheme")}:${c("dark",!1)}${n(")")} ${u("and")} ${n("(")}${r("min-width")}:${c("768px",!1)}${n("){")}
		${f(".\\@dark\\&md\\@c\\=red",["color","red"])}
	${n("}")}
`)}

${m("span",` ${r("class")}=${c("@min-width=768px@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${c("@md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${c("@sm&lg@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${c("@!md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${c("@dark&md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
`]}class se extends P{constructor(e){super(),j(this,e,te,ee,L,{})}}function ae(l){let e,s;return{c(){e=new F(!1),s=Q(),this.h()},l(t){e=G(t,!1),s=Q(),this.h()},h(){e.a=s},m(t,$){e.m(l[0],t,$),d(t,s,$)},p:J,d(t){t&&(o(s),e.d())}}}function $e(l){let e,s;return e=new K({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,$){q(e,t,$),s=!0},p(t,[$]){const p={};$&2&&(p.$$scope={dirty:$,ctx:t}),e.$set(p)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function ne(l){return[`${m("style",` ${r("css-lube")}=${c(O)}`,`
	${f(".c\\=red",["color","red"])}
	${f(".fs\\=16px",["font-size","16px"])}
	${f("[class].fs\\=16px\\!",["font-size","16px"])}
	${V("/* Styles with the same prefix are grouped in the same group */")}
	${u("@media")} ${n("(")}${r("min-width")}:${c("768px",!1)}${n("){")}
		${f(".\\@\\(min-width\\:768px\\)\\@fs\\=12px",["font-size","12px"])}
		${f(".\\@\\(min-width\\:768px\\)\\@c\\=blue",["color","blue"])}
		${f(".\\@\\(min-width\\:768px\\)\\@\\:active\\/fs\\=12px:active",["font-size","1.25em"])}
	${n("}")}
`)}

${V("<!-- Classes that begin with an at (@) apply media queries and use the second at to separate styles from media queries -->")}
${m("span",` ${r("class")}=${c("c=red fs=16px @(min-width:768px)@fs=12px")}`,`
{ color: red }
<span class="td=line-through">{ font-size: 16px }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${m("span",` ${r("class")}=${c("c=red @(min-width:768px)@c=blue fs=16px! @(min-width:768px)@fs=12px")}`,`
<span class="td=line-through">{ color: red }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
{ font-size: 16px }
<span class="td=line-through bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${m("span",` ${r("class")}=${c("@(min-width:768px)@:active/fs=1.25")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">:active { font-size: 1.25em }</span>
`)}
`]}class re extends P{constructor(e){super(),j(this,e,ne,$e,L,{})}}function ce(l){let e,s;return{c(){e=new F(!1),s=Q(),this.h()},l(t){e=G(t,!1),s=Q(),this.h()},h(){e.a=s},m(t,$){e.m(l[0],t,$),d(t,s,$)},p:J,d(t){t&&(o(s),e.d())}}}function le(l){let e,s;return e=new K({props:{$$slots:{default:[ce]},$$scope:{ctx:l}}}),{c(){b(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,$){q(e,t,$),s=!0},p(t,[$]){const p={};$&2&&(p.$$scope={dirty:$,ctx:t}),e.$set(p)},i(t){s||(y(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function ie(l){return[`${m("style",` ${r("css-lube")}=${c(O)}`,`
	${u("@@container")} ${n("(")}${r("min-width")}:${c("768px",!1)}${n("){")}
		${f(".\\@\\@container_\\(min-width\\:768px\\)\\@fs\\=10px",["font-size","10px"])}
	${n("}")}
	${u("@media screen and")} ${n("(")}${r("min-width")}:${c("768px",!1)}${n("){")}
		${f(".\\@screen_and_\\(min-width\\:768px\\)\\@fs\\=10px",["font-size","10px"])}
	${n("}")}
`)}

${V("<!-- If you use two at (@), the query does not have media as a prefix -->")}
${m("span",` ${r("class")}=${c("@@container_(min-width:768px)@fs=10px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
${m("span",` ${r("class")}=${c("@screen_and_(min-width:768px)@fs=10px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
`]}class oe extends P{constructor(e){super(),j(this,e,ie,le,L,{})}}function de(l){let e;return{c(){e=W("Media Query")},l(s){e=X(s,"Media Query")},m(s,t){d(s,e,t)},d(s){s&&o(e)}}}function pe(l){let e,s,t,$,p,h,S,M,C,x,H,E,I,_,D;return s=new Y({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),h=new re({}),x=new oe({}),_=new se({}),{c(){e=g(),b(s.$$.fragment),t=g(),$=N("div"),p=g(),b(h.$$.fragment),S=g(),M=N("div"),C=g(),b(x.$$.fragment),H=g(),E=N("div"),I=g(),b(_.$$.fragment),this.h()},l(a){U("svelte-15r5d0f",document.head).forEach(o),e=w(a),v(s.$$.fragment,a),t=w(a),$=T(a,"DIV",{class:!0}),A($).forEach(o),p=w(a),v(h.$$.fragment,a),S=w(a),M=T(a,"DIV",{class:!0}),A(M).forEach(o),C=w(a),v(x.$$.fragment,a),H=w(a),E=T(a,"DIV",{class:!0}),A(E).forEach(o),I=w(a),v(_.$$.fragment,a),this.h()},h(){document.title="Media Query | CSS Lube",B($,"class","h=1"),B(M,"class","h=2"),B(E,"class","h=2")},m(a,i){d(a,e,i),q(s,a,i),d(a,t,i),d(a,$,i),d(a,p,i),q(h,a,i),d(a,S,i),d(a,M,i),d(a,C,i),q(x,a,i),d(a,H,i),d(a,E,i),d(a,I,i),q(_,a,i),D=!0},p(a,[i]){const R={};i&1&&(R.$$scope={dirty:i,ctx:a}),s.$set(R)},i(a){D||(y(s.$$.fragment,a),y(h.$$.fragment,a),y(x.$$.fragment,a),y(_.$$.fragment,a),D=!0)},o(a){k(s.$$.fragment,a),k(h.$$.fragment,a),k(x.$$.fragment,a),k(_.$$.fragment,a),D=!1},d(a){a&&(o(e),o(t),o($),o(p),o(S),o(M),o(C),o(H),o(E),o(I)),z(s,a),z(h,a),z(x,a),z(_,a)}}}class ge extends P{constructor(e){super(),j(this,e,null,pe,L,{})}}export{ge as component};
