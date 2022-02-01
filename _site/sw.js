var offlineUrl = "offline.html";

self.addEventListener("install", function (e) {
    "use strict";
    e.waitUntil(
        caches.open("robsalmon").then(function (cache) {
            return cache.addAll([
		"index.html",
        "/about/index.html",
		"offline.html",
                "/css/portfolio-bootstrap.min.css",
                "/css/print.min.css",
                "/scripts/bootstrap.min.js",
                "/scripts/formcheck.js",
                "/img/rsalmonlogo.png",
               "/cv/robsalmoncv.pdf"
            ]);
        }).catch(function(error) {

        })
    );
});

self.addEventListener("fetch", function (event) {
    "use strict";
    event.respondWith(
        caches.match(event.request.url).then(function (response) {
            return response || fetch(event.request);
        }).catch(function(error) {
 return caches.match(offlineUrl);
        })
    );
});

