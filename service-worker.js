                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/assets/css/style.css","revision":"7ae2686727899de1c788d0122bbeaf6a"},{"url":"/assets/css/mobile.css","revision":"f854df22db56f1e05f6845123ed4de51"},{"url":"/assets/css/main.css","revision":"f89ba990a977935c54dd846dd49dcee4"},{"url":"/assets/img/photo.png","revision":"54a06c6ce0f9e2666532a288a80abb26"},{"url":"/assets/img/portfolio/violet.png","revision":"87766190ecafd8782355f5e19d3175e6"},{"url":"/assets/img/portfolio/blue.png","revision":"564d6296092100773788649cb6250ad8"},{"url":"/assets/img/portfolio/green.png","revision":"094599ec95e56371362357b83c707c73"},{"url":"/assets/img/portfolio/deep-blue.png","revision":"f9f0b1a9246298826809d3fe6b4aa46b"},{"url":"/assets/img/portfolio/orange.png","revision":"2db4f1bee0cd689d2bb2f0aa953a36a5"},{"url":"/assets/img/portfolio/red.png","revision":"83c2e7ec1d039f32c42ff8c05b7aee02"},{"url":"/assets/img/background/404.png","revision":"88567056720d47b2fa57de7f14520008"},{"url":"/assets/img/background/black.png","revision":"031449f96d05ab8de628aa357948013a"},{"url":"/assets/img/background/default.png","revision":"f7d089561008924ecb692e9b6163719a"},{"url":"/assets/img/background/404-vertical.png","revision":"ad282763126f42337174e36434ff5577"},{"url":"/assets/img/logo-icon.svg","revision":"4affcaab51c2987b5ccff54a32d8d734"},{"url":"/assets/fonts/MyriadPro-Regular.ttf","revision":"be82e3850974c1ccddfcf305d93ad7ce"},{"url":"/assets/fonts/MyriadPro-Bold.ttf","revision":"d5b486487376f7295854815db1a93224"},{"url":"/assets/fonts/MyriadPro-Semibold.ttf","revision":"e753d434a34f00b2afa45aa4771ecee2"},{"url":"/index.html","revision":"6761219a9ed5088bf9906d9c16eb9f16"},{"url":"/manifest.json","revision":"769270ff481c52e0dde783e6fa0d522d"},{"url":"/404.html","revision":"ef8f8d5d516e03615edc817211412e61"},{"url":"/favicon-16x16.png","revision":"48ef8a84c99654ed87ddd65006395731"},{"url":"/favicon-32x32.png","revision":"a5c8df9c7eec1241c4ab33774a60d0b4"}];
            workbox.core.setCacheNameDetails({
    prefix: 'hiberbee',
    suffix: 'v17',
    precache: 'precache',
    runtime: 'runtime-cache'
});

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    })
);
workbox.routing.registerRoute(
    new RegExp('/assets/'),
    new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
    })
);

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

