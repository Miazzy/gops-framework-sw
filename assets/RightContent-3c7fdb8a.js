var V=(D,w,e)=>new Promise((t,n)=>{var d=o=>{try{m(e.next(o))}catch(h){n(h)}},s=o=>{try{m(e.throw(o))}catch(h){n(h)}},m=o=>o.done?t(o.value):Promise.resolve(o.value).then(d,s);m((e=e.apply(D,w)).next())});import{d as K,H as Q,e as X,w as P,o as J,q as Y,Z as z,_ as U,v as B,A as k,$ as i,u as ee,a6 as C,f as c,ac as ae,F as te,r as O,k as b,al as oe,aa as $,a5 as M}from"./vue-71d1abb3.js";import{S as T}from"./SubtitleBar-001f5f49.js";import{I as R}from"./IndicatorGroup-e2cd29a8.js";import{_ as G}from"./EchartLineBarChart.vue_vue_type_style_index_0_lang-90edad95.js";import"./index-d8a2358f.js";import{N as le}from"./NoData-1ab5cc7b.js";import{g as L,i as ne,L as H}from"./install-58e0bd81.js";import{h as se,i as re}from"./data-aa851d4b.js";import{a as ie}from"./index-8c718dee.js";import{h as I}from"./utils-5bbca5df.js";import{am as j,_ as ce}from"./index.js";import{a as F}from"./assign-37f1c13d.js";import"./antd-15ac76ed.js";const ue=["id"],de=K({__name:"EchartCrossBarChart",props:{data:{type:Array},width:{type:[Number,String],default:600},height:{type:[Number,String],default:300},yAxis:{type:Object,default:{min:0,max:100,interval:20}},colors:{type:Array,default:["#1890ff","#60d1f3","#8fd0f4","#2de4a5","#63b2ee"]},names:{type:Array},category:{type:Array},ybgcolor:{type:String},rotate:{type:Number,default:0},tipsBgColor:{type:String,default:""},tipsTextColor:{type:String,default:""},tipsFormat:{type:Function,default:null},barWidth:{type:[Number,String],default:""},dataZoomDisabled:{type:Boolean,default:!0},dataZoomMaxValueSpan:{type:Number,default:6},dataZoomDefaultValueRange:{type:Array,default:[]}},emits:["clickItem"],setup(D,{emit:w}){const e=D,t=parseInt(Math.random()*1e7),{data:n,colors:d,names:s,category:m,ybgcolor:o}=Q(e),h=X(()=>{var r,l;return!((l=(r=e.data)==null?void 0:r.barData)!=null&&l.length)});P(()=>e.data,()=>{S()},{deep:!0});const S=()=>{var r=document.getElementById("echarts-crossbar-container"+t);let l=L(r);l==null&&(l=ne(r));const v=n.value.barData&&n.value.barData.length>0?n.value.barData[0]:[],Z=n.value.barData&&n.value.barData.length>1?n.value.barData[1]:[],E=s.value&&s.value.length>0?s.value[0]:[],A=s.value&&s.value.length>1?s.value[1]:[];var g;g={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},backgroundColor:e.tipsBgColor?e.tipsBgColor:"rgb(50,175,255, 15%)",textStyle:{color:e.tipsTextColor?e.tipsTextColor:"#fff"},borderColor:"transparent",confine:!0,formatter:function(p){if(e.tipsFormat!=null&&typeof e.tipsFormat=="function")return e.tipsFormat(p);try{let y=p[0].name+"<br />";return p.forEach((f,_)=>{var u;let N=(u=e.data.units)!=null&&u.length&&e.data.units[_]?e.data.units[_]:"",q=f.seriesName?`${f.seriesName}：`:"",a=f.value||f.value===0?f.value+N:"--";y=`${y}${q}${a}`,_<p.length-1&&(y+="<br />")}),y}catch(y){return""}}},legend:{top:"top",left:"right",textStyle:{color:"rgba(255, 255, 255, 0.6)"},itemWidth:14,itemHeight:10},grid:{top:25,left:"1%",right:"6%",bottom:"3%",containLabel:!0},xAxis:{type:"value",name:"",axisLabel:{color:"rgba(255, 255, 255, 0.6)",fontSize:14,fontFamily:"Arial",interval:0,rotate:0},splitLine:{show:!0,lineStyle:{color:o.value}},axisLine:{show:" ",onZero:" ",onZeroAxisIndex:"12",symbol:["none","none"],symbolSize:[10,10],lineStyle:{color:"rgba(170, 221, 255, .8)",width:"0.2"}}},yAxis:{type:"category",data:m.value,axisPointer:{type:"shadow"},nameTextStyle:{color:"#888888",fontSize:26,fontWeight:"bolder",padding:[10,-800,66,0]},axisLabel:{color:"rgba(255, 255, 255, 0.6)",fontSize:14,fontFamily:"Arial",interval:0,rotate:e.rotate},splitLine:{show:!1,lineStyle:{color:o.value}},axisTick:{show:!1,inside:!1},axisLine:{show:" ",onZero:" ",onZeroAxisIndex:"12",symbol:["none","none"],symbolSize:[10,10],lineStyle:{color:"rgba(170, 221, 255, .8)",width:"0.1"}}},series:[{name:E,type:"bar",stack:"total",emphasis:{focus:"series"},data:v,itemStyle:{color:new H(0,0,0,1,[{offset:0,color:d.value[0]},{offset:1,color:`${d.value[0]}`}])},barWidth:e.barWidth,barMaxWidth:14},{name:A,type:"bar",stack:"total",emphasis:{focus:"series"},data:Z,itemStyle:{color:new H(0,0,0,1,[{offset:0,color:d.value[1]},{offset:1,color:`${d.value[1]}`}])},barWidth:e.barWidth,barMaxWidth:14}],dataZoom:[{type:"inside",disabled:e.dataZoomDisabled,yAxisIndex:0,maxValueSpan:e.dataZoomMaxValueSpan-1,startValue:e.dataZoomDefaultValueRange[0]||0,endValue:e.dataZoomDefaultValueRange[1]||e.dataZoomMaxValueSpan-1}]},g&&l.setOption(g)};return J(()=>{S(),Y(()=>{var r=document.getElementById("echarts-crossbar-container"+t);L(r).on("click",v=>{w("clickItem",v)})})}),P(()=>e.height,()=>{setTimeout(()=>{var r=document.getElementById("echarts-crossbar-container"+t);let l=L(r);l==null||l.resize()},100)}),(r,l)=>(z(),U(te,null,[B(i("div",{id:`echarts-crossbar-container${ee(t)}`,class:"echarts-crossbar-container",style:C(`width: ${typeof e.width=="number"?e.width+"px":e.width}; height: ${typeof e.height=="number"?e.height+"px":e.height};`)},null,12,ue),[[k,!h.value]]),h.value?(z(),U("div",{key:0,style:C(`width: ${typeof e.width=="number"?e.width+"px":e.width}; height: ${typeof e.height=="number"?e.height+"px":e.height};`)},[c(le)],4)):ae("",!0)],64))}});const he={class:"top-section section-box"},me={class:"section-bg1"},ge={style:{width:"100%",height:"1.85rem"}},pe={style:{"margin-left":"0.16rem",transform:"scale(0.85)","transform-origin":"0 0"}},ye={class:"middel-section section-box"},fe={class:"section-bg2"},ve={style:{width:"100%",height:"1.85rem"}},be={style:{"margin-left":"0.16rem",transform:"scale(0.85)","transform-origin":"0 0"}},De={class:"bottom-section section-box"},we={class:"section-bg1"},_e={style:{width:"100%",height:"1.85rem"}},xe={style:{"margin-left":"0.16rem",transform:"scale(0.85)","transform-origin":"0 0"}},Ce=K({__name:"RightContent",props:{topIndexData:{},searchInfoByTime:{},tabStatus:{}},setup(D,{expose:w}){const e=D,t=O({selectPlannedValue:"station",selectFactroyValue:"station",selectChargingValue:"station"}),n=O({}),d=b(j()),s=b([]);P(()=>e.searchInfoByTime,a=>{F(t,a),h(),v()}),P(()=>e.topIndexData,a=>{F(n,a),p()}),J(()=>V(this,null,function*(){(yield ie({dictType:"cockpit_three_dimension"})).result.forEach(u=>{s.value.push({value:u.value,label:u.label})}),F(n,e.topIndexData),F(t,e.searchInfoByTime),p()}));const m=b({}),o=b({barData:[[],[]],lineData:[[]],colors:[["#488FF6","#60D1F3"],["#078C5D","#68E4B8"],["#E59837","#FAE895"],["#e59837","#fae895"],["#078C5D","#68E4B8"]],categories:[],seriesName:[["减线损上网电量","计划电量"],["完成率"]]}),h=()=>V(this,null,function*(){t.dimension=t.selectPlannedValue;let a=yield se(t);a.result&&(a.result.lineData.length?o.value.lineData[0]=a.result.lineData:o.value.lineData=[],o.value.barData=a.result.barData,o.value.categories=a.result.categories)}),S=a=>{t.selectPlannedValue=a.value,h()},r=b({}),l=b({barData:[[],[]],colors:["#488FF6","#68E4B8"],names:["下网电量","外接厂用电量"],categories:[]}),v=()=>V(this,null,function*(){t.dimension=t.selectFactroyValue;let a=yield re(t);a.result&&(l.value.barData=a.result.barData,l.value.categories=a.result.categories)}),Z=a=>{t.selectFactroyValue=a.value,v()},E=[["充电电量","放电电量"],["指标"]],A=[{value:353.22,label:"充电电量(万kWh)"},{value:205.22,label:"放电电量(万kWh)"}],g={barData:[[50,34.9,74,44.2,55.6,76.7,35.6,62.2,32.6,20,62.4,32.3],[32.6,53.9,39,56.4,48.7,50.7,75.6,31.2,48.7,39.8,62,52.3]],lineData:[[32,39.2,13.3,24.5,32.3,15.2,20.3,23.4,23,16.5,12,26.2]],colors:[["#488FF6","#60D1F3"],["#078C5D","#68E4B8"],["#E59837","#FAE895"],["#e59837","#fae895"],["#078C5D","#68E4B8"]],categories:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]};function p(){m.value=[{label:"减线损上网电量(万kWh)",value:n.subOnline},{label:"计划电量(万kWh)",value:n.planned},{label:"完成率(%)",value:n.comRate}],r.value=[{label:"下网电量(万kWh)",value:n.offline},{label:"网购-电量(万kWh)",value:n.fac}]}function y(a){I("/bi/elec/powerContrast",{stationId:t.selectFactroyValue==="station"?a.data.id:"",orgId:t.selectFactroyValue==="company"?a.data.id:""})}function f(){I("/bi/elec/powerContrast",{})}function _(a){I("/bi/elec/planned",{stationId:t.selectPlannedValue==="station"?a.data.id:"",orgId:t.selectPlannedValue==="company"?a.data.id:""})}function N(){I("/bi/elec/planned",{})}return w({handleUpdate:()=>{d.value=j()}}),(a,u)=>{const W=oe("a-select");return z(),U("div",{class:"right-content",key:d.value},[i("div",he,[i("div",me,[c(T,{subtitle:"计划完成"},{default:$(()=>[B(c(W,{ref:"select","label-in-value":"",value:t.selectPlannedValue,"onUpdate:value":u[0]||(u[0]=x=>t.selectPlannedValue=x),options:s.value,style:{width:"1.2rem"},onChange:S},null,8,["value","options"]),[[k,s.value.length>1]])]),_:1}),c(R,{class:M(["indicator-group-layout",a.tabStatus==="on"?"":"fix-indicator-group-padding"]),data:m.value,style:C(a.tabStatus==="on"?"width: 80%; margin: -0.07rem 7.5% 0 10%":"width: 80%; margin: -0.15rem 7.5% 0 10%"),onClickItem:N},null,8,["data","style","class"]),i("div",ge,[i("div",pe,[c(G,{data:o.value,colors:o.value.colors,width:"26.14vw",height:a.tabStatus==="on"?"23.94vh":"26.83vh",category:o.value.categories,ybgcolor:"#01B7D730",name:o.value.seriesName,rotate:0,onClickItem:_,dataZoomDisabled:!1,dataZoomMaxValueSpan:o.value.categories.length,dataZoomDefaultValueRange:[0,4]},null,8,["data","colors","height","category","name","dataZoomMaxValueSpan"])])])])]),i("div",ye,[i("div",fe,[c(T,{subtitle:"厂用电"},{default:$(()=>[B(c(W,{ref:"select","label-in-value":"",value:t.selectFactroyValue,"onUpdate:value":u[1]||(u[1]=x=>t.selectFactroyValue=x),options:s.value,style:{width:"1.2rem"},onChange:Z},null,8,["value","options"]),[[k,s.value.length>1]])]),_:1}),c(R,{class:M(["indicator-group-layout",a.tabStatus==="on"?"":"fix-indicator-group-padding"]),data:r.value,style:C(a.tabStatus==="on"?"width: 62%; margin-top: -0.07rem; margin-left: 20%":"width: 62%; margin-top: -0.15rem; margin-left: 20%"),onClickItem:f},null,8,["data","style","class"]),i("div",ve,[i("div",be,[c(de,{data:l.value,colors:l.value.colors,names:l.value.names,width:"26.14vw",height:a.tabStatus==="on"?"23.94vh":"26.83vh",category:l.value.categories,ybgcolor:"#01B7D730",rotate:0,onClickItem:y,dataZoomDisabled:!1,dataZoomMaxValueSpan:l.value.categories.length,dataZoomDefaultValueRange:[0,4]},null,8,["data","colors","names","height","category","dataZoomMaxValueSpan"])])])])]),i("div",De,[i("div",we,[c(T,{subtitle:"储能电量"},{default:$(()=>[B(c(W,{ref:"select","label-in-value":"",value:t.selectChargingValue,"onUpdate:value":u[2]||(u[2]=x=>t.selectChargingValue=x),options:s.value,style:{width:"1.2rem"}},null,8,["value","options"]),[[k,s.value.length>1]])]),_:1}),c(R,{class:M(["indicator-group-layout",a.tabStatus==="on"?"":"fix-indicator-group-padding"]),data:A,style:C(a.tabStatus==="on"?"width: 62%; margin: -0.07rem 15% 0 20%":"width: 62%; margin: -0.15rem 15% 0 20%")},null,8,["style","class"]),i("div",_e,[i("div",xe,[c(G,{data:g,colors:g.colors,width:"26.14vw",height:a.tabStatus==="on"?"23.94vh":"26.83vh",category:g.categories,ybgcolor:"#01B7D730",name:E,rotate:0},null,8,["colors","height","category"])])])])])])}}});const Te=ce(Ce,[["__scopeId","data-v-823b9c38"]]);export{Te as default};
//# sourceMappingURL=RightContent-3c7fdb8a.js.map