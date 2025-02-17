(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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

`;const p=document.querySelector(".player--0"),y=document.querySelector(".player--1"),m=document.querySelector("#score--0"),f=document.querySelector("#score--1"),i=document.querySelector("#current--0"),u=document.querySelector("#current--1");document.querySelector(".btn--new");document.querySelector(".btn--hold");const b=document.querySelector(".btn--roll"),l=document.querySelector(".dice");let r,n;const h=()=>{r=0,n=0,l.classList.add("hidden"),m.textContent=0,f.textContent=0,i.textContent=0,u.textContent=0};h();b.addEventListener("click",g);function g(){const c=Math.trunc(Math.random()*6+1);l.classList.remove("hidden"),l.src=`dice-${c}.png`,c!==1?S(c):q()}function S(c){r+=c,n===0?i.textContent=r:u.textContent=r}function q(){v(),p.classList.toggle("player--active"),y.classList.toggle("player--active"),n=n===0?1:0}function v(){r=0,n===0?i.textContent=r:u.textContent=r}
