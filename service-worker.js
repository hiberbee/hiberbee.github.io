workbox.core.setCacheNameDetails({
    prefix: 'hiberbee',
    suffix: 'v8',
    precache: 'precache',
    runtime: 'runtime-cache'
});

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    /$/,
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    /assets\/(img)/,
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    /^https?:\/\/(use.typekit.net|p.typekit.net|use.fontawesome.com)/,
    workbox.strategies.staleWhileRevalidate()
);
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
