var I=(p,c,e)=>new Promise((o,l)=>{var v=a=>{try{d(e.next(a))}catch(_){l(_)}},u=a=>{try{d(e.throw(a))}catch(_){l(_)}},d=a=>a.done?o(a.value):Promise.resolve(a.value).then(v,u);d((e=e.apply(p,c)).next())});import{D as N}from"./DeviceStatusInfo3-c6f9bba6.js";import{g as R,a as L,b as D,c as M,d as $,e as z}from"./index-0c1c0ee9.js";import{a7 as x,_ as B}from"./index.js";import{d as E,k as f,o as j,w as F,al as T,Z as m,_ as g,$ as r,f as y,F as q,ae as P,a5 as k,ad as S}from"./vue-71d1abb3.js";import"./antd-15ac76ed.js";const U={class:"real-status"},Z={class:"device-status-info-layout"},A={class:"content-layout"},G={class:"data-box"},H={class:"search-box"},J={class:"list-box"},K=["onClick"],O=["title"],Q=E({__name:"RealStatus",props:{tabIndex:{type:String,require:!0,default:()=>""}},setup(p){const c=p,e={2:{code:"ewc",field:"userName",icon:"dianzigongpai",label:"电子工牌"},3:{code:"ii",field:"deviceName",icon:"xunjianzhongduan",label:"巡检仪"},4:{code:"dr",field:"plateNumber",icon:"hangchejiluyi",label:"行车记录仪"}},o=f({icon:e[c.tabIndex].icon,label:e[c.tabIndex].label,field:e[c.tabIndex].field}),l=f({total:0,online:0,leave:0,offline:0}),v=f({leave:!1}),u=f([]),d=f(-1),a=f(""),_=()=>({stationName:a.value}),h=t=>I(this,null,function*(){const s=_();l.value={total:0,online:0,leave:0,offline:0},v.value.leave=!1,u.value=[],d.value=-1,t==="2"?(R(s).then(n=>{l.value=n,v.value.leave=!1}),u.value=yield L(s)):t==="3"?(D(s).then(n=>{l.value=n,v.value.leave=!0}),u.value=yield M(s)):t==="4"&&($(s).then(n=>{l.value=n,v.value.leave=!0}),u.value=yield z(s)),x.getInstance().sendMsg("smart-device-all-point-mark",{type:e[t].code,data:u.value})}),C=(t,s,n)=>{d.value=s,x.getInstance().sendMsg("smart-device-point-mark",{type:e[n].code,record:t})},w=()=>{h(c.tabIndex)};return j(()=>{h(c.tabIndex)}),F(()=>c.tabIndex,t=>{o.value.icon=e[t].icon,o.value.label=e[t].label,o.value.field=e[t].field,a.value="",h(t)}),(t,s)=>{const n=T("a-input-search");return m(),g("div",U,[r("div",Z,[y(N,{icon:o.value.icon,total:l.value.total,online:l.value.online,leave:l.value.leave,offline:l.value.offline,label:o.value.label,showLeave:!1},null,8,["icon","total","online","leave","offline","label"])]),r("div",A,[r("div",G,[r("div",H,[y(n,{class:"operation-screen-input-search",value:a.value,"onUpdate:value":s[0]||(s[0]=i=>a.value=i),placeholder:"请输入电站名称",style:{width:"100%"},onSearch:w},null,8,["value"])]),r("div",J,[(m(!0),g(q,null,P(u.value,(i,b)=>(m(),g("div",{key:b,onClick:V=>C(i,b,p.tabIndex),class:k(["list-item",d.value===b?"selected":null])},[r("div",{class:"list-item-label",title:`${i.stationShortName}-${i[o.value.field]}`},S(i.stationShortName)+"-"+S(i[o.value.field]),9,O),r("div",{class:k(`list-item-status ${i.status}`)},S(i.statusText),3)],10,K))),128))])])])])}}});const le=B(Q,[["__scopeId","data-v-c7112b4f"]]);export{le as default};
//# sourceMappingURL=RealStatus-fcc3a7f5.js.map
