import{s as Q,f as _,a as d,g as w,h as C,c as u,d as c,j as L,i as N,x as l,L as X,e as K,M as Y,u as R,N as Z}from"../chunks/scheduler.f6e53d32.js";import{S as U,i as W,b as x,d as E,m as V,a as b,t as D,e as I}from"../chunks/index.c26f0603.js";import{C as ee}from"../chunks/CodePage.9e282020.js";import{C as te}from"../chunks/ComponentTabView.2d6dc2e6.js";import{L as M}from"../chunks/LoadingCircle.d6df7e24.js";import{h as $,k as O,n as o,s as f}from"../chunks/highlighter.ff4ee7c2.js";function ae(g){let e,n=`${$("script",` ${o("lang")}=${f("ts")}`,`
${O("import")} ${o("LoadingCircle")} ${O("from")} ${f("src/instant-ui/animations/LoadingCircle.svelte")}
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
`)}`,a;return{c(){e=new X(!1),a=K(),this.h()},l(t){e=Y(t,!1),a=K(),this.h()},h(){e.a=a},m(t,i){e.m(n,t,i),N(t,a,i)},p:R,d(t){t&&(c(a),e.d())}}}function se(g){let e,n,a,t,i,y,p,z,k,A,S,h,B,q,F,j,v,P,m,T;return n=new M({}),p=new M({}),h=new M({}),v=new M({}),m=new ee({props:{isCode:!0,$$slots:{default:[ae]},$$scope:{ctx:g}}}),{c(){e=_("div"),x(n.$$.fragment),a=d(),t=_("div"),i=d(),y=_("div"),x(p.$$.fragment),z=d(),k=_("div"),A=d(),S=_("div"),x(h.$$.fragment),B=d(),q=_("div"),F=d(),j=_("div"),x(v.$$.fragment),P=d(),x(m.$$.fragment),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=C(e);E(n.$$.fragment,r),a=u(r),t=w(r,"DIV",{class:!0}),C(t).forEach(c),i=u(r),y=w(r,"DIV",{class:!0});var H=C(y);E(p.$$.fragment,H),H.forEach(c),z=u(r),k=w(r,"DIV",{class:!0}),C(k).forEach(c),A=u(r),S=w(r,"DIV",{class:!0});var G=C(S);E(h.$$.fragment,G),G.forEach(c),B=u(r),q=w(r,"DIV",{class:!0}),C(q).forEach(c),F=u(r),j=w(r,"DIV",{class:!0});var J=C(j);E(v.$$.fragment,J),J.forEach(c),r.forEach(c),P=u(s),E(m.$$.fragment,s),this.h()},h(){L(t,"class","w=1"),L(y,"class","fs=.75"),L(k,"class","w=1"),L(S,"class","fs=.5"),L(q,"class","w=1"),L(j,"class","fs=.25"),L(e,"class","flex ai=center w=fit-content p=1 br=1")},m(s,r){N(s,e,r),V(n,e,null),l(e,a),l(e,t),l(e,i),l(e,y),V(p,y,null),l(e,z),l(e,k),l(e,A),l(e,S),V(h,S,null),l(e,B),l(e,q),l(e,F),l(e,j),V(v,j,null),N(s,P,r),V(m,s,r),T=!0},p(s,r){const H={};r&1&&(H.$$scope={dirty:r,ctx:s}),m.$set(H)},i(s){T||(b(n.$$.fragment,s),b(p.$$.fragment,s),b(h.$$.fragment,s),b(v.$$.fragment,s),b(m.$$.fragment,s),T=!0)},o(s){D(n.$$.fragment,s),D(p.$$.fragment,s),D(h.$$.fragment,s),D(v.$$.fragment,s),D(m.$$.fragment,s),T=!1},d(s){s&&(c(e),c(P)),I(n),I(p),I(h),I(v),I(m,s)}}}function ne(g){let e,n;return e=new te({props:{$$slots:{default:[se]},$$scope:{ctx:g}}}),{c(){x(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,t){V(e,a,t),n=!0},p(a,[t]){const i={};t&1&&(i.$$scope={dirty:t,ctx:a}),e.$set(i)},i(a){n||(b(e.$$.fragment,a),n=!0)},o(a){D(e.$$.fragment,a),n=!1},d(a){I(e,a)}}}class re extends U{constructor(e){super(),W(this,e,null,ne,Q,{})}}function ie(g){let e,n,a;return n=new re({}),{c(){e=d(),x(n.$$.fragment),this.h()},l(t){Z("svelte-tjjyiq",document.head).forEach(c),e=u(t),E(n.$$.fragment,t),this.h()},h(){document.title="Loading Circle - CSS Lube"},m(t,i){N(t,e,i),V(n,t,i),a=!0},p:R,i(t){a||(b(n.$$.fragment,t),a=!0)},o(t){D(n.$$.fragment,t),a=!1},d(t){t&&c(e),I(n,t)}}}class de extends U{constructor(e){super(),W(this,e,null,ie,Q,{})}}export{de as component};
