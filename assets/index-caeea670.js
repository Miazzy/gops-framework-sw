import{a0 as l,a5 as t}from"./index.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./antd-15ac76ed.js";import"./index-316f6ffb.js";import"./index-085d06c7.js";import{u as o}from"./useRender-21ce56fb.js";function h(e){const a=[{title:"单据编号",dataIndex:"billCode",align:"center",fixed:"left",resizable:!0,width:200,headAlign:"center"},{title:"所属公司",dataIndex:"stationOrganName",align:"center",fixed:"left",resizable:!0,sorter:!0,width:200,headAlign:"center"},{title:"电站名称",dataIndex:"stationName",align:"center",fixed:"left",sorter:!0,resizable:!0,width:200,headAlign:"center"},{title:"期数",dataIndex:"periodName",align:"center",sorter:!0,resizable:!0,fixed:"left",width:100,headAlign:"center"}];if(l().isMultiOrganization||a.splice(1,1),e=="day"){const r=[{title:"日报日期",dataIndex:"reportDay",align:"center",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"并网容量(MW)",dataIndex:"connectCapacity",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"日辐照(kJ/㎡)",dataIndex:"radiation",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"}];a.push(...r)}else if(e=="week"){const r=[{title:"周报周期",dataIndex:"weeklyCycle",align:"center",width:220,headAlign:"center",sorter:!0,resizable:!0},{title:"并网容量(MW)",dataIndex:"connectCapacity",align:"right",width:120,sorter:!0,resizable:!0,headAlign:"center"}];a.push(...r)}else if(e=="month"){const r=[{title:"月报周期",dataIndex:"monthCycle",align:"center",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"并网容量(MW)",dataIndex:"connectCapacity",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"}];a.push(...r)}else if(e=="year"){const r=[{title:"年报周期",dataIndex:"yearCycle",align:"center",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"并网容量(MW)",dataIndex:"connectCapacity",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"}];a.push(...r)}const n=[{title:"理论发电(kWh)",dataIndex:"theoElec",align:"right",width:120,sorter:!0,resizable:!0,headAlign:"center"},{title:"实际发电(kWh)",dataIndex:"genElec",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"上网电量(kWh)",dataIndex:"onlineElec",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"下网电量(kWh)",dataIndex:"offlineElec",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"外接电源厂用电",dataIndex:"facUsed",align:"right",sorter:!0,resizable:!0,width:150,headAlign:"center"},{title:"损耗电(kWh)",dataIndex:"totalLoss",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"综合厂用电率",dataIndex:"facRatio",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"系统效率(%)",dataIndex:"sysEfficiency",align:"right",sorter:!0,resizable:!0,width:150,headAlign:"center"},{title:"利用小时数(h)",dataIndex:"validHours",align:"right",sorter:!0,resizable:!0,width:120,headAlign:"center"},{title:"创建人",dataIndex:"personMemberName",align:"center",width:100},{title:"创建时间",dataIndex:"fillinDate",align:"center",sorter:!0,resizable:!0,width:150},{title:"状态",dataIndex:"status",width:150,sorter:!0,fixed:"right",align:"center",resizable:!0,customRender:({text:r,record:i})=>o.renderFlowStatus(r,i.statusText)}];return a.push(...n),a}function x(){return[{title:"损失原因",dataIndex:"lossTypeCodeText",align:"center",width:140},{title:"损失电量(kWh)",dataIndex:"lossElec",align:"right",width:100,headAlign:"center"},{title:"开始时间",dataIndex:"startTime",align:"center",width:180},{title:"结束时间",dataIndex:"endTime",align:"center",width:180},{title:"生产设备",dataIndex:"equipmentName",align:"center",width:100},{title:"供应商",dataIndex:"supplierName",align:"center",width:100,headAlign:"center"},{title:"生产厂家",dataIndex:"factoryName",align:"center",width:100},{title:"损失描述",dataIndex:"reason",align:"center",width:100},{title:"附件",dataIndex:"bizFileId",align:"center",width:100}]}const w=e=>t.post({url:"/baseset/common/list-orgStationPeriodTree",params:e},{}),y=e=>t.post({url:"/po/day-report/getBaseInfo",params:e},{}),m=e=>t.post({url:"/po/day-report/page",params:e},{}),I=e=>t.post({url:"/po/week-report/page",params:e},{}),f=e=>t.post({url:"/po/month-report/page",params:e},{}),b=e=>t.post({url:"/po/year-report/page",params:e},{});function z(e){return t.download({url:"/po/day-report/export-excel",params:e},"生产日报.xls")}function R(e){return t.download({url:"/po/week-report/export-excel",params:e},"生产周报.xls")}function A(e){return t.download({url:"/po/month-report/export-excel",params:e},"生产月报.xls")}function k(e){return t.download({url:"/po/year-report/export-excel",params:e},"生产年报.xls")}const C=e=>t.post({url:"/po/day-report/create",params:e},{}),W=e=>t.post({url:"/po/week-report/create",params:e},{}),T=e=>t.post({url:"/po/month-report/create",params:e},{}),L=e=>t.post({url:"/po/year-report/create",params:e},{}),M=e=>t.get({url:"/baseset/period/get?id="+e},{isOnlyResult:!0}),D=e=>t.get({url:"/po/day-report/get?id="+e},{isOnlyResult:!0}),O=e=>t.get({url:"/po/week-report/get?id="+e},{isOnlyResult:!0}),N=e=>t.get({url:"/po/month-report/get?id="+e},{isOnlyResult:!0}),E=e=>t.get({url:"/po/year-report/get?id="+e},{isOnlyResult:!0}),Y=e=>t.post({url:"/po/day-report-loss/list",params:e},{}),B=e=>t.delete({url:"/po/day-report-loss/delete",params:e},{}),S=e=>t.post({url:"/po/day-report-loss/lossTypeTree",params:e},{isOnlyResult:!0});export{R as a,A as b,k as c,h as d,z as e,m as f,w as g,I as h,f as i,b as j,x as k,S as l,B as m,Y as n,C as o,D as p,M as q,W as r,O as s,y as t,T as u,N as v,L as w,E as x};
//# sourceMappingURL=index-caeea670.js.map