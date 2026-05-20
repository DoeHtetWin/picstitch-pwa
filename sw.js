// Change this number EVERY time you update the app!
const CACHE_NAME = "picstitch-v17"; 

// CRITICAL: Every single file must be spelled perfectly. 
// If even one file is missing, iOS will refuse to work offline.
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./cropper.min.css",
  "./mobile-drag-drop.css",
  "./mobile-drag-drop.js",
  "./cropper.min.js",
  "./jspdf.umd.min.js",
  "./image/icon-192.png" // Make sure this folder and file exist!
];

// Step 1: Install the Service Worker and download the files into memory
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting(); 
});

// Step 2: Clean up old versions of the app to free up phone storage
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
  self.clients.claim();
});

// Step 3: THE IOS FIX - Intercept network requests and serve from cache!
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 1. If the file is in the offline cache, instantly return it
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // 2. If it's not in the cache, try to fetch it from the internet
      return fetch(event.request).catch(() => {
        // 3. If the internet is off AND it's not cached, 
        // silently fail instead of crashing the app
        console.log("Offline and file not found in cache:", event.request.url);
      });
    })
  );
});
