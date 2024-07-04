var m=(N,k,l)=>new Promise((h,n)=>{var f=u=>{try{i(l.next(u))}catch(g){n(g)}},v=u=>{try{i(l.throw(u))}catch(g){n(g)}},i=u=>u.done?h(u.value):Promise.resolve(u.value).then(f,v);i((l=l.apply(N,k)).next())});import{d as ue,r as R,k as d,o as ce,al as _,Z as D,a9 as U,aa as o,f as s,$ as Y,u as p,E as I,ac as j,v as F,A,a7 as de,G as pe,_ as me,ad as fe}from"./vue-71d1abb3.js";import{B as ve}from"./BasicTable-0434a334.js";import{T as ge}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as _e}from"./useTable-109483b3.js";import{a2 as L,K as z}from"./antd-15ac76ed.js";import{au as ye,av as H,a0 as C,ad as S,_ as he}from"./index.js";import{P as be}from"./index-20519caf.js";import{C as Ie}from"./CommonTree-c4ed7838.js";import{e as Ce}from"./download-03e71dd5.js";import{D as O}from"./Dialog-0a006d82.js";import{g as Se,a as ke,b as xe,i as we,p as Te,c as De,e as Ye,d as Fe,f as Ae}from"./sunriseSet-0b84dccb.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";const Le={class:"right-table-layout"},Oe={class:"dialog-loading"},Ee={key:0,class:"dialog-mask"},E="CREATE_SUN_DATA",Ne=ue({__name:"sunriseSet",setup(N){const{createConfirm:k}=ye(),l=R({}),h=d([]),n=d({}),f=d(!1),v=d(!1),i=d(0),u=d(!1),g=d(!1),c=R({startYear:"",endYear:"",stationId:""}),x=d("");let B=d([]);const M=ke();let y=d();const W=()=>m(this,null,function*(){return n.value.searchId==null?[]:(n.value.sortField=l.sortField,n.value.sortOrder=l.sortOrder,(yield Ae(n.value)).result)}),[q,{reload:w}]=_e({title:"日出日落列表",api:W,rowKey:"id",columns:Fe,useSearchForm:!1,showTableSetting:!0,bordered:!0,pagination:!1,handleSearchInfoFn(e){return e},actionColumn:{title:"操作",dataIndex:"action"},sortFn:e=>{e.order?(l.sortField=e.field,l.sortOrder=e.order.replace("end","")):(l.sortField="",l.sortOrder="")}}),G={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}};function Q(){return m(this,null,function*(){const e=yield xe({});h.value=e.result;let t=e.result[0];n.value.nodeKindId=t.nodeKindId,n.value.searchId=t.id,w()})}function K(){f.value=!1}function Z(){if(!C().getSunSetCreateFlag){L.info("数据生成中，请稍后操作。"),v.value=!0;return}if(n.value.stationId==null){L.error("请先选择电站。");return}f.value=!0;let t=new Date,a=t.getFullYear().toString(),b=(t.getFullYear()+25).toString();c.startYear=a,c.endYear=b,y.value=[z(a,"YYYY"),z(b,"YYYY")]}function J(e,t){c.startYear=t[0],c.endYear=t[1]}function X(){c.stationId=n.value.stationId,we(c).then(t=>{});let e=(c.endYear-c.startYear+1)*40;L.success("数据生成预计耗时："+e+"s，请稍后刷新列表。"),v.value=!0,f.value=!1,$()}const $=()=>m(this,null,function*(){C().setSunSetCreateFlag(!1),S.getInstance().start(),C().getSunSetCreateFlag?S.getInstance().removeListTask(E):S.getInstance().pushListTask(E,ee,3e3)}),P=e=>new Promise(t=>setTimeout(t,e)),ee=()=>m(this,null,function*(){try{Te(c).then(e=>m(this,null,function*(){if(e.result>98){let t=2500/(100-i.value);for(let a=i.value;a<=100;a++)yield P(t),i.value=a;C().setSunSetCreateFlag(!0),v.value=!1,i.value=0,w(),S.getInstance().removeListTask(E)}else{let t=2500/(e.result-i.value);for(let a=i.value;a<=e.result;a++)yield P(t),i.value=a}}))}catch(e){}});function te(e={}){n.value.stationId=null,e.id!=null&&e.nodeKindId=="station"&&(n.value.stationId=e.powerStationId),n.value.nodeKindId=e.nodeKindId,n.value.searchId=e.id,w()}function ae(e){u.value=!0;let t={stationId:e.stationId,year:e.year};l.stationId=e.stationId,l.year=e.year,x.value=e.stationName,De(t).then(a=>{B.value=a.result})}function se(){u.value=!1}function le(){k({title:"提示",iconType:"warning",content:"确定要导出所有记录？",zIndex:10010,onOk(){return m(this,null,function*(){Ye(l).then(t=>{Ce(t==null?void 0:t.data,x.value+"-日出数据.xls")})})}})}return ce(()=>m(this,null,function*(){yield Q()})),(e,t)=>{const a=_("a-button"),b=_("a-spin"),ne=_("a-range-picker"),oe=_("a-form-item"),re=_("a-form"),V=_("a-progress"),ie=_("a-table");return D(),U(p(be),{class:"sunrise-page-wrapper",dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:o(()=>[s(Ie,{title:"电站组织",onSelect:te,value:h.value,class:"left-tree-layout",canEdit:!1,canAdd:!1,canDelete:!1,isShowOperationBtns:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),Y("div",Le,[s(p(ve),{onRegister:p(q),class:"fix-basic-table",searchInfo:l,onResizeColumn:t[0]||(t[0]=(r,T)=>T.width=r),scroll:{y:"calc(100vh )"}},{toolbar:o(()=>[s(a,{type:"primary",preIcon:p(H).ADD,onClick:Z},{default:o(()=>[I("生成数据")]),_:1},8,["preIcon"])]),bodyCell:o(({column:r,record:T})=>[r.key==="action"?(D(),U(p(ge),{key:0,actions:p(Se)(ae,T)},null,8,["actions"])):j("",!0)]),_:1},8,["onRegister","searchInfo","scroll"])]),s(O,{visible:f.value,"onUpdate:visible":t[2]||(t[2]=r=>f.value=r),width:"600px",height:"200px",title:"生成数据",onCancel:K},{footer:o(()=>[s(a,{key:"back",onClick:K},{default:o(()=>[I("取消")]),_:1}),s(a,{key:"submit",type:"primary",style:{"margin-left":"5px"},onClick:X},{default:o(()=>[I("确定")]),_:1})]),default:o(()=>[F(Y("div",Oe,[s(b)],512),[[A,g.value]]),s(re,de({model:c,name:"createCycle",labelAlign:"center"},G),{default:o(()=>[s(oe,{name:"formState.selectYear",label:"年份范围"},{default:o(()=>[s(ne,{value:p(y),"onUpdate:value":t[1]||(t[1]=r=>pe(y)?y.value=r:y=r),picker:"year",onChange:J},null,8,["value"])]),_:1})]),_:1},16,["model"]),F(s(V,{percent:30},null,512),[[A,g.value]])]),_:1},8,["visible"]),s(O,{style:{margin:"auto"},visible:v.value,"onUpdate:visible":t[3]||(t[3]=r=>v.value=r),title:"数据生成进度",showBtm:!1,height:"100px",target:""},{default:o(()=>[F(s(V,{percent:i.value},null,8,["percent"]),[[A,!0]])]),_:1},8,["visible"]),g.value?(D(),me("div",Ee)):j("",!0),s(O,{visible:u.value,"onUpdate:visible":t[4]||(t[4]=r=>u.value=r),title:x.value,width:"1000px",height:"680px",onCancel:se},{footer:o(()=>[s(a,{key:"submit",preIcon:p(H).DOWNLOAD,loading:e.loading,onClick:le},{default:o(()=>[I("导出")]),_:1},8,["preIcon","loading"])]),default:o(()=>[s(ie,{columns:p(M),"data-source":p(B),pagination:!1,size:"small",scroll:{y:"500px"},bordered:""},{bodyCell:o(({text:r})=>[Y("span",null,fe(r),1)]),_:1},8,["columns","data-source"])]),_:1},8,["visible","title"])]),_:1})}}});const ct=he(Ne,[["__scopeId","data-v-4f542805"]]);export{ct as default};
//# sourceMappingURL=sunriseSet-662872de.js.map
