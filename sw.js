self.addEventListener('install', (event) => {
  console.log('Service Worker: Installé');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activé');
});

self.addEventListener('fetch', (event) => {
  // Interception basique des requêtes pour le mode hors-ligne
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
