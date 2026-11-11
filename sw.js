const V='sc-pos-v2',CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!=V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
if(r.method!='GET'||/firestore\.googleapis\.com|identitytoolkit|securetoken/.test(u.hostname))return;
e.respondWith(fetch(r).then(res=>{if(res&&(res.status==200||res.type=='opaque')&&(u.origin==location.origin||/gstatic\.com|fonts\.googleapis\.com/.test(u.hostname))){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(m=>m||(r.mode=='navigate'?caches.match('index.html'):Response.error()))))});
