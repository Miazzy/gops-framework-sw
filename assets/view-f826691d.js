var _=(f,n,e)=>new Promise((r,i)=>{var c=t=>{try{a(e.next(t))}catch(o){i(o)}},d=t=>{try{a(e.throw(t))}catch(o){i(o)}},a=t=>t.done?r(t.value):Promise.resolve(t.value).then(c,d);a((e=e.apply(f,n)).next())});import{T as x}from"./index-aadc7f51.js";import{_ as g}from"./UploadTable.vue_vue_type_script_setup_true_lang-5478923e.js";import{aj as b,a5 as y,_ as z}from"./index.js";import{d as I,r as k,k as u,K as V,o as C,al as v,Z as h,_ as T,f as s,aa as l,$ as p,ad as m,a9 as B,u as j,ac as q,F,q as N}from"./vue-71d1abb3.js";import"./antd-15ac76ed.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";const S={style:{"text-align":"center"}},D={style:{width:"90vw",overflow:"hidden",color:"#1890ff","text-overflow":"ellipsis","white-space":"nowrap"}},K={style:{"text-align":"center"}},$=I({__name:"view",setup(f){let{params:n}=b();const e=k({module:"information"}),r=u([]),i=u(!0),c=u("preview");return V(()=>{i.value=!1,N(()=>{i.value=!0})}),C(()=>_(this,null,function*(){let d={id:n.bizId},a=yield y.get({url:"/oa/information/get",params:d});a.result&&(e.bizId=n.bizId,Object.assign(e,a.result),r.value=[{filetype:"资讯附件",fnamelist:"",bizId:e.bizFileId,maxCount:20,maxSize:100*1024*1024,required:!1,vmode:"view",fileKindId:""}])})),(d,a)=>{const t=v("a-col"),o=v("a-row");return h(),T(F,null,[s(o,{gutter:24,style:{"margin-bottom":"20px"}},{default:l(()=>[s(t,{span:19,offset:1},{default:l(()=>[p("div",S,[p("h1",D,m(e.subject),1)]),p("div",K,"发布人："+m(e.publisher)+"   发布时间："+m(e.publishedDate),1)]),_:1})]),_:1}),s(o,{gutter:24},{default:l(()=>[s(t,{span:22,offset:1},{default:l(()=>[i.value?(h(),B(j(x),{key:0,class:"tinymce-comp-content",modelValue:e.content,"onUpdate:modelValue":a[0]||(a[0]=w=>e.content=w),width:"100%",height:"calc(100vh - 188px)",disabled:!0,"auto-resize":!0},null,8,["modelValue","height"])):q("",!0)]),_:1})]),_:1}),s(o,{gutter:24},{default:l(()=>[s(t,{span:22,offset:1,style:{position:"fixed",bottom:"0",width:"100%",height:"78px"}},{default:l(()=>[s(g,{ref:"uploadTable",width:"101.55%",height:"78px",rows:r.value,colwidths:["20%","85%"],application:"oa",module:e.module,mode:"view",fixed:"bottom",operate:c.value},null,8,["rows","module","operate"])]),_:1})]),_:1})],64)}}});const Z=z($,[["__scopeId","data-v-c278ffad"]]);export{Z as default};
//# sourceMappingURL=view-f826691d.js.map