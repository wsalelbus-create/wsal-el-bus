const CACHE_NAME = 'dz-bus-tracker-v1.11-tiles';
const TILE_CACHE_NAME = 'osm-tiles-v1';
const STATIC_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/images/icon-192.png',
    '/images/icon-512.png'
];

// Maximum number of tiles to cache (prevent unlimited growth)
const MAX_TILE_CACHE_SIZE = 500;

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Caching static files');
                return cache.addAll(STATIC_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activating...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME && cache !== TILE_CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Check if this is an OpenStreetMap tile request
    if (url.hostname.includes('tile.openstreetmap.org')) {
        event.respondWith(handleTileRequest(event.request));
        return;
    }

    // Handle static assets with cache-first strategy
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(response => {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                });
            })
            .catch(() => {
                // Return offline page if available
                return caches.match('/index.html');
            })
    );
});

// Handle tile requests with intelligent caching
async function handleTileRequest(request) {
    const cache = await caches.open(TILE_CACHE_NAME);

    // Try to get from cache first
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
        console.log('Tile served from cache:', request.url);
        return cachedResponse;
    }

    // Not in cache, fetch from network
    try {
        const networkResponse = await fetch(request);

        if (networkResponse && networkResponse.status === 200) {
            // Clone before caching
            const responseToCache = networkResponse.clone();

            // Cache the tile
            await cacheTileWithLimit(cache, request, responseToCache);

            console.log('Tile fetched and cached:', request.url);
            return networkResponse;
        }

        return networkResponse;
    } catch (error) {
        console.error('Tile fetch failed:', error);
        // Return a placeholder or cached version if available
        return new Response('Tile unavailable', { status: 503 });
    }
}

// Cache tile with size limit to prevent unlimited growth
async function cacheTileWithLimit(cache, request, response) {
    // Add the new tile
    await cache.put(request, response);

    // Get all cached tiles
    const keys = await cache.keys();

    // If we exceed the limit, remove oldest tiles
    if (keys.length > MAX_TILE_CACHE_SIZE) {
        const tilesToRemove = keys.length - MAX_TILE_CACHE_SIZE;
        console.log(`Removing ${tilesToRemove} old tiles from cache`);

        // Remove the oldest tiles (first in the list)
        for (let i = 0; i < tilesToRemove; i++) {
            await cache.delete(keys[i]);
        }
    }
}
