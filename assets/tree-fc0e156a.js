const f={children:"children",label:"name",value:"id",isLeaf:"leaf"},u=(t,i,d,l)=>{if(!Array.isArray(t))return console.warn("data must be an array"),[];const e={id:i||"id",parentId:d||"parentId",childrenList:l||"children"},s={},a={},o=[];for(const n of t){const r=n[e.parentId];s[r]==null&&(s[r]=[]),a[n[e.id]]=n,s[r].push(n)}for(const n of t){const r=n[e.parentId];a[r]==null&&o.push(n)}for(const n of o)c(n);function c(n){if(s[n[e.id]]!==null&&(n[e.childrenList]=s[n[e.id]]),n[e.childrenList])for(const r of n[e.childrenList])c(r)}return o},h=(t,i=300)=>{const d=t.value;t.value=[],setTimeout(()=>{t.value=d},i)};export{f as d,u as h,h as r};
//# sourceMappingURL=tree-fc0e156a.js.map