var h=(_,c,a)=>new Promise((s,l)=>{var u=o=>{try{d(a.next(o))}catch(r){l(r)}},i=o=>{try{d(a.throw(o))}catch(r){l(r)}},d=o=>o.done?s(o.value):Promise.resolve(o.value).then(u,i);d((a=a.apply(_,c)).next())});import{D as x}from"./DeviceStatusInfo3-c6f9bba6.js";import{g as N,a as k,b as C,c as R,d as w,e as D}from"./index-0c1c0ee9.js";import{a7 as I,_ as E}from"./index.js";import{d as L,k as f,o as M,w as T,Z as g,_ as b,$ as v,f as $,F as z,ae as B,a5 as S,ad as m}from"./vue-71d1abb3.js";import"./antd-15ac76ed.js";const O={class:"real-status"},j={class:"device-status-info-layout"},A={class:"content-layout"},F={class:"data-box"},P={class:"list-box"},U=["onClick"],q=["title"],Z=L({__name:"RealStatus",props:{tabIndex:{type:String,require:!0,default:()=>""}},setup(_){const c=_,a={2:{code:"ewc",field:"userName",icon:"dianzigongpai",label:"电子工牌"},3:{code:"ii",field:"deviceName",icon:"xunjianzhongduan",label:"巡检仪"},4:{code:"dr",field:"plateNumber",icon:"hangchejiluyi",label:"行车记录仪"}},s=f({icon:a[c.tabIndex].icon,label:a[c.tabIndex].label,field:a[c.tabIndex].field}),l=f({total:0,online:0,leave:0,offline:0}),u=f({leave:!1}),i=f([]),d=f(-1),o=()=>({stationId:localStorage.getItem("OPERATION_SCREEN_STATION_UUID")}),r=t=>h(this,null,function*(){const n=o();l.value={total:0,online:0,leave:0,offline:0},u.value.leave=!1,i.value=[],d.value=-1,t==="2"?(N(n).then(e=>{l.value=e,u.value.leave=!1}),i.value=yield k(n)):t==="3"?(C(n).then(e=>{l.value=e,u.value.leave=!0}),i.value=yield R(n)):t==="4"&&(w(n).then(e=>{l.value=e,u.value.leave=!0}),i.value=yield D(n)),I.getInstance().sendMsg("smart-device-all-point-mark",{type:a[t].code,data:i.value})}),y=(t,n,e)=>{d.value=n,I.getInstance().sendMsg("smart-device-point-mark",{type:a[e].code,record:t})};return M(()=>{r(c.tabIndex)}),T(()=>c.tabIndex,t=>{s.value.icon=a[t].icon,s.value.label=a[t].label,s.value.field=a[t].field,r(t)}),(t,n)=>(g(),b("div",O,[v("div",j,[$(x,{icon:s.value.icon,total:l.value.total,online:l.value.online,leave:l.value.leave,offline:l.value.offline,label:s.value.label,showLeave:!1},null,8,["icon","total","online","leave","offline","label"])]),v("div",A,[v("div",F,[v("div",P,[(g(!0),b(z,null,B(i.value,(e,p)=>(g(),b("div",{key:p,onClick:G=>y(e,p,_.tabIndex),class:S(["list-item",d.value===p?"selected":null])},[v("div",{class:"list-item-label",title:`${e.stationShortName}-${e[s.value.field]}`},m(e.stationShortName)+"-"+m(e[s.value.field]),9,q),v("div",{class:S(`list-item-status ${e.status}`)},m(e.statusText),3)],10,U))),128))])])])]))}});const Y=E(Z,[["__scopeId","data-v-35f55066"]]);export{Y as default};
//# sourceMappingURL=RealStatus-344d80cd.js.map