var _=(w,u,e)=>new Promise((b,o)=>{var g=c=>{try{I(e.next(c))}catch(y){o(y)}},h=c=>{try{I(e.throw(c))}catch(y){o(y)}},I=c=>c.done?b(c.value):Promise.resolve(c.value).then(g,h);I((e=e.apply(w,u)).next())});import{d as P,r as q,k as B,o as R,al as f,Z as A,a9 as V,aa as l,$ as C,f as a,v as p,ac as k,A as m,u as W,J as H}from"./vue-71d1abb3.js";import{B as K}from"./BillTitle-d17ab3e4.js";import{W as G}from"./WfApproveBox-a3448232.js";import{_ as N}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{ak as J,bP as Q,aC as Z,a7 as E,aB as X,_ as ee}from"./index.js";import{d as ae,a as $}from"./data-f99de3f0.js";import{U as te}from"./UploadBox-636ecf02.js";import{P as le}from"./index-20519caf.js";import{a as S}from"./assign-37f1c13d.js";import{a2 as ne}from"./antd-15ac76ed.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./BasicTable-0434a334.js";import"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-f4fc48e6.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./uniqBy-92d3bc7f.js";import"./index-085d06c7.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useTable-109483b3.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";import"./useRender-21ce56fb.js";import"./useContentViewHeight-7f845167.js";const se={class:"load"},oe={class:"process-box"},re={class:"header-box"},ie={class:"content"},ue=P({__name:"infoarchiveCreate",setup(w){const u=J.getInstance().getQuery(),e=q({spinning:!1,status:0}),b=B(),o=B(!0),g=B(!1),h=q({subject:"信息档案"});h.title="信息档案";const I=n=>{n==="6"?g.value=!0:g.value=!1},c=()=>{const n=b.value;n&&n.validateFields().then(()=>{x(0)}).catch(t=>{console.log("onSubmit=》error",t)})},y=()=>{const n=b.value;n&&n.validateFields().then(()=>{x(1)}).catch(t=>{console.log("onSubmit=》error",t)})},x=n=>_(this,null,function*(){e.spinning=!0;try{yield D(n)}catch(t){e.spinning=!1}});function D(n){const t=H(e);t.status=n,ae(t).then(i=>{e.id=i,$({id:i}).then(r=>{S(e,r.result)}),n==1&&(o.value=!0,setTimeout(()=>{Z(),E.getInstance().sendMsg("infoarchive",{})},100)),e.spinning=!1,T("操作成功")}).catch(()=>{e.spinning=!1})}const M=()=>_(this,null,function*(){const n=yield $({id:u.id});if(n.result){u.id!=""&&S(e,n.result),o.value=e.status!=0,e.processInstanceId||(e.processInstanceId=u.processInstanceId);let{billCode:t,fillinDate:i,personMemberName:r,deptName:d}=n.result;Object.assign(h,{billCode:t,fillinDate:i,personMemberName:r,deptName:d})}}),z=()=>_(this,null,function*(){let n=u.id;if(!n&&u.processInstanceId){const i=(yield X(u.processInstanceId)).businessKey;u.id=i,n=i}return n});R(()=>_(this,null,function*(){S(e,u),u.id=yield z(),yield M(),u.id||(o.value=!1,Y())}));const Y=()=>_(this,null,function*(){Q().then(n=>{e.bizFileId=n})}),T=n=>{ne.success(n)};return(n,t)=>{const i=f("a-input"),r=f("a-form-item"),d=f("a-col"),v=f("a-row"),F=f("a-date-picker"),O=f("a-textarea"),U=f("a-card"),j=f("a-form"),L=f("a-spin");return A(),V(W(le),{detail:!0,dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"fix-detail-page",style:{position:"relative"}},{default:l(()=>[C("div",se,[a(L,{spinning:e.spinning,tip:"Loading..."},{default:l(()=>[C("div",oe,[C("div",re,[a(K,{options:h},null,8,["options"]),a(G,{onSave:c,onSubmit:y,processInstanceId:e.processInstanceId,processStatus:e.status},null,8,["processInstanceId","processStatus"])]),C("div",ie,[C("div",null,[a(j,{ref_key:"formRef",ref:b,model:e,labelAlign:"right",autocomplete:"off"},{default:l(()=>[a(U,{title:"基本信息",bordered:!1},{default:l(()=>[a(v,null,{default:l(()=>[p(a(d,{span:12},{default:l(()=>[a(r,{name:"stationName",label:"电站名称",labelCol:{span:6},rules:[{required:!1}]},{default:l(()=>[k("",!0),k("",!0),a(i,{disabled:"",value:e.stationName,"onUpdate:value":t[2]||(t[2]=s=>e.stationName=s)},null,8,["value"]),k("",!0),k("",!0)]),_:1})]),_:1},512),[[m,!0]]),p(a(d,{span:12},{default:l(()=>[a(r,{name:"periodName",label:"期数",labelCol:{span:6},rules:[{required:!1}]},{default:l(()=>[a(i,{disabled:"",value:e.periodName,"onUpdate:value":t[5]||(t[5]=s=>e.periodName=s)},null,8,["value"]),k("",!0)]),_:1})]),_:1},512),[[m,!0]])]),_:1}),a(v,null,{default:l(()=>[p(a(d,{span:12},{default:l(()=>[a(r,{name:"competentName",label:"主管单位",labelCol:{span:6},rules:[{required:!0,message:"请选择主管单位"}]},{default:l(()=>[a(N,{value:e.competentName,"onUpdate:value":t[7]||(t[7]=s=>e.competentName=s),type:"competentType",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[m,!0]]),p(a(d,{span:12},{default:l(()=>[a(r,{name:"issuedDate",label:"下发日期",labelCol:{span:6},rules:[{required:!0,message:"请选择下发日期"}]},{default:l(()=>[a(F,{value:e.issuedDate,"onUpdate:value":t[8]||(t[8]=s=>e.issuedDate=s),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[m,!0]])]),_:1}),a(v,null,{default:l(()=>[p(a(d,{span:12},{default:l(()=>[a(r,{name:"grade",label:"重要等级",labelCol:{span:6},rules:[{required:!0,message:"请选择重要等级"}]},{default:l(()=>[a(N,{value:e.grade,"onUpdate:value":t[9]||(t[9]=s=>e.grade=s),type:"archiveGradeType",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[m,!0]]),p(a(d,{span:12},{default:l(()=>[a(r,{name:"issuingCompany",label:"发文单位",labelCol:{span:6},rules:[{required:!0,message:"请输入发文单位"}]},{default:l(()=>[a(i,{value:e.issuingCompany,"onUpdate:value":t[10]||(t[10]=s=>e.issuingCompany=s),placeholder:"请输入发文单位",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[m,!0]])]),_:1}),a(v,null,{default:l(()=>[p(a(d,{span:12},{default:l(()=>[a(r,{name:"competentNameLevel",label:"主管单位级别",labelCol:{span:6},rules:[{required:!0,message:"请选择主管单位级别"}]},{default:l(()=>[a(N,{value:e.competentNameLevel,"onUpdate:value":t[11]||(t[11]=s=>e.competentNameLevel=s),type:"competentLevelType",style:"width: 100%",disabled:o.value,onChange:I},null,8,["value","disabled"])]),_:1})]),_:1},512),[[m,!0]]),p(a(d,{span:12},{default:l(()=>[a(r,{name:"otherCompetentName",label:"其他主管单位",labelCol:{span:6},rules:[{message:"请输入其他主管单位"}],required:g.value},{default:l(()=>[a(i,{value:e.otherCompetentName,"onUpdate:value":t[12]||(t[12]=s=>e.otherCompetentName=s),placeholder:"请输入其他主管单位",disabled:o.value},null,8,["value","disabled"])]),_:1},8,["required"])]),_:1},512),[[m,!0]])]),_:1}),a(v,null,{default:l(()=>[p(a(d,{span:24},{default:l(()=>[a(r,{name:"subject",label:"主题",labelCol:{span:3},rules:[{required:!0,message:"请输入主题"}]},{default:l(()=>[a(i,{value:e.subject,"onUpdate:value":t[13]||(t[13]=s=>e.subject=s),placeholder:"请输入主题",disabled:o.value,maxlength:100},null,8,["value","disabled"])]),_:1})]),_:1},512),[[m,!0]])]),_:1}),a(v,null,{default:l(()=>[p(a(d,{span:24},{default:l(()=>[a(r,{name:"requirement",label:"文件要求",labelCol:{span:3},rules:[{required:!0,message:"请输入文件要求"}]},{default:l(()=>[a(O,{rows:4,value:e.requirement,"onUpdate:value":t[14]||(t[14]=s=>e.requirement=s),placeholder:"请输入文件要求",disabled:o.value,maxlength:1e3},null,8,["value","disabled"])]),_:1})]),_:1},512),[[m,!0]])]),_:1})]),_:1}),a(U,{title:"信息档案附件",bordered:!1},{default:l(()=>[a(te,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"infoarchive",vmode:e.status==0?"box":"view",bizId:e.bizFileId},null,8,["vmode","bizId"])]),_:1})]),_:1},8,["model"])])])])]),_:1},8,["spinning"])])]),_:1})}}});const We=ee(ue,[["__scopeId","data-v-01809f37"]]);export{We as default};
//# sourceMappingURL=infoarchiveCreate-bc44839e.js.map