import{s as x,J as A,e as T,K,i as p,u as L,d as m,a as g,f as R,I as q,c as b,g as j,h as P,j as F,l as G,m as J}from"../chunks/scheduler.37114a5d.js";import{S as D,i as C,b as w,d as y,m as H,a as M,t as S,e as v}from"../chunks/index.80e0ab0e.js";import{H as U}from"../chunks/H5.c701e45b.js";import{C as V}from"../chunks/CodePage.aad8268b.js";import{c as f,h,a as u,k,b as r,n as o,s as l,f as E}from"../chunks/highlighter.e3fc48dc.js";function z(n){let e,t;return{c(){e=new A(!1),t=T(),this.h()},l(s){e=K(s,!1),t=T(),this.h()},h(){e.a=t},m(s,$){e.m(n[0],s,$),p(s,t,$)},p:L,d(s){s&&(m(t),e.d())}}}function B(n){let e,t;return e=new V({props:{$$slots:{default:[z]},$$scope:{ctx:n}}}),{c(){w(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,$){H(e,s,$),t=!0},p(s,[$]){const i={};$&2&&(i.$$scope={dirty:$,ctx:s}),e.$set(i)},i(s){t||(M(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){v(e,s)}}}function N(n){return[`${f("<!-- In light theme, dark mode styles are disabled with FALSE(width<0) -->")}
${h("style",` ${o("css-lube")}=${l("v1.1.0")}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("width")}<${l("0",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}

${f("<!-- In dark theme, dark mode styles are applied with TRUE(width>0) -->")}
${h("style",` ${o("css-lube")}=${l("v1.1.0")}`,`
	${u(".c\\=red",["color","red"])}
	${k("@media")} ${r("(")}${o("width")}>${l("0",!1)}${r("){")}
		${u(".\\@dark\\@c\\=blue",["color","blue"])}
	${r("}")}
`)}
${f("<!-- In system theme, the dark mode style is applied as a media query -->")}
${h("style",` ${o("css-lube")}=${l("v1.1.0")}`,`
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
`)}`]}class O extends D{constructor(e){super(),C(this,e,N,B,x,{})}}function Q(n){let e;return{c(){e=G("Dark Mode")},l(t){e=J(t,"Dark Mode")},m(t,s){p(t,e,s)},d(t){t&&m(e)}}}function W(n){let e,t,s,$,i,d,_;return t=new U({props:{$$slots:{default:[Q]},$$scope:{ctx:n}}}),d=new O({}),{c(){e=g(),w(t.$$.fragment),s=g(),$=R("div"),i=g(),w(d.$$.fragment),this.h()},l(a){q("svelte-tsmyjm",document.head).forEach(m),e=b(a),y(t.$$.fragment,a),s=b(a),$=j(a,"DIV",{class:!0}),P($).forEach(m),i=b(a),y(d.$$.fragment,a),this.h()},h(){document.title="Dark Mode | CSS Lube",F($,"class","h=1")},m(a,c){p(a,e,c),H(t,a,c),p(a,s,c),p(a,$,c),p(a,i,c),H(d,a,c),_=!0},p(a,[c]){const I={};c&1&&(I.$$scope={dirty:c,ctx:a}),t.$set(I)},i(a){_||(M(t.$$.fragment,a),M(d.$$.fragment,a),_=!0)},o(a){S(t.$$.fragment,a),S(d.$$.fragment,a),_=!1},d(a){a&&(m(e),m(s),m($),m(i)),v(t,a),v(d,a)}}}class se extends D{constructor(e){super(),C(this,e,null,W,x,{})}}export{se as component};
