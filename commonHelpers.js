import{a as E,i as a,S as P}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();let $=15;async function y(t,e){const n="https://pixabay.com/api/",i=new URLSearchParams({key:"45645042-c9b2fc3a6d24b970e9e620bb9",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:$}),r=`${n}?${i}`;return await E.get(r).then(s=>s.data.hits).catch(s=>console.log(s))}function q({webformatURL:t,largeImageURL:e,tags:n,likes:i,views:r,comments:o,downloads:s}){return`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${n}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${r}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${s}</p>
            </div>
          </div>
        </li>`}function b(t){return t.map(q).join("")}const g=document.querySelector(".form"),c=document.querySelector(".gallery"),h=document.querySelector(".load-btn");let u=1,d="",p=0,l=0;f();g.addEventListener("submit",R);async function R(t){if(t.preventDefault(),d=t.currentTarget.elements.input.value.trim(),c.innerHTML="",!d){a.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topRight"});return}u=1,l=0,c.innerHTML="",f(),L();try{const{hits:e,totalHits:n}=await y(d,u);if(p=n,l=e.length,m(),e===void 0||e.length===0){a.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const i=b(e);c.innerHTML=i,w(),l>=p?(a.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"top"}),f()):v()}catch(e){m(),S(e)}g.reset()}h.addEventListener("click",k);async function k(t){u+=1,h.style.display="none",L();try{const{hits:e}=await y(d,u);l+=e.length;const n=b(e);c.insertAdjacentHTML("beforeend",n),w(),T(),m(),l>=p?(a.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"top"}),f()):v()}catch(e){m(),S(e)}}function L(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",g.insertAdjacentElement("afterend",e)}}function m(){const t=document.querySelector(".loader");t&&t.remove()}function f(){h.style.display="none"}function v(){h.style.display="flex"}function T(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function w(){new P(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}function S(t){t.name==="TypeError"&&t.message.includes("Failed to fetch")?a.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topRight"}):a.error({title:"Error",message:`Error: ${t.message}`,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
