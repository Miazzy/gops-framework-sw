var Y=(u,h,m)=>new Promise((_,b)=>{var g=i=>{try{l(m.next(i))}catch(e){b(e)}},v=i=>{try{l(m.throw(i))}catch(e){b(e)}},l=i=>i.done?_(i.value):Promise.resolve(i.value).then(g,v);l((m=m.apply(u,h)).next())});import{P as k}from"./index-20519caf.js";import{a5 as M,a0 as F,aj as R,aB as O,aD as z,at as A,aC as j,a7 as H,_ as W}from"./index.js";import{B as V}from"./BillTitle-d17ab3e4.js";import{W as E}from"./WfApproveBox-a3448232.js";import{U as J}from"./UploadBox-636ecf02.js";import{d as K,J as L,k as I,e as Z,r as P,o as $,al as p,Z as G,a9 as Q,aa as s,$ as y,f as a,u as X}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./antd-15ac76ed.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./BasicTable-0434a334.js";import"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-f4fc48e6.js";import"./index-316f6ffb.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./uniqBy-92d3bc7f.js";import"./index-085d06c7.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useTable-109483b3.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";function ee(u){return M.get({url:"/po/inspection-pause/get",params:u})}function te(u){return M.post({url:"/po/inspection-pause/create",data:u})}function ae(u){return M.get({url:"/po/inspection-plan/selectInspectionAreaType",params:u})}const se={class:"load"},ne={class:"process-box"},oe={class:"header-box"},le={class:"content"},ie=K({__name:"create",setup(u){const h=F(),m=L(h.getUserInfo),_=I(!0),b=I(),g=I([]),v=I("");let{params:l}=R();const i=Z(()=>e.status!=0||e.status==0&&e.personMemberId!=""&&e.personMemberId.substring(0,32)!=m.userId),e=P({id:l.id||"",status:0,stationName:l.stationName||"",stationId:l.stationId||"",stationOrganName:l.stationOrganName||"",stationOrganId:l.stationOrganId||"",powerStationType:l.stationType,personMemberId:"",spinning:!1}),N=P({subject:"巡检暂停"}),x=()=>{e.spinning=!0,te(e).then(o=>{o.result!=""?(e.id=o.result,A.getInstance().success(e.status==1?"提交成功":"保存成功."),e.status==1&&setTimeout(()=>{j(),H.getInstance().sendMsg("inspection-pause",{})},100)):(e.status=0,A.getInstance().error("保存失败.")),e.spinning=!1}).catch(o=>{_.value=!1,e.status=0,e.spinning=!1,console.log(o)})},D={handleAgree:o=>{console.log("同意",o)},handleSave:o=>{console.log("保存",o),_.value=!1,e.status=0,x()},handleSubmit:o=>{console.log("提交",o),_.value=!0,e.status=1;const t=b.value;t&&t.validateFields().then(()=>{x()}).catch(f=>{console.log(f),e.status=0})}},U=(o,t)=>{e.planId=t.planId,e.planStationId=t.planStationId,e.inspectionPeriod=t.inspectionPeriodText+t.acount+"次"};return $(()=>Y(this,null,function*(){if(v.value=l.processInstanceId,!e.id&&l.processInstanceId){let n=null;try{n=yield O(v.value)}catch(T){}e.id=n==null?void 0:n.businessKey}let t=(yield ee({id:e.id})).result;if(e.id){for(let n in t)e[n]=t[n];e.status=Number(e.status)}else e.bizFileId=z(),e.billCode=t.billCode,e.personMemberName=t.personMemberName,e.deptName=t.deptName,e.fillinDate=t.fillinDate;let{billCode:f,fillinDate:d,personMemberName:c,deptName:S}=t;Object.assign(N,{billCode:f,fillinDate:d,personMemberName:c,deptName:S}),e.deptName=t.deptName,(yield ae({stationId:e.stationId})).result.forEach(n=>{g.value.push({value:n.inspectionAreaType,label:n.inspectionAreaTypeText,planName:n.subject,planId:n.planId,planStationId:n.planStationId,inspectionPeriodText:n.inspectionPeriodText,acount:n.acount})})})),(o,t)=>{const f=p("a-input"),d=p("a-form-item"),c=p("a-col"),S=p("a-select"),w=p("a-date-picker"),n=p("a-textarea"),T=p("a-row"),C=p("a-card"),q=p("a-form"),B=p("a-spin");return G(),Q(X(k),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[y("div",se,[a(B,{spinning:e.spinning,tip:"Loading..."},{default:s(()=>[y("div",ne,[y("div",oe,[a(V,{options:N},null,8,["options"]),a(E,{processInstanceId:v.value,onAgree:D.handleAgree,onSave:D.handleSave,onSubmit:D.handleSubmit,processStatus:e.status,listenMessage:"inspection-pause"},null,8,["processInstanceId","onAgree","onSave","onSubmit","processStatus"])]),y("div",le,[a(q,{model:e,name:"basic",ref_key:"formRef",ref:b,autocomplete:"off",onFinish:x},{default:s(()=>[a(C,{title:"基本信息",bordered:!1},{default:s(()=>[a(T,{gutter:32},{default:s(()=>[a(c,{span:12},{default:s(()=>[a(d,{label:"电站名称",name:"stationName",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"电站名称不能为空。"}]},{default:s(()=>[a(f,{disabled:!0,value:e.stationName,"onUpdate:value":t[0]||(t[0]=r=>e.stationName=r)},null,8,["value"])]),_:1})]),_:1}),a(c,{span:12},{default:s(()=>[a(d,{label:"巡检区域",name:"inspectionAreaType",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"巡检区域不能为空。"}]},{default:s(()=>[a(S,{value:e.inspectionAreaType,"onUpdate:value":t[1]||(t[1]=r=>e.inspectionAreaType=r),options:g.value,disabled:i.value,onChange:U},null,8,["value","options","disabled"])]),_:1})]),_:1}),a(c,{span:12},{default:s(()=>[a(d,{label:"巡检频率",name:"inspectionPeriod",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"巡检频率不能为空"}]},{default:s(()=>[a(f,{value:e.inspectionPeriod,"onUpdate:value":t[2]||(t[2]=r=>e.inspectionPeriod=r),disabled:!0},null,8,["value"])]),_:1})]),_:1}),a(c,{span:12},{default:s(()=>[a(d,{label:"暂停开始日期",name:"startDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"暂停开始日期不能为空。"}]},{default:s(()=>[a(w,{disabled:i.value,value:e.startDate,"onUpdate:value":t[3]||(t[3]=r=>e.startDate=r),format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",style:{width:"100%"}},null,8,["disabled","value"])]),_:1})]),_:1}),a(c,{span:12},{default:s(()=>[a(d,{label:"暂停结束日期",name:"endDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"暂停结束日期不能为空。"}]},{default:s(()=>[a(w,{disabled:i.value,value:e.endDate,"onUpdate:value":t[4]||(t[4]=r=>e.endDate=r),format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",style:{width:"100%"}},null,8,["disabled","value"])]),_:1})]),_:1}),a(c,{span:24},{default:s(()=>[a(d,{label:"暂停原因",name:"pauseReason",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"暂停原因不能为空"}]},{default:s(()=>[a(n,{value:e.pauseReason,"onUpdate:value":t[5]||(t[5]=r=>e.pauseReason=r),row:"3",maxlength:"1000",disabled:i.value},null,8,["value","disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),a(C,{title:"附件上传",bordered:!1},{default:s(()=>[a(J,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"inspectionpause",vmode:e.status==0?"box":"view",bizId:e.bizFileId},null,8,["vmode","bizId"])]),_:1})]),_:1},8,["model"])])])]),_:1},8,["spinning"])])]),_:1})}}});const ze=W(ie,[["__scopeId","data-v-21699956"]]);export{ze as default};
//# sourceMappingURL=create-85caf36c.js.map
