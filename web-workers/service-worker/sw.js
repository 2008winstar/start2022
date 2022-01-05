let counter = 0;
self.oninstall = (event) => {
  // self.caches can be used to configure caches that store the result of network requests
  console.log('service worker install');
};

self.onactivate = (event) => {
  console.log('service worker activate');
  event.waitUntil(self.clients.claim());
};

self.onfetch = (event) => {
  console.log('fetch', event.request.url);

  if (event.request.url.endsWith('/data.json')) {
    counter++;
    event.respondWith(new Response(JSON.stringify({counter}), {
      headers: {
        'Content-Type': 'application/json'
      }
    }));
    return;
  }

  // fallback to normal HTTP request
  event.respondWith(fetch(event.request));
}

