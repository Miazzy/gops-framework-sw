var I=Object.defineProperty;var m=(r,t,e)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var i=(r,t,e)=>(m(r,typeof t!="symbol"?t+"":t,e),e);import{a0 as w,a7 as S,_ as b}from"./index.js";import{d as l}from"./default-avatar-s-529dcd14.js";import{d as y,k,e as p,o as x,al as C,Z as M,a9 as R,aa as W,$ as n,ad as U,aG as $,aH as A}from"./vue-71d1abb3.js";const d="__s__",u="__o__",s=class s{constructor(){s.storage=sessionStorage}static getInstance(){if(!s.instance){const t=new s;s.instance=t;try{Reflect.has(window,"MsgManager")||(window.CacheManager=t),Reflect.has(window.top,"MsgManager")||(window.top.CacheManager=t)}catch(e){window.CacheManager=t}}return s.instance}setCache(t,e){let o;typeof e=="string"?o=`${d}${e}`:o=`${u}${JSON.stringify(e)}`,s.storage.setItem(t,o)}getCache(t){const e=s.storage.getItem(t);if(!e)return null;try{return e.startsWith(d)?e.slice(d.length):e.startsWith(u)?JSON.parse(e.slice(u.length)):null}catch(o){return console.error("Error parsing cached value:",o),null}}remove(t){s.storage.removeItem(t)}clear(){s.storage.clear()}};i(s,"instance"),i(s,"storage");let _=s;const H=r=>($("data-v-f72aca5d"),r=r(),A(),r),N={class:"workbench-header"},O={class:"user-icon-box"},B=["src"],E={class:"info-box"},T={class:"black-text"},V=H(()=>n("p",{class:"grey-text"},"今日晴，20℃ - 32℃！",-1)),J=y({__name:"WorkbenchHeader",setup(r){const t=w(),e=k(l),o=p(()=>{const{username:a="",avatar:c}=t.getUserInfo||{};return f(c),{username:a,avatar:c}}),h=p(()=>{if(e.value===l){const{avatar:a}=t.getUserInfo||{};f(a)}return e.value?e.value:l}),f=a=>{a?e.value=a:e.value=_.getInstance().getCache("AVATAR")},g=()=>o.value.username;return x(()=>{S.getInstance().listen("avatar-update-message",a=>{a!=null&&a.path&&(e.value=(a==null?void 0:a.path)||e.value)})}),(a,c)=>{const v=C("a-card");return M(),R(v,{bordered:!1},{default:W(()=>[n("div",N,[n("div",O,[n("img",{class:"user-icon-img",src:h.value},null,8,B)]),n("div",E,[n("p",T,"上午好，"+U(g())+"，开始您一天的工作吧！",1),V])])]),_:1})}}});const L=b(J,[["__scopeId","data-v-f72aca5d"]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{_ as C,L as W,X as a};
//# sourceMappingURL=WorkbenchHeader-c1794797.js.map
