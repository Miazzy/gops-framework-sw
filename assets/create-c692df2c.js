var B=(p,C,f)=>new Promise((r,d)=>{var h=u=>{try{e(f.next(u))}catch(_){d(_)}},v=u=>{try{e(f.throw(u))}catch(_){d(_)}},e=u=>u.done?r(u.value):Promise.resolve(u.value).then(h,v);e((f=f.apply(p,C)).next())});import{P as F}from"./index-20519caf.js";import{a5 as w,a0 as R,aj as O,aD as V,ax as D,at as M,aC as j,a7 as L}from"./index.js";import{_ as $}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{B as J}from"./BillTitle-d17ab3e4.js";import{U as W}from"./UploadBox-636ecf02.js";import{d as Z,J as A,e as G,k as T,r as U,o as K,al as i,Z as P,a9 as Q,aa as n,$ as x,f as t,u as q,_ as X,E as S,ac as ee,ad as te}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./antd-15ac76ed.js";import"./Dialog-0a006d82.js";function ae(p){return w.get({url:"/po/hidden-danger/get",params:p})}function ne(p){return w.post({url:"/po/hidden-danger/create",data:p})}function le(p){return w.post({url:"/baseset/common/list-stationPerson?stationId="+p.stationId})}const se={class:"load"},oe={class:"process-box"},ie={class:"header-box"},de={key:0,class:"header-right"},re={class:"content"},Ie=Z({__name:"create",setup(p){const C=R(),f=A(C.getUserInfo),r=G(()=>d.readonly==="1"||e.workBillId!=null&&e.workBillId!=""||e.sourceId!=null&&e.sourceId!=""||e.personMemberId!=""&&e.personMemberId.substring(0,32)!=f.userId);let{params:d}=O();const h=T([]),v=T(),e=U({id:d.id||"",status:0,stationOrganId:d.stationOrganId||"",stationOrganName:d.stationOrganName||"",stationId:d.stationId||"",stationName:d.stationName||"",hanppendDate:"",hiddenDangerType:"",hiddenType:"",sourceParentId:"",personMemberId:"",sourceId:"",sourceType:"",findById:"",findByName:"",sourceBillCode:"",resultContent:"",result:"",billCode:"",fillinDate:"",rectificationMeasures:"",finishedRectificationDate:"",bizFileId:"",spinning:!1}),u=()=>{if(!(!e.sourceId||!e.sourceParentId))switch(e.sourceType){case"dqSafeCheckExecution":case"zxSafeCheckExecution":D("/po/safety/safecheckexecution/create/checkType__1","",{id:e.sourceParentId,checkType:1});break;case"inspectionExecution":D("/po/inspection/inspectionexecution/create","",{id:e.sourceParentId});break;case"vehicleExecution":D("/po/safety/vehicleexecution/create","",{id:e.sourceParentId});break}},_=()=>{const g=v.value;g&&(e.spinning=!0,g.validateFields().then(()=>{ne(e).then(a=>{a.result!=""?(e.id=a.result,M.getInstance().success("保存成功"),setTimeout(()=>{j(),L.getInstance().sendMsg("po-hidden-danger",{})},100)):M.getInstance().error("保存失败."),e.spinning=!1}).catch(a=>{e.spinning=!1,console.log(a)})}).catch(a=>{console.log(a),e.spinning=!1}))},k=U({subject:"隐患管理"});return K(()=>B(this,null,function*(){ae({id:e.id}).then(g=>{let a=g.result;if(e.id){for(let b in a)e[b]=a[b];e.status=Number(e.status)}else e.hanppendDate=a.hanppendDate,e.billCode=a.billCode,e.personMemberName=a.personMemberName,e.deptName=a.deptName,e.fillinDate=a.fillinDate,e.bizFileId=V();let{billCode:y,fillinDate:I,personMemberName:s,deptName:o}=a;Object.assign(k,{billCode:y,fillinDate:I,personMemberName:s,deptName:o}),le({stationId:e.stationId}).then(b=>{let c={};b.result.forEach(m=>{c[m.userId]=m.name});for(let m in c)h.value.push({label:c[m],value:m})})})})),(g,a)=>{const y=i("a-button"),I=i("a-input"),s=i("a-form-item"),o=i("a-col"),b=i("a-select"),c=i("a-textarea"),m=i("a-date-picker"),H=i("a-row"),N=i("a-card"),Y=i("a-form"),z=i("a-spin");return P(),Q(q(F),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:n(()=>[x("div",se,[t(z,{spinning:e.spinning,tip:"Loading..."},{default:n(()=>[x("div",oe,[x("div",ie,[t(J,{options:k},null,8,["options"]),q(d).readonly!=="1"?(P(),X("div",de,[t(y,{type:"primary","html-type":"submit",onClick:_},{default:n(()=>[S("保存")]),_:1})])):ee("",!0)]),x("div",re,[t(Y,{model:e,name:"basic",ref_key:"formRef",ref:v,autocomplete:"off"},{default:n(()=>[t(N,{title:"基本信息",bordered:!1},{default:n(()=>[t(H,{gutter:32},{default:n(()=>[t(o,{span:12},{default:n(()=>[t(s,{label:"电站名称",name:"stationName",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:n(()=>[t(I,{value:e.stationName,"onUpdate:value":a[0]||(a[0]=l=>e.stationName=l),disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:n(()=>[t(s,{label:"发现时间",name:"hanppendDate",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:n(()=>[t(I,{value:e.hanppendDate,"onUpdate:value":a[1]||(a[1]=l=>e.hanppendDate=l),disabled:""},null,8,["value"])]),_:1})]),_:1}),t(o,{span:12},{default:n(()=>[t(s,{label:"隐患类别",name:"hiddenDangerType",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"请选择隐患类别"}]},{default:n(()=>[t($,{type:"hidden_danger_type",disabled:r.value,value:e.hiddenDangerType,"onUpdate:value":a[2]||(a[2]=l=>e.hiddenDangerType=l),style:{width:"100%"}},null,8,["disabled","value"])]),_:1})]),_:1}),t(o,{span:12},{default:n(()=>[t(s,{label:"来源任务",name:"sourceBillCode",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:n(()=>[t(y,{type:"link",onClick:u},{default:n(()=>[S(te(e.sourceBillCode),1)]),_:1})]),_:1})]),_:1}),t(o,{span:12},{default:n(()=>[t(s,{label:"发现人",name:"findById",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"发现人"}]},{default:n(()=>[t(b,{value:e.findById,"onUpdate:value":a[3]||(a[3]=l=>e.findById=l),allowClear:"",options:h.value,disabled:r.value,onChange:a[4]||(a[4]=(l,E)=>{e.findById=l,e.findByName=E.label})},null,8,["value","options","disabled"])]),_:1})]),_:1}),t(o,{span:24},{default:n(()=>[t(s,{label:"检查内容",name:"resultContent",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查内容"}]},{default:n(()=>[t(c,{value:e.resultContent,"onUpdate:value":a[5]||(a[5]=l=>e.resultContent=l),row:"3",disabled:r.value,maxlength:"512"},null,8,["value","disabled"])]),_:1})]),_:1}),t(o,{span:24},{default:n(()=>[t(s,{label:"检查情况",name:"result",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查情况"}]},{default:n(()=>[t(c,{value:e.result,"onUpdate:value":a[6]||(a[6]=l=>e.result=l),row:"3",disabled:r.value,maxlength:"128"},null,8,["value","disabled"])]),_:1})]),_:1}),t(o,{span:24},{default:n(()=>[t(s,{label:"计划整改措施",name:"rectificationMeasures",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"计划整改措施"}]},{default:n(()=>[t(c,{value:e.rectificationMeasures,"onUpdate:value":a[7]||(a[7]=l=>e.rectificationMeasures=l),row:"3",disabled:r.value,maxlength:"512"},null,8,["value","disabled"])]),_:1})]),_:1}),t(o,{span:12},{default:n(()=>[t(s,{label:"计划完成日期",name:"finishedRectificationDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"计划完成日期"}]},{default:n(()=>[t(m,{value:e.finishedRectificationDate,"onUpdate:value":a[8]||(a[8]=l=>e.finishedRectificationDate=l),"show-time":"",style:{width:"100%"},valueFormat:"YYYY-MM-DD HH:mm",format:"YYYY-MM-DD HH:mm",disabled:r.value},null,8,["value","disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),t(N,{title:"附件上传",bordered:!1},{default:n(()=>[t(W,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"inventory",vmode:r.value?"view":"box",bizId:e.bizFileId},null,8,["vmode","bizId"])]),_:1})]),_:1},8,["model"])])])]),_:1},8,["spinning"])])]),_:1})}}});export{Ie as default};
//# sourceMappingURL=create-c692df2c.js.map