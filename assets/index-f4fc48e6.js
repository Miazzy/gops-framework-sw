var v=(t,e,n)=>new Promise((s,u)=>{var l=a=>{try{r(n.next(a))}catch(c){u(c)}},o=a=>{try{r(n.throw(a))}catch(c){u(c)}},r=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);r((n=n.apply(t,e)).next())});import{aH as I,b as h,i as z,_ as C,u as F,aK as g}from"./index.js";import{g as k,r as A,U as T,s as S,e as y,q as N,J as R,u as d,k as f,d as _,al as p,Z as w,a9 as $,aa as m,E as D,ad as E,a7 as b,ag as O,ae as P,R as j,ai as q,ap as L,f as U}from"./vue-71d1abb3.js";import{L as V,ai as H}from"./antd-15ac76ed.js";function J(t,e="value",n="change",s){const u=k(),l=u==null?void 0:u.emit,o=A({value:t[e]}),r=T(o),a=i=>{o.value=i};return S(()=>{o.value=t[e]}),[y({get(){return o.value},set(i){V(i,r.value)||(o.value=i,N(()=>{l==null||l(n,i,...R(d(s))||[])}))}}),a,r]}function K(t){const e=f(t),n=f(!1);let s;function u(){s&&window.clearInterval(s)}function l(){n.value=!1,u(),s=null}function o(){d(n)||s||(n.value=!0,s=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function r(){e.value=t,l()}function a(){r(),o()}return I(()=>{r()}),{start:o,reset:r,restart:a,clear:u,stop:l,currentCount:e,isStart:n}}const Z={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},G=_({name:"CountButton",components:{Button:H},props:Z,setup(t){const e=f(!1),{currentCount:n,isStart:s,start:u,reset:l}=K(t.count),{t:o}=h(),r=y(()=>d(s)?o("component.countdown.sendText",[d(n)]):o("component.countdown.normalText"));S(()=>{t.value===void 0&&l()});function a(){return v(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&z(c)){e.value=!0;try{(yield c())&&u()}finally{e.value=!1}}else u()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:r,isStart:s}}});function M(t,e,n,s,u,l){const o=p("Button");return w(),$(o,b(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:m(()=>[D(E(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}const B=C(G,[["render",M]]),Q={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},W=_({name:"CountDownInput",components:{CountButton:B},inheritAttrs:!1,props:Q,setup(t){const{prefixCls:e}=F("countdown-input"),[n]=J(t);return{prefixCls:e,state:n}}});function X(t,e,n,s,u,l){const o=p("CountButton"),r=p("a-input");return w(),$(r,b(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),O({addonAfter:m(()=>[U(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[P(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:m(c=>[j(t.$slots,a,q(L(c||{})))])}))]),1040,["class","size","value"])}const Y=C(W,[["render",X]]),at=g(Y);g(B);export{at as C,J as u};
//# sourceMappingURL=index-f4fc48e6.js.map
