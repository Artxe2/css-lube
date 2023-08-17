import{s as E,f as H,g as S,h as I,d as c,j,i as $,L as V,e as C,M as q,u as M,a as h,N,c as _,l as T,m as k}from"../chunks/scheduler.f6e53d32.js";import{S as D,i as L,b as g,d as y,m as b,a as v,t as w,e as x}from"../chunks/index.c26f0603.js";import{H as z}from"../chunks/H5.ebc619f0.js";import{C as A}from"../chunks/CodePage.9e282020.js";import{h as p,a as m,n as f,s as u,c as B}from"../chunks/highlighter.ff4ee7c2.js";import{v as F}from"../chunks/version.e0ea0666.js";function G(i){let e,s;return{c(){e=new V(!1),s=C(),this.h()},l(l){e=q(l,!1),s=C(),this.h()},h(){e.a=s},m(l,a){e.m(i[0],l,a),$(l,s,a)},p:M,d(l){l&&(c(s),e.d())}}}function J(i){let e,s,l;return s=new A({props:{$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){e=H("div"),g(s.$$.fragment),this.h()},l(a){e=S(a,"DIV",{class:!0});var o=I(e);y(s.$$.fragment,o),o.forEach(c),this.h()},h(){j(e,"class","@!lg@_pre/fs=.85 @!lg@_pre/fs=.7")},m(a,o){$(a,e,o),b(s,e,null),l=!0},p(a,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:a}),s.$set(r)},i(a){l||(v(s.$$.fragment,a),l=!0)},o(a){w(s.$$.fragment,a),l=!1},d(a){a&&c(e),x(s)}}}function K(i){return[`${p("style",` ${f("css-lube")}=${u(F)}`,`
	${m("<span class='bold'>[class][class][class]</span>.c\\=yellow\\!\\!\\!",["color","yellow"])}
	${m("<span class='bold'>[class][class]</span>.c\\=orange\\!\\!",["color","orange"])}
	${m("<span class='bold'>[class]</span>.c\\=red\\!",["color","red"])}
	${m(".\\>span\\/c\\=red>span",["color","red"])}
	${m(".c\\=blue",["color","blue"])}
	${m("<span class='bold'>[class]</span>.c\\=blue\\!",["color","blue"])}
`)}

${B("<!-- If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important -->")}
${p("span",` ${f("class")}=${u("c=yellow!!! c=orange!! c=red!")}`,`
	{ color: yellow }
	<span class="td=line-through">{ color: orange }</span>
	<span class="td=line-through">{ color: red }</span>
`)}
${p("div",` ${f("class")}=${u(">span/c=red")}`,`
	${p("span","",`
		{ color: red }
	`)}
	${p("span",` ${f("class")}=${u("c=blue")}`,`
		{ color: red }
		<span class="td=line-through">{ color: blue }</span>
	`)}
	${p("span",` ${f("class")}=${u("c=blue!")}`,`
		<span class="td=line-through">{ color: red }</span>
		{ color: blue }
	`)}
`)}`]}class O extends D{constructor(e){super(),L(this,e,K,J,E,{})}}function Q(i){let e;return{c(){e=T("Priority")},l(s){e=k(s,"Priority")},m(s,l){$(s,e,l)},d(s){s&&c(e)}}}function R(i){let e,s,l,a,o,r,d;return s=new z({props:{$$slots:{default:[Q]},$$scope:{ctx:i}}}),r=new O({}),{c(){e=h(),g(s.$$.fragment),l=h(),a=H("div"),o=h(),g(r.$$.fragment),this.h()},l(t){N("svelte-13wj7fl",document.head).forEach(c),e=_(t),y(s.$$.fragment,t),l=_(t),a=S(t,"DIV",{class:!0}),I(a).forEach(c),o=_(t),y(r.$$.fragment,t),this.h()},h(){document.title="Priority | CSS Lube",j(a,"class","h=1")},m(t,n){$(t,e,n),b(s,t,n),$(t,l,n),$(t,a,n),$(t,o,n),b(r,t,n),d=!0},p(t,[n]){const P={};n&1&&(P.$$scope={dirty:n,ctx:t}),s.$set(P)},i(t){d||(v(s.$$.fragment,t),v(r.$$.fragment,t),d=!0)},o(t){w(s.$$.fragment,t),w(r.$$.fragment,t),d=!1},d(t){t&&(c(e),c(l),c(a),c(o)),x(s,t),x(r,t)}}}class es extends D{constructor(e){super(),L(this,e,null,R,E,{})}}export{es as component};
