var b=(h,x,i)=>new Promise((g,y)=>{var T=r=>{try{f(i.next(r))}catch(v){y(v)}},d=r=>{try{f(i.throw(r))}catch(v){y(v)}},f=r=>r.done?g(r.value):Promise.resolve(r.value).then(T,d);f((i=i.apply(h,x)).next())});import{a as z}from"./dict-c04c0dd8.js";import{d as A}from"./tree-fc0e156a.js";import{b as G,e as J,u as K}from"./index-890098c9.js";import{g as W}from"./index-a66ceb78.js";import{b_ as X,au as ee,a5 as le,bQ as te}from"./index.js";import{D as ae}from"./Dialog-0a006d82.js";import{d as oe,k as c,r as se,w as re,o as ue,al as m,x as ie,Z as u,a9 as n,aa as a,v as ne,f as s,u as D,ac as V,_ as P,F as M,ae as B,E as de,ad as me,$ as C}from"./vue-71d1abb3.js";const pe=C("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),ce=C("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),fe={key:1},ve=C("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),ge=C("i",{class:"el-icon-question",style:{"padding-left":"5px"}},null,-1),Te=oe({name:"FormDialog",__name:"formDialog",props:{visible:Boolean,category:String},emits:["update:visible","success"],setup(h,{expose:x,emit:i}){const g=h,{t:y}=X(),T=ee(),d=c(!1),f=c(""),r=c(!1),v=c(""),e=c({formType:10,name:"",category:void 0,description:"",formId:"",formCustomCreatePath:"",formCustomViewPath:""}),F=se({category:[{required:!0,message:"参数分类不能为空",trigger:"blur"}],name:[{required:!0,message:"参数名称不能为空",trigger:"blur"}],key:[{required:!0,message:"参数键名不能为空",trigger:"blur"}],value:[{required:!0,message:"参数键值不能为空",trigger:"blur"}],visible:[{required:!0,message:"是否可见不能为空",trigger:"blur"}]}),w=c(),U=c([]),q=c(),I=o=>le.get({url:"/system/common-tree/getTree",params:o},{isOnlyResult:!0});x({open:(o,l)=>b(this,null,function*(){if(f.value=y("common.action."+o),v.value=o,R(),l){r.value=!0;try{e.value=yield G(l)}finally{r.value=!1}}U.value=yield W(),d.value=!0,i("update:visible",!0)})});const L=()=>b(this,null,function*(){if(!(!w.value||!(yield w.value.validate()))){r.value=!0;try{const l=e.value;v.value==="create"?(l.category=g.category,yield J(l),yield te.alert("<strong>新建模型成功！</strong>后续需要执行如下 4 个步骤：<div>1. 点击【修改流程】按钮，配置流程的分类、表单信息</div><div>2. 点击【设计流程】按钮，绘制流程图</div><div>3. 点击【分配规则】按钮，设置每个用户任务的审批人</div><div>4. 点击【发布流程】按钮，完成流程的最终发布</div>另外，每次流程修改后，都需要点击【发布流程】按钮，才能正式生效！！！","重要提示",{dangerouslyUseHTMLString:!0,type:"success"})):(yield K(l),T.success(y("common.updateSuccess"))),d.value=!1,i("success"),i("update:visible",!1)}finally{r.value=!1}}}),R=()=>{var o;e.value={formType:10,name:"",category:void 0,description:"",formId:"",formCustomCreatePath:"",formCustomViewPath:""},(o=w.value)==null||o.resetFields()},S=o=>{d.value=o,i("update:visible",!1)},N=()=>{d.value=!1,i("update:visible",!1)};re(()=>g.visible,o=>{d.value=o,E()});const E=()=>b(this,null,function*(){const o=yield I({treeType:"bpm_model_category"});q.value=o});return ue(()=>b(this,null,function*(){d.value=g.visible})),(o,l)=>{const _=m("el-input"),k=m("el-tooltip"),p=m("el-form-item"),H=m("el-tree-select"),O=m("el-radio"),Q=m("el-radio-group"),Y=m("el-option"),Z=m("el-select"),$=m("el-form"),j=ie("loading");return u(),n(ae,{visible:d.value,"onUpdate:visible":S,title:f.value,width:880,height:600,overflowY:"scroll",onConfirm:L,onCancel:N},{default:a(()=>[ne((u(),n($,{ref_key:"formRef",ref:w,model:e.value,rules:F,"label-width":"110px",style:{"padding-top":"20px"}},{default:a(()=>[s(p,{label:"流程标识",prop:"key"},{default:a(()=>[s(_,{modelValue:e.value.key,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value.key=t),disabled:!!e.value.id,placeholder:"请输入流标标识",style:{width:"330px"}},null,8,["modelValue","disabled"]),e.value.id?(u(),n(k,{key:1,class:"item",content:"流程标识不可修改！",effect:"light",placement:"top"},{default:a(()=>[ce]),_:1})):(u(),n(k,{key:0,class:"item",content:"新建后，流程标识不可修改！",effect:"light",placement:"top"},{default:a(()=>[pe]),_:1}))]),_:1}),s(p,{label:"流程名称",prop:"name"},{default:a(()=>[s(_,{modelValue:e.value.name,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.name=t),disabled:!!e.value.id,clearable:"",placeholder:"请输入流程名称"},null,8,["modelValue","disabled"])]),_:1}),e.value.id?(u(),n(p,{key:0,label:"流程分类",prop:"category"},{default:a(()=>[s(H,{ref:"treeRef",modelValue:e.value.category,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value.category=t),data:q.value,props:D(A),"empty-text":"加载中，请稍后","node-key":"id","check-strictly":"","check-on-click-node":""},null,8,["modelValue","data","props"])]),_:1})):V("",!0),s(p,{label:"流程描述",prop:"description"},{default:a(()=>[s(_,{modelValue:e.value.description,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.description=t),clearable:"",type:"textarea"},null,8,["modelValue"])]),_:1}),e.value.id?(u(),P("div",fe,[s(p,{label:"表单类型",prop:"formType"},{default:a(()=>[s(Q,{modelValue:e.value.formType,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.formType=t)},{default:a(()=>[(u(!0),P(M,null,B(D(z)(),t=>(u(),n(O,{key:t.value,label:t.value},{default:a(()=>[de(me(t.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),e.value.formType==10?(u(),n(p,{key:0,label:"流程表单",prop:"formId"},{default:a(()=>[s(Z,{modelValue:e.value.formId,"onUpdate:modelValue":l[5]||(l[5]=t=>e.value.formId=t),clearable:"",style:{width:"100%"}},{default:a(()=>[(u(!0),P(M,null,B(U.value,t=>(u(),n(Y,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):V("",!0),e.value.formType==20?(u(),n(p,{key:1,label:"表单提交路由",prop:"formCustomCreatePath"},{default:a(()=>[s(_,{modelValue:e.value.formCustomCreatePath,"onUpdate:modelValue":l[6]||(l[6]=t=>e.value.formCustomCreatePath=t),placeholder:"请输入表单提交路由",style:{width:"330px"}},null,8,["modelValue"]),s(k,{class:"item",content:"自定义表单的提交路径，使用 Vue 的路由地址，例如说：bpm/oa/leave/create",effect:"light",placement:"top"},{default:a(()=>[ve]),_:1})]),_:1})):V("",!0),e.value.formType===20?(u(),n(p,{key:2,label:"表单查看路由",prop:"formCustomViewPath"},{default:a(()=>[s(_,{modelValue:e.value.formCustomViewPath,"onUpdate:modelValue":l[7]||(l[7]=t=>e.value.formCustomViewPath=t),placeholder:"请输入表单查看路由",style:{width:"330px"}},null,8,["modelValue"]),s(k,{class:"item",content:"自定义表单的查看路径，使用 Vue 的路由地址，例如说：bpm/oa/leave/view",effect:"light",placement:"top"},{default:a(()=>[ge]),_:1})]),_:1})):V("",!0)])):V("",!0)]),_:1},8,["model","rules"])),[[j,r.value]])]),_:1},8,["visible","title"])}}});export{Te as _};
//# sourceMappingURL=formDialog.vue_vue_type_script_setup_true_lang-c9268216.js.map