var ke=Object.defineProperty,He=Object.defineProperties;var Se=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var le=(e,o,l)=>o in e?ke(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,v=(e,o)=>{for(var l in o||(o={}))Fe.call(o,l)&&le(e,l,o[l]);if(oe)for(var l of oe(o))$e.call(o,l)&&le(e,l,o[l]);return e},E=(e,o)=>He(e,Se(o));var V=(e,o,l)=>new Promise((r,a)=>{var c=f=>{try{n(l.next(f))}catch(u){a(u)}},t=f=>{try{n(l.throw(f))}catch(u){a(u)}},n=f=>f.done?r(f.value):Promise.resolve(f.value).then(c,t);n((l=l.apply(e,o)).next())});import{b as ue,d as Be,a_ as Oe,bx as Pe,j as Te,h as we,S as _e,by as Re,_ as L,u as de,aW as Ne,bz as De,bv as U,i as fe,bq as We,bh as Ee,bp as pe,aH as je,aK as ge}from"./index.js";import{s as X,u as i,d as T,H as Le,f as M,i as Ae,k as g,e as k,w as q,o as me,b as he,q as P,al as y,x as ye,Z as b,a9 as $,aa as m,v as be,_ as z,a6 as Ve,R as F,F as Ie,ac as J,a5 as qe,E as K,ad as Z,a7 as j,g as x,z as ze,ag as ae,ae as se,ai as re,ap as ie,r as ve,J as I}from"./vue-71d1abb3.js";import{a0 as G,a8 as Xe,av as Ye,aw as Ue,bc as Je,_ as Y,L as Ke}from"./antd-15ac76ed.js";import{u as Ze}from"./useWindowSizeFn-13b1b8a2.js";const{t:ce}=ue(),Ge={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:ce("common.cancelText")},okText:{type:String,default:ce("common.okText")},closeFunc:Function},ee=Object.assign({},Ge,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Qe(e){const o=(a,c)=>getComputedStyle(a)[c],l=a=>{if(!a)return;a.setAttribute("data-drag",i(e.draggable));const c=a.querySelector(".ant-modal-header"),t=a.querySelector(".ant-modal");!c||!t||!i(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const f=n.clientX,u=n.clientY,d=document.body.clientWidth,p=document.documentElement.clientHeight,h=t.offsetWidth,C=t.offsetHeight,H=t.offsetLeft,S=d-t.offsetLeft-h,B=t.offsetTop,w=p-t.offsetTop-C,_=o(t,"left"),N=o(t,"top");let D=+_,W=+N;_.includes("%")?(D=+document.body.clientWidth*(+_.replace(/%/g,"")/100),W=+document.body.clientHeight*(+N.replace(/%/g,"")/100)):(D=+_.replace(/px/g,""),W=+N.replace(/px/g,"")),document.onmousemove=function(A){let O=A.clientX-f,s=A.clientY-u;-O>H?O=-H:O>S&&(O=S),-s>B?s=-B:s>w&&(s=w),t.style.cssText+=`;left:${O+D}px;top:${s+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},r=()=>{const a=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(a)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||i(e.destroyOnClose))&&l(c)}};X(()=>{!i(e.visible)||!i(e.draggable)||Be(()=>{r()},30)})}function xe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Ae(e)}const et=T({name:"Modal",inheritAttrs:!1,props:ee,emits:["cancel","ok"],setup(e,{slots:o,emit:l}){const{visible:r,draggable:a,destroyOnClose:c}=Le(e),t=Oe();Qe({visible:r,destroyOnClose:c,draggable:a});const n=u=>{l("ok",u)},f=u=>{l("cancel",u)};return()=>{let u;const d=E(v(v({},i(t)),e),{onCancel:f,onOk:n});return M(G,d,xe(u=Pe(o))?u:{default:()=>[u]})}}}),Ce=Symbol();function tt(e){return we(e,Ce)}function $t(){return Te(Ce)}const nt={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},ot=T({name:"ModalWrapper",components:{ScrollContainer:_e},inheritAttrs:!1,props:nt,emits:["height-change","ext-height"],setup(e,{emit:o}){const l=g(null),r=g(null),a=g(0),c=g(0);let t=0;Ze(u.bind(null,!1)),Re(r,()=>{u()},{attributes:!0,subtree:!0}),tt({redoModalHeight:u});const n=k(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${i(a)}px`}));X(()=>{e.useWrapper&&u()}),q(()=>e.fullScreen,d=>{u(),d?c.value=a.value:a.value=c.value}),me(()=>{const{modalHeaderHeight:d,modalFooterHeight:p}=e;o("ext-height",d+p)}),he(()=>{});function f(){return V(this,null,function*(){P(()=>{var p;const d=i(l);d&&((p=d==null?void 0:d.scrollTo)==null||p.call(d,0))})})}function u(){return V(this,null,function*(){if(!e.visible)return;const d=i(l);if(!d)return;const p=d.$el.parentElement;if(p){p.style.padding="0",yield P();try{const h=p.parentElement&&p.parentElement.parentElement;if(!h)return;const C=getComputedStyle(h).top,H=Number.parseInt(C);let S=window.innerHeight-H*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;H<40&&(S-=26),yield P();const B=i(r);if(!B)return;yield P(),t=B.scrollHeight,e.fullScreen?a.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:a.value=e.height?e.height:t>S?S:t,o("height-change",i(a))}catch(h){console.log(h)}}})}return{wrapperRef:l,spinRef:r,spinStyle:n,scrollTop:f,setModalHeight:u}}}),lt=["loading-tip"];function at(e,o,l,r,a,c){const t=y("ScrollContainer"),n=ye("loading");return b(),$(t,{ref:"wrapperRef"},{default:m(()=>[be((b(),z("div",{ref:"spinRef",style:Ve(e.spinStyle),"loading-tip":e.loadingTip},[F(e.$slots,"default")],12,lt)),[[n,e.loading]])]),_:3},512)}const st=L(ot,[["render",at]]),rt=T({name:"ModalClose",components:{Tooltip:Xe,FullscreenExitOutlined:Ye,FullscreenOutlined:Ue,CloseOutlined:Je},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:l}=de("basic-modal-close"),{t:r}=ue(),a=k(()=>[l,`${l}--custom`,{[`${l}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:r,getClass:a,prefixCls:l,handleCancel:c,handleFullScreen:t}}});function it(e,o,l,r,a,c){const t=y("FullscreenExitOutlined"),n=y("Tooltip"),f=y("FullscreenOutlined"),u=y("CloseOutlined");return b(),z("div",{class:qe(e.getClass)},[e.canFullscreen?(b(),z(Ie,{key:0},[e.fullScreen?(b(),$(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:m(()=>[M(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(b(),$(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:m(()=>[M(f,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):J("",!0),M(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:m(()=>[M(u,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}const ct=L(rt,[["render",it]]),ut=T({name:"BasicModalFooter",props:ee,emits:["ok","cancel"],setup(e,{emit:o}){function l(a){o("ok",a)}function r(a){o("cancel",a)}return{handleOk:l,handleCancel:r}}});function dt(e,o,l,r,a,c){const t=y("a-button");return b(),z("div",null,[F(e.$slots,"insertFooter"),e.showCancelBtn?(b(),$(t,j({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:m(()=>[K(Z(e.cancelText),1)]),_:1},16,["onClick"])):J("",!0),F(e.$slots,"centerFooter"),e.showOkBtn?(b(),$(t,j({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:m(()=>[K(Z(e.okText),1)]),_:1},16,["type","onClick","loading"])):J("",!0),F(e.$slots,"appendFooter")])}const ft=L(ut,[["render",dt]]),pt=T({name:"BasicModalHeader",components:{BasicTitle:Ne},props:{helpMessage:{type:[String,Array]},title:{type:String}}});function gt(e,o,l,r,a,c){const t=y("BasicTitle");return b(),$(t,{helpMessage:e.helpMessage},{default:m(()=>[K(Z(e.title),1)]),_:1},8,["helpMessage"])}const mt=L(pt,[["render",gt]]);function ht(e){const o=g(!1),l=k(()=>{const a=i(e.wrapClassName)||"";return i(o)?`fullscreen-modal ${a} `:i(a)});function r(a){a&&a.stopPropagation(),o.value=!i(o)}return{getWrapClassName:l,handleFullScreen:r,fullScreenRef:o}}const yt=T({name:"BasicModal",components:{Modal:et,ModalWrapper:st,ModalClose:ct,ModalFooter:ft,ModalHeader:mt},inheritAttrs:!1,props:ee,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:o,attrs:l}){const r=g(!1),a=g(null),c=g(null),{prefixCls:t}=de("basic-modal"),n=g(0),f={setModalProps:N,emitVisible:void 0,redoModalHeight:()=>{P(()=>{i(c)&&i(c).setModalHeight()})}},u=x();u&&o("register",f,u.uid);const d=k(()=>v(v({},e),i(a))),{handleFullScreen:p,getWrapClassName:h,fullScreenRef:C}=ht({modalWrapperRef:c,extHeightRef:n,wrapClassName:ze(d.value,"wrapClassName")}),H=k(()=>{const s=E(v({},i(d)),{visible:i(r),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return E(v({},s),{wrapClassName:i(h)})}),S=k(()=>{const s=E(v(v({},l),i(d)),{visible:i(r)});return s.wrapClassName=`${(s==null?void 0:s.wrapClassName)||""} ${i(h)}`,i(C)?Y(s,["height","title"]):Y(s,"title")}),B=k(()=>{if(!i(C))return i(H).height});X(()=>{r.value=!!e.visible,C.value=!!e.defaultFullscreen}),q(()=>i(r),s=>{o("visible-change",s),o("update:visible",s),P(()=>{e.scrollTop&&s&&i(c)&&i(c).scrollTop()}),w(s)},{immediate:!1});const w=s=>{s?De():U()};function _(s){return V(this,null,function*(){var te,ne;if(s==null||s.stopPropagation(),!((ne=(te=s.target)==null?void 0:te.classList)!=null&&ne.contains(t+"-close--custom"))){if(e.closeFunc&&fe(e.closeFunc)){const Me=yield e.closeFunc();r.value=!Me;return}r.value=!1,o("cancel",s),w(r.value)}})}function N(s){a.value=We(i(a)||{},s),Reflect.has(s,"visible")&&(r.value=!!s.visible,w(r.value)),Reflect.has(s,"defaultFullscreen")&&(C.value=!!s.defaultFullscreen)}function D(s){o("ok",s)}function W(s){o("height-change",s)}function A(s){n.value=s}function O(s){e.canFullscreen&&(s.stopPropagation(),p(s))}return{handleCancel:_,getBindValue:S,getProps:H,handleFullScreen:p,fullScreenRef:C,getMergeProps:d,handleOk:D,visibleRef:r,omit:Y,modalWrapperRef:c,handleExtHeight:A,handleHeightChange:W,handleTitleDbClick:O,getWrapperHeight:B}}});function bt(e,o,l,r,a,c){const t=y("ModalClose"),n=y("ModalHeader"),f=y("ModalFooter"),u=y("ModalWrapper"),d=y("Modal");return b(),$(d,j(e.getBindValue,{onCancel:e.handleCancel}),ae({default:m(()=>[M(u,j({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:m(()=>[F(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:m(()=>[M(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])]),key:"0"},e.$slots.title?void 0:{name:"title",fn:m(()=>[M(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])]),key:"1"},e.$slots.footer?void 0:{name:"footer",fn:m(()=>[M(f,j(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),ae({_:2},[se(Object.keys(e.$slots),p=>({name:p,fn:m(h=>[F(e.$slots,p,re(ie(h||{})))])}))]),1040,["onOk","onCancel"])]),key:"2"},se(Object.keys(e.omit(e.$slots,"default")),p=>({name:p,fn:m(h=>[F(e.$slots,p,re(ie(h||{})))])}))]),1040,["onCancel"])}const vt=L(yt,[["render",bt]]),Ct=T({name:"AModal",extends:G,__name:"AModal",props:{visible:{type:Boolean,default:!1},title:{type:String,default:""}},emits:["cancel","ok"],setup(e,{emit:o}){const l=e,r=g(!1),a=g(""),c=()=>{o("cancel"),U()},t=()=>{o("ok"),U()};return q(()=>l.visible,()=>{r.value=l.visible}),q(()=>l.title,()=>{a.value=l.title}),me(()=>{r.value=l.visible,a.value=l.title}),(n,f)=>{const u=ye("modal");return be((b(),$(i(G),{title:a.value,onCancel:c,onOk:t},{default:m(()=>[F(n.$slots,"default")]),_:3},8,["title"])),[[u,r.value,"visible"]])}}}),R=ve({}),Q=ve({});function Bt(){const e=g(null),o=g(!1),l=g("");function r(t,n){if(!x())throw new Error("useModal() can only be used inside setup() or functional components!");l.value=n,he(()=>{e.value=null,o.value=!1,R[i(l)]=null}),!(i(o)&&Ee()&&t===i(e))&&(e.value=t,o.value=!0,t.emitVisible=(f,u)=>{Q[u]=f})}const a=()=>{const t=i(e);return t||pe("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},getVisible:k(()=>Q[~~i(l)]),redoModalHeight:()=>{var t,n;(n=(t=a())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t,n,f=!0)=>{var p;if((p=a())==null||p.setModalProps(v({},t)),!n)return;const u=i(l);if(f){R[u]=null,R[u]=I(n);return}Ke(I(R[u]),I(n))||(R[u]=I(n))},closeModal:()=>{var t;(t=a())==null||t.setModalProps({visible:!1})}};return[r,c]}const Ot=e=>{const o=g(null),l=x(),r=g(""),a=()=>{const t=i(o);return t||pe("useModalInner instance is undefined!"),t},c=(t,n)=>{je(()=>{o.value=null}),r.value=n,o.value=t,l==null||l.emit("register",t,n)};return X(()=>{const t=R[i(r)];t&&(!e||!fe(e)||P(()=>{e(t)}))}),[c,{changeLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({loading:t})},getVisible:k(()=>Q[~~i(r)]),changeOkLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=a())==null||t.setModalProps({visible:!1})},setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=a())==null?void 0:n.redoModalHeight;t&&t()}}]},Pt=ge(vt);ge(Ct);export{Pt as B,Ot as a,Bt as b,$t as u};
//# sourceMappingURL=index-316f6ffb.js.map