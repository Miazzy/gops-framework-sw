var u=(r,i,t)=>new Promise((s,l)=>{var d=e=>{try{o(t.next(e))}catch(a){l(a)}},n=e=>{try{o(t.throw(e))}catch(a){l(a)}},o=e=>e.done?s(e.value):Promise.resolve(e.value).then(d,n);o((t=t.apply(r,i)).next())});import{P as _}from"./index-20519caf.js";import{B as b}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as v}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{a5 as f,_ as x}from"./index.js";import{C as w}from"./CommonTree-c4ed7838.js";import{d as y,k as c,o as z,Z as I,a9 as S,aa as A,f as m,$ as N,u as p}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./index-3801a970.js";function P(r){return f.get({url:"/oa/addressbook/page",params:r})}const B=r=>f.post({url:"/system/org/list-tree",params:r},{}),C=[{title:"账号",dataIndex:"code",width:160,headAlign:"center",align:"left",resizable:!0,sorter:!0},{title:"姓名",dataIndex:"name",width:120,headAlign:"center",align:"left",resizable:!0,sorter:!0},{title:"公司",dataIndex:"orgName",width:120,headAlign:"center",align:"left",resizable:!0,sorter:!0},{title:"部门",dataIndex:"deptName",width:120,headAlign:"center",align:"left",resizable:!0,sorter:!0},{title:"岗位",dataIndex:"positionName",width:120,headAlign:"center",align:"left",resizable:!0,sorter:!0},{title:"电话",dataIndex:"mobilePhone",width:120,headAlign:"center",align:"left",resizable:!0,sorter:!0},{title:"邮箱",dataIndex:"email",width:120,headAlign:"center",align:"left",resizable:!0,sorter:!0}],F=[{label:"姓名",field:"name",component:"Input",colProps:{span:8}}],k={class:"right-table-layout"},T=y({__name:"index",setup(r){const i=c([]),t=c({name:null,fullId:null,pageNo:1,pageSize:10});function s(){return u(this,null,function*(){const e=yield B({orgKindIds:"ogn,dpt",showPosition:!0,status:1});i.value=e.result,n()})}function l(e={}){t.value.fullId=e.fullId,n()}const[d,{reload:n,getPaginationRef:o}]=v({title:"通讯录",api:()=>u(this,null,function*(){const e=o();return t.value.pageNo=e.current,t.value.pageSize=e.pageSize,(yield P(t.value)).result}),columns:C,bordered:!0,rowKey:"id",formConfig:{labelWidth:120,showAdvancedButton:!1,schemas:F},useSearchForm:!0,showTableSetting:!0,pagination:{pageSize:20},handleSearchInfoFn(e){for(const a in e)t.value[a]=e[a]},sortFn:e=>{e.order?(t.value.sortField=e.field,t.value.sortOrder=e.order.replace("end","")):(t.value.sortField=null,t.value.sortOrder=null)}});return z(()=>{s()}),(e,a)=>(I(),S(p(_),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:A(()=>[m(w,{title:"组织树",onSelect:l,value:i.value,class:"left-tree-layout",toolbar:!0,canEdit:!1,canAdd:!1,canDelete:!1,isShowOperationBtns:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),N("div",k,[m(p(b),{class:"fix-basic-table",onRegister:p(d),onResizeColumn:a[0]||(a[0]=(g,h)=>h.width=g)},null,8,["onRegister"])])]),_:1}))}});const ne=x(T,[["__scopeId","data-v-d46c760c"]]);export{ne as default};
//# sourceMappingURL=index-0b04b951.js.map
