import{s as H,J as I,e as C,K as j,i as p,u as q,d as r,a as h,f as D,I as J,c as g,g as K,h as L,j as T,l as V,m as k}from"../chunks/scheduler.37114a5d.js";import{S,i as E,b as _,d as y,m as b,a as w,t as x,e as v}from"../chunks/index.80e0ab0e.js";import{H as z}from"../chunks/H5.c701e45b.js";import{C as A}from"../chunks/CodePage.aad8268b.js";import{h as $,a as m,n as u,s as f,c as B}from"../chunks/highlighter.e3fc48dc.js";function F(n){let e,s;return{c(){e=new I(!1),s=C(),this.h()},l(t){e=j(t,!1),s=C(),this.h()},h(){e.a=s},m(t,o){e.m(n[0],t,o),p(t,s,o)},p:q,d(t){t&&(r(s),e.d())}}}function G(n){let e,s;return e=new A({props:{$$slots:{default:[F]},$$scope:{ctx:n}}}),{c(){_(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){b(e,t,o),s=!0},p(t,[o]){const c={};o&2&&(c.$$scope={dirty:o,ctx:t}),e.$set(c)},i(t){s||(w(e.$$.fragment,t),s=!0)},o(t){x(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function M(n){return[`${$("style",` ${u("css-lube")}=${f("v1.2.1")}`,`
	${m("<span class='bold'>[class][class][class]</span>.c\\=yellow\\!\\!\\!",["color","yellow"])}
	${m("<span class='bold'>[class][class]</span>.c\\=orange\\!\\!",["color","orange"])}
	${m("<span class='bold'>[class]</span>.c\\=red\\!",["color","red"])}
	${m(".\\>span\\/c\\=red>span",["color","red"])}
	${m(".c\\=blue",["color","blue"])}
	${m("<span class='bold'>[class]</span>.c\\=blue\\!",["color","blue"])}
`)}

${B("<!-- If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important -->")}
${$("span",` ${u("class")}=${f("c=yellow!!! c=orange!! c=red!")}`,`
	{ color: yellow }
	<span class="td=line-through">{ color: orange }</span>
	<span class="td=line-through">{ color: red }</span>
`)}
${$("div",` ${u("class")}=${f(">span/c=red")}`,`
	${$("span","",`
		{ color: red }
	`)}
	${$("span",` ${u("class")}=${f("c=blue")}`,`
		{ color: red }
		<span class="td=line-through">{ color: blue }</span>
	`)}
	${$("span",` ${u("class")}=${f("c=blue!")}`,`
		<span class="td=line-through">{ color: red }</span>
		{ color: blue }
	`)}
`)}`]}class N extends S{constructor(e){super(),E(this,e,M,G,H,{})}}function O(n){let e;return{c(){e=V("Priority")},l(s){e=k(s,"Priority")},m(s,t){p(s,e,t)},d(s){s&&r(e)}}}function Q(n){let e,s,t,o,c,i,d;return s=new z({props:{$$slots:{default:[O]},$$scope:{ctx:n}}}),i=new N({}),{c(){e=h(),_(s.$$.fragment),t=h(),o=D("div"),c=h(),_(i.$$.fragment),this.h()},l(a){J("svelte-13wj7fl",document.head).forEach(r),e=g(a),y(s.$$.fragment,a),t=g(a),o=K(a,"DIV",{class:!0}),L(o).forEach(r),c=g(a),y(i.$$.fragment,a),this.h()},h(){document.title="Priority | CSS Lube",T(o,"class","h=1")},m(a,l){p(a,e,l),b(s,a,l),p(a,t,l),p(a,o,l),p(a,c,l),b(i,a,l),d=!0},p(a,[l]){const P={};l&1&&(P.$$scope={dirty:l,ctx:a}),s.$set(P)},i(a){d||(w(s.$$.fragment,a),w(i.$$.fragment,a),d=!0)},o(a){x(s.$$.fragment,a),x(i.$$.fragment,a),d=!1},d(a){a&&(r(e),r(t),r(o),r(c)),v(s,a),v(i,a)}}}class Z extends S{constructor(e){super(),E(this,e,null,Q,H,{})}}export{Z as component};
