import{k as Z,r as W,p as g,z as K,o as m,d as E,w as _,g as H,f as C,H as v,u as a,V as P,e as X,G as N,t as $,I as J,a as x,F as R,v as F,L as Y,c as G,a4 as ee,Q as B,U as te,a7 as V}from"./index-c09751bd.js";import{c as oe,a as I}from"./index-1531c9b4.js";import{i as ne,Z as se,_ as D,E as A,$ as ie,X as ae,t as le,Q as O}from"./index-aa6ba756.js";import{b as re,d as w,_ as ce,c as ue}from"./base-bca4072a.js";const U=["success","info","warning","error"],fe=re({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:ne},id:{type:String,default:""},message:{type:w([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:w(Function),default:()=>{}},onClose:{type:w(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...U,""],default:""},zIndex:Number}),de={destroy:()=>!0},pe=["id"],me=["textContent"],ve={key:0},ye=["innerHTML"],ge=Z({name:"ElNotification"}),Ce=Z({...ge,props:fe,emits:de,setup(t,{expose:s}){const o=t,{ns:n,zIndex:r}=se("notification"),{nextZIndex:f,currentZIndex:d}=r,{Close:c}=ie,l=W(!1);let i;const u=g(()=>{const e=o.type;return e&&D[o.type]?n.m(e):""}),p=g(()=>o.type&&D[o.type]||o.icon),S=g(()=>o.position.endsWith("right")?"right":"left"),j=g(()=>o.position.startsWith("top")?"top":"bottom"),q=g(()=>{var e;return{[j.value]:`${o.offset}px`,zIndex:(e=o.zIndex)!=null?e:d.value}});function k(){o.duration>0&&({stop:i}=ae(()=>{l.value&&h()},o.duration))}function M(){i==null||i()}function h(){l.value=!1}function Q({code:e}){e===I.delete||e===I.backspace?M():e===I.esc?l.value&&h():k()}return K(()=>{k(),f(),l.value=!0}),oe(document,"keydown",Q),s({visible:l,close:h}),(e,b)=>(m(),E(ee,{name:a(n).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:b[1]||(b[1]=z=>e.$emit("destroy")),persisted:""},{default:_(()=>[H(C("div",{id:e.id,class:v([a(n).b(),e.customClass,a(S)]),style:P(a(q)),role:"alert",onMouseenter:M,onMouseleave:k,onClick:b[0]||(b[0]=(...z)=>e.onClick&&e.onClick(...z))},[a(p)?(m(),E(a(A),{key:0,class:v([a(n).e("icon"),a(u)])},{default:_(()=>[(m(),E(X(a(p))))]),_:1},8,["class"])):N("v-if",!0),C("div",{class:v(a(n).e("group"))},[C("h2",{class:v(a(n).e("title")),textContent:$(e.title)},null,10,me),H(C("div",{class:v(a(n).e("content")),style:P(e.title?void 0:{margin:0})},[J(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),x(R,{key:1},[N(" Caution here, message could've been compromised, never use user's input as message "),C("p",{innerHTML:e.message},null,8,ye)],2112)):(m(),x("p",ve,$(e.message),1))])],6),[[F,e.message]]),e.showClose?(m(),E(a(A),{key:0,class:v(a(n).e("closeBtn")),onClick:Y(h,["stop"])},{default:_(()=>[G(a(c))]),_:1},8,["class","onClick"])):N("v-if",!0)],2)],46,pe),[[F,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var he=ce(Ce,[["__file","notification.vue"]]);const T={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},L=16;let be=1;const y=function(t={},s=null){if(!le)return{close:()=>{}};(typeof t=="string"||B(t))&&(t={message:t});const o=t.position||"top-right";let n=t.offset||0;T[o].forEach(({vm:u})=>{var p;n+=(((p=u.el)==null?void 0:p.offsetHeight)||0)+L}),n+=L;const r=`notification_${be++}`,f=t.onClose,d={...t,offset:n,id:r,onClose:()=>{Ee(r,o,f)}};let c=document.body;O(t.appendTo)?c=t.appendTo:te(t.appendTo)&&(c=document.querySelector(t.appendTo)),O(c)||(c=document.body);const l=document.createElement("div"),i=G(he,d,B(d.message)?{default:()=>d.message}:null);return i.appContext=s??y._context,i.props.onDestroy=()=>{V(null,l)},V(i,l),T[o].push({vm:i}),c.appendChild(l.firstElementChild),{close:()=>{i.component.exposed.visible.value=!1}}};U.forEach(t=>{y[t]=(s={})=>((typeof s=="string"||B(s))&&(s={message:s}),y({...s,type:t}))});function Ee(t,s,o){const n=T[s],r=n.findIndex(({vm:i})=>{var u;return((u=i.component)==null?void 0:u.props.id)===t});if(r===-1)return;const{vm:f}=n[r];if(!f)return;o==null||o(f);const d=f.el.offsetHeight,c=s.split("-")[0];n.splice(r,1);const l=n.length;if(!(l<1))for(let i=r;i<l;i++){const{el:u,component:p}=n[i].vm,S=Number.parseInt(u.style[c],10)-d-L;p.props.offset=S}}function Te(){for(const t of Object.values(T))t.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}y.closeAll=Te;y._context=null;const Ie=ue(y,"$notify");export{Ie as E};
