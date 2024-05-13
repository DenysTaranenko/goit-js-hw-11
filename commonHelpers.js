import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const f=new m(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".js-search-form"),c=document.querySelector(".list-photo"),i=document.querySelector(".loader");p.addEventListener("submit",h);i.style.display="none";function h(s){s.preventDefault(),i.style.display="inline-block",c.innerHTML="";const t=s.currentTarget,n=t.elements.query.value.trim();if(n===""){l.show({title:"Error",color:"yellow",message:"Please search for something"}),i.style.display="none";return}y(n).then(o=>{if(!o.hits.length){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML=d(o.hits),f.refresh()}).catch(g).finally(()=>{t.reset(),i.style.display="none"})}function y(s){const t="https://pixabay.com/api",n="43855184-3ed97af1df9d5eb5f963fa3ef",o=new URLSearchParams({key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}/?${o}`;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function d(s){return s.map(({webformatURL:t,largeImageURL:n,tags:o,likes:e,views:r,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${o}"
              width="360"
            />
          </a>
          <ul class="img-list">
  <li class="img-info">
   <p class="img-text">Likes: <br><span>${e}</span></p>
   <p class="img-text">Views: <br><span>${r}</span></p>
   <p class="img-text">Comment: <br><span>${a}</span></p>
   <p class="img-text">Downloads: <br><span>${u}</span></p>
   </li>
   </ul>
        </li>`).join("")}function g(s){console.error(s),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
