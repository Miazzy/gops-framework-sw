var re=Object.defineProperty;var X=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var K=(i,t,a)=>t in i?re(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a,Z=(i,t)=>{for(var a in t||(t={}))ie.call(t,a)&&K(i,a,t[a]);if(X)for(var a of X(t))ce.call(t,a)&&K(i,a,t[a]);return i};var w=(i,t,a)=>new Promise((P,B)=>{var U=d=>{try{n(a.next(d))}catch(C){B(C)}},k=d=>{try{n(a.throw(d))}catch(C){B(C)}},n=d=>d.done?P(d.value):Promise.resolve(d.value).then(U,k);n((a=a.apply(i,t)).next())});import{au as ue,a0 as de,aB as me}from"./index.js";import{s as pe}from"./formCreate-e6d0da36.js";import{a as fe}from"./index-a3e62fdf.js";import{h as _e,r as ve,i as ge}from"./index-c0893416.js";import{_ as ye}from"./TaskUpdateAssigneeForm.vue_vue_type_script_setup_true_lang-3e46af72.js";import{_ as ke}from"./ProcessInstanceBpmnViewer.vue_vue_type_style_index_0_lang-c6c1a54e.js";import{_ as Ce}from"./ProcessInstanceTaskList.vue_vue_type_script_setup_true_lang-bac7f887.js";import{d as he,aD as Te,g as be,k as u,r as xe,o as we,al as m,x as De,Z as g,a9 as D,aa as l,_ as G,F as Ue,ae as Ve,v as H,$ as R,ad as $,f as s,E as y,ac as L,u as E,q as Fe}from"./vue-71d1abb3.js";import"./antd-15ac76ed.js";import"./index-6f04a2b9.js";import"./bpmn-embedded-90db6ebb.js";import"./index.esm-c216ed00.js";import"./dict-c04c0dd8.js";const J=Object.assign({}),$e=i=>{for(const t in J)if(t.includes(i))return defineAsyncComponent(J[t])},Be={class:"el-icon-picture-outline"},Ie={style:{"margin-bottom":"20px","margin-left":"10%","font-size":"14px"}},Ae={class:"el-icon-document"},Le={key:1},Ge=he({name:"BpmProcessInstanceDetail",__name:"index",setup(i){const{query:t}=Te(),a=ue(),{proxy:P}=be(),B=de().getUser.id,U=t.id,k=u(!1),n=u({}),d=u(""),C=u(!0),T=u([]),I=u([]),b=u([]),Q=xe({reason:[{required:!0,message:"审批建议不能为空",trigger:"blur"}]}),A=u(),V=u({rule:[],option:{},value:{}}),M=(o,e)=>w(this,null,function*(){const r=I.value.indexOf(o),x=P.$refs["form"+r][0],h=E(x);if(!h||!(yield h.validate()))return;const c={id:o.id,reason:b.value[r].reason};e?(yield _e(c),a.success("审批通过成功")):(yield ve(c),a.success("审批不通过成功")),N()}),q=u(),Y=o=>{q.value.open(o)},ee=o=>w(this,null,function*(){a.error("暂不支持【委派】功能，可以使用【转派】替代！"),console.log(o)}),ae=o=>w(this,null,function*(){a.error("暂不支持【退回】功能！"),console.log(o)}),N=()=>{se(),te()},S=u(null),se=()=>w(this,null,function*(){try{k.value=!0;const o=yield me(U);if(!o){a.error("查询不到流程信息！");return}n.value=o;const e=o.processDefinition;e.formType===10?(pe(V,e.formConf,e.formFields,o.formVariables),Fe().then(()=>{var r,x,h,F,c,_;(x=(r=A.value)==null?void 0:r.fapi)==null||x.btn.show(!1),(F=(h=A.value)==null?void 0:h.fapi)==null||F.resetBtn.show(!1),(_=(c=A.value)==null?void 0:c.fapi)==null||_.disabled(!0)})):S.value=$e(o.processDefinition.formCustomViewPath),d.value=yield fe(e.id)}finally{k.value=!1}}),te=()=>w(this,null,function*(){try{C.value=!0;const o=yield ge(U);T.value=[],o.forEach(e=>{e.result!==4&&T.value.push(e)}),T.value.sort((e,r)=>e.endTime&&r.endTime?r.endTime-e.endTime:e.endTime?1:r.endTime?-1:r.createTime-e.createTime),I.value=[],b.value=[],T.value.forEach(e=>{e.result===1&&(!e.assigneeUser||e.assigneeUser.id!==B||(I.value.push(Z({},e)),b.value.push({reason:""})))})}finally{C.value=!1}});return we(()=>{N()}),(o,e)=>{const r=m("el-form-item"),x=m("el-tag"),h=m("el-input"),F=m("el-form"),c=m("Icon"),_=m("el-button"),j=m("el-col"),z=m("el-card"),ne=m("form-create"),oe=m("ContentWrap"),O=De("loading");return g(),D(oe,null,{default:l(()=>[(g(!0),G(Ue,null,Ve(I.value,(p,v)=>H((g(),D(z,{key:v,class:"box-card"},{header:l(()=>[R("span",Be,"审批任务【"+$(p.name)+"】",1)]),default:l(()=>[s(j,{offset:6,span:16},{default:l(()=>[s(F,{ref_for:!0,ref:"form"+v,model:b.value[v],rules:Q,"label-width":"100px"},{default:l(()=>[n.value&&n.value.name?(g(),D(r,{key:0,label:"流程名"},{default:l(()=>[y($(n.value.name),1)]),_:1})):L("",!0),n.value&&n.value.startUser?(g(),D(r,{key:1,label:"流程发起人"},{default:l(()=>[y($(n.value.startUser.nickname)+" ",1),s(x,{size:"small",type:"info"},{default:l(()=>[y($(n.value.startUser.deptName),1)]),_:1})]),_:1})):L("",!0),s(r,{label:"审批建议",prop:"reason"},{default:l(()=>[s(h,{modelValue:b.value[v].reason,"onUpdate:modelValue":f=>b.value[v].reason=f,placeholder:"请输入审批建议",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1032,["model","rules"]),R("div",Ie,[s(_,{type:"success",onClick:f=>M(p,!0)},{default:l(()=>[s(c,{icon:"ep:select"}),y(" 通过 ")]),_:2},1032,["onClick"]),s(_,{type:"danger",onClick:f=>M(p,!1)},{default:l(()=>[s(c,{icon:"ep:close"}),y(" 不通过 ")]),_:2},1032,["onClick"]),s(_,{type:"primary",onClick:f=>Y(p.id)},{default:l(()=>[s(c,{icon:"ep:edit"}),y(" 转办 ")]),_:2},1032,["onClick"]),s(_,{type:"primary",onClick:f=>ee(p)},{default:l(()=>[s(c,{icon:"ep:position"}),y(" 委派 ")]),_:2},1032,["onClick"]),s(_,{type:"warning",onClick:f=>ae(p)},{default:l(()=>[s(c,{icon:"ep:back"}),y(" 回退 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024)),[[O,k.value]])),128)),H((g(),D(z,{class:"box-card"},{header:l(()=>[R("span",Ae,"申请信息【"+$(n.value.name)+"】",1)]),default:l(()=>{var p,v,f,W;return[((v=(p=n.value)==null?void 0:p.processDefinition)==null?void 0:v.formType)===10?(g(),D(j,{key:0,offset:6,span:16},{default:l(()=>[s(ne,{ref_key:"fApi",ref:A,modelValue:V.value.value,"onUpdate:modelValue":e[0]||(e[0]=le=>V.value.value=le),option:V.value.option,rule:V.value.rule},null,8,["modelValue","option","rule"])]),_:1})):L("",!0),((W=(f=n.value)==null?void 0:f.processDefinition)==null?void 0:W.formType)===20?(g(),G("div",Le,[s(E(S),{id:n.value.businessKey},null,8,["id"])])):L("",!0)]}),_:1})),[[O,k.value]]),s(Ce,{loading:C.value,tasks:T.value},null,8,["loading","tasks"]),s(ke,{id:`${E(U)}`,"bpmn-xml":d.value,loading:k.value,"process-instance":n.value,tasks:T.value},null,8,["id","bpmn-xml","loading","process-instance","tasks"]),s(ye,{ref_key:"taskUpdateAssigneeFormRef",ref:q,onSuccess:N},null,512)]),_:1})}}});export{Ge as default};
//# sourceMappingURL=index-877bbcfb.js.map