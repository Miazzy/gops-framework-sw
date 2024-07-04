import{d as X,k as n,e as le,w as s,o as Y,al as M,Z as d,_ as p,$ as i,F as z,ae as O,a6 as C,ad as I,v as N,A as V,f as B,a9 as H,aa as A,E as J,ac as U,R as oe,aG as ne,aH as se}from"./vue-71d1abb3.js";import{U as de}from"./UploadBox-636ecf02.js";import{I as ee,bw as ue,ab as ie,_ as re,a7 as Q}from"./index.js";const pe=y=>(ne("data-v-c345eaed"),y=y(),se(),y),ce={role:"img","aria-label":"paper-clip",class:"anticon anticon-paper-clip"},ve=["onClick"],me={class:"file-title-content"},he={class:"file-button-content"},ge=pe(()=>i("span",null,"附件详情",-1)),ye=["size","title"],_e=["size","title"],we={key:0,class:"file-alert"},xe={key:1,class:"file-type"},fe={class:"required"},be={class:"text"},ke={key:2},Se=X({__name:"Table",props:{tableCssStyle:{type:Object,default:{}},data:{type:Array,default:[]},columns:{type:Array,default:[]},actioncolumn:{type:Object,default:{}},operable:{type:Boolean,default:!1},viewFunction:{type:Function,default:()=>{}},application:{type:String,default:""},module:{type:String,default:""},message:{type:String,default:""},mode:{type:String,default:"normal"},fixed:{type:String,default:""},operate:{type:String,default:""},format:{type:String,default:"png,jpg,jpeg,bmp,wps,pdf,txt,doc,docx,xls,xlsx,ppt,pptx,zip,rar,mp3,mp4"}},emits:["change"],setup(y,{expose:K,emit:a}){const e=y,r=n([]),g=n([]),v=n(!1),m=n({}),_=n(""),w=n(""),F=n(""),x=n(""),q=n("normal"),h=n(""),f=n(""),T=le(()=>h.value=="bottom"?"border-right: 1px solid #ddd":""),R=(l,k)=>{var c;a("change",l,k),((c=l==null?void 0:l.filelist)==null?void 0:c.length)>0&&delete l.showReqTips},$=(l,k)=>{if(f.value.includes("preview")){const c=ue(l,k);window.open(c)}},E=l=>{const k=ie(l);window.open(k)},G=()=>{let l=0;for(const c of r.value)c.filelist&&c.filelist.length==0&&c.required&&(c.showReqTips=!0,l++);return{count:l,valid:l===0}},S=(l="")=>f.value.includes(l),j=()=>{for(const l of r.value)delete l.showReqTips},D=l=>l.key=="filelist"&&h.value=="bottom"?"40px":"",b=l=>l.key=="filelist"&&h.value=="bottom"?"block":"",P=l=>l.key=="filelist"&&h.value=="bottom"?"0px":"",L=()=>e.mode=="view"?"none":"";return s(()=>e.data,()=>{r.value=e.data},{deep:!0}),s(()=>e.columns,()=>{g.value=e.columns}),s(()=>e.operable,()=>{v.value=e.operable}),s(()=>e.actioncolumn,()=>{m.value=e.actioncolumn}),s(()=>e.message,()=>{F.value=e.message}),s(()=>e.module,()=>{w.value=e.module}),s(()=>e.application,()=>{_.value=e.application}),s(()=>e.format,()=>{x.value=e.format}),s(()=>e.fixed,()=>{h.value=e.fixed}),s(()=>e.operate,()=>{f.value=e.operate}),s(()=>e.mode,l=>{q.value=e.mode,l=="view"?v.value=!1:l=="normal"&&(v.value=!0)}),K({validate:G,handleClearTips:j}),Y(()=>{r.value=e.data,g.value=e.columns,v.value=e.operable,m.value=e.actioncolumn,_.value=e.application,w.value=e.module,F.value=e.message,x.value=e.format,q.value=e.mode,h.value=e.fixed,f.value=e.operate}),(l,k)=>{const c=M("a-button"),te=M("a-popover"),ae=M("a-alert");return d(),p("table",{class:"table",style:C(y.tableCssStyle)},[i("thead",null,[i("tr",null,[(d(!0),p(z,null,O(g.value,o=>(d(),p("th",{key:o.key,style:C({width:o.width,textAlign:o.halign})},[i("span",null,I(o.title),1)],4))),128)),N(i("th",{style:C({width:m.value.width,textAlign:m.value.halign,display:L()})},"操作",4),[[V,v.value]])])]),i("tbody",null,[(d(!0),p(z,null,O(r.value,o=>(d(),p("tr",{key:o.key,style:C(T.value)},[(d(!0),p(z,null,O(g.value,u=>(d(),p("td",{key:u.key,style:C({width:u.width,textAlign:u.talign,height:D(u),display:b(u),border:P(u)})},[u.dataIndex==="filelist"?(d(),p(z,{key:0},[(d(!0),p(z,null,O(o.filelist,t=>(d(),p("div",{key:`${t.id}`,class:"ant-upload-list-item"},[i("span",ce,[B(ee,{icon:"ph:file-light"})]),i("span",{class:"file-text",onClick:Z=>$(t==null?void 0:t.url,t==null?void 0:t.name)},[S("preview")||S("download")?(d(),H(te,{key:0},{content:A(()=>[i("div",me,[i("span",null,I(t==null?void 0:t.name),1)]),i("div",he,[S("preview")?(d(),H(c,{key:0,preIcon:"ic:baseline-pageview",onClick:Z=>$(t==null?void 0:t.url,t==null?void 0:t.name),iconSize:16},{default:A(()=>[J("预览")]),_:2},1032,["onClick"])):U("",!0),S("download")?(d(),H(c,{key:1,preIcon:"foundation:download",onClick:Z=>E(t==null?void 0:t.url),iconSize:16},{default:A(()=>[J("下载")]),_:2},1032,["onClick"])):U("",!0)])]),title:A(()=>[ge]),default:A(()=>[i("a",{target:"_blank",class:"ant-upload-list-item-name",size:t==null?void 0:t.size,title:t==null?void 0:t.name},I(t==null?void 0:t.name),9,ye)]),_:2},1024)):(d(),p("a",{key:1,target:"_blank",class:"ant-upload-list-item-name",size:t==null?void 0:t.size,title:t==null?void 0:t.name},I(t==null?void 0:t.name),9,_e))],8,ve)]))),128)),o.required&&o.showReqTips&&o.filelist&&o.filelist.length==0?(d(),p("span",we,[B(ae,{message:"请上传本行附件信息",type:"error","show-icon":""})])):U("",!0)],64)):u.dataIndex==="filetype"?(d(),p("span",xe,[i("span",fe,I(o.required?"*":" "),1),i("span",be,I(o[u.dataIndex]),1)])):u.dataIndex!=="filelist"?(d(),p("span",ke,I(o[u.dataIndex]),1)):U("",!0)],4))),128)),N(i("td",{style:C({width:m.value.width,textAlign:m.value.halign,display:L()})},[oe(l.$slots,"actions",{item:o},()=>[N(B(de,{value:o.filelist,"onUpdate:value":u=>o.filelist=u,onLoaded:u=>{R(o,u)},onChange:u=>{R(o,u)},vmode:"edit",width:800,height:550,maxCount:o.maxCount,maxSize:o.maxSize,application:_.value,module:w.value,mode:q.value,bizId:o.bizId,format:o.format,fileKindId:o.fileKindId},null,8,["value","onUpdate:value","onLoaded","onChange","maxCount","maxSize","application","module","mode","bizId","format","fileKindId"]),[[V,!o.readonly]])],!0)],4),[[V,v.value]])],4))),128))])],4)}}});const W=re(Se,[["__scopeId","data-v-c345eaed"]]),ze=X({__name:"UploadTable",props:{multiple:{type:Boolean,default:!0},width:{type:String,default:"100%"},height:{type:String,default:"auto"},rows:{type:Array},colwidths:{type:Array},viewFunction:{type:Function,default:()=>{}},application:{type:String,default:""},module:{type:String,default:""},message:{type:String,default:""},mode:{type:String,default:"normal"},fixed:{type:String,default:""},operate:{type:String,default:"download,preview"},format:{type:String,default:"png,jpg,jpeg,bmp,wps,pdf,txt,doc,docx,xls,xlsx,ppt,pptx,zip,rar,mp3,mp4"}},setup(y,{expose:K}){var S,j,D;const a=y,e=n([]),r=n([]),g=n(""),v=n(""),m=n("normal"),_=n(""),w=n(""),F=n("auto"),x=n(""),q=n({width:a.width,height:a.height}),h=n(),f=n(!1),T=n("");r.value=[{title:"附件类别",dataIndex:"filetype",key:"filetype",width:(S=a.colwidths[0])!=null?S:"30%",halign:"center",talign:"center"},{title:"附件信息",dataIndex:"filelist",key:"filelist",width:(j=a.colwidths[1])!=null?j:"45%",halign:"center",talign:"center"},{title:"操作",dataIndex:"action",key:"action",width:(D=a.colwidths[2])!=null?D:"25%",halign:"center",talign:"center"}],s(()=>a.message,()=>{_.value=a.message}),s(()=>a.module,()=>{v.value=a.module}),s(()=>a.application,()=>{g.value=a.application}),s(()=>a.rows,()=>{e.value=a.rows},{deep:!0}),s(()=>a.format,()=>{w.value=a.format}),s(()=>a.mode,()=>{m.value=a.mode}),s(()=>a.height,()=>{F.value=a.height}),s(()=>a.fixed,()=>{x.value=a.fixed}),s(()=>a.operate,()=>{T.value=a.operate});const R=()=>{var b;return(b=h.value)==null?void 0:b.validate()},$=()=>{var b;(b=h.value)==null||b.handleClearTips()},E=()=>{f.value=!1,Q.getInstance().sendMsg("drawer-open",{type:"remove"})},G=()=>{f.value=!0,Q.getInstance().sendMsg("drawer-open",{type:"open"})};return K({validate:R,handleClearTips:$}),Y(()=>{e.value=a.rows,g.value=a.application,v.value=a.module,_.value=a.message,w.value=a.format,m.value=a.mode,F.value=a.height,x.value=a.fixed,T.value=a.operate}),(b,P)=>{const L=M("a-drawer");return d(),p(z,null,[i("div",{style:C([{position:"relative"},q.value])},[B(W,{ref_key:"uploadTable",ref:h,operable:!0,data:e.value,columns:r.value.slice(0,r.value.length-1),actioncolumn:r.value[r.value.length-1],application:g.value,module:v.value,message:_.value,format:w.value,mode:m.value,operate:T.value,fixed:x.value},null,8,["data","columns","actioncolumn","application","module","message","format","mode","operate","fixed"]),x.value==="bottom"?(d(),H(ee,{key:0,icon:"ri:skip-up-line",size:20,style:{position:"absolute",top:"1px",right:"0"},onClick:G})):U("",!0)],4),N(i("template",null,[B(L,{height:450,title:"附件列表",placement:"bottom",visible:f.value,onClose:E},{default:A(()=>[B(W,{ref_key:"uploadTable",ref:h,operable:!0,data:e.value,columns:r.value.slice(0,r.value.length-1),actioncolumn:r.value[r.value.length-1],application:g.value,module:v.value,message:_.value,format:w.value,mode:m.value,operate:T.value},null,8,["data","columns","actioncolumn","application","module","message","format","mode","operate"])]),_:1},8,["visible"])],512),[[V,x.value==="bottom"]])],64)}}});export{ze as _};
//# sourceMappingURL=UploadTable.vue_vue_type_script_setup_true_lang-5478923e.js.map