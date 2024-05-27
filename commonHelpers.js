import{S as u,i as d}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function f(r){const n="https://pixabay.com/api/",o="44048245-ca045a99f6e49609e4580f957",s=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${n}?${s}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e).catch(e=>{console.log("",e)})}document.querySelector(".gallery");let a;function p(r){return`<li class="card">
    <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}">
    </a>
    <div class="card-info">
        <p class = "description"></b>Likes: ${r.likes}</p>
        <p class = "description"></b>Views: ${r.views}</p>
        <p class = "description"></b>Comments: ${r.comments}</p>
        <p class = "description"></b>Downloads: ${r.downloads}</p>
    </div>
</li>`}function m(r){return r.map(p).join("")}function y(){a?a.refresh():a=new u(".gallery a",{captionsData:"alt",captionDelay:250})}const g=document.querySelector(".form"),c=document.querySelector(".gallery");document.querySelector("#loading");g.addEventListener("submit",r=>{r.preventDefault(),c.innerHTML="";const n=r.target.request.value.trim();f(n).then(o=>{if(o.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else{const s=m(o.hits);c.innerHTML=s,h(),y()}}).catch(o=>console.log(o)).finally(()=>{r.target.reset(),l()})});function h(){loading.style.display="block"}function l(){loading.style.display="none"}window.addEventListener("load",()=>{l()});
//# sourceMappingURL=commonHelpers.js.map
