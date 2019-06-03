                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/assets/js/main.js","revision":"b0512f4d7f9268689914484a8d4c8479"},{"url":"/assets/js/fullcalendar/list/main.js","revision":"2184828e651fe6bd2b4454a4ada47dad"},{"url":"/assets/js/fullcalendar/timegrid/main.js","revision":"d4786bfa415f53f83bb6eeb499d03de9"},{"url":"/assets/js/fullcalendar/core/main.js","revision":"4c7bb6668050ffb6525f8135161d1346"},{"url":"/assets/js/fullcalendar/daygrid/main.js","revision":"0821f88b94bc7870530cbf798ed2103a"},{"url":"/assets/js/fullcalendar/interaction/main.js","revision":"7798ac668fcfc7df0896f93efd07e764"},{"url":"/assets/css/style.css","revision":"7ae2686727899de1c788d0122bbeaf6a"},{"url":"/assets/css/mobile.css","revision":"f854df22db56f1e05f6845123ed4de51"},{"url":"/assets/css/bootstrap.css","revision":"19cbb9d091ae46e9634cecee7c02cafd"},{"url":"/assets/css/fullcalendar/list/main.css","revision":"d58e8985044ac66783f957ef98165c36"},{"url":"/assets/css/fullcalendar/timegrid/main.css","revision":"638b0f6cad3108ec6dbd35fa4c9da3dd"},{"url":"/assets/css/fullcalendar/core/main.css","revision":"0da6f5908e8a6464d09be55a3176eb6c"},{"url":"/assets/css/fullcalendar/daygrid/main.css","revision":"113e8e7cbe33778ea80cf4d05453ada1"},{"url":"/assets/css/main.css","revision":"5cd21220e0f6eaf30f497e53494afefb"},{"url":"/assets/css/print.css","revision":"6ebf11f07d9cf5d2b0f156292705741c"},{"url":"/assets/img/photo.png","revision":"54a06c6ce0f9e2666532a288a80abb26"},{"url":"/assets/img/misc/waka-year.png","revision":"b3a59a53f325ca4a9794d57b507fae2c"},{"url":"/assets/img/icons/transformation-skill.png","revision":"d29ea1a446f5f8f03da0df8d9c9452f2"},{"url":"/assets/img/icons/training.png","revision":"137b3cb01d3049d59fea6e8c6f7f5e52"},{"url":"/assets/img/icons/certificate.png","revision":"f20315553824357b1997da3761e0318e"},{"url":"/assets/img/portfolio/violet.png","revision":"87766190ecafd8782355f5e19d3175e6"},{"url":"/assets/img/portfolio/blue.png","revision":"564d6296092100773788649cb6250ad8"},{"url":"/assets/img/portfolio/green.png","revision":"094599ec95e56371362357b83c707c73"},{"url":"/assets/img/portfolio/deep-blue.png","revision":"f9f0b1a9246298826809d3fe6b4aa46b"},{"url":"/assets/img/portfolio/orange.png","revision":"2db4f1bee0cd689d2bb2f0aa953a36a5"},{"url":"/assets/img/portfolio/red.png","revision":"83c2e7ec1d039f32c42ff8c05b7aee02"},{"url":"/assets/img/background/404.png","revision":"88567056720d47b2fa57de7f14520008"},{"url":"/assets/img/background/black.png","revision":"031449f96d05ab8de628aa357948013a"},{"url":"/assets/img/background/default.png","revision":"f7d089561008924ecb692e9b6163719a"},{"url":"/assets/img/background/404-vertical.png","revision":"ad282763126f42337174e36434ff5577"},{"url":"/assets/img/logo-icon.svg","revision":"4affcaab51c2987b5ccff54a32d8d734"},{"url":"/assets/img/icons/mail.svg","revision":"c22305019b8a078610ea2575a17f6fd6"},{"url":"/assets/img/icons/linkedin.svg","revision":"e518d67a361d006c44c71161ff62881c"},{"url":"/assets/img/icons/rss.svg","revision":"6c26f5665a1aaa7b2c39204c22281443"},{"url":"/assets/img/icons/vcard.svg","revision":"c96ada597ee29e24f58c64349e130337"},{"url":"/assets/img/icons/burger.svg","revision":"52be795cda974ee0984c8702524ef09f"},{"url":"/assets/img/icons/telegram.svg","revision":"9cba0eef8906daa1f2f143aaa5fd995e"},{"url":"/assets/img/icons/tag.svg","revision":"f750263e1f4d2c2f1b2811e281a8bd18"},{"url":"/assets/img/icons/moon.svg","revision":"7eb128b5fb05688f69113b1677a40f36"},{"url":"/assets/img/icons/messenger.svg","revision":"76ad1f719b188894d73fec1bc14c6fb4"},{"url":"/assets/img/icons/instagram.svg","revision":"397e6c2967b8f14cbbca30507e92b90a"},{"url":"/assets/img/icons/facebook.svg","revision":"b13c87c40cd96e7f291dd7f74f5f0f0b"},{"url":"/assets/img/misc/knowledge-experience-strategy.jpg","revision":"d300abc2fda5db9b177f7015d0701ffa"},{"url":"/assets/fonts/MyriadPro-Regular.ttf","revision":"be82e3850974c1ccddfcf305d93ad7ce"},{"url":"/assets/fonts/MyriadPro-Bold.ttf","revision":"d5b486487376f7295854815db1a93224"},{"url":"/assets/fonts/MyriadPro-Semibold.ttf","revision":"e753d434a34f00b2afa45aa4771ecee2"},{"url":"/manifest.json","revision":"0984c0092cdd37ac3c5aaec6c7c622a6"},{"url":"/favicon-16x16.png","revision":"48ef8a84c99654ed87ddd65006395731"},{"url":"/favicon-32x32.png","revision":"a5c8df9c7eec1241c4ab33774a60d0b4"},{"url":"/index.html","revision":"fe79301bc5b684b7935544d6fd100857"},{"url":"/404.html","revision":"314ee931fb79c2af815955fefb312bde"},{"url":"/faq/index.html","revision":"5276fc91510fdb98a7a62c11a6f9efef"},{"url":"/privacy-policy/index.html","revision":"52443780e17e8f09ed23bde68d77fa59"},{"url":"/taxonomy/index.html","revision":"feceaa396a4009e5dda0f1e745735d04"},{"url":"/terms-of-use/index.html","revision":"a2340c75b47a32ade1ca47fe18f571ee"}];
            workbox.core.setCacheNameDetails({
    prefix: 'hiberbee',
    suffix: 'v36',
    precache: 'precache',
    runtime: 'runtime-cache'
});

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|ttf|webp|svg)$/,
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

