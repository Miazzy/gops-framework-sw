var q=(b,g,h)=>new Promise((B,P)=>{var y=e=>{try{x(h.next(e))}catch(I){P(I)}},o=e=>{try{x(h.throw(e))}catch(I){P(I)}},x=e=>e.done?B(e.value):Promise.resolve(e.value).then(y,o);x((h=h.apply(b,g)).next())});import{d as ne,ax as se,u as f,k as M,r as j,o as oe,al as c,Z as D,a9 as C,aa as n,$ as w,f as a,E as N,ad as $,v as d,ac as m,A as u,aG as ie,aH as re}from"./vue-71d1abb3.js";import{b as de,au as ue,av as pe,aD as ce,ax as fe,a7 as me,aC as ve,_ as _e}from"./index.js";import{_ as U}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{B as be}from"./BasicTable-0434a334.js";import{T as ge}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as he}from"./useTable-109483b3.js";import{K as ye,a2 as R}from"./antd-15ac76ed.js";import{b as xe,f as Ie,h as De,i as Ce,j as we}from"./data-46d0e574.js";import{x as ke}from"./index-66d20ba6.js";import{U as Ue}from"./UploadBox-636ecf02.js";import{P as Ye}from"./index-20519caf.js";import{a as E}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./Dialog-0a006d82.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";const Se=b=>(ie("data-v-4226e782"),b=b(),re(),b),Me={class:"load"},Be={class:"process-box"},Pe={class:"header-box"},Te=Se(()=>w("div",{class:"header-left"},"人员持证",-1)),qe={class:"header-right"},Ne={class:"content"},$e=ne({__name:"certificateDrawer",setup(b){const{t:g}=de(),h=se(),{currentRoute:B}=h,y=f(B).query,o=M(!0),x=j({});x.title="人员持证",x.infoItems=[];const e=j({}),I=M([]),F=M(!1),O=M(),{createMessage:H}=ue(),z=s=>s&&s>=ye().endOf("day");oe(()=>q(this,null,function*(){if(E(e,y),y.id){const s=yield xe({id:y.id});s.result&&E(e,s.result)}o.value=!1,e.spinning=!1,y.type&&(o.value=!0),L()}));function L(){e.stationId!=""&&e.stationId!=null&&Ie("?stationId="+e.stationId).then(s=>{s&&s.length>0&&s.forEach(l=>{I.value.push({value:l.name,lable:l.userId})})})}function V(s,l){e.personId=l.lable}const G=()=>q(this,null,function*(){let s={personCertificateBizId:e.id},l=[];return e.id!=null&&(l=yield Ce(s)),l}),[K,{getDataSource:Y}]=he({api:G,columns:De,pagination:!1,striped:!1,useSearchForm:!1,showTableSetting:!1,bordered:!0,showIndexColumn:!0,canResize:!0,actionColumn:{width:100,title:g("common.operate"),dataIndex:"action",fixed:"right"}});function W(){const s={};Y().push(Z(s))}function Z(s){return s.editable=!0,s.isNew=!0,s.key=`${Date.now()}`,s.bizFileId=ce(),s}function J(s){const l=Y();let p=l.indexOf(s);p!==-1&&l.splice(p,1)}function Q(){fe("/po/integrated/personcertificate")}function X(){e.spinning=!0;try{O.value.validateFields().then(()=>{if(e.detail=Y(),Y().length==0){R.error("证书明细列表不能为空。"),e.spinning=!1;return}ee(e.detail,{certificateType:"证书类型",certificateName:"证书名称",issuingAuthority:"颁证机构"}),we(e).then(s=>{e.id=s,H.success("保存成功"),me.getInstance().sendMsg("person-certificate",{}),ve()})})}catch(s){console.log("error",s)}finally{e.spinning=!1}}function ee(s,l){for(let p=0;p<s.length;p++){const _=s[p];for(const i in l)if(!ke.trim(_[i])){const r=l[i]+"不能为空";throw R.error(r),e.spinning=!1,new Error(r)}}}return(s,l)=>{const p=c("a-button"),_=c("a-input"),i=c("a-form-item"),r=c("a-col"),ae=c("a-select"),S=c("a-row"),T=c("a-date-picker"),A=c("a-card"),te=c("a-form"),le=c("a-spin");return D(),C(f(Ye),{detail:!0,dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"fix-detail-page",style:{position:"relative"}},{default:n(()=>[w("div",Me,[a(le,{spinning:e.spinning,tip:"Loading..."},{default:n(()=>[w("div",Be,[w("div",Pe,[Te,w("div",qe,[a(p,{style:{"margin-right":"10px"},onClick:Q},{default:n(()=>[N($(f(g)("common.cancelText")),1)]),_:1}),a(p,{type:"primary",onClick:X,loading:F.value,disabled:o.value},{default:n(()=>[N($(f(g)("common.saveText")),1)]),_:1},8,["loading","disabled"])])]),w("div",Ne,[a(te,{ref_key:"formRef",ref:O,model:e,labelAlign:"right",autocomplete:"off"},{default:n(()=>[a(A,{title:"基本信息",bordered:!1},{default:n(()=>[a(S,{gutter:24},{default:n(()=>[d(a(r,{span:8},{default:n(()=>[a(i,{name:"stationName",label:"电站名称",labelCol:{span:6},rules:[{required:!1}]},{default:n(()=>[a(_,{disabled:"",value:e.stationName,"onUpdate:value":l[0]||(l[0]=t=>e.stationName=t)},null,8,["value"]),m("",!0),m("",!0),m("",!0),m("",!0)]),_:1})]),_:1},512),[[u,!0]]),d(a(r,{span:8},{default:n(()=>[a(i,{name:"person",label:"姓名",labelCol:{span:6},rules:[{required:!0,message:"请选择姓名"}]},{default:n(()=>[a(ae,{value:e.person,"onUpdate:value":l[5]||(l[5]=t=>e.person=t),"show-search":"","allow-clear":"",style:{width:"100%"},options:I.value,onChange:V,disabled:o.value},null,8,["value","options","disabled"])]),_:1})]),_:1},512),[[u,!0]]),d(a(r,{span:8},{default:n(()=>[a(i,{name:"sex",label:"性别",labelCol:{span:6},rules:[{required:!0,message:"请选择性别"}]},{default:n(()=>[a(U,{value:e.sex,"onUpdate:value":l[6]||(l[6]=t=>e.sex=t),type:"system_user_sex",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]])]),_:1}),a(S,{gutter:24},{default:n(()=>[d(a(r,{span:8},{default:n(()=>[a(i,{name:"status",label:"状态",labelCol:{span:6},rules:[{required:!0,message:"请选择状态"}]},{default:n(()=>[a(U,{value:e.status,"onUpdate:value":l[7]||(l[7]=t=>e.status=t),type:"personnelStatus",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]]),d(a(r,{span:8},{default:n(()=>[a(i,{name:"postion",label:"岗位",labelCol:{span:6},rules:[{required:!0,message:"请选择岗位"}]},{default:n(()=>[a(U,{value:e.postion,"onUpdate:value":l[8]||(l[8]=t=>e.postion=t),type:"personPost",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]]),d(a(r,{span:8},{default:n(()=>[a(i,{name:"birthday",label:"出生日期",labelCol:{span:6},rules:[{required:!0,message:"请选择出生日期"}]},{default:n(()=>[a(T,{value:e.birthday,"onUpdate:value":l[9]||(l[9]=t=>e.birthday=t),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",style:"width: 100%",disabled:o.value,"disabled-date":z},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]])]),_:1}),a(S,{gutter:24},{default:n(()=>[d(a(r,{span:8},{default:n(()=>[a(i,{name:"education",label:"学历",labelCol:{span:6},rules:[{required:!0,message:"请选择学历"}]},{default:n(()=>[a(U,{value:e.education,"onUpdate:value":l[10]||(l[10]=t=>e.education=t),type:"degree",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]]),d(a(r,{span:8},{default:n(()=>[a(i,{name:"phone",label:"电话",labelCol:{span:6},rules:[{required:!0,message:"请输入电话号码"}]},{default:n(()=>[a(_,{value:e.phone,"onUpdate:value":l[11]||(l[11]=t=>e.phone=t),placeholder:"请输入电话号码",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]]),d(a(r,{span:8},{default:n(()=>[a(i,{name:"email",label:"邮箱",labelCol:{span:6},rules:[{required:!0,message:"请输入邮箱"}]},{default:n(()=>[a(_,{value:e.email,"onUpdate:value":l[12]||(l[12]=t=>e.email=t),placeholder:"请输入邮箱",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]])]),_:1}),a(S,{gutter:24},{default:n(()=>[d(a(r,{span:8},{default:n(()=>[a(i,{name:"joinDate",label:"入职时间",labelCol:{span:6},rules:[{required:!0,message:"请选择入职时间"}]},{default:n(()=>[a(T,{value:e.joinDate,"onUpdate:value":l[13]||(l[13]=t=>e.joinDate=t),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",style:"width: 100%",disabled:o.value,"disabled-date":z},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]]),d(a(r,{span:8},{default:n(()=>[a(i,{name:"departDate",label:"离职时间",labelCol:{span:6},rules:[{required:!1,message:"请选择离职时间"}]},{default:n(()=>[a(T,{value:e.departDate,"onUpdate:value":l[14]||(l[14]=t=>e.departDate=t),format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",style:"width: 100%",disabled:o.value},null,8,["value","disabled"])]),_:1})]),_:1},512),[[u,!0]])]),_:1})]),_:1}),a(A,{bordered:!1},{default:n(()=>[a(f(be),{onRegister:f(K),title:"证书信息"},{toolbar:n(()=>[a(p,{type:"primary",preIcon:f(pe).ADD,onClick:W,disabled:o.value},{default:n(()=>[N($(f(g)("common.action.create")),1)]),_:1},8,["preIcon","disabled"])]),bodyCell:n(({column:t,record:v})=>[t.dataIndex==="certificateType"?(D(),C(U,{key:0,type:"certificate",value:v[t.dataIndex],"onUpdate:value":k=>v[t.dataIndex]=k,style:{width:"100%"},disabled:o.value},null,8,["value","onUpdate:value","disabled"])):m("",!0),t.dataIndex==="certificateName"?(D(),C(_,{key:1,value:v[t.dataIndex],"onUpdate:value":k=>v[t.dataIndex]=k,maxlenth:1e3,disabled:o.value},null,8,["value","onUpdate:value","disabled"])):m("",!0),t.dataIndex==="issuingAuthority"?(D(),C(_,{key:2,value:v[t.dataIndex],"onUpdate:value":k=>v[t.dataIndex]=k,maxlenth:1e3,disabled:o.value},null,8,["value","onUpdate:value","disabled"])):m("",!0),t.dataIndex==="bizFileId"?(D(),C(Ue,{key:3,width:800,height:550,maxCount:20,maxSize:100*1024*1024,application:"po",module:"supervisiondtl",vmode:e.type!="view"?"box":"view",bizId:v[t.dataIndex]},null,8,["vmode","bizId"])):m("",!0),t.dataIndex==="action"?(D(),C(f(ge),{key:4,actions:[{tooltip:"删除",color:"error",icon:"ant-design:delete-outlined",ifShow:!o.value,onClick:J.bind(null,v)}]},null,8,["actions"])):m("",!0)]),_:1},8,["onRegister"])]),_:1})]),_:1},8,["model"])])])]),_:1},8,["spinning"])])]),_:1})}}});const pa=_e($e,[["__scopeId","data-v-4226e782"]]);export{pa as default};
//# sourceMappingURL=certificateDrawer-0c968792.js.map
