                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/index.html","revision":"a48acfe7967160047b5f259c1308e616"},{"url":"/404.html","revision":"3c82c01fe4d29aa25e757725ba48ee6c"},{"url":"/favicon-16x16.png","revision":"48ef8a84c99654ed87ddd65006395731"},{"url":"/favicon-32x32.png","revision":"a5c8df9c7eec1241c4ab33774a60d0b4"}];
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

