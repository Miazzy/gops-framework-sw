import{b6 as r,a5 as t}from"./index.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./antd-15ac76ed.js";import"./index-316f6ffb.js";import"./index-085d06c7.js";import{u as l}from"./useRender-21ce56fb.js";r();const c=[{field:"billCode",component:"Input",label:"单据编号",required:!1},{field:"rangeDate",component:"RangePicker",label:"评价日期",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]},required:!1},{label:"状态",field:"status",component:"DictSelectBox",componentProps:{type:"bpm_process_instance_result"}}],p=e=>t.post({url:"/baseset/common/list-orgStationTree",params:e},{}),m=[{title:"单据编号",dataIndex:"billCode",align:"center",width:150,resizable:!0},{title:"评价日期",dataIndex:"evaluationDate",width:150,sorter:!0,resizable:!0},{title:"电站名称",dataIndex:"stationName",align:"center",sorter:!0,resizable:!0,width:150},{title:"评价指标",dataIndex:"indexName",align:"center",width:150,resizable:!0},{title:"评价分数",dataIndex:"score",align:"center",sorter:!0,resizable:!0,width:100},{title:"评价说明",dataIndex:"evaluationDesc",align:"left",resizable:!0,width:200},{title:"创建人",dataIndex:"personMemberName",align:"center",resizable:!0,width:100},{title:"创建时间",dataIndex:"fillinDate",align:"center",sorter:!0,resizable:!0,width:150},{title:"业务状态",dataIndex:"businessStatus",align:"center",resizable:!0},{title:"审批状态",dataIndex:"status",align:"center",resizable:!0,fixed:"right",customRender:({text:e,record:a})=>l.renderFlowStatus(e,a.statusText)}],g=e=>t.post({url:"/po/daily-evaluation/page",params:e},{isOnlyResult:!0}),b=e=>t.post({url:"/po/daily-evaluation/save",params:e},{}),D=e=>t.get({url:"/po/evaluation-template-dtl/listByDate",params:e},{isOnlyResult:!0}),x=e=>t.get({url:"/po/daily-evaluation/get",params:e},{isOnlyResult:!0});export{g as a,x as b,m as c,D as d,b as e,p as g,c as s};
//# sourceMappingURL=daily-77449ffc.js.map