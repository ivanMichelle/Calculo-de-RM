const CACHE_NAME='calcurm-ui-v2';
const ASSETS=['/','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/icon-180.png','sw.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME&&caches.delete(k))))) });
self.addEventListener('fetch',e=>{
  const req=e.request; const isHTML=req.headers.get('accept')?.includes('text/html');
  if(isHTML){ e.respondWith(fetch(req).then(res=>{const cl=res.clone(); caches.open(CACHE_NAME).then(c=>c.put(req,cl)); return res;}).catch(()=>caches.match(req))) }
  else { e.respondWith(caches.match(req).then(c=>c||fetch(req).then(res=>{const cl=res.clone(); caches.open(CACHE_NAME).then(x=>x.put(req,cl)); return res;}))) }
});