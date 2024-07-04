var Z=Object.defineProperty;var R=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var D=(v,p,r)=>p in v?Z(v,p,{enumerable:!0,configurable:!0,writable:!0,value:r}):v[p]=r,B=(v,p)=>{for(var r in p||(p={}))J.call(p,r)&&D(v,r,p[r]);if(R)for(var r of R(p))X.call(p,r)&&D(v,r,p[r]);return v};var w=(v,p,r)=>new Promise((e,N)=>{var S=I=>{try{_(r.next(I))}catch(F){N(F)}},g=I=>{try{_(r.throw(I))}catch(F){N(F)}},_=I=>I.done?e(I.value):Promise.resolve(I.value).then(S,g);_((r=r.apply(v,p)).next())});import{d as ee,k as h,r as $,ax as ae,u as te,o as le,al as c,Z as z,_ as se,f as a,aa as l,$ as x,a9 as ne,ac as A,v as u,A as d}from"./vue-71d1abb3.js";import{b as L,s as oe}from"./safetyAccident-b1bf9388.js";import{W as ie}from"./WfApproveBox-a3448232.js";import{a0 as re,ak as ue,aB as de,bP as me,a7 as pe,aC as fe}from"./index.js";import{B as ve}from"./BillTitle-d17ab3e4.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{a2 as be}from"./antd-15ac76ed.js";import"./index-316f6ffb.js";import"./index-085d06c7.js";import{u as ce}from"./useTable-109483b3.js";import{_ as ge}from"./UploadTable.vue_vue_type_script_setup_true_lang-5478923e.js";import{_ as y}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{a as q}from"./assign-37f1c13d.js";import"./useRender-21ce56fb.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./BasicTable-0434a334.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./useWindowSizeFn-13b1b8a2.js";import"./OrganDialog-dd1023ce.js";import"./Dialog-0a006d82.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const _e={class:"load"},Ie={class:"process-box"},ye={class:"header-box"},Ce={class:"content"},we={style:{margin:"5px 16px 20px 10px"}},sa=ee({__name:"safetyAccidentModal",setup(v){const p=h(),r=h([]),e=$({spinning:!1}),S=re().getUserInfo,g=h(!0),_=$({});_.subject="安全事故快报",_.infoItems=[];const I=ae(),{currentRoute:F}=I;te(F);const b=ue.getInstance().getQuery(),T=h();function k(n){e.spinning=!0;try{n=n||0,T.value.validateFields().then(()=>{e.status=n,oe(e).then(t=>{e.id=t,L({id:t}).then(f=>{q(e,f.result)}),be.success(n==1?"提交成功。":"保存成功"),pe.getInstance().sendMsg("safetyAccident",{}),n==1&&(g.value=!0,fe())})})}catch(t){console.log("error",t)}finally{e.spinning=!1}}function Y(){k(1)}function G(){k(0)}q(e,{processInstanceId:"",id:"",billCode:"",fillinDate:"",organId:"",organName:"",deptId:"",deptName:"",positionId:"",positionName:"",personMemberId:"",personMemberName:"",fullId:"",status:0,bizFileId:"",subject:"",finishedDate:"",name:"",accidentDate:"",accidentLevel:"",isReportGovernment:"",isInvolveThird:"",thirdPartyName:"",isInsuranceClaims:"",isInsured:"",casualties:"",casualtiesTotal:"",damage:"",isPowerFailure:"",blackoutRange:"",equipment:"",content:""}),le(()=>w(this,null,function*(){b.id=yield K(),yield L({id:b.id}).then(n=>{b.id?(q(e,n.result),e.status==0&&e.personMemberId.substring(0,32)!=S.userId&&(e.status=10)):(q(e,b),e.spinning=!1,e.status=0,e.billCode=n.result.billCode,e.personMemberName=n.result.personMemberName,e.fillinDate=n.result.fillinDate,e.deptName=n.result.deptName),e.status==1&&(g.value=!0)}),b.id||(g.value=!1),yield H(),e.bizFileId==null||e.bizFileId==null||e.bizFileId==""?V():M()}));const K=()=>w(this,null,function*(){let n=b.id;if(!n&&b.processInstanceId){const f=(yield de(b.processInstanceId)).businessKey;b.id=f,n=f}return n}),H=()=>w(this,null,function*(){g.value=e.status!=0,_.title="安全事故快报",e.processInstanceId=b.processInstanceId;let{billCode:n,fillinDate:t,personMemberName:f,deptName:o}=e;q(_,{billCode:n,fillinDate:t,personMemberName:f,deptName:o})}),V=()=>w(this,null,function*(){me().then(n=>{e.bizFileId=n,M()})}),M=()=>w(this,null,function*(){j(e.bizFileId)}),j=n=>{const t=["安全事故快报"],f=["safetyAccident"],o={fileKindId:"",filetype:"",bizId:n,maxCount:20,maxSize:20971520,required:!1,readonly:!0},i=[];for(let m=0;m<1;m++){let C=B({},o);C.fileKindId=f[m],C.filetype=t[m],C.readonly=g.value,i.push(C)}r.value=i},W=h([]);return ce({columns:[{title:"附件类型",dataIndex:"fileType",align:"left",width:150},{title:"附件",dataIndex:"bizFileId",align:"left",width:600}],pagination:!1,showIndexColumn:!1,showTableSetting:!1,tableSetting:{fullScreen:!0},dataSource:W}),(n,t)=>{const f=c("a-input"),o=c("a-form-item"),i=c("a-col"),m=c("a-row"),C=c("a-date-picker"),E=c("a-input-number"),U=c("a-textarea"),P=c("a-card"),O=c("a-form"),Q=c("a-spin");return z(),se("div",_e,[a(Q,{spinning:e.spinning,tip:"Loading..."},{default:l(()=>[x("div",Ie,[x("div",ye,[a(ve,{options:_},null,8,["options"]),e.status!=10?(z(),ne(ie,{key:0,onSave:G,onSubmit:Y,processInstanceId:e.processInstanceId,processStatus:e.status},null,8,["processInstanceId","processStatus"])):A("",!0)]),x("div",Ce,[a(O,{ref_key:"formRef",ref:T,model:e,labelAlign:"right",autocomplete:"off"},{default:l(()=>[a(P,{title:"基本信息",bordered:!1},{default:l(()=>[a(m,{gutter:24},{default:l(()=>[u(a(i,{span:12},{default:l(()=>[a(o,{name:"stationName",label:"电站名称",labelCol:{span:6},rules:[{required:!0,message:"请输入电站名称"}]},{default:l(()=>[a(f,{disabled:"",value:e.stationName,"onUpdate:value":t[0]||(t[0]=s=>e.stationName=s),placeholder:"请输入电站名称"},null,8,["value"]),A("",!0)]),_:1})]),_:1},512),[[d,!0]]),u(a(i,{span:12},{default:l(()=>[a(o,{name:"periodName",label:"期数",labelCol:{span:6},rules:[{required:!0,message:"请输入期数"}]},{default:l(()=>[a(f,{disabled:"",value:e.periodName,"onUpdate:value":t[2]||(t[2]=s=>e.periodName=s),placeholder:"请输入期数"},null,8,["value"])]),_:1})]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:12},{default:l(()=>[a(o,{name:"name",label:"主题",labelCol:{span:6},rules:[{required:!0,message:"请输入主题"}]},{default:l(()=>[a(f,{value:e.name,"onUpdate:value":t[3]||(t[3]=s=>e.name=s),placeholder:"请输入主题",disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]]),u(a(i,{span:12},{default:l(()=>[a(o,{name:"accidentDate",label:"事故时间",labelCol:{span:6},rules:[{required:!0,message:"请选择事故时间"}]},{default:l(()=>[a(C,{value:e.accidentDate,"onUpdate:value":t[4]||(t[4]=s=>e.accidentDate=s),"value-format":"YYYY-MM-DD HH:mm:ss",format:"YYYY-MM-DD HH:mm:ss",style:{"min-width":"100%"},"show-time":"",disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:12},{default:l(()=>[a(o,{name:"accidentLevel",label:"事故等级评估",labelCol:{span:6},rules:[{required:!0,message:"请输入事故等级评估"}]},{default:l(()=>[a(y,{type:"safeAccidentLevel",onChange:t[5]||(t[5]=s=>"()=> detailFormState.accidentLevel = value"),value:e.accidentLevel,"onUpdate:value":t[6]||(t[6]=s=>e.accidentLevel=s),style:{width:"100%"},disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]]),u(a(i,{span:12},{default:l(()=>[a(o,{name:"isReportGovernment",label:"上报政府",labelCol:{span:6},rules:[{required:!0,message:"请输入上报政府"}]},{default:l(()=>[a(y,{type:"yes_or_no",onChange:t[7]||(t[7]=s=>"()=> detailFormState.isReportGovernment = value"),value:e.isReportGovernment,"onUpdate:value":t[8]||(t[8]=s=>e.isReportGovernment=s),style:{width:"100%"},disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:12},{default:l(()=>[a(o,{name:"isInvolveThird",label:"涉及第三方",labelCol:{span:6},rules:[{required:!0,message:"请输入涉及第三方"}]},{default:l(()=>[a(y,{type:"yes_or_no",onChange:t[9]||(t[9]=s=>"()=> detailFormState.isInvolveThird = value"),value:e.isInvolveThird,"onUpdate:value":t[10]||(t[10]=s=>e.isInvolveThird=s),style:{width:"100%"},disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]]),u(a(i,{span:12},{default:l(()=>[a(o,{name:"thirdPartyName",label:"第三方名称",labelCol:{span:6},rules:[{message:"请输入第三方名称"}],required:e.isInvolveThird==1},{default:l(()=>[a(f,{value:e.thirdPartyName,"onUpdate:value":t[11]||(t[11]=s=>e.thirdPartyName=s),placeholder:"请输入第三方名称",disabled:e.status!=0||e.isInvolveThird==0},null,8,["value","disabled"])]),_:1},8,["required"])]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:12},{default:l(()=>[a(o,{name:"isInsuranceClaims",label:"保险理赔",labelCol:{span:6},rules:[{required:!0,message:"请输入保险理赔"}]},{default:l(()=>[a(y,{type:"yes_or_no",onChange:t[12]||(t[12]=s=>"()=> detailFormState.isInsuranceClaims = value"),value:e.isInsuranceClaims,"onUpdate:value":t[13]||(t[13]=s=>e.isInsuranceClaims=s),style:{width:"100%"},disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]]),u(a(i,{span:12},{default:l(()=>[a(o,{name:"isInsured",label:"已报保险",labelCol:{span:6},rules:[{required:e.isInsuranceClaims==1,message:"请选择已报保险"}]},{default:l(()=>[a(y,{type:"yes_or_no",onChange:t[14]||(t[14]=s=>"()=> detailFormState.isInsured = value"),value:e.isInsured,"onUpdate:value":t[15]||(t[15]=s=>e.isInsured=s),style:{width:"100%"},disabled:e.status!=0||e.isInsuranceClaims==0},null,8,["value","disabled"])]),_:1},8,["rules"])]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:12},{default:l(()=>[a(o,{name:"casualties",label:"人员伤亡",labelCol:{span:6},rules:[{required:!0,message:"请输入人员伤亡"}]},{default:l(()=>[a(y,{type:"Casualties",onChange:t[16]||(t[16]=s=>"()=> detailFormState.casualties = value"),value:e.casualties,"onUpdate:value":t[17]||(t[17]=s=>e.casualties=s),style:{width:"100%"},disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]]),u(a(i,{span:12},{default:l(()=>[a(o,{name:"casualtiesTotal",label:"伤亡人数",labelCol:{span:6},rules:[{required:!0,message:"请输入伤亡人数"}]},{default:l(()=>[a(E,{value:e.casualtiesTotal,"onUpdate:value":t[18]||(t[18]=s=>e.casualtiesTotal=s),placeholder:"请输入伤亡人数",disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:24},{default:l(()=>[a(o,{name:"damage",label:"设备损坏情况",labelCol:{span:3},rules:[{required:!0,message:"请输入遗留整改计划"}]},{default:l(()=>[a(U,{value:e.damage,"onUpdate:value":t[19]||(t[19]=s=>e.damage=s),row:"8","show-count":"",style:{height:"200px"},disabled:g.value,maxlength:1e3},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:12},{default:l(()=>[a(o,{name:"isPowerFailure",label:"停电",labelCol:{span:6},rules:[{required:!0,message:"请输入停电"}]},{default:l(()=>[a(y,{type:"yes_or_no",onChange:t[20]||(t[20]=s=>"()=> detailFormState.isPowerFailure = value"),value:e.isPowerFailure,"onUpdate:value":t[21]||(t[21]=s=>e.isPowerFailure=s),style:{width:"100%"},disabled:e.status!=0},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]]),u(a(i,{span:12},{default:l(()=>[a(o,{name:"blackoutRange",label:"停电范围",labelCol:{span:6},rules:[{message:"请输入停电范围"}],required:e.isPowerFailure==1},{default:l(()=>[a(f,{value:e.blackoutRange,"onUpdate:value":t[22]||(t[22]=s=>e.blackoutRange=s),placeholder:"请输入停电范围",disabled:e.status!=0||e.isPowerFailure==0},null,8,["value","disabled"])]),_:1},8,["required"])]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:24},{default:l(()=>[a(o,{name:"equipment",label:"停电设备",labelCol:{span:3},rules:[{message:"请输入停电设备"}],required:e.isPowerFailure==1},{default:l(()=>[a(U,{value:e.equipment,"onUpdate:value":t[23]||(t[23]=s=>e.equipment=s),row:"6","show-count":"",style:{height:"200px"},disabled:e.status!=0||e.isPowerFailure==0,maxlength:1e3},null,8,["value","disabled"])]),_:1},8,["required"])]),_:1},512),[[d,!0]])]),_:1}),a(m,{gutter:24},{default:l(()=>[u(a(i,{span:24},{default:l(()=>[a(o,{name:"content",label:" 快报正文",labelCol:{span:3},rules:[{required:!0,message:"请输入快报正文"}]},{default:l(()=>[a(U,{value:e.content,"onUpdate:value":t[24]||(t[24]=s=>e.content=s),row:"8","show-count":"",style:{height:"300px"},disabled:g.value,maxlength:1e3},null,8,["value","disabled"])]),_:1})]),_:1},512),[[d,!0]])]),_:1})]),_:1}),a(P,{title:"上传附件",bordered:!1},{default:l(()=>[x("div",we,[a(ge,{ref_key:"uploadTable",ref:p,rows:r.value,colwidths:["15%","70%","15%"],application:"po",module:"safetyAccident",mode:e.status==0?"normal":"view"},null,8,["rows","mode"])])]),_:1})]),_:1},8,["model"])])])]),_:1},8,["spinning"])])}}});export{sa as default};
//# sourceMappingURL=safetyAccidentModal-4d01af21.js.map
