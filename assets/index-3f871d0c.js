var k=(h,l,o)=>new Promise((t,c)=>{var f=e=>{try{a(o.next(e))}catch(s){c(s)}},d=e=>{try{a(o.throw(e))}catch(s){c(s)}},a=e=>e.done?t(e.value):Promise.resolve(e.value).then(f,d);a((o=o.apply(h,l)).next())});import{d as x,k as C,w as T,q as D,al as A,Z as p,_,F as R,ae as B,v as V,A as I,f as i,u as r,aa as n,E as y,ad as b,a9 as M,ac as S}from"./vue-71d1abb3.js";import{_ as N}from"./DetailModal.vue_vue_type_script_setup_true_lang-e64c9bdc.js";import{B as j}from"./BasicTable-0434a334.js";import{T as F}from"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as $}from"./useTable-109483b3.js";import{P as q}from"./antd-15ac76ed.js";import{b as P,cb as Z,au as z}from"./index.js";import{b as G}from"./index-316f6ffb.js";import{getColumns as H}from"./data-5d11b497.js";import"./useForm-dea3ed18.js";import"./uniqBy-92d3bc7f.js";import"./useWindowSizeFn-13b1b8a2.js";import"./index-f4fc48e6.js";import"./useTabs-2b062e85.js";import"./download-03e71dd5.js";import"./index-5d49b7a7.js";import"./SearchBox-22bb02d6.js";import"./UploadBox-636ecf02.js";import"./Dialog-0a006d82.js";import"./DictSelectBox.vue_vue_type_script_setup_true_lang-e03e9fe8.js";import"./OrganDialog-dd1023ce.js";import"./sortable.esm-4ae27e0b.js";import"./dict-c04c0dd8.js";const J={class:"p-4"},K=["src"],ke=x({__name:"index",setup(h){const l=C(),o=C([]),{t}=P(),c=Z(),[f,{setTableData:d}]=$({title:t("sys.errorLog.tableTitle"),columns:H(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[a,{openModal:e}]=G();T(()=>c.getErrorLogInfoList,m=>{D(()=>{d(q(m))})},{immediate:!0}),z();function s(m){l.value=m,e(!0)}function E(){throw new Error("fire vue error!")}function L(){o.value.push(`${new Date().getTime()}.png`)}function v(){return k(this,null,function*(){})}return(m,O)=>{const g=A("a-button");return p(),_("div",J,[(p(!0),_(R,null,B(o.value,u=>V((p(),_("img",{key:u,src:u,alt:""},null,8,K)),[[I,!1]])),128)),i(N,{info:l.value,onRegister:r(a)},null,8,["info","onRegister"]),i(r(j),{onRegister:r(f),class:"error-handle-table"},{toolbar:n(()=>[i(g,{onClick:E,type:"primary"},{default:n(()=>[y(b(r(t)("sys.errorLog.fireVueError")),1)]),_:1}),i(g,{onClick:L,type:"primary"},{default:n(()=>[y(b(r(t)("sys.errorLog.fireResourceError")),1)]),_:1}),i(g,{onClick:v,type:"primary"},{default:n(()=>[y(b(r(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:u,record:w})=>[u.key==="action"?(p(),M(r(F),{key:0,actions:[{label:r(t)("sys.errorLog.tableActionDesc"),onClick:s.bind(null,w)}]},null,8,["actions"])):S("",!0)]),_:1},8,["onRegister"])])}}});export{ke as default};
//# sourceMappingURL=index-3f871d0c.js.map