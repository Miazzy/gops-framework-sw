var d=(s,p,r)=>new Promise((x,o)=>{var u=a=>{try{l(r.next(a))}catch(i){o(i)}},h=a=>{try{l(r.throw(a))}catch(i){o(i)}},l=a=>a.done?x(a.value):Promise.resolve(a.value).then(u,h);l((r=r.apply(s,p)).next())});import{B as P}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as S}from"./useTable-109483b3.js";import{a2 as C}from"./antd-15ac76ed.js";import{a5 as v,b as z,au as O,av as E,_ as R}from"./index.js";import{P as k}from"./index-20519caf.js";import{e as D}from"./download-03e71dd5.js";import{d as M,r as m,k as n,o as H,al as Y,Z as B,a9 as q,aa as f,f as I,u as g,E as V}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";const N=[{field:"userIp",component:"Input",label:"登陆地址",colProps:{span:7},required:!1},{field:"username",component:"Input",label:"用户名称",colProps:{span:7},required:!1},{field:"status",label:"登录状态",component:"Select",componentProps:{options:[{value:1,label:"成功"},{value:0,label:"失败"}]},colProps:{span:7},required:!1},{field:"createTime",component:"RangePicker",label:"登录时间",componentProps:{showTime:!0,width:"100%",format:"YYYY-MM-DD HH:mm:ss",valueFormat:"YYYY-MM-DD HH:mm:ss"},colProps:{span:7},required:!1}],j=[{title:"访问编码",dataIndex:"id",align:"center",resizable:!0,width:100},{title:"日志类型",dataIndex:"logTypeText",resizable:!0,width:100},{title:"用户名称",dataIndex:"username",resizable:!0,align:"center",width:100},{title:"登录地址",dataIndex:"userIp",resizable:!0,width:120},{title:"结果",dataIndex:"resultText",resizable:!0,align:"left",width:120},{title:"登陆日期",dataIndex:"createTime",resizable:!0,align:"center",width:120}],L=s=>v.post({url:"/system/login-log/page",params:s},{isOnlyResult:!0});function W(s){return v.download({url:"/system/login-log/export",params:s},"登录日志.xls")}const A=M({__name:"index",setup(s){const{t:p}=z(),{createConfirm:r,createMessage:x}=O(),o=m({});n(!1),n(!1),m({name:"",id:"",kind:"",evaluationMethod:"",assessTarget:"",scoreRuleDesc:"",allowOverrun:""}),m({}),n(""),n(!1),n(!1),n(),n(),m({});let u=n("");const h=()=>d(this,null,function*(){let t=i().getFieldsValue();const e=w();return t.pageNo=e.current,t.pageSize=e.pageSize,yield L(t)}),[l,{reload:a,getForm:i,getDataSource:K,getPaginationRef:w}]=S({title:"登录日志",api:h,rowKey:"id",columns:j,useSearchForm:!0,showTableSetting:!0,bordered:!0,pagination:{pageSize:20,pageSizeOptions:["20","50","100","200"]},handleSearchInfoFn(t){return t},formConfig:{labelWidth:120,actionColOptions:{span:24},autoAdvancedLine:1,baseColProps:{span:7},schemas:N,autoSubmitOnEnter:!0,noHideBtnFlag:!0},sortFn:t=>{t.order?(o.sortField=t.field,o.sortOrder=t.order.replace("end","")):(o.sortField="",o.sortOrder="")}});function y(){return d(this,null,function*(){r({title:"提示",iconType:"warning",content:p("common.message.exportMessage"),onOk(){return d(this,null,function*(){yield W(i().getFieldsValue()).then(e=>{D(e==null?void 0:e.data,"登录日志.xls")}),x.success(p("common.exportSuccessText"))})}})})}function T({keys:t,rows:e}){if(e&&e.length>0){const c=e[0];u.value=c.id}else u.value=""}function F({record:t,index:e,key:c,value:b}){saveIndex(t).then(()=>{C.success("已保存"),a()}).catch(()=>{})}return H(()=>d(this,null,function*(){})),(t,e)=>{const c=Y("a-button");return B(),q(g(k),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:f(()=>[I(g(P),{class:"fix-basic-table",onRegister:g(l),searchInfo:o,onEditEnd:F,onSelectionChange:T,onResizeColumn:e[0]||(e[0]=(b,_)=>_.width=b)},{toolbar:f(()=>[I(c,{class:"yellow-btn",onClick:y,preIcon:g(E).EXPORT},{default:f(()=>[V(" 导出 ")]),_:1},8,["preIcon"])]),bodyCell:f(({text:b,column:_,record:X})=>[]),_:1},8,["onRegister","searchInfo"])]),_:1})}}});const _e=R(A,[["__scopeId","data-v-003e1517"]]);export{_e as default};
//# sourceMappingURL=index-d31b651c.js.map
