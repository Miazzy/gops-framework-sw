var Z=Object.defineProperty;var O=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var A=(o,e,t)=>e in o?Z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,I=(o,e)=>{for(var t in e||(e={}))$.call(e,t)&&A(o,t,e[t]);if(O)for(var t of O(e))G.call(e,t)&&A(o,t,e[t]);return o};var f=(o,e,t)=>new Promise((l,m)=>{var h=c=>{try{b(t.next(c))}catch(x){m(x)}},d=c=>{try{b(t.throw(c))}catch(x){m(x)}},b=c=>c.done?l(c.value):Promise.resolve(c.value).then(h,d);b((t=t.apply(o,e)).next())});import{a0 as y,a5 as T,b as J,au as ee,aj as te,av as R,_ as ae}from"./index.js";import{u as ne,B as oe}from"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{B as P}from"./BasicTable-0434a334.js";import"./index-085d06c7.js";import{u as F}from"./useTable-109483b3.js";import{K as S}from"./antd-15ac76ed.js";import{e as ie}from"./download-03e71dd5.js";import{e as re}from"./index-5d738211.js";import{d as se,r as le,k as de,o as ce,al as M,Z as E,_ as ue,$ as B,f as g,u as s,aa as p,a9 as me,E as V,ad as D,ac as ge}from"./vue-71d1abb3.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const pe=o=>T.get({url:"/bi/maintenance/ticket/list",params:o},{isOnlyResult:!0}),he=o=>T.download({url:"/bi/maintenance/ticket/export-excel",params:o},{isReturnNativeResponse:!0}),fe=o=>T.get({url:"/bi/common/org/info",params:o},{isOnlyResult:!0}),N=[{title:"操作票",children:[{title:"开票数",dataIndex:"operationTotal",headAlign:"center",align:"right",resizable:!0,width:120},{title:"归档完成数",dataIndex:"operationDone",headAlign:"center",align:"right",resizable:!0,width:120},{title:"归档合格数",dataIndex:"operationQualified",headAlign:"center",align:"right",resizable:!0,width:120},{title:"合格率(%)",dataIndex:"operationQualifiedRate",headAlign:"center",align:"right",resizable:!0,width:120}]},{title:"电气第一种工作票",children:[{title:"开票数",dataIndex:"firstTotal",headAlign:"center",align:"right",resizable:!0,width:120},{title:"归档完成数",dataIndex:"firstDone",headAlign:"center",align:"right",resizable:!0,width:120},{title:"归档合格数",dataIndex:"firstQualified",headAlign:"center",align:"right",resizable:!0,width:120},{title:"合格率(%)",dataIndex:"firstQualifiedRate",headAlign:"center",align:"right",resizable:!0,width:120}]},{title:"电气第二种工作票",children:[{title:"开票数",dataIndex:"secondTotal",headAlign:"center",align:"right",resizable:!0,width:120},{title:"归档完成数",dataIndex:"secondDone",headAlign:"center",align:"right",resizable:!0,width:120},{title:"归档合格数",dataIndex:"secondQualified",headAlign:"center",align:"right",resizable:!0,width:120},{title:"合格率(%)",dataIndex:"secondQualifiedRate",headAlign:"center",align:"right",resizable:!0,width:120}]}],be=[{title:"所属公司",dataIndex:"stationOrganName",headAlign:"center",align:"left",resizable:!0,width:220},...N],xe=[{title:"所属公司",dataIndex:"stationOrganName",headAlign:"center",align:"left",resizable:!0,width:220,customCell:o=>({rowSpan:o.rowSpan}),ifShow:y().isMultiOrganization},{title:"电站名称",dataIndex:"stationName",headAlign:"center",align:"left",resizable:!0,width:220},...N],we=String(S().year()),Ie=o=>[{field:"dateType",label:"时间维度",component:"Select",defaultValue:"year",componentProps:({formModel:e})=>({options:[{value:"year",label:"年度"},{value:"month",label:"月份"}],onChange:t=>{t==="year"?e["[startMonth, endMonth]"]=[]:t==="month"?e.year="":(e.year="",e["[startMonth, endMonth]"]=[])}})},{field:"year",label:"年度",component:"DatePicker",defaultValue:we,componentProps:{format:"YYYY",valueFormat:"YYYY",picker:"year",style:"width: 100%"},show:({values:e})=>e.dateType==="year"},{field:"[startMonth, endMonth]",label:"月份",component:"RangePicker",componentProps:{format:"YYYY-MM",valueFormat:"YYYY-MM",picker:"month",placeholder:["开始月份","结束月份"],style:"width: 100%"},show:({values:e})=>e.dateType==="month"},{field:"stationOrganId",label:"所属公司",component:"ApiSelect",componentProps:({formModel:e})=>({api:()=>f(void 0,null,function*(){const t=yield fe({}),l=[];return t&&t.length>0&&t.forEach(m=>{l.push({value:m.id,label:m.label})}),l}),onChange:t=>{o.organId=t,e.stationIds=[]}}),show:y().isMultiOrganization},{field:"stationIds",label:"电站名称",component:"ApiSelect",componentProps:{api:()=>f(void 0,null,function*(){const e=yield re(I({},o)),t=[];return e&&e.length>0&&e.forEach(l=>{t.push({value:l.id,label:l.name})}),t}),mode:"multiple",maxTagCount:"responsive",filterOption:(e,t)=>t.label.toLowerCase().indexOf(e.toLowerCase())>=0}}],ye={class:"tab-model"},_e={class:"tab-button-div"},ve={id:"ticket-table-tab-content",class:"tab-table-div tab-table-content"},Ce=se({__name:"index",setup(o){const{t:e}=J(),{createConfirm:t,createMessage:l}=ee(),m=le({organId:null}),{params:h}=te(),d=de("1");(!y().isMultiOrganization||h.dimension==="station")&&(d.value="2");const[b,{resetFields:c,getFieldsValue:x,setFieldsValue:L}]=ne({labelWidth:120,baseColProps:{span:8},actionColOptions:{span:24},autoAdvancedLine:1,schemas:Ie(m),compact:!0,showAdvancedButton:!0,resetButtonOptions:{onClick:()=>f(this,null,function*(){yield c(),m.organId=null,_(),v()})},submitFunc:()=>(_(),v(),Promise.resolve())}),Y=a=>{const n=I({},x());n.isStation=a,n.stationIds&&n.stationIds.length>0&&(n.stationId=n.stationIds.join(","));let i={};for(const r in n)r!=="stationIds"&&(i[r]=n[r]);return i.startMonth&&(i.startMonth=S(i.startMonth).format("YYYY-MM")),i.endMonth&&(i.endMonth=S(i.endMonth).format("YYYY-MM")),i},k=a=>f(this,null,function*(){const n=Y(a);return yield pe(n)}),[Q,{reload:_,redoHeight:K}]=F({api:()=>k(!1),target:"#ticket-table-tab-content",targetTabKey:"1",targetTabValue:d,columns:be,useSearchForm:!1,bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0}),[H,{reload:v,redoHeight:j}]=F({api:()=>k(!0),target:"#ticket-table-tab-content",targetTabKey:"2",targetTabValue:d,columns:xe,useSearchForm:!1,bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0,afterFetch:function(a){const n={};for(let i=0;i<a.length;i++){const r=a[i];if(n[r.stationOrganId]){n[r.stationOrganId]++;continue}n[r.stationOrganId]=1}for(let i=0;i<a.length;i++){const r=a[i];for(const u in n)r.stationOrganId===u&&(r.rowSpan=n[u],n[u]=0)}return a}});function q(){z(!1,"统计报表.xls")}function U(){z(!0,"电站明细.xls")}function z(a,n){t({title:e("common.message.confirmTitle"),iconType:"warning",content:e("common.message.exportMessage"),onOk(){return f(this,null,function*(){const r=Y(a);r.filename=n,yield he(r).then(u=>{ie(u==null?void 0:u.data,r.filename)}),r.filename=null,l.success(e("common.exportSuccessText"))})}})}const X=a=>{a==="1"?_():a==="2"&&v()},W=()=>{d.value==="1"?K():d.value==="2"&&j()};return ce(()=>{const a=I({},h);a.startDate&&(a.startMonth=h.startDate),a.endDate&&(a.endMonth=h.endDate),a.stationIds?a.stationIds=a.stationIds.split(","):a.stationIds=[],L(a)}),(a,n)=>{const i=M("a-button"),r=M("a-tab-pane"),u=M("a-tabs");return E(),ue("div",ye,[B("div",_e,[g(s(oe),{onRegister:s(b),onAdvancedChange:W},null,8,["onRegister"])]),B("div",ve,[g(u,{activeKey:d.value,"onUpdate:activeKey":n[2]||(n[2]=w=>d.value=w),onChange:X},{default:p(()=>[s(y)().isMultiOrganization?(E(),me(r,{key:"1",tab:"统计报表"},{default:p(()=>[g(s(P),{onRegister:s(Q),onResizeColumn:n[0]||(n[0]=(w,C)=>C.width=w)},{toolbar:p(()=>[g(i,{class:"yellow-btn",preIcon:s(R).EXPORT,onClick:q},{default:p(()=>[V(D(s(e)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})):ge("",!0),g(r,{key:"2",tab:"电站明细","force-render":""},{default:p(()=>[g(s(P),{onRegister:s(H),onResizeColumn:n[1]||(n[1]=(w,C)=>C.width=w)},{toolbar:p(()=>[g(i,{class:"yellow-btn",preIcon:s(R).EXPORT,onClick:U},{default:p(()=>[V(D(s(e)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["activeKey"])])])}}});const We=ae(Ce,[["__scopeId","data-v-9bf1c110"]]);export{We as default};
//# sourceMappingURL=index-233c6094.js.map