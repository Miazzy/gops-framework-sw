import{a5 as t}from"./index.js";function u(e){return t.get({url:"/po/equipment-parameter/page",params:e},{isOnlyResult:!0})}function r(e){return t.get({url:"/po/equipment-parameter/get?id="+e},{isOnlyResult:!0})}function p(e){return t.post({url:"/po/equipment-parameter/create",data:e})}function o(e){return t.put({url:"/po/equipment-parameter/update",data:e})}function a(e){return t.delete({url:"/po/equipment-parameter/delete?id="+e})}function m(e){return t.get({url:"/po/equipment-component/page",params:e},{isOnlyResult:!0})}function i(e){return t.get({url:"/po/equipment-component/get?id="+e},{isOnlyResult:!0})}function l(e){return t.post({url:"/po/equipment-component/create",data:e})}function c(e){return t.put({url:"/po/equipment-component/update",data:e})}function s(e){return t.delete({url:"/po/equipment-component/delete?id="+e})}function q(e){return t.download({url:"/po/equipment-component/export-excel",params:e},"设备物资元器件.xls")}export{o as a,p as b,l as c,s as d,q as e,r as f,i as g,a as h,m as i,u as j,c as u};
//# sourceMappingURL=index-131c61b3.js.map