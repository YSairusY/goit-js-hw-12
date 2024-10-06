import{a as w,i as s,S}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();let g=15;async function y(r,e){const i="https://pixabay.com/api/",n=new URLSearchParams({key:"45645042-c9b2fc3a6d24b970e9e620bb9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:g}),t=`${i}?${n}`;return(await w.get(t)).data}function E({webformatURL:r,largeImageURL:e,tags:i,likes:n,views:t,comments:o,downloads:c}){return`<li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${n}</p>
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
              <p class="amount">${c}</p>
            </div>
          </div>
        </li>`}function b(r){return r.hits.map(E).join("")}const p=document.querySelector(".form");document.querySelector("#search");const l=document.querySelector(".gallery"),h=document.querySelector(".load-btn");let a=1,d="",m=0;p.addEventListener("submit",P);async function P(r){if(r.preventDefault(),f(),d=r.currentTarget.elements.input.value.trim(),l.innerHTML="",!d){s.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topRight"});return}a=1,l.innerHTML="",L();try{const e=await y(d,a);if(u(),e===void 0||e.length===0){s.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}m=e.totalHits;const i=b(e);l.innerHTML=i;const n=Math.ceil(m/g);a<n?q():f(),v()}catch(e){u(),e.name==="TypeError"&&e.message.includes("Failed to fetch")?s.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topRight"}):s.error({title:"Error",message:`Error: ${e.message}`,position:"topRight"})}p.reset()}h.addEventListener("click",$);async function $(r){a+=1,L();try{const e=await y(d,a),i=b(e);l.insertAdjacentHTML("beforeend",i),v(),R(),u();const n=Math.ceil(m/g);a>=n&&(s.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),f())}catch(e){u(),s.error({color:"red",message:`❌ Error fetching more images: ${e.message}`,position:"top"})}}function L(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",p.insertAdjacentElement("afterend",e)}}function u(){const r=document.querySelector(".loader");r&&r.remove()}function f(){h.style.display="none"}function q(){h.style.display="flex"}function R(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function v(){new S(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
