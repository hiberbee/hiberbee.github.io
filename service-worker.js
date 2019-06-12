workbox.core.setCacheNameDetails({
    prefix: 'hiberbee',
    suffix: 'v49',
    precache: 'precache',
    runtime: 'runtime-cache'
});

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    new RegExp('/assets/'),
    workbox.strategies.cacheFirst({
        cacheName: 'assets',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    })
);

workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate({})
);

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
