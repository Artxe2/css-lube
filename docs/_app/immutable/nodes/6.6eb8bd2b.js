import{s as C,J as E,e as w,K as q,i as m,u as z,d as l,a as u,f as I,I as P,c as p,g as j,h as A,j as D,l as J,m as K}from"../chunks/scheduler.37114a5d.js";import{S as H,i as S,b as g,d as b,m as x,a as y,t as v,e as B}from"../chunks/index.80e0ab0e.js";import{H as L}from"../chunks/H5.c701e45b.js";import{C as M}from"../chunks/CodePage.aad8268b.js";import{c as f,h as d,n as h,s as _}from"../chunks/highlighter.e3fc48dc.js";function T(o){let e,t;return{c(){e=new E(!1),t=w(),this.h()},l(s){e=q(s,!1),t=w(),this.h()},h(){e.a=t},m(s,n){e.m(o[0],s,n),m(s,t,n)},p:z,d(s){s&&(l(t),e.d())}}}function V(o){let e,t;return e=new M({props:{$$slots:{default:[T]},$$scope:{ctx:o}}}),{c(){g(e.$$.fragment)},l(s){b(e.$$.fragment,s)},m(s,n){x(e,s,n),t=!0},p(s,[n]){const r={};n&2&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function F(o){return[`${f("<!-- By default, class names behave like inline styles -->")}
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
`)}`]}class G extends H{constructor(e){super(),S(this,e,F,V,C,{})}}function N(o){let e;return{c(){e=J("Basic")},l(t){e=K(t,"Basic")},m(t,s){m(t,e,s)},d(t){t&&l(e)}}}function O(o){let e,t,s,n,r,i,$;return t=new L({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),i=new G({}),{c(){e=u(),g(t.$$.fragment),s=u(),n=I("div"),r=u(),g(i.$$.fragment),this.h()},l(a){P("svelte-d012lx",document.head).forEach(l),e=p(a),b(t.$$.fragment,a),s=p(a),n=j(a,"DIV",{class:!0}),A(n).forEach(l),r=p(a),b(i.$$.fragment,a),this.h()},h(){document.title="Basic | CSS Lube",D(n,"class","h=1")},m(a,c){m(a,e,c),x(t,a,c),m(a,s,c),m(a,n,c),m(a,r,c),x(i,a,c),$=!0},p(a,[c]){const k={};c&1&&(k.$$scope={dirty:c,ctx:a}),t.$set(k)},i(a){$||(y(t.$$.fragment,a),y(i.$$.fragment,a),$=!0)},o(a){v(t.$$.fragment,a),v(i.$$.fragment,a),$=!1},d(a){a&&(l(e),l(s),l(n),l(r)),B(t,a),B(i,a)}}}class Y extends H{constructor(e){super(),S(this,e,null,O,C,{})}}export{Y as component};
