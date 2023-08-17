import{s as C,f as E,g as H,h as S,d as o,j as q,i as m,L as I,e as w,M as L,u as M,a as u,N as P,c as $,l as V,m as j}from"../chunks/scheduler.f6e53d32.js";import{S as z,i as D,b as g,d as b,m as x,a as v,t as y,e as B}from"../chunks/index.c26f0603.js";import{H as A}from"../chunks/H5.ebc619f0.js";import{C as N}from"../chunks/CodePage.9e282020.js";import{c as p,h as d,n as h,s as _}from"../chunks/highlighter.ff4ee7c2.js";function T(i){let s,e;return{c(){s=new I(!1),e=w(),this.h()},l(n){s=L(n,!1),e=w(),this.h()},h(){s.a=e},m(n,a){s.m(i[0],n,a),m(n,e,a)},p:M,d(n){n&&(o(e),s.d())}}}function F(i){let s,e,n;return e=new N({props:{$$slots:{default:[T]},$$scope:{ctx:i}}}),{c(){s=E("div"),g(e.$$.fragment),this.h()},l(a){s=H(a,"DIV",{class:!0});var l=S(s);b(e.$$.fragment,l),l.forEach(o),this.h()},h(){q(s,"class","@!lg@_pre/fs=.85 @!lg@_pre/fs=.7")},m(a,l){m(a,s,l),x(e,s,null),n=!0},p(a,[l]){const c={};l&2&&(c.$$scope={dirty:l,ctx:a}),e.$set(c)},i(a){n||(v(e.$$.fragment,a),n=!0)},o(a){y(e.$$.fragment,a),n=!1},d(a){a&&o(s),B(e)}}}function G(i){return[`${p("<!-- By default, class names behave like inline styles -->")}
${d("span",` ${h("class")}=${_("background-color:red color:blue")}`,`
{ background-color: red }
{ color: blue }
`)}

${p(`<!-- Because class names use spaces( ) as delimiters, values that contain spaces should use underscores(_) instead of spaces.
A colon(:) can be included in the class name, but can be replaced by an equal sign(=) depending on your preference -->`)}
${d("span",` ${h("class")}=${_("border=1px_solid_black")}`,`
{ border: 1px solid black }
`)}

${p("<!-- Multiple styles or other attributes are also freely applicable in basic syntax -->")}
${d("span",` ${h("class")}=${_("color=red;font-size=calc(8px*2)!important")}`,`
{ color:red;font-size:calc(8px*2)!important }
`)}`]}class J extends z{constructor(s){super(),D(this,s,G,F,C,{})}}function K(i){let s;return{c(){s=V("Basic")},l(e){s=j(e,"Basic")},m(e,n){m(e,s,n)},d(e){e&&o(s)}}}function O(i){let s,e,n,a,l,c,f;return e=new A({props:{$$slots:{default:[K]},$$scope:{ctx:i}}}),c=new J({}),{c(){s=u(),g(e.$$.fragment),n=u(),a=E("div"),l=u(),g(c.$$.fragment),this.h()},l(t){P("svelte-d012lx",document.head).forEach(o),s=$(t),b(e.$$.fragment,t),n=$(t),a=H(t,"DIV",{class:!0}),S(a).forEach(o),l=$(t),b(c.$$.fragment,t),this.h()},h(){document.title="Basic | CSS Lube",q(a,"class","h=1")},m(t,r){m(t,s,r),x(e,t,r),m(t,n,r),m(t,a,r),m(t,l,r),x(c,t,r),f=!0},p(t,[r]){const k={};r&1&&(k.$$scope={dirty:r,ctx:t}),e.$set(k)},i(t){f||(v(e.$$.fragment,t),v(c.$$.fragment,t),f=!0)},o(t){y(e.$$.fragment,t),y(c.$$.fragment,t),f=!1},d(t){t&&(o(s),o(n),o(a),o(l)),B(e,t),B(c,t)}}}class Y extends z{constructor(s){super(),D(this,s,null,O,C,{})}}export{Y as component};
