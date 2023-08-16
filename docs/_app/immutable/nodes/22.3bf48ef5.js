import{s as I,a as d,f as w,N as J,d as o,c,g,h as D,y as L,j as H,i,l as N,m as V,u as q}from"../chunks/scheduler.f6e53d32.js";import{S as y,i as A,b as S,d as C,m as v,a as b,t as M,e as j}from"../chunks/index.c26f0603.js";import{C as B}from"../chunks/CodePage.9e282020.js";import{H as R}from"../chunks/H5.ebc619f0.js";import{J as z}from"../chunks/JsMap.5e140c7b.js";function F(p){let e;return{c(){e=N("Shorthand Medias")},l(a){e=V(a,"Shorthand Medias")},m(a,n){i(a,e,n)},d(a){a&&o(e)}}}function G(p){let e,a;return e=new z({props:{name:"shorthand_for_media_condition",json:`[
	["dark", "(prefers-color-scheme:dark)"],

	["sm", "(min-width:640px)"],
	["md", "(min-width:768px)"],
	["lg", "(min-width:1024px)"],
	["xl", "(min-width:1280px)"],
	["2xl", "(min-width:1536px)"],

	["!sm", "(max-width:639px)"],
	["!md", "(max-width:767px)"],
	["!lg", "(max-width:1023px)"],
	["!xl", "(max-width:1280px)"],
	["!2xl", "(max-width:1536px)"]
]`}}),{c(){S(e.$$.fragment)},l(n){C(e.$$.fragment,n)},m(n,m){v(e,n,m),a=!0},p:q,i(n){a||(b(e.$$.fragment,n),a=!0)},o(n){M(e.$$.fragment,n),a=!1},d(n){j(e,n)}}}function K(p){let e,a,n,m,$,l,E="Shorthand for Media Condition of CSS Lube.",h,u,f,_,r,x;return a=new R({props:{$$slots:{default:[F]},$$scope:{ctx:p}}}),r=new B({props:{$$slots:{default:[G]},$$scope:{ctx:p}}}),{c(){e=d(),S(a.$$.fragment),n=d(),m=w("div"),$=d(),l=w("span"),l.textContent=E,h=w("br"),u=d(),f=w("div"),_=d(),S(r.$$.fragment),this.h()},l(t){J("svelte-1ons4s0",document.head).forEach(o),e=c(t),C(a.$$.fragment,t),n=c(t),m=g(t,"DIV",{class:!0}),D(m).forEach(o),$=c(t),l=g(t,"SPAN",{"data-svelte-h":!0}),L(l)!=="svelte-18deryf"&&(l.textContent=E),h=g(t,"BR",{}),u=c(t),f=g(t,"DIV",{class:!0}),D(f).forEach(o),_=c(t),C(r.$$.fragment,t),this.h()},h(){document.title="Shorthand for Media Condition | CSS Lube",H(m,"class","h=1"),H(f,"class","h=2")},m(t,s){i(t,e,s),v(a,t,s),i(t,n,s),i(t,m,s),i(t,$,s),i(t,l,s),i(t,h,s),i(t,u,s),i(t,f,s),i(t,_,s),v(r,t,s),x=!0},p(t,[s]){const P={};s&1&&(P.$$scope={dirty:s,ctx:t}),a.$set(P);const k={};s&1&&(k.$$scope={dirty:s,ctx:t}),r.$set(k)},i(t){x||(b(a.$$.fragment,t),b(r.$$.fragment,t),x=!0)},o(t){M(a.$$.fragment,t),M(r.$$.fragment,t),x=!1},d(t){t&&(o(e),o(n),o(m),o($),o(l),o(h),o(u),o(f),o(_)),j(a,t),j(r,t)}}}class X extends y{constructor(e){super(),A(this,e,null,K,I,{})}}export{X as component};
