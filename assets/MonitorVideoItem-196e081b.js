var s=(l,p,e)=>new Promise((c,r)=>{var o=a=>{try{n(e.next(a))}catch(i){r(i)}},u=a=>{try{n(e.throw(a))}catch(i){r(i)}},n=a=>a.done?c(a.value):Promise.resolve(a.value).then(o,u);n((e=e.apply(l,p)).next())});import{au as m,I as y,_}from"./index.js";import{d as h,k as v,o as g,b as w,Z as C,_ as b,$ as d,ad as V,f as k,a6 as S}from"./vue-71d1abb3.js";const x={class:"video-box"},I={class:"mcs8-video"},M=["src"],z={class:"title-box"},N=h({__name:"MonitorVideoItem",props:{width:{type:[Number,String],default:340},height:{type:[Number,String],default:208},title:{type:String,default:""},videoType:{type:String,default:""},videoSrc:{type:String,default:""},devId:{type:String,default:"",required:!0}},setup(l,{expose:p}){const e=l,c=m(),r=v(),o=v(),u=()=>s(this,null,function*(){e.videoType==="real"&&(o.value||(yield a()))}),n=()=>s(this,null,function*(){yield o.value.openVideo(e.devId,r.value)}),a=()=>s(this,null,function*(){o.value=new mcs8Client,o.value.on("OnManage",t=>{switch(t.method){case"responseConnect":t.errCode==200&&console.log("登录成功"),(t.errCode==401||t.errCode==502)&&c.error("连接断开"),t.errCode==500&&c.error("连接服务器失败");break;case"ConnecteInfo":break;case"responseConnectMedia":t.errCode==200&&(console.log("媒体登录成功"),setTimeout(()=>s(this,null,function*(){yield n()}),500)),t.errCode==401,t.errCode==500,t.errCode==502;break;case"joinRoom":break;case"newPeer":break;case"peerClosed":break;case"responseConnectGateway":t.errCode===502&&(c.error("连接失败，请核查输入信息"),o.value!=null&&(o.value.close(),o.value=null));break}});const f={host:"yyzx.zfy.ygwl.net",port:"7709",uid:"pc1",pwd:"000000",ssl:!0};yield o.value.connect(f)}),i=()=>s(this,null,function*(){yield o.value.closeVideo(e.devId),yield o.value.close()});return g(()=>{u()}),w(()=>{o.value&&i()}),p({openVideo:()=>{o.value&&n()},closeVideo:()=>{o.value&&i()}}),(f,t)=>(C(),b("div",{class:"monitor-video-item",style:S(`width: ${typeof e.width=="number"?e.width+"px":e.width}; height: ${typeof e.height=="number"?e.height+"px":e.height}`)},[d("div",x,[d("div",I,[d("video",{class:"video-layout",ref_key:"mcs8Video",ref:r,src:l.videoSrc,autoplay:"",playsinline:"",controls:""},null,8,M)])]),d("div",z,[d("span",null,V(e.title),1),k(y,{icon:"fluent-mdl2:scale-volume",style:{"font-size":"0.14rem"}})])],4))}});const R=_(N,[["__scopeId","data-v-c822f22e"]]);export{R as M};
//# sourceMappingURL=MonitorVideoItem-196e081b.js.map