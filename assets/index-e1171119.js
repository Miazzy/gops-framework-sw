var v=(m,i,d)=>new Promise((S,l)=>{var x=p=>{try{T(d.next(p))}catch(C){l(C)}},R=p=>{try{T(d.throw(p))}catch(C){l(C)}},T=p=>p.done?S(p.value):Promise.resolve(p.value).then(x,R);T((d=d.apply(m,i)).next())});import{d as be,k as I,r as q,K as ge,o as we,al as y,Z as h,a9 as xe,aa as n,f as o,$ as z,E as f,ad as b,u,_ as D,F as P,v as _e,A as Ie,ac as U,J as he}from"./vue-71d1abb3.js";import{b6 as Te,a0 as J,b as Ce,au as De,a7 as Se,az as Ne,av as O,ax as ke,aA as ze,bX as A,_ as Oe}from"./index.js";import{B as H}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as Q}from"./useTable-109483b3.js";import{bB as Re,bC as Fe}from"./antd-15ac76ed.js";import{P as Ee}from"./index-20519caf.js";import{C as Me}from"./CommonTree-c4ed7838.js";import{_ as Y}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{e as L}from"./download-03e71dd5.js";import{a as qe,e as Pe,b as Ue}from"./index-c462aef4.js";import{e as Ke,g as Ve}from"./index-e3dac917.js";import{c as $e}from"./index-5d738211.js";import"./index-316f6ffb.js";import{u as Be}from"./useRender-21ce56fb.js";import{a as X}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";Te();const We=[{title:"盘点单号",dataIndex:"billCode",width:220,sorter:!0,resizable:!0},{title:"盘点类型",dataIndex:"inventoryType",width:220,sorter:!0,resizable:!0,customRender:({record:m})=>m.inventoryTypeText},{title:"所属公司",dataIndex:"stationOrganName",sorter:!0,resizable:!0,ifShow:J().isMultiOrganization},{title:"库房名称",dataIndex:"warehouseName",sorter:!0,resizable:!0},{title:"库房类型",dataIndex:"warehouseType",width:220,sorter:!0,resizable:!0,customRender:({record:m})=>m.warehouseTypeText},{title:"盘点日期",dataIndex:"inventoryDate",width:220,sorter:!0,resizable:!0},{title:"审批状态",dataIndex:"status",sorter:!0,resizable:!0,width:120,customRender:({text:m,record:i})=>Be.renderFlowStatus(m,i.statusText)}],Ae=[{title:"盘点单号",dataIndex:"billCode",width:160,sorter:!0,resizable:!0},{title:"盘点类型",dataIndex:"inventoryType",width:160,sorter:!0,resizable:!0,customRender:({record:m})=>m.inventoryTypeText},{title:"所属公司",dataIndex:"stationOrganName",width:160,sorter:!0,resizable:!0,ifShow:J().isMultiOrganization},{title:"库房名称",dataIndex:"warehouseName",width:160,sorter:!0,resizable:!0},{title:"库房类型",dataIndex:"warehouseType",width:160,sorter:!0,resizable:!0,customRender:({record:m})=>m.warehouseTypeText},{title:"盘点日期",dataIndex:"inventoryDate",width:160,sorter:!0,resizable:!0},{title:"物料编码",dataIndex:"materialCode",width:160,sorter:!0,resizable:!0},{title:"物料",dataIndex:"materialName",width:160,sorter:!0,resizable:!0},{title:"物料全称",dataIndex:"materialWholeName",width:160,sorter:!0,resizable:!0},{title:"物料类别",dataIndex:"materialCategoryName",width:160,sorter:!0,resizable:!0},{title:"结存数量",dataIndex:"qty",width:160,sorter:!0,resizable:!0},{title:"实盘数量",dataIndex:"inventoryQty",width:160,sorter:!0,resizable:!0},{title:"盘点结果",dataIndex:"inventoryResult",width:160,sorter:!0,resizable:!0},{title:"计量单位",dataIndex:"unitName",width:160,sorter:!0,resizable:!0},{title:"备注",dataIndex:"remark",width:160,sorter:!0,resizable:!0}],He={class:"right-table-layout tab-model"},Qe={class:"tab-button-div"},Ye={id:"inventory-tab-content",class:"tab-table-div tab-table-content"},Le={key:0,style:{color:"#19be6b"}},Xe={key:1,style:{color:"red"}},Je=be({name:"Inventory",__name:"index",setup(m){const{t:i}=Ce(),d=De(),S=I([]),l=I({}),x=I(!1);function R(e={}){if(l.value.stationOrganId=e.organId,l.value.stationOrganName=e.organName,l.value.stationId=e.powerStationId,l.value.stationName=e.powerStationName,l.value.warehouseId=null,l.value.warehouseName=null,l.value.warehouseType=null,e.nodeKindId=="Warehouse"){if(e.status==0)return;l.value.warehouseId=e.id,l.value.warehouseName=e.name,l.value.warehouseType=e.stationType}K()}function T(){return v(this,null,function*(){const e=yield $e();S.value=e})}const p=I("1"),C=I(),a=q({billCode:"",inventoryType:"",inventoryDate:[],materialCode:"",materialName:"",status:""}),K=()=>{N(),$()},Z=()=>{a.billCode="",a.inventoryType="",a.inventoryDate=[],a.materialCode="",a.materialName="",a.status="",N(),$()},j=()=>V().length==0,F=q({}),[G,{getForm:ee,reload:N,getSelectRows:V,clearSelectedRowKeys:te,redoHeight:ae}]=Q({api:Ue,target:"#inventory-tab-content",targetTabKey:"1",targetTabValue:p,columns:We,useSearchForm:!1,bordered:!0,rowSelection:{type:"radio"},beforeFetch(e){return e.stationOrganId=l.value.stationOrganId,e.stationId=l.value.stationId,e.warehouseId=l.value.warehouseId,e.billCode=a.billCode,e.inventoryType=a.inventoryType,a.inventoryDate!=null&&a.inventoryDate.length>0&&(e.startDate=a.inventoryDate[0],e.endDate=a.inventoryDate[1]),e.materialCode=a.materialCode,e.materialName=a.materialName,e.status=a.status,X(e,F),e},sortFn:e=>{var s;const t=(s=e.order)==null?void 0:s.replace("end","");F.sortOrder=t,F.sortField=t?A(e.field):void 0},showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0});function oe(){return v(this,null,function*(){if(l.value.warehouseType==null){d.warning("请选择库房。");return}if(yield qe(l.value.warehouseId)){d.error("当前有在途（审批中）入库单或出库单，请完成后再盘点。");return}const t=he(l.value);ke("/po/equipment/inventory/create",ie(),t)})}function ne(){const e=V();return e.length==0?(d.warning("请选择一行数据"),!1):e[0]}const le=()=>v(this,null,function*(){const e=ne();e&&(yield d.delConfirm(),yield ze(e.processInstanceId),d.success(i("common.delSuccess")),te(),N())}),re=I("设备盘点"),ie=e=>{const t=re.value;return!(e!=null&&e.id)||(e==null?void 0:e.status)===0?`${i("common.action.create")}${t}`:(e==null?void 0:e.status)===1||(e==null?void 0:e.status)===6?`审核${t}`:`查看${t}`};function se(){return v(this,null,function*(){d.createConfirm({title:i("common.exportTitle"),iconType:"warning",content:i("common.exportMessage"),onOk(){return v(this,null,function*(){let t=ee().getFieldsValue()||{};t.stationOrganId=l.value.stationOrganId,t.stationId=l.value.stationId,t.warehouseId=l.value.warehouseId,yield Pe(t).then(s=>{L(s==null?void 0:s.data,"盘点记录.xls")}),d.success(i("common.exportSuccessText"))})}})})}const E=q({}),[ue,{getForm:de,reload:$,redoHeight:me}]=Q({api:Ve,target:"#inventory-tab-content",targetTabKey:"2",targetTabValue:p,columns:Ae,useSearchForm:!1,bordered:!0,beforeFetch(e){return e.stationOrganId=l.value.stationOrganId,e.stationId=l.value.stationId,e.warehouseId=l.value.warehouseId,e.billCode=a.billCode,e.inventoryType=a.inventoryType,a.inventoryDate!=null&&a.inventoryDate.length>0&&(e.startDate=a.inventoryDate[0],e.endDate=a.inventoryDate[1]),e.materialCode=a.materialCode,e.materialName=a.materialName,e.status=a.status,X(e,E),e},sortFn:e=>{var s;const t=(s=e.order)==null?void 0:s.replace("end","");E.sortOrder=t,E.sortField=t?A(e.field):void 0},showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0});function pe(){return v(this,null,function*(){d.createConfirm({title:i("common.exportTitle"),iconType:"warning",content:i("common.exportMessage"),onOk(){return v(this,null,function*(){let t=de().getFieldsValue()||{};t.stationOrganId=l.value.stationOrganId,t.stationId=l.value.stationId,t.warehouseId=l.value.warehouseId,yield Ke(t).then(s=>{L(s==null?void 0:s.data,"盘点明细.xls")}),d.success(i("common.exportSuccessText"))})}})})}const M=()=>{ae(),me()},ye=()=>{x.value=!x.value,setTimeout(M,300)};return ge(()=>{M()}),we(()=>{T(),Se.getInstance().listen("inventory-page",N)}),(e,t)=>{const s=y("a-input"),g=y("a-form-item"),w=y("a-col"),ce=y("a-range-picker"),_=y("a-button"),B=y("a-row"),ve=y("a-form"),W=y("a-tab-pane"),fe=y("a-tabs");return h(),xe(u(Ee),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:n(()=>[o(Me,{title:"电站组织",onSelect:R,value:S.value,class:"left-tree-layout",toolbar:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),z("div",He,[z("div",Qe,[o(ve,{class:"search-form-box",ref_key:"formRef",ref:C,model:a,autocomplete:"off"},{default:n(()=>[o(B,{gutter:32},{default:n(()=>[o(w,{flex:"27.5%"},{default:n(()=>[o(g,{name:"billCode",label:"盘点单号",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(s,{value:a.billCode,"onUpdate:value":t[0]||(t[0]=r=>a.billCode=r),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(w,{flex:"27.5%"},{default:n(()=>[o(g,{name:"inventoryType",label:"盘点类型",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(Y,{type:"po_inventory_type",onChange:t[1]||(t[1]=r=>"()=> formState.inventoryType = value"),value:a.inventoryType,"onUpdate:value":t[2]||(t[2]=r=>a.inventoryType=r),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(w,{flex:"27.5%"},{default:n(()=>[o(g,{name:"inventoryDate",label:"盘点日期",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(ce,{value:a.inventoryDate,"onUpdate:value":t[3]||(t[3]=r=>a.inventoryDate=r),"value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(w,{flex:"17.5%"},{default:n(()=>[o(g,{style:{"text-align":"right"}},{default:n(()=>[o(_,{class:"tab-button",onClick:Z},{default:n(()=>[f(b(u(i)("common.resetText")),1)]),_:1}),o(_,{type:"primary",class:"tab-button",onClick:K},{default:n(()=>[f(b(u(i)("common.queryText")),1)]),_:1}),z("a",{style:{"font-size":"12px"},onClick:ye},[x.value?(h(),D(P,{key:0},[f(" 收起 "),o(u(Re))],64)):(h(),D(P,{key:1},[f(" 展开 "),o(u(Fe))],64))])]),_:1})]),_:1})]),_:1}),_e(o(B,{gutter:32},{default:n(()=>[o(w,{flex:"27.5%"},{default:n(()=>[o(g,{name:"materialCode",label:"物料编码",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(s,{value:a.materialCode,"onUpdate:value":t[4]||(t[4]=r=>a.materialCode=r),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(w,{flex:"27.5%"},{default:n(()=>[o(g,{name:"materialName",label:"物料",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(s,{value:a.materialName,"onUpdate:value":t[5]||(t[5]=r=>a.materialName=r),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(w,{flex:"27.5%"},{default:n(()=>[o(g,{name:"status",label:"状态",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(Y,{type:"bpm_process_instance_result",onChange:t[6]||(t[6]=r=>"()=> formState.status = value"),value:a.status,"onUpdate:value":t[7]||(t[7]=r=>a.status=r),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1})]),_:1},512),[[Ie,x.value]])]),_:1},8,["model"])]),z("div",Ye,[o(fe,{activeKey:p.value,"onUpdate:activeKey":t[11]||(t[11]=r=>p.value=r),onChange:M},{default:n(()=>[o(W,{key:"1",tab:"盘点记录"},{default:n(()=>[o(u(H),{onRegister:u(G),class:"fix-basic-table",onResizeColumn:t[8]||(t[8]=(r,k)=>k.width=r),onRowDbClick:t[9]||(t[9]=r=>Ne(r.id))},{toolbar:n(()=>[o(_,{type:"primary",preIcon:u(O).ADD,onClick:oe},{default:n(()=>[f(b(u(i)("common.action.create")),1)]),_:1},8,["preIcon"]),o(_,{class:"red-btn",disabled:j(),preIcon:u(O).DELETE,onClick:le},{default:n(()=>[f(b(u(i)("common.delText")),1)]),_:1},8,["disabled","preIcon"]),o(_,{class:"yellow-btn",preIcon:u(O).EXPORT,onClick:se},{default:n(()=>[f(b(u(i)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1}),o(W,{key:"2",tab:"盘点明细"},{default:n(()=>[o(u(H),{onRegister:u(ue),class:"fix-basic-table",onResizeColumn:t[10]||(t[10]=(r,k)=>k.width=r)},{toolbar:n(()=>[o(_,{class:"yellow-btn",preIcon:u(O).EXPORT,onClick:pe},{default:n(()=>[f(b(u(i)("common.exportTitle")),1)]),_:1},8,["preIcon"])]),bodyCell:n(({column:r,text:k,record:c})=>[r.key==="inventoryResult"?(h(),D(P,{key:0},[c.inventoryQty-c.qty>=0?(h(),D("span",Le,b(c.inventoryQty-c.qty),1)):U("",!0),c.inventoryQty-c.qty<0?(h(),D("span",Xe,b(c.inventoryQty-c.qty),1)):U("",!0)],64)):U("",!0)]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["activeKey"])])])]),_:1})}}});const kt=Oe(Je,[["__scopeId","data-v-d58ae166"]]);export{kt as default};
//# sourceMappingURL=index-e1171119.js.map