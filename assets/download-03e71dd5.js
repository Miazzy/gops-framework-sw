import{s as a}from"./index.js";function c({url:e,target:t="_blank",fileName:d}){const o=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,r=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return console.error("Your browser does not support download!"),!1;if(o||r){const n=document.createElement("a");if(n.href=e,n.target=t,n.download!==void 0&&(n.download=d||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const i=document.createEvent("MouseEvents");return i.initEvent("click",!0,!0),n.dispatchEvent(i),!0}}return e.indexOf("?")===-1&&(e+="?download"),a(e,{target:t}),!0}const f=(e,t)=>{if(e){const d=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),o=document.createElement("a"),r=window.URL.createObjectURL(d);o.href=r,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(r)}};export{c as d,f as e};
//# sourceMappingURL=download-03e71dd5.js.map