import{S as T,i as x,s as I,y as E,z as y,A as H,g as M,d as v,B as w,R as q,e as S,T as C,b as u,D as A,h as i,a as g,k as R,Q as K,c as b,l as L,m as P,n as z,q as B,r as G}from"../chunks/index.e72184b5.js";import{H as Q}from"../chunks/H5.546393c9.js";import{C as V}from"../chunks/CodePage.abe9804b.js";import{c as f,h as p,a as h,n as c,s as l,k as j,b as o,f as k}from"../chunks/highlighter.d5787206.js";function F(n){let e,a;return{c(){e=new q(!1),a=S(),this.h()},l(s){e=C(s,!1),a=S(),this.h()},h(){e.a=a},m(s,r){e.m(n[0],s,r),u(s,a,r)},p:A,d(s){s&&i(a),s&&e.d()}}}function J(n){let e,a;return e=new V({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,r){H(e,s,r),a=!0},p(s,[r]){const m={};r&2&&(m.$$scope={dirty:r,ctx:s}),e.$set(m)},i(s){a||(M(e.$$.fragment,s),a=!0)},o(s){v(e.$$.fragment,s),a=!1},d(s){w(e,s)}}}function N(n){return[`${f("<!-- In light theme, dark mode styles are disabled -->")}
${p("style",` ${c("css-lubricant")}=${l("v0.7.0")}`,`
	${h(".c\\=red",["color","red"])}
`)}

${f("<!-- In dark theme, dark mode styles are applied without media queries -->")}
${p("style",` ${c("css-lubricant")}=${l("v0.7.0")}`,`
	${h(".c\\=red",["color","red"])}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
`)}

${f("<!-- In system theme, the dark mode style is applied as a media query -->")}
${p("style",` ${c("css-lubricant")}=${l("v0.7.0")}`,`
	${h(".c\\=red",["color","red"])}
	${j("@media")} ${o("(")}${c("prefers-color-scheme")}:${l("dark",!1)}${o("){")}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
	${o("}")}
`)}

${p("span",` ${c("class")}=${l("c=red @dark@c=blue")}`,`
	<span class="td=line-through">{ color: red }</span>
	<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
`)}

${p("script","",`
	${c("localStorage")}.${k("setItem")}${o("(")}${l("THEME")}, ${l("LIGHT")}${o(")")} ${f("// if THEME is not DARK and true, light theme is applied")}
	${c("localStorage")}.${k("setItem")}${o("(")}${l("THEME")}, ${l("DARK")}${o(")")} ${f("// if THEME is DARK, dark theme is applied")}
	${c("localStorage")}.${k("removeItem")}${o("(")}${l("THEME")}${o(")")} ${f("// if THEME is false, theme is follow system settings")}
	${c("window")}${o("[")}${l("CSS Lubricant")}${o("]()")} ${f("// update style sheet")}
`)}`]}class O extends T{constructor(e){super(),x(this,e,N,J,I,{})}}function U(n){let e;return{c(){e=B("Dark Mode")},l(a){e=G(a,"Dark Mode")},m(a,s){u(a,e,s)},d(a){a&&i(e)}}}function W(n){let e,a,s,r,m,d,_;return a=new Q({props:{$$slots:{default:[U]},$$scope:{ctx:n}}}),d=new O({}),{c(){e=g(),E(a.$$.fragment),s=g(),r=R("div"),m=g(),E(d.$$.fragment),this.h()},l(t){K("svelte-1g1gbbc",document.head).forEach(i),e=b(t),y(a.$$.fragment,t),s=b(t),r=L(t,"DIV",{class:!0}),P(r).forEach(i),m=b(t),y(d.$$.fragment,t),this.h()},h(){document.title="Dark Mode | CSS Lubricant",z(r,"class","h=1")},m(t,$){u(t,e,$),H(a,t,$),u(t,s,$),u(t,r,$),u(t,m,$),H(d,t,$),_=!0},p(t,[$]){const D={};$&1&&(D.$$scope={dirty:$,ctx:t}),a.$set(D)},i(t){_||(M(a.$$.fragment,t),M(d.$$.fragment,t),_=!0)},o(t){v(a.$$.fragment,t),v(d.$$.fragment,t),_=!1},d(t){t&&i(e),w(a,t),t&&i(s),t&&i(r),t&&i(m),w(d,t)}}}class te extends T{constructor(e){super(),x(this,e,null,W,I,{})}}export{te as component};
