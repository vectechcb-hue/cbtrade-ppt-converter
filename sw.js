const CACHE='cbtrade-ppt-converter-v15';
const SHELL=['./','./index.html','./converter.html','./app.html','./manifest.webmanifest','./icon.svg','./vendor/jszip.min.js','./vendor/pptxgen.min.js','./assets/vectech-logo.png.b64','./assets/thank-you-reference.png.b64'];
const CDN_HOSTS=new Set(['cdnjs.cloudflare.com','cdn.jsdelivr.net']);
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(SHELL);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET')return;
 const local=url.origin===location.origin;
 if(!local&&!CDN_HOSTS.has(url.hostname))return;
 event.respondWith((async()=>{
  const cached=await caches.match(request,{ignoreSearch:true});if(cached)return cached;
  try{const response=await fetch(request);if(response.ok||response.type==='opaque'){const cache=await caches.open(CACHE);await cache.put(request,response.clone())}return response}
  catch(error){if(local)return (await caches.match('./app.html'))||(await caches.match('./converter.html'));throw error}
 })());
});

