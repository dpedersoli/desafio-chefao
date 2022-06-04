const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ]; //a segunda é a página offline que entra quando entrar no url (pela segunda vez), sem internet

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
}); //até aqui então eu já armazenei em cache no browser do usuário os arquivos 'index' e 'offline'.html

// // Listen for requests -> aqui vou manipular o que fazer com os arquivos
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// // Activate the SW -> ativando o eventListner
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
}); //toda vez que a página der 'load' ele vai deletar todas as versões anteriores de cache e armazenar apenas a CACHE_NAME 'version-1'