const CACHE_NAME = 'wsal-el-bus-v4';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './pwa-mobile.css',
    './station-modal.css',
    './version-footer.css',
    './universal-install.css',
    './weather-display.css',
    './traffic-indicator.css',
    './app.js',
    './weather.js',
    './leaflet.css',
    './leaflet.js',
    './images/icon16.png',
    './images/icon48.png',
    './images/icon128.png',
    './images/icon192.png',
    './images/icon512.png',
    './images/station_placeholder.png'
];

// Listen for SKIP_WAITING message
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('⏭️ Skipping waiting - activating new version immediately');
        self.skipWaiting();
    }
});

// Install event - cache resources
self.addEventListener('install', (event) => {
    console.log('📦 Installing new service worker...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('✅ Caching app files');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('🔄 Activating new service worker...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('✅ New version activated!');
            // Take control of all pages immediately
            return self.clients.claim();
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
            })
    );
});
