var He=Object.defineProperty;var $=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var Q=(_,b,f)=>b in _?He(_,b,{enumerable:!0,configurable:!0,writable:!0,value:f}):_[b]=f,J=(_,b)=>{for(var f in b||(b={}))qe.call(b,f)&&Q(_,f,b[f]);if($)for(var f of $(b))Re.call(b,f)&&Q(_,f,b[f]);return _};var w=(_,b,f)=>new Promise((S,v)=>{var H=I=>{try{h(f.next(I))}catch(m){v(m)}},a=I=>{try{h(f.throw(I))}catch(m){v(m)}},h=I=>I.done?S(I.value):Promise.resolve(I.value).then(H,a);h((f=f.apply(_,b)).next())});import{d as Pe,J as O,k as D,r as z,e as Be,o as Ae,al as g,Z as k,a9 as T,aa as l,$ as R,f as t,ac as Y,v as c,A as p,u as U,ag as Ee,E as Oe,ad as ze}from"./vue-71d1abb3.js";import{b as Ve,a0 as Fe,ak as je,aD as Ke,av as Le,aC as We,a7 as $e,at as Z,aB as Qe,_ as Je}from"./index.js";import{B as Ze}from"./BasicTable-0434a334.js";import{T as Ge}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as Xe}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{B as ea}from"./BillTitle-d17ab3e4.js";import{_ as aa}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{U as ta}from"./UploadBox-636ecf02.js";import{W as sa}from"./WfApproveBox-a3448232.js";import{r as la,d as oa,f as na,a as ra,h as ia,i as da,j as ua}from"./secondWorkTicket.data-ab87c6fc.js";import{x as G}from"./index-66d20ba6.js";import ma from"./CustomPrint-6ef48b80.js";import{a as V}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";import"./useRender-21ce56fb.js";import"./print-a0e9f882.js";const ca={class:"load"},pa={class:"process-box"},fa={class:"header-box"},ba={class:"content"},va=Pe({__name:"create",setup(_){const{t:b}=Ve(),f=Fe(),S=O(f.getUserInfo),v=je.getInstance().getQuery(),H=D(),a=z({spinning:!1,status:0}),h=D([]),I=z({subject:"电气第二种工作票申请"}),m=D(!0),u=z({head:{show:!1,disabled:!0},stationMember:{show:!1,disabled:!0},manager:{show:!1,disabled:!0}}),F=D(""),X=D(v.processInstanceId?void 0:"second-work-ticket"),ee=Be(()=>!u.stationMember.disabled||!u.manager.disabled?"before":"default"),ae=(s,e)=>{const n=e.replace("before","").toLowerCase();j(s,n)},te=(s,e,n)=>n!=="agree"?!0:!u.stationMember.disabled&&!L(s.opendTime,s.opstartTime)?(x("请确认实际工作开始时间和结束时间。"),!1):!0,se=()=>{K("save",0)},j=(s,e)=>w(this,null,function*(){const n=H.value;if(!n)return;if(e==="submit"||e==="agree"){let i=!0;if(yield n.validateFields().catch(C=>{var M;console.log("onSubmit=》error",C);const y=C.errorFields;if((M=document.querySelector(".ant-form-item-has-error"))==null||M.scrollIntoView({behavior:"smooth",block:"center"}),y&&y.length>0){x(y[0].errors[0]),i=!1;return}}),!i)return;const d=O(a);if(!L(d.endTime,d.startTime)){x("请确认计划工作开始时间和结束时间。");return}if(!te(d,s,e))return}K(e,e?null:1)}),K=(s,e)=>w(this,null,function*(){a.spinning=!0;try{yield le(s,e)}catch(n){a.spinning=!1,console.log("error",n)}}),le=(s,e)=>w(this,null,function*(){Ce(["Id","Name"]);const n=O(a);e!=null&&e>-1&&(n.status=e);const r=A("Record");e===1&&r.forEach(i=>{if(!G.trim(i.title)){const d="工作任务，工作地点及设备名称不能为空";throw x(d),new Error(d)}if(!G.trim(i.content)){const d="工作任务，工作内容不能为空";throw x(d),new Error(d)}}),n.recordList=r,yield na(n).then(i=>{a.id=i.result,e===1&&(m.value=!0),a.spinning=!1,F.value=s,(e===0||e===1)&&ne("操作成功"),oe(e)}).catch(()=>{a.spinning=!1})}),oe=s=>{(s===0||s===1)&&setTimeout(()=>{s===1&&We(),$e.getInstance().sendMsg("second-work-ticket",{})},200)},L=(s,e)=>{let n=new Date(Date.parse(s)),r=new Date(Date.parse(e));return n>r},x=s=>{a.spinning=!1,Z.getInstance().error(s)},ne=s=>{Z.getInstance().success(s)},P=s=>{const e=J({},a.processVariable),n=e.taskDefinitionKey===s&&e.assigneeId.indexOf(S.userId)>-1&&e.status===1,r=s.replace("Node","");u[r].disabled=!n},re=()=>{const s=a.taskInstances;s!=null&&s.length&&s.forEach(e=>{e.taskDefinitionKey==="headNode"&&(u.head.show=!0),e.taskDefinitionKey==="stationMemberNode"&&(u.stationMember.show=!0),e.taskDefinitionKey==="managerNode"&&(u.manager.show=!0)}),(a.status===2||a.status===3||a.status===5)&&(u.head.show=!0,u.stationMember.show=!0,u.manager.show=!0)},ie=()=>{P("headNode"),P("stationMemberNode"),P("managerNode");const s=(a.status===0||a.status===6)&&(!a.personMemberId||a.personMemberId.indexOf(S.userId)>-1);m.value=!s,re()},de=()=>w(this,null,function*(){var e;const s=yield ra({id:v.id});if(s.result){V(a,s.result),a.status=Number(a.status),Me(["Id","Name"]),m.value=a.status!=0,a.processInstanceId=(e=a.processVariable)==null?void 0:e.processInstanceId,a.processInstanceId||(a.processInstanceId=v.processInstanceId);const{billCode:n,fillinDate:r,personMemberName:i,deptName:d}=s.result;Object.assign(I,{billCode:n,fillinDate:r,personMemberName:i,deptName:d}),ie()}}),ue=s=>w(this,null,function*(){const e=yield W();return{ticketId:s.ticketId?s.ticketId:e}}),B=D(),[me,{setProps:ce,getDataSource:pe}]=Xe(V({dataSource:B,columns:la},oa)),fe=()=>w(this,null,function*(){const s=yield ue({}),e=yield ia(s);B.value=e.result});function be(s){ve({},s)}function A(s){return s==="Record"?pe():[]}function ve(s,e){A(e).push(ge(s))}function ge(s){return s.editable=!0,s.isNew=!0,s.key=`${Date.now()}`,s}function _e(s,e){const n=A(e);let r=n.indexOf(s);r!==-1&&n.splice(r,1)}function Ie(s,e){a.teamsNames=e.map(n=>n.label)}function we(s,e){a.performHeadName=e.label}function he(s,e){a.licensorName=e.label}function ye(s,e){a.performTeamNames=e.map(n=>n.label)}function De(){da("?stationId="+a.stationId).then(s=>{s.result&&s.result.length>0&&s.result.forEach(e=>{h.value.push({value:e.userId,label:e.name})})})}function Ce(s){s.forEach(e=>{D(["teams","performTeam"]).value.forEach(r=>{const i=a[r+e+"s"];i&&i.length>0&&(a[r+e]=i.join(","))})})}function Me(s){s.forEach(e=>{D(["teams","performTeam"]).value.forEach(r=>{const i=a[r+e];i&&(a[r+e+"s"]=i.split(","))})})}const ke=()=>w(this,null,function*(){const s=yield ua({});s.result&&s.result.user&&(a.headId=s.result.user.id,a.headName=s.result.user.name)}),W=()=>w(this,null,function*(){let s=v.id;if(!s&&v.processInstanceId){const n=(yield Qe(v.processInstanceId)).businessKey;v.id=n,s=n}return s}),Te=s=>({width:80,title:"操作",dataIndex:"action",ifShow:s}),Ye=()=>{ce({actionColumn:Te(!m.value)})};return Ae(()=>w(this,null,function*(){v.id=yield W(),yield de(),v.id||(V(a,v),m.value=!1,a.bizFileId=Ke(),yield ke()),Ye(),De(),fe()})),(s,e)=>{const n=g("a-input"),r=g("a-form-item"),i=g("a-col"),d=g("a-row"),C=g("a-select"),y=g("a-date-picker"),M=g("a-textarea"),q=g("a-card"),xe=g("a-button"),Ne=g("a-form"),Ue=g("a-spin"),Se=g("PageWrapper");return k(),T(Se,{detail:!0,dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"fix-detail-page",style:{position:"relative"}},{default:l(()=>[R("div",ca,[t(Ue,{spinning:a.spinning,tip:"Loading..."},{default:l(()=>[R("div",pa,[R("div",fa,[t(ea,{options:I},null,8,["options"]),t(sa,{onSave:se,onSubmit:j,onBefore:ae,processInstanceId:a.processInstanceId,processStatus:a.status,mode:ee.value,businessStatus:F.value,listenMessage:X.value},null,8,["processInstanceId","processStatus","mode","businessStatus","listenMessage"]),a.status==2?(k(),T(ma,{key:0,path:"secondWorkTicket",params:{base:a,recordDetails:B.value}},null,8,["params"])):Y("",!0)]),R("div",ba,[t(Ne,{ref_key:"formRef",ref:H,model:a,labelAlign:"right",autocomplete:"off"},{default:l(()=>[t(q,{title:"基本信息",bordered:!1},{default:l(()=>[t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"stationName",label:"电站名称",labelCol:{class:"detail-label-8"}},{default:l(()=>[t(n,{value:a.stationName,"onUpdate:value":e[0]||(e[0]=o=>a.stationName=o),disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),c(t(i,{span:12},{default:l(()=>[t(r,{name:"ticketNumber",label:"工作票号",labelCol:{class:"detail-label-8"}},{default:l(()=>[t(n,{value:a.ticketNumber,"onUpdate:value":e[1]||(e[1]=o=>a.ticketNumber=o),disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"headName",label:"工作负责人",labelCol:{class:"detail-label-8"},rules:[{required:!1}]},{default:l(()=>[t(n,{value:a.headName,"onUpdate:value":e[2]||(e[2]=o=>a.headName=o),disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),c(t(i,{span:12},{default:l(()=>[t(r,{name:"teamsIds",label:"班组成员(内)",labelCol:{class:"detail-label-8"},rules:[{required:!1}]},{default:l(()=>[t(C,{value:a.teamsIds,"onUpdate:value":e[3]||(e[3]=o=>a.teamsIds=o),"show-search":"","allow-clear":"",mode:"multiple",style:{width:"100%"},options:h.value,onChange:Ie,disabled:m.value},null,8,["value","options","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"outTeams",label:"班组成员(外)",labelCol:{class:"detail-label-8"},rules:[{required:!1}]},{default:l(()=>[t(n,{value:a.outTeams,"onUpdate:value":e[4]||(e[4]=o=>a.outTeams=o),maxlength:256,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:24},{default:l(()=>[t(r,{name:"subject",label:"电站设备名称",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请输入电站设备名称"}]},{default:l(()=>[t(n,{value:a.subject,"onUpdate:value":e[5]||(e[5]=o=>a.subject=o),maxlength:100,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"startTime",label:"计划工作开始时间",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请输入计划工作开始时间"}]},{default:l(()=>[t(y,{value:a.startTime,"onUpdate:value":e[6]||(e[6]=o=>a.startTime=o),"show-time":"",format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm",style:"width: 100%",disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]]),c(t(i,{span:12},{default:l(()=>[t(r,{name:"endTime",label:"计划工作结束时间",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请输入计划工作结束时间"}]},{default:l(()=>[t(y,{value:a.endTime,"onUpdate:value":e[7]||(e[7]=o=>a.endTime=o),"show-time":"",format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm",style:"width: 100%",disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:24},{default:l(()=>[t(r,{name:"workCondition",label:"工作条件",labelCol:{class:"detail-label-8"},rules:[{required:!1}]},{default:l(()=>[t(M,{value:a.workCondition,"onUpdate:value":e[8]||(e[8]=o=>a.workCondition=o),"show-count":"",rows:4,maxlength:1e3,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,null,{default:l(()=>[c(t(i,{span:24},{default:l(()=>[t(r,{name:"attention",label:"注意事项(安全措施)",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请输入注意事项(安全措施)"}]},{default:l(()=>[t(M,{value:a.attention,"onUpdate:value":e[9]||(e[9]=o=>a.attention=o),"show-count":"",rows:4,maxlength:1e3,disabled:m.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1})]),_:1}),t(q,{bordered:!1},{default:l(()=>[t(U(Ze),{title:"工作任务",onRegister:U(me)},Ee({bodyCell:l(({column:o,record:N})=>[o.dataIndex==="title"?(k(),T(n,{key:0,value:N[o.dataIndex],"onUpdate:value":E=>N[o.dataIndex]=E,maxlength:1e3,disabled:m.value},null,8,["value","onUpdate:value","disabled"])):Y("",!0),o.dataIndex==="content"?(k(),T(n,{key:1,value:N[o.dataIndex],"onUpdate:value":E=>N[o.dataIndex]=E,maxlength:1e3,disabled:m.value},null,8,["value","onUpdate:value","disabled"])):Y("",!0),o.dataIndex==="action"?(k(),T(U(Ge),{key:2,actions:[{tooltip:"删除",color:"error",icon:"ant-design:delete-outlined",ifShow:!m.value,onClick:_e.bind(null,N,"Record")}]},null,8,["actions"])):Y("",!0)]),_:2},[m.value?void 0:{name:"toolbar",fn:l(()=>[t(xe,{type:"primary",preIcon:U(Le).ADD,onClick:e[10]||(e[10]=o=>be("Record"))},{default:l(()=>[Oe(ze(U(b)("common.action.create")),1)]),_:1},8,["preIcon"])]),key:"0"}]),1032,["onRegister"])]),_:1}),u.stationMember.show?(k(),T(q,{key:0,title:"执行归档",bordered:!1},{default:l(()=>[t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"performHeadId",label:"执行负责人",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请选择执行负责人"}]},{default:l(()=>[t(C,{value:a.performHeadId,"onUpdate:value":e[11]||(e[11]=o=>a.performHeadId=o),"show-search":"","allow-clear":"",style:{width:"100%"},options:h.value,onChange:we,disabled:u.stationMember.disabled},null,8,["value","options","disabled"])]),_:1})]),_:1},512),[[p,!0]]),c(t(i,{span:12},{default:l(()=>[t(r,{name:"licensorId",label:"工作许可人",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请选择工作许可人"}]},{default:l(()=>[t(C,{value:a.licensorId,"onUpdate:value":e[12]||(e[12]=o=>a.licensorId=o),"show-search":"","allow-clear":"",style:{width:"100%"},options:h.value,onChange:he,disabled:u.stationMember.disabled},null,8,["value","options","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"performTeamIds",label:"执行班组",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请选择执行班组"}]},{default:l(()=>[t(C,{value:a.performTeamIds,"onUpdate:value":e[13]||(e[13]=o=>a.performTeamIds=o),"show-search":"","allow-clear":"",mode:"multiple",style:{width:"100%"},options:h.value,onChange:ye,disabled:u.stationMember.disabled},null,8,["value","options","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"opstartTime",label:"实际工作开始时间",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请输入实际工作开始时间"}]},{default:l(()=>[t(y,{value:a.opstartTime,"onUpdate:value":e[14]||(e[14]=o=>a.opstartTime=o),"show-time":"",format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm",style:"width: 100%",disabled:u.stationMember.disabled},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]]),c(t(i,{span:12},{default:l(()=>[t(r,{name:"opendTime",label:"实际工作结束时间",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请输入实际工作结束时间"}]},{default:l(()=>[t(y,{value:a.opendTime,"onUpdate:value":e[15]||(e[15]=o=>a.opendTime=o),"show-time":"",format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm",style:"width: 100%",disabled:u.stationMember.disabled},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:24},{default:l(()=>[t(r,{name:"performRemarks",label:"归档说明",labelCol:{class:"detail-label-8"},rules:[{required:!1}]},{default:l(()=>[t(M,{value:a.performRemarks,"onUpdate:value":e[16]||(e[16]=o=>a.performRemarks=o),"show-count":"",rows:4,maxlength:1e3,disabled:u.stationMember.disabled},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(ta,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"secondworkticket",vmode:u.stationMember.disabled?"view":"box",bizId:a.bizFileId},null,8,["vmode","bizId"])]),_:1})):Y("",!0),u.manager.show?(k(),T(q,{key:1,title:"合格性检查",bordered:!1},{default:l(()=>[t(d,{gutter:32},{default:l(()=>[c(t(i,{span:12},{default:l(()=>[t(r,{name:"result",label:"检查结论",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请选择检查结论"}]},{default:l(()=>[t(aa,{value:a.result,"onUpdate:value":e[17]||(e[17]=o=>a.result=o),type:"inspection_conclusion",disabled:u.manager.disabled},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]]),c(t(i,{span:12},{default:l(()=>[t(r,{name:"checkTime",label:"检查时间",labelCol:{class:"detail-label-8"},rules:[{required:!0,message:"请输入检查时间"}]},{default:l(()=>[t(y,{value:a.checkTime,"onUpdate:value":e[18]||(e[18]=o=>a.checkTime=o),"show-time":"",format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm",style:"width: 100%",disabled:u.manager.disabled},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1}),t(d,{gutter:32},{default:l(()=>[c(t(i,{span:24},{default:l(()=>[t(r,{name:"illustrate",label:"验证说明",labelCol:{class:"detail-label-8"},rules:[{required:!1}]},{default:l(()=>[t(M,{value:a.illustrate,"onUpdate:value":e[19]||(e[19]=o=>a.illustrate=o),"show-count":"",rows:4,maxlength:1e3,disabled:u.manager.disabled},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1})]),_:1})):Y("",!0)]),_:1},8,["model"])])])]),_:1},8,["spinning"])])]),_:1})}}});const Xa=Je(va,[["__scopeId","data-v-c98d4992"]]);export{Xa as default};
//# sourceMappingURL=create-03e4ad55.js.map