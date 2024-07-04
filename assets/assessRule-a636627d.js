var U=(a,c,T)=>new Promise((z,f)=>{var P=l=>{try{_(T.next(l))}catch(g){f(g)}},I=l=>{try{_(T.throw(l))}catch(g){f(g)}},_=l=>l.done?z(l.value):Promise.resolve(l.value).then(P,I);_((T=T.apply(a,c)).next())});import{d as Le,k as u,r as V,o as Oe,al as C,Z as E,a9 as le,aa as s,f as n,$ as ze,u as v,E as k,ad as F,_ as $,F as Pe,ac as A,v as L,A as O}from"./vue-71d1abb3.js";import{a5 as b,b as qe,au as Me,av as R,at as d,aJ as re,_ as Ve}from"./index.js";import{B as $e}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as He}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{P as Ke}from"./index-20519caf.js";import{C as je}from"./CommonTree-c4ed7838.js";import{D as oe}from"./Dialog-0a006d82.js";import"./index-74ac3212.js";import{x as Y}from"./index-66d20ba6.js";import{a as J}from"./assign-37f1c13d.js";import{j as We}from"./Export2Excel-389a8fc9.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";function ie(){return[{title:"细则类型",dataIndex:"fullName",headAlign:"center",align:"left",width:200,sorter:!0,resizable:!0},{title:"指标名称",dataIndex:"name",headAlign:"center",align:"left",width:220,sorter:!0,resizable:!0},{title:"状态",dataIndex:"status",width:80,sorter:!0,resizable:!0},{title:"排序",dataIndex:"sort",width:100,sorter:!0,resizable:!0},{title:"备注",dataIndex:"remark",headAlign:"center",align:"left",width:300,resizable:!0}]}const Xe=a=>b.get({url:"/baseset/assessrule/type/getTree",params:a},{}),Ye=a=>b.get({url:"/baseset/assessrule/type/get",params:a},{}),Je=a=>b.post({url:"/baseset/assessrule/type/create",params:a},{}),Ze=a=>b.put({url:"/baseset/assessrule/type/update",params:a},{}),Ge=a=>a.id?Ze(a):Je(a),Qe=a=>b.delete({url:"/baseset/assessrule/type/delete",params:a},{}),et=a=>b.get({url:"/baseset/assessrule/index/list",params:a},{}),tt=a=>b.get({url:"/baseset/assessrule/index/get",params:a},{}),at=a=>b.post({url:"/baseset/assessrule/index/create",params:a},{}),nt=a=>b.put({url:"/baseset/assessrule/index/update",params:a},{}),st=a=>a.id?nt(a):at(a),ue=a=>b.put({url:"/baseset/assessrule/index/updateStatus",params:a},{}),lt=a=>b.put({url:"/baseset/assessrule/index/updateBatchSort",params:a},{}),rt=a=>b.delete({url:"/baseset/assessrule/index/delete",params:a},{}),ot={class:"right-table-layout"},it={key:0,style:{color:"#19be6b"}},ut={key:1,style:{color:"red"}},dt={key:0,class:"dialog-mask"},ct=Le({__name:"assessRule",setup(a){const{t:c}=qe(),{createConfirm:T}=Me(),z=u(),f=V({}),P=u([]),I=u(!1),_=u(!0),l=V({open:{type:u(!1),index:u(!1)},title:{type:u(""),index:u("")}}),g=u(!1),de=u(!1),ce=u([]),me=ie(),r=V({}),i=V({status:1,sort:1}),H=u(),K=u(),S=u([]),pe=()=>U(this,null,function*(){const e=yield et(f);return S.value=e.result,S.value}),fe={baseColProps:{span:8},labelWidth:120,autoAdvancedLine:1,schemas:[{label:"指标名称",field:"name",component:"Input"},{label:"状态",field:"status",component:"DictSelectBox",componentProps:{type:"enable_or_disable"}}]},[xe,{getSelectRows:ve,clearSelectedRowKeys:be,reload:N}]=He({title:"细则指标",api:pe,columns:me,useSearchForm:!0,formConfig:fe,showTableSetting:!0,pagination:!1,bordered:!0,rowKey:"id",rowSelection:{type:"radio"},handleSearchInfoFn(e){return f.name=e.name,f.status=e.status,e},sortFn:e=>{var m;const t=(m=e.order)==null?void 0:m.replace("end","");f.sortOrder=t,f.sortField=t?e.field:void 0},afterFetch:e=>{e.sort((t,m)=>{const h=t[f.sortField],x=m[f.sortField],p=f.sortOrder==="desc";return re(h)&&re(x)?p?x.localeCompare(h):h.localeCompare(x):p?x-h:h-x})}});function ge(e,t){t.width=e}function Z(){return U(this,null,function*(){const e=yield Xe({});P.value=e.result})}function j(e){return e?!0:(d.getInstance().error("请选择细则类型节点"),!1)}function he(e){if(ee(),!j(e))return;if(r.id="",r.type="",r.parentId="root",r.fullId="",r.parentName="",r.parentFullName="",e&&(r.parentId=e.id,r.type=e.type,r.parentName=e.name,r.fullId=e.fullId,r.parentFullName=e.fullName,e.fullId&&e.fullId.split("/").length>4)){d.getInstance().error(`最多允许${c("common.action.create")}4个层级`);return}const t=q(r);G(e,t)&&(l.open.type=!0,l.title.type=t+"细则类型")}function Ie(e){if(ee(),!j(e))return;const t=q({id:e.id});if(e.parentId==="root"){d.getInstance().error(`父节点，不能${t}`);return}if(e.children.length>0){d.getInstance().error(`该细则类型存在子节点，不能${t}`);return}G(e,t)&&(Ye({id:e.id}).then(m=>{J(r,m.result)}),l.open.type=!0,l.title.type=t+"细则类型")}function G(e,t){return e&&e.children.length==0&&e.fullId&&S.value&&S.value.length>0?(d.getInstance().error("该细则类型存在细则指标，不能"+t),!1):!0}function _e(e){if(j(e)){if(e.parentId==="root"){d.getInstance().error("父节点，不能删除");return}if(e.children.length>0)return d.getInstance().error("该细则类型存在子节点，不能删除"),!1;ae(function(){Qe("?id="+e.id).then(()=>{d.getInstance().success(c("common.delSuccessText")),W()})})}}function W(){Z()}function ye(){const e=H.value;e&&e.validateFields().then(()=>{g.value=!0,r.fullName=Te();const t=q(r);Ge(r).then(()=>{d.getInstance().success(t+"成功"),X(),W(),l.open.type=!1,g.value=!1}).catch(()=>{g.value=!1})})}function q(e){return e.id?c("common.action.edit"):c("common.action.create")}function Ce(){const e=K.value;e&&e.validateFields().then(()=>{g.value=!0;const t=q(i);i.name=Y.trim(i.name),st(i).then(()=>{d.getInstance().success(t+"成功"),X(),N(),l.open.index=!1,g.value=!1}).catch(()=>{g.value=!1})})}function Te(){const e=r.parentFullName;return e?e+"-"+Y.trim(r.name):Y.trim(r.name)}function Q(){I.value=!1,l.open.index=!1,l.open.type=!1,X()}const ee=()=>{for(let e in r)r[e]=""},te=()=>{for(let e in i)i[e]=""};function X(){var e,t;(e=H.value)==null||e.resetFields(),(t=K.value)==null||t.resetFields()}function we(e){f.typeFullId=null,e&&(f.typeFullId=e.fullId),N()}function ke(){te(),I.value=!1;const e=z.value.getSelectedTreeNode();if(!e){d.getInstance().error("请选择细则类型");return}if(e.children.length>0){d.getInstance().error("请选择细则类型的末级节点");return}i.id="",i.status=1,i.typeId=e.id,i.fullName=e.fullName,l.open.index=!0,l.title.index=`${c("common.action.create")}细则指标`}function M(){const e=ve();return e.length==0||ce.value.length>1?(d.getInstance().error("请选择一行数据"),!1):e[0].id}function Fe(){te(),I.value=!1;const e=M();e&&(tt({id:e}).then(t=>{J(i,t.result)}),l.open.index=!0,l.title.index="修改细则指标")}function Se(e){J(i,e),I.value=!0,l.open.index=!0,l.title.index="查看细则指标"}function Ne(){const e=M();e&&ae(function(){rt("?id="+e).then(()=>{d.getInstance().success(c("common.delSuccessText")),be(),N()})})}function ae(e){T({title:c("common.message.confirmTitle"),iconType:"warning",content:c("common.message.delMessage"),onOk(){return U(this,null,function*(){e()})}})}function Ee(){T({title:c("common.message.confirmTitle"),iconType:"warning",content:c("common.message.exportMessage"),onOk(){return U(this,null,function*(){const t=u({index:"序号"}),m=ie(),h=u([]),x=u([]);m.forEach(p=>{t.value[p.dataIndex]=p.title,x.value.push(p.dataIndex)}),S.value.forEach(function(p,w){let y="";p.status==1?y="启用":p.status==0&&(y="禁用");const D=u({index:w+1});x.value.forEach(B=>{D.value[B]=B==="status"?y:p[B]}),h.value.push(D.value)}),We({data:h.value,header:t.value,filename:"细则指标.xlsx"})})}})}function Re(){const e=M();if(!e)return;const t="?id="+e+"&status=1";ue(t).then(()=>{d.getInstance().success("已启用"),N()})}function De(){const e=M();if(!e)return;const t="?id="+e+"&status=0";ue(t).then(()=>{d.getInstance().success("已禁用"),N()})}function Be(){const e=u([]);S.value.forEach(t=>{if(!t.sort)throw d.getInstance().error("排序不能为空"),Error("排序不能为空");e.value.push({id:t.id,sort:t.sort})}),lt(e.value).then(()=>{d.getInstance().success("保存排序成功"),N()})}function Ue({rows:e}){_.value=e.length===0}return Oe(()=>{Z()}),(e,t)=>{const m=C("a-button"),h=C("a-input-number"),x=C("a-input"),p=C("a-form-item"),w=C("a-col"),y=C("a-row"),D=C("a-form"),B=C("a-textarea");return E(),le(v(Ke),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[n(je,{ref_key:"treeRef",ref:z,title:"细则类型",onSelect:we,value:P.value,class:"left-tree-layout",isShowOperationBtns:!0,fieldNames:{key:"id",title:"name"},onAdd:he,onEdit:Ie,onDelete:_e,onRefresh:W},null,8,["value"]),ze("div",ot,[n(v($e),{onRegister:v(xe),class:"fix-basic-table",searchInfo:f,onResizeColumn:ge,onRowDbClick:t[0]||(t[0]=o=>Se(o)),onSelectionChange:Ue},{toolbar:s(()=>[n(m,{type:"primary",preIcon:v(R).ADD,onClick:ke},{default:s(()=>[k(F(v(c)("common.action.create")),1)]),_:1},8,["preIcon"]),n(m,{disabled:_.value,type:"primary",preIcon:v(R).EDIT,onClick:Fe},{default:s(()=>[k(F(v(c)("common.action.edit")),1)]),_:1},8,["disabled","preIcon"]),n(m,{disabled:_.value,class:"red-btn",preIcon:v(R).DELETE,onClick:Ne},{default:s(()=>[k(F(v(c)("common.delText")),1)]),_:1},8,["disabled","preIcon"]),n(m,{disabled:_.value,class:"green-btn",preIcon:v(R).ENABLE,onClick:Re},{default:s(()=>[k(F("启用"))]),_:1},8,["disabled","preIcon"]),n(m,{disabled:_.value,class:"grey-btn",preIcon:v(R).DISABLE,onClick:De},{default:s(()=>[k(F("禁用"))]),_:1},8,["disabled","preIcon"]),n(m,{type:"primary",onClick:Be},{default:s(()=>[k(F("保存排序"))]),_:1}),n(m,{class:"yellow-btn",preIcon:v(R).EXPORT,onClick:Ee},{default:s(()=>[k(F(v(c)("common.action.export")),1)]),_:1},8,["preIcon"])]),bodyCell:s(({column:o,text:ne,record:se})=>[o.dataIndex==="status"?(E(),$(Pe,{key:0},[ne==1?(E(),$("span",it,"启用")):A("",!0),ne==0?(E(),$("span",ut,"禁用")):A("",!0)],64)):A("",!0),o.dataIndex==="sort"?(E(),le(h,{key:1,value:se[o.dataIndex],"onUpdate:value":Ae=>se[o.dataIndex]=Ae,class:"input-center",min:1,max:1e4,step:1,precision:0,status:"error"},null,8,["value","onUpdate:value"])):A("",!0)]),_:1},8,["onRegister","searchInfo"])]),n(oe,{visible:l.open.type,"onUpdate:visible":t[3]||(t[3]=o=>l.open.type=o),title:l.title.type,onOk:ye,onCancel:Q,width:460,height:260,smode:"normal",overflowY:"auto"},{default:s(()=>[n(D,{ref_key:"modalFormRef",ref:H,model:r,name:"userForm",autocomplete:"off"},{default:s(()=>[n(y,null,{default:s(()=>[L(n(w,{span:24},{default:s(()=>[n(p,{label:"所属类型",name:"parentName",labelCol:{class:"detail-label"}},{default:s(()=>[n(x,{value:r.parentName,"onUpdate:value":t[1]||(t[1]=o=>r.parentName=o),disabled:!0},null,8,["value"])]),_:1})]),_:1},512),[[O,!0]])]),_:1}),n(y,null,{default:s(()=>[L(n(w,{span:24},{default:s(()=>[n(p,{label:"细则类型",name:"name",labelCol:{class:"detail-label"},rules:[{required:!0,max:30}]},{default:s(()=>[n(x,{value:r.name,"onUpdate:value":t[2]||(t[2]=o=>r.name=o),maxlength:30,disabled:de.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[O,!0]])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"]),n(oe,{visible:l.open.index,"onUpdate:visible":t[7]||(t[7]=o=>l.open.index=o),title:l.title.index,"show-btm":!I.value,onOk:Ce,onCancel:Q,width:460,height:360,smode:"normal",overflowY:"auto"},{default:s(()=>[n(D,{ref_key:"modalIndexFormRef",ref:K,model:i,name:"userIndexForm",autocomplete:"off"},{default:s(()=>[n(y,null,{default:s(()=>[L(n(w,{span:24},{default:s(()=>[n(p,{label:"细则类型",name:"fullName",labelCol:{class:"detail-label"},rules:[{required:!1}]},{default:s(()=>[n(x,{value:i.fullName,"onUpdate:value":t[4]||(t[4]=o=>i.fullName=o),disabled:!0},null,8,["value"])]),_:1})]),_:1},512),[[O,!0]])]),_:1}),n(y,null,{default:s(()=>[L(n(w,{span:24},{default:s(()=>[n(p,{label:"指标名称",name:"name",labelCol:{class:"detail-label"},rules:[{required:!0,max:40}]},{default:s(()=>[n(x,{value:i.name,"onUpdate:value":t[5]||(t[5]=o=>i.name=o),maxlength:40,disabled:I.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[O,!0]])]),_:1}),n(y,null,{default:s(()=>[L(n(w,{span:24},{default:s(()=>[n(p,{label:"备注",name:"remark",labelCol:{class:"detail-label"},rules:[{required:!1,max:100}]},{default:s(()=>[n(B,{value:i.remark,"onUpdate:value":t[6]||(t[6]=o=>i.remark=o),maxlength:100,"auto-size":{minRows:2,maxRows:5},disabled:I.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[O,!0]])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title","show-btm"]),g.value?(E(),$("div",dt)):A("",!0)]),_:1})}}});const $t=Ve(ct,[["__scopeId","data-v-5d431637"]]);export{$t as default};
//# sourceMappingURL=assessRule-a636627d.js.map