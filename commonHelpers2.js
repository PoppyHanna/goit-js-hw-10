import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as r}from"./assets/vendor-2e8c1f02.js";const t=document.querySelector(".form"),n=t.querySelector('input[name="delay"]'),l=t.querySelectorAll('input[name="state"]');t.addEventListener("submit",o=>{o.preventDefault();const a=Array.from(l).find(e=>e.checked);if(!n.checkValidity()||!a){r.error({title:"Error",message:"Please enter a valid delay and select a state."});return}const s=parseInt(n.value);new Promise((e,i)=>{setTimeout(()=>{a.value==="fulfilled"?e(s):i(s)},s)}).then(e=>{r.success({message:`Fulfilled promise in ${e}ms`})}).catch(e=>{r.error({message:`Rejected promise in ${e}ms`})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map