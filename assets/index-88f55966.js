var g=(m,s,d)=>new Promise((T,r)=>{var h=p=>{try{_(d.next(p))}catch(I){r(I)}},N=p=>{try{_(d.throw(p))}catch(I){r(I)}},_=p=>p.done?T(p.value):Promise.resolve(p.value).then(h,N);_((d=d.apply(m,s)).next())});import{d as we,k as x,r as R,K as fe,o as be,al as c,Z as E,a9 as he,aa as n,f as o,$ as D,E as w,ad as y,u,_ as q,F as $,v as ve,A as xe,J as ye}from"./vue-71d1abb3.js";import{b6 as _e,a0 as X,b as Ie,au as Te,a7 as Ce,az as De,av as S,ax as Se,aA as Ne,bX as B,_ as ze}from"./index.js";import{B as V}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as H}from"./useTable-109483b3.js";import{bB as Oe,bC as ke}from"./antd-15ac76ed.js";import{P as Fe}from"./index-20519caf.js";import{C as Re}from"./CommonTree-c4ed7838.js";import{_ as A}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{e as Ee,g as Me}from"./index-38c223d1.js";import{e as Pe,g as Ue}from"./index-cfbcaec7.js";import{c as We}from"./index-5d738211.js";import{g as Ke}from"./index-c462aef4.js";import{e as Y}from"./download-03e71dd5.js";import"./index-316f6ffb.js";import{u as qe}from"./useRender-21ce56fb.js";import{a as L}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";_e();const $e=[{title:"入库批次",dataIndex:"billCode",width:220,sorter:!0,resizable:!0},{title:"入库类型",dataIndex:"warehousingType",width:200,sorter:!0,resizable:!0,customRender:({record:m})=>m.warehousingTypeText},{title:"所属公司",dataIndex:"stationOrganName",sorter:!0,resizable:!0,ifShow:X().isMultiOrganization},{title:"库房名称",dataIndex:"warehouseName",sorter:!0,resizable:!0},{title:"库房类型",dataIndex:"warehouseType",width:200,sorter:!0,resizable:!0,customRender:({record:m})=>m.warehouseTypeText},{title:"入库日期",dataIndex:"warehousingDate",width:200,sorter:!0,resizable:!0},{title:"审批状态",dataIndex:"status",sorter:!0,resizable:!0,width:120,customRender:({text:m,record:s})=>qe.renderFlowStatus(m,s.statusText)}],Be=[{title:"入库批次",dataIndex:"billCode",width:160,sorter:!0,resizable:!0},{title:"入库类型",dataIndex:"warehousingType",width:160,sorter:!0,resizable:!0,customRender:({record:m})=>m.warehousingTypeText},{title:"所属公司",dataIndex:"stationOrganName",width:160,sorter:!0,resizable:!0,ifShow:X().isMultiOrganization},{title:"库房名称",dataIndex:"warehouseName",width:160,sorter:!0,resizable:!0},{title:"库房类型",dataIndex:"warehouseType",width:160,sorter:!0,resizable:!0,customRender:({record:m})=>m.warehouseTypeText},{title:"入库日期",dataIndex:"warehousingDate",width:160,sorter:!0,resizable:!0},{title:"物料编码",dataIndex:"materialCode",width:160,sorter:!0,resizable:!0},{title:"物料",dataIndex:"materialName",width:160,sorter:!0,resizable:!0},{title:"物料全称",dataIndex:"materialWholeName",width:160,sorter:!0,resizable:!0},{title:"物料类别",dataIndex:"materialCategoryName",width:160,sorter:!0,resizable:!0},{title:"入库数量",dataIndex:"qty",width:160,sorter:!0,resizable:!0},{title:"计量单位",dataIndex:"unitName",width:160,sorter:!0,resizable:!0},{title:"备注",dataIndex:"remark",width:160,sorter:!0,resizable:!0}],Ve={class:"right-table-layout tab-model"},He={class:"tab-button-div"},Ae={id:"warehousing-tab-content",class:"tab-table-div tab-table-content"},Ye=we({name:"Warehousing",__name:"index",setup(m){const{t:s}=Ie(),d=Te(),T=x([]),r=x({}),h=x(!1);function N(e={}){if(r.value.stationOrganId=e.organId,r.value.stationOrganName=e.organName,r.value.stationId=e.powerStationId,r.value.stationName=e.powerStationName,r.value.warehouseId=null,r.value.warehouseName=null,r.value.warehouseType=null,e.nodeKindId=="Warehouse"){if(e.status==0)return;r.value.warehouseId=e.id,r.value.warehouseName=e.name,r.value.warehouseType=e.stationType}M()}function _(){return g(this,null,function*(){const e=yield We();T.value=e})}const p=x("1"),I=x(),a=R({billCode:"",warehousingType:"",warehousingDate:[],materialCode:"",materialName:"",status:""}),M=()=>{C(),U()},J=()=>{a.billCode="",a.warehousingType="",a.warehousingDate=[],a.materialCode="",a.materialName="",a.status="",C(),U()},Z=()=>P().length==0,z=R({}),[j,{getForm:G,reload:C,getSelectRows:P,clearSelectedRowKeys:Q,redoHeight:ee}]=H({api:Me,target:"#warehousing-tab-content",targetTabKey:"1",targetTabValue:p,columns:$e,useSearchForm:!1,bordered:!0,rowSelection:{type:"radio"},beforeFetch(e){return e.stationOrganId=r.value.stationOrganId,e.stationId=r.value.stationId,e.warehouseId=r.value.warehouseId,e.billCode=a.billCode,e.warehousingType=a.warehousingType,a.warehousingDate!=null&&a.warehousingDate.length>0&&(e.startDate=a.warehousingDate[0],e.endDate=a.warehousingDate[1]),e.materialCode=a.materialCode,e.materialName=a.materialName,e.status=a.status,L(e,z),e},sortFn:e=>{var i;const t=(i=e.order)==null?void 0:i.replace("end","");z.sortOrder=t,z.sortField=t?B(e.field):void 0},showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0});function te(){return g(this,null,function*(){if(r.value.warehouseType==null){d.warning("请选择库房。");return}if(yield Ke(r.value.warehouseId)){d.error("当前有在途（审批中）盘点单，请完成后再入库。");return}const t=ye(r.value);Se("/po/equipment/warehousing/create",re(),t)})}function ae(){const e=P();return e.length==0?(d.warning("请选择一行数据"),!1):e[0]}const oe=()=>g(this,null,function*(){const e=ae();e&&(yield d.delConfirm(),yield Ne(e.processInstanceId),d.success(s("common.delSuccess")),Q(),C())}),ne=x("设备入库"),re=e=>{const t=ne.value;return!(e!=null&&e.id)||(e==null?void 0:e.status)===0?`${s("common.action.create")}${t}`:(e==null?void 0:e.status)===1||(e==null?void 0:e.status)===6?`审核${t}`:`查看${t}`};function le(){return g(this,null,function*(){d.createConfirm({title:s("common.exportTitle"),iconType:"warning",content:s("common.exportMessage"),onOk(){return g(this,null,function*(){let t=G().getFieldsValue()||{};t.stationOrganId=r.value.stationOrganId,t.stationId=r.value.stationId,t.warehouseId=r.value.warehouseId,yield Ee(t).then(i=>{Y(i==null?void 0:i.data,"入库记录.xls")}),d.success(s("common.exportSuccessText"))})}})})}const O=R({}),[se,{getForm:ie,reload:U,redoHeight:ue}]=H({api:Ue,target:"#warehousing-tab-content",targetTabKey:"2",targetTabValue:p,columns:Be,useSearchForm:!1,bordered:!0,beforeFetch(e){return e.stationOrganId=r.value.stationOrganId,e.stationId=r.value.stationId,e.warehouseId=r.value.warehouseId,e.billCode=a.billCode,e.warehousingType=a.warehousingType,a.warehousingDate!=null&&a.warehousingDate.length>0&&(e.startDate=a.warehousingDate[0],e.endDate=a.warehousingDate[1]),e.materialCode=a.materialCode,e.materialName=a.materialName,e.status=a.status,L(e,O),e},sortFn:e=>{var i;const t=(i=e.order)==null?void 0:i.replace("end","");O.sortOrder=t,O.sortField=t?B(e.field):void 0},showTableSetting:!1,tableSetting:{fullScreen:!0},showIndexColumn:!0});function de(){return g(this,null,function*(){d.createConfirm({title:s("common.exportTitle"),iconType:"warning",content:s("common.exportMessage"),onOk(){return g(this,null,function*(){let t=ie().getFieldsValue()||{};t.stationOrganId=r.value.stationOrganId,t.stationId=r.value.stationId,t.warehouseId=r.value.warehouseId,yield Pe(t).then(i=>{Y(i==null?void 0:i.data,"入库明细.xls")}),d.success(s("common.exportSuccessText"))})}})})}const k=()=>{ee(),ue()},me=()=>{h.value=!h.value,setTimeout(k,300)};return fe(()=>{k()}),be(()=>{_(),Ce.getInstance().listen("warehousing-page",C)}),(e,t)=>{const i=c("a-input"),f=c("a-form-item"),b=c("a-col"),pe=c("a-range-picker"),v=c("a-button"),W=c("a-row"),ce=c("a-form"),K=c("a-tab-pane"),ge=c("a-tabs");return E(),he(u(Fe),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:n(()=>[o(Re,{title:"电站组织",onSelect:N,value:T.value,class:"left-tree-layout",toolbar:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),D("div",Ve,[D("div",He,[o(ce,{class:"search-form-box",ref_key:"formRef",ref:I,model:a,autocomplete:"off"},{default:n(()=>[o(W,{gutter:32},{default:n(()=>[o(b,{flex:"27.5%"},{default:n(()=>[o(f,{name:"billCode",label:"入库批次",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(i,{value:a.billCode,"onUpdate:value":t[0]||(t[0]=l=>a.billCode=l),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(b,{flex:"27.5%"},{default:n(()=>[o(f,{name:"warehouseType",label:"入库类型",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(A,{type:"warehousing_type",onChange:t[1]||(t[1]=l=>"()=> formState.warehousingType = value"),value:a.warehousingType,"onUpdate:value":t[2]||(t[2]=l=>a.warehousingType=l),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(b,{flex:"27.5%"},{default:n(()=>[o(f,{name:"warehousingDate",label:"入库日期",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(pe,{value:a.warehousingDate,"onUpdate:value":t[3]||(t[3]=l=>a.warehousingDate=l),"value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(b,{flex:"17.5%"},{default:n(()=>[o(f,{style:{"text-align":"right"}},{default:n(()=>[o(v,{class:"tab-button",onClick:J},{default:n(()=>[w(y(u(s)("common.resetText")),1)]),_:1}),o(v,{type:"primary",class:"tab-button",onClick:M},{default:n(()=>[w(y(u(s)("common.queryText")),1)]),_:1}),D("a",{style:{"font-size":"12px"},onClick:me},[h.value?(E(),q($,{key:0},[w(" 收起 "),o(u(Oe))],64)):(E(),q($,{key:1},[w(" 展开 "),o(u(ke))],64))])]),_:1})]),_:1})]),_:1}),ve(o(W,{gutter:32},{default:n(()=>[o(b,{flex:"27.5%"},{default:n(()=>[o(f,{name:"materialCode",label:"物料编码",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(i,{value:a.materialCode,"onUpdate:value":t[4]||(t[4]=l=>a.materialCode=l),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(b,{flex:"27.5%"},{default:n(()=>[o(f,{name:"materialName",label:"物料",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(i,{value:a.materialName,"onUpdate:value":t[5]||(t[5]=l=>a.materialName=l),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),o(b,{flex:"27.5%"},{default:n(()=>[o(f,{name:"status",label:"状态",labelCol:{style:{width:"120px"}},colon:!1},{default:n(()=>[o(A,{type:"bpm_process_instance_result",onChange:t[6]||(t[6]=l=>"()=> formState.status = value"),value:a.status,"onUpdate:value":t[7]||(t[7]=l=>a.status=l),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1})]),_:1},512),[[xe,h.value]])]),_:1},8,["model"])]),D("div",Ae,[o(ge,{activeKey:p.value,"onUpdate:activeKey":t[11]||(t[11]=l=>p.value=l),onChange:k},{default:n(()=>[o(K,{key:"1",tab:"入库记录"},{default:n(()=>[o(u(V),{onRegister:u(j),class:"fix-basic-table",onResizeColumn:t[8]||(t[8]=(l,F)=>F.width=l),onRowDbClick:t[9]||(t[9]=l=>De(l.id))},{toolbar:n(()=>[o(v,{type:"primary",preIcon:u(S).ADD,onClick:te},{default:n(()=>[w(y(u(s)("common.action.create")),1)]),_:1},8,["preIcon"]),o(v,{class:"red-btn",disabled:Z(),preIcon:u(S).DELETE,onClick:oe},{default:n(()=>[w(y(u(s)("common.delText")),1)]),_:1},8,["disabled","preIcon"]),o(v,{class:"yellow-btn",preIcon:u(S).EXPORT,onClick:le},{default:n(()=>[w(y(u(s)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1}),o(K,{key:"2",tab:"入库明细"},{default:n(()=>[o(u(V),{onRegister:u(se),class:"fix-basic-table",onResizeColumn:t[10]||(t[10]=(l,F)=>F.width=l)},{toolbar:n(()=>[o(v,{class:"yellow-btn",preIcon:u(S).EXPORT,onClick:de},{default:n(()=>[w(y(u(s)("common.exportTitle")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["activeKey"])])])]),_:1})}}});const Dt=ze(Ye,[["__scopeId","data-v-7d32cc32"]]);export{Dt as default};
//# sourceMappingURL=index-88f55966.js.map
