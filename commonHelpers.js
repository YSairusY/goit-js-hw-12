import{a as E,i as a,S as R}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();let P=15;async function y(t,e){const n="https://pixabay.com/api/",s=new URLSearchParams({key:"45645042-c9b2fc3a6d24b970e9e620bb9",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:P}),r=`${n}?${s}`;return await E.get(r).then(i=>i.data.hits).catch(i=>console.log(i))}function $({webformatURL:t,largeImageURL:e,tags:n,likes:s,views:r,comments:o,downloads:i}){return`<li class="gallery-item">
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
              <p class="amount">${s}</p>
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
              <p class="amount">${i}</p>
            </div>
          </div>
        </li>`}function b(t){return t.map($).join("")}const p=document.querySelector(".form"),c=document.querySelector(".gallery"),f=document.querySelector(".load-btn");let u=1,d="",g=0,l=0;h();p.addEventListener("submit",q);async function q(t){if(t.preventDefault(),d=t.currentTarget.elements.input.value.trim(),c.innerHTML="",!d){a.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topRight"});return}u=1,l=0,c.innerHTML="",h(),L();try{const{hits:e,totalHits:n}=await y(d,u);if(g=n,l=e.length,m(),e===void 0||e.length===0){a.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const s=b(e);c.innerHTML=s,w(),l>=g?(a.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h()):v()}catch(e){m(),S(e)}p.reset()}f.addEventListener("click",k);async function k(t){u+=1,f.style.display="none",L();try{const{hits:e}=await y(d,u);l+=e.length;const n=b(e);c.insertAdjacentHTML("beforeend",n),w(),T(),m(),l>=g?(a.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),h()):v()}catch(e){m(),S(e)}}function L(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",p.insertAdjacentElement("afterend",e)}}function m(){const t=document.querySelector(".loader");t&&t.remove()}function h(){f.style.display="none"}function v(){f.style.display="flex"}function T(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function w(){new R(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}function S(t){t.name==="TypeError"&&t.message.includes("Failed to fetch")?a.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topRight"}):a.error({title:"Error",message:`Error: ${t.message}`,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
