var h=(y,b,s)=>new Promise((m,l)=>{var g=a=>{try{c(s.next(a))}catch(r){l(r)}},x=a=>{try{c(s.throw(a))}catch(r){l(r)}},c=a=>a.done?m(a.value):Promise.resolve(a.value).then(g,x);c((s=s.apply(y,b)).next())});import{D as M}from"./Dialog-0a006d82.js";import{B as _}from"./BasicTable-0434a334.js";import"./BasicForm.vue_vue_type_style_index_0_lang-1ba7be9e.js";import"./index-085d06c7.js";import{u as D}from"./useTable-109483b3.js";import"./antd-15ac76ed.js";import{au as W,av as k,at as q}from"./index.js";import{a as P,b as G}from"./create-58f7bc33.js";import{d as H,k as p,al as U,Z as v,_ as Z,f as I,aa as u,a9 as T,u as i,E as w,ac as O,F as J}from"./vue-71d1abb3.js";const ie=H({__name:"dtlList",setup(y,{expose:b}){const{createConfirm:s}=W(),m=p(""),l=p("dtlChild"),g=p(!0),x=()=>{f.value=!0},c=()=>{N(A())},a=()=>{s({title:"提示",iconType:"warning",content:"确定引入全部检查数据?",onOk(){return h(this,null,function*(){let n=yield P({usePage:0}),o=[];n.result.list.forEach(t=>{o.push({indexId:t.id,indexItem:t.checkItem,indexContent:t.description})}),S(o),F()})}})},r=e=>{m.value=e.inspectionPlanId,l.value=e.activeKey,e.forceReload&&C(),g.value&&(C(),g.value=!1)},E=[{label:"关键字",field:"name",component:"Input",colProps:{span:8}}],[K,{setTableData:S,getSelectRowKeys:A,reload:C,clearSelectedRowKeys:F,getDataSource:R,deleteTableDataRecord:N}]=D({title:"",api:()=>h(this,null,function*(){return(yield G({inspectionPlanId:m.value})).result}),columns:[{title:"项目",dataIndex:"indexItem",align:"left",headAlign:"center",width:80},{title:"巡检内容及标准",dataIndex:"indexContent",align:"left",headAlign:"center",width:160}],bordered:!0,useSearchForm:!1,showTableSetting:!1,target:"#more-tab-content",targetTabKey:"dtlChild",targetTabValue:l,pagination:!1,rowSelection:{type:"checkbox"}}),f=p(!1),j=()=>{let e=V();if(e.length==0)return q.getInstance().info("请选择指标"),!1;f.value=!1;let n=R(),o={};n.forEach(t=>{o[t.indexId]=t.indexId}),e.forEach(t=>{o[t.id]||n.push({indexId:t.id,indexItem:t.checkItem,indexContent:t.description})}),S(n),z()},d=p({checkItem:"",description:"",pageNo:1,pageSize:10,usePage:1}),[B,{getSelectRows:V,clearSelectedRowKeys:z,getPaginationRef:L}]=D({title:"",api:()=>h(this,null,function*(){const e=L();return d.value.pageNo=e.current,d.value.pageSize=e.pageSize,(yield P(d.value)).result}),columns:[{title:"检查项目",dataIndex:"checkItem",align:"left",headAlign:"center",width:80},{title:"检查内容",dataIndex:"description",align:"left",headAlign:"center",width:160}],pagination:!0,formConfig:{labelWidth:120,schemas:[{label:"检查项目",field:"checkItem",component:"Input",colProps:{span:10}},{label:"检查内容",field:"description",component:"Input",colProps:{span:10}}]},useSearchForm:!0,showTableSetting:!1,maxHeight:343,rowSelection:{type:"checkbox"},handleSearchInfoFn(e){d.value.checkItem=e.checkItem,d.value.description=e.description}});return b({reloadGrid:r,getDataSource:R}),(e,n)=>{const o=U("a-button");return v(),Z(J,null,[I(i(_),{onRegister:i(K)},{toolbar:u(()=>[l.value=="dtlChild"?(v(),T(o,{key:0,onClick:x,type:"primary",style:{"margin-right":"10px"},preIcon:i(k).ADD},{default:u(()=>[w("添加")]),_:1},8,["preIcon"])):O("",!0),l.value=="dtlChild"?(v(),T(o,{key:1,onClick:c,style:{"margin-right":"10px"},preIcon:i(k).DELETE},{default:u(()=>[w("删除")]),_:1},8,["preIcon"])):O("",!0),I(o,{onClick:a,preIcon:i(k).DOWNLOAD},{default:u(()=>[w("批量引入")]),_:1},8,["preIcon"])]),_:1},8,["onRegister"]),I(M,{visible:f.value,"onUpdate:visible":n[0]||(n[0]=t=>f.value=t),maskClosable:!1,title:"选择巡检指标",onOk:j,width:1e3},{default:u(()=>[I(i(_),{class:"table-in-dialog",onRegister:i(B),searchInfo:E},null,8,["onRegister"])]),_:1},8,["visible"])],64)}}});export{ie as _};
//# sourceMappingURL=dtlList.vue_vue_type_script_setup_true_lang-652a23af.js.map