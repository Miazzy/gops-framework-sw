var c=(u,i,a)=>new Promise((l,n)=>{var t=s=>{try{e(a.next(s))}catch(r){n(r)}},o=s=>{try{e(a.throw(s))}catch(r){n(r)}},e=s=>s.done?l(s.value):Promise.resolve(s.value).then(t,o);e((a=a.apply(u,i)).next())});import{S as v}from"./SmallModule-04781cfc.js";import{N as _}from"./NumberDisplay-3816acea.js";import{a as f}from"./data-12e5fcc9.js";import{ax as y,_ as S}from"./index.js";import{a as g}from"./assign-37f1c13d.js";import{d as b,r as m,o as x,Z as C,_ as h,f as d,aa as k,$ as p}from"./vue-71d1abb3.js";import"./antd-15ac76ed.js";const w={class:"generation-statistics"},G={class:"content-layout"},B=b({__name:"GenerationStatistics",setup(u){const i=m({}),a=m({});x(()=>{l()});const l=()=>c(this,null,function*(){let t=yield f(i);t.result&&g(a,t.result)}),n=t=>c(this,null,function*(){let o={},e="";t==="dayGen"||t==="dayOnline"?e="/bi/elec/powerContrast":t==="evalResulSubtitle"?e="/po/integrated/assessmentevaluation/report":t==="vehicleCount"&&(e="/bi/integrated/vehicle"),y(e,"",o)});return(t,o)=>(C(),h("div",w,[d(v,{title:"集团累计发电"},{content:k(()=>[p("div",G,[p("div",null,[d(_,{style:{"margin-bottom":"1.6vh"},title:"累计发电量(万kWh)",value:a.dayGen,colorStyle:"blue",onClick:o[0]||(o[0]=e=>n("dayGen"))},null,8,["value"]),d(_,{title:"累计上网电量(万kWh)",value:a.dayOnline,colorStyle:"green",onClick:o[1]||(o[1]=e=>n("dayOnline"))},null,8,["value"])])])]),_:1})]))}});const V=S(B,[["__scopeId","data-v-646e6cac"]]);export{V as default};
//# sourceMappingURL=GenerationStatistics-f4bfb036.js.map