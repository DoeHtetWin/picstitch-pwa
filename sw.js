const CACHE_NAME = "picstitch-v34.6"; 

const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./cropper.min.css",
  "./mobile-drag-drop.css",
  "./mobile-drag-drop.js",
  "./cropper.min.js",
  "./jspdf.umd.min.js",
  "./image/logo-192.png" 
];

// Step 1: Install and Cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Force the waiting service worker to become the active service worker IMMEDIATELY
  self.skipWaiting(); 
});

// Step 2: Clean up old versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Ensure the new service worker immediately takes control of all open pages
  event.waitUntil(clients.claim());
});

// Step 3: Intercept network requests
self.addEventListener("fetch", (event) => {
  // Add this guard clause! Ignore blob: and data: URIs.
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. Kick off network request in the background
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          // Update the cache with the fresh version
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        console.log("Offline and file not found:", event.request.url);
      });

      // 2. Immediately return cached response if it exists, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});