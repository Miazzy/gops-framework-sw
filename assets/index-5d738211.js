var o=(t,e,r)=>new Promise((l,u)=>{var c=s=>{try{n(r.next(s))}catch(i){u(i)}},g=s=>{try{n(r.throw(s))}catch(i){u(i)}},n=s=>s.done?l(s.value):Promise.resolve(s.value).then(c,g);n((r=r.apply(t,e)).next())});import{a5 as a}from"./index.js";const p=t=>o(void 0,null,function*(){const e={url:"/baseset/common/list-orgStationPeriodTree",params:t};return a.post(e,{isOnlyResult:!0})}),b=t=>o(void 0,null,function*(){const e={url:"/baseset/common/list-stationWarehouse",params:t};return a.post(e,{isOnlyResult:!0})}),O=t=>o(void 0,null,function*(){const e={url:"/baseset/material-category/getTreeData",params:t};return a.get(e,{isOnlyResult:!0})});function P(t){return a.get({url:"/baseset/material/page",params:t},{isOnlyResult:!0})}const S=t=>a.post({url:"/baseset/common/list-station",params:t},{isOnlyResult:!0}),T=t=>a.post({url:"/baseset/common/list-orgStationTree",params:t},{}),R=t=>a.post({url:`/baseset/common/list-stationPerson?stationId=${t}`},{isOnlyResult:!0});export{O as a,P as b,b as c,R as d,S as e,T as f,p as g};
//# sourceMappingURL=index-5d738211.js.map