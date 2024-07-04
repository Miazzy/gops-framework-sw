var u=(e,t,a)=>new Promise((c,l)=>{var _=o=>{try{n(a.next(o))}catch(r){l(r)}},i=o=>{try{n(a.throw(o))}catch(r){l(r)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,i);n((a=a.apply(e,t)).next())});import{f as C,a as I}from"./index.esm-c216ed00.js";import{T as E}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{b as O,au as R,a7 as D,av as d,ax as x,bQ as M,aA as L}from"./index.js";import"./antd-15ac76ed.js";import"./index-316f6ffb.js";import"./index-085d06c7.js";import{u as T}from"./useRender-21ce56fb.js";import{B}from"./BasicTable-0434a334.js";import{u as A}from"./useTable-109483b3.js";import{g as F,e as V}from"./index-37d352b6.js";import{e as Y}from"./download-03e71dd5.js";import{d as j,o as N,al as H,Z as v,_ as G,f as y,aa as b,u as s,E as h,ad as Q,a9 as W,ac as X}from"./vue-71d1abb3.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./useWindowSizeFn-13b1b8a2.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";const w=[{dictType:"bpm_oa_leave_type",value:"1",label:"病假",colorType:"primary",cssClass:""},{dictType:"bpm_oa_leave_type",value:"2",label:"事假",colorType:"info",cssClass:""},{dictType:"bpm_oa_leave_type",value:"3",label:"婚假",colorType:"warning",cssClass:""}],P=[{dictType:"bpm_process_instance_result",value:"0",label:"草稿",colorType:"primary",cssClass:""},{dictType:"bpm_process_instance_result",value:"1",label:"处理中",colorType:"primary",cssClass:""},{dictType:"bpm_process_instance_result",value:"2",label:"通过",colorType:"success",cssClass:""},{dictType:"bpm_process_instance_result",value:"3",label:"不通过",colorType:"danger",cssClass:""},{dictType:"bpm_process_instance_result",value:"4",label:"已取消",colorType:"info",cssClass:""},{dictType:"bpm_process_instance_result",value:"5",label:"已终止",colorType:"info",cssClass:""},{dictType:"bpm_process_instance_result",value:"6",label:"退回/驳回",colorType:"info",cssClass:""}],Z=[{title:"申请编号",dataIndex:"id",width:100},{title:"状态",dataIndex:"status",width:100,customRender:({text:e})=>q(e).label},{title:"开始时间",dataIndex:"startTime",width:120,customRender:({text:e})=>T.renderDate(e)},{title:"结束时间",dataIndex:"endTime",width:120,customRender:({text:e})=>T.renderDate(e)},{title:"请假类型",dataIndex:"type",width:150,customRender:({text:e})=>z(e).label},{title:"原因",dataIndex:"reason",width:180},{title:"申请时间",dataIndex:"fillinDate",width:120,customRender:({text:e})=>T.renderDate(e)}],$=[{label:"请假类型",field:"type",component:"Select",componentProps:{options:w},colProps:{span:8}},{label:"申请时间",field:"createTime",component:"RangePicker",colProps:{span:8},componentProps:{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",valueFormat:"x"}},{label:"结果",field:"result",component:"Select",componentProps:{options:P},colProps:{span:8}},{label:"原因",field:"reason",component:"Input",colProps:{span:8}}];function q(e){const t={};return C(P,function(a){a.value===e.toString()&&I(t,a)}),t}function z(e){const t={};return C(w,function(a){a.value===e.toString()&&I(t,a)}),t}const Ce=j({name:"OaLeave",__name:"index",setup(e){const{t}=O(),{createConfirm:a,createMessage:c}=R(),[l,{getForm:_,reload:i}]=A({title:"OA 请假申请列表",api:F,columns:Z,formConfig:{labelWidth:120,schemas:$},useSearchForm:!0,showTableSetting:!0,actionColumn:{width:140,title:t("common.operate"),dataIndex:"action",fixed:"right"}});function n(){return u(this,null,function*(){a({title:t("common.exportTitle"),iconType:"warning",content:t("common.message.exportMessage"),onOk(){return u(this,null,function*(){yield V(_().getFieldsValue()).then(m=>{Y(m==null?void 0:m.data,"OA 请假申请.xls")}),c.success(t("common.exportSuccessText"))})}})})}function o(){x("/hr/manage/OALeaveCreate","添加请假")}function r(p){return u(this,null,function*(){yield M.prompt("请输入取消原因","取消流程",{confirmButtonText:t("common.ok"),cancelButtonText:t("common.cancel"),inputPattern:/^[\s\S]*.*\S[\s\S]*$/,inputErrorMessage:"取消原因不能为空"}),yield L(p.processInstanceId),c.success(t("common.delSuccessText")),i()})}function S(p){x("/hr/manage/OALeaveCreate","请假详情",{processInstanceId:p.processInstanceId})}return N(()=>{D.getInstance().listen("oaleave-page",i)}),(p,m)=>{const g=H("a-button");return v(),G("div",null,[y(s(B),{onRegister:s(l)},{toolbar:b(()=>[y(g,{type:"primary","pre-icon":s(d).ADD,onClick:o},{default:b(()=>[h(" 发起请假 ")]),_:1},8,["pre-icon"]),y(g,{type:"warning",preIcon:s(d).EXPORT,onClick:n},{default:b(()=>[h(Q(s(t)("common.action.export")),1)]),_:1},8,["preIcon"])]),bodyCell:b(({column:k,record:f})=>[k.key==="action"?(v(),W(s(E),{key:0,actions:[{icon:s(d).LOG,label:"进度",onClick:S.bind(null,f)},{icon:s(d).DELETE,danger:!0,label:"删除",ifShow:()=>f.status<=1,onClick:r.bind(null,f)}]},null,8,["actions"])):X("",!0)]),_:1},8,["onRegister"])])}}});export{Ce as default};
//# sourceMappingURL=index-ff1695ff.js.map