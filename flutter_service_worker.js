'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "63b1b604a48a3567f3a56eb4df105454",
"assets/AssetManifest.bin.json": "b099ae222e126a8a3d7976a7d5fb3489",
"assets/AssetManifest.json": "e4bb789d2903e10acafbd002720748b9",
"assets/assets/icon/arrow-right.png": "32f7b12e8fbc470079ddc59fc4a8b2c3",
"assets/assets/icon/briefcase.png": "a704ac65435ad44ee6da7fce9b1b25c5",
"assets/assets/icon/calendar-2.png": "4f091824e1feb145a5842c514b11da0c",
"assets/assets/icon/call.png": "f8f2da3f57582ca58676717ad24a06c9",
"assets/assets/icon/driver.png": "9349bbf56f800cd795574c78379e1b66",
"assets/assets/icon/element-4.png": "0d437304a58e7d38faecc9d176546230",
"assets/assets/icon/home-trend-up.png": "24d5106f98f21f1d250a437cccf77628",
"assets/assets/icon/info-circle.png": "1fa08d333b720864927383bb3c37a656",
"assets/assets/icon/link.png": "133d2ce14a9c97a7f620c4793a359977",
"assets/assets/icon/Logo.png": "81f521125bb4eb3ae4a06699ef6346cf",
"assets/assets/icon/Logo4x.png": "17697750fcf37d6e79d960c4748a85b7",
"assets/assets/icon/map.png": "62dc89a0145f3566fccc9e63a30ce032",
"assets/assets/icon/personalcard.png": "8f08e87673a2472f9981592d737f2562",
"assets/assets/icon/personalcard1.png": "031a41decfa067cd1ffba041a0551447",
"assets/assets/icon/printer.png": "963dd976e436a59d9551735dd90acb86",
"assets/assets/icon/profile-circle.png": "de38c93401f0ef8277955eee06aa8676",
"assets/assets/icon/receipt-search.png": "84bdbb7b6649043d3e03d53c00eedd61",
"assets/assets/icon/refresh-2.png": "951151292095f89ae65966ed4acc194c",
"assets/assets/icon/security-card.png": "6ca5f2e2f21f06430d0d75c3c91eaf46",
"assets/assets/icon/sms.png": "403891c720cde95fbd0b7c8533630ba1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "8211916e7454f3e135dcdd142f123bd7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d2c260bdb9692371b49177b128ce5ba0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f85611b41396980eece321fc0a56f0c3",
"/": "f85611b41396980eece321fc0a56f0c3",
"index.html.bak": "f85611b41396980eece321fc0a56f0c3",
"main.dart.js": "8ea1c92c78cf10c46895b4acf80c0010",
"manifest.json": "482fe6ae98205f8b8ee8bc503816f28e",
"splash/img/dark-1x.png": "9d008fc463e236b95e51655954b57e28",
"splash/img/dark-2x.png": "b957f701641fbc5ce3ff0c414bc5b98f",
"splash/img/dark-3x.png": "de8ee09ddb8f9e410ba13557132caf4d",
"splash/img/dark-4x.png": "93e77ef07b5a51cef734065874ea4fee",
"splash/img/light-1x.png": "9d008fc463e236b95e51655954b57e28",
"splash/img/light-2x.png": "b957f701641fbc5ce3ff0c414bc5b98f",
"splash/img/light-3x.png": "de8ee09ddb8f9e410ba13557132caf4d",
"splash/img/light-4x.png": "93e77ef07b5a51cef734065874ea4fee",
"version.json": "0b89f959dccf2208b1ae8e1a25c5dbb8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
