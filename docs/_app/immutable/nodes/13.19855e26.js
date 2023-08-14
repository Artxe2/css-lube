import{s as C,M as E,e as w,N as q,i as m,u as z,d as l,a as u,f as L,L as M,c as p,g as P,h as j,j as A,l as D,m as I}from"../chunks/scheduler.526307f2.js";import{S as H,i as S,b as g,d as b,m as x,a as y,t as v,e as B}from"../chunks/index.cddfbdc7.js";import{H as N}from"../chunks/H5.f9dda08d.js";import{C as T}from"../chunks/CodePage.93f49b6b.js";import{a as f,h as d,n as h,s as _}from"../chunks/highlighter.365a0e63.js";function V(c){let e,t;return{c(){e=new E(!1),t=w(),this.h()},l(s){e=q(s,!1),t=w(),this.h()},h(){e.a=t},m(s,n){e.m(c[0],s,n),m(s,t,n)},p:z,d(s){s&&(l(t),e.d())}}}function F(c){let e,t;return e=new T({props:{$$slots:{default:[V]},$$scope:{ctx:c}}}),{c(){g(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,n){x(e,s,n),t=!0},p(s,[n]){const r={};n&2&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function G(c){return[`${f("<!-- By default, class names behave like inline styles -->")}
${d("span",` ${h("class")}=${_("background-color:red color:blue")}`,`
{ background-color: red }
{ color: blue }
`)}

${f(`<!-- Because class names use spaces( ) as delimiters, values that contain spaces should use underscores(_) instead of spaces.
A colon(:) can be included in the class name, but can be replaced by an equal sign(=) depending on your preference -->`)}
${d("span",` ${h("class")}=${_("border=1px_solid_black")}`,`
{ border: 1px solid black }
`)}

${f("<!-- Multiple styles or other attributes are also freely applicable in basic syntax -->")}
${d("span",` ${h("class")}=${_("color=red;font-size=calc(8px*2)!important")}`,`
{ color:red;font-size:calc(8px*2)!important }
`)}`]}class J extends H{constructor(e){super(),S(this,e,G,F,C,{})}}function K(c){let e;return{c(){e=D("Basic")},l(t){e=I(t,"Basic")},m(t,s){m(t,e,s)},d(t){t&&l(e)}}}function O(c){let e,t,s,n,r,i,$;return t=new N({props:{$$slots:{default:[K]},$$scope:{ctx:c}}}),i=new J({}),{c(){e=u(),g(t.$$.fragment),s=u(),n=L("div"),r=u(),g(i.$$.fragment),this.h()},l(a){M("svelte-d012lx",document.head).forEach(l),e=p(a),b(t.$$.fragment,a),s=p(a),n=P(a,"DIV",{class:!0}),j(n).forEach(l),r=p(a),b(i.$$.fragment,a),this.h()},h(){document.title="Basic | CSS Lube",A(n,"class","h=1")},m(a,o){m(a,e,o),x(t,a,o),m(a,s,o),m(a,n,o),m(a,r,o),x(i,a,o),$=!0},p(a,[o]){const k={};o&1&&(k.$$scope={dirty:o,ctx:a}),t.$set(k)},i(a){$||(y(t.$$.fragment,a),y(i.$$.fragment,a),$=!0)},o(a){v(t.$$.fragment,a),v(i.$$.fragment,a),$=!1},d(a){a&&(l(e),l(s),l(n),l(r)),B(t,a),B(i,a)}}}class Y extends H{constructor(e){super(),S(this,e,null,O,C,{})}}export{Y as component};
