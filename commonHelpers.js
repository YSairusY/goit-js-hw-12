import{a as S,i as a,S as E}from"./assets/vendor-Qob_5Ba8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();let p=15;async function g(t,e){const n="https://pixabay.com/api/",s=new URLSearchParams({key:"45645042-c9b2fc3a6d24b970e9e620bb9",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:p}),r=`${n}?${s}`;return await S.get(r).then(i=>i.data.hits).catch(i=>console.log(i))}function P({webformatURL:t,largeImageURL:e,tags:n,likes:s,views:r,comments:o,downloads:i}){return`<li class="gallery-item">
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
        </li>`}function y(t){return t.map(P).join("")}const h=document.querySelector(".form"),l=document.querySelector(".gallery"),f=document.querySelector(".load-btn");let d=1,c="";m();h.addEventListener("submit",$);async function $(t){if(t.preventDefault(),c=t.currentTarget.elements.input.value.trim(),l.innerHTML="",!c){a.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topRight"});return}d=1,l.innerHTML="",m(),b();try{const e=await g(c,d);if(u(),e===void 0||e.length===0){a.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}const n=y(e);l.innerHTML=n,v(),e.length<p?m():L()}catch(e){u(),w(e)}h.reset()}f.addEventListener("click",q);async function q(t){d+=1,f.style.display="none",b();try{const e=await g(c,d),n=y(e);l.insertAdjacentHTML("beforeend",n),v(),k(),u(),e.length<p?(a.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"top"}),m()):L()}catch(e){u(),w(e)}}function b(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",h.insertAdjacentElement("afterend",e)}}function u(){const t=document.querySelector(".loader");t&&t.remove()}function m(){f.style.display="none"}function L(){f.style.display="flex"}function k(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function v(){new E(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}function w(t){t.name==="TypeError"&&t.message.includes("Failed to fetch")?a.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topRight"}):a.error({title:"Error",message:`Error: ${t.message}`,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
