var g=(s,n,a)=>new Promise((l,d)=>{var _=o=>{try{r(a.next(o))}catch(c){d(c)}},u=o=>{try{r(a.throw(o))}catch(c){d(c)}},r=o=>o.done?l(o.value):Promise.resolve(o.value).then(_,u);r((a=a.apply(s,n)).next())});import{B as P}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as k}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{_ as M}from"./index.js";import{g as C,c as D,a as B}from"./data-bbb94d0f.js";import{d as S,k as v,o as I,al as f,Z as F,a9 as R,aa as w,$ as t,f as p,E as U,u as b,aG as V,aH as W}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const h=s=>(V("data-v-ec198393"),s=s(),W(),s),N={class:"w-2/6"},A={class:"info-content-box"},z={class:"device-info-box"},E={class:"info-row"},G=h(()=>t("span",{class:"label",style:{width:"5em"}},"开始时间：",-1)),K={class:"info-row"},Z=h(()=>t("span",{class:"label",style:{width:"5em"}},"结束时间：",-1)),$={class:"info-row search-btn"},j={class:"info-row"},q=h(()=>t("div",{class:"w-4/6 box"},[t("div",{id:"Player"})],-1)),J=S({__name:"history",setup(s){const n=v(),a=v(),l=v(),d=()=>g(this,null,function*(){const e={startTime:a.value,endTime:l.value};return e.startTime&&(e.startTime=e.startTime+":00"),e.endTime&&(e.endTime=e.endTime+":59"),yield B(e)}),[_,{reload:u}]=k({api:d,columns:D,useSearchForm:!1,showTableSetting:!1,bordered:!0,pagination:!1,rowKey:"id",rowSelection:{type:"radio"}}),r=()=>{u()},o=e=>{console.log("record",e),n.value.play(e.filePath,1)},c=()=>{n.value=new WasmPlayer(null,"Player",T,{cbUserPtr:this,decodeType:"auto",live:!0,openAudio:1,closeAudio:0,BigPlay:!1,Height:!0}),n.value.play(C,1)},T=e=>{console.log("callbackFun",e)};return I(()=>{c()}),(e,i)=>{const y=f("a-date-picker"),Y=f("a-button"),x=f("PageWrapper");return F(),R(x,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{display:"flex",position:"relative",height:"100%"}},{default:w(()=>[t("div",N,[t("div",A,[t("div",z,[t("div",E,[G,p(y,{value:a.value,"onUpdate:value":i[0]||(i[0]=m=>a.value=m),format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm","show-time":"",style:{width:"100%"}},null,8,["value"])]),t("div",K,[Z,p(y,{value:l.value,"onUpdate:value":i[1]||(i[1]=m=>l.value=m),format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm","show-time":"",style:{width:"100%"}},null,8,["value"])]),t("div",$,[p(Y,{class:"operation-btn",type:"primary",onClick:r},{default:w(()=>[U("查询")]),_:1})]),t("div",j,[p(b(P),{onRegister:b(_),onResizeColumn:i[2]||(i[2]=(m,H)=>H.width=m),onRowClick:o},null,8,["onRegister"])])])])]),q]),_:1})}}});const we=M(J,[["__scopeId","data-v-ec198393"]]);export{we as default};
//# sourceMappingURL=history-96399f3d.js.map
