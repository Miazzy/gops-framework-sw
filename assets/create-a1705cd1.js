var P=(m,f,I)=>new Promise((p,b)=>{var N=h=>{try{D(I.next(h))}catch(C){b(C)}},w=h=>{try{D(I.throw(h))}catch(C){b(C)}},D=h=>h.done?p(h.value):Promise.resolve(h.value).then(N,w);D((I=I.apply(m,f)).next())});import{P as _e}from"./index-20519caf.js";import{a5 as q,a0 as S,aj as Ie,aB as ye,aD as Ne,at as Z,aC as we,a7 as Ce,_ as xe}from"./index.js";import{O as G}from"./OrganDialog-dd1023ce.js";import{_ as Ue}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{B as De}from"./BillTitle-d17ab3e4.js";import{W as ke}from"./WfApproveBox-a3448232.js";import{T as Ye}from"./index-aadc7f51.js";import{U as Ke}from"./UploadBox-636ecf02.js";import{K as Me}from"./antd-15ac76ed.js";import{d as Se,J as qe,k as g,r as H,e as Fe,o as Te,al as v,x as Oe,Z as y,a9 as Q,aa as l,$ as R,f as t,v as je,_ as k,u as V,ac as E,E as Y,a6 as X,F as ee,ae as Be,ad as ze}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./Dialog-0a006d82.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./BasicTable-0434a334.js";import"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-f4fc48e6.js";import"./index-316f6ffb.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./uniqBy-92d3bc7f.js";import"./index-085d06c7.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useTable-109483b3.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";function Pe(m){return q.get({url:"/oa/official-doc-release/get",params:m})}function He(m){return q.post({url:"/oa/official-doc-release/create",params:m})}function ae(m){return q.post({url:"/system/org/list-tree",params:m})}function Re(m){return q.get({url:"/oa/infoKind/getInfoKindByCodePreAndOrgId",params:m})}const Ve=(m,f,I=0)=>{if(f&&f.errorFields)try{let p=null;if(f.errorFields.length>I?p=f.errorFields[I]:f.errorFields.length>2?p=f.errorFields[2]:f.errorFields.length>1?p=f.errorFields[1]:f.errorFields.length>0&&(p=f.errorFields[0]),Reflect.has(p,"name")){const b=p.name;m==null||m.scrollToField(b[0])}}catch(p){}},Ee={class:"load"},Ae={class:"process-box"},Le={class:"header-box"},We={class:"content"},$e={key:0,style:{float:"left",width:"10%"}},Je={key:0,style:{float:"left",width:"10%"}},Ze=Se({__name:"create",setup(m){const f=S(),I=qe(f.getUserInfo),p=g(!1),b=g(!1),N=g(!0);let{params:w}=Ie();const D=g(!1),h=g(),C=g(),A=g(),F=g(),L=g(""),T=g(""),O=H([]),W=H({subject:"公文发布"}),$=g(),u=Fe(()=>typeof e.status=="undefined"||e.status===0&&e.personMemberId===""?!1:e.status!=0||e.status==0&&e.personMemberId!=""&&e.personMemberId.substring(0,32)!=I.userId),e=H({id:w.id||"",handler:[],receiver:[],spinning:!1,personMemberId:""}),te=(r,a)=>{e.infoKindId=r,e.infoKindName=a.label},j=()=>{e.spinning=!0,He(e).then(r=>{r.result!=""?(e.id=r.result,Z.getInstance().success(e.status==1?"提交成功":"保存成功"),e.status==1&&setTimeout(()=>{we(),Ce.getInstance().sendMsg("office-doc",{})},100)):(N.value=!1,e.status=0,Z.getInstance().error("保存失败.")),e.spinning=!1}).catch(r=>{N.value=!1,e.status=0,e.spinning=!1,console.log(r)})},le=()=>{p.value=!0},re=()=>{e.receiver=[],e.receiverName=""},ne=()=>{b.value=!0},se=()=>{e.handler=[],e.handlerName=""},oe=()=>{p.value=!1},ie=(r,a)=>{p.value=!1,r&&r.length>0?(e.receiver=[],r.forEach(o=>{e.receiver.push({orgUnitId:o.value,name:o.label,value:o.value,label:o.label})})):e.receiver=[],e.receiverName=e.receiver.map(o=>o.name).join(",")},de=()=>{b.value=!1},ue=(r,a)=>{b.value=!1,r&&r.length>0?(e.handler=[],r.forEach(o=>{e.handler.push({orgUnitId:o.value,name:o.label,value:o.value,label:o.label})})):e.handler=[],e.handlerName=e.handler.map(o=>o.name).join(",")},B={handleAgree:r=>{console.log("同意",r)},handleSave:r=>{console.log("保存",r),N.value=!1,e.status=0,j()},handleSubmit:r=>{console.log("提交",r),N.value=!0,e.status=1;const a=$.value;a&&a.validateFields().then(()=>{j()}).catch(o=>{e.status=0,Ve(a,o)})}},pe=(r,a)=>{e.drafterName=a[0],e.drafterId=r},me=(r,a)=>{e.proofreaderName=a[0],e.proofreaderId=r},fe=(r,a)=>{e.responsibleDeptName=a[0],e.responsibleDeptId=r},ce=()=>P(this,null,function*(){const r=yield ae({orgId:T.value,orgKindIds:"ogn,dpt,pos,psm",showPosition:!0,status:1});C.value=J(r.result),F.value=K(r.result,["psm"]);const a=yield ae({orgId:"",orgKindIds:"ogn,dpt,pos,psm",showPosition:!0,status:1});h.value=K(a.result,["psm","dpt","ogn"]),A.value=K(a.result,["psm"])});function J(r){const a=[];for(let o=0;o<r.length;o++){const s=r[o];if(s.orgKindId==="psm"||s.orgKindId==="pos")continue;const i={label:s.name,value:s.id,orgId:s.orgId,parent_node:s.parent_node,parentId:s.parentId,disabled:!1};s.children&&s.children.length>0&&(i.children=J(s.children)),a.push(i)}return a}function K(r,a){const o=[];for(let s=0;s<r.length;s++){const i=r[s],x={label:i.name,value:i.id,orgId:i.orgId,parent_node:i.parent_node,parentId:i.parentId,disabled:a.indexOf(i.orgKindId)==-1};i.children&&i.children.length>0&&(x.children=K(i.children,a)),o.push(x)}return o}return Te(()=>P(this,null,function*(){if(L.value=w.processInstanceId,!e.id&&w.processInstanceId){const r=yield ye(w.processInstanceId);e.id=r.businessKey}yield Pe({id:e.id}).then(r=>{let a=r.result;if(e.id){for(let d in a)e[d]=a[d];e.dispatchYear=e.dispatchYear+"",e.status=Number(e.status),T.value=a.organId,a.receiver&&(e.receiver=[],a.receiver.forEach(d=>{e.receiver.push({value:d.orgUnitId,label:d.orgUnitName,orgUnitId:d.orgUnitId,name:d.orgUnitName})}),e.receiverName=e.receiver.map(d=>d.name).join(",")),a.handler&&(e.handler=[],a.handler.forEach(d=>{e.handler.push({value:d.orgUnitId,label:d.orgUnitName,orgUnitId:d.orgUnitId,name:d.orgUnitName})}),e.handlerName=e.handler.map(d=>d.name).join(","))}else{e.billCode=a.billCode,e.personMemberName=a.personMemberName,e.deptName=a.deptName,e.fillinDate=a.fillinDate,e.bizFileId=Ne(),e.status=0,e.dispatchYear=Me().format("YYYY");const U=S().userInfo.orgs;let c=U.filter(_=>_.isMainOrg==1)[0];c==null&&(c=U[0]),e.organName=c.orgName,e.organId=c.orgId,e.drafterId=c.id,e.drafterName=c.name,e.responsibleDeptName=c.deptName,e.responsibleDeptId=c.deptId,T.value=c.orgId}if(e.status==0){ce();let c=S().userInfo.orgs.map(_=>_.orgId);Re({type:"infoKind",codePre:"01",orgId:c.join(",")}).then(_=>{_.result.forEach(M=>{O.push({value:M.id,label:M.name})})})}else O.push({value:e.infoKindId,label:e.infoKindName});let{billCode:o,fillinDate:s,personMemberName:i,deptName:x}=a;Object.assign(W,{billCode:o,fillinDate:s,personMemberName:i,deptName:x})})})),(r,a)=>{const o=v("a-input"),s=v("a-form-item"),i=v("a-col"),x=v("a-select"),d=v("a-tree-select"),U=v("a-date-picker"),c=v("a-input-number"),_=v("a-button"),M=v("a-textarea"),ve=v("a-row"),z=v("a-card"),ge=v("a-form"),be=v("a-spin"),he=Oe("global-disabled");return y(),Q(V(_e),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:l(()=>[R("div",Ee,[t(be,{spinning:e.spinning,tip:"Loading..."},{default:l(()=>[R("div",Ae,[R("div",Le,[t(De,{options:W},null,8,["options"]),t(ke,{onAgree:B.handleAgree,onSave:B.handleSave,onSubmit:B.handleSubmit,processInstanceId:L.value,processStatus:e.status,listenMessage:"office-doc"},null,8,["onAgree","onSave","onSubmit","processInstanceId","processStatus"])]),je((y(),k("div",We,[t(ge,{model:e,name:"basic",ref_key:"formRef",ref:$,autocomplete:"off",onFinish:j},{default:l(()=>[t(z,{title:"基本信息",bordered:!1},{default:l(()=>[t(ve,{gutter:24},{default:l(()=>[V(S)().isMultiOrganization?(y(),Q(i,{key:0,span:12},{default:l(()=>[t(s,{label:"所在公司",name:"infoKindId",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:l(()=>[t(o,{value:e.organName,"onUpdate:value":a[0]||(a[0]=n=>e.organName=n),disabled:"true"},null,8,["value"])]),_:1})]),_:1})):E("",!0),t(i,{span:12},{default:l(()=>[t(s,{label:"所在部门",name:"deptName",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:l(()=>[t(o,{value:e.deptName,"onUpdate:value":a[1]||(a[1]=n=>e.deptName=n),disabled:"true"},null,8,["value"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"发起人",name:"personMemberName",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:l(()=>[t(o,{value:e.personMemberName,"onUpdate:value":a[2]||(a[2]=n=>e.personMemberName=n),disabled:"true"},null,8,["value"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"信息类型",name:"infoKindId",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"信息类型不能为空"}]},{default:l(()=>[t(x,{value:e.infoKindId,"onUpdate:value":a[3]||(a[3]=n=>e.infoKindId=n),"allow-clear":"",options:O,disabled:u.value,onChange:te},null,8,["value","options","disabled"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"发文分类",name:"dispatchKindId",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"发文分类不能为空"}]},{default:l(()=>[t(Ue,{value:e.dispatchKindId,"onUpdate:value":a[4]||(a[4]=n=>e.dispatchKindId=n),type:"dispatch_kind",disabled:u.value,style:"width: 100%"},null,8,["value","disabled"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"拟稿人",name:"drafterName",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"拟稿人不能为空"}]},{default:l(()=>[t(d,{value:e.drafterName,"onUpdate:value":a[5]||(a[5]=n=>e.drafterName=n),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-default-expand-all":"","tree-data":F.value,"tree-node-filter-prop":"label",onChange:pe,disabled:u.value},null,8,["value","tree-data","disabled"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"主办单位",name:"organizerName",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"主办单位不能为空"}]},{default:l(()=>[t(o,{value:e.organizerName,"onUpdate:value":a[6]||(a[6]=n=>e.organizerName=n),disabled:u.value,maxlength:"32"},null,8,["value","disabled"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"发文年份",name:"dispatchYear",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"发文年份不能为空"}]},{default:l(()=>[t(U,{value:e.dispatchYear,"onUpdate:value":a[7]||(a[7]=n=>e.dispatchYear=n),style:{width:"100%"},picker:"year","value-format":"YYYY",format:"YYYY",disabled:u.value},null,8,["value","disabled"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"发文编号",name:"dispatchSequence",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"发文编号不能为空"}]},{default:l(()=>[t(c,{value:e.dispatchSequence,"onUpdate:value":a[8]||(a[8]=n=>e.dispatchSequence=n),min:0,max:9999,disabled:"true"},null,8,["value"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"生效日期",name:"effectiveTime",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"生效日期不能为空"}]},{default:l(()=>[t(U,{value:e.effectiveTime,"onUpdate:value":a[9]||(a[9]=n=>e.effectiveTime=n),valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD",style:{width:"100%"},disabled:u.value},null,8,["value","disabled"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"校对人",name:"proofreaderName",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"校对人不能为空"}]},{default:l(()=>[t(d,{value:e.proofreaderName,"onUpdate:value":a[10]||(a[10]=n=>e.proofreaderName=n),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-default-expand-all":"","tree-data":F.value,"tree-node-filter-prop":"label",onChange:me,disabled:u.value},null,8,["value","tree-data","disabled"])]),_:1})]),_:1}),t(i,{span:12},{default:l(()=>[t(s,{label:"责任部门",name:"responsibleDeptName",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"责任部门不能为空"}]},{default:l(()=>[t(d,{value:e.responsibleDeptName,"onUpdate:value":a[11]||(a[11]=n=>e.responsibleDeptName=n),"show-search":"",style:{width:"100%"},"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-default-expand-all":"","tree-data":C.value,"tree-node-filter-prop":"label",onChange:fe,disabled:u.value},null,8,["value","tree-data","disabled"])]),_:1})]),_:1}),t(i,{span:24},{default:l(()=>[t(s,{label:"接收范围",name:"receiver",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"接收范围不能为空"}]},{default:l(()=>[u.value?E("",!0):(y(),k("div",$e,[t(_,{type:"link",onClick:le},{default:l(()=>[Y("选择")]),_:1}),t(_,{type:"link",onClick:re},{default:l(()=>[Y("清空")]),_:1})])),t(o,{value:e.receiverName,"onUpdate:value":a[12]||(a[12]=n=>e.receiverName=n),disabled:"true",style:X({width:u.value?"100%":"90%"})},null,8,["value","style"])]),_:1})]),_:1}),t(i,{span:24},{default:l(()=>[t(s,{label:"审批人",name:"handler",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"审批人不能为空"}]},{default:l(()=>[u.value?E("",!0):(y(),k("div",Je,[t(_,{type:"link",onClick:ne},{default:l(()=>[Y("选择")]),_:1}),t(_,{type:"link",onClick:se},{default:l(()=>[Y("清空")]),_:1})])),t(o,{value:e.handlerName,"onUpdate:value":a[13]||(a[13]=n=>e.handlerName=n),disabled:"true",style:X({width:u.value?"100%":"90%"})},null,8,["value","style"])]),_:1})]),_:1}),t(i,{span:24},{default:l(()=>[t(s,{label:"发文主题",name:"subject",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"发文主题不能为空"}]},{default:l(()=>[t(o,{value:e.subject,"onUpdate:value":a[14]||(a[14]=n=>e.subject=n),disabled:u.value,maxlength:"128"},null,8,["value","disabled"])]),_:1})]),_:1}),t(i,{span:24},{default:l(()=>[t(s,{label:"发文说明",name:"remarks",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"发文说明不能为空"}]},{default:l(()=>[t(M,{rows:3,value:e.remarks,"onUpdate:value":a[15]||(a[15]=n=>e.remarks=n),placeholder:"1000字以内",maxlength:1e3,disabled:u.value,"show-count":""},null,8,["value","disabled"])]),_:1})]),_:1})]),_:1})]),_:1}),t(z,{title:"正文",bordered:!1},{default:l(()=>[t(V(Ye),{class:"tinymce-comp-content",modelValue:e.content,"onUpdate:modelValue":a[16]||(a[16]=n=>e.content=n),width:"calc(100% - 3.5rem)",height:300,maxChars:2e4,disabled:u.value},null,8,["modelValue","width","disabled"])]),_:1}),t(z,{title:"附件上传",bordered:!1},{default:l(()=>[t(Ke,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"oa",module:"officedoc",vmode:u.value?"view":"box",bizId:e.bizFileId},null,8,["vmode","bizId"])]),_:1})]),_:1},8,["model"])])),[[he,D.value]]),t(G,{title:"选择接收范围",visible:p.value,"onUpdate:visible":a[17]||(a[17]=n=>p.value=n),value:e.receiver,tdata:h.value,tfields:{key:"value",title:"label"},width:800,height:600,onCancel:oe,onConfirm:ie},null,8,["visible","value","tdata"]),t(G,{title:"选择审批人",visible:b.value,"onUpdate:visible":a[18]||(a[18]=n=>b.value=n),value:e.handler,tdata:A.value,tfields:{key:"value",title:"label"},width:800,height:600,onCancel:de,onConfirm:ue},null,8,["visible","value","tdata"]),(y(!0),k(ee,null,Be(e.handlerBackList,n=>(y(),k(ee,null,[Y(ze(n.title+","+n.value),1)],64))),256))])]),_:1},8,["spinning"])])]),_:1})}}});const Ka=xe(Ze,[["__scopeId","data-v-f7a08ebe"]]);export{Ka as default};
//# sourceMappingURL=create-a1705cd1.js.map