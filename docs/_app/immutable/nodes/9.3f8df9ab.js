import{s as D,J as K,e as x,K as L,i as p,u as R,d as m,a as g,f as q,I as j,c as b,g as P,h as F,j as G,l as J,m as U}from"../chunks/scheduler.a569b206.js";import{S as C,i as A,b as y,d as H,m as M,a as S,t as I,e as T}from"../chunks/index.5d932454.js";import{H as V}from"../chunks/H5.43107fd8.js";import{C as z}from"../chunks/CodePage.eaf4ef53.js";import{c as f,h,a as u,k,b as r,n as o,s as l,f as E}from"../chunks/highlighter.e3fc48dc.js";import{v as w}from"../chunks/version.0f249848.js";function B(n){let e,t;return{c(){e=new K(!1),t=x(),this.h()},l(s){e=L(s,!1),t=x(),this.h()},h(){e.a=t},m(s,$){e.m(n[0],s,$),p(s,t,$)},p:R,d(s){s&&(m(t),e.d())}}}function N(n){let e,t;return e=new z({props:{$$slots:{default:[B]},$$scope:{ctx:n}}}),{c(){y(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,$){M(e,s,$),t=!0},p(s,[$]){const i={};$&2&&(i.$$scope={dirty:$,ctx:s}),e.$set(i)},i(s){t||(S(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){T(e,s)}}}function O(n){return[`${f("<!-- In light theme, dark mode styles are disabled with FALSE(width<0) -->")}
${h("style",` ${o("css-lube")}=${l(w)}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("width")}<${l("0",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}

${f("<!-- In dark theme, dark mode styles are applied with TRUE(width>0) -->")}
${h("style",` ${o("css-lube")}=${l(w)}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("width")}>${l("0",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}
${f("<!-- In system theme, the dark mode style is applied as a media query -->")}
${h("style",` ${o("css-lube")}=${l(w)}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("prefers-color-scheme")}:${l("dark",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}

${h("span",` ${o("class")}=${l("c=red @dark@c=blue")}`,`
	<span class="td=line-through">{ color: red }</span>
	<span class="bold c=--electric-violet @dark@c=--bouquet">{ color: blue }</span>
`)}

${h("script","",`
	${o("localStorage")}.${E("setItem")}${r("(")}${l("THEME")}, ${l("LIGHT")}${r(")")} ${f("// if THEME is not DARK and true, light theme is applied")}
	${o("localStorage")}.${E("setItem")}${r("(")}${l("THEME")}, ${l("DARK")}${r(")")} ${f("// if THEME is DARK, dark theme is applied")}
	${o("localStorage")}.${E("removeItem")}${r("(")}${l("THEME")}${r(")")} ${f("// if THEME is false, theme is follow system settings")}
	${o("window")}${r("[")}${l("CSS Lube")}${r("]()")} ${f("// update style sheet")}
`)}`]}class Q extends C{constructor(e){super(),A(this,e,O,N,D,{})}}function W(n){let e;return{c(){e=J("Dark Mode")},l(t){e=U(t,"Dark Mode")},m(t,s){p(t,e,s)},d(t){t&&m(e)}}}function X(n){let e,t,s,$,i,d,_;return t=new V({props:{$$slots:{default:[W]},$$scope:{ctx:n}}}),d=new Q({}),{c(){e=g(),y(t.$$.fragment),s=g(),$=q("div"),i=g(),y(d.$$.fragment),this.h()},l(a){j("svelte-tsmyjm",document.head).forEach(m),e=b(a),H(t.$$.fragment,a),s=b(a),$=P(a,"DIV",{class:!0}),F($).forEach(m),i=b(a),H(d.$$.fragment,a),this.h()},h(){document.title="Dark Mode | CSS Lube",G($,"class","h=1")},m(a,c){p(a,e,c),M(t,a,c),p(a,s,c),p(a,$,c),p(a,i,c),M(d,a,c),_=!0},p(a,[c]){const v={};c&1&&(v.$$scope={dirty:c,ctx:a}),t.$set(v)},i(a){_||(S(t.$$.fragment,a),S(d.$$.fragment,a),_=!0)},o(a){I(t.$$.fragment,a),I(d.$$.fragment,a),_=!1},d(a){a&&(m(e),m(s),m($),m(i)),T(t,a),T(d,a)}}}class re extends C{constructor(e){super(),A(this,e,null,X,D,{})}}export{re as component};
