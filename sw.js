/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bars.png",
    "revision": "d5a60443e0e7a7336081d39718da9168"
  },
  {
    "url": "close.png",
    "revision": "ed64fc2158b334212c20a4e63fadc97f"
  },
  {
    "url": "close1.png",
    "revision": "db0db4df71f6578ad3c182a7ecbfc79b"
  },
  {
    "url": "down.png",
    "revision": "d62a4d2e0ca909134a312c4035f53c35"
  },
  {
    "url": "download.png",
    "revision": "92949229d5e3ab02a7d6c16dbf417a21"
  },
  {
    "url": "edit.png",
    "revision": "147d430b24e4094a254fa5635b214a3b"
  },
  {
    "url": "home.png",
    "revision": "b58ba8517d83638d26fd5acf327c4788"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "a1ef1b9708d1ea183a9bc3c84ae12f2b"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "46191e632fc0608fddd6807fb3c0e195"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "cb261019ea0d6deebd87ade090d74447"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "add0be3f5939bed00e3d5c25d3704b8c"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "944845293fe2d79da51210d2abef435a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "42ae7882c8e77d70b4139cefcd7a2a4d"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "afe3b946a130e48a1beff91016a9ab12"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "997a884575b29116abb58e1d46a79885"
  },
  {
    "url": "includesw.js",
    "revision": "c79f9aca0c781db80248971330ddd1e5"
  },
  {
    "url": "index.html",
    "revision": "b39256b2ed78694e4b97adb541abb884"
  },
  {
    "url": "manifest.json",
    "revision": "d5ab7e40096ddb1d5dbd26853c77b54c"
  },
  {
    "url": "minus.png",
    "revision": "cc179125f6d7040fb4ddf57c4666117d"
  },
  {
    "url": "offline_bills.html",
    "revision": "e18c4ed518e203451d13a6f74f6b28c7"
  },
  {
    "url": "offline_edit.html",
    "revision": "5dcb1a8137e1f475f3979e318bbe5f00"
  },
  {
    "url": "offline.html",
    "revision": "f5544a374605f2ccfc065e33d450898b"
  },
  {
    "url": "print.png",
    "revision": "18f4a2368a0c67d9d43118730cd2e5e7"
  },
  {
    "url": "reprint.html",
    "revision": "884dbae1557025e3d0dbbe7bf3dbf9a5"
  },
  {
    "url": "signout.png",
    "revision": "ecb79fd05be5866ee7bb70caf94339ab"
  },
  {
    "url": "submit.png",
    "revision": "7a34a84d5f2d792b786a400c6e141744"
  },
  {
    "url": "trash2.png",
    "revision": "660d65ade837efaefc5da72f2d132156"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
