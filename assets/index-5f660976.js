var g=(l,p,n)=>new Promise((o,m)=>{var w=s=>{try{c(n.next(s))}catch(d){m(d)}},v=s=>{try{c(n.throw(s))}catch(d){m(d)}},c=s=>s.done?o(s.value):Promise.resolve(s.value).then(w,v);c((n=n.apply(l,p)).next())});import{a5 as z,au as A,a7 as F,av as h,at as r,ax as B,az as M,aA as Y}from"./index.js";import{P as N}from"./index-20519caf.js";import{B as K}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as O}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import"./index-316f6ffb.js";import{u as j}from"./useRender-21ce56fb.js";import{d as L,k as S,o as H,al as q,Z as V,a9 as W,aa as u,f,u as i,E as b,ad as I}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";function Z(l){return z.get({url:"/oa/official-doc-release/page",params:l})}function y(l){return z.put({url:"/oa/official-doc-release/update",params:l})}const G={0:"#dc0000",1:"#338ed1",2:"#30ca5a",3:"#929292",4:"#929292",5:"#929292",6:"#fda941"},J=[{title:"发文主题",dataIndex:"subject",align:"left",headAlign:"center",width:"15%",sorter:!0,resizable:!0},{title:"信息类型",dataIndex:"infoKindName",width:"10%",sorter:!0,resizable:!0},{title:"发文分类",dataIndex:"dispatchKindName",width:"10%",sorter:!0,resizable:!0},{title:"所在部门",dataIndex:"responsibleDeptName",align:"left",headAlign:"center",width:"10%",sorter:!0,resizable:!0},{title:"发布时间",dataIndex:"effectiveTime",width:"10%",sorter:!0,resizable:!0},{title:"发文年份",dataIndex:"dispatchYear",align:"right",headAlign:"center",width:"10%",sorter:!0,resizable:!0},{title:"发文编号",dataIndex:"dispatchSequence",align:"right",headAlign:"center",width:"10%",sorter:!0,resizable:!0},{title:"流程状态",dataIndex:"statusText",width:"10%",sorter:!0,resizable:!0,customRender:({text:l,record:p})=>j.renderTag(l,G[p.status])},{title:"状态",dataIndex:"bizStatusText",width:"10%",sorter:!0,resizable:!0}],Q=[{label:"发文主题",field:"subject",component:"Input",colProps:{span:8}},{label:"发文分类",field:"dispatchKind",component:"DictSelectBox",componentProps:{type:"dispatch_kind"},colProps:{span:8}},{field:"[startEffectiveTime, endEffectiveTime]",label:"发布时间",component:"RangePicker",colProps:{span:8},componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]}},{label:"状态",field:"bizStatus",component:"DictSelectBox",colProps:{span:8},componentProps:{type:"enable_or_disable"}}],ye=L({__name:"index",setup(l){const{createConfirm:p}=A();let n=S("");const o=S({status:"",subject:"",dispatchKind:"",startEffectiveTime:"",endEffectiveTime:"",pageNo:1,pageSize:10,sortField:"fillinDate",sortOrder:"desc"}),m=()=>{let e=d();if(e.length!=1){r.getInstance().info("请选择一行记录操作");return}if(x()[0].status!=2){r.getInstance().info("已完成得数据才能操作");return}y({id:e[0],bizStatus:0}).then(a=>{a.code==0?(r.getInstance().info("禁用成功."),c()):r.getInstance().error("禁用成功.原因:"+a.message)})},w=()=>{let e=d();if(e.length!=1){r.getInstance().info("请选择一行记录操作");return}if(x()[0].status!=2){r.getInstance().info("已完成得数据才能操作");return}y({id:e[0],bizStatus:1}).then(a=>{a.code==0?(r.getInstance().info("启用成功."),c()):r.getInstance().error("启用成功.原因:"+a.message)})},[v,{reload:c,getPaginationRef:s,getSelectRowKeys:d,getSelectRows:x}]=O({title:"公文发布",api:()=>g(this,null,function*(){const e=s();return o.value.pageNo=e.current,o.value.pageSize=e.pageSize,(yield Z(o.value)).result}),columns:J,rowKey:"id",bordered:!0,showTableSetting:!0,formConfig:{schemas:Q,labelWidth:120,showAdvancedButton:!0,autoAdvancedLine:1},sortFn:e=>{e.order?(o.value.sortField=e.field.replace("Text",""),o.value.sortOrder=e.order.replace("end","")):(o.value.sortField="fillinDate",o.value.sortOrder="desc")},useSearchForm:!0,rowSelection:{type:"radio",fixed:!0,onSelect:C},handleSearchInfoFn(e){for(const t in e)o.value[t]=e[t]}});function C(e,t){t?n.value=e.id:n.value=""}function _({keys:e,rows:t}){if(t&&t.length>0){const a=t[0];n.value=a.id}else n.value=""}function T(){B("/oa/info/officedoc/create?id=","添加公文发布")}const k=(e,t,a)=>{D(e)};function D(e){M(e.id)}const P=()=>g(this,null,function*(){let e=x();if(e.length!=1){r.getInstance().success("请选择一行数据");return}let t=e[0];p({title:"提示",iconType:"warning",content:"确定要删除选中的记录？",onOk(){return g(this,null,function*(){if(t.status!=0){r.getInstance().success("非草稿状态不能删除");return}yield Y(t.processInstanceId),r.getInstance().success("删除成功"),c()})}})});return H(()=>{F.getInstance().listen("office-doc",()=>{c()})}),(e,t)=>{const a=q("a-button");return V(),W(i(N),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:u(()=>[f(i(K),{onRegister:i(v),onResizeColumn:t[0]||(t[0]=(E,R)=>R.width=E),onSelectionChange:_,onRowDbClick:k},{toolbar:u(()=>[f(a,{type:"primary",preIcon:i(h).ADD,onClick:T},{default:u(()=>[b(I("添加"))]),_:1},8,["preIcon"]),f(a,{class:"red-btn",disabled:i(n)=="",preIcon:i(h).DELETE,onClick:P},{default:u(()=>[b(I("删除"))]),_:1},8,["disabled","preIcon"]),f(a,{type:"warning",disabled:i(n)=="",preIcon:i(h).ENABLE,onClick:w},{default:u(()=>[b(I("启用"))]),_:1},8,["disabled","preIcon"]),f(a,{type:"warning",disabled:i(n)=="",preIcon:i(h).DISABLE,onClick:m},{default:u(()=>[b(I("禁用"))]),_:1},8,["disabled","preIcon"])]),_:1},8,["onRegister"])]),_:1})}}});export{ye as default};
//# sourceMappingURL=index-5f660976.js.map