import{s as O,f as _,a as d,g as w,h as C,c as g,d as c,j as L,i as N,x as l,L as X,e as J,M as Y,u as Q,N as Z}from"../chunks/scheduler.f6e53d32.js";import{S as U,i as W,b as x,d as E,m as V,a as b,t as D,e as I}from"../chunks/index.c26f0603.js";import{C as ee}from"../chunks/CodePage.9e282020.js";import{C as te}from"../chunks/ComponentTabView.2d6dc2e6.js";import{L as M}from"../chunks/LoadingCircle.d6df7e24.js";import{h as $,k as K,n as o,s as f}from"../chunks/highlighter.ff4ee7c2.js";function ae(u){let e,n=`${$("script",` ${o("lang")}=${f("ts")}`,`
${K("import")} ${o("LoadingCircle")} ${K("from")} ${f("src/instant-ui/animations/LoadingCircle.svelte")}
`)}

${$("div",` ${o("class")}=${f("flex ai=center w=fit-content p=1 br=1")}`,`
	${$("LoadingCircle"," ",!1)}
	${$("div",` ${o("class")}=${f("w=1")}`,"")}
	${$("div",` ${o("class")}=${f("fs=.75")}`,`
		${$("LoadingCircle"," ",!1)}
	`)}
	${$("div",` ${o("class")}=${f("w=1")}`,"")}
	${$("div",` ${o("class")}=${f("fs=.5")}`,`
		${$("LoadingCircle"," ",!1)}
	`)}
	${$("div",` ${o("class")}=${f("w=1")}`,"")}
	${$("div",` ${o("class")}=${f("fs=.25")}`,`
		${$("LoadingCircle"," ",!1)}
	`)}
`)}`,a;return{c(){e=new X(!1),a=J(),this.h()},l(t){e=Y(t,!1),a=J(),this.h()},h(){e.a=a},m(t,i){e.m(n,t,i),N(t,a,i)},p:Q,d(t){t&&(c(a),e.d())}}}function se(u){let e,n,a,t,i,y,p,R,P,z,k,h,A,S,B,H,v,j,m,q;return n=new M({}),p=new M({}),h=new M({}),v=new M({}),m=new ee({props:{isCode:!0,$$slots:{default:[ae]},$$scope:{ctx:u}}}),{c(){e=_("div"),x(n.$$.fragment),a=d(),t=_("div"),i=d(),y=_("div"),x(p.$$.fragment),R=d(),P=_("div"),z=d(),k=_("div"),x(h.$$.fragment),A=d(),S=_("div"),B=d(),H=_("div"),x(v.$$.fragment),j=d(),x(m.$$.fragment),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=C(e);E(n.$$.fragment,r),a=g(r),t=w(r,"DIV",{class:!0}),C(t).forEach(c),i=g(r),y=w(r,"DIV",{class:!0});var T=C(y);E(p.$$.fragment,T),T.forEach(c),R=g(r),P=w(r,"DIV",{class:!0}),C(P).forEach(c),z=g(r),k=w(r,"DIV",{class:!0});var F=C(k);E(h.$$.fragment,F),F.forEach(c),A=g(r),S=w(r,"DIV",{class:!0}),C(S).forEach(c),B=g(r),H=w(r,"DIV",{class:!0});var G=C(H);E(v.$$.fragment,G),G.forEach(c),r.forEach(c),j=g(s),E(m.$$.fragment,s),this.h()},h(){L(t,"class","w=1"),L(y,"class","fs=.75"),L(P,"class","w=1"),L(k,"class","fs=.5"),L(S,"class","w=1"),L(H,"class","fs=.25"),L(e,"class","flex ai=center w=fit-content p=1 br=1")},m(s,r){N(s,e,r),V(n,e,null),l(e,a),l(e,t),l(e,i),l(e,y),V(p,y,null),l(e,R),l(e,P),l(e,z),l(e,k),V(h,k,null),l(e,A),l(e,S),l(e,B),l(e,H),V(v,H,null),N(s,j,r),V(m,s,r),q=!0},p(s,r){const T={};r&1&&(T.$$scope={dirty:r,ctx:s}),m.$set(T)},i(s){q||(b(n.$$.fragment,s),b(p.$$.fragment,s),b(h.$$.fragment,s),b(v.$$.fragment,s),b(m.$$.fragment,s),q=!0)},o(s){D(n.$$.fragment,s),D(p.$$.fragment,s),D(h.$$.fragment,s),D(v.$$.fragment,s),D(m.$$.fragment,s),q=!1},d(s){s&&(c(e),c(j)),I(n),I(p),I(h),I(v),I(m,s)}}}function ne(u){let e,n;return e=new te({props:{$$slots:{default:[se]},$$scope:{ctx:u}}}),{c(){x(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,t){V(e,a,t),n=!0},p(a,[t]){const i={};t&1&&(i.$$scope={dirty:t,ctx:a}),e.$set(i)},i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){D(e.$$.fragment,a),n=!1},d(a){I(e,a)}}}class re extends U{constructor(e){super(),W(this,e,null,ne,O,{})}}function ie(u){let e,n,a;return n=new re({}),{c(){e=d(),x(n.$$.fragment),this.h()},l(t){Z("svelte-1obprnd",document.head).forEach(c),e=g(t),E(n.$$.fragment,t),this.h()},h(){document.title="Loading Circle | Reference"},m(t,i){N(t,e,i),V(n,t,i),a=!0},p:Q,i(t){a||(b(n.$$.fragment,t),a=!0)},o(t){D(n.$$.fragment,t),a=!1},d(t){t&&c(e),I(n,t)}}}class de extends U{constructor(e){super(),W(this,e,null,ie,O,{})}}export{de as component};
