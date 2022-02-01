var offlineUrl = "offline.html";

self.addEventListener("install", function (e) {
    "use strict";
    e.waitUntil(
        caches.open("robsalmon").then(function (cache) {
            return cache.addAll([
		"index.html",
		"offline.html",
                "/css/portfolio-bootstrap.min.css",
                "/css/print.min.css",
                "/js/bootstrap.min.js",
                "/js/formcheck.js",
                "/images/rsalmonlogo.png",
               "/cv/robsalmoncv.pdf"
            ]);
        }).catch(function(error) {

        })
    );
});

self.addEventListener("fetch", function (event) {
    "use strict";
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request).then(());
        }).catch(function(error) {
 return caches.match(offlineUrl);
        })
    );
});

