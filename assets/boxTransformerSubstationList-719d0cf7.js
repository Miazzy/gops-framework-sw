var h=(d,m,t)=>new Promise((n,l)=>{var b=e=>{try{u(t.next(e))}catch(c){l(c)}},r=e=>{try{u(t.throw(e))}catch(c){l(c)}},u=e=>e.done?n(e.value):Promise.resolve(e.value).then(b,r);u((t=t.apply(d,m)).next())});import C from"./deviceItem-f8cae721.js";import{Y as L}from"./monitorApi-44e70004.js";import{aD as N,aH as D}from"./antd-15ac76ed.js";import{d as w,k as _,r as g,w as B,o as O,Z as i,_ as p,$ as o,ad as f,f as V,aa as I,F as k,ae as y,a9 as S,u as T,a5 as F}from"./vue-71d1abb3.js";import{_ as j}from"./index.js";const z={class:"combiner-box-list"},E={class:"combiner-box-header"},G={class:"header-left"},H={class:"status-checkbox-group-box"},K={class:"status-label-text"},M={class:"combiner-box-content"},U={class:"combiner-box-list-box"},Y=w({__name:"boxTransformerSubstationList",props:{stationId:String,areaId:String},setup(d,{expose:m}){const t=d,n=_([{label:"正常",value:"normal",number:0},{label:"告警",value:"alarm",number:0},{label:"通讯中断",value:"interrupt",number:0}]),l=_(["normal","alarm","interrupt"]),b=s=>{console.log("checkedValue",s),e()},r=g({}),u=_([]),e=()=>h(this,null,function*(){let s=yield L({stationId:t.stationId,areaId:t.areaId,abnormalType:l.value});console.log("getTransformers",s),Object.assign(r,s.abnormalInfo),n.value[0].number=r.normalNum,n.value[1].number=r.alarmNum,n.value[2].number=r.interruptNum,u.value=s.dataList}),c=g({deviceLabelKey:"esn",left:"pvTotal"});return B(()=>t.areaId,s=>{s&&e()}),O(()=>{}),m({statusOptions:n}),(s,x)=>(i(),p("div",z,[o("div",E,[o("div",G,[o("div",null,"箱变："+f(r.deviceNum)+"台",1),o("div",H,[V(T(D),{value:l.value,"onUpdate:value":x[0]||(x[0]=a=>l.value=a),onChange:b},{default:I(()=>[(i(!0),p(k,null,y(n.value,(a,v)=>(i(),S(T(N),{key:v,value:a.value},{default:I(()=>[o("span",K,f(a.label),1),o("span",{class:F({"red-text":a.value!=="normal"&&a.number>0})},f(a.number),3)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])])]),o("div",M,[o("div",U,[(i(!0),p(k,null,y(u.value,(a,v)=>(i(),S(C,{class:"device-item-layout",key:v,options:c,data:a},null,8,["options","data"]))),128))])])]))}});const Q=j(Y,[["__scopeId","data-v-940743b8"]]);export{Q as default};
//# sourceMappingURL=boxTransformerSubstationList-719d0cf7.js.map