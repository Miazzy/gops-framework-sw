var _=(i,n,o)=>new Promise((e,s)=>{var c=t=>{try{r(o.next(t))}catch(l){s(l)}},a=t=>{try{r(o.throw(t))}catch(l){s(l)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(c,a);r((o=o.apply(i,n)).next())});import{S as d}from"./SmallModule-04781cfc.js";import{_ as p}from"./NtgaleChart.vue_vue_type_script_setup_true_lang-0930fb50.js";import{h as u}from"./data-52a0c3e0.js";import{ax as f,_ as h}from"./index.js";import{a as v}from"./assign-37f1c13d.js";import{d as b,r as w,o as g,k as L,Z as x,_ as D,f as m,aa as S,$ as y}from"./vue-71d1abb3.js";import"./index-d8a2358f.js";import"./install-58e0bd81.js";import"./NoData-1ab5cc7b.js";import"./antd-15ac76ed.js";const I={class:"loss-distribution"},k={class:"content-layout"},C=b({__name:"LossDistribution",props:{overviewSearchInfo:{}},setup(i){const n=i;function o(){f("/bi/elec/lossPower")}const e=w({});g(()=>{v(e,n.overviewSearchInfo),c()});const s=L([]),c=()=>_(this,null,function*(){let a=yield u(e);a.result&&(s.value=a.result)});return(a,r)=>(x(),D("div",I,[m(d,{title:"损失分布",position:"right"},{content:S(()=>[y("div",k,[m(p,{id:"omChart",width:"4.3rem",height:"2rem",data:s.value,radius:["30%","80%"],showLabel:"",onClickItem:o},null,8,["data"])])]),_:1})]))}});const z=h(C,[["__scopeId","data-v-7b827123"]]);export{z as default};
//# sourceMappingURL=LossDistribution-15d8403d.js.map