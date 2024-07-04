var _=(d,R,T)=>new Promise((z,V)=>{var f=y=>{try{C(T.next(y))}catch(U){V(U)}},S=y=>{try{C(T.throw(y))}catch(U){V(U)}},C=y=>y.done?z(y.value):Promise.resolve(y.value).then(f,S);C((T=T.apply(d,R)).next())});import{d as je,k as p,e as Ze,r as X,o as Je,al as x,Z as K,a9 as M,aa as l,f as a,$ as ve,u as F,_ as ce,F as Xe,ae as ea,E as aa,ad as la,ac as G,v as k,A as P}from"./vue-71d1abb3.js";import{B as ee}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as ae}from"./useTable-109483b3.js";import{aC as ta,a2 as b}from"./antd-15ac76ed.js";import{a5 as w,au as na,bC as sa,at as L,_ as ua}from"./index.js";import{P as oa}from"./index-20519caf.js";import{D as W}from"./Dialog-0a006d82.js";import{_ as j}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{C as ra}from"./CommonTree-c4ed7838.js";import{r as ia}from"./index-6f04a2b9.js";import{m as da}from"./crypto-ca21d37f.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";function pa(){return[{title:"ID",dataIndex:"id",defaultHidden:!0},{title:"类型",dataIndex:"orgKindIdText",resizable:!0,width:80},{title:"编码",dataIndex:"code",sorter:!0,resizable:!0,width:120},{title:"名称",dataIndex:"name",width:200,headAlign:"center",resizable:!0,align:"left"},{title:"证件号码",dataIndex:"certificateNo",width:150,headAlign:"center",resizable:!0,align:"left"},{title:"路径",dataIndex:"fullName",width:300,headAlign:"center",resizable:!0,align:"left"},{title:"排序号",dataIndex:"sort",sorter:!0,resizable:!0,width:100,headAlign:"center",align:"right"},{title:"状态",dataIndex:"statusText",width:80,resizable:!0,align:"center"},{title:"机构",dataIndex:"showOrgName",width:200,resizable:!0,headAlign:"center",align:"left"},{title:"部门",dataIndex:"deptName",width:150,resizable:!0,headAlign:"center",align:"left"},{title:"岗位",dataIndex:"positionName",width:150,resizable:!0,headAlign:"center",align:"left"},{title:"主岗位",dataIndex:"mainPositionName",width:150,resizable:!0,headAlign:"center",align:"left"},{title:"是否虚拟组织",dataIndex:"isVirtualText",resizable:!0,width:90,align:"center"}]}const ma=d=>(d.status=1,w.get({url:"/system/org-type/orgTypelist",params:d},{})),fa=d=>w.post({url:"/system/org/list-tree-ad",params:d},{}),le=d=>w.post({url:"/system/org/page",params:d},{}),be=d=>w.post({url:"/system/org/create",params:d},{}),ye=d=>w.get({url:"/system/org/updateStatus",params:d},{}),ga=d=>w.delete({url:"/system/org/delete?id="+d},{}),va=d=>w.post({url:"/system/org/saveSort",params:d},{}),ca=d=>w.get({url:"/system/user/get?id="+d},{}),ba=()=>w.get({url:"/system/org/getAllUsers"},{}),ya=d=>w.put({url:"/system/user/update-mainOrgId",params:d},{}),Ia=d=>w.post({url:"/system/org/saveAssign",params:d},{}),ha=[{field:"code",component:"Input",label:"组织编码",colProps:{span:10},required:!1},{field:"name",component:"Input",label:"组织名称",colProps:{span:10},required:!1},{field:"showType",component:"CheckboxGroup",label:"展示方式",colProps:{span:10},componentProps:{options:[{label:"显示已禁用组织",value:"showDisableOrg"},{label:"显示所有下级组织",value:"parentFullId"}]}},{field:"orgKindIdList",component:"CheckboxGroup",label:"组织类型",colProps:{span:10},componentProps:{options:[{label:"组织",value:"ogn"},{label:"部门",value:"dpt"},{label:"岗位",value:"pos"},{label:"人员",value:"psm"}]}}],_a={class:"right-table-layout"},xa={class:"dialog-loading"},wa={key:0,class:"dialog-mask"},Ca=je({__name:"index",setup(d){const{createConfirm:R}=na(),T=p([]),z=p("calc(100vh - 262px)"),V=Ze(()=>z.value),f=p({}),S=p(!1),C=p(!1),y=p(!1),U=p(!1),o=p({}),s=X({}),Z=p(""),te=p(),ne=p();let I=p(""),h=X({});const O=p(!1),se=p([]),Ie=(n,e)=>e.label.toLowerCase().indexOf(n.toLowerCase())>=0,he=n=>{n?z.value="calc(100vh - 262px)":z.value="calc(100vh - 222px)"},g=X({}),ue=p([]),B=p("");let _e=pa(),J=p([]);const oe=p("save"),Y=p(""),E=p(!1),re={ogn:"机构",dpt:"部门",pos:"岗位",psm:"人员"},ie=n=>_(this,null,function*(){let e=[];n=="root"?e.push({type:"primary",name:"添加机构",icon:"ant-design:plus-outlined",btnType:"add",parameter:"ogn"}):n=="ogn"?(e.push({type:"primary",name:"添加机构",icon:"ant-design:plus-outlined",btnType:"add",parameter:"ogn"}),e.push({type:"primary",name:"添加部门",icon:"ant-design:plus-outlined",btnType:"add",parameter:"dpt"})):n=="dpt"?(e.push({type:"primary",name:"添加部门",icon:"ant-design:plus-outlined",btnType:"add",parameter:"dpt"}),e.push({type:"primary",name:"添加岗位",icon:"ant-design:plus-outlined",btnType:"add",parameter:"pos"})):n=="pos"&&(e.push({type:"primary",name:"添加人员",icon:"ant-design:plus-outlined",btnType:"add",parameter:"psm"}),e.push({type:"primary",name:"分配人员",icon:"ant-design:plus-outlined",btnType:"assign",parameter:"psm"}),e.push({type:"primary",name:"设置主岗位",icon:"ant-design:setting-outlined",btnType:"setMainPos",parameter:"psm"}),e.push({type:"primary",name:"重置密码",icon:"ant-design:setting-outlined",btnType:"reset",parameter:"psm"}));let u=[{name:"修改",icon:"clarity:note-edit-line",btnType:"update"},{type:"error",name:"删除",icon:"ant-design:delete-outlined",btnType:"delete"},{name:"启用",icon:"ant-design:eye-outlined",btnType:"on"},{name:"禁用",icon:"ant-design:eye-outlined",btnType:"off"},{name:"保存排序号",icon:"ant-design:exception-outlined",btnType:"saveSort"}],c=e.concat(u);T.value=c}),xe=()=>_(this,null,function*(){H();let n=de().getFieldsValue(),e=n.showType,u=!1;g.showDisableOrg=null,g.showVirtual=null,g.parentFullId=null,(e==null?void 0:e.length)>0&&e.forEach(A=>{(A=="showDisableOrg"||A=="showVirtual")&&(u=!0),g[A]=1}),u&&q(),g.parentId=f.value.id,g.orgKindIdList=n.orgKindIdList,g.code=n.code,g.name=n.name,g.deviceName=n.deviceName;const c=Ce();return g.pageNo=c.current,g.pageSize=c.pageSize,(yield le(g)).result}),[we,{reload:N,getForm:de,getDataSource:pe,clearSelectedRowKeys:H,getPaginationRef:Ce}]=ae({title:"组织列表",api:xe,columns:_e,showTableSetting:!1,pagination:{pageSize:20},bordered:!0,rowKey:"id",rowSelection:{type:"radio",fixed:!0,onSelect:Ne},formConfig:{baseColProps:{span:7},labelWidth:120,autoAdvancedLine:1,showAdvancedButton:!1,schemas:ha,autoSubmitOnEnter:!0},useSearchForm:!0,handleSearchInfoFn(n){return n},sortFn:n=>{n.order?(g.sortField=n.field,g.sortOrder=n.order.replace("end","")):(g.sortField="",g.sortOrder="")}});function Se({keys:n,rows:e}){if(e&&e.length>0){const u=e[0];I.value=u.id,h=u}else I.value="",h=null}function Ne(n,e){e?(I.value=n.id,h=n):(I.value="",h=null)}const me=()=>{ba().then(n=>{if(n.result){let e=[];n.result.forEach(u=>{let c={label:u.name,value:u.id};e.push(c)}),se.value=e}})},Fe=(n,e)=>{o.value.typeId=e.value,o.value.code=e.code,o.value.name=e.label,o.value.fullName?o.value.longName=o.value.fullName.substring(0,o.value.fullName.lastIndexOf("/")+1)+e.label:o.value.longName=e.label},Ue=(n,e)=>_(this,null,function*(){if(B.value="",Y.value=e,oe.value=n,n=="add"){if(Z.value="添加组织-"+re[e],e=="ogn"||e=="dpt"||e=="pos"){o.value={isVirtual:"0",sort:1};let u=pe();(u==null?void 0:u.length)>0&&(o.value.sort=u[u.length-1].sort),e=="dpt"&&me(),S.value=!0}else if(e=="psm"){for(let u in s)u=="parentId"||u=="parentFullName"||(s[u]=null);C.value=!0,B.value="添加人员"}}else if(n=="update"){if(I.value==""){L.getInstance().info("请选择一行数据.");return}o.value=h,Z.value="修改组织-"+re[o.value.orgKindId],o.value.orgKindId=="ogn"||o.value.orgKindId=="dpt"||o.value.orgKindId=="pos"?(S.value=!0,o.value.orgKindId=="dpt"&&(Y.value="dpt",me())):o.value.orgKindId=="psm"&&(B.value="修改人员",C.value=!0,s.personMemberId=h.id,s.id=h.personId,ca(s.personMemberId).then(u=>{Object.assign(s,u.result)}))}else n=="delete"?Me():n=="on"?Ve():n=="off"?Be():n=="saveSort"&&Ye();switch(S.value==!0&&(E.value=(n=="update"?o.value.orgKindId:e)=="pos",ma({orgKindId:n=="update"?o.value.orgKindId:e}).then(u=>{J.value=[],u.result.forEach(c=>{J.value.push({value:c.id,code:c.code,label:c.name})})})),n){case"assign":Q.value="",y.value=!0;break;case"setMainPos":if(!h||!h.personId){b.info("请选择人员。");return}U.value=!0;break;case"reset":Le()}}),Te=()=>{S.value=!1},Q=p(""),[qe,{getSelectRows:Ke,clearSelectedRowKeys:ke,getPaginationRef:Pe}]=ae({api:()=>_(this,null,function*(){const n=Pe();return(yield le({orgKindIdList:["psm"],name:Q.value,pageNo:n.current,pageSize:n.pageSize})).result}),columns:[{title:"姓名",dataIndex:"name",width:100},{title:"全路径",dataIndex:"fullName"}],pagination:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox",fixed:!0},formConfig:{schemas:[{field:"name",component:"Input",label:"姓名：",required:!1}]},useSearchForm:!0,handleSearchInfoFn(n){Q.value=n.name}}),[Oe,{getSelectRows:Re,clearSelectedRowKeys:ze}]=ae({title:"人员列表",api:()=>_(this,null,function*(){return(yield le({orgKindIdList:["psm"],personId:h.personId})).result}),columns:[{title:"姓名",dataIndex:"name",width:100},{title:"全路径",dataIndex:"fullName"}],pagination:!0,bordered:!0,rowKey:"id",rowSelection:{type:"radio",fixed:!0},formConfig:{schemas:[{field:"name",component:"Input",label:"姓名：",required:!1}]},useSearchForm:!0,handleSearchInfoFn(n){Q.value=n.name}});p(!1);function q(){return _(this,null,function*(){let n={showPosition:!0,parentFullId:null},u=de().getFieldsValue().showType;(u==null?void 0:u.length)>0&&u.forEach($=>{n[$]=1}),n.parentFullId=null;const c=yield fa(n);ue.value=c.result})}function Ae(){return _(this,arguments,function*(n=[]){H(),f.value=n,ie(n.orgKindId),n.orgKindId==="pos"?(s.parentId=n.id,s.parentFullName=n.fullName):(s.parentId="",s.parentFullName=""),N()})}function De(){console.log(o),te.value.validateFields().then(()=>{O.value=!0;let n={orgKindId:f.value.orgKindId,id:f.value.id,name:f.value.name,code:f.value.code,fullId:f.value.fullId,fullName:f.value.fullName,fullCode:f.value.fullCode,fullSort:f.value.fullSort,fullOrgKindId:f.value.fullOrgKindId,orgCode:f.value.orgCode,orgId:f.value.orgId,orgName:f.value.orgName,deptId:f.value.deptId,deptName:f.value.deptName,deptCode:f.value.deptCode};o.value.parent=n,oe.value=="add"&&(o.value.orgKindId=Y.value),be(o.value).then(()=>{b.success("保存成功"),N(),q(),H(),O.value=!1,S.value=!1}).catch(()=>{O.value=!1})})}function Me(){if(I.value==""){L.getInstance().info("请选择一行数据.");return}R({title:"提示",iconType:"warning",content:"确定要删除选中记录？",onOk(){return _(this,null,function*(){ga(I.value).then(()=>{b.success("已删除。"),N(),q()})})}})}function Le(){if(I.value==""){L.getInstance().info("请选择一行数据.");return}R({title:"重置密码",iconType:"warning",content:"确认重置密码？",onOk(){return _(this,null,function*(){ia(h.personId,da("123456")).then(()=>{b.success("已重置。"),N(),q()})})}})}function Ve(){if(I.value==""){L.getInstance().info("请选择一行数据.");return}let n={id:I.value,status:1};ye(n).then(()=>{b.success("已启用。"),N(),q()})}function Be(){if(I.value==""){L.getInstance().info("请选择一行数据.");return}R({title:"禁用",iconType:"warning",content:"确认禁用此数据？",onOk(){return _(this,null,function*(){let e={id:I.value,status:0};ye(e).then(()=>{b.success("已禁用。"),N(),q()})})}})}function Ye(){let n=pe().map(e=>({id:e.id,sort:e.sort,fullSort:e.fullSort}));va(n).then(e=>{b.success("已保存"),N()})}const Ee=()=>{C.value=!1},He=()=>{let n=ne.value;n==null||n.validateFields().then(()=>{be({id:s.personMemberId,orgKindId:"psm",parentId:s.parentId,parent:{id:s.parentId,orgKindId:"pos"},user:s}).then(()=>{b.success("保存成功"),N(),O.value=!1,C.value=!1,H()})}).catch(e=>{console.log(e.errorFields)})},Qe=()=>{let n=Ke();if(n.length===0){b.info("请选择人员");return}let e=new Set;n.forEach(u=>{e.add(u.personId)}),Ia({positionId:f.value.id,personIds:Array.from(e)}).then(u=>{u.result?(y.value=!1,b.success("分配成功"),ke(),N()):b.error(u.message)})},$e=()=>{let n=Re();if(n.length===0){b.info("请选择一行数据");return}let e=n[0];ya({id:e.personId,mainOrgId:e.positionId}).then(u=>{u.result?(U.value=!1,b.success("设置成功"),ze()):b.error(u.message)})};return Je(()=>{sa(),q(),ie("root")}),(n,e)=>{const u=x("a-button"),c=x("a-input-number"),$=x("a-spin"),A=x("a-select"),m=x("a-input"),r=x("a-form-item"),i=x("a-col"),v=x("a-row"),Ge=x("a-textarea"),fe=x("a-form"),We=x("a-date-picker");return K(),M(F(oa),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:l(()=>[a(ra,{title:"组织机构树",onSelect:Ae,value:ue.value,class:"left-tree-layout",canEdit:!1,canAdd:!1,canDelete:!1,isShowOperationBtns:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),ve("div",_a,[a(F(ee),{onRegister:F(we),class:"fix-basic-table",searchInfo:g,onSelectionChange:Se,scroll:{y:V.value},onResizeColumn:e[0]||(e[0]=(t,D)=>D.width=t),onFormToggle:he},{toolbar:l(()=>[(K(!0),ce(Xe,null,ea(T.value,(t,D)=>(K(),M(u,{type:t.type,preIcon:t.icon,onClick:ge=>Ue(t.btnType,t.parameter)},{default:l(()=>[aa(la(t.name),1)]),_:2},1032,["type","preIcon","onClick"]))),256))]),bodyCell:l(({column:t,record:D})=>[t.key==="sort"?(K(),M(c,{key:0,value:D[t.dataIndex],"onUpdate:value":ge=>D[t.dataIndex]=ge,style:"margin: -5px 0;text-align:right",min:1,max:999},null,8,["value","onUpdate:value"])):G("",!0)]),_:1},8,["onRegister","searchInfo","scroll"])]),k(ve("div",xa,[a($)],512),[[P,O.value]]),a(W,{visible:S.value,"onUpdate:visible":e[8]||(e[8]=t=>S.value=t),smode:"normal",title:Z.value,width:600,overflowY:"auto",onConfirm:De,onCancel:Te},{default:l(()=>[a(fe,{ref_key:"organFormRef",ref:te,model:o.value,name:"organForm"},{default:l(()=>[a(v,{gutter:24},{default:l(()=>[k(a(i,{span:24},{default:l(()=>[a(r,{label:"编码",name:"code",labelCol:{span:4},rules:[{required:!0,message:"请输入编码"}]},{default:l(()=>[E.value?(K(),M(A,{key:0,value:o.value.code,"onUpdate:value":e[1]||(e[1]=t=>o.value.code=t),"show-search":"",options:F(J),onChange:Fe},null,8,["value","options"])):G("",!0),E.value?G("",!0):(K(),M(m,{key:1,value:o.value.code,"onUpdate:value":e[2]||(e[2]=t=>o.value.code=t)},null,8,["value"]))]),_:1})]),_:1},512),[[P,!0]])]),_:1}),a(v,{gutter:24},{default:l(()=>[k(a(i,{span:24},{default:l(()=>[a(r,{label:"名称",name:"name",labelCol:{span:4},rules:[{required:!1}]},{default:l(()=>[a(m,{value:o.value.name,"onUpdate:value":e[3]||(e[3]=t=>o.value.name=t),disabled:E.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[P,!0]])]),_:1}),a(v,{gutter:24},{default:l(()=>[k(a(i,{span:24},{default:l(()=>[a(r,{label:"全名称",name:"longName",labelCol:{span:4}},{default:l(()=>[a(m,{value:o.value.longName,"onUpdate:value":e[4]||(e[4]=t=>o.value.longName=t)},null,8,["value"])]),_:1})]),_:1},512),[[P,!0]])]),_:1}),k(a(v,{gutter:24},{default:l(()=>[a(i,{span:24},{default:l(()=>[a(r,{label:"部门负责人",name:"leaderUserId",labelCol:{span:4}},{default:l(()=>[a(F(ta),{value:o.value.leaderUserId,"onUpdate:value":e[5]||(e[5]=t=>o.value.leaderUserId=t),"show-search":"","filter-option":Ie,options:se.value},null,8,["value","options"])]),_:1})]),_:1})]),_:1},512),[[P,Y.value=="dpt"]]),a(v,{gutter:24},{default:l(()=>[k(a(i,{span:24},{default:l(()=>[a(r,{label:"排序号",name:"sort",labelCol:{span:4},rules:[{required:!0,message:"请输入排序号"}]},{default:l(()=>[a(c,{min:1,value:o.value.sort,"onUpdate:value":e[6]||(e[6]=t=>o.value.sort=t),max:999},null,8,["value"])]),_:1})]),_:1},512),[[P,!0]])]),_:1}),a(v,{gutter:24},{default:l(()=>[k(a(i,{span:24},{default:l(()=>[a(r,{label:"描述",name:"description",labelCol:{span:4}},{default:l(()=>[a(Ge,{rows:5,value:o.value.description,"onUpdate:value":e[7]||(e[7]=t=>o.value.description=t),maxlength:256},null,8,["value"])]),_:1})]),_:1},512),[[P,!0]])]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(W,{visible:C.value,"onUpdate:visible":e[32]||(e[32]=t=>C.value=t),smode:"default",title:B.value,width:800,onConfirm:He,onCancel:Ee,overflowY:"auto"},{default:l(()=>[a(fe,{ref_key:"personFormRef",ref:ne,model:s,name:"personForm"},{default:l(()=>[a(v,{gutter:24},{default:l(()=>[a(i,{span:23},{default:l(()=>[a(r,{label:"上级",name:"parentFullName",labelCol:{span:3},rules:[{required:!1}]},{default:l(()=>[a(m,{value:s.parentFullName,"onUpdate:value":e[9]||(e[9]=t=>s.parentFullName=t),disabled:""},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"员工编号",name:"code",labelCol:{span:6},rules:[{required:!0,message:"请输入员工编号"}]},{default:l(()=>[a(m,{value:s.code,"onUpdate:value":e[10]||(e[10]=t=>s.code=t),maxlength:64,disabled:s.id!=null},null,8,["value","disabled"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"姓名",name:"name",labelCol:{span:6},rules:[{required:!0,message:"请输入姓名"}]},{default:l(()=>[a(m,{value:s.name,"onUpdate:value":e[11]||(e[11]=t=>s.name=t),maxlength:128},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"用户账号",name:"loginName",labelCol:{span:6},rules:[{required:!0,message:"请输入用户账号"}]},{default:l(()=>[a(m,{value:s.loginName,"onUpdate:value":e[12]||(e[12]=t=>s.loginName=t),maxlength:32},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"英文名称",name:"englishName",labelCol:{span:6},rules:[{required:!1,message:"请输入英文名称"}]},{default:l(()=>[a(m,{value:s.englishName,"onUpdate:value":e[13]||(e[13]=t=>s.englishName=t),maxlength:128},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"证件类型",name:"certificateKindId",labelCol:{span:6},rules:[{required:!0,message:"请选择证件类型"}]},{default:l(()=>[a(j,{type:"certificate_kind",value:s.certificateKindId,"onUpdate:value":e[14]||(e[14]=t=>s.certificateKindId=t),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"证件号码",name:"certificateNo",labelCol:{span:6},rules:[{required:!0,message:"请输入证件号码"}]},{default:l(()=>[a(m,{value:s.certificateNo,"onUpdate:value":e[15]||(e[15]=t=>s.certificateNo=t),maxlength:64},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"性别",name:"sex",labelCol:{span:6},rules:[{required:!0,message:"请选择性别"}]},{default:l(()=>[a(j,{type:"system_user_sex",value:s.sex,"onUpdate:value":e[16]||(e[16]=t=>s.sex=t),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"婚姻状况",name:"marriage",labelCol:{span:6},rules:[{required:!1,message:"请输入婚姻状况"}]},{default:l(()=>[a(j,{type:"marriage",value:s.marriage,"onUpdate:value":e[17]||(e[17]=t=>s.marriage=t),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"出生日期",name:"birthday",labelCol:{span:6},rules:[{required:!0,message:"请选择出生日期"}]},{default:l(()=>[a(We,{value:s.birthday,"onUpdate:value":e[18]||(e[18]=t=>s.birthday=t),valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD",style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"职称",name:"title",labelCol:{span:6},rules:[{required:!1,message:"请输入职称"}]},{default:l(()=>[a(m,{value:s.title,"onUpdate:value":e[19]||(e[19]=t=>s.title=t),maxlength:64},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"学历",name:"degree",labelCol:{span:6},rules:[{required:!0,message:"请选择学历"}]},{default:l(()=>[a(j,{type:"degree",value:s.degree,"onUpdate:value":e[20]||(e[20]=t=>s.degree=t),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"毕业院校",name:"graduateSchool",labelCol:{span:6},rules:[{required:!1,message:"请输入毕业院校"}]},{default:l(()=>[a(m,{value:s.graduateSchool,"onUpdate:value":e[21]||(e[21]=t=>s.graduateSchool=t),maxlength:128},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"专业",name:"speciality",labelCol:{span:6},rules:[{required:!1,message:"请输入专业"}]},{default:l(()=>[a(m,{value:s.speciality,"onUpdate:value":e[22]||(e[22]=t=>s.speciality=t),maxlength:128},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"电子邮件",name:"email",labelCol:{span:6},rules:[{required:!1,message:"请输入电子邮件"}]},{default:l(()=>[a(m,{value:s.email,"onUpdate:value":e[23]||(e[23]=t=>s.email=t),maxlength:128},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"QQ",name:"qq",labelCol:{span:6},rules:[{required:!1,message:"请输入QQ"}]},{default:l(()=>[a(m,{value:s.qq,"onUpdate:value":e[24]||(e[24]=t=>s.qq=t),maxlength:32},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"微信",name:"weixin",labelCol:{span:6},rules:[{required:!1,message:"请输入微信"}]},{default:l(()=>[a(m,{value:s.weixin,"onUpdate:value":e[25]||(e[25]=t=>s.weixin=t),maxlength:32},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"办公电话",name:"officePhone",labelCol:{span:6},rules:[{required:!1,message:"请输入办公电话"}]},{default:l(()=>[a(m,{value:s.officePhone,"onUpdate:value":e[26]||(e[26]=t=>s.officePhone=t),maxlength:64},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"移动电话",name:"mobile",labelCol:{span:6},rules:[{required:!0,message:"请输入移动电话"}]},{default:l(()=>[a(m,{value:s.mobile,"onUpdate:value":e[27]||(e[27]=t=>s.mobile=t),maxlength:64},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:12},{default:l(()=>[a(r,{label:"家庭电话",name:"familyPhone",labelCol:{span:6},rules:[{required:!1,message:"请输入家庭电话"}]},{default:l(()=>[a(m,{value:s.familyPhone,"onUpdate:value":e[28]||(e[28]=t=>s.familyPhone=t),maxlength:32},null,8,["value"])]),_:1})]),_:1}),a(i,{span:11},{default:l(()=>[a(r,{label:"邮编",name:"zip",labelCol:{span:6},rules:[{required:!1,message:"请输入邮编"}]},{default:l(()=>[a(m,{value:s.zip,"onUpdate:value":e[29]||(e[29]=t=>s.zip=t),maxlength:16},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:23},{default:l(()=>[a(r,{label:"家庭地址",name:"familyAddress",labelCol:{span:3},rules:[{required:!1,message:"请输入家庭地址"}]},{default:l(()=>[a(m,{value:s.familyAddress,"onUpdate:value":e[30]||(e[30]=t=>s.familyAddress=t),maxlength:256},null,8,["value"])]),_:1})]),_:1})]),_:1}),a(v,{gutter:24},{default:l(()=>[a(i,{span:23},{default:l(()=>[a(r,{label:"描述",name:"description",labelCol:{span:3},rules:[{required:!1,message:"请输入描述"}]},{default:l(()=>[a(m,{value:s.description,"onUpdate:value":e[31]||(e[31]=t=>s.description=t),maxlength:256},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(W,{visible:y.value,"onUpdate:visible":e[33]||(e[33]=t=>y.value=t),title:"分配人员",maskClosable:!1,onOk:Qe,width:1e3,bodyStyle:{height:"500px"}},{default:l(()=>[a(F(ee),{onRegister:F(qe),maxHeight:300,class:"w-4/4 xl:w-12/12",searchInfo:g,scroll:{y:596}},null,8,["onRegister","searchInfo"])]),_:1},8,["visible"]),a(W,{visible:U.value,"onUpdate:visible":e[34]||(e[34]=t=>U.value=t),title:"设置主岗位",maskClosable:!1,onOk:$e,width:1e3,bodyStyle:{height:"500px"}},{default:l(()=>[a(F(ee),{onRegister:F(Oe),maxHeight:300,class:"w-4/4 xl:w-12/12",searchInfo:g,scroll:{y:596}},null,8,["onRegister","searchInfo"])]),_:1},8,["visible"]),O.value?(K(),ce("div",wa)):G("",!0)]),_:1})}}});const el=ua(Ca,[["__scopeId","data-v-68957bee"]]);export{el as default};
//# sourceMappingURL=index-bafd2a11.js.map