import{s as le,B as Be,a as j,f as z,c as J,g as Z,h as N,d as b,j as M,k as _e,i as q,r as ne,C as Pe,D as Re,E as qe,J as Me,P as Ke,p as fe,z as se,l as ve,m as be,K as Ge,x as Y,Q as Oe,n as Qe,A as K,y as Ie,u as re,v as Le,w as Ve,L as De,M as Ee,e as ue,o as Ue,O as $t,H as Ce,F as Se,N as nt}from"../chunks/scheduler.70c5b284.js";import{S as oe,i as ie,a as S,t as F,b as U,d as x,m as ee,e as te,f as Ae,g as we,c as ye}from"../chunks/index.ec04139e.js";import{H as We}from"../chunks/H2.5dc18f45.js";import{e as Te}from"../chunks/each.e59479a4.js";import{t as pe,d as ae,I as rt,a as ce,b as ge,c as me,e as he}from"../chunks/IdeTypescript.c31ddde5.js";import{C as st}from"../chunks/ComponentTabView.444d44cb.js";import{C as ke,h as Q,k as c,n as t,s as w,b as e,g as d,t as C,f as T,d as W}from"../chunks/highlighter.4de48d29.js";import{s as Ye}from"../chunks/styles.d2aeb744.js";const lt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:He}=lt;function ot(s){let $,n,r,i,a;const l=s[10].default,o=Be(l,s,s[9],null);return{c(){$=j(),n=z("div"),o&&o.c(),this.h()},l(f){$=J(f),n=Z(f,"DIV",{class:!0,style:!0});var p=N(n);o&&o.l(p),p.forEach(b),this.h()},h(){M(n,"class",s[0]),_e(n,"position","relative")},m(f,p){q(f,$,p),q(f,n,p),o&&o.m(n,null),s[11](n),r=!0,i||(a=[ne(He.body,"mousemove",s[2]),ne(He.body,"mouseup",s[4]),ne(He.body,"touchmove",s[3]),ne(He.body,"touchend",s[5])],i=!0)},p(f,[p]){o&&o.p&&(!r||p&512)&&Pe(o,l,f,f[9],r?qe(l,f[9],p,null):Re(f[9]),null),(!r||p&1)&&M(n,"class",f[0])},i(f){r||(S(o,f),r=!0)},o(f){F(o,f),r=!1},d(f){f&&(b($),b(n)),o&&o.d(f),s[11](null),i=!1,Me(a)}}}function it(s,$,n){let{$$slots:r={},$$scope:i}=$,{classs:a=""}=$,{isDragging:l=!1}=$,{dragElement:o=null}=$;const f=(u,y,L)=>{const _=D.getBoundingClientRect();n(7,o=L),g=u-_.left,A=y-_.top,D.append(o),n(6,l=!0)},p=Ke();let D,v,g=0,A=0,X=0,h=0,V;const G=u=>{if(l){const y=m(document.elementsFromPoint(u.clientX,u.clientY));y&&v!=y&&(v&&v.dispatchEvent(new DragEvent("dragleave")),v=y,v.dispatchEvent(new DragEvent("dragenter"))),X=u.clientX,h=u.clientY,R(),p("dragmove"),E(Date.now())}},P=u=>{G(u.touches[0])},I=()=>{l&&(D.removeChild(o),v&&(v.dispatchEvent(new DragEvent("drop")),v=null),n(7,o=null),n(6,l=!1),p("dragend"))},O=()=>{I()},m=u=>{const y=u.length;for(let L=0;L<y;L++)if(!o.compareDocumentPosition(u[L]))return u[L+1]},R=()=>{const u=D.getBoundingClientRect();n(7,o.style.transform=`translate(${X-g-u.left}px, ${h-A-u.top}px)`,o)};function E(u){V||(V=requestAnimationFrame(()=>{V=0;let y=D;for(;y!==document.body;){if(y.scrollWidth>y.clientWidth){if(y.scrollLeft)break;if(y.scrollLeft=1,y.scrollLeft){y.scrollLeft=0;break}}y=y.parentElement}let L=D;for(;L!==document.body;){if(L.scrollHeight>L.clientHeight){if(L.scrollTop)break;if(L.scrollTop=1,L.scrollTop){L.scrollTop=0;break}}L=L.parentElement}const _=o==null?void 0:o.getBoundingClientRect();if(!_)return;const B=y.getBoundingClientRect(),k=L.getBoundingClientRect();if(_.left>=B.left&&_.right<=B.right&&_.top>=k.top&&_.bottom<=k.bottom)return;const $e=Date.now();u=$e-u,_.left<B.left?y.scrollBy((_.left-B.left)*u/30,0):_.right>B.right&&y.scrollBy((_.right-B.right)*u/30,0),_.top<k.top?L.scrollBy(0,(_.top-k.top)*u/30):_.bottom>k.bottom&&L.scrollBy(0,(_.bottom-k.bottom)*u/30),R(),E($e)}))}function H(u){fe[u?"unshift":"push"](()=>{D=u,n(1,D)})}return s.$$set=u=>{"classs"in u&&n(0,a=u.classs),"isDragging"in u&&n(6,l=u.isDragging),"dragElement"in u&&n(7,o=u.dragElement),"$$scope"in u&&n(9,i=u.$$scope)},[a,D,G,P,I,O,l,o,f,i,r,H]}class at extends oe{constructor($){super(),ie(this,$,it,ot,le,{classs:0,isDragging:6,dragElement:7,setDragElement:8})}get setDragElement(){return this.$$.ctx[8]}}const ft=s=>({}),ze=s=>({});function ut(s){let $,n,r,i,a,l;const o=s[10].default,f=Be(o,s,s[9],null),p=s[10].drag,D=Be(p,s,s[9],ze);return{c(){$=z("div"),f&&f.c(),n=j(),r=z("div"),D&&D.c(),this.h()},l(v){$=Z(v,"DIV",{class:!0,style:!0});var g=N($);f&&f.l(g),g.forEach(b),n=J(v),r=Z(v,"DIV",{style:!0});var A=N(r);D&&D.l(A),A.forEach(b),this.h()},h(){M($,"class",s[0]),_e($,"touch-action","none"),_e($,"user-select","none"),_e($,"width","fit-content"),_e(r,"display","none")},m(v,g){q(v,$,g),f&&f.m($,null),s[11]($),q(v,n,g),q(v,r,g),D&&D.m(r,null),s[12](r),i=!0,a||(l=[ne($,"mousedown",s[3]),ne($,"mouseup",s[5]),ne($,"touchstart",s[4]),ne($,"touchend",s[6],{passive:!0})],a=!0)},p(v,[g]){f&&f.p&&(!i||g&512)&&Pe(f,o,v,v[9],i?qe(o,v[9],g,null):Re(v[9]),null),(!i||g&1)&&M($,"class",v[0]),D&&D.p&&(!i||g&512)&&Pe(D,p,v,v[9],i?qe(p,v[9],g,ft):Re(v[9]),ze)},i(v){i||(S(f,v),S(D,v),i=!0)},o(v){F(f,v),F(D,v),i=!1},d(v){v&&(b($),b(n),b(r)),f&&f.d(v),s[11](null),D&&D.d(v),s[12](null),a=!1,Me(l)}}}function dt(s,$,n){let{$$slots:r={},$$scope:i}=$,{classs:a=""}=$,{delay:l=0}=$,{setDragElement:o}=$;const f=Ke();let p,D,v;const g=P=>{v=setTimeout(()=>{const I=(D.firstChild||p).cloneNode(!0);I.style.position="absolute",I.style.top=p.offsetTop+"px",I.style.left=p.offsetLeft+"px",o(P.clientX,P.clientY,I),f("dragstart")},l)},A=P=>{g(P.touches[0])},X=()=>{clearTimeout(v)},h=()=>{clearTimeout(v)};function V(P){fe[P?"unshift":"push"](()=>{p=P,n(1,p)})}function G(P){fe[P?"unshift":"push"](()=>{D=P,n(2,D)})}return s.$$set=P=>{"classs"in P&&n(0,a=P.classs),"delay"in P&&n(7,l=P.delay),"setDragElement"in P&&n(8,o=P.setDragElement),"$$scope"in P&&n(9,i=P.$$scope)},[a,p,D,g,A,X,h,l,o,i,r,V,G]}class ct extends oe{constructor($){super(),ie(this,$,dt,ut,le,{classs:0,delay:7,setDragElement:8})}}function mt(s){let $,n=s[1][s[4]]+"",r,i,a,l,o;return{c(){$=z("div"),r=ve(n),this.h()},l(f){$=Z(f,"DIV",{class:!0});var p=N($);r=be(p,n),p.forEach(b),this.h()},h(){var f,p;M($,"class",i="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+s[2][s[4]]+"px) "+(s[7]?"tt="+s[5]+"ms":"")+" "+(((f=s[8])==null?void 0:f.index)===s[4]&&((p=s[8])==null?void 0:p.type)===s[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(s[1][s[4]]?"":"none")),Ge(()=>s[15].call($))},m(f,p){q(f,$,p),Y($,r),a=Oe($,s[15].bind($)),l||(o=[ne($,"click",s[9]),ne($,"dragenter",s[10])],l=!0)},p(f,p){var D,v;p&18&&n!==(n=f[1][f[4]]+"")&&Qe(r,n),p&446&&i!==(i="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+f[2][f[4]]+"px) "+(f[7]?"tt="+f[5]+"ms":"")+" "+(((D=f[8])==null?void 0:D.index)===f[4]&&((v=f[8])==null?void 0:v.type)===f[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(f[1][f[4]]?"":"none"))&&M($,"class",i)},d(f){f&&b($),a(),l=!1,Me(o)}}}function gt(s){let $,n=s[1][s[4]]+"!!",r,i;return{c(){$=z("div"),r=ve(n),this.h()},l(a){$=Z(a,"DIV",{slot:!0,class:!0});var l=N($);r=be(l,n),l.forEach(b),this.h()},h(){M($,"slot","drag"),M($,"class","ta=center fs=2.5 cs=move c=#000 @dark@c=#fff"),Ge(()=>s[14].call($))},m(a,l){q(a,$,l),Y($,r),i=Oe($,s[14].bind($))},p(a,l){l&18&&n!==(n=a[1][a[4]]+"!!")&&Qe(r,n)},d(a){a&&b($),i()}}}function ht(s){let $,n;return $=new ct({props:{delay:300,setDragElement:s[6],$$slots:{drag:[gt],default:[mt]},$$scope:{ctx:s}}}),$.$on("dragstart",s[11]),{c(){U($.$$.fragment)},l(r){x($.$$.fragment,r)},m(r,i){ee($,r,i),n=!0},p(r,[i]){const a={};i&64&&(a.setDragElement=r[6]),i&65983&&(a.$$scope={dirty:i,ctx:r}),$.$set(a)},i(r){n||(S($.$$.fragment,r),n=!0)},o(r){F($.$$.fragment,r),n=!1},d(r){te($,r)}}}function _t(s,$,n){let r,i;se(s,pe,I=>n(7,r=I)),se(s,ae,I=>n(8,i=I));let{list:a}=$,{transforms:l}=$,{type:o}=$,{index:f}=$,{clientHeight:p}=$,{duration:D=400}=$,{setDragElement:v}=$,{transfer_list:g}=$,{move_item:A}=$;const X=I=>{alert(I.target.textContent)},h=()=>{const I=i==null?void 0:i.index,O=i==null?void 0:i.type;I===void 0||I===f&&O===o||(O===o?g(f):A(f))},V=()=>{K(ae,i={type:o,index:f},i),K(pe,r=!0,r)};function G(){p=this.clientHeight,n(0,p)}function P(){p=this.clientHeight,n(0,p)}return s.$$set=I=>{"list"in I&&n(1,a=I.list),"transforms"in I&&n(2,l=I.transforms),"type"in I&&n(3,o=I.type),"index"in I&&n(4,f=I.index),"clientHeight"in I&&n(0,p=I.clientHeight),"duration"in I&&n(5,D=I.duration),"setDragElement"in I&&n(6,v=I.setDragElement),"transfer_list"in I&&n(12,g=I.transfer_list),"move_item"in I&&n(13,A=I.move_item)},[p,a,l,o,f,D,v,r,i,X,h,V,g,A,G,P]}class xe extends oe{constructor($){super(),ie(this,$,_t,ht,le,{list:1,transforms:2,type:3,index:4,clientHeight:0,duration:5,setDragElement:6,transfer_list:12,move_item:13})}}function pt(s){let $,n="Empty",r,i;return{c(){$=z("div"),$.textContent=n,this.h()},l(a){$=Z(a,"DIV",{class:!0,"data-svelte-h":!0}),Ie($)!=="svelte-2ylml"&&($.textContent=n),this.h()},h(){M($,"class","us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer")},m(a,l){q(a,$,l),r||(i=ne($,"dragenter",s[0]),r=!0)},p:re,i:re,o:re,d(a){a&&b($),r=!1,i()}}}function vt(s,$,n){let r;se(s,ae,l=>n(2,r=l));let{move_item:i}=$;const a=()=>{(r==null?void 0:r.index)!==void 0&&i(0)};return s.$$set=l=>{"move_item"in l&&n(1,i=l.move_item)},[a,i]}class et extends oe{constructor($){super(),ie(this,$,vt,pt,le,{move_item:1})}}function bt(s){let $,n,r,i;return{c(){$=z("div"),n=Le("svg"),r=Le("path"),i=Le("path"),this.h()},l(a){$=Z(a,"DIV",{class:!0});var l=N($);n=Ve(l,"svg",{xmlns:!0,viewBox:!0});var o=N(n);r=Ve(o,"path",{d:!0}),N(r).forEach(b),i=Ve(o,"path",{d:!0}),N(i).forEach(b),o.forEach(b),l.forEach(b),this.h()},h(){M(r,"d","M95.73,16.26C84.32-.07,61.78-4.91,45.49,5.47L16.87,23.71A32.83,32.83,0,0,0,2,45.69a35.13,35.13,0,0,0-.55,6.14,34.69,34.69,0,0,0,4,16.06A33,33,0,0,0,.54,80.16a35,35,0,0,0,6,26.46c11.41,16.33,34,21.17,50.24,10.79L85.37,99.17a32.76,32.76,0,0,0,14.83-22,34.08,34.08,0,0,0,.55-6.13A34.72,34.72,0,0,0,96.8,55a33,33,0,0,0,4.91-12.26,36,36,0,0,0,.54-6.13,34.93,34.93,0,0,0-6.52-20.33Zm0,0Z"),M(i,"d","M42.69,108.16a22.94,22.94,0,0,1-5.72.73A22.7,22.7,0,0,1,18.3,99.11a21,21,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,20.52,20.52,0,0,1,.69-2.67l.54-1.64L17.39,80a37.13,37.13,0,0,0,11.2,5.6l1.06.32-.1,1.06c0,.18,0,.37,0,.55a6.36,6.36,0,0,0,1.18,3.7,6.82,6.82,0,0,0,5.62,3,6.65,6.65,0,0,0,1.72-.22,6.28,6.28,0,0,0,1.76-.77L68.42,74.91a6,6,0,0,0,2.79-5.09A6.35,6.35,0,0,0,70,66.13a6.85,6.85,0,0,0-5.63-2.94,6.65,6.65,0,0,0-1.72.22,6,6,0,0,0-1.75.77L50,71.14a21.06,21.06,0,0,1-5.81,2.55,23.06,23.06,0,0,1-5.72.73A22.73,22.73,0,0,1,19.8,64.65a21.05,21.05,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,19.82,19.82,0,0,1,8.92-13.23L53.74,17.28a21,21,0,0,1,5.81-2.56A23,23,0,0,1,65.27,14,22.74,22.74,0,0,1,84,23.76,21.05,21.05,0,0,1,87.87,36a21.72,21.72,0,0,1-.32,3.69,20.52,20.52,0,0,1-.69,2.67L86.32,44l-1.46-1.07a36.9,36.9,0,0,0-11.2-5.6L72.6,37l.1-1.06c0-.18,0-.37,0-.55a6.42,6.42,0,0,0-1.18-3.71,6.85,6.85,0,0,0-5.62-2.94A6.65,6.65,0,0,0,64.2,29a5.89,5.89,0,0,0-1.76.77L33.82,48a6,6,0,0,0-2.69,4A6.92,6.92,0,0,0,31,53.06a6.35,6.35,0,0,0,1.18,3.69,6.84,6.84,0,0,0,5.62,2.94,6.65,6.65,0,0,0,1.72-.22,6,6,0,0,0,1.76-.77l10.92-7a20.93,20.93,0,0,1,5.81-2.55,23,23,0,0,1,5.72-.73,22.74,22.74,0,0,1,18.68,9.77,21.05,21.05,0,0,1,3.92,12.23A20.64,20.64,0,0,1,86,74.14a19.78,19.78,0,0,1-8.92,13.23L48.51,105.6a21,21,0,0,1-5.82,2.56Zm0,0Z"),M(n,"xmlns","http://www.w3.org/2000/svg"),M(n,"viewBox","0 0 102.25 122.88"),M($,"class",s[0])},m(a,l){q(a,$,l),Y($,n),Y(n,r),Y(n,i)},p(a,[l]){l&1&&M($,"class",a[0])},i:re,o:re,d(a){a&&b($)}}}function Dt(s,$,n){let{classs:r=""}=$;return s.$$set=i=>{"classs"in i&&n(0,r=i.classs)},[r]}class Et extends oe{constructor($){super(),ie(this,$,Dt,bt,le,{classs:0})}}function wt(s){let $,n,r,i,a;return $=new Et({props:{classs:"inline-block w=1 _path/f=#ff3e00 _path:nth-of-type(2)/f=#fff"}}),{c(){U($.$$.fragment),n=j(),r=new De(!1),i=ve(".svelte"),this.h()},l(l){x($.$$.fragment,l),n=J(l),r=Ee(l,!1),i=be(l,".svelte"),this.h()},h(){r.a=i},m(l,o){ee($,l,o),q(l,n,o),r.m(s[0],l,o),q(l,i,o),a=!0},p(l,[o]){(!a||o&1)&&r.p(l[0])},i(l){a||(S($.$$.fragment,l),a=!0)},o(l){F($.$$.fragment,l),a=!1},d(l){l&&(b(n),r.d(),b(i)),te($,l)}}}function yt(s,$,n){let{name:r}=$;return s.$$set=i=>{"name"in i&&n(0,r=i.name)},[r]}class tt extends oe{constructor($){super(),ie(this,$,yt,wt,le,{name:0})}}function Tt(s){let $,n;return{c(){$=new De(!1),n=ue(),this.h()},l(r){$=Ee(r,!1),n=ue(),this.h()},h(){$.a=n},m(r,i){$.m(s[0],r,i),q(r,n,i)},p:re,d(r){r&&(b(n),$.d())}}}function kt(s){let $,n,r,i,a;return $=new tt({props:{name:"DragItem"}}),{c(){U($.$$.fragment),n=j(),r=new De(!1),i=ue(),this.h()},l(l){x($.$$.fragment,l),n=J(l),r=Ee(l,!1),i=ue(),this.h()},h(){r.a=i},m(l,o){ee($,l,o),q(l,n,o),r.m(s[1],l,o),q(l,i,o),a=!0},p:re,i(l){a||(S($.$$.fragment,l),a=!0)},o(l){F($.$$.fragment,l),a=!1},d(l){l&&(b(n),b(i),r.d()),te($,l)}}}function Ht(s){let $,n,r,i,a;return $=new tt({props:{name:"DragItemPlaceHolder"}}),{c(){U($.$$.fragment),n=j(),r=new De(!1),i=ue(),this.h()},l(l){x($.$$.fragment,l),n=J(l),r=Ee(l,!1),i=ue(),this.h()},h(){r.a=i},m(l,o){ee($,l,o),q(l,n,o),r.m(s[2],l,o),q(l,i,o),a=!0},p:re,i(l){a||(S($.$$.fragment,l),a=!0)},o(l){F($.$$.fragment,l),a=!1},d(l){l&&(b(n),b(i),r.d()),te($,l)}}}function It(s){let $,n,r,i=`

${c("import")} ${e("{")} ${t("writable")}, ${c("type")} ${t("Writable")} ${e("}")} ${c("from")} ${w("svelte/store")}

${c("export")} ${d("const")} ${t("todo$",!0)}: ${C("Writable")}${e("<")}${C("string")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${d("const")} ${t("todoTf$",!0)}: ${C("Writable")}${e("<")}${C("number")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${d("const")} ${t("done$",!0)}: ${C("Writable")}${e("<")}${C("string")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${d("const")} ${t("doneTf$",!0)}: ${C("Writable")}${e("<")}${C("number")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${d("const")} ${t("transition$",!0)} = ${T("writable")}${e("(")}${d("false")}${e(")")}
${c("export")} ${d("const")} ${t("drag$",!0)}: ${C("Writable")}${e("<")}${e("{",1)} ${t("type")}: ${w("todo")} | ${w("done")}, ${t("index")}: ${C("number")} ${e("}",1)} | ${d("null")}${e(">")} = ${T("writable")}${e("(")}${d("null")}${e(")")}`,a,l;return $=new rt({props:{name:"store"}}),{c(){U($.$$.fragment),n=j(),r=new De(!1),a=ue(),this.h()},l(o){x($.$$.fragment,o),n=J(o),r=Ee(o,!1),a=ue(),this.h()},h(){r.a=a},m(o,f){ee($,o,f),q(o,n,f),r.m(i,o,f),q(o,a,f),l=!0},p:re,i(o){l||(S($.$$.fragment,o),l=!0)},o(o){F($.$$.fragment,o),l=!1},d(o){o&&(b(n),b(a),r.d()),te($,o)}}}function Ct(s){let $,n,r,i,a,l,o,f,p,D,v,g,A,X;return $=new ke({props:{isCode:!0,$$slots:{default:[Tt]},$$scope:{ctx:s}}}),a=new ke({props:{isCode:!0,$$slots:{default:[kt]},$$scope:{ctx:s}}}),p=new ke({props:{isCode:!0,$$slots:{default:[Ht]},$$scope:{ctx:s}}}),A=new ke({props:{isCode:!0,$$slots:{default:[It]},$$scope:{ctx:s}}}),{c(){U($.$$.fragment),n=j(),r=z("div"),i=j(),U(a.$$.fragment),l=j(),o=z("div"),f=j(),U(p.$$.fragment),D=j(),v=z("div"),g=j(),U(A.$$.fragment),this.h()},l(h){x($.$$.fragment,h),n=J(h),r=Z(h,"DIV",{class:!0}),N(r).forEach(b),i=J(h),x(a.$$.fragment,h),l=J(h),o=Z(h,"DIV",{class:!0}),N(o).forEach(b),f=J(h),x(p.$$.fragment,h),D=J(h),v=Z(h,"DIV",{class:!0}),N(v).forEach(b),g=J(h),x(A.$$.fragment,h),this.h()},h(){M(r,"class","h=1"),M(o,"class","h=1"),M(v,"class","h=1")},m(h,V){ee($,h,V),q(h,n,V),q(h,r,V),q(h,i,V),ee(a,h,V),q(h,l,V),q(h,o,V),q(h,f,V),ee(p,h,V),q(h,D,V),q(h,v,V),q(h,g,V),ee(A,h,V),X=!0},p(h,[V]){const G={};V&8&&(G.$$scope={dirty:V,ctx:h}),$.$set(G);const P={};V&8&&(P.$$scope={dirty:V,ctx:h}),a.$set(P);const I={};V&8&&(I.$$scope={dirty:V,ctx:h}),p.$set(I);const O={};V&8&&(O.$$scope={dirty:V,ctx:h}),A.$set(O)},i(h){X||(S($.$$.fragment,h),S(a.$$.fragment,h),S(p.$$.fragment,h),S(A.$$.fragment,h),X=!0)},o(h){F($.$$.fragment,h),F(a.$$.fragment,h),F(p.$$.fragment,h),F(A.$$.fragment,h),X=!1},d(h){h&&(b(n),b(r),b(i),b(l),b(o),b(f),b(D),b(v),b(g)),te($,h),te(a,h),te(p,h),te(A,h)}}}function At(s){const $=`${Q("script",` ${t("lang")}=${w("ts")}`,`
${c("import")} ${t("DragItem")} ${c("from")} ${w("parts/ref/utils/drag-and-drop/TodoListExample/DragItem.svelte")}
${c("import")} ${t("DragItemPlaceHolder")} ${c("from")} ${w("parts/ref/utils/drag-and-drop/TodoListExample/DragItemPlaceHolder.svelte")}
${c("import")} ${e("{")} ${t("done$")}, ${t("doneTf$")}, ${t("drag$")}, ${t("todo$")}, ${t("todoTf$")}, ${t("transition$")} ${e("}")} ${c("from")} ${w("parts/ref/store")}
${c("import")} ${e("{")} ${t("onDestroy")}, ${t("onMount")} ${e("}")} ${c("from")} ${w("svelte")}
${c("import")} ${e("{")} ${t("DragContainer")} ${e("}")} ${c("from")} ${w("lube-ui")}

${d("const")} ${t("todoHeights",!0)}: ${C("number")}${e("[]")} = ${e("[]")}
${d("const")} ${t("doneHeights",!0)}: ${C("number")}${e("[]")} = ${e("[]")}
${d("let")} ${t("isDragging")}: ${C("boolean")}
${d("let")} ${T("setDragElement")}: ${e("(")}${t("clientX")}: ${C("number")}, ${t("clientY")}: ${C("number")}, ${t("drag")}: ${C("HTMLElement")}${e(")")} ${d("=>")} ${C("any")}

${d("const")} ${T("handle_dragend")} = ${e("()")} ${d("=>")} ${e("{")}
	${d("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${d("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${t("$drag$")} = ${d("null")}
	${T("re_ordering")}${e("(",1)}${t("from",!0)}, ${t("type",!0)}${e(")",1)}
${e("}")}
${d("const")} ${T("transfer_list")} = ${e("(")}${t("index")}: ${C("number")}${e(")")} ${d("=>")} ${e("{")}
	${d("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${d("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${d("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type",!0)} === ${w("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${c("if")} ${e("(",1)}${t("from",!0)} < ${t("index")}${e(") {",1)}
		${c("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${c("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${W(0)}
			${e("}")}
		${e("}",2)} ${c("else")} ${e("{",2)}
			${c("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = -${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${c("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${c("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${W(0)}
			${e("}")}
		${e("}",2)} ${c("else")} ${e("{",2)}
			${c("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)}
	${e("(",1)}${t("type",!0)} === ${w("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${T("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${d("const")} ${T("move_item")} = ${e("(")}${t("index")}: ${C("number")}${e(")")} ${d("=>")} ${e("{")}
	${d("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${d("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${c("if")} ${e("(",1)}${t("from",!0)} === ${w("todo")}${e(") {",1)}
		${d("const")} ${t("before",!0)} = ${t("$todo$")}.${T("slice")}${e("()",2)}
		${d("const")} ${t("after",!0)} = ${t("$done$")}.${T("slice")}${e("()",2)}
		${t("after",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${W(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${W(1)}${e(")",2)}
		${t("$todo$")} = ${t("before",!0)}
		${t("$done$")} = ${t("after",!0)}
		${t("$todoTf$")} = ${d("new")} ${C("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${W(0)}${e(")",2)}
		${t("$doneTf$")} = ${d("new")} ${C("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${W(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${w("done")}, ${t("index: index")} ${e("}",2)}
		${t("doneHeights",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${W(0)}, ${t("todoHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("todoHeights",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${W(1)}${e(")",2)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${d("const")} ${t("before",!0)} = ${t("$done$")}.${T("slice")}${e("()",2)}
		${d("const")} ${t("after",!0)} = ${t("$todo$")}.${T("slice")}${e("()",2)}
		${t("after",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${W(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${W(1)}${e(")",2)}
		${t("$done$")} = ${t("before",!0)}
		${t("$todo$")} = ${t("after",!0)}
		${t("$doneTf$")} = ${d("new")} ${C("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${W(0)}${e(")",2)}
		${t("$todoTf$")} = ${d("new")} ${C("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${W(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${w("todo")}, ${t("index: index")} ${e("}",2)}
		${t("todoHeights",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${W(0)}, ${t("doneHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("doneHeights",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${W(1)}${e(")",2)}
	${e("}",1)}
${e("}")}
${d("const")} ${T("re_ordering")} = ${e("(")}${t("from")}: ${C("number")}, ${t("type")}: ${C("string")}${e(")")} ${d("=>")} ${e("{")}
	${d("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${w("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${c("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} === ${W(0)}${e(") {",1)}
		${c("return")}
	${e("}",1)}
	${d("const")} ${t("list",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${w("todo")} ? ${t("$todo$")} : ${t("$done$")} ${e(")",2)}${e("]",1)}
	${d("const")} ${t("temp",!0)} = ${t("list",!0)}${e("[",1)}${t("from")}${e("]",1)}
	${d("let")} ${t("i")}
	${c("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} < ${W(0)}${e(") {",1)}
		${c("for")} ${e("(",2)}${t("i")} = ${t("from")} - ${W(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}--${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} + ${W(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${W(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} + ${W(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${c("for")} ${e("(",2)}${t("i")} = ${t("from")} + ${W(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}++${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} - ${W(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${W(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} - ${W(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)}
	${t("transforms",!0)}${e("[",1)}${t("from")}${e("]",1)} = ${W(0)}
	${t("$transition$")} = ${d("false")}
	,${e("(",1)}${t("type")} === ${w("todo")} ? ${t("todo$",!0)} : ${t("done$",!0)} ${e(")",1)}.${T("set")}${e("(",1)}${t("list",!0)}${e(")",1)}
	,${e("(",1)}${t("type")} === ${w("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${T("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${T("onMount")}${e("(")}${e("()",1)} ${d("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[",2)}
		${w("Task A")},
		${w("Task B")},
		${w("Task C")},
		${w("Task D")},
		${w("Task E")},
		${w("Task F")},
		${w("Task G")},
		${w("Task H")},
		${w("Task I")},
		${w("Task J")},
		${w("Task K")},
		${w("Task L")},
		${w("")}
	${e("]",2)}
	${t("$todoTf$")} = ${d("new")} ${C("Array")}${e("(",2)}${t("$todo$")}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${W(0)}${e(")",2)}
	${t("$todo$")} = ${e("[",2)} ${w("Task Z")}, ${w("")} ${e("]",2)}
	${t("$doneTf$")} = ${d("new")} ${C("Array")}${e("(",2)}${t("$done$")}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${W(0)}${e(")",2)}
${e("}",1)}${e(")")}
${T("onDestroy")}${e("(")}${e("()",1)} ${d("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[]",2)}
	${t("$todoTf$")} = ${e("[]",2)}
	${t("$done$")} = ${e("[]",2)}
	${t("$doneTf$")} = ${e("[]",2)}
	${t("$transition$")} = ${d("false")}
	${t("$drag$")} = ${d("null")}
${e("}",1)}${e(")")}

`)}

${Q("DragContainer",` ${c("bind")}:${t("isDragging")}
		${c("bind")}:${T("setDragElement")}
		${c("on")}:${C("dragend")}=${e("{")}${T("handle_dragend")}${e("}")}`,`
	${Q("div",` ${t("class")}=${w("flex flex-wrap=wrap")}`,`
		${Q("div",` ${t("class")}=${w("flex column")}`,`
			${Q("span",` ${t("class")}=${w("fs=2 bold")}`,"To do")}
			${Q("div",` ${t("class")}=${w("h=.5")}`,"")}
			${e("{")}#${c("each")} ${t("$todo$")} ${c("as")} ${t("v")}, ${t("i")}${e("}")}
			${Q("DragItem",` ${c("bind")}:${t("clientHeight")}=${e("{")}${t("todoHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${T("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$todo$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$todoTf$")}${e("}")}
					${t("list")}=${w("todo")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${T("transfer_list")}${e("}")}
					${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("each")}${e("}")}
			${e("{")}#${c("if")} ${t("$todo$")}.${t("length")} === ${W(1)}${e("}")}
			${Q("DragItemPlaceHolder",` ${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("if")}${e("}")}
		`)}
		${Q("div",` ${t("class")}=${w("w=5 h=5")}`,"")}
		${Q("div",` ${t("class")}=${w("flex column")}`,`
			${Q("span",` ${t("class")}=${w("fs=2 bold")}`,"Done")}
			${Q("div",` ${t("class")}=${w("h=.5")}`,"")}
			${e("{")}#${c("each")} ${t("$done$")} ${c("as")} ${t("v")}, ${t("i")}${e("}")}
			${Q("DragItem",` ${c("bind")}:${t("clientHeight")}=${e("{")}${t("doneHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${T("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$done$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$doneTf$")}${e("}")}
					${t("list")}=${w("done")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${T("transfer_list")}${e("}")}
					${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("each")}${e("}")}
			${e("{")}#${c("if")} ${t("$done$")}.${t("length")} === ${W(1)}${e("}")}
			${Q("DragItemPlaceHolder",` ${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("if")}${e("}")}
		`)}
	`)}
`)}`,n=`

${Q("script",` ${t("lang")}=${w("ts")}`,`
${c("import")} ${e("{")} ${t("Dragable")} ${e("}")} ${c("from")} ${w("lube-ui")}
${c("import")} ${e("{")} ${t("drag$")}, ${t("transition$")} ${e("}")} ${c("from")} ${w("parts/ref/store")}

${c("export")} ${d("let")} ${t("list")}: ${C("string")}${e("[]")}
${c("export")} ${d("let")} ${t("transforms")}: ${C("number")}${e("[]")}
${c("export")} ${d("let")} ${t("type")}: ${w("todo")} | ${w("done")}
${c("export")} ${d("let")} ${t("index")}: ${C("number")}
${c("export")} ${d("let")} ${t("clientHeight")}: ${C("number")}
${c("export")} ${d("let")} ${t("duration")} = ${W(400)}
${c("export")} ${d("let")} ${T("setDragElement")}: ${e("(")}${t("clientX")}: ${C("number")}, ${t("clientY")}: ${C("number")}, ${t("drag")}: ${C("HTMLElement")}${e(")")} ${d("=>")} ${C("any")}
${c("export")} ${d("let")} ${T("transfer_list")}: ${e("(")}${t("index")}: ${C("number")}${e(")")} ${d("=>")} ${C("any")}
${c("export")} ${d("let")} ${T("move_item")}: ${e("(")}${t("index")}: ${C("number")}${e(")")} ${d("=>")} ${C("any")}

${d("const")} ${T("handleClick")} = ${e("()")} ${d("=>")} ${e("{")}
	${T("alert")}${e("(",1)}${e("(",2)}${t("event")}.${t("target")} ${c("as")} ${C("HTMLElement")}${e(")",2)}.${t("textContent")}${e(")",1)}
${e("}")}
${d("const")} ${T("handle_dragenter")} = ${e("()")} ${d("=>")} ${e("{")}
	${d("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${d("const")} ${t("t",!0)} = ${t("$drag$")}?.${t("type")}
	${c("if")} ${e("(",1)}${t("i",!0)} === ${d("undefined")} || ${t("i",!0)} === ${t("index")} && ${t("t",!0)} === ${t("type")}${e(") {",1)}
		${c("return")}
	${e("}",1)}
	${c("if")} ${e("(",1)}${t("t",!0)} === ${t("type")}${e(") {",1)}
		${T("transfer_list")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${T("move_item")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)}
${e("}")}
${d("const")} ${T("handle_dragstart")} = ${e("()")} ${d("=>")} ${e("{")}
	${t("$drag$")} = ${e("{",1)} ${t("type: type")}, ${t("index: index")} ${e("}",1)}
	${t("$transition$")} = ${d("true")}
${e("}")}
`)}

${Q("Dragable",` ${c("on")}:${C("dragstart")}=${e("{")}${T("handle_dragstart")}${e("}")}
		${t("delay")}=${e("{")}${W(300)}${e("}")}
		${e("{")}${T("setDragElement")}${e("}")}`,`
	${Q("div",` ${c("bind")}:${t("clientHeight")}
			${t("class")}=${w('"w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY(',!1)}${e("{",2)}${t("transforms")}${e("[")}${t("index")}${e("]")}${e("}",2)}${w("px)",!1)}
			${e("{",2)}${t("$transition$")} ? ${w("tt=")} + ${t("duration")} + ${w("ms")} : ${w("")}${e("}",2)}
			${e("{",2)}${t("$drag$")}?.${t("index")} === ${t("index")} && ${t("$drag$")}?.${t("type")} === ${t("type")} ? ${w(" opacity=.2 ol=.2_solid_#aaa")} : ${w("")}${e("}",2)}
			${e("{",2)}!${t("list")}${e("[")}${t("index")}${e("]")} ? ${w("none")} : ${w("")}${e("}",2)}
			${c("on")}:${C("dragenter")}=${e("{")}${T("handle_dragenter")}${e("}")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)}${e("}")}
	`)}
	${Q("div",` ${t("slot")}=${w("drag")}
			${c("bind")}:${t("clientHeight")}
			${t("class")}=${w("ta=center fs=2.5 cs=move c=#000 @dark@c=#fff")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)} + ${w("!!")}${e("}")}
	`)}
`)}`,r=`

${Q("script",` ${t("lang")}=${w("ts")}`,`
${c("import")} ${e("{")} ${t("drag$")} ${e("}")} ${c("from")} ${w("parts/ref/store")}

${c("export")} ${d("let")} ${T("move_item")}: ${e("(")}${t("index")}: ${C("number")}${e(")")} ${d("=>")} ${C("any")}

${d("const")} ${T("handle_dragenter")} = ${e("()")} ${d("=>")} ${e("{")}
	${d("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${c("if")} ${e("(",1)}${t("i",!0)} === ${d("undefined")}${e(") {",1)}
		${c("return")}
	${e("}",1)}
	${T("move_item")}${e("(",2)}${W(0)}${e(")",2)}
${e("}")}
`)}

${Q("div",` ${t("style")}=${w("user-select:none")}
		${t("class")}=${w("w=6 ol=.1_dashed ta=center fs=2 cs=pointer")}
		${c("on")}:${C("dragenter")}=${e("{")}${T("handle_dragenter")}${e("}")}`,`
	Empty
`)}`;return[$,n,r]}class Lt extends oe{constructor($){super(),ie(this,$,At,Ct,le,{})}}function Ze(s,$,n){const r=s.slice();return r[18]=$[n],r[19]=$,r[20]=n,r}function Fe(s,$,n){const r=s.slice();return r[18]=$[n],r[21]=$,r[20]=n,r}function Ne(s){let $,n,r;function i(l){s[11](l,s[20])}let a={setDragElement:s[3],list:s[7],transforms:s[6],type:"todo",index:s[20],transfer_list:s[9],move_item:s[10]};return s[0][s[20]]!==void 0&&(a.clientHeight=s[0][s[20]]),$=new xe({props:a}),fe.push(()=>Ae($,"clientHeight",i)),{c(){U($.$$.fragment)},l(l){x($.$$.fragment,l)},m(l,o){ee($,l,o),r=!0},p(l,o){s=l;const f={};o&8&&(f.setDragElement=s[3]),o&128&&(f.list=s[7]),o&64&&(f.transforms=s[6]),!n&&o&1&&(n=!0,f.clientHeight=s[0][s[20]],Ce(()=>n=!1)),$.$set(f)},i(l){r||(S($.$$.fragment,l),r=!0)},o(l){F($.$$.fragment,l),r=!1},d(l){te($,l)}}}function Xe(s){let $,n;return $=new et({props:{move_item:s[10]}}),{c(){U($.$$.fragment)},l(r){x($.$$.fragment,r)},m(r,i){ee($,r,i),n=!0},p:re,i(r){n||(S($.$$.fragment,r),n=!0)},o(r){F($.$$.fragment,r),n=!1},d(r){te($,r)}}}function je(s){let $,n,r;function i(l){s[12](l,s[20])}let a={setDragElement:s[3],list:s[5],transforms:s[4],type:"done",index:s[20],transfer_list:s[9],move_item:s[10]};return s[1][s[20]]!==void 0&&(a.clientHeight=s[1][s[20]]),$=new xe({props:a}),fe.push(()=>Ae($,"clientHeight",i)),{c(){U($.$$.fragment)},l(l){x($.$$.fragment,l)},m(l,o){ee($,l,o),r=!0},p(l,o){s=l;const f={};o&8&&(f.setDragElement=s[3]),o&32&&(f.list=s[5]),o&16&&(f.transforms=s[4]),!n&&o&2&&(n=!0,f.clientHeight=s[1][s[20]],Ce(()=>n=!1)),$.$set(f)},i(l){r||(S($.$$.fragment,l),r=!0)},o(l){F($.$$.fragment,l),r=!1},d(l){te($,l)}}}function Je(s){let $,n;return $=new et({props:{move_item:s[10]}}),{c(){U($.$$.fragment)},l(r){x($.$$.fragment,r)},m(r,i){ee($,r,i),n=!0},p:re,i(r){n||(S($.$$.fragment,r),n=!0)},o(r){F($.$$.fragment,r),n=!1},d(r){te($,r)}}}function Vt(s){let $,n,r,i="To do",a,l,o,f,p,D,v,g,A,X="Done",h,V,G,P,I,O=Te(s[7]),m=[];for(let _=0;_<O.length;_+=1)m[_]=Ne(Fe(s,O,_));const R=_=>F(m[_],1,1,()=>{m[_]=null});let E=s[7].length===1&&Xe(s),H=Te(s[5]),u=[];for(let _=0;_<H.length;_+=1)u[_]=je(Ze(s,H,_));const y=_=>F(u[_],1,1,()=>{u[_]=null});let L=s[5].length===1&&Je(s);return{c(){$=z("div"),n=z("div"),r=z("span"),r.textContent=i,a=j(),l=z("div"),o=j();for(let _=0;_<m.length;_+=1)m[_].c();f=j(),E&&E.c(),p=j(),D=z("div"),v=j(),g=z("div"),A=z("span"),A.textContent=X,h=j(),V=z("div"),G=j();for(let _=0;_<u.length;_+=1)u[_].c();P=j(),L&&L.c(),this.h()},l(_){$=Z(_,"DIV",{class:!0});var B=N($);n=Z(B,"DIV",{class:!0});var k=N(n);r=Z(k,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(r)!=="svelte-2gma2k"&&(r.textContent=i),a=J(k),l=Z(k,"DIV",{class:!0}),N(l).forEach(b),o=J(k);for(let de=0;de<m.length;de+=1)m[de].l(k);f=J(k),E&&E.l(k),k.forEach(b),p=J(B),D=Z(B,"DIV",{class:!0}),N(D).forEach(b),v=J(B),g=Z(B,"DIV",{class:!0});var $e=N(g);A=Z($e,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(A)!=="svelte-ovcjna"&&(A.textContent=X),h=J($e),V=Z($e,"DIV",{class:!0}),N(V).forEach(b),G=J($e);for(let de=0;de<u.length;de+=1)u[de].l($e);P=J($e),L&&L.l($e),$e.forEach(b),B.forEach(b),this.h()},h(){M(r,"class","fs=2 bold"),M(l,"class","h=.5"),M(n,"class","flex column"),M(D,"class","w=5 h=5"),M(A,"class","fs=2 bold"),M(V,"class","h=.5"),M(g,"class","flex column"),M($,"class","flex flex-wrap=wrap")},m(_,B){q(_,$,B),Y($,n),Y(n,r),Y(n,a),Y(n,l),Y(n,o);for(let k=0;k<m.length;k+=1)m[k]&&m[k].m(n,null);Y(n,f),E&&E.m(n,null),Y($,p),Y($,D),Y($,v),Y($,g),Y(g,A),Y(g,h),Y(g,V),Y(g,G);for(let k=0;k<u.length;k+=1)u[k]&&u[k].m(g,null);Y(g,P),L&&L.m(g,null),I=!0},p(_,B){if(B&1737){O=Te(_[7]);let k;for(k=0;k<O.length;k+=1){const $e=Fe(_,O,k);m[k]?(m[k].p($e,B),S(m[k],1)):(m[k]=Ne($e),m[k].c(),S(m[k],1),m[k].m(n,f))}for(we(),k=O.length;k<m.length;k+=1)R(k);ye()}if(_[7].length===1?E?(E.p(_,B),B&128&&S(E,1)):(E=Xe(_),E.c(),S(E,1),E.m(n,null)):E&&(we(),F(E,1,1,()=>{E=null}),ye()),B&1594){H=Te(_[5]);let k;for(k=0;k<H.length;k+=1){const $e=Ze(_,H,k);u[k]?(u[k].p($e,B),S(u[k],1)):(u[k]=je($e),u[k].c(),S(u[k],1),u[k].m(g,P))}for(we(),k=H.length;k<u.length;k+=1)y(k);ye()}_[5].length===1?L?(L.p(_,B),B&32&&S(L,1)):(L=Je(_),L.c(),S(L,1),L.m(g,null)):L&&(we(),F(L,1,1,()=>{L=null}),ye())},i(_){if(!I){for(let B=0;B<O.length;B+=1)S(m[B]);S(E);for(let B=0;B<H.length;B+=1)S(u[B]);S(L),I=!0}},o(_){m=m.filter(Boolean);for(let B=0;B<m.length;B+=1)F(m[B]);F(E),u=u.filter(Boolean);for(let B=0;B<u.length;B+=1)F(u[B]);F(L),I=!1},d(_){_&&b($),Se(m,_),E&&E.d(),Se(u,_),L&&L.d()}}}function Bt(s){let $,n,r,i,a,l,o,f;function p(g){s[13](g)}function D(g){s[14](g)}let v={$$slots:{default:[Vt]},$$scope:{ctx:s}};return s[2]!==void 0&&(v.isDragging=s[2]),s[3]!==void 0&&(v.setDragElement=s[3]),n=new at({props:v}),fe.push(()=>Ae(n,"isDragging",p)),fe.push(()=>Ae(n,"setDragElement",D)),n.$on("dragend",s[8]),o=new Lt({}),{c(){$=z("div"),U(n.$$.fragment),a=j(),l=z("div"),U(o.$$.fragment),this.h()},l(g){$=Z(g,"DIV",{class:!0});var A=N($);x(n.$$.fragment,A),A.forEach(b),a=J(g),l=Z(g,"DIV",{});var X=N(l);x(o.$$.fragment,X),X.forEach(b),this.h()},h(){M($,"class","flex jc=center")},m(g,A){q(g,$,A),ee(n,$,null),q(g,a,A),q(g,l,A),ee(o,l,null),f=!0},p(g,A){const X={};A&4194555&&(X.$$scope={dirty:A,ctx:g}),!r&&A&4&&(r=!0,X.isDragging=g[2],Ce(()=>r=!1)),!i&&A&8&&(i=!0,X.setDragElement=g[3],Ce(()=>i=!1)),n.$set(X)},i(g){f||(S(n.$$.fragment,g),S(o.$$.fragment,g),f=!0)},o(g){F(n.$$.fragment,g),F(o.$$.fragment,g),f=!1},d(g){g&&(b($),b(a),b(l)),te(n),te(o)}}}function Pt(s){let $,n;return $=new st({props:{$$slots:{default:[Bt]},$$scope:{ctx:s}}}),{c(){U($.$$.fragment)},l(r){x($.$$.fragment,r)},m(r,i){ee($,r,i),n=!0},p(r,[i]){const a={};i&4194559&&(a.$$scope={dirty:i,ctx:r}),$.$set(a)},i(r){n||(S($.$$.fragment,r),n=!0)},o(r){F($.$$.fragment,r),n=!1},d(r){te($,r)}}}function Rt(s,$,n){let r,i,a,l,o,f;se(s,ae,m=>n(15,r=m)),se(s,pe,m=>n(16,i=m)),se(s,ce,m=>n(4,a=m)),se(s,ge,m=>n(5,l=m)),se(s,me,m=>n(6,o=m)),se(s,he,m=>n(7,f=m));const p=[],D=[];let v,g;const A=()=>{const m=r.index,R=r.type;K(ae,r=null,r),V(m,R)},X=m=>{const R=r.index,E=r.type,H=[...E==="todo"?o:a],u=E==="todo"?p:D;if(R<m)if(H[m])for(let y=m;H[y];y++)H[R]-=u[y],H[y]=0;else for(let y=m;!H[y];y--)H[R]+=u[y],H[y]=-u[R];else if(H[m])for(let y=m;H[y];y--)H[R]+=u[y],H[y]=0;else for(let y=m;!H[y];y++)H[R]-=u[y],H[y]=u[R];(E==="todo"?me:ce).set(H)},h=m=>{const R=r.index;if(r.type==="todo"){const H=[...f],u=[...l];u.splice(m,0,H[R]),H.splice(R,1),K(he,f=H,f),K(ge,l=u,l),K(me,o=new Array(H.length).fill(0),o),K(ce,a=new Array(u.length).fill(0),a),K(ae,r={type:"done",index:m},r),D.splice(m,0,p[R]),p.splice(R,1)}else{const H=[...l],u=[...f];u.splice(m,0,H[R]),H.splice(R,1),K(ge,l=H,l),K(he,f=u,f),K(ce,a=new Array(H.length).fill(0),a),K(me,o=new Array(u.length).fill(0),o),K(ae,r={type:"todo",index:m},r),p.splice(m,0,D[R]),D.splice(R,1)}},V=(m,R)=>{const E=[...R==="todo"?o:a];if(E[m]===0)return;const H=[...R==="todo"?f:l],u=H[m];let y;if(E[m]<0){for(y=m-1;E[y];y--)H[y+1]=H[y],E[y]=0;H[y+1]=u}else{for(y=m+1;E[y];y++)H[y-1]=H[y],E[y]=0;H[y-1]=u}E[m]=0,K(pe,i=!1,i),(R==="todo"?he:ge).set(H),(R==="todo"?me:ce).set(E)};Ue(()=>{K(he,f=["Task A","Task B","Task C","Task D","Task E","Task F","Task G","Task H","Task I","Task J","Task K","Task L",""],f),K(me,o=new Array(f.length).fill(0),o),K(ge,l=["Task Z",""],l),K(ce,a=new Array(l.length).fill(0),a)}),$t(()=>{K(he,f=[],f),K(me,o=[],o),K(ge,l=[],l),K(ce,a=[],a),K(pe,i=!1,i),K(ae,r=null,r)});function G(m,R){s.$$.not_equal(p[R],m)&&(p[R]=m,n(0,p))}function P(m,R){s.$$.not_equal(D[R],m)&&(D[R]=m,n(1,D))}function I(m){v=m,n(2,v)}function O(m){g=m,n(3,g)}return[p,D,v,g,a,l,o,f,A,X,h,G,P,I,O]}class qt extends oe{constructor($){super(),ie(this,$,Rt,Pt,le,{})}}function Mt(s){let $;return{c(){$=ve("Drag and Drop")},l(n){$=be(n,"Drag and Drop")},m(n,r){q(n,$,r)},d(n){n&&b($)}}}function St(s){let $;return{c(){$=ve(".")},l(n){$=be(n,".")},m(n,r){q(n,$,r)},d(n){n&&b($)}}}function Wt(s){let $,n,r,i,a,l,o,f,p,D,v,g,A="Lube UI may be released someday",X,h,V,G,P,I,O,m,R;return D=new We({props:{$$slots:{default:[Mt]},$$scope:{ctx:s}}}),h=new We({props:{classs:"v=hidden",$$slots:{default:[St]},$$scope:{ctx:s}}}),I=new qt({}),{c(){$=j(),n=z("header"),r=z("div"),i=z("div"),a=z("div"),l=j(),o=z("div"),f=z("div"),p=j(),U(D.$$.fragment),v=j(),g=z("span"),g.textContent=A,X=j(),U(h.$$.fragment),V=j(),G=z("div"),P=z("article"),U(I.$$.fragment),O=j(),m=z("div"),this.h()},l(E){nt("svelte-qqqqz6",document.head).forEach(b),$=J(E),n=Z(E,"HEADER",{class:!0});var u=N(n);r=Z(u,"DIV",{class:!0});var y=N(r);i=Z(y,"DIV",{class:!0});var L=N(i);a=Z(L,"DIV",{class:!0}),N(a).forEach(b),l=J(L),o=Z(L,"DIV",{class:!0});var _=N(o);f=Z(_,"DIV",{class:!0}),N(f).forEach(b),p=J(_),x(D.$$.fragment,_),v=J(_),g=Z(_,"SPAN",{"data-svelte-h":!0}),Ie(g)!=="svelte-cpphmj"&&(g.textContent=A),X=J(_),x(h.$$.fragment,_),_.forEach(b),L.forEach(b),y.forEach(b),u.forEach(b),V=J(E),G=Z(E,"DIV",{class:!0});var B=N(G);P=Z(B,"ARTICLE",{class:!0});var k=N(P);x(I.$$.fragment,k),k.forEach(b),B.forEach(b),O=J(E),m=Z(E,"DIV",{class:!0}),N(m).forEach(b),this.h()},h(){document.title="Drag and Drop - CSS Lube",M(a,"class","w=3"),M(f,"class","h=2"),M(o,"class","fg=1 fsk=1"),M(i,"class","flex w=100% "+Ye.$common.background_conic),M(r,"class","flex br=1.5 o=hidden "+Ye.$common.background_grid),M(n,"class","m=.5"),M(P,"class","m=2_1 @md@m=2"),M(G,"class","m=.5"),M(m,"class","h=2")},m(E,H){q(E,$,H),q(E,n,H),Y(n,r),Y(r,i),Y(i,a),Y(i,l),Y(i,o),Y(o,f),Y(o,p),ee(D,o,null),Y(o,v),Y(o,g),Y(o,X),ee(h,o,null),s[1](n),q(E,V,H),q(E,G,H),Y(G,P),ee(I,P,null),q(E,O,H),q(E,m,H),R=!0},p(E,[H]){const u={};H&4&&(u.$$scope={dirty:H,ctx:E}),D.$set(u);const y={};H&4&&(y.$$scope={dirty:H,ctx:E}),h.$set(y)},i(E){R||(S(D.$$.fragment,E),S(h.$$.fragment,E),S(I.$$.fragment,E),R=!0)},o(E){F(D.$$.fragment,E),F(h.$$.fragment,E),F(I.$$.fragment,E),R=!1},d(E){E&&(b($),b(n),b(V),b(G),b(O),b(m)),te(D),te(h),s[1](null),te(I)}}}function Yt(s,$,n){let r;Ue(()=>{var a;return(a=r.parentElement)==null?void 0:a.scroll(0,0)});function i(a){fe[a?"unshift":"push"](()=>{r=a,n(0,r)})}return[r,i]}class Gt extends oe{constructor($){super(),ie(this,$,Yt,Wt,le,{})}}export{Gt as component};
