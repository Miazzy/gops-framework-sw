var P=(c,i,b)=>new Promise((U,D)=>{var k=h=>{try{x(b.next(h))}catch(n){D(n)}},y=h=>{try{x(b.throw(h))}catch(n){D(n)}},x=h=>h.done?U(h.value):Promise.resolve(h.value).then(k,y);x((b=b.apply(c,i)).next())});import{d as ye,r as L,k as C,o as ge,al as S,Z as f,_ as R,f as l,aa as s,$ as he,u as I,E as _,F as G,ac as v,v as z,A as M,a9 as w}from"./vue-71d1abb3.js";import{B as W}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as $}from"./useTable-109483b3.js";import{a2 as o}from"./antd-15ac76ed.js";import{a5 as A,av as E,am as Z,_ as Ie}from"./index.js";import{D as J}from"./Dialog-0a006d82.js";import{P as _e}from"./index-20519caf.js";import Q from"./SysCommonTree-90bc100f.js";import{_ as be}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./index-316f6ffb.js";import{u as xe}from"./useRender-21ce56fb.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./CommonTree-c4ed7838.js";import"./index-3801a970.js";import"./index-66d20ba6.js";import"./assign-37f1c13d.js";const T={getDictType:c=>A.get({url:"/system/dict-type/page",params:c},{}),getDictData:c=>A.get({url:"/system/dict-type/getDictData?dictType="+c},{}),addDictType:c=>A.post({url:"/system/dict-type/create",params:c},{}),updateTypeStatusApi:c=>A.post({url:"/system/dict-type/updateStatus",params:c},{}),moveTypeApi:c=>A.post({url:"/system/dict-type/moveType",params:c},{})},we={1:"#338ed1",0:"#929292"},ke=[{title:"编码",dataIndex:"type",align:"center",width:120,sorter:!0,resizable:!0},{title:"名称",dataIndex:"name",align:"center",width:120,sorter:!0,resizable:!0},{title:"状态",dataIndex:"statusText",align:"center",width:120,sorter:!0,resizable:!0,customRender:({text:c,record:i})=>xe.renderTag(c,we[i.status])},{title:"备注",dataIndex:"remark",align:"left",width:120,sorter:!0,resizable:!0}],Ce=[{title:"值",dataIndex:"value",align:"center",width:120},{title:"显示名称",dataIndex:"label",align:"center",width:120},{title:"排序",dataIndex:"sort",align:"center",width:120},{title:"状态",dataIndex:"status",align:"center",width:120},{title:"颜色类型",dataIndex:"colorType",align:"left",width:120},{title:"CSS样式",dataIndex:"cssClass",align:"left",width:120},{title:"关联字典",dataIndex:"relationDict",align:"left",width:120},{title:"弹性值",dataIndex:"flexValue",align:"left",width:120},{title:"备注",dataIndex:"remark",align:"left",width:120}],De=[{label:"编码",field:"type",component:"Input",colProps:{span:8}},{label:"名称",field:"name",component:"Input",colProps:{span:8}},{label:"状态",field:"status",component:"DictSelectBox",componentProps:{type:"business_status"},colProps:{span:8}}],Se={class:"right-table-layout"},Te={key:0,style:{color:"#19be6b"}},Ue={key:1,style:{color:"red"}},Fe={key:0,class:"dialog-mask"},Re=ye({__name:"index",setup(c){const i=L({folderId:"",folderFullId:"",sortField:"createTime",sortOrder:"desc"}),b=C(),U=C(),D=C("sys_pos"),k=C(!1),y=C(!1),x=C(!1),h=C(),n=L({id:""});function X(e){e&&e.parentId!="root"?(b.value=e.id,i.folderFullId=e.fullId):(i.folderId="",b.value="",b.folderFullId=""),F()}const N=()=>{x.value=!1,D.value="sys_pos"},Y=()=>P(this,null,function*(){let e=i;const t=ue();return e.pageNo=t.current,e.pageSize=t.pageSize,(yield T.getDictType(e)).result}),ee=()=>P(this,null,function*(){let e=yield T.getDictData(n.type);return e.result.forEach(t=>{t.rowId=Z()}),e.result}),V=()=>{k.value=!1,H()},H=()=>{for(let e in n)delete n[e];K([])},te=e=>{U.value=e&&e.id||""},ae=()=>{let e=B();if(e.length!=1){o.info("请选择一行数据");return}if(!U.value){o.info("请选择分类");return}T.moveTypeApi({id:e[0],folderId:U.value}).then(t=>{t.code=="0"?(o.success("移动成功。"),x.value=!1,F()):o.success("移动失败。"),y.value=!1})};function le(){if(H(),!b.value)return o.info("请选择分类"),!1;n.folderId=b.value,h.value="添加字典",k.value=!0}function se(){let e=ie();if(e.length!==1){o.info("请选择一行数据");return}let t=e[0];n.id=t.id,n.type=t.type,n.name=t.name,n.folderId=t.folderId,n.remark=t.remark,h.value="修改字典",k.value=!0,ce()}function ne(){let e=B();if(e.length!=1){o.info("请选择一行数据");return}T.updateTypeStatusApi({id:e[0],status:1}).then(t=>{t.code=="0"?(o.success("启用成功。"),F()):o.success("启用失败。"),y.value=!1})}function re(){let e=B();if(e.length!=1){o.info("请选择一行数据");return}T.updateTypeStatusApi({id:e[0],status:0}).then(t=>{t.code=="0"?(o.success("禁用成功。"),F()):o.success("标用失败。"),y.value=!1})}function oe(){if(B().length!=1){o.info("请选择一行数据");return}D.value="sys_dict",x.value=!0}const[de,{reload:F,getSelectRows:ie,getSelectRowKeys:B,getPaginationRef:ue}]=$({title:"数据字典列表",api:Y,rowKey:"id",columns:ke,useSearchForm:!0,formConfig:{labelWidth:120,schemas:De,showAdvancedButton:!1},showTableSetting:!0,bordered:!0,pagination:!0,rowSelection:{type:"radio"},handleSearchInfoFn(e){return i.type=e.type,i.name=e.name,i.status=e.status,e},sortFn:e=>{e.order?(i.sortField=e.field.replace("Text",""),i.sortOrder=e.order.replace("end","")):(i.sortField="createTime",i.sortOrder="desc")}}),[pe,{reload:ce,getSelectRowKeys:fe,setTableData:K,getDataSource:O}]=$({title:"数据字典明细列表",api:ee,rowKey:"rowId",columns:Ce,useSearchForm:!1,showTableSetting:!1,bordered:!0,pagination:!1,rowSelection:{type:"checkbox"}});function me(){if(y.value=!0,n.dtl=O(),n.dtl&&n.dtl.length>0)for(let e=0;e<n.dtl.length;e++){let t=n.dtl[e];if(t.value===null||t.value===void 0||t.value===""){o.error("编码不能为空."),y.value=!1;return}if(t.label===null||t.label===void 0||t.label===""){o.error("名称不能为空."),y.value=!1;return}if(t.status===null||t.status===void 0||t.status===""){o.error("状态不能为空."),y.value=!1;return}}T.addDictType(n).then(e=>{e.code=="0"?(o.success("保存成功。"),F(),k.value=!1):o.success("保存失败"),y.value=!1}).finally(()=>{y.value=!1})}let j={addDtl:()=>{let e=O()||[];e.push({rowId:Z(),status:"1",sort:e.length+1}),K(e)},deleteDtl:()=>{let e=fe(),t={};e.forEach(m=>{t[m]="1"});let u=O(),p=[];for(let m=u.length-1;m>=0;m--){let g=u[m];(t[g.rowId]&&g.id!=null||!t[g.rowId])&&p.push(g)}p.sort((m,g)=>m.sort!=g.sort?m.sort-g.sort:m.id-g.id),K(p)}};return ge(()=>{}),(e,t)=>{const u=S("a-button"),p=S("a-input"),m=S("a-form-item"),g=S("a-col"),q=S("a-row"),ve=S("a-form");return f(),R(G,null,[l(I(_e),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[l(Q,{treeClass:"left-tree-layout",title:"系统字典分类",treeType:"sys_dict",toolbar:!0,search:!0,onSelect:X}),he("div",Se,[l(I(W),{onRegister:I(de),class:"fix-basic-table",searchInfo:i,onResizeColumn:t[0]||(t[0]=(a,r)=>r.width=a),resizeHeightOffset:32},{toolbar:s(()=>[l(u,{type:"primary",preIcon:I(E).ADD,onClick:le},{default:s(()=>[_("添加")]),_:1},8,["preIcon"]),l(u,{type:"primary",preIcon:I(E).EDIT,onClick:se},{default:s(()=>[_("修改")]),_:1},8,["preIcon"]),l(u,{class:"green-btn",preIcon:I(E).ENABLE,onClick:ne},{default:s(()=>[_("启用")]),_:1},8,["preIcon"]),l(u,{class:"grey-btn",preIcon:I(E).DISABLE,onClick:re},{default:s(()=>[_("禁用")]),_:1},8,["preIcon"]),l(u,{type:"primary",onClick:oe},{default:s(()=>[_("移动")]),_:1})]),bodyCell:s(({column:a,text:r})=>[a.key==="status"?(f(),R(G,{key:0},[r==1?(f(),R("span",Te,"启用")):v("",!0),r==0?(f(),R("span",Ue,"禁用")):v("",!0)],64)):v("",!0)]),_:1},8,["onRegister","searchInfo"])]),l(J,{visible:k.value,"onUpdate:visible":t[4]||(t[4]=a=>k.value=a),onCancel:V,width:800,title:h.value},{footer:s(()=>[l(u,{key:"submit",type:"primary",onClick:me},{default:s(()=>[_("确定")]),_:1}),l(u,{key:"back",onClick:V},{default:s(()=>[_("取消")]),_:1})]),default:s(()=>[l(ve,{model:n,name:"createDict",labelAlign:"center"},{default:s(()=>[l(q,{gutter:24},{default:s(()=>[z(l(g,{span:12},{default:s(()=>[l(m,{label:"编码",name:"type",labelCol:{span:4},wrapperCol:15,rules:[{required:!0,message:"编码不能为空"}]},{default:s(()=>[l(p,{value:n.type,"onUpdate:value":t[1]||(t[1]=a=>n.type=a)},null,8,["value"])]),_:1})]),_:1},512),[[M,!0]]),z(l(g,{span:12},{default:s(()=>[l(m,{label:"名称",name:"name",labelCol:{span:4},wrapperCol:15,rules:[{required:!0,message:"名称不能为空"}]},{default:s(()=>[l(p,{value:n.name,"onUpdate:value":t[2]||(t[2]=a=>n.name=a)},null,8,["value"])]),_:1})]),_:1},512),[[M,!0]])]),_:1}),l(q,{gutter:24},{default:s(()=>[z(l(g,{span:24},{default:s(()=>[l(m,{label:"备注",name:"remark",labelCol:{span:2},wrapperCol:15,rules:[{required:!1}]},{default:s(()=>[l(p,{value:n.remark,"onUpdate:value":t[3]||(t[3]=a=>n.remark=a)},null,8,["value"])]),_:1})]),_:1},512),[[M,!0]])]),_:1})]),_:1},8,["model"]),l(I(W),{onRegister:I(pe),class:"table-in-dialog",searchInfo:i,maxHeight:280},{bodyCell:s(({column:a,record:r})=>[a.dataIndex==="value"?(f(),w(p,{key:0,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,disabled:r.id!=null,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value","disabled"])):v("",!0),a.dataIndex==="label"?(f(),w(p,{key:1,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0),a.dataIndex==="sort"?(f(),w(p,{key:2,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0),a.dataIndex==="status"?(f(),w(be,{key:3,type:"business_status",value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0),a.dataIndex==="colorType"?(f(),w(p,{key:4,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0),a.dataIndex==="cssClass"?(f(),w(p,{key:5,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0),a.dataIndex==="relationDict"?(f(),w(p,{key:6,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0),a.dataIndex==="flexValue"?(f(),w(p,{key:7,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0),a.dataIndex==="remark"?(f(),w(p,{key:8,value:r[a.dataIndex],"onUpdate:value":d=>r[a.dataIndex]=d,maxlength:"32",style:{width:"100%"}},null,8,["value","onUpdate:value"])):v("",!0)]),toolbar:s(()=>[l(u,{type:"primary",onClick:I(j).addDtl},{default:s(()=>[_("添加")]),_:1},8,["onClick"]),l(u,{type:"primary",onClick:I(j).deleteDtl},{default:s(()=>[_("删除")]),_:1},8,["onClick"])]),_:1},8,["onRegister","searchInfo"])]),_:1},8,["visible","title"]),y.value?(f(),R("div",Fe)):v("",!0)]),_:1}),l(J,{visible:x.value,"onUpdate:visible":t[5]||(t[5]=a=>x.value=a),onCancel:N,width:400,height:500,style:{position:"relative","padding-top":"50px"}},{footer:s(()=>[l(u,{key:"submit",type:"primary",onClick:ae},{default:s(()=>[_("确定")]),_:1}),l(u,{key:"back",onClick:N},{default:s(()=>[_("取消")]),_:1})]),default:s(()=>[l(Q,{treeClass:"w-11/12",title:"系统参数分类",treeType:D.value,toolbar:!1,search:!1,onSelect:te},null,8,["treeType"])]),_:1},8,["visible"])],64)}}});const it=Ie(Re,[["__scopeId","data-v-63aecc2d"]]);export{it as default};
//# sourceMappingURL=index-9a3a7190.js.map
