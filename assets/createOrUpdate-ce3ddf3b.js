var O=(o,H,k)=>new Promise((u,I)=>{var y=m=>{try{C(k.next(m))}catch(_){I(_)}},U=m=>{try{C(k.throw(m))}catch(_){I(_)}},C=m=>m.done?u(m.value):Promise.resolve(m.value).then(y,U);C((k=k.apply(o,H)).next())});import{P as se}from"./index-20519caf.js";import{a5 as D,a0 as ne,aj as ie,aB as oe,aD as j,av as de,at as L,aC as ue,a7 as re,_ as ce}from"./index.js";import{D as pe}from"./Dialog-0a006d82.js";import{B as me}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as fe}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{_ as W}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{B as ve}from"./BillTitle-d17ab3e4.js";import{W as be}from"./WfApproveBox-a3448232.js";import{U as $}from"./UploadBox-636ecf02.js";import{d as he,J as Ie,e as _e,k as g,r as G,o as ge,al as r,Z as b,a9 as h,aa as s,$ as w,f as a,u as M,ag as xe,ac as x,E as z,aG as we,aH as ke}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";function ye(o){return D.post({url:"/baseset/safeCheck/list-byCheckType",params:o})}function Ce(o){return D.get({url:"/po/vehicle-execution/dtl/list",params:o})}function De(o){return D.get({url:"/po/vehicle-execution/get",params:o})}function Ue(o){return D.post({url:"/baseset/common/list-stationPerson?stationId="+o})}function Se(o){return D.post({url:"/po/vehicle-execution/create",data:o})}function Ne(o){return D.get({url:"/po/vehicle-execution/getPlateNumber",params:o})}const Ye=[{title:"检查内容",dataIndex:"indexContent",width:160,align:"left",headAlign:"center"},{slots:{title:"result"},dataIndex:"result",width:160,align:"left"},{slots:{title:"needRectification"},dataIndex:"needRectification",width:100},{title:"计划整改措施",dataIndex:"measures",width:160,align:"left",headAlign:"center"},{title:"计划完成日期",dataIndex:"deadlineDate",width:160},{title:"隐患类别",dataIndex:"hiddenDangerType",width:160},{title:"检查附件",dataIndex:"bizFileId",width:160}],J=o=>(we("data-v-f6f9def4"),o=o(),ke(),o),Me={class:"load"},He={class:"process-box"},Te={class:"header-box"},Re={class:"content"},qe=J(()=>w("div",{class:"customer_require",style:{"text-align":"center"}},"检查情况",-1)),Fe=J(()=>w("div",{class:"customer_require"},"是否需要整改",-1)),Oe=he({__name:"createOrUpdate",setup(o){const H=ne(),k=Ie(H.getUserInfo),u=_e(()=>e.status!=0||e.status==0&&e.personMemberId!=""&&e.personMemberId.substring(0,32)!=k.userId),I=g(!1),y=g(!0),U=g(""),C=g(""),m=g(),_=g([]),T=g([]),B=G({subject:"车辆检查"});let{params:v}=ie();const e=G({id:v.id||"",subject:"",checkerId:"",stationName:v.stationName||"",stationId:v.stationId||"",stationOrganName:v.stationOrganName||"",stationOrganId:v.stationOrganId||"",vehicleId:"",plateNumber:"",identificationCode:"",personMemberId:"",mileage:"",startDate:"",billCode:"",fillinDate:"",endDate:"",checkerName:"",dtl:{},status:0,checkResult:"",checkDescription:"",spinning:!1,bizFileId:""}),R={handleAgree:n=>{console.log("同意",n)},handleSave:n=>{console.log("保存",n),y.value=!1,e.status=0,q()},handleSubmit:n=>{console.log("提交",n),y.value=!0,e.status=1;const t=m.value;t&&t.validateFields().then(()=>{q()}).catch(i=>{i.errorFields.length!=0&&document.querySelectorAll(".ant-form-item-has-error")[0].scrollIntoView({block:"center",behavior:"smooth"}),console.log(i),e.status=0})}},q=()=>{e.dtl=P(),e.spinning=!0,Se(e).then(n=>{n.result!=""?(e.id=n.result,L.getInstance().success(e.status==1?"提交成功.":"保存成功."),e.status==1&&setTimeout(()=>{ue(),re.getInstance().sendMsg("vehicle-execution",{})},100)):(y.value=!1,L.getInstance().error("保存失败.")),e.spinning=!1}).catch(n=>{y.value=!1,e.spinning=!1,e.status=0,console.log(n)})},[K,{getDataSource:P,updateTableData:Z,reload:Q}]=fe({api:()=>O(this,null,function*(){let n;if(e.id)n=yield Ce({vehicleExecutionId:e.id});else{let t=yield ye({checkType:"vehicle",usePage:0});n={result:{list:[],total:t.result.total}},t.result.list.forEach(i=>{n.result.list.push({indexContent:i.description,indexId:i.id,indexItem:i.checkItem,bizFileId:j(),needRectification:0})})}return n.result}),bordered:!0,columns:Ye,pagination:!1,useSearchForm:!1,showTableSetting:!1}),X=()=>{I.value=!0},ee=()=>{let n=P(),t=0;n.forEach(()=>{Z(t,"result",U.value),t++}),I.value=!1};return ge(()=>O(this,null,function*(){if(C.value=v.processInstanceId,!e.id&&v.processInstanceId){const n=yield oe(v.processInstanceId);e.id=n.businessKey}De({id:e.id}).then(n=>{let t=n.result;if(e.id){for(let N in t)e[N]=t[N];e.status=Number(t.status)}else e.billCode=t.billCode,e.personMemberName=t.personMemberName,e.deptName=t.deptName,e.fillinDate=t.fillinDate,e.bizFileId=j();let{billCode:i,fillinDate:c,personMemberName:p,deptName:S}=t;Object.assign(B,{billCode:i,fillinDate:c,personMemberName:p,deptName:S}),Q()}).then(()=>{e.status==0?(Ue(e.stationId).then(n=>{let t={};n.result.forEach(i=>{t[i.userId]=i.name});for(let i in t)_.value.push({label:t[i],value:i})}),Ne({stationId:e.stationId}).then(n=>{n.result.forEach(t=>{T.value.push({label:t.plateNumber,value:t.vehicleId,identificationCode:t.identificationCode})})})):(_.value.push({label:e.checkerName,value:e.checkerId}),T.value.push({label:e.plateNumber,value:e.vehicleId,identificationCode:e.identificationCode}))})})),(n,t)=>{const i=r("a-input"),c=r("a-form-item"),p=r("a-col"),S=r("a-select"),N=r("a-input-number"),F=r("a-date-picker"),A=r("a-row"),Y=r("a-card"),te=r("a-button"),E=r("a-select-option"),V=r("a-textarea"),ae=r("a-form"),le=r("a-spin");return b(),h(M(se),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:s(()=>[w("div",Me,[a(le,{spinning:e.spinning,tip:"Loading..."},{default:s(()=>[w("div",He,[w("div",Te,[a(ve,{options:B},null,8,["options"]),a(be,{onAgree:R.handleAgree,onSave:R.handleSave,onSubmit:R.handleSubmit,processStatus:e.status,processInstanceId:C.value,listenMessage:"vehicle-execution"},null,8,["onAgree","onSave","onSubmit","processStatus","processInstanceId"])]),w("div",Re,[a(ae,{model:e,name:"basic",ref_key:"formRef",ref:m,autocomplete:"off",onFinish:q},{default:s(()=>[a(Y,{title:"基本信息",bordered:!1},{default:s(()=>[a(A,{gutter:32},{default:s(()=>[a(p,{span:12},{default:s(()=>[a(c,{label:"电站名称",name:"stationName",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:s(()=>[a(i,{value:e.stationName,"onUpdate:value":t[0]||(t[0]=l=>e.stationName=l),disabled:""},null,8,["value"])]),_:1})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,{label:"识别代码",name:"identificationCode",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:s(()=>[a(i,{value:e.identificationCode,"onUpdate:value":t[1]||(t[1]=l=>e.identificationCode=l),disabled:""},null,8,["value"])]),_:1})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,{label:"车牌号",name:"vehicleId",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"车牌号不能为空"}]},{default:s(()=>[a(S,{value:e.vehicleId,"onUpdate:value":t[2]||(t[2]=l=>e.vehicleId=l),allowClear:"",options:T.value,disabled:u.value,onChange:t[3]||(t[3]=(l,d)=>{e.plateNumber=d.label,e.vehicleId=d.value,e.identificationCode=d.identificationCode})},null,8,["value","options","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,{label:"行驶公里数",name:"mileage",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"行驶公里数不能为空"}]},{default:s(()=>[a(N,{value:e.mileage,"onUpdate:value":t[4]||(t[4]=l=>e.mileage=l),min:0,max:999999,disabled:u.value,step:.01,"string-mode":""},null,8,["value","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,{label:"检查开始时间",name:"startDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查开始时间"}]},{default:s(()=>[a(F,{value:e.startDate,"onUpdate:value":t[5]||(t[5]=l=>e.startDate=l),"show-time":"",valueFormat:"YYYY-MM-DD HH:mm",format:"YYYY-MM-DD HH:mm",disabled:u.value,style:{width:"100%"}},null,8,["value","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,{label:"检查结束时间",name:"endDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查结束时间"}]},{default:s(()=>[a(F,{value:e.endDate,"onUpdate:value":t[6]||(t[6]=l=>e.endDate=l),"show-time":"",valueFormat:"YYYY-MM-DD HH:mm",format:"YYYY-MM-DD HH:mm",disabled:u.value,style:{width:"100%"}},null,8,["value","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,{label:"检查人",name:"checkerId",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查人"}]},{default:s(()=>[a(S,{value:e.checkerId,"onUpdate:value":t[7]||(t[7]=l=>e.checkerId=l),allowClear:"",options:_.value,disabled:u.value,onChange:t[8]||(t[8]=(l,d)=>{e.checkerId=l,e.checkerName=d.label})},null,8,["value","options","disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),a(Y,{bordered:!1},{default:s(()=>[a(M(me),{title:"检查项目",onRegister:M(K)},xe({result:s(()=>[qe]),needRectification:s(()=>[Fe]),bodyCell:s(({column:l,record:d})=>[l.dataIndex==="result"?(b(),h(i,{key:0,value:d[l.dataIndex],"onUpdate:value":f=>d[l.dataIndex]=f,maxlength:"128",disabled:u.value,style:{width:"100%"}},null,8,["value","onUpdate:value","disabled"])):x("",!0),l.dataIndex==="needRectification"?(b(),h(S,{key:1,value:d[l.dataIndex],"onUpdate:value":f=>d[l.dataIndex]=f,style:{width:"100%"},"allow-clear":"",disabled:u.value},{default:s(()=>[a(E,{value:0},{default:s(()=>[z("否")]),_:1}),a(E,{value:1},{default:s(()=>[z("是")]),_:1})]),_:2},1032,["value","onUpdate:value","disabled"])):x("",!0),l.dataIndex==="deadlineDate"?(b(),h(F,{key:2,value:d[l.dataIndex],"onUpdate:value":f=>d[l.dataIndex]=f,disabled:u.value,valueFormat:"YYYY-MM-DD HH:mm",format:"YYYY-MM-DD HH:mm",style:{width:"100%"}},null,8,["value","onUpdate:value","disabled"])):x("",!0),l.dataIndex==="measures"?(b(),h(i,{key:3,value:d[l.dataIndex],"onUpdate:value":f=>d[l.dataIndex]=f,disabled:u.value,maxlength:"512",style:{width:"100%"}},null,8,["value","onUpdate:value","disabled"])):x("",!0),l.dataIndex==="hiddenDangerType"?(b(),h(W,{key:4,type:"hidden_danger_type",subtype:"vehicle",value:d[l.dataIndex],"onUpdate:value":f=>d[l.dataIndex]=f,disabled:u.value,width:160},null,8,["value","onUpdate:value","disabled"])):x("",!0),l.dataIndex==="bizFileId"?(b(),h($,{key:5,width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"vehicleexecution",vmode:e.status==0?"box":"view",bizId:d[l.dataIndex]},null,8,["vmode","bizId"])):x("",!0)]),_:2},[e.status==0&&!u.value?{name:"toolbar",fn:s(()=>[a(te,{onClick:X,preIcon:M(de).EDIT},{default:s(()=>[z(" 检查情况 ")]),_:1},8,["preIcon"])]),key:"0"}:void 0]),1032,["onRegister"])]),_:1}),a(Y,{title:"检查结论",bordered:!1},{default:s(()=>[a(A,{gutter:32},{default:s(()=>[a(p,{span:12},{default:s(()=>[a(c,{label:"检查结论",name:"checkResult",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查结论不能为空"}]},{default:s(()=>[a(W,{type:"inspection_conclusion",value:e.checkResult,"onUpdate:value":t[9]||(t[9]=l=>e.checkResult=l),disabled:u.value,style:{width:"100%"}},null,8,["value","disabled"])]),_:1})]),_:1}),a(p,{span:24},{default:s(()=>[a(c,{label:"检查情况",name:"checkDescription",disabled:u.value,labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检查情况不能为空"}]},{default:s(()=>[a(V,{value:e.checkDescription,"onUpdate:value":t[10]||(t[10]=l=>e.checkDescription=l),rows:3,disabled:u.value,maxlength:"1000"},null,8,["value","disabled"])]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),a(Y,{title:"附件上传",bordered:!1},{default:s(()=>[a($,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"vehicleexecution",vmode:e.status==0?"box":"view",bizId:e.bizFileId},null,8,["vmode","bizId"])]),_:1}),e.status==0?(b(),h(pe,{key:0,visible:I.value,"onUpdate:visible":t[12]||(t[12]=l=>I.value=l),title:"批量修改检查情况",onOk:ee,width:300,height:217,maskClosable:!1,overflowY:"auto"},{default:s(()=>[w("div",null,[a(V,{value:U.value,"onUpdate:value":t[11]||(t[11]=l=>U.value=l),rows:3,maxlength:"128"},null,8,["value"])])]),_:1},8,["visible"])):x("",!0)])])]),_:1},8,["spinning"])])]),_:1})}}});const bt=ce(Oe,[["__scopeId","data-v-f6f9def4"]]);export{bt as default};
//# sourceMappingURL=createOrUpdate-ce3ddf3b.js.map
