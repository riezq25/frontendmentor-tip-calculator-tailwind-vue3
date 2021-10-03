import{r as f,c as y,o as b,a as h,b as t,w as m,v as _,n as v,t as x,u as g,p as w,d as k,e as C,f as T}from"./vendor.1b6c75d5.js";const $=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}};$();var P="/frontendmentor-tip-calculator-tailwind-vue3/assets/logo.dba8a83d.svg",S="/frontendmentor-tip-calculator-tailwind-vue3/assets/icon-dollar.1ec9d9bc.svg",B="/frontendmentor-tip-calculator-tailwind-vue3/assets/icon-person.62019f45.svg";var I=(a,l)=>{for(const[i,n]of l)a[i]=n;return a};const c=a=>(w("data-v-15a24473"),a=a(),k(),a),L={class:"bg-neutral-cyan-light-grayish-1 min-h-screen min-w-full py-20 flex flex-col items-center font-mono"},N=c(()=>t("div",{class:"mb-10"},[t("img",{src:P,alt:"logo"})],-1)),j={class:"mobile:max-w-lg mobile:w-full desktop:max-w-4xl bg-neutral-white p-10 rounded-2xl"},A={class:"grid mobile:grid-cols-1 desktop:grid-cols-2 gap-8"},E={class:"text-neutral-cyan-dark-grayish-1 font-bold p-4"},O={class:"flex flex-col mb-10"},V=c(()=>t("label",{for:"bill",class:"mb-2"},"Bill",-1)),F={class:"calc-input"},U=c(()=>t("span",null,[t("img",{src:S,alt:"dollar-icon"})],-1)),D={class:"flex flex-col mb-10"},M=c(()=>t("label",{for:"tip",class:"mb-4"},"Select Tip %",-1)),q={class:"grid gap-4 mobile:grid-rows-3 mobile:grid-cols-2 desktop:grid-rows-2 desktop:grid-cols-3"},z={class:"flex flex-col"},K=c(()=>t("label",{for:"num-person",class:"mb-2"},"Number of People",-1)),R={class:"calc-input"},G=c(()=>t("div",null,[t("img",{src:B,alt:"person-icon"})],-1)),H={class:"bg-neutral-cyan-dark-grayish-1 w-full rounded-2xl py-14 px-10 flex flex-col justify-between content-between"},J={class:"flex flex-col w-full mb-8"},Q={class:"flex justify-between w-full mb-4"},W=c(()=>t("div",{class:"text-neutral-white flex flex-col w-full"},[t("div",{class:"text-sm"},"Tip Amount"),t("div",{class:"text-xs text-neutral-cyan-dark-grayish-2"}," / person ")],-1)),X={class:"text-neutral-cyan-dark-grayish-2 text-5xl font-bold"},Y={class:"flex justify-between w-full"},Z=c(()=>t("div",{class:"text-neutral-white flex flex-col w-full"},[t("div",{class:"text-sm"},"Total"),t("div",{class:"text-xs text-neutral-cyan-dark-grayish-2"}," / person ")],-1)),tt={class:"text-neutral-cyan-dark-grayish-2 text-5xl font-bold"},et={setup(a){const l=f(1),i=f(0),n=f(null),e=y(()=>{if(i.value>0){const d=i.value*n.value/100;return{total:d,perPerson:d/l.value}}return{total:0,perPerson:0}}),s=d=>{n.value=d},u=()=>{i.value=0,n.value=null,l.value=1},p=d=>d==n.value;return(d,o)=>(b(),h("div",L,[N,t("div",j,[t("div",A,[t("div",E,[t("div",O,[V,t("div",F,[U,m(t("input",{id:"bill",class:"person-input input",type:"number",dir:"rtl","onUpdate:modelValue":o[0]||(o[0]=r=>i.value=r),min:"0"},null,512),[[_,i.value,void 0,{number:!0}]])])]),t("div",D,[M,t("div",q,[t("button",{onClick:o[1]||(o[1]=r=>s(5)),class:v(["btn",{active:p(5)}])}," 5% ",2),t("button",{onClick:o[2]||(o[2]=r=>s(10)),class:v(["btn",{active:p(10)}])}," 10% ",2),t("button",{onClick:o[3]||(o[3]=r=>s(15)),class:v(["btn",{active:p(15)}])}," 15% ",2),t("button",{onClick:o[4]||(o[4]=r=>s(25)),class:v(["btn",{active:p(25)}])}," 25% ",2),t("button",{onClick:o[5]||(o[5]=r=>s(50)),class:v(["btn",{active:p(50)}])}," 50% ",2),m(t("input",{id:"tip",class:"input-tip input",type:"number",dir:"rtl",placeholder:"Custom",min:"0","onUpdate:modelValue":o[6]||(o[6]=r=>n.value=r)},null,512),[[_,n.value,void 0,{number:!0}]])])]),t("div",z,[K,t("div",R,[G,m(t("input",{id:"num-person",class:"person-input input",type:"number",dir:"rtl","onUpdate:modelValue":o[7]||(o[7]=r=>l.value=r),min:"1"},null,512),[[_,l.value,void 0,{number:!0}]])])])]),t("div",H,[t("div",J,[t("div",Q,[W,t("div",X," $"+x(g(e).perPerson.toFixed(2)),1)]),t("div",Y,[Z,t("div",tt," $"+x(g(e).total.toFixed(2)),1)])]),t("button",{onClick:u,class:"btn-reset"},"RESET")])])])]))}};var st=I(et,[["__scopeId","data-v-15a24473"]]);const ot={setup(a){return(l,i)=>(b(),C(st))}},lt=T(ot);lt.mount("#app");
