var f=(q,e,v)=>new Promise((Y,C)=>{var D=p=>{try{b(v.next(p))}catch(y){C(y)}},o=p=>{try{b(v.throw(p))}catch(y){C(y)}},b=p=>p.done?Y(p.value):Promise.resolve(p.value).then(D,o);b((v=v.apply(q,e)).next())});import{d as X,r as F,k as h,ax as ee,u as N,o as ae,al as m,Z as O,_ as P,f as a,aa as t,$ as I,E as R,ac as le,v as d,A as i}from"./vue-71d1abb3.js";import{h as te,i as se,a as W,j as ne,k as oe,s as re,l as ue}from"./index-69777d73.js";import{B as de}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as ie}from"./useTable-109483b3.js";import{a2 as me}from"./antd-15ac76ed.js";import{bP as pe,aC as fe,a7 as ve}from"./index.js";import{_ as be}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{U as ce}from"./UploadBox-636ecf02.js";import{a as w}from"./assign-37f1c13d.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./useRender-21ce56fb.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const _e={class:"load"},ge={class:"process-box"},he={class:"header-box"},Ce=I("div",{class:"header-left"},"电子工牌",-1),De={key:0,class:"header-right"},ye={class:"content"},Ie={class:"clearfix",style:{"padding-left":"15px"}},Ke=X({__name:"detail",setup(q){const e=F({spinning:!1}),v=h([]),Y=h(!1),C=h(),D=h([]),o=h(!0),b=F({});b.title="电子工牌设置",b.infoItems=[];const p=ee(),{currentRoute:y}=p,c=N(y).query;function E(s,l){l!=null?(e.userName=l.value,e.user=l.lable):(e.userName=null,e.user=null)}function V(){ne({}).then(s=>{s.result&&s.result.length>0&&s.result.forEach(l=>{v.value.push({value:l.powerStationName,lable:l.id})})})}function L(s,l){e.stationId!=l.value&&(e.userName=null,e.user=null),e.stationId=l.lable,U()}function U(){D.value=[],oe("?stationId="+e.stationId).then(s=>{s.result&&s.result.length>0&&s.result.forEach(l=>{D.value.push({value:l.name,lable:l.userId})})})}const S=h();function j(){fe()}function A(){e.spinning=!0;try{S.value.validateFields().then(()=>{re(e).then(s=>{e.id=s,W({id:s}).then(l=>{w(e,l.result),T()}),me.success("保存成功"),ve.getInstance().sendMsg("eleWorkCard",{})})})}catch(s){console.log("error",s)}finally{e.spinning=!1}}const[$,{reload:Ye}]=ie(w({dataSource:C,columns:te},se)),T=()=>f(this,null,function*(){C.value=yield Q({})}),Q=s=>f(this,null,function*(){const l=yield Z(s);return(yield ue(l)).result}),Z=s=>f(this,null,function*(){const l=yield z();return{eleWorkCardId:s.eleWorkCardId?s.id:l+""}});ae(()=>f(this,null,function*(){c.id=yield z(),c.id?yield W({id:c.id}).then(s=>{w(e,s.result)}):(w(e,c),e.spinning=!1,e.status=1),o.value=c.disabledInput!="false",yield G(),U(),T(),V(),(e.bizFileId==null||e.bizFileId==null||e.bizFileId=="")&&H()}));const z=()=>f(this,null,function*(){let s=c.id;return!s&&e.id&&(c.id=e.id,s=e.id),s}),G=()=>f(this,null,function*(){b.title="电子工牌设置"}),H=()=>f(this,null,function*(){pe().then(s=>{e.bizFileId=s})});return(s,l)=>{const k=m("a-button"),_=m("a-input"),r=m("a-form-item"),u=m("a-col"),g=m("a-row"),x=m("a-date-picker"),B=m("a-select"),M=m("a-card"),J=m("a-form"),K=m("a-spin");return O(),P("div",_e,[a(K,{spinning:e.spinning,tip:"Loading..."},{default:t(()=>[I("div",ge,[I("div",he,[Ce,o.value?le("",!0):(O(),P("div",De,[a(k,{onClick:j},{default:t(()=>[R(" 取消")]),_:1}),a(k,{class:"!ml-4",type:"primary",onClick:A,loading:Y.value},{default:t(()=>[R(" 保存")]),_:1},8,["loading"])]))]),I("div",ye,[a(J,{ref_key:"formRef",ref:S,model:e,labelAlign:"right",autocomplete:"off"},{default:t(()=>[a(M,{title:"基本信息",bordered:!1},{default:t(()=>[a(g,{gutter:24},{default:t(()=>[d(a(u,{span:12},{default:t(()=>[a(r,{name:"assetCode",label:"资产编号",labelCol:{span:6},rules:[{required:!1,message:"请输入资产编号"}]},{default:t(()=>[a(_,{disabled:"",value:e.assetCode,"onUpdate:value":l[0]||(l[0]=n=>e.assetCode=n)},null,8,["value"])]),_:1})]),_:1},512),[[i,!0]]),d(a(u,{span:12},{default:t(()=>[a(r,{name:"deviceType",label:"智能设备类型",labelCol:{span:6},rules:[{required:!0,message:"请输入智能设备类型"}]},{default:t(()=>[a(_,{value:e.deviceType,"onUpdate:value":l[1]||(l[1]=n=>e.deviceType=n),placeholder:"请输入智能设备类型",disabled:""},null,8,["value"])]),_:1})]),_:1},512),[[i,!0]])]),_:1}),a(g,{gutter:24},{default:t(()=>[d(a(u,{span:12},{default:t(()=>[a(r,{name:"deviceCode",label:"设备编号",labelCol:{span:6},rules:[{required:!0,message:"请输入设备编号"}]},{default:t(()=>[a(_,{disabled:o.value,value:e.deviceCode,"onUpdate:value":l[2]||(l[2]=n=>e.deviceCode=n),placeholder:"请输入设备编号",maxlength:100},null,8,["disabled","value"])]),_:1})]),_:1},512),[[i,!0]]),d(a(u,{span:12},{default:t(()=>[a(r,{name:"simNumber",label:"SIM卡号",labelCol:{span:6},rules:[{required:!0,message:"请输入SIM卡号"}]},{default:t(()=>[a(_,{disabled:o.value,value:e.simNumber,"onUpdate:value":l[3]||(l[3]=n=>e.simNumber=n),placeholder:"请输入SIM卡号",maxlength:50},null,8,["disabled","value"])]),_:1})]),_:1},512),[[i,!0]])]),_:1}),a(g,{gutter:24},{default:t(()=>[d(a(u,{span:12},{default:t(()=>[a(r,{name:"isWireless",label:"是否无线设备",labelCol:{span:6},rules:[{required:!0,message:"请选择是否无线设备"}]},{default:t(()=>[a(be,{value:e.isWireless,"onUpdate:value":l[4]||(l[4]=n=>e.isWireless=n),disabled:o.value,type:"yes_or_no"},null,8,["value","disabled"])]),_:1})]),_:1},512),[[i,!0]]),d(a(u,{span:12},{default:t(()=>[a(r,{name:"purchaseDate",label:"购买日期",labelCol:{span:6},rules:[{required:!0,message:"请选择购买日期"}]},{default:t(()=>[a(x,{value:e.purchaseDate,"onUpdate:value":l[5]||(l[5]=n=>e.purchaseDate=n),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD 00:00:00",style:{width:"100%"},disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[i,!0]])]),_:1}),a(g,{gutter:24},{default:t(()=>[d(a(u,{span:12},{default:t(()=>[a(r,{name:"startDate",label:"启用日期",labelCol:{span:6},rules:[{required:!0,message:"请选择启用日期"}]},{default:t(()=>[a(x,{value:e.startDate,"onUpdate:value":l[6]||(l[6]=n=>e.startDate=n),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD 00:00:00",style:{width:"100%"},disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[i,!0]]),d(a(u,{span:12},{default:t(()=>[a(r,{name:"endDate",label:"有效期止",labelCol:{span:6},rules:[{required:!0,message:"请选择有效期止"}]},{default:t(()=>[a(x,{value:e.endDate,"onUpdate:value":l[7]||(l[7]=n=>e.endDate=n),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD 00:00:00",style:{width:"100%"},disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[i,!0]])]),_:1}),a(g,{gutter:24},{default:t(()=>[d(a(u,{span:12},{default:t(()=>[a(r,{name:"brand",label:"品牌",labelCol:{span:6},rules:[{required:!0,message:"请输入品牌"}]},{default:t(()=>[a(_,{value:e.brand,"onUpdate:value":l[8]||(l[8]=n=>e.brand=n),placeholder:"请输入品牌",disabled:o.value,maxlength:50},null,8,["value","disabled"])]),_:1})]),_:1},512),[[i,!0]]),d(a(u,{span:12},{default:t(()=>[a(r,{name:"model",label:"型号",labelCol:{span:6},rules:[{required:!0,message:"请输入型号"}]},{default:t(()=>[a(_,{value:e.model,"onUpdate:value":l[9]||(l[9]=n=>e.model=n),placeholder:"请输入型号",disabled:o.value,maxlength:50},null,8,["value","disabled"])]),_:1})]),_:1},512),[[i,!0]])]),_:1}),a(g,{gutter:24},{default:t(()=>[d(a(u,{span:12},{default:t(()=>[a(r,{name:"stationName",label:"所属电站",labelCol:{span:6},rules:[{required:!0,message:"请选择所属电站"}]},{default:t(()=>[a(B,{value:e.stationName,"onUpdate:value":l[10]||(l[10]=n=>e.stationName=n),"allow-clear":"","show-search":"",style:{width:"100%"},placeholder:"请选择电站",options:v.value,disabled:o.value,onChange:L},null,8,["value","options","disabled"])]),_:1})]),_:1},512),[[i,!0]]),d(a(u,{span:12},{default:t(()=>[a(r,{name:"userName",label:"当前使用人",labelCol:{span:6},rules:[{required:!1,message:"请选择当前使用人"}]},{default:t(()=>[a(B,{value:e.userName,"onUpdate:value":l[11]||(l[11]=n=>e.userName=n),"show-search":"","allow-clear":"",style:{width:"100%"},placeholder:"请选择当前使用人",options:D.value,onChange:E,disabled:o.value},null,8,["value","options","disabled"])]),_:1})]),_:1},512),[[i,!0]])]),_:1}),a(g,{gutter:24},{default:t(()=>[d(a(u,{span:24},{default:t(()=>[a(r,{name:"remark",label:"备注",labelCol:{span:3},rules:[{required:!1,message:"备注"}]},{default:t(()=>[a(_,{maxlength:500,disabled:o.value,value:e.remark,"onUpdate:value":l[12]||(l[12]=n=>e.remark=n)},null,8,["disabled","value"])]),_:1})]),_:1},512),[[i,!0]])]),_:1})]),_:1}),a(M,{title:"使用记录",bordered:!1},{default:t(()=>[a(N(de),{onRegister:N($)},null,8,["onRegister"])]),_:1}),a(M,{title:"附件信息",bordered:!1},{default:t(()=>[I("div",Ie,[a(ce,{width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"base",module:"eleWorkCard",vmode:o.value?"view":"box",bizId:e.bizFileId},null,8,["vmode","bizId"])])]),_:1})]),_:1},8,["model"])])])]),_:1},8,["spinning"])])}}});export{Ke as default};
//# sourceMappingURL=detail-ace883c5.js.map
