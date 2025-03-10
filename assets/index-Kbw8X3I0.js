(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function h(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=h(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>
`;const g=document.querySelector(".player--0"),S=document.querySelector(".player--1"),p=document.querySelector("#score--0"),y=document.querySelector("#score--1"),a=document.querySelector("#current--0"),u=document.querySelector("#current--1"),v=document.querySelector(".btn--new"),C=document.querySelector(".btn--hold"),L=document.querySelector(".btn--roll"),i=document.querySelector(".dice");let o,n,t;const m=()=>{o=[0,0],n=0,t=0,i.classList.add("hidden"),p.textContent=0,y.textContent=0,a.textContent=0,u.textContent=0};m();L.addEventListener("click",q);function q(){const c=Math.trunc(Math.random()*6+1);i.classList.remove("hidden"),i.src=`dice-${c}.png`,c!==1?P(c):f()}function P(c){n+=c,t===0?a.textContent=n:u.textContent=n}function f(){b(),g.classList.toggle("player--active"),S.classList.toggle("player--active"),t=t===0?1:0}function b(){n=0,t===0?a.textContent=n:u.textContent=n}C.addEventListener("click",function(){o[t]+=n,t===0?p.textContent=o[t]:y.textContent=o[t],o[t]>=100?(document.querySelector(`.player--${t}`).classList.add("player--winner"),alert(`Player ${t+1} wins!`)):f(),b()});v.addEventListener("click",m);
