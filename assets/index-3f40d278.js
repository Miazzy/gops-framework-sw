var r=(i,f,l)=>new Promise((x,c)=>{var g=n=>{try{o(l.next(n))}catch(p){c(p)}},y=n=>{try{o(l.throw(n))}catch(p){c(p)}},o=n=>n.done?x(n.value):Promise.resolve(n.value).then(g,y);o((l=l.apply(i,f)).next())});import{a5 as w,au as P,b as S,ak as D,av as R,ax as V,a0 as N,_ as E}from"./index.js";import{B as L}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as O}from"./useTable-109483b3.js";import{K as B}from"./antd-15ac76ed.js";import{d as M,ax as A,k as H,u,o as $,al as W,Z as h,a9 as j,aa as d,f as v,_ as I,ad as q,ac as k,F as z,E as C}from"./vue-71d1abb3.js";import{P as J}from"./index-20519caf.js";import{e as K}from"./download-03e71dd5.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";const Q=[{field:"year",component:"YearPicker",label:"考评年度",defaultValue:B(new Date).format("YYYY"),componentProps:{width:"100%",format:"YYYY",valueFormat:"YYYY"},required:!0}],U=i=>w.get({url:"/po/monthly-evaluation/report",params:i},{isOnlyResult:!0}),X=i=>w.post({url:"/po/monthly-evaluation/export",params:i,responseType:"blob"},{isReturnNativeResponse:!0}),Z=["onClick"],G=M({__name:"index",setup(i){const f=A(),{createConfirm:l,createMessage:x}=P();S();const c=H([]),g=()=>r(this,null,function*(){yield p();let t=o().getFieldsValue();return yield U(t)}),[y,{getForm:o}]=O({title:"得分详情",api:g,columns:c,showIndexColumn:!1,useSearchForm:!0,showTableSetting:!1,bordered:!0,pagination:!1,handleSearchInfoFn(t){return t},formConfig:{labelWidth:120,actionColOptions:{span:24},autoAdvancedLine:1,baseColProps:{span:7},schemas:Q,autoSubmitOnEnter:!0}});function n(t,a,e){e[a]>0&&V(`/po/integrated/assessmentevaluation/monthly/stationDtl?evaluationPeriod=${t}&stationId=${e.stationId}`)}const p=()=>r(this,null,function*(){let t=[{title:"所属公司",dataIndex:"orgName",align:"left",width:150,ifShow:N().isMultiOrganization},{title:"电站名称",dataIndex:"stationName",align:"left",width:150}],a=o().getFieldsValue();if(a.year!=null){for(let e=1;e<=12;e++){let s=a.year+"-"+(e>9?e+"":"0"+e),m=a.year+(e>9?e+"":"0"+e),_={title:s,dataIndex:m,align:"center",width:100};t.push(_)}t.push({title:"年度平均分",dataIndex:"yearAvg",align:"center"})}return c.value=t,t}),F=()=>r(this,null,function*(){l({title:"提示",iconType:"warning",content:"确定要导出所有记录？",onOk(){return r(this,null,function*(){let a=o().getFieldsValue();a.excelList=c.value,yield X(a).then(e=>{K(e==null?void 0:e.data,"评价报表.xls")})})}})}),{currentRoute:Y}=f;u(Y);const b=D.getInstance().getQuery(),T=()=>r(this,null,function*(){let t=new Date(b.startDate+"-01"),a=o().getFieldsValue();a.year=t.getFullYear()+"",o().setFieldsValue(a)});return $(()=>r(this,null,function*(){b.dateType!=null&&T(),p()})),(t,a)=>{const e=W("a-button");return h(),j(u(J),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:d(()=>[v(u(L),{onRegister:u(y),searchInfo:t.searchInfo,class:"fix-basic-table"},{bodyCell:d(({column:s,text:m,record:_})=>[s.key!="stationName"&&s.key!="orgName"&&s.key!="yearAvg"&&m!=0?(h(),I("a",{key:0,onClick:ee=>n(s.customTitle,s.key,_)},q(m),9,Z)):k("",!0),m==0?(h(),I(z,{key:1},[C("   ")],64)):k("",!0)]),toolbar:d(()=>[v(e,{class:"yellow-btn",onClick:F,preIcon:u(R).EXPORT},{default:d(()=>[C(" 导出 ")]),_:1},8,["preIcon"])]),_:1},8,["onRegister","searchInfo"])]),_:1})}}});const Fe=E(G,[["__scopeId","data-v-dda926df"]]);export{Fe as default};
//# sourceMappingURL=index-3f40d278.js.map