var x=(P,y,m)=>new Promise((_,f)=>{var k=r=>{try{c(m.next(r))}catch(s){f(s)}},l=r=>{try{c(m.throw(r))}catch(s){f(s)}},c=r=>r.done?_(r.value):Promise.resolve(r.value).then(k,l);c((m=m.apply(P,y)).next())});import{d as j,k as d,r as J,o as X,al as o,x as h,Z as p,_ as T,f as e,aa as a,af as ee,F as N,ae as B,u as U,a9 as b,E as v,v as D,ad as te}from"./vue-71d1abb3.js";import{b as ae,D as L}from"./dict-c04c0dd8.js";import{au as le,b_ as ne,c7 as oe}from"./index.js";import{b as re,d as se}from"./index-b9390eab.js";import{g as pe}from"./index-6f04a2b9.js";import{_ as ue}from"./UserGroupForm.vue_vue_type_script_setup_true_lang-df6c4926.js";import"./antd-15ac76ed.js";const ve=j({name:"BpmUserGroup",__name:"index",setup(P){const y=le(),{t:m}=ne(),_=d(!0),f=d(0),k=d([]),l=J({pageNo:1,pageSize:10,name:null,status:null,createTime:[]}),c=d(),r=d([]),s=()=>x(this,null,function*(){_.value=!0;try{const u=yield re(l);k.value=u.list,f.value=u.total}finally{_.value=!1}}),S=()=>{l.pageNo=1,s()},R=()=>{c.value.resetFields(),S()},F=d(),I=(u,n)=>{F.value.open(u,n)},$=u=>x(this,null,function*(){try{yield y.delConfirm(),yield se(u),y.success(m("common.delSuccess")),yield s()}catch(n){}});return X(()=>x(this,null,function*(){yield s(),r.value=yield pe()})),(u,n)=>{const q=o("el-input"),w=o("el-form-item"),z=o("el-option"),E=o("el-select"),G=o("el-date-picker"),V=o("Icon"),g=o("el-button"),K=o("el-form"),O=o("ContentWrap"),i=o("el-table-column"),A=o("dict-tag"),H=o("el-table"),Q=o("Pagination"),M=h("hasPermi"),W=h("loading");return p(),T(N,null,[e(O,null,{default:a(()=>[e(K,{class:"-mb-15px",model:l,ref_key:"queryFormRef",ref:c,inline:!0,"label-width":"68px"},{default:a(()=>[e(w,{label:"组名",prop:"name"},{default:a(()=>[e(q,{modelValue:l.name,"onUpdate:modelValue":n[0]||(n[0]=t=>l.name=t),placeholder:"请输入组名",clearable:"",onKeyup:ee(S,["enter"]),class:"!w-240px"},null,8,["modelValue","onKeyup"])]),_:1}),e(w,{label:"状态",prop:"status"},{default:a(()=>[e(E,{modelValue:l.status,"onUpdate:modelValue":n[1]||(n[1]=t=>l.status=t),placeholder:"请选择状态",clearable:"",class:"!w-240px"},{default:a(()=>[(p(!0),T(N,null,B(U(ae)(U(L).COMMON_STATUS),t=>(p(),b(z,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(w,{label:"创建时间",prop:"createTime"},{default:a(()=>[e(G,{modelValue:l.createTime,"onUpdate:modelValue":n[2]||(n[2]=t=>l.createTime=t),"value-format":"YYYY-MM-DD HH:mm:ss",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date("1 00:00:00"),new Date("1 23:59:59")],class:"!w-240px"},null,8,["modelValue","default-time"])]),_:1}),e(w,null,{default:a(()=>[e(g,{onClick:S},{default:a(()=>[e(V,{icon:"ep:search",class:"mr-5px"}),v(" 搜索")]),_:1}),e(g,{onClick:R},{default:a(()=>[e(V,{icon:"ep:refresh",class:"mr-5px"}),v(" 重置")]),_:1}),D((p(),b(g,{type:"primary",plain:"",onClick:n[3]||(n[3]=t=>I("create"))},{default:a(()=>[e(V,{icon:"ep:plus",class:"mr-5px"}),v(" 新增 ")]),_:1})),[[M,["bpm:user-group:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(O,null,{default:a(()=>[D((p(),b(H,{data:k.value},{default:a(()=>[e(i,{label:"编号",align:"center",prop:"id"}),e(i,{label:"组名",align:"center",prop:"name"}),e(i,{label:"描述",align:"center",prop:"description"}),e(i,{label:"成员",align:"center"},{default:a(t=>[(p(!0),T(N,null,B(t.row.memberUserIds,C=>{var Y;return p(),T("span",{key:C,class:"pr-5px"},te((Y=r.value.find(Z=>Z.id===C))==null?void 0:Y.nickname),1)}),128))]),_:1}),e(i,{label:"状态",align:"center",prop:"status"},{default:a(t=>[e(A,{type:U(L).COMMON_STATUS,value:t.row.status},null,8,["type","value"])]),_:1}),e(i,{label:"创建时间",align:"center",prop:"createTime",formatter:U(oe)},null,8,["formatter"]),e(i,{label:"操作",align:"center"},{default:a(t=>[D((p(),b(g,{link:"",type:"primary",onClick:C=>I("update",t.row.id)},{default:a(()=>[v(" 编辑 ")]),_:2},1032,["onClick"])),[[M,["bpm:user-group:update"]]]),D((p(),b(g,{link:"",type:"danger",onClick:C=>$(t.row.id)},{default:a(()=>[v(" 删除 ")]),_:2},1032,["onClick"])),[[M,["bpm:user-group:delete"]]])]),_:1})]),_:1},8,["data"])),[[W,_.value]]),e(Q,{total:f.value,page:l.pageNo,"onUpdate:page":n[4]||(n[4]=t=>l.pageNo=t),limit:l.pageSize,"onUpdate:limit":n[5]||(n[5]=t=>l.pageSize=t),onPagination:s},null,8,["total","page","limit"])]),_:1}),e(ue,{ref_key:"formRef",ref:F,onSuccess:s},null,512)],64)}}});export{ve as default};
//# sourceMappingURL=index-16c81ca1.js.map