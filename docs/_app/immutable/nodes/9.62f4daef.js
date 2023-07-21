import{s as x,J as C,e as S,K as q,i as f,u as K,d as m,a as g,f as A,I as L,c as k,g as R,h as j,j as P,l as G,m as J}from"../chunks/scheduler.37114a5d.js";import{S as D,i as T,b as E,d as y,m as H,a as M,t as v,e as w}from"../chunks/index.80e0ab0e.js";import{H as V}from"../chunks/H5.c701e45b.js";import{C as z}from"../chunks/CodePage.aad8268b.js";import{c as u,h as p,a as h,n as c,s as l,k as B,b as o,f as b}from"../chunks/highlighter.e3fc48dc.js";function F(n){let e,t;return{c(){e=new C(!1),t=S(),this.h()},l(s){e=q(s,!1),t=S(),this.h()},h(){e.a=t},m(s,r){e.m(n[0],s,r),f(s,t,r)},p:K,d(s){s&&(m(t),e.d())}}}function N(n){let e,t;return e=new z({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,r){H(e,s,r),t=!0},p(s,[r]){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){w(e,s)}}}function O(n){return[`${u("<!-- In light theme, dark mode styles are disabled -->")}
${p("style",` ${c("css-lube")}=${l("v1.0.2")}`,`
	${h(".c\\=red",["color","red"])}
`)}

${u("<!-- In dark theme, dark mode styles are applied without media queries -->")}
${p("style",` ${c("css-lube")}=${l("v1.0.2")}`,`
	${h(".c\\=red",["color","red"])}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
`)}

${u("<!-- In system theme, the dark mode style is applied as a media query -->")}
${p("style",` ${c("css-lube")}=${l("v1.0.2")}`,`
	${h(".c\\=red",["color","red"])}
	${B("@media")} ${o("(")}${c("prefers-color-scheme")}:${l("dark",!1)}${o("){")}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
	${o("}")}
`)}

${p("span",` ${c("class")}=${l("c=red @dark@c=blue")}`,`
	<span class="td=line-through">{ color: red }</span>
	<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
`)}

${p("script","",`
	${c("localStorage")}.${b("setItem")}${o("(")}${l("THEME")}, ${l("LIGHT")}${o(")")} ${u("// if THEME is not DARK and true, light theme is applied")}
	${c("localStorage")}.${b("setItem")}${o("(")}${l("THEME")}, ${l("DARK")}${o(")")} ${u("// if THEME is DARK, dark theme is applied")}
	${c("localStorage")}.${b("removeItem")}${o("(")}${l("THEME")}${o(")")} ${u("// if THEME is false, theme is follow system settings")}
	${c("window")}${o("[")}${l("CSS Lube")}${o("]()")} ${u("// update style sheet")}
`)}`]}class Q extends D{constructor(e){super(),T(this,e,O,N,x,{})}}function U(n){let e;return{c(){e=G("Dark Mode")},l(t){e=J(t,"Dark Mode")},m(t,s){f(t,e,s)},d(t){t&&m(e)}}}function W(n){let e,t,s,r,i,d,_;return t=new V({props:{$$slots:{default:[U]},$$scope:{ctx:n}}}),d=new Q({}),{c(){e=g(),E(t.$$.fragment),s=g(),r=A("div"),i=g(),E(d.$$.fragment),this.h()},l(a){L("svelte-tsmyjm",document.head).forEach(m),e=k(a),y(t.$$.fragment,a),s=k(a),r=R(a,"DIV",{class:!0}),j(r).forEach(m),i=k(a),y(d.$$.fragment,a),this.h()},h(){document.title="Dark Mode | CSS Lube",P(r,"class","h=1")},m(a,$){f(a,e,$),H(t,a,$),f(a,s,$),f(a,r,$),f(a,i,$),H(d,a,$),_=!0},p(a,[$]){const I={};$&1&&(I.$$scope={dirty:$,ctx:a}),t.$set(I)},i(a){_||(M(t.$$.fragment,a),M(d.$$.fragment,a),_=!0)},o(a){v(t.$$.fragment,a),v(d.$$.fragment,a),_=!1},d(a){a&&(m(e),m(s),m(r),m(i)),w(t,a),w(d,a)}}}class se extends D{constructor(e){super(),T(this,e,null,W,x,{})}}export{se as component};
