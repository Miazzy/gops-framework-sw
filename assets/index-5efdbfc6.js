var d=(y,o,s)=>new Promise((g,i)=>{var n=r=>{try{m(s.next(r))}catch(c){i(c)}},I=r=>{try{m(s.throw(r))}catch(c){i(c)}},m=r=>r.done?g(r.value):Promise.resolve(r.value).then(n,I);m((s=s.apply(y,o)).next())});import{b as z,au as q,a7 as A,av as x,ax as K,aA as H,az as W,_ as X}from"./index.js";import{B as Z}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as j}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{P as G}from"./index-20519caf.js";import{C as J}from"./CommonTree-c4ed7838.js";import{e as Q}from"./download-03e71dd5.js";import{c as S,s as U,g as Y,a as tt,b as et,e as at}from"./filling.data-83d8e807.js";import{a as nt}from"./assign-37f1c13d.js";import{d as ot,k as b,r as v,o as st,al as it,Z as rt,a9 as lt,aa as p,f,$ as ct,u as l,E as w,ad as h}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";import"./useRender-21ce56fb.js";const mt={class:"right-table-layout"},ut=ot({__name:"index",setup(y){const{t:o}=z(),s=q(),g=b([]),i=v({}),n=v({}),I=b(!0),m=t=>{const e=N(),a={};if(nt(a,e.getFieldsValue(),i),t){const u=T();a.pageNo=u.current,a.pageSize=u.pageSize}return i.sortField||(a.sortField="fillinDate",a.sortOrder="desc"),a},r=()=>d(this,null,function*(){const t=m(!0);return(yield Y(t)).result}),c=b("细则填报"),[C,{reload:_,getForm:N,getPaginationRef:T,getSelectRows:O,clearSelectedRowKeys:D}]=j({title:c,api:r,columns:S(),useSearchForm:!0,formConfig:U,bordered:!0,rowSelection:{type:"radio"},sortFn:t=>{var a;const e=(a=t.order)==null?void 0:a.replace("end","");i.sortOrder=e,i.sortField=e?t.field:void 0},showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!0});function P(){if(!n.stationId){s.error("请选择电站组织");return}K(`/po/assess/filling/create?stationId=${n.stationId}&stationName=${n.stationName}&stationOrganId=${n.stationOrganId}&stationOrganName=${n.stationOrganName}`,E())}function $(){const t=O();return t.length==0?(s.error("请选择一行数据"),!1):t[0]}const k=()=>d(this,null,function*(){var a;const t=$();if(!t)return;if(yield s.delConfirm(),t.status!=0){s.error(o("common.message.delNotDraftMessage"));return}const e=yield tt({id:t.id});yield H((a=e.result)==null?void 0:a.processInstanceId),s.success(o("common.delSuccess")),D(),_()});function F(t){W(t.id,c.value)}const E=t=>{const e=c.value;return t!=null&&t.id?(t==null?void 0:t.status)===0?`${o("common.action.edit")}${e}`:(t==null?void 0:t.status)===1||(t==null?void 0:t.status)===6?`审批${e}`:`查看${e}`:`${o("common.action.create")}${e}`};function R(){return d(this,null,function*(){const t=yield et({});g.value=t.result})}function B(t){i.stationOrganId=null,i.stationId=null,n.stationId="",n.stationName="",n.stationOrganId="",n.stationOrganName="",t&&(t.nodeKindId==="org"&&(i.stationOrganId=t.id),t.nodeKindId==="station"&&(i.stationId=t.powerStationId,n.stationId=t.powerStationId,n.stationName=t.powerStationName,n.stationOrganId=t.organId,n.stationOrganName=t.organName)),_()}function L(){s.createConfirm({title:o("common.message.confirmTitle"),iconType:"warning",content:o("common.message.exportMessage"),onOk(){return d(this,null,function*(){const e=m(!1);e.filename=`${c.value}.xls`,e.excelList=S(),yield at(e).then(a=>{Q(a==null?void 0:a.data,e.filename)}),s.success(o("common.exportSuccessText"))})}})}function M({rows:t}){I.value=t.length===0}return st(()=>{R(),A.getInstance().listen("assess-filling",_)}),(t,e)=>{const a=it("a-button");return rt(),lt(l(G),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:p(()=>[f(J,{title:"电站组织",onSelect:B,value:g.value,class:"left-tree-layout",toolbar:!0,canEdit:!1,canAdd:!1,canDelete:!1,isShowOperationBtns:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),ct("div",mt,[f(l(Z),{onRegister:l(C),class:"fix-basic-table",onResizeColumn:e[0]||(e[0]=(u,V)=>V.width=u),onRowDbClick:e[1]||(e[1]=u=>F(u)),onSelectionChange:M},{toolbar:p(()=>[f(a,{type:"primary",preIcon:l(x).ADD,onClick:P},{default:p(()=>[w(h(l(o)("common.action.create")),1)]),_:1},8,["preIcon"]),f(a,{disabled:I.value,class:"red-btn",preIcon:l(x).DELETE,onClick:k},{default:p(()=>[w(h(l(o)("common.delText")),1)]),_:1},8,["disabled","preIcon"]),f(a,{class:"yellow-btn",preIcon:l(x).EXPORT,onClick:L},{default:p(()=>[w(h(l(o)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])])]),_:1})}}});const At=X(ut,[["__scopeId","data-v-168dd475"]]);export{At as default};
//# sourceMappingURL=index-5efdbfc6.js.map
