function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),startBtn:document.querySelector("button")};function l(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(t){t.preventDefault();const o=Number(i.delay.value),n=Number(i.step.value),r=Number(i.amount.value);for(let t=0;t<r;t+=1){l(t,o+n*t).then((({position:t,delay:o})=>{e(u).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.46e22f1c.js.map
