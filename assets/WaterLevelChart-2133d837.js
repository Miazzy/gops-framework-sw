import"./index-d8a2358f.js";import"./echarts-5cbe119e.js";import{e as ce,a as ue}from"./api-32c7505d.js";import{c as de,S as he,e as ve,a as fe,u as G,G as J,b as pe,R as K,Z as Q,C as ge,p as ye,m as ee,B as me,d as te,f as we,g as be,i as Pe}from"./install-58e0bd81.js";import{c as Se}from"./helper-474c7a04.js";import{_ as Ie}from"./index.js";import{w as Me,o as _e,Z as Ce,_ as xe,$ as z,a6 as $}from"./vue-71d1abb3.js";ce({type:"series.liquidFill",optionUpdated:function(){var e=this.option;e.gridSize=Math.max(Math.floor(e.gridSize),4)},getInitialData:function(e,r){var a=de(e.data,{coordDimensions:["value"]}),h=new he(a,this);return h.initData(e.data),h},defaultOption:{color:["#294D99","#156ACF","#1598ED","#45BDFF"],center:["50%","50%"],radius:"50%",amplitude:"8%",waveLength:"80%",phase:"auto",period:"auto",direction:"right",shape:"circle",waveAnimation:!0,animationEasing:"linear",animationEasingUpdate:"linear",animationDuration:2e3,animationDurationUpdate:1e3,outline:{show:!0,borderDistance:8,itemStyle:{color:"none",borderColor:"#294D99",borderWidth:8,shadowBlur:20,shadowColor:"rgba(0, 0, 0, 0.25)"}},backgroundStyle:{color:"#E3F7FF"},itemStyle:{opacity:.95,shadowBlur:50,shadowColor:"rgba(0, 0, 0, 0.4)"},label:{show:!0,color:"#294D99",insideColor:"#fff",fontSize:50,fontWeight:"bold",align:"center",baseline:"middle",position:"inside"},emphasis:{itemStyle:{opacity:.8}}}});const Le=ve({type:"ec-liquid-fill",shape:{waveLength:0,radius:0,radiusY:0,cx:0,cy:0,waterLevel:0,amplitude:0,phase:0,inverse:!1},buildPath:function(e,r){r.radiusY==null&&(r.radiusY=r.radius);for(var a=Math.max(Math.ceil(2*r.radius/r.waveLength*4)*2,8);r.phase<-Math.PI*2;)r.phase+=Math.PI*2;for(;r.phase>0;)r.phase-=Math.PI*2;var h=r.phase/Math.PI/2*r.waveLength,d=r.cx-r.radius+h-r.radius*2;e.moveTo(d,r.waterLevel);for(var v=0,g=0;g<a;++g){var I=g%4,s=De(g*r.waveLength/4,I,r.waveLength,r.amplitude);e.bezierCurveTo(s[0][0]+d,-s[0][1]+r.waterLevel,s[1][0]+d,-s[1][1]+r.waterLevel,s[2][0]+d,-s[2][1]+r.waterLevel),g===a-1&&(v=s[2][0])}r.inverse?(e.lineTo(v+d,r.cy-r.radiusY),e.lineTo(d,r.cy-r.radiusY),e.lineTo(d,r.waterLevel)):(e.lineTo(v+d,r.cy+r.radiusY),e.lineTo(d,r.cy+r.radiusY),e.lineTo(d,r.waterLevel)),e.closePath()}});function De(e,r,a,h){return r===0?[[e+1/2*a/Math.PI/2,h/2],[e+1/2*a/Math.PI,h],[e+a/4,h]]:r===1?[[e+1/2*a/Math.PI/2*(Math.PI-2),h],[e+1/2*a/Math.PI/2*(Math.PI-1),h/2],[e+a/4,0]]:r===2?[[e+1/2*a/Math.PI/2,-h/2],[e+1/2*a/Math.PI,-h],[e+a/4,-h]]:[[e+1/2*a/Math.PI/2*(Math.PI-2),-h],[e+1/2*a/Math.PI/2*(Math.PI-1),-h/2],[e+a/4,0]]}var M=ye;function ae(e){return e&&e.indexOf("path://")===0}ue({type:"liquidFill",render:function(e,r,a){var h=this,d=this.group;d.removeAll();var v=e.getData(),g=v.getItemModel(0),I=g.get("center"),s=g.get("radius"),O=a.getWidth(),_=a.getHeight(),q=Math.min(O,_),R=0,D=0,U=e.get("outline.show");U&&(R=e.get("outline.borderDistance"),D=M(e.get("outline.itemStyle.borderWidth"),q));var C=M(I[0],O),x=M(I[1],_),L,T,W,b=!1,w=e.get("shape");if(w==="container"?(b=!0,L=[O/2,_/2],T=[L[0]-D/2,L[1]-D/2],W=[M(R,O),M(R,_)],s=[Math.max(T[0]-W[0],0),Math.max(T[1]-W[1],0)]):(L=M(s,q)/2,T=L-D/2,W=M(R,q),s=Math.max(T-W,0)),U){var re=V();re.style.lineWidth=D,d.add(V())}var ie=b?0:C-s,le=b?0:x-s,k=null;d.add(ne());var F=this._data,N=[];v.diff(F).add(function(t){var i=Z(t,!1),l=i.shape.waterLevel;i.shape.waterLevel=b?_/2:s,fe(i,{shape:{waterLevel:l}},e),i.z2=2,j(t,i,null),d.add(i),v.setItemGraphicEl(t,i),N.push(i)}).update(function(t,i){for(var l=F.getItemGraphicEl(i),c=Z(t,!1,l),o={},n=["amplitude","cx","cy","phase","radius","radiusY","waterLevel","waveLength"],f=0;f<n.length;++f){var u=n[f];c.shape.hasOwnProperty(u)&&(o[u]=c.shape[u])}for(var y={},p=["fill","opacity","shadowBlur","shadowColor"],f=0;f<p.length;++f){var u=p[f];c.style.hasOwnProperty(u)&&(y[u]=c.style[u])}b&&(o.radiusY=_/2),G(l,{shape:o,x:c.x,y:c.y},e),e.isUniversalTransitionEnabled&&e.isUniversalTransitionEnabled()?G(l,{style:y},e):l.useStyle(y);var m=l.getClipPath(),P=c.getClipPath();l.setClipPath(c.getClipPath()),l.shape.inverse=c.inverse,m&&P&&h._shape===w&&!ae(w)&&G(P,{shape:m.shape},e,{isFrom:!0}),j(t,l,l),d.add(l),v.setItemGraphicEl(t,l),N.push(l)}).remove(function(t){var i=F.getItemGraphicEl(t);d.remove(i)}).execute(),g.get("label.show")&&d.add(oe(N)),this._shape=w,this._data=v;function A(t,i){if(w)if(ae(w)){var l=ee(w.slice(7),{}),c=l.getBoundingRect(),o=c.width,n=c.height;o>n?(n=t*2/o*n,o=t*2):(o=t*2/n*o,n=t*2);var f=i?0:C-o/2,u=i?0:x-n/2;return l=ee(w.slice(7),{},new me(f,u,o,n)),i&&(l.x=-o/2,l.y=-n/2),l}else if(b){var y=i?-t[0]:C-t[0],p=i?-t[1]:x-t[1];return te("rect",y,p,t[0]*2,t[1]*2)}else{var y=i?-t:C-t,p=i?-t:x-t;return w==="pin"?p+=t:w==="arrow"&&(p-=t),te(w,y,p,t*2,t*2)}return new we({shape:{cx:i?0:C,cy:i?0:x,r:t}})}function V(){var t=A(L);return t.style.fill=null,t.setStyle(e.getModel("outline.itemStyle").getItemStyle()),t}function ne(){var t=A(s);t.setStyle(e.getModel("backgroundStyle").getItemStyle()),t.style.fill=null,t.z2=5;var i=A(s);i.setStyle(e.getModel("backgroundStyle").getItemStyle()),i.style.stroke=null;var l=new J;return l.add(t),l.add(i),l}function Z(t,i,l){var c=b?s[0]:s,o=b?_/2:s,n=v.getItemModel(t),f=n.getModel("itemStyle"),u=n.get("phase"),y=M(n.get("amplitude"),o*2),p=M(n.get("waveLength"),c*2),m=v.get("value",t),P=o-m*o*2;u=l?l.shape.phase:u==="auto"?t*Math.PI/4:u;var S=f.getItemStyle();if(!S.fill){var B=e.get("color"),Y=t%B.length;S.fill=B[Y]}var se=c*2,E=new Le({shape:{waveLength:p,radius:c,radiusY:o,cx:se,cy:0,waterLevel:P,amplitude:y,phase:u,inverse:i},style:S,x:C,y:x});E.shape._waterLevel=P;var H=n.getModel("emphasis.itemStyle").getItemStyle();H.lineWidth=0,E.ensureState("emphasis").style=H,pe(E);var X=A(s,!0);return X.setStyle({fill:"white"}),E.setClipPath(X),E}function j(t,i,l){var c=v.getItemModel(t),o=c.get("period"),n=c.get("direction"),f=v.get("value",t),u=c.get("phase");u=l?l.shape.phase:u==="auto"?t*Math.PI/4:u;var y=function(P){var S=v.count();return S===0?P:P*(.2+(S-t)/S*.8)},p=0;o==="auto"?p=y(5e3):p=typeof o=="function"?o(f,t):o;var m=0;n==="right"||n==null?m=Math.PI:n==="left"?m=-Math.PI:n==="none"?m=0:console.error("Illegal direction value for liquid fill."),n!=="none"&&c.get("waveAnimation")&&i.animate("shape",!0).when(0,{phase:u}).when(p/2,{phase:m+u}).when(p,{phase:m*2+u}).during(function(){k&&k.dirty(!0)}).start()}function oe(t){var i=g.getModel("label");function l(){var S=e.getFormattedLabel(0,"normal"),B=v.get("value",0)*100,Y=v.getName(0)||e.name;return isNaN(B)||(Y=B.toFixed(0)+"%"),S==null?Y:S}var c={z2:10,shape:{x:ie,y:le,width:(b?s[0]:s)*2,height:(b?s[1]:s)*2},style:{fill:"transparent"},textConfig:{position:i.get("position")||"inside"},silent:!0},o={style:{text:l(),textAlign:i.get("align"),textVerticalAlign:i.get("baseline")}};Object.assign(o.style,Se(i));var n=new K(c),f=new K(c);f.disableLabelAnimation=!0,n.disableLabelAnimation=!0;var u=new Q(o),y=new Q(o);n.setTextContent(u),f.setTextContent(y);var p=i.get("insideColor");y.style.fill=p;var m=new J;m.add(n),m.add(f);var P=A(s,!0);return k=new ge({shape:{paths:t},x:C,y:x}),k.setClipPath(P),f.setClipPath(k),m}},dispose:function(){}});const Te={class:"chart-container",style:{position:"relative"}},We={__name:"WaterLevelChart",props:{data:{type:Number,required:!0,default:0},width:{type:[Number,String],default:200},height:{type:[Number,String],default:200},circle:{type:Object}},emits:["clickItem"],setup(e,{emit:r}){const a=e,h=()=>({series:[{type:"liquidFill",radius:"80%",data:[a.data/100],backgroundStyle:{borderWidth:0,borderColor:"transparent",color:"transparent"},outline:{show:!0,borderDistance:2,itemStyle:{borderWidth:8,borderColor:{type:"linear",x:0,y:0,x2:2,y2:-1,colorStops:[{offset:0,color:"#01AA21"},{offset:1,color:"#00FFA5"}]}}},shape:"circle",color:[{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(104, 228, 184, 0.4)"},{offset:1,color:"rgba(0, 186, 36, 0.4)"}],global:!1}],label:{show:!0,position:["50%","50%"],fontSize:18,fontWeight:500,color:"#fff"}}]}),d=()=>{const g=document.getElementById("water-level-chart");let I=be(g);I==null&&(I=Pe(g)),I.setOption(h())},v=()=>{let g=h();r("clickItem",g.series[0])};return Me(()=>a.data,()=>{d()},{deep:!0}),_e(()=>{d()}),(g,I)=>(Ce(),xe("div",Te,[z("div",{id:"water-level-chart",class:"water-level-chart",style:$(`width: ${typeof a.width=="number"?a.width+"px":a.width}; height: ${typeof a.height=="number"?a.height+"px":a.height};`)},null,4),z("div",{class:"circle-layout",style:$(`top: ${typeof a.circle.top=="number"?a.circle.top+"px":a.circle.top}; left:  ${typeof a.circle.left=="number"?a.circle.left+"px":a.circle.left};`)},[z("div",{class:"circle-1",style:$(`width: ${typeof a.circle.width=="number"?a.circle.width+"px":a.circle.width}; height: ${typeof a.circle.height=="number"?a.circle.height+"px":a.circle.height};`)},null,4),z("div",{class:"circle-0",style:$(`width: ${typeof a.circle.width=="number"?a.circle.width+"px":a.circle.width}; height: ${typeof a.circle.height=="number"?a.circle.height+"px":a.circle.height}; cursor: pointer;`),onClick:v},null,4)],4)]))}},ze=Ie(We,[["__scopeId","data-v-ab200679"]]);export{ze as W};
//# sourceMappingURL=WaterLevelChart-2133d837.js.map