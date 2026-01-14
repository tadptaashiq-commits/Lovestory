const CACHE = "ev-showroom-v1";

const FILES = [
  "index.html",
  "about.html",
  "blog.html",
  "career.html",
  "contact.html",
  "ev-technology.html",
  "faq.html",
  "gallery.html",
  "insurance.html",
  "models.html",
  "reviews.html",
  "service.html",
  "warranty.html",
  "css/style.css"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});