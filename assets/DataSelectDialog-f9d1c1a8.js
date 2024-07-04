import{d as he,k as f,e as fe,r as pe,w as T,u as ye,o as ve,al as N,Z as u,a9 as v,aa as x,$ as p,a6 as B,f as _,af as ke,B as ge,a5 as xe,ac as k,_ as V,ad as Z,E as U,aG as _e,aH as me}from"./vue-71d1abb3.js";import{D as be}from"./Dialog-0a006d82.js";import{I as m,_ as we}from"./index.js";import{a2 as J,a0 as P}from"./antd-15ac76ed.js";const Ie=h=>(_e("data-v-7d38a30b"),h=h(),me(),h),Ce={class:"category-tree"},De={class:"category-search-box",style:{position:"relative"}},Ee=Ie(()=>p("span",{class:"search-title",style:{}},"搜索",-1)),Ne={class:"search-icon",style:{left:"300px"}},ze={class:"search-icon",style:{left:"340px"}},Se={class:"employee-table"},Be={class:"employee-content"},Me={class:"component-wrap"},$e={key:0},Ke={key:1,class:"sort-cell"},Ve={key:0,class:"editable-cell-input-wrapper"},Fe={key:2},Re=he({__name:"DataSelectDialog",props:{visible:Boolean,title:String,width:{type:Number,default:700},height:{type:Number,default:500},value:{type:Array,default:[]},tdata:{type:Array},tfields:{type:Object,default:{key:"id",title:"title",dept:"dept",postion:"postion"}},ticons:{type:Object,default:{parent:"ant-design:down-outlined",middle:"mingcute:department-line",leaf:"gridicons:multiple-users"}},message:{type:Object,default:{none:"当前没有被选数据，无法删除！",double:"该节点已经被选中！",delete:"请您确认是否删除所有勾选节点？"}},extraFooterBtn:{type:String,default:""},max:{type:Number,default:99},scolumns:{type:Array,default:[{title:"名称",dataIndex:"title",key:"title",fixed:!0,width:80},{title:"公司",dataIndex:"company",key:"company",fixed:!1,width:200},{title:"部门",dataIndex:"dept",key:"dept",fixed:!1,width:150},{title:"岗位",dataIndex:"postion",key:"postion",fixed:!1,width:150}]},rightColumns:{type:Array,default:[]},isEdit:{type:Boolean,default:!0}},emits:["update:visible","update:value","cancel","confirm","close","extra"],setup(h,{emit:z}){const e=h,M=f(!1),C=f([]),b=f(""),S=f(null),w=f({}),I=f([]),c=f([]),F=f(),$=f([]),O=f([]);f();const Q=()=>{z("cancel")},W=()=>{var t;if(e.max&&((t=c.value)==null?void 0:t.length)>e.max){J.warning(`最多选择${e.max}个！`);return}const l=e==null?void 0:e.tfields,n=le(c.value,l);z("confirm",n,c.value)},X=()=>{z("cancel")},Y=()=>{z("extra")},A=l=>{M.value=l,z("update:visible",!1)},j=l=>!!F.value.get(l),ee=()=>{c.value&&c.value.length>0?P.confirm({title:e.message.delete,wrapClassName:"dialog-modal-confirm",zIndex:10010,onOk(){c.value=[],w.value.checked=[],I.value=[]}}):P.warning({wrapClassName:"dialog-modal-warning",zIndex:10010,title:e.message.none})},te=(l,n)=>{c.value=c.value.filter((s,i)=>i!==n);let t=K(C.value,l[[e.tfields.key]])[0];w.value.checked=w.value.checked.filter((s,i)=>s!==t.key),I.value=I.value.filter((s,i)=>s.key!==t.key)},R=l=>{const n={};for(const t in l)n[l[t]]=t;return n},le=(l,n)=>{const t=R(n);return l.map(s=>{const i={};for(const a in s)a in t&&(t[a]=="title"||t[a]=="dept"||t[a]=="postion"?(i[t[a]]=s[a],i[a]=s[a]):t[a]=="key"&&(i[t[a]]=parseInt(Math.random()*100)+"@"+s[a],i[a]=s[a]));return i})},L=(l,n,t="top",s)=>{const i=R(n);if(l.map(a=>{const r={};for(const o in a)o in i&&(i[o]=="title"||i[o]=="dept"||i[o]=="postion"?(r[i[o]]=a[o],r[o]=a[o]):i[o]=="id"?(r[o]=parseInt(Math.random()*100)+"@"+a[o],r[o]=a[o]):i[o]=="key"&&(r[i[o]]=parseInt(Math.random()*100)+"@"+a[o],r[o]=a[o])),r[o]=a[o],s&&(r.parent_node=s);F.value.set(a[e.tfields.key],a),$.value.push(r),a.children&&a.children.length>0&&L(a.children,n,"none",a)}),t=="top"){const a=$.value.filter((r,o,d)=>d.findIndex(y=>y[e.tfields.key]===r[e.tfields.key]&&y[e.tfields.title]===r[e.tfields.title])===o);$.value=a}},q=(l,n)=>{const t=R(n);return l.map(s=>{const i={};for(const a in s)a in t?t[a]=="title"||t[a]=="dept"||t[a]=="postion"?(i[t[a]]=s[a],i[a]=s[a]):(t[a]=="id"||t[a]=="key")&&(i[t[a]]=parseInt(Math.random()*100)+"@"+s[a],i[a]=s[a]):i[a]=s[a];return s.children&&s.children.length>0&&(i.children=q(s.children,n)),i})},ae=(l,n)=>{const t=new Map;return l.forEach(s=>{const i=s[n.key];t.set(i,s)}),t},G=()=>{const l=b.value?b.value.trim():"",n=$.value.filter(t=>!t.disabled&&t[e.tfields.title].includes(l));O.value=n,l.length===0&&(S.value=null)},ne=(l,n)=>({onclick:s=>{const i=s.currentTarget;i.parentElement.querySelectorAll(".ant-table-row").forEach(r=>{r.classList.remove("selected")}),i.classList.add("selected"),S.value=l}}),se=l=>{l.key==="Enter"&&l.preventDefault()},ie=(l,n)=>{I.value=n.checkedNodes},oe=()=>{var l;if((l=S.value)!=null&&l.key){let n=!0;if(c.value.forEach(t=>{S.value[e.tfields.key]===t[e.tfields.key]&&(n=!1,J.warning(e.message.double))}),n){let t=K(C.value,[S.value[e.tfields.key]])[0];w.value.checked.push(t.key),I.value.push(t)}}c.value=I.value},ce=fe(()=>e.isEdit?e.rightColumns.length?e.rightColumns:[{title:"序号",dataIndex:"index",key:"index",width:60},{title:"名称",dataIndex:e.tfields.title,key:e.tfields.title},{title:"排序",dataIndex:"sort",key:"sort",width:80},{title:"操作",dataIndex:"action",key:"action",width:80}]:e.rightColumns.filter(l=>l.dataIndex!=="action"&&l.dataIndex!=="sort"));f([]);function de(l){let n=[];return l!=null&&l.length&&l.forEach(t=>{n.push(t[e.tfields.key])}),n}function H(l,n){let t=[];return n!=null&&n.length&&l.forEach(s=>{var i;n.includes(s[e.tfields.key])&&t.push(s.key),(i=s.children)!=null&&i.length&&t.push(...H(s.children,n))}),t}function K(l,n){let t=[];return n!=null&&n.length&&l.forEach(s=>{var i;n.includes(s[e.tfields.key])&&t.push(s),(i=s.children)!=null&&i.length&&t.push(...K(s.children,n))}),t}const D=pe({}),re=(l,n)=>{D[l[e.tfields.key]]={index:n+1}},ue=(l,n)=>{let t=[...c.value];t.splice(D[l[e.tfields.key]].index-1,0,t.splice(n,1)[0]),c.value=t,delete D[l[e.tfields.key]]};return T(()=>e.value,l=>{(c.value&&l&&c.value.length!=l.length||!c.value&&l)&&(c.value=l)}),T(()=>e.visible,l=>{M.value=l,l?c.value&&e.value&&c.value.length!=e.value.length&&(c.value=e.value):b.value=""},{deep:!0}),T(()=>e.tdata,l=>{const n=e==null?void 0:e.tfields,t=ye(e.tdata);C.value=q(t,n),F.value=ae(t,n),L(t,n,"top",null);let s=de(e.value);w.value.checked=H(C.value,s),I.value=K(C.value,s)}),ve(()=>{M.value=e.visible,c.value=e.value}),(l,n)=>{const t=N("a-input-search"),s=N("a-tree"),i=N("a-table"),a=N("a-input-number"),r=N("a-select"),o=N("a-button");return u(),v(be,{title:h.title,visible:M.value,"onUpdate:visible":A,width:e.width,height:e.height,onClose:X},{default:x(()=>[p("div",{class:"dialog-content",style:B(`height: calc(${e.height}px - 90px)`)},[p("div",Ce,[p("div",{class:"category-content",style:B(`height: calc(${e.height}px - 130px)`)},[p("div",De,[Ee,_(t,{value:b.value,"onUpdate:value":n[0]||(n[0]=d=>b.value=d),class:"search-input",placeholder:"请输入搜索内容","enter-button":"",onChange:G,onSearch:G,onKeydown:ke(ge(se,["prevent"]),["enter"])},null,8,["value","onKeydown"]),p("span",Ne,[_(m,{icon:"mdi:arrow-up",size:"22",class:"rotate-left",onClick:oe})]),p("span",ze,[_(m,{icon:"material-symbols:delete-outline",size:"22",onClick:ee})])]),p("div",{class:"tree-value",style:B(`height: calc(${e.height}px - 200px);`)},[b.value.length<=0?(u(),v(s,{key:0,"tree-data":C.value,"show-icon":"","default-expand-all":!1,checkable:"",checkStrictly:"",selectable:!1,checkedKeys:w.value,"onUpdate:checkedKeys":n[1]||(n[1]=d=>w.value=d),onCheck:ie},{switcherIcon:x(({switcherCls:d})=>[_(m,{icon:e.ticons.parent,size:"14",class:xe(d)},null,8,["icon","class"])]),icon:x(({key:d,isLeaf:g})=>[g&&!j(d)?(u(),v(m,{key:0,icon:e.ticons.leaf,size:"14"},null,8,["icon"])):k("",!0),!g&&!j(d)?(u(),v(m,{key:1,icon:e.ticons.middle,size:"14"},null,8,["icon"])):k("",!0)]),_:1},8,["tree-data","checkedKeys"])):k("",!0),b.value.length>0?(u(),v(i,{key:1,size:"small",columns:h.scolumns,"data-source":O.value,pagination:!1,scroll:{x:(e.width-30)/2,y:e.height-220},style:{"overflow-x":"hidden"},customRow:ne},null,8,["columns","data-source","scroll"])):k("",!0)],4)],4)]),p("div",Se,[p("div",Be,[p("div",{position:"center",class:"layout-content",style:B(`height: calc(${e.height}px - 120px);`)},[p("div",Me,[_(i,{size:"small",columns:ce.value,"data-source":c.value,pagination:!1,scroll:{y:e.height-190},style:B(`height: calc(${e.height}px - 130px);overflow-x: hidden;`)},{bodyCell:x(({record:d,index:g,column:y})=>[y.dataIndex==="index"?(u(),V("span",$e,Z(g+1),1)):h.isEdit&&y.dataIndex==="sort"?(u(),V("div",Ke,[D[d[e.tfields.key]]?(u(),V("div",Ve,[_(a,{value:D[d[e.tfields.key]].index,"onUpdate:value":E=>D[d[e.tfields.key]].index=E,min:1,max:c.value.length,size:"small"},null,8,["value","onUpdate:value","max"]),_(m,{icon:"ant-design:check-outlined",size:"12",style:{"margin-left":"4px"},onClick:E=>ue(d,g)},null,8,["onClick"])])):(u(),v(m,{key:1,icon:"ant-design:drag-outlined",size:"12",onClick:E=>re(d,g)},null,8,["onClick"]))])):h.isEdit&&y.dataIndex==="action"?(u(),V("a",Fe,[_(m,{icon:"ant-design:delete-filled",size:"12",color:"#ED6F6F",onClick:E=>te(d,g)},null,8,["onClick"])])):k("",!0),y.type==="select"?(u(),v(r,{key:3,size:"small",style:{width:"100%"},value:d[y.dataIndex],"onUpdate:value":E=>d[y.dataIndex]=E,"allow-clear":"",options:y.selectOptions},null,8,["value","onUpdate:value","options"])):k("",!0)]),_:1},8,["columns","data-source","scroll","style"])])],4)])])],4)]),footer:x(()=>[h.extraFooterBtn?(u(),v(o,{key:0,class:"btn-margin",type:"primary",onClick:Y},{default:x(()=>[U(Z(h.extraFooterBtn),1)]),_:1})):k("",!0),h.isEdit?(u(),v(o,{key:1,class:"btn-margin",onClick:Q},{default:x(()=>[U("取消")]),_:1})):k("",!0),h.isEdit?(u(),v(o,{key:2,class:"btn-margin",type:"primary",onClick:W},{default:x(()=>[U("确定")]),_:1})):k("",!0)]),_:1},8,["title","visible","width","height"])}}});const Le=we(Re,[["__scopeId","data-v-7d38a30b"]]);export{Le as D};
//# sourceMappingURL=DataSelectDialog-f9d1c1a8.js.map