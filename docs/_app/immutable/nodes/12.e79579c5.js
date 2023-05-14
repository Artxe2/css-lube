import{S as I,i as H,s as V,y as _,z as w,A as g,g as y,d as v,B as z,P as L,e as q,Q as O,b as p,D as U,h as l,a as x,k as F,R as Y,c as h,l as G,m as J,n as K,q as Z,r as ee}from"../chunks/index.d48826db.js";import{H as te}from"../chunks/H5.e3e07c63.js";import{C as W}from"../chunks/CodePage.d79d6b32.js";import{c as D,h as o,k as d,e as n,n as f,s as r,b as u}from"../chunks/highlighter.71dae262.js";function se(i){let t,$;return{c(){t=new L(!1),$=q(),this.h()},l(e){t=O(e,!1),$=q(),this.h()},h(){t.a=$},m(e,a){t.m(i[0],e,a),p(e,$,a)},p:U,d(e){e&&l($),e&&t.d()}}}function $e(i){let t,$;return t=new W({props:{$$slots:{default:[se]},$$scope:{ctx:i}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){g(t,e,a),$=!0},p(e,[a]){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){$||(y(t.$$.fragment,e),$=!0)},o(e){v(t.$$.fragment,e),$=!1},d(e){z(t,e)}}}function ae(i){return[`${D("<!-- Media queries also provide some shorthands -->")}
${o("style",` ${f("instant-css")}=${r("v0.6.11")}`,`
	${d("@media")} ${n("(")}${f("min-width")}:${r("640px",!1)}${n(")")} ${d("and")} ${n("(")}${f("max-width")}:${r("767px",!1)}${n("){")}
		${u(".\\@\\!width\\=640\\~767px\\@fs\\=10px",["font-size","10px"])}
	${n("}")}
	${d("@media")} ${n("(")}${f("min-width")}:${r("768px",!1)}${n("){")}
		${u(".\\@md\\@fs\\=12px",["font-size","12px"])}
	${n("}")}
	${d("@media not")} ${n("(")}${f("min-width")}:${r("768px",!1)}${n("){")}
		${u(".\\@\\!md\\@fs\\=12px",["font-size","12px"])}
	${n("}")}
	${d("@media")} ${n("(")}${f("prefers-color-scheme")}:${r("dark",!1)}${n(")")} ${d("and")} ${n("(")}${f("min-width")}:${r("768px",!1)}${n("){")}
		${u(".\\@\\@dark_and_md\\@fs\\=12px",["font-size","12px"])}
	${n("}")}
`)}

${o("span",` ${f("class")}=${r("@width=640~767px@c=red")}`,"640px ~ 767px")}
${o("span",` ${f("class")}=${r("@md@c=red")}`,"768px ~")}
${o("span",` ${f("class")}=${r("@!md@c=red")}`,"~ 767px")}
${o("span",` ${f("class")}=${r("@@all_and_md@c=red")}`,"all 768px ~")}
`]}class ne extends I{constructor(t){super(),H(this,t,ae,$e,V,{})}}function ie(i){let t,$;return{c(){t=new L(!1),$=q(),this.h()},l(e){t=O(e,!1),$=q(),this.h()},h(){t.a=$},m(e,a){t.m(i[0],e,a),p(e,$,a)},p:U,d(e){e&&l($),e&&t.d()}}}function fe(i){let t,$;return t=new W({props:{$$slots:{default:[ie]},$$scope:{ctx:i}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){g(t,e,a),$=!0},p(e,[a]){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){$||(y(t.$$.fragment,e),$=!0)},o(e){v(t.$$.fragment,e),$=!1},d(e){z(t,e)}}}function re(i){return[`${o("style",` ${f("instant-css")}=${r("v0.6.11")}`,`
	${u(".c\\=red",["color","red"])}
	${u(".fs\\=16px",["font-size","16px"])}
	${u("[class].fs\\=16px\\!",["font-size","16px"])}
	${D("/* Styles with the same prefix are grouped in the same group */")}
	${d("@media")} ${n("(")}${f("min-width")}:${r("768px",!1)}${n("){")}
		${u(".\\@min-width\\=768px\\@fs\\=12px",["font-size","12px"])}
		${u(".\\@min-width\\=768px\\@c\\=blue",["color","blue"])}
		${u(".\\@min-width\\=768px\\@\\:active\\/fs\\=12px:active",["font-size","1.25em"])}
	${n("}")}
`)}

${D("<!-- Classes that begin with an at (@) apply media queries and use the second at to separate styles from media queries -->")}
${o("span",` ${f("class")}=${r("c=red fs=16px @min-width=768px@fs=12px")}`,"if width >= 768: im 12px")}
${o("span",` ${f("class")}=${r("c=red @min-width=768px@c=blue fs=16px! @min-width=768px@fs=12px")}`,"i'm blue & 16px")}
${o("span",` ${f("class")}=${r("@min-width=768px@:active/fs=1.25")}`,"with selector")}
`]}class le extends I{constructor(t){super(),H(this,t,re,fe,V,{})}}function me(i){let t,$;return{c(){t=new L(!1),$=q(),this.h()},l(e){t=O(e,!1),$=q(),this.h()},h(){t.a=$},m(e,a){t.m(i[0],e,a),p(e,$,a)},p:U,d(e){e&&l($),e&&t.d()}}}function pe(i){let t,$;return t=new W({props:{$$slots:{default:[me]},$$scope:{ctx:i}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){g(t,e,a),$=!0},p(e,[a]){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){$||(y(t.$$.fragment,e),$=!0)},o(e){v(t.$$.fragment,e),$=!1},d(e){z(t,e)}}}function ce(i){return[`${o("style",` ${f("instant-css")}=${r("v0.6.11")}`,`
	${d("@container")} ${n("(")}${f("min-width")}:${r("768px",!1)}${n("){")}
		${u(".\\@container_min-width\\=768px\\@fs\\=10px",["font-size","10px"])}
	${n("}")}
	${d("@media screen and")} ${n("(")}${f("min-width")}:${r("768px",!1)}${n("){")}
		${u(".\\@\\@screen_and_min-width\\=768px\\@fs\\=10px",["font-size","10px"])}
	${n("}")}
`)}

${D("<!-- The grammar that uses more complex media queries is as follows -->")}
${o("span",` ${f("class")}=${r("@container_min-width=768px@fs=10px")}`,"container()")}
${o("span",` ${f("class")}=${r("@@screen_and_min-width=768px@fs=10px")}`,"multi with @")}
`]}class oe extends I{constructor(t){super(),H(this,t,ce,pe,V,{})}}function ue(i){let t,$;return{c(){t=new L(!1),$=q(),this.h()},l(e){t=O(e,!1),$=q(),this.h()},h(){t.a=$},m(e,a){t.m(i[0],e,a),p(e,$,a)},p:U,d(e){e&&l($),e&&t.d()}}}function de(i){let t,$;return t=new W({props:{$$slots:{default:[ue]},$$scope:{ctx:i}}}),{c(){_(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){g(t,e,a),$=!0},p(e,[a]){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){$||(y(t.$$.fragment,e),$=!0)},o(e){v(t.$$.fragment,e),$=!1},d(e){z(t,e)}}}function xe(i){return[`${o("style",` ${f("instant-css")}=${r("v0.6.11")}`,`
	${d("@media not")} ${n("(")}${f("min-width")}:${r("768px",!1)}${n("){")}
		${u(".\\@\\!min-width\\=768px\\@fs\\=12px",["font-size","12px"])}
	${n("}")}
`)}

${D("<!-- Queries with a single feature can use an exclamation point (!) to apply the not logic -->")}
${o("span",` ${f("class")}=${r("@!min-width=768px@fs=12px")}`,"if width >= 768: im 12px")}
`]}class he extends I{constructor(t){super(),H(this,t,xe,de,V,{})}}function _e(i){let t;return{c(){t=Z("Media Query")},l($){t=ee($,"Media Query")},m($,e){p($,t,e)},d($){$&&l(t)}}}function we(i){let t,$,e,a,c,E,P,k,T,M,A,S,B,Q,N,C,R,b,j;return $=new te({props:{$$slots:{default:[_e]},$$scope:{ctx:i}}}),E=new le({}),M=new he({}),Q=new oe({}),b=new ne({}),{c(){t=x(),_($.$$.fragment),e=x(),a=F("div"),c=x(),_(E.$$.fragment),P=x(),k=F("div"),T=x(),_(M.$$.fragment),A=x(),S=F("div"),B=x(),_(Q.$$.fragment),N=x(),C=F("div"),R=x(),_(b.$$.fragment),this.h()},l(s){Y("svelte-1ycv7qy",document.head).forEach(l),t=h(s),w($.$$.fragment,s),e=h(s),a=G(s,"DIV",{class:!0}),J(a).forEach(l),c=h(s),w(E.$$.fragment,s),P=h(s),k=G(s,"DIV",{class:!0}),J(k).forEach(l),T=h(s),w(M.$$.fragment,s),A=h(s),S=G(s,"DIV",{class:!0}),J(S).forEach(l),B=h(s),w(Q.$$.fragment,s),N=h(s),C=G(s,"DIV",{class:!0}),J(C).forEach(l),R=h(s),w(b.$$.fragment,s),this.h()},h(){document.title="Media Query | Instant CSS",K(a,"class","h=1"),K(k,"class","h=2"),K(S,"class","h=2"),K(C,"class","h=2")},m(s,m){p(s,t,m),g($,s,m),p(s,e,m),p(s,a,m),p(s,c,m),g(E,s,m),p(s,P,m),p(s,k,m),p(s,T,m),g(M,s,m),p(s,A,m),p(s,S,m),p(s,B,m),g(Q,s,m),p(s,N,m),p(s,C,m),p(s,R,m),g(b,s,m),j=!0},p(s,[m]){const X={};m&1&&(X.$$scope={dirty:m,ctx:s}),$.$set(X)},i(s){j||(y($.$$.fragment,s),y(E.$$.fragment,s),y(M.$$.fragment,s),y(Q.$$.fragment,s),y(b.$$.fragment,s),j=!0)},o(s){v($.$$.fragment,s),v(E.$$.fragment,s),v(M.$$.fragment,s),v(Q.$$.fragment,s),v(b.$$.fragment,s),j=!1},d(s){s&&l(t),z($,s),s&&l(e),s&&l(a),s&&l(c),z(E,s),s&&l(P),s&&l(k),s&&l(T),z(M,s),s&&l(A),s&&l(S),s&&l(B),z(Q,s),s&&l(N),s&&l(C),s&&l(R),z(b,s)}}}class qe extends I{constructor(t){super(),H(this,t,null,we,V,{})}}export{qe as component};
