var x=(N,b,s)=>new Promise((F,k)=>{var f=t=>{try{i(s.next(t))}catch(m){k(m)}},C=t=>{try{i(s.throw(t))}catch(m){k(m)}},i=t=>t.done?F(t.value):Promise.resolve(t.value).then(f,C);i((s=s.apply(N,b)).next())});import{d as Y,ax as Z,k as p,r as j,w as G,o as H,al as n,x as R,Z as d,_ as J,f as e,aa as o,af as X,E as _,v,a9 as y,u as U,F as ee}from"./vue-71d1abb3.js";import{D as te}from"./dict-c04c0dd8.js";import{au as ae,b_ as oe,c7 as le}from"./index.js";import{b as ne,d as re,a as se}from"./index-a66ceb78.js";import{s as ie}from"./formCreate-e6d0da36.js";import"./antd-15ac76ed.js";const ge=Y({name:"BpmForm",__name:"index",setup(N){const b=ae(),{t:s}=oe(),{currentRoute:F,push:k}=Z(),f=p(!0),C=p(0),i=p([]),t=j({pageNo:1,pageSize:10,name:null}),m=p(),g=()=>x(this,null,function*(){f.value=!0;try{const r=yield ne(t);i.value=r.list,C.value=r.total}finally{f.value=!1}}),D=()=>{t.pageNo=1,g()},E=()=>{m.value.resetFields(),D()},S=r=>{const a={name:"BpmFormEditor"};typeof r=="number"&&(a.query={id:r}),k(a)},I=r=>x(this,null,function*(){try{yield b.delConfirm(),yield re(r),b.success(s("common.delSuccess")),yield g()}catch(a){}}),V=p(!1),h=p({rule:[],option:{}}),M=r=>x(this,null,function*(){const a=yield se(r);ie(h,a.conf,a.fields),V.value=!0});return G(()=>F.value,()=>{g()},{immediate:!0}),H(()=>{g()}),(r,a)=>{const z=n("el-input"),T=n("el-form-item"),P=n("Icon"),c=n("el-button"),K=n("el-form"),q=n("ContentWrap"),u=n("el-table-column"),$=n("dict-tag"),A=n("el-table"),O=n("Pagination"),Q=n("form-create"),W=n("Dialog"),w=R("hasPermi"),L=R("loading");return d(),J(ee,null,[e(q,null,{default:o(()=>[e(K,{ref_key:"queryFormRef",ref:m,inline:!0,model:t,class:"-mb-15px","label-width":"68px"},{default:o(()=>[e(T,{label:"表单名",prop:"name"},{default:o(()=>[e(z,{modelValue:t.name,"onUpdate:modelValue":a[0]||(a[0]=l=>t.name=l),class:"!w-240px",clearable:"",placeholder:"请输入表单名",onKeyup:X(D,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(T,null,{default:o(()=>[e(c,{onClick:D},{default:o(()=>[e(P,{class:"mr-5px",icon:"ep:search"}),_(" 搜索 ")]),_:1}),e(c,{onClick:E},{default:o(()=>[e(P,{class:"mr-5px",icon:"ep:refresh"}),_(" 重置 ")]),_:1}),v((d(),y(c,{plain:"",type:"primary",onClick:S},{default:o(()=>[e(P,{class:"mr-5px",icon:"ep:plus"}),_(" 新增 ")]),_:1})),[[w,["bpm:form:create"]]])]),_:1})]),_:1},8,["model"])]),_:1}),e(q,null,{default:o(()=>[v((d(),y(A,{data:i.value},{default:o(()=>[e(u,{align:"center",label:"编号",prop:"id"}),e(u,{align:"center",label:"表单名",prop:"name"}),e(u,{align:"center",label:"状态",prop:"status"},{default:o(l=>[e($,{type:U(te).COMMON_STATUS,value:l.row.status},null,8,["type","value"])]),_:1}),e(u,{align:"center",label:"备注",prop:"remark"}),e(u,{formatter:U(le),align:"center",label:"创建时间",prop:"createTime"},null,8,["formatter"]),e(u,{align:"center",label:"操作"},{default:o(l=>[v((d(),y(c,{link:"",type:"primary",onClick:B=>S(l.row.id)},{default:o(()=>[_(" 编辑 ")]),_:2},1032,["onClick"])),[[w,["bpm:form:update"]]]),v((d(),y(c,{link:"",onClick:B=>M(l.row.id)},{default:o(()=>[_(" 详情 ")]),_:2},1032,["onClick"])),[[w,["bpm:form:query"]]]),v((d(),y(c,{link:"",type:"danger",onClick:B=>I(l.row.id)},{default:o(()=>[_(" 删除 ")]),_:2},1032,["onClick"])),[[w,["bpm:form:delete"]]])]),_:1})]),_:1},8,["data"])),[[L,f.value]]),e(O,{limit:t.pageSize,"onUpdate:limit":a[1]||(a[1]=l=>t.pageSize=l),page:t.pageNo,"onUpdate:page":a[2]||(a[2]=l=>t.pageNo=l),total:C.value,onPagination:g},null,8,["limit","page","total"])]),_:1}),e(W,{modelValue:V.value,"onUpdate:modelValue":a[3]||(a[3]=l=>V.value=l),title:"表单详情",width:"800"},{default:o(()=>[e(Q,{option:h.value.option,rule:h.value.rule},null,8,["option","rule"])]),_:1},8,["modelValue"])],64)}}});export{ge as default};
//# sourceMappingURL=index-92e748f3.js.map
