var v=(U,i,w)=>new Promise((S,R)=>{var m=g=>{try{N(w.next(g))}catch(k){R(k)}},q=g=>{try{N(w.throw(g))}catch(k){R(k)}},N=g=>g.done?S(g.value):Promise.resolve(g.value).then(m,q);N((w=w.apply(U,i)).next())});import{d as Ee,k as E,ax as Ue,u as T,r as M,e as we,o as Ne,al as b,Z as _,a9 as I,aa as s,$ as C,f as t,v as r,A as p,E as X,ac as x,aG as ke,aH as De}from"./vue-71d1abb3.js";import{B as Te}from"./BillTitle-d17ab3e4.js";import{b as Re,ak as Ae,aB as We,av as ee,aa as Se,at as qe,a7 as Le,aC as Be,aD as Me,_ as Fe}from"./index.js";import{W as He}from"./WfApproveBox-a3448232.js";import{g as Ye}from"./index-04498ccb.js";import{P as ze}from"./index-20519caf.js";import{k as Ke,l as Pe,m as Oe,n as Ve,o as je,p as ae,q as $e}from"./index-caeea670.js";import{S as Ge}from"./SearchBox-22bb02d6.js";import{a as Qe}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{U as Ze}from"./UploadBox-636ecf02.js";import{a as le}from"./assign-37f1c13d.js";import"./antd-15ac76ed.js";import"./index.esm-c216ed00.js";import"./index-fda2d66c.js";import"./BasicTable-0434a334.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-085d06c7.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./Dialog-0a006d82.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useTable-109483b3.js";import"./index-c0893416.js";import"./index-33af41d1.js";import"./tree-fc0e156a.js";import"./useContentViewHeight-7f845167.js";import"./useRender-21ce56fb.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";const Je=U=>(ke("data-v-1d77322b"),U=U(),De(),U),Xe={class:"load"},ea={class:"process-box"},aa={class:"header-box"},la={class:"content"},ta={class:"form-subtitle-box"},na=Je(()=>C("div",{class:"title-left"},"损失电量",-1)),sa={class:"title-right"},oa={style:{margin:"0 16px 10px"}},ia=Ee({__name:"dayReportCreate",setup(U){const i=E(!1),{t:w}=Re(),S=Ue(),{currentRoute:R}=S;T(R);const m=Ae.getInstance().getQuery(),q=E([{title:"编码",dataIndex:"code",key:"code",fixed:"center",minWidth:100},{title:"设备名称",dataIndex:"name",key:"name",fixed:"center",minWidth:100},{title:"供应商名称",dataIndex:"supplierName",key:"supplierName",fixed:"left",minWidth:100},{title:"生产厂家",dataIndex:"factoryName",key:"factoryName",minWidth:150}]),N=E([]),g=E([]),k=E(null),te=Ke(),y=E([]),F=E(),e=M({status:0});function ne(l,a){l.equipmentName=a.record.name,l.equipmentId=a.record.key,l.supplierId=a.record.supplierId,l.supplierName=a.record.supplierName,l.factoryId=a.record.factoryId,l.factoryName=a.record.factoryName}const A=M({});A.subject="生产日报",A.infoItems=[];function se(){let l=e.connectCapacity>0?e.connectCapacity:0,a=e.radiation>0?e.radiation:0;e.theoElec=W(l*a/3.6,2)}function oe(){let l=e.genElec>0?e.genElec:0;e.connectCapacity>0&&(e.validHours=W(l/1e3/e.connectCapacity,2))}function H(){let l=e.onlineElec>0?e.onlineElec:0;if(e.theoElec>0){let a=l/e.theoElec;e.sysEfficiency=W(a*100,2)}else e.sysEfficiency=0}function L(){let l=e.facUsed>0?e.facUsed:0,a=e.offlineElec>0?e.offlineElec:0;if(e.genElec>0){let o=(l+a)/e.genElec;e.facRatio=W(o*100,2)}else l+a>0?e.facRatio=100:e.facRatio=0}function W(l,a){let o=Math.pow(10,a);return Math.round(l*o)/o}function ie(){}function de(){se(),H()}function ue(){oe(),L()}function re(){H()}function pe(){L()}function me(){L()}const D=M({selectedRowKeys:[],loading:!1});we(()=>D.selectedRowKeys.length>0);const ce=l=>{console.log("selectedRowKeys changed: ",l),D.selectedRowKeys=l},Y=l=>typeof l=="string"?isNaN(Number(l))?"":l.replace(/^(0+)|[^\d]/g,""):typeof l=="number"?isNaN(l)?"":String(l).replace(/^(0+)|[^\d]/g,""):"";function fe(){let l=Me(),o={id:"",key:y.value.length+1,code:"",name:"",editable:!0,bizFileId:l,tname:"上传"};y.value.unshift(o)}const z=()=>v(this,null,function*(){let l=yield Pe();return N.value=l,l});function ve(l,a){l.lossTypeCode=a.record.lossTypeCode}const K=()=>v(this,null,function*(){let l=yield Ye({periodId:e.periodId});return g.value=l.list,l}),be=()=>v(this,null,function*(){console.info(D.selectedRowKeys);let l=[];if(y.value.map(a=>{D.selectedRowKeys.includes(a.key)&&a.id!=""&&l.push(a.id)}),l.length>0)yield Oe(l),yield B();else{let a=[];y.value.forEach(o=>{D.selectedRowKeys.includes(o.key)||a.push(o)}),y.value=a}P()}),B=()=>v(this,null,function*(){if(e.reportDay==null)return;e.requestType="day";let l=yield Ve(e);for(let a=0;a<l.result.length;a++){l.result[a].key=a;let o=[];o=yield Se({bizId:l.result[a].bizFileId}),l.result[a].tname=o.length>0?"查看":"上传"}y.value=l.result});function P(){let l=0;y.value.forEach(a=>{l=l+a.lossElec}),e.totalLoss=l}const ge=()=>{O(0)},ye=()=>{O(1)},O=l=>{F.value.validateFields().then(()=>{let o={};Object.assign(o,e),o.status=l,o.lossData=y.value,je(o).then(d=>{debugger;qe.getInstance().success(w("common.saveSuccessText")),e.id=d.result,l===1&&setTimeout(function(){Le.getInstance().sendMsg("day-report",{key:"day"}),Be()},200),B()}).catch(()=>{e.status=0})}).catch(o=>{})},_e=()=>v(this,null,function*(){let l=yield ae("");V(l),e.billCode=l.billCode,e.fillinDate=l.fillinDate,e.stationId=m.stationId,e.stationName=m.stationName,e.periodId=m.periodId,e.periodName=m.periodName,e.stationOrganId=m.organId,e.stationOrganName=m.organName,Ie()}),V=l=>v(this,null,function*(){let{billCode:a,fillinDate:o,personMemberName:d,deptName:u}=l;Object.assign(A,{billCode:a,fillinDate:o,personMemberName:d,deptName:u})}),j=()=>v(this,null,function*(){let l=yield ae(e.id);i.value=l.status>0,V(l),le(e,l),e.processInstanceId||(e.processInstanceId=m.processInstanceId),yield z(),yield K(),B()}),Ie=()=>v(this,null,function*(){let l=yield $e(e.periodId);return e.connectCapacity=l.connectCapacity,l.connectCapacity}),he=l=>{console.info(l),l.supplierId=null,l.supplierName=null,l.factoryId=null,l.factoryName=null};return Ne(()=>v(this,null,function*(){le(e,m),m.id?(e.id=m.id,yield j()):m.processInstanceId?(k.value=m.processInstanceId,e.processInstanceId=m.processInstanceId,We(e.processInstanceId).then(l=>v(this,null,function*(){l!=null&&(e.id=l.businessKey),yield j()}))):(_e(),z(),K())})),(l,a)=>{const o=b("a-input"),d=b("a-form-item"),u=b("a-col"),$=b("a-date-picker"),h=b("a-input-number"),G=b("a-textarea"),Q=b("a-row"),Z=b("a-card"),xe=b("a-form"),J=b("a-button"),Ce=b("a-table");return _(),I(T(ze),{detail:!0,dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"fix-detail-page",style:{position:"relative"}},{default:s(()=>[C("div",Xe,[C("div",ea,[C("div",aa,[t(Te,{options:A},null,8,["options"]),t(He,{onSave:ge,onSubmit:ye,processStatus:e.status,processInstanceId:e.processInstanceId},null,8,["processStatus","processInstanceId"])]),C("div",la,[t(xe,{ref_key:"dayReportFormRef",ref:F,model:e,name:"dayReportForm",scrollToFirstError:!0},{default:s(()=>[t(Z,{title:"基本信息",bordered:!1},{default:s(()=>[t(Q,{gutter:32},{default:s(()=>[r(t(u,{span:12},{default:s(()=>[t(d,{label:"电站名称",name:"stationName",labelAlign:"right",labelCol:{span:4}},{default:s(()=>[t(o,{disabled:"",value:e.stationName,"onUpdate:value":a[0]||(a[0]=n=>e.stationName=n),style:{width:"100%"}},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"分期",name:"periodName",labelAlign:"right",labelCol:{span:4}},{default:s(()=>[t(o,{disabled:"",value:e.periodName,"onUpdate:value":a[1]||(a[1]=n=>e.periodName=n)},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"日报日期",name:"reportDay",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请选择日期"}]},{default:s(()=>[t($,{value:e.reportDay,"onUpdate:value":a[2]||(a[2]=n=>e.reportDay=n),style:{"min-width":"100%"},onChange:ie,disabled:i.value,"value-format":"YYYY-MM-DD"},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"日发电量(kWh)",name:"genElec",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入日发电量"}]},{default:s(()=>[t(h,{onChange:ue,disabled:i.value,value:e.genElec,"onUpdate:value":a[3]||(a[3]=n=>e.genElec=n),maxlength:"20"},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"上网电量(kWh)",name:"onlineElec",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入上网电量"}]},{default:s(()=>[t(h,{onChange:re,disabled:i.value,value:e.onlineElec,"onUpdate:value":a[4]||(a[4]=n=>e.onlineElec=n),maxlength:"20"},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"外接厂用电(kWh)",name:"facUsed",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入外接电源厂用电"}]},{default:s(()=>[t(h,{onChange:pe,disabled:i.value,value:e.facUsed,"onUpdate:value":a[5]||(a[5]=n=>e.facUsed=n),maxlength:"20"},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"下网电量(kWh)",name:"offlineElec",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入下网电量"}]},{default:s(()=>[t(h,{onChange:me,disabled:i.value,value:e.offlineElec,"onUpdate:value":a[6]||(a[6]=n=>e.offlineElec=n),maxlength:"20"},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"理论发电(kWh)",name:"theoElec",labelAlign:"right",labelCol:{span:4}},{default:s(()=>[t(h,{disabled:"",value:e.theoElec,"onUpdate:value":a[7]||(a[7]=n=>e.theoElec=n)},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"总损失电量(kWh)",name:"totalLoss",labelAlign:"right",labelCol:{span:4}},{default:s(()=>[t(h,{disabled:"",value:e.totalLoss,"onUpdate:value":a[8]||(a[8]=n=>e.totalLoss=n)},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"最大负荷(MW)",name:"maxLoad",labelAlign:"right",labelCol:{span:4},rules:[{message:"请输入最大负荷",pattern:/^(\d{1,4})(.\d{1,2})?$/}]},{default:s(()=>[t(o,{disabled:i.value,value:e.maxLoad,"onUpdate:value":a[9]||(a[9]=n=>e.maxLoad=n)},null,8,["disabled","value"])]),_:1},8,["rules"])]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"利用小时数(h)",name:"validHours",labelAlign:"right",labelCol:{span:4}},{default:s(()=>[t(o,{disabled:"",value:e.validHours,"onUpdate:value":a[10]||(a[10]=n=>e.validHours=n)},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"厂用电率",name:"facRatio",labelAlign:"right",labelCol:{span:4}},{default:s(()=>[t(o,{disabled:"",value:e.facRatio,"onUpdate:value":a[11]||(a[11]=n=>e.facRatio=n)},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"系统效率(%)",name:"sysEfficiency",labelAlign:"right",labelCol:{span:4}},{default:s(()=>[t(o,{disabled:"",value:e.sysEfficiency,"onUpdate:value":a[12]||(a[12]=n=>e.sysEfficiency=n)},null,8,["value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"今日辐照(kj/㎡)",name:"radiation",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入今日辐照"}]},{default:s(()=>[t(h,{disabled:i.value,onChange:de,value:e.radiation,"onUpdate:value":a[13]||(a[13]=n=>e.radiation=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:24,class:"textarea-item"},{default:s(()=>[t(d,{label:"设备运行动态",name:"deviceInfo",labelAlign:"right",labelCol:{span:2}},{default:s(()=>[t(G,{rows:10,value:e.deviceInfo,"onUpdate:value":a[14]||(a[14]=n=>e.deviceInfo=n),placeholder:"2000字以内",disabled:i.value,maxlength:2e3,"show-count":""},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:24,class:"textarea-item"},{default:s(()=>[t(d,{label:"生产动态",name:"prodInfo",labelAlign:"right",labelCol:{span:2}},{default:s(()=>[t(G,{rows:10,value:e.prodInfo,"onUpdate:value":a[15]||(a[15]=n=>e.prodInfo=n),placeholder:"2000字以内",maxlength:2e3,"show-count":"",disabled:i.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[p,!0]])]),_:1})]),_:1}),t(Z,{title:"天气信息",bordered:!1},{default:s(()=>[t(Q,{gutter:32},{default:s(()=>[r(t(u,{span:12},{default:s(()=>[t(d,{label:"今日天气",name:"dayWeather",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入今日天气"}]},{default:s(()=>[t(o,{disabled:i.value,value:e.dayWeather,"onUpdate:value":a[16]||(a[16]=n=>e.dayWeather=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"最高气温(℃)",name:"maxTemp",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入最高气温"}]},{default:s(()=>[t(o,{disabled:i.value,value:e.maxTemp,"onUpdate:value":a[17]||(a[17]=n=>e.maxTemp=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"最低气温(℃)",name:"minTemp",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入最低气温"}]},{default:s(()=>[t(o,{disabled:i.value,value:e.minTemp,"onUpdate:value":a[18]||(a[18]=n=>e.minTemp=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"平均温度(℃)",name:"avgTemp",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入平均温度"}]},{default:s(()=>[t(o,{disabled:i.value,value:e.avgTemp,"onUpdate:value":a[19]||(a[19]=n=>e.avgTemp=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"最大风速(m/s)",name:"maxWind",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入最大风速"}]},{default:s(()=>[t(o,{disabled:i.value,value:e.maxWind,"onUpdate:value":a[20]||(a[20]=n=>e.maxWind=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"最小风速(m/s)",name:"minWind",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入最小风速"}]},{default:s(()=>[t(o,{disabled:i.value,value:e.minWind,"onUpdate:value":a[21]||(a[21]=n=>e.minWind=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]]),r(t(u,{span:12},{default:s(()=>[t(d,{label:"平均风速(m/s)",name:"avgWind",labelAlign:"right",labelCol:{span:4},rules:[{required:!0,message:"请输入平均风速"}]},{default:s(()=>[t(o,{disabled:i.value,value:e.avgWind,"onUpdate:value":a[22]||(a[22]=n=>e.avgWind=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[p,!0]])]),_:1})]),_:1})]),_:1},8,["model"]),C("div",ta,[na,C("div",sa,[i.value?x("",!0):(_(),I(J,{key:0,type:"primary",preIcon:T(ee).ADD,onClick:fe},{default:s(()=>[X("添加")]),_:1},8,["preIcon"])),i.value?x("",!0):(_(),I(J,{key:1,class:"red-btn",preIcon:T(ee).DELETE,onClick:be},{default:s(()=>[X("删除")]),_:1},8,["preIcon"]))])]),C("div",oa,[t(Ce,{columns:T(te),"data-source":y.value,pagination:!1,size:"small",bordered:"","row-selection":{selectedRowKeys:l.selectedRowKeys,onChange:ce},scroll:{x:480,y:620}},{bodyCell:s(({column:n,text:da,record:c})=>[n.dataIndex==="reason"?(_(),I(o,{key:0,value:c[n.dataIndex],"onUpdate:value":f=>c[n.dataIndex]=f,maxlength:"300",style:{margin:"-5px 0"},disabled:i.value},null,8,["value","onUpdate:value","disabled"])):x("",!0),n.dataIndex==="lossElec"?(_(),I(h,{key:1,onChange:P,value:c.lossElec,"onUpdate:value":f=>c.lossElec=f,maxlength:"20",formatter:Y,parser:Y,min:0,disabled:i.value},null,8,["value","onUpdate:value","disabled"])):x("",!0),n.dataIndex==="lossTypeCodeText"?(_(),I(Qe,{key:2,value:c.lossTypeCode,"onUpdate:value":f=>c.lossTypeCode=f,vmode:"label",tfields:{key:"id",value:"lossTypeCode",title:"name"},data:N.value,onSelect:ve,disabled:i.value,twidth:"400px"},null,8,["value","onUpdate:value","data","disabled"])):x("",!0),n.dataIndex==="equipmentName"?(_(),I(Ge,{key:3,value:c.equipmentName,"onUpdate:value":f=>c.equipmentName=f,columns:q.value,data:g.value,vfield:"name",pagination:!1,twidth:"600px",style:{width:"100%"},disabled:i.value,onClear:f=>he(c),onSelect:f=>ne(c,f)},null,8,["value","onUpdate:value","columns","data","disabled","onClear","onSelect"])):x("",!0),["startTime","endTime"].includes(n.dataIndex)?(_(),I($,{key:4,value:c[n.dataIndex],"onUpdate:value":f=>c[n.dataIndex]=f,"show-time":"",format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss",disabled:i.value},null,8,["value","onUpdate:value","disabled"])):x("",!0),n.dataIndex==="bizFileId"?(_(),I(Ze,{key:5,tname:c.tname,disabled:i.value,vmode:"box",width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"dayreportloss",bizId:c[n.dataIndex]},null,8,["tname","disabled","bizId"])):x("",!0)]),_:1},8,["columns","data-source","row-selection"])])])])])]),_:1})}}});const Oa=Fe(ia,[["__scopeId","data-v-1d77322b"]]);export{Oa as default};
//# sourceMappingURL=dayReportCreate-e3c483e9.js.map