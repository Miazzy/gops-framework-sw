var M=(i,T,I)=>new Promise((_,c)=>{var D=d=>{try{v(I.next(d))}catch(e){c(e)}},S=d=>{try{v(I.throw(d))}catch(e){c(e)}},v=d=>d.done?_(d.value):Promise.resolve(d.value).then(D,S);v((I=I.apply(i,T)).next())});import{P as pe}from"./index-20519caf.js";import{a5 as C,a0 as me,aj as fe,aB as he,aD as P,av as E,at as x,aC as ge,a7 as be,_ as Ie}from"./index.js";import{B as _e}from"./BillTitle-d17ab3e4.js";import{W as ve}from"./WfApproveBox-a3448232.js";import{D as ke}from"./Dialog-0a006d82.js";import{U as j}from"./UploadBox-636ecf02.js";import{B as K}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as H}from"./useTable-109483b3.js";import{K as ye}from"./antd-15ac76ed.js";import{_ as xe}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{d as we,J as Ce,k as w,e as De,r as V,o as Se,al as u,Z as F,a9 as U,aa as l,$ as b,f as a,u as m,ag as Ne,ac as W,E as L,aG as Me,aH as Te}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./OrganDialog-dd1023ce.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";function Re(i){return C.get({url:"/po/safety-tools-check/get",params:i})}function Ye(i){return C.post({url:"/po/safety-tools-check/create",params:i})}function ze(i){return C.get({url:"/po/safety-tools-check/dtl/list?safetyToolsCheckId="+i})}function Be(i){return C.post({url:"/baseset/common/list-stationPerson?stationId="+i})}function Fe(i){return C.get({url:"/po/safety-tools/pageView",params:i})}const Ue=[{title:"工器具编号",dataIndex:"code",align:"left",headAlign:"center",width:120},{title:"工器具名称",dataIndex:"name",align:"left",headAlign:"center",width:120},{title:"规格型号",dataIndex:"specification",align:"left",headAlign:"center",width:120},{title:"检验周期(月)",dataIndex:"checkCycle",align:"right",headAlign:"center",width:120},{slots:{title:"checkResult"},dataIndex:"checkResult",width:160},{title:"下次检验日期",dataIndex:"nextCheckDate",width:120},{slots:{title:"bizFileId"},dataIndex:"bizFileId",width:120}],Ae=[{title:"工器具编号",dataIndex:"code",align:"left",headAlign:"center",width:150},{title:"工器具名称",dataIndex:"name",align:"left",headAlign:"center",width:150},{title:"规格型号",dataIndex:"specification",align:"left",headAlign:"center",width:120},{title:"购买日期",dataIndex:"purchasingDate",width:120},{title:"检验周期(月)",dataIndex:"cycle",align:"right",headAlign:"center",width:120},{title:"下次检验日期",dataIndex:"nextCheckDate",width:120}],$=[{label:"工器具编号",field:"code",component:"Input",colProps:{span:10}},{label:"工器具名称",field:"name",component:"Input",colProps:{span:10}}],G=i=>(Me("data-v-776d71af"),i=i(),Te(),i),Oe={class:"load"},qe={class:"process-box"},Pe={class:"header-box"},Ee={class:"content"},je=G(()=>b("div",{class:"customer_require"},"检验结果",-1)),Ke=G(()=>b("div",{class:"customer_require"},"附件",-1)),He=we({__name:"create",setup(i){const T=me(),I=Ce(T.getUserInfo),_=w(!1),c=De(()=>e.status!=0||e.status==0&&e.personMemberId!=""&&e.personMemberId.substring(0,32)!=I.userId),D=w(),S=w(""),v=w([]);let{params:d}=fe();const e=V({id:d.id||"",status:0,stationOrganId:d.stationOrganId||"",stationOrganName:d.stationOrganName||"",stationId:d.stationId||"",stationName:d.stationName||"",remark:"",billCode:"",personMemberId:"",spinning:!1,fillinDate:"",checkById:"",checkByName:"",inspectionDate:"",checkCompany:"",checkDate:"",checkNum:0,dtl:[],bizFileId:""}),R=()=>{e.spinning=!0,e.dtl=N(),Ye(e).then(s=>{s.result!=""?(e.id=s.result,x.getInstance().success(e.status==1?"提交成功":"保存成功"),e.status==1&&setTimeout(()=>{ge(),be.getInstance().sendMsg("safety-tools-check",{})},100)):(e.status=0,x.getInstance().error("保存失败.")),e.spinning=!1}).catch(s=>{e.spinning=!1,e.status=0,console.log(s)})},A=V({subject:"工器具检验"}),Y={handleAgree:s=>{console.log("同意",s)},handleSave:s=>{console.log("保存",s),e.status=0,R()},handleSubmit:s=>{console.log("提交",s),e.status=1;const t=D.value;t&&t.validateFields().then(()=>{let r=N();if(r.length===0){e.status=0,x.getInstance().error("送检明细与结果不能为空.");return}for(let o=0;o<r.length;o++)if(r[o].checkResult==null||r[o].checkResult==""){e.status=0,x.getInstance().error("检验结果不能为空.");return}R()}).catch(r=>{console.log(r),e.status=0})}},J=()=>{_.value=!0},Z=()=>{te(ee()),se()},[Q,{reload:X,getSelectRowKeys:ee,deleteTableDataRecord:te,setTableData:ae,clearSelectedRowKeys:se,getDataSource:N}]=H({api:()=>M(this,null,function*(){if(e.id){let s=yield ze(e.id);return e.checkNum=s.result.length,s.result}}),bordered:!0,columns:Ue,useSearchForm:!1,showTableSetting:!1,pagination:!1,rowSelection:{type:"checkbox"}}),f=w({name:"",pageNo:1,pageSize:10,usePage:1}),[le,{getSelectRows:oe,getPaginationRef:ne,clearSelectedRowKeys:ie}]=H({title:"",api:()=>M(this,null,function*(){const s=ne();return f.value.pageNo=s.current,f.value.pageSize=s.pageSize,f.value.stationOrganId=e.stationOrganId,f.value.stationId=e.stationId,(yield Fe(f.value)).result}),columns:Ae,formConfig:{labelWidth:120,schemas:$},useSearchForm:!0,showTableSetting:!1,rowSelection:{type:"checkbox"},handleSearchInfoFn(s){f.value.name=s.name,f.value.code=s.code},bordered:!0,maxHeight:343}),de=()=>{let s=oe();if(s.length==0)return x.getInstance().info("请选择指标"),!1;_.value=!1;let t=N()||[],r={};t.forEach(o=>{r[o.safetyToolsId]="1"}),s.forEach(o=>{r[o.id]||t.push({safetyToolsId:o.id,checkCycle:o.cycle,checkResult:null,nextCheckDate:o.nextCheckDate,name:o.name,code:o.code,specification:o.specification,bizFileId:P()})}),ae(t),e.checkNum=t.length,O(),ie()},O=()=>{if(!e.checkDate)return;let s=N();s&&s.forEach(t=>{t.nextCheckDate=ye(e.checkDate).add(t.checkCycle,"month").format("YYYY-MM-DD")})};return Se(()=>M(this,null,function*(){if(S.value=d.processInstanceId,!e.id&&d.processInstanceId){const s=yield he(d.processInstanceId);e.id=s.businessKey}Re({id:e.id}).then(s=>{let t=s.result;if(e.id)for(let h in t)e[h]=t[h];else e.billCode=t.billCode,e.personMemberName=t.personMemberName,e.deptName=t.deptName,e.fillinDate=t.fillinDate,e.bizFileId=P();e.status=Number(e.status);let{billCode:r,fillinDate:o,personMemberName:p,deptName:z}=t;Object.assign(A,{billCode:r,fillinDate:o,personMemberName:p,deptName:z}),Be(e.stationId).then(h=>{let k={};h.result.forEach(g=>{k[g.userId]=g.name});for(let g in k)v.value.push({label:k[g],value:g})}),X()})})),(s,t)=>{const r=u("a-input"),o=u("a-form-item"),p=u("a-col"),z=u("a-select"),h=u("a-date-picker"),k=u("a-textarea"),g=u("a-row"),B=u("a-card"),re=u("a-form"),q=u("a-button"),ce=u("a-spin");return F(),U(m(pe),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:l(()=>[b("div",Oe,[a(ce,{spinning:e.spinning,tip:"Loading..."},{default:l(()=>[b("div",qe,[b("div",Pe,[a(_e,{options:A},null,8,["options"]),a(ve,{processInstanceId:S.value,onAgree:Y.handleAgree,onSave:Y.handleSave,onSubmit:Y.handleSubmit,processStatus:e.status,listenMessage:"safety-tools-check"},null,8,["processInstanceId","onAgree","onSave","onSubmit","processStatus"])]),b("div",Ee,[a(re,{model:e,name:"basic",ref_key:"formRef",ref:D,autocomplete:"off",onFinish:R},{default:l(()=>[a(B,{title:"基本信息",bordered:!1},{default:l(()=>[a(g,{gutter:32},{default:l(()=>[a(p,{span:12},{default:l(()=>[a(o,{label:"电站名称",name:"stationName",labelCol:{style:{width:"124px"}},rules:[{required:!1}]},{default:l(()=>[a(r,{value:e.stationName,"onUpdate:value":t[0]||(t[0]=n=>e.stationName=n),disabled:""},null,8,["value"])]),_:1})]),_:1}),a(p,{span:12},{default:l(()=>[a(o,{label:"送检人",name:"checkById",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"送检人不能为空。"}]},{default:l(()=>[a(z,{value:e.checkById,"onUpdate:value":t[1]||(t[1]=n=>e.checkById=n),allowClear:"",options:v.value,disabled:c.value,onChange:t[2]||(t[2]=(n,y)=>{e.checkById=n,e.checkByName=y.label})},null,8,["value","options","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:l(()=>[a(o,{label:"送检日期",name:"inspectionDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"送检日期不能为空"}]},{default:l(()=>[a(h,{value:e.inspectionDate,"onUpdate:value":t[3]||(t[3]=n=>e.inspectionDate=n),valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD",style:{width:"100%"},disabled:c.value},null,8,["value","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:l(()=>[a(o,{label:"检验单位",name:"checkCompany",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检验单位不能为空"}]},{default:l(()=>[a(r,{value:e.checkCompany,"onUpdate:value":t[4]||(t[4]=n=>e.checkCompany=n),disabled:c.value,maxlength:"128"},null,8,["value","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:l(()=>[a(o,{label:"检验日期",name:"checkDate",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检验日期不能为空"}]},{default:l(()=>[a(h,{value:e.checkDate,"onUpdate:value":t[5]||(t[5]=n=>e.checkDate=n),valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD",style:{width:"100%"},disabled:c.value,onChange:O},null,8,["value","disabled"])]),_:1})]),_:1}),a(p,{span:12},{default:l(()=>[a(o,{label:"检验数量",name:"checkNum",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"检验数量不能为空"}]},{default:l(()=>[a(r,{value:e.checkNum,"onUpdate:value":t[6]||(t[6]=n=>e.checkNum=n),disabled:!0},null,8,["value"])]),_:1})]),_:1}),a(p,{span:24},{default:l(()=>[a(o,{label:"备注",name:"remark",labelCol:{style:{width:"124px"}},rules:[{required:!1,message:"备注"}]},{default:l(()=>[a(k,{value:e.remark,"onUpdate:value":t[7]||(t[7]=n=>e.remark=n),row:"3",disabled:c.value,maxlength:"1024"},null,8,["value","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),a(B,{bordered:!1},{default:l(()=>[a(m(K),{title:" 送检明细与结果",onRegister:m(Q)},Ne({checkResult:l(()=>[je]),bizFileId:l(()=>[Ke]),bodyCell:l(({column:n,record:y})=>[n.dataIndex==="checkResult"?(F(),U(xe,{key:0,style:{width:"100%"},value:y[n.dataIndex],"onUpdate:value":ue=>y[n.dataIndex]=ue,disabled:c.value,type:"safety_tools_check_status"},null,8,["value","onUpdate:value","disabled"])):W("",!0),n.dataIndex==="bizFileId"?(F(),U(j,{key:1,width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"safetytoolscheckdtl",vmode:e.status==0&&!c.value?"box":"view",bizId:y[n.dataIndex]},null,8,["vmode","bizId"])):W("",!0)]),_:2},[e.status==0&&!c.value?{name:"toolbar",fn:l(()=>[a(q,{onClick:J,preIcon:m(E).ADD,style:{"margin-right":"10px"}},{default:l(()=>[L("添加")]),_:1},8,["preIcon"]),a(q,{onClick:Z,preIcon:m(E).DELETE},{default:l(()=>[L("删除")]),_:1},8,["preIcon"])]),key:"0"}:void 0]),1032,["onRegister"])]),_:1}),a(B,{title:"附件上传",bordered:!1},{default:l(()=>[a(j,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"safetytoolscheck",vmode:e.status==0?"box":"view",bizId:e.bizFileId},null,8,["vmode","bizId"])]),_:1})]),b("div",null,[a(ke,{visible:_.value,"onUpdate:visible":t[8]||(t[8]=n=>_.value=n),title:"选择安全工器具",onOk:de,width:1e3,maskClosable:!1},{default:l(()=>[a(m(K),{onRegister:m(le),class:"table-in-dialog",searchInfo:m($)},null,8,["onRegister","searchInfo"])]),_:1},8,["visible"])])])]),_:1},8,["spinning"])])]),_:1})}}});const xt=Ie(He,[["__scopeId","data-v-776d71af"]]);export{xt as default};
//# sourceMappingURL=create-f25bb772.js.map
