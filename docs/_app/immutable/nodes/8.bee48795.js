import{s as C,L as E,e as w,M as q,i as m,u as z,d as l,a as u,f as L,N as M,c as p,g as P,h as j,j as A,l as D,m as I}from"../chunks/scheduler.f6e53d32.js";import{S as H,i as S,b as g,d as b,m as x,a as y,t as v,e as B}from"../chunks/index.c26f0603.js";import{H as N}from"../chunks/H5.ebc619f0.js";import{C as T}from"../chunks/CodePage.9e282020.js";import{c as f,h as d,n as h,s as _}from"../chunks/highlighter.ff4ee7c2.js";function V(o){let e,t;return{c(){e=new E(!1),t=w(),this.h()},l(s){e=q(s,!1),t=w(),this.h()},h(){e.a=t},m(s,n){e.m(o[0],s,n),m(s,t,n)},p:z,d(s){s&&(l(t),e.d())}}}function F(o){let e,t;return e=new T({props:{$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,n){x(e,s,n),t=!0},p(s,[n]){const r={};n&2&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function G(o){return[`${f("<!-- By default, class names behave like inline styles -->")}
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
`)}`]}class J extends H{constructor(e){super(),S(this,e,G,F,C,{})}}function K(o){let e;return{c(){e=D("Basic")},l(t){e=I(t,"Basic")},m(t,s){m(t,e,s)},d(t){t&&l(e)}}}function O(o){let e,t,s,n,r,i,$;return t=new N({props:{$$slots:{default:[K]},$$scope:{ctx:o}}}),i=new J({}),{c(){e=u(),g(t.$$.fragment),s=u(),n=L("div"),r=u(),g(i.$$.fragment),this.h()},l(a){M("svelte-d012lx",document.head).forEach(l),e=p(a),b(t.$$.fragment,a),s=p(a),n=P(a,"DIV",{class:!0}),j(n).forEach(l),r=p(a),b(i.$$.fragment,a),this.h()},h(){document.title="Basic | CSS Lube",A(n,"class","h=1")},m(a,c){m(a,e,c),x(t,a,c),m(a,s,c),m(a,n,c),m(a,r,c),x(i,a,c),$=!0},p(a,[c]){const k={};c&1&&(k.$$scope={dirty:c,ctx:a}),t.$set(k)},i(a){$||(y(t.$$.fragment,a),y(i.$$.fragment,a),$=!0)},o(a){v(t.$$.fragment,a),v(i.$$.fragment,a),$=!1},d(a){a&&(l(e),l(s),l(n),l(r)),B(t,a),B(i,a)}}}class Y extends H{constructor(e){super(),S(this,e,null,O,C,{})}}export{Y as component};
