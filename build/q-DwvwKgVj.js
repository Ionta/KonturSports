import{t as lt,j as Z,k as T,Q as $,r as tt,m as et,l as ot,n as B,o as ct,q as ut,v as P,w as R,x as dt,y as _t,z as mt,A as pt,c as vt,C as ft,d as yt,D as ht,R as St,e as Ct,f as Et,h as gt,i as wt}from"./q-Chxy6RMQ.js";import{u as nt,j as rt,k as Lt,n as qt,l as Rt,m as bt,o as It,g as j,p as Dt,h as M,i as h,r as At,d as Pt,q as N,S as kt,s as Tt}from"./q-CpBdxxLB.js";import{_ as u}from"./q-uemlvruI.js";const Ot=":root{view-transition-name:none}";const k=()=>u(()=>import("./q-DiP38YS2.js"),[]),xt=()=>u(()=>import("./q-Jxi-xeSd.js"),[]),J=[["/",[k,()=>u(()=>import("./q-oQo7YTsw.js"),[])]],["login/",[k,xt,()=>u(()=>import("./q-D6IHWxSD.js"),[])]],["sections/",[k,()=>u(()=>import("./q-j5IBihAr.js"),[])]],["self/",[k,()=>u(()=>import("./q-BX5NN4Wi.js"),[])]],["sections/[pageid]/",[k,()=>u(()=>import("./q-BGkZubA9.js"),[])]]],X=[];const Y=!0;const Vt=async(d,n)=>{const[S,g,s,w]=nt(),{type:a="link",forceReload:p=d===void 0,replaceState:v=!1,scroll:L=!0}=typeof n=="object"?n:{forceReload:n};if(typeof d=="number"){history.go(d);return}const l=s.value.dest,o=d===void 0?l:lt(d,w.url);if(!Z(o,l)){location.href=o.href;return}if(!p&&T(o,l)){{a==="link"&&o.href!==location.href&&history.pushState(null,"",o);const f=document.getElementById($)??document.documentElement;tt(a,o,new URL(location.href),f,et()),a==="popstate"&&(window._qCityScrollEnabled=!0)}return}return s.value={type:a,dest:o,forceReload:p,replaceState:v,scroll:L},ot(o,rt()),B(J,X,Y,o.pathname),S.value=void 0,w.isNavigating=!0,new Promise(f=>{g.r=f})},Ut=({track:d})=>{const[n,S,g,s,w,a,p,v,L,l,o]=nt();async function f(){var F;const[_,b]=d(()=>[l.value,n.value]),st=Lt(""),I=o.url,m=b?"form":_.type,it=_.replaceState;let r,D,Q=null,O;{r=new URL(_.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let x=B(J,X,Y,r.pathname);O=rt();const V=D=await ot(r,O,{action:b,clearCache:!0});if(!V){l.untrackedValue={type:m,dest:r};return}const U=V.href,H=new URL(U,r);T(H,r)||(r=H,x=B(J,X,Y,r.pathname));try{Q=await x}catch{window.location.href=U;return}}if(Q){const[x,V,U,H]=Q,A=U,at=A[A.length-1];o.prevUrl=I,o.url=r,o.params={...V},l.untrackedValue={type:m,dest:r};const q=ct(D,o,A,st);S.headings=at.headings,S.menu=H,g.value=qt(A),s.links=q.links,s.meta=q.meta,s.styles=q.styles,s.scripts=q.scripts,s.title=q.title,s.frontmatter=q.frontmatter;{L.viewTransition!==!1&&(document.__q_view_transition__=!0);let K;m==="popstate"&&(K=et());const C=document.getElementById($)??document.documentElement;(_.scroll&&(!_.forceReload||!T(r,I))&&(m==="link"||m==="popstate")||m==="form"&&!T(r,I))&&(document.__q_scroll_restore__=()=>tt(m,r,I,C,K));const G=D==null?void 0:D.loaders,t=window;if(G&&Object.assign(p,G),ut.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),a(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const i=history.pushState,y=history.replaceState,E=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||R(C),e);history.pushState=(e,c,z)=>(e=E(e),i.call(history,e,c,z)),history.replaceState=(e,c,z)=>(e=E(e),y.call(history,e,c,z))}document.body.addEventListener("click",i=>{if(i.defaultPrevented)return;const y=i.target.closest("a[href]");if(y&&!y.hasAttribute("preventdefault:click")){const E=y.getAttribute("href"),e=new URL(location.href),c=new URL(E,e);if(Z(c,e)&&T(c,e)){if(i.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...R(C),x:0,y:0}),location.reload();return}a(y.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const i=R(C);P(i)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const i=R(C);P(i),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(F=t._qCityBootstrap)==null||F.remove(),t._qCityBootstrap=void 0,dt.resolve()}if(m!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const i=R(C);P(i)}_t(window,m,I,r,it),Rt(O).then(()=>{var E;mt(O).setAttribute("q:route",x);const y=R(C);P(y),t._qCityScrollEnabled=!0,o.isNavigating=!1,(E=v.r)==null||E.call(v)})}}}f()},Ht=d=>{bt(N(()=>u(()=>Promise.resolve().then(()=>W),void 0),"s_RPDJAz33WLA"));const n=pt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const S=It("url");if(!S)throw new Error("Missing Qwik URL Env Data");const g=new URL(S),s=j({url:g,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),w={},a=Dt(j(n.response.loaders,{deep:!1})),p=M({type:"initial",dest:g,forceReload:!1,replaceState:!1,scroll:!0}),v=j(vt),L=j({headings:void 0,menu:void 0}),l=M(),o=n.response.action,f=o?n.response.loaders[o]:void 0,_=M(f?{id:o,data:n.response.formData,output:{result:f,status:n.response.status}}:void 0),b=N(()=>u(()=>Promise.resolve().then(()=>W),void 0),"s_fX0bDjeJa0E",[_,w,p,s]);return h(ft,L),h(yt,l),h(ht,v),h(St,s),h(Ct,b),h(Et,a),h(gt,_),h(wt,p),At(N(()=>u(()=>Promise.resolve().then(()=>W),void 0),"s_02wMImzEAbk",[_,L,l,v,n,b,a,w,d,p,s])),Pt(kt,null,3,"qY_0")},W=Object.freeze(Object.defineProperty({__proto__:null,_hW:Tt,s_02wMImzEAbk:Ut,s_RPDJAz33WLA:Ot,s_TxCFOy819ag:Ht,s_fX0bDjeJa0E:Vt},Symbol.toStringTag,{value:"Module"}));export{Tt as _hW,Ut as s_02wMImzEAbk,Ot as s_RPDJAz33WLA,Ht as s_TxCFOy819ag,Vt as s_fX0bDjeJa0E};
