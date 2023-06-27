import{S as I,i as H,s as V,y as _,z as w,A as b,g as v,d as g,B as q,R as K,e as y,T as O,b as f,D as U,h as c,a as x,k as j,Q as Y,c as h,l as F,m as G,n as J,q as Z,r as ee}from"../chunks/index.e72184b5.js";import{H as te}from"../chunks/H5.546393c9.js";import{C as W}from"../chunks/CodePage.abe9804b.js";import{c as D,h as m,k as u,b as n,n as r,s as i,a as d}from"../chunks/highlighter.e3fc48dc.js";function se(l){let t,a;return{c(){t=new K(!1),a=y(),this.h()},l(e){t=O(e,!1),a=y(),this.h()},h(){t.a=a},m(e,$){t.m(l[0],e,$),f(e,a,$)},p:U,d(e){e&&c(a),e&&t.d()}}}function ae(l){let t,a;return t=new W({props:{$$slots:{default:[se]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,$){b(t,e,$),a=!0},p(e,[$]){const p={};$&2&&(p.$$scope={dirty:$,ctx:e}),t.$set(p)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}function $e(l){return[`${D("<!-- Media queries also provide some shorthands -->")}
${m("style",` ${r("css-lube")}=${i("v1.0.1")}`,`
	${u("@media")} ${n("(")}${r("min-width")}:${i("640px",!1)}${n(")")} ${u("and")} ${n("(")}${r("max-width")}:${i("767px",!1)}${n("){")}
		${d(".\\@\\!width\\=640\\~767px\\@fs\\=10px",["color","red"])}
	${n("}")}
	${u("@media")} ${n("(")}${r("min-width")}:${i("768px",!1)}${n("){")}
		${d(".\\@md\\@fs\\=12px",["color","red"])}
	${n("}")}
	${u("@media not")} ${n("(")}${r("min-width")}:${i("768px",!1)}${n("){")}
		${d(".\\@\\!md\\@fs\\=12px",["color","red"])}
	${n("}")}
	${u("@media")} ${n("(")}${r("prefers-color-scheme")}:${i("dark",!1)}${n(")")} ${u("and")} ${n("(")}${r("min-width")}:${i("768px",!1)}${n("){")}
		${d(".\\@\\@dark_and_md\\@fs\\=12px",["color","red"])}
	${n("}")}
`)}

${m("span",` ${r("class")}=${i("@width=640~767px@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${i("@md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${i("@!md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
${m("span",` ${r("class")}=${i("@@all_and_md@c=red")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: red }</span>
`)}
`]}class ne extends I{constructor(t){super(),H(this,t,$e,ae,V,{})}}function le(l){let t,a;return{c(){t=new K(!1),a=y(),this.h()},l(e){t=O(e,!1),a=y(),this.h()},h(){t.a=a},m(e,$){t.m(l[0],e,$),f(e,a,$)},p:U,d(e){e&&c(a),e&&t.d()}}}function re(l){let t,a;return t=new W({props:{$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,$){b(t,e,$),a=!0},p(e,[$]){const p={};$&2&&(p.$$scope={dirty:$,ctx:e}),t.$set(p)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}function ie(l){return[`${m("style",` ${r("css-lube")}=${i("v1.0.1")}`,`
	${d(".c\\=red",["color","red"])}
	${d(".fs\\=16px",["font-size","16px"])}
	${d("[class].fs\\=16px\\!",["font-size","16px"])}
	${D("/* Styles with the same prefix are grouped in the same group */")}
	${u("@media")} ${n("(")}${r("min-width")}:${i("768px",!1)}${n("){")}
		${d(".\\@min-width\\=768px\\@fs\\=12px",["font-size","12px"])}
		${d(".\\@min-width\\=768px\\@c\\=blue",["color","blue"])}
		${d(".\\@min-width\\=768px\\@\\:active\\/fs\\=12px:active",["font-size","1.25em"])}
	${n("}")}
`)}

${D("<!-- Classes that begin with an at (@) apply media queries and use the second at to separate styles from media queries -->")}
${m("span",` ${r("class")}=${i("c=red fs=16px @min-width=768px@fs=12px")}`,`
{ color: red }
<span class="td=line-through">{ font-size: 16px }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${m("span",` ${r("class")}=${i("c=red @min-width=768px@c=blue fs=16px! @min-width=768px@fs=12px")}`,`
<span class="td=line-through">{ color: red }</span>
<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
{ font-size: 16px }
<span class="td=line-through bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
${m("span",` ${r("class")}=${i("@min-width=768px@:active/fs=1.25")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">:active { font-size: 1.25em }</span>
`)}
`]}class ce extends I{constructor(t){super(),H(this,t,ie,re,V,{})}}function oe(l){let t,a;return{c(){t=new K(!1),a=y(),this.h()},l(e){t=O(e,!1),a=y(),this.h()},h(){t.a=a},m(e,$){t.m(l[0],e,$),f(e,a,$)},p:U,d(e){e&&c(a),e&&t.d()}}}function fe(l){let t,a;return t=new W({props:{$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,$){b(t,e,$),a=!0},p(e,[$]){const p={};$&2&&(p.$$scope={dirty:$,ctx:e}),t.$set(p)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}function pe(l){return[`${m("style",` ${r("css-lube")}=${i("v1.0.1")}`,`
	${u("@container")} ${n("(")}${r("min-width")}:${i("768px",!1)}${n("){")}
		${d(".\\@\\@container_min-width\\=768px\\@fs\\=10px",["font-size","10px"])}
	${n("}")}
	${u("@media screen and")} ${n("(")}${r("min-width")}:${i("768px",!1)}${n("){")}
		${d(".\\@screen_and_min-width\\=768px\\@fs\\=10px",["font-size","10px"])}
	${n("}")}
`)}

${D("<!-- If you use two at (@), the query does not have media as a prefix -->")}
${m("span",` ${r("class")}=${i("@@container_min-width=768px@fs=10px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
${m("span",` ${r("class")}=${i("@screen_and_min-width=768px@fs=10px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 10px }</span>
`)}
`]}class me extends I{constructor(t){super(),H(this,t,pe,fe,V,{})}}function de(l){let t,a;return{c(){t=new K(!1),a=y(),this.h()},l(e){t=O(e,!1),a=y(),this.h()},h(){t.a=a},m(e,$){t.m(l[0],e,$),f(e,a,$)},p:U,d(e){e&&c(a),e&&t.d()}}}function ue(l){let t,a;return t=new W({props:{$$slots:{default:[de]},$$scope:{ctx:l}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,$){b(t,e,$),a=!0},p(e,[$]){const p={};$&2&&(p.$$scope={dirty:$,ctx:e}),t.$set(p)},i(e){a||(v(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){q(t,e)}}}function xe(l){return[`${m("style",` ${r("css-lube")}=${i("v1.0.1")}`,`
	${u("@media not")} ${n("(")}${r("min-width")}:${i("768px",!1)}${n("){")}
		${d(".\\@\\!min-width\\=768px\\@fs\\=12px",["font-size","12px"])}
	${n("}")}
`)}

${D("<!-- Media queries can use an exclamation point (!) to apply the not logic -->")}
${m("span",` ${r("class")}=${i("@!min-width=768px@fs=12px")}`,`
<span class="bold c=--electric-violet @dark@c=--bouquet">{ font-size: 12px }</span>
`)}
`]}class he extends I{constructor(t){super(),H(this,t,xe,ue,V,{})}}function _e(l){let t;return{c(){t=Z("Media Query")},l(a){t=ee(a,"Media Query")},m(a,e){f(a,t,e)},d(a){a&&c(t)}}}function we(l){let t,a,e,$,p,k,P,Q,T,z,A,S,B,M,L,C,N,E,R;return a=new te({props:{$$slots:{default:[_e]},$$scope:{ctx:l}}}),k=new ce({}),z=new he({}),M=new me({}),E=new ne({}),{c(){t=x(),_(a.$$.fragment),e=x(),$=j("div"),p=x(),_(k.$$.fragment),P=x(),Q=j("div"),T=x(),_(z.$$.fragment),A=x(),S=j("div"),B=x(),_(M.$$.fragment),L=x(),C=j("div"),N=x(),_(E.$$.fragment),this.h()},l(s){Y("svelte-15r5d0f",document.head).forEach(c),t=h(s),w(a.$$.fragment,s),e=h(s),$=F(s,"DIV",{class:!0}),G($).forEach(c),p=h(s),w(k.$$.fragment,s),P=h(s),Q=F(s,"DIV",{class:!0}),G(Q).forEach(c),T=h(s),w(z.$$.fragment,s),A=h(s),S=F(s,"DIV",{class:!0}),G(S).forEach(c),B=h(s),w(M.$$.fragment,s),L=h(s),C=F(s,"DIV",{class:!0}),G(C).forEach(c),N=h(s),w(E.$$.fragment,s),this.h()},h(){document.title="Media Query | CSS Lube",J($,"class","h=1"),J(Q,"class","h=2"),J(S,"class","h=2"),J(C,"class","h=2")},m(s,o){f(s,t,o),b(a,s,o),f(s,e,o),f(s,$,o),f(s,p,o),b(k,s,o),f(s,P,o),f(s,Q,o),f(s,T,o),b(z,s,o),f(s,A,o),f(s,S,o),f(s,B,o),b(M,s,o),f(s,L,o),f(s,C,o),f(s,N,o),b(E,s,o),R=!0},p(s,[o]){const X={};o&1&&(X.$$scope={dirty:o,ctx:s}),a.$set(X)},i(s){R||(v(a.$$.fragment,s),v(k.$$.fragment,s),v(z.$$.fragment,s),v(M.$$.fragment,s),v(E.$$.fragment,s),R=!0)},o(s){g(a.$$.fragment,s),g(k.$$.fragment,s),g(z.$$.fragment,s),g(M.$$.fragment,s),g(E.$$.fragment,s),R=!1},d(s){s&&c(t),q(a,s),s&&c(e),s&&c($),s&&c(p),q(k,s),s&&c(P),s&&c(Q),s&&c(T),q(z,s),s&&c(A),s&&c(S),s&&c(B),q(M,s),s&&c(L),s&&c(C),s&&c(N),q(E,s)}}}class ye extends I{constructor(t){super(),H(this,t,null,we,V,{})}}export{ye as component};
