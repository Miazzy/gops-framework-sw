var v=(o,p,i)=>new Promise((r,a)=>{var _=t=>{try{m(i.next(t))}catch(l){a(l)}},u=t=>{try{m(i.throw(t))}catch(l){a(l)}},m=t=>t.done?r(t.value):Promise.resolve(t.value).then(_,u);m((i=i.apply(o,p)).next())});import{B as g}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as I}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{_ as x}from"./index.js";import{j as k}from"./index-0c1c0ee9.js";import{d as C,k as h,al as w,Z as D,_ as M,$ as s,f as c,aa as S,E as V,u as y,aG as B,aH as R}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const T=o=>(B("data-v-6f93c330"),o=o(),R(),o),N={class:"info-content-box"},P={class:"device-info-box"},z={class:"info-row"},E=T(()=>s("span",{class:"label",style:{width:"5em"}},"开始时间：",-1)),F={class:"info-row"},U=T(()=>s("span",{class:"label",style:{width:"5em"}},"结束时间：",-1)),j={class:"info-row search-btn"},G={class:"info-row"},K=C({__name:"HistoryVideo",props:{inspectionInstrumentId:String},emits:["row-click"],setup(o,{emit:p}){const i=o,r=h(),a=h(),_=()=>v(this,null,function*(){const e={startTime:r.value,endTime:a.value,inspectionInstrumentId:i.inspectionInstrumentId,fileType:"video"};return e.startTime&&(e.startTime=e.startTime+":00"),e.endTime&&(e.endTime=e.endTime+":59"),yield k(e)}),u=[{title:"录制时间",dataIndex:"fileCreateTime",width:140},{title:"文件大小",dataIndex:"fileLength",width:140}],[m,{reload:t}]=I({api:_,columns:u,useSearchForm:!1,showTableSetting:!1,bordered:!0,rowKey:"id",resizeHeightOffset:10}),l=()=>{t()},Y=e=>{p("row-click",e)};return(e,n)=>{const f=w("a-date-picker"),H=w("a-button");return D(),M("div",N,[s("div",P,[s("div",z,[E,c(f,{value:r.value,"onUpdate:value":n[0]||(n[0]=d=>r.value=d),format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm","show-time":"",style:{width:"100%"}},null,8,["value"])]),s("div",F,[U,c(f,{value:a.value,"onUpdate:value":n[1]||(n[1]=d=>a.value=d),format:"YYYY-MM-DD HH:mm","value-format":"YYYY-MM-DD HH:mm","show-time":"",style:{width:"100%"}},null,8,["value"])]),s("div",j,[c(H,{class:"operation-btn",type:"primary",onClick:l},{default:S(()=>[V("查询")]),_:1})]),s("div",G,[c(y(g),{onRegister:y(m),onResizeColumn:n[2]||(n[2]=(d,b)=>b.width=d),onRowClick:Y},null,8,["onRegister"])])])])}}});const ue=x(K,[["__scopeId","data-v-6f93c330"]]);export{ue as default};
//# sourceMappingURL=HistoryVideo-cec157e4.js.map
