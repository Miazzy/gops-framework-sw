import{d as N,k as p,al as x,Z as s,_ as l,f as o,aa as c,$ as e,F as v,ae as u,a6 as h,ac as m,ad as d,aG as w,aH as C}from"./vue-71d1abb3.js";import{_ as K}from"./index.js";import"./antd-15ac76ed.js";const t=_=>(w("data-v-e43a2345"),_=_(),C(),_),P={class:"energy-storage-overview"},W={class:"card-item-outer"},O={class:"card-item"},I=t(()=>e("div",{class:"card-header"},"储能",-1)),$={class:"card-content"},B={class:"energy-item-box"},D={class:"energy-container-box"},H=t(()=>e("div",{class:"energy-top"},null,-1)),E={class:"energy-down-box"},F={class:"storage-block"},V={key:0,class:"storage-block"},z={key:1,class:"storage-block"},G={key:2,class:"storage-block"},L={class:"energy-value-box"},Z={class:"black-text left-text"},j={class:"blue-text"},q=t(()=>e("div",{class:"card-item-outer"},[e("div",{class:"card-item"},[e("div",{class:"card-header"},"PCS曲线"),e("div",{class:"card-content"},[e("div",{class:"PCS-chart-box"}," PCS曲线图 ")])])],-1)),A={class:"card-item-outer"},J={class:"card-item"},M=t(()=>e("div",{class:"card-header"},"电量信息",-1)),Q={class:"card-content"},R={class:"power-info-box"},T={class:"title-box"},U=t(()=>e("span",{class:"blue-icon"},null,-1)),X={class:"title-text"},Y={class:"value-box"},ee={class:"card-item-outer"},ae={class:"card-item"},se=t(()=>e("div",{class:"card-header"},"PCS汇总",-1)),le={class:"card-content"},te={class:"power-info-box"},oe={class:"title-box"},ce=t(()=>e("span",{class:"blue-icon"},null,-1)),de={class:"title-text"},ne={class:"value-box"},ie={class:"card-item-outer"},_e={class:"card-item"},re=t(()=>e("div",{class:"card-header"},"运行状态",-1)),ve={class:"card-content"},ue={class:"operation-status-box"},he=t(()=>e("div",{class:"operation-status-item red-bg"},"故障",-1)),be=N({__name:"energyStorageOverview",setup(_){const k=p([{labelName:"最小SOC",labelKey:"a",value:"4.30"},{labelName:"最大SOC",labelKey:"b",value:"27.50"},{labelName:"平均SOC",labelKey:"c",value:"60.00"},{labelName:"平均SOH",labelKey:"d",value:"99.10"}]),r=(b,y)=>b-y<25?(b-y)/25*18:18,f=p([{labelName:"总充电量(万kWh)",labelKey:"a",value:"477.48"},{labelName:"总放电量(万kWh)",labelKey:"b",value:"434.23"},{labelName:"日充电量(kWh)",labelKey:"c",value:"1.00"},{labelName:"日放电量(kWh)",labelKey:"d",value:"8.00"}]),S=p([{labelName:"PCS总有功功率(kW)",labelKey:"a",value:"0.00"},{labelName:"最大可充电功率(kW)",labelKey:"b",value:"5056.00"},{labelName:"PCS总台数(台)",labelKey:"c",value:"4"},{labelName:"最大可放电功率(kW)",labelKey:"d",value:"2307.00"},{labelName:"PCS在线台数(台)",labelKey:"e",value:"14"},{labelName:"可充电量(万kWh)",labelKey:"f",value:"1.72"},{labelName:"PCS总无功功率(kvar)",labelKey:"g",value:"0.00"},{labelName:"可放电量(万kWh)",labelKey:"h",value:"1.00"}]);return(b,y)=>{const n=x("a-col"),g=x("a-row");return s(),l("div",P,[o(g,{class:"card-row",type:"flex"},{default:c(()=>[o(n,{flex:"1"},{default:c(()=>[e("div",W,[e("div",O,[I,e("div",$,[e("div",B,[(s(!0),l(v,null,u(k.value,(a,i)=>(s(),l("div",{class:"energy-item",key:i},[e("div",D,[H,e("div",E,[e("div",F,[e("div",{class:"storage-block-inner",style:h(`height: ${r(a.value,0)}px;`)},null,4)]),a.value>25?(s(),l("div",V,[e("div",{class:"storage-block-inner",style:h(`height: ${r(a.value,25)}px;`)},null,4)])):m("",!0),a.value>50?(s(),l("div",z,[e("div",{class:"storage-block-inner",style:h(`height: ${r(a.value,50)}px;`)},null,4)])):m("",!0),a.value>75?(s(),l("div",G,[e("div",{class:"storage-block-inner",style:h(`height: ${r(a.value,75)}px;`)},null,4)])):m("",!0)])]),e("div",L,[e("span",Z,d(a.labelName),1),e("span",j,d(a.value)+"%",1)])]))),128))])])])])]),_:1}),o(n,{flex:"2"},{default:c(()=>[q]),_:1})]),_:1}),o(g,{class:"card-row",type:"flex"},{default:c(()=>[o(n,{flex:"1"},{default:c(()=>[e("div",A,[e("div",J,[M,e("div",Q,[e("div",R,[(s(!0),l(v,null,u(f.value,(a,i)=>(s(),l("div",{class:"power-info-item",key:i},[e("div",T,[U,e("span",X,d(a.labelName),1)]),e("div",Y,d(a.value),1)]))),128))])])])])]),_:1}),o(n,{flex:"1"},{default:c(()=>[e("div",ee,[e("div",ae,[se,e("div",le,[e("div",te,[(s(!0),l(v,null,u(S.value,(a,i)=>(s(),l("div",{class:"power-info-item",key:i},[e("div",oe,[ce,e("span",de,d(a.labelName),1)]),e("div",ne,d(a.value),1)]))),128))])])])])]),_:1}),o(n,{flex:"1"},{default:c(()=>[e("div",ie,[e("div",_e,[re,e("div",ve,[e("div",ue,[he,(s(),l(v,null,u(7,a=>e("div",{class:"operation-status-item",key:a},"充电完成")),64))])])])])]),_:1})]),_:1})])}}});const ge=K(be,[["__scopeId","data-v-e43a2345"]]);export{ge as default};
//# sourceMappingURL=energyStorageOverview-f75941c9.js.map