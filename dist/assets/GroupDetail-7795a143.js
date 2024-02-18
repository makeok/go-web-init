import"./base-bca4072a.js";import{D as q,E as G,a as O}from"./tag-3d5525ac.js";import"./scrollbar-d8ba084a.js";import"./popper-0dc31dc9.js";import{E as P}from"./popover-a65edf18.js";import{E as M}from"./overlay-65e5b564.js";import{E as L,a as H}from"./form-item-d5bd7b56.js";import{E as J}from"./input-1f089c3a.js";import{E as K,a as Q}from"./select-2d479874.js";import{E as W}from"./button-dab0515e.js";import{E as X}from"./card-86ca6f7c.js";import{E as Y,a as Z}from"./descriptions-item-a8fee4d3.js";import{D as ee,r as i,z as le,o as x,a as $,f as n,c as e,w as l,u as E,h as r,t as f,g as te,v as oe,F as ae,b as se,d as re}from"./index-c09751bd.js";import{r as g,E as C}from"./index-1531c9b4.js";import{E as ne}from"./index-1ed85de7.js";import{P as ie}from"./Peoples-85961551.js";import{U as ue}from"./User-eea3327a.js";import"./error-78e43d3e.js";import"./index-aa6ba756.js";import"./isNil-c75b1b34.js";import"./index-a30895c1.js";import"./focus-trap-563a4cd8.js";import"./vnode-7069167d.js";import"./castArray-c808c6e2.js";import"./axios-a342f982.js";const me={class:"flex w-full justify-center"},de={class:"flex flex-col w-full px-[4rem] py-[2rem] h-max justify-center"},ce={class:"flex w-full items-center"},pe=n("span",{class:"m-[0.75rem] text-2xl font-600"},"Group Info",-1),_e={class:"flex my-[0.5rem] justify-between"},fe=n("span",{class:"mr-[10rem] text-bold"},"Group Users",-1),ve=n("span",{class:"text-gray-400"},"The user name",-1),be=n("span",{class:"text-gray-400"},"The user role in this group",-1),Ee={class:"dialog-footer"},ge=n("p",null,"Are you sure to delete this user from group?",-1),he={class:"my-[0.5rem]"},Ke={__name:"GroupDetail",setup(xe){const c=ee().params.id,D=i([{value:"admin",label:"Admin"},{value:"edit",label:"Edit"},{value:"view",label:"View"}]),p=i(),u=i({name:"",describe:""}),v=i(),_=i(!1),b=i(-1),m=i({name:"",describe:""}),w=i();le(()=>{c&&(g.get(`/api/v1/groups/${c}`).then(a=>{u.value=a.data.data,u.value.creatorId>0?v.value="Customer":v.value="System"}),g.get(`/api/v1/groups/${c}/users`).then(a=>{p.value=a.data.data}))});const U=()=>{const a=E(w);a&&a.validate(t=>{if(t){let s=m.value;g.post(`/api/v1/groups/${c}/users`,s).then(()=>{C.success("Create success"),p.value.push(s),_.value=!1})}else C.error("Input invalid")})},I=a=>{g.delete(`/api/v1/groups/${c}/users?name=${a.name}&role=${a.role}`).then(()=>{C.success("Delete success");const t=p.value.findIndex(s=>s.name===a.name&&s.role===a.role);p.value.splice(t,1),b.value=-1})};return(a,t)=>{const s=Y,z=ne,A=Z,y=X,d=W,B=J,k=L,F=K,N=Q,R=H,T=M,h=G,S=P,j=O;return x(),$("div",me,[n("div",de,[e(y,{class:"w-full"},{header:l(()=>[n("div",ce,[e(E(ie),{class:"ml-[1rem]",theme:"filled",size:"42",fill:"#94A3B8"}),pe])]),default:l(()=>[e(A,{model:u.value,size:"large",column:1},{default:l(()=>[e(s,{label:"Name"},{default:l(()=>[r(f(u.value.name),1)]),_:1}),e(s,{label:"Describe"},{default:l(()=>[r(f(u.value.describe),1)]),_:1}),e(s,{label:"CreatorId"},{default:l(()=>[r(f(u.value.creatorId),1)]),_:1}),e(s,{label:"CreateAt"},{default:l(()=>[r(f(u.value.createdAt),1)]),_:1}),te(e(s,{label:"Remarks"},{default:l(()=>[e(z,{size:"small"},{default:l(()=>[r(f(v.value),1)]),_:1})]),_:1},512),[[oe,v.value]])]),_:1},8,["model"])]),_:1}),e(y,{class:"mt-[1rem]"},{default:l(()=>[n("div",_e,[fe,e(d,{plain:"",icon:E(ue),onClick:t[0]||(t[0]=o=>_.value=!0)},{default:l(()=>[r("AddUser")]),_:1},8,["icon"])]),e(T,{modelValue:_.value,"onUpdate:modelValue":t[4]||(t[4]=o=>_.value=o),top:"5vh",title:"Add User",width:"50%"},{footer:l(()=>[n("span",Ee,[e(d,{type:"primary",onClick:U},{default:l(()=>[r("Confirm")]),_:1}),e(d,{onClick:t[3]||(t[3]=o=>_.value=!1)},{default:l(()=>[r("Cancel")]),_:1})])]),default:l(()=>[e(R,{ref_key:"createFormRef",ref:w,model:m.value,"label-position":"top","label-width":"auto"},{default:l(()=>[e(k,{label:"Name",prop:"name",required:""},{default:l(()=>[e(B,{modelValue:m.value.name,"onUpdate:modelValue":t[1]||(t[1]=o=>m.value.name=o)},null,8,["modelValue"]),ve]),_:1}),e(k,{label:"Role",prop:"role",required:""},{default:l(()=>[e(N,{class:"w-full",modelValue:m.value.role,"onUpdate:modelValue":t[2]||(t[2]=o=>m.value.role=o)},{default:l(()=>[(x(!0),$(ae,null,se(D.value,o=>(x(),re(F,{label:o.label,value:o.value},null,8,["label","value"]))),256))]),_:1},8,["modelValue"]),be]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(j,{data:p.value},{default:l(()=>[e(h,{prop:"name",label:"Name"}),e(h,{prop:"role",label:"Role"}),e(h,{label:"Operation"},{default:l(o=>[e(S,{visible:b.value==o.$index,placement:"top",width:180},{reference:l(()=>[e(d,{size:"small",type:"danger",onClick:V=>b.value=o.$index,icon:E(q),circle:"",class:"wl-[1rem]"},null,8,["onClick","icon"])]),default:l(()=>[ge,n("div",he,[e(d,{size:"small",text:"",onClick:t[5]||(t[5]=V=>b.value=-1)},{default:l(()=>[r("cancel")]),_:1}),e(d,{size:"small",type:"danger",onClick:V=>I(o.row)},{default:l(()=>[r("confirm")]),_:2},1032,["onClick"])])]),_:2},1032,["visible"])]),_:1})]),_:1},8,["data"])]),_:1})])])}}};export{Ke as default};
