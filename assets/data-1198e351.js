import{a5 as t}from"./index.js";const s=e=>t.post({url:"/system/org-type/create",params:e},{}),a=e=>t.post({url:"/system/org-type/update",params:e},{}),n=e=>e.id?a(e):s(e),o=e=>t.delete({url:"/system/org-type/delete?id="+e},{}),l=e=>t.post({url:"/system/org-type/update-sort",params:e},{}),d=e=>t.get({url:"/system/org-type/page",params:e},{isOnlyResult:!0}),i={labelWidth:120,actionColOptions:{span:24},autoAdvancedLine:1,showAdvancedButton:!0,baseColProps:{span:7},schemas:[{label:"编码",field:"code",component:"Input"},{label:"名称",field:"name",component:"Input"}]},p=[{title:"编码",dataIndex:"code",width:150,resizable:!0,align:"center"},{title:"名称",dataIndex:"name",width:150,resizable:!0,align:"center"},{title:"排序号",dataIndex:"sort",width:80,resizable:!0,align:"center"},{title:"状态",dataIndex:"status",width:100,resizable:!0,align:"center"}];export{i as a,p as c,o as d,d as g,n as s,l as u};
//# sourceMappingURL=data-1198e351.js.map
