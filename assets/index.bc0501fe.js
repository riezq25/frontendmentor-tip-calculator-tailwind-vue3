import{r as f,c as y,o as b,a as h,b as e,w as m,v as _,n as v,t as x,u as g,p as w,d as k,e as C,f as T}from"./vendor.1b6c75d5.js";const $=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}};$();var P="/frontendmentor-tip-calculator-tailwind-vue3/assets/logo.dba8a83d.svg",S="/frontendmentor-tip-calculator-tailwind-vue3/assets/icon-dollar.1ec9d9bc.svg",B="/frontendmentor-tip-calculator-tailwind-vue3/assets/icon-person.62019f45.svg";var I=(a,l)=>{for(const[i,n]of l)a[i]=n;return a};const c=a=>(w("data-v-44d0433e"),a=a(),k(),a),L={class:"bg-neutral-cyan-light-grayish-1 min-h-screen min-w-full py-20 flex flex-col items-center font-mono"},N=c(()=>e("div",{class:"mb-10"},[e("img",{src:P})],-1)),j={class:"mobile:max-w-lg mobile:w-full desktop:max-w-4xl bg-neutral-white p-10 rounded-2xl"},A={class:"grid mobile:grid-cols-1 desktop:grid-cols-2 gap-8"},E={class:"text-neutral-cyan-dark-grayish-1 font-bold p-4"},O={class:"flex flex-col mb-10"},V=c(()=>e("span",{class:"mb-2"},"Bill",-1)),F={class:"calc-input"},U=c(()=>e("span",null,[e("img",{src:S})],-1)),D={class:"flex flex-col mb-10"},M=c(()=>e("span",{class:"mb-4"},"Select Tip %",-1)),q={class:"grid gap-4 mobile:grid-rows-3 mobile:grid-cols-2 desktop:grid-rows-2 desktop:grid-cols-3"},z={class:"flex flex-col"},K=c(()=>e("span",{class:"mb-2"},"Number of People",-1)),R={class:"calc-input"},G=c(()=>e("span",null,[e("img",{src:B})],-1)),H={class:"bg-neutral-cyan-dark-grayish-1 w-full rounded-2xl py-14 px-10 flex flex-col justify-between content-between"},J={class:"flex flex-col w-full mb-8"},Q={class:"flex justify-between w-full mb-4"},W=c(()=>e("div",{class:"text-neutral-white flex flex-col w-full"},[e("div",{class:"text-sm"},"Tip Amount"),e("div",{class:"text-xs text-neutral-cyan-dark-grayish-2"}," / person ")],-1)),X={class:"text-neutral-cyan-dark-grayish-2 text-5xl font-bold"},Y={class:"flex justify-between w-full"},Z=c(()=>e("div",{class:"text-neutral-white flex flex-col w-full"},[e("div",{class:"text-sm"},"Total"),e("div",{class:"text-xs text-neutral-cyan-dark-grayish-2"}," / person ")],-1)),ee={class:"text-neutral-cyan-dark-grayish-2 text-5xl font-bold"},te={setup(a){const l=f(1),i=f(0),n=f(null),t=y(()=>{if(i.value>0){const d=i.value*n.value/100;return{total:d,perPerson:d/l.value}}return{total:0,perPerson:0}}),s=d=>{n.value=d},u=()=>{i.value=0,n.value=null,l.value=1},p=d=>d==n.value;return(d,o)=>(b(),h("div",L,[N,e("div",j,[e("div",A,[e("div",E,[e("div",O,[V,e("div",F,[U,m(e("input",{class:"person-input input",type:"number",dir:"rtl","onUpdate:modelValue":o[0]||(o[0]=r=>i.value=r),min:"0"},null,512),[[_,i.value,void 0,{number:!0}]])])]),e("div",D,[M,e("div",q,[e("button",{onClick:o[1]||(o[1]=r=>s(5)),class:v(["btn",{active:p(5)}])}," 5% ",2),e("button",{onClick:o[2]||(o[2]=r=>s(10)),class:v(["btn",{active:p(10)}])}," 10% ",2),e("button",{onClick:o[3]||(o[3]=r=>s(15)),class:v(["btn",{active:p(15)}])}," 15% ",2),e("button",{onClick:o[4]||(o[4]=r=>s(25)),class:v(["btn",{active:p(25)}])}," 25% ",2),e("button",{onClick:o[5]||(o[5]=r=>s(50)),class:v(["btn",{active:p(50)}])}," 50% ",2),m(e("input",{class:"input-tip input",type:"number",dir:"rtl",placeholder:"Custom",min:"0","onUpdate:modelValue":o[6]||(o[6]=r=>n.value=r)},null,512),[[_,n.value,void 0,{number:!0}]])])]),e("div",z,[K,e("div",R,[G,m(e("input",{class:"person-input input",type:"number",dir:"rtl","onUpdate:modelValue":o[7]||(o[7]=r=>l.value=r),min:"1"},null,512),[[_,l.value,void 0,{number:!0}]])])])]),e("div",H,[e("div",J,[e("div",Q,[W,e("div",X," $"+x(g(t).perPerson.toFixed(2)),1)]),e("div",Y,[Z,e("div",ee," $"+x(g(t).total.toFixed(2)),1)])]),e("button",{onClick:u,class:"btn-reset"},"RESET")])])])]))}};var se=I(te,[["__scopeId","data-v-44d0433e"]]);const oe={setup(a){return(l,i)=>(b(),C(se))}},le=T(oe);le.mount("#app");
