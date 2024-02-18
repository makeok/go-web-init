import"./base-bca4072a.js";import{E as A}from"./card-86ca6f7c.js";import{D as F,E as j,a as L}from"./tag-3d5525ac.js";import"./scrollbar-d8ba084a.js";import"./popper-0dc31dc9.js";import{E as S}from"./popover-a65edf18.js";import{E as q}from"./link-020a5e84.js";/* empty css             */import{E as M}from"./overlay-65e5b564.js";import{E as O}from"./button-dab0515e.js";import{E as R,a as P}from"./form-item-d5bd7b56.js";import{E as G}from"./input-1f089c3a.js";import{r as w,E as b}from"./index-1531c9b4.js";import{U as H}from"./User-eea3327a.js";import{E as J}from"./Edit-4f3134bf.js";import{E as K}from"./index-aa6ba756.js";import{r as n,p as Q,z as W,j as X,o as Y,a as Z,f as r,c as e,w as l,u as p,h as c,t as ee}from"./index-c09751bd.js";import{S as le}from"./Search-e2cb8b34.js";import"./error-78e43d3e.js";import"./isNil-c75b1b34.js";import"./index-a30895c1.js";import"./focus-trap-563a4cd8.js";import"./vnode-7069167d.js";import"./castArray-c808c6e2.js";import"./axios-a342f982.js";const te={class:"w-full flex justify-center"},oe={class:"flex flex-col w-full h-full px-[4rem] py-[2rem] space-y-[1rem]"},ae=r("span",{class:"text-gray-400"},"The user email address",-1),se={class:"dialog-footer"},ne={class:"flex overflow-hidden rounded-md shadow-md border"},re={class:"flex w-full h-[5rem] items-center"},ie=r("span",{class:"m-[0.75rem] text-2xl font-600"},"Users",-1),me={class:"flex"},de=r("p",null,"Are you sure to delete this user?",-1),ue={class:"my-[0.5rem]"},Le={__name:"User",setup(pe){const i=n([]);n(!1);const u=n(!1),f=n(-1);n({name:"",image:"",cmd:[]});const s=n({});n();const C=n(),_=n(""),U=Q(()=>i.value.filter(a=>!_.value||a.name.toLowerCase().includes(_.value.toLowerCase())));W(()=>{w.get("/api/v1/users").then(a=>{i.value=a.data.data})});const k=a=>`/users/${a}`,y=a=>{s.value=Object.assign({},a),u.value=!0},V=()=>{const a=p(C);a&&a.validate(t=>{t?w.put("/api/v1/users/"+s.value.id,s.value).then(m=>{b.success("Update success");const v=i.value.findIndex(h=>h.id===s.value.id);i.value[v]=s.value,u.value=!1}):b.error("Input invalid")})},g=a=>{w.delete("/api/v1/users/"+a.id).then(()=>{b.success("Delete success");const t=i.value.findIndex(m=>m.id===a.id);i.value.splice(t,1),f.value=-1})};return(a,t)=>{const m=G,v=R,h=P,d=O,$=M,z=K,D=q,I=X("router-link"),E=j,B=S,N=L,T=A;return Y(),Z("div",te,[r("div",oe,[e($,{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=o=>u.value=o),top:"5vh",title:"Update User",width:"50%"},{footer:l(()=>[r("span",se,[e(d,{type:"primary",onClick:V},{default:l(()=>[c("Confirm")]),_:1}),e(d,{onClick:t[2]||(t[2]=o=>u.value=!1)},{default:l(()=>[c("Cancel")]),_:1})])]),default:l(()=>[e(h,{ref_key:"updateFormRef",ref:C,model:s.value,"label-position":"top","label-width":"auto"},{default:l(()=>[e(v,{label:"Name",prop:"name"},{default:l(()=>[e(m,{modelValue:s.value.name,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value.name=o),disabled:""},null,8,["modelValue"])]),_:1}),e(v,{label:"Email",prop:"email",required:""},{default:l(()=>[e(m,{modelValue:s.value.email,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value.email=o)},null,8,["modelValue"]),ae]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),r("div",ne,[r("div",re,[e(p(H),{class:"ml-[1rem]",theme:"filled",size:"42",fill:"#94A3B8"}),ie])]),e(T,{class:"h-max"},{header:l(()=>[r("div",me,[e(m,{modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=o=>_.value=o),placeholder:"Type to search"},{prefix:l(()=>[e(z,null,{default:l(()=>[e(p(le))]),_:1})]),_:1},8,["modelValue"])])]),default:l(()=>[e(N,{data:U.value,class:"w-full max-h-full"},{default:l(()=>[e(E,{prop:"name",label:"Name"},{default:l(o=>[e(I,{to:k(o.row.id)},{default:l(()=>[e(D,{type:"primary"},{default:l(()=>[c(ee(o.row.name),1)]),_:2},1024)]),_:2},1032,["to"])]),_:1}),e(E,{prop:"email",label:"Email"}),e(E,{prop:"createdAt",label:"CreateAt","min-width":"120px"}),e(E,{label:"Operation","min-width":"120px"},{default:l(o=>[e(d,{size:"small",circle:"",onClick:x=>y(o.row),icon:p(J)},null,8,["onClick","icon"]),e(B,{visible:f.value==o.$index,placement:"top",width:180},{reference:l(()=>[e(d,{size:"small",type:"danger",onClick:x=>f.value=o.$index,icon:p(F),circle:"",class:"wl-[1rem]"},null,8,["onClick","icon"])]),default:l(()=>[de,r("div",ue,[e(d,{size:"small",text:"",onClick:t[5]||(t[5]=x=>f.value=-1)},{default:l(()=>[c("cancel")]),_:1}),e(d,{size:"small",type:"danger",onClick:x=>g(o.row)},{default:l(()=>[c("confirm")]),_:2},1032,["onClick"])])]),_:2},1032,["visible"])]),_:1})]),_:1},8,["data"])]),_:1})])])}}};export{Le as default};
