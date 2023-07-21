import{s as ce,x as ke,f as j,a as z,g as G,h as x,d as A,c as q,j as S,i as N,r as $e,z as He,A as Ce,B as Le,G as Ve,N as qe,p as ue,v as se,l as Se,m as Xe,H as Ne,y as P,O as Oe,n as je,w as W,F as Ae,u as re,o as Ze,C as xe,M as Te,J as we,e as le,K as Ie,D as Fe,I as Qe}from"../chunks/scheduler.37114a5d.js";import{S as ge,i as he,a as B,t as M,b as Q,d as U,m as ee,e as te,f as ye,g as _e,c as be}from"../chunks/index.80e0ab0e.js";import{e as De}from"../chunks/each.e5cbc508.js";import{t as pe,d as oe,a as ie,b as de,c as fe,e as me}from"../chunks/store.f24e6a61.js";import{C as ve}from"../chunks/CodePage.aad8268b.js";import{C as Ue}from"../chunks/ComponentTabView.d9ff6e19.js";import{h as X,k as g,n as t,s as D,b as e,d as c,t as I,f as v,i as V}from"../chunks/highlighter.e3fc48dc.js";import{I as Ge}from"../chunks/IdeSvelte.4415f618.js";import{I as et}from"../chunks/IdeTypescript.e79d33ca.js";const tt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,$t=n=>({}),Be=n=>({});function nt(n){let $,s,r,l,a,o,f;const u=n[10].default,_=ke(u,n,n[9],null),y=n[10].drag,k=ke(y,n,n[9],Be);return{c(){$=j("div"),_&&_.c(),r=z(),l=j("div"),k&&k.c(),this.h()},l(b){$=G(b,"DIV",{class:!0});var H=x($);_&&_.l(H),H.forEach(A),r=q(b),l=G(b,"DIV",{class:!0});var R=x(l);k&&k.l(R),R.forEach(A),this.h()},h(){S($,"class",s="touch-action=none w=fit-content us=none "+n[0]),S(l,"class","none")},m(b,H){N(b,$,H),_&&_.m($,null),n[11]($),N(b,r,H),N(b,l,H),k&&k.m(l,null),n[12](l),a=!0,o||(f=[$e($,"mousedown",n[3]),$e($,"mouseup",n[5]),$e($,"touchstart",n[4]),$e($,"touchend",n[6],{passive:!0})],o=!0)},p(b,[H]){_&&_.p&&(!a||H&512)&&He(_,u,b,b[9],a?Le(u,b[9],H,null):Ce(b[9]),null),(!a||H&1&&s!==(s="touch-action=none w=fit-content us=none "+b[0]))&&S($,"class",s),k&&k.p&&(!a||H&512)&&He(k,y,b,b[9],a?Le(y,b[9],H,$t):Ce(b[9]),Be)},i(b){a||(B(_,b),B(k,b),a=!0)},o(b){M(_,b),M(k,b),a=!1},d(b){b&&(A($),A(r),A(l)),_&&_.d(b),n[11](null),k&&k.d(b),n[12](null),o=!1,Ve(f)}}}function rt(n,$,s){let{$$slots:r={},$$scope:l}=$,{classs:a=""}=$,{delay:o=0}=$,{setDragElement:f}=$;const u=qe();let _,y,k;const b=C=>{k=setTimeout(()=>{const w=(y.firstChild||_).cloneNode(!0);w.style.position="absolute",w.style.top=_.offsetTop+"px",w.style.left=_.offsetLeft+"px",f(C.clientX,C.clientY,w),u("dragstart")},o)},H=C=>{b(C.touches[0])},R=()=>{clearTimeout(k)},O=()=>{clearTimeout(k)};function Y(C){ue[C?"unshift":"push"](()=>{_=C,s(1,_)})}function K(C){ue[C?"unshift":"push"](()=>{y=C,s(2,y)})}return n.$$set=C=>{"classs"in C&&s(0,a=C.classs),"delay"in C&&s(7,o=C.delay),"setDragElement"in C&&s(8,f=C.setDragElement),"$$scope"in C&&s(9,l=C.$$scope)},[a,_,y,b,H,R,O,o,f,l,r,Y,K]}class st extends ge{constructor($){super(),he(this,$,rt,nt,ce,{classs:0,delay:7,setDragElement:8})}}function ot(n){let $,s=n[1][n[4]]+"",r,l,a,o,f;return{c(){$=j("div"),r=Se(s),this.h()},l(u){$=G(u,"DIV",{class:!0});var _=x($);r=Xe(_,s),_.forEach(A),this.h()},h(){var u,_;S($,"class",l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+n[2][n[4]]+"px) "+(n[7]?"tt="+n[5]+"ms":"")+" "+(((u=n[8])==null?void 0:u.index)===n[4]&&((_=n[8])==null?void 0:_.type)===n[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(n[1][n[4]]?"":"none")),Ne(()=>n[15].call($))},m(u,_){N(u,$,_),P($,r),a=Oe($,n[15].bind($)),o||(f=[$e($,"click",n[9]),$e($,"dragenter",n[10])],o=!0)},p(u,_){var y,k;_&18&&s!==(s=u[1][u[4]]+"")&&je(r,s),_&446&&l!==(l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+u[2][u[4]]+"px) "+(u[7]?"tt="+u[5]+"ms":"")+" "+(((y=u[8])==null?void 0:y.index)===u[4]&&((k=u[8])==null?void 0:k.type)===u[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(u[1][u[4]]?"":"none"))&&S($,"class",l)},d(u){u&&A($),a(),o=!1,Ve(f)}}}function lt(n){let $,s=n[1][n[4]]+"!!",r,l;return{c(){$=j("div"),r=Se(s),this.h()},l(a){$=G(a,"DIV",{slot:!0,class:!0});var o=x($);r=Xe(o,s),o.forEach(A),this.h()},h(){S($,"slot","drag"),S($,"class","ta=center fs=2.5 cs=move c=#000 @dark@c=#fff"),Ne(()=>n[14].call($))},m(a,o){N(a,$,o),P($,r),l=Oe($,n[14].bind($))},p(a,o){o&18&&s!==(s=a[1][a[4]]+"!!")&&je(r,s)},d(a){a&&A($),l()}}}function at(n){let $,s;return $=new st({props:{delay:300,setDragElement:n[6],$$slots:{drag:[lt],default:[ot]},$$scope:{ctx:n}}}),$.$on("dragstart",n[11]),{c(){Q($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p(r,[l]){const a={};l&64&&(a.setDragElement=r[6]),l&65983&&(a.$$scope={dirty:l,ctx:r}),$.$set(a)},i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function it(n,$,s){let r,l;se(n,pe,w=>s(7,r=w)),se(n,oe,w=>s(8,l=w));let{list:a}=$,{transforms:o}=$,{type:f}=$,{index:u}=$,{clientHeight:_}=$,{duration:y=400}=$,{setDragElement:k}=$,{transferList:b}=$,{moveItem:H}=$;const R=w=>{alert(w.target.textContent)},O=()=>{const w=l==null?void 0:l.index,Z=l==null?void 0:l.type;w===void 0||w===u&&Z===f||(Z===f?b(u):H(u))},Y=()=>{W(oe,l={type:f,index:u},l),W(pe,r=!0,r)};function K(){_=this.clientHeight,s(0,_)}function C(){_=this.clientHeight,s(0,_)}return n.$$set=w=>{"list"in w&&s(1,a=w.list),"transforms"in w&&s(2,o=w.transforms),"type"in w&&s(3,f=w.type),"index"in w&&s(4,u=w.index),"clientHeight"in w&&s(0,_=w.clientHeight),"duration"in w&&s(5,y=w.duration),"setDragElement"in w&&s(6,k=w.setDragElement),"transferList"in w&&s(12,b=w.transferList),"moveItem"in w&&s(13,H=w.moveItem)},[_,a,o,f,u,y,k,r,l,R,O,Y,b,H,K,C]}class Je extends ge{constructor($){super(),he(this,$,it,at,ce,{list:1,transforms:2,type:3,index:4,clientHeight:0,duration:5,setDragElement:6,transferList:12,moveItem:13})}}const{document:Ee}=tt;function ft(n){let $,s,r,l,a,o;const f=n[10].default,u=ke(f,n,n[9],null);return{c(){$=z(),s=j("div"),u&&u.c(),this.h()},l(_){$=q(_),s=G(_,"DIV",{class:!0});var y=x(s);u&&u.l(y),y.forEach(A),this.h()},h(){S(s,"class",r="relative "+n[0])},m(_,y){N(_,$,y),N(_,s,y),u&&u.m(s,null),n[11](s),l=!0,a||(o=[$e(Ee.body,"mousemove",n[2]),$e(Ee.body,"mouseup",n[4]),$e(Ee.body,"touchmove",n[3]),$e(Ee.body,"touchend",n[5])],a=!0)},p(_,[y]){u&&u.p&&(!l||y&512)&&He(u,f,_,_[9],l?Le(f,_[9],y,null):Ce(_[9]),null),(!l||y&1&&r!==(r="relative "+_[0]))&&S(s,"class",r)},i(_){l||(B(u,_),l=!0)},o(_){M(u,_),l=!1},d(_){_&&(A($),A(s)),u&&u.d(_),n[11](null),a=!1,Ve(o)}}}function ut(n,$,s){let{$$slots:r={},$$scope:l}=$,{classs:a=""}=$,{isDragging:o=!1}=$,{dragElement:f=null}=$;const u=(i,L,h)=>{const m=y.getBoundingClientRect();s(7,f=h),b=i-m.left,H=L-m.top,y.appendChild(f),s(6,o=!0)},_=qe();let y,k,b=0,H=0,R=0,O=0,Y;const K=i=>{if(o){const L=F(document.elementsFromPoint(i.clientX,i.clientY));L&&k!=L&&(k&&k.dispatchEvent(new DragEvent("dragleave")),k=L,k.dispatchEvent(new DragEvent("dragenter"))),R=i.clientX,O=i.clientY,ne(),_("dragmove"),E(Date.now())}},C=i=>{K(i.touches[0])},w=()=>{o&&(y.removeChild(f),k&&(k.dispatchEvent(new DragEvent("drop")),k=null),s(7,f=null),s(6,o=!1),_("dragend"))},Z=()=>{w()},F=i=>{const L=i.length;for(let h=0;h<L;h++)if(!f.compareDocumentPosition(i[h]))return i[h+1]},ne=()=>{const i=y.getBoundingClientRect();s(7,f.style.transform=`translate(${R-b-i.left}px, ${O-H-i.top}px)`,f)};function E(i){Y||(Y=requestAnimationFrame(()=>{Y=0;let L=y;for(;L!==document.body;){if(L.scrollWidth>L.clientWidth){if(L.scrollLeft)break;if(L.scrollLeft=1,L.scrollLeft){L.scrollLeft=0;break}}L=L.parentElement}let h=y;for(;h!==document.body;){if(h.scrollHeight>h.clientHeight){if(h.scrollTop)break;if(h.scrollTop=1,h.scrollTop){h.scrollTop=0;break}}h=h.parentElement}const m=f==null?void 0:f.getBoundingClientRect();if(!m)return;const p=L.getBoundingClientRect(),T=h.getBoundingClientRect();if(m.left>=p.left&&m.right<=p.right&&m.top>=T.top&&m.bottom<=T.bottom)return;const J=Date.now();i=J-i,m.left<p.left?L.scrollBy((m.left-p.left)*i/30,0):m.right>p.right&&L.scrollBy((m.right-p.right)*i/30,0),m.top<T.top?h.scrollBy(0,(m.top-T.top)*i/30):m.bottom>T.bottom&&h.scrollBy(0,(m.bottom-T.bottom)*i/30),ne(),E(J)}))}function d(i){ue[i?"unshift":"push"](()=>{y=i,s(1,y)})}return n.$$set=i=>{"classs"in i&&s(0,a=i.classs),"isDragging"in i&&s(6,o=i.isDragging),"dragElement"in i&&s(7,f=i.dragElement),"$$scope"in i&&s(9,l=i.$$scope)},[a,y,K,C,w,Z,o,f,u,l,r,d]}class dt extends ge{constructor($){super(),he(this,$,ut,ft,ce,{classs:0,isDragging:6,dragElement:7,setDragElement:8})}get setDragElement(){return this.$$.ctx[8]}}function mt(n){let $,s="Empty",r,l;return{c(){$=j("div"),$.textContent=s,this.h()},l(a){$=G(a,"DIV",{class:!0,"data-svelte-h":!0}),Ae($)!=="svelte-1kkjwe6"&&($.textContent=s),this.h()},h(){S($,"class","us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer")},m(a,o){N(a,$,o),r||(l=$e($,"dragenter",n[0]),r=!0)},p:re,i:re,o:re,d(a){a&&A($),r=!1,l()}}}function ct(n,$,s){let r;se(n,oe,o=>s(2,r=o));let{moveItem:l}=$;const a=()=>{(r==null?void 0:r.index)!==void 0&&l(0)};return n.$$set=o=>{"moveItem"in o&&s(1,l=o.moveItem)},[a,l]}class Ke extends ge{constructor($){super(),he(this,$,ct,mt,ce,{moveItem:1})}}function Pe(n,$,s){const r=n.slice();return r[21]=$[s],r[22]=$,r[23]=s,r}function Me(n,$,s){const r=n.slice();return r[21]=$[s],r[24]=$,r[23]=s,r}function Re(n){let $,s,r;function l(o){n[14](o,n[23])}let a={setDragElement:n[3],list:n[7],transforms:n[6],type:"todo",index:n[23],transferList:n[12],moveItem:n[13]};return n[0][n[23]]!==void 0&&(a.clientHeight=n[0][n[23]]),$=new Je({props:a}),ue.push(()=>ye($,"clientHeight",l)),{c(){Q($.$$.fragment)},l(o){U($.$$.fragment,o)},m(o,f){ee($,o,f),r=!0},p(o,f){n=o;const u={};f&8&&(u.setDragElement=n[3]),f&128&&(u.list=n[7]),f&64&&(u.transforms=n[6]),!s&&f&1&&(s=!0,u.clientHeight=n[0][n[23]],Te(()=>s=!1)),$.$set(u)},i(o){r||(B($.$$.fragment,o),r=!0)},o(o){M($.$$.fragment,o),r=!1},d(o){te($,o)}}}function We(n){let $,s;return $=new Ke({props:{moveItem:n[13]}}),{c(){Q($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p:re,i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function Ye(n){let $,s,r;function l(o){n[15](o,n[23])}let a={setDragElement:n[3],list:n[5],transforms:n[4],type:"done",index:n[23],transferList:n[12],moveItem:n[13]};return n[1][n[23]]!==void 0&&(a.clientHeight=n[1][n[23]]),$=new Je({props:a}),ue.push(()=>ye($,"clientHeight",l)),{c(){Q($.$$.fragment)},l(o){U($.$$.fragment,o)},m(o,f){ee($,o,f),r=!0},p(o,f){n=o;const u={};f&8&&(u.setDragElement=n[3]),f&32&&(u.list=n[5]),f&16&&(u.transforms=n[4]),!s&&f&2&&(s=!0,u.clientHeight=n[1][n[23]],Te(()=>s=!1)),$.$set(u)},i(o){r||(B($.$$.fragment,o),r=!0)},o(o){M($.$$.fragment,o),r=!1},d(o){te($,o)}}}function ze(n){let $,s;return $=new Ke({props:{moveItem:n[13]}}),{c(){Q($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p:re,i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function gt(n){let $,s,r,l="To do",a,o,f,u,_,y,k,b,H,R="Done",O,Y,K,C,w,Z=De(n[7]),F=[];for(let m=0;m<Z.length;m+=1)F[m]=Re(Me(n,Z,m));const ne=m=>M(F[m],1,1,()=>{F[m]=null});let E=n[7].length===1&&We(n),d=De(n[5]),i=[];for(let m=0;m<d.length;m+=1)i[m]=Ye(Pe(n,d,m));const L=m=>M(i[m],1,1,()=>{i[m]=null});let h=n[5].length===1&&ze(n);return{c(){$=j("div"),s=j("div"),r=j("span"),r.textContent=l,a=z(),o=j("div"),f=z();for(let m=0;m<F.length;m+=1)F[m].c();u=z(),E&&E.c(),_=z(),y=j("div"),k=z(),b=j("div"),H=j("span"),H.textContent=R,O=z(),Y=j("div"),K=z();for(let m=0;m<i.length;m+=1)i[m].c();C=z(),h&&h.c(),this.h()},l(m){$=G(m,"DIV",{class:!0});var p=x($);s=G(p,"DIV",{class:!0});var T=x(s);r=G(T,"SPAN",{class:!0,"data-svelte-h":!0}),Ae(r)!=="svelte-2gma2k"&&(r.textContent=l),a=q(T),o=G(T,"DIV",{class:!0}),x(o).forEach(A),f=q(T);for(let ae=0;ae<F.length;ae+=1)F[ae].l(T);u=q(T),E&&E.l(T),T.forEach(A),_=q(p),y=G(p,"DIV",{class:!0}),x(y).forEach(A),k=q(p),b=G(p,"DIV",{class:!0});var J=x(b);H=G(J,"SPAN",{class:!0,"data-svelte-h":!0}),Ae(H)!=="svelte-ovcjna"&&(H.textContent=R),O=q(J),Y=G(J,"DIV",{class:!0}),x(Y).forEach(A),K=q(J);for(let ae=0;ae<i.length;ae+=1)i[ae].l(J);C=q(J),h&&h.l(J),J.forEach(A),p.forEach(A),this.h()},h(){S(r,"class","fs=2 bold"),S(o,"class","h=.5"),S(s,"class","flex column"),S(y,"class","w=5 h=5"),S(H,"class","fs=2 bold"),S(Y,"class","h=.5"),S(b,"class","flex column"),S($,"class","flex flex-wrap=wrap")},m(m,p){N(m,$,p),P($,s),P(s,r),P(s,a),P(s,o),P(s,f);for(let T=0;T<F.length;T+=1)F[T]&&F[T].m(s,null);P(s,u),E&&E.m(s,null),P($,_),P($,y),P($,k),P($,b),P(b,H),P(b,O),P(b,Y),P(b,K);for(let T=0;T<i.length;T+=1)i[T]&&i[T].m(b,null);P(b,C),h&&h.m(b,null),w=!0},p(m,p){if(p&12489){Z=De(m[7]);let T;for(T=0;T<Z.length;T+=1){const J=Me(m,Z,T);F[T]?(F[T].p(J,p),B(F[T],1)):(F[T]=Re(J),F[T].c(),B(F[T],1),F[T].m(s,u))}for(_e(),T=Z.length;T<F.length;T+=1)ne(T);be()}if(m[7].length===1?E?(E.p(m,p),p&128&&B(E,1)):(E=We(m),E.c(),B(E,1),E.m(s,null)):E&&(_e(),M(E,1,1,()=>{E=null}),be()),p&12346){d=De(m[5]);let T;for(T=0;T<d.length;T+=1){const J=Pe(m,d,T);i[T]?(i[T].p(J,p),B(i[T],1)):(i[T]=Ye(J),i[T].c(),B(i[T],1),i[T].m(b,C))}for(_e(),T=d.length;T<i.length;T+=1)L(T);be()}m[5].length===1?h?(h.p(m,p),p&32&&B(h,1)):(h=ze(m),h.c(),B(h,1),h.m(b,null)):h&&(_e(),M(h,1,1,()=>{h=null}),be())},i(m){if(!w){for(let p=0;p<Z.length;p+=1)B(F[p]);B(E);for(let p=0;p<d.length;p+=1)B(i[p]);B(h),w=!0}},o(m){F=F.filter(Boolean);for(let p=0;p<F.length;p+=1)M(F[p]);M(E),i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)M(i[p]);M(h),w=!1},d(m){m&&A($),Fe(F,m),E&&E.d(),Fe(i,m),h&&h.d()}}}function ht(n){let $,s;return{c(){$=new we(!1),s=le(),this.h()},l(r){$=Ie(r,!1),s=le(),this.h()},h(){$.a=s},m(r,l){$.m(n[8],r,l),N(r,s,l)},p:re,d(r){r&&(A(s),$.d())}}}function pt(n){let $,s,r,l,a;return $=new Ge({props:{name:"DragItemForExample"}}),{c(){Q($.$$.fragment),s=z(),r=new we(!1),l=le(),this.h()},l(o){U($.$$.fragment,o),s=q(o),r=Ie(o,!1),l=le(),this.h()},h(){r.a=l},m(o,f){ee($,o,f),N(o,s,f),r.m(n[9],o,f),N(o,l,f),a=!0},p:re,i(o){a||(B($.$$.fragment,o),a=!0)},o(o){M($.$$.fragment,o),a=!1},d(o){o&&(A(s),A(l),r.d()),te($,o)}}}function _t(n){let $,s,r,l,a;return $=new Ge({props:{name:"DragItemPlaceHolderForExample"}}),{c(){Q($.$$.fragment),s=z(),r=new we(!1),l=le(),this.h()},l(o){U($.$$.fragment,o),s=q(o),r=Ie(o,!1),l=le(),this.h()},h(){r.a=l},m(o,f){ee($,o,f),N(o,s,f),r.m(n[10],o,f),N(o,l,f),a=!0},p:re,i(o){a||(B($.$$.fragment,o),a=!0)},o(o){M($.$$.fragment,o),a=!1},d(o){o&&(A(s),A(l),r.d()),te($,o)}}}function bt(n){let $,s,r,l=`

${g("import")} ${e("{")} ${t("writable")}, ${g("type")} ${t("Writable")} ${e("}")} ${g("from")} ${D("svelte/store")}

${g("export")} ${c("const")} ${t("todo$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${v("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("todoTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${v("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("done$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${v("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("doneTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${v("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("transition$",!0)} = ${v("writable")}${e("(")}${c("false")}${e(")")}
${g("export")} ${c("const")} ${t("drag$",!0)}: ${I("Writable")}${e("<")}${e("{",1)} ${t("type")}: ${D("todo")} | ${D("done")}, ${t("index")}: ${I("number")} ${e("}",1)} | ${c("null")}${e(">")} = ${v("writable")}${e("(")}${c("null")}${e(")")}`,a,o;return $=new et({props:{name:"store"}}),{c(){Q($.$$.fragment),s=z(),r=new we(!1),a=le(),this.h()},l(f){U($.$$.fragment,f),s=q(f),r=Ie(f,!1),a=le(),this.h()},h(){r.a=a},m(f,u){ee($,f,u),N(f,s,u),r.m(l,f,u),N(f,a,u),o=!0},p:re,i(f){o||(B($.$$.fragment,f),o=!0)},o(f){M($.$$.fragment,f),o=!1},d(f){f&&(A(s),A(a),r.d()),te($,f)}}}function Dt(n){let $,s,r,l,a,o,f,u,_,y,k,b,H,R,O,Y,K,C,w;function Z(E){n[16](E)}function F(E){n[17](E)}let ne={$$slots:{default:[gt]},$$scope:{ctx:n}};return n[2]!==void 0&&(ne.isDragging=n[2]),n[3]!==void 0&&(ne.setDragElement=n[3]),$=new dt({props:ne}),ue.push(()=>ye($,"isDragging",Z)),ue.push(()=>ye($,"setDragElement",F)),$.$on("dragend",n[11]),o=new ve({props:{isCode:!0,$$slots:{default:[ht]},$$scope:{ctx:n}}}),y=new ve({props:{isCode:!0,$$slots:{default:[pt]},$$scope:{ctx:n}}}),R=new ve({props:{isCode:!0,$$slots:{default:[_t]},$$scope:{ctx:n}}}),C=new ve({props:{isCode:!0,$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){Q($.$$.fragment),l=z(),a=j("div"),Q(o.$$.fragment),f=z(),u=j("div"),_=z(),Q(y.$$.fragment),k=z(),b=j("div"),H=z(),Q(R.$$.fragment),O=z(),Y=j("div"),K=z(),Q(C.$$.fragment),this.h()},l(E){U($.$$.fragment,E),l=q(E),a=G(E,"DIV",{});var d=x(a);U(o.$$.fragment,d),f=q(d),u=G(d,"DIV",{class:!0}),x(u).forEach(A),_=q(d),U(y.$$.fragment,d),k=q(d),b=G(d,"DIV",{class:!0}),x(b).forEach(A),H=q(d),U(R.$$.fragment,d),O=q(d),Y=G(d,"DIV",{class:!0}),x(Y).forEach(A),K=q(d),U(C.$$.fragment,d),d.forEach(A),this.h()},h(){S(u,"class","h=1"),S(b,"class","h=1"),S(Y,"class","h=1")},m(E,d){ee($,E,d),N(E,l,d),N(E,a,d),ee(o,a,null),P(a,f),P(a,u),P(a,_),ee(y,a,null),P(a,k),P(a,b),P(a,H),ee(R,a,null),P(a,O),P(a,Y),P(a,K),ee(C,a,null),w=!0},p(E,d){const i={};d&33554683&&(i.$$scope={dirty:d,ctx:E}),!s&&d&4&&(s=!0,i.isDragging=E[2],Te(()=>s=!1)),!r&&d&8&&(r=!0,i.setDragElement=E[3],Te(()=>r=!1)),$.$set(i);const L={};d&33554432&&(L.$$scope={dirty:d,ctx:E}),o.$set(L);const h={};d&33554432&&(h.$$scope={dirty:d,ctx:E}),y.$set(h);const m={};d&33554432&&(m.$$scope={dirty:d,ctx:E}),R.$set(m);const p={};d&33554432&&(p.$$scope={dirty:d,ctx:E}),C.$set(p)},i(E){w||(B($.$$.fragment,E),B(o.$$.fragment,E),B(y.$$.fragment,E),B(R.$$.fragment,E),B(C.$$.fragment,E),w=!0)},o(E){M($.$$.fragment,E),M(o.$$.fragment,E),M(y.$$.fragment,E),M(R.$$.fragment,E),M(C.$$.fragment,E),w=!1},d(E){E&&(A(l),A(a)),te($,E),te(o),te(y),te(R),te(C)}}}function vt(n){let $,s;return $=new Ue({props:{$$slots:{default:[Dt]},$$scope:{ctx:n}}}),{c(){Q($.$$.fragment)},l(r){U($.$$.fragment,r)},m(r,l){ee($,r,l),s=!0},p(r,[l]){const a={};l&33554687&&(a.$$scope={dirty:l,ctx:r}),$.$set(a)},i(r){s||(B($.$$.fragment,r),s=!0)},o(r){M($.$$.fragment,r),s=!1},d(r){te($,r)}}}function Et(n,$,s){let r,l,a,o,f,u;se(n,oe,d=>s(18,r=d)),se(n,pe,d=>s(19,l=d)),se(n,ie,d=>s(4,a=d)),se(n,de,d=>s(5,o=d)),se(n,fe,d=>s(6,f=d)),se(n,me,d=>s(7,u=d));const _=`${X("script",` ${t("lang")}=${D("ts")}`,`
${g("import")} ${t("DragContainer")} ${g("from")} ${D("organs/@common/utils/DragContainer.svelte")}
${g("import")} ${t("DragItemForExample")} ${g("from")} ${D("parts/ref/DragItemForExample.svelte")}
${g("import")} ${t("DragItemPlaceHolderForExample")} ${g("from")} ${D("parts/ref/DragItemPlaceHolderForExample.svelte")}
${g("import")} ${e("{")} ${t("done$")}, ${t("doneTf$")}, ${t("drag$")}, ${t("todo$")}, ${t("todoTf$")}, ${t("transition$")} ${e("}")} ${g("from")} ${D("parts/ref/store")}
${g("import")} ${e("{")} ${t("onDestroy")}, ${t("onMount")} ${e("}")} ${g("from")} ${D("svelte")}

${c("const")} ${t("todoHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("const")} ${t("doneHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("let")} ${t("isDragging")}: ${I("boolean")}
${c("let")} ${v("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${v("handleDragend")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${t("$drag$")} = ${c("null")}
	${v("reOrdering")}${e("(",1)}${t("from",!0)}, ${t("type",!0)}${e(")",1)}
${e("}")}
${c("const")} ${v("transferList")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type",!0)} === ${D("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
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
	${e("(",1)}${t("type",!0)} === ${D("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${v("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${c("const")} ${v("moveItem")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${g("if")} ${e("(",1)}${t("from",!0)} === ${D("todo")}${e(") {",1)}
		${c("const")} ${t("before",!0)} = ${t("$todo$")}.${v("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$done$")}.${v("slice")}${e("()",2)}
		${t("after",!0)}.${v("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${v("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
		${t("$todo$")} = ${t("before",!0)}
		${t("$done$")} = ${t("after",!0)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${v("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${v("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${D("done")}, ${t("index: index")} ${e("}",2)}
		${t("doneHeights",!0)}.${v("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("todoHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("todoHeights",!0)}.${v("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${c("const")} ${t("before",!0)} = ${t("$done$")}.${v("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$todo$")}.${v("slice")}${e("()",2)}
		${t("after",!0)}.${v("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${v("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
		${t("$done$")} = ${t("before",!0)}
		${t("$todo$")} = ${t("after",!0)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${v("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${v("fill")}${e("(",2)}${V(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${D("todo")}, ${t("index: index")} ${e("}",2)}
		${t("todoHeights",!0)}.${v("splice")}${e("(",2)}${t("index")}, ${V(0)}, ${t("doneHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("doneHeights",!0)}.${v("splice")}${e("(",2)}${t("from",!0)}, ${V(1)}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${v("reOrdering")} = ${e("(")}${t("from")}: ${I("number")}, ${t("type")}: ${I("string")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${D("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${g("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} === ${V(0)}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${c("const")} ${t("list",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${D("todo")} ? ${t("$todo$")} : ${t("$done$")} ${e(")",2)}${e("]",1)}
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
	,${e("(",1)}${t("type")} === ${D("todo")} ? ${t("todo$",!0)} : ${t("done$",!0)} ${e(")",1)}.${v("set")}${e("(",1)}${t("list",!0)}${e(")",1)}
	,${e("(",1)}${t("type")} === ${D("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${v("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${v("onMount")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[",2)}
		${D("Task A")},
		${D("Task B")},
		${D("Task C")},
		${D("Task D")},
		${D("Task E")},
		${D("Task F")},
		${D("Task G")},
		${D("Task H")},
		${D("Task I")},
		${D("Task J")},
		${D("Task K")},
		${D("Task L")},
		${D("")}
	${e("]",2)}
	${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$todo$")}.${t("length")}${e(")",2)}.${v("fill")}${e("(",2)}${V(0)}${e(")",2)}
	${t("$todo$")} = ${e("[",2)} ${D("Task Z")}, ${D("")} ${e("]",2)}
	${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$done$")}.${t("length")}${e(")",2)}.${v("fill")}${e("(",2)}${V(0)}${e(")",2)}
${e("}",1)}${e(")")}
${v("onDestroy")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[]",2)}
	${t("$todoTf$")} = ${e("[]",2)}
	${t("$done$")} = ${e("[]",2)}
	${t("$doneTf$")} = ${e("[]",2)}
	${t("$transition$")} = ${c("false")}
	${t("$drag$")} = ${c("null")}
${e("}",1)}${e(")")}

`)}

${X("DragContainer",` ${g("bind")}:${t("isDragging")}
		${g("bind")}:${v("setDragElement")}
		${g("on")}:${I("dragend")}=${e("{")}${v("handleDragend")}${e("}")}`,`
	${X("div",` ${t("class")}=${D("flex flex-wrap=wrap")}`,`
		${X("div",` ${t("class")}=${D("flex column")}`,`
			${X("span",` ${t("class")}=${D("fs=2 bold")}`,"To do")}
			${X("div",` ${t("class")}=${D("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$todo$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${X("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("todoHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${v("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$todo$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$todoTf$")}${e("}")}
					${t("list")}=${D("todo")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${v("transferList")}${e("}")}
					${e("{")}${v("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$todo$")}.${t("length")} === ${V(1)}${e("}")}
			${X("DragItemPlaceHolderForExample",` ${e("{")}${v("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
		${X("div",` ${t("class")}=${D("w=5 h=5")}`,"")}
		${X("div",` ${t("class")}=${D("flex column")}`,`
			${X("span",` ${t("class")}=${D("fs=2 bold")}`,"Done")}
			${X("div",` ${t("class")}=${D("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$done$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${X("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("doneHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${v("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$done$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$doneTf$")}${e("}")}
					${t("list")}=${D("done")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${v("transferList")}${e("}")}
					${e("{")}${v("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$done$")}.${t("length")} === ${V(1)}${e("}")}
			${X("DragItemPlaceHolderForExample",` ${e("{")}${v("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
	`)}
`)}`,y=`

${X("script",` ${t("lang")}=${D("ts")}`,`
${g("import")} ${t("Dragable")} ${g("from")} ${D("organs/@common/utils/Dragable.svelte")}
${g("import")} ${e("{")} ${t("drag$")}, ${t("transition$")} ${e("}")} ${g("from")} ${D("parts/ref/store")}

${g("export")} ${c("let")} ${t("list")}: ${I("string")}${e("[]")}
${g("export")} ${c("let")} ${t("transforms")}: ${I("number")}${e("[]")}
${g("export")} ${c("let")} ${t("type")}: ${D("todo")} | ${D("done")}
${g("export")} ${c("let")} ${t("index")}: ${I("number")}
${g("export")} ${c("let")} ${t("clientHeight")}: ${I("number")}
${g("export")} ${c("let")} ${t("duration")} = ${V(400)}
${g("export")} ${c("let")} ${v("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${v("transferList")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${v("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${v("handleClick")} = ${e("()")} ${c("=>")} ${e("{")}
	${v("alert")}${e("(",1)}${e("(",2)}${t("event")}.${t("target")} ${g("as")} ${I("HTMLElement")}${e(")",2)}.${t("textContent")}${e(")",1)}
${e("}")}
${c("const")} ${v("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${c("const")} ${t("t",!0)} = ${t("$drag$")}?.${t("type")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")} || ${t("i",!0)} === ${t("index")} && ${t("t",!0)} === ${t("type")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${g("if")} ${e("(",1)}${t("t",!0)} === ${t("type")}${e(") {",1)}
		${v("transferList")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${v("moveItem")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${v("handleDragstart")} = ${e("()")} ${c("=>")} ${e("{")}
	${t("$drag$")} = ${e("{",1)} ${t("type: type")}, ${t("index: index")} ${e("}",1)}
	${t("$transition$")} = ${c("true")}
${e("}")}
`)}

${X("Dragable",` ${g("on")}:${I("dragstart")}=${e("{")}${v("handleDragstart")}${e("}")}
		${t("delay")}=${e("{")}${V(300)}${e("}")}
		${e("{")}${v("setDragElement")}${e("}")}`,`
	${X("div",` ${g("bind")}:${t("clientHeight")}
			${t("class")}=${D('"w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY(',!1)}${e("{",2)}${t("transforms")}${e("[")}${t("index")}${e("]")}${e("}",2)}${D("px)",!1)}
			${e("{",2)}${t("$transition$")} ? ${D("tt=")} + ${t("duration")} + ${D("ms")} : ${D("")}${e("}",2)}
			${e("{",2)}${t("$drag$")}?.${t("index")} === ${t("index")} && ${t("$drag$")}?.${t("type")} === ${t("type")} ? ${D(" opacity=.2 ol=.2_solid_#aaa")} : ${D("")}${e("}",2)}
			${e("{",2)}!${t("list")}${e("[")}${t("index")}${e("]")} ? ${D("none")} : ${D("")}${e("}",2)}
			${g("on")}:${I("dragenter")}=${e("{")}${v("handleDragenter")}${e("}")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)}${e("}")}
	`)}
	${X("div",` ${t("slot")}=${D("drag")}
			${g("bind")}:${t("clientHeight")}
			${t("class")}=${D("ta=center fs=2.5 cs=move c=#000 @dark@c=#fff")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)} + ${D("!!")}${e("}")}
	`)}
`)}`,k=`

${X("script",` ${t("lang")}=${D("ts")}`,`
${g("import")} ${e("{")} ${t("drag$")} ${e("}")} ${g("from")} ${D("parts/ref/store")}

${g("export")} ${c("let")} ${v("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${v("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${v("moveItem")}${e("(",2)}${V(0)}${e(")",2)}
${e("}")}
`)}

${X("div",` ${t("style")}=${D("user-select:none")}
		${t("class")}=${D("w=6 ol=.1_dashed ta=center fs=2 cs=pointer")}
		${g("on")}:${I("dragenter")}=${e("{")}${v("handleDragenter")}${e("}")}`,`
	Empty
`)}`,b=[],H=[];let R,O;const Y=()=>{const d=r.index,i=r.type;W(oe,r=null,r),w(d,i)},K=d=>{const i=r.index,L=r.type,h=[...L==="todo"?f:a],m=L==="todo"?b:H;if(i<d)if(h[d])for(let p=d;h[p];p++)h[i]-=m[p],h[p]=0;else for(let p=d;!h[p];p--)h[i]+=m[p],h[p]=-m[i];else if(h[d])for(let p=d;h[p];p--)h[i]+=m[p],h[p]=0;else for(let p=d;!h[p];p++)h[i]-=m[p],h[p]=m[i];(L==="todo"?fe:ie).set(h)},C=d=>{const i=r.index;if(r.type==="todo"){const h=[...u],m=[...o];m.splice(d,0,h[i]),h.splice(i,1),W(me,u=h,u),W(de,o=m,o),W(fe,f=new Array(h.length).fill(0),f),W(ie,a=new Array(m.length).fill(0),a),W(oe,r={type:"done",index:d},r),H.splice(d,0,b[i]),b.splice(i,1)}else{const h=[...o],m=[...u];m.splice(d,0,h[i]),h.splice(i,1),W(de,o=h,o),W(me,u=m,u),W(ie,a=new Array(h.length).fill(0),a),W(fe,f=new Array(m.length).fill(0),f),W(oe,r={type:"todo",index:d},r),b.splice(d,0,H[i]),H.splice(i,1)}},w=(d,i)=>{const L=[...i==="todo"?f:a];if(L[d]===0)return;const h=[...i==="todo"?u:o],m=h[d];let p;if(L[d]<0){for(p=d-1;L[p];p--)h[p+1]=h[p],L[p]=0;h[p+1]=m}else{for(p=d+1;L[p];p++)h[p-1]=h[p],L[p]=0;h[p-1]=m}L[d]=0,W(pe,l=!1,l),(i==="todo"?me:de).set(h),(i==="todo"?fe:ie).set(L)};Ze(()=>{W(me,u=["Task A","Task B","Task C","Task D","Task E","Task F","Task G","Task H","Task I","Task J","Task K","Task L",""],u),W(fe,f=new Array(u.length).fill(0),f),W(de,o=["Task Z",""],o),W(ie,a=new Array(o.length).fill(0),a)}),xe(()=>{W(me,u=[],u),W(fe,f=[],f),W(de,o=[],o),W(ie,a=[],a),W(pe,l=!1,l),W(oe,r=null,r)});function Z(d,i){n.$$.not_equal(b[i],d)&&(b[i]=d,s(0,b))}function F(d,i){n.$$.not_equal(H[i],d)&&(H[i]=d,s(1,H))}function ne(d){R=d,s(2,R)}function E(d){O=d,s(3,O)}return[b,H,R,O,a,o,f,u,_,y,k,Y,K,C,Z,F,ne,E]}class Tt extends ge{constructor($){super(),he(this,$,Et,vt,ce,{})}}function yt(n){let $,s,r;return s=new Tt({}),{c(){$=z(),Q(s.$$.fragment),this.h()},l(l){Qe("svelte-vkwsnr",document.head).forEach(A),$=q(l),U(s.$$.fragment,l),this.h()},h(){document.title="Drag and Drop | Reference"},m(l,a){N(l,$,a),ee(s,l,a),r=!0},p:re,i(l){r||(B(s.$$.fragment,l),r=!0)},o(l){M(s.$$.fragment,l),r=!1},d(l){l&&A($),te(s,l)}}}class Bt extends ge{constructor($){super(),he(this,$,null,yt,ce,{})}}export{Bt as component};
