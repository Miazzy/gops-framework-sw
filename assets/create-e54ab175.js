var S=(m,h,c)=>new Promise((d,g)=>{var N=b=>{try{v(c.next(b))}catch(i){g(i)}},_=b=>{try{v(c.throw(b))}catch(i){g(i)}},v=b=>b.done?d(b.value):Promise.resolve(b.value).then(N,_);v((c=c.apply(m,h)).next())});import{P as R}from"./index-20519caf.js";import{a5 as C,a0 as $,aj as J,aD as K,ax as Z,at as T,a7 as A}from"./index.js";import{_ as M}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{B as Q}from"./BillTitle-d17ab3e4.js";import{K as X}from"./antd-15ac76ed.js";import{S as ee}from"./SearchBox-22bb02d6.js";import{U as ae}from"./UploadBox-636ecf02.js";import{d as te,J as le,e as se,k as I,r as F,o as ne,al as p,Z as Y,a9 as oe,aa as l,$ as w,f as t,u as q,_ as re,E as D,ac as de,ad as ue}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./Dialog-0a006d82.js";const ie="/po/equipment/page";function me(m){return C.get({url:"/po/fault-manage/get",params:m})}function pe(m){return C.post({url:"/po/fault-manage/create",data:m})}function fe(m){return C.post({url:"/baseset/common/list-stationPeriod",data:m})}function be(m){return C.get({url:"/po/technical-supervision/dtl/getPeriodList?technicalSupervisionDtlId="+m.technicalSupervisionId})}function ce(m){return C.post({url:"/baseset/common/list-stationPerson?stationId="+m.stationId})}const ve={class:"load"},ye={class:"process-box"},ge={class:"header-box"},Ne={key:0,class:"header-right"},_e={class:"content"},Te=te({__name:"create",setup(m){const h=$(),c=le(h.getUserInfo),d=se(()=>i.readonly==="1"||e.workBillId!=null&&e.workBillId!=""||e.sourceId!=null&&e.sourceId!=""||e.personMemberId!=""&&e.personMemberId.substring(0,32)!=c.userId),g=I(),N=I([]),_=I([]),v=I(""),b=I([{title:"设备名称",dataIndex:"name",width:120},{title:"物料",dataIndex:"materialName",width:120},{title:"生产厂家",dataIndex:"factoryName",width:120},{title:"区域",dataIndex:"areaName",width:120}]);let{params:i}=J();const e=F({id:i.id||"",status:0,stationOrganId:i.stationOrganId||"",stationOrganName:i.stationOrganName||"",stationId:i.stationId||"",stationName:i.stationName||"",periodId:"",periodName:"",sourceParentId:"",sourceId:"",sourceType:"",sourceBillCode:"",billCode:"",fillinDate:"",personMemberId:"",faultType:"",findDate:"",findById:"",findByName:"",isWarrantyPeriod:"",faultGrade:"",checkContent:"",spinning:!1,reason:"",measure:"",equipmentId:"",equipmentName:"",materialName:"",equipmentCode:"",supplierName:"",factoryName:"",areaName:"",usedDate:"",productionNumber:"",bizFileId:""}),W=()=>d.value||!e.periodId?!1:{periodId:e.periodId,status:1},H=()=>{if(!(!e.sourceId||!e.sourceParentId))switch(e.sourceType){case"technicalSupervision":Z("/po/supervision/create","",{id:e.sourceParentId});break}},P=()=>{const u=g.value;u&&(e.spinning=!0,u.validateFields().then(()=>{pe(e).then(a=>{a.result!=""?(e.id=a.result,T.getInstance().success(e.status==1?"提交成功":"保存成功"),setTimeout(()=>{A.getInstance().sendMsg("po-fault-manage",{})},100)):T.getInstance().error("保存失败."),e.spinning=!1}).catch(a=>{e.spinning=!1,console.log(a)})}).catch(a=>{console.log(a),e.spinning=!1}))},U=F({subject:"缺陷管理"}),z=(u,a)=>{e.periodId=u,e.periodName=a.label,e.faultType="",e.findDate="",e.findById="",e.findByName="",e.isWarrantyPeriod="",e.faultGrade="",e.checkContent="",e.reason="",e.measure="",e.equipmentId="",e.equipmentName="",e.materialName="",e.equipmentCode="",e.supplierName="",e.factoryName="",e.areaName="",e.usedDate="",e.productionNumber=""},E=(u,a)=>{let r=a.record;e.equipmentId=r.key,e.equipmentName=r.name,e.materialName=r.materialWholeName,e.equipmentCode=r.code,e.supplierName=r.supplierName,e.factoryName=r.factoryName,e.areaName=r.areaName,e.usedDate=r.usedDate,e.productionNumber=r.productionNumber,e.isWarrantyPeriod=r.warrantyDate>=X().format("YYYY-MM-DD")?"1":"0"};return ne(()=>S(this,null,function*(){me({id:e.id}).then(u=>{let a=u.result;if(e.id){for(let y in a)e[y]=a[y];e.isWarrantyPeriod=e.isWarrantyPeriod+"",i.status&&(e.status=Number(i.status)),e.status=Number(e.status)}else e.billCode=a.billCode,e.personMemberName=a.personMemberName,e.deptName=a.deptName,e.fillinDate=a.fillinDate,e.bizFileId=K();let{billCode:r,fillinDate:f,personMemberName:n,deptName:o}=a;Object.assign(U,{billCode:r,fillinDate:f,personMemberName:n,deptName:o})}).then(()=>{e.sourceType!=""?(e.sourceType=="technicalSupervision"&&be({technicalSupervisionId:e.sourceId}).then(u=>{u.result.forEach(a=>{N.value.push({value:a.periodId,label:a.periodName})})}),_.value.push({value:e.findById,label:e.findByName})):(fe({powerStationId:e.stationId}).then(u=>{u.result.forEach(a=>{N.value.push({value:a.powerStationPeriodId,label:a.powerStationPeriodName})})}),ce({stationId:e.stationId}).then(u=>{let a={};u.result.forEach(r=>{a[r.userId]=r.name});for(let r in a)_.value.push({label:a[r],value:r})}))})})),(u,a)=>{const r=p("a-button"),f=p("a-input"),n=p("a-form-item"),o=p("a-col"),y=p("a-select"),O=p("a-date-picker"),B=p("a-select-option"),x=p("a-textarea"),G=p("a-row"),k=p("a-card"),j=p("a-form"),L=p("a-spin");return Y(),oe(q(R),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:l(()=>[w("div",ve,[t(L,{spinning:e.spinning,tip:"Loading..."},{default:l(()=>[w("div",ye,[w("div",ge,[t(Q,{options:U},null,8,["options"]),q(i).readonly!=="1"?(Y(),re("div",Ne,[t(r,{type:"primary","html-type":"submit",onClick:P},{default:l(()=>[D("保存")]),_:1})])):de("",!0)]),w("div",_e,[t(j,{model:e,name:"basic",ref_key:"formRef",ref:g,autocomplete:"off",onFinish:P},{default:l(()=>[t(k,{title:"基本信息",bordered:!1},{default:l(()=>[t(G,{gutter:32},{default:l(()=>[t(o,{span:12},{default:l(()=>[t(n,{label:"电站名称",name:"stationName",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:l(()=>[t(f,{value:e.stationName,"onUpdate:value":a[0]||(a[0]=s=>e.stationName=s),disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"期数",name:"periodId",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"期数不能为空。"}]},{default:l(()=>[t(y,{value:e.periodId,"onUpdate:value":a[1]||(a[1]=s=>e.periodId=s),allowClear:"",options:N.value,disabled:d.value,onChange:z},null,8,["value","options","disabled"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"缺陷类型",name:"faultType",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"缺陷类型不能为空。"}]},{default:l(()=>[t(M,{type:"fault_type",disabled:d.value,value:e.faultType,"onUpdate:value":a[2]||(a[2]=s=>e.faultType=s),style:{width:"100%"}},null,8,["disabled","value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"来源任务",name:"sourceBillCode",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:l(()=>[w("a",{onClick:H},ue(e.sourceBillCode),1)]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"发现时间",name:"findDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"发现时间"}]},{default:l(()=>[t(O,{value:e.findDate,"onUpdate:value":a[3]||(a[3]=s=>e.findDate=s),valueFormat:"YYYY-MM-DD HH:mm",format:"YYYY-MM-DD HH:mm",style:{width:"100%"},disabled:d.value},null,8,["value","disabled"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"发现人",name:"findById",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"发现人"}]},{default:l(()=>[t(y,{value:e.findById,"onUpdate:value":a[4]||(a[4]=s=>e.findById=s),allowClear:"",options:_.value,disabled:d.value,onChange:a[5]||(a[5]=(s,V)=>{e.findById=s,e.findByName=V.label})},null,8,["value","options","disabled"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"物料类别",name:"materialName",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"物料类别"}]},{default:l(()=>[t(f,{value:e.materialName,"onUpdate:value":a[6]||(a[6]=s=>e.materialName=s),row:"3",disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"设备名称",name:"equipmentName",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"设备名称"}]},{default:l(()=>[t(ee,{searchText:v.value,"onUpdate:searchText":a[7]||(a[7]=s=>v.value=s),value:e.equipmentName,"onUpdate:value":a[8]||(a[8]=s=>e.equipmentName=s),columns:b.value,disabled:d.value,api:q(ie),placeholder:"请先选择期数",apiParamFunc:W,pagination:!0,style:{width:"100%"},vfield:"name",onChange:E},null,8,["searchText","value","columns","disabled","api"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"设备编码",name:"equipmentCode",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"设备编码"}]},{default:l(()=>[t(f,{value:e.equipmentCode,"onUpdate:value":a[9]||(a[9]=s=>e.equipmentCode=s),row:"3",disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"供应商",name:"supplierName",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"供应商"}]},{default:l(()=>[t(f,{value:e.supplierName,"onUpdate:value":a[10]||(a[10]=s=>e.supplierName=s),row:"3",disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"生产厂家",name:"factoryName",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"生产厂家"}]},{default:l(()=>[t(f,{value:e.factoryName,"onUpdate:value":a[11]||(a[11]=s=>e.factoryName=s),row:"3",disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"区域",name:"areaName",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"区域"}]},{default:l(()=>[t(f,{value:e.areaName,"onUpdate:value":a[12]||(a[12]=s=>e.areaName=s),row:"3",disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"投运日期",name:"usedDate",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"投运日期"}]},{default:l(()=>[t(f,{value:e.usedDate,"onUpdate:value":a[13]||(a[13]=s=>e.usedDate=s),row:"3",disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"出厂编码",name:"productionNumber",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"出厂编码"}]},{default:l(()=>[t(f,{value:e.productionNumber,"onUpdate:value":a[14]||(a[14]=s=>e.productionNumber=s),row:"3",disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"质保期内",name:"isWarrantyPeriod",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"质保期内不能为空"}]},{default:l(()=>[t(y,{value:e.isWarrantyPeriod,"onUpdate:value":a[15]||(a[15]=s=>e.isWarrantyPeriod=s),disabled:d.value,"allow-clear":""},{default:l(()=>[t(B,{value:"1"},{default:l(()=>[D("是")]),_:1}),t(B,{value:"0"},{default:l(()=>[D("否")]),_:1})]),_:1},8,["value","disabled"])]),_:1})]),_:1}),t(o,{span:12},{default:l(()=>[t(n,{label:"缺陷等级",name:"faultGrade",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"缺陷等级"}]},{default:l(()=>[t(M,{type:"fault_grade",disabled:d.value,value:e.faultGrade,"onUpdate:value":a[16]||(a[16]=s=>e.faultGrade=s),style:{width:"100%"}},null,8,["disabled","value"])]),_:1})]),_:1}),t(o,{span:24},{default:l(()=>[t(n,{label:"检查内容",name:"checkContent",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查内容不能为空"}]},{default:l(()=>[t(x,{value:e.checkContent,"onUpdate:value":a[17]||(a[17]=s=>e.checkContent=s),row:"3",disabled:d.value,maxlength:"512"},null,8,["value","disabled"])]),_:1})]),_:1}),t(o,{span:24},{default:l(()=>[t(n,{label:"原因分析",name:"reason",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"原因分析不能为空"}]},{default:l(()=>[t(x,{value:e.reason,"onUpdate:value":a[18]||(a[18]=s=>e.reason=s),row:"2",disabled:d.value,maxlength:"512"},null,8,["value","disabled"])]),_:1})]),_:1}),t(o,{span:24},{default:l(()=>[t(n,{label:"计划整改措施",name:"checkContent",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"计划整改措施不能为空"}]},{default:l(()=>[t(x,{value:e.measure,"onUpdate:value":a[19]||(a[19]=s=>e.measure=s),row:"3",disabled:d.value,maxlength:"512"},null,8,["value","disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),t(k,{title:"附件上传",bordered:!1},{default:l(()=>[t(ae,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"inventory",vmode:d.value?"view":"box",bizId:e.bizFileId},null,8,["vmode","bizId"])]),_:1})]),_:1},8,["model"])])])]),_:1},8,["spinning"])])]),_:1})}}});export{Te as default};
//# sourceMappingURL=create-e54ab175.js.map