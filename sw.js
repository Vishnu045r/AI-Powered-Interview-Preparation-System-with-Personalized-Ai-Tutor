// Minimal service worker -- just enough to satisfy PWA installability.
// (No offline caching of API data, since interview data must stay live.)
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", () => {});
