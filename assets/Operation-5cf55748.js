var f=(x,u,o)=>new Promise((c,r)=>{var p=s=>{try{n(o.next(s))}catch(e){r(e)}},v=s=>{try{n(o.throw(s))}catch(e){r(e)}},n=s=>s.done?c(s.value):Promise.resolve(s.value).then(p,v);n((o=o.apply(x,u)).next())});import k from"./Inspection-c5efd8f5.js";import y from"./HiddenDefect-a8b33404.js";import C from"./WorkOrder-92b20fde.js";import{M as _}from"./MiddleIndicator-deb23c9c.js";import g from"./Loss-71666bdb.js";import D from"./TwoTicket-ab62ff56.js";import I from"./Security-1e1454b2.js";import{g as T}from"./data-4b66f43f.js";import{am as i,ax as F,_ as B}from"./index.js";import{a as O}from"./assign-37f1c13d.js";import{d as U,r as A,k as b,o as K,Z as m,_ as d,f as t,F as M}from"./vue-71d1abb3.js";import"./SmallModule-04781cfc.js";import"./DataIndicator-9c21ed00.js";import"./EchartLineBarChart.vue_vue_type_style_index_0_lang-90edad95.js";import"./index-d8a2358f.js";import"./install-58e0bd81.js";import"./NoData-1ab5cc7b.js";import"./antd-15ac76ed.js";import"./EchartStackBarChart.vue_vue_type_style_index_0_lang-59d702ec.js";import"./EchartPieChart.vue_vue_type_script_setup_true_lang-58fa16af.js";const $=U({__name:"Operation",setup(x,{expose:u}){const o=A({}),c=b(i()),r=b(i()),p=b(i()),v=()=>f(this,null,function*(){let e=yield T();e.result&&O(o,e.result)}),n=e=>f(this,null,function*(){let a={},l="";e==="rate"?l="/bi/elec/planned":e==="loss"&&(l="/bi/elec/lossDetail"),F(l,"",a)});return u({handleUpdate:()=>{c.value=i(),r.value=i(),p.value=i()}}),K(()=>{v()}),(e,a)=>(m(),d(M,null,[(m(),d("div",{class:"left-content",key:c.value},[t(k,{class:"section-box top-section"}),t(y,{class:"section-box middel-section"}),t(C,{class:"section-box bottom-section"})])),(m(),d("div",{class:"middle-content",key:r.value},[t(_,{icon:"rate",label:"计划完成(月)",onClick:a[0]||(a[0]=l=>n("rate")),value:o.rate,unit:"%",vColor:"#67C8FF"},null,8,["value"]),t(_,{icon:"loss",label:"损失电量(月)",onClick:a[1]||(a[1]=l=>n("loss")),value:o.loss,unit:"万kWh",vColor:"#F4D038"},null,8,["value"]),t(_,{icon:"person-total",label:"在岗人数",onClick:a[2]||(a[2]=l=>n("personTotal")),value:o.personTotal,unit:"人",vColor:"#00BA24"},null,8,["value"])])),(m(),d("div",{class:"right-content",key:p.value},[t(g,{class:"section-box top-section"}),t(D,{class:"section-box middel-section"}),t(I,{class:"section-box bottom-section"})]))],64))}});const oe=B($,[["__scopeId","data-v-6fa000ee"]]);export{oe as default};
//# sourceMappingURL=Operation-5cf55748.js.map
