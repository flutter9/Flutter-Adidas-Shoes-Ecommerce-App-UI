'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/Montserrat-SemiBold.ttf": "c88cecbffad6d8e731fd95de49561ebd",
"/assets/assets/adidas.png": "ee8539022e0e935359608b353562279c",
"/assets/assets/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"/assets/assets/cart.png": "3106097de09d641018d43a8cea1f6bac",
"/assets/assets/Montserrat-Medium.ttf": "a98626e1aef6ceba5dfc1ee7112e235a",
"/assets/assets/360.png": "ce6a5a2af5af93b0aa6212ac845b68e7",
"/assets/FontManifest.json": "76c468f302d97daa3f406d48cbf38221",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "48f4e99603b40bba5a93efbc77d1b1c1",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "ac7e6224c798ab1a80295ee211d2eb02"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
