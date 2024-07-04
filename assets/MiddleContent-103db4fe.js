var u=(g,f,r)=>new Promise((a,i)=>{var h=o=>{try{n(r.next(o))}catch(d){i(d)}},p=o=>{try{n(r.throw(o))}catch(d){i(d)}},n=o=>o.done?a(o.value):Promise.resolve(o.value).then(h,p);n((r=r.apply(g,f)).next())});import{d as M,r as q,k as c,w as x,o as F,al as $,Z as A,_ as L,$ as s,f as l,aa as w,v as k,A as V,a6 as S,a5 as T}from"./vue-71d1abb3.js";import{S as b}from"./SubtitleBar-001f5f49.js";import{I as R}from"./IndicatorGroup-e2cd29a8.js";import{_ as B}from"./EchartLineBarChart.vue_vue_type_style_index_0_lang-90edad95.js";import{_ as Q}from"./EchartPieChart.vue_vue_type_script_setup_true_lang-58fa16af.js";import{a as G,b as K,c as O}from"./data-6d85554f.js";import{a as j}from"./index-8c718dee.js";import{h as I}from"./utils-5bbca5df.js";import{am as P,_ as H}from"./index.js";import{a as N}from"./assign-37f1c13d.js";import"./index-d8a2358f.js";import"./install-58e0bd81.js";import"./NoData-1ab5cc7b.js";import"./antd-15ac76ed.js";const J={class:"left-section section-box"},W={class:"section-bg"},X={style:{width:"100%",height:"2rem"}},Y={style:{"margin-left":"0.16rem",transform:"scale(0.85)","transform-origin":"0 0"}},ee={class:"middle-section section-box"},ae={class:"section-bg"},te={style:{width:"100%",height:"2rem"}},se={style:{"margin-left":"0.16rem",transform:"scale(0.85)","transform-origin":"0 0"}},oe={class:"right-section section-box"},le={class:"section-bg"},ne={class:"donut-chart-layout"},ie=M({__name:"MiddleContent",props:{searchInfoByTime:{},tabStatus:{}},setup(g,{expose:f}){const r=g,a=q({selectTaskValue:"station",selectPersonCertValue:"station"}),i=c([]),h=c(P());x(()=>r.searchInfoByTime,e=>{N(a,e),y(),E(),o()}),F(()=>u(this,null,function*(){(yield j({dictType:"cockpit_three_dimension"})).result.forEach(t=>{i.value.push({value:t.value,label:t.label})}),N(a,r.searchInfoByTime)}));const p=c({}),n=c({barData:[[],[]],categories:[],lineData:[[]],colors:[["#488FF6","#60D1F3"],["#078C5D","#68E4B8"],["#E59837","#FAE895"],["#e59837","#fae895"],["#078C5D","#68E4B8"]],dataZoomDefaultValueRange:[.5],chartSeriesName:[["超期完成","未完成"],["完成率(%)"]]}),o=()=>u(this,null,function*(){a.dimension=a.selectTaskValue;const e=yield G(a);e.result&&(p.value=[{value:e.result.actualCompleteNum,label:"按期完成(项)"},{value:e.result.unCompleteNum,label:"未完成(项)"},{value:e.result.rate,label:"完成率(%)"}],n.value.barData=e.result.barData||[],n.value.categories=e.result.categories||[])}),d=e=>{a.selectTaskValue=e,o()},_=c({}),m=c({barData:[[],[],[]],categories:[],seriesName:[["调度证","高压电工证","安全员证"]]}),y=()=>u(this,null,function*(){a.dimension=a.selectPersonCertValue;let e=yield K(a);e.result&&(m.value.barData=e.result.barData,m.value.categories=e.result.categories,_.value=[{value:e.result.ddzRate,label:"调度证(%)"},{value:e.result.gydgzRate,label:"高压电工证(%)"},{value:e.result.aqzgzRate,label:"安全员证(%)"}])}),z=e=>{a.selectPersonCertValue=e,y()},D=c({pieData:[]}),E=()=>u(this,null,function*(){let e=yield O(a);e.result&&(e.result.pieData.forEach(t=>{t.name=t.label}),D.value.pieData=e.result.pieData)}),U=e=>u(this,null,function*(){e==="ddzRate"&&I("/bi/integrated/personnelQualifications",{})});function Z(e){I("/bi/integrated/personnelQualifications",{selectType:a.selectPersonCertValue,id:e.data.id,name:e.data.fullName})}return f({handleUpdate:()=>{h.value=P()}}),(e,t)=>{const C=$("a-select");return A(),L("div",{class:"middle-content",key:h.value},[s("div",J,[s("div",W,[l(b,{subtitle:"现场任务统计"},{default:w(()=>[k(l(C,{ref:"select",value:a.selectTaskValue,"onUpdate:value":t[0]||(t[0]=v=>a.selectTaskValue=v),options:i.value,onChange:d,style:{width:"1.2rem"}},null,8,["value","options"]),[[V,i.value.length>1]])]),_:1}),l(R,{data:p.value,style:S(e.tabStatus==="on"?"margin-top: -0.15rem":"margin-top: -0.2rem"),class:T(["indicator-group-layout",e.tabStatus==="on"?"":"fix-indicator-group-padding"])},null,8,["data","style","class"]),s("div",X,[s("div",Y,[l(B,{data:n.value,width:"36.14vw",height:e.tabStatus==="on"?"34.8vh":"39vh",category:n.value.categories,ybgcolor:"#01B7D730",name:n.value.chartSeriesName,dataZoomDisabled:!1,dataZoomDefaultValueRange:[0,5]},null,8,["data","height","category","name"])])])])]),s("div",ee,[s("div",ae,[l(b,{subtitle:"持证率统计"},{default:w(()=>[k(l(C,{ref:"select",value:a.selectPersonCertValue,"onUpdate:value":t[1]||(t[1]=v=>a.selectPersonCertValue=v),options:i.value,style:{width:"1.2rem"},onChange:z},null,8,["value","options"]),[[V,i.value.length>1]])]),_:1}),l(R,{data:_.value,style:S(e.tabStatus==="on"?"margin-top: -0.15rem":"margin-top: -0.2rem"),class:T(["indicator-group-layout",e.tabStatus==="on"?"":"fix-indicator-group-padding"]),onClickItem:t[2]||(t[2]=v=>U("ddzRate"))},null,8,["data","style","class"]),s("div",te,[s("div",se,[l(B,{data:m.value,width:"36.14vw",height:e.tabStatus==="on"?"34.5vh":"39vh",category:m.value.categories,ybgcolor:"#01B7D730",name:m.value.seriesName,onClickItem:Z,dataZoomDisabled:!1,dataZoomDefaultValueRange:[0,5]},null,8,["data","height","category","name"])])])])]),s("div",oe,[s("div",le,[l(b,{subtitle:"合同统计"}),s("div",ne,[l(Q,{id:"contract-stat-pie",width:"32.23vw",height:e.tabStatus==="on"?"33.08vh":"36.41vh",data:D.value.pieData,roseType:!1,radius:["40%","60%"],showLegend:"",showLabel:"",pieCenter:["45%","50%"],legendOptions:{top:"center",bottom:"auto",left:"80%",orient:"vertical"}},null,8,["height","data"])])])])])}}});const ke=H(ie,[["__scopeId","data-v-50199f0a"]]);export{ke as default};
//# sourceMappingURL=MiddleContent-103db4fe.js.map
