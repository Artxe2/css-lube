import{S as ge,i as he,s as pe,G as Ce,k as J,a as q,l as K,m as N,h as V,c as z,n as X,b as O,C as $e,I as Le,J as Ve,K as Ae,g as B,d as M,O as Fe,X as Se,w as de,y as j,z as U,A as x,B as ee,E as se,q as be,r as De,P as Oe,H as P,Y as Ge,u as Je,F as W,Z as Qe,D as ne,o as je,L as Ue,V as we,W as Ie,R as ke,e as ae,T as He,v as ve,f as Ee,M as Pe,Q as xe}from"../chunks/index.e72184b5.js";import{t as _e,d as le,a as fe,b as me,c as ue,e as ce}from"../chunks/store.7ed75e71.js";import{C as Te}from"../chunks/CodePage.abe9804b.js";import{C as et}from"../chunks/ComponentTabView.f2fb59a5.js";import{h as S,k as g,n as t,s as D,b as e,d as c,t as I,f as E,i as A}from"../chunks/highlighter.e3fc48dc.js";import{I as Ke}from"../chunks/IdeSvelte.6ad33b1a.js";import{I as tt}from"../chunks/IdeTypescript.09a660bc.js";const $t=r=>({}),Re=r=>({});function rt(r){let $,s,n,l,a,o,i;const u=r[10].default,_=Ce(u,r,r[9],null),y=r[10].drag,k=Ce(y,r,r[9],Re);return{c(){$=J("div"),_&&_.c(),n=q(),l=J("div"),k&&k.c(),this.h()},l(b){$=K(b,"DIV",{class:!0});var H=N($);_&&_.l(H),H.forEach(V),n=z(b),l=K(b,"DIV",{class:!0});var R=N(l);k&&k.l(R),R.forEach(V),this.h()},h(){X($,"class",s="touch-action=none w=fit-content us=none "+r[0]),X(l,"class","none")},m(b,H){O(b,$,H),_&&_.m($,null),r[11]($),O(b,n,H),O(b,l,H),k&&k.m(l,null),r[12](l),a=!0,o||(i=[$e($,"mousedown",r[3]),$e($,"mouseup",r[5]),$e($,"touchstart",r[4]),$e($,"touchend",r[6],{passive:!0})],o=!0)},p(b,[H]){_&&_.p&&(!a||H&512)&&Le(_,u,b,b[9],a?Ae(u,b[9],H,null):Ve(b[9]),null),(!a||H&1&&s!==(s="touch-action=none w=fit-content us=none "+b[0]))&&X($,"class",s),k&&k.p&&(!a||H&512)&&Le(k,y,b,b[9],a?Ae(y,b[9],H,$t):Ve(b[9]),Re)},i(b){a||(B(_,b),B(k,b),a=!0)},o(b){M(_,b),M(k,b),a=!1},d(b){b&&V($),_&&_.d(b),r[11](null),b&&V(n),b&&V(l),k&&k.d(b),r[12](null),o=!1,Fe(i)}}}function nt(r,$,s){let{$$slots:n={},$$scope:l}=$,{classs:a=""}=$,{delay:o=0}=$,{setDragElement:i}=$;const u=Se();let _,y,k;const b=C=>{k=setTimeout(()=>{const w=(y.firstChild||_).cloneNode(!0);w.style.position="absolute",w.style.top=_.offsetTop+"px",w.style.left=_.offsetLeft+"px",i(C.clientX,C.clientY,w),u("dragstart")},o)},H=C=>{b(C.touches[0])},R=()=>{clearTimeout(k)},G=()=>{clearTimeout(k)};function Y(C){de[C?"unshift":"push"](()=>{_=C,s(1,_)})}function Z(C){de[C?"unshift":"push"](()=>{y=C,s(2,y)})}return r.$$set=C=>{"classs"in C&&s(0,a=C.classs),"delay"in C&&s(7,o=C.delay),"setDragElement"in C&&s(8,i=C.setDragElement),"$$scope"in C&&s(9,l=C.$$scope)},[a,_,y,b,H,R,G,o,i,l,n,Y,Z]}class st extends ge{constructor($){super(),he(this,$,nt,rt,pe,{classs:0,delay:7,setDragElement:8})}}function ot(r){let $,s=r[1][r[4]]+"",n,l,a,o,i;return{c(){$=J("div"),n=be(s),this.h()},l(u){$=K(u,"DIV",{class:!0});var _=N($);n=De(_,s),_.forEach(V),this.h()},h(){var u,_;X($,"class",l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+r[2][r[4]]+"px) "+(r[7]?"tt="+r[5]+"ms":"")+" "+(((u=r[8])==null?void 0:u.index)===r[4]&&((_=r[8])==null?void 0:_.type)===r[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(r[1][r[4]]?"":"none")),Oe(()=>r[15].call($))},m(u,_){O(u,$,_),P($,n),a=Ge($,r[15].bind($)),o||(i=[$e($,"click",r[9]),$e($,"dragenter",r[10])],o=!0)},p(u,_){var y,k;_&18&&s!==(s=u[1][u[4]]+"")&&Je(n,s),_&446&&l!==(l="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+u[2][u[4]]+"px) "+(u[7]?"tt="+u[5]+"ms":"")+" "+(((y=u[8])==null?void 0:y.index)===u[4]&&((k=u[8])==null?void 0:k.type)===u[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(u[1][u[4]]?"":"none"))&&X($,"class",l)},d(u){u&&V($),a(),o=!1,Fe(i)}}}function lt(r){let $,s=r[1][r[4]]+"!!",n,l;return{c(){$=J("div"),n=be(s),this.h()},l(a){$=K(a,"DIV",{slot:!0,class:!0});var o=N($);n=De(o,s),o.forEach(V),this.h()},h(){X($,"slot","drag"),X($,"class","ta=center fs=2.5 cs=move c=#000 @dark@c=#fff"),Oe(()=>r[14].call($))},m(a,o){O(a,$,o),P($,n),l=Ge($,r[14].bind($))},p(a,o){o&18&&s!==(s=a[1][a[4]]+"!!")&&Je(n,s)},d(a){a&&V($),l()}}}function at(r){let $,s;return $=new st({props:{delay:300,setDragElement:r[6],$$slots:{drag:[lt],default:[ot]},$$scope:{ctx:r}}}),$.$on("dragstart",r[11]),{c(){j($.$$.fragment)},l(n){U($.$$.fragment,n)},m(n,l){x($,n,l),s=!0},p(n,[l]){const a={};l&64&&(a.setDragElement=n[6]),l&65983&&(a.$$scope={dirty:l,ctx:n}),$.$set(a)},i(n){s||(B($.$$.fragment,n),s=!0)},o(n){M($.$$.fragment,n),s=!1},d(n){ee($,n)}}}function it(r,$,s){let n,l;se(r,_e,w=>s(7,n=w)),se(r,le,w=>s(8,l=w));let{list:a}=$,{transforms:o}=$,{type:i}=$,{index:u}=$,{clientHeight:_}=$,{duration:y=400}=$,{setDragElement:k}=$,{transferList:b}=$,{moveItem:H}=$;const R=w=>{alert(w.target.textContent)},G=()=>{const w=l==null?void 0:l.index,Q=l==null?void 0:l.type;w===void 0||w===u&&Q===i||(Q===i?b(u):H(u))},Y=()=>{W(le,l={type:i,index:u},l),W(_e,n=!0,n)};function Z(){_=this.clientHeight,s(0,_)}function C(){_=this.clientHeight,s(0,_)}return r.$$set=w=>{"list"in w&&s(1,a=w.list),"transforms"in w&&s(2,o=w.transforms),"type"in w&&s(3,i=w.type),"index"in w&&s(4,u=w.index),"clientHeight"in w&&s(0,_=w.clientHeight),"duration"in w&&s(5,y=w.duration),"setDragElement"in w&&s(6,k=w.setDragElement),"transferList"in w&&s(12,b=w.transferList),"moveItem"in w&&s(13,H=w.moveItem)},[_,a,o,i,u,y,k,n,l,R,G,Y,b,H,Z,C]}class Ne extends ge{constructor($){super(),he(this,$,it,at,pe,{list:1,transforms:2,type:3,index:4,clientHeight:0,duration:5,setDragElement:6,transferList:12,moveItem:13})}}const{document:ye}=Qe;function ft(r){let $,s,n,l,a,o;const i=r[10].default,u=Ce(i,r,r[9],null);return{c(){$=q(),s=J("div"),u&&u.c(),this.h()},l(_){$=z(_),s=K(_,"DIV",{class:!0});var y=N(s);u&&u.l(y),y.forEach(V),this.h()},h(){X(s,"class",n="relative "+r[0])},m(_,y){O(_,$,y),O(_,s,y),u&&u.m(s,null),r[11](s),l=!0,a||(o=[$e(ye.body,"mousemove",r[2]),$e(ye.body,"mouseup",r[4]),$e(ye.body,"touchmove",r[3]),$e(ye.body,"touchend",r[5])],a=!0)},p(_,[y]){u&&u.p&&(!l||y&512)&&Le(u,i,_,_[9],l?Ae(i,_[9],y,null):Ve(_[9]),null),(!l||y&1&&n!==(n="relative "+_[0]))&&X(s,"class",n)},i(_){l||(B(u,_),l=!0)},o(_){M(u,_),l=!1},d(_){_&&V($),_&&V(s),u&&u.d(_),r[11](null),a=!1,Fe(o)}}}function ut(r,$,s){let{$$slots:n={},$$scope:l}=$,{classs:a=""}=$,{isDragging:o=!1}=$,{dragElement:i=null}=$;const u=(f,L,h)=>{const m=y.getBoundingClientRect();s(7,i=h),b=f-m.left,H=L-m.top,y.appendChild(i),s(6,o=!0)},_=Se();let y,k,b=0,H=0,R=0,G=0,Y;const Z=f=>{if(o){const L=F(document.elementsFromPoint(f.clientX,f.clientY));L&&k!=L&&(k&&k.dispatchEvent(new DragEvent("dragleave")),k=L,k.dispatchEvent(new DragEvent("dragenter"))),R=f.clientX,G=f.clientY,re(),_("dragmove"),v(Date.now())}},C=f=>{Z(f.touches[0])},w=()=>{o&&(y.removeChild(i),k&&(k.dispatchEvent(new DragEvent("drop")),k=null),s(7,i=null),s(6,o=!1),_("dragend"))},Q=()=>{w()},F=f=>{const L=f.length;for(let h=0;h<L;h++)if(!i.compareDocumentPosition(f[h]))return f[h+1]},re=()=>{const f=y.getBoundingClientRect();s(7,i.style.transform=`translate(${R-b-f.left}px, ${G-H-f.top}px)`,i)};function v(f){Y||(Y=requestAnimationFrame(()=>{Y=0;let L=y;for(;L!==document.body;){if(L.scrollWidth>L.clientWidth){if(L.scrollLeft)break;if(L.scrollLeft=1,L.scrollLeft){L.scrollLeft=0;break}}L=L.parentElement}let h=y;for(;h!==document.body;){if(h.scrollHeight>h.clientHeight){if(h.scrollTop)break;if(h.scrollTop=1,h.scrollTop){h.scrollTop=0;break}}h=h.parentElement}const m=i==null?void 0:i.getBoundingClientRect();if(!m)return;const p=L.getBoundingClientRect(),T=h.getBoundingClientRect();if(m.left>=p.left&&m.right<=p.right&&m.top>=T.top&&m.bottom<=T.bottom)return;const te=Date.now();f=te-f,m.left<p.left?L.scrollBy((m.left-p.left)*f/30,0):m.right>p.right&&L.scrollBy((m.right-p.right)*f/30,0),m.top<T.top?h.scrollBy(0,(m.top-T.top)*f/30):m.bottom>T.bottom&&h.scrollBy(0,(m.bottom-T.bottom)*f/30),re(),v(te)}))}function d(f){de[f?"unshift":"push"](()=>{y=f,s(1,y)})}return r.$$set=f=>{"classs"in f&&s(0,a=f.classs),"isDragging"in f&&s(6,o=f.isDragging),"dragElement"in f&&s(7,i=f.dragElement),"$$scope"in f&&s(9,l=f.$$scope)},[a,y,Z,C,w,Q,o,i,u,l,n,d]}class dt extends ge{constructor($){super(),he(this,$,ut,ft,pe,{classs:0,isDragging:6,dragElement:7,setDragElement:8})}get setDragElement(){return this.$$.ctx[8]}}function mt(r){let $,s,n,l;return{c(){$=J("div"),s=be("Empty"),this.h()},l(a){$=K(a,"DIV",{class:!0});var o=N($);s=De(o,"Empty"),o.forEach(V),this.h()},h(){X($,"class","us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer")},m(a,o){O(a,$,o),P($,s),n||(l=$e($,"dragenter",r[0]),n=!0)},p:ne,i:ne,o:ne,d(a){a&&V($),n=!1,l()}}}function ct(r,$,s){let n;se(r,le,o=>s(2,n=o));let{moveItem:l}=$;const a=()=>{(n==null?void 0:n.index)!==void 0&&l(0)};return r.$$set=o=>{"moveItem"in o&&s(1,l=o.moveItem)},[a,l]}class Ze extends ge{constructor($){super(),he(this,$,ct,mt,pe,{moveItem:1})}}function Me(r,$,s){const n=r.slice();return n[21]=$[s],n[22]=$,n[23]=s,n}function We(r,$,s){const n=r.slice();return n[21]=$[s],n[24]=$,n[23]=s,n}function Ye(r){let $,s,n;function l(o){r[14](o,r[23])}let a={setDragElement:r[3],list:r[7],transforms:r[6],type:"todo",index:r[23],transferList:r[12],moveItem:r[13]};return r[0][r[23]]!==void 0&&(a.clientHeight=r[0][r[23]]),$=new Ne({props:a}),de.push(()=>we($,"clientHeight",l)),{c(){j($.$$.fragment)},l(o){U($.$$.fragment,o)},m(o,i){x($,o,i),n=!0},p(o,i){r=o;const u={};i&8&&(u.setDragElement=r[3]),i&128&&(u.list=r[7]),i&64&&(u.transforms=r[6]),!s&&i&1&&(s=!0,u.clientHeight=r[0][r[23]],Ie(()=>s=!1)),$.$set(u)},i(o){n||(B($.$$.fragment,o),n=!0)},o(o){M($.$$.fragment,o),n=!1},d(o){ee($,o)}}}function qe(r){let $,s;return $=new Ze({props:{moveItem:r[13]}}),{c(){j($.$$.fragment)},l(n){U($.$$.fragment,n)},m(n,l){x($,n,l),s=!0},p:ne,i(n){s||(B($.$$.fragment,n),s=!0)},o(n){M($.$$.fragment,n),s=!1},d(n){ee($,n)}}}function ze(r){let $,s,n;function l(o){r[15](o,r[23])}let a={setDragElement:r[3],list:r[5],transforms:r[4],type:"done",index:r[23],transferList:r[12],moveItem:r[13]};return r[1][r[23]]!==void 0&&(a.clientHeight=r[1][r[23]]),$=new Ne({props:a}),de.push(()=>we($,"clientHeight",l)),{c(){j($.$$.fragment)},l(o){U($.$$.fragment,o)},m(o,i){x($,o,i),n=!0},p(o,i){r=o;const u={};i&8&&(u.setDragElement=r[3]),i&32&&(u.list=r[5]),i&16&&(u.transforms=r[4]),!s&&i&2&&(s=!0,u.clientHeight=r[1][r[23]],Ie(()=>s=!1)),$.$set(u)},i(o){n||(B($.$$.fragment,o),n=!0)},o(o){M($.$$.fragment,o),n=!1},d(o){ee($,o)}}}function Xe(r){let $,s;return $=new Ze({props:{moveItem:r[13]}}),{c(){j($.$$.fragment)},l(n){U($.$$.fragment,n)},m(n,l){x($,n,l),s=!0},p:ne,i(n){s||(B($.$$.fragment,n),s=!0)},o(n){M($.$$.fragment,n),s=!1},d(n){ee($,n)}}}function gt(r){let $,s,n,l,a,o,i,u,_,y,k,b,H,R,G,Y,Z,C,w,Q=r[7],F=[];for(let m=0;m<Q.length;m+=1)F[m]=Ye(We(r,Q,m));const re=m=>M(F[m],1,1,()=>{F[m]=null});let v=r[7].length===1&&qe(r),d=r[5],f=[];for(let m=0;m<d.length;m+=1)f[m]=ze(Me(r,d,m));const L=m=>M(f[m],1,1,()=>{f[m]=null});let h=r[5].length===1&&Xe(r);return{c(){$=J("div"),s=J("div"),n=J("span"),l=be("To do"),a=q(),o=J("div"),i=q();for(let m=0;m<F.length;m+=1)F[m].c();u=q(),v&&v.c(),_=q(),y=J("div"),k=q(),b=J("div"),H=J("span"),R=be("Done"),G=q(),Y=J("div"),Z=q();for(let m=0;m<f.length;m+=1)f[m].c();C=q(),h&&h.c(),this.h()},l(m){$=K(m,"DIV",{class:!0});var p=N($);s=K(p,"DIV",{class:!0});var T=N(s);n=K(T,"SPAN",{class:!0});var te=N(n);l=De(te,"To do"),te.forEach(V),a=z(T),o=K(T,"DIV",{class:!0}),N(o).forEach(V),i=z(T);for(let ie=0;ie<F.length;ie+=1)F[ie].l(T);u=z(T),v&&v.l(T),T.forEach(V),_=z(p),y=K(p,"DIV",{class:!0}),N(y).forEach(V),k=z(p),b=K(p,"DIV",{class:!0});var oe=N(b);H=K(oe,"SPAN",{class:!0});var Be=N(H);R=De(Be,"Done"),Be.forEach(V),G=z(oe),Y=K(oe,"DIV",{class:!0}),N(Y).forEach(V),Z=z(oe);for(let ie=0;ie<f.length;ie+=1)f[ie].l(oe);C=z(oe),h&&h.l(oe),oe.forEach(V),p.forEach(V),this.h()},h(){X(n,"class","fs=2 bold"),X(o,"class","h=.5"),X(s,"class","flex column"),X(y,"class","w=5 h=5"),X(H,"class","fs=2 bold"),X(Y,"class","h=.5"),X(b,"class","flex column"),X($,"class","flex flex-wrap=wrap")},m(m,p){O(m,$,p),P($,s),P(s,n),P(n,l),P(s,a),P(s,o),P(s,i);for(let T=0;T<F.length;T+=1)F[T]&&F[T].m(s,null);P(s,u),v&&v.m(s,null),P($,_),P($,y),P($,k),P($,b),P(b,H),P(H,R),P(b,G),P(b,Y),P(b,Z);for(let T=0;T<f.length;T+=1)f[T]&&f[T].m(b,null);P(b,C),h&&h.m(b,null),w=!0},p(m,p){if(p&12489){Q=m[7];let T;for(T=0;T<Q.length;T+=1){const te=We(m,Q,T);F[T]?(F[T].p(te,p),B(F[T],1)):(F[T]=Ye(te),F[T].c(),B(F[T],1),F[T].m(s,u))}for(ve(),T=Q.length;T<F.length;T+=1)re(T);Ee()}if(m[7].length===1?v?(v.p(m,p),p&128&&B(v,1)):(v=qe(m),v.c(),B(v,1),v.m(s,null)):v&&(ve(),M(v,1,1,()=>{v=null}),Ee()),p&12346){d=m[5];let T;for(T=0;T<d.length;T+=1){const te=Me(m,d,T);f[T]?(f[T].p(te,p),B(f[T],1)):(f[T]=ze(te),f[T].c(),B(f[T],1),f[T].m(b,C))}for(ve(),T=d.length;T<f.length;T+=1)L(T);Ee()}m[5].length===1?h?(h.p(m,p),p&32&&B(h,1)):(h=Xe(m),h.c(),B(h,1),h.m(b,null)):h&&(ve(),M(h,1,1,()=>{h=null}),Ee())},i(m){if(!w){for(let p=0;p<Q.length;p+=1)B(F[p]);B(v);for(let p=0;p<d.length;p+=1)B(f[p]);B(h),w=!0}},o(m){F=F.filter(Boolean);for(let p=0;p<F.length;p+=1)M(F[p]);M(v),f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)M(f[p]);M(h),w=!1},d(m){m&&V($),Pe(F,m),v&&v.d(),Pe(f,m),h&&h.d()}}}function ht(r){let $,s;return{c(){$=new ke(!1),s=ae(),this.h()},l(n){$=He(n,!1),s=ae(),this.h()},h(){$.a=s},m(n,l){$.m(r[8],n,l),O(n,s,l)},p:ne,d(n){n&&V(s),n&&$.d()}}}function pt(r){let $,s,n,l,a;return $=new Ke({props:{name:"DragItemForExample"}}),{c(){j($.$$.fragment),s=q(),n=new ke(!1),l=ae(),this.h()},l(o){U($.$$.fragment,o),s=z(o),n=He(o,!1),l=ae(),this.h()},h(){n.a=l},m(o,i){x($,o,i),O(o,s,i),n.m(r[9],o,i),O(o,l,i),a=!0},p:ne,i(o){a||(B($.$$.fragment,o),a=!0)},o(o){M($.$$.fragment,o),a=!1},d(o){ee($,o),o&&V(s),o&&V(l),o&&n.d()}}}function _t(r){let $,s,n,l,a;return $=new Ke({props:{name:"DragItemPlaceHolderForExample"}}),{c(){j($.$$.fragment),s=q(),n=new ke(!1),l=ae(),this.h()},l(o){U($.$$.fragment,o),s=z(o),n=He(o,!1),l=ae(),this.h()},h(){n.a=l},m(o,i){x($,o,i),O(o,s,i),n.m(r[10],o,i),O(o,l,i),a=!0},p:ne,i(o){a||(B($.$$.fragment,o),a=!0)},o(o){M($.$$.fragment,o),a=!1},d(o){ee($,o),o&&V(s),o&&V(l),o&&n.d()}}}function bt(r){let $,s,n,l=`

${g("import")} ${e("{")} ${t("writable")}, ${g("type")} ${t("Writable")} ${e("}")} ${g("from")} ${D("svelte/store")}

${g("export")} ${c("const")} ${t("todo$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${E("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("todoTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${E("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("done$",!0)}: ${I("Writable")}${e("<")}${I("string")}${e("[]",1)}${e(">")} = ${E("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("doneTf$",!0)}: ${I("Writable")}${e("<")}${I("number")}${e("[]",1)}${e(">")} = ${E("writable")}${e("(")}${e("[]",1)}${e(")")}
${g("export")} ${c("const")} ${t("transition$",!0)} = ${E("writable")}${e("(")}${c("false")}${e(")")}
${g("export")} ${c("const")} ${t("drag$",!0)}: ${I("Writable")}${e("<")}${e("{",1)} ${t("type")}: ${D("todo")} | ${D("done")}, ${t("index")}: ${I("number")} ${e("}",1)} | ${c("null")}${e(">")} = ${E("writable")}${e("(")}${c("null")}${e(")")}`,a,o;return $=new tt({props:{name:"store"}}),{c(){j($.$$.fragment),s=q(),n=new ke(!1),a=ae(),this.h()},l(i){U($.$$.fragment,i),s=z(i),n=He(i,!1),a=ae(),this.h()},h(){n.a=a},m(i,u){x($,i,u),O(i,s,u),n.m(l,i,u),O(i,a,u),o=!0},p:ne,i(i){o||(B($.$$.fragment,i),o=!0)},o(i){M($.$$.fragment,i),o=!1},d(i){ee($,i),i&&V(s),i&&V(a),i&&n.d()}}}function Dt(r){let $,s,n,l,a,o,i,u,_,y,k,b,H,R,G,Y,Z,C,w;function Q(v){r[16](v)}function F(v){r[17](v)}let re={$$slots:{default:[gt]},$$scope:{ctx:r}};return r[2]!==void 0&&(re.isDragging=r[2]),r[3]!==void 0&&(re.setDragElement=r[3]),$=new dt({props:re}),de.push(()=>we($,"isDragging",Q)),de.push(()=>we($,"setDragElement",F)),$.$on("dragend",r[11]),o=new Te({props:{isCode:!0,$$slots:{default:[ht]},$$scope:{ctx:r}}}),y=new Te({props:{isCode:!0,$$slots:{default:[pt]},$$scope:{ctx:r}}}),R=new Te({props:{isCode:!0,$$slots:{default:[_t]},$$scope:{ctx:r}}}),C=new Te({props:{isCode:!0,$$slots:{default:[bt]},$$scope:{ctx:r}}}),{c(){j($.$$.fragment),l=q(),a=J("div"),j(o.$$.fragment),i=q(),u=J("div"),_=q(),j(y.$$.fragment),k=q(),b=J("div"),H=q(),j(R.$$.fragment),G=q(),Y=J("div"),Z=q(),j(C.$$.fragment),this.h()},l(v){U($.$$.fragment,v),l=z(v),a=K(v,"DIV",{});var d=N(a);U(o.$$.fragment,d),i=z(d),u=K(d,"DIV",{class:!0}),N(u).forEach(V),_=z(d),U(y.$$.fragment,d),k=z(d),b=K(d,"DIV",{class:!0}),N(b).forEach(V),H=z(d),U(R.$$.fragment,d),G=z(d),Y=K(d,"DIV",{class:!0}),N(Y).forEach(V),Z=z(d),U(C.$$.fragment,d),d.forEach(V),this.h()},h(){X(u,"class","h=1"),X(b,"class","h=1"),X(Y,"class","h=1")},m(v,d){x($,v,d),O(v,l,d),O(v,a,d),x(o,a,null),P(a,i),P(a,u),P(a,_),x(y,a,null),P(a,k),P(a,b),P(a,H),x(R,a,null),P(a,G),P(a,Y),P(a,Z),x(C,a,null),w=!0},p(v,d){const f={};d&33554683&&(f.$$scope={dirty:d,ctx:v}),!s&&d&4&&(s=!0,f.isDragging=v[2],Ie(()=>s=!1)),!n&&d&8&&(n=!0,f.setDragElement=v[3],Ie(()=>n=!1)),$.$set(f);const L={};d&33554432&&(L.$$scope={dirty:d,ctx:v}),o.$set(L);const h={};d&33554432&&(h.$$scope={dirty:d,ctx:v}),y.$set(h);const m={};d&33554432&&(m.$$scope={dirty:d,ctx:v}),R.$set(m);const p={};d&33554432&&(p.$$scope={dirty:d,ctx:v}),C.$set(p)},i(v){w||(B($.$$.fragment,v),B(o.$$.fragment,v),B(y.$$.fragment,v),B(R.$$.fragment,v),B(C.$$.fragment,v),w=!0)},o(v){M($.$$.fragment,v),M(o.$$.fragment,v),M(y.$$.fragment,v),M(R.$$.fragment,v),M(C.$$.fragment,v),w=!1},d(v){ee($,v),v&&V(l),v&&V(a),ee(o),ee(y),ee(R),ee(C)}}}function vt(r){let $,s;return $=new et({props:{$$slots:{default:[Dt]},$$scope:{ctx:r}}}),{c(){j($.$$.fragment)},l(n){U($.$$.fragment,n)},m(n,l){x($,n,l),s=!0},p(n,[l]){const a={};l&33554687&&(a.$$scope={dirty:l,ctx:n}),$.$set(a)},i(n){s||(B($.$$.fragment,n),s=!0)},o(n){M($.$$.fragment,n),s=!1},d(n){ee($,n)}}}function Et(r,$,s){let n,l,a,o,i,u;se(r,le,d=>s(18,n=d)),se(r,_e,d=>s(19,l=d)),se(r,fe,d=>s(4,a=d)),se(r,me,d=>s(5,o=d)),se(r,ue,d=>s(6,i=d)),se(r,ce,d=>s(7,u=d));const _=`${S("script",` ${t("lang")}=${D("ts")}`,`
${g("import")} ${t("DragContainer")} ${g("from")} ${D("organs/@common/utils/DragContainer.svelte")}
${g("import")} ${t("DragItemForExample")} ${g("from")} ${D("parts/ref/DragItemForExample.svelte")}
${g("import")} ${t("DragItemPlaceHolderForExample")} ${g("from")} ${D("parts/ref/DragItemPlaceHolderForExample.svelte")}
${g("import")} ${e("{")} ${t("done$")}, ${t("doneTf$")}, ${t("drag$")}, ${t("todo$")}, ${t("todoTf$")}, ${t("transition$")} ${e("}")} ${g("from")} ${D("parts/ref/store")}
${g("import")} ${e("{")} ${t("onDestroy")}, ${t("onMount")} ${e("}")} ${g("from")} ${D("svelte")}

${c("const")} ${t("todoHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("const")} ${t("doneHeights",!0)}: ${I("number")}${e("[]")} = ${e("[]")}
${c("let")} ${t("isDragging")}: ${I("boolean")}
${c("let")} ${E("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${E("handleDragend")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${t("$drag$")} = ${c("null")}
	${E("reOrdering")}${e("(",1)}${t("from",!0)}, ${t("type",!0)}${e(")",1)}
${e("}")}
${c("const")} ${E("transferList")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type",!0)} === ${D("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${g("if")} ${e("(",1)}${t("from",!0)} < ${t("index")}${e(") {",1)}
		${g("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${A(0)}
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
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${A(0)}
			${e("}")}
		${e("}",2)} ${g("else")} ${e("{",2)}
			${g("for")} ${e("(")}${c("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)}
	${e("(",1)}${t("type",!0)} === ${D("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${E("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${c("const")} ${E("moveItem")} = ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${c("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${g("if")} ${e("(",1)}${t("from",!0)} === ${D("todo")}${e(") {",1)}
		${c("const")} ${t("before",!0)} = ${t("$todo$")}.${E("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$done$")}.${E("slice")}${e("()",2)}
		${t("after",!0)}.${E("splice")}${e("(",2)}${t("index")}, ${A(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${E("splice")}${e("(",2)}${t("from",!0)}, ${A(1)}${e(")",2)}
		${t("$todo$")} = ${t("before",!0)}
		${t("$done$")} = ${t("after",!0)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${E("fill")}${e("(",2)}${A(0)}${e(")",2)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${E("fill")}${e("(",2)}${A(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${D("done")}, ${t("index: index")} ${e("}",2)}
		${t("doneHeights",!0)}.${E("splice")}${e("(",2)}${t("index")}, ${A(0)}, ${t("todoHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("todoHeights",!0)}.${E("splice")}${e("(",2)}${t("from",!0)}, ${A(1)}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${c("const")} ${t("before",!0)} = ${t("$done$")}.${E("slice")}${e("()",2)}
		${c("const")} ${t("after",!0)} = ${t("$todo$")}.${E("slice")}${e("()",2)}
		${t("after",!0)}.${E("splice")}${e("(",2)}${t("index")}, ${A(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${E("splice")}${e("(",2)}${t("from",!0)}, ${A(1)}${e(")",2)}
		${t("$done$")} = ${t("before",!0)}
		${t("$todo$")} = ${t("after",!0)}
		${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${E("fill")}${e("(",2)}${A(0)}${e(")",2)}
		${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${E("fill")}${e("(",2)}${A(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${D("todo")}, ${t("index: index")} ${e("}",2)}
		${t("todoHeights",!0)}.${E("splice")}${e("(",2)}${t("index")}, ${A(0)}, ${t("doneHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("doneHeights",!0)}.${E("splice")}${e("(",2)}${t("from",!0)}, ${A(1)}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${E("reOrdering")} = ${e("(")}${t("from")}: ${I("number")}, ${t("type")}: ${I("string")}${e(")")} ${c("=>")} ${e("{")}
	${c("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${D("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${g("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} === ${A(0)}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${c("const")} ${t("list",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${D("todo")} ? ${t("$todo$")} : ${t("$done$")} ${e(")",2)}${e("]",1)}
	${c("const")} ${t("temp",!0)} = ${t("list",!0)}${e("[",1)}${t("from")}${e("]",1)}
	${c("let")} ${t("i")}
	${g("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} < ${A(0)}${e(") {",1)}
		${g("for")} ${e("(",2)}${t("i")} = ${t("from")} - ${A(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}--${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} + ${A(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${A(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} + ${A(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${g("for")} ${e("(",2)}${t("i")} = ${t("from")} + ${A(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}++${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} - ${A(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${A(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} - ${A(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)}
	${t("transforms",!0)}${e("[",1)}${t("from")}${e("]",1)} = ${A(0)}
	${t("$transition$")} = ${c("false")}
	,${e("(",1)}${t("type")} === ${D("todo")} ? ${t("todo$",!0)} : ${t("done$",!0)} ${e(")",1)}.${E("set")}${e("(",1)}${t("list",!0)}${e(")",1)}
	,${e("(",1)}${t("type")} === ${D("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${E("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${E("onMount")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
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
	${t("$todoTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$todo$")}.${t("length")}${e(")",2)}.${E("fill")}${e("(",2)}${A(0)}${e(")",2)}
	${t("$todo$")} = ${e("[",2)} ${D("Task Z")}, ${D("")} ${e("]",2)}
	${t("$doneTf$")} = ${c("new")} ${I("Array")}${e("(",2)}${t("$done$")}.${t("length")}${e(")",2)}.${E("fill")}${e("(",2)}${A(0)}${e(")",2)}
${e("}",1)}${e(")")}
${E("onDestroy")}${e("(")}${e("()",1)} ${c("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[]",2)}
	${t("$todoTf$")} = ${e("[]",2)}
	${t("$done$")} = ${e("[]",2)}
	${t("$doneTf$")} = ${e("[]",2)}
	${t("$transition$")} = ${c("false")}
	${t("$drag$")} = ${c("null")}
${e("}",1)}${e(")")}

`)}

${S("DragContainer",` ${g("bind")}:${t("isDragging")}
		${g("bind")}:${E("setDragElement")}
		${g("on")}:${I("dragend")}=${e("{")}${E("handleDragend")}${e("}")}`,`
	${S("div",` ${t("class")}=${D("flex flex-wrap=wrap")}`,`
		${S("div",` ${t("class")}=${D("flex column")}`,`
			${S("span",` ${t("class")}=${D("fs=2 bold")}`,"To do")}
			${S("div",` ${t("class")}=${D("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$todo$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${S("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("todoHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${E("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$todo$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$todoTf$")}${e("}")}
					${t("list")}=${D("todo")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${E("transferList")}${e("}")}
					${e("{")}${E("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$todo$")}.${t("length")} === ${A(1)}${e("}")}
			${S("DragItemPlaceHolderForExample",` ${e("{")}${E("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
		${S("div",` ${t("class")}=${D("w=5 h=5")}`,"")}
		${S("div",` ${t("class")}=${D("flex column")}`,`
			${S("span",` ${t("class")}=${D("fs=2 bold")}`,"Done")}
			${S("div",` ${t("class")}=${D("h=.5")}`,"")}
			${e("{")}#${g("each")} ${t("$done$")} ${g("as")} ${t("v")}, ${t("i")}${e("}")}
			${S("DragItemForExample",` ${g("bind")}:${t("clientHeight")}=${e("{")}${t("doneHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${E("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$done$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$doneTf$")}${e("}")}
					${t("list")}=${D("done")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${E("transferList")}${e("}")}
					${e("{")}${E("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("each")}${e("}")}
			${e("{")}#${g("if")} ${t("$done$")}.${t("length")} === ${A(1)}${e("}")}
			${S("DragItemPlaceHolderForExample",` ${e("{")}${E("moveItem")}${e("}")}`,!1)}
			${e("{")}/${g("if")}${e("}")}
		`)}
	`)}
`)}`,y=`

${S("script",` ${t("lang")}=${D("ts")}`,`
${g("import")} ${t("Dragable")} ${g("from")} ${D("organs/@common/utils/Dragable.svelte")}
${g("import")} ${e("{")} ${t("drag$")}, ${t("transition$")} ${e("}")} ${g("from")} ${D("parts/ref/store")}

${g("export")} ${c("let")} ${t("list")}: ${I("string")}${e("[]")}
${g("export")} ${c("let")} ${t("transforms")}: ${I("number")}${e("[]")}
${g("export")} ${c("let")} ${t("type")}: ${D("todo")} | ${D("done")}
${g("export")} ${c("let")} ${t("index")}: ${I("number")}
${g("export")} ${c("let")} ${t("clientHeight")}: ${I("number")}
${g("export")} ${c("let")} ${t("duration")} = ${A(400)}
${g("export")} ${c("let")} ${E("setDragElement")}: ${e("(")}${t("clientX")}: ${I("number")}, ${t("clientY")}: ${I("number")}, ${t("drag")}: ${I("HTMLElement")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${E("transferList")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}
${g("export")} ${c("let")} ${E("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${E("handleClick")} = ${e("()")} ${c("=>")} ${e("{")}
	${E("alert")}${e("(",1)}${e("(",2)}${t("event")}.${t("target")} ${g("as")} ${I("HTMLElement")}${e(")",2)}.${t("textContent")}${e(")",1)}
${e("}")}
${c("const")} ${E("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${c("const")} ${t("t",!0)} = ${t("$drag$")}?.${t("type")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")} || ${t("i",!0)} === ${t("index")} && ${t("t",!0)} === ${t("type")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${g("if")} ${e("(",1)}${t("t",!0)} === ${t("type")}${e(") {",1)}
		${E("transferList")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)} ${g("else")} ${e("{",1)}
		${E("moveItem")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)}
${e("}")}
${c("const")} ${E("handleDragstart")} = ${e("()")} ${c("=>")} ${e("{")}
	${t("$drag$")} = ${e("{",1)} ${t("type: type")}, ${t("index: index")} ${e("}",1)}
	${t("$transition$")} = ${c("true")}
${e("}")}
`)}

${S("Dragable",` ${g("on")}:${I("dragstart")}=${e("{")}${E("handleDragstart")}${e("}")}
		${t("delay")}=${e("{")}${A(300)}${e("}")}
		${e("{")}${E("setDragElement")}${e("}")}`,`
	${S("div",` ${g("bind")}:${t("clientHeight")}
			${t("class")}=${D('"w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY(',!1)}${e("{",2)}${t("transforms")}${e("[")}${t("index")}${e("]")}${e("}",2)}${D("px)",!1)}
			${e("{",2)}${t("$transition$")} ? ${D("tt=")} + ${t("duration")} + ${D("ms")} : ${D("")}${e("}",2)}
			${e("{",2)}${t("$drag$")}?.${t("index")} === ${t("index")} && ${t("$drag$")}?.${t("type")} === ${t("type")} ? ${D(" opacity=.2 ol=.2_solid_#aaa")} : ${D("")}${e("}",2)}
			${e("{",2)}!${t("list")}${e("[")}${t("index")}${e("]")} ? ${D("none")} : ${D("")}${e("}",2)}
			${g("on")}:${I("dragenter")}=${e("{")}${E("handleDragenter")}${e("}")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)}${e("}")}
	`)}
	${S("div",` ${t("slot")}=${D("drag")}
			${g("bind")}:${t("clientHeight")}
			${t("class")}=${D("ta=center fs=2.5 cs=move c=#000 @dark@c=#fff")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)} + ${D("!!")}${e("}")}
	`)}
`)}`,k=`

${S("script",` ${t("lang")}=${D("ts")}`,`
${g("import")} ${e("{")} ${t("drag$")} ${e("}")} ${g("from")} ${D("parts/ref/store")}

${g("export")} ${c("let")} ${E("moveItem")}: ${e("(")}${t("index")}: ${I("number")}${e(")")} ${c("=>")} ${I("any")}

${c("const")} ${E("handleDragenter")} = ${e("()")} ${c("=>")} ${e("{")}
	${c("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${g("if")} ${e("(",1)}${t("i",!0)} === ${c("undefined")}${e(") {",1)}
		${g("return")}
	${e("}",1)}
	${E("moveItem")}${e("(",2)}${A(0)}${e(")",2)}
${e("}")}
`)}

${S("div",` ${t("style")}=${D("user-select:none")}
		${t("class")}=${D("w=6 ol=.1_dashed ta=center fs=2 cs=pointer")}
		${g("on")}:${I("dragenter")}=${e("{")}${E("handleDragenter")}${e("}")}`,`
	Empty
`)}`,b=[],H=[];let R,G;const Y=()=>{const d=n.index,f=n.type;W(le,n=null,n),w(d,f)},Z=d=>{const f=n.index,L=n.type,h=[...L==="todo"?i:a],m=L==="todo"?b:H;if(f<d)if(h[d])for(let p=d;h[p];p++)h[f]-=m[p],h[p]=0;else for(let p=d;!h[p];p--)h[f]+=m[p],h[p]=-m[f];else if(h[d])for(let p=d;h[p];p--)h[f]+=m[p],h[p]=0;else for(let p=d;!h[p];p++)h[f]-=m[p],h[p]=m[f];(L==="todo"?ue:fe).set(h)},C=d=>{const f=n.index;if(n.type==="todo"){const h=[...u],m=[...o];m.splice(d,0,h[f]),h.splice(f,1),W(ce,u=h,u),W(me,o=m,o),W(ue,i=new Array(h.length).fill(0),i),W(fe,a=new Array(m.length).fill(0),a),W(le,n={type:"done",index:d},n),H.splice(d,0,b[f]),b.splice(f,1)}else{const h=[...o],m=[...u];m.splice(d,0,h[f]),h.splice(f,1),W(me,o=h,o),W(ce,u=m,u),W(fe,a=new Array(h.length).fill(0),a),W(ue,i=new Array(m.length).fill(0),i),W(le,n={type:"todo",index:d},n),b.splice(d,0,H[f]),H.splice(f,1)}},w=(d,f)=>{const L=[...f==="todo"?i:a];if(L[d]===0)return;const h=[...f==="todo"?u:o],m=h[d];let p;if(L[d]<0){for(p=d-1;L[p];p--)h[p+1]=h[p],L[p]=0;h[p+1]=m}else{for(p=d+1;L[p];p++)h[p-1]=h[p],L[p]=0;h[p-1]=m}L[d]=0,W(_e,l=!1,l),(f==="todo"?ce:me).set(h),(f==="todo"?ue:fe).set(L)};je(()=>{W(ce,u=["Task A","Task B","Task C","Task D","Task E","Task F","Task G","Task H","Task I","Task J","Task K","Task L",""],u),W(ue,i=new Array(u.length).fill(0),i),W(me,o=["Task Z",""],o),W(fe,a=new Array(o.length).fill(0),a)}),Ue(()=>{W(ce,u=[],u),W(ue,i=[],i),W(me,o=[],o),W(fe,a=[],a),W(_e,l=!1,l),W(le,n=null,n)});function Q(d,f){r.$$.not_equal(b[f],d)&&(b[f]=d,s(0,b))}function F(d,f){r.$$.not_equal(H[f],d)&&(H[f]=d,s(1,H))}function re(d){R=d,s(2,R)}function v(d){G=d,s(3,G)}return[b,H,R,G,a,o,i,u,_,y,k,Y,Z,C,Q,F,re,v]}class Tt extends ge{constructor($){super(),he(this,$,Et,vt,pe,{})}}function yt(r){let $,s,n;return s=new Tt({}),{c(){$=q(),j(s.$$.fragment),this.h()},l(l){xe("svelte-vkwsnr",document.head).forEach(V),$=z(l),U(s.$$.fragment,l),this.h()},h(){document.title="Drag and Drop | Reference"},m(l,a){O(l,$,a),x(s,l,a),n=!0},p:ne,i(l){n||(B(s.$$.fragment,l),n=!0)},o(l){M(s.$$.fragment,l),n=!1},d(l){l&&V($),ee(s,l)}}}class At extends ge{constructor($){super(),he(this,$,null,yt,pe,{})}}export{At as component};
