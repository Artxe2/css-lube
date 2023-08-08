import{s as D,J as O,e as y,K as R,i as p,u as U,d as i,a as h,f as A,I as Z,c as x,g as B,h as F,j as G,l as ee,m as te}from"../chunks/scheduler.a569b206.js";import{S as H,i as V,b as _,d as g,m as w,a as b,t as v,e as q}from"../chunks/index.5d932454.js";import{H as se}from"../chunks/H5.43107fd8.js";import{C as W}from"../chunks/CodePage.eaf4ef53.js";import{c as C,h as m,k as u,b as $,n as r,s as c,a as d}from"../chunks/highlighter.e3fc48dc.js";import{v as X}from"../chunks/version.0f249848.js";function ae(l){let e,s;return{c(){e=new O(!1),s=y(),this.h()},l(t){e=R(t,!1),s=y(),this.h()},h(){e.a=s},m(t,n){e.m(l[0],t,n),p(t,s,n)},p:U,d(t){t&&(i(s),e.d())}}}function ne(l){let e,s;return e=new W({props:{$$slots:{default:[ae]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){w(e,t,n),s=!0},p(t,[n]){const f={};n&2&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){q(e,t)}}}function $e(l){return[`${C("<!-- Media queries also provide some shorthands -->")}
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
	${C("/* Styles with the same prefix are grouped in the same group */")}
	${u("@media")} ${$("(")}${r("min-width")}:${c("768px",!1)}${$("){")}
		${d(".\\@min-width\\=768px\\@fs\\=12px",["font-size","12px"])}
		${d(".\\@min-width\\=768px\\@c\\=blue",["color","blue"])}
		${d(".\\@min-width\\=768px\\@\\:active\\/fs\\=12px:active",["font-size","1.25em"])}
	${$("}")}
`)}

${C("<!-- Classes that begin with an at (@) apply media queries and use the second at to separate styles from media queries -->")}
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

${C("<!-- If you use two at (@), the query does not have media as a prefix -->")}
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

${C("<!-- Media queries can use an exclamation point (!) to apply the not logic -->")}
${m("span",` ${r("class")}=${c("@!min-width=768px@fs=12px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
`]}class _e extends H{constructor(e){super(),V(this,e,xe,he,D,{})}}function ge(l){let e;return{c(){e=ee("Media Query")},l(s){e=te(s,"Media Query")},m(s,t){p(s,e,t)},d(s){s&&i(e)}}}function we(l){let e,s,t,n,f,k,P,Q,j,z,J,I,K,M,L,S,N,E,T;return s=new se({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),k=new oe({}),z=new _e({}),M=new de({}),E=new le({}),{c(){e=h(),_(s.$$.fragment),t=h(),n=A("div"),f=h(),_(k.$$.fragment),P=h(),Q=A("div"),j=h(),_(z.$$.fragment),J=h(),I=A("div"),K=h(),_(M.$$.fragment),L=h(),S=A("div"),N=h(),_(E.$$.fragment),this.h()},l(a){Z("svelte-15r5d0f",document.head).forEach(i),e=x(a),g(s.$$.fragment,a),t=x(a),n=B(a,"DIV",{class:!0}),F(n).forEach(i),f=x(a),g(k.$$.fragment,a),P=x(a),Q=B(a,"DIV",{class:!0}),F(Q).forEach(i),j=x(a),g(z.$$.fragment,a),J=x(a),I=B(a,"DIV",{class:!0}),F(I).forEach(i),K=x(a),g(M.$$.fragment,a),L=x(a),S=B(a,"DIV",{class:!0}),F(S).forEach(i),N=x(a),g(E.$$.fragment,a),this.h()},h(){document.title="Media Query | CSS Lube",G(n,"class","h=1"),G(Q,"class","h=2"),G(I,"class","h=2"),G(S,"class","h=2")},m(a,o){p(a,e,o),w(s,a,o),p(a,t,o),p(a,n,o),p(a,f,o),w(k,a,o),p(a,P,o),p(a,Q,o),p(a,j,o),w(z,a,o),p(a,J,o),p(a,I,o),p(a,K,o),w(M,a,o),p(a,L,o),p(a,S,o),p(a,N,o),w(E,a,o),T=!0},p(a,[o]){const Y={};o&1&&(Y.$$scope={dirty:o,ctx:a}),s.$set(Y)},i(a){T||(b(s.$$.fragment,a),b(k.$$.fragment,a),b(z.$$.fragment,a),b(M.$$.fragment,a),b(E.$$.fragment,a),T=!0)},o(a){v(s.$$.fragment,a),v(k.$$.fragment,a),v(z.$$.fragment,a),v(M.$$.fragment,a),v(E.$$.fragment,a),T=!1},d(a){a&&(i(e),i(t),i(n),i(f),i(P),i(Q),i(j),i(J),i(I),i(K),i(L),i(S),i(N)),q(s,a),q(k,a),q(z,a),q(M,a),q(E,a)}}}class Me extends H{constructor(e){super(),V(this,e,null,we,D,{})}}export{Me as component};
