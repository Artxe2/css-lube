import{S as y,i as P,s as H,y as _,z as g,A as b,g as w,d as x,B as C,R as E,e as v,T,b as $,D as q,h as r,a as u,k as z,Q as D,c as f,l as A,m as B,n as I,q as L,r as Q}from"../chunks/index.e72184b5.js";import{H as R}from"../chunks/H5.546393c9.js";import{C as V}from"../chunks/CodePage.abe9804b.js";import{c as k,h as m,n as d,s as h}from"../chunks/highlighter.d5787206.js";function j(o){let e,a;return{c(){e=new E(!1),a=v(),this.h()},l(s){e=T(s,!1),a=v(),this.h()},h(){e.a=a},m(s,n){e.m(o[0],s,n),$(s,a,n)},p:q,d(s){s&&r(a),s&&e.d()}}}function F(o){let e,a;return e=new V({props:{$$slots:{default:[j]},$$scope:{ctx:o}}}),{c(){_(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){b(e,s,n),a=!0},p(s,[n]){const c={};n&2&&(c.$$scope={dirty:n,ctx:s}),e.$set(c)},i(s){a||(w(e.$$.fragment,s),a=!0)},o(s){x(e.$$.fragment,s),a=!1},d(s){C(e,s)}}}function G(o){return[`${k("<!-- Classes that start with special characters applied selectors and use slash (/) to distinguish between selectors and styles -->")}
${m("div",` ${d("class")}=${h(">span.target/bgc=red<span class='inline-block w=0'> </span>_span:nth-of-type(2n+1)/bgc=blue")}`,`
	${m("span","",`
		{ background-color: blue }
	`)}
	${m("span",` ${d("class")}=${h("target")}`,`
		{ background-color: red }
	`)}
	${m("span","",`
		{ background-color: blue }
	`)}
	${m("span","","")}
`)}

${k("<!-- The pseudo class is also applied in the same way as the selector -->")}
${m("span",` ${d("class")}=${h(":active/bgc=blue;c=red")}`,`
	:active { background-color:blue;color:red }
`)}`]}class J extends y{constructor(e){super(),P(this,e,G,F,H,{})}}function K(o){let e;return{c(){e=L("Selector & Pseudo Class")},l(a){e=Q(a,"Selector & Pseudo Class")},m(a,s){$(a,e,s)},d(a){a&&r(e)}}}function M(o){let e,a,s,n,c,i,p;return a=new R({props:{$$slots:{default:[K]},$$scope:{ctx:o}}}),i=new J({}),{c(){e=u(),_(a.$$.fragment),s=u(),n=z("div"),c=u(),_(i.$$.fragment),this.h()},l(t){D("svelte-dzw6ps",document.head).forEach(r),e=f(t),g(a.$$.fragment,t),s=f(t),n=A(t,"DIV",{class:!0}),B(n).forEach(r),c=f(t),g(i.$$.fragment,t),this.h()},h(){document.title="Selector & Pseudo Class | CSS Lubricant",I(n,"class","h=1")},m(t,l){$(t,e,l),b(a,t,l),$(t,s,l),$(t,n,l),$(t,c,l),b(i,t,l),p=!0},p(t,[l]){const S={};l&1&&(S.$$scope={dirty:l,ctx:t}),a.$set(S)},i(t){p||(w(a.$$.fragment,t),w(i.$$.fragment,t),p=!0)},o(t){x(a.$$.fragment,t),x(i.$$.fragment,t),p=!1},d(t){t&&r(e),C(a,t),t&&r(s),t&&r(n),t&&r(c),C(i,t)}}}class X extends y{constructor(e){super(),P(this,e,null,M,H,{})}}export{X as component};
