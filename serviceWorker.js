// installing a serviceWorker
self.addEventListener("install",(event)=>{
  event.waitUntil(
    caches.open("simple").then((cache)=>{
      cache.addAll([

      ]);
    })
  )
})
// fetch event
self.addEventListener("fetch",(event)=>{
  event.respondWith(
    caches.match(event.request).then((res)=>{
      return res || fetch(event.request).then((response)=>{
        caches.open("simple").then((cache)=>{
          cache.put(event.request,response.clone());
          return response;
        })
      })
    })
  )
})
