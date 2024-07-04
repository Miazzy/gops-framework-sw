import{B as J}from"./index-3801a970.js";import{d as Z,k as i,p as f,w as g,e as q,r as F,o as G,al as T,Z as S,_ as x,f as w,aa as u,$ as B,ad as h,E as L,a9 as Q,u as K,a5 as U,a6 as X,aK as Y,J as I}from"./vue-71d1abb3.js";import{_ as ee}from"./index.js";const te=["title"],ae=["onMouseenter"],le=["onMouseenter"],se=Z({__name:"CommonTree",props:{title:{type:String},value:{type:Array},className:{type:String},isShowOperationBtns:{type:Boolean,default:!1},toolbar:{type:Boolean,default:!0},search:{type:Boolean,default:!0},canEdit:{type:Boolean,default:!0},canAdd:{type:Boolean,default:!0},canDelete:{type:Boolean,default:!0},checkable:{type:Boolean,default:!1},simple:{type:Boolean,default:!1},fieldNames:{type:Object,default:new Object},expandedKeys:{type:Array,default:[]},selectedKeys:{type:Array,default:[]},treeStyle:{type:String,default:"margin: 10px 0 10px 10px"}},emits:["select","selected","edit","add","delete","refresh","check"],setup(t,{expose:C,emit:c}){const a=t,p=i([]),n=i(""),y=i([]),m=i([]),k=i(null);function s(){const e=K(k);if(!e)throw new Error("tree is null!");return e}function _(){return s().getSelectedNode(n.value)}function A(e){return e?Y(e)?I(e.__v_raw):e:null}function E(e){let l={};if(e&&e.length>0){n.value=e[0];const r=s().getSelectedNode(n.value);l=A(r)}else n.value="";c("select",l)}function D(e,l){c("check",l.checkedNodes)}function O(){const e=s().getSelectedNode(n.value)||null;c("edit",e)}f("handleTreeEdit",O);function M(){const e=s().getSelectedNode(n.value)||null;c("add",e)}f("handleTreeAdd",M);function R(){const e=s().getSelectedNode(n.value)||null;c("delete",e)}f("handleTreeDelete",R);function W(){c("refresh")}f("handleTreeRefresh",W),g(()=>a.value,e=>{e&&(p.value=e)},{deep:!0});const $=q(()=>a.search?"h-[calc(100%-82px)]":"h-[calc(100%-48px)]");function z(){s().checkAll(!0)}function P(){s().checkAll(!1)}function V(){s().handleBadge()}function j(){let e=s().getCheckedKeys(),l=[];return e.forEach(r=>{l.push(s().getSelectedNode(r))}),l}g(()=>a.selectedKeys,e=>{n.value=e[0],y.value=a.selectedKeys},{deep:!0}),g(()=>a.expandedKeys,()=>{m.value=a.expandedKeys},{deep:!0});const d=F({isTooltipShow:!1}),N=(e,l)=>{Object.assign(d,e),d.isTooltipShow=l.target.scrollWidth>l.target.offsetWidth},b=()=>{d.isTooltipShow=!1};return G(()=>{p.value=a.value,y.value=a.selectedKeys,m.value=a.expandedKeys}),C({getSelectedTreeNode:_,checkAll:z,getCheckedKeys:j,loadBadge:V,cancelCheck:P}),(e,l)=>{const r=T("a-badge"),H=T("a-tooltip");return S(),x("div",{class:U(["overflow-hidden bg-white",e.$attrs.class]),style:X(a.treeStyle)},[w(K(J),{title:t.title,toolbar:t.toolbar,search:a.search,canEdit:a.canEdit,canAdd:a.canAdd,canDelete:a.canDelete,treeWrapperClassName:`${$.value} overflow-auto`,clickRowToExpand:!1,treeData:p.value,fieldNames:t.fieldNames,onSelect:E,isShowOperationBtns:t.isShowOperationBtns,ref_key:"basicTreeRef",ref:k,class:"fit-basic-tree",checkable:t.checkable,simple:t.simple,onCheck:D,expandedKeys:m.value,selectedKeys:y.value,expandOnSearch:!0},{headerTitle:u(()=>[B("span",{class:"vben-basic-title",title:t.title},h(t.title),9,te)]),title:u(o=>[w(H,{visible:o[t.fieldNames.key||"key"]===d[t.fieldNames.key||"key"]&&d.isTooltipShow},{title:u(()=>[L(h(o[t.fieldNames.title||"title"]),1)]),default:u(()=>[o.badge?(S(),Q(r,{key:0,count:o.badge,offset:[16,0],numberStyle:{transform:"scale(0.8)"}},{default:u(()=>[B("span",{class:"common-tree-node-text",style:{"line-height":"28px"},onMouseenter:v=>N(o,v),onMouseleave:b},h(o[t.fieldNames.title||"title"]),41,ae)]),_:2},1032,["count","numberStyle"])):(S(),x("span",{key:1,class:"common-tree-node-text",onMouseenter:v=>N(o,v),onMouseleave:b},h(o[t.fieldNames.title||"title"]),41,le))]),_:2},1032,["visible"])]),_:1},8,["title","toolbar","search","canEdit","canAdd","canDelete","treeWrapperClassName","treeData","fieldNames","isShowOperationBtns","checkable","simple","expandedKeys","selectedKeys"])],6)}}});const de=ee(se,[["__scopeId","data-v-3597be7e"]]);export{de as C};
//# sourceMappingURL=CommonTree-c4ed7838.js.map