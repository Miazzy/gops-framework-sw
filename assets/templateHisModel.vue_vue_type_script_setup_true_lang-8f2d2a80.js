var k=(m,i,l)=>new Promise((y,c)=>{var p=e=>{try{r(l.next(e))}catch(d){c(d)}},_=e=>{try{r(l.throw(e))}catch(d){c(d)}},r=e=>e.done?y(e.value):Promise.resolve(e.value).then(p,_);r((l=l.apply(m,i)).next())});import{a as M,B as b}from"./index-316f6ffb.js";import{j as v,k as B}from"./template-39a1216a.js";import{d as L,k as h,r as D,al as H,Z as s,a9 as T,aa as g,f as O,u,_ as t,F,ac as a,a7 as N}from"./vue-71d1abb3.js";const P={key:0,style:{color:"#dc0000"}},S={key:1,style:{color:"#338ed1"}},V={key:2,style:{color:"#30ca5a"}},j={key:3,style:{color:"#929292"}},z={key:4,style:{color:"#929292"}},E={key:5,style:{color:"#929292"}},Z={key:6,style:{color:"#fda941"}},Q=L({__name:"templateHisModel",props:{fIndexList:{}},emits:["cancelDetail","handleOk"],setup(m,{emit:i}){const l=m,y=v();let c=h([]);const p=h(""),[_,{setModalProps:r,closeModal:e}]=M(()=>k(this,null,function*(){r({confirmLoading:!1}),w(),f.selectedRowKeys=l.fIndexList.map(o=>o.id)}));function d(){i("cancelDetail")}function w(){B().then(o=>{c.value=o.result})}function C(){console.info(f.selectedRowKeys),i("selectedTempId",p.value),e()}const f=D({selectedRowKeys:[],loading:!1}),R=o=>{p.value=o.id};return(o,$)=>{const I=H("a-table");return s(),T(u(b),N(o.$attrs,{onRegister:u(_),onCancel:d,onOk:C,title:"历史模板",width:"400px"}),{default:g(()=>[O(I,{columns:u(y),"data-source":u(c),pagination:!1,size:"small",bordered:"",rowKey:"id","row-selection":{selectedRowKeys:o.selectedRowKeys,type:"radio",onSelect:R},scroll:{x:300,y:600}},{bodyCell:g(({column:K,text:n,record:q})=>[K.dataIndex==="status"?(s(),t(F,{key:0},[n==0?(s(),t("span",P,"草稿")):a("",!0),n==1?(s(),t("span",S,"处理中")):a("",!0),n==2?(s(),t("span",V,"通过")):a("",!0),n==3?(s(),t("span",j,"不通过")):a("",!0),n==4?(s(),t("span",z,"已取消")):a("",!0),n==5?(s(),t("span",E,"已终止")):a("",!0),n==6?(s(),t("span",Z,"退回/驳回")):a("",!0)],64)):a("",!0)]),_:1},8,["columns","data-source","row-selection"])]),_:1},16,["onRegister"])}}});export{Q as _};
//# sourceMappingURL=templateHisModel.vue_vue_type_script_setup_true_lang-8f2d2a80.js.map