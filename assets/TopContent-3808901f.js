var h=(t,p,n)=>new Promise((o,a)=>{var c=_=>{try{i(n.next(_))}catch(r){a(r)}},s=_=>{try{i(n.throw(_))}catch(r){a(r)}},i=_=>_.done?o(_.value):Promise.resolve(_.value).then(c,s);i((n=n.apply(t,p)).next())});import{_ as x,a as I,b as S,c as V,d as q,e as D,f as B,g as N,h as U,i as W,j as z,k as $,l as F,m as H,n as M,o as O,p as Q,q as j,r as G,s as K,t as E,u as L,v as Z,w as A,x as J,y as P,z as X,A as Y,B as tt,C as at,D as et,E as st,F as _t,G as nt,H as it,I as ot,J as ct,K as gt,L as lt,M as dt,N as pt,O as rt,P as ut,Q as mt,R as vt,S as bt,T as yt,U as ht,V as ft,W as kt,X as Tt,Y as Ct,Z as Rt,$ as wt}from"./sky_bg-5706a728.js";import{d as R,o as xt,Z as m,_ as v,$ as e,ad as g,a5 as f,ac as b,r as k,k as It,w as St,f as l}from"./vue-71d1abb3.js";import{_ as w,am as T}from"./index.js";import{f as Vt}from"./data-9c8d9a6b.js";import{h as y}from"./utils-5bbca5df.js";import{a as C}from"./assign-37f1c13d.js";import"./antd-15ac76ed.js";const qt={class:"data-board-item"},Dt={class:"title-box"},Bt={class:"icon-box"},Nt=["src"],Ut={class:"title-value-box"},Wt={class:"title-text"},zt={class:"value-text"},$t={key:0,class:"percent-data-box"},Ft={key:0,class:"percent-item"},Ht={class:"p-title"},Mt={key:1,class:"percent-item"},Ot={class:"p-title"},Qt=R({__name:"DataBoardItem2",props:{title:{type:String,default:"今日发电量(万kWh)"},value:{type:[Number,String],default:0},tRatio:{type:[Number,String],default:""},hRatio:{type:[Number,String],default:""},icon:String,tbTitle:{type:String,default:"同比新增"},hbTitle:{type:String,default:"环比(%)"}},emits:["clickValue"],setup(t,{emit:p}){const n={dayGen:"icon_day_gen.png",earnings:"icon_earnings.png",dayOnline:"icon_day_online.png",warningCount:"icon_warning_count.png",realGen:"icon_real_gen.png",online:"icon_online.png",settlement:"icon_settlement.png",loss:"icon_loss.png",lossRate:"icon_loss_rate.png",facRate:"icon_fac_rate.png",sysRate:"icon_sys_rate.png",comRate:"icon_com_rate.png",runningDays:"icon_running_days.png",safeCheckCount:"icon_safe_check_count.png",hiddenCount:"icon_hidden_count.png",trainingCount:"icon_training_count.png",signRage:"icon_sign_rage.png",toolsCount:"icon_tools_count.png",inspectionCount:"icon_inspection_count.png",workOrderCount:"icon_work_order_count.png",netIncome:"icon_net_income.png",twoTicketCount:"icon_two_ticket_count.png",defectCount:"icon_defect_count.png",hiddenStatistics:"icon_hidden_statistics.png",stationTotal:"icon_station_total.png",connectCapacity:"icon_connect_capacity.png",fullTotal:"icon_full_total.png",equipmentTotal:"icon_equipment_total.png",transQty:"icon_trans_qty.png",orderTotal:"icon_order_total.png",task:"icon_task.png",ddzRate:"icon_ddz_rate.png",trainingTotal:"icon_training_total.png",vehicleCount:"icon_vehicle_count.png",eval:"icon_eval.png",contractTotal:"icon_contract_total.png"},o=s=>new URL(Object.assign({"../../../assets/images/da/header_bg.png":x,"../../../assets/images/da/icon_bg.png":I,"../../../assets/images/da/icon_com_rate.png":S,"../../../assets/images/da/icon_connect_capacity.png":V,"../../../assets/images/da/icon_contract_total.png":q,"../../../assets/images/da/icon_day_gen.png":D,"../../../assets/images/da/icon_day_online.png":B,"../../../assets/images/da/icon_ddz_rate.png":N,"../../../assets/images/da/icon_defect_count.png":U,"../../../assets/images/da/icon_earnings.png":W,"../../../assets/images/da/icon_equipment_total.png":z,"../../../assets/images/da/icon_eval.png":$,"../../../assets/images/da/icon_fac_rate.png":F,"../../../assets/images/da/icon_full_total.png":H,"../../../assets/images/da/icon_hidden_count.png":M,"../../../assets/images/da/icon_hidden_statistics.png":O,"../../../assets/images/da/icon_inspection_count.png":Q,"../../../assets/images/da/icon_loss.png":j,"../../../assets/images/da/icon_loss_rate.png":G,"../../../assets/images/da/icon_net_income.png":K,"../../../assets/images/da/icon_online.png":E,"../../../assets/images/da/icon_order_total.png":L,"../../../assets/images/da/icon_real_gen.png":Z,"../../../assets/images/da/icon_running_days.png":A,"../../../assets/images/da/icon_safe_check_count.png":J,"../../../assets/images/da/icon_settlement.png":P,"../../../assets/images/da/icon_sign_rage.png":X,"../../../assets/images/da/icon_station_total.png":Y,"../../../assets/images/da/icon_sys_rate.png":tt,"../../../assets/images/da/icon_task.png":at,"../../../assets/images/da/icon_tools_count.png":et,"../../../assets/images/da/icon_training_count.png":st,"../../../assets/images/da/icon_training_total.png":_t,"../../../assets/images/da/icon_trans_qty.png":nt,"../../../assets/images/da/icon_two_ticket_count.png":it,"../../../assets/images/da/icon_vehicle_count.png":ot,"../../../assets/images/da/icon_warning_count.png":ct,"../../../assets/images/da/icon_work_order_count.png":gt,"../../../assets/images/da/index_bottom_bg.png":lt,"../../../assets/images/da/logo.png":dt,"../../../assets/images/da/map-mask-bottom.png":pt,"../../../assets/images/da/map-mask-left.png":rt,"../../../assets/images/da/map-mask-right.png":ut,"../../../assets/images/da/map-mask-top.png":mt,"../../../assets/images/da/property_section_bg_1.png":vt,"../../../assets/images/da/property_section_bg_2.png":bt,"../../../assets/images/da/property_section_bg_3.png":yt,"../../../assets/images/da/section_bg_1.png":ht,"../../../assets/images/da/section_bg_2.png":ft,"../../../assets/images/da/section_bg_3.png":kt,"../../../assets/images/da/section_bg_4.png":Tt,"../../../assets/images/da/section_bg_5.png":Ct,"../../../assets/images/da/security.png":Rt,"../../../assets/images/da/sky_bg.jpg":wt})[`../../../assets/images/da/${n[s]}`],self.location).href,a=s=>typeof s=="string"?s.startsWith("-")?"arrow-negative":"arrow-positive":typeof s=="number"&&s<0?"arrow-negative":"arrow-positive",c=()=>{p("clickValue")};return xt(()=>{}),(s,i)=>(m(),v("div",qt,[e("div",null,[e("div",Dt,[e("div",Bt,[e("img",{class:"icon-img",src:o(t.icon)},null,8,Nt)]),e("div",Ut,[e("div",Wt,g(t.title),1),e("div",zt,[e("span",{style:{cursor:"pointer"},onClick:c},g(t.value),1)]),t.tRatio||t.tRatio===0?(m(),v("div",$t,[t.tRatio||t.tRatio===0?(m(),v("div",Ft,[e("span",Ht,g(t.tbTitle),1),e("span",{class:f(["p-value",a(t.tRatio)])},g(t.tRatio),3)])):b("",!0),t.hRatio||t.hRatio===0?(m(),v("div",Mt,[e("span",Ot,g(t.hbTitle),1),e("span",{class:f(["p-value",a(t.hRatio)])},g(t.hRatio),3)])):b("",!0)])):b("",!0)])])])]))}});const d=w(Qt,[["__scopeId","data-v-97ea1aca"]]),jt={class:"data-board-box-inner"},Gt=R({__name:"TopContent",props:{searchInfoByTime:{}},setup(t,{expose:p}){const n=t,o=k({}),a=k({}),c=It(T());St(()=>n.searchInfoByTime,u=>{C(o,u),s()});const s=()=>h(this,null,function*(){let u=yield Vt(o);u.result&&C(a,u.result)});function i(){y("/bi/grid/capacity/statistics",{})}function _(){y("/bi/grid/capacity/statistics",{activeKey:"detail"})}function r(){y("/bi/equipment/index",{warehouseType:"spare"})}return p({handleUpdate:()=>{c.value=T()}}),(u,Et)=>(m(),v("div",{class:"top-content",key:c.value},[e("div",jt,[l(d,{title:"电站规模(座)",icon:"stationTotal",value:a.stationTotal,tRatio:a.tbStationTotal!=null?a.tbStationTotal+"座":"",onClickValue:i},null,8,["value","tRatio"]),l(d,{title:"并网容量(MW)",icon:"connectCapacity",value:a.connectCapacity,tRatio:a.tbConnectCapacity!=null?a.tbConnectCapacity+"MW":"",onClickValue:i},null,8,["value","tRatio"]),l(d,{title:"全容量并网电站(座)",icon:"fullTotal",value:a.fullTotal,tRatio:a.tbFullTotal!=null?a.tbFullTotal+"座":"",onClickValue:_},null,8,["value","tRatio"]),l(d,{title:"设备统计",icon:"equipmentTotal",value:a.equipmentTotal},null,8,["value"]),l(d,{title:"备品备件",icon:"transQty",value:a.transQty,onClickValue:r},null,8,["value"]),l(d,{title:"出入库单(张)",icon:"orderTotal",value:a.orderTotal},null,8,["value"])])]))}});const aa=w(Gt,[["__scopeId","data-v-28fa6c8a"]]);export{aa as default};
//# sourceMappingURL=TopContent-3808901f.js.map
