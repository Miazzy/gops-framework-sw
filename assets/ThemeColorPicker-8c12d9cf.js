import{u as c,_ as p}from"./index.js";import{b as m}from"./handler-0adf59bf.js";import{d,al as u,Z as t,_ as s,F as f,ae as _,a5 as i,a6 as C,f as k}from"./vue-71d1abb3.js";import{bd as h}from"./antd-15ac76ed.js";import"./enum-3aa26315.js";const v=d({name:"ThemeColorPicker",components:{CheckOutlined:h},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:r}=c("setting-theme-picker");function o(a){e.event&&m(e.event,a)}return{prefixCls:r,handleClick:o}}});const y=["onClick"];function $(e,r,o,a,g,b){const l=u("CheckOutlined");return t(),s("div",{class:i(e.prefixCls)},[(t(!0),s(f,null,_(e.colorList||[],n=>(t(),s("span",{key:n,onClick:L=>e.handleClick(n),class:i([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===n}]),style:C({background:n})},[k(l)],14,y))),128))],2)}const B=p(v,[["render",$]]);export{B as default};
//# sourceMappingURL=ThemeColorPicker-8c12d9cf.js.map
