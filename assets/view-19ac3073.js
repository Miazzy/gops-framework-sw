var I=(o,c,e)=>new Promise((w,p)=>{var u=r=>{try{i(e.next(r))}catch(h){p(h)}},y=r=>{try{i(e.throw(r))}catch(h){p(h)}},i=r=>r.done?w(r.value):Promise.resolve(r.value).then(u,y);i((e=e.apply(o,c)).next())});import{T as R}from"./index-aadc7f51.js";import{_ as B}from"./UploadTable.vue_vue_type_script_setup_true_lang-5478923e.js";import{O as P}from"./OrganDialog-dd1023ce.js";import{a5 as f,aj as j,a7 as A,_ as E}from"./index.js";import{bF as U,bG as H,a2 as v}from"./antd-15ac76ed.js";import{d as $,r as G,k as _,K as Z,o as J,al as x,Z as C,_ as L,f as s,aa as d,$ as D,ad as b,a9 as N,n as S,u as k,E as T,ac as V,F as Q,q as W}from"./vue-71d1abb3.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";function X(o){return f.post({url:"/system/org/list-tree",params:o})}function Y(o){return f.post({url:"/oa/info-query/read",params:o})}function ee(o){return f.post({url:"/oa/info-query/notify",params:o})}const te=o=>f.get({url:"/oa/official-doc-release/getView",params:o},{}),oe=o=>f.get({url:"/oa/info-notice-release/getView",params:o},{}),ae=o=>f.put({url:"/oa/info-release-collection/cancelCollection?infoReleaseId="+o},{}),le=o=>f.post({url:"/oa/info-release-collection/create",params:o},{}),ne={style:{"text-align":"center"}},se={style:{width:"90vw",overflow:"hidden",color:"#1890ff","text-overflow":"ellipsis","white-space":"nowrap"}},ie={style:{"text-align":"center"}},re=$({__name:"view",setup(o){let{params:c}=j();const e=G({}),w=_([]),p=_(!0),u=_([]),y=_("preview"),i=_(!1),r=_(),h=()=>{e.collectStatus==1?ae(e.bizId).then(t=>{t.code==0?(v.info("取消成功"),e.collectStatus=0):v.error("取消失败.原因:"+t.message)}):le({infoReleaseId:e.bizId}).then(t=>{t.code==0?(v.info("收藏成功"),e.collectStatus=1):v.error("收藏失败.原因:"+t.message)})},F=()=>{i.value=!0},O=()=>{i.value=!1},q=(t,n)=>{u.value=[],t&&t.length>0&&(t.forEach(a=>{u.value.push({orgUnitId:a.value,name:a.label,value:a.value,label:a.label,kindId:"copyFor",type:c.module})}),ee({bizId:e.bizId,list:u.value}).then(a=>{a.code==0?(v.info("知会成功"),i.value=!1,u.value=[]):(v.info("知会失败,原因："+a.message),i.value=!1)}))},K=()=>I(this,null,function*(){const t=yield X({orgId:"",orgKindIds:"ogn,dpt,psm",showPosition:!1,status:1});r.value=z(t.result)});function z(t,n){const a=[];for(let m=0;m<t.length;m++){const l=t[m],g={label:l.name,value:l.id,orgId:l.orgId,parent_node:l.parent_node,parentId:l.parentId,disabled:!(l.orgKindId==="psm"||l.orgKindId==="dpt")};l.children&&l.children.length>0&&(g.children=z(l.children)),a.push(g)}return a}const M=()=>I(this,null,function*(){let t={id:c.bizId},n;c.module==="officeDoc"?n=yield te(t):n=yield oe(t),n.result&&(e.bizId=c.bizId,e.module=c.module,Object.assign(e,n.result),Y({infoReleaseId:e.bizId}).then(()=>{A.getInstance().sendMsg("info-query",{})}),e.isAllowDownloadFile==1&&(y.value="preview,download"),w.value=[{filetype:e.module==="officeDoc"?"公文附件":"通知附件",fnamelist:"",bizId:e.bizFileId,maxCount:20,maxSize:100*1024*1024,required:!1,vmode:"view",fileKindId:""}])});return Z(()=>{p.value=!1,W(()=>{p.value=!0})}),J(()=>{M(),K()}),(t,n)=>{const a=x("a-col"),m=x("a-button"),l=x("a-row");return C(),L(Q,null,[s(l,{gutter:24,style:{"margin-bottom":"20px"}},{default:d(()=>[s(a,{span:19,offset:1},{default:d(()=>[D("div",ne,[D("h1",se,b(e.subject),1)]),D("div",ie,"发布人："+b(e.personMemberName)+"   发布时间："+b(e.finishedDate),1)]),_:1}),s(a,{span:1.5,style:{"margin-top":"30px"}},{default:d(()=>[e.isAllowCopy==1?(C(),N(m,{key:0,type:"primary",style:{color:"white"},icon:S(k(U)),onClick:F},{default:d(()=>[T(b("知会"))]),_:1},8,["icon"])):V("",!0)]),_:1}),s(a,{span:1,style:{"margin-top":"30px"}},{default:d(()=>[s(m,{type:"danger",style:{"background-color":"rgb(255 149 0)",color:"white"},icon:S(k(H)),onClick:h},{default:d(()=>[T(b(e.collectStatus==0?"收藏":"取消收藏"),1)]),_:1},8,["icon"])]),_:1})]),_:1}),s(l,{gutter:24},{default:d(()=>[s(a,{span:22,offset:1},{default:d(()=>[p.value?(C(),N(k(R),{key:0,class:"tinymce-comp-content",modelValue:e.content,"onUpdate:modelValue":n[0]||(n[0]=g=>e.content=g),width:"100%",height:"calc(100vh - 188px)",disabled:!0,"auto-resize":!0},null,8,["modelValue","height"])):V("",!0)]),_:1})]),_:1}),s(l,{gutter:24},{default:d(()=>[s(a,{span:22,offset:1,style:{position:"fixed",bottom:"0",width:"100%",height:"78px"}},{default:d(()=>[s(B,{ref:"uploadTable",width:"101.55%",height:"78px",rows:w.value,colwidths:["20%","85%"],application:"oa",module:e.module,mode:"view",fixed:"bottom",operate:y.value},null,8,["rows","module","operate"])]),_:1})]),_:1}),s(P,{title:"选择知会人",visible:i.value,"onUpdate:visible":n[1]||(n[1]=g=>i.value=g),value:u.value,tdata:r.value,tfields:{key:"value",title:"label"},width:800,height:600,onCancel:O,onConfirm:q},null,8,["visible","value","tdata"])],64)}}});const he=E(re,[["__scopeId","data-v-3bdd3e93"]]);export{he as default};
//# sourceMappingURL=view-19ac3073.js.map