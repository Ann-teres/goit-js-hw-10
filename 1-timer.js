/* empty css                      */import{i as d}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{let n=0,r=null,i=null,s=!1;const e=document.querySelector("#datetime-picker"),t=document.querySelector("button[data-start]"),u=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");function c(o){return String(o).padStart(2,"0")}function b(o){const L=Math.floor(o/864e5),v=Math.floor(o%864e5/36e5),S=Math.floor(o%864e5%36e5/6e4),C=Math.floor(o%864e5%36e5%6e4/1e3);return{days:L,hours:v,minutes:S,seconds:C}}const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(o){n=o[0],n<=new Date?(d.show({title:"Помилка",message:"Please choose a date in the future",position:"topRight",backgroundColor:"#ff0000",timeout:3e3}),t.setAttribute("disabled",""),n=0):t.removeAttribute("disabled")}};if(!e){console.error("Елемент #datetime-picker не знайдено!");return}flatpickr(e,g),t.addEventListener("click",()=>{if(!n){d.show({title:"Помилка",message:"Please choose a valid future date",position:"topRight",backgroundColor:"#ff0000",timeout:3e3});return}r||s||(e.setAttribute("disabled",""),t.setAttribute("disabled",""),r=setInterval(()=>{if(i=n-new Date,i<=0){clearInterval(r),t.setAttribute("disabled",""),e.removeAttribute("disabled"),s||(d.show({title:"Timer Finished",message:"The time has arrived!",position:"topRight",backgroundColor:"#28a745",timeout:3e3}),s=!0);return}const{days:a,hours:l,minutes:f,seconds:m}=b(i);u.textContent=c(a),h.textContent=c(l),p.textContent=c(f),y.textContent=c(m)},1e3))})});
//# sourceMappingURL=1-timer.js.map
