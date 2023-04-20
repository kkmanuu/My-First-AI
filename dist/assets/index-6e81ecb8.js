(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const f="/assets/bot-61bdb6bf.svg",m="/assets/user-bcdeb18e.svg",c=document.querySelector("form"),i=document.querySelector("#chat_container");let d;function p(t){t.textContent="",d=setInterval(()=>{t.textContent+=".",t.textContent==="...."&&(t.textContent="")},300)}function g(t,r){let o=0,s=setInterval(()=>{o<r.length?(t.innerHTML+=r.charAt(o),o++):clearInterval(s)},20)}function h(){const t=Date.now(),o=Math.random().toString(16);return`id-${t}-${o}`}function l(t,r,o){return`
        <div class="wrapper ${t&&"ai"}">
            <div class="chat">
                <div class="profile">
                    <img 
                      src=${t?f:m} 
                      alt="${t?"bot":"user"}" 
                    />
                </div>
                <div class="message" id=${o}>${r}</div>
            </div>
        </div>
    `}const u=async t=>{t.preventDefault();const r=new FormData(c);i.innerHTML+=l(!1,r.get("prompt")),c.reset();const o=h();i.innerHTML+=l(!0," ",o),i.scrollTop=i.scrollHeight;const s=document.getElementById(o);p(s);const e=await fetch("https://xalaat-chatgpt.onrender.com",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r.get("prompt")})});if(clearInterval(d),s.innerHTML=" ",e.ok){const a=(await e.json()).bot.trim();g(s,a)}else{const n=await e.text();s.innerHTML="Something went wrong - contact Mohamed!",alert(n)}};c.addEventListener("submit",u);c.addEventListener("keyup",t=>{t.keyCode===13&&u(t)});
