var N=Object.defineProperty;var x=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(s,o,a)=>o in s?N(s,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[o]=a,p=(s,o)=>{for(var a in o||(o={}))S.call(o,a)&&g(s,a,o[a]);if(x)for(var a of x(o))T.call(o,a)&&g(s,a,o[a]);return s};import{D as V}from"./Dialog-0a006d82.js";import{ax as m,_ as B}from"./index.js";import{d as P,k as U,w as z,o as E,al as F,Z as c,a9 as r,aa as h,$ as t,a6 as M,_ as v,ac as d,F as w,ad as e,a5 as b,E as u,f as j,aG as G,aH as H}from"./vue-71d1abb3.js";import"./antd-15ac76ed.js";const i=s=>(G("data-v-93209641"),s=s(),H(),s),O={key:0,class:"device-img-box"},R=["src"],W={class:"device-info-box"},Z={class:"info-row"},q={class:"info-item"},A=i(()=>t("span",{class:"label",style:{width:"7em"}},"设备编号：",-1)),J={class:"text"},K={class:"info-row"},L={class:"info-item"},Q=i(()=>t("span",{class:"label",style:{width:"7em"}},"姓名：",-1)),X={class:"text"},Y={class:"info-row"},tt={class:"info-item"},st=i(()=>t("span",{class:"label",style:{width:"7em"}},"定位时间：",-1)),et={class:"text"},at={class:"info-row"},it={class:"info-item"},ot=i(()=>t("span",{class:"label",style:{width:"7em"}},"定位地点：",-1)),nt={class:"text"},lt={class:"info-row"},ct={class:"info-item",style:{flex:"60%",width:"60%"}},dt=i(()=>t("span",{class:"label",style:{width:"7em"}},"最后报警时间：",-1)),ht={class:"text"},ft={class:"info-item",style:{flex:"40%",width:"40%"}},_t=i(()=>t("span",{class:"label",style:{width:"7em"}},"设备电量(%)：",-1)),mt={class:"text"},rt={class:"info-row"},vt={class:"info-item"},ut=i(()=>t("span",{class:"label",style:{width:"7em"}},"设备编号：",-1)),yt={class:"text"},wt={class:"info-row"},bt={class:"info-item"},Dt=i(()=>t("span",{class:"label",style:{width:"7em"}},"车牌号：",-1)),xt={class:"text"},gt={class:"info-item"},pt=i(()=>t("span",{class:"label",style:{width:"6em"}},"指定驾驶员：",-1)),kt={class:"text"},Ct={class:"info-row"},It={class:"info-item"},$t=i(()=>t("span",{class:"label",style:{width:"7em"}},"车辆类型：",-1)),Nt={class:"text"},St={class:"info-item"},Tt=i(()=>t("span",{class:"label",style:{width:"6em"}},"速度(km/h)：",-1)),Vt={class:"text"},Bt={class:"info-row"},Pt={class:"info-item"},Ut=i(()=>t("span",{class:"label",style:{width:"7em"}},"测速定位时间：",-1)),zt={class:"text"},Et={class:"info-row"},Ft={class:"info-item"},Mt=i(()=>t("span",{class:"label",style:{width:"7em"}},"位置：",-1)),jt={class:"text"},Gt={class:"info-row"},Ht={class:"info-item"},Ot=i(()=>t("span",{class:"label",style:{width:"5em"}},"设备编号：",-1)),Rt={class:"text"},Wt={class:"info-row"},Zt={class:"info-item"},qt=i(()=>t("span",{class:"label",style:{width:"5em"}},"所属电站：",-1)),At={class:"text"},Jt={class:"info-row"},Kt={class:"info-item"},Lt=i(()=>t("span",{class:"label",style:{width:"5em"}},"定位时间：",-1)),Qt={class:"text"},Xt={class:"info-row"},Yt={class:"info-item"},ts=i(()=>t("span",{class:"label",style:{width:"5em"}},"位置：",-1)),ss={class:"text"},es=P({__name:"infoDialog",props:{visible:Boolean,title:String,width:{type:Number,default:450},height:{type:Number,default:480},type:{type:String,default:""},infoData:{type:Object,default:()=>{}}},emits:["update:visible","update:value","close"],setup(s,{emit:o}){const a=s,f=U(!1),k={ewc:"电子工牌",dr:"行车记录仪",ii:"巡检仪"},C=()=>{o("close")},I=l=>{f.value=l,o("update:visible",!1)},y=(l,n)=>{if(n==="ewc"){m(`/baseset/monitor/smartdevices/eleworkcard/create?id=${l}&disabledInput=true`,"查看电子工牌设置");return}if(n==="dr"){m(`/po/integrated/vehicle/create?id=${l}&isReadonly=true`,"查看车辆信息");return}if(n==="ii"){m(`/baseset/monitor/smartdevices/inspectioninstrument/create?id=${l}&disabledInput=true`,"查看巡检仪设置");return}},$=()=>{const l=p({type:a.type},a.infoData);m("/monitor/smartdevice/monitorInfo/monitorInfo",`${k[a.type]}-监控信息`,l)};return z(()=>a.visible,l=>{f.value=l}),E(()=>{f.value=a.visible}),(l,n)=>{const _=F("a-button");return c(),r(V,{target:"#app>div.satellite-map",title:s.title,visible:f.value,"onUpdate:visible":I,width:a.width,height:a.height,onClose:C},{default:h(()=>[t("div",{class:"dialog-content",style:M(`height: calc(${a.height}px - 90px)`)},[s.type==="ewc"||s.type==="dr"?(c(),v("div",O,[t("img",{src:s.infoData.fileUrl,class:"device-img"},null,8,R)])):d("",!0),t("div",W,[s.type==="ewc"?(c(),v(w,{key:0},[t("div",Z,[t("div",q,[A,t("span",J,e(s.infoData.deviceCode),1),t("span",{class:b(`status-tag ${s.infoData.status}`)},e(s.infoData.statusText),3)])]),t("div",K,[t("div",L,[Q,t("span",X,e(s.infoData.userName),1)])]),t("div",Y,[t("div",tt,[st,t("span",et,e(s.infoData.locDate),1)])]),t("div",at,[t("div",it,[ot,t("span",nt,e(s.infoData.address),1)])]),t("div",lt,[t("div",ct,[dt,t("span",ht,e(s.infoData.lastSignalDate),1)]),t("div",ft,[_t,t("span",mt,e(s.infoData.chargePercentage),1)])])],64)):d("",!0),s.type==="dr"?(c(),v(w,{key:1},[t("div",rt,[t("div",vt,[ut,t("span",yt,e(s.infoData.deviceCode),1),t("span",{class:b(`status-tag ${s.infoData.status}`)},e(s.infoData.statusText),3)])]),t("div",wt,[t("div",bt,[Dt,t("span",xt,e(s.infoData.plateNumber),1)]),t("div",gt,[pt,t("span",kt,e(s.infoData.responsiblePersonName),1)])]),t("div",Ct,[t("div",It,[$t,t("span",Nt,e(s.infoData.vehicleTypeText),1)]),t("div",St,[Tt,t("span",Vt,e(s.infoData.speed),1)])]),t("div",Bt,[t("div",Pt,[Ut,t("span",zt,e(s.infoData.locDate),1)])]),t("div",Et,[t("div",Ft,[Mt,t("span",jt,e(s.infoData.address),1)])])],64)):d("",!0),s.type==="ii"?(c(),v(w,{key:2},[t("div",Gt,[t("div",Ht,[Ot,t("span",Rt,e(s.infoData.deviceCode),1),t("span",{class:b(`status-tag ${s.infoData.status}`)},e(s.infoData.statusText),3)])]),t("div",Wt,[t("div",Zt,[qt,t("span",At,e(s.infoData.stationShortName),1)])]),t("div",Jt,[t("div",Kt,[Lt,t("span",Qt,e(s.infoData.locDate),1)])]),t("div",Xt,[t("div",Yt,[ts,t("span",ss,e(s.infoData.address),1)])])],64)):d("",!0)])],4)]),footer:h(()=>[s.type==="ewc"?(c(),r(_,{key:0,type:"primary",onClick:n[0]||(n[0]=D=>y(s.infoData.eleWorkCardId,"ewc"))},{default:h(()=>[u("电子工牌信息")]),_:1})):d("",!0),s.type==="dr"?(c(),r(_,{key:1,type:"primary",onClick:n[1]||(n[1]=D=>y(s.infoData.vehicleId,"dr"))},{default:h(()=>[u("车辆信息")]),_:1})):d("",!0),s.type==="ii"?(c(),r(_,{key:2,type:"primary",onClick:n[2]||(n[2]=D=>y(s.infoData.inspectionInstrumentId,"ii"))},{default:h(()=>[u("巡检仪信息")]),_:1})):d("",!0),j(_,{style:{"margin-left":"10px"},type:"primary",onClick:$},{default:h(()=>[u("监控信息")]),_:1})]),_:1},8,["title","visible","width","height"])}}});const cs=B(es,[["__scopeId","data-v-93209641"]]);export{cs as default};
//# sourceMappingURL=infoDialog-f9501edb.js.map