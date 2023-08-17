import{s as P,f as k,g as E,h as H,d as c,j as q,i as m,L,e as w,M as T,u as V,a as f,N as j,c as p,l as M,m as N}from"../chunks/scheduler.f6e53d32.js";import{S as D,i as I,b as _,d as g,m as b,a as v,t as x,e as C}from"../chunks/index.c26f0603.js";import{H as z}from"../chunks/H5.ebc619f0.js";import{C as A}from"../chunks/CodePage.9e282020.js";import{c as y,h as $,n as d,s as h}from"../chunks/highlighter.ff4ee7c2.js";function B(i){let t,e;return{c(){t=new L(!1),e=w(),this.h()},l(n){t=T(n,!1),e=w(),this.h()},h(){t.a=e},m(n,a){t.m(i[0],n,a),m(n,e,a)},p:V,d(n){n&&(c(e),t.d())}}}function F(i){let t,e,n;return e=new A({props:{$$slots:{default:[B]},$$scope:{ctx:i}}}),{c(){t=k("div"),_(e.$$.fragment),this.h()},l(a){t=E(a,"DIV",{class:!0});var l=H(t);g(e.$$.fragment,l),l.forEach(c),this.h()},h(){q(t,"class","@!lg@_pre/fs=.85 @!lg@_pre/fs=.7")},m(a,l){m(a,t,l),b(e,t,null),n=!0},p(a,[l]){const r={};l&2&&(r.$$scope={dirty:l,ctx:a}),e.$set(r)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){x(e.$$.fragment,a),n=!1},d(a){a&&c(t),C(e)}}}function G(i){return[`${y("<!-- Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles -->")}
${$("div",` ${d("class")}=${h(">span.target/bgc=red _span:nth-of-type(2n+1)/bgc=blue")}`,`
	${$("span","",`
		{ background-color: blue }
	`)}
	${$("span",` ${d("class")}=${h("target")}`,`
		{ background-color: red }
	`)}
	${$("span","",`
		{ background-color: blue }
	`)}
	${$("span","","")}
`)}

${y("<!-- The pseudo class is also applied in the same way as the selector -->")}
${$("span",` ${d("class")}=${h(":active/bgc=blue;c=red")}`,`
	:active { background-color:blue;color:red }
`)}`]}class J extends D{constructor(t){super(),I(this,t,G,F,P,{})}}function K(i){let t;return{c(){t=M("Selector & Pseudo Class")},l(e){t=N(e,"Selector & Pseudo Class")},m(e,n){m(e,t,n)},d(e){e&&c(t)}}}function O(i){let t,e,n,a,l,r,u;return e=new z({props:{$$slots:{default:[K]},$$scope:{ctx:i}}}),r=new J({}),{c(){t=f(),_(e.$$.fragment),n=f(),a=k("div"),l=f(),_(r.$$.fragment),this.h()},l(s){j("svelte-bmyvbq",document.head).forEach(c),t=p(s),g(e.$$.fragment,s),n=p(s),a=E(s,"DIV",{class:!0}),H(a).forEach(c),l=p(s),g(r.$$.fragment,s),this.h()},h(){document.title="Selector & Pseudo Class | CSS Lube",q(a,"class","h=1")},m(s,o){m(s,t,o),b(e,s,o),m(s,n,o),m(s,a,o),m(s,l,o),b(r,s,o),u=!0},p(s,[o]){const S={};o&1&&(S.$$scope={dirty:o,ctx:s}),e.$set(S)},i(s){u||(v(e.$$.fragment,s),v(r.$$.fragment,s),u=!0)},o(s){x(e.$$.fragment,s),x(r.$$.fragment,s),u=!1},d(s){s&&(c(t),c(n),c(a),c(l)),C(e,s),C(r,s)}}}class Y extends D{constructor(t){super(),I(this,t,null,O,P,{})}}export{Y as component};
