var f=(y,n,r)=>new Promise((l,o)=>{var p=t=>{try{s(r.next(t))}catch(c){o(c)}},u=t=>{try{s(r.throw(t))}catch(c){o(c)}},s=t=>t.done?l(t.value):Promise.resolve(t.value).then(p,u);s((r=r.apply(y,n)).next())});import"./WeatherDisplay-e68d53d5.js";import{a as w}from"./index.esm-c216ed00.js";import{C as T,a as x}from"./CockpitSetting-7afdfaa9.js";import U from"./TopContent-f19ba4e6.js";import D from"./MiddleContent-dda61147.js";import M from"./BottomContent-df168ea7.js";import{t as q}from"./index-43aae102.js";import{a6 as N,_ as Q}from"./index.js";import{d as V,k as a,g as Y,ax as E,r as $,o as z,Z as m,_ as F,$ as I,a9 as B,ac as h,f as _}from"./vue-71d1abb3.js";import"./antd-15ac76ed.js";import"./weatherIcon-14d6bf6f.js";import"./index-8c718dee.js";import"./DataBoardItem-6bead2db.js";import"./sky_bg-5706a728.js";import"./utils-5bbca5df.js";import"./SubtitleBar-001f5f49.js";import"./IndicatorGroup-e2cd29a8.js";import"./EchartLineBarChart.vue_vue_type_style_index_0_lang-90edad95.js";import"./index-d8a2358f.js";import"./install-58e0bd81.js";import"./NoData-1ab5cc7b.js";import"./EchartPillarChart-9aa5a33e.js";import"./assign-37f1c13d.js";const H={key:0,class:"layout rem-layout"},L={class:"dashboard"},P={class:"content"},Z=V({__name:"Security",setup(y){const n=a({}),r=a("安全驾驶舱"),l=a(!0),o=a(""),p=Y(),u=a(),s=a(),t=a(),c=E(),C=$({runningDays:"",safeCheckCount:"",safeCheckQoq:"",safeCheckYoy:"",trainingCount:"",trainingQoq:"",trainingYoy:"",hiddenCount:"",hiddenQoq:"",hiddenYoy:"",toolsCount:"",signRage:""}),v=([e,i])=>{n.value={startMonth:e,endMonth:i},S()},S=()=>f(this,null,function*(){const e=yield q(n.value);e&&w(C,e)}),R=()=>{try{return window.self!==window.top}catch(e){return!0}},b=()=>{var e,i,k,g;try{const d=(e=c.currentRoute.value)==null?void 0:e.path;d==="/frame/cockpit/security"?N(p):d==="/cockpitsecurity"&&((i=t.value)==null||i.handleUpdate(),(k=s.value)==null||k.handleUpdate(),(g=u.value)==null||g.handleUpdate())}catch(d){console.error("update power page error:",d)}};return z(()=>f(this,null,function*(){o.value=R()?"off":"on",window.addEventListener("resize",b)})),(e,i)=>l.value?(m(),F("div",H,[I("div",L,[o.value==="on"?(m(),B(T,{key:0,class:"header-layout",title:r.value,onDateChange:v},null,8,["title"])):h("",!0),o.value==="off"?(m(),B(x,{key:1,onDateChange:v})):h("",!0),I("div",P,[_(U,{ref_key:"topContentRef",ref:u,data:C},null,8,["data"]),_(D,{ref_key:"middleContentRef",ref:s,searchInfoByTime:n.value,tabStatus:o.value},null,8,["searchInfoByTime","tabStatus"]),_(M,{ref_key:"bottomContentRef",ref:t,searchInfoByTime:n.value,tabStatus:o.value},null,8,["searchInfoByTime","tabStatus"])])])])):h("",!0)}});const _t=Q(Z,[["__scopeId","data-v-447f8979"]]);export{_t as default};
//# sourceMappingURL=Security-68ec1d38.js.map