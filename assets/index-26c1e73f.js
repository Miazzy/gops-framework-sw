var r=(R,c,f)=>new Promise((t,y)=>{var x=s=>{try{C(f.next(s))}catch(w){y(w)}},a=s=>{try{C(f.throw(s))}catch(w){y(w)}},C=s=>s.done?t(s.value):Promise.resolve(s.value).then(x,a);C((f=f.apply(R,c)).next())});import{B as Q}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as Y}from"./useTable-109483b3.js";import{a2 as I}from"./antd-15ac76ed.js";import{au as ee,a7 as te,av as h,ax as T,_ as ae}from"./index.js";import{P as ne}from"./index-20519caf.js";import{C as se}from"./CommonTree-c4ed7838.js";import"./index-74ac3212.js";import{f as oe,h as m,g as re,i as ie,u as F,j as le,k as K,l as de}from"./index-2fa2e6e6.js";import{j as ce}from"./Export2Excel-389a8fc9.js";import{d as ue,k as i,r as pe,o as me,al as fe,Z as N,_ as k,f as l,aa as d,$ as P,u as n,E as _,F as ve,ac as O,J as ge}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";import"./useRender-21ce56fb.js";const Ie={class:"right-table-layout"},be={key:0,style:{color:"#19be6b"}},he={key:1,style:{color:"red"}},_e=ue({__name:"index",setup(R){let c=i("");const{createConfirm:f}=ee(),t=pe({assetCode:null,deviceCode:null,userName:null,status:null}),y=i([]),x=i({}),a=i([]),C=K(),s=i([]),w=()=>r(this,null,function*(){let e=yield de(t);return s.value=e.result,e.result}),A={baseColProps:{span:8},labelWidth:120,autoAdvancedLine:1,showAdvancedButton:!0,schemas:[{field:"assetCode",component:"Input",label:"资产编号"},{field:"deviceCode",component:"Input",label:"设备编号"},{field:"plateNumber",component:"Input",label:"当前车牌号"},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"禁用",value:"0"}]}}]},[j,{reload:b,getPaginationRef:V}]=Y({title:"行车记录仪设置列表",api:()=>r(this,null,function*(){const e=V();return t.pageNo=e.current,t.pageSize=e.pageSize,yield w()}),columns:C,useSearchForm:!0,formConfig:A,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"radio",onChange:M},handleSearchInfoFn(e){return t.status=e.status,t.assetCode=e.assetCode,t.deviceCode=e.deviceCode,t.plateNumber=e.plateNumber,e},sortFn:e=>{e.order?(t.sortField=e.field,t.sortOrder=e.order.replace("end","")):(t.sortField=null,t.sortOrder=null)}});function M(e,o){o.length>0?(a.value=[e[0]],c.value=e[0]):(a.value=[],c.value="")}function z(){return r(this,null,function*(){const e=yield oe({});y.value=e.result,b()})}function H(){if(m.id="",m.deviceType="行车记录仪",m.disabledInput="false",t.stationId==null){I.error("请先选择电站。");return}T("/baseset/monitor/smartdevices/drivingrecorder/create","添加行车记录仪设置",ge(m))}function W(e){T(`/baseset/monitor/smartdevices/drivingrecorder/create?id=${e.id}&disabledInput=true`,"查看行车记录仪设置")}function X(){return r(this,null,function*(){if(!D())return;if((yield re({id:a.value[0]})).result.status==0){I.error("已禁用，不可修改.");return}T("/baseset/monitor/smartdevices/drivingrecorder/create?id="+a.value[0]+"&disabledInput=false","修改行车记录仪设置")})}function $(){return r(this,null,function*(){if(console.log(a.value),a.value.length!=1)return I.info("请选择一条数据."),!1;f({title:"提示",iconType:"warning",content:"确定要删除选中记录？",onOk(){return r(this,null,function*(){ie(a.value[0]).then(()=>{I.success("已删除。"),a.value=[],b()})})}})})}function q(){if(!D())return;const e="?id="+a.value[0]+"&status=1";F(e).then(()=>{I.success("已启用"),b()})}function J(){if(!D())return;const e="?id="+a.value[0]+"&status=0";F(e).then(()=>{I.success("已禁用"),b()})}function U(e={}){t.stationId=null,t.stationName=null,t.stationOrganId=null,t.stationOrganName=null,t.nodeKindId=null,x.value.nodeKindId=null,t.searchId=null,e!=null&&(t.stationOrganId=e.organId,t.stationOrganName=e.organName,e.nodeKindId=="station"&&(t.stationId=e.powerStationId,t.stationName=e.name,x.value.stationId=e.powerStationId,m.stationId=t.stationId,m.stationName=t.stationName,m.stationOrganId=t.stationOrganId,m.stationOrganName=t.stationOrganName),t.nodeKindId=e.nodeKindId,x.value.nodeKindId=e.nodeKindId,t.searchId=e.id),b()}function D(){return a.value.length==0||a.value.length>1||!a.value[0]?(I.error("请选择一行数据"),!1):!0}function Z(){return r(this,null,function*(){f({title:"导出",iconType:"warning",content:"确定要导出所有记录？",onOk(){return r(this,null,function*(){const o=i({index:"序号"}),u=K(),p=i([]),v=i([]);u.forEach(g=>{g.dataIndex!=="id"&&(o.value[g.dataIndex]=g.title,v.value.push(g.dataIndex))});let L=yield le(t);s.value=L.result,s.value.forEach(function(g,G){let E="";switch(g.status){case 0:E="禁用";break;case 1:E="启用";break}let B=i({index:G+1});v.value.forEach(S=>{B.value[S]=S==="status"?E:g[S]}),p.value.push(B.value)}),ce({data:p.value,header:o.value,filename:"行车记录仪设置.xlsx"})})}})})}return me(()=>{z(),te.getInstance().listen("drivingRecorder",function(){setTimeout(()=>{b()},500)})}),(e,o)=>{const u=fe("a-button");return N(),k("div",null,[l(n(ne),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:d(()=>[l(se,{title:"电站组织",onSelect:U,value:y.value,class:"left-tree-layout",toolbar:!0,canEdit:!1,canAdd:!1,canDelete:!1,isShowOperationBtns:!1,fieldNames:{key:"id",title:"name"}},null,8,["value"]),P("div",Ie,[P("div",null,[l(n(Q),{class:"fix-basic-table",onRegister:n(j),searchInfo:t,onResizeColumn:o[0]||(o[0]=(p,v)=>v.width=p),onRowDbClick:o[1]||(o[1]=p=>W(p))},{toolbar:d(()=>[l(u,{type:"primary",preIcon:n(h).ADD,onClick:H},{default:d(()=>[_("添加")]),_:1},8,["preIcon"]),l(u,{type:"primary",disabled:n(c)=="",preIcon:n(h).EDIT,onClick:X},{default:d(()=>[_("修改")]),_:1},8,["disabled","preIcon"]),l(u,{class:"red-btn",disabled:n(c)=="",preIcon:n(h).DELETE,onClick:$},{default:d(()=>[_("删除")]),_:1},8,["disabled","preIcon"]),l(u,{class:"green-btn",disabled:n(c)=="",preIcon:n(h).ENABLE,onClick:q},{default:d(()=>[_("启用")]),_:1},8,["disabled","preIcon"]),l(u,{class:"grey-btn",disabled:n(c)=="",preIcon:n(h).DISABLE,onClick:J},{default:d(()=>[_("禁用")]),_:1},8,["disabled","preIcon"]),l(u,{class:"yellow-btn",preIcon:n(h).EXPORT,onClick:Z},{default:d(()=>[_("导出")]),_:1},8,["preIcon"])]),bodyCell:d(({column:p,text:v,record:L})=>[p.dataIndex==="status"?(N(),k(ve,{key:0},[v==1?(N(),k("span",be,"启用")):O("",!0),v==0?(N(),k("span",he,"禁用")):O("",!0)],64)):O("",!0)]),_:1},8,["onRegister","searchInfo"])])])]),_:1})])}}});const Qe=ae(_e,[["__scopeId","data-v-95cba3f1"]]);export{Qe as default};
//# sourceMappingURL=index-26c1e73f.js.map
