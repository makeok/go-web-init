import{M as _}from"./MarkDown-286b97f4.js";import{_ as u}from"./CodeEditor-96962f84.js";import{_ as m,r as i,x as p,o as f,a as v,f as s,c as l}from"./index-c09751bd.js";const x={class:"flex flex-row w-full h-auto overflow-x-hidden"},h={class:"w-1/2 max-h-full border rounded"},w={class:"w-1/2 border rounded max-h-full"},k={__name:"MarkDownEditor",props:{data:{type:String}},setup(r,{expose:n}){const t=r,e=i(t.data);p(()=>t.data,a=>{e.value=a});const d=(a,o)=>{e.value=a};return n({content:e}),(a,o)=>(f(),v("div",x,[s("div",h,[l(u,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=c=>e.value=c),class:"text-base max-w-full",height:"100%",mode:"text/x-markdown",light:"",value:e.value,onChange:d},null,8,["modelValue","value"])]),s("div",w,[l(_,{ref:"mdRef",class:"p-4",data:e.value},null,8,["data"])])]))}},D=m(k,[["__scopeId","data-v-e264a59e"]]);export{D as M};
