var Z=Object.defineProperty;var z=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var S=(n,e,t)=>e in n?Z(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,I=(n,e)=>{for(var t in e||(e={}))G.call(e,t)&&S(n,t,e[t]);if(z)for(var t of z(e))J.call(e,t)&&S(n,t,e[t]);return n};var u=(n,e,t)=>new Promise((r,c)=>{var v=l=>{try{g(t.next(l))}catch(b){c(b)}},d=l=>{try{g(t.throw(l))}catch(b){c(b)}},g=l=>l.done?r(l.value):Promise.resolve(l.value).then(v,d);g((t=t.apply(n,e)).next())});import{a0 as A,a5 as h,b as ee,au as te,aj as ae,av as P,_ as ne}from"./index.js";import{u as oe,B as ie}from"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{B as k}from"./BasicTable-0434a334.js";import"./index-085d06c7.js";import{u as O}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{e as Y}from"./download-03e71dd5.js";import"./index-316f6ffb.js";import{u as T}from"./useRender-21ce56fb.js";import{e as re}from"./index-5d738211.js";import{d as se,r as le,k as ce,o as de,al as C,Z as ue,_ as me,$ as E,f as m,u as s,aa as p,E as M,ad as D}from"./vue-71d1abb3.js";import"./uniqBy-92d3bc7f.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./useWindowSizeFn-13b1b8a2.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const pe=n=>h.get({url:"/bi/integrated/vehicle/page",params:n},{isOnlyResult:!0}),ge=n=>h.download({url:"/bi/integrated/vehicle/export-excel",params:n},{isReturnNativeResponse:!0}),be=n=>h.get({url:"/bi/integrated/vehicle/getTotalList",params:n},{isOnlyResult:!0}),fe=n=>h.download({url:"/bi/integrated/vehicle/total/export-excel",params:n},{isReturnNativeResponse:!0}),he=n=>h.get({url:"/bi/common/org/info",params:n},{isOnlyResult:!0}),N={1:"#0055ff",2:"#e0001b"},xe=[{title:"所属公司",dataIndex:"stationOrganName",headAlign:"center",align:"left",width:220,resizable:!0,ifShow:A().isMultiOrganization},{title:"所属电站",dataIndex:"stationName",headAlign:"center",align:"left",width:220,resizable:!0},{title:"车辆编号",dataIndex:"vehicleNo",width:120,resizable:!0},{title:"车牌号",dataIndex:"plateNumber",width:120,resizable:!0,customRender:({text:n,record:e})=>{const t="/po/integrated/vehicle/create",r={id:e.id,isReadonly:!0};return T.renderIframeLink(t,void 0,r,n)}},{title:"车辆负责人",dataIndex:"header",width:100,resizable:!0},{title:"驾驶员",dataIndex:"responsiblePersonName",width:200,resizable:!0},{title:"下次年检日期",dataIndex:"nextCheckDate",width:150,resizable:!0,customRender:({column:n,text:e,record:t})=>{const r=t[n.dataIndex+"Color"];return r?T.renderTag(e,N[r]):e}},{title:"最近一次保养日期",dataIndex:"maintenanceTime",width:150,resizable:!0},{title:"最近一次车检日期",dataIndex:"inspectDate",width:150,resizable:!0},{title:"保险类型",dataIndex:"insureType",width:100,resizable:!0,customRender:({column:n,record:e})=>e[`${n.dataIndex}Text`]},{title:"保险到期日期",dataIndex:"endDate",width:150,resizable:!0,customRender:({column:n,text:e,record:t})=>{const r=t[n.dataIndex+"Color"];return r?T.renderTag(e,N[r]):e}}],Ie=[{title:"车辆总数",dataIndex:"total",headAlign:"center",align:"right",width:120,resizable:!0},{title:"30天内保险到期数量",dataIndex:"insurance",headAlign:"center",align:"right",width:180,resizable:!0},{title:"30天内年检到期数量",dataIndex:"annual",headAlign:"center",align:"right",width:180,resizable:!0},{title:"本年车辆检查次数",dataIndex:"currentYearCheck",headAlign:"center",align:"right",width:180,resizable:!0}],ve=n=>[{field:"stationOrganId",label:"所属公司",component:"ApiSelect",componentProps:({formModel:e})=>({api:()=>u(void 0,null,function*(){const t=yield he({}),r=[];return t&&t.length>0&&t.forEach(c=>{r.push({value:c.id,label:c.label})}),r}),onChange:t=>{n.organId=t,e.stationIds=[]}}),show:A().isMultiOrganization},{field:"stationIds",label:"电站名称",component:"ApiSelect",componentProps:{api:()=>u(void 0,null,function*(){const e=yield re(I({},n)),t=[];return e&&e.length>0&&e.forEach(r=>{t.push({value:r.id,label:r.name})}),t}),mode:"multiple",maxTagCount:"responsive",filterOption:(e,t)=>t.label.toLowerCase().indexOf(e.toLowerCase())>=0}},{field:"plateNumber",label:"车牌号",component:"Input"},{field:"responsiblePersonName",label:"驾驶员",component:"Input"},{field:"nextCheck",label:"下次年检日期",component:"RangePicker",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"],style:"width:100%"}},{field:"insuranceExpire",label:"保险到期日期",component:"RangePicker",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"],style:"width:100%"}}],we={class:"tab-model"},ye={class:"tab-button-div"},_e={id:"integrated-vehicle-tab-content",class:"tab-table-div tab-table-content"},Te=se({__name:"index",setup(n){const{t:e}=ee(),{createConfirm:t,createMessage:r}=te(),c=le({organId:null}),{params:v}=ae(),d=ce("1"),[g,{resetFields:l,setFieldsValue:b,getFieldsValue:F}]=oe({labelWidth:120,baseColProps:{span:8},actionColOptions:{span:24},autoAdvancedLine:1,schemas:ve(c),compact:!0,showAdvancedButton:!0,resetButtonOptions:{onClick:()=>u(this,null,function*(){yield l(),c.organId=null,w(),y()})},submitFunc:()=>(w(),y(),Promise.resolve())}),x=()=>{const a=I({},F());a.stationId=null,a.stationIds&&a.stationIds.length>0&&(a.stationId=a.stationIds.join(","));let o={};for(const i in a)i!=="stationIds"&&(i==="nextCheck"||i==="insuranceExpire"?a[i]&&a[i]instanceof Array&&(o[i+"StartDate"]=a[i][0],o[i+"EndDate"]=a[i][1]):o[i]=a[i]);return o},B=()=>u(this,null,function*(){const a=q(),o=x();return o.pageNo=a.current,o.pageSize=a.pageSize,yield pe(o)}),[L,{reload:w,redoHeight:V,getPaginationRef:q}]=O({api:B,target:"#integrated-vehicle-tab-content",targetTabKey:"1",targetTabValue:d,columns:xe,useSearchForm:!1,bordered:!0,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0}),K=()=>u(this,null,function*(){const a=x();return yield be(a)}),[H,{reload:y,redoHeight:j}]=O({api:K,target:"#integrated-vehicle-tab-content",targetTabKey:"2",targetTabValue:d,columns:Ie,useSearchForm:!1,bordered:!0,pagination:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0});function U(){t({title:e("common.message.confirmTitle"),iconType:"warning",content:e("common.message.exportMessage"),onOk(){return u(this,null,function*(){const o=x();o.filename="统计报表.xls",yield ge(o).then(i=>{Y(i==null?void 0:i.data,o.filename)}),o.filename=null,r.success(e("common.exportSuccessText"))})}})}function X(){t({title:e("common.message.confirmTitle"),iconType:"warning",content:e("common.message.exportMessage"),onOk(){return u(this,null,function*(){const o=x();o.filename="汇总.xls",yield fe(o).then(i=>{Y(i==null?void 0:i.data,o.filename)}),o.filename=null,r.success(e("common.exportSuccessText"))})}})}const $=a=>{a==="1"?w():a==="2"&&y()},Q=()=>{d.value==="1"?V():d.value==="2"&&j()};return de(()=>{const a=I({},v);a.stationIds?a.stationIds=a.stationIds.split(","):a.stationIds=[],a.selectType=="station"&&(a.stationIds=a.id),a.selectType=="company"&&(a.stationOrganId=a.id),b(a)}),(a,o)=>{const i=C("a-button"),R=C("a-tab-pane"),W=C("a-tabs");return ue(),me("div",we,[E("div",ye,[m(s(ie),{onRegister:s(g),onAdvancedChange:Q},null,8,["onRegister"])]),E("div",_e,[m(W,{activeKey:d.value,"onUpdate:activeKey":o[2]||(o[2]=f=>d.value=f),onChange:$},{default:p(()=>[m(R,{key:"1",tab:"统计报表"},{default:p(()=>[m(s(k),{onRegister:s(L),onResizeColumn:o[0]||(o[0]=(f,_)=>_.width=f)},{toolbar:p(()=>[m(i,{class:"yellow-btn",preIcon:s(P).EXPORT,onClick:U},{default:p(()=>[M(D(s(e)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1}),m(R,{key:"2",tab:"汇总","force-render":""},{default:p(()=>[m(s(k),{onRegister:s(H),onResizeColumn:o[1]||(o[1]=(f,_)=>_.width=f)},{toolbar:p(()=>[m(i,{class:"yellow-btn",preIcon:s(P).EXPORT,onClick:X},{default:p(()=>[M(D(s(e)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["activeKey"])])])}}});const We=ne(Te,[["__scopeId","data-v-35b5151b"]]);export{We as default};
//# sourceMappingURL=index-dfd010cb.js.map