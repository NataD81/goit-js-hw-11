import{i as a}from"./assets/vendor-482df00d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function l(r){const s="https://pixabay.com/api/",o="44048245-ca045a99f6e49609e4580f957",n=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${s}?${n}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e).catch(e=>{console.log("",e)})}document.querySelector(".gallery");function u(r){return`<li class="card">
    <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}">
    </a>
    <div class="card-info">
        <p class = "description"></b>Likes: ${r.likes}</p>
        <p class = "description"></b>Views: ${r.views}</p>
        <p class = "description"></b>Comments: ${r.comments}</p>
        <p class = "description"></b>Downloads: ${r.downloads}</p>
    </div>
</li>`}function d(r){return r.map(u).join("")}const f=document.querySelector(".form"),c=document.querySelector(".gallery");f.addEventListener("submit",r=>{r.preventDefault(),c.innerHTML="";const s=r.target.request.value.trim();l(s).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else{const n=d(o.hits);c.innerHTML=n,p()}}).catch(o=>console.log(o)).finally(()=>{r.target.reset(),m()})});function p(){loading.style.display="block"}function m(){loading.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
