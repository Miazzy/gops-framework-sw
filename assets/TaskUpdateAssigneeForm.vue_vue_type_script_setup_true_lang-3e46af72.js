var g=(b,p,r)=>new Promise((t,o)=>{var a=e=>{try{l(r.next(e))}catch(c){o(c)}},_=e=>{try{l(r.throw(e))}catch(c){o(c)}},l=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,_);l((r=r.apply(b,p)).next())});import{e as L}from"./index-c0893416.js";import{g as T}from"./index-6f04a2b9.js";import{d as A,k as d,al as m,x as R,Z as f,a9 as k,aa as n,f as v,E as y,v as E,_ as N,F as h,ae as q}from"./vue-71d1abb3.js";const z=A({name:"BpmTaskUpdateAssigneeForm",__name:"TaskUpdateAssigneeForm",emits:["success"],setup(b,{expose:p,emit:r}){const t=d(!1),o=d(!1),a=d({id:"",assigneeUserId:void 0}),_=d({assigneeUserId:[{required:!0,message:"新审批人不能为空",trigger:"change"}]}),l=d(),e=d([]);p({open:i=>g(this,null,function*(){t.value=!0,w(),a.value.id=i,e.value=yield T()})});const V=()=>g(this,null,function*(){if(!(!l.value||!(yield l.value.validate()))){o.value=!0;try{yield L(a.value),t.value=!1,r("success")}finally{o.value=!1}}}),w=()=>{var i;a.value={id:"",assigneeUserId:void 0},(i=l.value)==null||i.resetFields()};return(i,u)=>{const x=m("el-option"),F=m("el-select"),I=m("el-form-item"),C=m("el-form"),U=m("el-button"),D=m("Dialog"),B=R("loading");return f(),k(D,{modelValue:t.value,"onUpdate:modelValue":u[2]||(u[2]=s=>t.value=s),title:"转派审批人",width:"500"},{footer:n(()=>[v(U,{disabled:o.value,type:"primary",onClick:V},{default:n(()=>[y("确 定")]),_:1},8,["disabled"]),v(U,{onClick:u[1]||(u[1]=s=>t.value=!1)},{default:n(()=>[y("取 消")]),_:1})]),default:n(()=>[E((f(),k(C,{ref_key:"formRef",ref:l,model:a.value,rules:_.value,"label-width":"110px"},{default:n(()=>[v(I,{label:"新审批人",prop:"assigneeUserId"},{default:n(()=>[v(F,{modelValue:a.value.assigneeUserId,"onUpdate:modelValue":u[0]||(u[0]=s=>a.value.assigneeUserId=s),clearable:"",style:{width:"100%"}},{default:n(()=>[(f(!0),N(h,null,q(e.value,s=>(f(),k(x,{key:s.id,label:s.nickname,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[B,o.value]])]),_:1},8,["modelValue"])}}});export{z as _};
//# sourceMappingURL=TaskUpdateAssigneeForm.vue_vue_type_script_setup_true_lang-3e46af72.js.map
