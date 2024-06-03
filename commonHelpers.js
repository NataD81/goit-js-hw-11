import{S as d,i as c}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();function f(r){const s="https://pixabay.com/api/",o="44048245-ca045a99f6e49609e4580f957",n=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${s}?${n}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e).catch(e=>{console.log("",e)})}document.querySelector(".gallery");let a;function p(r){return`<li class="card">
    <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}">
    </a>
    <div class="card-info">
        <p class = "description"></b>Likes: ${r.likes}</p>
        <p class = "description"></b>Views: ${r.views}</p>
        <p class = "description"></b>Comments: ${r.comments}</p>
        <p class = "description"></b>Downloads: ${r.downloads}</p>
    </div>
</li>`}function m(r){return r.map(p).join("")}function y(){a?a.refresh():a=new d(".gallery a",{captionsData:"alt",captionDelay:250})}const g=document.querySelector(".form"),l=document.querySelector(".gallery"),u=document.querySelector("#loading");g.addEventListener("submit",r=>{r.preventDefault(),l.innerHTML="";const s=r.target.request.value.trim();f(s).then(o=>{if(o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}else{const n=m(o.hits);l.innerHTML=n,h(),y()}}).catch(o=>{c.error({message:`An error occurred: ${o.message}. Please try again later.`,position:"topRight"})}).finally(()=>{r.target.reset(),L()})});function h(){u.style.display="block"}function L(){u.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
