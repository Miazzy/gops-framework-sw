var u=(v,n,o)=>new Promise((g,i)=>{var s=l=>{try{m(o.next(l))}catch(c){i(c)}},p=l=>{try{m(o.throw(l))}catch(c){i(c)}},m=l=>l.done?g(l.value):Promise.resolve(l.value).then(s,p);m((o=o.apply(v,n)).next())});import{b as W,au as X,a7 as Z,av as b,ax as j,aA as G,az as J,_ as Q}from"./index.js";import{B as U}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as Y}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{P as ee}from"./index-20519caf.js";import{C as te}from"./CommonTree-c4ed7838.js";import{e as ae}from"./download-03e71dd5.js";import{c as C,s as se,g as oe,a as ne,b as ie,u as re,e as le}from"./template.data-3d5e7289.js";import{a as ce}from"./assign-37f1c13d.js";import{d as me,k as y,r as N,o as ue,al as de,x as pe,Z as T,a9 as D,aa as d,f,$ as fe,u as r,E as x,ad as h,v as ge}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";import"./useRender-21ce56fb.js";const Ie={class:"right-table-layout"},_e=me({__name:"index",setup(v){const{t:n}=W(),o=X(),g=y([]),i=N({}),s=N({}),p=y(!0),m=e=>{const t=k(),a={};if(ce(a,t.getFieldsValue(),i),e){const _=P();a.pageNo=_.current,a.pageSize=_.pageSize}return i.sortField||(a.sortField="fillinDate",a.sortOrder="desc"),a},l=()=>u(this,null,function*(){const e=m(!0);return(yield oe(e)).result}),c=y("细则模板"),[O,{reload:$,getForm:k,getPaginationRef:P,getSelectRows:B,clearSelectedRowKeys:E}]=Y({title:c,api:l,columns:C(),useSearchForm:!0,formConfig:se,bordered:!0,rowKey:"id",rowSelection:{type:"radio"},sortFn:e=>{var a;const t=(a=e.order)==null?void 0:a.replace("end","");i.sortOrder=t,i.sortField=t?e.field:void 0},showTableSetting:!0,showIndexColumn:!0});function F(){if(!s.stationId){o.error("请选择电站组织");return}j(`/po/assess/template/create?stationId=${s.stationId}&stationName=${s.stationName}&stationOrganId=${s.stationOrganId}&stationOrganName=${s.stationOrganName}`,M())}function S(){const e=B();return e.length==0?(o.error("请选择一行数据"),!1):e[0]}const R=()=>u(this,null,function*(){var a;const e=S();if(!e)return;if(yield o.delConfirm(),e.status!=0){o.error(n("common.message.delNotDraftMessage"));return}const t=yield ne({id:e.id});yield G((a=t.result)==null?void 0:a.processInstanceId),o.success(n("common.delSuccess")),I()});function L(e){console.log(11,e.id),J(e.id,c.value)}const M=e=>{const t=c.value;return e!=null&&e.id?(e==null?void 0:e.status)===0?`${n("common.action.edit")}${t}`:(e==null?void 0:e.status)===1||(e==null?void 0:e.status)===6?`审核${t}`:`查看${t}`:`${n("common.action.create")}${t}`};function z(){return u(this,null,function*(){const e=yield ie({});g.value=e.result})}function V(e){i.stationOrganId=null,i.stationId=null,s.stationId="",s.stationName="",s.stationOrganId="",s.stationOrganName="",e&&(e.nodeKindId==="org"&&(i.stationOrganId=e.id),e.nodeKindId==="station"&&(i.stationId=e.powerStationId,s.stationId=e.powerStationId,s.stationName=e.powerStationName,s.stationOrganId=e.organId,s.stationOrganName=e.organName)),I()}const I=()=>{E(),$()},A=()=>u(this,null,function*(){const e=S();if(e){if(e.status!=2){o.error("只有审批状态为“通过”可禁用");return}yield re(`?id=${e.id}`),o.success("已禁用"),I()}});function K(){o.createConfirm({title:n("common.message.confirmTitle"),iconType:"warning",content:n("common.message.exportMessage"),onOk(){return u(this,null,function*(){const t=m(!1);t.filename=`${c.value}.xls`,t.excelList=C(),yield le(t).then(a=>{ae(a==null?void 0:a.data,t.filename)}),o.success(n("common.exportSuccessText"))})}})}function q({rows:e}){p.value=e.length===0}return ue(()=>{z(),Z.getInstance().listen("assess-template",I)}),(e,t)=>{const a=de("a-button"),_=pe("auth");return T(),D(r(ee),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:d(()=>[f(te,{title:"电站组织",onSelect:V,value:g.value,class:"left-tree-layout",toolbar:!0,canEdit:!1,canAdd:!1,canDelete:!1,isShowOperationBtns:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),fe("div",Ie,[f(r(U),{onRegister:r(O),class:"fix-basic-table",onResizeColumn:t[0]||(t[0]=(w,H)=>H.width=w),onRowDbClick:t[1]||(t[1]=w=>L(w)),onSelectionChange:q},{toolbar:d(()=>[f(a,{type:"primary",preIcon:r(b).ADD,onClick:F},{default:d(()=>[x(h(r(n)("common.action.create")),1)]),_:1},8,["preIcon"]),f(a,{disabled:p.value,class:"red-btn",preIcon:r(b).DELETE,onClick:R},{default:d(()=>[x(h(r(n)("common.delText")),1)]),_:1},8,["disabled","preIcon"]),ge((T(),D(a,{disabled:p.value,class:"grey-btn",preIcon:r(b).DISABLE,onClick:A},{default:d(()=>[x(h("禁用"))]),_:1},8,["disabled","preIcon"])),[[_,"po:assess:template:disable"]]),f(a,{class:"yellow-btn",preIcon:r(b).EXPORT,onClick:K},{default:d(()=>[x(h(r(n)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])])]),_:1})}}});const je=Q(_e,[["__scopeId","data-v-fa6c7944"]]);export{je as default};
//# sourceMappingURL=index-78e256de.js.map