import{S as k,i as z,s as W,G as ee,k as v,l as h,m as w,h as r,n as y,b as _,I as te,J as se,K as ae,g as V,d as H,y as N,a as L,q as j,z as T,c as x,r as U,A,H as d,B as F,U as X,D as J,R as Y,e as B,T as Z,Q as ne}from"../chunks/index.e72184b5.js";import{H as O}from"../chunks/H5.546393c9.js";import{b as K}from"../chunks/paths.5cf49692.js";import{C as G}from"../chunks/CodePage.abe9804b.js";import{h as S,a as q,n as C,s as I,e as M}from"../chunks/highlighter.d5787206.js";function le(m){let e,t,n;const f=m[2].default,c=ee(f,m,m[1],null);return{c(){e=v("h4"),c&&c.c(),this.h()},l(l){e=h(l,"H4",{class:!0});var o=w(e);c&&c.l(o),o.forEach(r),this.h()},h(){y(e,"class",t="fs=1.5 bold "+m[0])},m(l,o){_(l,e,o),c&&c.m(e,null),n=!0},p(l,[o]){c&&c.p&&(!n||o&2)&&te(c,f,l,l[1],n?ae(f,l[1],o,null):se(l[1]),null),(!n||o&1&&t!==(t="fs=1.5 bold "+l[0]))&&y(e,"class",t)},i(l){n||(V(c,l),n=!0)},o(l){H(c,l),n=!1},d(l){l&&r(e),c&&c.d(l)}}}function ie(m,e,t){let{$$slots:n={},$$scope:f}=e,{classs:c=""}=e;return m.$$set=l=>{"classs"in l&&t(0,c=l.classs),"$$scope"in l&&t(1,f=l.$$scope)},[c,f,n]}class re extends k{constructor(e){super(),z(this,e,ie,le,W,{classs:0})}}function fe(m){let e,t,n,f,c,l,o,$,g,s,i,u;return{c(){e=v("div"),t=v("div"),n=v("img"),c=L(),l=v("div"),o=v("h3"),$=j("CSS Lubricant"),g=L(),s=v("div"),i=v("span"),u=j("Near-Atomic CSS Library"),this.h()},l(b){e=h(b,"DIV",{class:!0});var E=w(e);t=h(E,"DIV",{class:!0});var D=w(t);n=h(D,"IMG",{class:!0,src:!0,alt:!0}),c=x(D),l=h(D,"DIV",{});var a=w(l);o=h(a,"H3",{class:!0});var p=w(o);$=U(p,"CSS Lubricant"),p.forEach(r),g=x(a),s=h(a,"DIV",{class:!0});var P=w(s);i=h(P,"SPAN",{class:!0});var R=w(i);u=U(R,"Near-Atomic CSS Library"),R.forEach(r),P.forEach(r),a.forEach(r),D.forEach(r),E.forEach(r),this.h()},h(){y(n,"class","content-icon svelte-12wgr6e"),X(n.src,f=K+"/favicon.png")||y(n,"src",f),y(n,"alt","favicon"),y(o,"class","content-subject svelte-12wgr6e"),y(i,"class","svelte-12wgr6e"),y(s,"class","content-description svelte-12wgr6e"),y(t,"class","content-box svelte-12wgr6e"),y(e,"class","content-container svelte-12wgr6e")},m(b,E){_(b,e,E),d(e,t),d(t,n),d(t,c),d(t,l),d(l,o),d(o,$),d(l,g),d(l,s),d(s,i),d(i,u)},p:J,d(b){b&&r(e)}}}function ce(m){let e,t;return{c(){e=new Y(!1),t=B(),this.h()},l(n){e=Z(n,!1),t=B(),this.h()},h(){e.a=t},m(n,f){e.m(m[0],n,f),_(n,t,f)},p:J,d(n){n&&r(t),n&&e.d()}}}function oe(m){let e,t,n,f,c,l,o,$,g;return e=new G({props:{$$slots:{default:[fe]},$$scope:{ctx:m}}}),$=new G({props:{$$slots:{default:[ce]},$$scope:{ctx:m}}}),{c(){N(e.$$.fragment),t=L(),n=v("div"),f=v("span"),c=j("In the old way, whenever you needed to style the web, you had to name a class and write CSS."),l=v("br"),o=L(),N($.$$.fragment)},l(s){T(e.$$.fragment,s),t=x(s),n=h(s,"DIV",{});var i=w(n);f=h(i,"SPAN",{});var u=w(f);c=U(u,"In the old way, whenever you needed to style the web, you had to name a class and write CSS."),u.forEach(r),l=h(i,"BR",{}),i.forEach(r),o=x(s),T($.$$.fragment,s)},m(s,i){A(e,s,i),_(s,t,i),_(s,n,i),d(n,f),d(f,c),d(n,l),_(s,o,i),A($,s,i),g=!0},p(s,[i]){const u={};i&2&&(u.$$scope={dirty:i,ctx:s}),e.$set(u);const b={};i&2&&(b.$$scope={dirty:i,ctx:s}),$.$set(b)},i(s){g||(V(e.$$.fragment,s),V($.$$.fragment,s),g=!0)},o(s){H(e.$$.fragment,s),H($.$$.fragment,s),g=!1},d(s){F(e,s),s&&r(t),s&&r(n),s&&r(o),F($,s)}}}function $e(m){return[`${S("head","",`
	${S("style","",`
		${q(".content-container ",[`
			display`," flex"],[`
			height`," 10em"],[`
			align-items`," center"],[`
			justify-content`,` center${M("#000","#fff",";")}
		`])}
		${q(".content-box ",[`
			display`," fit-content"],[`
			width`," 10em"],[`
			background`," #fff"],[`
			color`," #000"],[`
			padding`," .5em"],[`
			border-radius`," .5em"],[`
			box-shadow`,` 0 1em 1em gray${M("#000","#fff",";")}
		`])}
		${q(".content-icon ",[`
			width`," 4em"],[`
			height`," 4em"],[`
			transform`,` rotate(-15deg)${M("#000","#fff",";")}
		`])}
		${q(".content-subject ",[`
			font-weight`," bold"],[`
			font-size`," 2em"],[`
			font-variant`,` small-caps${M("#000","#fff",";")}
		`])}
		${q(".content-description ",[`
			position`," relative"],[`
			margin-top`," -1.5em"],[`
			width`,` fit-content${M("#000","#fff",";")}
		`])}
		${q(".content-description ",[`
			font-family`,` 'Times New Roman', Times, serif${M("#000","#fff",";")}
		`])}
	`)}
`)}
${S("body","",`
	${S("div",` ${C("class")}=${I("content-container")}`,`
		${S("div",` ${C("class")}=${I("content-box")}`,`
			${S("img",` ${C("class")}=${I("content-icon")} ${C("src")}=${I("/favicon.png")} ${C("alt")}=${I("favicon")}`,!1)}
			${S("div","",`
				${S("h3",` ${C("class")}=${I("content-subject")}`,"CSS Lubricant")}
				${S("div",` ${C("class")}=${I("content-description")}`,`
					${S("span","","easy & rapid & intuitive")}
				`)}
			`)}
		`)}
	`)}
`)}`]}class me extends k{constructor(e){super(),z(this,e,$e,oe,W,{})}}function ue(m){let e,t,n,f,c,l,o,$,g,s,i,u;return{c(){e=v("div"),t=v("div"),n=v("img"),c=L(),l=v("div"),o=v("h3"),$=j("CSS Lubricant"),g=L(),s=v("div"),i=v("span"),u=j("Near-Atomic CSS Library"),this.h()},l(b){e=h(b,"DIV",{class:!0});var E=w(e);t=h(E,"DIV",{class:!0});var D=w(t);n=h(D,"IMG",{class:!0,src:!0,alt:!0}),c=x(D),l=h(D,"DIV",{});var a=w(l);o=h(a,"H3",{class:!0});var p=w(o);$=U(p,"CSS Lubricant"),p.forEach(r),g=x(a),s=h(a,"DIV",{class:!0});var P=w(s);i=h(P,"SPAN",{});var R=w(i);u=U(R,"Near-Atomic CSS Library"),R.forEach(r),P.forEach(r),a.forEach(r),D.forEach(r),E.forEach(r),this.h()},h(){y(n,"class","w=4 h=4 tf=rotate(-15deg)"),X(n.src,f=K+"/favicon.png")||y(n,"src",f),y(n,"alt","favicon"),y(o,"class","bold fs=2 fv=small-caps"),y(s,"class","relative mt=-1.5 w=fit-content _span/ff='Times_New_Roman',Times,serif"),y(t,"class","flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray"),y(e,"class","flex h=10 ai=center jc=center")},m(b,E){_(b,e,E),d(e,t),d(t,n),d(t,c),d(t,l),d(l,o),d(o,$),d(l,g),d(l,s),d(s,i),d(i,u)},p:J,d(b){b&&r(e)}}}function pe(m){let e,t;return{c(){e=new Y(!1),t=B(),this.h()},l(n){e=Z(n,!1),t=B(),this.h()},h(){e.a=t},m(n,f){e.m(m[0],n,f),_(n,t,f)},p:J,d(n){n&&r(t),n&&e.d()}}}function de(m){let e,t,n,f,c,l,o,$,g;return e=new G({props:{$$slots:{default:[ue]},$$scope:{ctx:m}}}),$=new G({props:{$$slots:{default:[pe]},$$scope:{ctx:m}}}),{c(){N(e.$$.fragment),t=L(),n=v("div"),f=v("span"),c=j("With CSS Lubricant, you style elements by applying pre-existing classes directly in your HTML."),l=v("br"),o=L(),N($.$$.fragment)},l(s){T(e.$$.fragment,s),t=x(s),n=h(s,"DIV",{});var i=w(n);f=h(i,"SPAN",{});var u=w(f);c=U(u,"With CSS Lubricant, you style elements by applying pre-existing classes directly in your HTML."),u.forEach(r),l=h(i,"BR",{}),i.forEach(r),o=x(s),T($.$$.fragment,s)},m(s,i){A(e,s,i),_(s,t,i),_(s,n,i),d(n,f),d(f,c),d(n,l),_(s,o,i),A($,s,i),g=!0},p(s,[i]){const u={};i&2&&(u.$$scope={dirty:i,ctx:s}),e.$set(u);const b={};i&2&&(b.$$scope={dirty:i,ctx:s}),$.$set(b)},i(s){g||(V(e.$$.fragment,s),V($.$$.fragment,s),g=!0)},o(s){H(e.$$.fragment,s),H($.$$.fragment,s),g=!1},d(s){F(e,s),s&&r(t),s&&r(n),s&&r(o),F($,s)}}}function _e(m){return[`${S("head","",`
	${S("script",` ${C("src")}=${I("/css-lubricant.js")}`,"")}
`)}
${S("body","",`
	${S("div",` ${C("class")}=${I("flex h=10 ai=center jc=center")}`,`
		${S("div",` ${C("class")}=${I("flex w=fit-content bg=#fff c=#000 p=.5 br=.5 bs=0_1_1_gray")}`,`
			${S("img",` ${C("class")}=${I("w=4 h=4 tf=rotate(-15deg)")} ${C("src")}=${I(K+"/favicon.png")} ${C("alt")}=${I("favicon")}`,!1)}
			${S("div","",`
				${S("h3",` ${C("class")}=${I("bold fs=2 fv=small-caps")}`,"CSS Lubricant")}
				${S("div",` ${C("class")}=${I("relative mt=-1.5 w=fit-content _span/ff='Times_New_Roman',Times,serif")}`,`
					${S("span","","easy & rapid & intuitive")}
				`)}
			`)}
		`)}
	`)}
`)}`]}class ve extends k{constructor(e){super(),z(this,e,_e,de,W,{})}}function he(m){let e;return{c(){e=j("Utillity-First Fundamentals")},l(t){e=U(t,"Utillity-First Fundamentals")},m(t,n){_(t,e,n)},d(t){t&&r(e)}}}function ge(m){let e;return{c(){e=j("Semantic CSS")},l(t){e=U(t,"Semantic CSS")},m(t,n){_(t,e,n)},d(t){t&&r(e)}}}function be(m){let e;return{c(){e=j("Utillity-First CSS")},l(t){e=U(t,"Utillity-First CSS")},m(t,n){_(t,e,n)},d(t){t&&r(e)}}}function Se(m){let e,t,n,f,c,l,o,$,g,s,i,u,b,E,D;return t=new re({props:{$$slots:{default:[he]},$$scope:{ctx:m}}}),l=new O({props:{$$slots:{default:[ge]},$$scope:{ctx:m}}}),$=new me({}),u=new O({props:{$$slots:{default:[be]},$$scope:{ctx:m}}}),E=new ve({}),{c(){e=L(),N(t.$$.fragment),n=L(),f=v("div"),c=L(),N(l.$$.fragment),o=L(),N($.$$.fragment),g=L(),s=v("div"),i=L(),N(u.$$.fragment),b=L(),N(E.$$.fragment),this.h()},l(a){ne("svelte-1l8yysq",document.head).forEach(r),e=x(a),T(t.$$.fragment,a),n=x(a),f=h(a,"DIV",{class:!0}),w(f).forEach(r),c=x(a),T(l.$$.fragment,a),o=x(a),T($.$$.fragment,a),g=x(a),s=h(a,"DIV",{class:!0}),w(s).forEach(r),i=x(a),T(u.$$.fragment,a),b=x(a),T(E.$$.fragment,a),this.h()},h(){document.title="Utillity-First Fundamentals | CSS Lubricant",y(f,"class","h=2"),y(s,"class","h=2")},m(a,p){_(a,e,p),A(t,a,p),_(a,n,p),_(a,f,p),_(a,c,p),A(l,a,p),_(a,o,p),A($,a,p),_(a,g,p),_(a,s,p),_(a,i,p),A(u,a,p),_(a,b,p),A(E,a,p),D=!0},p(a,[p]){const P={};p&1&&(P.$$scope={dirty:p,ctx:a}),t.$set(P);const R={};p&1&&(R.$$scope={dirty:p,ctx:a}),l.$set(R);const Q={};p&1&&(Q.$$scope={dirty:p,ctx:a}),u.$set(Q)},i(a){D||(V(t.$$.fragment,a),V(l.$$.fragment,a),V($.$$.fragment,a),V(u.$$.fragment,a),V(E.$$.fragment,a),D=!0)},o(a){H(t.$$.fragment,a),H(l.$$.fragment,a),H($.$$.fragment,a),H(u.$$.fragment,a),H(E.$$.fragment,a),D=!1},d(a){a&&r(e),F(t,a),a&&r(n),a&&r(f),a&&r(c),F(l,a),a&&r(o),F($,a),a&&r(g),a&&r(s),a&&r(i),F(u,a),a&&r(b),F(E,a)}}}class Le extends k{constructor(e){super(),z(this,e,null,Se,W,{})}}export{Le as component};
