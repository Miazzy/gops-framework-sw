var f=(t,c,s)=>new Promise((o,r)=>{var n=a=>{try{i(s.next(a))}catch(p){r(p)}},l=a=>{try{i(s.throw(a))}catch(p){r(p)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(n,l);i((s=s.apply(t,c)).next())});import{F as x}from"./antd-15ac76ed.js";import{_ as y,ac as I}from"./index.js";import{k as h,o as w,Z as d,_,$ as e,F as m,ae as v,ad as u,aG as S,aH as D,e as $,r as W,f as E,u as L}from"./vue-71d1abb3.js";import{w as g}from"./weatherIcon-14d6bf6f.js";import{g as z}from"./index-8c718dee.js";(function(t,c){try{const s=t.documentElement,o="orientationchange"in window?"orientationchange":"resize",r=function(){var i,a;console.log("recalc");const l=s.clientWidth;if(l)try{(a=(i=window==null?void 0:window.parent)==null?void 0:i.document)!=null&&a.querySelector(".app-menu.collapsed")?s.style.fontSize=100*((l-165)/1920)+"px":s.style.fontSize=100*(l/1920)+"px"}catch(p){s.style.fontSize=100*(l/1920)+"px"}},n=x(r,300);if(s.style.fontSize||r(),!t.addEventListener)return;c.addEventListener(o,n,!1),t.addEventListener("DOMContentLoaded",n,!1)}catch(s){}})(document,window);const ne="/assets/logo-65e759d9.png";const k=t=>(S("data-v-9e49749d"),t=t(),D(),t),C={class:"time-display"},b={class:"clock"},N={class:"hour"},q=k(()=>e("span",{class:"colon"},":",-1)),B={class:"minute"},F=k(()=>e("span",{class:"colon"},":",-1)),M={class:"second"},H={class:"date"},O={class:"normal-font"},Q={class:"normal-font",style:{"margin-left":"0.1rem"}},V={__name:"DigitalClock",setup(t){const c=h({hours:"",minutes:"",seconds:""}),s=h(""),o=h(""),r=()=>{const n=new Date;c.value.hours=String(n.getHours()).padStart(2,"0"),c.value.minutes=String(n.getMinutes()).padStart(2,"0"),c.value.seconds=String(n.getSeconds()).padStart(2,"0"),s.value=n.toLocaleDateString(),o.value=n.toLocaleDateString([],{weekday:"long"})};return w(()=>{r(),setInterval(r,1e3)}),(n,l)=>(d(),_("div",C,[e("div",b,[e("div",N,[(d(!0),_(m,null,v(c.value.hours.split(""),(i,a)=>(d(),_("span",{key:a},u(i),1))),128))]),q,e("div",B,[(d(!0),_(m,null,v(c.value.minutes.split(""),(i,a)=>(d(),_("span",{key:a},u(i),1))),128))]),F,e("div",M,[(d(!0),_(m,null,v(c.value.seconds.split(""),(i,a)=>(d(),_("span",{key:a},u(i),1))),128))])]),e("div",H,[e("span",O,u(s.value),1),e("span",Q,u(o.value),1)])]))}},oe=y(V,[["__scopeId","data-v-9e49749d"]]);const j=t=>(S("data-v-26ed6fda"),t=t(),D(),t),G={class:"weather-display",style:{width:"1.2rem","margin-right":"-0.2rem","margin-left":"0.1rem"}},R={class:"weather-icon",style:{}},T={class:"weather-info",style:{width:"1.65rem"}},Z={class:"temperature-range"},A=j(()=>e("span",{class:"unit"},"℃",-1)),J={class:"weather-description",style:{width:"100%"}},K={class:"weather-text"},P={class:"air-quality"},U={__name:"WeatherDisplay",props:{airQuality:{type:[String,Number],default:""}},setup(t){const c=t,s=$(()=>o.icon&&g[o.icon]?g[o.icon]:"tianqi-wu2"),o=W({}),r=()=>f(this,null,function*(){let n=yield z({lastDay:"now"});Object.assign(o,n.weather.now)});return w(()=>{r()}),(n,l)=>(d(),_("div",G,[e("div",R,[E(L(I),{class:"iconfont",name:s.value,style:{width:"0.4rem",height:"0.4rem"}},null,8,["name"])]),e("div",T,[e("div",Z,[e("span",null,u(o.temp),1),A]),e("div",J,[e("div",K,u(o.text),1),e("div",P,u(c.airQuality),1)])])]))}},ce=y(U,[["__scopeId","data-v-26ed6fda"]]);export{oe as D,ce as W,ne as _};
//# sourceMappingURL=WeatherDisplay-e68d53d5.js.map
