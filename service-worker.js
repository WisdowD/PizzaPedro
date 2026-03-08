// service-worker.js
const CACHE_NAME = "pizzaria-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
];

// Instala e faz cache dos assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Intercepta requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
