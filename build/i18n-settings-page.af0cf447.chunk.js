"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[3552],{31701:(F,x,t)=>{t.r(x),t.d(x,{default:()=>Ue});var e=t(67294),c=t(68835),D=t(39510),T=t(45697),d=t.n(T),j=t(40720),y=t(90731),L=t(12473),B=t(34726),z=t(96912),W=t(83598),U=t(94355),r=t(86896),v=t(47235),a=t(3804),h=t(74622),E=t(36854),f=t(10574),R=t(71543),N=t(98948),A=t(96987),S=t(91788),k=t(26910),w=t(16607),P=t(94955),q=t(37022),_=t(18226),Z=t(41054),ue=t(27361),me=t.n(ue),H=t(86706),K=t(70437);const ge=()=>{const[n,s]=(0,e.useState)(!1),o=(0,H.I0)(),l=(0,c.lm)(),{post:i}=(0,c.kY)();return{isAdding:n,addLocale:async m=>{s(!0);try{const{data:g}=await i("/i18n/locales",m);l({type:"success",message:{id:(0,a.O)("Settings.locales.modal.create.success")}}),o({type:K.xz,newLocale:g})}catch(g){const p=me()(g,"response.payload.message",null);throw p&&p.includes("already exists")?l({type:"warning",message:{id:(0,a.O)("Settings.locales.modal.create.alreadyExist")}}):l({type:"warning",message:{id:"notification.error"}}),g}finally{s(!1)}}}};var $=t(87561);const ee=(0,$.Ry)().shape({code:(0,$.Z_)().required(),displayName:(0,$.Z_)().max(50,"Settings.locales.modal.locales.displayName.error").required(c.I0.required)});var te=t(22546);const fe=()=>{const{values:n,setFieldValue:s}=(0,Z.u6)(),{formatMessage:o}=(0,r.Z)();return e.createElement(te.X,{hint:o({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>s("isDefault",!n.isDefault),value:n.isDefault},o({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};var ae=t(31988),V=t(6498),le=t(38670),ve=t(60914),he=t(53768),Ee=t(334),pe=t(88767);const ne=()=>{const{formatMessage:n}=(0,r.Z)(),{notifyStatus:s}=(0,Ee.G)(),o=(0,c.lm)(),{get:l}=(0,c.kY)(),{isLoading:i,data:u}=(0,pe.useQuery)(["plugin-i18n","locales"],async()=>{try{const{data:m}=await l("/i18n/iso-locales");return s(n({id:(0,a.O)("Settings.locales.modal.locales.loaded"),defaultMessage:"The locales have been successfully loaded."})),m}catch{return o({type:"warning",message:{id:"notification.error"}}),[]}});return{defaultLocales:u,isLoading:i}},G=e.memo(({value:n,onClear:s,onLocaleChange:o,error:l})=>{const{formatMessage:i}=(0,r.Z)(),{defaultLocales:u,isLoading:m}=ne(),{locales:g}=(0,v.Z)(),p=(u||[]).map(C=>({label:C.name,value:C.code})).filter(({value:C})=>{const O=g.find(({code:I})=>I===C);return!O||O.code===n}),b=n||"";return e.createElement(ve.hQ,{"aria-busy":m,error:l,label:i({id:(0,a.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:b,onClear:n?s:void 0,onChange:C=>{const O=p.find(I=>I.value===C);O&&o({code:O.value,displayName:O.label})},placeholder:i({id:"components.placeholder.select",defaultMessage:"Select"})},p.map(C=>e.createElement(he.O,{value:C.value,key:C.value},C.label)))});G.defaultProps={error:void 0,value:void 0,onClear(){},onLocaleChange:()=>{}},G.propTypes={error:d().string,onClear:d().func,onLocaleChange:d().func,value:d().string};const ye=G,Le=()=>{const{formatMessage:n}=(0,r.Z)(),{values:s,handleChange:o,setFieldValue:l,errors:i}=(0,Z.u6)(),u=(0,e.useCallback)(g=>{l("displayName",g.displayName),l("code",g.code)},[l]),m=(0,e.useCallback)(()=>{l("displayName",""),l("code","")},[l]);return e.createElement(ae.r,{gap:4},e.createElement(V.P,{col:6},e.createElement(ye,{error:i.code,value:s.code,onLocaleChange:u,onClear:m})),e.createElement(V.P,{col:6},e.createElement(le.o,{name:"displayName",label:n({id:(0,a.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:n({id:(0,a.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:i.displayName?n({id:(0,a.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:s.displayName,onChange:o})))},Ce={code:"",displayName:"",isDefault:!1},se=({onClose:n})=>{const{isAdding:s,addLocale:o}=ge(),{formatMessage:l}=(0,r.Z)(),{refetchPermissions:i}=(0,c.vn)(),u=async m=>{await o({code:m.code,name:m.displayName,isDefault:m.isDefault}),await i()};return e.createElement(h.P,{onClose:n,labelledBy:"add-locale-title"},e.createElement(Z.J9,{initialValues:Ce,onSubmit:u,validationSchema:ee,validateOnChange:!1},e.createElement(c.l0,null,e.createElement(E.x,null,e.createElement(f.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"add-locale-title"},l({id:(0,a.O)("Settings.list.actions.add"),defaultMessage:"Add new locale"}))),e.createElement(R.f,null,e.createElement(N.v,{label:l({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(A.k,{justifyContent:"space-between"},e.createElement(f.Z,{as:"h2",variant:"beta"},l({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(S.m,null,e.createElement(S.O,null,l({id:(0,a.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(S.O,null,l({id:(0,a.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(k.i,null),e.createElement(w.x,{paddingTop:7,paddingBottom:7},e.createElement(P.n,null,e.createElement(P.x,null,e.createElement(Le,null)),e.createElement(P.x,null,e.createElement(fe,null)))))),e.createElement(q.m,{startActions:e.createElement(L.z,{variant:"tertiary",onClick:n},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(L.z,{type:"submit",startIcon:e.createElement(_.Z,null),disabled:s},l({id:"global.save",defaultMessage:"Save"}))}))))};se.propTypes={onClose:d().func.isRequired};const xe=se,Se=()=>{const[n,s]=(0,e.useState)(!1),o=(0,H.I0)(),l=(0,c.lm)(),{del:i}=(0,c.kY)();return{isDeleting:n,deleteLocale:async m=>{try{s(!0),await i(`/i18n/locales/${m}`),l({type:"success",message:{id:(0,a.O)("Settings.locales.modal.delete.success")}}),o({type:K.HC,id:m})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}},Y=({localeToDelete:n,onClose:s})=>{const{isDeleting:o,deleteLocale:l}=Se(),i=Boolean(n),u=()=>l(n.id).then(s);return e.createElement(c.QH,{isConfirmButtonLoading:o,onConfirm:u,onToggleDialog:s,isOpen:i})};Y.defaultProps={localeToDelete:void 0},Y.propTypes={localeToDelete:d().shape({id:d().number.isRequired}),onClose:d().func.isRequired};const Me=Y,Oe=()=>{const[n,s]=(0,e.useState)(!1),o=(0,H.I0)(),l=(0,c.lm)(),{put:i}=(0,c.kY)();return{isEditing:n,editLocale:async(m,g)=>{try{s(!0);const{data:p}=await i(`/i18n/locales/${m}`,g);l({type:"success",message:{id:(0,a.O)("Settings.locales.modal.edit.success")}}),o({type:K.OT,editedLocale:p})}catch{l({type:"warning",message:{id:"notification.error"}})}finally{s(!1)}}}},oe=({isDefaultLocale:n})=>{const{values:s,setFieldValue:o}=(0,Z.u6)(),{formatMessage:l}=(0,r.Z)();return e.createElement(te.X,{name:"isDefault",hint:l({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault.hint"),defaultMessage:"One default locale is required, change it by selecting another one"}),onChange:()=>o("isDefault",!s.isDefault),value:s.isDefault,disabled:n},l({id:(0,a.O)("Settings.locales.modal.advanced.setAsDefault"),defaultMessage:"Set as default locale"}))};oe.propTypes={isDefaultLocale:d().bool.isRequired};const De=oe;var Te=t(59586),Re=t(40933);const ie=({locale:n})=>{const{formatMessage:s}=(0,r.Z)(),{values:o,handleChange:l,errors:i}=(0,Z.u6)(),{defaultLocales:u,isLoading:m}=ne(),g=!m&&u.find(p=>p.code===n.code);return e.createElement(ae.r,{gap:4},e.createElement(V.P,{col:6},e.createElement(Te.P,{label:s({id:(0,a.O)("Settings.locales.modal.locales.label"),defaultMessage:"Locales"}),value:g?.code||n.code,disabled:!0},e.createElement(Re.W,{value:g?.code||n.code},g?.name||n.code))),e.createElement(V.P,{col:6},e.createElement(le.o,{name:"displayName",label:s({id:(0,a.O)("Settings.locales.modal.locales.displayName"),defaultMessage:"Locale display name"}),hint:s({id:(0,a.O)("Settings.locales.modal.locales.displayName.description"),defaultMessage:"Locale will be displayed under that name in the administration panel"}),error:i.displayName?s({id:(0,a.O)("Settings.locales.modal.locales.displayName.error"),defaultMessage:"The locale display name can only be less than 50 characters."}):void 0,value:o.displayName,onChange:l})))},be=ie;ie.propTypes={locale:d().shape({id:d().number.isRequired,name:d().string.isRequired,code:d().string.isRequired,isDefault:d().bool.isRequired}).isRequired};const Q=({locale:n,onClose:s})=>{const{refetchPermissions:o}=(0,c.vn)(),{isEditing:l,editLocale:i}=Oe(),{formatMessage:u}=(0,r.Z)(),m=async({displayName:g,isDefault:p})=>{await i(n.id,{name:g,isDefault:p}),await o()};return e.createElement(h.P,{onClose:s,labelledBy:"edit-locale-title"},e.createElement(Z.J9,{initialValues:{code:n?.code,displayName:n?.name||"",isDefault:Boolean(n?.isDefault)},onSubmit:m,validationSchema:ee},e.createElement(c.l0,null,e.createElement(E.x,null,e.createElement(f.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"edit-locale-title"},u({id:(0,a.O)("Settings.list.actions.edit"),defaultMessage:"Edit a locale"}))),e.createElement(R.f,null,e.createElement(N.v,{label:u({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"}),id:"tabs",variant:"simple"},e.createElement(A.k,{justifyContent:"space-between"},e.createElement(f.Z,{as:"h2"},u({id:(0,a.O)("Settings.locales.modal.title"),defaultMessage:"Configurations"})),e.createElement(S.m,null,e.createElement(S.O,null,u({id:(0,a.O)("Settings.locales.modal.base"),defaultMessage:"Basic settings"})),e.createElement(S.O,null,u({id:(0,a.O)("Settings.locales.modal.advanced"),defaultMessage:"Advanced settings"})))),e.createElement(k.i,null),e.createElement(w.x,{paddingTop:7,paddingBottom:7},e.createElement(P.n,null,e.createElement(P.x,null,e.createElement(be,{locale:n})),e.createElement(P.x,null,e.createElement(De,{isDefaultLocale:Boolean(n&&n.isDefault)})))))),e.createElement(q.m,{startActions:e.createElement(L.z,{variant:"tertiary",onClick:s},u({id:"app.components.Button.cancel"})),endActions:e.createElement(L.z,{type:"submit",startIcon:e.createElement(_.Z,null),disabled:l},u({id:"global.save"}))}))))};Q.defaultProps={locale:void 0},Q.propTypes={locale:d().shape({id:d().number.isRequired,name:d().string.isRequired,code:d().string.isRequired,isDefault:d().bool.isRequired}),onClose:d().func.isRequired};const Be=Q;var Pe=t(5923),Ze=t(3547),de=t(29299),M=t(69398),je=t(22304),Ne=t(35752),ce=t(96208),Ae=t(2382),Ie=t(54425);const X=({locales:n,onDeleteLocale:s,onEditLocale:o})=>{const{formatMessage:l}=(0,r.Z)();return e.createElement(Pe.i,{colCount:4,rowCount:n.length+1},e.createElement(Ze.h,null,e.createElement(de.Tr,null,e.createElement(M.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.O)("Settings.locales.row.id")}))),e.createElement(M.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.O)("Settings.locales.row.displayName")}))),e.createElement(M.Th,null,e.createElement(f.Z,{variant:"sigma",textColor:"neutral600"},l({id:(0,a.O)("Settings.locales.row.default-locale")}))),e.createElement(M.Th,null,e.createElement(je.T,null,"Actions")))),e.createElement(Ne.p,null,n.map(i=>e.createElement(de.Tr,{key:i.id,...(0,c.X7)({fn:()=>o(i),condition:o})},e.createElement(M.Td,null,e.createElement(f.Z,{textColor:"neutral800"},i.id)),e.createElement(M.Td,null,e.createElement(f.Z,{textColor:"neutral800"},i.name)),e.createElement(M.Td,null,e.createElement(f.Z,{textColor:"neutral800"},i.isDefault?l({id:(0,a.O)("Settings.locales.default")}):null)),e.createElement(M.Td,null,e.createElement(A.k,{gap:1,justifyContent:"flex-end",...c.UW},o&&e.createElement(ce.h,{onClick:()=>o(i),label:l({id:(0,a.O)("Settings.list.actions.edit")}),icon:e.createElement(Ae.Z,null),noBorder:!0}),s&&!i.isDefault&&e.createElement(ce.h,{onClick:()=>s(i),label:l({id:(0,a.O)("Settings.list.actions.delete")}),icon:e.createElement(Ie.Z,null),noBorder:!0})))))))};X.defaultProps={locales:[],onDeleteLocale:void 0,onEditLocale:void 0},X.propTypes={locales:d().array,onDeleteLocale:d().func,onEditLocale:d().func};const Fe=X,J=({canUpdateLocale:n,canDeleteLocale:s,onToggleCreateModal:o,isCreating:l})=>{const[i,u]=(0,e.useState)(),[m,g]=(0,e.useState)(),{locales:p}=(0,v.Z)(),{formatMessage:b}=(0,r.Z)();(0,c.go)();const C=()=>u(void 0),O=s?u:void 0,I=()=>g(void 0),Ve=n?g:void 0;return e.createElement(j.o,{tabIndex:-1},e.createElement(y.T,{primaryAction:e.createElement(L.z,{startIcon:e.createElement(W.Z,null),onClick:o,size:"S"},b({id:(0,a.O)("Settings.list.actions.add")})),title:b({id:(0,a.O)("plugin.name")}),subtitle:b({id:(0,a.O)("Settings.list.description")})}),e.createElement(B.D,null,p?.length>0?e.createElement(Fe,{locales:p,onDeleteLocale:O,onEditLocale:Ve}):e.createElement(z.x,{icon:e.createElement(U.Z,{width:void 0,height:void 0}),content:b({id:(0,a.O)("Settings.list.empty.title")}),action:o?e.createElement(L.z,{variant:"secondary",startIcon:e.createElement(W.Z,null),onClick:o},b({id:(0,a.O)("Settings.list.actions.add")})):null})),l&&e.createElement(xe,{onClose:o}),m&&e.createElement(Be,{onClose:I,locale:m}),e.createElement(Me,{localeToDelete:i,onClose:C}))};J.defaultProps={onToggleCreateModal:void 0},J.propTypes={canUpdateLocale:d().bool.isRequired,canDeleteLocale:d().bool.isRequired,onToggleCreateModal:d().func,isCreating:d().bool.isRequired};const ze=J,re=({canReadLocale:n,canCreateLocale:s,canDeleteLocale:o,canUpdateLocale:l})=>{const[i,u]=(0,e.useState)(!1),m=s?()=>u(g=>!g):void 0;return n?e.createElement(ze,{canUpdateLocale:l,canDeleteLocale:o,onToggleCreateModal:m,isCreating:i}):null};re.propTypes={canReadLocale:d().bool.isRequired,canCreateLocale:d().bool.isRequired,canUpdateLocale:d().bool.isRequired,canDeleteLocale:d().bool.isRequired};const We=re,Ue=()=>{const{isLoading:n,allowedActions:{canRead:s,canUpdate:o,canCreate:l,canDelete:i}}=(0,c.ss)(D._);return n?null:e.createElement(We,{canReadLocale:s,canCreateLocale:l,canUpdateLocale:o,canDeleteLocale:i})}},53768:(F,x,t)=>{t.d(x,{O:()=>c});var e=t(60914);const c=e.Wx},34726:(F,x,t)=>{t.d(x,{D:()=>D});var e=t(85893),c=t(16607);const D=({children:T})=>(0,e.jsx)(c.x,{paddingLeft:10,paddingRight:10,children:T})},90731:(F,x,t)=>{t.d(x,{T:()=>z});var e=t(85893),c=t(67294),D=t(88972);const T=r=>{const v=(0,c.useRef)(null),[a,h]=(0,c.useState)(!0),E=([f])=>{h(f.isIntersecting)};return(0,c.useEffect)(()=>{const f=v.current,R=new IntersectionObserver(E,r);return f&&R.observe(v.current),()=>{f&&R.disconnect()}},[v,r]),[v,a]};var d=t(79698);const j=(r,v)=>{const a=(0,d.W)(v);(0,c.useLayoutEffect)(()=>{const h=new ResizeObserver(a);return Array.isArray(r)?r.forEach(E=>{E.current&&h.observe(E.current)}):r.current&&h.observe(r.current),()=>{h.disconnect()}},[r,a])};var y=t(16607),L=t(96987),B=t(10574);const z=r=>{const v=(0,c.useRef)(null),[a,h]=(0,c.useState)(null),[E,f]=T({root:null,rootMargin:"0px",threshold:0});return j(E,()=>{E.current&&h(E.current.getBoundingClientRect())}),(0,c.useEffect)(()=>{v.current&&h(v.current.getBoundingClientRect())},[v]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:a?.height},ref:E,children:f&&(0,e.jsx)(U,{ref:v,...r})}),!f&&(0,e.jsx)(U,{...r,sticky:!0,width:a?.width})]})};z.displayName="HeaderLayout";const W=(0,D.ZP)(y.x)`
  width: ${({width:r})=>r?`${r/16}rem`:void 0};
  z-index: ${({theme:r})=>r.zIndices[1]};
`,U=c.forwardRef(({navigationAction:r,primaryAction:v,secondaryAction:a,subtitle:h,title:E,sticky:f,width:R,...N},A)=>{const S=typeof h=="string";return f?(0,e.jsx)(W,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:R,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(L.k,{justifyContent:"space-between",children:[(0,e.jsxs)(L.k,{children:[r&&(0,e.jsx)(y.x,{paddingRight:3,children:r}),(0,e.jsxs)(y.x,{children:[(0,e.jsx)(B.Z,{variant:"beta",as:"h1",...N,children:E}),S?(0,e.jsx)(B.Z,{variant:"pi",textColor:"neutral600",children:h}):h]}),a?(0,e.jsx)(y.x,{paddingLeft:4,children:a}):null]}),(0,e.jsx)(L.k,{children:v?(0,e.jsx)(y.x,{paddingLeft:2,children:v}):void 0})]})}):(0,e.jsxs)(y.x,{ref:A,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:r?6:8,background:"neutral100","data-strapi-header":!0,children:[r?(0,e.jsx)(y.x,{paddingBottom:2,children:r}):null,(0,e.jsxs)(L.k,{justifyContent:"space-between",children:[(0,e.jsxs)(L.k,{minWidth:0,children:[(0,e.jsx)(B.Z,{as:"h1",variant:"alpha",...N,children:E}),a?(0,e.jsx)(y.x,{paddingLeft:4,children:a}):null]}),v]}),S?(0,e.jsx)(B.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:h}):h]})})},40720:(F,x,t)=>{t.d(x,{o:()=>d});var e=t(85893),c=t(88972),D=t(16607);const T=(0,c.ZP)(D.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,d=({labelledBy:j="main-content-title",...y})=>(0,e.jsx)(T,{"aria-labelledby":j,as:"main",id:"main-content",tabIndex:-1,...y})}}]);