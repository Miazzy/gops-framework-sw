var z=Object.defineProperty;var b=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))M.call(t,a)&&w(e,a,t[a]);if(b)for(var a of b(t))P.call(t,a)&&w(e,a,t[a]);return e};var u=(e,t,a)=>new Promise((m,s)=>{var n=r=>{try{i(a.next(r))}catch(l){s(l)}},h=r=>{try{i(a.throw(r))}catch(l){s(l)}},i=r=>r.done?m(r.value):Promise.resolve(r.value).then(n,h);i((a=a.apply(e,t)).next())});import{B as S}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as A}from"./useTable-109483b3.js";import{K as v}from"./antd-15ac76ed.js";import{a5 as p,a0 as g,aj as _,b as C,au as R,av as k}from"./index.js";import{e as O}from"./download-03e71dd5.js";import{d as F,k as j,o as E,al as N,Z as q,a9 as B,aa as x,f as V,u as c,E as L,ad as K}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const H=e=>p.get({url:"/bi/common/org/info",params:e},{isOnlyResult:!0}),U=e=>p.post({url:"/baseset/common/list-station",params:e});function W(e){return p.post({url:"/bi/fault/list",params:e})}const X=e=>p.post({url:"/bi/fault/export-excel",params:e,responseType:"blob"},{isReturnNativeResponse:!0}),Y=[{title:"所属公司",dataIndex:"stationOrganName",align:"left",headAlign:"center",width:160,customCell:(e,t,a)=>({rowSpan:e.rowSpan}),resizable:!0,ifShow:g().isMultiOrganization},{title:"电站名称",dataIndex:"stationName",align:"left",headAlign:"center",width:160,resizable:!0},{title:"发现缺陷",dataIndex:"find",width:160,resizable:!0,children:[{title:"重大",dataIndex:"findmajor",align:"right",headAlign:"center",width:80,resizable:!0},{title:"较大",dataIndex:"findmore_serious",align:"right",headAlign:"center",width:80,resizable:!0},{title:"严重",dataIndex:"findserious",align:"right",headAlign:"center",width:80,resizable:!0},{title:"一般",dataIndex:"findgenerally",align:"right",headAlign:"center",width:80,resizable:!0}]},{title:"消缺缺陷",dataIndex:"solve",width:160,resizable:!0,children:[{title:"重大",dataIndex:"solvemajor",align:"right",headAlign:"center",width:80,resizable:!0},{title:"较大",dataIndex:"solvemore_serious",align:"right",headAlign:"center",width:80,resizable:!0},{title:"严重",dataIndex:"solveserious",align:"right",headAlign:"center",width:80,resizable:!0},{title:"一般",dataIndex:"solvegenerally",align:"right",headAlign:"center",width:80,resizable:!0}]},{title:"缺陷总数",dataIndex:"findTotal",align:"right",headAlign:"center",width:160,resizable:!0},{title:"消缺总数",dataIndex:"solveTotal",align:"right",headAlign:"center",width:160,resizable:!0},{title:"消缺率(%)",dataIndex:"solveRate",align:"right",headAlign:"center",width:160,resizable:!0}],Z=[{label:"时间维度",field:"dateType",required:!0,defaultValue:"year",component:"Select",componentProps:({formModel:e})=>({allowClear:!1,options:[{value:"year",label:"年"},{value:"month",label:"月"},{value:"day",label:"自然日"}],onChange:t=>{e.year="",e["[startMonth, endMonth]"]=[null,null],e["[startDate, endDate]"]=[null,null]}}),colProps:{span:8}},{field:"[startDate, endDate]",label:"发现时间",component:"RangePicker",colProps:{span:8},componentProps:{allowClear:!1,picker:"month",format:"YYYY-MM",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]},show:({values:e})=>e.dateType=="month",dynamicRules:({values:e})=>e.dateType=="month"?[{required:!0,message:"时间必填"}]:[]},{field:"[startDate, endDate]",label:"发现时间",component:"RangePicker",colProps:{span:8},componentProps:{allowClear:!1,format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]},show:({values:e})=>e.dateType=="day",dynamicRules:({values:e})=>e.dateType=="day"?[{required:!0,message:"时间必填"}]:[]},{field:"year",label:"发现时间",component:"DatePicker",colProps:{span:8},defaultValue:v(new Date).format("YYYY"),componentProps:{style:"width:100%",allowClear:!1,picker:"year",format:"YYYY",valueFormat:"YYYY-MM-DD",placeholder:"年份"},show:({values:e})=>e.dateType=="year",dynamicRules:({values:e})=>e.dateType=="year"?[{required:!0,message:"年份必填"}]:[]},{label:"所属公司",field:"stationOrganId",component:"ApiSelect",componentProps:{options:[],api:H},colProps:{span:8},ifShow:g().isMultiOrganization},{label:"选择电站",field:"stationId",component:"ApiSelect",componentProps:{options:[],api:()=>u(void 0,null,function*(){const e=yield U({}),t=[];return e.result.forEach(a=>{t.push({value:a.powerStationId,label:a.powerStationName})}),t})},colProps:{span:8}}],ye=F({__name:"index",setup(e){var l,f;let{params:t}=_();((l=t.startDate)==null?void 0:l.length)==7&&(t.startDate=t.startDate+"-01"),((f=t.endDate)==null?void 0:f.length)==7&&(t.endDate=t.endDate+"-01");const{t:a}=C(),{createConfirm:m,createMessage:s}=R(),n=j({dateType:"year",year:v(new Date).format("YYYY-MM-DD")}),[h,{getForm:i}]=A({title:"缺陷统计",api:()=>u(this,null,function*(){return Object.assign(n.value,t),n.value._random_=void 0,(yield W(n.value)).result}),columns:Y,bordered:!0,rowKey:"id",formConfig:{labelWidth:120,schemas:Z,showAdvancedButton:g().isMultiOrganization,autoAdvancedLine:1},useSearchForm:!0,showTableSetting:!1,pagination:!1,rowSelection:{type:"checkbox"},handleSearchInfoFn(d){for(const o in d)n.value[o]=d[o]}});function r(){m({title:a("common.message.confirmTitle"),iconType:"warning",content:a("common.message.exportMessage"),onOk(){return u(this,null,function*(){n.value.filename="缺陷统计报表.xls",n.value.excelList=Y,yield X(n.value).then(o=>{O(o==null?void 0:o.data,n.value.filename)}),n.value.filename=null,n.value.excelList=null,s.success(a("common.exportSuccessText"))})}})}return E(()=>{i().setFieldsValue(y({},t))}),(d,o)=>{const D=N("a-button");return q(),B(c(S),{onRegister:c(h),onResizeColumn:o[0]||(o[0]=(I,T)=>T.width=I),class:"w-4/4 xl:w-12/12"},{toolbar:x(()=>[V(D,{class:"yellow-btn",preIcon:c(k).EXPORT,onClick:r},{default:x(()=>[L(K(c(a)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])}}});export{ye as default};
//# sourceMappingURL=index-af23b1fd.js.map
