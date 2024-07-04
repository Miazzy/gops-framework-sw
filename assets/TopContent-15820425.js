import{D as i}from"./DataBoardItem-6bead2db.js";import{h as o}from"./utils-5bbca5df.js";import{am as c,_ as r}from"./index.js";import{d as k,k as f,Z as m,_ as R,$ as v,f as d}from"./vue-71d1abb3.js";import"./sky_bg-5706a728.js";import"./antd-15ac76ed.js";const C={class:"data-board-box-inner"},h=k({__name:"TopContent",props:{data:{type:Object,default:{}}},setup(t,{expose:s}){const u=f(c()),n=a=>{a=="inspection"?o("/bi/inspection/index",{}):a=="workOrder"?o("/bi/maintenance/workorder",{}):a=="ticket"?o("/bi/maintenance/ticket",{}):a=="defect"?o("/bi/fault/index",{}):a=="hidden"?o("/bi/hidden/index",{}):a==="assess"&&o("/bi/maintenance/assess",{})};return s({handleUpdate:()=>{u.value=c()}}),(a,e)=>(m(),R("div",{class:"top-content",key:u.value},[v("div",C,[d(i,{title:"巡检统计(次)",icon:"inspectionCount",value:t.data.inspectionCount!=null?t.data.inspectionCount:"--",tRatio:t.data.inspectionYoy!=null?t.data.inspectionYoy+"%":"--",hRatio:t.data.inspectionQoq!=null?t.data.inspectionQoq+"%":"--",percentPosition:"right",onClickValue:e[0]||(e[0]=l=>n("inspection"))},null,8,["value","tRatio","hRatio"]),d(i,{title:"工单统计(笔)",icon:"workOrderCount",value:t.data.workOrderCount!=null?t.data.workOrderCount:"--",tRatio:t.data.workOrderYoy!=null?t.data.workOrderYoy+"%":"--",hRatio:t.data.workOrderQoq!=null?t.data.workOrderQoq+"%":"--",percentPosition:"right",onClickValue:e[1]||(e[1]=l=>n("workOrder"))},null,8,["value","tRatio","hRatio"]),d(i,{title:"细则统计(万元)",icon:"netIncome",value:t.data.netIncome!=null?t.data.netIncome:"--",tRatio:t.data.netIncomeYoy!=null?t.data.netIncomeYoy+"%":"--",hRatio:t.data.netIncomeQoq!=null?t.data.netIncomeQoq+"%":"--",percentPosition:"right",onClickValue:e[2]||(e[2]=l=>n("assess"))},null,8,["value","tRatio","hRatio"]),d(i,{title:"两票统计(张)",icon:"twoTicketCount",value:t.data.twoTicketCount!=null?t.data.twoTicketCount:"--",tRatio:t.data.twoTicketYoy!=null?t.data.twoTicketYoy+"%":"--",hRatio:t.data.twoTicketQoq!=null?t.data.twoTicketQoq+"%":"--",percentPosition:"right",onClickValue:e[3]||(e[3]=l=>n("ticket"))},null,8,["value","tRatio","hRatio"]),d(i,{title:"缺陷统计(个)",icon:"defectCount",value:t.data.defectCount!=null?t.data.defectCount:"--",tRatio:t.data.defectYoy!=null?t.data.defectYoy+"%":"--",hRatio:t.data.defectQoq!=null?t.data.defectQoq+"%":"--",percentPosition:"right",onClickValue:e[4]||(e[4]=l=>n("defect"))},null,8,["value","tRatio","hRatio"]),d(i,{title:"隐患统计(项)",icon:"hiddenStatistics",value:t.data.hiddenCount!=null?t.data.hiddenCount:"--",tRatio:t.data.hiddenYoy!=null?t.data.hiddenYoy+"%":"--",hRatio:t.data.hiddenQoq!=null?t.data.hiddenQoq+"%":"--",percentPosition:"right",onClickValue:e[5]||(e[5]=l=>n("hidden"))},null,8,["value","tRatio","hRatio"])])]))}});const O=r(h,[["__scopeId","data-v-d0e0f85a"]]);export{O as default};
//# sourceMappingURL=TopContent-15820425.js.map