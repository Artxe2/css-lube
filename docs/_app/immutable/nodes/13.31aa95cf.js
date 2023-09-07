import{s as fe,z as Ae,a as K,f as N,c as J,g as j,h as Z,d as b,j as z,k as _e,i as R,r as ne,A as Le,B as Be,C as Pe,K as qe,Q as Ze,p as ie,x as le,l as ve,m as be,L as Oe,w as F,R as Qe,n as Ue,y as O,v as Ie,u as se,F as Re,M as De,G as Se,N as Ee,H as $t,e as ae,o as Xe,P as nt,I as Ce,D as We,O as st}from"../chunks/scheduler.751e6dae.js";import{S as ue,i as de,a as W,t as Y,b as x,d as ee,m as te,e as $e,f as Ve,g as ye,c as we}from"../chunks/index.91d8d602.js";import{H as ze}from"../chunks/H2.cb186f28.js";import{e as Te}from"../chunks/each.e59479a4.js";import{t as pe,d as oe,I as rt,a as ce,b as ge,c as me,e as he}from"../chunks/IdeTypescript.36cff289.js";import{C as lt}from"../chunks/ComponentTabView.6d0a05fc.js";import{C as ke,h as X,k as c,n as t,s as y,b as e,g as u,t as A,f as w,d as S}from"../chunks/highlighter.78a8277e.js";import{b as ot}from"../chunks/paths.a949b058.js";import{s as Me}from"../chunks/styles.b585f6af.js";const it=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:He}=it;function at(r){let $,s,n,i,f;const l=r[10].default,o=Ae(l,r,r[9],null);return{c(){$=K(),s=N("div"),o&&o.c(),this.h()},l(a){$=J(a),s=j(a,"DIV",{class:!0,style:!0});var p=Z(s);o&&o.l(p),p.forEach(b),this.h()},h(){z(s,"class",r[0]),_e(s,"position","relative")},m(a,p){R(a,$,p),R(a,s,p),o&&o.m(s,null),r[11](s),n=!0,i||(f=[ne(He.body,"mousemove",r[2]),ne(He.body,"mouseup",r[4]),ne(He.body,"touchmove",r[3]),ne(He.body,"touchend",r[5])],i=!0)},p(a,[p]){o&&o.p&&(!n||p&512)&&Le(o,l,a,a[9],n?Pe(l,a[9],p,null):Be(a[9]),null),(!n||p&1)&&z(s,"class",a[0])},i(a){n||(W(o,a),n=!0)},o(a){Y(o,a),n=!1},d(a){a&&(b($),b(s)),o&&o.d(a),r[11](null),i=!1,qe(f)}}}function ft(r,$,s){let{$$slots:n={},$$scope:i}=$,{classs:f=""}=$,{isDragging:l=!1}=$,{dragElement:o=null}=$;const a=(h,V,m)=>{const H=D.getBoundingClientRect();s(7,o=m),g=h-H.left,L=V-H.top,D.append(o),s(6,l=!0)},p=Ze();let D,v,g=0,L=0,G=0,_=0,B;const Q=({clientX:h,clientY:V})=>{if(l){const m=d(document.elementsFromPoint(h,V));m&&v!=m&&(v&&v.dispatchEvent(new DragEvent("dragleave")),v=m,v.dispatchEvent(new DragEvent("dragenter"))),G=h,_=V,P(),p("dragmove"),E(Date.now())}},q=h=>{Q(h.touches[0])},I=()=>{l&&(o&&D.removeChild(o),v&&(v.dispatchEvent(new DragEvent("drop")),v=null),s(7,o=null),s(6,l=!1),p("dragend"))},M=()=>{I()},d=h=>{const V=h.length;for(let m=0;m<V;m++)if(!(o!=null&&o.compareDocumentPosition(h[m])))return h[m+1]},P=()=>{const h=D.getBoundingClientRect();o&&s(7,o.style.transform=`translate(${G-g-h.left}px, ${_-L-h.top}px)`,o)},E=h=>{B||(B=requestAnimationFrame(()=>k(h)))},k=h=>{B=0;let V=D;for(;V!==document.body;){if(V.scrollWidth>V.clientWidth){if(V.scrollLeft)break;if(V.scrollLeft=1,V.scrollLeft){V.scrollLeft=0;break}}V.parentElement&&(V=V.parentElement)}let m=D;for(;m!==document.body;){if(m.scrollHeight>m.clientHeight){if(m.scrollTop)break;if(m.scrollTop=1,m.scrollTop){m.scrollTop=0;break}}m.parentElement&&(m=m.parentElement)}const H=o==null?void 0:o.getBoundingClientRect();if(!H)return;const T=V.getBoundingClientRect(),U=m.getBoundingClientRect();if(H.left>=T.left&&H.right<=T.right&&H.top>=U.top&&H.bottom<=U.bottom)return;const re=Date.now();h=re-h,H.left<T.left?V.scrollBy((H.left-T.left)*h/30,0):H.right>T.right&&V.scrollBy((H.right-T.right)*h/30,0),H.top<U.top?m.scrollBy(0,(H.top-U.top)*h/30):H.bottom>U.bottom&&m.scrollBy(0,(H.bottom-U.bottom)*h/30),P(),E(re)};function C(h){ie[h?"unshift":"push"](()=>{D=h,s(1,D)})}return r.$$set=h=>{"classs"in h&&s(0,f=h.classs),"isDragging"in h&&s(6,l=h.isDragging),"dragElement"in h&&s(7,o=h.dragElement),"$$scope"in h&&s(9,i=h.$$scope)},[f,D,Q,q,I,M,l,o,a,i,n,C]}class ut extends ue{constructor($){super(),de(this,$,ft,at,fe,{classs:0,isDragging:6,dragElement:7,setDragElement:8})}get setDragElement(){return this.$$.ctx[8]}}const dt=r=>({}),Fe=r=>({});function ct(r){let $,s,n,i,f,l;const o=r[10].default,a=Ae(o,r,r[9],null),p=r[10].drag,D=Ae(p,r,r[9],Fe);return{c(){$=N("div"),a&&a.c(),s=K(),n=N("div"),D&&D.c(),this.h()},l(v){$=j(v,"DIV",{class:!0,style:!0});var g=Z($);a&&a.l(g),g.forEach(b),s=J(v),n=j(v,"DIV",{style:!0});var L=Z(n);D&&D.l(L),L.forEach(b),this.h()},h(){z($,"class",r[0]),_e($,"touch-action","none"),_e($,"user-select","none"),_e($,"width","fit-content"),_e(n,"display","none")},m(v,g){R(v,$,g),a&&a.m($,null),r[11]($),R(v,s,g),R(v,n,g),D&&D.m(n,null),r[12](n),i=!0,f||(l=[ne($,"mousedown",r[3]),ne($,"mouseup",r[5]),ne($,"touchstart",r[4]),ne($,"touchend",r[6],{passive:!0})],f=!0)},p(v,[g]){a&&a.p&&(!i||g&512)&&Le(a,o,v,v[9],i?Pe(o,v[9],g,null):Be(v[9]),null),(!i||g&1)&&z($,"class",v[0]),D&&D.p&&(!i||g&512)&&Le(D,p,v,v[9],i?Pe(p,v[9],g,dt):Be(v[9]),Fe)},i(v){i||(W(a,v),W(D,v),i=!0)},o(v){Y(a,v),Y(D,v),i=!1},d(v){v&&(b($),b(s),b(n)),a&&a.d(v),r[11](null),D&&D.d(v),r[12](null),f=!1,qe(l)}}}function mt(r,$,s){let{$$slots:n={},$$scope:i}=$,{classs:f=""}=$,{delay:l=0}=$,{setDragElement:o}=$;const a=Ze();let p,D,v;const g=({clientX:q,clientY:I})=>{v=setTimeout(()=>{const M=(D.firstChild||p).cloneNode(!0);M.style.position="absolute",M.style.top=p.offsetTop+"px",M.style.left=p.offsetLeft+"px",o(q,I,M),a("dragstart")},l)},L=q=>{g(q.touches[0])},G=()=>{clearTimeout(v)},_=()=>{clearTimeout(v)};function B(q){ie[q?"unshift":"push"](()=>{p=q,s(1,p)})}function Q(q){ie[q?"unshift":"push"](()=>{D=q,s(2,D)})}return r.$$set=q=>{"classs"in q&&s(0,f=q.classs),"delay"in q&&s(7,l=q.delay),"setDragElement"in q&&s(8,o=q.setDragElement),"$$scope"in q&&s(9,i=q.$$scope)},[f,p,D,g,L,G,_,l,o,i,n,B,Q]}class gt extends ue{constructor($){super(),de(this,$,mt,ct,fe,{classs:0,delay:7,setDragElement:8})}}function ht(r){let $,s=r[1][r[4]]+"",n,i,f,l,o;return{c(){$=N("div"),n=ve(s),this.h()},l(a){$=j(a,"DIV",{class:!0});var p=Z($);n=be(p,s),p.forEach(b),this.h()},h(){var a,p;z($,"class",i="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+r[2][r[4]]+"px) "+(r[7]&&`tt=${r[5]}ms`)+" "+(((a=r[8])==null?void 0:a.index)===r[4]&&((p=r[8])==null?void 0:p.type)===r[3]&&"opacity=.2 ol=.2_solid_#aaa")+" "+(!r[1][r[4]]&&"none")),Oe(()=>r[15].call($))},m(a,p){R(a,$,p),F($,n),f=Qe($,r[15].bind($)),l||(o=[ne($,"click",r[9]),ne($,"dragenter",r[10])],l=!0)},p(a,p){var D,v;p&18&&s!==(s=a[1][a[4]]+"")&&Ue(n,s),p&446&&i!==(i="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+a[2][a[4]]+"px) "+(a[7]&&`tt=${a[5]}ms`)+" "+(((D=a[8])==null?void 0:D.index)===a[4]&&((v=a[8])==null?void 0:v.type)===a[3]&&"opacity=.2 ol=.2_solid_#aaa")+" "+(!a[1][a[4]]&&"none"))&&z($,"class",i)},d(a){a&&b($),f(),l=!1,qe(o)}}}function _t(r){let $,s=r[1][r[4]]+"!!",n,i;return{c(){$=N("div"),n=ve(s),this.h()},l(f){$=j(f,"DIV",{slot:!0,class:!0});var l=Z($);n=be(l,s),l.forEach(b),this.h()},h(){z($,"slot","drag"),z($,"class","ta=center fs=2.5 cs=move c=#000 @dark@c=#fff"),Oe(()=>r[14].call($))},m(f,l){R(f,$,l),F($,n),i=Qe($,r[14].bind($))},p(f,l){l&18&&s!==(s=f[1][f[4]]+"!!")&&Ue(n,s)},d(f){f&&b($),i()}}}function pt(r){let $,s;return $=new gt({props:{delay:300,setDragElement:r[6],$$slots:{drag:[_t],default:[ht]},$$scope:{ctx:r}}}),$.$on("dragstart",r[11]),{c(){x($.$$.fragment)},l(n){ee($.$$.fragment,n)},m(n,i){te($,n,i),s=!0},p(n,[i]){const f={};i&64&&(f.setDragElement=n[6]),i&65983&&(f.$$scope={dirty:i,ctx:n}),$.$set(f)},i(n){s||(W($.$$.fragment,n),s=!0)},o(n){Y($.$$.fragment,n),s=!1},d(n){$e($,n)}}}function vt(r,$,s){let n,i;le(r,pe,I=>s(7,n=I)),le(r,oe,I=>s(8,i=I));let{list:f}=$,{transforms:l}=$,{type:o}=$,{index:a}=$,{clientHeight:p}=$,{duration:D=400}=$,{setDragElement:v}=$,{transfer_list:g}=$,{move_item:L}=$;const G=I=>{var M;alert((M=I.target)==null?void 0:M.textContent)},_=()=>{const I=i==null?void 0:i.index,M=i==null?void 0:i.type;I===void 0||I===a&&M===o||(M===o?g(a):L(a))},B=()=>{O(oe,i={type:o,index:a},i),O(pe,n=!0,n)};function Q(){p=this.clientHeight,s(0,p)}function q(){p=this.clientHeight,s(0,p)}return r.$$set=I=>{"list"in I&&s(1,f=I.list),"transforms"in I&&s(2,l=I.transforms),"type"in I&&s(3,o=I.type),"index"in I&&s(4,a=I.index),"clientHeight"in I&&s(0,p=I.clientHeight),"duration"in I&&s(5,D=I.duration),"setDragElement"in I&&s(6,v=I.setDragElement),"transfer_list"in I&&s(12,g=I.transfer_list),"move_item"in I&&s(13,L=I.move_item)},[p,f,l,o,a,D,v,n,i,G,_,B,g,L,Q,q]}class xe extends ue{constructor($){super(),de(this,$,vt,pt,fe,{list:1,transforms:2,type:3,index:4,clientHeight:0,duration:5,setDragElement:6,transfer_list:12,move_item:13})}}function bt(r){let $,s="Empty",n,i;return{c(){$=N("div"),$.textContent=s,this.h()},l(f){$=j(f,"DIV",{class:!0,"data-svelte-h":!0}),Ie($)!=="svelte-2ylml"&&($.textContent=s),this.h()},h(){z($,"class","us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer")},m(f,l){R(f,$,l),n||(i=ne($,"dragenter",r[0]),n=!0)},p:se,i:se,o:se,d(f){f&&b($),n=!1,i()}}}function Dt(r,$,s){let n;le(r,oe,l=>s(2,n=l));let{move_item:i}=$;const f=()=>{(n==null?void 0:n.index)!==void 0&&i(0)};return r.$$set=l=>{"move_item"in l&&s(1,i=l.move_item)},[f,i]}class et extends ue{constructor($){super(),de(this,$,Dt,bt,fe,{move_item:1})}}function Et(r){let $,s,n,i,f;return{c(){$=Re("svg"),s=Re("use"),n=K(),i=new De(!1),f=ve(".svelte"),this.h()},l(l){$=Se(l,"svg",{class:!0});var o=Z($);s=Se(o,"use",{"xlink:href":!0}),Z(s).forEach(b),o.forEach(b),n=J(l),i=Ee(l,!1),f=be(l,".svelte"),this.h()},h(){$t(s,"xlink:href",ot+"/icons.svg#svelte"),z($,"class","inline-block w=1 h=1.5 --fill-1=#ff3e00 --fill-2=#fff"),i.a=f},m(l,o){R(l,$,o),F($,s),R(l,n,o),i.m(r[0],l,o),R(l,f,o)},p(l,[o]){o&1&&i.p(l[0])},i:se,o:se,d(l){l&&(b($),b(n),i.d(),b(f))}}}function yt(r,$,s){let{name:n}=$;return r.$$set=i=>{"name"in i&&s(0,n=i.name)},[n]}class tt extends ue{constructor($){super(),de(this,$,yt,Et,fe,{name:0})}}function wt(r){let $,s;return{c(){$=new De(!1),s=ae(),this.h()},l(n){$=Ee(n,!1),s=ae(),this.h()},h(){$.a=s},m(n,i){$.m(r[0],n,i),R(n,s,i)},p:se,d(n){n&&(b(s),$.d())}}}function Tt(r){let $,s,n,i,f;return $=new tt({props:{name:"DragItem"}}),{c(){x($.$$.fragment),s=K(),n=new De(!1),i=ae(),this.h()},l(l){ee($.$$.fragment,l),s=J(l),n=Ee(l,!1),i=ae(),this.h()},h(){n.a=i},m(l,o){te($,l,o),R(l,s,o),n.m(r[1],l,o),R(l,i,o),f=!0},p:se,i(l){f||(W($.$$.fragment,l),f=!0)},o(l){Y($.$$.fragment,l),f=!1},d(l){l&&(b(s),b(i),n.d()),$e($,l)}}}function kt(r){let $,s,n,i,f;return $=new tt({props:{name:"DragItemPlaceHolder"}}),{c(){x($.$$.fragment),s=K(),n=new De(!1),i=ae(),this.h()},l(l){ee($.$$.fragment,l),s=J(l),n=Ee(l,!1),i=ae(),this.h()},h(){n.a=i},m(l,o){te($,l,o),R(l,s,o),n.m(r[2],l,o),R(l,i,o),f=!0},p:se,i(l){f||(W($.$$.fragment,l),f=!0)},o(l){Y($.$$.fragment,l),f=!1},d(l){l&&(b(s),b(i),n.d()),$e($,l)}}}function Ht(r){let $,s,n,i=`

${c("import")} ${e("{")} ${t("writable")}, ${c("type")} ${t("Writable")} ${e("}")} ${c("from")} ${y("svelte/store")}

${c("export")} ${u("const")} ${t("todo$",!0)}: ${A("Writable")}${e("<")}${A("string")}${e("[]",1)}${e(">")} = ${w("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${u("const")} ${t("todoTf$",!0)}: ${A("Writable")}${e("<")}${A("number")}${e("[]",1)}${e(">")} = ${w("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${u("const")} ${t("done$",!0)}: ${A("Writable")}${e("<")}${A("string")}${e("[]",1)}${e(">")} = ${w("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${u("const")} ${t("doneTf$",!0)}: ${A("Writable")}${e("<")}${A("number")}${e("[]",1)}${e(">")} = ${w("writable")}${e("(")}${e("[]",1)}${e(")")}
${c("export")} ${u("const")} ${t("transition$",!0)} = ${w("writable")}${e("(")}${u("false")}${e(")")}
${c("export")} ${u("const")} ${t("drag$",!0)}: ${A("Writable")}${e("<")}${e("{",1)} ${t("type")}: ${y("todo")} | ${y("done")}, ${t("index")}: ${A("number")} ${e("}",1)} | ${u("null")}${e(">")} = ${w("writable")}${e("(")}${u("null")}${e(")")}`,f,l;return $=new rt({props:{name:"store"}}),{c(){x($.$$.fragment),s=K(),n=new De(!1),f=ae(),this.h()},l(o){ee($.$$.fragment,o),s=J(o),n=Ee(o,!1),f=ae(),this.h()},h(){n.a=f},m(o,a){te($,o,a),R(o,s,a),n.m(i,o,a),R(o,f,a),l=!0},p:se,i(o){l||(W($.$$.fragment,o),l=!0)},o(o){Y($.$$.fragment,o),l=!1},d(o){o&&(b(s),b(f),n.d()),$e($,o)}}}function It(r){let $,s,n,i,f,l,o,a,p,D,v,g,L,G;return $=new ke({props:{is_code:!0,$$slots:{default:[wt]},$$scope:{ctx:r}}}),f=new ke({props:{is_code:!0,$$slots:{default:[Tt]},$$scope:{ctx:r}}}),p=new ke({props:{is_code:!0,$$slots:{default:[kt]},$$scope:{ctx:r}}}),L=new ke({props:{is_code:!0,$$slots:{default:[Ht]},$$scope:{ctx:r}}}),{c(){x($.$$.fragment),s=K(),n=N("div"),i=K(),x(f.$$.fragment),l=K(),o=N("div"),a=K(),x(p.$$.fragment),D=K(),v=N("div"),g=K(),x(L.$$.fragment),this.h()},l(_){ee($.$$.fragment,_),s=J(_),n=j(_,"DIV",{class:!0}),Z(n).forEach(b),i=J(_),ee(f.$$.fragment,_),l=J(_),o=j(_,"DIV",{class:!0}),Z(o).forEach(b),a=J(_),ee(p.$$.fragment,_),D=J(_),v=j(_,"DIV",{class:!0}),Z(v).forEach(b),g=J(_),ee(L.$$.fragment,_),this.h()},h(){z(n,"class","h=1"),z(o,"class","h=1"),z(v,"class","h=1")},m(_,B){te($,_,B),R(_,s,B),R(_,n,B),R(_,i,B),te(f,_,B),R(_,l,B),R(_,o,B),R(_,a,B),te(p,_,B),R(_,D,B),R(_,v,B),R(_,g,B),te(L,_,B),G=!0},p(_,[B]){const Q={};B&8&&(Q.$$scope={dirty:B,ctx:_}),$.$set(Q);const q={};B&8&&(q.$$scope={dirty:B,ctx:_}),f.$set(q);const I={};B&8&&(I.$$scope={dirty:B,ctx:_}),p.$set(I);const M={};B&8&&(M.$$scope={dirty:B,ctx:_}),L.$set(M)},i(_){G||(W($.$$.fragment,_),W(f.$$.fragment,_),W(p.$$.fragment,_),W(L.$$.fragment,_),G=!0)},o(_){Y($.$$.fragment,_),Y(f.$$.fragment,_),Y(p.$$.fragment,_),Y(L.$$.fragment,_),G=!1},d(_){_&&(b(s),b(n),b(i),b(l),b(o),b(a),b(D),b(v),b(g)),$e($,_),$e(f,_),$e(p,_),$e(L,_)}}}function Ct(r){const $=`${X("script",` ${t("lang")}=${y("ts")}`,`
${c("import")} ${t("DragItem")} ${c("from")} ${y("parts/ref/utils/drag-and-drop/TodoListExample/DragItem.svelte")}
${c("import")} ${t("DragItemPlaceHolder")} ${c("from")} ${y("parts/ref/utils/drag-and-drop/TodoListExample/DragItemPlaceHolder.svelte")}
${c("import")} ${e("{")} ${t("done$")}, ${t("doneTf$")}, ${t("drag$")}, ${t("todo$")}, ${t("todoTf$")}, ${t("transition$")} ${e("}")} ${c("from")} ${y("parts/ref/store")}
${c("import")} ${e("{")} ${t("onDestroy")}, ${t("onMount")} ${e("}")} ${c("from")} ${y("svelte")}
${c("import")} ${e("{")} ${t("DragContainer")} ${e("}")} ${c("from")} ${y("lube-ui")}

${u("const")} ${t("todoHeights",!0)}: ${A("number")}${e("[]")} = ${e("[]")}
${u("const")} ${t("doneHeights",!0)}: ${A("number")}${e("[]")} = ${e("[]")}
${u("let")} ${t("isDragging")}: ${A("boolean")}
${u("let")} ${w("setDragElement")}: ${e("(")}${t("clientX")}: ${A("number")}, ${t("clientY")}: ${A("number")}, ${t("drag")}: ${A("HTMLElement")}${e(")")} ${u("=>")} ${A("any")}

${u("const")} ${w("handle_dragend")} = ${e("()")} ${u("=>")} ${e("{")}
	${u("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${u("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${t("$drag$")} = ${u("null")}
	${w("re_ordering")}${e("(",1)}${t("from",!0)}, ${t("type",!0)}${e(")",1)}
${e("}")}
${u("const")} ${w("transfer_list")} = ${e("(")}${t("index")}: ${A("number")}${e(")")} ${u("=>")} ${e("{")}
	${u("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${u("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${u("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type",!0)} === ${y("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${c("if")} ${e("(",1)}${t("from",!0)} < ${t("index")}${e(") {",1)}
		${c("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${c("for")} ${e("(")}${u("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${S(0)}
			${e("}")}
		${e("}",2)} ${c("else")} ${e("{",2)}
			${c("for")} ${e("(")}${u("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = -${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${c("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${c("for")} ${e("(")}${u("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${S(0)}
			${e("}")}
		${e("}",2)} ${c("else")} ${e("{",2)}
			${c("for")} ${e("(")}${u("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)}
	${e("(",1)}${t("type",!0)} === ${y("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${w("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${u("const")} ${w("move_item")} = ${e("(")}${t("index")}: ${A("number")}${e(")")} ${u("=>")} ${e("{")}
	${u("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${u("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${c("if")} ${e("(",1)}${t("from",!0)} === ${y("todo")}${e(") {",1)}
		${u("const")} ${t("before",!0)} = ${t("$todo$")}.${w("slice")}${e("()",2)}
		${u("const")} ${t("after",!0)} = ${t("$done$")}.${w("slice")}${e("()",2)}
		${t("after",!0)}.${w("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${w("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
		${t("$todo$")} = ${t("before",!0)}
		${t("$done$")} = ${t("after",!0)}
		${t("$todoTf$")} = ${u("new")} ${A("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${w("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$doneTf$")} = ${u("new")} ${A("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${w("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${y("done")}, ${t("index: index")} ${e("}",2)}
		${t("doneHeights",!0)}.${w("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("todoHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("todoHeights",!0)}.${w("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${u("const")} ${t("before",!0)} = ${t("$done$")}.${w("slice")}${e("()",2)}
		${u("const")} ${t("after",!0)} = ${t("$todo$")}.${w("slice")}${e("()",2)}
		${t("after",!0)}.${w("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${w("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
		${t("$done$")} = ${t("before",!0)}
		${t("$todo$")} = ${t("after",!0)}
		${t("$doneTf$")} = ${u("new")} ${A("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${w("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$todoTf$")} = ${u("new")} ${A("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${w("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${y("todo")}, ${t("index: index")} ${e("}",2)}
		${t("todoHeights",!0)}.${w("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("doneHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("doneHeights",!0)}.${w("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
	${e("}",1)}
${e("}")}
${u("const")} ${w("re_ordering")} = ${e("(")}${t("from")}: ${A("number")}, ${t("type")}: ${A("string")}${e(")")} ${u("=>")} ${e("{")}
	${u("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${y("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${c("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} === ${S(0)}${e(") {",1)}
		${c("return")}
	${e("}",1)}
	${u("const")} ${t("list",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${y("todo")} ? ${t("$todo$")} : ${t("$done$")} ${e(")",2)}${e("]",1)}
	${u("const")} ${t("temp",!0)} = ${t("list",!0)}${e("[",1)}${t("from")}${e("]",1)}
	${u("let")} ${t("i")}
	${c("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} < ${S(0)}${e(") {",1)}
		${c("for")} ${e("(",2)}${t("i")} = ${t("from")} - ${S(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}--${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} + ${S(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${S(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} + ${S(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${c("for")} ${e("(",2)}${t("i")} = ${t("from")} + ${S(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}++${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} - ${S(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${S(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} - ${S(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)}
	${t("transforms",!0)}${e("[",1)}${t("from")}${e("]",1)} = ${S(0)}
	${t("$transition$")} = ${u("false")}
	,${e("(",1)}${t("type")} === ${y("todo")} ? ${t("todo$",!0)} : ${t("done$",!0)} ${e(")",1)}.${w("set")}${e("(",1)}${t("list",!0)}${e(")",1)}
	,${e("(",1)}${t("type")} === ${y("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${w("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${w("onMount")}${e("(")}${e("()",1)} ${u("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[",2)}
		${y("Task A")},
		${y("Task B")},
		${y("Task C")},
		${y("Task D")},
		${y("Task E")},
		${y("Task F")},
		${y("Task G")},
		${y("Task H")},
		${y("Task I")},
		${y("Task J")},
		${y("Task K")},
		${y("Task L")},
		${y("")}
	${e("]",2)}
	${t("$todoTf$")} = ${u("new")} ${A("Array")}${e("(",2)}${t("$todo$")}.${t("length")}${e(")",2)}.${w("fill")}${e("(",2)}${S(0)}${e(")",2)}
	${t("$todo$")} = ${e("[",2)} ${y("Task Z")}, ${y("")} ${e("]",2)}
	${t("$doneTf$")} = ${u("new")} ${A("Array")}${e("(",2)}${t("$done$")}.${t("length")}${e(")",2)}.${w("fill")}${e("(",2)}${S(0)}${e(")",2)}
${e("}",1)}${e(")")}
${w("onDestroy")}${e("(")}${e("()",1)} ${u("=>")} ${e("{",1)}
	${t("$todo$")} = ${e("[]",2)}
	${t("$todoTf$")} = ${e("[]",2)}
	${t("$done$")} = ${e("[]",2)}
	${t("$doneTf$")} = ${e("[]",2)}
	${t("$transition$")} = ${u("false")}
	${t("$drag$")} = ${u("null")}
${e("}",1)}${e(")")}

`)}

${X("DragContainer",` ${c("bind")}:${t("isDragging")}
		${c("bind")}:${w("setDragElement")}
		${c("on")}:${A("dragend")}=${e("{")}${w("handle_dragend")}${e("}")}`,`
	${X("div",` ${t("class")}=${y("flex flex-wrap=wrap")}`,`
		${X("div",` ${t("class")}=${y("flex column")}`,`
			${X("span",` ${t("class")}=${y("fs=2 bold")}`,"To do")}
			${X("div",` ${t("class")}=${y("h=.5")}`,"")}
			${e("{")}#${c("each")} ${t("$todo$")} ${c("as")} ${t("v")}, ${t("i")}${e("}")}
			${X("DragItem",` ${c("bind")}:${t("clientHeight")}=${e("{")}${t("todoHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${w("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$todo$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$todoTf$")}${e("}")}
					${t("list")}=${y("todo")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${w("transfer_list")}${e("}")}
					${e("{")}${w("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("each")}${e("}")}
			${e("{")}#${c("if")} ${t("$todo$")}.${t("length")} === ${S(1)}${e("}")}
			${X("DragItemPlaceHolder",` ${e("{")}${w("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("if")}${e("}")}
		`)}
		${X("div",` ${t("class")}=${y("w=5 h=5")}`,"")}
		${X("div",` ${t("class")}=${y("flex column")}`,`
			${X("span",` ${t("class")}=${y("fs=2 bold")}`,"Done")}
			${X("div",` ${t("class")}=${y("h=.5")}`,"")}
			${e("{")}#${c("each")} ${t("$done$")} ${c("as")} ${t("v")}, ${t("i")}${e("}")}
			${X("DragItem",` ${c("bind")}:${t("clientHeight")}=${e("{")}${t("doneHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${w("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$done$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$doneTf$")}${e("}")}
					${t("list")}=${y("done")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${w("transfer_list")}${e("}")}
					${e("{")}${w("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("each")}${e("}")}
			${e("{")}#${c("if")} ${t("$done$")}.${t("length")} === ${S(1)}${e("}")}
			${X("DragItemPlaceHolder",` ${e("{")}${w("move_item")}${e("}")}`,!1)}
			${e("{")}/${c("if")}${e("}")}
		`)}
	`)}
`)}`,s=`

${X("script",` ${t("lang")}=${y("ts")}`,`
${c("import")} ${e("{")} ${t("Dragable")} ${e("}")} ${c("from")} ${y("lube-ui")}
${c("import")} ${e("{")} ${t("drag$")}, ${t("transition$")} ${e("}")} ${c("from")} ${y("parts/ref/store")}

${c("export")} ${u("let")} ${t("list")}: ${A("string")}${e("[]")}
${c("export")} ${u("let")} ${t("transforms")}: ${A("number")}${e("[]")}
${c("export")} ${u("let")} ${t("type")}: ${y("todo")} | ${y("done")}
${c("export")} ${u("let")} ${t("index")}: ${A("number")}
${c("export")} ${u("let")} ${t("clientHeight")}: ${A("number")}
${c("export")} ${u("let")} ${t("duration")} = ${S(400)}
${c("export")} ${u("let")} ${w("setDragElement")}: ${e("(")}${t("clientX")}: ${A("number")}, ${t("clientY")}: ${A("number")}, ${t("drag")}: ${A("HTMLElement")}${e(")")} ${u("=>")} ${A("any")}
${c("export")} ${u("let")} ${w("transfer_list")}: ${e("(")}${t("index")}: ${A("number")}${e(")")} ${u("=>")} ${A("any")}
${c("export")} ${u("let")} ${w("move_item")}: ${e("(")}${t("index")}: ${A("number")}${e(")")} ${u("=>")} ${A("any")}

${u("const")} ${w("handleClick")} = ${e("()")} ${u("=>")} ${e("{")}
	${w("alert")}${e("(",1)}${e("(",2)}${t("event")}.${t("target")} ${c("as")} ${A("HTMLElement")}${e(")",2)}.${t("textContent")}${e(")",1)}
${e("}")}
${u("const")} ${w("handle_dragenter")} = ${e("()")} ${u("=>")} ${e("{")}
	${u("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${u("const")} ${t("t",!0)} = ${t("$drag$")}?.${t("type")}
	${c("if")} ${e("(",1)}${t("i",!0)} === ${u("void")} ${S(0)} || ${t("i",!0)} === ${t("index")} && ${t("t",!0)} === ${t("type")}${e(") {",1)}
		${c("return")}
	${e("}",1)}
	${c("if")} ${e("(",1)}${t("t",!0)} === ${t("type")}${e(") {",1)}
		${w("transfer_list")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)} ${c("else")} ${e("{",1)}
		${w("move_item")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)}
${e("}")}
${u("const")} ${w("handle_dragstart")} = ${e("()")} ${u("=>")} ${e("{")}
	${t("$drag$")} = ${e("{",1)} ${t("type: type")}, ${t("index: index")} ${e("}",1)}
	${t("$transition$")} = ${u("true")}
${e("}")}
`)}

${X("Dragable",` ${c("on")}:${A("dragstart")}=${e("{")}${w("handle_dragstart")}${e("}")}
		${t("delay")}=${e("{")}${S(300)}${e("}")}
		${e("{")}${w("setDragElement")}${e("}")}`,`
	${X("div",` ${c("bind")}:${t("clientHeight")}
			${t("class")}=${y('"w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY(',!1)}${e("{",2)}${t("transforms")}${e("[")}${t("index")}${e("]")}${e("}",2)}${y("px)",!1)}
			${e("{",2)}${t("$transition$")} ? ${y("tt=")} + ${t("duration")} + ${y("ms")} : ${y("")}${e("}",2)}
			${e("{",2)}${t("$drag$")}?.${t("index")} === ${t("index")} && ${t("$drag$")}?.${t("type")} === ${t("type")} ? ${y(" opacity=.2 ol=.2_solid_#aaa")} : ${y("")}${e("}",2)}
			${e("{",2)}!${t("list")}${e("[")}${t("index")}${e("]")} ? ${y("none")} : ${y("")}${e("}",2)}
			${c("on")}:${A("dragenter")}=${e("{")}${w("handle_dragenter")}${e("}")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)}${e("}")}
	`)}
	${X("div",` ${t("slot")}=${y("drag")}
			${c("bind")}:${t("clientHeight")}
			${t("class")}=${y("ta=center fs=2.5 cs=move c=#000 @dark@c=#fff")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)} + ${y("!!")}${e("}")}
	`)}
`)}`,n=`

${X("script",` ${t("lang")}=${y("ts")}`,`
${c("import")} ${e("{")} ${t("drag$")} ${e("}")} ${c("from")} ${y("parts/ref/store")}

${c("export")} ${u("let")} ${w("move_item")}: ${e("(")}${t("index")}: ${A("number")}${e(")")} ${u("=>")} ${A("any")}

${u("const")} ${w("handle_dragenter")} = ${e("()")} ${u("=>")} ${e("{")}
	${u("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${c("if")} ${e("(",1)}${t("i",!0)} === ${u("void")} ${S(0)}${e(") {",1)}
		${c("return")}
	${e("}",1)}
	${w("move_item")}${e("(",2)}${S(0)}${e(")",2)}
${e("}")}
`)}

${X("div",` ${t("style")}=${y("user-select:none")}
		${t("class")}=${y("w=6 ol=.1_dashed ta=center fs=2 cs=pointer")}
		${c("on")}:${A("dragenter")}=${e("{")}${w("handle_dragenter")}${e("}")}`,`
	Empty
`)}`;return[$,s,n]}class Vt extends ue{constructor($){super(),de(this,$,Ct,It,fe,{})}}function Ne(r,$,s){const n=r.slice();return n[18]=$[s],n[19]=$,n[20]=s,n}function je(r,$,s){const n=r.slice();return n[18]=$[s],n[21]=$,n[20]=s,n}function Ye(r){let $,s,n;function i(l){r[11](l,r[20])}let f={setDragElement:r[3],list:r[7],transforms:r[6],type:"todo",index:r[20],transfer_list:r[9],move_item:r[10]};return r[0][r[20]]!==void 0&&(f.clientHeight=r[0][r[20]]),$=new xe({props:f}),ie.push(()=>Ve($,"clientHeight",i)),{c(){x($.$$.fragment)},l(l){ee($.$$.fragment,l)},m(l,o){te($,l,o),n=!0},p(l,o){r=l;const a={};o&8&&(a.setDragElement=r[3]),o&128&&(a.list=r[7]),o&64&&(a.transforms=r[6]),!s&&o&1&&(s=!0,a.clientHeight=r[0][r[20]],Ce(()=>s=!1)),$.$set(a)},i(l){n||(W($.$$.fragment,l),n=!0)},o(l){Y($.$$.fragment,l),n=!1},d(l){$e($,l)}}}function Ge(r){let $,s;return $=new et({props:{move_item:r[10]}}),{c(){x($.$$.fragment)},l(n){ee($.$$.fragment,n)},m(n,i){te($,n,i),s=!0},p:se,i(n){s||(W($.$$.fragment,n),s=!0)},o(n){Y($.$$.fragment,n),s=!1},d(n){$e($,n)}}}function Ke(r){let $,s,n;function i(l){r[12](l,r[20])}let f={setDragElement:r[3],list:r[5],transforms:r[4],type:"done",index:r[20],transfer_list:r[9],move_item:r[10]};return r[1][r[20]]!==void 0&&(f.clientHeight=r[1][r[20]]),$=new xe({props:f}),ie.push(()=>Ve($,"clientHeight",i)),{c(){x($.$$.fragment)},l(l){ee($.$$.fragment,l)},m(l,o){te($,l,o),n=!0},p(l,o){r=l;const a={};o&8&&(a.setDragElement=r[3]),o&32&&(a.list=r[5]),o&16&&(a.transforms=r[4]),!s&&o&2&&(s=!0,a.clientHeight=r[1][r[20]],Ce(()=>s=!1)),$.$set(a)},i(l){n||(W($.$$.fragment,l),n=!0)},o(l){Y($.$$.fragment,l),n=!1},d(l){$e($,l)}}}function Je(r){let $,s;return $=new et({props:{move_item:r[10]}}),{c(){x($.$$.fragment)},l(n){ee($.$$.fragment,n)},m(n,i){te($,n,i),s=!0},p:se,i(n){s||(W($.$$.fragment,n),s=!0)},o(n){Y($.$$.fragment,n),s=!1},d(n){$e($,n)}}}function At(r){let $,s,n,i="To do",f,l,o,a,p,D,v,g,L,G="Done",_,B,Q,q,I,M=Te(r[7]),d=[];for(let m=0;m<M.length;m+=1)d[m]=Ye(je(r,M,m));const P=m=>Y(d[m],1,1,()=>{d[m]=null});let E=r[7].length===1&&Ge(r),k=Te(r[5]),C=[];for(let m=0;m<k.length;m+=1)C[m]=Ke(Ne(r,k,m));const h=m=>Y(C[m],1,1,()=>{C[m]=null});let V=r[5].length===1&&Je(r);return{c(){$=N("div"),s=N("div"),n=N("span"),n.textContent=i,f=K(),l=N("div"),o=K();for(let m=0;m<d.length;m+=1)d[m].c();a=K(),E&&E.c(),p=K(),D=N("div"),v=K(),g=N("div"),L=N("span"),L.textContent=G,_=K(),B=N("div"),Q=K();for(let m=0;m<C.length;m+=1)C[m].c();q=K(),V&&V.c(),this.h()},l(m){$=j(m,"DIV",{class:!0});var H=Z($);s=j(H,"DIV",{class:!0});var T=Z(s);n=j(T,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-2gma2k"&&(n.textContent=i),f=J(T),l=j(T,"DIV",{class:!0}),Z(l).forEach(b),o=J(T);for(let re=0;re<d.length;re+=1)d[re].l(T);a=J(T),E&&E.l(T),T.forEach(b),p=J(H),D=j(H,"DIV",{class:!0}),Z(D).forEach(b),v=J(H),g=j(H,"DIV",{class:!0});var U=Z(g);L=j(U,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(L)!=="svelte-ovcjna"&&(L.textContent=G),_=J(U),B=j(U,"DIV",{class:!0}),Z(B).forEach(b),Q=J(U);for(let re=0;re<C.length;re+=1)C[re].l(U);q=J(U),V&&V.l(U),U.forEach(b),H.forEach(b),this.h()},h(){z(n,"class","fs=2 bold"),z(l,"class","h=.5"),z(s,"class","flex column"),z(D,"class","w=5 h=5"),z(L,"class","fs=2 bold"),z(B,"class","h=.5"),z(g,"class","flex column"),z($,"class","flex flex-wrap=wrap")},m(m,H){R(m,$,H),F($,s),F(s,n),F(s,f),F(s,l),F(s,o);for(let T=0;T<d.length;T+=1)d[T]&&d[T].m(s,null);F(s,a),E&&E.m(s,null),F($,p),F($,D),F($,v),F($,g),F(g,L),F(g,_),F(g,B),F(g,Q);for(let T=0;T<C.length;T+=1)C[T]&&C[T].m(g,null);F(g,q),V&&V.m(g,null),I=!0},p(m,H){if(H&1737){M=Te(m[7]);let T;for(T=0;T<M.length;T+=1){const U=je(m,M,T);d[T]?(d[T].p(U,H),W(d[T],1)):(d[T]=Ye(U),d[T].c(),W(d[T],1),d[T].m(s,a))}for(ye(),T=M.length;T<d.length;T+=1)P(T);we()}if(m[7].length===1?E?(E.p(m,H),H&128&&W(E,1)):(E=Ge(m),E.c(),W(E,1),E.m(s,null)):E&&(ye(),Y(E,1,1,()=>{E=null}),we()),H&1594){k=Te(m[5]);let T;for(T=0;T<k.length;T+=1){const U=Ne(m,k,T);C[T]?(C[T].p(U,H),W(C[T],1)):(C[T]=Ke(U),C[T].c(),W(C[T],1),C[T].m(g,q))}for(ye(),T=k.length;T<C.length;T+=1)h(T);we()}m[5].length===1?V?(V.p(m,H),H&32&&W(V,1)):(V=Je(m),V.c(),W(V,1),V.m(g,null)):V&&(ye(),Y(V,1,1,()=>{V=null}),we())},i(m){if(!I){for(let H=0;H<M.length;H+=1)W(d[H]);W(E);for(let H=0;H<k.length;H+=1)W(C[H]);W(V),I=!0}},o(m){d=d.filter(Boolean);for(let H=0;H<d.length;H+=1)Y(d[H]);Y(E),C=C.filter(Boolean);for(let H=0;H<C.length;H+=1)Y(C[H]);Y(V),I=!1},d(m){m&&b($),We(d,m),E&&E.d(),We(C,m),V&&V.d()}}}function Lt(r){let $,s,n,i,f,l,o,a;function p(g){r[13](g)}function D(g){r[14](g)}let v={$$slots:{default:[At]},$$scope:{ctx:r}};return r[2]!==void 0&&(v.isDragging=r[2]),r[3]!==void 0&&(v.setDragElement=r[3]),s=new ut({props:v}),ie.push(()=>Ve(s,"isDragging",p)),ie.push(()=>Ve(s,"setDragElement",D)),s.$on("dragend",r[8]),o=new Vt({}),{c(){$=N("div"),x(s.$$.fragment),f=K(),l=N("div"),x(o.$$.fragment),this.h()},l(g){$=j(g,"DIV",{class:!0});var L=Z($);ee(s.$$.fragment,L),L.forEach(b),f=J(g),l=j(g,"DIV",{});var G=Z(l);ee(o.$$.fragment,G),G.forEach(b),this.h()},h(){z($,"class","flex jc=center")},m(g,L){R(g,$,L),te(s,$,null),R(g,f,L),R(g,l,L),te(o,l,null),a=!0},p(g,L){const G={};L&4194555&&(G.$$scope={dirty:L,ctx:g}),!n&&L&4&&(n=!0,G.isDragging=g[2],Ce(()=>n=!1)),!i&&L&8&&(i=!0,G.setDragElement=g[3],Ce(()=>i=!1)),s.$set(G)},i(g){a||(W(s.$$.fragment,g),W(o.$$.fragment,g),a=!0)},o(g){Y(s.$$.fragment,g),Y(o.$$.fragment,g),a=!1},d(g){g&&(b($),b(f),b(l)),$e(s),$e(o)}}}function Bt(r){let $,s;return $=new lt({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),{c(){x($.$$.fragment)},l(n){ee($.$$.fragment,n)},m(n,i){te($,n,i),s=!0},p(n,[i]){const f={};i&4194559&&(f.$$scope={dirty:i,ctx:n}),$.$set(f)},i(n){s||(W($.$$.fragment,n),s=!0)},o(n){Y($.$$.fragment,n),s=!1},d(n){$e($,n)}}}function Pt(r,$,s){let n,i,f,l,o,a;le(r,oe,d=>s(15,n=d)),le(r,pe,d=>s(16,i=d)),le(r,ce,d=>s(4,f=d)),le(r,ge,d=>s(5,l=d)),le(r,me,d=>s(6,o=d)),le(r,he,d=>s(7,a=d));const p=[],D=[];let v,g;const L=()=>{const d=n==null?void 0:n.index,P=n==null?void 0:n.type;O(oe,n=null,n),d&&P&&B(d,P)},G=d=>{const P=(n==null?void 0:n.index)||0,E=n==null?void 0:n.type,k=[...E==="todo"?o:f],C=E==="todo"?p:D;if(P<d)if(k[d])for(let h=d;k[h];h++)k[P]-=C[h],k[h]=0;else for(let h=d;!k[h];h--)k[P]+=C[h],k[h]=-C[P];else if(k[d])for(let h=d;k[h];h--)k[P]+=C[h],k[h]=0;else for(let h=d;!k[h];h++)k[P]-=C[h],k[h]=C[P];(E==="todo"?me:ce).set(k)},_=d=>{const P=(n==null?void 0:n.index)||0;if((n==null?void 0:n.type)==="todo"){const k=[...a],C=[...l];C.splice(d,0,k[P]),k.splice(P,1),O(he,a=k,a),O(ge,l=C,l),O(me,o=new Array(k.length).fill(0),o),O(ce,f=new Array(C.length).fill(0),f),O(oe,n={type:"done",index:d},n),D.splice(d,0,p[P]),p.splice(P,1)}else{const k=[...l],C=[...a];C.splice(d,0,k[P]),k.splice(P,1),O(ge,l=k,l),O(he,a=C,a),O(ce,f=new Array(k.length).fill(0),f),O(me,o=new Array(C.length).fill(0),o),O(oe,n={type:"todo",index:d},n),p.splice(d,0,D[P]),D.splice(P,1)}},B=(d,P)=>{const E=[...P==="todo"?o:f];if(E[d]===0)return;const k=[...P==="todo"?a:l],C=k[d];let h;if(E[d]<0){for(h=d-1;E[h];h--)k[h+1]=k[h],E[h]=0;k[h+1]=C}else{for(h=d+1;E[h];h++)k[h-1]=k[h],E[h]=0;k[h-1]=C}E[d]=0,O(pe,i=!1,i),(P==="todo"?he:ge).set(k),(P==="todo"?me:ce).set(E)};Xe(()=>{O(he,a=["Task A","Task B","Task C","Task D","Task E","Task F","Task G","Task H","Task I","Task J","Task K","Task L",""],a),O(me,o=new Array(a.length).fill(0),o),O(ge,l=["Task Z",""],l),O(ce,f=new Array(l.length).fill(0),f)}),nt(()=>{O(he,a=[],a),O(me,o=[],o),O(ge,l=[],l),O(ce,f=[],f),O(pe,i=!1,i),O(oe,n=null,n)});function Q(d,P){r.$$.not_equal(p[P],d)&&(p[P]=d,s(0,p))}function q(d,P){r.$$.not_equal(D[P],d)&&(D[P]=d,s(1,D))}function I(d){v=d,s(2,v)}function M(d){g=d,s(3,g)}return[p,D,v,g,f,l,o,a,L,G,_,Q,q,I,M]}class qt extends ue{constructor($){super(),de(this,$,Pt,Bt,fe,{})}}function Rt(r){let $;return{c(){$=ve("Drag and Drop")},l(s){$=be(s,"Drag and Drop")},m(s,n){R(s,$,n)},d(s){s&&b($)}}}function St(r){let $;return{c(){$=ve(".")},l(s){$=be(s,".")},m(s,n){R(s,$,n)},d(s){s&&b($)}}}function Wt(r){let $,s,n,i,f,l,o,a,p,D,v,g,L="Lube UI may be released someday",G,_,B,Q,q,I,M,d,P;return D=new ze({props:{$$slots:{default:[Rt]},$$scope:{ctx:r}}}),_=new ze({props:{classs:"v=hidden",$$slots:{default:[St]},$$scope:{ctx:r}}}),I=new qt({}),{c(){$=K(),s=N("header"),n=N("div"),i=N("div"),f=N("div"),l=K(),o=N("div"),a=N("div"),p=K(),x(D.$$.fragment),v=K(),g=N("span"),g.textContent=L,G=K(),x(_.$$.fragment),B=K(),Q=N("div"),q=N("article"),x(I.$$.fragment),M=K(),d=N("div"),this.h()},l(E){st("svelte-qqqqz6",document.head).forEach(b),$=J(E),s=j(E,"HEADER",{class:!0});var C=Z(s);n=j(C,"DIV",{class:!0});var h=Z(n);i=j(h,"DIV",{class:!0});var V=Z(i);f=j(V,"DIV",{class:!0}),Z(f).forEach(b),l=J(V),o=j(V,"DIV",{class:!0});var m=Z(o);a=j(m,"DIV",{class:!0}),Z(a).forEach(b),p=J(m),ee(D.$$.fragment,m),v=J(m),g=j(m,"SPAN",{"data-svelte-h":!0}),Ie(g)!=="svelte-cpphmj"&&(g.textContent=L),G=J(m),ee(_.$$.fragment,m),m.forEach(b),V.forEach(b),h.forEach(b),C.forEach(b),B=J(E),Q=j(E,"DIV",{class:!0});var H=Z(Q);q=j(H,"ARTICLE",{class:!0});var T=Z(q);ee(I.$$.fragment,T),T.forEach(b),H.forEach(b),M=J(E),d=j(E,"DIV",{class:!0}),Z(d).forEach(b),this.h()},h(){document.title="Drag and Drop - CSS Lube",z(f,"class","w=3"),z(a,"class","h=2"),z(o,"class","fg=1 fsk=1"),z(i,"class","flex w=100% "+Me.$common.background_conic),z(n,"class","flex br=1.5 o=hidden "+Me.$common.background_grid),z(s,"class","m=.5"),z(q,"class","m=2_1 @md@m=2"),z(Q,"class","m=.5"),z(d,"class","h=2")},m(E,k){R(E,$,k),R(E,s,k),F(s,n),F(n,i),F(i,f),F(i,l),F(i,o),F(o,a),F(o,p),te(D,o,null),F(o,v),F(o,g),F(o,G),te(_,o,null),r[1](s),R(E,B,k),R(E,Q,k),F(Q,q),te(I,q,null),R(E,M,k),R(E,d,k),P=!0},p(E,[k]){const C={};k&4&&(C.$$scope={dirty:k,ctx:E}),D.$set(C);const h={};k&4&&(h.$$scope={dirty:k,ctx:E}),_.$set(h)},i(E){P||(W(D.$$.fragment,E),W(_.$$.fragment,E),W(I.$$.fragment,E),P=!0)},o(E){Y(D.$$.fragment,E),Y(_.$$.fragment,E),Y(I.$$.fragment,E),P=!1},d(E){E&&(b($),b(s),b(B),b(Q),b(M),b(d)),$e(D),$e(_),r[1](null),$e(I)}}}function zt(r,$,s){let n;Xe(()=>{var f;return(f=n.parentElement)==null?void 0:f.scroll(0,0)});function i(f){ie[f?"unshift":"push"](()=>{n=f,s(0,n)})}return[n,i]}class Ot extends ue{constructor($){super(),de(this,$,zt,Wt,fe,{})}}export{Ot as component};
