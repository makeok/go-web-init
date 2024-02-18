import"./base-bca4072a.js";import{E as J}from"./card-86ca6f7c.js";import{D as Q,E as X,a as ee}from"./tag-3d5525ac.js";import"./scrollbar-d8ba084a.js";import"./popper-0dc31dc9.js";import{E as ae}from"./popover-a65edf18.js";import{E as te}from"./input-1f089c3a.js";/* empty css             */import{E as le,a as oe}from"./select-2d479874.js";import{E as se}from"./overlay-65e5b564.js";import{E as ne}from"./button-dab0515e.js";import{r as b,E as h}from"./index-1531c9b4.js";import{u as re,o as j,y as I}from"./kube-a5043f54.js";import{_ as N}from"./CodeEditor-96962f84.js";import{I as ie}from"./index-a30895c1.js";import{c as e,r as d,p as ce,z as me,y as ue,o as $,a as L,w as o,f as m,u as _,h as p,F as de,b as pe,d as ve,t as fe,Y as he}from"./index-c09751bd.js";import{E as _e}from"./index-aa6ba756.js";import{S as Ce}from"./Search-e2cb8b34.js";import{E as ke}from"./Edit-4f3134bf.js";import"./error-78e43d3e.js";import"./isNil-c75b1b34.js";import"./focus-trap-563a4cd8.js";import"./index-1ed85de7.js";import"./vnode-7069167d.js";import"./axios-a342f982.js";import"./_commonjsHelpers-de833af9.js";const z=ie("circular-connection",!1,function(t){return e("svg",{width:t.size,height:t.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M13.5 39.3706C16.3908 41.6439 20.0371 42.9999 24 42.9999C27.9629 42.9999 31.6092 41.6439 34.5 39.3706",stroke:t.colors[0],"stroke-width":t.strokeWidth},null),e("path",{d:"M19 9.74707C12.0513 11.8822 7 18.3511 7 25.9999C7 27.9247 7.31989 29.7748 7.9094 31.4999",stroke:t.colors[0],"stroke-width":t.strokeWidth},null),e("path",{d:"M29 9.74707C35.9487 11.8822 41 18.3511 41 25.9999C41 27.9247 40.6801 29.7748 40.0906 31.4999",stroke:t.colors[0],"stroke-width":t.strokeWidth},null),e("path",{d:"M43 36C43 37.3416 42.4716 38.5597 41.6117 39.4577C40.7015 40.4082 39.4199 41 38 41C35.2386 41 33 38.7614 33 36C33 33.9899 34.1861 32.2569 35.8967 31.4626C36.536 31.1657 37.2487 31 38 31C40.7614 31 43 33.2386 43 36Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M15 36C15 37.3416 14.4716 38.5597 13.6117 39.4577C12.7015 40.4082 11.4199 41 10 41C7.23858 41 5 38.7614 5 36C5 33.9899 6.18614 32.2569 7.89667 31.4626C8.53604 31.1657 9.24867 31 10 31C12.7614 31 15 33.2386 15 36Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null),e("path",{d:"M29 9C29 10.3416 28.4716 11.5597 27.6117 12.4577C26.7015 13.4082 25.4199 14 24 14C21.2386 14 19 11.7614 19 9C19 6.98991 20.1861 5.25686 21.8967 4.4626C22.536 4.16572 23.2487 4 24 4C26.7614 4 29 6.23858 29 9Z",fill:t.colors[1],stroke:t.colors[0],"stroke-width":t.strokeWidth,"stroke-linecap":t.strokeLinecap,"stroke-linejoin":t.strokeLinejoin},null)])}),we={class:"w-full justify-center"},xe={class:"flex flex-col h-full px-[4rem] py-[2rem] space-y-[1rem]"},be={class:"flex flex-col overflow-hidden rounded-md shadow-md border"},ge={class:"flex w-full h-[5rem] items-center"},Ee=m("span",{class:"m-[0.75rem] text-2xl font-600"},"Services",-1),ye={class:"flex w-full space-x-[2rem]"},Se={class:"space-x-[0.75rem]"},$e=m("p",null,"Are you sure to delete this app?",-1),Ve={class:"ml-[0.5rem]"},aa={__name:"Service",setup(t){const k=d(!1),w=d(!1),g=d(-1),v=d({}),V=re(),i=d(V.getNamespace()),x=d([]),f=d([]),E=d(""),M=ce(()=>f.value.filter(l=>!E.value||l.metadata.name.toLowerCase().includes(E.value.toLowerCase())));me(()=>{b.get("/api/v1/namespaces").then(l=>{x.value=l.data.data.items,x.value.sort(function(a,n){let r=a.metadata.name,y=n.metadata.name;return r.localeCompare(y)}),!i.value&&x.value.length>0&&(i.value=x.value[0].metadata.name)})});const B=l=>{b.get(`/api/v1/namespaces/${l}/services`).then(a=>{f.value=a.data.data.items})};ue(()=>{if(!i.value)return[];V.setNamespace(i.value),B(i.value)});const U=l=>{const a=he(l);let n=new Array;for(let r of Array.from(a))n.push(`${r.port}/${r.protocol}`);return n.join(",")},W={apiVersion:"v1",kind:"Service",metadata:{name:{},annotations:{"weave.io/platform":"true"},labels:{"weave.io/platform":"true","weave.io/service":{}}},spec:{selector:{"weave.io/app":{}},ports:[{port:{},protocol:"TCP"}]}},D=()=>{c={},k.value=!0},P=()=>{if(c instanceof Object){h.info("Nothing to create");return}else if(c=I(c),!c){h.warning("Input invaild");return}const l=c.metadata.namespace?c.metadata.namespace:i.value;b.post(`/api/v1/namespaces/${l}/services`,c).then(a=>{h.success("Create success"),f.value.push(a.data.data),c={},k.value=!1})},T=l=>{v.value=Object.assign({},l),u=v.value,w.value=!0};let c={};const A=(l,a)=>{c=l};let u={};const O=(l,a)=>{u=l},Z=()=>{if(u instanceof Object){h.info("Nothing to update");return}else if(u=I(u),!u){h.warning("Input invaild");return}const l=v.metadata.namespace?v.metadata.namespace:i.value;b.put(`/api/v1/namespaces/${l}/services/${v.value.metadata.name}`,u).then(a=>{h.success("Update success");const n=f.value.findIndex(r=>r.metadata.name===v.value.metadata.name);f.value[n]=u,w.value=!1})},F=l=>{const a=l.metadata.namespace?l.metadata.namespace:i.value;b.delete(`/api/v1/namespaces/${a}/services/${l.metadata.name}`).then(()=>{h.success("Delete success");const n=f.value.findIndex(r=>r.metadata.name===l.metadata.name);f.value.splice(n,1),g.value=-1})};return(l,a)=>{const n=ne,r=se,y=le,Y=oe,q=_e,K=te,C=X,R=ae,G=ee,H=J;return $(),L("div",we,[e(r,{modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=s=>k.value=s),title:"Create Service",width:"98%"},{footer:o(()=>[m("span",null,[e(n,{onClick:a[0]||(a[0]=s=>k.value=!1)},{default:o(()=>[p("Cancel")]),_:1}),e(n,{type:"primary",onClick:P},{default:o(()=>[p("Confirm")]),_:1})])]),default:o(()=>[e(N,{height:"60vh",value:_(j)(W),onChange:A},null,8,["value"])]),_:1},8,["modelValue"]),e(r,{modelValue:w.value,"onUpdate:modelValue":a[3]||(a[3]=s=>w.value=s),top:"5vh",width:"98%",title:"Edit Yaml"},{footer:o(()=>[m("span",null,[e(n,{onClick:a[2]||(a[2]=s=>w.value=!1)},{default:o(()=>[p("Cancel")]),_:1}),e(n,{type:"primary",onClick:Z},{default:o(()=>[p("Confirm")]),_:1})])]),default:o(()=>[e(N,{height:"60vh",value:_(j)(v.value),onChange:O},null,8,["value"])]),_:1},8,["modelValue"]),m("div",xe,[m("div",be,[m("div",ge,[e(_(z),{class:"ml-[1rem]",theme:"filled",size:"42",fill:"#94A3B8"}),Ee])]),e(H,{class:"h-max flex-row"},{header:o(()=>[m("div",ye,[e(Y,{class:"w-1/3",modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=s=>i.value=s),filterable:"",placeholder:"please select namespace"},{default:o(()=>[($(!0),L(de,null,pe(x.value,s=>($(),ve(y,{label:s.metadata.name,value:s.metadata.name},null,8,["label","value"]))),256))]),_:1},8,["modelValue"]),e(K,{modelValue:E.value,"onUpdate:modelValue":a[5]||(a[5]=s=>E.value=s),placeholder:"Type to search"},{prefix:o(()=>[e(q,null,{default:o(()=>[e(_(Ce))]),_:1})]),_:1},8,["modelValue"]),e(n,{type:"primary",plain:"",icon:_(z),onClick:D},{default:o(()=>[p(" Create ")]),_:1},8,["icon"])])]),default:o(()=>[e(G,{data:M.value,height:"360",class:"w-full max-h-full"},{default:o(()=>[e(C,{prop:"metadata.name",label:"Name",sortable:""}),e(C,{prop:"metadata.namespace",label:"Namespace"}),e(C,{prop:"spec.clusterIP",label:"ClusterIP"}),e(C,{prop:"spec.ports",label:"Ports","min-width":"120px"},{default:o(s=>[p(fe(U(s.row.spec.ports)),1)]),_:1}),e(C,{prop:"metadata.creationTimestamp",label:"StartAt",sortable:"","min-width":"120px"}),e(C,{label:"Operation","min-width":"120px"},{default:o(s=>[m("div",Se,[e(n,{class:"",size:"small",circle:"",onClick:S=>T(s.row),icon:_(ke)},null,8,["onClick","icon"]),e(R,{visible:g.value==s.$index,placement:"top",width:180},{reference:o(()=>[e(n,{size:"small",type:"danger",onClick:S=>g.value=s.$index,icon:_(Q),circle:"",class:"wl-[1rem]"},null,8,["onClick","icon"])]),default:o(()=>[$e,m("div",Ve,[e(n,{size:"small",text:"",onClick:a[6]||(a[6]=S=>g.value=-1)},{default:o(()=>[p("cancel")]),_:1}),e(n,{size:"small",type:"danger",onClick:S=>F(s.row)},{default:o(()=>[p("confirm ")]),_:2},1032,["onClick"])])]),_:2},1032,["visible"])])]),_:1})]),_:1},8,["data"])]),_:1})])])}}};export{aa as default};
