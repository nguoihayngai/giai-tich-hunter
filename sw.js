const CACHE_NAME = 'giaitich-hunter-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './questions.js',
  './supabase-client.js',
  './ai-generator.js',
  './app.js',
  './manifest.json',
  './icon.svg',
  './images/bai1.png',
  './images/bai2.png',
  './images/bai8.png',
  './images/bai21.png',
  './images/bai9_sol.svg',
  './images/bai21_sol.svg',
  './images/bai23_sol.svg',
  './images/bai25_sol.svg',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js',
  'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(() => {
        // Ignore external CDN failure during offline install
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Don't cache Gemini API or Supabase API requests
  if (
    event.request.url.includes('generativelanguage.googleapis.com') ||
    event.request.url.includes('supabase.co')
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
