import{S as x,i as T,s as S,y as E,z as b,A as H,g as I,d as M,B as v,P as C,e as D,Q as q,b as u,D as A,h as c,a as g,k as R,R as K,c as k,l as P,m as z,n as B,q as G,r as L}from"../chunks/index.d48826db.js";import{H as Q}from"../chunks/H5.e3e07c63.js";import{C as V}from"../chunks/CodePage.d79d6b32.js";import{c as f,h as p,b as h,n as m,s as $,k as j,e as o,f as y}from"../chunks/highlighter.71dae262.js";function F(n){let e,a;return{c(){e=new C(!1),a=D(),this.h()},l(s){e=q(s,!1),a=D(),this.h()},h(){e.a=a},m(s,r){e.m(n[0],s,r),u(s,a,r)},p:A,d(s){s&&c(a),s&&e.d()}}}function J(n){let e,a;return e=new V({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,r){H(e,s,r),a=!0},p(s,[r]){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){a||(I(e.$$.fragment,s),a=!0)},o(s){M(e.$$.fragment,s),a=!1},d(s){v(e,s)}}}function N(n){return[`${f("<!-- In light theme, dark mode styles are disabled -->")}
${p("style",` ${m("instant-css")}=${$("v0.6.11")}`,`
	${h(".c\\=red",["color","red"])}
`)}

${f("<!-- In dark theme, dark mode styles are applied without media queries -->")}
${p("style",` ${m("instant-css")}=${$("v0.6.11")}`,`
	${h(".c\\=red",["color","red"])}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
`)}

${f("<!-- In system theme, the dark mode style is applied as a media query -->")}
${p("style",` ${m("instant-css")}=${$("v0.6.11")}`,`
	${h(".c\\=red",["color","red"])}
	${j("@media")} ${o("(")}${m("prefers-color-scheme")}:${$("dark",!1)}${o("){")}
		${h(".\\@dark\\@c\\=blue",["color","blue"])}
	${o("}")}
`)}

${p("span",` ${m("class")}=${$("c=red @dark@c=blue")}`,"I'm red letters, but in dark mode, I'm blue letters")}

${p("script","",`
	${m("localStorage")}.${y("setItem")}${o("(")}${$("THEME")}, ${$("LIGHT")}${o(")")} ${f("// if THEME is not DARK and true, light theme is applied")}
	${m("localStorage")}.${y("setItem")}${o("(")}${$("THEME")}, ${$("DARK")}${o(")")} ${f("// if THEME is DARK, dark theme is applied")}
	${m("localStorage")}.${y("removeItem")}${o("(")}${$("THEME")}${o(")")} ${f("// if THEME is false, theme is follow system settings")}
	${m("window")}${o("[")}${$("instantCss")}${o("]()")} ${f("// update style sheet")}
`)}`]}class O extends x{constructor(e){super(),T(this,e,N,J,S,{})}}function U(n){let e;return{c(){e=G("Dark Mode")},l(a){e=L(a,"Dark Mode")},m(a,s){u(a,e,s)},d(a){a&&c(e)}}}function W(n){let e,a,s,r,i,d,_;return a=new Q({props:{$$slots:{default:[U]},$$scope:{ctx:n}}}),d=new O({}),{c(){e=g(),E(a.$$.fragment),s=g(),r=R("div"),i=g(),E(d.$$.fragment),this.h()},l(t){K("svelte-1hohdyv",document.head).forEach(c),e=k(t),b(a.$$.fragment,t),s=k(t),r=P(t,"DIV",{class:!0}),z(r).forEach(c),i=k(t),b(d.$$.fragment,t),this.h()},h(){document.title="Dark Mode | Instant CSS",B(r,"class","h=1")},m(t,l){u(t,e,l),H(a,t,l),u(t,s,l),u(t,r,l),u(t,i,l),H(d,t,l),_=!0},p(t,[l]){const w={};l&1&&(w.$$scope={dirty:l,ctx:t}),a.$set(w)},i(t){_||(I(a.$$.fragment,t),I(d.$$.fragment,t),_=!0)},o(t){M(a.$$.fragment,t),M(d.$$.fragment,t),_=!1},d(t){t&&c(e),v(a,t),t&&c(s),t&&c(r),t&&c(i),v(d,t)}}}class te extends x{constructor(e){super(),T(this,e,null,W,S,{})}}export{te as component};
