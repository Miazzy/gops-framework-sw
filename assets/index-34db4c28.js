var m=(i,r,n)=>new Promise((h,p)=>{var v=s=>{try{d(n.next(s))}catch(u){p(u)}},l=s=>{try{d(n.throw(s))}catch(u){p(u)}},d=s=>s.done?h(s.value):Promise.resolve(s.value).then(v,l);d((n=n.apply(i,r)).next())});import{P as L}from"./index-20519caf.js";import{a5 as w,b as j,au as H,a7 as K,av as f,ax as P,at as y}from"./index.js";import{B as V}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as W}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{d as q,k as z,o as Z,al as $,x as G,Z as S,a9 as x,aa as c,f as I,u as o,E as b,ad as g,v as D}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";function J(i){return w.get({url:"/po/inspection-plan/page",params:i})}function Q(i){return w.delete({url:"/po/inspection-plan/delete?id="+i})}function U(i){return w.put({url:"/po/inspection-plan/update?id="+i.id+"&status="+i.bizStatus})}const X=[{title:"单据编号",dataIndex:"billCode",width:300,sorter:!0,resizable:!0},{title:"巡检区域",dataIndex:"inspectionAreaTypeText",width:300,sorter:!0,resizable:!0},{title:"主题",dataIndex:"subject",align:"left",headAlign:"center",width:300,sorter:!0,resizable:!0},{title:"创建人",dataIndex:"personMemberName",width:200,sorter:!0,resizable:!0},{title:"创建时间",dataIndex:"fillinDate",width:300,sorter:!0,resizable:!0},{title:"模板状态",dataIndex:"bizStatusText",sorter:!0,resizable:!0}],Y=[{label:"单据编号",field:"billCode",component:"Input",colProps:{span:8}},{label:"巡检区域",field:"inspectionAreaType",component:"DictSelectBox",componentProps:{type:"commDeviceCategory"},colProps:{span:8}},{label:"状态",field:"status",component:"DictSelectBox",componentProps:{type:"bpm_process_instance_result"},colProps:{span:8}},{label:"模板状态",field:"bizStatus",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"禁用",value:"0"}]},colProps:{span:8}}],_e=q({__name:"index",setup(i){let r=z("");const n=z({status:"",inspectionAreaType:"",bizStatus:"",pageNo:1,pageSize:10,sortField:"fillinDate",sortOrder:"desc"}),{t:h}=j(),{createConfirm:p}=H(),[v,{reload:l,getSelectRowKeys:d,getPaginationRef:s,getSelectRows:u}]=W({title:"巡检计划",api:()=>m(this,null,function*(){const e=s();return n.value.pageNo=e.current,n.value.pageSize=e.pageSize,(yield J(n.value)).result}),columns:X,rowKey:"id",bordered:!0,formConfig:{labelWidth:120,schemas:Y,showAdvancedButton:!0,autoAdvancedLine:1},sortFn:e=>{e.order?(n.value.sortField=e.field.replace("Text",""),n.value.sortOrder=e.order.replace("end","")):(n.value.sortField="fillinDate",n.value.sortOrder="desc")},useSearchForm:!0,showTableSetting:!0,rowSelection:{type:"radio",fixed:!0,onSelect:k},handleSearchInfoFn(e){for(const t in e)n.value[t]=e[t]}});function k(e,t){t?r.value=e.id:r.value=""}function T({keys:e,rows:t}){if(t&&t.length>0){const a=t[0];r.value=a.id}else r.value=""}function B(){P("/po/inspection/inspectionplan/create?id=","添加巡检计划")}const E=(e,t,a)=>{A(e)};function A(e){let t="";e.status==0?t="修改":t="查看",P(`/po/inspection/inspectionplan/create?id=${e.id}`,t+"巡检计划")}const R=()=>m(this,null,function*(){let e=u();if(e.length!=1){y.getInstance().success("请选择一行数据");return}p({title:"提示",iconType:"warning",content:"确定要删除选中的记录？",onOk(){return m(this,null,function*(){Q(e[0].id).then(a=>{y.getInstance().success("删除成功"),l()})})}})});function F(){C(1)}function O(){C(0)}function C(e){let t=d();if(t.length!==1)return y.getInstance().info("请选择一条数据."),!1;let a=e==1?"启用":"禁用";p({title:a,iconType:"warning",content:h("确定要"+a+"数据？"),onOk(){return m(this,null,function*(){U({id:t[0],bizStatus:e}).then(()=>{l()})})}}),l()}return Z(()=>{K.getInstance().listen("inspection-plan",()=>{l()})}),(e,t)=>{const a=$("a-button"),_=G("auth");return S(),x(o(L),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:c(()=>[I(o(V),{onRegister:o(v),class:"w-4/4 xl:w-12/12",onResizeColumn:t[0]||(t[0]=(M,N)=>N.width=M),onSelectionChange:T,onRowDbClick:E},{toolbar:c(()=>[I(a,{type:"primary",preIcon:o(f).ADD,onClick:B},{default:c(()=>[b(g("添加"))]),_:1},8,["preIcon"]),I(a,{class:"red-btn",disabled:o(r)=="",preIcon:o(f).DELETE,onClick:R},{default:c(()=>[b(g("删除"))]),_:1},8,["disabled","preIcon"]),D((S(),x(a,{class:"green-btn",disabled:o(r)=="",preIcon:o(f).ENABLE,onClick:F},{default:c(()=>[b(g("启用"))]),_:1},8,["disabled","preIcon"])),[[_,"po:inspectionPlan:enable"]]),D((S(),x(a,{class:"grey-btn",disabled:o(r)=="",preIcon:o(f).DISABLE,onClick:O},{default:c(()=>[b(g("禁用"))]),_:1},8,["disabled","preIcon"])),[[_,"po:inspectionPlan:disabled"]])]),_:1},8,["onRegister"])]),_:1})}}});export{_e as default};
//# sourceMappingURL=index-34db4c28.js.map
