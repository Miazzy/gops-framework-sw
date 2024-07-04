var C=(i,g,c)=>new Promise((d,w)=>{var _=a=>{try{b(c.next(a))}catch(y){w(y)}},u=a=>{try{b(c.throw(a))}catch(y){w(y)}},b=a=>a.done?d(a.value):Promise.resolve(a.value).then(_,u);b((c=c.apply(i,g)).next())});import{f as Y,a as ee}from"./index.esm-c216ed00.js";import{T as te}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{b as ae,au as se,av as oe,ax as ne,bM as re,bN as ie,bL as le,bO as ce,_ as de}from"./index.js";import{a2 as l}from"./antd-15ac76ed.js";import"./index-316f6ffb.js";import"./index-085d06c7.js";import{u as O}from"./useRender-21ce56fb.js";import{B as D}from"./BasicTable-0434a334.js";import{u as B}from"./useTable-109483b3.js";import{G as pe,e as ue}from"./index-c0893416.js";import{O as me}from"./OrganDialog-dd1023ce.js";import{g as fe}from"./index-33af41d1.js";import{P as _e}from"./index-20519caf.js";import{d as ge,k as I,r as K,o as be,al as m,Z as F,a9 as V,aa as s,f as o,u as f,a6 as H,E as k,ac as ye}from"./vue-71d1abb3.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./useWindowSizeFn-13b1b8a2.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./useContentViewHeight-7f845167.js";const he=[{dictType:"bpm_process_instance_result",value:"1",label:"正在处理",colorType:"primary",cssClass:""},{dictType:"bpm_process_instance_result",value:"2",label:"通过",colorType:"success",cssClass:""},{dictType:"bpm_process_instance_result",value:"3",label:"不通过",colorType:"danger",cssClass:""},{dictType:"bpm_process_instance_result",value:"4",label:"打回",colorType:"info",cssClass:""},{dictType:"bpm_process_instance_result",value:"5",label:"已取消",colorType:"info",cssClass:""},{dictType:"bpm_process_instance_result",value:"6",label:"已取消",colorType:"info",cssClass:""},{dictType:"bpm_process_instance_result",value:"7",label:"已转办",colorType:"info",cssClass:""}],ke=[{label:"单据编号",field:"businessCode",component:"Input",required:!0,colProps:{span:8}}],we=[{title:"名称",dataIndex:"name",width:150},{title:"状态",dataIndex:"result",width:100,customRender:({text:i})=>Te("bpmProcessInstanceResult",i).label},{title:"主题",dataIndex:"description",width:200},{title:"执行人",dataIndex:"assigneeUserName",width:100},{title:"执行部门",dataIndex:"deptName",width:100},{title:"提交时间",dataIndex:"startTime",width:200,customRender:({text:i})=>O.renderDate(i)},{title:"执行时间",dataIndex:"endTime",width:200,customRender:({text:i})=>O.renderDate(i)}],ve=[{title:"名称",dataIndex:"name",width:150}];function Te(i,g){const c={};return i=="bpmProcessInstanceResult"&&Y(he,function(d){d.value===g.toString()&&ee(c,d)}),c}const Ie=ge({name:"BpmTaskOperation",__name:"index",setup(i){const{t:g}=ae(),{createConfirm:c,createMessage:d}=se(),[w,{reload:_,getSelectRows:u}]=B({title:"流程任务维护",api:pe,columns:we,formConfig:{labelWidth:120,schemas:ke},useSearchForm:!0,showTableSetting:!0,pagination:!1,bordered:!0,immediate:!1,rowKey:"taskId",rowSelection:{type:"checkbox"},actionColumn:{width:140,title:g("common.operate"),dataIndex:"action",fixed:"right"}}),b=e=>{ne(`${e.formCustomViewPath}?processInstanceId=${e.processInstanceId}`)},a=I(!1),y=()=>{const e=u();if(e.length!==1){l.warning("请选择一行数据。");return}if(e[0].result!==1){l.warning("此任务已处理，不能转办。");return}if(e[0].taskDefinitionKey=="Apply"){l.warning("申请节点，不能转办。");return}a.value=!0},U=()=>{a.value=!1},A=e=>{if(e.length!==1){l.warning("请选择一个人员。");return}const r={id:u()[0].taskId,assigneeUserId:E(e[0].nodeId)};ue(r).then(()=>{d.success("操作成功。"),_()}).then(()=>{a.value=!1})},E=e=>e.split("@")[0],R=K({display:"block",height:"30px",lineHeight:"30px"}),v=K({backType:""}),h=I(!1),M=()=>{const e=u();if(e.length!==1){l.warning("请选择一行数据。");return}if(e[0].result!==1){l.warning("此任务已处理，不能回退。");return}if(e[0].taskDefinitionKey=="Apply"){l.warning("申请节点，不能回退。");return}h.value=!0,j()},S=I(),q=()=>{S.value.validate().then(()=>{const e=G();if(e.length!==1){l.warning("请选择一行数据。");return}const r={id:u()[0].taskId,targetKey:e[0].taskDefinitionKey};v.backType==1?re(r).then(()=>{d.success("操作成功。"),_()}).then(()=>{h.value=!1}):ie(r).then(()=>{d.success("操作成功。"),_()}).then(()=>{h.value=!1})}).catch(e=>{console.log("onSubmit=》error",e)})},[W,{reload:j,getSelectRows:G}]=B({api:ce,rowKey:"id",columns:ve,useSearchForm:!1,showTableSetting:!1,bordered:!0,pagination:!1,maxHeight:300,rowSelection:{type:"radio"},beforeFetch(e){const t=u();return e.taskId=t[0].taskId,e}}),L=()=>{const e=u();if(e.length!==1){l.warning("请选择一行数据。");return}if(e[0].result!==1){l.warning("此任务已处理，不能终止。");return}const t={id:e[0].taskId,reason:"终止流程。"};c({title:"确认操作",iconType:"warning",content:"确定要终止选中数据吗？",onOk(){return C(this,null,function*(){le(t).then(()=>{d.success("操作成功。"),_()})})}})},P=I([]);function $(){return C(this,null,function*(){fe({orgKindIds:"ogn,dpt,pos,psm",showPosition:!1,status:1}).then(e=>{P.value=N(e)})})}function N(e){const t=[];for(let r=0;r<e.length;r++){const n=e[r],T={code:n.code,fullId:n.code,name:n.name,nodeId:n.id,nodeName:n.name,orgId:n.orgId,parentId:n.parentId,disabled:n.orgKindId!=="psm"};n.children&&n.children.length>0&&(T.children=N(n.children)),t.push(T)}return t}return be(()=>{$()}),(e,t)=>{const r=m("a-radio"),n=m("a-radio-group"),T=m("a-form-item"),z=m("a-col"),Z=m("a-row"),J=m("a-form"),Q=m("a-modal"),x=m("a-button");return F(),V(f(_e),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[o(me,{title:"组织人员",visible:a.value,"onUpdate:visible":[t[0]||(t[0]=p=>a.value=p),t[1]||(t[1]=p=>a.value=p)],tdata:P.value,tfields:{key:"nodeId",title:"nodeName"},width:800,height:600,onCancel:U,onConfirm:A},null,8,["visible","tdata"]),o(Q,{visible:h.value,"onUpdate:visible":t[3]||(t[3]=p=>h.value=p),title:"回退确认",onOk:q},{default:s(()=>[o(f(D),{onRegister:f(W)},null,8,["onRegister"]),o(J,{ref_key:"formRef",ref:S,model:v,autocomplete:"off",class:"backType-form"},{default:s(()=>[o(Z,{gutter:24},{default:s(()=>[o(z,{span:24},{default:s(()=>[o(T,{name:"backType",rules:[{required:!0,message:"请选择回退类型"}]},{default:s(()=>[o(n,{value:v.backType,"onUpdate:value":t[2]||(t[2]=p=>v.backType=p)},{default:s(()=>[o(r,{style:H(R),value:1},{default:s(()=>[k("回退：回退到指定节点，节点后面的审批人需重新审批。")]),_:1},8,["style"]),o(r,{style:H(R),value:2},{default:s(()=>[k("打回：仅修改文档，修改完成后回到本节点。")]),_:1},8,["style"])]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible"]),o(f(D),{onRegister:f(w),class:"fix-basic-table"},{toolbar:s(()=>[o(x,{type:"primary",onClick:y},{default:s(()=>[k("转办")]),_:1}),o(x,{type:"primary",onClick:M},{default:s(()=>[k("回退")]),_:1}),o(x,{type:"primary",onClick:L},{default:s(()=>[k("终止")]),_:1})]),bodyCell:s(({column:p,record:X})=>[p.key==="action"?(F(),V(f(te),{key:0,actions:[{icon:f(oe).VIEW,label:"详情",onClick:b.bind(null,X)}]},null,8,["actions"])):ye("",!0)]),_:1},8,["onRegister"])]),_:1})}}});const et=de(Ie,[["__scopeId","data-v-4831c0b7"]]);export{et as default};
//# sourceMappingURL=index-1f81b6ef.js.map
