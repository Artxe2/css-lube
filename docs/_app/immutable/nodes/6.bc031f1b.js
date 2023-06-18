import{S as C,i as H,s as S,y as b,z as g,A as x,g as y,d as B,B as k,R as q,e as w,T as z,b as m,D as E,h as r,a as f,k as A,Q as D,c as u,l as P,m as T,n as I,q as L,r as M}from"../chunks/index.e72184b5.js";import{H as Q}from"../chunks/H5.546393c9.js";import{C as R}from"../chunks/CodePage.abe9804b.js";import{c as p,h as d,n as _,s as h}from"../chunks/highlighter.e3fc48dc.js";function V(o){let e,a;return{c(){e=new q(!1),a=w(),this.h()},l(t){e=z(t,!1),a=w(),this.h()},h(){e.a=a},m(t,n){e.m(o[0],t,n),m(t,a,n)},p:E,d(t){t&&r(a),t&&e.d()}}}function j(o){let e,a;return e=new R({props:{$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){b(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){x(e,t,n),a=!0},p(t,[n]){const c={};n&2&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){B(e.$$.fragment,t),a=!1},d(t){k(e,t)}}}function F(o){return[`${p("<!-- By default, class names behave like inline styles -->")}
${d("span",` ${_("class")}=${h("background-color:red color:blue")}`,`
{ background-color: red }
{ color: blue }
`)}

${p(`<!-- Because class names use spaces( ) as delimiters, values that contain spaces should use underscores(_) instead of spaces.
A colon(:) can be included in the class name, but can be replaced by an equal sign(=) depending on your preference -->`)}
${d("span",` ${_("class")}=${h("border=1px_solid_black")}`,`
{ border: 1px solid black }
`)}

${p("<!-- Multiple styles or other attributes are also freely applicable in basic syntax -->")}
${d("span",` ${_("class")}=${h("color=red;font-size=calc(8px*2)!important")}`,`
{ color:red;font-size:calc(8px*2)!important }
`)}`]}class G extends C{constructor(e){super(),H(this,e,F,j,S,{})}}function J(o){let e;return{c(){e=L("Basic")},l(a){e=M(a,"Basic")},m(a,t){m(a,e,t)},d(a){a&&r(e)}}}function K(o){let e,a,t,n,c,i,$;return a=new Q({props:{$$slots:{default:[J]},$$scope:{ctx:o}}}),i=new G({}),{c(){e=f(),b(a.$$.fragment),t=f(),n=A("div"),c=f(),b(i.$$.fragment),this.h()},l(s){D("svelte-d012lx",document.head).forEach(r),e=u(s),g(a.$$.fragment,s),t=u(s),n=P(s,"DIV",{class:!0}),T(n).forEach(r),c=u(s),g(i.$$.fragment,s),this.h()},h(){document.title="Basic | CSS Lube",I(n,"class","h=1")},m(s,l){m(s,e,l),x(a,s,l),m(s,t,l),m(s,n,l),m(s,c,l),x(i,s,l),$=!0},p(s,[l]){const v={};l&1&&(v.$$scope={dirty:l,ctx:s}),a.$set(v)},i(s){$||(y(a.$$.fragment,s),y(i.$$.fragment,s),$=!0)},o(s){B(a.$$.fragment,s),B(i.$$.fragment,s),$=!1},d(s){s&&r(e),k(a,s),s&&r(t),s&&r(n),s&&r(c),k(i,s)}}}class X extends C{constructor(e){super(),H(this,e,null,K,S,{})}}export{X as component};
