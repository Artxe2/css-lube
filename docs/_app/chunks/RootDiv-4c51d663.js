import{D as kt,S as X,i as Z,s as tt,e as b,t as P,k as w,c as d,a as f,h as q,d as c,m as k,b as l,g as et,J as s,L as W,K as j,M as It,v as st,N as Y,O as F,P as Dt,w as mt,x as gt,Q as yt,y as Tt,R as Et,q as lt,o as ot,B as wt,F as xt,G as Mt,H as St,I as Ht}from"./vendor-db5e62c2.js";import{b as J}from"./paths-4b3c6e7e.js";const Q=kt(""),nt=kt(0);function At(a){let t,e,n,u,i,r,o,h,p,m,T,I,g,_,y,M,S,A,V,L;return{c(){t=b("div"),e=b("div"),n=b("button"),u=P("LIGHT"),r=w(),o=b("div"),h=w(),p=b("button"),m=P("DARK"),I=w(),g=b("div"),_=w(),y=b("button"),M=P("SYSTEM"),this.h()},l(D){t=d(D,"DIV",{class:!0});var E=f(t);e=d(E,"DIV",{class:!0});var x=f(e);n=d(x,"BUTTON",{class:!0});var N=f(n);u=q(N,"LIGHT"),N.forEach(c),r=k(x),o=d(x,"DIV",{class:!0}),f(o).forEach(c),h=k(x),p=d(x,"BUTTON",{class:!0});var B=f(p);m=q(B,"DARK"),B.forEach(c),I=k(x),g=d(x,"DIV",{class:!0}),f(g).forEach(c),_=k(x),y=d(x,"BUTTON",{class:!0});var $=f(y);M=q($,"SYSTEM"),$.forEach(c),x.forEach(c),E.forEach(c),this.h()},h(){l(n,"class",i=a[0]==="LIGHT"?R:O),l(o,"class","h=0.5"),l(p,"class",T=a[0]==="DARK"?R:O),l(g,"class","h=0.5"),l(y,"class",S=a[0]?O:R),l(e,"class",A="absolute flex column r=0 t=0 :hover/tt=top_.5s "+(a[0]?a[0]==="LIGHT"?"":":not(:hover)/t=-3":":not(:hover)/t=-6")),l(t,"class","relative w=6.25 h=2.5 top=0 o=hidden br=0.25 :hover/tt=.5s :hover/h=8.5 :hover/top=3")},m(D,E){et(D,t,E),s(t,e),s(e,n),s(n,u),s(e,r),s(e,o),s(e,h),s(e,p),s(p,m),s(e,I),s(e,g),s(e,_),s(e,y),s(y,M),V||(L=[W(n,"click",a[3]),W(p,"click",a[4]),W(y,"click",a[2])],V=!0)},p(D,[E]){E&1&&i!==(i=D[0]==="LIGHT"?R:O)&&l(n,"class",i),E&1&&T!==(T=D[0]==="DARK"?R:O)&&l(p,"class",T),E&1&&S!==(S=D[0]?O:R)&&l(y,"class",S),E&1&&A!==(A="absolute flex column r=0 t=0 :hover/tt=top_.5s "+(D[0]?D[0]==="LIGHT"?"":":not(:hover)/t=-3":":not(:hover)/t=-6"))&&l(e,"class",A)},i:j,o:j,d(D){D&&c(t),V=!1,It(L)}}}const O="bgc=--primary :hover/bgc=--primary-l w=6.25 h=2.5 br=0.25",R="bgc=--primary :hover/bgc=--primary-l w=6.25 h=2.5 br=0.25 fw=bold";function Lt(a,t,e){const n=h=>{Q.set(h),localStorage.setItem("THEME",h),window.instantCss()},u=()=>{localStorage.removeItem("THEME"),window.instantCss(),Q.set("")};let i;return st(()=>{Q.set(localStorage.getItem("THEME")),Q.subscribe(h=>e(0,i=h))}),[i,n,u,()=>n("LIGHT"),()=>n("DARK")]}class Vt extends X{constructor(t){super();Z(this,t,Lt,At,tt,{})}}function $t(a){let t,e,n,u,i,r,o=a[0][a[1]]+"",h,p,m,T,I;return{c(){t=b("div"),e=b("span"),n=w(),u=b("span"),i=w(),r=b("span"),h=w(),p=Y("svg"),m=Y("defs"),T=Y("filter"),I=Y("feColorMatrix"),this.h()},l(g){t=d(g,"DIV",{class:!0});var _=f(t);e=d(_,"SPAN",{class:!0});var y=f(e);y.forEach(c),n=k(_),u=d(_,"SPAN",{class:!0});var M=f(u);M.forEach(c),i=k(_),r=d(_,"SPAN",{class:!0});var S=f(r);S.forEach(c),h=k(_),p=F(_,"svg",{class:!0});var A=f(p);m=F(A,"defs",{});var V=f(m);T=F(V,"filter",{id:!0});var L=f(T);I=F(L,"feColorMatrix",{in:!0,type:!0,values:!0}),f(I).forEach(c),L.forEach(c),V.forEach(c),A.forEach(c),_.forEach(c),this.h()},h(){l(e,"class",a[4]),l(u,"class",a[5]),l(r,"class","static! opacity=0"),l(I,"in","SourceGraphic"),l(I,"type","matrix"),l(I,"values",`1 0 0 0 0\r
					  0 1 0 0 0\r
					  0 0 1 0 0\r
					  0 0 0 255 -140`),l(T,"id","ft"),l(p,"class","display=none"),l(t,"class","relative ft=url(#ft) w=100% ta=center fw=bold >span/absolute;w=100%;l=0;user-select=none")},m(g,_){et(g,t,_),s(t,e),e.innerHTML=a[2],s(t,n),s(t,u),u.innerHTML=a[3],s(t,i),s(t,r),r.innerHTML=o,s(t,h),s(t,p),s(p,m),s(m,T),s(T,I)},p(g,[_]){_&4&&(e.innerHTML=g[2]),_&16&&l(e,"class",g[4]),_&8&&(u.innerHTML=g[3]),_&32&&l(u,"class",g[5]),_&3&&o!==(o=g[0][g[1]]+"")&&(r.innerHTML=o)},i:j,o:j,d(g){g&&c(t)}}}function Nt(a,t,e){let{array:n=[]}=t,{longest:u=0}=t,i,r,o="tt=.5s ft=blur(0.5em)",h="tt=.5s ft=blur(0.5em)",p=0;return st(()=>{const m=()=>{++p==n.length&&(p=0),e(3,r=n[p]),e(4,o="tt=.5s ft=blur(0.5em)"),e(5,h="tt=.5s ft=blur(0px)"),setTimeout(()=>{e(2,i=n[p]),e(4,o="tt=0s ft=blur(0px)"),e(5,h="tt=0s ft=blur(0.5em)")},500),setTimeout(m,2e3)};e(2,i=n[p]),e(4,o="tt=.5s ft=blur(0px)"),setTimeout(()=>e(4,o="tt=.5s ft=blur(0px)"),500),setTimeout(m,1500)}),a.$$set=m=>{"array"in m&&e(0,n=m.array),"longest"in m&&e(1,u=m.longest)},[n,u,i,r,o,h]}class Gt extends X{constructor(t){super();Z(this,t,Nt,$t,tt,{array:0,longest:1})}}const Bt=()=>{const a=Dt("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},Ct={subscribe(a){return Bt().page.subscribe(a)}};function Ot(a){let t,e,n,u,i,r,o,h,p,m,T,I,g,_,y,M,S,A,V,L,D,E,x,N,B,$,C,G,ct,rt,U,z,K,at,it;return r=new Gt({props:{array:["easy","rapid","intuitive",'<span class="fv=small-caps">InstantCSS</span>'],longest:3}}),E=new Vt({}),{c(){t=b("div"),e=b("div"),n=w(),u=b("a"),i=b("button"),mt(r.$$.fragment),o=w(),h=b("div"),p=w(),m=b("a"),T=b("button"),I=P("Docs"),g=w(),_=b("div"),y=w(),M=b("a"),S=b("button"),A=P("Test"),V=w(),L=b("div"),D=w(),mt(E.$$.fragment),x=w(),N=b("div"),B=w(),$=b("a"),C=b("button"),G=b("img"),rt=w(),U=b("div"),this.h()},l(H){t=d(H,"DIV",{class:!0});var v=f(t);e=d(v,"DIV",{class:!0}),f(e).forEach(c),n=k(v),u=d(v,"A",{href:!0});var ut=f(u);i=d(ut,"BUTTON",{class:!0});var ft=f(i);gt(r.$$.fragment,ft),ft.forEach(c),ut.forEach(c),o=k(v),h=d(v,"DIV",{class:!0}),f(h).forEach(c),p=k(v),m=d(v,"A",{href:!0});var ht=f(m);T=d(ht,"BUTTON",{class:!0});var bt=f(T);I=q(bt,"Docs"),bt.forEach(c),ht.forEach(c),g=k(v),_=d(v,"DIV",{class:!0}),f(_).forEach(c),y=k(v),M=d(v,"A",{href:!0});var dt=f(M);S=d(dt,"BUTTON",{class:!0});var _t=f(S);A=q(_t,"Test"),_t.forEach(c),dt.forEach(c),V=k(v),L=d(v,"DIV",{class:!0}),f(L).forEach(c),D=k(v),gt(E.$$.fragment,v),x=k(v),N=d(v,"DIV",{class:!0}),f(N).forEach(c),B=k(v),$=d(v,"A",{href:!0});var vt=f($);C=d(vt,"BUTTON",{class:!0});var pt=f(C);G=d(pt,"IMG",{class:!0,alt:!0,src:!0}),pt.forEach(c),vt.forEach(c),rt=k(v),U=d(v,"DIV",{class:!0}),f(U).forEach(c),v.forEach(c),this.h()},h(){l(e,"class","w=1"),l(i,"class","z=1050 fs=2 @lg@fs=2.5 c=black @dark@c=white >div/ta=left"),l(u,"href",J+"/"),l(h,"class","fg=1"),l(T,"class",":hover/c=--primary @dark@:hover/c=--primary-l h=2.5 fw=bold"),l(m,"href",J+"/docu"),l(_,"class","w=2 @!md@w=1"),l(S,"class",":hover/c=--primary @dark@:hover/c=--primary-l h=2.5 fw=bold"),l(M,"href",J+"/test"),l(L,"class","w=2 @!md@w=1"),l(N,"class","w=1 @!md@none"),l(G,"class","w=2.5 h=2.5 :not(:hover)/ft=invert(0.3) @dark@ft=invert(1) @dark@:not(:hover)/ft=invert(0.7)"),l(G,"alt","github"),yt(G.src,ct=J+"/svg/iconmonstr-github-1.svg")||l(G,"src",ct),l(C,"class","@!md@none"),l($,"href","https://github.com/Artxe2/instant-css"),l(U,"class","w=1.5"),l(t,"class",z="z=1000 absolute flex ai=center w=100% h=4 tt=background-color_.5s "+(a[0]?"bgc=#3b599825 c=#00000050 @dark@c=#ffffff50 bs=0px_5px_5px_#3b599850 :hover/bgc=#3b599850;c=black;bs=0px_5px_5px_#3b5998 @dark@:hover/c=white":"bgc=#3b599850 c=black @dark@c=white bs=0px_5px_5px_#3b5998"))},m(H,v){et(H,t,v),s(t,e),s(t,n),s(t,u),s(u,i),Tt(r,i,null),s(t,o),s(t,h),s(t,p),s(t,m),s(m,T),s(T,I),s(t,g),s(t,_),s(t,y),s(t,M),s(M,S),s(S,A),s(t,V),s(t,L),s(t,D),Tt(E,t,null),s(t,x),s(t,N),s(t,B),s(t,$),s($,C),s(C,G),s(t,rt),s(t,U),K=!0,at||(it=[Et(a[1].call(null,m)),Et(a[1].call(null,M))],at=!0)},p(H,[v]){(!K||v&1&&z!==(z="z=1000 absolute flex ai=center w=100% h=4 tt=background-color_.5s "+(H[0]?"bgc=#3b599825 c=#00000050 @dark@c=#ffffff50 bs=0px_5px_5px_#3b599850 :hover/bgc=#3b599850;c=black;bs=0px_5px_5px_#3b5998 @dark@:hover/c=white":"bgc=#3b599850 c=black @dark@c=white bs=0px_5px_5px_#3b5998")))&&l(t,"class",z)},i(H){K||(lt(r.$$.fragment,H),lt(E.$$.fragment,H),K=!0)},o(H){ot(r.$$.fragment,H),ot(E.$$.fragment,H),K=!1},d(H){H&&c(t),wt(r),wt(E),at=!1,It(it)}}}function Rt(a,t,e){let n;const u=i=>{Ct.subscribe(r=>{let o=(location.origin+r.url.pathname).startsWith(i.href);i.classList.toggle("c=--primary",o),i.classList.toggle("@dark@c=--primary-l",o)})};return st(()=>{nt.subscribe(i=>e(0,n=i))}),[n,u]}class zt extends X{constructor(t){super();Z(this,t,Rt,Ot,tt,{})}}function Ut(a){let t,e,n,u;const i=a[2].default,r=xt(i,a,a[1],null);return{c(){t=b("div"),r&&r.c(),this.h()},l(o){t=d(o,"DIV",{class:!0});var h=f(t);r&&r.l(h),h.forEach(c),this.h()},h(){l(t,"class","flex column h=100% c=black @dark@c=white ox=hidden ::-webkit-scrollbar/w=0.5 ::-webkit-scrollbar-track/bgc=#3b599850 ::-webkit-scrollbar-thumb/bgc=--primary;br=0.25")},m(o,h){et(o,t,h),r&&r.m(t,null),e=!0,n||(u=W(t,"scroll",a[0]),n=!0)},p(o,[h]){r&&r.p&&(!e||h&2)&&Mt(r,i,o,o[1],e?Ht(i,o[1],h,null):St(o[1]),null)},i(o){e||(lt(r,o),e=!0)},o(o){ot(r,o),e=!1},d(o){o&&c(t),r&&r.d(o),n=!1,u()}}}function Kt(a,t,e){let{$$slots:n={},$$scope:u}=t;const i=r=>nt.set(r.target.scrollTop);return st(()=>nt.set(0)),a.$$set=r=>{"$$scope"in r&&e(1,u=r.$$scope)},[i,u,n]}class Yt extends X{constructor(t){super();Z(this,t,Kt,Ut,tt,{})}}export{zt as A,Yt as R,Ct as p};