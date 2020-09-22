'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "800c027cd5df608720ce5d99fcbd9ea5",
"assets/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/logoPNG.png": "039cffdb46fa1a599098cf2107608c60",
"assets/assets/qrPNG.png": "cd57da5934ec71804174e0320615d1e5",
"assets/assets/StudentImg.png": "80497373134a149ca1bf3cae31a9969b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "6532de513628de21f897b660a577bd79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_beautiful_popup/img/bg/authentication.png": "f35a4b18ce208c1a061b5b8e37f5c831",
"assets/packages/flutter_beautiful_popup/img/bg/camera.png": "91b3327967e4e02747721a5f0d2fee9f",
"assets/packages/flutter_beautiful_popup/img/bg/coin.png": "cabd80db0d1f5aff7e881cb4267e2468",
"assets/packages/flutter_beautiful_popup/img/bg/fail.png": "8cc3ffefbf01c756932d25b62e6031ba",
"assets/packages/flutter_beautiful_popup/img/bg/geolocation.png": "60467d11beb395f49687f6767093eeca",
"assets/packages/flutter_beautiful_popup/img/bg/gift.png": "9a75d6e641acc3d583c8a175d188a101",
"assets/packages/flutter_beautiful_popup/img/bg/notification.png": "b59cdd09d90f87673ddab1e97ec3e1cf",
"assets/packages/flutter_beautiful_popup/img/bg/red_packet.png": "3b9fb0d40d45c496eb6fdac6095c442e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_blue.png": "d25afc3a9c26c2cbdd3f7d11e09958be",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_green.png": "a6a384e73842482c3ab7424f78358cec",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange.png": "19fd0b66488935b9ec95b58a604c4f4e",
"assets/packages/flutter_beautiful_popup/img/bg/rocket_orange_2.png": "18b4c81e68a42ae97f7ade84cd6a893a",
"assets/packages/flutter_beautiful_popup/img/bg/success.png": "a7bf30ab41d44b9c52512b3cb5d813f3",
"assets/packages/flutter_beautiful_popup/img/bg/term.png": "b926bcb493dd4f2149ddc1e6332aa978",
"assets/packages/flutter_beautiful_popup/img/bg/thumb.png": "5b4693a8b6ff65d3dc619415e2bee11e",
"assets/packages/tekartik_js_qr/js/js_qr.js": "345d9ec85176bd7ac10c9941efa5048c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e5cdddfff562ba33dc7c10a02cf2221e",
"/": "e5cdddfff562ba33dc7c10a02cf2221e",
"main.dart.js": "6e266bf3eda42b81396613eef2d25fb1",
"manifest.json": "0ad3181eb0563308bad26d32fdbf0f06"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
