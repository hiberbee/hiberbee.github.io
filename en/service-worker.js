                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/assets/img/misc/knowledge-experience-strategy.webp","revision":"fb69d9ec03b3d4dfca1b61873675cd09"},{"url":"/assets/img/misc/waka-year.webp","revision":"0a9b4f7d6d868b7765b01cdd8d3d23d3"},{"url":"/assets/img/posters/do-020.webp","revision":"430e101de7bbe1a877767efebca3b535"},{"url":"/assets/img/posters/do-027.webp","revision":"f32ae0f0e2f3dc2ffe39134d82f301b1"},{"url":"/assets/img/posters/do-023.webp","revision":"1fd3950bf6b224650850badefd949434"},{"url":"/assets/img/posters/ts-010.webp","revision":"07ebfbd6ab87215db71b5427bd29e853"},{"url":"/assets/img/posters/ep-030.webp","revision":"00757adf463478608397489f8bae4376"},{"url":"/assets/img/posters/sa-000.webp","revision":"64481b1046524adadb81561d0aa67352"},{"url":"/assets/img/posters/ts-020.webp","revision":"0d8f1749b1f9775330f41f8dc9af5419"},{"url":"/assets/img/posters/do-001.webp","revision":"e6d737f122dd0338dca8c98aef0ebfc1"},{"url":"/assets/img/posters/qa-012.webp","revision":"6656e46e7c2eb5e442516f359fe484ce"},{"url":"/assets/img/posters/do-022.webp","revision":"6f2f38b23276753a916791992aa5c4df"},{"url":"/assets/img/posters/do-021.webp","revision":"0cb86c8e995c0b01816c38beee51dc44"},{"url":"/assets/img/posters/do-026.webp","revision":"946b02a5a2d9307f746db832035cecc0"},{"url":"/assets/img/posters/do-030.webp","revision":"94966dbcccb9133f69fd184d08d98240"},{"url":"/assets/img/posters/qa-011.webp","revision":"5d2b966307c76f9de34f400f28413e92"},{"url":"/assets/img/posters/do-024.webp","revision":"98bfbb70cb04f58424778020a00ef371"},{"url":"/assets/img/posters/qa-010.webp","revision":"4a5aef1a7216999dcfc65569db14a315"},{"url":"/assets/img/posters/do-025.webp","revision":"965062964b63c658fc49a01e9efa6b07"},{"url":"/assets/img/posters/ts-021.webp","revision":"49544620b1085fcecdae3013c99ea713"},{"url":"/assets/img/posters/ts-050.webp","revision":"606cf44f516ab9c9b41a607900708a45"},{"url":"/assets/img/posters/do-010.webp","revision":"26194b3fbc3a978a4e797623be565b97"},{"url":"/assets/img/posters/qa-030.webp","revision":"a7072428eefbc16786da8b2ae6e14578"},{"url":"/assets/img/posters/qa-020.webp","revision":"b155f1554c4694d2d0c5e948edb1b22c"},{"url":"/assets/img/posters/tc-000.webp","revision":"8a572e063139009d48b7f422f5abed50"},{"url":"/assets/img/posters/ do-010.webp","revision":"2cb44eab800e13b01e375852139b1f2d"},{"url":"/assets/img/portfolio/dev-ops.webp","revision":"ce9ba35ffcdcf9696947d64724d3b0b2"},{"url":"/assets/img/portfolio/technology-services.webp","revision":"3dd8570320c6a8d898dcb3f347bddeb1"},{"url":"/assets/img/portfolio/quality-assurance.webp","revision":"35905090bf74c59cb9f32258c65d8a39"},{"url":"/assets/img/portfolio/engineering-practices.webp","revision":"c5345e6c8e02f08251d363d01189d0c6"},{"url":"/assets/img/portfolio/software-engineering.webp","revision":"f4c24169c50ee6b87b381b3248e018e6"},{"url":"/assets/img/portfolio/system-design.webp","revision":"0817ce39c1c6c7eb996290319e6b5e33"},{"url":"/assets/img/background/default.webp","revision":"395f1c586469f8ae5c2cda788997d659"},{"url":"/manifest.json","revision":"76f660a65eb0af70494e3bbcdfac5697"},{"url":"/favicon-16x16.png","revision":"48ef8a84c99654ed87ddd65006395731"},{"url":"/android-chrome-192x192.png","revision":"2f6c02f8e245744f825dc87e29cb9335"},{"url":"/android-chrome-512x512.png","revision":"0ef641b43fb2e9627e418417d8de4077"},{"url":"/favicon-32x32.png","revision":"a5c8df9c7eec1241c4ab33774a60d0b4"},{"url":"/apple-touch-icon.png","revision":"a9084ffa7443dfc8292c501b80ba6955"},{"url":"/service-worker.js","revision":"c30f7514a9dc022804a8648f3437a548"},{"url":"/index.html","revision":"d549787f18b202ffcd443b54cd34f155"}];
            workbox.core.setCacheNameDetails({
    prefix: 'hiberbee',
    suffix: 'v45',
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

