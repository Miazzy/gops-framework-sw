import{a5 as t}from"./index.js";var l=(e=>(e.INSURANCE="insure",e.DANGER="danger",e.SECOND="second",e))(l||{});const s=e=>t.post({url:"/po/drone-archive/checkAdd",params:e},{}),o=e=>t.post({url:"/po/drone-archive/checkEdit",params:e},{}),u=e=>t.post({url:"/po/drone-archive/checkDelete",params:e},{}),h=e=>t.get({url:"/bi/common/station/info",params:e},{}),g=e=>t.put({url:"/po/drone-archive/checkMainEdit",params:e},{}),p=e=>t.put({url:"/po/drone-archive/checkScrap",params:e},{}),b=e=>t.post({url:"/baseset/common/list-stationPerson",params:e},{}),m=e=>t.put({url:"/po/drone-archive/updateStatus",params:e},{}),d=e=>t.post({url:"/po/drone-archive/create",params:e},{}),x=e=>d(e),I=e=>t.download({url:"/po/drone-archive/export-excel",params:e},{isReturnNativeResponse:!0}),w=e=>t.get({url:"/po/drone-archive/get",params:e},{}),A=e=>t.get({url:"/po/drone-archive/page",params:e},{}),z=(e,a)=>t.delete({url:`/po/drone-archive/drone-${e}/delete`,params:a},{}),f=(e,a)=>t.get({url:`/po/drone-archive/drone-${e}/list`,params:a},{});function n({column:e,record:a}){return a[e.dataIndex+"Text"]}const D=()=>[{title:"编号",dataIndex:"code",sorter:!0,resizable:!0,width:150},{title:"所属电站",dataIndex:"stationName",headAlign:"center",align:"left",sorter:!0,resizable:!0,width:220},{title:"当前使用权",dataIndex:"useStationName",headAlign:"center",align:"left",sorter:!0,resizable:!0,width:120},{title:"厂家",dataIndex:"droneFactory",sorter:!0,resizable:!0,headAlign:"center",align:"left",width:100,customRender:n},{title:"型号",dataIndex:"model",headAlign:"center",align:"left",sorter:!0,resizable:!0,width:200},{title:"动力",dataIndex:"dronePower",headAlign:"center",align:"left",sorter:!0,resizable:!0,width:200,customRender:n},{title:"SN编码",dataIndex:"snNumber",headAlign:"center",align:"left",resizable:!0,width:150},{title:"民航码",dataIndex:"civilNumber",headAlign:"center",align:"left",resizable:!0,width:150},{title:"相机类型",dataIndex:"cameraType",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:100,customRender:n},{title:"机场类别",dataIndex:"droneType",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120,customRender:n},{title:"采购日期",dataIndex:"procureDate",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120},{title:"保险状态",dataIndex:"insuranceStatus",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120},{title:"投保期止",dataIndex:"endInsurancePeriod",headAlign:"center",align:"right",sorter:!0,resizable:!0,width:120},{title:"出险次数",dataIndex:"dangerCount",headAlign:"center",align:"right",sorter:!0,resizable:!0,width:120},{title:"无人机状态",dataIndex:"status",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120},{title:"创建人",dataIndex:"creatorName",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120},{title:"创建时间",dataIndex:"createTime",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120},{title:"修改人",dataIndex:"updaterName",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120},{title:"修改时间",dataIndex:"updateTime",headAlign:"center",align:"center",sorter:!0,resizable:!0,width:120}],N=(e,a)=>{let r=[];return e==="insure"?r=[{title:"承保公司",dataIndex:"insuranceCarriers",headAlign:"center",align:"left",width:120,resizable:!0},{title:"保单号",dataIndex:"policyNo",headAlign:"center",align:"left",width:120,resizable:!0},{title:"有效期起",dataIndex:"startTime",headAlign:"center",align:"center",width:120,resizable:!0},{title:"有效期止",dataIndex:"endTime",headAlign:"center",align:"center",width:120,resizable:!0},{title:"保单附件",dataIndex:"bizFileId",headAlign:"center",align:"center",width:120,resizable:!0},{title:"备注",dataIndex:"remark",headAlign:"center",align:"left",width:120,resizable:!0},{title:"创建人",dataIndex:"creatorName",headAlign:"center",align:"center",width:120,resizable:!0},{title:"创建时间",dataIndex:"createTime",headAlign:"center",align:"center",resizable:!0,width:120}]:e==="danger"?r=[{title:"出险电站",dataIndex:"stationName",headAlign:"center",align:"left",width:120,resizable:!0},{title:"报险日期",dataIndex:"reportingDate",headAlign:"center",align:"left",width:120,resizable:!0},{title:"事件概述",dataIndex:"description",headAlign:"center",align:"left",width:120,resizable:!0},{title:"理赔结果",dataIndex:"settlementResult",headAlign:"center",align:"center",resizable:!0,width:120,customRender:({text:i})=>{if(i=="no")return"不理赔";if(i=="in")return"理赔中";if(i=="done")return"已理赔"}},{title:"出险附件",dataIndex:"bizFileId",headAlign:"center",align:"center",width:120,resizable:!0},{title:"备注",dataIndex:"remark",headAlign:"center",align:"left",width:120,resizable:!0},{title:"创建人",dataIndex:"creatorName",headAlign:"center",align:"center",width:120,resizable:!0},{title:"创建时间",dataIndex:"createTime",headAlign:"center",align:"center",width:120,resizable:!0}]:e==="second"&&(r=[{title:"寄出电站",dataIndex:"sendStationName",headAlign:"center",align:"left",width:120,resizable:!0},{title:"寄出人",dataIndex:"sender",headAlign:"center",align:"center",width:120,resizable:!0},{title:"寄出日期",dataIndex:"sendDate",headAlign:"center",align:"center",width:120,resizable:!0},{title:"签收电站",dataIndex:"signStationName",headAlign:"center",align:"left",width:120,resizable:!0},{title:"签收人",dataIndex:"signee",headAlign:"center",align:"center",width:120,resizable:!0},{title:"签收日期",dataIndex:"signingDate",headAlign:"center",align:"center",width:120,resizable:!0},{title:"备注",dataIndex:"remark",headAlign:"center",align:"left",width:120,resizable:!0}]),r},S={baseColProps:{span:8},labelWidth:120,autoAdvancedLine:1,schemas:[{field:"code",label:"编号",component:"Input"},{field:"droneFactory",label:"厂家",component:"DictSelectBox",componentProps:{type:"droneFactory"}},{field:"snNumber",label:"SN编号",component:"Input"},{field:"civilNumber",label:"民航码",component:"Input"},{field:"dronePower",label:"动力",component:"DictSelectBox",componentProps:{type:"dronePower"}},{field:"[startDate, endDate]",label:"采购日期",component:"RangePicker",componentProps:{format:"YYYY-MM-DD",valueFormat:"YYYY-MM-DD",placeholder:["开始日期","结束日期"],style:"width: 100%"}},{field:"insuranceStatus",label:"保险状态",component:"DictSelectBox",componentProps:{type:"insuranceStatus"}},{field:"status",label:"无人机状态",component:"DictSelectBox",componentProps:{type:"droneStatus"}}]};export{l as R,p as a,A as b,g as c,N as d,I as e,s as f,D as g,o as h,x as i,w as j,f as k,h as l,u as m,z as n,b as o,S as s,m as u};
//# sourceMappingURL=drone.data-57a403d5.js.map