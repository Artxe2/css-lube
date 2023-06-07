import{S as N,i as O,s as U,y as x,z as E,A as D,g as V,d as b,B as I,k as _,a as d,l as w,m as C,c as u,h as c,n as L,b as A,H as i,R as X,e as K,T as Y,D as W,Q as Z}from"../chunks/index.e72184b5.js";import{C as ee}from"../chunks/CodePage.abe9804b.js";import{C as te}from"../chunks/ComponentTabView.f2fb59a5.js";import{L as z}from"../chunks/LoadingCircle.a49cc462.js";import{h as $,k as M,n as o,s as f}from"../chunks/highlighter.d5787206.js";function ae(g){let e,n=`${$("script",` ${o("lang")}=${f("ts")}`,`
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
`)}`,a;return{c(){e=new X(!1),a=K(),this.h()},l(t){e=Y(t,!1),a=K(),this.h()},h(){e.a=a},m(t,l){e.m(n,t,l),A(t,a,l)},p:W,d(t){t&&c(a),t&&e.d()}}}function se(g){let e,n,a,t,l,y,p,B,T,Q,k,v,j,P,F,H,h,S,m,q;return n=new z({}),p=new z({}),v=new z({}),h=new z({}),m=new ee({props:{isCode:!0,$$slots:{default:[ae]},$$scope:{ctx:g}}}),{c(){e=_("div"),x(n.$$.fragment),a=d(),t=_("div"),l=d(),y=_("div"),x(p.$$.fragment),B=d(),T=_("div"),Q=d(),k=_("div"),x(v.$$.fragment),j=d(),P=_("div"),F=d(),H=_("div"),x(h.$$.fragment),S=d(),x(m.$$.fragment),this.h()},l(s){e=w(s,"DIV",{class:!0});var r=C(e);E(n.$$.fragment,r),a=u(r),t=w(r,"DIV",{class:!0}),C(t).forEach(c),l=u(r),y=w(r,"DIV",{class:!0});var R=C(y);E(p.$$.fragment,R),R.forEach(c),B=u(r),T=w(r,"DIV",{class:!0}),C(T).forEach(c),Q=u(r),k=w(r,"DIV",{class:!0});var G=C(k);E(v.$$.fragment,G),G.forEach(c),j=u(r),P=w(r,"DIV",{class:!0}),C(P).forEach(c),F=u(r),H=w(r,"DIV",{class:!0});var J=C(H);E(h.$$.fragment,J),J.forEach(c),r.forEach(c),S=u(s),E(m.$$.fragment,s),this.h()},h(){L(t,"class","w=1"),L(y,"class","fs=.75"),L(T,"class","w=1"),L(k,"class","fs=.5"),L(P,"class","w=1"),L(H,"class","fs=.25"),L(e,"class","flex ai=center w=fit-content p=1 br=1")},m(s,r){A(s,e,r),D(n,e,null),i(e,a),i(e,t),i(e,l),i(e,y),D(p,y,null),i(e,B),i(e,T),i(e,Q),i(e,k),D(v,k,null),i(e,j),i(e,P),i(e,F),i(e,H),D(h,H,null),A(s,S,r),D(m,s,r),q=!0},p(s,r){const R={};r&1&&(R.$$scope={dirty:r,ctx:s}),m.$set(R)},i(s){q||(V(n.$$.fragment,s),V(p.$$.fragment,s),V(v.$$.fragment,s),V(h.$$.fragment,s),V(m.$$.fragment,s),q=!0)},o(s){b(n.$$.fragment,s),b(p.$$.fragment,s),b(v.$$.fragment,s),b(h.$$.fragment,s),b(m.$$.fragment,s),q=!1},d(s){s&&c(e),I(n),I(p),I(v),I(h),s&&c(S),I(m,s)}}}function ne(g){let e,n;return e=new te({props:{$$slots:{default:[se]},$$scope:{ctx:g}}}),{c(){x(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,t){D(e,a,t),n=!0},p(a,[t]){const l={};t&1&&(l.$$scope={dirty:t,ctx:a}),e.$set(l)},i(a){n||(V(e.$$.fragment,a),n=!0)},o(a){b(e.$$.fragment,a),n=!1},d(a){I(e,a)}}}class re extends N{constructor(e){super(),O(this,e,null,ne,U,{})}}function le(g){let e,n,a;return n=new re({}),{c(){e=d(),x(n.$$.fragment),this.h()},l(t){Z("svelte-1obprnd",document.head).forEach(c),e=u(t),E(n.$$.fragment,t),this.h()},h(){document.title="Loading Circle | Reference"},m(t,l){A(t,e,l),D(n,t,l),a=!0},p:W,i(t){a||(V(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){t&&c(e),I(n,t)}}}class me extends N{constructor(e){super(),O(this,e,null,le,U,{})}}export{me as component};
