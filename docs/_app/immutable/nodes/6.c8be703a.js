import{S as C,i as H,s as S,y as b,z as g,A as x,g as y,d as v,B,R as q,e as w,T as z,b as m,D as E,h as r,a as f,k as A,Q as D,c as u,l as P,m as T,n as j,q as I,r as L}from"../chunks/index.e72184b5.js";import{H as M}from"../chunks/H5.546393c9.js";import{C as Q}from"../chunks/CodePage.abe9804b.js";import{c as p,h as d,n as _,s as h}from"../chunks/highlighter.d5787206.js";function R(o){let e,a;return{c(){e=new q(!1),a=w(),this.h()},l(t){e=z(t,!1),a=w(),this.h()},h(){e.a=a},m(t,n){e.m(o[0],t,n),m(t,a,n)},p:E,d(t){t&&r(a),t&&e.d()}}}function V(o){let e,a;return e=new Q({props:{$$slots:{default:[R]},$$scope:{ctx:o}}}),{c(){b(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){x(e,t,n),a=!0},p(t,[n]){const c={};n&2&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){v(e.$$.fragment,t),a=!1},d(t){B(e,t)}}}function F(o){return[`${p("<!-- By default, class names behave like inline styles -->")}
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
`)}`]}class G extends C{constructor(e){super(),H(this,e,F,V,S,{})}}function J(o){let e;return{c(){e=I("Basic")},l(a){e=L(a,"Basic")},m(a,t){m(a,e,t)},d(a){a&&r(e)}}}function K(o){let e,a,t,n,c,i,$;return a=new M({props:{$$slots:{default:[J]},$$scope:{ctx:o}}}),i=new G({}),{c(){e=f(),b(a.$$.fragment),t=f(),n=A("div"),c=f(),b(i.$$.fragment),this.h()},l(s){D("svelte-1j9va63",document.head).forEach(r),e=u(s),g(a.$$.fragment,s),t=u(s),n=P(s,"DIV",{class:!0}),T(n).forEach(r),c=u(s),g(i.$$.fragment,s),this.h()},h(){document.title="Basic | CSS Lubricant",j(n,"class","h=1")},m(s,l){m(s,e,l),x(a,s,l),m(s,t,l),m(s,n,l),m(s,c,l),x(i,s,l),$=!0},p(s,[l]){const k={};l&1&&(k.$$scope={dirty:l,ctx:s}),a.$set(k)},i(s){$||(y(a.$$.fragment,s),y(i.$$.fragment,s),$=!0)},o(s){v(a.$$.fragment,s),v(i.$$.fragment,s),$=!1},d(s){s&&r(e),B(a,s),s&&r(t),s&&r(n),s&&r(c),B(i,s)}}}class X extends C{constructor(e){super(),H(this,e,null,K,S,{})}}export{X as component};
