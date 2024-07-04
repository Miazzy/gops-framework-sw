var b=(r,c,n)=>new Promise((a,p)=>{var l=d=>{try{u(n.next(d))}catch(g){p(g)}},f=d=>{try{u(n.throw(d))}catch(g){p(g)}},u=d=>d.done?a(d.value):Promise.resolve(d.value).then(l,f);u((n=n.apply(r,c)).next())});import{P as A}from"./index-20519caf.js";import{a5 as C,a0 as E,au as M,a7 as B,av as I,at as s,ax as K,az as O,aA as Y}from"./index.js";import{B as N}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as j}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import"./index-316f6ffb.js";import{u as L}from"./useRender-21ce56fb.js";import{d as H,k as v,o as V,al as W,Z as q,a9 as U,aa as m,f as h,u as i,E as w,ad as S}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";function Z(r){return C.get({url:"/oa/info-notice-release/page",params:r})}function x(r){return C.put({url:"/oa/info-notice-release/update",params:r})}function G(r){return C.get({url:"/oa/infoKind/getInfoKindByCodePreAndOrgId",params:r})}const J={0:"#dc0000",1:"#338ed1",2:"#30ca5a",3:"#929292",4:"#929292",5:"#929292",6:"#fda941"},Q=[{title:"通知主题",dataIndex:"subject",align:"left",headAlign:"center",width:120,sorter:!0,resizable:!0},{title:"信息类型",dataIndex:"infoKindName",width:120,sorter:!0,resizable:!0},{title:"所在部门",dataIndex:"deptName",align:"left",headAlign:"center",width:120,sorter:!0,resizable:!0},{title:"发布时间",dataIndex:"finishedDate",width:120,sorter:!0,resizable:!0},{title:"流程状态",dataIndex:"statusText",width:100,sorter:!0,resizable:!0,customRender:({text:r,record:c})=>L.renderTag(r,J[c.status])},{title:"状态",dataIndex:"bizStatusText",width:100,sorter:!0,resizable:!0}],X=[{label:"通知主题",field:"subject",component:"Input",colProps:{span:8}},{label:"通知类型",field:"infoKindId",component:"ApiSelect",componentProps:{options:[],api:()=>b(void 0,null,function*(){const c=E().userInfo.orgs;let n=c.filter(l=>l.isMainOrg==1)[0];n==null&&(n=c[0]);let a=yield G({type:"infoKind",codePre:"02",orgId:n.orgId}),p=[];for(let l=0;l<a.result.length;l++){let f=a.result[l];p.push({value:f.id,label:f.name})}return p})},colProps:{span:8}},{field:"[startFinishedDate, endFinishedDate]",label:"发布时间",component:"RangePicker",colProps:{span:8},componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]}},{label:"状态",field:"bizStatus",component:"DictSelectBox",colProps:{span:8},componentProps:{type:"enable_or_disable"}}],Pe=H({__name:"index",setup(r){const{createConfirm:c}=M();let n=v("");const a=v({status:"",subject:"",infoKindId:"",startFinisheddate:"",endFinisheddate:"",pageNo:1,pageSize:10,sortField:"fillinDate",sortOrder:"desc"}),p=()=>{let e=g();if(e.length!=1){s.getInstance().info("请选择一行记录操作");return}if(y()[0].status!=2){s.getInstance().info("已完成得数据才能操作");return}x({id:e[0],bizStatus:0}).then(o=>{o.code==0?(s.getInstance().info("禁用成功."),u()):s.getInstance().error("禁用成功.原因:"+o.message)})},l=()=>{let e=g();if(e.length!=1){s.getInstance().info("请选择一行记录操作");return}if(y()[0].status!=2){s.getInstance().info("已完成得数据才能操作");return}x({id:e[0],bizStatus:1}).then(o=>{o.code==0?(s.getInstance().info("启用成功."),u()):s.getInstance().error("启用成功.原因:"+o.message)})},[f,{reload:u,getPaginationRef:d,getSelectRowKeys:g,getSelectRows:y}]=j({title:"通知发布",api:()=>b(this,null,function*(){const e=d();return a.value.pageNo=e.current,a.value.pageSize=e.pageSize,(yield Z(a.value)).result}),columns:Q,rowKey:"id",bordered:!0,showTableSetting:!0,formConfig:{labelWidth:120,schemas:X,showAdvancedButton:!0,autoAdvancedLine:1},sortFn:e=>{e.order?(a.value.sortField=e.field.replace("Text",""),a.value.sortOrder=e.order.replace("end","")):(a.value.sortField="fillinDate",a.value.sortOrder="desc")},useSearchForm:!0,rowSelection:{type:"radio",fixed:!0,onSelect:P},handleSearchInfoFn(e){for(const t in e)a.value[t]=e[t]}});function P(e,t){t?n.value=e.id:n.value=""}function D({keys:e,rows:t}){if(t&&t.length>0){const o=t[0];n.value=o.id}else n.value=""}function _(){K("/oa/info/infonotice/create?id=","添加通知发布")}const k=(e,t,o)=>{z(e)};function z(e){O(e.id)}const F=()=>b(this,null,function*(){let e=y();if(e.length!=1){s.getInstance().success("请选择一行数据");return}let t=e[0];c({title:"提示",iconType:"warning",content:"确定要删除选中的记录？",onOk(){return b(this,null,function*(){if(t.status!=0){s.getInstance().success("非草稿状态不能删除");return}yield Y(t.processInstanceId),s.getInstance().success("删除成功"),u()})}})});return V(()=>{B.getInstance().listen("info-notice",()=>{u()})}),(e,t)=>{const o=W("a-button");return q(),U(i(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:m(()=>[h(i(N),{onRegister:i(f),onResizeColumn:t[0]||(t[0]=(R,T)=>T.width=R),onSelectionChange:D,onRowDbClick:k},{toolbar:m(()=>[h(o,{type:"primary",preIcon:i(I).ADD,onClick:_},{default:m(()=>[w(S("添加"))]),_:1},8,["preIcon"]),h(o,{class:"red-btn",disabled:i(n)=="",preIcon:i(I).DELETE,onClick:F},{default:m(()=>[w(S("删除"))]),_:1},8,["disabled","preIcon"]),h(o,{class:"green-btn",disabled:i(n)=="",preIcon:i(I).ENABLE,onClick:l},{default:m(()=>[w(S("启用"))]),_:1},8,["disabled","preIcon"]),h(o,{class:"grey-btn",disabled:i(n)=="",preIcon:i(I).DISABLE,onClick:p},{default:m(()=>[w(S("禁用"))]),_:1},8,["disabled","preIcon"])]),_:1},8,["onRegister"])]),_:1})}}});export{Pe as default};
//# sourceMappingURL=index-354fd00d.js.map