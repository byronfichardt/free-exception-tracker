import{S as w}from"./SectionTitle.d2a99fd6.js";import{o as f,f as v,d as c,w as n,r as o,a as i,b as s,l as x,m as _,p as g,q as b,c as y,k as m,T as u,v as h,n as $,h as k,g as B,s as S}from"./app.18a322b9.js";const C={class:"md:grid md:grid-cols-3 md:gap-6"},E={class:"mt-5 md:mt-0 md:col-span-2"},T={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},U={__name:"ActionSection",setup(e){return(a,t)=>(f(),v("div",C,[c(w,null,{title:n(()=>[o(a.$slots,"title")]),description:n(()=>[o(a.$slots,"description")]),_:3}),i(),s("div",E,[s("div",T,[o(a.$slots,"content")])])]))}},W={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},N=s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1),V=[N],M={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=e;x(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const l=()=>{t.closeable&&a("close")},d=r=>{r.key==="Escape"&&t.show&&l()};_(()=>document.addEventListener("keydown",d)),g(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const p=b(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(r,q)=>(f(),y(S,{to:"body"},[c(u,{"leave-active-class":"duration-200"},{default:n(()=>[m(s("div",W,[c(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[m(s("div",{class:"fixed inset-0 transform transition-all",onClick:l},V,512),[[h,e.show]])]),_:1}),i(),c(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[m(s("div",{class:$(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",k(p)])},[e.show?o(r.$slots,"default",{key:0}):B("",!0)],2),[[h,e.show]])]),_:3})],512),[[h,e.show]])]),_:3})]))}},z={class:"px-6 py-4"},D={class:"text-lg"},L={class:"mt-4"},j={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"},F={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=()=>{a("close")};return(l,d)=>(f(),y(M,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:t},{default:n(()=>[s("div",z,[s("div",D,[o(l.$slots,"title")]),i(),s("div",L,[o(l.$slots,"content")])]),i(),s("div",j,[o(l.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{M as _,U as a,F as b};