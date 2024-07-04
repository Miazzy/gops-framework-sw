var h=(e,d,r)=>new Promise((x,i)=>{var f=s=>{try{w(r.next(s))}catch(n){i(n)}},z=s=>{try{w(r.throw(s))}catch(n){i(n)}},w=s=>s.done?x(s.value):Promise.resolve(s.value).then(f,z);w((r=r.apply(e,d)).next())});import{B as O}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as k}from"./useTable-109483b3.js";import{K as R}from"./antd-15ac76ed.js";import{a0 as y,a5 as I,b as W,au as v,av as F,aO as c}from"./index.js";import{d as D,r as T,ax as P,u as m,o as _,k as V,al as N,Z as q,a9 as U,aa as g,f as Y,E as L,ad as B}from"./vue-71d1abb3.js";import{e as j}from"./download-03e71dd5.js";import{P as A}from"./index-20519caf.js";import{a as M}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";const H=e=>I.post({url:"/bi/elec/export-powerContrast",params:e,responseType:"blob"},{isReturnNativeResponse:!0}),G=e=>I.get({url:"/bi/elec/powerContrast",params:e},{isOnlyResult:!0}),K=e=>I.get({url:"/bi/common/org/info",params:e},{isOnlyResult:!0}),J=e=>I.post({url:"/baseset/common/list-station",params:e}),X=[{label:"电站",value:"station"},{label:"分期",value:"period"}],Z={labelWidth:120,actionColOptions:{span:24},autoAdvancedLine:1,showAdvancedButton:!0,baseColProps:{span:7},autoSubmitOnEnter:!0,noHideBtnFlag:!0,schemas:[{field:"caliber",component:"Select",label:"统计口径",defaultValue:"station",componentProps:{options:X},required:!0},{field:"dateCycle",label:"时间维度",component:"Select",required:!0,defaultValue:"year",componentProps:{options:[{value:"year",label:"年份"},{value:"month",label:"月份"},{value:"day",label:"自然日"}]}},{field:"yearValue",label:"年份",component:"YearPicker",defaultValue:R(new Date).format("YYYY"),componentProps:{format:"YYYY",valueFormat:"YYYY",style:{width:"100%"}},show:({values:e})=>e.dateCycle=="year",dynamicRules:({values:e})=>e.dateCycle=="year"?[{required:!0,message:"年份必填"}]:[]},{field:"[startMonth, endMonth]",label:"月份",component:"RangePicker",componentProps:{picker:"month",format:"YYYY-MM",valueFormat:"YYYY-MM",style:{width:"100%"},placeholder:["开始月份","结束月份"]},show:({values:e})=>e.dateCycle=="month",dynamicRules:({values:e})=>e.dateCycle=="month"?[{required:!0,message:"月份必填"}]:[]},{field:"[startDate, endDate]",label:"时间段",component:"RangePicker",componentProps:{format:"YYYY-MM-DD",style:{width:"100%"},valueFormat:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},show:({values:e})=>e.dateCycle=="day",dynamicRules:({values:e})=>e.dateCycle=="day"?[{required:!0,message:"时间段必填"}]:[]},{field:"orgId",label:"所属公司",component:"ApiSelect",componentProps:{options:[],api:K,placeholder:"请选择所属公司"},show:y().isMultiOrganization},{field:"stationId",label:"电站名称",component:"ApiSelect",componentProps:{options:[],api:()=>h(void 0,null,function*(){const e=yield J({}),d=[];return e.result.forEach(r=>{d.push({value:r.powerStationId,label:r.powerStationName})}),d}),placeholder:"请输入电站名称"}}]},Q=[{title:"所属公司",dataIndex:"stationOrganName",width:150,customCell:e=>({rowSpan:e.rowOrgSpan}),resizable:!0,ifShow:y().isMultiOrganization},{title:"电站名称",dataIndex:"stationName",width:150,customCell:e=>({rowSpan:e.rowStationSpan}),resizable:!0},{title:"分期",dataIndex:"periodName",width:150,resizable:!0},{title:"并网容量(MW)",dataIndex:"connectCapacity",width:120,resizable:!0},{title:"环境资源指标",dataIndex:"filed1",children:[{title:"辐照量(万KJ/m²)",dataIndex:"radiation",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tRadiation",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hRadiation",width:80,resizable:!0},{title:"晴天天数",dataIndex:"dayWeather",width:100,resizable:!0}]},{title:"电量指标",dataIndex:"filed2",children:[{title:"理论发电量(万kWh)",dataIndex:"theoElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tTheoElec",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hTheoElec",width:80,resizable:!0},{title:"实发电量(万kWh)",dataIndex:"genElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tGenElec",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hGenElec",width:80,resizable:!0},{title:"上网电量(万kWh)",dataIndex:"onlineElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tOnlineElec",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hOnlineElec",width:80,resizable:!0},{title:"结算电量(万kWh)",dataIndex:"settlementElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tSettlementElec",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hSettlementElec",width:80,resizable:!0}]},{title:"能耗指标",dataIndex:"filed3",children:[{title:"下网电量(万kWh)",dataIndex:"offlineElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tOfflineElec",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hOfflineElec",width:80,resizable:!0},{title:"综合厂用电量(万kWh)",dataIndex:"facUsed",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tFacUsed",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hFacUsed",width:80,resizable:!0},{title:"综合厂用电量率(%)",dataIndex:"facRate",width:150,resizable:!0},{title:"同比",dataIndex:"tFacRate",width:80,resizable:!0},{title:"环比",dataIndex:"hFacRate",width:80,resizable:!0}]},{title:"能效指标",dataIndex:"filed4",children:[{title:"利用小时数(h)",dataIndex:"uth",width:150,resizable:!0},{title:"同比",dataIndex:"tUth",width:80,resizable:!0},{title:"环比",dataIndex:"hUth",width:80,resizable:!0},{title:"单瓦发电量(kWh)",dataIndex:"dwfd",width:150,resizable:!0},{title:"同比",dataIndex:"tDwfd",width:80,resizable:!0},{title:"环比",dataIndex:"hDwfd",width:80,resizable:!0},{title:"系统效率(%)",dataIndex:"sys",width:150,resizable:!0},{title:"同比",dataIndex:"tSys",width:80,resizable:!0},{title:"环比",dataIndex:"hSys",width:80,resizable:!0}]},{title:"损失电量指标",dataIndex:"filed5",children:[{title:"损失电量(万kWh)",dataIndex:"totalLoss",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tTotalLoss",width:80,resizable:!0},{title:"环比(%)",dataIndex:"hTotalLoss",width:80,resizable:!0}]},{title:"计划电量指标",dataIndex:"filed6",children:[{title:"计划电量(万kWh)",dataIndex:"plannedElec",width:150,resizable:!0},{title:"减线损上网电量(万kWh)",dataIndex:"subOnline",width:160,resizable:!0},{title:"计划完成率",dataIndex:"rate",width:100,resizable:!0},{title:"同比",dataIndex:"tRate",width:80,resizable:!0},{title:"环比",dataIndex:"hRate",width:80,resizable:!0}]}],$=[{title:"所属公司",dataIndex:"stationOrganName",width:150,customCell:e=>({rowSpan:e.rowOrgSpan}),resizable:!0,ifShow:y().isMultiOrganization},{title:"电站名称",dataIndex:"stationName",width:150,customCell:e=>({rowSpan:e.rowStationSpan}),resizable:!0},{title:"分期",dataIndex:"periodName",width:150,resizable:!0},{title:"并网容量(MW)",dataIndex:"connectCapacity",width:120,resizable:!0},{title:"环境资源指标",dataIndex:"filed1",children:[{title:"辐照量(万KJ/m²)",dataIndex:"radiation",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tRadiation",width:80,resizable:!0},{title:"晴天天数",dataIndex:"dayWeather",width:100,resizable:!0}]},{title:"电量指标",dataIndex:"filed2",children:[{title:"理论发电量(万kWh)",dataIndex:"theoElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tTheoElec",width:80,resizable:!0},{title:"实发电量(万kWh)",dataIndex:"genElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tGenElec",width:80,resizable:!0},{title:"上网电量(万kWh)",dataIndex:"onlineElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tOnlineElec",width:80,resizable:!0},{title:"结算电量(万kWh)",dataIndex:"settlementElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tSettlementElec",width:80,resizable:!0}]},{title:"能耗指标",dataIndex:"filed3",children:[{title:"下网电量(万kWh)",dataIndex:"offlineElec",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tOfflineElec",width:80,resizable:!0},{title:"外接厂用电量(万kWh)",dataIndex:"facUsed",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tFacUsed",width:80,resizable:!0},{title:"综合厂用电量率(%)",dataIndex:"facRate",width:150,resizable:!0},{title:"同比",dataIndex:"tFacRate",width:80,resizable:!0}]},{title:"能效指标",dataIndex:"filed4",children:[{title:"利用小时数(h)",dataIndex:"uth",width:150,resizable:!0},{title:"同比",dataIndex:"tUth",width:80,resizable:!0},{title:"单瓦发电量(kWh)",dataIndex:"dwfd",width:150,resizable:!0},{title:"同比",dataIndex:"tDwfd",width:80,resizable:!0},{title:"系统效率(%)",dataIndex:"sys",width:150,resizable:!0},{title:"同比",dataIndex:"tSys",width:80,resizable:!0}]},{title:"损失电量指标",dataIndex:"filed5",children:[{title:"损失电量(万kWh)",dataIndex:"totalLoss",width:150,resizable:!0},{title:"同比(%)",dataIndex:"tTotalLoss",width:80,resizable:!0}]},{title:"计划电量指标",dataIndex:"filed6",children:[{title:"计划电量(万kWh)",dataIndex:"plannedElec",width:150,resizable:!0},{title:"减线损上网电量(万kWh)",dataIndex:"subOnline",width:160,resizable:!0},{title:"计划完成率",dataIndex:"rate",width:100,resizable:!0},{title:"同比",dataIndex:"tRate",width:80,resizable:!0}]}],Ee=D({__name:"index",setup(e){const{t:d}=W(),{createConfirm:r,createMessage:x}=v(),i=T({});function f(){r({title:d("common.message.confirmTitle"),iconType:"warning",content:d("common.message.exportMessage"),onOk(){return h(this,null,function*(){Object.assign(i,p().getFieldsValue()),i.dateCycle=="month"&&i.startMonth.length!=7&&(i.startMonth=c(i.startMonth,"YYYY-MM"),i.endMonth=c(i.endMonth,"YYYY-MM")),i.filename="电量对比统计.xls",i.excelList=b,yield H(i).then(a=>{j(a==null?void 0:a.data,i.filename)}),i.filename=null,i.excelList=null,x.success(d("common.exportSuccessText"))})}})}const z=P(),{currentRoute:w}=z,n=m(w).query,S=()=>h(this,null,function*(){let t=p().getFieldsValue();return t.dateCycle=="month"&&t.startMonth.length!=7&&(t.startMonth=c(t.startMonth,"YYYY-MM"),t.endMonth=c(t.endMonth,"YYYY-MM")),yield E(),yield G(t)});_(()=>h(this,null,function*(){if(n){const t=p().getFieldsValue();n.startDate&&(t.dateCycle=n.dateType,t.startMonth=n.startDate,t.endMonth=n.endDate),n.stationId!=null&&(t.stationId=n.stationId),n.orgId!=null&&(t.orgId=n.orgId),p().setFieldsValue(t)}}));const b=V([]),E=()=>h(this,null,function*(){b.value=[];const t=p().getFieldsValue();t.dateCycle==="month"&&c(t.startMonth,"YYYY-MM")==c(t.endMonth,"YYYY-MM")?M(b.value,Q):M(b.value,$)}),[C,{getForm:p}]=k({title:"电量对比统计分析",api:S,columns:b,formConfig:Z,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!0,showTableSetting:!0,tableSetting:{redo:!1,size:!1,setting:!1,fullScreen:!1},afterFetch:function(t){const a={};for(let o=0;o<t.length;o++){const l=t[o];a[l.stationOrganId]&&a[l.stationOrganId]++,a[l.stationId]&&a[l.stationId]++,a[l.stationOrganId]||(a[l.stationOrganId]=1),a[l.stationId]||(a[l.stationId]=1)}for(let o=0;o<t.length;o++){const l=t[o];for(const u in a)l.stationOrganId===u&&(l.rowOrgSpan=a[u],a[u]=0),l.stationId===u&&(l.rowStationSpan=a[u],a[u]=0)}return t}});return(t,a)=>{const o=N("a-button");return q(),U(m(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:g(()=>[Y(m(O),{onRegister:m(C),onResizeColumn:a[0]||(a[0]=(l,u)=>u.width=l)},{toolbar:g(()=>[Y(o,{class:"yellow-btn",preIcon:m(F).EXPORT,onClick:f},{default:g(()=>[L(B(m(d)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})}}});export{Ee as default};
//# sourceMappingURL=index-1e5c357e.js.map
