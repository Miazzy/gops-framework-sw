var g=(o,a,i)=>new Promise((f,d)=>{var x=u=>{try{n(i.next(u))}catch(y){d(y)}},v=u=>{try{n(i.throw(u))}catch(y){d(y)}},n=u=>u.done?f(u.value):Promise.resolve(u.value).then(x,v);n((i=i.apply(o,a)).next())});import{a5 as b,a0 as z,b as H,au as Z,aO as C,av as F,_ as J}from"./index.js";import{K as Q}from"./antd-15ac76ed.js";import{k as _,d as tt,r as et,ax as at,u as l,o as ot,al as D,Z as P,_ as N,$ as w,f as p,aa as h,a9 as nt,E as V,ad as q,ac as B}from"./vue-71d1abb3.js";import{_ as rt}from"./EchartStackBarChart.vue_vue_type_style_index_0_lang-59d702ec.js";import{u as st,B as it}from"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{e as E}from"./download-03e71dd5.js";import{B as L}from"./BasicTable-0434a334.js";import"./index-085d06c7.js";import{u as j}from"./useTable-109483b3.js";import"./index-d8a2358f.js";import"./install-58e0bd81.js";import"./NoData-1ab5cc7b.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const lt=o=>b.post({url:"/bi/elec/export-loss-power",params:o,responseType:"blob"},{isReturnNativeResponse:!0}),dt=o=>b.post({url:"/bi/elec/export-sum-loss-power",params:o,responseType:"blob"},{isReturnNativeResponse:!0}),ut=o=>b.get({url:"/bi/common/org/info",params:o},{isOnlyResult:!0}),ct=o=>b.post({url:"/baseset/common/list-station",params:o}),mt=o=>b.get({url:"/bi/elec/lossPower",params:o},{}),pt=o=>b.get({url:"/bi/elec/lossPower/station",params:o},{}),ht=o=>b.get({url:"/bi/elec/lossPower/chart",params:o},{}),K=_([{title:"所属公司",dataIndex:"stationOrganName",width:150,resizable:!0},{title:"生产损失",dataIndex:"productionLosses",width:150,resizable:!0},{title:"自然灾害",dataIndex:"naturalCalamities",width:150,resizable:!0},{title:"电网及限电",dataIndex:"powerGrid",width:150,resizable:!0},{title:"其他",dataIndex:"other",width:150,resizable:!0},{title:"合计",dataIndex:"total",width:150,resizable:!0},{title:"占比",dataIndex:"rate",width:150,resizable:!0}]),W=o=>{const a=[{title:"所属公司",dataIndex:"stationOrganName",width:150,customCell:i=>({rowSpan:i.rowOrgSpan}),resizable:!0},{title:"电站名称",dataIndex:"stationName",width:150,customCell:i=>({rowSpan:i.rowStationSpan}),resizable:!0},{title:"期数",dataIndex:"periodName",width:150,resizable:!0},{title:"并网容量(MW)",dataIndex:"connectCapacity",width:150,resizable:!0},{title:"合计",dataIndex:"total",width:150,resizable:!0},{title:"生产损失",dataIndex:"filed1",children:[{title:"工程原因",dataIndex:"engineeringReasons",width:150,resizable:!0},{title:"设备原因",dataIndex:"equipmentReasons",width:150,resizable:!0},{title:"运维管理",dataIndex:"operation",width:150,resizable:!0},{title:"计划停运",dataIndex:"scheduledOutage",width:150,resizable:!0},{title:"小计",dataIndex:"scssTotal",width:150,resizable:!0}]},{title:"自然灾害",dataIndex:"filed2",children:[{title:"台风/大风",dataIndex:"typhoon",width:150,resizable:!0},{title:"地震",dataIndex:"earthquake",width:150,resizable:!0},{title:"洪涝",dataIndex:"flood",width:150,resizable:!0},{title:"冰雹/覆冰",dataIndex:"hail",width:150,resizable:!0},{title:"雷暴",dataIndex:"thunderstorm",width:150,resizable:!0},{title:"其他灾害",dataIndex:"otherDisasters",width:150,resizable:!0},{title:"小计",dataIndex:"zrzhTotal",width:150,resizable:!0}]},{title:"电网及限电",dataIndex:"filed3",children:[{title:"电网侧",dataIndex:"powerGrid",width:150,resizable:!0},{title:"弃光限电",dataIndex:"abandoningLight",width:150,resizable:!0},{title:"小计",dataIndex:"dwTotal",width:150,resizable:!0}]},{title:"其他",dataIndex:"filed4",children:[{title:"其他",dataIndex:"other",width:150,resizable:!0},{title:"小计",dataIndex:"otherTotal",width:150,resizable:!0}]}];return z().isMultiOrganization||a.shift(),a},bt=o=>[{field:"caliber",label:"统计口径",component:"Select",required:!0,defaultValue:"station",componentProps:{options:[{value:"station",label:"电站"},{value:"period",label:"分期"}]}},{field:"dateCycle",label:"时间维度",component:"Select",required:!0,defaultValue:"year",componentProps:{options:[{value:"year",label:"年份"},{value:"month",label:"月份"},{value:"day",label:"自然日"}]}},{field:"yearValue",label:"年份",component:"YearPicker",defaultValue:Q(new Date).format("YYYY"),componentProps:{format:"YYYY",valueFormat:"YYYY",style:{width:"100%"}},show:({values:a})=>a.dateCycle=="year",dynamicRules:({values:a})=>a.dateCycle=="year"?[{required:!0,message:"年份必填"}]:[]},{field:"[startMonth, endMonth]",label:"月份",component:"RangePicker",componentProps:{picker:"month",format:"YYYY-MM",valueFormat:"YYYY-MM",style:{width:"100%"},placeholder:["开始月份","结束月份"]},show:({values:a})=>a.dateCycle=="month",dynamicRules:({values:a})=>a.dateCycle=="month"?[{required:!0,message:"月份必填"}]:[]},{field:"[startDate, endDate]",label:"时间段",component:"RangePicker",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",style:{width:"100%"},placeholder:["开始时间","结束时间"]},show:({values:a})=>a.dateCycle=="day",dynamicRules:({values:a})=>a.dateCycle=="day"?[{required:!0,message:"时间段必填"}]:[]},{field:"orgId",label:"所属公司",component:"ApiSelect",componentProps:{options:[],api:ut,placeholder:"请选择所属公司"},show:z().isMultiOrganization},{field:"stationId",label:"电站名称",component:"ApiSelect",componentProps:{options:[],api:()=>g(void 0,null,function*(){const a=yield ct({}),i=[];return a.result.forEach(f=>{i.push({value:f.powerStationId,label:f.powerStationName})}),i}),placeholder:"请输入电站名称"}}],ft={class:"tab-model"},gt={class:"tab-button-div"},wt={id:"loss-table-tab-content",class:"tab-table-div"},xt={class:"tab-content"},yt={class:"tab-content-top"},It={class:"tab-content-bottom"},_t={key:0,class:"chart"},vt={class:"echart-stackbarchart"},Yt=tt({__name:"index",setup(o){const{t:a}=H(),{createConfirm:i,createMessage:f}=Z(),d=_("summary"),x=_(!0),v=_(),n=et({}),u=t=>{t==="summary"?(O(),x.value=!0,v.value=document.body.offsetWidth-120):t==="detail"&&(R(),x.value=!1)},y=at(),{currentRoute:A}=y,c=l(A).query;ot(()=>{if(c){const t=Y();c.startDate&&(t.dateCycle=c.dateType,t.startMonth=c.startDate,t.endMonth=c.endDate),c.orgId!=null&&(t.orgId=c.id),c.stationId!=null&&(t.stationId=c.stationId),M(t),z().isMultiOrganization||(d.value="detail")}});const[G,{resetFields:U,getFieldsValue:Y,setFieldsValue:M}]=st({labelWidth:100,baseColProps:{span:8},actionColOptions:{span:24},autoAdvancedLine:1,schemas:bt(),compact:!0,showAdvancedButton:!0,resetButtonOptions:{onClick:()=>g(this,null,function*(){yield U(),O(),R()})},submitFunc:()=>(O(),R(),Promise.resolve())}),S=_({categories:[],barData:[[],[],[],[]],barNames:["生产损失","自然灾害","电网及限电","其他"]}),[X,{reload:O}]=j({api:()=>g(this,null,function*(){const t=Y();t.dateCycle=="month"&&(t.startMonth=C(t.startMonth,"YYYY-MM"),t.endMonth=C(t.endMonth,"YYYY-MM"),M(t)),Object.assign(n,t);let e=yield mt(n),s=yield ht(t);return s.result&&(S.value.barData=s.result.barData,S.value.categories=s.result.categories),e.result}),target:"#loss-table-tab-content",targetTabKey:"summary",targetTabValue:d,columns:K,useSearchForm:!1,bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0}),[$,{reload:R}]=j({api:()=>g(this,null,function*(){const t=Y();return t.dateCycle=="month"&&(t.startMonth=C(t.startMonth,"YYYY-MM"),t.endMonth=C(t.endMonth,"YYYY-MM"),M(t)),Object.assign(n,t),(yield pt(n)).result}),target:"#loss-table-tab-content",targetTabKey:"detail",targetTabValue:d,columns:W(),useSearchForm:!1,bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0,afterFetch:function(t){const e={};for(let s=0;s<t.length;s++){const r=t[s];e[r.stationOrganId]&&e[r.stationOrganId]++,e[r.stationId]&&e[r.stationId]++,e[r.stationOrganId]||(e[r.stationOrganId]=1),e[r.stationId]||(e[r.stationId]=1)}for(let s=0;s<t.length;s++){const r=t[s];for(const m in e)r.stationOrganId===m&&(r.rowOrgSpan=e[m],e[m]=0),r.stationId===m&&(r.rowStationSpan=e[m],e[m]=0)}return t}});function k(){i({title:"提示",iconType:"warning",content:"确定要导出所有记录？",onOk(){return g(this,null,function*(){Object.assign(n,Y()),d.value=="summary"?(n.filename="统计报表.xls",n.excelList=K,yield dt(n).then(e=>{E(e==null?void 0:e.data,n.filename)})):d.value=="detail"&&(n.filename="电站损失明细.xls",n.excelList=W(),yield lt(n).then(e=>{E(e==null?void 0:e.data,n.filename)})),f.success(a("common.exportSuccessText"))})}})}return(t,e)=>{const s=D("a-button"),r=D("a-tab-pane"),m=D("a-tabs");return P(),N("div",ft,[w("div",gt,[p(l(it),{onRegister:l(G)},null,8,["onRegister"])]),w("div",wt,[p(m,{activeKey:d.value,"onUpdate:activeKey":e[2]||(e[2]=I=>d.value=I),onChange:u},{default:h(()=>[l(z)().isMultiOrganization?(P(),nt(r,{key:"summary",tab:"统计报表"},{default:h(()=>[w("div",xt,[w("div",yt,[p(l(L),{onRegister:l(X),onResizeColumn:e[0]||(e[0]=(I,T)=>T.width=I)},{toolbar:h(()=>[p(s,{class:"yellow-btn",preIcon:l(F).EXPORT,onClick:k},{default:h(()=>[V(q(l(a)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),w("div",It,[x.value?(P(),N("div",_t,[w("div",vt,[p(rt,{data:S.value,width:v.value,height:320,axisColor:"#33CCFF",axisWidth:"0.4",legendColor:"#33333"},null,8,["data","width"])])])):B("",!0)])])]),_:1})):B("",!0),p(r,{key:"detail",tab:"电站损失明细"},{default:h(()=>[p(l(L),{onRegister:l($),onResizeColumn:e[1]||(e[1]=(I,T)=>T.width=I)},{toolbar:h(()=>[p(s,{class:"yellow-btn",preIcon:l(F).EXPORT,onClick:k},{default:h(()=>[V(q(l(a)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["activeKey"])])])}}});const Qt=J(Yt,[["__scopeId","data-v-0a3dee7e"]]);export{Qt as default};
//# sourceMappingURL=index-9dac4035.js.map
