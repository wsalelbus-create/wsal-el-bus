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
    './app.js',
    './weather.js',
    './leaflet.css',
    './leaflet.js',
    './images/icon16.png',
    './images/icon48.png',
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

