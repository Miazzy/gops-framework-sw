import{b6 as i,a0 as o,a5 as r}from"./index.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./antd-15ac76ed.js";import"./index-316f6ffb.js";import"./index-085d06c7.js";import{u as s}from"./useRender-21ce56fb.js";import{r as a}from"./vue-71d1abb3.js";i();function f(e){return[{title:"单据编号",dataIndex:"billCode",width:160,resizable:!0,sorter:!0},{title:"所属公司",dataIndex:"stationOrganName",width:160,headAlign:"center",align:"left",resizable:!0,sorter:!0,ifShow:o().isMultiOrganization},{title:"签订电站",dataIndex:"stationName",width:160,headAlign:"center",align:"left",resizable:!0,sorter:!0},{title:"签订人",dataIndex:"signPersonName",width:160,resizable:!0,sorter:!0},{title:"责任期起",dataIndex:"startDate",width:160,customRender:({text:t})=>s.renderDate(t,"YYYY-MM-DD"),resizable:!0,sorter:!0},{title:"责任期止",dataIndex:"endDate",width:160,customRender:({text:t})=>s.renderDate(t,"YYYY-MM-DD"),resizable:!0,sorter:!0},{title:"是否在职",dataIndex:"isBeOnTheJobText",width:160,resizable:!0,sorter:!0},{title:"签订日期",dataIndex:"signDate",width:160,customRender:({text:t})=>s.renderDate(t,"YYYY-MM-DD"),resizable:!0,sorter:!0},{title:"创建人",dataIndex:"personMemberName",width:160,resizable:!0,sorter:!0},{title:"创建时间",dataIndex:"fillinDate",width:180,customRender:({text:t})=>s.renderDate(t),resizable:!0,sorter:!0},{title:"审批状态",dataIndex:"status",width:100,customRender:({text:t,record:n})=>s.renderFlowStatus(t,n.statusText),resizable:!0,sorter:!0},{title:"业务状态",dataIndex:"bizStatusText",customRender:({text:t})=>s.renderDict(t,"xx"),resizable:!0,sorter:!0}]}const x=e=>r.get({url:"/po/safetyRespAgreement/get",params:e},{}),I=e=>r.post({url:"/baseset/common/list-orgStationTree",params:e},{}),D=e=>r.get({url:"/po/safetyRespAgreement/page",params:e},{}),h=e=>r.put({url:"/po/safetyRespAgreement/updateBizStatus",params:e},{}),d=e=>r.post({url:"/po/safetyRespAgreement/create",params:e},{isOnlyResult:!0}),z=e=>d(e),R=e=>r.post({url:"/baseset/common/list-stationPerson",params:e},{});function S(e){return r.get({url:"/po/safetyRespAgreement/export-excel",params:e})}a({spinning:!1});const w=a({spinning:!1,processInstanceId:"",id:"",billCode:"",fillinDate:"",organId:"",organName:"",deptId:"",deptName:"",positionId:"",positionName:"",personMemberId:"",personMemberName:"",fullId:"",status:0,subject:"",finishedDate:"",stationOrganId:"",stationOrganName:"",stationId:"",stationName:"",signPersonId:"",signPersonName:"",signDate:"",startDate:"",endDate:"",content:"",bizStatus:1});export{I as a,x as b,D as c,R as d,S as e,w as f,f as g,z as s,h as u};
//# sourceMappingURL=safetyRespAgreement-5ce80b14.js.map