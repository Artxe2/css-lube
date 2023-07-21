import{s as O,f as _,a as d,g as w,h as C,c as g,d as c,j as L,i as K,y as l,J as X,e as M,K as Y,u as Q,I as Z}from"../chunks/scheduler.37114a5d.js";import{S as U,i as W,b as x,d as E,m as I,a as V,t as b,e as D}from"../chunks/index.80e0ab0e.js";import{C as ee}from"../chunks/CodePage.aad8268b.js";import{C as te}from"../chunks/ComponentTabView.d9ff6e19.js";import{L as J}from"../chunks/LoadingCircle.e3e31bb8.js";import{h as $,k as N,n as o,s as f}from"../chunks/highlighter.e3fc48dc.js";function ae(u){let e,n=`${$("script",` ${o("lang")}=${f("ts")}`,`
${N("import")} ${o("LoadingCircle")} ${N("from")} ${f("src/instant-ui/animations/LoadingCircle.svelte")}
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
`)}`,a;return{c(){e=new X(!1),a=M(),this.h()},l(t){e=Y(t,!1),a=M(),this.h()},h(){e.a=a},m(t,i){e.m(n,t,i),K(t,a,i)},p:Q,d(t){t&&(c(a),e.d())}}}function se(u){let e,n,a,t,i,y,p,R,P,z,k,h,A,S,B,H,v,j,m,q;return n=new J({}),p=new J({}),h=new J({}),v=new J({}),m=new ee({props:{isCode:!0,$$slots:{default:[ae]},$$scope:{ctx:u}}}),{c(){e=_("div"),x(n.$$.fragment),a=d(),t=_("div"),i=d(),y=_("div"),x(p.$$.fragment),R=d(),P=_("div"),z=d(),k=_("div"),x(h.$$.fragment),A=d(),S=_("div"),B=d(),H=_("div"),x(v.$$.fragment),j=d(),x(m.$$.fragment),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=C(e);E(n.$$.fragment,r),a=g(r),t=w(r,"DIV",{class:!0}),C(t).forEach(c),i=g(r),y=w(r,"DIV",{class:!0});var T=C(y);E(p.$$.fragment,T),T.forEach(c),R=g(r),P=w(r,"DIV",{class:!0}),C(P).forEach(c),z=g(r),k=w(r,"DIV",{class:!0});var F=C(k);E(h.$$.fragment,F),F.forEach(c),A=g(r),S=w(r,"DIV",{class:!0}),C(S).forEach(c),B=g(r),H=w(r,"DIV",{class:!0});var G=C(H);E(v.$$.fragment,G),G.forEach(c),r.forEach(c),j=g(s),E(m.$$.fragment,s),this.h()},h(){L(t,"class","w=1"),L(y,"class","fs=.75"),L(P,"class","w=1"),L(k,"class","fs=.5"),L(S,"class","w=1"),L(H,"class","fs=.25"),L(e,"class","flex ai=center w=fit-content p=1 br=1")},m(s,r){K(s,e,r),I(n,e,null),l(e,a),l(e,t),l(e,i),l(e,y),I(p,y,null),l(e,R),l(e,P),l(e,z),l(e,k),I(h,k,null),l(e,A),l(e,S),l(e,B),l(e,H),I(v,H,null),K(s,j,r),I(m,s,r),q=!0},p(s,r){const T={};r&1&&(T.$$scope={dirty:r,ctx:s}),m.$set(T)},i(s){q||(V(n.$$.fragment,s),V(p.$$.fragment,s),V(h.$$.fragment,s),V(v.$$.fragment,s),V(m.$$.fragment,s),q=!0)},o(s){b(n.$$.fragment,s),b(p.$$.fragment,s),b(h.$$.fragment,s),b(v.$$.fragment,s),b(m.$$.fragment,s),q=!1},d(s){s&&(c(e),c(j)),D(n),D(p),D(h),D(v),D(m,s)}}}function ne(u){let e,n;return e=new te({props:{$$slots:{default:[se]},$$scope:{ctx:u}}}),{c(){x(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,t){I(e,a,t),n=!0},p(a,[t]){const i={};t&1&&(i.$$scope={dirty:t,ctx:a}),e.$set(i)},i(a){n||(V(e.$$.fragment,a),n=!0)},o(a){b(e.$$.fragment,a),n=!1},d(a){D(e,a)}}}class re extends U{constructor(e){super(),W(this,e,null,ne,O,{})}}function ie(u){let e,n,a;return n=new re({}),{c(){e=d(),x(n.$$.fragment),this.h()},l(t){Z("svelte-1obprnd",document.head).forEach(c),e=g(t),E(n.$$.fragment,t),this.h()},h(){document.title="Loading Circle | Reference"},m(t,i){K(t,e,i),I(n,t,i),a=!0},p:Q,i(t){a||(V(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){t&&c(e),D(n,t)}}}class de extends U{constructor(e){super(),W(this,e,null,ie,O,{})}}export{de as component};
