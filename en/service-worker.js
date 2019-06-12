                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/assets/img/misc/knowledge-experience-strategy.webp","revision":"fb69d9ec03b3d4dfca1b61873675cd09"},{"url":"/assets/img/misc/waka-year.webp","revision":"0a9b4f7d6d868b7765b01cdd8d3d23d3"},{"url":"/assets/img/portfolio/dev-ops.webp","revision":"ce9ba35ffcdcf9696947d64724d3b0b2"},{"url":"/assets/img/portfolio/technology-services.webp","revision":"3dd8570320c6a8d898dcb3f347bddeb1"},{"url":"/assets/img/portfolio/quality-assurance.webp","revision":"35905090bf74c59cb9f32258c65d8a39"},{"url":"/assets/img/portfolio/engineering-practices.webp","revision":"c5345e6c8e02f08251d363d01189d0c6"},{"url":"/assets/img/portfolio/software-engineering.webp","revision":"f4c24169c50ee6b87b381b3248e018e6"},{"url":"/assets/img/portfolio/system-design.webp","revision":"0817ce39c1c6c7eb996290319e6b5e33"},{"url":"/assets/img/background/programming.webp","revision":"ac658e6d102444713f85f0cfb0d03a23"},{"url":"/assets/img/background/default.webp","revision":"395f1c586469f8ae5c2cda788997d659"},{"url":"/manifest.json","revision":"4e2370e9071ae2f7eded96cc56427b2f"},{"url":"/favicon-16x16.png","revision":"48ef8a84c99654ed87ddd65006395731"},{"url":"/android-chrome-192x192.png","revision":"2f6c02f8e245744f825dc87e29cb9335"},{"url":"/android-chrome-512x512.png","revision":"0ef641b43fb2e9627e418417d8de4077"},{"url":"/favicon-32x32.png","revision":"a5c8df9c7eec1241c4ab33774a60d0b4"},{"url":"/apple-touch-icon.png","revision":"a9084ffa7443dfc8292c501b80ba6955"},{"url":"/service-worker.js","revision":"142f8d34a4558b9e29bf094eff43f64c"},{"url":"/index.html","revision":"fc7299283bdae1610065638a3db08502"}];
            workbox.core.setCacheNameDetails({
    prefix: 'hiberbee',
    suffix: 'v53',
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

