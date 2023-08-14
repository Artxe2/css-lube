import{s as D,M as O,e as y,N as R,i as p,u as U,d as i,a as h,f as F,L as Z,c as x,g as G,h as J,j as K,l as ee,m as te}from"../chunks/scheduler.526307f2.js";import{S as H,i as V,b as _,d as g,m as w,a as b,t as v,e as q}from"../chunks/index.cddfbdc7.js";import{H as se}from"../chunks/H5.f9dda08d.js";import{C as W}from"../chunks/CodePage.93f49b6b.js";import{a as I,h as m,k as u,f as $,n as r,s as c,b as d}from"../chunks/highlighter.365a0e63.js";import{v as X}from"../chunks/version.49915644.js";function ae(l){let e,s;return{c(){e=new O(!1),s=y(),this.h()},l(t){e=R(t,!1),s=y(),this.h()},h(){e.a=s},m(t,n){e.m(l[0],t,n),p(t,s,n)},p:U,d(t){t&&(i(s),e.d())}}}function ne(l){let e,s;return e=new W({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p(t,[n]){const f={};n&2&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function $e(l){return[`${I("<!-- Media queries also provide some shorthands -->")}
${m("style",` ${r("css-lube")}=${c(X)}`,`
	${u("@media")} ${$("(")}${r("min-width")}:${c("640px",!1)}${$(")")} ${u("and")} ${$("(")}${r("max-width")}:${c("767px",!1)}${$("){")}
		${d(".\\@\\!width\\=640\\~767px\\@fs\\=10px",["color","red"])}
	${$("}")}
	${u("@media")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@md\\@fs\\=12px",["color","red"])}
	${$("}")}
	${u("@media not")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@\\!md\\@fs\\=12px",["color","red"])}
	${$("}")}
	${u("@media")} ${$("(")}${r("prefers-color-scheme")}:${c("dark",!1)}${$(")")} ${u("and")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@\\@dark_and_md\\@fs\\=12px",["color","red"])}
	${$("}")}
`)}

${m("span",` ${r("class")}=${c("@width=640~767px@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${c("@md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${c("@!md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${c("@@all_and_md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
`]}class le extends H{constructor(e){super(),V(this,e,$e,ne,D,{})}}function re(l){let e,s;return{c(){e=new O(!1),s=y(),this.h()},l(t){e=R(t,!1),s=y(),this.h()},h(){e.a=s},m(t,n){e.m(l[0],t,n),p(t,s,n)},p:U,d(t){t&&(i(s),e.d())}}}function ce(l){let e,s;return e=new W({props:{$$slots:{default:[re]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p(t,[n]){const f={};n&2&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function ie(l){return[`${m("style",` ${r("css-lube")}=${c(X)}`,`
	${d(".c\\=red",["color","red"])}
	${d(".fs\\=16px",["font-size","16px"])}
	${d("[class].fs\\=16px\\!",["font-size","16px"])}
	${I("/* Styles with the same prefix are grouped in the same group */")}
	${u("@media")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@min-width\\=768px\\@fs\\=12px",["font-size","12px"])}
		${d(".\\@min-width\\=768px\\@c\\=blue",["color","blue"])}
		${d(".\\@min-width\\=768px\\@\\:active\\/fs\\=12px:active",["font-size","1.25em"])}
	${$("}")}
`)}

${I("<!-- Classes that begin with an at (@) apply media queries and use the second at to separate styles from media queries -->")}
${m("span",` ${r("class")}=${c("c=red fs=16px @min-width=768px@fs=12px")}`,`
{ color: red }
<span class="td=line-through">{ font-size: 16px }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${m("span",` ${r("class")}=${c("c=red @min-width=768px@c=blue fs=16px! @min-width=768px@fs=12px")}`,`
<span class="td=line-through">{ color: red }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
{ font-size: 16px }
<span class="td=line-through bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${m("span",` ${r("class")}=${c("@min-width=768px@:active/fs=1.25")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">:active { font-size: 1.25em }</span>
`)}
`]}class oe extends H{constructor(e){super(),V(this,e,ie,ce,D,{})}}function pe(l){let e,s;return{c(){e=new O(!1),s=y(),this.h()},l(t){e=R(t,!1),s=y(),this.h()},h(){e.a=s},m(t,n){e.m(l[0],t,n),p(t,s,n)},p:U,d(t){t&&(i(s),e.d())}}}function fe(l){let e,s;return e=new W({props:{$$slots:{default:[pe]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p(t,[n]){const f={};n&2&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function me(l){return[`${m("style",` ${r("css-lube")}=${c(X)}`,`
	${u("@container")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@\\@container_min-width\\=768px\\@fs\\=10px",["font-size","10px"])}
	${$("}")}
	${u("@media screen and")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@screen_and_min-width\\=768px\\@fs\\=10px",["font-size","10px"])}
	${$("}")}
`)}

${I("<!-- If you use two at (@), the query does not have media as a prefix -->")}
${m("span",` ${r("class")}=${c("@@container_min-width=768px@fs=10px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
${m("span",` ${r("class")}=${c("@screen_and_min-width=768px@fs=10px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
`]}class de extends H{constructor(e){super(),V(this,e,me,fe,D,{})}}function ue(l){let e,s;return{c(){e=new O(!1),s=y(),this.h()},l(t){e=R(t,!1),s=y(),this.h()},h(){e.a=s},m(t,n){e.m(l[0],t,n),p(t,s,n)},p:U,d(t){t&&(i(s),e.d())}}}function he(l){let e,s;return e=new W({props:{$$slots:{default:[ue]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p(t,[n]){const f={};n&2&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function xe(l){return[`${m("style",` ${r("css-lube")}=${c(X)}`,`
	${u("@media not")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@\\!min-width\\=768px\\@fs\\=12px",["font-size","12px"])}
	${$("}")}
`)}

${I("<!-- Media queries can use an exclamation point (!) to apply the not logic -->")}
${m("span",` ${r("class")}=${c("@!min-width=768px@fs=12px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
`]}class _e extends H{constructor(e){super(),V(this,e,xe,he,D,{})}}function ge(l){let e;return{c(){e=ee("Media Query")},l(s){e=te(s,"Media Query")},m(s,t){p(s,e,t)},d(s){s&&i(e)}}}function we(l){let e,s,t,n,f,k,L,Q,N,z,P,S,j,M,T,C,A,E,B;return s=new se({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),k=new oe({}),z=new _e({}),M=new de({}),E=new le({}),{c(){e=h(),_(s.$$.fragment),t=h(),n=F("div"),f=h(),_(k.$$.fragment),L=h(),Q=F("div"),N=h(),_(z.$$.fragment),P=h(),S=F("div"),j=h(),_(M.$$.fragment),T=h(),C=F("div"),A=h(),_(E.$$.fragment),this.h()},l(a){Z("svelte-15r5d0f",document.head).forEach(i),e=x(a),g(s.$$.fragment,a),t=x(a),n=G(a,"DIV",{class:!0}),J(n).forEach(i),f=x(a),g(k.$$.fragment,a),L=x(a),Q=G(a,"DIV",{class:!0}),J(Q).forEach(i),N=x(a),g(z.$$.fragment,a),P=x(a),S=G(a,"DIV",{class:!0}),J(S).forEach(i),j=x(a),g(M.$$.fragment,a),T=x(a),C=G(a,"DIV",{class:!0}),J(C).forEach(i),A=x(a),g(E.$$.fragment,a),this.h()},h(){document.title="Media Query | CSS Lube",K(n,"class","h=1"),K(Q,"class","h=2"),K(S,"class","h=2"),K(C,"class","h=2")},m(a,o){p(a,e,o),w(s,a,o),p(a,t,o),p(a,n,o),p(a,f,o),w(k,a,o),p(a,L,o),p(a,Q,o),p(a,N,o),w(z,a,o),p(a,P,o),p(a,S,o),p(a,j,o),w(M,a,o),p(a,T,o),p(a,C,o),p(a,A,o),w(E,a,o),B=!0},p(a,[o]){const Y={};o&1&&(Y.$$scope={dirty:o,ctx:a}),s.$set(Y)},i(a){B||(b(s.$$.fragment,a),b(k.$$.fragment,a),b(z.$$.fragment,a),b(M.$$.fragment,a),b(E.$$.fragment,a),B=!0)},o(a){v(s.$$.fragment,a),v(k.$$.fragment,a),v(z.$$.fragment,a),v(M.$$.fragment,a),v(E.$$.fragment,a),B=!1},d(a){a&&(i(e),i(t),i(n),i(f),i(L),i(Q),i(N),i(P),i(S),i(j),i(T),i(C),i(A)),q(s,a),q(k,a),q(z,a),q(M,a),q(E,a)}}}class Me extends H{constructor(e){super(),V(this,e,null,we,D,{})}}export{Me as component};
