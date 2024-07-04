var _e=Object.defineProperty;var V=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var A=(u,n,a)=>n in u?_e(u,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[n]=a,M=(u,n)=>{for(var a in n||(n={}))ge.call(n,a)&&A(u,a,n[a]);if(V)for(var a of V(n))ve.call(n,a)&&A(u,a,n[a]);return u};var C=(u,n,a)=>new Promise((y,k)=>{var l=i=>{try{I(a.next(i))}catch(p){k(p)}},x=i=>{try{I(a.throw(i))}catch(p){k(p)}},I=i=>i.done?y(i.value):Promise.resolve(i.value).then(l,x);I((a=a.apply(u,n)).next())});import{b as he,au as be,bS as ye,av as T,_ as xe}from"./index.js";import{b as Ie}from"./index-316f6ffb.js";import{B as Se}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as Ce}from"./useTable-109483b3.js";import{b2 as Te}from"./antd-15ac76ed.js";import{D as ke}from"./Dialog-0a006d82.js";import{P as we}from"./index-20519caf.js";import De from"./SysCommonTree-90bc100f.js";import{i as Ee,D as Re,d as Be,u as Fe,e as Me,c as Ue,s as Ne,g as Oe}from"./DetailModal-e402d25c.js";import{e as Pe}from"./download-03e71dd5.js";import{d as Ve,r as z,k as f,al as h,Z as D,a9 as Ae,aa as s,f as r,$ as ze,u as d,E as m,ad as b,_ as U,F as Le,ac as N}from"./vue-71d1abb3.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./CommonTree-c4ed7838.js";import"./index-3801a970.js";import"./index-66d20ba6.js";import"./assign-37f1c13d.js";const $e={class:"right-table-layout"},He={key:0,style:{color:"#19be6b"}},Ke={key:1,style:{color:"red"}},qe=Ve({__name:"index",setup(u){const{t:n}=he(),a=be(),y=z({}),k=f([]),l=z({}),x=f([]),I={Authorization:`Bearer ${ye()}`},i=f(!0),p=f(!1),_=f(0),L=()=>{const t=G().getFieldsValue();t.fullId=l.fullId;const o=W();return t.pageNo=o.current,t.pageSize=o.pageSize,M(M({},t),y)},$=()=>C(this,null,function*(){const e=L();x.value=[];const t=yield Oe(e);return x.value=t.list,t}),E={visible:!0},[H,{openModal:R}]=Ie(),[K,{getSelectRows:q,getForm:G,getPaginationRef:W,clearSelectedRowKeys:Z,reload:j}]=Ce({title:"指标列表",api:$,columns:Ue,useSearchForm:!0,formConfig:Ne,showTableSetting:!0,bordered:!0,rowSelection:{type:"radio"},sortFn:e=>{var o;const t=(o=e.order)==null?void 0:o.replace("end","");y.sortOrder=t,y.sortField=t?e.field:void 0}});function J(e){return C(this,null,function*(){l.id=null,l.name=null,l.fullId=null,e&&e.parentId!=="root"&&(l.id=e.id,l.name=e.name,l.fullId=e.fullId),g()})}const Q=e=>{e.id&&(l.name=e.name,g())};function X(e,t){let o=!0;x.value.length>0&&(o=!1,a.error("该指标类型节点存在指标数据，不能删除")),t(o)}function Y(e,t){t.width=e}function ee(){if(!l.id){a.error("请选择指标库类型");return}R(E,{isUpdate:!1,record:{id:null,folderId:l.id,indexType:l.name,isReadOnly:!1}})}function B(){const e=q();return e.length==0||k.value.length>1?(a.error("请选择一行数据"),!1):e[0]}function te(){const e=B();e&&R(E,{isUpdate:!0,record:{id:e.id,isReadOnly:!1}})}function ae(e){R(E,{isUpdate:!0,record:{id:e.id,isReadOnly:!0}})}function oe(){return C(this,null,function*(){const e=B();e&&(yield a.delConfirm(),yield Be(e.id),a.success(n("common.delSuccessText")),g())})}const g=()=>{Z(),j()};function ne(){O(1,"已启用")}function se(){O(0,"已禁用")}function O(e,t){const o=B();o&&Fe(o.id,e).then(()=>{a.success(t),g()})}function re(){g()}function le(t){return C(this,arguments,function*({key:e}){if(e==="downloadTemplate"){const o={filename:"指标模板.xls"};yield Me(o).then(c=>{Pe(c==null?void 0:c.data,o.filename)}),a.success(n("common.exportSuccessText"))}})}const ie=e=>{const t=e.type==="application/vnd.ms-excel"||e.type==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return t||a.error(`${e.name} 不是Excel文件`),t||Te.LIST_IGNORE},v=f(0),F=f(Math.floor(Math.random()*28)+3),ce=e=>{var o;let t;if(e.status==="uploading"&&e.percent===0&&(p.value=!0,v.value=0,_.value=0,t=setInterval(()=>{v.value<F.value-1?(v.value++,_.value=parseFloat((v.value/F.value*100).toFixed(0))):_.value<99&&_.value++},1e3)),e.status==="uploading"&&e.percent===100){const c=parseInt(F.value*.6);c>v.value&&(v.value=c)}if(e.status==="done"){if(t&&clearInterval(t),((o=e.response)==null?void 0:o.code)!=0){p.value=!1;return}_.value=100,setTimeout(()=>{p.value=!1},1e3)}else e.status==="error"&&(t&&clearInterval(t),p.value=!1)},de=e=>{var o,c,w;const t=e.file;if(console.log("file",t),ce(t),t.status==="done"){if(((o=t.response)==null?void 0:o.code)!=0&&((c=t.response)!=null&&c.msg)){a.error((w=t.response)==null?void 0:w.msg);return}setTimeout(()=>{a.success("导入数据成功"),g()},1e3)}else t.status==="error"&&a.error("导入数据失败")};function ue({rows:e}){i.value=e.length===0}return(e,t)=>{const o=h("a-button"),c=h("a-menu-item"),w=h("a-upload"),pe=h("a-menu"),me=h("a-dropdown"),fe=h("a-progress");return D(),Ae(d(we),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[r(De,{treeClass:"left-tree-layout",title:"指标库类型",treeType:"base_index_storehouse_type",toolbar:!0,search:!0,onSelect:J,onBeforeDelete:X,onAfterSave:Q}),ze("div",$e,[r(d(Se),{onRegister:d(K),onResizeColumn:Y,onRowDbClick:t[0]||(t[0]=S=>ae(S)),class:"fix-basic-table",onSelectionChange:ue},{toolbar:s(()=>[r(o,{type:"primary",preIcon:d(T).ADD,onClick:ee},{default:s(()=>[m(b(d(n)("common.action.create")),1)]),_:1},8,["preIcon"]),r(o,{disabled:i.value,type:"primary",preIcon:d(T).EDIT,onClick:te},{default:s(()=>[m(b(d(n)("common.action.update")),1)]),_:1},8,["disabled","preIcon"]),r(o,{disabled:i.value,class:"red-btn",preIcon:d(T).DELETE,onClick:oe},{default:s(()=>[m(b(d(n)("common.delText")),1)]),_:1},8,["disabled","preIcon"]),r(o,{disabled:i.value,class:"green-btn",preIcon:d(T).ENABLE,onClick:ne},{default:s(()=>[m(b("启用"))]),_:1},8,["disabled","preIcon"]),r(o,{disabled:i.value,class:"grey-btn",preIcon:d(T).DISABLE,onClick:se},{default:s(()=>[m(b("禁用"))]),_:1},8,["disabled","preIcon"]),r(me,null,{overlay:s(()=>[r(pe,{onClick:le},{default:s(()=>[r(c,{key:"downloadTemplate"},{default:s(()=>[m("下载模板")]),_:1}),r(c,{key:"import"},{default:s(()=>[r(w,{name:"file",showUploadList:!1,headers:I,accept:".xls,.xlsx","before-upload":ie,onChange:de,action:Ee},{default:s(()=>[m(b("导入数据"))]),_:1},8,["action"])]),_:1})]),_:1})]),default:s(()=>[r(o,{class:"yellow-btn"},{default:s(()=>[m(" Excel导入 ")]),_:1})]),_:1})]),bodyCell:s(({column:S,text:P})=>[S.dataIndex==="status"?(D(),U(Le,{key:0},[P==1?(D(),U("span",He,"启用")):N("",!0),P==0?(D(),U("span",Ke,"禁用")):N("",!0)],64)):N("",!0)]),_:1},8,["onRegister"])]),r(Re,{onRegister:d(H),onSuccess:re},null,8,["onRegister"]),r(ke,{visible:p.value,"onUpdate:visible":t[1]||(t[1]=S=>p.value=S),title:"导入中请稍后...",width:460,height:100,showBtm:!1,smode:"normal"},{default:s(()=>[r(fe,{percent:_.value},null,8,["percent"])]),_:1},8,["visible"])]),_:1})}}});const St=xe(qe,[["__scopeId","data-v-61da680a"]]);export{St as default};
//# sourceMappingURL=index-4271ccd6.js.map
