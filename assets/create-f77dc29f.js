var v=(f,_,d)=>new Promise((b,w)=>{var t=p=>{try{c(d.next(p))}catch(y){w(y)}},S=p=>{try{c(d.throw(p))}catch(y){w(y)}},c=p=>p.done?b(p.value):Promise.resolve(p.value).then(t,S);c((d=d.apply(f,_)).next())});import{d as le,aD as ie,r as N,k as F,o as re,al as r,Z as C,a9 as x,aa as s,$ as I,f as n,u as m,E as de,ac as D,J as ue,aG as me,aH as pe}from"./vue-71d1abb3.js";import{a as T}from"./index.esm-c216ed00.js";import{b as ce,aB as fe,av as R,bP as be,aC as ge,a7 as he,_ as Ie}from"./index.js";import{U as _e}from"./UploadBox-636ecf02.js";import{B as M}from"./BasicTable-0434a334.js";import{T as we}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as W}from"./useTable-109483b3.js";import{a2 as h}from"./antd-15ac76ed.js";import{_ as z}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{B as ye}from"./BillTitle-d17ab3e4.js";import{W as ve}from"./WfApproveBox-a3448232.js";import{c as Ce,d as xe,f as ke,h as Ne,i as De}from"./index-09349b18.js";import{b as Te}from"./index-cfbcaec7.js";import{D as Se}from"./Dialog-0a006d82.js";import{P as Be}from"./index-20519caf.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./index-fda2d66c.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";import"./useContentViewHeight-7f845167.js";const qe=f=>(me("data-v-ad0a1573"),f=f(),pe(),f),Oe={class:"load"},Ee={class:"process-box"},Ue={class:"header-box"},Fe={class:"content"},Re=qe(()=>I("div",{class:"customer_require"},"出库数量",-1)),Me=le({name:"OutboundCreate",__name:"create",setup(f){const{t:_}=ce(),{query:d}=ie(),b=N({});b.subject="设备出库";const w=F(),t=N({spinning:!1,processInstanceId:"",id:"",warehouseId:"",warehouseName:"",status:"",warehouseType:"",outboundType:"",outboundDate:"",remark:"",stationOrganId:"",stationOrganName:"",stationId:"",stationName:"",bizFileId:""}),S=N({}),c=F(!1),p=[{key:"warehousingCode",title:"入库批次",dataIndex:"warehousingCode",align:"center",width:160},{key:"materialCode",title:"物料编码",dataIndex:"materialCode",align:"center",width:120},{key:"materialCategoryName",title:"物料类别",dataIndex:"materialCategoryName",align:"center",width:120},{key:"materialName",title:"物料名称",dataIndex:"materialName",align:"center",width:120},{key:"balanceQty",title:"结存数量",dataIndex:"balanceQty",align:"center",width:100},{key:"unitName",title:"单位",dataIndex:"unitName",align:"center",width:120}],y={baseColProps:{lg:6,md:8},labelWidth:90,schemas:[{label:"入库批次",field:"billCode",component:"Input"},{label:"物料编码",field:"materialCode",component:"Input"},{label:"物料名称",field:"materialName",component:"Input"}]},[A,{reload:P,getSelectRows:Q}]=W({api:Te,rowKey:"warehousingDtlId",columns:p,useSearchForm:!0,formConfig:y,bordered:!0,pagination:!0,maxHeight:343,rowSelection:{type:"checkbox"},beforeFetch(e){return e.warehouseId=t.warehouseId,e}}),V=()=>{const e=Q();if(e.length==0)return h.warning("请选择入库批次。"),!1;const a=k();for(let o=0;o<e.length;o++){if(a.filter(B=>B.warehousingDtlId==e[o].warehousingDtlId).length>0)return h.warning("入库批次：'"+e[o].warehousingCode+"'，物料：'"+e[o].materialName+"'已存在。"),!1;const i={materialId:e[o].materialId,materialCode:e[o].materialCode,materialName:e[o].materialName,materialWholeName:e[o].materialWholeName,materialCategoryId:e[o].materialCategoryId,materialCategoryName:e[o].materialCategoryName,warehousingId:e[o].warehousingId,warehousingCode:e[o].warehousingCode,warehousingDtlId:e[o].warehousingDtlId,remark:e[o].remark,unitId:e[o].unitId,unitName:e[o].unitName,balanceQty:e[o].balanceQty,editable:!0,key:`${Date.now()}`};a.push(i)}c.value=!1},$=()=>{c.value=!0,P()},j=e=>{if(e.id)ke(e.id).then(()=>{E(),h.success("操作成功。")});else{const a=k(),o=a.indexOf(e);o!==-1&&a.splice(o,1)}},H=[{title:"入库批次",dataIndex:"warehousingCode",width:160},{title:"物料编码",dataIndex:"materialCode",width:120},{title:"物料类别",dataIndex:"materialCategoryName",width:120},{title:"物料名称",dataIndex:"materialName",width:120},{title:"库存数量",dataIndex:"balanceQty",width:120},{slots:{title:"qty"},dataIndex:"qty",width:120},{title:"单位",dataIndex:"unitName",width:120},{title:"备注",dataIndex:"remark",width:200}],L=N({}),[Y,{reload:E,getDataSource:k}]=W({api:Ce,pagination:!1,columns:H,formConfig:{labelWidth:120},useSearchForm:!1,bordered:!0,actionColumn:{width:140,title:_("common.operate"),dataIndex:"action",fixed:"right"},immediate:!1,beforeFetch(e){return e.outboundId=t.id,T(e,L),e},showTableSetting:!1}),K=()=>v(this,null,function*(){be().then(e=>{t.bizFileId=e})}),G=()=>{U(0)},J=e=>e==null,Z=()=>{w.value.validate().then(()=>{const e=k();if(e.length==0)return h.warning("请添加出库明细。"),!1;if(e.filter(o=>J(o.qty)||o.qty==0).length>0)return h.warning("请填写出库数量。"),!1;U(1)}).catch(e=>{console.log("error",e)})},U=e=>v(this,null,function*(){t.spinning=!0;try{const a=ue(t);a.status=e,a.dtlList=k();const o=yield Ne(a);t.id=o.result,h.success(e==1?"提交成功。":"保存成功"),e==1&&setTimeout(()=>{ge(),he.getInstance().sendMsg("outbound-page",{})},100)}catch(a){console.log("error",a)}finally{t.spinning=!1}}),X=()=>v(this,null,function*(){De(t.id).then(e=>{T(t,e),t.processInstanceId||(t.processInstanceId=d.processInstanceId);let{billCode:a,fillinDate:o,personMemberName:u,deptName:i}=e;Object.assign(b,{billCode:a,fillinDate:o,personMemberName:u,deptName:i}),E()})});return re(()=>v(this,null,function*(){d.processInstanceId?(t.processInstanceId=d.processInstanceId,fe(d.processInstanceId).then(e=>{t.id=e.businessKey,X()})):xe().then(e=>{T(t,e),T(t,d),K();let{billCode:a,fillinDate:o,personMemberName:u,deptName:i}=e;Object.assign(b,{billCode:a,fillinDate:o,personMemberName:u,deptName:i}),t.status=0})})),(e,a)=>{const o=r("a-input"),u=r("a-form-item"),i=r("a-col"),B=r("a-date-picker"),ee=r("a-textarea"),te=r("a-row"),q=r("a-card"),ae=r("a-form"),oe=r("a-button"),ne=r("a-input-number"),se=r("a-spin");return C(),x(m(Be),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[I("div",Oe,[n(se,{spinning:t.spinning,tip:"Loading..."},{default:s(()=>[I("div",Ee,[I("div",Ue,[n(ye,{options:b},null,8,["options"]),n(ve,{onSave:G,onSubmit:Z,processInstanceId:t.processInstanceId,processStatus:t.status},null,8,["processInstanceId","processStatus"])]),I("div",Fe,[n(ae,{ref_key:"formRef",ref:w,model:t,labelAlign:"right",autocomplete:"off",scrollToFirstError:!0},{default:s(()=>[n(q,{title:"基本信息",bordered:!1},{default:s(()=>[n(te,{gutter:32},{default:s(()=>[n(i,{span:12},{default:s(()=>[n(u,{name:"warehouseName",label:"库房名称",labelCol:{span:4}},{default:s(()=>[n(o,{disabled:"",value:t.warehouseName,"onUpdate:value":a[0]||(a[0]=l=>t.warehouseName=l)},null,8,["value"])]),_:1})]),_:1}),n(i,{span:12},{default:s(()=>[n(u,{name:"warehouseType",label:"库房类型",labelCol:{span:4}},{default:s(()=>[n(z,{type:"warehouse_type",onChange:a[1]||(a[1]=l=>"()=> formState.warehouseType = value"),value:t.warehouseType,"onUpdate:value":a[2]||(a[2]=l=>t.warehouseType=l),style:{width:"100%"},disabled:""},null,8,["value"])]),_:1})]),_:1}),n(i,{span:12},{default:s(()=>[n(u,{name:"outboundType",label:"出库类型",labelCol:{span:4},rules:[{required:!0,message:"请选择出库类型"}]},{default:s(()=>[n(z,{type:"po_outbound_type",disabled:t.status!=0,onChange:a[3]||(a[3]=l=>"()=> formState.outboundType = value"),value:t.outboundType,"onUpdate:value":a[4]||(a[4]=l=>t.outboundType=l),style:{width:"100%"}},null,8,["disabled","value"])]),_:1})]),_:1}),n(i,{span:12},{default:s(()=>[n(u,{label:"出库日期",name:"outboundDate",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请选择出库日期"}]},{default:s(()=>[n(B,{value:t.outboundDate,"onUpdate:value":a[5]||(a[5]=l=>t.outboundDate=l),style:{"min-width":"100%"},"value-format":"YYYY-MM-DD",disabled:t.status!=0},null,8,["value","disabled"])]),_:1})]),_:1}),n(i,{span:24,class:"textarea-item"},{default:s(()=>[n(u,{label:"说明",name:"remark",labelAlign:"right",labelCol:{span:2}},{default:s(()=>[n(ee,{rows:5,value:t.remark,"onUpdate:value":a[6]||(a[6]=l=>t.remark=l),placeholder:"128字以内",maxlength:128,disabled:t.status!=0},null,8,["value","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),n(q,{bordered:!1},{default:s(()=>[n(m(M),{title:"出库明细",onRegister:m(Y)},{toolbar:s(()=>[t.status===0?(C(),x(oe,{key:0,type:"primary",preIcon:m(R).ADD,onClick:$},{default:s(()=>[de(" 添加 ")]),_:1},8,["preIcon"])):D("",!0)]),qty:s(()=>[Re]),bodyCell:s(({column:l,record:g})=>[l.dataIndex==="qty"?(C(),x(ne,{key:0,value:g[l.dataIndex],"onUpdate:value":O=>g[l.dataIndex]=O,min:0,max:g.balanceQty,disabled:t.status!=0,step:.1},null,8,["value","onUpdate:value","max","disabled"])):D("",!0),l.dataIndex==="remark"?(C(),x(o,{key:1,value:g[l.dataIndex],"onUpdate:value":O=>g[l.dataIndex]=O,disabled:t.status!=0,maxlength:256},null,8,["value","onUpdate:value","disabled"])):D("",!0),l.key==="action"?(C(),x(m(we),{key:2,actions:[{icon:m(R).DELETE,danger:!0,label:m(_)("common.delText"),ifShow:()=>t.status===0,popConfirm:{title:m(_)("common.message.delMessage"),placement:"left",confirm:j.bind(null,g)}}]},null,8,["actions"])):D("",!0)]),_:1},8,["onRegister"])]),_:1}),n(q,{title:"附件信息",bordered:!1},{default:s(()=>[n(_e,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"outbound",vmode:t.status==0?"box":"view",bizId:t.bizFileId},null,8,["vmode","bizId"])]),_:1})]),I("div",null,[n(Se,{visible:c.value,"onUpdate:visible":a[7]||(a[7]=l=>c.value=l),title:"选择物料",onOk:V,width:1e3,maskClosable:!1},{default:s(()=>[n(m(M),{onRegister:m(A),class:"table-in-dialog",searchInfo:S},null,8,["onRegister","searchInfo"])]),_:1},8,["visible"])])])]),_:1},8,["spinning"])])]),_:1})}}});const It=Ie(Me,[["__scopeId","data-v-ad0a1573"]]);export{It as default};
//# sourceMappingURL=create-f77dc29f.js.map