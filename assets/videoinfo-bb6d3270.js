var s=(n,r,i)=>new Promise((h,v)=>{var N=d=>{try{t(i.next(d))}catch(x){v(x)}},c=d=>{try{t(i.throw(d))}catch(x){v(x)}},t=d=>d.done?h(d.value):Promise.resolve(d.value).then(N,c);t((i=i.apply(n,r)).next())});import{B as te}from"./BasicTable-0434a334.js";import{T as ae}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as ne}from"./useTable-109483b3.js";import{a2 as f}from"./antd-15ac76ed.js";import{a5 as y,b as ie,au as oe,a0 as le,av as z,bY as B,_ as re}from"./index.js";import{P as se}from"./index-20519caf.js";import{C as de}from"./CommonTree-c4ed7838.js";import{r as C,d as ue,k as u,e as ce,o as me,al as fe,Z as _,a9 as A,aa as b,f as w,u as p,$ as pe,E as F,ac as D,_ as ve}from"./vue-71d1abb3.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./index-316f6ffb.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";import"./useContentViewHeight-7f845167.js";import"./index-3801a970.js";const ge=n=>y.post({url:"/baseset/common/list-orgStationTree",params:n},{}),he=n=>y.get({url:"/baseset/videoInfo/page",params:n},{}),Ie=n=>y.post({url:"/baseset/videoInfo/create",params:n},{}),be=n=>y.put({url:"/baseset/videoInfo/update",params:n},{}),ye=n=>n.id?be(n):Ie(n),xe=n=>y.delete({url:"/baseset/videoInfo/delete",params:n},{});C({spinning:!1});C({id:"",createTime:""});const we={class:"right-table-layout"},Ce={key:0,class:"dialog-mask"},Ne=ue({__name:"videoinfo",setup(n){const r=u(),i=u(""),h=u({}),v=u(!1);ie();const{createConfirm:N}=oe(),c=C({}),t=C({folderId:"test"}),d=u([]),R={columns:[{title:"厂商类型",dataIndex:"firmTypeText",key:"firmTypeText",fixed:"left",minWidth:100},{title:"接入名称",dataIndex:"name",key:"name",fixed:"left",minWidth:100}],pagination:!0,tfields:{key:"name"},vfield:"name"},O=ce(()=>o.value.length>0),E=u(!1),o=u([]),K=[{title:"所属公司",resizable:!0,sorter:!0,dataIndex:"orgName",width:100,ifShow:le().isMultiOrganization,headAlign:"center",align:"left"},{title:"电站",resizable:!0,sorter:!0,dataIndex:"stationName",width:100,headAlign:"center",align:"left"},{title:"接入名称",dataIndex:"videoFirmName",width:100,editRow:!0,resizable:!0,sorter:!0,editComponent:"SearchBox",headAlign:"center",align:"left",editComponentProps:{opkey:"SearchBox123",twidth:"600px",api:"/baseset/videoFirm/page?name={name}&pageNo={current}&pageSize={pageSize}",apiParamFunc:()=>({searchId:h.value.stationId,nodeKindId:"station"}),multiple:!1,callback:e=>{r.value.videoFirmId=e.record.key,r.value.videoFirmName=e.record.name}}},{title:"设备序列号",dataIndex:"deviceSerial",width:100,editRow:!0,resizable:!0,sorter:!0,headAlign:"center",align:"left",editRule:(e,a)=>s(this,null,function*(){if(!e)return"不能为空"}),editComponent:"Input"},{title:"通道号",dataIndex:"channelNo",width:100,editRow:!0,resizable:!0,sorter:!0,headAlign:"center",align:"center",editRule:(e,a)=>s(this,null,function*(){if(!e)return"不能为空"}),editComponent:"InputNumber"},{title:"直播地址",dataIndex:"url",width:200,editRow:!0,resizable:!0,sorter:!0,headAlign:"center",align:"left",editComponent:"Input"},{title:"摄像头类型",dataIndex:"cameraType",width:100,editRow:!0,resizable:!0,sorter:!0,editComponent:"DictSelectBox",editComponentProps:{type:"cameraType"},editRule:(e,a)=>s(this,null,function*(){if(!e)return"不能为空"})},{title:"摄像头名称",dataIndex:"cameraName",width:80,editRow:!0,resizable:!0,sorter:!0,headAlign:"center",align:"left",editRule:(e,a)=>s(this,null,function*(){if(!e)return"不能为空"}),editComponent:"Input"},{title:"备注",dataIndex:"remark",width:80,editRow:!0,resizable:!0,sorter:!0,headAlign:"center",align:"left",editComponent:"Input"},{title:"显示顺序",dataIndex:"sort",width:80,editRow:!0,resizable:!0,sorter:!0,headAlign:"center",align:"right",editRule:(e,a)=>s(this,null,function*(){if(!e)return"不能为空"}),editComponent:"Input"}],k=u(),T=u([]),P=()=>s(this,null,function*(){i.value="",r.value=null;let e=yield he(t);return T.value=e.result,T.value}),L={baseColProps:{span:8},labelWidth:120,showAdvancedButton:!0,autoAdvancedLine:1,schemas:[{label:"接入名称",field:"videoFirmName",component:"Input"},{label:"直播地址",field:"url",component:"Input"},{label:"摄像头类型",field:"cameraType",component:"DictSelectBox",componentProps:{type:"cameraType"}},{label:"摄像头名称",field:"cameraName",component:"Input"}]},[V,{reload:I,getPaginationRef:W,getDataSource:H}]=ne({title:"视频管理",api:()=>s(this,null,function*(){const e=W();return t.pageNo=e.current,t.pageSize=e.pageSize,yield P()}),columns:K,useSearchForm:!0,showIndexColumn:!1,formConfig:L,showTableSetting:!0,resizeHeightOffset:33,pagination:!0,canResize:!0,bordered:!0,rowKey:"id",actionColumn:{width:80,title:"操作",dataIndex:"action"},rowSelection:{type:"checkbox",selectedRowKeys:o,onSelect:M,onSelectAll:j},handleSearchInfoFn(e){return t.videoFirmName=e.videoFirmName,t.url=e.url,t.cameraType=e.cameraType,t.cameraName=e.cameraName,e},sortFn:e=>{e.order?(t.sortField=e.field,t.sortOrder=e.order.replace("end","")):(t.sortField=null,t.sortOrder=null)}});function M(e,a){a?o.value=[...o.value,e.id]:o.value=o.value.filter(l=>l!==e.id)}function j(e,a,l){const g=l.map(m=>m.id);e?o.value=[...o.value,...g]:o.value=o.value.filter(m=>!g.includes(m))}function U(){return s(this,null,function*(){const e=yield ge({});d.value=e.result})}function $(e){if(t.stationId=null,t.stationName=null,t.stationOrganId=null,t.stationOrganName=null,t.nodeKindId=null,t.searchId=null,e!=null&&(t.stationOrganId=e.organId,t.stationOrganName=e.organName,c.orgName=e.organName,e.nodeKindId=="station"&&(t.stationId=e.powerStationId,t.stationName=e.name,c.stationName=e.name,c.stationId=e.powerStationId),t.nodeKindId=e.nodeKindId,t.searchId=e.id),r.value!=null)return f.error("请先完成编辑。"),!1;I()}function q(){if(r.value!=null)return f.error("请先完成编辑。"),!1;const e=k.value.getSelectedTreeNode();if(!e){f.error("请选择电站");return}if(e.nodeKindId!="station"){f.error("请选择电站");return}h.value.stationId=e.id,B("SearchBox123",R);const a=H(),l={editable:!0,isNew:!0,key:`${Date.now()}`,stationName:c.stationName,orgName:c.orgName,stationId:c.stationId};a.length==t.pageSize&&a.splice(-1),a.unshift(l),i.value=S(l),r.value=l}function Y(){return o.value.length==0?(f.error("请选择数据"),!1):!0}function Z(e){return e.editable?[{label:"保存",onClick:Q.bind(null,e)},{label:"取消",popConfirm:{title:"是否取消修改",confirm:X.bind(null,e)}}]:[{label:"修改",icon:"clarity:bullet-list-line",disabled:J(e),onClick:G.bind(null,e)}]}function G(e){var a;i.value=S(e),r.value=e,h.value.stationId=e.stationId,B("SearchBox123",R),(a=e.onEdit)==null||a.call(e,!0)}const S=e=>Reflect.has(e,"id")?Reflect.get(e,"id"):"",J=e=>i.value?i.value!==S(e):!1;function Q(e){return s(this,null,function*(){var l;v.value=!0,(yield(l=e.onValid)==null?void 0:l.call(e))&&ye(e).then(()=>{i.value="",r.value=null,f.success("已修改"),I(),v.value=!1})})}function X(e){var a;i.value="",r.value=null,v.value=!1,(a=e.onEdit)==null||a.call(e,!1,!1),I()}function ee(){Y()&&N({title:"提示",iconType:"warning",content:"确定要删除选中记录？",onOk(){return s(this,null,function*(){xe("?ids="+o.value).then(()=>{f.success("已删除"),i.value="",r.value=null,o.value=[],I()})})}})}return me(()=>{U()}),(e,a)=>{const l=fe("a-button");return _(),A(p(se),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex",style:{position:"relative"}},{default:b(()=>[w(de,{ref_key:"treeRef",ref:k,title:"电站组织",onSelect:$,value:d.value,onRefresh:p(I),class:"left-tree-layout",toolbar:!0,canEdit:!1,canAdd:!1,canDelete:!1,isShowOperationBtns:!1,fieldNames:{key:"id",title:"name"}},null,8,["value","onRefresh"]),pe("div",we,[w(p(te),{class:"fix-basic-table",onRegister:p(V),searchInfo:t,onResizeColumn:a[0]||(a[0]=(g,m)=>m.width=g)},{toolbar:b(()=>[w(l,{type:"primary",preIcon:p(z).ADD,onClick:q},{default:b(()=>[F("添加")]),_:1},8,["preIcon"]),w(l,{class:"red-btn",disabled:!O.value,preIcon:p(z).DELETE,onClick:ee},{default:b(()=>[F("删除")]),_:1},8,["disabled","preIcon"])]),bodyCell:b(({column:g,record:m})=>[g.key==="action"?(_(),A(p(ae),{key:0,actions:Z(m)},null,8,["actions"])):D("",!0)]),_:1},8,["onRegister","searchInfo"])]),E.value?(_(),ve("div",Ce)):D("",!0)]),_:1})}}});const Qe=re(Ne,[["__scopeId","data-v-b549bbfb"]]);export{Qe as default};
//# sourceMappingURL=videoinfo-bb6d3270.js.map
