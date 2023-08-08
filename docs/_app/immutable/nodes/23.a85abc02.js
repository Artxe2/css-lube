import{s as ce,x as He,a as z,f as J,c as S,g as K,h as Q,d as L,j as X,k as pe,i as j,r as $e,z as Ce,A as Le,B as Ae,G as Fe,R as qe,p as ue,v as se,l as Xe,m as je,H as Ge,y as P,S as Je,n as Ke,w as M,F as Ve,u as ne,o as Qe,C as xe,Q as Te,J as ke,e as le,K as Ie,D as Be,I as Ue}from"../chunks/scheduler.a569b206.js";import{S as ge,i as he,a as B,t as R,b as x,d as U,m as ee,e as te,f as we,g as be,c as De}from"../chunks/index.5d932454.js";import{e as ve}from"../chunks/each.add73bf1.js";import{t as _e,d as oe,a as ie,b as de,c as fe,e as me}from"../chunks/store.652f1e25.js";import{C as ye}from"../chunks/CodePage.eaf4ef53.js";import{C as et}from"../chunks/ComponentTabView.2becab00.js";import{h as q,k as g,n as t,s as _,b as e,d as c,t as I,f as b,i as V}from"../chunks/highlighter.e3fc48dc.js";import{I as Ne}from"../chunks/IdeSvelte.677cd1e5.js";import{I as tt}from"../chunks/IdeTypescript.f7891d70.js";const $t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:Ee}=$t;function rt(n){let $,s,r,l,i;const o=n[10].default,f=He(o,n,n[9],null);return{c(){$=z(),s=J("div"),f&&f.c(),this.h()},l(a){$=S(a),s=K(a,"DIV",{class:!0,style:!0});var T=Q(s);f&&f.l(T),T.forEach(L),this.h()},h(){X(s,"class",n[0]),pe(s,"position","relative")},m(a,T){j(a,$,T),j(a,s,T),f&&f.m(s,null),n[11](s),r=!0,l||(i=[$e(Ee.body,"mousemove",n[2]),$e(Ee.body,"mouseup",n[4]),$e(Ee.body,"touchmove",n[3]),$e(Ee.body,"touchend",n[5])],l=!0)},p(a,[T]){f&&f.p&&(!r||T&512)&&Ce(f,o,a,a[9],r?Ae(o,a[9],T,null):Le(a[9]),null),(!r||T&1)&&X(s,"class",a[0])},i(a){r||(B(f,a),r=!0)},o(a){R(f,a),r=!1},d(a){a&&(L($),L(s)),f&&f.d(a),n[11](null),l=!1,Fe(i)}}}function nt(n,$,s){let{$$slots:r={},$$scope:l}=$,{classs:i=""}=$,{isDragging:o=!1}=$,{dragElement:f=null}=$;const a=(u,C,h)=>{const m=w.getBoundingClientRect();s(7,f=h),E=u-m.left,A=C-m.top,w.append(f),s(6,o=!0)},T=qe();let w,y,E=0,A=0,W=0,G=0,Y;const O=u=>{if(o){const C=F(document.elementsFromPoint(u.clientX,u.clientY));C&&y!=C&&(y&&y.dispatchEvent(new DragEvent("dragleave")),y=C,y.dispatchEvent(new DragEvent("dragenter"))),W=u.clientX,G=u.clientY,re(),T("dragmove"),D(Date.now())}},H=u=>{O(u.touches[0])},k=()=>{o&&(w.removeChild(f),y&&(y.dispatchEvent(new DragEvent("drop")),y=null),s(7,f=null),s(6,o=!1),T("dragend"))},Z=()=>{k()},F=u=>{const C=u.length;for(let h=0;h<C;h++)if(!f.compareDocumentPosition(u[h]))return u[h+1]},re=()=>{const u=w.getBoundingClientRect();s(7,f.style.transform=`translate(${W-E-u.left}px, ${G-A-u.top}px)`,f)};function D(u){Y||(Y=requestAnimationFrame(()=>{Y=0;let C=w;for(;C!==document.body;){if(C.scrollWidth>C.clientWidth){if(C.scrollLeft)break;if(C.scrollLeft=1,C.scrollLeft){C.scrollLeft=0;break}}C=C.parentElement}let h=w;for(;h!==document.body;){if(h.scrollHeight>h.clientHeight){if(h.scrollTop)break;if(h.scrollTop=1,h.scrollTop){h.scrollTop=0;break}}h=h.parentElement}const m=f==null?void 0:f.getBoundingClientRect();if(!m)return;const p=C.getBoundingClientRect(),v=h.getBoundingClientRect();if(m.left>=p.left&&m.right<=p.right&&m.top>=v.top&&m.bottom<=v.bottom)return;const N=Date.now();u=N-u,m.left<p.left?C.scrollBy((m.left-p.left)*u/30,0):m.right>p.right&&C.scrollBy((m.right-p.right)*u/30,0),m.top<v.top?h.scrollBy(0,(m.top-v.top)*u/30):m.bottom>v.bottom&&h.scrollBy(0,(m.bottom-v.bottom)*u/30),re(),D(N)}))}function d(u){ue[u?"unshift":"push"](()=>{w=u,s(1,w)})}return n.$$set=u=>{"classs"in u&&s(0,i=u.classs),"isDragging"in u&&s(6,o=u.isDragging),"dragElement"in u&&s(7,f=u.dragElement),"$$scope"in u&&s(9,l=u.$$scope)},[i,w,O,H,k,Z,o,f,a,l,r,d]}class st extends ge{constructor($){super(),he(this,$,nt,rt,ce,{classs:0,isDragging:6,dragElement:7,setDragElement:8})}get setDragElement(){return this.$$.ctx[8]}}const ot=n=>({}),Pe=n=>({});function lt(n){let $,s,r,l,i,o;const f=n[10].default,a=He(f,n,n[9],null),T=n[10].drag,w=He(T,n,n[9],Pe);return{c(){$=J("div"),a&&a.c(),s=z(),r=J("div"),w&&w.c(),this.h()},l(y){$=K(y,"DIV",{class:!0,style:!0});var E=Q($);a&&a.l(E),E.forEach(L),s=S(y),r=K(y,"DIV",{style:!0});var A=Q(r);w&&w.l(A),A.forEach(L),this.h()},h(){X($,"class",n[0]),pe($,"touch-action","none"),pe($,"user-select","none"),pe($,"width","fit-content"),pe(r,"display","none")},m(y,E){j(y,$,E),a&&a.m($,null),n[11]($),j(y,s,E),j(y,r,E),w&&w.m(r,null),n[12](r),l=!0,i||(o=[$e($,"mousedown",n[3]),$e($,"mouseup",n[5]),$e($,"touchstart",n[4]),$e($,"touchend",n[6],{passive:!0})],i=!0)},p(y,[E]){a&&a.p&&(!l||E&512)&&Ce(a,f,y,y[9],l?Ae(f,y[9],E,null):Le(y[9]),null),(!l||E&1)&&X($,"class",y[0]),w&&w.p&&(!l||E&512)&&Ce(w,T,y,y[9],l?Ae(T,y[9],E,ot):Le(y[9]),Pe)},i(y){l||(B(a,y),B(w,y),l=!0)},o(y){R(a,y),R(w,y),l=!1},d(y){y&&(L($),L(s),L(r)),a&&a.d(y),n[11](null),w&&w.d(y),n[12](null),i=!1,Fe(o)}}}function at(n,$,s){let{$$slots:r={},$$scope:l}=$,{classs:i=""}=$,{delay:o=0}=$,{setDragElement:f}=$;const a=qe();let T,w,y;const E=H=>{y=setTimeout(()=>{const k=(w.firstChild||T).cloneNode(!0);k.style.position="absolute",k.style.top=T.offsetTop+"px",k.style.left=T.offsetLeft+"px",f(H.clientX,H.clientY,k),a("dragstart")},o)},A=H=>{E(H.touches[0])},W=()=>{clearTimeout(y)},G=()=>{clearTimeout(y)};function Y(H){ue[H?"unshift":"push"](()=>{T=H,s(1,T)})}function O(H){ue[H?"unshift":"push"](()=>{w=H,s(2,w)})}return n.$$set=H=>{"classs"in H&&s(0,i=H.classs),"delay"in H&&s(7,o=H.delay),"setDragElement"in H&&s(8,f=H.setDragElement),"$$scope"in H&&s(9,l=H.$$scope)},[i,T,w,E,A,W,G,o,f,l,r,Y,O]}class it extends ge{constructor($){super(),he(this,$,at,lt,ce,{classs:0,delay:7,setDragElement:8})}}function ft(n){let $,s=n[1][n[4]]+"",r,l,i,o,f;return{c(){$=J("div"),r=Xe(s),this.h()},l(a){$=K(a,"DIV",{class:!0});var T=Q($);r=je(T,s),T.forEach(L),this.h()},h(){var a,T;X($,"class",l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+n[2][n[4]]+"px) "+(n[7]?"tt="+n[5]+"ms":"")+" "+(((a=n[8])==null?void 0:a.index)===n[4]&&((T=n[8])==null?void 0:T.type)===n[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(n[1][n[4]]?"":"none")),Ge(()=>n[15].call($))},m(a,T){j(a,$,T),P($,r),i=Je($,n[15].bind($)),o||(f=[$e($,"click",n[9]),$e($,"dragenter",n[10])],o=!0)},p(a,T){var w,y;T&18&&s!==(s=a[1][a[4]]+"")&&Ke(r,s),T&446&&l!==(l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+a[2][a[4]]+"px) "+(a[7]?"tt="+a[5]+"ms":"")+" "+(((w=a[8])==null?void 0:w.index)===a[4]&&((y=a[8])==null?void 0:y.type)===a[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(a[1][a[4]]?"":"none"))&&X($,"class",l)},d(a){a&&L($),i(),o=!1,Fe(f)}}}function ut(n){let $,s=n[1][n[4]]+"!!",r,l;return{c(){$=J("div"),r=Xe(s),this.h()},l(i){$=K(i,"DIV",{slot:!0,class:!0});var o=Q($);r=je(o,s),o.forEach(L),this.h()},h(){X($,"slot","drag"),X($,"class","ta=center fs=2.5 cs=move c=#000 @dark@c=#fff"),Ge(()=>n[14].call($))},m(i,o){j(i,$,o),P($,r),l=Je($,n[14].bind($))},p(i,o){o&18&&s!==(s=i[1][i[4]]+"!!")&&Ke(r,s)},d(i){i&&L($),l()}}}function dt(n){let $,s;return $=new it({props:{delay:300,setDragElement:n[6],$$slots:{drag:[ut],default:[ft]},$$scope:{ctx:n}}}),$.$on("dragstart",n[11]),{c(){x($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p(r,[l]){const i={};l&64&&(i.setDragElement=r[6]),l&65983&&(i.$$scope={dirty:l,ctx:r}),$.$set(i)},i(r){s||(B($.$$.fragment,r),s=!0)},o(r){R($.$$.fragment,r),s=!1},d(r){te($,r)}}}function mt(n,$,s){let r,l;se(n,_e,k=>s(7,r=k)),se(n,oe,k=>s(8,l=k));let{list:i}=$,{transforms:o}=$,{type:f}=$,{index:a}=$,{clientHeight:T}=$,{duration:w=400}=$,{setDragElement:y}=$,{transferList:E}=$,{moveItem:A}=$;const W=k=>{alert(k.target.textContent)},G=()=>{const k=l==null?void 0:l.index,Z=l==null?void 0:l.type;k===void 0||k===a&&Z===f||(Z===f?E(a):A(a))},Y=()=>{M(oe,l={type:f,index:a},l),M(_e,r=!0,r)};function O(){T=this.clientHeight,s(0,T)}function H(){T=this.clientHeight,s(0,T)}return n.$$set=k=>{"list"in k&&s(1,i=k.list),"transforms"in k&&s(2,o=k.transforms),"type"in k&&s(3,f=k.type),"index"in k&&s(4,a=k.index),"clientHeight"in k&&s(0,T=k.clientHeight),"duration"in k&&s(5,w=k.duration),"setDragElement"in k&&s(6,y=k.setDragElement),"transferList"in k&&s(12,E=k.transferList),"moveItem"in k&&s(13,A=k.moveItem)},[T,i,o,f,a,w,y,r,l,W,G,Y,E,A,O,H]}class Oe extends ge{constructor($){super(),he(this,$,mt,dt,ce,{list:1,transforms:2,type:3,index:4,clientHeight:0,duration:5,setDragElement:6,transferList:12,moveItem:13})}}function ct(n){let $,s="Empty",r,l;return{c(){$=J("div"),$.textContent=s,this.h()},l(i){$=K(i,"DIV",{class:!0,"data-svelte-h":!0}),Ve($)!=="svelte-1kkjwe6"&&($.textContent=s),this.h()},h(){X($,"class","us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer")},m(i,o){j(i,$,o),r||(l=$e($,"dragenter",n[0]),r=!0)},p:ne,i:ne,o:ne,d(i){i&&L($),r=!1,l()}}}function gt(n,$,s){let r;se(n,oe,o=>s(2,r=o));let{moveItem:l}=$;const i=()=>{(r==null?void 0:r.index)!==void 0&&l(0)};return n.$$set=o=>{"moveItem"in o&&s(1,l=o.moveItem)},[i,l]}class Ze extends ge{constructor($){super(),he(this,$,gt,ct,ce,{moveItem:1})}}function Re(n,$,s){const r=n.slice();return r[21]=$[s],r[22]=$,r[23]=s,r}function Me(n,$,s){const r=n.slice();return r[21]=$[s],r[24]=$,r[23]=s,r}function We(n){let $,s,r;function l(o){n[14](o,n[23])}let i={setDragElement:n[3],list:n[7],transforms:n[6],type:"todo",index:n[23],transferList:n[12],moveItem:n[13]};return n[0][n[23]]!==void 0&&(i.clientHeight=n[0][n[23]]),$=new Oe({props:i}),ue.push(()=>we($,"clientHeight",l)),{c(){x($.$$.fragment)},l(o){U($.$$.fragment,o)},m(o,f){ee($,o,f),r=!0},p(o,f){n=o;const a={};f&8&&(a.setDragElement=n[3]),f&128&&(a.list=n[7]),f&64&&(a.transforms=n[6]),!s&&f&1&&(s=!0,a.clientHeight=n[0][n[23]],Te(()=>s=!1)),$.$set(a)},i(o){r||(B($.$$.fragment,o),r=!0)},o(o){R($.$$.fragment,o),r=!1},d(o){te($,o)}}}function Ye(n){let $,s;return $=new Ze({props:{moveItem:n[13]}}),{c(){x($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p:ne,i(r){s||(B($.$$.fragment,r),s=!0)},o(r){R($.$$.fragment,r),s=!1},d(r){te($,r)}}}function ze(n){let $,s,r;function l(o){n[15](o,n[23])}let i={setDragElement:n[3],list:n[5],transforms:n[4],type:"done",index:n[23],transferList:n[12],moveItem:n[13]};return n[1][n[23]]!==void 0&&(i.clientHeight=n[1][n[23]]),$=new Oe({props:i}),ue.push(()=>we($,"clientHeight",l)),{c(){x($.$$.fragment)},l(o){U($.$$.fragment,o)},m(o,f){ee($,o,f),r=!0},p(o,f){n=o;const a={};f&8&&(a.setDragElement=n[3]),f&32&&(a.list=n[5]),f&16&&(a.transforms=n[4]),!s&&f&2&&(s=!0,a.clientHeight=n[1][n[23]],Te(()=>s=!1)),$.$set(a)},i(o){r||(B($.$$.fragment,o),r=!0)},o(o){R($.$$.fragment,o),r=!1},d(o){te($,o)}}}function Se(n){let $,s;return $=new Ze({props:{moveItem:n[13]}}),{c(){x($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p:ne,i(r){s||(B($.$$.fragment,r),s=!0)},o(r){R($.$$.fragment,r),s=!1},d(r){te($,r)}}}function ht(n){let $,s,r,l="To do",i,o,f,a,T,w,y,E,A,W="Done",G,Y,O,H,k,Z=ve(n[7]),F=[];for(let m=0;m<Z.length;m+=1)F[m]=We(Me(n,Z,m));const re=m=>R(F[m],1,1,()=>{F[m]=null});let D=n[7].length===1&&Ye(n),d=ve(n[5]),u=[];for(let m=0;m<d.length;m+=1)u[m]=ze(Re(n,d,m));const C=m=>R(u[m],1,1,()=>{u[m]=null});let h=n[5].length===1&&Se(n);return{c(){$=J("div"),s=J("div"),r=J("span"),r.textContent=l,i=z(),o=J("div"),f=z();for(let m=0;m<F.length;m+=1)F[m].c();a=z(),D&&D.c(),T=z(),w=J("div"),y=z(),E=J("div"),A=J("span"),A.textContent=W,G=z(),Y=J("div"),O=z();for(let m=0;m<u.length;m+=1)u[m].c();H=z(),h&&h.c(),this.h()},l(m){$=K(m,"DIV",{class:!0});var p=Q($);s=K(p,"DIV",{class:!0});var v=Q(s);r=K(v,"SPAN",{class:!0,"data-svelte-h":!0}),Ve(r)!=="svelte-2gma2k"&&(r.textContent=l),i=S(v),o=K(v,"DIV",{class:!0}),Q(o).forEach(L),f=S(v);for(let ae=0;ae<F.length;ae+=1)F[ae].l(v);a=S(v),D&&D.l(v),v.forEach(L),T=S(p),w=K(p,"DIV",{class:!0}),Q(w).forEach(L),y=S(p),E=K(p,"DIV",{class:!0});var N=Q(E);A=K(N,"SPAN",{class:!0,"data-svelte-h":!0}),Ve(A)!=="svelte-ovcjna"&&(A.textContent=W),G=S(N),Y=K(N,"DIV",{class:!0}),Q(Y).forEach(L),O=S(N);for(let ae=0;ae<u.length;ae+=1)u[ae].l(N);H=S(N),h&&h.l(N),N.forEach(L),p.forEach(L),this.h()},h(){X(r,"class","fs=2 bold"),X(o,"class","h=.5"),X(s,"class","flex column"),X(w,"class","w=5 h=5"),X(A,"class","fs=2 bold"),X(Y,"class","h=.5"),X(E,"class","flex column"),X($,"class","flex flex-wrap=wrap")},m(m,p){j(m,$,p),P($,s),P(s,r),P(s,i),P(s,o),P(s,f);for(let v=0;v<F.length;v+=1)F[v]&&F[v].m(s,null);P(s,a),D&&D.m(s,null),P($,T),P($,w),P($,y),P($,E),P(E,A),P(E,G),P(E,Y),P(E,O);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(E,null);P(E,H),h&&h.m(E,null),k=!0},p(m,p){if(p&12489){Z=ve(m[7]);let v;for(v=0;v<Z.length;v+=1){const N=Me(m,Z,v);F[v]?(F[v].p(N,p),B(F[v],1)):(F[v]=We(N),F[v].c(),B(F[v],1),F[v].m(s,a))}for(be(),v=Z.length;v<F.length;v+=1)re(v);De()}if(m[7].length===1?D?(D.p(m,p),p&128&&B(D,1)):(D=Ye(m),D.c(),B(D,1),D.m(s,null)):D&&(be(),R(D,1,1,()=>{D=null}),De()),p&12346){d=ve(m[5]);let v;for(v=0;v<d.length;v+=1){const N=Re(m,d,v);u[v]?(u[v].p(N,p),B(u[v],1)):(u[v]=ze(N),u[v].c(),B(u[v],1),u[v].m(E,H))}for(be(),v=d.length;v<u.length;v+=1)C(v);De()}m[5].length===1?h?(h.p(m,p),p&32&&B(h,1)):(h=Se(m),h.c(),B(h,1),h.m(E,null)):h&&(be(),R(h,1,1,()=>{h=null}),De())},i(m){if(!k){for(let p=0;p<Z.length;p+=1)B(F[p]);B(D);for(let p=0;p<d.length;p+=1)B(u[p]);B(h),k=!0}},o(m){F=F.filter(Boolean);for(let p=0;p<F.length;p+=1)R(F[p]);R(D),u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)R(u[p]);R(h),k=!1},d(m){m&&L($),Be(F,m),D&&D.d(),Be(u,m),h&&h.d()}}}function pt(n){let $,s;return{c(){$=new ke(!1),s=le(),this.h()},l(r){$=Ie(r,!1),s=le(),this.h()},h(){$.a=s},m(r,l){$.m(n[8],r,l),j(r,s,l)},p:ne,d(r){r&&(L(s),$.d())}}}function _t(n){let $,s,r,l,i;return $=new Ne({props:{name:"DragItemForExample"}}),{c(){x($.$$.fragment),s=z(),r=new ke(!1),l=le(),this.h()},l(o){U($.$$.fragment,o),s=S(o),r=Ie(o,!1),l=le(),this.h()},h(){r.a=l},m(o,f){ee($,o,f),j(o,s,f),r.m(n[9],o,f),j(o,l,f),i=!0},p:ne,i(o){i||(B($.$$.fragment,o),i=!0)},o(o){R($.$$.fragment,o),i=!1},d(o){o&&(L(s),L(l),r.d()),te($,o)}}}function bt(n){let $,s,r,l,i;return $=new Ne({props:{name:"DragItemPlaceHolderForExample"}}),{c(){x($.$$.fragment),s=z(),r=new ke(!1),l=le(),this.h()},l(o){U($.$$.fragment,o),s=S(o),r=Ie(o,!1),l=le(),this.h()},h(){r.a=l},m(o,f){ee($,o,f),j(o,s,f),r.m(n[10],o,f),j(o,l,f),i=!0},p:ne,i(o){i||(B($.$$.fragment,o),i=!0)},o(o){R($.$$.fragment,o),i=!1},d(o){o&&(L(s),L(l),r.d()),te($,o)}}}function Dt(n){let $,s,r,l=`

${g("import")} ${e("{")} ${t("writable")}, ${g("type")} ${t("Writable")} ${e("}")} ${g("from")} ${_("svelte/store")}

${g("export")} ${c("const")} ${t("todo$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("todoTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("done$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("doneTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${b("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("transition$",!0)} = ${b("writable")}${e("(")}${c("false")}${e(")")}
${g("export")} ${c("const")} ${t("drag$",!0)}: ${I("Writable")}${e("<")}${e("{",1)} ${t("type")}: ${_("todo")} | ${_("done")}, ${t("index")}: ${I("number")} ${e("}",1)} | ${c("null")}${e(">")} = ${b("writable")}${e("(")}${c("null")}${e(")")}`,i,o;return $=new tt({props:{name:"store"}}),{c(){x($.$$.fragment),s=z(),r=new ke(!1),i=le(),this.h()},l(f){U($.$$.fragment,f),s=S(f),r=Ie(f,!1),i=le(),this.h()},h(){r.a=i},m(f,a){ee($,f,a),j(f,s,a),r.m(l,f,a),j(f,i,a),o=!0},p:ne,i(f){o||(B($.$$.fragment,f),o=!0)},o(f){R($.$$.fragment,f),o=!1},d(f){f&&(L(s),L(i),r.d()),te($,f)}}}function vt(n){let $,s,r,l,i,o,f,a,T,w,y,E,A,W,G,Y,O,H,k;function Z(D){n[16](D)}function F(D){n[17](D)}let re={$$slots:{default:[ht]},$$scope:{ctx:n}};return n[2]!==void 0&&(re.isDragging=n[2]),n[3]!==void 0&&(re.setDragElement=n[3]),$=new st({props:re}),ue.push(()=>we($,"isDragging",Z)),ue.push(()=>we($,"setDragElement",F)),$.$on("dragend",n[11]),o=new ye({props:{isCode:!0,$$slots:{default:[pt]},$$scope:{ctx:n}}}),w=new ye({props:{isCode:!0,$$slots:{default:[_t]},$$scope:{ctx:n}}}),W=new ye({props:{isCode:!0,$$slots:{default:[bt]},$$scope:{ctx:n}}}),H=new ye({props:{isCode:!0,$$slots:{default:[Dt]},$$scope:{ctx:n}}}),{c(){x($.$$.fragment),l=z(),i=J("div"),x(o.$$.fragment),f=z(),a=J("div"),T=z(),x(w.$$.fragment),y=z(),E=J("div"),A=z(),x(W.$$.fragment),G=z(),Y=J("div"),O=z(),x(H.$$.fragment),this.h()},l(D){U($.$$.fragment,D),l=S(D),i=K(D,"DIV",{});var d=Q(i);U(o.$$.fragment,d),f=S(d),a=K(d,"DIV",{class:!0}),Q(a).forEach(L),T=S(d),U(w.$$.fragment,d),y=S(d),E=K(d,"DIV",{class:!0}),Q(E).forEach(L),A=S(d),U(W.$$.fragment,d),G=S(d),Y=K(d,"DIV",{class:!0}),Q(Y).forEach(L),O=S(d),U(H.$$.fragment,d),d.forEach(L),this.h()},h(){X(a,"class","h=1"),X(E,"class","h=1"),X(Y,"class","h=1")},m(D,d){ee($,D,d),j(D,l,d),j(D,i,d),ee(o,i,null),P(i,f),P(i,a),P(i,T),ee(w,i,null),P(i,y),P(i,E),P(i,A),ee(W,i,null),P(i,G),P(i,Y),P(i,O),ee(H,i,null),k=!0},p(D,d){const u={};d&33554683&&(u.$$scope={dirty:d,ctx:D}),!s&&d&4&&(s=!0,u.isDragging=D[2],Te(()=>s=!1)),!r&&d&8&&(r=!0,u.setDragElement=D[3],Te(()=>r=!1)),$.$set(u);const C={};d&33554432&&(C.$$scope={dirty:d,ctx:D}),o.$set(C);const h={};d&33554432&&(h.$$scope={dirty:d,ctx:D}),w.$set(h);const m={};d&33554432&&(m.$$scope={dirty:d,ctx:D}),W.$set(m);const p={};d&33554432&&(p.$$scope={dirty:d,ctx:D}),H.$set(p)},i(D){k||(B($.$$.fragment,D),B(o.$$.fragment,D),B(w.$$.fragment,D),B(W.$$.fragment,D),B(H.$$.fragment,D),k=!0)},o(D){R($.$$.fragment,D),R(o.$$.fragment,D),R(w.$$.fragment,D),R(W.$$.fragment,D),R(H.$$.fragment,D),k=!1},d(D){D&&(L(l),L(i)),te($,D),te(o),te(w),te(W),te(H)}}}function yt(n){let $,s;return $=new et({props:{$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){x($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p(r,[l]){const i={};l&33554687&&(i.$$scope={dirty:l,ctx:r}),$.$set(i)},i(r){s||(B($.$$.fragment,r),s=!0)},o(r){R($.$$.fragment,r),s=!1},d(r){te($,r)}}}function Et(n,$,s){let r,l,i,o,f,a;se(n,oe,d=>s(18,r=d)),se(n,_e,d=>s(19,l=d)),se(n,ie,d=>s(4,i=d)),se(n,de,d=>s(5,o=d)),se(n,fe,d=>s(6,f=d)),se(n,me,d=>s(7,a=d));const T=`${q("script",` ${t("lang")}=${_("ts")}`,`
${g("import")} ${t("DragItemForExample")} ${g("from")} ${_("parts/ref/DragItemForExample.svelte")}
${g("import")} ${t("DragItemPlaceHolderForExample")} ${g("from")} ${_("parts/ref/DragItemPlaceHolderForExample.svelte")}
${g("import")} ${e("{")} ${t("done$")}, ${t("doneTf$")}, ${t("drag$")}, ${t("todo$")}, ${t("todoTf$")}, ${t("transition$")} ${e("}")} ${g("from")} ${_("parts/ref/store")}
${g("import")} ${e("{")} ${t("onDestroy")}, ${t("onMount")} ${e("}")} ${g("from")} ${_("svelte")}
${g("import")} ${e("{")} ${t("DragContainer")} ${e("}")} ${g("from")} ${_("svelte-ts-lube")}

${c("const")} ${t("todoHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("const")} ${t("doneHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("let")} ${t("isDragging")}: ${I("boolean")}
${c("let")} ${b("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${b("handleDragend")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${t("$drag$")} = ${c("null")}
	${b("reOrdering")}${e("(",1)}${t("from",!0)}, ${t("type",!0)}${e(")",1)}
${e("}")}
${c("const")} ${b("transferList")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type",!0)} === ${_("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${g("if")} ${e("(",1)}${t("from",!0)} < ${t("index")}${e(") {",1)}
		${g("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${V(0)}
			${e("}")}
		${e("}",2)} ${g("else")} ${e("{",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = -${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${g("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${V(0)}
			${e("}")}
		${e("}",2)} ${g("else")} ${e("{",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)}
	${e("(",1)}${t("type",!0)} === ${_("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${b("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${c("const")} ${b("moveItem")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${g("if")} ${e("(",1)}${t("from",!0)} === ${_("todo")}${e(") {",1)}
		${c("const")} ${t("before",!0)} = ${t("$todo$")}.${b("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$done$")}.${b("slice")}${e("()",2)}
		${t("after",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
		${t("$todo$")} = ${t("before",!0)}
		${t("$done$")} = ${t("after",!0)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${_("done")}, ${t("index: index")} ${e("}",2)}
		${t("doneHeights",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("todoHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("todoHeights",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${c("const")} ${t("before",!0)} = ${t("$done$")}.${b("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$todo$")}.${b("slice")}${e("()",2)}
		${t("after",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
		${t("$done$")} = ${t("before",!0)}
		${t("$todo$")} = ${t("after",!0)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${_("todo")}, ${t("index: index")} ${e("}",2)}
		${t("todoHeights",!0)}.${b("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("doneHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("doneHeights",!0)}.${b("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${b("reOrdering")} = ${e("(")}${t("from")}: ${I("number")}, ${t("type")}: ${I("string")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${_("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${g("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} === ${V(0)}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${c("const")} ${t("list",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${_("todo")} ? ${t("$todo$")} : ${t("$done$")} ${e(")",2)}${e("]",1)}
	${c("const")} ${t("temp",!0)} = ${t("list",!0)}${e("[",1)}${t("from")}${e("]",1)}
	${c("let")} ${t("i")}
	${g("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} < ${V(0)}${e(") {",1)}
		${g("for")} ${e("(",2)}${t("i")} = ${t("from")} - ${V(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}--${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} + ${V(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${V(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} + ${V(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${g("for")} ${e("(",2)}${t("i")} = ${t("from")} + ${V(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}++${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} - ${V(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${V(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} - ${V(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)}
	${t("transforms",!0)}${e("[",1)}${t("from")}${e("]",1)} = ${V(0)}
	${t("$transition$")} = ${c("false")}
	,${e("(",1)}${t("type")} === ${_("todo")} ? ${t("todo$",!0)} : ${t("done$",!0)} ${e(")",1)}.${b("set")}${e("(",1)}${t("list",!0)}${e(")",1)}
	,${e("(",1)}${t("type")} === ${_("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${b("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${b("onMount")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[",2)}
		${_("Task A")},
		${_("Task B")},
		${_("Task C")},
		${_("Task D")},
		${_("Task E")},
		${_("Task F")},
		${_("Task G")},
		${_("Task H")},
		${_("Task I")},
		${_("Task J")},
		${_("Task K")},
		${_("Task L")},
		${_("")}
	${e("]",2)}
	${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$todo$")}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
	${t("$todo$")} = ${e("[",2)} ${_("Task Z")}, ${_("")} ${e("]",2)}
	${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$done$")}.${t("length")}${e(")",2)}.${b("fill")}${e("(",2)}${V(0)}${e(")",2)}
${e("}",1)}${e(")")}
${b("onDestroy")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[]",2)}
	${t("$todoTf$")} = ${e("[]",2)}
	${t("$done$")} = ${e("[]",2)}
	${t("$doneTf$")} = ${e("[]",2)}
	${t("$transition$")} = ${c("false")}
	${t("$drag$")} = ${c("null")}
${e("}",1)}${e(")")}

`)}

${q("DragContainer",` ${g("bind")}:${t("isDragging")}
		${g("bind")}:${b("setDragElement")}
		${g("on")}:${I("dragend")}=${e("{")}${b("handleDragend")}${e("}")}`,`
	${q("div",` ${t("class")}=${_("flex flex-wrap=wrap")}`,`
		${q("div",` ${t("class")}=${_("flex column")}`,`
			${q("span",` ${t("class")}=${_("fs=2 bold")}`,"To do")}
			${q("div",` ${t("class")}=${_("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$todo$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${q("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("todoHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${b("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$todo$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$todoTf$")}${e("}")}
					${t("list")}=${_("todo")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${b("transferList")}${e("}")}
					${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$todo$")}.${t("length")} === ${V(1)}${e("}")}
			${q("DragItemPlaceHolderForExample",` ${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
		${q("div",` ${t("class")}=${_("w=5 h=5")}`,"")}
		${q("div",` ${t("class")}=${_("flex column")}`,`
			${q("span",` ${t("class")}=${_("fs=2 bold")}`,"Done")}
			${q("div",` ${t("class")}=${_("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$done$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${q("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("doneHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${b("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$done$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$doneTf$")}${e("}")}
					${t("list")}=${_("done")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${b("transferList")}${e("}")}
					${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$done$")}.${t("length")} === ${V(1)}${e("}")}
			${q("DragItemPlaceHolderForExample",` ${e("{")}${b("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
	`)}
`)}`,w=`

${q("script",` ${t("lang")}=${_("ts")}`,`
${g("import")} ${e("{")} ${t("Dragable")} ${e("}")} ${g("from")} ${_("svelte-ts-lube")}
${g("import")} ${e("{")} ${t("drag$")}, ${t("transition$")} ${e("}")} ${g("from")} ${_("parts/ref/store")}

${g("export")} ${c("let")} ${t("list")}: ${I("string")}${e("[]")}
${g("export")} ${c("let")} ${t("transforms")}: ${I("number")}${e("[]")}
${g("export")} ${c("let")} ${t("type")}: ${_("todo")} | ${_("done")}
${g("export")} ${c("let")} ${t("index")}: ${I("number")}
${g("export")} ${c("let")} ${t("clientHeight")}: ${I("number")}
${g("export")} ${c("let")} ${t("duration")} = ${V(400)}
${g("export")} ${c("let")} ${b("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${b("transferList")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${b("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${b("handleClick")} = ${e("()")} ${c("=>")} ${e("{")}
	${b("alert")}${e("(",1)}${e("(",2)}${t("event")}.${t("target")} ${g("as")} ${I("HTMLElement")}${e(")",2)}.${t("textContent")}${e(")",1)}
${e("}")}
${c("const")} ${b("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${c("const")} ${t("t",!0)} = ${t("$drag$")}?.${t("type")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")} || ${t("i",!0)} === ${t("index")} && ${t("t",!0)} === ${t("type")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${g("if")} ${e("(",1)}${t("t",!0)} === ${t("type")}${e(") {",1)}
		${b("transferList")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${b("moveItem")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${b("handleDragstart")} = ${e("()")} ${c("=>")} ${e("{")}
	${t("$drag$")} = ${e("{",1)} ${t("type: type")}, ${t("index: index")} ${e("}",1)}
	${t("$transition$")} = ${c("true")}
${e("}")}
`)}

${q("Dragable",` ${g("on")}:${I("dragstart")}=${e("{")}${b("handleDragstart")}${e("}")}
		${t("delay")}=${e("{")}${V(300)}${e("}")}
		${e("{")}${b("setDragElement")}${e("}")}`,`
	${q("div",` ${g("bind")}:${t("clientHeight")}
			${t("class")}=${_('"w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY(',!1)}${e("{",2)}${t("transforms")}${e("[")}${t("index")}${e("]")}${e("}",2)}${_("px)",!1)}
			${e("{",2)}${t("$transition$")} ? ${_("tt=")} + ${t("duration")} + ${_("ms")} : ${_("")}${e("}",2)}
			${e("{",2)}${t("$drag$")}?.${t("index")} === ${t("index")} && ${t("$drag$")}?.${t("type")} === ${t("type")} ? ${_(" opacity=.2 ol=.2_solid_#aaa")} : ${_("")}${e("}",2)}
			${e("{",2)}!${t("list")}${e("[")}${t("index")}${e("]")} ? ${_("none")} : ${_("")}${e("}",2)}
			${g("on")}:${I("dragenter")}=${e("{")}${b("handleDragenter")}${e("}")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)}${e("}")}
	`)}
	${q("div",` ${t("slot")}=${_("drag")}
			${g("bind")}:${t("clientHeight")}
			${t("class")}=${_("ta=center fs=2.5 cs=move c=#000 @dark@c=#fff")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)} + ${_("!!")}${e("}")}
	`)}
`)}`,y=`

${q("script",` ${t("lang")}=${_("ts")}`,`
${g("import")} ${e("{")} ${t("drag$")} ${e("}")} ${g("from")} ${_("parts/ref/store")}

${g("export")} ${c("let")} ${b("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${b("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${b("moveItem")}${e("(",2)}${V(0)}${e(")",2)}
${e("}")}
`)}

${q("div",` ${t("style")}=${_("user-select:none")}
		${t("class")}=${_("w=6 ol=.1_dashed ta=center fs=2 cs=pointer")}
		${g("on")}:${I("dragenter")}=${e("{")}${b("handleDragenter")}${e("}")}`,`
	Empty
`)}`,E=[],A=[];let W,G;const Y=()=>{const d=r.index,u=r.type;M(oe,r=null,r),k(d,u)},O=d=>{const u=r.index,C=r.type,h=[...C==="todo"?f:i],m=C==="todo"?E:A;if(u<d)if(h[d])for(let p=d;h[p];p++)h[u]-=m[p],h[p]=0;else for(let p=d;!h[p];p--)h[u]+=m[p],h[p]=-m[u];else if(h[d])for(let p=d;h[p];p--)h[u]+=m[p],h[p]=0;else for(let p=d;!h[p];p++)h[u]-=m[p],h[p]=m[u];(C==="todo"?fe:ie).set(h)},H=d=>{const u=r.index;if(r.type==="todo"){const h=[...a],m=[...o];m.splice(d,0,h[u]),h.splice(u,1),M(me,a=h,a),M(de,o=m,o),M(fe,f=new Array(h.length).fill(0),f),M(ie,i=new Array(m.length).fill(0),i),M(oe,r={type:"done",index:d},r),A.splice(d,0,E[u]),E.splice(u,1)}else{const h=[...o],m=[...a];m.splice(d,0,h[u]),h.splice(u,1),M(de,o=h,o),M(me,a=m,a),M(ie,i=new Array(h.length).fill(0),i),M(fe,f=new Array(m.length).fill(0),f),M(oe,r={type:"todo",index:d},r),E.splice(d,0,A[u]),A.splice(u,1)}},k=(d,u)=>{const C=[...u==="todo"?f:i];if(C[d]===0)return;const h=[...u==="todo"?a:o],m=h[d];let p;if(C[d]<0){for(p=d-1;C[p];p--)h[p+1]=h[p],C[p]=0;h[p+1]=m}else{for(p=d+1;C[p];p++)h[p-1]=h[p],C[p]=0;h[p-1]=m}C[d]=0,M(_e,l=!1,l),(u==="todo"?me:de).set(h),(u==="todo"?fe:ie).set(C)};Qe(()=>{M(me,a=["Task A","Task B","Task C","Task D","Task E","Task F","Task G","Task H","Task I","Task J","Task K","Task L",""],a),M(fe,f=new Array(a.length).fill(0),f),M(de,o=["Task Z",""],o),M(ie,i=new Array(o.length).fill(0),i)}),xe(()=>{M(me,a=[],a),M(fe,f=[],f),M(de,o=[],o),M(ie,i=[],i),M(_e,l=!1,l),M(oe,r=null,r)});function Z(d,u){n.$$.not_equal(E[u],d)&&(E[u]=d,s(0,E))}function F(d,u){n.$$.not_equal(A[u],d)&&(A[u]=d,s(1,A))}function re(d){W=d,s(2,W)}function D(d){G=d,s(3,G)}return[E,A,W,G,i,o,f,a,T,w,y,Y,O,H,Z,F,re,D]}class Tt extends ge{constructor($){super(),he(this,$,Et,yt,ce,{})}}function wt(n){let $,s,r;return s=new Tt({}),{c(){$=z(),x(s.$$.fragment),this.h()},l(l){Ue("svelte-vkwsnr",document.head).forEach(L),$=S(l),U(s.$$.fragment,l),this.h()},h(){document.title="Drag and Drop | Reference"},m(l,i){j(l,$,i),ee(s,l,i),r=!0},p:ne,i(l){r||(B(s.$$.fragment,l),r=!0)},o(l){R(s.$$.fragment,l),r=!1},d(l){l&&L($),te(s,l)}}}class Pt extends ge{constructor($){super(),he(this,$,null,wt,ce,{})}}export{Pt as component};
