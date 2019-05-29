workbox.core.setCacheNameDetails({
  prefix: 'hiberbee',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
  /$/,
  workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
  /assets\/(img)/,
  workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
  /^https?:\/\/(code.jquery.com|stackpath.bootstrapcdn.com|use.typekit.net|p.typekit.net|use.fontawesome.com)/,
  workbox.strategies.staleWhileRevalidate()
);
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
