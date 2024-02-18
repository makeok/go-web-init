import"./base-bca4072a.js";import{E as Q}from"./card-86ca6f7c.js";import{D as X,E as Z,a as ee}from"./tag-3d5525ac.js";import"./scrollbar-d8ba084a.js";import"./popper-0dc31dc9.js";import{E as ae}from"./popover-a65edf18.js";import{E as te}from"./input-1f089c3a.js";/* empty css             */import{E as le,a as se}from"./select-2d479874.js";import{E as ne}from"./overlay-65e5b564.js";import{E as oe}from"./button-dab0515e.js";import{r as x,E as h}from"./index-1531c9b4.js";import{u as re,o as $,y as L}from"./kube-a5043f54.js";import{_ as N}from"./CodeEditor-96962f84.js";import{I as ie}from"./index-a30895c1.js";import{c as e,r as d,p as me,z as ce,y as ue,o as V,a as z,w as l,f as c,u as _,h as p,F as de,b as pe,d as fe,t as ve,Y as he}from"./index-c09751bd.js";import{E as _e}from"./index-aa6ba756.js";import{S as ke}from"./Search-e2cb8b34.js";import{E as ge}from"./Edit-4f3134bf.js";import"./error-78e43d3e.js";import"./isNil-c75b1b34.js";import"./focus-trap-563a4cd8.js";import"./index-1ed85de7.js";import"./vnode-7069167d.js";import"./axios-a342f982.js";import"./_commonjsHelpers-de833af9.js";const B=ie("network-drive",!0,function(s){return e("svg",{width:s.size,height:s.size,viewBox:"0 0 48 48",fill:"none"},[e("path",{d:"M40.5178 36.3161C43.8044 34.005 45.2136 29.8302 44.0001 26C42.7866 22.1698 39.0705 20.0714 35.0527 20.0745H32.7317C31.2144 14.1613 26.2082 9.79572 20.1435 9.0972C14.0787 8.39868 8.21121 11.5118 5.38931 16.9253C2.56741 22.3388 3.37545 28.9317 7.42115 33.5035",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),e("rect",{x:"14",y:"35",width:"20",height:"6",fill:s.colors[1],stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),e("path",{d:"M34 28L22 28",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null),e("path",{d:"M16 28H14",stroke:s.colors[0],"stroke-width":s.strokeWidth,"stroke-linecap":s.strokeLinecap,"stroke-linejoin":s.strokeLinejoin},null)])}),we={class:"w-full justify-center"},Ce={class:"flex flex-col h-full px-[4rem] py-[2rem] space-y-[1rem]"},xe={class:"flex flex-col overflow-hidden rounded-md shadow-md border"},be={class:"flex w-full h-[5rem] items-center"},Ee=c("span",{class:"m-[0.75rem] text-2xl font-600"},"Ingresses",-1),ye={class:"flex w-full space-x-[2rem]"},Ie={class:"space-x-[0.75rem]"},Ve=c("p",null,"Are you sure to delete this app?",-1),je={class:"ml-[0.5rem]"},aa={__name:"Ingress",setup(s){const k=d(!1),g=d(!1),b=d(-1),f=d({}),j=re(),r=d(j.getNamespace()),w=d([]),v=d([]),E=d(""),D=me(()=>v.value.filter(t=>!E.value||t.metadata.name.toLowerCase().includes(E.value.toLowerCase())));ce(()=>{x.get("/api/v1/namespaces").then(t=>{w.value=t.data.data.items,w.value.sort(function(a,o){let m=a.metadata.name,y=o.metadata.name;return m.localeCompare(y)}),!r.value&&w.value.length>0&&(r.value=w.value[0].metadata.name)})});const S=t=>{x.get(`/api/v1/namespaces/${t}/ingresses`).then(a=>{v.value=a.data.data.items})};ue(()=>{if(!r.value)return[];j.setNamespace(r.value),S(r.value)});const U=t=>{const a=he(t);let o=new Array;for(let m of Array.from(a))o.push(m.host);return o.join(",")},A={apiVersion:"v1",kind:"Ingress",metadata:{name:{},namespace:{},labels:{"weave.io/platform":"true"}},spec:{rules:[{host:{},http:{paths:[{backend:{service:{name:{},port:{number:{}}}},path:"/"}]}}]}},M=()=>{i={},k.value=!0},O=()=>{if(i instanceof Object){h.info("Nothing to create");return}else if(i=L(i),!i){h.warning("Input invaild");return}const t=i.metadata.namespace?i.metadata.namespace:r.value;x.post(`/api/v1/namespaces/${t}/ingresses`,i).then(a=>{h.success("Create success"),v.value.push(a.data.data),i={},k.value=!1})},T=t=>{f.value=Object.assign({},t),u=f.value,g.value=!0};let i={};const W=(t,a)=>{i=t};let u={};const H=(t,a)=>{u=t},F=()=>{if(u instanceof Object){h.info("Nothing to update");return}else if(u=L(u),!u){h.warning("Input invaild");return}const t=f.metadata.namespace?f.metadata.namespace:r.value;x.put(`/api/v1/namespaces/${t}/ingresses/${f.value.metadata.name}`,u).then(a=>{h.success("Update success");const o=v.value.findIndex(m=>m.metadata.name===f.value.metadata.name);v.value[o]=u,g.value=!1})},Y=t=>{const a=t.metadata.namespace?t.metadata.namespace:r.value;x.delete(`/api/v1/namespaces/${a}/ingresses/${t.metadata.name}`).then(()=>{h.success("Delete success");const o=v.value.findIndex(m=>m.metadata.name===t.metadata.name);v.value.splice(o,1),b.value=-1})};return(t,a)=>{const o=oe,m=ne,y=le,q=se,K=_e,P=te,C=Z,R=ae,G=ee,J=Q;return V(),z("div",we,[e(m,{modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=n=>k.value=n),title:"Create Ingress",width:"98%"},{footer:l(()=>[c("span",null,[e(o,{onClick:a[0]||(a[0]=n=>k.value=!1)},{default:l(()=>[p("Cancel")]),_:1}),e(o,{type:"primary",onClick:O},{default:l(()=>[p("Confirm")]),_:1})])]),default:l(()=>[e(N,{height:"60vh",value:_($)(A),onChange:W},null,8,["value"])]),_:1},8,["modelValue"]),e(m,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=n=>g.value=n),top:"5vh",width:"98%",title:"Edit Yaml"},{footer:l(()=>[c("span",null,[e(o,{onClick:a[2]||(a[2]=n=>g.value=!1)},{default:l(()=>[p("Cancel")]),_:1}),e(o,{type:"primary",onClick:F},{default:l(()=>[p("Confirm")]),_:1})])]),default:l(()=>[e(N,{height:"60vh",value:_($)(f.value),onChange:H},null,8,["value"])]),_:1},8,["modelValue"]),c("div",Ce,[c("div",xe,[c("div",be,[e(_(B),{class:"ml-[1rem]",theme:"filled",size:"42",fill:"#94A3B8"}),Ee])]),e(J,{class:"h-max flex-row"},{header:l(()=>[c("div",ye,[e(q,{class:"w-1/3",modelValue:r.value,"onUpdate:modelValue":a[4]||(a[4]=n=>r.value=n),filterable:"",placeholder:"please select namespace"},{default:l(()=>[(V(!0),z(de,null,pe(w.value,n=>(V(),fe(y,{label:n.metadata.name,value:n.metadata.name},null,8,["label","value"]))),256))]),_:1},8,["modelValue"]),e(P,{modelValue:E.value,"onUpdate:modelValue":a[5]||(a[5]=n=>E.value=n),placeholder:"Type to search"},{prefix:l(()=>[e(K,null,{default:l(()=>[e(_(ke))]),_:1})]),_:1},8,["modelValue"]),e(o,{type:"primary",plain:"",icon:_(B),onClick:M},{default:l(()=>[p(" Create ")]),_:1},8,["icon"])])]),default:l(()=>[e(G,{data:D.value,height:"360",class:"w-full max-h-full"},{default:l(()=>[e(C,{prop:"metadata.name",label:"Name",sortable:""}),e(C,{prop:"metadata.namespace",label:"Namespace"}),e(C,{label:"Hosts","min-width":"120px"},{default:l(n=>[p(ve(U(n.row.spec.rules)),1)]),_:1}),e(C,{prop:"metadata.creationTimestamp",label:"StartAt",sortable:"","min-width":"120px"}),e(C,{label:"Operation","min-width":"120px"},{default:l(n=>[c("div",Ie,[e(o,{class:"",size:"small",circle:"",onClick:I=>T(n.row),icon:_(ge)},null,8,["onClick","icon"]),e(R,{visible:b.value==n.$index,placement:"top",width:180},{reference:l(()=>[e(o,{size:"small",type:"danger",onClick:I=>b.value=n.$index,icon:_(X),circle:"",class:"wl-[1rem]"},null,8,["onClick","icon"])]),default:l(()=>[Ve,c("div",je,[e(o,{size:"small",text:"",onClick:a[6]||(a[6]=I=>b.value=-1)},{default:l(()=>[p("cancel")]),_:1}),e(o,{size:"small",type:"danger",onClick:I=>Y(n.row)},{default:l(()=>[p("confirm ")]),_:2},1032,["onClick"])])]),_:2},1032,["visible"])])]),_:1})]),_:1},8,["data"])]),_:1})])])}}};export{aa as default};