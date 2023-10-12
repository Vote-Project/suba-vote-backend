"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[695],{56752:(T,m,t)=>{t.r(m),t.d(m,{SettingsPage:()=>I,default:()=>K});var e=t(67294),i=t(40720),f=t(90731),p=t(12473),v=t(34726),x=t(71590),s=t(96987),E=t(16607),b=t(10574),P=t(31988),C=t(6498),D=t(17705),n=t(68835),o=t(18226),r=t(52861),l=t(18446),d=t.n(l),u=t(64593),M=t(86896),j=t(11727),c=t(63955);const A=a=>a;var N=t(18172),Z=t(36968),W=t.n(Z);const H={isLoading:!0,isSubmiting:!1,initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},G=(a,O)=>(0,N.ZP)(a,g=>{switch(O.type){case"CANCEL_CHANGES":{g.modifiedData=a.initialData;break}case"GET_DATA_SUCCEEDED":{g.isLoading=!1,g.initialData=O.data,g.modifiedData=O.data;break}case"ON_CHANGE":{W()(g,["modifiedData",...O.keys.split(".")],O.value);break}case"ON_SUBMIT":{g.isSubmiting=!0;break}case"SUBMIT_SUCCEEDED":{g.initialData=a.modifiedData,g.isSubmiting=!1;break}case"ON_SUBMIT_ERROR":{g.isSubmiting=!1;break}default:return a}}),I=()=>{const{formatMessage:a}=(0,M.Z)(),{lockApp:O,unlockApp:g}=(0,n.o1)(),F=(0,n.lm)(),{get:$,put:V}=(0,n.kY)();(0,n.go)();const[{initialData:X,isLoading:Y,isSubmiting:J,modifiedData:B},L]=(0,e.useReducer)(G,H,A),U=(0,e.useRef)(!0);(0,e.useEffect)(()=>{const y=r.default.CancelToken.source(),w=async()=>{try{const{data:{data:z}}=await $("/upload/settings",{cancelToken:y.token});L({type:"GET_DATA_SUCCEEDED",data:z})}catch(z){console.error(z)}};return U.current&&w(),()=>{y.cancel("Operation canceled by the user."),U.current=!1}},[]);const k=d()(X,B),Q=async h=>{if(h.preventDefault(),!k){O(),L({type:"ON_SUBMIT"});try{await V("/upload/settings",B),L({type:"SUBMIT_SUCCEEDED"}),F({type:"success",message:{id:"notification.form.success.fields"}})}catch(y){console.error(y),L({type:"ON_SUBMIT_ERROR"})}g()}},R=({target:{name:h,value:y}})=>{L({type:"ON_CHANGE",keys:h,value:y})};return e.createElement(i.o,{tabIndex:-1},e.createElement(u.q,{title:a({id:(0,c.OB)("page.title"),defaultMessage:"Settings - Media Libray"})}),e.createElement("form",{onSubmit:Q},e.createElement(f.T,{title:a({id:(0,c.OB)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:e.createElement(p.z,{disabled:k,"data-testid":"save-button",loading:J,type:"submit",startIcon:e.createElement(o.Z,null),size:"S"},a({id:"global.save",defaultMessage:"Save"})),subtitle:a({id:(0,c.OB)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),e.createElement(v.D,null,Y?e.createElement(n.dO,null):e.createElement(x.A,null,e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:12},e.createElement(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(s.k,null,e.createElement(b.Z,{variant:"delta",as:"h2"},a({id:(0,c.OB)("settings.blockTitle"),defaultMessage:"Asset management"}))),e.createElement(P.r,{gap:6},e.createElement(C.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"responsiveDimensions","data-testid":"responsiveDimensions",checked:B.responsiveDimensions,hint:a({id:(0,c.OB)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:a({id:(0,c.OB)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{R({target:{name:"responsiveDimensions",value:h.target.checked}})}})),e.createElement(C.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"sizeOptimization","data-testid":"sizeOptimization",checked:B.sizeOptimization,hint:a({id:(0,c.OB)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:a({id:(0,c.OB)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{R({target:{name:"sizeOptimization",value:h.target.checked}})}})),e.createElement(C.P,{col:6,s:12},e.createElement(D.s,{"aria-label":"autoOrientation","data-testid":"autoOrientation",checked:B.autoOrientation,hint:a({id:(0,c.OB)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:a({id:(0,c.OB)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:h=>{R({target:{name:"autoOrientation",value:h.target.checked}})}}))))))))))},K=()=>e.createElement(n.O4,{permissions:j._I.settings},e.createElement(I,null))},34726:(T,m,t)=>{t.d(m,{D:()=>f});var e=t(85893),i=t(16607);const f=({children:p})=>(0,e.jsx)(i.x,{paddingLeft:10,paddingRight:10,children:p})},90731:(T,m,t)=>{t.d(m,{T:()=>P});var e=t(85893),i=t(67294),f=t(88972);const p=n=>{const o=(0,i.useRef)(null),[r,l]=(0,i.useState)(!0),d=([u])=>{l(u.isIntersecting)};return(0,i.useEffect)(()=>{const u=o.current,M=new IntersectionObserver(d,n);return u&&M.observe(o.current),()=>{u&&M.disconnect()}},[o,n]),[o,r]};var v=t(79698);const x=(n,o)=>{const r=(0,v.W)(o);(0,i.useLayoutEffect)(()=>{const l=new ResizeObserver(r);return Array.isArray(n)?n.forEach(d=>{d.current&&l.observe(d.current)}):n.current&&l.observe(n.current),()=>{l.disconnect()}},[n,r])};var s=t(16607),E=t(96987),b=t(10574);const P=n=>{const o=(0,i.useRef)(null),[r,l]=(0,i.useState)(null),[d,u]=p({root:null,rootMargin:"0px",threshold:0});return x(d,()=>{d.current&&l(d.current.getBoundingClientRect())}),(0,i.useEffect)(()=>{o.current&&l(o.current.getBoundingClientRect())},[o]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:r?.height},ref:d,children:u&&(0,e.jsx)(D,{ref:o,...n})}),!u&&(0,e.jsx)(D,{...n,sticky:!0,width:r?.width})]})};P.displayName="HeaderLayout";const C=(0,f.ZP)(s.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,D=i.forwardRef(({navigationAction:n,primaryAction:o,secondaryAction:r,subtitle:l,title:d,sticky:u,width:M,...j},c)=>{const S=typeof l=="string";return u?(0,e.jsx)(C,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:M,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(E.k,{justifyContent:"space-between",children:[(0,e.jsxs)(E.k,{children:[n&&(0,e.jsx)(s.x,{paddingRight:3,children:n}),(0,e.jsxs)(s.x,{children:[(0,e.jsx)(b.Z,{variant:"beta",as:"h1",...j,children:d}),S?(0,e.jsx)(b.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),r?(0,e.jsx)(s.x,{paddingLeft:4,children:r}):null]}),(0,e.jsx)(E.k,{children:o?(0,e.jsx)(s.x,{paddingLeft:2,children:o}):void 0})]})}):(0,e.jsxs)(s.x,{ref:c,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(s.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(E.k,{justifyContent:"space-between",children:[(0,e.jsxs)(E.k,{minWidth:0,children:[(0,e.jsx)(b.Z,{as:"h1",variant:"alpha",...j,children:d}),r?(0,e.jsx)(s.x,{paddingLeft:4,children:r}):null]}),o]}),S?(0,e.jsx)(b.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},71590:(T,m,t)=>{t.d(m,{A:()=>x});var e=t(85893),i=t(88972),f=t(16607);const p=(0,i.ZP)(f.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:s})=>s?"auto 1fr":"1fr"};
`,v=(0,i.ZP)(f.x)`
  overflow-x: hidden;
`,x=({sideNav:s,children:E})=>(0,e.jsxs)(p,{hasSideNav:Boolean(s),children:[s,(0,e.jsx)(v,{paddingBottom:10,children:E})]})},40720:(T,m,t)=>{t.d(m,{o:()=>v});var e=t(85893),i=t(88972),f=t(16607);const p=(0,i.ZP)(f.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,v=({labelledBy:x="main-content-title",...s})=>(0,e.jsx)(p,{"aria-labelledby":x,as:"main",id:"main-content",tabIndex:-1,...s})}}]);
