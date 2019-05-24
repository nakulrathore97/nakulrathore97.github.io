importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst(
      {
        cacheName: 'json-data',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 30,
            maxAgeSeconds: 5
          }),
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200]
          }),
        ],
      }
    )
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
          maxAgeSeconds: 30
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "d3072ab3693c185313018e404e07d914"
  },
  {
    "url": "index.html",
    "revision": "a40871df1e3a91dd14b9e21363d4cc71"
  },
  {
    "url": "js/app.js",
    "revision": "6b73f45a2506a26e00e425688eaa6514"
  },
  {
    "url": "images/download.png",
    "revision": "bc576db2984f865eea5c32e6dc2ef233"
  },
  {
    "url": "offline.html",
    "revision": "85d95f8af2aff464841583b476a6daf8"
  },
  {
    "url": "images/MRA-FAQ.png",
    "revision": "74c7a681bdac18ad82273153dff2777f"
  },
  {
    "url": "faq.html",
    "revision": "428ffb1ceea88dabc47dcc3c9563fc5a"
  },
  {
    "url": "images/about-us.jpeg",
    "revision": "19d56d948fb72a4fe6ce1d7fb6f0adfe"
  },
  {
    "url": "about.html",
    "revision": "1998e4de1a07d28290d1e11b075d23dd"
  }


]);