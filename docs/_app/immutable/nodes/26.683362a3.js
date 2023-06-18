import{S as $e,i as fe,s as ce,k as v,q as T,a as J,l as k,m as y,r as O,h as _,c as K,n as V,b as P,H as m,C as Q,a0 as Ie,D as F,O as Te,X as Ce,e as q,a1 as Me,w as Oe,u as ue,y as ne,z as le,A as ie,g as se,d as ae,B as oe,V as De,P as Ve,a2 as ke,a3 as ye,a4 as Pe,W as Be,a5 as Le,R as Ue,T as Ae,Q as je}from"../chunks/index.e72184b5.js";import{C as Se}from"../chunks/CodePage.abe9804b.js";import{h as N,k as D,n as r,s as W,d as U,i as I,t as H,b as s,f as X}from"../chunks/highlighter.e3fc48dc.js";import{C as He}from"../chunks/ComponentTabView.f2fb59a5.js";import{s as R}from"../chunks/index.51f989cf.js";function Ee(o,e,n){const i=o.slice();return i[17]=e[n],i}function we(o){let e;function n(t,a){return t[17]===1&&t[17]+t[2]+1<t[0]?Qe:t[17]===t[4]-1&&t[17]-t[2]-1>t[0]?Re:qe}let i=n(o),l=i(o);return{c(){l.c(),e=q()},l(t){l.l(t),e=q()},m(t,a){l.m(t,a),P(t,e,a)},p(t,a){i===(i=n(t))&&l?l.p(t,a):(l.d(1),l=i(t),l&&(l.c(),l.m(e.parentNode,e)))},d(t){l.d(t),t&&_(e)}}}function qe(o){let e,n=o[17]+1+"",i,l,t,a;function c(){return o[13](o[17])}return{c(){e=v("button"),i=T(n),this.h()},l(u){e=k(u,"BUTTON",{class:!0});var $=y(e);i=O($,n),$.forEach(_),this.h()},h(){V(e,"class",l=o[17]===o[0]?R.button.link:R.button.text)},m(u,$){P(u,e,$),m(e,i),t||(a=Q(e,"click",c),t=!0)},p(u,$){o=u,$&64&&n!==(n=o[17]+1+"")&&ue(i,n),$&65&&l!==(l=o[17]===o[0]?R.button.link:R.button.text)&&V(e,"class",l)},d(u){u&&_(e),t=!1,a()}}}function Re(o){let e,n,i,l;return{c(){e=v("button"),n=T("..."),this.h()},l(t){e=k(t,"BUTTON",{class:!0});var a=y(e);n=O(a,"..."),a.forEach(_),this.h()},h(){V(e,"class",R.button.text)},m(t,a){P(t,e,a),m(e,n),i||(l=Q(e,"click",o[12]),i=!0)},p:F,d(t){t&&_(e),i=!1,l()}}}function Qe(o){let e,n,i,l;return{c(){e=v("button"),n=T("..."),this.h()},l(t){e=k(t,"BUTTON",{class:!0});var a=y(e);n=O(a,"..."),a.forEach(_),this.h()},h(){V(e,"class",R.button.text)},m(t,a){P(t,e,a),m(e,n),i||(l=Q(e,"click",o[11]),i=!0)},p:F,d(t){t&&_(e),i=!1,l()}}}function ze(o,e){let n,i=e[17]<=1||e[17]>=e[4]-1||Math.abs(e[0]-e[17])<=e[2],l,t=i&&we(e);return{key:o,first:null,c(){n=q(),t&&t.c(),l=q(),this.h()},l(a){n=q(),t&&t.l(a),l=q(),this.h()},h(){this.first=n},m(a,c){P(a,n,c),t&&t.m(a,c),P(a,l,c)},p(a,c){e=a,c&85&&(i=e[17]<=1||e[17]>=e[4]-1||Math.abs(e[0]-e[17])<=e[2]),i?t?t.p(e,c):(t=we(e),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(a){a&&_(n),t&&t.d(a),a&&_(l)}}}function We(o){let e,n,i="<",l,t,a=[],c=new Map,u,$,E=">",w,C,p,L=o[6];const M=g=>g[17];for(let g=0;g<L.length;g+=1){let d=Ee(o,L,g),z=M(d);c.set(z,a[g]=ze(z,d))}return{c(){e=v("div"),n=v("button"),l=T(i),t=J();for(let g=0;g<a.length;g+=1)a[g].c();u=J(),$=v("button"),w=T(E),this.h()},l(g){e=k(g,"DIV",{class:!0});var d=y(e);n=k(d,"BUTTON",{class:!0});var z=y(n);l=O(z,i),z.forEach(_),t=K(d);for(let f=0;f<a.length;f+=1)a[f].l(d);u=K(d),$=k(d,"BUTTON",{class:!0});var j=y($);w=O(j,E),j.forEach(_),d.forEach(_),this.h()},h(){V(n,"class",R.button.text),V($,"class",R.button.text),V(e,"class",o[1])},m(g,d){P(g,e,d),m(e,n),m(n,l),m(e,t);for(let z=0;z<a.length;z+=1)a[z]&&a[z].m(e,null);m(e,u),m(e,$),m($,w),o[15](e),C||(p=[Q(n,"click",o[10]),Q($,"click",o[14])],C=!0)},p(g,[d]){d&221&&(L=g[6],a=Ie(a,d,M,1,g,L,c,e,Me,ze,u,Ee)),d&2&&V(e,"class",g[1])},i:F,o:F,d(g){g&&_(e);for(let d=0;d<a.length;d+=1)a[d].d();o[15](null),C=!1,Te(p)}}}function Xe(o,e,n){let i,l,{classs:t=""}=e,{size:a=10}=e,{list:c}=e,{page:u=0}=e,{offset:$=1}=e,{jump:E=5}=e;const w=Ce();let C;const p=f=>{n(0,u=Math.min(Math.max(f,0),i)),w("change",{index:u*a,size:a})},L=()=>u>0&&p(u-1),M=()=>p(Math.max(u-E,1)),g=()=>p(Math.min(u+E,i-1)),d=f=>p(f),z=()=>u<i&&p(u+1);function j(f){Oe[f?"unshift":"push"](()=>{C=f,n(5,C)})}return o.$$set=f=>{"classs"in f&&n(1,t=f.classs),"size"in f&&n(8,a=f.size),"list"in f&&n(9,c=f.list),"page"in f&&n(0,u=f.page),"offset"in f&&n(2,$=f.offset),"jump"in f&&n(3,E=f.jump)},o.$$.update=()=>{o.$$.dirty&768&&n(4,i=c?Math.floor(((c.length||0)+a-1)/a)-1:0),o.$$.dirty&16&&n(6,l=Array.from({length:i+1},(f,Y)=>Y))},[u,t,$,E,i,C,l,p,a,c,L,M,g,d,z,j]}class Fe extends $e{constructor(e){super(),fe(this,e,Xe,We,ce,{classs:1,size:8,list:9,page:0,offset:2,jump:3})}}function Ge(o){let e;return{c(){e=T("Empty")},l(n){e=O(n,"Empty")},m(n,i){P(n,e,i)},p:F,d(n){n&&_(e)}}}function Je(o){let e,n=o[3][0].title+"",i,l,t,a=o[3][o[3].length-1].title+"",c;return{c(){e=v("div"),i=T(n),l=T(`\r
			. . .\r
			`),t=v("div"),c=T(a)},l(u){e=k(u,"DIV",{});var $=y(e);i=O($,n),$.forEach(_),l=O(u,`\r
			. . .\r
			`),t=k(u,"DIV",{});var E=y(t);c=O(E,a),E.forEach(_)},m(u,$){P(u,e,$),m(e,i),P(u,l,$),P(u,t,$),m(t,c)},p(u,$){$&8&&n!==(n=u[3][0].title+"")&&ue(i,n),$&8&&a!==(a=u[3][u[3].length-1].title+"")&&ue(c,a)},d(u){u&&_(e),u&&_(l),u&&_(t)}}}function Ke(o){let e,n=`${N("script",` ${r("lang")}=${W("ts")}`,`
${D("import")} ${r("Pagination")} ${D("from")} ${W("src/instant-ui/components/pagination/Pagination.svelte")}

${U("let")} ${r("count")} = ${I(0)}
${U("let")} ${r("list")}: ${H("any")}${s("[]")}
${U("let")} ${r("index")} = ${I(0)}
${U("let")} ${r("size")} = ${I(10)}

$: ${r("view")} = ${r("list")}?.${X("slice")}${s("(")}${r("index")}, ${r("Math")}.${X("min")}${s("(",1)}${r("index")} + ${r("size")}, ${r("list")}.${r("length")}${s(")",1)}${s(")")}

${U("const")} ${X("handleChange")} = ${s("(")}${s("{",1)} ${r("detail")} ${s("}",1)}: ${s("{",1)} ${r("detail")}: ${s("{",2)} ${r("index")}: ${H("number")}, ${r("size")}: ${H("number")} ${s("}",2)}${s("}",1)}${s(")")} ${U("=>")} ${s("{")}
	${r("index")} = ${r("detail")}.${r("index")}
	${r("size")} = ${r("detail")}.${r("size")}
${s("}")}
${U("const")} ${X("getList")} = ${s("()")} ${U("=>")} ${s("{")}
	${D("if")} ${s("(",1)}${r("count")} < ${I(0)}${s(") {",1)}
		${r("count")} = ${I(0)}
	${s("}",1)} ${D("else")} ${s("{",1)}
		${r("count")} = ${r("Math")}.${X("floor")}${s("(",2)}${r("count")}${s(")",2)}
	${s("}",1)}
	${r("list")} = ${U("new")} ${H("Array")}${s("(",1)}${r("count")}${s(")",1)}
	${D("for")} ${s("(",1)}${U("let")} ${r("i")} = ${I(0)}; ${r("i")} < ${r("list")}?.${r("length")}; ${r("i")}++${s(") {",1)}
		${r("list")}${s("[",2)}${r("i")}${s("]",2)} = ${s("{",2)} ${r("title:")} ${W("Lorem Ipsum is simply dummy text ")} + ${s("(")}${r("i")} + ${I(1)}${s(")")} ${s("}",2)}
	${s("}",1)}
${s("}")}
`)}

${N("div","",`
	${N("span","","contents: ")}${N("input",` ${D("bind")}:${H("value")}=${s("{")}${r("count")}${s("}")}
			${r("type")}=${W("number")} ${r("type")}=${W("bg=inherit w=3 ta=right")}
			${D("on")}:${H("change")}=${s("{")}${X("getList")}${s("}")}`,!1)}ea
	${N("div",` ${r("class")}=${W("bd=.1_solid p=1")}`,`
		${s("{")}#${D("if")} ${r("view")}.?${r("length")}${s("}")}
		${N("div","",`${s("{")}${r("view")}${s("[",1)}${I(0)}${s("]",1)}.${r("title")}${s("}")}`)}
		. . .
		${N("div","",`${s("{")}${r("view")}${s("[",1)}${r("view")}.${r("length")} - ${I(1)}${s("]",1)}.${r("title")}${s("}")}`)}
		${s("{")}:${D("else")}${s("}")}
		Empty
		${s("{")}/${D("if")}${s("}")}
	`)}
	${N("select",` ${D("bind")}:${H("value")}=${s("{")}${r("size")}${s("}")} ${r("class")}=${W("@dark@bg=#222")}`,`
		${N("option",` ${r("value")}=${s("{")}${I(10)}${s("}")}`,"10")}
		${N("option",` ${r("value")}=${s("{")}${I(20)}${s("}")}`,"20")}
		${N("option",` ${r("value")}=${s("{")}${I(50)}${s("}")}`,"50")}
		${N("option",` ${r("value")}=${s("{")}${I(100)}${s("}")}`,"100")}
		${N("option",` ${r("value")}=${s("{")}${I(200)}${s("}")}`,"200")}
	`)}
	${N("Pagination",` ${D("bind")}:${r("size")}
			${D("on")}:${H("change")}=${s("{")}${X("handleChange")}${s("}")}
			${s("{")}${r("list")}${s("}")}`,!1)}
`)}`,i;return{c(){e=new Ue(!1),i=q(),this.h()},l(l){e=Ae(l,!1),i=q(),this.h()},h(){e.a=i},m(l,t){e.m(n,l,t),P(l,i,t)},p:F,d(l){l&&_(i),l&&e.d()}}}function Ye(o){let e,n,i,l,t,a,c,u,$,E,w,C,p,L,M,g,d,z,j,f,Y,x,S,ee,re,_e;function he(h,b){var A;return(A=h[3])!=null&&A.length?Je:Ge}let te=he(o),B=te(o);function Ne(h){o[9](h)}let de={list:o[0]};return o[1]!==void 0&&(de.size=o[1]),f=new Fe({props:de}),Oe.push(()=>De(f,"size",Ne)),f.$on("change",o[4]),S=new Se({props:{isCode:!0,$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){e=v("div"),n=v("span"),i=T("contents: "),l=v("input"),t=T(`ea\r
		`),a=v("div"),B.c(),c=J(),u=v("select"),$=v("option"),E=T("10"),w=v("option"),C=T("20"),p=v("option"),L=T("50"),M=v("option"),g=T("100"),d=v("option"),z=T("200"),j=J(),ne(f.$$.fragment),x=J(),ne(S.$$.fragment),this.h()},l(h){e=k(h,"DIV",{});var b=y(e);n=k(b,"SPAN",{});var A=y(n);i=O(A,"contents: "),A.forEach(_),l=k(b,"INPUT",{type:!0,class:!0}),t=O(b,`ea\r
		`),a=k(b,"DIV",{class:!0});var Z=y(a);B.l(Z),Z.forEach(_),c=K(b),u=k(b,"SELECT",{class:!0});var G=y(u);$=k(G,"OPTION",{});var me=y($);E=O(me,"10"),me.forEach(_),w=k(G,"OPTION",{});var pe=y(w);C=O(pe,"20"),pe.forEach(_),p=k(G,"OPTION",{});var ge=y(p);L=O(ge,"50"),ge.forEach(_),M=k(G,"OPTION",{});var be=y(M);g=O(be,"100"),be.forEach(_),d=k(G,"OPTION",{});var ve=y(d);z=O(ve,"200"),ve.forEach(_),G.forEach(_),j=K(b),le(f.$$.fragment,b),b.forEach(_),x=K(h),le(S.$$.fragment,h),this.h()},h(){V(l,"type","number"),V(l,"class","bg=inherit w=3 ta=right"),V(a,"class","bd=.1_solid p=1"),$.__value=10,$.value=$.__value,w.__value=20,w.value=w.__value,p.__value=50,p.value=p.__value,M.__value=100,M.value=M.__value,d.__value=200,d.value=d.__value,V(u,"class","@dark@bg=#222"),o[1]===void 0&&Ve(()=>o[8].call(u))},m(h,b){P(h,e,b),m(e,n),m(n,i),m(e,l),ke(l,o[2]),m(e,t),m(e,a),B.m(a,null),m(e,c),m(e,u),m(u,$),m($,E),m(u,w),m(w,C),m(u,p),m(p,L),m(u,M),m(M,g),m(u,d),m(d,z),ye(u,o[1],!0),m(e,j),ie(f,e,null),P(h,x,b),ie(S,h,b),ee=!0,re||(_e=[Q(l,"input",o[7]),Q(l,"change",o[5]),Q(u,"change",o[8])],re=!0)},p(h,b){b&4&&Pe(l.value)!==h[2]&&ke(l,h[2]),te===(te=he(h))&&B?B.p(h,b):(B.d(1),B=te(h),B&&(B.c(),B.m(a,null))),b&2&&ye(u,h[1]);const A={};b&1&&(A.list=h[0]),!Y&&b&2&&(Y=!0,A.size=h[1],Be(()=>Y=!1)),f.$set(A);const Z={};b&1024&&(Z.$$scope={dirty:b,ctx:h}),S.$set(Z)},i(h){ee||(se(f.$$.fragment,h),se(S.$$.fragment,h),ee=!0)},o(h){ae(f.$$.fragment,h),ae(S.$$.fragment,h),ee=!1},d(h){h&&_(e),B.d(),oe(f),h&&_(x),oe(S,h),re=!1,Te(_e)}}}function Ze(o){let e,n;return e=new He({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){ne(e.$$.fragment)},l(i){le(e.$$.fragment,i)},m(i,l){ie(e,i,l),n=!0},p(i,[l]){const t={};l&1039&&(t.$$scope={dirty:l,ctx:i}),e.$set(t)},i(i){n||(se(e.$$.fragment,i),n=!0)},o(i){ae(e.$$.fragment,i),n=!1},d(i){oe(e,i)}}}function xe(o,e,n){let i,l=0,t,a=0,c=10;const u=({detail:p})=>{n(6,a=p.index),n(1,c=p.size)},$=()=>{l<0?n(2,l=0):n(2,l=Math.floor(l)),n(0,t=new Array(l));for(let p=0;p<(t==null?void 0:t.length);p++)n(0,t[p]={title:"Lorem Ipsum is simply dummy text "+(p+1)},t)};function E(){l=Pe(this.value),n(2,l)}function w(){c=Le(this),n(1,c)}function C(p){c=p,n(1,c)}return o.$$.update=()=>{o.$$.dirty&67&&n(3,i=t==null?void 0:t.slice(a,Math.min(a+c,t.length)))},[t,c,l,i,u,$,a,E,w,C]}class et extends $e{constructor(e){super(),fe(this,e,xe,Ze,ce,{})}}function tt(o){let e,n,i;return n=new et({}),{c(){e=J(),ne(n.$$.fragment),this.h()},l(l){je("svelte-a6ekc1",document.head).forEach(_),e=K(l),le(n.$$.fragment,l),this.h()},h(){document.title="Pagination | Reference"},m(l,t){P(l,e,t),ie(n,l,t),i=!0},p:F,i(l){i||(se(n.$$.fragment,l),i=!0)},o(l){ae(n.$$.fragment,l),i=!1},d(l){l&&_(e),oe(n,l)}}}class ot extends $e{constructor(e){super(),fe(this,e,null,tt,ce,{})}}export{ot as component};
