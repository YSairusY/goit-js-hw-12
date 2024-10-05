import{a as v,i as a,S as w}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();let p=15;async function g(r,e){const n="https://pixabay.com/api/",s=new URLSearchParams({key:"45645042-c9b2fc3a6d24b970e9e620bb9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:p}),t=`${n}?${s}`;return await v.get(t).then(i=>i.data.hits).catch(i=>console.log(i))}function S({webformatURL:r,largeImageURL:e,tags:n,likes:s,views:t,comments:o,downloads:i}){return`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${n}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${s}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${i}</p>
            </div>
          </div>
        </li>`}function h(r){return r.map(S).join("")}const f=document.querySelector(".form");document.querySelector("#search");const c=document.querySelector(".gallery"),u=document.querySelector(".load-btn");let m=1,l="";b();f.addEventListener("submit",E);async function E(r){if(r.preventDefault(),l=r.currentTarget.elements.input.value.trim(),c.innerHTML="",!l){a.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topRight"});return}m=1,c.innerHTML="",b(),y();try{const e=await g(l);if(d(),e.length===0){a.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const n=h(e);c.innerHTML=n,L(),q()}catch(e){d(),e.name==="TypeError"&&e.message.includes("Failed to fetch")?a.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topRight"}):a.error({title:"Error",message:`Error: ${e.message}`,position:"topRight"})}f.reset()}u.addEventListener("click",$);async function $(r){m+=1,y();try{const e=await g(l,m),n=h(e);c.insertAdjacentHTML("beforeend",n),L(),P(),d(),e.length<p&&(a.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"top"}),u.style.display="none")}catch(e){a.error({color:"red",message:`❌ Error fetching more images: ${e.message}`,position:"top"})}finally{d()}}function y(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",f.insertAdjacentElement("afterend",e)}}function d(){const r=document.querySelector(".loader");r&&r.remove()}function b(){u.style.display="none"}function q(){u.style.display="flex"}function P(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function L(){new w(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
