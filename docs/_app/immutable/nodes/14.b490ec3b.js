import{S as k,i as P,s as H,y as _,z as g,A as b,g as v,d as w,B as x,R as q,e as S,T as E,b as $,D as T,h as r,a as p,k as D,Q as z,c as f,l as A,m as B,n as I,q as L,r as Q}from"../chunks/index.e72184b5.js";import{H as R}from"../chunks/H5.546393c9.js";import{C as V}from"../chunks/CodePage.abe9804b.js";import{c as y,h as i,n as d,s as h}from"../chunks/highlighter.e3fc48dc.js";function j(o){let e,a;return{c(){e=new q(!1),a=S(),this.h()},l(s){e=E(s,!1),a=S(),this.h()},h(){e.a=a},m(s,n){e.m(o[0],s,n),$(s,a,n)},p:T,d(s){s&&r(a),s&&e.d()}}}function F(o){let e,a;return e=new V({props:{$$slots:{default:[j]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){b(e,s,n),a=!0},p(s,[n]){const c={};n&2&&(c.$$scope={dirty:n,ctx:s}),e.$set(c)},i(s){a||(v(e.$$.fragment,s),a=!0)},o(s){w(e.$$.fragment,s),a=!1},d(s){x(e,s)}}}function G(o){return[`${y("<!-- Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles -->")}
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
`)}`]}class J extends k{constructor(e){super(),P(this,e,G,F,H,{})}}function K(o){let e;return{c(){e=L("Selector & Pseudo Class")},l(a){e=Q(a,"Selector & Pseudo Class")},m(a,s){$(a,e,s)},d(a){a&&r(e)}}}function M(o){let e,a,s,n,c,m,u;return a=new R({props:{$$slots:{default:[K]},$$scope:{ctx:o}}}),m=new J({}),{c(){e=p(),_(a.$$.fragment),s=p(),n=D("div"),c=p(),_(m.$$.fragment),this.h()},l(t){z("svelte-bmyvbq",document.head).forEach(r),e=f(t),g(a.$$.fragment,t),s=f(t),n=A(t,"DIV",{class:!0}),B(n).forEach(r),c=f(t),g(m.$$.fragment,t),this.h()},h(){document.title="Selector & Pseudo Class | CSS Lube",I(n,"class","h=1")},m(t,l){$(t,e,l),b(a,t,l),$(t,s,l),$(t,n,l),$(t,c,l),b(m,t,l),u=!0},p(t,[l]){const C={};l&1&&(C.$$scope={dirty:l,ctx:t}),a.$set(C)},i(t){u||(v(a.$$.fragment,t),v(m.$$.fragment,t),u=!0)},o(t){w(a.$$.fragment,t),w(m.$$.fragment,t),u=!1},d(t){t&&r(e),x(a,t),t&&r(s),t&&r(n),t&&r(c),x(m,t)}}}class X extends k{constructor(e){super(),P(this,e,null,M,H,{})}}export{X as component};
