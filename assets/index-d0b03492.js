var ge=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var ve=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var j=(s,t,e)=>t in s?ge(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,q=(s,t)=>{for(var e in t||(t={}))ve.call(t,e)&&j(s,e,t[e]);if(Z)for(var e of Z(t))ye.call(t,e)&&j(s,e,t[e]);return s};var m=(s,t,e)=>new Promise((l,_)=>{var C=c=>{try{w(e.next(c))}catch(f){_(f)}},F=c=>{try{w(e.throw(c))}catch(f){_(f)}},w=c=>c.done?l(c.value):Promise.resolve(c.value).then(C,F);w((e=e.apply(s,t)).next())});import{d as be,ax as _e,u as g,k as b,r as G,o as xe,al as v,Z as X,_ as we,$ as R,f as p,aa as d,E as Ie,ad as De,a9 as Se,v as J,A as Q,ac as Ce,aG as Ye,aH as Re}from"./vue-71d1abb3.js";import{a5 as x,a0 as T,b as Te,au as Fe,av as Oe,_ as Pe}from"./index.js";import{u as Ne,B as Ee}from"./useForm-dea3ed18.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import{B as Be}from"./BasicTable-0434a334.js";import"./index-085d06c7.js";import{u as qe}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import"./index-d8a2358f.js";import{e as Ae}from"./download-03e71dd5.js";import{i as Me}from"./install-58e0bd81.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const ke=s=>x.get({url:"/bi/report-form/preview/company-list",params:s},{isOnlyResult:!0}),Le=s=>x.get({url:"/bi/report-form/preview/station-list",params:s},{isOnlyResult:!0}),Ve=s=>x.get({url:`/bi/report-form/preview/config?reportFormId=${s}`},{isOnlyResult:!0}),ze=s=>x.get({url:"/bi/report-form/preview/page",params:s},{isOnlyResult:!0}),He=s=>x.get({url:"/bi/report-form/preview/chart",params:s},{isOnlyResult:!0}),$e=s=>x.post({url:"/bi/report-form/preview/export-excel",params:s,responseType:"blob"},{isOnlyResult:!0}),Ke=s=>[{field:"timeDimension",label:"时间维度",component:"Input",show:!1},{field:"reportRange",label:"报表范围",component:"Input",show:!1},{field:"[startTime, endTime]",label:"时间范围",component:"RangePicker",componentProps:({formModel:t})=>{const e={style:"width: 100%"};return t.timeDimension==="day"?(e.format="YYYY-MM-DD",e.valueFormat="YYYY-MM-DD",e.placeholder=["开始日期","结束日期"]):t.timeDimension==="week"?(e.picker="week",e.valueFormat="YYYY-MM-DD",e.placeholder=["开始周","结束周"]):t.timeDimension==="month"?(e.format="YYYY-MM",e.valueFormat="YYYY-MM",e.picker="month",e.placeholder=["开始月份","结束月份"]):t.timeDimension==="quarter"?(e.picker="quarter",e.valueFormat="YYYY-MM",e.placeholder=["开始季度","结束季度"]):t.timeDimension==="year"&&(e.format="YYYY",e.valueFormat="YYYY",e.picker="year",e.placeholder=["开始年份","结束年份"]),e}},{field:"companyId",label:"所属公司",component:"ApiSelect",componentProps:({formModel:t})=>({api:()=>m(void 0,null,function*(){const e=yield ke({}),l=[];return e&&e.length>0&&e.forEach(_=>{l.push({value:_.companyId,label:_.companyName})}),l}),onChange:e=>{s.companyId=e,t.stationIds=[]}}),show:T().isMultiOrganization},{field:"stationIds",label:"电站名称",component:"ApiSelect",componentProps:{api:()=>m(void 0,null,function*(){const t=yield Le(q({},s)),e=[];return t&&t.length>0&&t.forEach(l=>{e.push({value:l.stationId,label:l.stationName})}),e}),mode:"multiple",maxTagCount:"responsive",filterOption:(t,e)=>e.label.toLowerCase().indexOf(t.toLowerCase())>=0}},{field:"comparativeDimension",label:"对比维度",component:"Select",componentProps:({formModel:t})=>{let e=[];return t.timeDimension==="day"||t.timeDimension==="month"?e=[{value:"month",label:"月度"},{value:"quarter",label:"季度"},{value:"year",label:"年度"}]:t.timeDimension==="quarter"?e=[{value:"quarter",label:"季度"},{value:"year",label:"年度"}]:t.timeDimension==="year"&&(e=[{value:"year",label:"年度"}]),{options:e}},show:({values:t})=>(t.timeDimension==="day"||t.timeDimension==="month"||t.timeDimension==="quarter")&&!t.subtotalDimension},{field:"subtotalDimension",label:"小计维度",component:"Select",componentProps:({formModel:t})=>{let e=[];return t.reportRange==="station"?e=[{value:"station",label:"电站"},{value:"company",label:"公司"}]:t.reportRange==="company"&&(e=[{value:"company",label:"公司"}]),T().isMultiOrganization||(e=e.filter(l=>{if(l.value==="station")return l})),{options:e,onChange:()=>{t.comparativeDimension=""}}},show:({values:t})=>t.reportRange!=="org"}],Ue=s=>(Ye("data-v-52f83f0b"),s=s(),Re(),s),We={class:"tab-model"},Ze={class:"tab-button-div"},je={id:"preview-table-tab-content",class:"tab-table-div tab-table-content"},Ge={class:"chart-header"},Xe=Ue(()=>R("div",{id:"mainChart",class:"chart-content"},null,-1)),Je=be({__name:"index",setup(s){const{t}=Te(),e=_e(),{currentRoute:l}=e,C=g(l).query.reportFormId||"341",{createConfirm:F,createMessage:w}=Fe(),c=b({}),f=b("1"),r=G({indexId:"",indexName:"",chartType:"",timeDimension:"",reportRange:""}),I=b([]),A=b(document.body.clientHeight-272),ee=(a,o)=>{r.indexName=o.label,P()},O=a=>{var i,y;const o=q({},z());o.stationIds&&o.stationIds.length>0&&(o.stationId=o.stationIds.join(","));let n={reportFormId:C,sortField:(i=c.value)==null?void 0:i.sortField,sortOrder:(y=c.value)==null?void 0:y.sortOrder};if(a){const u=re();n.pageNo=u.current,n.pageSize=u.pageSize}for(const u in o)u!=="stationIds"&&(n[u]=o[u]);return n.reportRange=r.reportRange,n.timeDimension=r.timeDimension,n},te=()=>m(this,null,function*(){const a=O(!0);return yield ze(a)}),D=b([]),ae=()=>m(this,null,function*(){var o;const a=yield Ve(C);r.chartType=a.chartType,r.reportRange=a.reportRange,r.timeDimension=a.timeDimension,a.columns.forEach(n=>{D.value.push({title:n.title,dataIndex:n.dataIndex,headAlign:"center",align:n.align||"center",sorter:L(n.dataIndex)&&!1,resizable:!0,minWidth:n.width?n.width:150,ifShow:k(n.dataIndex)}),n.isIndex&&I.value.push({value:n.dataIndex,label:n.title})}),((o=I.value)==null?void 0:o.length)>0&&(r.indexId=I.value[0].value,r.indexName=I.value[0].label),M()}),M=()=>{se({timeDimension:r.timeDimension,reportRange:r.reportRange})},k=a=>a==="companyName"?T().isMultiOrganization:!(a==="month"||a==="quarter"||a==="year"),L=a=>!(a==="companyName"||a==="stationName"||a==="month"||a==="quarter"||a==="year"),V=G({companyId:null}),[oe,{resetFields:ne,setFieldsValue:se,getFieldsValue:z}]=Ne({labelWidth:120,baseColProps:{span:8},actionColOptions:{span:24},autoAdvancedLine:1,schemas:Ke(V),compact:!0,showAdvancedButton:!0,resetButtonOptions:{onClick:()=>m(this,null,function*(){yield ne(),yield M(),V.companyId=null,yield $(),H(),P()})},submitFunc:()=>m(this,null,function*(){return yield $(),H(),P(),Promise.resolve()})}),H=()=>{f.value==="1"&&N()},P=()=>{f.value==="2"&&setTimeout(function(){W()},300)},$=()=>{const a=z(),o=a.comparativeDimension,n=a.subtotalDimension;D.value.forEach(i=>{i.ifShow=k(i.dataIndex),i.dataIndex===o&&(i.ifShow=!0),n==="company"&&i.dataIndex==="stationName"&&(i.ifShow=!1),i.dataIndex==="companyName"&&(i.ifShow=T().isMultiOrganization),i.sorter=L(i.dataIndex)&&!1,n&&(i.sorter=!1)}),K({columns:D.value,pagination:!n})},[ie,{setProps:K,getPaginationRef:re,reload:N,redoHeight:le}]=qe({api:te,target:"#preview-table-tab-content",targetTabKey:"1",useSearchForm:!1,bordered:!0,immediate:!1,sortFn:a=>{var o;c.value.sortField=a.order?a.field:"",c.value.sortOrder=(o=a.order)==null?void 0:o.replace("end","")},showTableSetting:!0,tableSetting:{fullScreen:!0},scroll:{y:A.value},maxHeight:A.value,showIndexColumn:!0}),E=b([]),Y=b([]);let U,B;const W=(a=!0)=>m(this,null,function*(){B||(B=Me(document.getElementById("mainChart")));const o=O(!1);if(a){const h=yield He(o);E.value=h.x,Y.value=h.y}let n=[];if(o.comparativeDimension&&o.reportRange!=="org")for(const h in Y.value)h.lastIndexOf("_"+r.indexId)>-1&&n.push({name:`${h.split("_")[0]} ${r.indexName}`,type:r.chartType,data:Y.value[h]});else n.push({name:r.indexName,type:r.chartType,data:Y.value[r.indexId]});let i;const y=E.value.length,u=n.length;y*u>10&&(i=[{type:"slider",show:!0,start:0,end:30}]),U={tooltip:{trigger:o.comparativeDimension?"item":"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!1,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!1}}},xAxis:[{type:"category",data:E.value,axisPointer:{type:"shadow"},axisLabel:{interval:0,rotate:30}}],yAxis:[{type:"value"}],dataZoom:i,series:n},B.setOption(U,{notMerge:!0})});function ce(){F({title:t("common.message.confirmTitle"),iconType:"warning",content:t("common.message.exportMessage"),onOk(){return m(this,null,function*(){const o=O(!1);o.filename="报表.xls",o.excelList=pe(),yield $e(o).then(n=>{Ae(n==null?void 0:n.data,o.filename)}),w.success(t("common.exportSuccessText"))})}})}const pe=()=>{let a=[];return D.value.forEach(o=>{o.ifShow&&a.push({title:o.title,dataIndex:o.dataIndex})}),a},ue=a=>{a=="1"?N():a=="2"&&setTimeout(function(){W()},300)};return xe(()=>m(this,null,function*(){yield ae();const a={columns:D.value};K(a),N()})),(a,o)=>{const n=v("a-button"),i=v("a-tab-pane"),y=v("a-col"),u=v("a-select"),h=v("a-form-item"),me=v("a-row"),de=v("a-form"),fe=v("a-tabs");return X(),we("div",We,[R("div",Ze,[p(g(Ee),{onRegister:g(oe),onAdvancedChange:g(le)},null,8,["onRegister","onAdvancedChange"])]),R("div",je,[p(fe,{activeKey:f.value,"onUpdate:activeKey":o[2]||(o[2]=S=>f.value=S),onChange:ue},{default:d(()=>[p(i,{key:"1",tab:"报表"},{default:d(()=>[p(g(Be),{onRegister:g(ie),onResizeColumn:o[0]||(o[0]=(S,he)=>he.width=S)},{toolbar:d(()=>[p(n,{class:"yellow-btn",preIcon:g(Oe).EXPORT,onClick:ce},{default:d(()=>[Ie(De(g(t)("common.action.export")),1)]),_:1},8,["preIcon"])]),_:1},8,["onRegister"])]),_:1}),r.chartType!=="no"?(X(),Se(i,{key:"2",tab:"图表","force-render":""},{default:d(()=>[R("div",Ge,[p(de,{labelAlign:"right",autocomplete:"off"},{default:d(()=>[p(me,{gutter:24},{default:d(()=>[J(p(y,{span:18},null,512),[[Q,!0]]),J(p(y,{span:6},{default:d(()=>[p(h,{label:"指标",labelCol:{span:6}},{default:d(()=>[p(u,{value:r.indexId,"onUpdate:value":o[1]||(o[1]=S=>r.indexId=S),options:I.value,onChange:ee},null,8,["value","options"])]),_:1})]),_:1},512),[[Q,!0]])]),_:1})]),_:1})]),Xe]),_:1})):Ce("",!0)]),_:1},8,["activeKey"])])])}}});const Dt=Pe(Je,[["__scopeId","data-v-52f83f0b"]]);export{Dt as default};
//# sourceMappingURL=index-d0b03492.js.map