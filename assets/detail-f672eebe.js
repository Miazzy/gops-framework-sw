var x=(ne,F,N)=>new Promise((T,q)=>{var Y=C=>{try{k(N.next(C))}catch(n){q(n)}},L=C=>{try{k(N.throw(C))}catch(n){q(n)}},k=C=>C.done?T(C.value):Promise.resolve(C.value).then(Y,L);k((N=N.apply(ne,F)).next())});import{d as pa,ax as ca,aD as fa,k as p,r as M,o as va,al as g,Z as W,_ as ga,a9 as Q,aa as t,f as e,E as I,u as b,ac as j,$ as P,v as f,A as v,ad as ba,F as _a,J as w}from"./vue-71d1abb3.js";import{au as ya,b as Ca,a0 as xa,av as h,bt as Ia,bu as wa,aa as ha,ax as Na,a5 as qa,_ as ka}from"./index.js";import{e as Da}from"./download-03e71dd5.js";import{B as ee}from"./BasicTable-0434a334.js";import{T as be}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as ae}from"./useTable-109483b3.js";import{a2 as y}from"./antd-15ac76ed.js";import{a as Sa,P as Ta}from"./index-20519caf.js";import{_ as te}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{S as le}from"./SearchBox-22bb02d6.js";import Ua from"./materialCategory-4133ba9a.js";import{a as Ea,b as Ra,c as Pa,f as Fa}from"./index-04498ccb.js";import{i as Oa,j as Aa,u as Ma,c as Wa,g as ja,d as Va,e as Ya,a as La,b as za,f as Ba,h as $a}from"./index-131c61b3.js";import{b as Ka}from"./index-5d738211.js";import{a as V}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./CommonTree-c4ed7838.js";import"./index-3801a970.js";const Ha={class:"load"},Ga={class:"process-box"},Ja={class:"content"},Xa={class:"clearfix"},_e="/baseset/areaset/get-list",ye="/baseset/related-party/get-related-party-list",Za=pa({__name:"detail",setup(ne){ca();const{createConfirm:F,createMessage:N}=ya(),{t:T}=Ca(),{query:q}=fa(),Y=xa(),L=p(!1),k=p(),C=p("1"),n=M({spinning:!1,processInstanceId:"",id:"",stationOrganId:"",stationOrganName:"",stationId:"",stationName:"",periodId:"",periodName:"",status:"",code:"",name:"",materialId:"",materialCode:"",materialName:"",materialWholeName:"",materialCategoryCode:"",factoryId:"",factoryName:"",supplierId:"",supplierName:"",productionNumber:"",productionDate:"",usedDate:"",warrantyDate:"",areaId:"",areaName:"",subarrayId:"",subarrayName:"",qty:"",unitId:"",unitName:"",remark:""}),Ce=l=>{O.value=!0},oe=M({}),xe=p({}),re=p({}),O=p(!1),r=M({id:"",equipmentId:"",code:"",name:"",materialId:"",materialCode:"",materialName:"",materialWholeName:"",subjectId:"",subjectName:"",useTo:"",qty:"",unitId:"",unitName:""}),D=p(!1),z=p("添加主要元器件"),se=p(),Ie=()=>{z.value="添加主要元器件",D.value=!0,r.equipmentId=n.id},we=l=>{D.value=!1,r.id="",r.equipmentId="",r.code="",r.name="",r.materialId="",r.materialCode="",r.materialName="",r.materialWholeName="",r.subjectId="",r.subjectName="",r.useTo="",r.qty="",r.unitId="",r.unitName=""},he=(l,a)=>{r.unitName=a.label},Ne=l=>{console.log(l),se.value.validate().then(()=>x(this,null,function*(){const a=w(r);a.id?yield Ma(a):yield Wa(a),ue(),y.success("操作成功。"),D.value=!1})).catch(a=>{console.log("error",a)})},qe=l=>{z.value="修改主要元器件",D.value=!0,ja(l.id).then(a=>{V(r,a)})},ke=l=>{Va(l.id).then(()=>{ue(),y.success("操作成功。")})};function De(){return x(this,null,function*(){F({title:T("common.exportTitle"),iconType:"warning",content:T("common.message.exportMessage"),onOk(){return x(this,null,function*(){yield Ya().then(a=>{Da(a==null?void 0:a.data,"主要元器件.xls")}),N.success(T("common.exportSuccessText"))})}})})}const Se=[{title:"主键",dataIndex:"id",width:160},{title:"设备物资台账ID",dataIndex:"equipmentId",width:160},{title:"资产编码",dataIndex:"code",width:160},{title:"资产",dataIndex:"name",width:160},{title:"物料",dataIndex:"materialId",width:160},{title:"物料编码",dataIndex:"materialCode",width:160},{title:"物料",dataIndex:"materialName",width:160},{title:"物料全称",dataIndex:"materialWholeName",width:160},{title:"物料类别ID",dataIndex:"subjectId",width:160},{title:"物料类别",dataIndex:"subjectName",width:160},{title:"资产用途",dataIndex:"useTo",width:160},{title:"数量",dataIndex:"qty",width:160},{title:"计量单位ID",dataIndex:"unitId",width:160},{title:"计量单位",dataIndex:"unitName",width:160}],[Te,{reload:ue}]=ae({title:"",api:Oa,columns:Se,formConfig:{labelWidth:120},useSearchForm:!1,showTableSetting:!0,actionColumn:{width:140,title:"操作",dataIndex:"action",fixed:"right"}}),c=M({id:"",equipmentId:"",itemName:"",itemValue:"",status:"",sort:"",remark:""}),S=p(!1),B=p("添加技术参数"),ie=p(),Ue=()=>{B.value="添加技术参数",S.value=!0,c.equipmentId=n.id},Ee=l=>{S.value=!1,c.id="",c.equipmentId="",c.itemName="",c.itemValue="",c.status="",c.sort="",c.remark=""},Re=l=>{ie.value.validate().then(()=>{const a=w(c);a.id?La(a):za(a),de(),y.success("保存成功。"),S.value=!1}).catch(a=>{console.log("error",a)})},Pe=l=>{B.value="修改技术参数",S.value=!0,Ba(l.id).then(a=>{V(c,a)})},Fe=l=>{$a(l.id).then(()=>{de()})},Oe=[{title:"主键",dataIndex:"id",width:160},{title:"设备物资台账ID",dataIndex:"equipmentId",width:160},{title:"技术参数",dataIndex:"itemName",width:160},{title:"参数值",dataIndex:"itemValue",width:160},{title:"状态",dataIndex:"status",width:160},{title:"排序号",dataIndex:"sort",width:160},{title:"备注",dataIndex:"remark",width:160}],[Ae,{reload:de}]=ae({title:"",api:Aa,columns:Oe,formConfig:{labelWidth:120},useSearchForm:!1,showTableSetting:!0,actionColumn:{width:140,title:"操作",dataIndex:"action",fixed:"right"}}),Me=p();Me.value={Authorization:"Bearer "+Y.getToken};const _=p([]),U=p(!1),me=p(!0),E=()=>{const l=_.value.some(a=>!a.hasOwnProperty("id"));me.value=!l},We=l=>(F({title:"确认操作",iconType:"warning",content:"请确认是否删除此数据项？",onOk(){return x(this,null,function*(){if(l.id)Ia(l.id).then(()=>{const m=_.value.indexOf(l),i=_.value.slice();i.splice(m,1),_.value=i,E()});else{const m=_.value.indexOf(l),i=_.value.slice();i.splice(m,1),_.value=i,E()}})}}),!1),je=l=>{if(_.value.length+1>5)return y.warning("超过文件上传数量限制。"),!1;if(l.size>1073741824)return y.warning("文件大小超过最大限度1G。"),!1;if(l.size===0)return y.warning("所选信息中存在空文件或目录，请重新选择。"),!1;for(let i=0;i<_.value.length;i++)if(_.value[i].name===l.name)return y.warning("不允许重复上传。"),!1;const a=l.name.slice(l.name.lastIndexOf(".")+1).toLowerCase();return[".jpg",".png",".jpeg",".docx",".xlsx",".txt",".pdf",".zip"].includes("."+a)?(_.value=[..._.value,l],E(),!1):(y.warning(`不支持以 .${a} 扩展类型的文件或图片上传。`),!1)},Ve=()=>{const l=new FormData;if(l.append("application","po"),l.append("module","equipment"),l.append("bizId",n.id),!n.id)return y.warning("请先保存。"),!1;_.value.forEach(a=>{a.id||l.append("files",a)}),U.value=!0,wa(l).then(()=>{_.value=[],U.value=!1,Ye(n.id),E(),y.success("操作成功。")}).catch(()=>{U.value=!1,E(),y.error("操作失败。")})},Ye=l=>x(this,null,function*(){ha({bizId:l}).then(a=>{_.value=a})}),Le=[{key:"fullName",title:"物料类别",dataIndex:"fullName",align:"center",width:120},{key:"code",title:"物料编码",dataIndex:"code",align:"center",width:120},{key:"name",title:"物料名称",dataIndex:"name",align:"center",width:120},{key:"unit",title:"计量单位",dataIndex:"unit",align:"center",width:120},{key:"warrantyMonth",title:"质保期(月",dataIndex:"warrantyMonth",align:"center",width:120},{key:"status",title:"状态",dataIndex:"status",align:"center",width:120}],ze={baseColProps:{lg:6,md:8},labelWidth:90,schemas:[{label:"物料名称",field:"name",component:"Input"},{label:"物料编码",field:"code",component:"Input"},{label:"状态",field:"status",component:"Select",componentProps:{options:[{label:"全部",value:""},{label:"有效",value:"1"},{label:"无效",value:"0"}]}}]},Be=(l,a)=>qa.get({url:l,params:a},{isOnlyResult:!0}),$e=(l,a)=>{a?re.value=l:re.value={}},Ke=()=>{},[He,{reload:Ge,getSelectRows:Je}]=ae({title:"物料列表",api:Ka,rowKey:"id",columns:Le,useSearchForm:!0,formConfig:ze,showTableSetting:!0,bordered:!0,pagination:!0,rowSelection:{type:"radio",onSelect:$e,onSelectAll:Ke}}),Xe=l=>{xe.value=l,oe.materialCategoryCode=l.code,Ge()},pe=p([]),ce=p([]),$=p([]),Ze=l=>{const a=w(l.record);n.supplierId=a.key},Qe=l=>{const a=w(l.record);n.factoryId=a.key},ea=l=>{const a=w(l.record);n.areaId=a.key,n.subarrayId=a.key,n.areaName=a.name},aa=()=>{let l=Je();if(l.length==0)return y.warning("请选择物料。"),!1;O.value=!1;const a=l[0];n.materialId=a.id,n.materialCode=a.code,n.materialName=a.name,n.materialWholeName=a.fullName+"-"+a.name,n.materialCategoryCode=a.materialCategoryCode,fe()},fe=()=>{const l={status:1,partyTypeCodes:"supplier",materialCategoryIds:n.materialCategoryCode};A(ye,l,pe),l.partyTypeCodes="manufacturer",A(ye,l,ce)},A=(l,a,m)=>{Be(l,a).then(i=>{m.value.splice(0,m.value.length),i.forEach(s=>{m.value.push({id:s.id,code:s.code,name:s.name})});const u=m.value;m.value=[],setTimeout(()=>{m.value=u},100)})},K=p([{title:"编码",dataIndex:"code",key:"code",fixed:"left",minWidth:50},{title:"公司名称",dataIndex:"name",key:"name",fixed:"left",minWidth:50}]),ta=(l,a)=>{n.unitName=a.label},la=()=>{k.value.validate().then(()=>{const l=w(n);if(!ve(l.usedDate,l.productionDate)){y.warning("投运日期要超过出厂日期。");return}if(!ve(l.warrantyDate,l.usedDate)){y.warning("质保到期时间要超过投运日期。");return}na()}).catch(l=>{console.log("onSubmit=》error",l)})},na=()=>x(this,null,function*(){n.spinning=!0;try{const l=w(n);n.id?yield Pa(l):yield Fa(l),console.log("formData",l),y.success("保存成功。"),Na("/po/equipment/index")}catch(l){console.log("error",l)}finally{n.spinning=!1}}),oa=()=>{},ve=(l,a)=>{let m=new Date(Date.parse(l)),i=new Date(Date.parse(a));return m>i};return va(()=>x(this,null,function*(){if(q.id)Ra(q.id).then(l=>{V(n,l),n.status=l.status+"",fe();const a={stationId:n.stationId,stationPeriodId:n.periodId};A(_e,a,$)});else{n.status="1",V(n,q);const l={stationId:n.stationId,stationPeriodId:n.periodId};A(_e,l,$),Ea().then(a=>{n.code=a})}console.log("formState",n)})),(l,a)=>{const m=g("a-button"),i=g("a-input"),u=g("a-form-item"),s=g("a-col"),d=g("a-row"),ra=g("a-input-search"),H=g("a-date-picker"),sa=g("a-input-number"),G=g("a-textarea"),J=g("a-card"),ua=g("upload-outlined"),ia=g("a-upload"),X=g("a-form"),ge=g("a-tab-pane"),da=g("a-tabs"),Z=g("a-modal"),ma=g("a-spin");return W(),ga(_a,null,[l.showPageFooter?(W(),Q(b(Sa),{key:0},{right:t(()=>[e(m,{onClick:oa},{default:t(()=>[I(" 取消")]),_:1}),e(m,{class:"!ml-4",type:"primary",onClick:la,loading:L.value},{default:t(()=>[I(" 保存")]),_:1},8,["loading"])]),_:1})):j("",!0),P("div",Ha,[e(ma,{spinning:n.spinning,tip:"Loading..."},{default:t(()=>[P("div",Ga,[P("div",Ja,[e(X,{ref_key:"formRef",ref:k,model:n,labelAlign:"right",autocomplete:"off"},{default:t(()=>[e(J,{title:"基本信息",bordered:!1},{default:t(()=>[e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{name:"stationName",label:"电站名称",labelCol:{span:6}},{default:t(()=>[e(i,{disabled:"",value:n.stationName,"onUpdate:value":a[0]||(a[0]=o=>n.stationName=o)},null,8,["value"]),j("",!0)]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{name:"periodName",label:"期数",labelCol:{span:6}},{default:t(()=>[e(i,{disabled:"",value:n.periodName,"onUpdate:value":a[2]||(a[2]=o=>n.periodName=o)},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{name:"status",label:"设备状态",labelCol:{span:6}},{default:t(()=>[e(te,{type:"enable_or_disable",onChange:a[3]||(a[3]=o=>"()=> formState.status = value"),value:n.status,"onUpdate:value":a[4]||(a[4]=o=>n.status=o),style:{width:"100%"},disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{name:"code",label:"设备编码",labelCol:{span:6}},{default:t(()=>[e(i,{value:n.code,"onUpdate:value":a[5]||(a[5]=o=>n.code=o),disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{name:"materialName",label:"物料名称",labelCol:{span:6},rules:[{required:!0,message:"请选择物料"}]},{default:t(()=>[e(ra,{readOnly:"",value:n.materialName,"onUpdate:value":a[6]||(a[6]=o=>n.materialName=o),placeholder:"请选择物料","enter-button":"",onSearch:Ce},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{name:"materialWholeName",label:"物料全称",labelCol:{span:6}},{default:t(()=>[e(i,{value:n.materialWholeName,"onUpdate:value":a[7]||(a[7]=o=>n.materialWholeName=o),disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{name:"materialCode",label:"物料编码",labelCol:{span:6}},{default:t(()=>[e(i,{value:n.materialCode,"onUpdate:value":a[8]||(a[8]=o=>n.materialCode=o),disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{name:"factoryName",label:"生产厂家",labelCol:{span:6},rules:[{required:!0,message:"请输入生产厂家"}]},{default:t(()=>[e(le,{searchText:n.factoryName,"onUpdate:searchText":a[9]||(a[9]=o=>n.factoryName=o),columns:K.value,data:ce.value,vfield:"name",pagination:!1,twidth:"500px",onSelect:Qe,style:{height:"60px"}},null,8,["searchText","columns","data"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{name:"supplierName",label:"供应商",labelCol:{span:6},rules:[{required:!0,message:"请选择供应商"}]},{default:t(()=>[e(le,{searchText:n.supplierName,"onUpdate:searchText":a[10]||(a[10]=o=>n.supplierName=o),columns:K.value,data:pe.value,vfield:"name",pagination:!1,twidth:"500px",onSelect:Ze,style:{height:"60px"}},null,8,["searchText","columns","data"])]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{name:"productionNumber",label:"出厂编号",labelCol:{span:6},rules:[{required:!0,message:"请输入出厂编号"}]},{default:t(()=>[e(i,{value:n.productionNumber,"onUpdate:value":a[11]||(a[11]=o=>n.productionNumber=o),placeholder:"请输入出厂编号"},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{label:"出厂日期",name:"productionDate",labelAlign:"right",labelCol:{span:6},rules:[{required:!0,message:"请选择出厂日期"}]},{default:t(()=>[e(H,{value:n.productionDate,"onUpdate:value":a[12]||(a[12]=o=>n.productionDate=o),style:{"min-width":"100%"},"value-format":"YYYY-MM-DD"},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{label:"投运日期",name:"usedDate",labelAlign:"right",labelCol:{span:6},rules:[{required:!0,message:"请选择投运日期"}]},{default:t(()=>[e(H,{value:n.usedDate,"onUpdate:value":a[13]||(a[13]=o=>n.usedDate=o),style:{"min-width":"100%"},"value-format":"YYYY-MM-DD"},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{label:"质保截止日期",name:"warrantyDate",labelAlign:"right",labelCol:{span:6},rules:[{required:!0,message:"请选择质保截止日期"}]},{default:t(()=>[e(H,{value:n.warrantyDate,"onUpdate:value":a[14]||(a[14]=o=>n.warrantyDate=o),style:{"min-width":"100%"},"value-format":"YYYY-MM-DD"},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{name:"subarrayName",label:"区域子阵",labelCol:{span:6},rules:[{required:!0,message:"请输入区域子阵"}]},{default:t(()=>[e(le,{searchText:n.subarrayName,"onUpdate:searchText":a[15]||(a[15]=o=>n.subarrayName=o),columns:K.value,data:$.value,vfield:"name",pagination:!1,twidth:"500px",onSelect:ea,style:{height:"60px"}},null,8,["searchText","columns","data"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{name:"name",label:"设备名称",labelCol:{span:6},rules:[{required:!0,message:"请输入设备名称"}]},{default:t(()=>[e(i,{value:n.name,"onUpdate:value":a[16]||(a[16]=o=>n.name=o),placeholder:"请输入设备名称"},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]]),f(e(s,{span:12},{default:t(()=>[e(u,{name:"qty",label:"数量",labelCol:{span:6},rules:[{required:!0,message:"请输入数量"}]},{default:t(()=>[e(sa,{value:n.qty,"onUpdate:value":a[17]||(a[17]=o=>n.qty=o),min:0,placeholder:"请输入数量",max:1e4,step:.1},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:12},{default:t(()=>[e(u,{label:"计量单位",name:"unitId",labelCol:{span:6},wrapperCol:15,rules:[{required:!0,message:"请选择计量单位"}]},{default:t(()=>[e(te,{type:"safety_tpl_unit",value:n.unitId,"onUpdate:value":a[18]||(a[18]=o=>n.unitId=o),style:{width:"100%"},onChange:ta},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1}),e(d,{gutter:24},{default:t(()=>[f(e(s,{span:24,class:"textarea-item"},{default:t(()=>[e(u,{label:"备注",name:"remark",labelAlign:"right",labelCol:{span:3}},{default:t(()=>[e(G,{rows:5,value:n.remark,"onUpdate:value":a[19]||(a[19]=o=>n.remark=o),placeholder:"512字以内",maxlength:512},null,8,["value"])]),_:1})]),_:1},512),[[v,!0]])]),_:1})]),_:1}),e(J,{title:"附件信息"},{default:t(()=>[P("div",Xa,[e(ia,{multiple:!0,"file-list":_.value,"before-upload":je,onRemove:We},{default:t(()=>[e(m,null,{default:t(()=>[e(ua),I(" Select File ")]),_:1})]),_:1},8,["file-list"]),e(m,{type:"primary",disabled:me.value,loading:U.value,style:{"margin-top":"16px"},onClick:Ve},{default:t(()=>[I(ba(U.value?"Uploading":"Start Upload"),1)]),_:1},8,["disabled","loading"])])]),_:1})]),_:1},8,["model"]),e(J,{title:"",bordered:!1},{default:t(()=>[e(da,{activeKey:C.value,"onUpdate:activeKey":a[20]||(a[20]=o=>C.value=o)},{default:t(()=>[e(ge,{key:"1",tab:"技术参数"},{default:t(()=>[e(b(ee),{onRegister:b(Ae)},{toolbar:t(()=>[e(m,{type:"primary",preIcon:b(h).ADD,onClick:Ue},{default:t(()=>[I(" 添加 ")]),_:1},8,["preIcon"])]),bodyCell:t(({column:o,record:R})=>[o.key==="action"?(W(),Q(b(be),{key:0,actions:[{icon:b(h).EDIT,label:"编辑",onClick:Pe.bind(null,R)},{icon:b(h).DELETE,danger:!0,label:"删除",popConfirm:{title:"请确认是否删除此数据项？",placement:"left",confirm:Fe.bind(null,R)}}]},null,8,["actions"])):j("",!0)]),_:1},8,["onRegister"])]),_:1}),e(ge,{key:"2",tab:"主要元器件"},{default:t(()=>[e(b(ee),{onRegister:b(Te)},{toolbar:t(()=>[e(m,{type:"primary",preIcon:b(h).ADD,onClick:Ie},{default:t(()=>[I(" 添加 ")]),_:1},8,["preIcon"]),e(m,{type:"warning",preIcon:b(h).EXPORT,onClick:De},{default:t(()=>[I(" 导出 ")]),_:1},8,["preIcon"])]),bodyCell:t(({column:o,record:R})=>[o.key==="action"?(W(),Q(b(be),{key:0,actions:[{icon:b(h).EDIT,label:"编辑",onClick:qe.bind(null,R)},{icon:b(h).DELETE,danger:!0,label:"删除",popConfirm:{title:"请确认是否删除此数据项？",placement:"left",confirm:ke.bind(null,R)}}]},null,8,["actions"])):j("",!0)]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["activeKey"])]),_:1}),P("div",null,[e(Z,{visible:O.value,"onUpdate:visible":a[21]||(a[21]=o=>O.value=o),width:"1500px",title:"选择物料",onOk:aa,bodyStyle:{height:"850px"}},{default:t(()=>[e(b(Ta),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:t(()=>[e(Ua,{onSelectTree:Xe}),e(b(ee),{onRegister:b(He),class:"w-3/4 xl:w-10/12",searchInfo:oe},null,8,["onRegister","searchInfo"])]),_:1})]),_:1},8,["visible"]),e(Z,{visible:S.value,"onUpdate:visible":a[26]||(a[26]=o=>S.value=o),title:B.value,onOk:Re,onCancel:Ee},{default:t(()=>[e(X,{ref_key:"parameterFormRef",ref:ie,model:c},{default:t(()=>[e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"技术参数",name:"itemName",labelCol:{span:5},rules:[{required:!0,max:128}]},{default:t(()=>[e(i,{value:c.itemName,"onUpdate:value":a[22]||(a[22]=o=>c.itemName=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"参数值",name:"itemValue",labelCol:{span:5},rules:[{required:!0,max:128}]},{default:t(()=>[e(i,{value:c.itemValue,"onUpdate:value":a[23]||(a[23]=o=>c.itemValue=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"排序号",name:"sort",labelCol:{span:5},rules:[{required:!1,max:100}]},{default:t(()=>[e(i,{value:c.sort,"onUpdate:value":a[24]||(a[24]=o=>c.sort=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"备注",name:"remark",labelCol:{span:5},rules:[{required:!1,max:100}]},{default:t(()=>[e(G,{value:c.remark,"onUpdate:value":a[25]||(a[25]=o=>c.remark=o),maxlength:128,"auto-size":{minRows:2,maxRows:5}},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"]),e(Z,{visible:D.value,"onUpdate:visible":a[35]||(a[35]=o=>D.value=o),title:z.value,onOk:Ne,onCancel:we},{default:t(()=>[e(X,{ref_key:"componentFormRef",ref:se,model:r},{default:t(()=>[e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"资产编码",name:"code",labelCol:{span:5},rules:[{required:!0,max:128}]},{default:t(()=>[e(i,{value:r.code,"onUpdate:value":a[27]||(a[27]=o=>r.code=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"资产",name:"name",labelCol:{span:5},rules:[{required:!0,max:128}]},{default:t(()=>[e(i,{value:r.name,"onUpdate:value":a[28]||(a[28]=o=>r.name=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"物料编码",name:"materialCode",labelCol:{span:5},rules:[{required:!0,max:128}]},{default:t(()=>[e(i,{value:r.materialCode,"onUpdate:value":a[29]||(a[29]=o=>r.materialCode=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"物料",name:"materialName",labelCol:{span:5},rules:[{required:!0,max:128}]},{default:t(()=>[e(i,{value:r.materialName,"onUpdate:value":a[30]||(a[30]=o=>r.materialName=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"物料类别",name:"subjectName",labelCol:{span:5},rules:[{required:!0,max:128}]},{default:t(()=>[e(i,{value:r.subjectName,"onUpdate:value":a[31]||(a[31]=o=>r.subjectName=o)},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"资产用途",name:"useTo",labelCol:{span:5},rules:[{required:!1,max:100}]},{default:t(()=>[e(G,{value:r.useTo,"onUpdate:value":a[32]||(a[32]=o=>r.useTo=o),maxlength:128,"auto-size":{minRows:2,maxRows:5}},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{name:"qty",label:"数量",labelCol:{span:5},rules:[{required:!0,message:"请输入数量"}]},{default:t(()=>[e(i,{value:r.qty,"onUpdate:value":a[33]||(a[33]=o=>r.qty=o),placeholder:"请输入数量"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(d,{gutter:24},{default:t(()=>[e(s,{span:20},{default:t(()=>[e(u,{label:"计量单位",name:"unitId",labelCol:{span:5},rules:[{required:!0,message:"请选择计量单位"}]},{default:t(()=>[e(te,{type:"safety_tpl_unit",value:r.unitId,"onUpdate:value":a[34]||(a[34]=o=>r.unitId=o),style:{width:"100%"},onChange:he},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["visible","title"])])])])]),_:1},8,["spinning"])])],64)}}});const Et=ka(Za,[["__scopeId","data-v-4d251e45"]]);export{Et as default};
//# sourceMappingURL=detail-f672eebe.js.map
