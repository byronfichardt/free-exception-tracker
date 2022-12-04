import{u as c,o as f,e as w,b as e,h as o,w as l,F as _,H as g,a as t,n as V,g as b,z as k}from"./app.d98d98a0.js";import{A as v,_ as x}from"./AuthenticationCardLogo.b68109a8.js";import{_ as i,a as m}from"./TextInput.f939f6fa.js";import{_ as n}from"./InputLabel.f9986ec3.js";import{_ as y}from"./PrimaryButton.ae4a95df.js";import"./_plugin-vue_export-helper.cdc0426e.js";const P=["onSubmit"],$={class:"mt-4"},h={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},z={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(F,a)=>(f(),w(_,null,[e(o(g),{title:"Reset Password"}),e(v,null,{logo:l(()=>[e(x)]),default:l(()=>[t("form",{onSubmit:k(p,["prevent"])},[t("div",null,[e(n,{for:"email",value:"Email"}),e(i,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.email},null,8,["message"])]),t("div",$,[e(n,{for:"password",value:"Password"}),e(i,{id:"password",modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>o(s).password=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),t("div",h,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(i,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>o(s).password_confirmation=r),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),e(m,{class:"mt-2",message:o(s).errors.password_confirmation},null,8,["message"])]),t("div",C,[e(y,{class:V({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:l(()=>[b(" Reset Password ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{z as default};
