const CACHE_NAME = 'product-app-cache-v1';
const urlsToCache = [
  '/wa1020/',  // 根目錄指向專案的 GitHub Pages 路徑
  '/wa1020/index.html',
  '/wa1020/latest.json',
  '/wa1020/manifest.json',
  '/wa1020/icon-192x192.png',
  '/wa1020/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
