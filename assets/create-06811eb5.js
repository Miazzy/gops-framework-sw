var N=(I,x,c)=>new Promise((y,l)=>{var p=i=>{try{b(c.next(i))}catch(e){l(e)}},u=i=>{try{b(c.throw(i))}catch(e){l(e)}},b=i=>i.done?y(i.value):Promise.resolve(i.value).then(p,u);b((c=c.apply(I,x)).next())});import{P as B}from"./index-20519caf.js";import{aj as G,aw as L,at as h,a7 as R,_ as S}from"./index.js";import{g as U,c as A}from"./create-58f7bc33.js";import{_ as F}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{B as V}from"./BillTitle-d17ab3e4.js";import{_ as $}from"./dtlList.vue_vue_type_script_setup_true_lang-652a23af.js";import H from"./stationList-1d845d5c.js";import{d as E,k as _,r as M,o as O,al as s,Z as W,a9 as Z,aa as o,$ as f,f as t,E as z,u as J}from"./vue-71d1abb3.js";import"./useContentViewHeight-7f845167.js";import"./useWindowSizeFn-13b1b8a2.js";import"./antd-15ac76ed.js";import"./Dialog-0a006d82.js";import"./BasicTable-0434a334.js";import"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-f4fc48e6.js";import"./index-316f6ffb.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./OrganDialog-dd1023ce.js";import"./uniqBy-92d3bc7f.js";import"./index-085d06c7.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useTable-109483b3.js";const Q={class:"load"},X={class:"process-box"},Y={class:"header-box"},ee={class:"header-right"},te={class:"content"},ae={id:"more-tab-content",class:"tab-table-div"},oe=E({__name:"create",setup(I){const x=_(!0),c=_([]),y=_(),l=_(null),p=_(null),u=_("dtlChild"),b=m=>{l.value.reloadGrid({inspectionPlanId:e.id,activeKey:u.value}),p.value.reloadGrid({inspectionPlanId:e.id,activeKey:u.value})};let{params:i}=G();const e=M({id:i.id||"",status:0,spinning:!1}),P=M({subject:"巡检计划"}),q=()=>{const m=y.value;m&&m.validateFields().then(()=>{e.dtl=l.value.getDataSource();let n=p.value.getDataSource();for(let a=0;a<n.length;a++){let r=n[a];if(!r.inspectionPeriod)return h.getInstance().error("巡检频率不能为空."),!1;if(!r.acount)return h.getInstance().error("次数不能为空."),!1;if(!r.startDate)return h.getInstance().error("起算日期不能为空."),!1}e.stationDtl=n,e.spinning=!0,A(e).then(a=>{a.result!=""?(e.id=a.result,l.value.reloadGrid({inspectionPlanId:e.id,forceReload:!0}),p.value.reloadGrid({inspectionPlanId:e.id,forceReload:!0}),h.getInstance().success("保存成功."),R.getInstance().sendMsg("inspection-plan",{})):(e.status=0,h.getInstance().error("保存失败.")),e.spinning=!1}).catch(a=>{x.value=!1,e.status=0,e.spinning=!1,console.log(a)})})};return O(()=>N(this,null,function*(){U({id:e.id}).then(n=>{let a=n.result;if(e.id){for(let C in a)e[C]=a[C];e.status=Number(e.status)}else e.billCode=a.billCode,e.personMemberName=a.personMemberName,e.fillinDate=a.fillinDate,e.deptName=a.deptName,e.editable=0;let{billCode:r,fillinDate:v,personMemberName:g,deptName:k}=a;Object.assign(P,{billCode:r,fillinDate:v,personMemberName:g,deptName:k}),l.value.reloadGrid({inspectionPlanId:e.id})});const m=yield L({dictTypeList:"check_period"});c.value=m.result.check_period})),(m,n)=>{const a=s("a-button"),r=s("a-input"),v=s("a-form-item"),g=s("a-col"),k=s("a-textarea"),C=s("a-row"),w=s("a-card"),T=s("a-form"),D=s("a-tab-pane"),j=s("a-tabs"),K=s("a-spin");return W(),Z(J(B),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:o(()=>[f("div",Q,[t(K,{spinning:e.spinning,tip:"Loading..."},{default:o(()=>[f("div",X,[f("div",Y,[t(V,{options:P},null,8,["options"]),f("div",ee,[t(a,{type:"primary","html-type":"submit",onClick:q},{default:o(()=>[z("保存")]),_:1})])]),f("div",te,[t(T,{model:e,name:"basic",ref_key:"formRef",ref:y,autocomplete:"off"},{default:o(()=>[t(w,{title:"基本信息",bordered:!1},{default:o(()=>[t(C,{gutter:32},{default:o(()=>[t(g,{span:12},{default:o(()=>[t(v,{label:"主题",name:"subject",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"主题不能为空。"}]},{default:o(()=>[t(r,{value:e.subject,"onUpdate:value":n[0]||(n[0]=d=>e.subject=d),disabled:e.editable!=0,maxlength:"128"},null,8,["value","disabled"])]),_:1})]),_:1}),t(g,{span:12},{default:o(()=>[t(v,{label:"巡检区域",name:"inspectionAreaType",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"巡检区域不能为空。"}]},{default:o(()=>[t(F,{type:"commDeviceCategory",disabled:e.editable!=0,value:e.inspectionAreaType,"onUpdate:value":n[1]||(n[1]=d=>e.inspectionAreaType=d),style:{width:"100%"}},null,8,["disabled","value"])]),_:1})]),_:1}),t(g,{span:24},{default:o(()=>[t(v,{label:"巡检要求",name:"requirement",labelCol:{style:{width:"124px"}},rules:[{required:!0,message:"巡检要求不能为空"}]},{default:o(()=>[t(k,{value:e.requirement,"onUpdate:value":n[2]||(n[2]=d=>e.requirement=d),row:"3",maxlength:"1000",disabled:e.editable!=0},null,8,["value","disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),t(w,{title:"",bordered:!1},{default:o(()=>[f("div",ae,[t(j,{activeKey:u.value,"onUpdate:activeKey":n[3]||(n[3]=d=>u.value=d),onChange:b},{default:o(()=>[t(D,{key:"dtlChild",tab:"巡检清单"},{default:o(()=>[t($,{ref_key:"dtlChild",ref:l},null,512)]),_:1}),t(D,{key:"stationChild",tab:"电站","force-render":""},{default:o(()=>[t(H,{ref_key:"stationChild",ref:p},null,512)]),_:1})]),_:1},8,["activeKey"])])]),_:1})])])]),_:1},8,["spinning"])])]),_:1})}}});const Ke=S(oe,[["__scopeId","data-v-59541f3f"]]);export{Ke as default};
//# sourceMappingURL=create-06811eb5.js.map
