if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>r(e,o),l={module:{uri:o},exports:c,require:t};s[o]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"trial_demo"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/chunk-vendors.5487efc8.css",revision:null},{url:"/index.html",revision:"51c4e8d832d4c20f0ccf8b6dd849151c"},{url:"/js/about.576168be.js",revision:null},{url:"/js/app.5a25607d.js",revision:null},{url:"/js/chunk-vendors.60848398.js",revision:null},{url:"/manifest.json",revision:"4d418ae37dbccc7331a0b3a2b8deec9b"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
