                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/assets/js/fullcalendar/list/main.js","revision":"2184828e651fe6bd2b4454a4ada47dad"},{"url":"/assets/js/fullcalendar/timegrid/main.js","revision":"d4786bfa415f53f83bb6eeb499d03de9"},{"url":"/assets/js/fullcalendar/core/main.js","revision":"4c7bb6668050ffb6525f8135161d1346"},{"url":"/assets/js/fullcalendar/daygrid/main.js","revision":"0821f88b94bc7870530cbf798ed2103a"},{"url":"/assets/js/fullcalendar/interaction/main.js","revision":"7798ac668fcfc7df0896f93efd07e764"},{"url":"/assets/css/style.css","revision":"7ae2686727899de1c788d0122bbeaf6a"},{"url":"/assets/css/mobile.css","revision":"f854df22db56f1e05f6845123ed4de51"},{"url":"/assets/css/bootstrap.css","revision":"b703dc33972ab1240997e487ba775827"},{"url":"/assets/css/fullcalendar/list/main.css","revision":"d58e8985044ac66783f957ef98165c36"},{"url":"/assets/css/fullcalendar/timegrid/main.css","revision":"638b0f6cad3108ec6dbd35fa4c9da3dd"},{"url":"/assets/css/fullcalendar/core/main.css","revision":"0da6f5908e8a6464d09be55a3176eb6c"},{"url":"/assets/css/fullcalendar/daygrid/main.css","revision":"113e8e7cbe33778ea80cf4d05453ada1"},{"url":"/assets/css/main.css","revision":"7d341b43a63377f5d7e1724958f00181"},{"url":"/assets/css/print.css","revision":"6ebf11f07d9cf5d2b0f156292705741c"},{"url":"/assets/img/photo.png","revision":"54a06c6ce0f9e2666532a288a80abb26"},{"url":"/assets/img/misc/waka-year.png","revision":"b3a59a53f325ca4a9794d57b507fae2c"},{"url":"/assets/img/icons/transformation-skill.png","revision":"d29ea1a446f5f8f03da0df8d9c9452f2"},{"url":"/assets/img/icons/training.png","revision":"137b3cb01d3049d59fea6e8c6f7f5e52"},{"url":"/assets/img/icons/certificate.png","revision":"f20315553824357b1997da3761e0318e"},{"url":"/assets/img/portfolio/violet.png","revision":"87766190ecafd8782355f5e19d3175e6"},{"url":"/assets/img/portfolio/blue.png","revision":"564d6296092100773788649cb6250ad8"},{"url":"/assets/img/portfolio/green.png","revision":"094599ec95e56371362357b83c707c73"},{"url":"/assets/img/portfolio/deep-blue.png","revision":"f9f0b1a9246298826809d3fe6b4aa46b"},{"url":"/assets/img/portfolio/orange.png","revision":"2db4f1bee0cd689d2bb2f0aa953a36a5"},{"url":"/assets/img/portfolio/red.png","revision":"83c2e7ec1d039f32c42ff8c05b7aee02"},{"url":"/assets/img/background/404.png","revision":"88567056720d47b2fa57de7f14520008"},{"url":"/assets/img/background/black.png","revision":"031449f96d05ab8de628aa357948013a"},{"url":"/assets/img/background/default.png","revision":"f7d089561008924ecb692e9b6163719a"},{"url":"/assets/img/background/404-vertical.png","revision":"ad282763126f42337174e36434ff5577"},{"url":"/assets/img/logo-icon.svg","revision":"4affcaab51c2987b5ccff54a32d8d734"},{"url":"/assets/img/icons/tag-white.svg","revision":"60f89fe2810024664344953f0234492f"},{"url":"/assets/img/icons/tag.svg","revision":"f750263e1f4d2c2f1b2811e281a8bd18"},{"url":"/assets/img/misc/knowledge-experience-strategy.jpg","revision":"d300abc2fda5db9b177f7015d0701ffa"},{"url":"/assets/fonts/MyriadPro-Regular.ttf","revision":"be82e3850974c1ccddfcf305d93ad7ce"},{"url":"/assets/fonts/MyriadPro-Bold.ttf","revision":"d5b486487376f7295854815db1a93224"},{"url":"/assets/fonts/MyriadPro-Semibold.ttf","revision":"e753d434a34f00b2afa45aa4771ecee2"},{"url":"/index.html","revision":"21a5bce96d9d17cf46b99f655e63ab5c"},{"url":"/manifest.json","revision":"769270ff481c52e0dde783e6fa0d522d"},{"url":"/404.html","revision":"e92beed0d33058d8f053f11da0371cf2"},{"url":"/favicon-16x16.png","revision":"48ef8a84c99654ed87ddd65006395731"},{"url":"/favicon-32x32.png","revision":"a5c8df9c7eec1241c4ab33774a60d0b4"}];
            workbox.core.setCacheNameDetails({
    prefix: 'hiberbee',
    suffix: 'v32',
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

