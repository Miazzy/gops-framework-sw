var s=(e,r,m)=>new Promise((c,u)=>{var l=t=>{try{o(m.next(t))}catch(n){u(n)}},p=t=>{try{o(m.throw(t))}catch(n){u(n)}},o=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,p);o((m=m.apply(e,r)).next())});import{a5 as a}from"./index.js";const f=e=>s(void 0,null,function*(){const r={url:"/bpm/form/create",data:e};return a.post(r,{})}),i=e=>s(void 0,null,function*(){const r={url:"/bpm/form/update",data:e};return a.put(r,{})}),b=e=>s(void 0,null,function*(){const r={url:"/bpm/form/delete?id="+e};return a.delete(r,{})}),y=e=>s(void 0,null,function*(){const r={url:"/bpm/form/get?id="+e};return a.get(r,{})}),P=e=>s(void 0,null,function*(){const r={url:"/bpm/form/page",params:e};return a.get(r,{})}),q=()=>s(void 0,null,function*(){const e={url:"/bpm/form/list-all-simple"};return a.get(e,{isOnlyResult:!0})});export{y as a,P as b,f as c,b as d,q as g,i as u};
//# sourceMappingURL=index-a66ceb78.js.map