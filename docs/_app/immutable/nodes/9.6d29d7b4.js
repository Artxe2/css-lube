import{s as x,f as C,g as L,h as A,d as m,j as R,i as u,L as j,e as T,M as P,u as V,a as b,N as F,c as k,l as G,m as N}from"../chunks/scheduler.f6e53d32.js";import{S as q,i as K,b as v,d as w,m as H,a as M,t as S,e as D}from"../chunks/index.c26f0603.js";import{H as U}from"../chunks/H5.ebc619f0.js";import{C as z}from"../chunks/CodePage.9e282020.js";import{c as f,h,a as p,k as g,b as l,d as B,n as d,s as $,f as E}from"../chunks/highlighter.ff4ee7c2.js";import{v as y}from"../chunks/version.e0ea0666.js";function J(i){let t,e;return{c(){t=new j(!1),e=T(),this.h()},l(r){t=P(r,!1),e=T(),this.h()},h(){t.a=e},m(r,a){t.m(i[0],r,a),u(r,e,a)},p:V,d(r){r&&(m(e),t.d())}}}function O(i){let t,e,r;return e=new z({props:{$$slots:{default:[J]},$$scope:{ctx:i}}}),{c(){t=C("div"),v(e.$$.fragment),this.h()},l(a){t=L(a,"DIV",{class:!0});var o=A(t);w(e.$$.fragment,o),o.forEach(m),this.h()},h(){R(t,"class","@!lg@_pre/fs=.85 @!lg@_pre/fs=.7")},m(a,o){u(a,t,o),H(e,t,null),r=!0},p(a,[o]){const c={};o&2&&(c.$$scope={dirty:o,ctx:a}),e.$set(c)},i(a){r||(M(e.$$.fragment,a),r=!0)},o(a){S(e.$$.fragment,a),r=!1},d(a){a&&m(t),D(e)}}}function Q(i){return[`${f("<!-- In light theme, dark mode styles are disabled with FALSE(width<0) -->")}
${h("style",` ${d("css-lube")}=${$(y)}`,`
	${p(".c\\=red",["color","red"])}
	${g("@media")} ${l("(")}${B(0)}${l("){")}
		${p(".\\@dark\\@c\\=blue",["color","blue"])}
	${l("}")}
`)}

${f("<!-- In dark theme, dark mode styles are applied with TRUE(width>0) -->")}
${h("style",` ${d("css-lube")}=${$(y)}`,`
	${p(".c\\=red",["color","red"])}
	${g("@media")} ${l("(")}${g("color")}${l("){")}
		${p(".\\@dark\\@c\\=blue",["color","blue"])}
	${l("}")}
`)}
${f("<!-- In system theme, the dark mode style is applied as a media query -->")}
${h("style",` ${d("css-lube")}=${$(y)}`,`
	${p(".c\\=red",["color","red"])}
	${g("@media")} ${l("(")}${d("prefers-color-scheme")}:${$("dark",!1)}${l("){")}
		${p(".\\@dark\\@c\\=blue",["color","blue"])}
	${l("}")}
`)}

${h("span",` ${d("class")}=${$("c=red @dark@c=blue")}`,`
	<span class="td=line-through">{ color: red }</span>
	<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
`)}

${h("script","",`
	${d("localStorage")}.${E("setItem")}${l("(")}${$("THEME")}, ${$("LIGHT")}${l(")")} ${f("// if THEME is not DARK and true, light theme is applied")}
	${d("localStorage")}.${E("setItem")}${l("(")}${$("THEME")}, ${$("DARK")}${l(")")} ${f("// if THEME is DARK, dark theme is applied")}
	${d("localStorage")}.${E("removeItem")}${l("(")}${$("THEME")}${l(")")} ${f("// if THEME is false, theme is follow system settings")}
	${d("window")}${l("[")}${$("CSS Lube")}${l("]()")} ${f("// update style sheet")}
`)}`]}class W extends q{constructor(t){super(),K(this,t,Q,O,x,{})}}function X(i){let t;return{c(){t=G("Dark Mode")},l(e){t=N(e,"Dark Mode")},m(e,r){u(e,t,r)},d(e){e&&m(t)}}}function Y(i){let t,e,r,a,o,c,_;return e=new U({props:{$$slots:{default:[X]},$$scope:{ctx:i}}}),c=new W({}),{c(){t=b(),v(e.$$.fragment),r=b(),a=C("div"),o=b(),v(c.$$.fragment),this.h()},l(s){F("svelte-tsmyjm",document.head).forEach(m),t=k(s),w(e.$$.fragment,s),r=k(s),a=L(s,"DIV",{class:!0}),A(a).forEach(m),o=k(s),w(c.$$.fragment,s),this.h()},h(){document.title="Dark Mode | CSS Lube",R(a,"class","h=1")},m(s,n){u(s,t,n),H(e,s,n),u(s,r,n),u(s,a,n),u(s,o,n),H(c,s,n),_=!0},p(s,[n]){const I={};n&1&&(I.$$scope={dirty:n,ctx:s}),e.$set(I)},i(s){_||(M(e.$$.fragment,s),M(c.$$.fragment,s),_=!0)},o(s){S(e.$$.fragment,s),S(c.$$.fragment,s),_=!1},d(s){s&&(m(t),m(r),m(a),m(o)),D(e,s),D(c,s)}}}class le extends q{constructor(t){super(),K(this,t,null,Y,x,{})}}export{le as component};
