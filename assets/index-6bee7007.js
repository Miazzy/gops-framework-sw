var k=Object.defineProperty;var M=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var v=(a,t,e)=>t in a?k(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,x=(a,t)=>{for(var e in t||(t={}))A.call(t,e)&&v(a,e,t[e]);if(M)for(var e of M(t))C.call(t,e)&&v(a,e,t[e]);return a};var g=(a,t,e)=>new Promise((o,n)=>{var c=s=>{try{i(e.next(s))}catch(u){n(u)}},m=s=>{try{i(e.throw(s))}catch(u){n(u)}},i=s=>s.done?o(s.value):Promise.resolve(s.value).then(c,m);i((e=e.apply(a,t)).next())});import{a0 as R,a5 as w,b as O,au as P,aj as S,av as F,_ as L}from"./index.js";import{B as E}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as W}from"./useTable-109483b3.js";import{K as y}from"./antd-15ac76ed.js";import{P as j}from"./index-20519caf.js";import{e as V}from"./download-03e71dd5.js";import"./index-316f6ffb.js";import{u as q}from"./useRender-21ce56fb.js";import{e as D}from"./index-5d738211.js";import{r as B,d as N,k as _,o as H,al as $,Z as K,a9 as Q,aa as b,f as Y,u as f,E as U,ad as X}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";const Z=a=>w.get({url:"/bi/maintenance/workorder/list",params:a},{isOnlyResult:!0}),G=a=>w.download({url:"/bi/maintenance/workorder/export-excel",params:a},{isReturnNativeResponse:!0}),J=a=>w.get({url:"/bi/common/org/info",params:a},{isOnlyResult:!0}),d=(a,t,e,o)=>{if(!e.stationOrganId)return a;const n={status:"0,1,2"};e.stationId==="subtotal"?n.stationOrganId=e.stationOrganId:n.stationId=e.stationId;const c=["qx","yh","cc","zjqx","lsjg","ff"],m=["resolved","unresolved"];if(c.includes(t.dataIndex))n.workOrderType=t.dataIndex;else if(m.includes(t.dataIndex)){const u=t.dataIndex==="resolved"?"1":"0";n.result=u}else t.dataIndex==="overdue"&&(n.overdue="1");const i=o.value;i.dateType==="year"&&i.year?(n.startMonth=`${i.year}-01`,n.endMonth=`${i.year}-12`):i.dateType==="month"&&i.startMonth&&i.endMonth&&(n.startMonth=i.startMonth,n.endMonth=i.endMonth);const s="/po/workorder/index";return q.renderIframeLink(s,void 0,n,a)},ee=a=>{const t=[{title:"所属公司",dataIndex:"stationOrganName",headAlign:"center",align:"left",resizable:!0,width:220},{title:"电站名称",dataIndex:"stationName",headAlign:"center",align:"left",resizable:!0,width:220},{title:"工单总数",dataIndex:"total",headAlign:"center",align:"right",resizable:!0,width:150,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"工单类型",width:720,children:[{title:"缺陷工单数",dataIndex:"qx",headAlign:"center",align:"right",resizable:!0,minWidth:120,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"隐患工单数",dataIndex:"yh",headAlign:"center",align:"right",resizable:!0,minWidth:120,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"除草工单数",dataIndex:"cc",headAlign:"center",align:"right",resizable:!0,minWidth:120,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"组件清洗工单数",dataIndex:"zjqx",headAlign:"center",align:"right",resizable:!0,minWidth:120,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"螺栓紧固工单数",dataIndex:"lsjg",headAlign:"center",align:"right",resizable:!0,minWidth:120,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"防腐工单数",dataIndex:"ff",headAlign:"center",align:"right",resizable:!0,minWidth:120,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)}]},{title:"已闭环工单数",dataIndex:"resolved",headAlign:"center",align:"right",resizable:!0,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"未闭环工单数",dataIndex:"unresolved",headAlign:"center",align:"right",resizable:!0,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"逾期工单数",dataIndex:"overdue",headAlign:"center",align:"right",resizable:!0,width:120,customRender:({text:e,column:o,record:n})=>d(e,o,n,a)},{title:"工单闭环率(%)",dataIndex:"resolvedRate",headAlign:"center",align:"right",resizable:!0,width:120},{title:"逾期占比(%)",dataIndex:"overdueRate",headAlign:"center",align:"right",resizable:!0,width:120}];if(R().isMultiOrganization)return t;{const[,...e]=t;return[...e]}},te=String(y().year()),ne=()=>{const a=B({organId:void 0});return{baseColProps:{span:8},labelWidth:120,autoAdvancedLine:1,schemas:[{field:"dateType",label:"时间维度",component:"Select",defaultValue:"year",componentProps:({formModel:t})=>({options:[{value:"year",label:"年度"},{value:"month",label:"月份"}],onChange:e=>{e==="year"?t["[startMonth, endMonth]"]=[]:e==="month"?t.year="":(t.year="",t["[startMonth, endMonth]"]=[])}})},{field:"year",label:"创建时间",component:"DatePicker",defaultValue:te,componentProps:{format:"YYYY",valueFormat:"YYYY",picker:"year",style:"width: 100%"},show:({values:t})=>t.dateType==="year"},{field:"[startMonth, endMonth]",label:"创建时间",component:"RangePicker",componentProps:{format:"YYYY-MM",valueFormat:"YYYY-MM",picker:"month",placeholder:["开始月份","结束月份"],style:"width: 100%"},show:({values:t})=>t.dateType==="month"},{field:"stationOrganId",label:"所属公司",component:"ApiSelect",componentProps:({formModel:t})=>({api:()=>g(void 0,null,function*(){const e=yield J({}),o=[];return e&&e.length>0&&e.forEach(n=>{o.push({value:n.id,label:n.label})}),o}),onChange:e=>{a.organId=e,t.stationIds=[]}}),show:R().isMultiOrganization},{field:"stationIds",label:"电站名称",component:"ApiSelect",componentProps:{api:()=>g(void 0,null,function*(){const t=yield D(x({},a)),e=[];return t&&t.length>0&&t.forEach(o=>{e.push({value:o.id,label:o.name})}),e}),mode:"multiple",maxTagCount:"responsive",filterOption:(t,e)=>e.label.toLowerCase().indexOf(t.toLowerCase())>=0}}]}},ae=N({__name:"index",setup(a){const{t}=O(),{createConfirm:e,createMessage:o}=P(),n=_({}),{params:c}=S(),m=()=>{const r=I().getFieldsValue();r.stationIds&&r.stationIds.length>0&&(r.stationId=r.stationIds.join(","));let l={};for(const h in r)h!=="stationIds"&&(l[h]=r[h]);return r.startMonth&&(l.startMonth=y(r.startMonth).format("YYYY-MM")),r.endMonth&&(l.endMonth=y(r.endMonth).format("YYYY-MM")),n.value=l,l},i=()=>g(this,null,function*(){const p=m();return yield Z(p)}),s=_("工单统计"),[u,{getForm:I}]=W({title:s,api:i,columns:ee(n),useSearchForm:!0,formConfig:ne(),bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0});function T(){e({title:t("common.message.confirmTitle"),iconType:"warning",content:t("common.message.exportMessage"),onOk(){return g(this,null,function*(){const r=m();r.filename=`${s.value}.xls`,yield G(r).then(l=>{V(l==null?void 0:l.data,r.filename)}),r.filename=null,o.success(t("common.exportSuccessText"))})}})}return H(()=>{const p=I(),r=x({},c);r.startDate&&(r.startMonth=c.startDate),r.endDate&&(r.endMonth=c.endDate),r.stationIds?r.stationIds=r.stationIds.split(","):r.stationIds=[],p.setFieldsValue(r)}),(p,r)=>{const l=$("a-button");return K(),Q(f(j),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:b(()=>[Y(f(E),{class:"fix-basic-table",onRegister:f(u),onResizeColumn:r[0]||(r[0]=(h,z)=>z.width=h)},{toolbar:b(()=>[Y(l,{class:"yellow-btn",preIcon:f(F).EXPORT,onClick:T},{default:b(()=>[U(X(f(t)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})}}});const Ce=L(ae,[["__scopeId","data-v-eaea7349"]]);export{Ce as default};
//# sourceMappingURL=index-6bee7007.js.map
