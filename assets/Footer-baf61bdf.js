import{D as f,W as h,_ as y}from"./WeatherDisplay-e68d53d5.js";import{d as i,Z as t,_ as a,$ as s,ad as l,f as d,aG as v,aH as g,k,F as x,ae as C,a5 as F}from"./vue-71d1abb3.js";import{_ as p}from"./index.js";const H=e=>(v("data-v-19c6f1fe"),e=e(),g(),e),S={class:"header"},I=H(()=>s("div",{class:"logo"},[s("img",{class:"logo-img",src:y})],-1)),$={class:"title"},D={class:"info"},B={class:"time"},w={class:"weather"},K=i({__name:"Header",props:{title:{type:String,default:""}},setup(e){const o=e;return(_,n)=>(t(),a("div",S,[I,s("div",$,l(o.title),1),s("div",D,[s("span",B,[d(f)]),s("span",w,[d(h)])])]))}});const Z=p(K,[["__scopeId","data-v-19c6f1fe"]]),N={class:"footer"},V=["onClick"],W=i({__name:"Footer",props:{selectedKey:{type:String,default:"1"}},emits:["change"],setup(e,{emit:o}){const _=e,n=k([{name:"运营总览",key:"1"},{name:"智慧监视",key:"2"},{name:"智慧运维",key:"3"},{name:"智慧设备",key:"4"}]),m=r=>{o("change",r)};return(r,z)=>(t(),a("div",N,[(t(!0),a(x,null,C(n.value,(c,u)=>(t(),a("div",{class:F(["menu-item",{selected:_.selectedKey===c.key}]),key:u,onClick:E=>m(c)},l(c.name),11,V))),128))]))}});const b=p(W,[["__scopeId","data-v-e8e2c7a0"]]);export{b as F,Z as H};
//# sourceMappingURL=Footer-baf61bdf.js.map
