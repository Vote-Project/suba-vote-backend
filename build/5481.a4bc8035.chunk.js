"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[5481],{99123:(g,i,t)=>{t.d(i,{a:()=>f});var n=t(67294),a=t(68835),o=t(14293),r=t.n(o),u=t(86896),d=t(16550),_=t(75021);const E="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",l="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:e}=(0,u.Z)();let{license:m,isError:c,isLoading:D}=(0,_.q)();const T=(0,a.lm)(),{pathname:M}=(0,d.TH)(),{enforcementUserCount:C,permittedSeats:O,licenseLimitStatus:s,isHostedOnStrapiCloud:I}=m;(0,n.useEffect)(()=>{if(c||D)return;const A=!r()(O)&&!window.sessionStorage.getItem(`${E}-${M}`)&&(s==="AT_LIMIT"||s==="OVER_LIMIT");let P;s==="OVER_LIMIT"?P="warning":s==="AT_LIMIT"&&(P="softWarning"),A&&T({type:P,message:e({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:s}),title:e({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:s,enforcementUserCount:C,permittedSeats:O}),link:{url:I?L:l,label:e({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:I})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${E}-${M}`,!0)}})},[T,m,M,e,D,O,s,C,I,c])}},75021:(g,i,t)=>{t.d(i,{q:()=>r});var n=t(67294),a=t(68835),o=t(88767);function r({enabled:u}={enabled:!0}){const{get:d}=(0,a.kY)(),{data:_,isError:E,isLoading:L}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:e}}=await d("/admin/license-limit-information");return e},{enabled:u}),l=n.useMemo(()=>_??{},[_]),f=n.useCallback(e=>(l?.features??[]).find(c=>c.name===e)?.options??{},[l?.features]);return{license:l,getFeature:f,isError:E,isLoading:L}}},17403:(g,i,t)=>{t.r(i),t.d(i,{UserListPageEE:()=>r});var n=t(67294),a=t(61611),o=t(99123);function r(){return(0,o.a)(),n.createElement(a.W,null)}}}]);
