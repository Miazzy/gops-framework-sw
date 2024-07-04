var I=(t,v,a)=>new Promise((f,u)=>{var m=o=>{try{i(a.next(o))}catch(g){u(g)}},h=o=>{try{i(a.throw(o))}catch(g){u(g)}},i=o=>o.done?f(o.value):Promise.resolve(o.value).then(m,h);i((a=a.apply(t,v)).next())});import{a5 as l,a0 as D,av as x,am as W,_ as Z}from"./index.js";import{B as N}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as O}from"./useTable-109483b3.js";import{a2 as C}from"./antd-15ac76ed.js";import{D as $}from"./Dialog-0a006d82.js";import{d as q,k as d,al as J,Z as S,_ as X,f as y,aa as w,a9 as R,u as p,E as T,ad as E,ac as L,F as Y}from"./vue-71d1abb3.js";function fe(t){return l.get({url:"/po/safe-check-template/list",params:t})}function me(t){return l.post({url:"/po/safe-check-issue/create",params:t})}function he(t){return l.get({url:"/po/safe-check-issue/get",params:t})}function ee(t){return l.get({url:"/po/safe-check-issue/dtl/list",params:t})}function te(t){return l.post({url:"/baseset/common/list-station",params:t})}function be(t){return l.post({url:"/system/org/list-tree",params:t})}function Ie(t){return l.get({url:"/po/safe-check-issue/getOrg",params:t})}const ae=[{title:"所属公司",dataIndex:"stationOrganName",align:"left",headAlign:"center",width:160,ifShow:D().isMultiOrganization},{title:"电站名称",dataIndex:"stationName",align:"left",headAlign:"center",width:160},{title:"检查单号",dataIndex:"billCode",width:160},{title:"检查单状态",dataIndex:"statusText",width:80},{title:"待整改项数",dataIndex:"rectificationNum",align:"right",headAlign:"center",width:100},{title:"负责人",dataIndex:"responsiblePersonName",align:"left",headAlign:"center",width:160},{title:"检查日期",dataIndex:"checkDate",width:100}],se=q({__name:"issueList",props:{disabledInput:{type:Boolean,default:!1},taskDate:{type:Date,default:null},templateId:{type:String,default:""}},setup(t,{expose:v}){const a=t,f=d(""),u=d(0),m=d(!0),h=d(""),i=d(""),o=()=>{let e={templateId:a.templateId,taskDate:a.taskDate};return l.get({url:"/po/safe-check-execution/getAllReadyStation",params:e})},g=()=>{k([])},A=e=>{f.value=e.safeCheckIssueId,u.value=e.status,i.value=e.activeKey,m.value&&(M(),m.value=!1),u.value!=0&&(document.getElementsByClassName("ant-table-title")[0].style="display:none")},b=d(!1),P=()=>{if(a.templateId==""||a.taskDate==null)return C.error("安全检查模板和任务日期不能为空。"),!1;o().then(e=>{h.value=e.result,b.value=!0})};function z(){F(K())}const B=()=>{let e=H();if(e.length==0)return C.info("请选择指标"),!1;b.value=!1;let n=_(),r={};n.forEach(s=>{r[s.stationId]=s.stationId}),e.forEach(s=>{r[s.powerStationId]||n.push({id:W(),stationOrganId:s.organId,stationOrganName:s.organName,stationId:s.powerStationId,stationName:s.powerStationName})}),k(n),G()},[j,{setTableData:k,getSelectRowKeys:K,deleteTableDataRecord:F,getDataSource:_,reload:M}]=O({title:"",api:()=>I(this,null,function*(){return(yield ee({safeCheckIssueId:f.value})).result}),rowKey:"id",bordered:!0,pagination:!1,target:"#more-tab-content",targetTabKey:"issueDtlChild",targetTabValue:i,columns:ae,useSearchForm:!1,showTableSetting:!1,rowSelection:{type:"checkbox"}}),U=e=>I(this,null,function*(){let n=yield l.get({url:"/bi/common/org/info",params:e},{isOnlyResult:!0}),r=[];return n.forEach(s=>{r.push({value:s.id,label:s.label})}),r}),c=d({pageNo:1,pageSize:10,templateId:a.templateId,taskDate:a.taskDate}),[V,{getSelectRows:H,clearSelectedRowKeys:G,getPaginationRef:Q}]=O({title:"",api:()=>I(this,null,function*(){const e=Q();return c.value.pageNo=e.current,c.value.pageSize=e.pageSize,c.value.exceptStationIdList=h.value,(yield te(c.value)).result}),columns:[{title:"所属公司",dataIndex:"organName",width:80,ifShow:D().isMultiOrganization},{title:"电站名称",dataIndex:"powerStationName",width:160}],formConfig:{labelWidth:120,schemas:[{label:"所属公司",field:"stationOrganId",component:"ApiSelect",componentProps:{options:[],api:U},colProps:{span:10},ifShow:D().isMultiOrganization},{label:"电站名称",field:"powerStationName",component:"Input",colProps:{span:10}}]},bordered:!0,useSearchForm:!0,showTableSetting:!1,rowSelection:{type:"checkbox"},handleSearchInfoFn(e){c.value.organName=e.organName,c.value.powerStationName=e.powerStationName},maxHeight:343});return v({reloadGrid:A,getDataSource:_,resetData:g}),(e,n)=>{const r=J("a-button");return S(),X(Y,null,[y(p(N),{onRegister:p(j)},{toolbar:w(()=>[u.value==0&&!a.disabledInput&&i.value=="issueDtlChild"?(S(),R(r,{key:0,preIcon:p(x).ADD,type:"primary",onClick:P,style:{"margin-right":"10px"}},{default:w(()=>[T(E("添加"))]),_:1},8,["preIcon"])):L("",!0),u.value==0&&!a.disabledInput&&i.value=="issueDtlChild"?(S(),R(r,{key:1,preIcon:p(x).DELETE,onClick:z},{default:w(()=>[T(E("删除"))]),_:1},8,["preIcon"])):L("",!0)]),_:1},8,["onRegister"]),y($,{maskClosable:!1,visible:b.value,"onUpdate:visible":n[0]||(n[0]=s=>b.value=s),title:"选择下发电站",onOk:B,width:1e3},{default:w(()=>[y(p(N),{onRegister:p(V),class:"table-in-dialog"},null,8,["onRegister"])]),_:1},8,["visible"])],64)}}});const oe=Z(se,[["__scopeId","data-v-702a2b2d"]]),we=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{Ie as a,be as b,fe as c,me as d,we as e,he as g,oe as i};
//# sourceMappingURL=issueList-77ab7d2e.js.map