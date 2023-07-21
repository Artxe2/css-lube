import{s as k,J as E,e as S,K as q,i as $,u as I,d as r,a as p,f as T,I as j,c as f,g as D,h as J,j as K,l as L,m as V}from"../chunks/scheduler.37114a5d.js";import{S as P,i as H,b as _,d as g,m as b,a as v,t as w,e as x}from"../chunks/index.80e0ab0e.js";import{H as z}from"../chunks/H5.c701e45b.js";import{C as A}from"../chunks/CodePage.aad8268b.js";import{c as y,h as i,n as d,s as h}from"../chunks/highlighter.e3fc48dc.js";function B(l){let e,t;return{c(){e=new E(!1),t=S(),this.h()},l(s){e=q(s,!1),t=S(),this.h()},h(){e.a=t},m(s,n){e.m(l[0],s,n),$(s,t,n)},p:I,d(s){s&&(r(t),e.d())}}}function F(l){let e,t;return e=new A({props:{$$slots:{default:[B]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){b(e,s,n),t=!0},p(s,[n]){const c={};n&2&&(c.$$scope={dirty:n,ctx:s}),e.$set(c)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){x(e,s)}}}function G(l){return[`${y("<!-- Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles -->")}
${i("div",` ${d("class")}=${h(">span.target/bgc=red<span class='inline-block w=0'> </span>_span:nth-of-type(2n+1)/bgc=blue")}`,`
	${i("span","",`
		{ background-color: blue }
	`)}
	${i("span",` ${d("class")}=${h("target")}`,`
		{ background-color: red }
	`)}
	${i("span","",`
		{ background-color: blue }
	`)}
	${i("span","","")}
`)}

${y("<!-- The pseudo class is also applied in the same way as the selector -->")}
${i("span",` ${d("class")}=${h(":active/bgc=blue;c=red")}`,`
	:active { background-color:blue;color:red }
`)}`]}class M extends P{constructor(e){super(),H(this,e,G,F,k,{})}}function N(l){let e;return{c(){e=L("Selector & Pseudo Class")},l(t){e=V(t,"Selector & Pseudo Class")},m(t,s){$(t,e,s)},d(t){t&&r(e)}}}function O(l){let e,t,s,n,c,m,u;return t=new z({props:{$$slots:{default:[N]},$$scope:{ctx:l}}}),m=new M({}),{c(){e=p(),_(t.$$.fragment),s=p(),n=T("div"),c=p(),_(m.$$.fragment),this.h()},l(a){j("svelte-bmyvbq",document.head).forEach(r),e=f(a),g(t.$$.fragment,a),s=f(a),n=D(a,"DIV",{class:!0}),J(n).forEach(r),c=f(a),g(m.$$.fragment,a),this.h()},h(){document.title="Selector & Pseudo Class | CSS Lube",K(n,"class","h=1")},m(a,o){$(a,e,o),b(t,a,o),$(a,s,o),$(a,n,o),$(a,c,o),b(m,a,o),u=!0},p(a,[o]){const C={};o&1&&(C.$$scope={dirty:o,ctx:a}),t.$set(C)},i(a){u||(v(t.$$.fragment,a),v(m.$$.fragment,a),u=!0)},o(a){w(t.$$.fragment,a),w(m.$$.fragment,a),u=!1},d(a){a&&(r(e),r(s),r(n),r(c)),x(t,a),x(m,a)}}}class Y extends P{constructor(e){super(),H(this,e,null,O,k,{})}}export{Y as component};
