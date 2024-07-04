var tt=Object.defineProperty;var R=Object.getOwnPropertySymbols;var et=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var Y=(o,e,t)=>e in o?tt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,w=(o,e)=>{for(var t in e||(e={}))et.call(e,t)&&Y(o,t,e[t]);if(R)for(var t of R(e))at.call(e,t)&&Y(o,t,e[t]);return o};var x=(o,e,t)=>new Promise((c,p)=>{var b=m=>{try{I(t.next(m))}catch(_){p(_)}},d=m=>{try{I(t.throw(m))}catch(_){p(_)}},I=m=>m.done?c(m.value):Promise.resolve(m.value).then(b,d);I((t=t.apply(o,e)).next())});import{a0 as y,a5 as O,b as nt,au as ot,aj as st,av as k,_ as it}from"./index.js";import{u as rt,B as lt}from"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{B as E}from"./BasicTable-0434a334.js";import"./index-085d06c7.js";import{u as F}from"./useTable-109483b3.js";import{K as B}from"./antd-15ac76ed.js";import{e as ct}from"./download-03e71dd5.js";import{e as dt}from"./index-5d738211.js";import{k as H,d as mt,r as ut,o as pt,al as S,Z as P,_ as gt,$ as L,f as g,u as l,aa as f,a9 as ft,E as N,ad as V,ac as ht}from"./vue-71d1abb3.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const bt=o=>O.get({url:"/bi/maintenance/assess/list",params:o},{isOnlyResult:!0}),xt=o=>O.post({url:"/bi/maintenance/assess/export-excel",params:o,responseType:"blob"},{isOnlyResult:!0}),It=o=>O.get({url:"/bi/common/org/info",params:o},{isOnlyResult:!0}),h=H({type:"Money",format:"#,###.000000"}),j=[{title:"考核电量(MWH)",dataIndex:"totalElectricity",headAlign:"center",align:"right",resizable:!0,width:150},{title:"考核费用(万元)",children:[{title:"考核总费用",dataIndex:"totalAmount",headAlign:"center",align:"right",resizable:!0,width:150,format:h},{title:"分摊总费用",dataIndex:"compensateShareAmount",headAlign:"center",align:"right",resizable:!0,width:150,format:h},{title:"考核分摊小计",dataIndex:"assessmentReturn",headAlign:"center",align:"right",resizable:!0,width:150,format:h}]},{title:"补偿费用(万元)",children:[{title:"补偿总费用",dataIndex:"compensateTotalAmount",headAlign:"center",align:"right",resizable:!0,width:150,format:h},{title:"返还总费用",dataIndex:"returnAmount",headAlign:"center",align:"right",resizable:!0,width:150,format:h},{title:"补偿返还小计",dataIndex:"compensationAllocation",headAlign:"center",align:"right",resizable:!0,width:150,format:h}]},{title:"净收入(万元)",dataIndex:"netIncome",headAlign:"center",align:"right",resizable:!0,width:150,format:h}],K=[{title:"所属公司",dataIndex:"stationOrganName",headAlign:"center",align:"left",resizable:!0,width:220},...j],D=[{title:"所属公司",dataIndex:"stationOrganName",headAlign:"center",align:"left",resizable:!0,width:220,customCell:o=>({rowSpan:o.rowSpan}),ifShow:y().isMultiOrganization},{title:"电站名称",dataIndex:"stationName",headAlign:"center",align:"left",resizable:!0,width:220},{title:"考核维度",dataIndex:"periodName",resizable:!0,width:100},...j],_t=o=>[{field:"[startMonth, endMonth]",label:"考核月份",component:"RangePicker",componentProps:{format:"YYYY-MM",valueFormat:"YYYY-MM",picker:"month",placeholder:["开始月份","结束月份"],style:"width: 100%"}},{field:"stationOrganId",label:"所属公司",component:"ApiSelect",componentProps:({formModel:e})=>({api:()=>x(void 0,null,function*(){const t=yield It({}),c=[];return t&&t.length>0&&t.forEach(p=>{c.push({value:p.id,label:p.label})}),c}),onChange:t=>{o.organId=t,e.stationIds=[]}}),show:y().isMultiOrganization},{field:"stationIds",label:"电站名称",component:"ApiSelect",componentProps:{api:()=>x(void 0,null,function*(){const e=yield dt(w({},o)),t=[];return e&&e.length>0&&e.forEach(c=>{t.push({value:c.id,label:c.name})}),t}),mode:"multiple",maxTagCount:"responsive",filterOption:(e,t)=>t.label.toLowerCase().indexOf(e.toLowerCase())>=0}}],wt={class:"tab-model"},yt={class:"tab-button-div"},Mt={id:"maintenance-assess-table-tab-content",class:"tab-table-div tab-table-content"},vt=mt({__name:"index",setup(o){const{t:e}=nt(),{createConfirm:t,createMessage:c}=ot(),p=ut({organId:null}),{params:b}=st(),d=H("1");(!y().isMultiOrganization||b.dimension==="station")&&(d.value="2");const[I,{resetFields:m,setFieldsValue:_,getFieldsValue:q}]=rt({labelWidth:120,baseColProps:{span:8},actionColOptions:{span:24},autoAdvancedLine:1,schemas:_t(p),compact:!0,showAdvancedButton:!0,resetButtonOptions:{onClick:()=>x(this,null,function*(){yield m(),p.organId=null,M(),v()})},submitFunc:()=>(M(),v(),Promise.resolve())}),A=a=>{const n=w({},q());n.isStation=a,n.stationIds&&n.stationIds.length>0&&(n.stationId=n.stationIds.join(","));let s={};for(const i in n)i!=="stationIds"&&(s[i]=n[i]);return s.startMonth&&(s.startMonth=B(s.startMonth).format("YYYY-MM")),s.endMonth&&(s.endMonth=B(s.endMonth).format("YYYY-MM")),s},T=a=>x(this,null,function*(){const n=A(a);return yield bt(n)}),[U,{reload:M,redoHeight:W}]=F({api:()=>T(!1),target:"#maintenance-assess-table-tab-content",targetTabKey:"1",targetTabValue:d,columns:K,useSearchForm:!1,bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0}),[X,{reload:v,redoHeight:Q}]=F({api:()=>T(!0),target:"#maintenance-assess-table-tab-content",targetTabKey:"2",targetTabValue:d,columns:D,useSearchForm:!1,bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0,afterFetch:function(a){const n={};for(let s=0;s<a.length;s++){const i=a[s];if(n[i.stationOrganId]){n[i.stationOrganId]++;continue}n[i.stationOrganId]=1}for(let s=0;s<a.length;s++){const i=a[s];for(const r in n)i.stationOrganId===r&&(i.rowSpan=n[r],n[r]=0)}return a}});function Z(){z(!1,"统计报表.xlsx",K)}function $(){z(!0,"电站明细.xlsx",D)}function z(a,n,s){t({title:e("common.message.confirmTitle"),iconType:"warning",content:e("common.message.exportMessage"),onOk(){return x(this,null,function*(){const r=A(a);r.filename=n,r.excelList=s,yield xt(r).then(u=>{ct(u==null?void 0:u.data,r.filename)}),r.filename=null,c.success(e("common.exportSuccessText"))})}})}const G=a=>{a==="1"?M():a==="2"&&v()},J=()=>{d.value==="1"?W():d.value==="2"&&Q()};return pt(()=>{const a=w({},b);a.startDate&&(a.startMonth=b.startDate),a.endDate&&(a.endMonth=b.endDate),a.stationIds?a.stationIds=a.stationIds.split(","):a.stationIds=[],_(a)}),(a,n)=>{const s=S("a-button"),i=S("a-tab-pane"),r=S("a-tabs");return P(),gt("div",wt,[L("div",yt,[g(l(lt),{onRegister:l(I),onAdvancedChange:J},null,8,["onRegister"])]),L("div",Mt,[g(r,{activeKey:d.value,"onUpdate:activeKey":n[2]||(n[2]=u=>d.value=u),onChange:G},{default:f(()=>[l(y)().isMultiOrganization?(P(),ft(i,{key:"1",tab:"统计报表"},{default:f(()=>[g(l(E),{onRegister:l(U),onResizeColumn:n[0]||(n[0]=(u,C)=>C.width=u)},{toolbar:f(()=>[g(s,{class:"yellow-btn",preIcon:l(k).EXPORT,onClick:Z},{default:f(()=>[N(V(l(e)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})):ht("",!0),g(i,{key:"2",tab:"电站明细","force-render":""},{default:f(()=>[g(l(E),{onRegister:l(X),onResizeColumn:n[1]||(n[1]=(u,C)=>C.width=u)},{toolbar:f(()=>[g(s,{class:"yellow-btn",preIcon:l(k).EXPORT,onClick:$},{default:f(()=>[N(V(l(e)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["activeKey"])])])}}});const Qt=it(vt,[["__scopeId","data-v-a38a9dc1"]]);export{Qt as default};
//# sourceMappingURL=index-eb8bed56.js.map
