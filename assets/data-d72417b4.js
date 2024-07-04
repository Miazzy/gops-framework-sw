import{a5 as t}from"./index.js";const i=e=>t.get({url:"/po/day-report/exists/list",params:e},{}),r=e=>t.download({url:"/baseset/powerstation/export-excel",params:e},{isReturnNativeResponse:!0}),n=e=>t.post({url:"/system/org/list-tree",params:e},{}),d=e=>t.get({url:"/baseset/related-party/get-list",params:e},{isOnlyResult:!0}),s=()=>t.post({url:"/baseset/common/list-region"},{}),l=e=>t.post({url:"/baseset/powerstation/updateBatchSort",params:e},{isOnlyResult:!0}),o=e=>t.get({url:"/baseset/powerstation/page",params:e},{isOnlyResult:!0}),u=e=>t.post({url:"/baseset/powerstation/save",params:e},{isOnlyResult:!0}),c=e=>t.delete({url:"/baseset/powerstation/delete?id="+e},{}),p=e=>t.get({url:"/baseset/powerstation/get",params:e},{}),x=e=>t.post({url:"/baseset/operation/save",params:e},{isOnlyResult:!0}),g=e=>t.delete({url:"/baseset/operation/delete?id="+e},{}),I=e=>t.get({url:"/baseset/operation/list",params:e},{isOnlyResult:!0}),m=e=>t.post({url:"/baseset/period/save",params:e},{isOnlyResult:!0}),h=e=>t.delete({url:"/baseset/period/delete?id="+e},{}),b=e=>t.get({url:"/baseset/period/list",params:e},{isOnlyResult:!0}),w=e=>t.post({url:"/baseset/grid/save",params:e},{isOnlyResult:!0}),y=e=>t.delete({url:"/baseset/grid/delete?id="+e},{}),R=e=>t.get({url:"/baseset/grid/list",params:e},{isOnlyResult:!0}),T={labelWidth:120,actionColOptions:{span:24},autoAdvancedLine:1,showAdvancedButton:!0,baseColProps:{span:7},autoSubmitOnEnter:!0,noHideBtnFlag:!0,schemas:[{field:"name",label:"电站名称",component:"Input",componentProps:{placeholder:"请输入电站名称"}},{field:"stationType",label:"电站类型",component:"DictSelectBox",componentProps:{type:"stationType",placeholder:"请选择电站类型"}},{field:"stationStatus",label:"电站状态",component:"DictSelectBox",componentProps:{type:"stationStatus",placeholder:"请选择电站状态"}}]},f=[{title:"所属组织",dataIndex:"orgName",sorter:!0,width:150,align:"left",headAlign:"center",resizable:!0},{title:"电站名称",dataIndex:"name",sorter:!0,width:150,align:"left",headAlign:"center",resizable:!0},{title:"期数",dataIndex:"period",sorter:!0,width:80,align:"center",resizable:!0},{title:"排序号",dataIndex:"sequence",width:100,editRow:!0,align:"center",resizable:!0,sorter:!0},{title:"电站类型",dataIndex:"stationType",sorter:!0,width:110,align:"center",customRender:({record:e})=>e.stationTypeText,resizable:!0},{title:"规划装机容量(MW)",dataIndex:"plannedCapacity",sorter:!0,width:150,align:"right",headAlign:"center",resizable:!0},{title:"占地面积(亩)",dataIndex:"extent",sorter:!0,width:120,align:"right",headAlign:"center",resizable:!0},{title:"光伏并网容量(MW)",dataIndex:"connectCapacity",sorter:!0,width:150,align:"right",headAlign:"center",resizable:!0},{title:"储能并网容量(MW)",dataIndex:"accessCapacity",sorter:!0,width:120,align:"right",headAlign:"center",resizable:!0},{title:"首次并网日期",dataIndex:"firstGridConnectionDate",sorter:!0,width:120,align:"center",resizable:!0},{title:"设计运行年限",dataIndex:"serviceLife",sorter:!0,width:120,align:"right",headAlign:"center",resizable:!0},{title:"电站状态",dataIndex:"stationStatus",sorter:!0,width:100,align:"center",customRender:({record:e})=>e.stationStatusText,resizable:!0},{title:"创建人",width:100,sorter:!0,dataIndex:"createName",align:"center",resizable:!0},{title:"创建时间",width:150,sorter:!0,dataIndex:"createTime",align:"center",resizable:!0},{title:"修改人",width:100,sorter:!0,dataIndex:"updateName",align:"center",resizable:!0},{title:"修改时间",width:150,sorter:!0,dataIndex:"updateTime",align:"center",resizable:!0}],z=[{title:"id",dataIndex:"id",width:150,defaultHidden:!0},{title:"operationCompanyId",dataIndex:"operationCompanyId",width:150,defaultHidden:!0},{title:"运维公司",dataIndex:"companyName"},{title:"公司简称",dataIndex:"shortName"},{title:"起始日期",dataIndex:"startDate"},{title:"到期日期",dataIndex:"endDate"},{title:"起算月",dataIndex:"startMonth"},{title:"创建人",dataIndex:"createName"},{title:"创建时间",dataIndex:"createTime"},{title:"修改人",dataIndex:"updateName"},{title:"修改时间",dataIndex:"updateTime"}],C=[{title:"id",dataIndex:"id",width:150,defaultHidden:!0},{title:"期数",dataIndex:"nameText"},{title:"本期建设规模(MW)",dataIndex:"buildScale"},{title:"光伏并网容量(MW)",dataIndex:"connectCapacity"},{title:"储能并网容量(MW)",dataIndex:"accessCapacity"},{title:"投产日期",dataIndex:"productDate"},{title:"是否全并网",dataIndex:"isGridAllText"},{title:"全并网日期",dataIndex:"gridAllDate"},{title:"创建人",dataIndex:"createName"},{title:"创建时间",dataIndex:"createTime"},{title:"修改人",dataIndex:"updateName"},{title:"修改时间",dataIndex:"updateTime"}],O=[{title:"id",dataIndex:"id",width:150,defaultHidden:!0},{title:"期数",dataIndex:"name"},{title:"并网日期",dataIndex:"gridDate"},{title:"光伏并网容量(MW)",dataIndex:"connectCapacity"},{title:"储能并网容量(MW)",dataIndex:"accessCapacity"},{title:"组件厂家",dataIndex:"componentVender"},{title:"组件功率(W)",dataIndex:"componentType"},{title:"逆变器厂家",dataIndex:"inverterVender"},{title:"逆变器型号",dataIndex:"inverterType"},{title:"创建人",dataIndex:"createName"},{title:"创建时间",dataIndex:"createTime"},{title:"修改人",dataIndex:"updateName"},{title:"修改时间",dataIndex:"updateTime"}];export{p as a,s as b,f as c,c as d,r as e,T as f,o as g,d as h,n as i,m as j,w as k,g as l,h as m,i as n,y as o,u as p,z as q,C as r,x as s,O as t,l as u,I as v,b as w,R as x};
//# sourceMappingURL=data-d72417b4.js.map