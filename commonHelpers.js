import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y,i as m}from"./assets/vendor-2e8c1f02.js";const l=document.getElementById("datetime-picker"),t=document.querySelector("[data-start]"),n=document.querySelectorAll(".timer [data-days], .timer [data-hours], .timer [data-minutes], .timer [data-seconds]");let i;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){i=e[0],i<new Date?(m.error({title:"Error",message:"Please choose a date in the future"}),t.disabled=!0):t.disabled=!1}};y("#datetime-picker",p);t.addEventListener("click",b);function b(){t.disabled=!0,l.disabled=!0;const e=setInterval(d,1e3);function d(){const a=i-new Date,{days:c,hours:u,minutes:s,seconds:r}=g(a);n[0].textContent=o(c),n[1].textContent=o(u),n[2].textContent=o(s),n[3].textContent=o(r),a<=0&&(clearInterval(e),m.success({title:"Countdown Finished",message:"The countdown has reached the end!"}),t.disabled=!1,l.disabled=!1)}}function g(e){const s=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:r,minutes:h,seconds:f}}function o(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
