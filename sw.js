self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
  // Tambahkan file ke cache jika dibutuhkan
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});