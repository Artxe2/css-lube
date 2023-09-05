import{s as ae,z as Ae,a as G,f as F,c as K,g as N,h as Z,d as b,j as z,k as _e,i as q,r as ne,A as Le,B as Be,C as Pe,K as Re,Q as Ze,p as oe,x as re,l as ve,m as be,L as Oe,w as M,R as Qe,n as Ue,y as O,v as Ie,u as se,F as qe,M as De,G as Se,N as Ee,H as $t,e as ie,o as Xe,P as nt,I as Ce,D as We,O as st}from"../chunks/scheduler.751e6dae.js";import{S as fe,i as ue,a as W,t as j,b as X,d as x,m as ee,e as te,f as Ve,g as ye,c as we}from"../chunks/index.91d8d602.js";import{H as ze}from"../chunks/H2.cb186f28.js";import{e as Te}from"../chunks/each.e59479a4.js";import{t as pe,d as le,I as rt,a as ce,b as ge,c as me,e as he}from"../chunks/IdeTypescript.36cff289.js";import{C as lt}from"../chunks/ComponentTabView.dd39602d.js";import{C as ke,h as U,k as m,n as t,s as y,b as e,g as d,t as V,f as T,d as S}from"../chunks/highlighter.f351b14a.js";import{b as ot}from"../chunks/paths.1ac93f45.js";import{s as Me}from"../chunks/styles.b585f6af.js";const it=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:He}=it;function at(r){let $,s,n,i,f;const l=r[10].default,o=Ae(l,r,r[9],null);return{c(){$=G(),s=F("div"),o&&o.c(),this.h()},l(a){$=K(a),s=N(a,"DIV",{class:!0,style:!0});var p=Z(s);o&&o.l(p),p.forEach(b),this.h()},h(){z(s,"class",r[0]),_e(s,"position","relative")},m(a,p){q(a,$,p),q(a,s,p),o&&o.m(s,null),r[11](s),n=!0,i||(f=[ne(He.body,"mousemove",r[2]),ne(He.body,"mouseup",r[4]),ne(He.body,"touchmove",r[3]),ne(He.body,"touchend",r[5])],i=!0)},p(a,[p]){o&&o.p&&(!n||p&512)&&Le(o,l,a,a[9],n?Pe(l,a[9],p,null):Be(a[9]),null),(!n||p&1)&&z(s,"class",a[0])},i(a){n||(W(o,a),n=!0)},o(a){j(o,a),n=!1},d(a){a&&(b($),b(s)),o&&o.d(a),r[11](null),i=!1,Re(f)}}}function ft(r,$,s){let{$$slots:n={},$$scope:i}=$,{classs:f=""}=$,{isDragging:l=!1}=$,{dragElement:o=null}=$;const a=(u,w,C)=>{const _=D.getBoundingClientRect();s(7,o=C),g=u-_.left,A=w-_.top,D.append(o),s(6,l=!0)},p=Ze();let D,v,g=0,A=0,Y=0,h=0,L;const Q=({clientX:u,clientY:w})=>{if(l){const C=c(document.elementsFromPoint(u,w));C&&v!=C&&(v&&v.dispatchEvent(new DragEvent("dragleave")),v=C,v.dispatchEvent(new DragEvent("dragenter"))),Y=u,h=w,P(),p("dragmove"),E(Date.now())}},R=u=>{Q(u.touches[0])},I=()=>{l&&(o&&D.removeChild(o),v&&(v.dispatchEvent(new DragEvent("drop")),v=null),s(7,o=null),s(6,l=!1),p("dragend"))},J=()=>{I()},c=u=>{const w=u.length;for(let C=0;C<w;C++)if(!(o!=null&&o.compareDocumentPosition(u[C])))return u[C+1]},P=()=>{const u=D.getBoundingClientRect();o&&s(7,o.style.transform=`translate(${Y-g-u.left}px, ${h-A-u.top}px)`,o)};function E(u){L||(L=requestAnimationFrame(()=>{L=0;let w=D;for(;w!==document.body;){if(w.scrollWidth>w.clientWidth){if(w.scrollLeft)break;if(w.scrollLeft=1,w.scrollLeft){w.scrollLeft=0;break}}w.parentElement&&(w=w.parentElement)}let C=D;for(;C!==document.body;){if(C.scrollHeight>C.clientHeight){if(C.scrollTop)break;if(C.scrollTop=1,C.scrollTop){C.scrollTop=0;break}}C.parentElement&&(C=C.parentElement)}const _=o==null?void 0:o.getBoundingClientRect();if(!_)return;const B=w.getBoundingClientRect(),k=C.getBoundingClientRect();if(_.left>=B.left&&_.right<=B.right&&_.top>=k.top&&_.bottom<=k.bottom)return;const $e=Date.now();u=$e-u,_.left<B.left?w.scrollBy((_.left-B.left)*u/30,0):_.right>B.right&&w.scrollBy((_.right-B.right)*u/30,0),_.top<k.top?C.scrollBy(0,(_.top-k.top)*u/30):_.bottom>k.bottom&&C.scrollBy(0,(_.bottom-k.bottom)*u/30),P(),E($e)}))}function H(u){oe[u?"unshift":"push"](()=>{D=u,s(1,D)})}return r.$$set=u=>{"classs"in u&&s(0,f=u.classs),"isDragging"in u&&s(6,l=u.isDragging),"dragElement"in u&&s(7,o=u.dragElement),"$$scope"in u&&s(9,i=u.$$scope)},[f,D,Q,R,I,J,l,o,a,i,n,H]}class ut extends fe{constructor($){super(),ue(this,$,ft,at,ae,{classs:0,isDragging:6,dragElement:7,setDragElement:8})}get setDragElement(){return this.$$.ctx[8]}}const dt=r=>({}),Fe=r=>({});function ct(r){let $,s,n,i,f,l;const o=r[10].default,a=Ae(o,r,r[9],null),p=r[10].drag,D=Ae(p,r,r[9],Fe);return{c(){$=F("div"),a&&a.c(),s=G(),n=F("div"),D&&D.c(),this.h()},l(v){$=N(v,"DIV",{class:!0,style:!0});var g=Z($);a&&a.l(g),g.forEach(b),s=K(v),n=N(v,"DIV",{style:!0});var A=Z(n);D&&D.l(A),A.forEach(b),this.h()},h(){z($,"class",r[0]),_e($,"touch-action","none"),_e($,"user-select","none"),_e($,"width","fit-content"),_e(n,"display","none")},m(v,g){q(v,$,g),a&&a.m($,null),r[11]($),q(v,s,g),q(v,n,g),D&&D.m(n,null),r[12](n),i=!0,f||(l=[ne($,"mousedown",r[3]),ne($,"mouseup",r[5]),ne($,"touchstart",r[4]),ne($,"touchend",r[6],{passive:!0})],f=!0)},p(v,[g]){a&&a.p&&(!i||g&512)&&Le(a,o,v,v[9],i?Pe(o,v[9],g,null):Be(v[9]),null),(!i||g&1)&&z($,"class",v[0]),D&&D.p&&(!i||g&512)&&Le(D,p,v,v[9],i?Pe(p,v[9],g,dt):Be(v[9]),Fe)},i(v){i||(W(a,v),W(D,v),i=!0)},o(v){j(a,v),j(D,v),i=!1},d(v){v&&(b($),b(s),b(n)),a&&a.d(v),r[11](null),D&&D.d(v),r[12](null),f=!1,Re(l)}}}function mt(r,$,s){let{$$slots:n={},$$scope:i}=$,{classs:f=""}=$,{delay:l=0}=$,{setDragElement:o}=$;const a=Ze();let p,D,v;const g=({clientX:R,clientY:I})=>{v=setTimeout(()=>{const J=(D.firstChild||p).cloneNode(!0);J.style.position="absolute",J.style.top=p.offsetTop+"px",J.style.left=p.offsetLeft+"px",o(R,I,J),a("dragstart")},l)},A=R=>{g(R.touches[0])},Y=()=>{clearTimeout(v)},h=()=>{clearTimeout(v)};function L(R){oe[R?"unshift":"push"](()=>{p=R,s(1,p)})}function Q(R){oe[R?"unshift":"push"](()=>{D=R,s(2,D)})}return r.$$set=R=>{"classs"in R&&s(0,f=R.classs),"delay"in R&&s(7,l=R.delay),"setDragElement"in R&&s(8,o=R.setDragElement),"$$scope"in R&&s(9,i=R.$$scope)},[f,p,D,g,A,Y,h,l,o,i,n,L,Q]}class gt extends fe{constructor($){super(),ue(this,$,mt,ct,ae,{classs:0,delay:7,setDragElement:8})}}function ht(r){let $,s=r[1][r[4]]+"",n,i,f,l,o;return{c(){$=F("div"),n=ve(s),this.h()},l(a){$=N(a,"DIV",{class:!0});var p=Z($);n=be(p,s),p.forEach(b),this.h()},h(){var a,p;z($,"class",i="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+r[2][r[4]]+"px) "+(r[7]?"tt="+r[5]+"ms":"")+" "+(((a=r[8])==null?void 0:a.index)===r[4]&&((p=r[8])==null?void 0:p.type)===r[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(r[1][r[4]]?"":"none")),Oe(()=>r[15].call($))},m(a,p){q(a,$,p),M($,n),f=Qe($,r[15].bind($)),l||(o=[ne($,"click",r[9]),ne($,"dragenter",r[10])],l=!0)},p(a,p){var D,v;p&18&&s!==(s=a[1][a[4]]+"")&&Ue(n,s),p&446&&i!==(i="w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY("+a[2][a[4]]+"px) "+(a[7]?"tt="+a[5]+"ms":"")+" "+(((D=a[8])==null?void 0:D.index)===a[4]&&((v=a[8])==null?void 0:v.type)===a[3]?" opacity=.2 ol=.2_solid_#aaa":"")+" "+(a[1][a[4]]?"":"none"))&&z($,"class",i)},d(a){a&&b($),f(),l=!1,Re(o)}}}function _t(r){let $,s=r[1][r[4]]+"!!",n,i;return{c(){$=F("div"),n=ve(s),this.h()},l(f){$=N(f,"DIV",{slot:!0,class:!0});var l=Z($);n=be(l,s),l.forEach(b),this.h()},h(){z($,"slot","drag"),z($,"class","ta=center fs=2.5 cs=move c=#000 @dark@c=#fff"),Oe(()=>r[14].call($))},m(f,l){q(f,$,l),M($,n),i=Qe($,r[14].bind($))},p(f,l){l&18&&s!==(s=f[1][f[4]]+"!!")&&Ue(n,s)},d(f){f&&b($),i()}}}function pt(r){let $,s;return $=new gt({props:{delay:300,setDragElement:r[6],$$slots:{drag:[_t],default:[ht]},$$scope:{ctx:r}}}),$.$on("dragstart",r[11]),{c(){X($.$$.fragment)},l(n){x($.$$.fragment,n)},m(n,i){ee($,n,i),s=!0},p(n,[i]){const f={};i&64&&(f.setDragElement=n[6]),i&65983&&(f.$$scope={dirty:i,ctx:n}),$.$set(f)},i(n){s||(W($.$$.fragment,n),s=!0)},o(n){j($.$$.fragment,n),s=!1},d(n){te($,n)}}}function vt(r,$,s){let n,i;re(r,pe,I=>s(7,n=I)),re(r,le,I=>s(8,i=I));let{list:f}=$,{transforms:l}=$,{type:o}=$,{index:a}=$,{clientHeight:p}=$,{duration:D=400}=$,{setDragElement:v}=$,{transfer_list:g}=$,{move_item:A}=$;const Y=I=>{alert(I.target.textContent)},h=()=>{const I=i==null?void 0:i.index,J=i==null?void 0:i.type;I===void 0||I===a&&J===o||(J===o?g(a):A(a))},L=()=>{O(le,i={type:o,index:a},i),O(pe,n=!0,n)};function Q(){p=this.clientHeight,s(0,p)}function R(){p=this.clientHeight,s(0,p)}return r.$$set=I=>{"list"in I&&s(1,f=I.list),"transforms"in I&&s(2,l=I.transforms),"type"in I&&s(3,o=I.type),"index"in I&&s(4,a=I.index),"clientHeight"in I&&s(0,p=I.clientHeight),"duration"in I&&s(5,D=I.duration),"setDragElement"in I&&s(6,v=I.setDragElement),"transfer_list"in I&&s(12,g=I.transfer_list),"move_item"in I&&s(13,A=I.move_item)},[p,f,l,o,a,D,v,n,i,Y,h,L,g,A,Q,R]}class xe extends fe{constructor($){super(),ue(this,$,vt,pt,ae,{list:1,transforms:2,type:3,index:4,clientHeight:0,duration:5,setDragElement:6,transfer_list:12,move_item:13})}}function bt(r){let $,s="Empty",n,i;return{c(){$=F("div"),$.textContent=s,this.h()},l(f){$=N(f,"DIV",{class:!0,"data-svelte-h":!0}),Ie($)!=="svelte-2ylml"&&($.textContent=s),this.h()},h(){z($,"class","us=none w=6 ol=.1_dashed ta=center fs=2 cs=pointer")},m(f,l){q(f,$,l),n||(i=ne($,"dragenter",r[0]),n=!0)},p:se,i:se,o:se,d(f){f&&b($),n=!1,i()}}}function Dt(r,$,s){let n;re(r,le,l=>s(2,n=l));let{move_item:i}=$;const f=()=>{(n==null?void 0:n.index)!==void 0&&i(0)};return r.$$set=l=>{"move_item"in l&&s(1,i=l.move_item)},[f,i]}class et extends fe{constructor($){super(),ue(this,$,Dt,bt,ae,{move_item:1})}}function Et(r){let $,s,n,i,f;return{c(){$=qe("svg"),s=qe("use"),n=G(),i=new De(!1),f=ve(".svelte"),this.h()},l(l){$=Se(l,"svg",{class:!0});var o=Z($);s=Se(o,"use",{"xlink:href":!0}),Z(s).forEach(b),o.forEach(b),n=K(l),i=Ee(l,!1),f=be(l,".svelte"),this.h()},h(){$t(s,"xlink:href",ot+"/icons.svg#svelte"),z($,"class","inline-block w=1 h=1.5 --fill-1=#ff3e00 --fill-2=#fff"),i.a=f},m(l,o){q(l,$,o),M($,s),q(l,n,o),i.m(r[0],l,o),q(l,f,o)},p(l,[o]){o&1&&i.p(l[0])},i:se,o:se,d(l){l&&(b($),b(n),i.d(),b(f))}}}function yt(r,$,s){let{name:n}=$;return r.$$set=i=>{"name"in i&&s(0,n=i.name)},[n]}class tt extends fe{constructor($){super(),ue(this,$,yt,Et,ae,{name:0})}}function wt(r){let $,s;return{c(){$=new De(!1),s=ie(),this.h()},l(n){$=Ee(n,!1),s=ie(),this.h()},h(){$.a=s},m(n,i){$.m(r[0],n,i),q(n,s,i)},p:se,d(n){n&&(b(s),$.d())}}}function Tt(r){let $,s,n,i,f;return $=new tt({props:{name:"DragItem"}}),{c(){X($.$$.fragment),s=G(),n=new De(!1),i=ie(),this.h()},l(l){x($.$$.fragment,l),s=K(l),n=Ee(l,!1),i=ie(),this.h()},h(){n.a=i},m(l,o){ee($,l,o),q(l,s,o),n.m(r[1],l,o),q(l,i,o),f=!0},p:se,i(l){f||(W($.$$.fragment,l),f=!0)},o(l){j($.$$.fragment,l),f=!1},d(l){l&&(b(s),b(i),n.d()),te($,l)}}}function kt(r){let $,s,n,i,f;return $=new tt({props:{name:"DragItemPlaceHolder"}}),{c(){X($.$$.fragment),s=G(),n=new De(!1),i=ie(),this.h()},l(l){x($.$$.fragment,l),s=K(l),n=Ee(l,!1),i=ie(),this.h()},h(){n.a=i},m(l,o){ee($,l,o),q(l,s,o),n.m(r[2],l,o),q(l,i,o),f=!0},p:se,i(l){f||(W($.$$.fragment,l),f=!0)},o(l){j($.$$.fragment,l),f=!1},d(l){l&&(b(s),b(i),n.d()),te($,l)}}}function Ht(r){let $,s,n,i=`

${m("import")} ${e("{")} ${t("writable")}, ${m("type")} ${t("Writable")} ${e("}")} ${m("from")} ${y("svelte/store")}

${m("export")} ${d("const")} ${t("todo$",!0)}: ${V("Writable")}${e("<")}${V("string")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${m("export")} ${d("const")} ${t("todoTf$",!0)}: ${V("Writable")}${e("<")}${V("number")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${m("export")} ${d("const")} ${t("done$",!0)}: ${V("Writable")}${e("<")}${V("string")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${m("export")} ${d("const")} ${t("doneTf$",!0)}: ${V("Writable")}${e("<")}${V("number")}${e("[]",1)}${e(">")} = ${T("writable")}${e("(")}${e("[]",1)}${e(")")}
${m("export")} ${d("const")} ${t("transition$",!0)} = ${T("writable")}${e("(")}${d("false")}${e(")")}
${m("export")} ${d("const")} ${t("drag$",!0)}: ${V("Writable")}${e("<")}${e("{",1)} ${t("type")}: ${y("todo")} | ${y("done")}, ${t("index")}: ${V("number")} ${e("}",1)} | ${d("null")}${e(">")} = ${T("writable")}${e("(")}${d("null")}${e(")")}`,f,l;return $=new rt({props:{name:"store"}}),{c(){X($.$$.fragment),s=G(),n=new De(!1),f=ie(),this.h()},l(o){x($.$$.fragment,o),s=K(o),n=Ee(o,!1),f=ie(),this.h()},h(){n.a=f},m(o,a){ee($,o,a),q(o,s,a),n.m(i,o,a),q(o,f,a),l=!0},p:se,i(o){l||(W($.$$.fragment,o),l=!0)},o(o){j($.$$.fragment,o),l=!1},d(o){o&&(b(s),b(f),n.d()),te($,o)}}}function It(r){let $,s,n,i,f,l,o,a,p,D,v,g,A,Y;return $=new ke({props:{is_code:!0,$$slots:{default:[wt]},$$scope:{ctx:r}}}),f=new ke({props:{is_code:!0,$$slots:{default:[Tt]},$$scope:{ctx:r}}}),p=new ke({props:{is_code:!0,$$slots:{default:[kt]},$$scope:{ctx:r}}}),A=new ke({props:{is_code:!0,$$slots:{default:[Ht]},$$scope:{ctx:r}}}),{c(){X($.$$.fragment),s=G(),n=F("div"),i=G(),X(f.$$.fragment),l=G(),o=F("div"),a=G(),X(p.$$.fragment),D=G(),v=F("div"),g=G(),X(A.$$.fragment),this.h()},l(h){x($.$$.fragment,h),s=K(h),n=N(h,"DIV",{class:!0}),Z(n).forEach(b),i=K(h),x(f.$$.fragment,h),l=K(h),o=N(h,"DIV",{class:!0}),Z(o).forEach(b),a=K(h),x(p.$$.fragment,h),D=K(h),v=N(h,"DIV",{class:!0}),Z(v).forEach(b),g=K(h),x(A.$$.fragment,h),this.h()},h(){z(n,"class","h=1"),z(o,"class","h=1"),z(v,"class","h=1")},m(h,L){ee($,h,L),q(h,s,L),q(h,n,L),q(h,i,L),ee(f,h,L),q(h,l,L),q(h,o,L),q(h,a,L),ee(p,h,L),q(h,D,L),q(h,v,L),q(h,g,L),ee(A,h,L),Y=!0},p(h,[L]){const Q={};L&8&&(Q.$$scope={dirty:L,ctx:h}),$.$set(Q);const R={};L&8&&(R.$$scope={dirty:L,ctx:h}),f.$set(R);const I={};L&8&&(I.$$scope={dirty:L,ctx:h}),p.$set(I);const J={};L&8&&(J.$$scope={dirty:L,ctx:h}),A.$set(J)},i(h){Y||(W($.$$.fragment,h),W(f.$$.fragment,h),W(p.$$.fragment,h),W(A.$$.fragment,h),Y=!0)},o(h){j($.$$.fragment,h),j(f.$$.fragment,h),j(p.$$.fragment,h),j(A.$$.fragment,h),Y=!1},d(h){h&&(b(s),b(n),b(i),b(l),b(o),b(a),b(D),b(v),b(g)),te($,h),te(f,h),te(p,h),te(A,h)}}}function Ct(r){const $=`${U("script",` ${t("lang")}=${y("ts")}`,`
${m("import")} ${t("DragItem")} ${m("from")} ${y("parts/ref/utils/drag-and-drop/TodoListExample/DragItem.svelte")}
${m("import")} ${t("DragItemPlaceHolder")} ${m("from")} ${y("parts/ref/utils/drag-and-drop/TodoListExample/DragItemPlaceHolder.svelte")}
${m("import")} ${e("{")} ${t("done$")}, ${t("doneTf$")}, ${t("drag$")}, ${t("todo$")}, ${t("todoTf$")}, ${t("transition$")} ${e("}")} ${m("from")} ${y("parts/ref/store")}
${m("import")} ${e("{")} ${t("onDestroy")}, ${t("onMount")} ${e("}")} ${m("from")} ${y("svelte")}
${m("import")} ${e("{")} ${t("DragContainer")} ${e("}")} ${m("from")} ${y("lube-ui")}

${d("const")} ${t("todoHeights",!0)}: ${V("number")}${e("[]")} = ${e("[]")}
${d("const")} ${t("doneHeights",!0)}: ${V("number")}${e("[]")} = ${e("[]")}
${d("let")} ${t("isDragging")}: ${V("boolean")}
${d("let")} ${T("setDragElement")}: ${e("(")}${t("clientX")}: ${V("number")}, ${t("clientY")}: ${V("number")}, ${t("drag")}: ${V("HTMLElement")}${e(")")} ${d("=>")} ${V("any")}

${d("const")} ${T("handle_dragend")} = ${e("()")} ${d("=>")} ${e("{")}
	${d("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${d("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${t("$drag$")} = ${d("null")}
	${T("re_ordering")}${e("(",1)}${t("from",!0)}, ${t("type",!0)}${e(")",1)}
${e("}")}
${d("const")} ${T("transfer_list")} = ${e("(")}${t("index")}: ${V("number")}${e(")")} ${d("=>")} ${e("{")}
	${d("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${d("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${d("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type",!0)} === ${y("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${m("if")} ${e("(",1)}${t("from",!0)} < ${t("index")}${e(") {",1)}
		${m("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${m("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${S(0)}
			${e("}")}
		${e("}",2)} ${m("else")} ${e("{",2)}
			${m("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = -${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)} ${m("else")} ${e("{",1)}
		${m("if")} ${e("(",2)}${t("transforms",!0)}${e("[")}${t("index")}${e("]")}${e(") {",2)}
			${m("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; ${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}--${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} += ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${S(0)}
			${e("}")}
		${e("}",2)} ${m("else")} ${e("{",2)}
			${m("for")} ${e("(")}${d("let")} ${t("i")} = ${t("index")}; !${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)}; ${t("i")}++${e(") {")}
				${t("transforms",!0)}${e("[",1)}${t("from",!0)}${e("]",1)} -= ${t("heights",!0)}${e("[",1)}${t("i")}${e("]",1)}
				${t("transforms",!0)}${e("[",1)}${t("i")}${e("]",1)} = ${t("heights",!0)}${e("[",1)}${t("from",!0)}${e("]",1)}
			${e("}")}
		${e("}",2)}
	${e("}",1)}
	${e("(",1)}${t("type",!0)} === ${y("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${T("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${d("const")} ${T("move_item")} = ${e("(")}${t("index")}: ${V("number")}${e(")")} ${d("=>")} ${e("{")}
	${d("const")} ${t("from",!0)} = ${t("$drag$")}!.${t("index")}
	${d("const")} ${t("type",!0)} = ${t("$drag$")}!.${t("type")}
	${m("if")} ${e("(",1)}${t("from",!0)} === ${y("todo")}${e(") {",1)}
		${d("const")} ${t("before",!0)} = ${t("$todo$")}.${T("slice")}${e("()",2)}
		${d("const")} ${t("after",!0)} = ${t("$done$")}.${T("slice")}${e("()",2)}
		${t("after",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
		${t("$todo$")} = ${t("before",!0)}
		${t("$done$")} = ${t("after",!0)}
		${t("$todoTf$")} = ${d("new")} ${V("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$doneTf$")} = ${d("new")} ${V("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${y("done")}, ${t("index: index")} ${e("}",2)}
		${t("doneHeights",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("todoHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("todoHeights",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
	${e("}",1)} ${m("else")} ${e("{",1)}
		${d("const")} ${t("before",!0)} = ${t("$done$")}.${T("slice")}${e("()",2)}
		${d("const")} ${t("after",!0)} = ${t("$todo$")}.${T("slice")}${e("()",2)}
		${t("after",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("before",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("before",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
		${t("$done$")} = ${t("before",!0)}
		${t("$todo$")} = ${t("after",!0)}
		${t("$doneTf$")} = ${d("new")} ${V("Array")}${e("(",2)}${t("before",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$todoTf$")} = ${d("new")} ${V("Array")}${e("(",2)}${t("after",!0)}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${S(0)}${e(")",2)}
		${t("$drag$")} = ${e("{",2)} ${t("type:")} ${y("todo")}, ${t("index: index")} ${e("}",2)}
		${t("todoHeights",!0)}.${T("splice")}${e("(",2)}${t("index")}, ${S(0)}, ${t("doneHeights",!0)}${e("[")}${t("from",!0)}${e("]")}${e(")",2)}
		${t("doneHeights",!0)}.${T("splice")}${e("(",2)}${t("from",!0)}, ${S(1)}${e(")",2)}
	${e("}",1)}
${e("}")}
${d("const")} ${T("re_ordering")} = ${e("(")}${t("from")}: ${V("number")}, ${t("type")}: ${V("string")}${e(")")} ${d("=>")} ${e("{")}
	${d("const")} ${t("transforms",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${y("todo")} ? ${t("$todoTf$")} : ${t("$doneTf$")} ${e(")",2)}${e("]",1)}
	${m("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} === ${S(0)}${e(") {",1)}
		${m("return")}
	${e("}",1)}
	${d("const")} ${t("list",!0)} = ${e("[",1)}...${e("(",2)}${t("type")} === ${y("todo")} ? ${t("$todo$")} : ${t("$done$")} ${e(")",2)}${e("]",1)}
	${d("const")} ${t("temp",!0)} = ${t("list",!0)}${e("[",1)}${t("from")}${e("]",1)}
	${d("let")} ${t("i")}
	${m("if")} ${e("(",1)}${t("transforms",!0)}${e("[",2)}${t("from")}${e("]",2)} < ${S(0)}${e(") {",1)}
		${m("for")} ${e("(",2)}${t("i")} = ${t("from")} - ${S(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}--${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} + ${S(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${S(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} + ${S(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)} ${m("else")} ${e("{",1)}
		${m("for")} ${e("(",2)}${t("i")} = ${t("from")} + ${S(1)}; ${t("transforms",!0)}${e("[")}${t("i")}${e("]")}; ${t("i")}++${e(") {",2)}
			${t("list",!0)}${e("[")}${t("i")} - ${S(1)}${e("]")} = ${t("list",!0)}${e("[")}${t("i")}${e("]")}
			${t("transforms",!0)}${e("[")}${t("i")}${e("]")} = ${S(0)}
		${e("}",2)}
		${t("list",!0)}${e("[",2)}${t("i")} - ${S(1)}${e("]",2)} = ${t("temp",!0)}
	${e("}",1)}
	${t("transforms",!0)}${e("[",1)}${t("from")}${e("]",1)} = ${S(0)}
	${t("$transition$")} = ${d("false")}
	,${e("(",1)}${t("type")} === ${y("todo")} ? ${t("todo$",!0)} : ${t("done$",!0)} ${e(")",1)}.${T("set")}${e("(",1)}${t("list",!0)}${e(")",1)}
	,${e("(",1)}${t("type")} === ${y("todo")} ? ${t("todoTf$",!0)} : ${t("doneTf$",!0)} ${e(")",1)}.${T("set")}${e("(",1)}${t("transforms",!0)}${e(")",1)}
${e("}")}
${T("onMount")}${e("(")}${e("()",1)} ${d("=>")} ${e("{",1)}
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
	${t("$todoTf$")} = ${d("new")} ${V("Array")}${e("(",2)}${t("$todo$")}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${S(0)}${e(")",2)}
	${t("$todo$")} = ${e("[",2)} ${y("Task Z")}, ${y("")} ${e("]",2)}
	${t("$doneTf$")} = ${d("new")} ${V("Array")}${e("(",2)}${t("$done$")}.${t("length")}${e(")",2)}.${T("fill")}${e("(",2)}${S(0)}${e(")",2)}
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

${U("DragContainer",` ${m("bind")}:${t("isDragging")}
		${m("bind")}:${T("setDragElement")}
		${m("on")}:${V("dragend")}=${e("{")}${T("handle_dragend")}${e("}")}`,`
	${U("div",` ${t("class")}=${y("flex flex-wrap=wrap")}`,`
		${U("div",` ${t("class")}=${y("flex column")}`,`
			${U("span",` ${t("class")}=${y("fs=2 bold")}`,"To do")}
			${U("div",` ${t("class")}=${y("h=.5")}`,"")}
			${e("{")}#${m("each")} ${t("$todo$")} ${m("as")} ${t("v")}, ${t("i")}${e("}")}
			${U("DragItem",` ${m("bind")}:${t("clientHeight")}=${e("{")}${t("todoHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${T("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$todo$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$todoTf$")}${e("}")}
					${t("list")}=${y("todo")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${T("transfer_list")}${e("}")}
					${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${m("each")}${e("}")}
			${e("{")}#${m("if")} ${t("$todo$")}.${t("length")} === ${S(1)}${e("}")}
			${U("DragItemPlaceHolder",` ${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${m("if")}${e("}")}
		`)}
		${U("div",` ${t("class")}=${y("w=5 h=5")}`,"")}
		${U("div",` ${t("class")}=${y("flex column")}`,`
			${U("span",` ${t("class")}=${y("fs=2 bold")}`,"Done")}
			${U("div",` ${t("class")}=${y("h=.5")}`,"")}
			${e("{")}#${m("each")} ${t("$done$")} ${m("as")} ${t("v")}, ${t("i")}${e("}")}
			${U("DragItem",` ${m("bind")}:${t("clientHeight")}=${e("{")}${t("doneHeights",!0)}${e("[",1)}${t("i")}${e("]",1)}${e("}")}
					${e("{")}${T("setDragElement")}${e("}")}
					${t("list")}=${e("{")}${t("$done$")}${e("}")}
					${t("transforms")}=${e("{")}${t("$doneTf$")}${e("}")}
					${t("list")}=${y("done")}
					${t("index")}=${e("{")}${t("i")}${e("}")}
					${e("{")}${T("transfer_list")}${e("}")}
					${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${m("each")}${e("}")}
			${e("{")}#${m("if")} ${t("$done$")}.${t("length")} === ${S(1)}${e("}")}
			${U("DragItemPlaceHolder",` ${e("{")}${T("move_item")}${e("}")}`,!1)}
			${e("{")}/${m("if")}${e("}")}
		`)}
	`)}
`)}`,s=`

${U("script",` ${t("lang")}=${y("ts")}`,`
${m("import")} ${e("{")} ${t("Dragable")} ${e("}")} ${m("from")} ${y("lube-ui")}
${m("import")} ${e("{")} ${t("drag$")}, ${t("transition$")} ${e("}")} ${m("from")} ${y("parts/ref/store")}

${m("export")} ${d("let")} ${t("list")}: ${V("string")}${e("[]")}
${m("export")} ${d("let")} ${t("transforms")}: ${V("number")}${e("[]")}
${m("export")} ${d("let")} ${t("type")}: ${y("todo")} | ${y("done")}
${m("export")} ${d("let")} ${t("index")}: ${V("number")}
${m("export")} ${d("let")} ${t("clientHeight")}: ${V("number")}
${m("export")} ${d("let")} ${t("duration")} = ${S(400)}
${m("export")} ${d("let")} ${T("setDragElement")}: ${e("(")}${t("clientX")}: ${V("number")}, ${t("clientY")}: ${V("number")}, ${t("drag")}: ${V("HTMLElement")}${e(")")} ${d("=>")} ${V("any")}
${m("export")} ${d("let")} ${T("transfer_list")}: ${e("(")}${t("index")}: ${V("number")}${e(")")} ${d("=>")} ${V("any")}
${m("export")} ${d("let")} ${T("move_item")}: ${e("(")}${t("index")}: ${V("number")}${e(")")} ${d("=>")} ${V("any")}

${d("const")} ${T("handleClick")} = ${e("()")} ${d("=>")} ${e("{")}
	${T("alert")}${e("(",1)}${e("(",2)}${t("event")}.${t("target")} ${m("as")} ${V("HTMLElement")}${e(")",2)}.${t("textContent")}${e(")",1)}
${e("}")}
${d("const")} ${T("handle_dragenter")} = ${e("()")} ${d("=>")} ${e("{")}
	${d("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${d("const")} ${t("t",!0)} = ${t("$drag$")}?.${t("type")}
	${m("if")} ${e("(",1)}${t("i",!0)} === ${d("void")} ${S(0)} || ${t("i",!0)} === ${t("index")} && ${t("t",!0)} === ${t("type")}${e(") {",1)}
		${m("return")}
	${e("}",1)}
	${m("if")} ${e("(",1)}${t("t",!0)} === ${t("type")}${e(") {",1)}
		${T("transfer_list")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)} ${m("else")} ${e("{",1)}
		${T("move_item")}${e("(",2)}${t("index")}${e(")",2)}
	${e("}",1)}
${e("}")}
${d("const")} ${T("handle_dragstart")} = ${e("()")} ${d("=>")} ${e("{")}
	${t("$drag$")} = ${e("{",1)} ${t("type: type")}, ${t("index: index")} ${e("}",1)}
	${t("$transition$")} = ${d("true")}
${e("}")}
`)}

${U("Dragable",` ${m("on")}:${V("dragstart")}=${e("{")}${T("handle_dragstart")}${e("}")}
		${t("delay")}=${e("{")}${S(300)}${e("}")}
		${e("{")}${T("setDragElement")}${e("}")}`,`
	${U("div",` ${m("bind")}:${t("clientHeight")}
			${t("class")}=${y('"w=6 ol=.1_solid ta=center fs=2 cs=pointer tf=translateY(',!1)}${e("{",2)}${t("transforms")}${e("[")}${t("index")}${e("]")}${e("}",2)}${y("px)",!1)}
			${e("{",2)}${t("$transition$")} ? ${y("tt=")} + ${t("duration")} + ${y("ms")} : ${y("")}${e("}",2)}
			${e("{",2)}${t("$drag$")}?.${t("index")} === ${t("index")} && ${t("$drag$")}?.${t("type")} === ${t("type")} ? ${y(" opacity=.2 ol=.2_solid_#aaa")} : ${y("")}${e("}",2)}
			${e("{",2)}!${t("list")}${e("[")}${t("index")}${e("]")} ? ${y("none")} : ${y("")}${e("}",2)}
			${m("on")}:${V("dragenter")}=${e("{")}${T("handle_dragenter")}${e("}")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)}${e("}")}
	`)}
	${U("div",` ${t("slot")}=${y("drag")}
			${m("bind")}:${t("clientHeight")}
			${t("class")}=${y("ta=center fs=2.5 cs=move c=#000 @dark@c=#fff")}`,`
		${e("{")}${t("list")}${e("[",1)}${t("index")}${e("]",1)} + ${y("!!")}${e("}")}
	`)}
`)}`,n=`

${U("script",` ${t("lang")}=${y("ts")}`,`
${m("import")} ${e("{")} ${t("drag$")} ${e("}")} ${m("from")} ${y("parts/ref/store")}

${m("export")} ${d("let")} ${T("move_item")}: ${e("(")}${t("index")}: ${V("number")}${e(")")} ${d("=>")} ${V("any")}

${d("const")} ${T("handle_dragenter")} = ${e("()")} ${d("=>")} ${e("{")}
	${d("const")} ${t("i",!0)} = ${t("$drag$")}?.${t("index")}
	${m("if")} ${e("(",1)}${t("i",!0)} === ${d("void")} ${S(0)}${e(") {",1)}
		${m("return")}
	${e("}",1)}
	${T("move_item")}${e("(",2)}${S(0)}${e(")",2)}
${e("}")}
`)}

${U("div",` ${t("style")}=${y("user-select:none")}
		${t("class")}=${y("w=6 ol=.1_dashed ta=center fs=2 cs=pointer")}
		${m("on")}:${V("dragenter")}=${e("{")}${T("handle_dragenter")}${e("}")}`,`
	Empty
`)}`;return[$,s,n]}class Vt extends fe{constructor($){super(),ue(this,$,Ct,It,ae,{})}}function Ne(r,$,s){const n=r.slice();return n[18]=$[s],n[19]=$,n[20]=s,n}function je(r,$,s){const n=r.slice();return n[18]=$[s],n[21]=$,n[20]=s,n}function Ye(r){let $,s,n;function i(l){r[11](l,r[20])}let f={setDragElement:r[3],list:r[7],transforms:r[6],type:"todo",index:r[20],transfer_list:r[9],move_item:r[10]};return r[0][r[20]]!==void 0&&(f.clientHeight=r[0][r[20]]),$=new xe({props:f}),oe.push(()=>Ve($,"clientHeight",i)),{c(){X($.$$.fragment)},l(l){x($.$$.fragment,l)},m(l,o){ee($,l,o),n=!0},p(l,o){r=l;const a={};o&8&&(a.setDragElement=r[3]),o&128&&(a.list=r[7]),o&64&&(a.transforms=r[6]),!s&&o&1&&(s=!0,a.clientHeight=r[0][r[20]],Ce(()=>s=!1)),$.$set(a)},i(l){n||(W($.$$.fragment,l),n=!0)},o(l){j($.$$.fragment,l),n=!1},d(l){te($,l)}}}function Ge(r){let $,s;return $=new et({props:{move_item:r[10]}}),{c(){X($.$$.fragment)},l(n){x($.$$.fragment,n)},m(n,i){ee($,n,i),s=!0},p:se,i(n){s||(W($.$$.fragment,n),s=!0)},o(n){j($.$$.fragment,n),s=!1},d(n){te($,n)}}}function Ke(r){let $,s,n;function i(l){r[12](l,r[20])}let f={setDragElement:r[3],list:r[5],transforms:r[4],type:"done",index:r[20],transfer_list:r[9],move_item:r[10]};return r[1][r[20]]!==void 0&&(f.clientHeight=r[1][r[20]]),$=new xe({props:f}),oe.push(()=>Ve($,"clientHeight",i)),{c(){X($.$$.fragment)},l(l){x($.$$.fragment,l)},m(l,o){ee($,l,o),n=!0},p(l,o){r=l;const a={};o&8&&(a.setDragElement=r[3]),o&32&&(a.list=r[5]),o&16&&(a.transforms=r[4]),!s&&o&2&&(s=!0,a.clientHeight=r[1][r[20]],Ce(()=>s=!1)),$.$set(a)},i(l){n||(W($.$$.fragment,l),n=!0)},o(l){j($.$$.fragment,l),n=!1},d(l){te($,l)}}}function Je(r){let $,s;return $=new et({props:{move_item:r[10]}}),{c(){X($.$$.fragment)},l(n){x($.$$.fragment,n)},m(n,i){ee($,n,i),s=!0},p:se,i(n){s||(W($.$$.fragment,n),s=!0)},o(n){j($.$$.fragment,n),s=!1},d(n){te($,n)}}}function At(r){let $,s,n,i="To do",f,l,o,a,p,D,v,g,A,Y="Done",h,L,Q,R,I,J=Te(r[7]),c=[];for(let _=0;_<J.length;_+=1)c[_]=Ye(je(r,J,_));const P=_=>j(c[_],1,1,()=>{c[_]=null});let E=r[7].length===1&&Ge(r),H=Te(r[5]),u=[];for(let _=0;_<H.length;_+=1)u[_]=Ke(Ne(r,H,_));const w=_=>j(u[_],1,1,()=>{u[_]=null});let C=r[5].length===1&&Je(r);return{c(){$=F("div"),s=F("div"),n=F("span"),n.textContent=i,f=G(),l=F("div"),o=G();for(let _=0;_<c.length;_+=1)c[_].c();a=G(),E&&E.c(),p=G(),D=F("div"),v=G(),g=F("div"),A=F("span"),A.textContent=Y,h=G(),L=F("div"),Q=G();for(let _=0;_<u.length;_+=1)u[_].c();R=G(),C&&C.c(),this.h()},l(_){$=N(_,"DIV",{class:!0});var B=Z($);s=N(B,"DIV",{class:!0});var k=Z(s);n=N(k,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(n)!=="svelte-2gma2k"&&(n.textContent=i),f=K(k),l=N(k,"DIV",{class:!0}),Z(l).forEach(b),o=K(k);for(let de=0;de<c.length;de+=1)c[de].l(k);a=K(k),E&&E.l(k),k.forEach(b),p=K(B),D=N(B,"DIV",{class:!0}),Z(D).forEach(b),v=K(B),g=N(B,"DIV",{class:!0});var $e=Z(g);A=N($e,"SPAN",{class:!0,"data-svelte-h":!0}),Ie(A)!=="svelte-ovcjna"&&(A.textContent=Y),h=K($e),L=N($e,"DIV",{class:!0}),Z(L).forEach(b),Q=K($e);for(let de=0;de<u.length;de+=1)u[de].l($e);R=K($e),C&&C.l($e),$e.forEach(b),B.forEach(b),this.h()},h(){z(n,"class","fs=2 bold"),z(l,"class","h=.5"),z(s,"class","flex column"),z(D,"class","w=5 h=5"),z(A,"class","fs=2 bold"),z(L,"class","h=.5"),z(g,"class","flex column"),z($,"class","flex flex-wrap=wrap")},m(_,B){q(_,$,B),M($,s),M(s,n),M(s,f),M(s,l),M(s,o);for(let k=0;k<c.length;k+=1)c[k]&&c[k].m(s,null);M(s,a),E&&E.m(s,null),M($,p),M($,D),M($,v),M($,g),M(g,A),M(g,h),M(g,L),M(g,Q);for(let k=0;k<u.length;k+=1)u[k]&&u[k].m(g,null);M(g,R),C&&C.m(g,null),I=!0},p(_,B){if(B&1737){J=Te(_[7]);let k;for(k=0;k<J.length;k+=1){const $e=je(_,J,k);c[k]?(c[k].p($e,B),W(c[k],1)):(c[k]=Ye($e),c[k].c(),W(c[k],1),c[k].m(s,a))}for(ye(),k=J.length;k<c.length;k+=1)P(k);we()}if(_[7].length===1?E?(E.p(_,B),B&128&&W(E,1)):(E=Ge(_),E.c(),W(E,1),E.m(s,null)):E&&(ye(),j(E,1,1,()=>{E=null}),we()),B&1594){H=Te(_[5]);let k;for(k=0;k<H.length;k+=1){const $e=Ne(_,H,k);u[k]?(u[k].p($e,B),W(u[k],1)):(u[k]=Ke($e),u[k].c(),W(u[k],1),u[k].m(g,R))}for(ye(),k=H.length;k<u.length;k+=1)w(k);we()}_[5].length===1?C?(C.p(_,B),B&32&&W(C,1)):(C=Je(_),C.c(),W(C,1),C.m(g,null)):C&&(ye(),j(C,1,1,()=>{C=null}),we())},i(_){if(!I){for(let B=0;B<J.length;B+=1)W(c[B]);W(E);for(let B=0;B<H.length;B+=1)W(u[B]);W(C),I=!0}},o(_){c=c.filter(Boolean);for(let B=0;B<c.length;B+=1)j(c[B]);j(E),u=u.filter(Boolean);for(let B=0;B<u.length;B+=1)j(u[B]);j(C),I=!1},d(_){_&&b($),We(c,_),E&&E.d(),We(u,_),C&&C.d()}}}function Lt(r){let $,s,n,i,f,l,o,a;function p(g){r[13](g)}function D(g){r[14](g)}let v={$$slots:{default:[At]},$$scope:{ctx:r}};return r[2]!==void 0&&(v.isDragging=r[2]),r[3]!==void 0&&(v.setDragElement=r[3]),s=new ut({props:v}),oe.push(()=>Ve(s,"isDragging",p)),oe.push(()=>Ve(s,"setDragElement",D)),s.$on("dragend",r[8]),o=new Vt({}),{c(){$=F("div"),X(s.$$.fragment),f=G(),l=F("div"),X(o.$$.fragment),this.h()},l(g){$=N(g,"DIV",{class:!0});var A=Z($);x(s.$$.fragment,A),A.forEach(b),f=K(g),l=N(g,"DIV",{});var Y=Z(l);x(o.$$.fragment,Y),Y.forEach(b),this.h()},h(){z($,"class","flex jc=center")},m(g,A){q(g,$,A),ee(s,$,null),q(g,f,A),q(g,l,A),ee(o,l,null),a=!0},p(g,A){const Y={};A&4194555&&(Y.$$scope={dirty:A,ctx:g}),!n&&A&4&&(n=!0,Y.isDragging=g[2],Ce(()=>n=!1)),!i&&A&8&&(i=!0,Y.setDragElement=g[3],Ce(()=>i=!1)),s.$set(Y)},i(g){a||(W(s.$$.fragment,g),W(o.$$.fragment,g),a=!0)},o(g){j(s.$$.fragment,g),j(o.$$.fragment,g),a=!1},d(g){g&&(b($),b(f),b(l)),te(s),te(o)}}}function Bt(r){let $,s;return $=new lt({props:{$$slots:{default:[Lt]},$$scope:{ctx:r}}}),{c(){X($.$$.fragment)},l(n){x($.$$.fragment,n)},m(n,i){ee($,n,i),s=!0},p(n,[i]){const f={};i&4194559&&(f.$$scope={dirty:i,ctx:n}),$.$set(f)},i(n){s||(W($.$$.fragment,n),s=!0)},o(n){j($.$$.fragment,n),s=!1},d(n){te($,n)}}}function Pt(r,$,s){let n,i,f,l,o,a;re(r,le,c=>s(15,n=c)),re(r,pe,c=>s(16,i=c)),re(r,ce,c=>s(4,f=c)),re(r,ge,c=>s(5,l=c)),re(r,me,c=>s(6,o=c)),re(r,he,c=>s(7,a=c));const p=[],D=[];let v,g;const A=()=>{const c=n==null?void 0:n.index,P=n==null?void 0:n.type;O(le,n=null,n),c&&P&&L(c,P)},Y=c=>{const P=(n==null?void 0:n.index)||0,E=n==null?void 0:n.type,H=[...E==="todo"?o:f],u=E==="todo"?p:D;if(P<c)if(H[c])for(let w=c;H[w];w++)H[P]-=u[w],H[w]=0;else for(let w=c;!H[w];w--)H[P]+=u[w],H[w]=-u[P];else if(H[c])for(let w=c;H[w];w--)H[P]+=u[w],H[w]=0;else for(let w=c;!H[w];w++)H[P]-=u[w],H[w]=u[P];(E==="todo"?me:ce).set(H)},h=c=>{const P=(n==null?void 0:n.index)||0;if((n==null?void 0:n.type)==="todo"){const H=[...a],u=[...l];u.splice(c,0,H[P]),H.splice(P,1),O(he,a=H,a),O(ge,l=u,l),O(me,o=new Array(H.length).fill(0),o),O(ce,f=new Array(u.length).fill(0),f),O(le,n={type:"done",index:c},n),D.splice(c,0,p[P]),p.splice(P,1)}else{const H=[...l],u=[...a];u.splice(c,0,H[P]),H.splice(P,1),O(ge,l=H,l),O(he,a=u,a),O(ce,f=new Array(H.length).fill(0),f),O(me,o=new Array(u.length).fill(0),o),O(le,n={type:"todo",index:c},n),p.splice(c,0,D[P]),D.splice(P,1)}},L=(c,P)=>{const E=[...P==="todo"?o:f];if(E[c]===0)return;const H=[...P==="todo"?a:l],u=H[c];let w;if(E[c]<0){for(w=c-1;E[w];w--)H[w+1]=H[w],E[w]=0;H[w+1]=u}else{for(w=c+1;E[w];w++)H[w-1]=H[w],E[w]=0;H[w-1]=u}E[c]=0,O(pe,i=!1,i),(P==="todo"?he:ge).set(H),(P==="todo"?me:ce).set(E)};Xe(()=>{O(he,a=["Task A","Task B","Task C","Task D","Task E","Task F","Task G","Task H","Task I","Task J","Task K","Task L",""],a),O(me,o=new Array(a.length).fill(0),o),O(ge,l=["Task Z",""],l),O(ce,f=new Array(l.length).fill(0),f)}),nt(()=>{O(he,a=[],a),O(me,o=[],o),O(ge,l=[],l),O(ce,f=[],f),O(pe,i=!1,i),O(le,n=null,n)});function Q(c,P){r.$$.not_equal(p[P],c)&&(p[P]=c,s(0,p))}function R(c,P){r.$$.not_equal(D[P],c)&&(D[P]=c,s(1,D))}function I(c){v=c,s(2,v)}function J(c){g=c,s(3,g)}return[p,D,v,g,f,l,o,a,A,Y,h,Q,R,I,J]}class Rt extends fe{constructor($){super(),ue(this,$,Pt,Bt,ae,{})}}function qt(r){let $;return{c(){$=ve("Drag and Drop")},l(s){$=be(s,"Drag and Drop")},m(s,n){q(s,$,n)},d(s){s&&b($)}}}function St(r){let $;return{c(){$=ve(".")},l(s){$=be(s,".")},m(s,n){q(s,$,n)},d(s){s&&b($)}}}function Wt(r){let $,s,n,i,f,l,o,a,p,D,v,g,A="Lube UI may be released someday",Y,h,L,Q,R,I,J,c,P;return D=new ze({props:{$$slots:{default:[qt]},$$scope:{ctx:r}}}),h=new ze({props:{classs:"v=hidden",$$slots:{default:[St]},$$scope:{ctx:r}}}),I=new Rt({}),{c(){$=G(),s=F("header"),n=F("div"),i=F("div"),f=F("div"),l=G(),o=F("div"),a=F("div"),p=G(),X(D.$$.fragment),v=G(),g=F("span"),g.textContent=A,Y=G(),X(h.$$.fragment),L=G(),Q=F("div"),R=F("article"),X(I.$$.fragment),J=G(),c=F("div"),this.h()},l(E){st("svelte-qqqqz6",document.head).forEach(b),$=K(E),s=N(E,"HEADER",{class:!0});var u=Z(s);n=N(u,"DIV",{class:!0});var w=Z(n);i=N(w,"DIV",{class:!0});var C=Z(i);f=N(C,"DIV",{class:!0}),Z(f).forEach(b),l=K(C),o=N(C,"DIV",{class:!0});var _=Z(o);a=N(_,"DIV",{class:!0}),Z(a).forEach(b),p=K(_),x(D.$$.fragment,_),v=K(_),g=N(_,"SPAN",{"data-svelte-h":!0}),Ie(g)!=="svelte-cpphmj"&&(g.textContent=A),Y=K(_),x(h.$$.fragment,_),_.forEach(b),C.forEach(b),w.forEach(b),u.forEach(b),L=K(E),Q=N(E,"DIV",{class:!0});var B=Z(Q);R=N(B,"ARTICLE",{class:!0});var k=Z(R);x(I.$$.fragment,k),k.forEach(b),B.forEach(b),J=K(E),c=N(E,"DIV",{class:!0}),Z(c).forEach(b),this.h()},h(){document.title="Drag and Drop - CSS Lube",z(f,"class","w=3"),z(a,"class","h=2"),z(o,"class","fg=1 fsk=1"),z(i,"class","flex w=100% "+Me.$common.background_conic),z(n,"class","flex br=1.5 o=hidden "+Me.$common.background_grid),z(s,"class","m=.5"),z(R,"class","m=2_1 @md@m=2"),z(Q,"class","m=.5"),z(c,"class","h=2")},m(E,H){q(E,$,H),q(E,s,H),M(s,n),M(n,i),M(i,f),M(i,l),M(i,o),M(o,a),M(o,p),ee(D,o,null),M(o,v),M(o,g),M(o,Y),ee(h,o,null),r[1](s),q(E,L,H),q(E,Q,H),M(Q,R),ee(I,R,null),q(E,J,H),q(E,c,H),P=!0},p(E,[H]){const u={};H&4&&(u.$$scope={dirty:H,ctx:E}),D.$set(u);const w={};H&4&&(w.$$scope={dirty:H,ctx:E}),h.$set(w)},i(E){P||(W(D.$$.fragment,E),W(h.$$.fragment,E),W(I.$$.fragment,E),P=!0)},o(E){j(D.$$.fragment,E),j(h.$$.fragment,E),j(I.$$.fragment,E),P=!1},d(E){E&&(b($),b(s),b(L),b(Q),b(J),b(c)),te(D),te(h),r[1](null),te(I)}}}function zt(r,$,s){let n;Xe(()=>{var f;return(f=n.parentElement)==null?void 0:f.scroll(0,0)});function i(f){oe[f?"unshift":"push"](()=>{n=f,s(0,n)})}return[n,i]}class Ot extends fe{constructor($){super(),ue(this,$,zt,Wt,ae,{})}}export{Ot as component};
