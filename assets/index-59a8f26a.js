import{m as w,v as y,H as A,N,h as T,B as C,s as g,Y as M,aO as O,l as _}from"./index-cd05b7f8.js";const[x,I]=w("form"),Y={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:C,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:g,showErrorMessage:g,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var j=y({name:x,props:Y,emits:["submit","failed"],setup(i,{emit:r,slots:u}){const{children:s,linkChildren:v}=A(O),o=e=>e?s.filter(t=>e.includes(t.name)):s,p=e=>new Promise((t,n)=>{const l=[];o(e).reduce((F,V)=>F.then(()=>{if(!l.length)return V.validate().then(h=>{h&&l.push(h)})}),Promise.resolve()).then(()=>{l.length?n(l):t()})}),b=e=>new Promise((t,n)=>{const l=o(e);Promise.all(l.map(a=>a.validate())).then(a=>{a=a.filter(Boolean),a.length?n(a):t()})}),B=e=>{const t=s.find(n=>n.name===e);return t?new Promise((n,l)=>{t.validate().then(a=>{a?l(a):n()})}):Promise.reject()},c=e=>typeof e=="string"?B(e):i.validateFirst?p(e):b(e),P=e=>{typeof e=="string"&&(e=[e]),o(e).forEach(n=>{n.resetValidation()})},S=()=>s.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),d=(e,t)=>{s.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},f=()=>s.reduce((e,t)=>(t.name!==void 0&&(e[t.name]=t.formValue.value),e),{}),m=()=>{const e=f();c().then(()=>r("submit",e)).catch(t=>{r("failed",{values:e,errors:t}),i.scrollToError&&t[0].name&&d(t[0].name)})},E=e=>{M(e),m()};return v({props:i}),N({submit:m,validate:c,getValues:f,scrollToField:d,resetValidation:P,getValidationStatus:S}),()=>{var e;return T("form",{class:I(),onSubmit:E},[(e=u.default)==null?void 0:e.call(u)])}}});const q=_(j);export{q as F};
