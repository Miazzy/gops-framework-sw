var T=(p,c,C)=>new Promise((s,f)=>{var R=m=>{try{d(C.next(m))}catch(y){f(y)}},h=m=>{try{d(C.throw(m))}catch(y){f(y)}},d=m=>m.done?s(m.value):Promise.resolve(m.value).then(R,h);d((C=C.apply(p,c)).next())});import{d as ve,r as P,k as b,o as ge,al as x,Z as E,a9 as M,aa as i,$ as k,f as l,E as _,u,ac as V,v as j,A as H,a7 as be,q as he}from"./vue-71d1abb3.js";import{D as ye}from"./Dialog-0a006d82.js";import{B as xe}from"./BasicTable-0434a334.js";import{T as _e}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as we}from"./useTable-109483b3.js";import{a2 as w}from"./antd-15ac76ed.js";import{a5 as D,au as Ce,av as F,ax as De,_ as Ie}from"./index.js";import{P as Re}from"./index-20519caf.js";import{_ as S}from"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import{D as Te}from"./DataSelectDialog-f9d1c1a8.js";import{a as $}from"./assign-37f1c13d.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";const ke=[{key:"name",title:"报表名称",dataIndex:"name",headAlign:"center",align:"left",width:120,resizable:!0,sorter:!0},{key:"chartTypeText",title:"图表类型",dataIndex:"chartTypeText",align:"center",width:120,resizable:!0,sorter:!0},{key:"reportRangeText",title:"报表范围",dataIndex:"reportRangeText",width:120,resizable:!0,sorter:!0},{key:"timeDimensionText",title:"时间纬度",dataIndex:"timeDimensionText",align:"center",width:120,resizable:!0,sorter:!0},{key:"creator",title:"创建人",dataIndex:"creator",align:"center",width:120,resizable:!0,sorter:!0},{key:"createTime",title:"创建时间",dataIndex:"createTime",align:"center",width:120,resizable:!0,sorter:!0},{key:"description",title:"报表描述",dataIndex:"description",headAlign:"center",align:"left",width:120,resizable:!0,sorter:!0}],Fe=p=>D.get({url:"/bi/report-form/page",params:p},{isOnlyResult:!0}),G=p=>D.get({url:"/bi/report-form/get",params:p},{}),Se=p=>D.get({url:"/baseset/index-storehouse/indexTree",params:p},{}),Ae=p=>D.post({url:"/bi/report-form/create",params:p},{}),Le=p=>D.put({url:"/bi/report-form/update",params:p},{}),Ne=p=>D.delete({url:"/bi/report-form/delete",params:p},{}),Ee={class:"fix-basic-table"},Me={class:"tab-button-div"},ze={class:"tab-table-div"},Ue={class:"dialog-loading"},qe=ve({__name:"index",setup(p){let c=!1;const{createConfirm:C}=Ce(),s=P({}),f=b(!1),R=b();b();const h=b({}),d=b(!1);b(!1);const m=b("添加报表"),y=b(!1),z=b([]),g=b(),a=P({id:"",name:"",description:"",reportRange:"",timeDimension:"",chartType:"",reportIndexList:null});function K(t,e,r){let n=[];e.forEach((v,N,O)=>{n.push(v.label)})}function W(t){De(`/bi/reportform/preview/index?reportFormId=${t.id}&readOnly=true`)}const Z=t=>T(this,null,function*(){let e=Object.assign(t,s);e.pageNo=t.page;let r=yield Fe(e);return Q(),r}),[J,{reload:I,clearSelectedRowKeys:Q}]=we({title:"报表列表",api:Z,columns:ke,bordered:!0,useSearchForm:!1,rowSelection:{type:"radio",onChange:X},pagination:{pageSize:50},showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!0,indexColumnProps:{fixed:"left"},fetchSetting:{listField:"list",pageField:"page",sizeField:"pageSize",totalField:"total"},actionColumn:{width:80,title:"操作",dataIndex:"action"},sortFn:t=>{t.order?(s.sortField=t.field,s.sortOrder=t.order.replace("end","")):(s.sortField=null,s.sortOrder=null)}});function X(t,e,r){h.value=e[0]}const Y={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}};function A(){a.id="",a.name="",a.description="",a.reportRange="",a.timeDimension="",a.chartType="",a.reportIndexList=null}function ee(){s.name=null,s.reportRange=null,I()}function te(){let t=s.reportRange;if(Array.isArray(s.reportRange)&&s.reportRange.length>0){let e=s.reportRange.join("|");s.reportRange=e}I(),s.reportRange=t}function ae(){m.value="添加报表",A(),d.value=!0}function le(){if(c=!1,m.value="修改报表",!h.value||!h.value.id){w.warn("请选择数据");return}G({id:h.value.id}).then(t=>{let e=t.result;$(a,e),d.value=!0})}function ne(t){c=!0,m.value="查看报表",G({id:t.id}).then(e=>{let r=e.result;$(a,r),d.value=!0})}function oe(){if(!h.value||!h.value.id){w.warn("请选择数据");return}C({title:"提示",iconType:"warning",content:"确定要删除选中记录？",onOk(){return T(this,null,function*(){Ne("?id="+h.value.id).then(e=>{e.code=="0"?(w.success("数据已删除。"),I()):w.error("数据删除失败。"),y.value=!1,d.value=!1})})}})}function re(){return T(this,null,function*(){let t=a.timeDimension;a.timeDimension==="week"?t="day":a.timeDimension==="month"?t="month":a.timeDimension==="quarter"?t="day,month":a.timeDimension==="year"&&(t="day,month,year");const e=yield Se({dataGranularity:t,status:1});z.value=U(e.result)})}function U(t){const e=[];for(let r=0;r<t.length;r++){const n=t[r],v={name:n.name,nodeId:n.id,nodeName:n.name,parentId:n.folderId,disabled:n.kindId!=="index"};n.children&&n.children.length>0&&(v.children=U(n.children)),e.push(v)}return e}function ie(){R.value.validateFields().then(()=>{re(),f.value=!0})}function q(){var t,e;try{f.value=!1,d.value=!1,(t=g.value)==null||t.closeModal(),(e=g.value)==null||e.closeModal()}catch(r){}}const se=()=>{var t,e;f.value=!1,d.value=!1,(t=g.value)==null||t.closeModal(),(e=g.value)==null||e.closeModal()},L=b([]),de=t=>{if(L.value.length=0,t.length>0){let e=[];t.forEach(r=>{const n={indexStorehouseId:r.nodeId,indexName:r.nodeName};L.value.push(n),e.push(r.nodeName)}),a.reportIndex=e.join(",")}else{w.error("请选择指标。");return}a.reportIndexList=L.value,y.value=!0,a.id==""?Ae(a).then(e=>{var r,n;w.success("数据已保存。"),y.value=!1,f.value=!1,d.value=!1,(r=g.value)==null||r.closeModal(),(n=g.value)==null||n.closeModal(),I()}).then(()=>{A()}):Le(a).then(e=>{var r,n;w.success("数据已更新。"),I(),y.value=!1,f.value=!1,d.value=!1,(r=g.value)==null||r.closeModal(),(n=g.value)==null||n.closeModal()}).then(()=>{A()})};function ue(){var t,e;f.value=!1,d.value=!1,(t=g.value)==null||t.closeModal(),(e=g.value)==null||e.closeModal(),he(()=>{d.value=!0})}const pe=()=>{a.reportIndexList=[]};return ge(()=>{}),(t,e)=>{const r=x("a-input"),n=x("a-form-item"),v=x("a-button"),N=x("a-form"),O=x("a-spin"),me=x("a-col"),ce=x("a-row");return E(),M(u(Re),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:i(()=>[k("div",Ee,[k("div",Me,[l(N,{model:s,name:"searchInfo",layout:"inline",autocomplete:"off",class:"search-form"},{default:i(()=>[l(n,{name:"name",label:"报表名称",labelCol:{span:6},rules:[{required:!1,message:"请输入报表名称"}],style:{width:"26.5%"}},{default:i(()=>[l(r,{value:s.name,"onUpdate:value":e[0]||(e[0]=o=>s.name=o),style:{width:"100%"}},null,8,["value"])]),_:1}),l(n,{name:"reportRange",label:"报表范围",labelCol:{span:6},rules:[{required:!1,message:"请选择报表范围"}],style:{width:"26.5%"}},{default:i(()=>[l(S,{value:s.reportRange,"onUpdate:value":e[1]||(e[1]=o=>s.reportRange=o),multiple:"multiple",type:"reportRange",onChange:K,width:"100%"},null,8,["value"])]),_:1}),l(n,{class:"search-btns"},{default:i(()=>[l(v,{style:{margin:"0 8px"},onClick:ee},{default:i(()=>[_("重置")]),_:1}),l(v,{type:"primary",class:"tab-button",onClick:te},{default:i(()=>[_("查询")]),_:1})]),_:1})]),_:1},8,["model"])]),k("div",ze,[l(u(xe),{onRegister:u(J),searchInfo:s,onResizeColumn:e[2]||(e[2]=(o,B)=>B.width=o),onRowDbClick:e[3]||(e[3]=o=>ne(o))},{toolbar:i(()=>[l(v,{type:"primary",preIcon:u(F).ADD,onClick:ae},{default:i(()=>[_("添加")]),_:1},8,["preIcon"]),l(v,{type:"primary",preIcon:u(F).EDIT,onClick:le},{default:i(()=>[_("修改")]),_:1},8,["preIcon"]),l(v,{class:"red-btn",preIcon:u(F).DELETE,onClick:oe},{default:i(()=>[_("删除")]),_:1},8,["preIcon"])]),bodyCell:i(({column:o,text:B,record:fe})=>[o.key==="action"?(E(),M(u(_e),{key:0,actions:[{icon:u(F).LOG,label:"报表预览",onClick:W.bind(null,fe)}]},null,8,["actions"])):V("",!0)]),_:1},8,["onRegister","searchInfo"])])]),l(ye,{visible:d.value,"onUpdate:visible":e[9]||(e[9]=o=>d.value=o),title:m.value,ref_key:"reportformDialog",ref:g,onCancel:q,maskClosable:!1,style:{"padding-top":"80px"},width:700,height:500},{footer:i(()=>[l(v,{key:"submit",type:"primary",onClick:ie},{default:i(()=>[_("下一步")]),_:1}),u(c)?V("",!0):(E(),M(v,{key:"back",onClick:q,style:{"margin-left":"10px"}},{default:i(()=>[_("取消")]),_:1}))]),default:i(()=>[j(k("div",Ue,[l(O)],512),[[H,y.value]]),l(N,be({model:a,name:"createReport",labelAlign:"center"},Y,{ref_key:"modalFormRef",ref:R,style:{height:"400px"}}),{default:i(()=>[l(ce,{gutter:24,style:{"margin-top":"16px","margin-left":"-20px"}},{default:i(()=>[j(l(me,{span:23},{default:i(()=>[l(n,{label:"报表名称",name:"name",labelCol:{span:4},wrapperCol:10,rules:[{required:!0,message:"请输入报表名称"}]},{default:i(()=>[l(r,{value:a.name,"onUpdate:value":e[4]||(e[4]=o=>a.name=o),style:{width:"500px"},disabled:u(c)},null,8,["value","disabled"])]),_:1}),l(n,{label:"报表描述",name:"description",labelCol:{span:4},wrapperCol:15,rules:[{required:!1,message:"请输入报表描述"}]},{default:i(()=>[l(r,{value:a.description,"onUpdate:value":e[5]||(e[5]=o=>a.description=o),style:{width:"500px"},disabled:u(c)},null,8,["value","disabled"])]),_:1}),l(n,{label:"报表范围",name:"reportRange",labelCol:{span:4},wrapperCol:15,rules:[{required:!0,message:"请选择报表范围"}]},{default:i(()=>[l(S,{type:"reportRange",value:a.reportRange,"onUpdate:value":e[6]||(e[6]=o=>a.reportRange=o),width:500,disabled:u(c)},null,8,["value","disabled"])]),_:1}),l(n,{label:"时间纬度",name:"timeDimension",labelCol:{span:4},wrapperCol:15,rules:[{required:!0,message:"请选择时间纬度"}]},{default:i(()=>[l(S,{type:"timeDimension",value:a.timeDimension,"onUpdate:value":e[7]||(e[7]=o=>a.timeDimension=o),width:500,onChange:pe,disabled:u(c)},null,8,["value","disabled"])]),_:1}),l(n,{label:"图表类型",name:"chartType",labelCol:{span:4},wrapperCol:15,rules:[{required:!0,message:"请选择图表类型"}]},{default:i(()=>[l(S,{type:"chartType",value:a.chartType,"onUpdate:value":e[8]||(e[8]=o=>a.chartType=o),width:500,disabled:u(c)},null,8,["value","disabled"])]),_:1})]),_:1},512),[[H,!0]])]),_:1})]),_:1},16,["model"])]),_:1},8,["visible","title"]),l(Te,{title:m.value,visible:f.value,"onUpdate:visible":[e[10]||(e[10]=o=>f.value=o),e[12]||(e[12]=o=>f.value=o)],value:a.reportIndexList,"onUpdate:value":e[11]||(e[11]=o=>a.reportIndexList=o),tdata:z.value,tfields:{key:"nodeId",title:"nodeName"},width:800,height:600,extraFooterBtn:"上一步",onCancel:se,onConfirm:de,onExtra:ue,isEdit:!u(c),showBtm:!u(c)},null,8,["title","visible","value","tdata","isEdit","showBtm"])]),_:1})}}});const mt=Ie(qe,[["__scopeId","data-v-0e9fe7f0"]]);export{mt as default};
//# sourceMappingURL=index-0b464cc4.js.map
