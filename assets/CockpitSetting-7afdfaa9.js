import{D as K,W as L,_ as Z}from"./WeatherDisplay-e68d53d5.js";import{K as s}from"./antd-15ac76ed.js";import{I as g,a7 as w,_ as V,a8 as A,a9 as J}from"./index.js";import{d as j,k as o,o as E,al as p,Z as H,_ as q,$ as e,ad as R,a9 as P,ac as Q,f as n,aa as i,E as v,aG as F,aH as G,a5 as X}from"./vue-71d1abb3.js";const U=u=>(F("data-v-4bc410df"),u=u(),G(),u),ee={class:"header"},te=U(()=>e("div",{class:"logo-box"},[e("img",{class:"logo-img",src:Z})],-1)),ae={class:"title"},se={class:"info"},oe={class:"settings"},ne={class:"time"},ce={class:"weather"},le={class:"settings"},re={class:"screen-drawer-content"},ie={class:"right-panel-slot"},de=U(()=>e("h2",{class:"search-h2"},"统计条件",-1)),ue={class:"search-choice-tips"},_e={class:"search-choice"},pe={class:"search-choice-t"},ve=U(()=>e("span",{class:"search-choice-title"},"日期",-1)),he={class:"search-choice-b"},fe={class:"iframe-search-daterange"},me={class:"button-content radio-group"},ge={class:"button-content range-group"},ye=j({__name:"CockpitHeader",props:{title:{type:String,default:""},date:{type:String,default:""}},emits:["dateChange"],setup(u,{emit:D}){const x=u,O=o(450),y=o("right"),Y=o(!1),k=o(!1),C=o(!1),b=o(),l=o(),d=o(),c=o(""),r=o(),S={blue:{background:"#003775f0"},transparent:{background:"transparent"}},z=()=>{w.getInstance().sendMsg("iframe-screen-emit",{})},N=()=>{Y.value=!0,$()&&w.getInstance().sendMsg("drawer-open",{type:"open"})},I=()=>{Y.value=!1,$()&&w.getInstance().sendMsg("drawer-open",{type:"remove"})},f=()=>{if(c.value=="上月"){const t=s().subtract(1,"month");r.value=[t,t]}else if(c.value=="本月"){const t=s();r.value=[t,t]}else if(c.value=="本年"){const t=s().startOf("year"),a=s().endOf("year");r.value=[t,a]}m()},m=()=>{const t=r.value[0].format("YYYY-MM"),a=r.value[1].format("YYYY-MM");c.value="",t===s().subtract(1,"month").format("YYYY-MM")&&a===s().subtract(1,"month").format("YYYY-MM")&&(c.value="上月"),t===s().format("YYYY-MM")&&a===s().format("YYYY-MM")&&(c.value="本月"),t===s().startOf("year").format("YYYY-MM")&&a===s().endOf("year").format("YYYY-MM")&&(c.value="本年"),D("dateChange",[t,a],c.value),sessionStorage.setItem("screen-date-set",JSON.stringify({startDate:t,endDate:a,dateType:"month"}))},$=()=>{try{return window.self!==window.top}catch(t){return!0}};return E(()=>{if(b.value=S.blue,l.value=S.transparent,d.value=S.transparent,sessionStorage.getItem("screen-date-set")){let{startDate:t,endDate:a}=JSON.parse(sessionStorage.getItem("screen-date-set"));r.value=[s(t),s(a)],m()}else c.value="上月",f()}),(t,a)=>{const _=p("a-radio-button"),W=p("a-radio-group"),T=p("a-range-picker"),B=p("a-drawer");return H(),q("div",ee,[te,e("div",ae,R(x.title),1),e("div",se,[e("button",oe,[C.value?(H(),P(g,{key:0,icon:"octicon:screen-full-24",color:"#32afff",style:{"font-size":"0.28rem",cursor:"pointer"},onClick:z})):Q("",!0)]),e("span",ne,[n(K)]),e("span",ce,[n(L)]),e("button",le,[n(g,{icon:"arcticons:settings",color:"#32afff",style:{"font-size":"0.28rem",cursor:"pointer"},onClick:N})])]),n(B,{width:O.value,placement:y.value,visible:Y.value,closable:k.value,drawerStyle:b.value,contentWrapperStyle:l.value,maskStyle:d.value,onClose:I},{default:i(()=>[e("div",re,[e("div",ie,[de,e("div",ue,[v("已选择: "),e("span",null,R(c.value),1)]),e("div",_e,[e("div",pe,[n(g,{icon:"material-symbols-light:date-range-outline-rounded",color:"#0866e0",style:{"font-size":"0.22rem"}}),ve]),e("div",he,[e("div",fe,[e("div",me,[n(W,{value:c.value,"onUpdate:value":a[0]||(a[0]=h=>c.value=h),size:"small",onChange:f},{default:i(()=>[n(_,{value:"上月"},{default:i(()=>[v("上月")]),_:1}),n(_,{value:"本月"},{default:i(()=>[v("本月")]),_:1}),n(_,{value:"本年"},{default:i(()=>[v("本年")]),_:1})]),_:1},8,["value"])]),e("div",ge,[n(T,{value:r.value,"onUpdate:value":a[1]||(a[1]=h=>r.value=h),style:{width:"200px"},picker:"month",size:"small",onChange:m,dropdownClassName:"cockpit-header-dropdown"},{suffixIcon:i(()=>[n(g,{icon:"material-symbols-light:date-range-outline-rounded",color:"#fefefe",style:{"font-size":"0.22rem"}})]),_:1},8,["value"])])])])])])])]),_:1},8,["width","placement","visible","closable","drawerStyle","contentWrapperStyle","maskStyle"])])}}});const Ee=V(ye,[["__scopeId","data-v-4bc410df"]]),M=u=>(F("data-v-a7a11991"),u=u(),G(),u),Ye={class:"cockpit-setting"},be=M(()=>e("i",{class:"iconfont icon-quanping"},null,-1)),Se=[be],we=M(()=>e("i",{class:"iconfont icon-shezhi"},null,-1)),Me=[we],ke=M(()=>e("i",{class:"iconfont icon-shousuojiantou"},null,-1)),Ce=[ke],Ie={class:"screen-drawer-content"},$e={class:"right-panel-slot"},De=M(()=>e("h2",{class:"search-h2"},"统计条件",-1)),xe={class:"search-choice-tips"},Oe={class:"search-choice"},ze={class:"search-choice-t"},Ne=M(()=>e("span",{class:"search-choice-title"},"日期",-1)),We={class:"search-choice-b"},Te={class:"iframe-search-daterange"},Be={class:"button-content radio-group"},He={class:"button-content range-group"},Re=j({__name:"CockpitSetting",props:{title:{type:String,default:""},date:{type:String,default:""}},emits:["dateChange"],setup(u,{emit:D}){const x=o(450),O=o("right"),y=o(!1),Y=o(!1);o(!1);const k=o(),C=o(),b=o(),l=o(""),d=o(),c={blue:{background:"#003775f0"},transparent:{background:"transparent"}},r=o(!1),S=()=>{const t=new Map(A),a="/"+window.location.hash.split("?")[0];if(t.has(a)){const _=t.get(a)||"";J(_,_.slice(3))}else J(a,a.slice(3))},z=()=>{y.value=!0,m()&&w.getInstance().sendMsg("drawer-open",{type:"open"})},N=()=>{y.value=!1,m()&&w.getInstance().sendMsg("drawer-open",{type:"remove"})},I=()=>{if(l.value=="上月"){const t=s().subtract(1,"month");d.value=[t,t]}else if(l.value=="本月"){const t=s();d.value=[t,t]}else if(l.value=="本年"){const t=s().startOf("year"),a=s().endOf("year");d.value=[t,a]}f()},f=()=>{const t=d.value[0].format("YYYY-MM"),a=d.value[1].format("YYYY-MM");l.value="",t===s().subtract(1,"month").format("YYYY-MM")&&a===s().subtract(1,"month").format("YYYY-MM")&&(l.value="上月"),t===s().format("YYYY-MM")&&a===s().format("YYYY-MM")&&(l.value="本月"),t===s().startOf("year").format("YYYY-MM")&&a===s().endOf("year").format("YYYY-MM")&&(l.value="本年"),D("dateChange",[t,a],l.value),sessionStorage.setItem("screen-date-set",JSON.stringify({startDate:t,endDate:a,dateType:"month"}))},m=()=>{try{return window.self!==window.top}catch(t){return!0}},$=()=>{r.value=!r.value};return E(()=>{if(k.value=c.blue,C.value=c.transparent,b.value=c.transparent,sessionStorage.getItem("screen-date-set")){let{startDate:t,endDate:a}=JSON.parse(sessionStorage.getItem("screen-date-set"));d.value=[s(t),s(a)],f()}else l.value="上月",I()}),(t,a)=>{const _=p("a-radio-button"),W=p("a-radio-group"),T=p("a-range-picker"),B=p("a-drawer");return H(),q("div",Ye,[e("div",{class:X(["setting-box",{"show-btns":r.value}])},[e("div",{class:"setting-box-inner"},[e("div",{class:"left-btn"},[e("button",{class:"btn-style full-screen-btn",onClick:S},Se),e("button",{class:"btn-style setting-btn",onClick:z},Me)]),e("div",{class:"right-btn"},[e("button",{class:"btn-style open-btn",onClick:$},Ce)])])],2),n(B,{width:x.value,placement:O.value,visible:y.value,closable:Y.value,drawerStyle:k.value,contentWrapperStyle:C.value,maskStyle:b.value,onClose:N},{default:i(()=>[e("div",Ie,[e("div",$e,[De,e("div",xe,[v("已选择: "),e("span",null,R(l.value),1)]),e("div",Oe,[e("div",ze,[n(g,{icon:"material-symbols-light:date-range-outline-rounded",color:"#0866e0",style:{"font-size":"0.22rem"}}),Ne]),e("div",We,[e("div",Te,[e("div",Be,[n(W,{value:l.value,"onUpdate:value":a[0]||(a[0]=h=>l.value=h),size:"small",onChange:I},{default:i(()=>[n(_,{value:"上月"},{default:i(()=>[v("上月")]),_:1}),n(_,{value:"本月"},{default:i(()=>[v("本月")]),_:1}),n(_,{value:"本年"},{default:i(()=>[v("本年")]),_:1})]),_:1},8,["value"])]),e("div",He,[n(T,{value:d.value,"onUpdate:value":a[1]||(a[1]=h=>d.value=h),style:{width:"200px"},picker:"month",size:"small",onChange:f,dropdownClassName:"cockpit-header-dropdown"},{suffixIcon:i(()=>[n(g,{icon:"material-symbols-light:date-range-outline-rounded",color:"#fefefe",style:{"font-size":"0.22rem"}})]),_:1},8,["value"])])])])])])])]),_:1},8,["width","placement","visible","closable","drawerStyle","contentWrapperStyle","maskStyle"])])}}});const qe=V(Re,[["__scopeId","data-v-a7a11991"]]);export{Ee as C,qe as a};
//# sourceMappingURL=CockpitSetting-7afdfaa9.js.map
