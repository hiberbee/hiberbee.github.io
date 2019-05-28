const filesToCache = [
  '/',
  '/terms-of-use/',
  '/manifest.json',
  '/assets/css/main.css',
  '/assets/js/main.js',
];
const staticCacheName = "v1";
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(response => {
          // TODO 5 - Respond with custom 404 page
          return caches.open(staticCacheName).then(cache => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        });

      }).catch(error => {
      // TODO 6 - Respond with custom offline page
    })
  );
});
