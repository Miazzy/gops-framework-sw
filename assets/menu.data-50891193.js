import{a5 as t}from"./index.js";const s="/oa/work-menu/getTableNamePage",l=e=>t.post({url:"/system/function/list-tree",params:e},{isOnlyResult:!0}),a=e=>t.post({url:"/oa/work-menu/create",params:e},{}),r=e=>t.put({url:"/oa/work-menu/update",params:e},{}),o=e=>e.id?r(e):a(e),i=e=>t.delete({url:`/oa/work-menu/delete?id=${e}`},{}),u="/oa/work-menu/page",d=e=>t.get({url:"/oa/work-menu/page",params:e},{isOnlyResult:!0}),m=[{title:"菜单名称",dataIndex:"menuName",headAlign:"center",align:"left",width:200,sorter:!0,resizable:!0},{title:"表名称",dataIndex:"tableName",headAlign:"center",align:"left",width:220,sorter:!0,resizable:!0},{title:"是否是流程",dataIndex:"isFlow",width:100,sorter:!0,resizable:!0,customRender:({record:e})=>e.isFlowText},{title:"创建时间",dataIndex:"createTime",width:120,sorter:!0,resizable:!0},{title:"更新时间",dataIndex:"updateTime",width:120,sorter:!0,resizable:!0}],c={baseColProps:{span:8},labelWidth:120,autoAdvancedLine:1,schemas:[{label:"菜单名称",field:"menuName",component:"Input"}]},b=[{title:"名称",dataIndex:"tableName",key:"tableName",minWidth:100},{title:"注释",dataIndex:"tableComment",key:"tableComment",minWidth:120}];export{b as a,d as b,m as c,o as d,l as e,i as f,s as g,u as h,c as s};
//# sourceMappingURL=menu.data-50891193.js.map
