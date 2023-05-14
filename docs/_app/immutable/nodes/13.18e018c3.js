import{S as H,i as S,s as z,y as g,z as y,A as b,g as x,d as w,B as P,P as E,e as C,Q as I,b as p,D as q,h as r,a as _,k as D,R as k,c as h,l as A,m as B,n as Q,q as R,r as T}from"../chunks/index.d48826db.js";import{H as V}from"../chunks/H5.e3e07c63.js";import{C as j}from"../chunks/CodePage.d79d6b32.js";import{h as $,b as m,n as f,s as u,c as F}from"../chunks/highlighter.71dae262.js";function G(o){let e,a;return{c(){e=new E(!1),a=C(),this.h()},l(t){e=I(t,!1),a=C(),this.h()},h(){e.a=a},m(t,n){e.m(o[0],t,n),p(t,a,n)},p:q,d(t){t&&r(a),t&&e.d()}}}function J(o){let e,a;return e=new j({props:{$$slots:{default:[G]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){b(e,t,n),a=!0},p(t,[n]){const c={};n&2&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){a||(x(e.$$.fragment,t),a=!0)},o(t){w(e.$$.fragment,t),a=!1},d(t){P(e,t)}}}function K(o){return[`${$("style",` ${f("instant-css")}=${u("v0.6.11")}`,`
	${m("<span class='bold'>[class][class][class]</span>.c\\=yellow\\!\\!\\!",["color","yellow"])}
	${m("<span class='bold'>[class][class]</span>.c\\=orange\\!\\!",["color","orange"])}
	${m("<span class='bold'>[class]</span>.c\\=red\\!",["color","red"])}
	${m(".\\>span\\/c\\=red>span",["color","red"])}
	${m(".c\\=blue",["color","blue"])}
	${m("<span class='bold'>[class]</span>.c\\=blue\\!",["color","blue"])}
`)}

${F("<!-- If you add an exclamation point (!) after the class name, you can change the style's priority using the selector priority instead of important -->")}
${$("span",` ${f("class")}=${u("c=yellow!!! c=orange!! c=red!")}`,"i'm a yellow")}
${$("div",` ${f("class")}=${u(">span/c=red")}`,`
	${$("span","","i'm a red")}
	${$("span",` ${f("class")}=${u("c=blue")}`,"i'm a red")}
	${$("span",` ${f("class")}=${u("c=blue!")}`,"i'm a blue")}
`)}`]}class L extends H{constructor(e){super(),S(this,e,K,J,z,{})}}function M(o){let e;return{c(){e=R("Priority")},l(a){e=T(a,"Priority")},m(a,t){p(a,e,t)},d(a){a&&r(e)}}}function N(o){let e,a,t,n,c,i,d;return a=new V({props:{$$slots:{default:[M]},$$scope:{ctx:o}}}),i=new L({}),{c(){e=_(),g(a.$$.fragment),t=_(),n=D("div"),c=_(),g(i.$$.fragment),this.h()},l(s){k("svelte-1bzzfpa",document.head).forEach(r),e=h(s),y(a.$$.fragment,s),t=h(s),n=A(s,"DIV",{class:!0}),B(n).forEach(r),c=h(s),y(i.$$.fragment,s),this.h()},h(){document.title="Priority | Instant CSS",Q(n,"class","h=1")},m(s,l){p(s,e,l),b(a,s,l),p(s,t,l),p(s,n,l),p(s,c,l),b(i,s,l),d=!0},p(s,[l]){const v={};l&1&&(v.$$scope={dirty:l,ctx:s}),a.$set(v)},i(s){d||(x(a.$$.fragment,s),x(i.$$.fragment,s),d=!0)},o(s){w(a.$$.fragment,s),w(i.$$.fragment,s),d=!1},d(s){s&&r(e),P(a,s),s&&r(t),s&&r(n),s&&r(c),P(i,s)}}}class Y extends H{constructor(e){super(),S(this,e,null,N,z,{})}}export{Y as component};
