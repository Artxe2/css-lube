import{S as T,i as x,s as I,y,z as E,A as H,g as M,d as v,B as w,R as q,e as S,T as C,b as u,D as A,h as m,a as g,k as R,Q as K,c as k,l as L,m as P,n as j,q as z,r as B}from"../chunks/index.e72184b5.js";import{H as G}from"../chunks/H5.546393c9.js";import{C as Q}from"../chunks/CodePage.abe9804b.js";import{c as f,h as p,a as h,n as c,s as l,k as V,b as o,f as b}from"../chunks/highlighter.e3fc48dc.js";function F(n){let e,a;return{c(){e=new q(!1),a=S(),this.h()},l(s){e=C(s,!1),a=S(),this.h()},h(){e.a=a},m(s,r){e.m(n[0],s,r),u(s,a,r)},p:A,d(s){s&&m(a),s&&e.d()}}}function J(n){let e,a;return e=new Q({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,r){H(e,s,r),a=!0},p(s,[r]){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){a||(M(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){w(e,s)}}}function N(n){return[`${f("<!-- In light theme, dark mode styles are disabled -->")}
${p("style",` ${c("css-lube")}=${l("v1.0.0")}`,`
	${h(".c\\=red",["color","red"])}
`)}

${f("<!-- In dark theme, dark mode styles are applied without media queries -->")}
${p("style",` ${c("css-lube")}=${l("v1.0.0")}`,`
	${h(".c\\=red",["color","red"])}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
`)}

${f("<!-- In system theme, the dark mode style is applied as a media query -->")}
${p("style",` ${c("css-lube")}=${l("v1.0.0")}`,`
	${h(".c\\=red",["color","red"])}
	${V("@media")} ${o("(")}${c("prefers-color-scheme")}:${l("dark",!1)}${o("){")}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
	${o("}")}
`)}

${p("span",` ${c("class")}=${l("c=red @dark@c=blue")}`,`
	<span class="td=line-through">{ color: red }</span>
	<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
`)}

${p("script","",`
	${c("localStorage")}.${b("setItem")}${o("(")}${l("THEME")}, ${l("LIGHT")}${o(")")} ${f("// if THEME is not DARK and true, light theme is applied")}
	${c("localStorage")}.${b("setItem")}${o("(")}${l("THEME")}, ${l("DARK")}${o(")")} ${f("// if THEME is DARK, dark theme is applied")}
	${c("localStorage")}.${b("removeItem")}${o("(")}${l("THEME")}${o(")")} ${f("// if THEME is false, theme is follow system settings")}
	${c("window")}${o("[")}${l("CSS Lube")}${o("]()")} ${f("// update style sheet")}
`)}`]}class O extends T{constructor(e){super(),x(this,e,N,J,I,{})}}function U(n){let e;return{c(){e=z("Dark Mode")},l(a){e=B(a,"Dark Mode")},m(a,s){u(a,e,s)},d(a){a&&m(e)}}}function W(n){let e,a,s,r,i,d,_;return a=new G({props:{$$slots:{default:[U]},$$scope:{ctx:n}}}),d=new O({}),{c(){e=g(),y(a.$$.fragment),s=g(),r=R("div"),i=g(),y(d.$$.fragment),this.h()},l(t){K("svelte-tsmyjm",document.head).forEach(m),e=k(t),E(a.$$.fragment,t),s=k(t),r=L(t,"DIV",{class:!0}),P(r).forEach(m),i=k(t),E(d.$$.fragment,t),this.h()},h(){document.title="Dark Mode | CSS Lube",j(r,"class","h=1")},m(t,$){u(t,e,$),H(a,t,$),u(t,s,$),u(t,r,$),u(t,i,$),H(d,t,$),_=!0},p(t,[$]){const D={};$&1&&(D.$$scope={dirty:$,ctx:t}),a.$set(D)},i(t){_||(M(a.$$.fragment,t),M(d.$$.fragment,t),_=!0)},o(t){v(a.$$.fragment,t),v(d.$$.fragment,t),_=!1},d(t){t&&m(e),w(a,t),t&&m(s),t&&m(r),t&&m(i),w(d,t)}}}class te extends T{constructor(e){super(),x(this,e,null,W,I,{})}}export{te as component};
