var be=Object.defineProperty;var j=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var W=(l,d,t)=>d in l?be(l,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[d]=t,O=(l,d)=>{for(var t in d||(d={}))_e.call(d,t)&&W(l,t,d[t]);if(j)for(var t of j(d))Ie.call(d,t)&&W(l,t,d[t]);return l};var T=(l,d,t)=>new Promise((A,u)=>{var h=f=>{try{r(t.next(f))}catch(b){u(b)}},m=f=>{try{r(t.throw(f))}catch(b){u(b)}},r=f=>f.done?A(f.value):Promise.resolve(f.value).then(h,m);r((t=t.apply(l,d)).next())});import{r as k,d as ye,k as c,o as we,al as I,Z,a9 as Ce,aa as s,f as n,$ as ke,u as y,E as N,v as D,A as B,_ as Fe,ac as Se}from"./vue-71d1abb3.js";import{B as Re}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as Te}from"./useTable-109483b3.js";import{a2 as p}from"./antd-15ac76ed.js";import{a5 as F,au as Ne,a7 as De,av as U,_ as Be}from"./index.js";import{P as ze}from"./index-20519caf.js";import $ from"./SysCommonTree-90bc100f.js";import{x as Ae}from"./index-66d20ba6.js";import{D as G}from"./Dialog-0a006d82.js";import{a as z}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./CommonTree-c4ed7838.js";import"./index-3801a970.js";function Me(){return[{title:"编码",dataIndex:"code",width:150,resizable:!0,sorter:!0,headAlign:"center",align:"left"},{title:"名称",dataIndex:"name",width:150,resizable:!0,sorter:!0,headAlign:"center",align:"left"},{title:"值",dataIndex:"value",width:300,resizable:!0,sorter:!0,headAlign:"center",align:"left"},{title:"备注",dataIndex:"remark",width:150,resizable:!0,sorter:!0,headAlign:"center",align:"left"}]}const Oe=l=>F.get({url:"/system/parameter/page",params:l},{}),J=l=>F.get({url:"/system/parameter/get",params:l},{}),Ue=l=>F.post({url:"/system/parameter/create",params:l},{}),Ee=l=>F.put({url:"/system/parameter/update",params:l},{}),Q=l=>l.id?Ee(l):Ue(l),Le=l=>F.delete({url:"/system/parameter/delete",params:l},{});k({spinning:!1});const Ke={class:"right-table-layout"},Pe={key:0,class:"dialog-mask"},Ve=ye({__name:"index",setup(l){const{createConfirm:d}=Ne(),t=k({}),A=c({typeId:"",fullName:"",id:"",name:"",kind:"",existChildNode:!1}),u=k({open:{type:c(!1),index:c(!1)},title:{type:c(""),index:c("")}}),h=c(!1),m=c(!1),r=c([]),f=Me(),b={id:"",name:"",code:"",value:"",remark:""},o=k(O({},b));c();const X=c(),M=c(),S=c([]),_=k({}),Y=()=>T(this,null,function*(){let e=yield Oe(t);return S.value=e.result,se(),r.value=[],S.value}),w=c(!1),ee={baseColProps:{span:8},labelWidth:120,autoAdvancedLine:1,showAdvancedButton:!1,schemas:[{label:"编码",field:"code",component:"Input"},{label:"名称",field:"name",component:"Input"}]};function E(){const e=oe();return e.length!=1?(p.error("请选择一行数据移动。"),!1):e[0]}function te(){E().id&&(w.value=!0)}function ae(e){t.typeFullId=null,e&&(_.folderId=e.id,_.nodeType=e.parentId,_.hasChildren=e.children.length>0)}function le(){const e=E();if(_.nodeType=="root"){p.error("根节点不能添加业务数据。");return}z(o,e),o.folderId=_.folderId,o.folderId=_.folderId,Q(o).then(()=>{w.value=!1,p.success("操作成功。"),C()})}const[ne,{reload:C,getPaginationRef:re,getSelectRows:oe,clearSelectedRowKeys:se,setSelectedRows:qe}]=Te({title:"系统参数",api:()=>T(this,null,function*(){const e=re();return t.pageNo=e.current,t.pageSize=e.pageSize,yield Y()}),columns:f,useSearchForm:!0,showIndexColumn:!1,formConfig:ee,showTableSetting:!0,pagination:{pageSize:20},canResize:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:r,onSelect:ie,onSelectAll:de},handleSearchInfoFn(e){return t.code=e.code,t.name=e.name,e},sortFn:e=>{e.order?(t.sortField=e.field,t.sortOrder=e.order.replace("end","")):(t.sortField=null,t.sortOrder=null)}});function ie(e,a){a?r.value=[...r.value,e.id]:r.value=r.value.filter(v=>v!==e.id)}function de(e,a,v){const g=v.map(x=>x.id);e?r.value=[...r.value,...g]:r.value=r.value.filter(x=>!g.includes(x))}function ue(e){return e.id?"修改":"添加"}function L(){K(),u.open.index=!1,w.value=!1}function K(){var e,a;(e=X.value)==null||e.resetFields(),(a=M.value)==null||a.resetFields()}let P=null;function ce(e){P=e,t.typeFullId=null,t.folderId=null,t.folderName=null,e&&(t.typeFullId=e.fullId,t.folderId=e.id,t.folderName=e.name,A.value={typeId:e.id,fullName:e.fullName,id:e.id,name:e.name,kind:e.kind,existChildNode:e.children.length>0},o.folderId=e.id),C()}function me(e){return S.value.total>0&&p.warn("该节点存在系统参数,不能删除。"),S.value.total==0}function fe(){const e=P;if(!e){p.error("请选择系统参数类型");return}if(e.parentId=="root"){p.error("根节点不能添加业务数据。");return}m.value=!1,u.open.index=!0,u.title.index="添加系统参数",z(o,O({},b))}function V(){return console.log("checkedKeys",r),r.value.length==0||r.value.length>1||!r.value[0]?(p.error("请选择一行数据"),!1):!0}function pe(){V()&&(J({id:r.value[0]}).then(e=>{z(o,e.result)}),m.value=!1,u.open.index=!0,u.title.index="修改系统参数")}function ve(e){J({id:e.id}).then(a=>{z(o,a.result)}),m.value=!0,u.open.index=!0,u.title.index="查看系统参数"}function xe(){V()&&d({title:"提示",iconType:"warning",content:"确定要删除选中记录？",onOk(){return T(this,null,function*(){Le("?id="+r.value[0]).then(()=>{p.success("已删除"),delete r.value[0],C()})})}})}function ge(){let e=M.value;e&&e.validateFields().then(()=>{h.value=!0;let a=ue(o);o.name=Ae.trim(o.name),Q(o).then(()=>{p.success(a+"成功"),K(),C(),u.open.index=!1,h.value=!1}).catch(()=>{h.value=!1})})}return we(()=>{De.getInstance().listen("integrated-knowledge",function(){setTimeout(()=>{C()},500)})}),(e,a)=>{const v=I("a-button"),g=I("a-input"),x=I("a-form-item"),R=I("a-col"),he=I("a-row"),q=I("a-form");return Z(),Ce(y(ze),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[n($,{treeClass:"left-tree-layout",title:"系统参数分类",treeType:"sys_parameter",toolbar:!0,search:!0,onSelect:ce,beforeDelete:me}),ke("div",Ke,[n(y(Re),{class:"fix-basic-table",onRegister:y(ne),searchInfo:t,onResizeColumn:a[0]||(a[0]=(i,H)=>H.width=i),onRowDbClick:a[1]||(a[1]=i=>ve(i))},{toolbar:s(()=>[n(v,{type:"primary",preIcon:y(U).ADD,onClick:fe},{default:s(()=>[N("添加")]),_:1},8,["preIcon"]),n(v,{type:"primary",preIcon:y(U).EDIT,onClick:pe},{default:s(()=>[N("修改")]),_:1},8,["preIcon"]),n(v,{class:"red-btn",preIcon:y(U).DELETE,onClick:xe},{default:s(()=>[N("删除")]),_:1},8,["preIcon"]),n(v,{type:"primary",onClick:te},{default:s(()=>[N("移动")]),_:1})]),bodyCell:s(({column:i,text:H,record:He})=>[]),_:1},8,["onRegister","searchInfo"])]),n(G,{visible:u.open.index,"onUpdate:visible":a[6]||(a[6]=i=>u.open.index=i),title:u.title.index,maskClosable:!1,onOk:ge,onCancel:L,height:400,width:800,showBtm:!m.value},{default:s(()=>[n(q,{ref_key:"modalIndexFormRef",ref:M,model:o,name:"userForm"},{default:s(()=>[n(he,{gutter:24},{default:s(()=>[D(n(R,{span:23},{default:s(()=>[n(x,{label:"编码",name:"code",labelCol:{span:5},rules:[{required:!0,max:64}]},{default:s(()=>[n(g,{value:o.code,"onUpdate:value":a[2]||(a[2]=i=>o.code=i),maxlength:64,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[B,!0]]),D(n(R,{span:23},{default:s(()=>[n(x,{label:"名称",name:"name",labelCol:{span:5},rules:[{required:!0,max:64}]},{default:s(()=>[n(g,{value:o.name,"onUpdate:value":a[3]||(a[3]=i=>o.name=i),maxlength:64,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[B,!0]]),D(n(R,{span:23},{default:s(()=>[n(x,{label:"参数值",name:"value",labelCol:{span:5},rules:[{required:!0,max:1e3}]},{default:s(()=>[n(g,{value:o.value,"onUpdate:value":a[4]||(a[4]=i=>o.value=i),maxlength:1e3,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[B,!0]]),D(n(R,{span:23},{default:s(()=>[n(x,{label:"备注",name:"remark",labelCol:{span:5},rules:[{required:!1,max:512}]},{default:s(()=>[n(g,{value:o.remark,"onUpdate:value":a[5]||(a[5]=i=>o.remark=i),maxlength:512,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[B,!0]])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","showBtm"]),n(G,{visible:w.value,"onUpdate:visible":a[7]||(a[7]=i=>w.value=i),title:"移动系统参数",maskClosable:!1,onOk:le,onCancel:L,toolbar:!1,search:!1,width:600},{default:s(()=>[n(q,{ref:"moveFromRef",name:"userForm",style:{width:"550px"}},{default:s(()=>[n($,{title:"系统参数分类",treeClass:"w-6/6",treeType:"sys_parameter",onSelect:ae})]),_:1},512)]),_:1},8,["visible"]),h.value?(Z(),Fe("div",Pe)):Se("",!0)]),_:1})}}});const It=Be(Ve,[["__scopeId","data-v-ecbaf125"]]);export{It as default};
//# sourceMappingURL=index-d0bc059d.js.map