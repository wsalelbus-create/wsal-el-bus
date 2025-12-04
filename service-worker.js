const CACHE_NAME = 'wsal-el-bus-v1';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './pwa-mobile.css',
    './station-modal.css',
    './version-footer.css',
    './app.js',
    './leaflet.css',
    './leaflet.js',
    './images/icon16.png',
    './images/icon48.png',
    './images/icon128.png',
    './images/icon192.png',
    './images/icon512.png',
    './images/station_placeholder.png'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
