import{S as N,i as O,s as U,y as x,z as E,A as D,g as V,d as b,B as I,k as _,a as d,l as w,m as C,c as u,h as c,n as L,b as A,H as i,P as X,e as K,Q as Y,D as W,R as Z}from"../chunks/index.d48826db.js";import{C as ee}from"../chunks/CodePage.d79d6b32.js";import{C as te}from"../chunks/ComponentTabView.c380843f.js";import{L as z}from"../chunks/LoadingCircle.e04a017e.js";import{h as $,k as M,n as o,s as f}from"../chunks/highlighter.71dae262.js";function ae(g){let e,n=`${$("script",` ${o("lang")}=${f("ts")}`,`
${M("import")} ${o("LoadingCircle")} ${M("from")} ${f("src/instant-ui/animations/LoadingCircle.svelte")}
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
`)}`,a;return{c(){e=new X(!1),a=K(),this.h()},l(t){e=Y(t,!1),a=K(),this.h()},h(){e.a=a},m(t,l){e.m(n,t,l),A(t,a,l)},p:W,d(t){t&&c(a),t&&e.d()}}}function se(g){let e,n,a,t,l,y,p,B,P,Q,k,v,j,R,F,H,h,T,m,q;return n=new z({}),p=new z({}),v=new z({}),h=new z({}),m=new ee({props:{isCode:!0,$$slots:{default:[ae]},$$scope:{ctx:g}}}),{c(){e=_("div"),x(n.$$.fragment),a=d(),t=_("div"),l=d(),y=_("div"),x(p.$$.fragment),B=d(),P=_("div"),Q=d(),k=_("div"),x(v.$$.fragment),j=d(),R=_("div"),F=d(),H=_("div"),x(h.$$.fragment),T=d(),x(m.$$.fragment),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=C(e);E(n.$$.fragment,r),a=u(r),t=w(r,"DIV",{class:!0}),C(t).forEach(c),l=u(r),y=w(r,"DIV",{class:!0});var S=C(y);E(p.$$.fragment,S),S.forEach(c),B=u(r),P=w(r,"DIV",{class:!0}),C(P).forEach(c),Q=u(r),k=w(r,"DIV",{class:!0});var G=C(k);E(v.$$.fragment,G),G.forEach(c),j=u(r),R=w(r,"DIV",{class:!0}),C(R).forEach(c),F=u(r),H=w(r,"DIV",{class:!0});var J=C(H);E(h.$$.fragment,J),J.forEach(c),r.forEach(c),T=u(s),E(m.$$.fragment,s),this.h()},h(){L(t,"class","w=1"),L(y,"class","fs=.75"),L(P,"class","w=1"),L(k,"class","fs=.5"),L(R,"class","w=1"),L(H,"class","fs=.25"),L(e,"class","flex ai=center w=fit-content p=1 br=1")},m(s,r){A(s,e,r),D(n,e,null),i(e,a),i(e,t),i(e,l),i(e,y),D(p,y,null),i(e,B),i(e,P),i(e,Q),i(e,k),D(v,k,null),i(e,j),i(e,R),i(e,F),i(e,H),D(h,H,null),A(s,T,r),D(m,s,r),q=!0},p(s,r){const S={};r&1&&(S.$$scope={dirty:r,ctx:s}),m.$set(S)},i(s){q||(V(n.$$.fragment,s),V(p.$$.fragment,s),V(v.$$.fragment,s),V(h.$$.fragment,s),V(m.$$.fragment,s),q=!0)},o(s){b(n.$$.fragment,s),b(p.$$.fragment,s),b(v.$$.fragment,s),b(h.$$.fragment,s),b(m.$$.fragment,s),q=!1},d(s){s&&c(e),I(n),I(p),I(v),I(h),s&&c(T),I(m,s)}}}function ne(g){let e,n;return e=new te({props:{$$slots:{default:[se]},$$scope:{ctx:g}}}),{c(){x(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,t){D(e,a,t),n=!0},p(a,[t]){const l={};t&1&&(l.$$scope={dirty:t,ctx:a}),e.$set(l)},i(a){n||(V(e.$$.fragment,a),n=!0)},o(a){b(e.$$.fragment,a),n=!1},d(a){I(e,a)}}}class re extends N{constructor(e){super(),O(this,e,null,ne,U,{})}}function le(g){let e,n,a;return n=new re({}),{c(){e=d(),x(n.$$.fragment),this.h()},l(t){Z("svelte-1obprnd",document.head).forEach(c),e=u(t),E(n.$$.fragment,t),this.h()},h(){document.title="Loading Circle | Reference"},m(t,l){A(t,e,l),D(n,t,l),a=!0},p:W,i(t){a||(V(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){t&&c(e),I(n,t)}}}class me extends N{constructor(e){super(),O(this,e,null,le,U,{})}}export{me as component};
