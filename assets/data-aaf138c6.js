import{a5 as e}from"./index.js";const r=t=>e.get({url:"/da/group-operation/monitor/deviceStat",params:t},{}),o=t=>e.get({url:"/da/group-operation/monitor/powerRank",params:t},{}),n=t=>e.get({url:"/da/group-operation/monitor/topInfo",params:t},{}),i=t=>e.get({url:"/da/group-operation/monitor/warning/info",params:t},{}),g=t=>e.get({url:"/monitor/large-screen/station/dispersionRatio",params:t},{}),s=()=>e.get({url:"/da/group-operation/monitor/powerTrend"},{}),d=[{title:"序号",dataIndex:"key",key:"key",width:50,align:"center"},{title:"电站",dataIndex:"stationName",key:"stationName",align:"center",ellipsis:!0,width:60},{title:"设备告警(台)",dataIndex:"alarmCount",key:"alarmCount",align:"center"},{title:"组串异常(条)",dataIndex:"pvErrorNum",key:"pvErrorNum",align:"center"},{title:"通讯中断(台)",dataIndex:"greyErrorNum",key:"greyErrorNum",align:"center"}];export{r as a,o as b,i as c,g as d,s as e,n as g,d as w};
//# sourceMappingURL=data-aaf138c6.js.map
