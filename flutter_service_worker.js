'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "752bbbae509e8461c4662688c6230aef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "6ca08c21e05344c383e40836b0c1b71e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0f11854dbdd3b519b933b84aa4c37d7",
".git/logs/refs/heads/master": "047b505239e0ae9efa6d80b3f371a975",
".git/logs/refs/remotes/origin/master": "a52a18fe92d6d07c505a55b126c4b70e",
".git/objects/07/7c54b029f96786dadfc4ea583ad767ac7f8597": "3d0b41d18b2ae479df69ff44db855aad",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/8f4af8dd5b1b92e3db2555d4ea6097d6af05df": "8e2e92e37c329e887a0ae6cc5f063309",
".git/objects/11/b6240c07576a4b592a17121150d9a3f6b9d0f1": "38d4a1c4fd9b8d55e084773b11f6bfd9",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/4d424da4634459b857b8aae535044e8cd7f761": "7cc52e2bc47a2d2f6e2dffb88ea1a277",
".git/objects/2f/618ca4f1a86f532fdf62606000add5c8134aa3": "a4dd5fa44c69034fd96bc60072617095",
".git/objects/30/9ccc88d6b23cbb2e503e3390ee25835acff3be": "9a19fbf80b8bc3564b4b92923c55faa3",
".git/objects/39/2f04bcca4c9f53bad87b0def8c94a983e03282": "a5967e6aae53d5002e0aeb54e6ca64d3",
".git/objects/45/cc705641c140a6393d81700091a6748b93808e": "8d22b0d8e1e57afe0598a28ee8c06eba",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/493e12453794aa8e63357da1a2b5bf2d20486a": "724f2efa467bfa4d8909fadbe0d03deb",
".git/objects/4c/993813b2d8931b8f444efc4cc236ddbaaa3d04": "1a0fc9dfc8d9f94c17a6af7c2331706a",
".git/objects/4d/cb8dbc12203da058d291f47760c4ab3b7b97d3": "0a2ae8c68afd753bf7163742abcc6a0e",
".git/objects/4e/4b08d23ad01ee6388557a38f0ad343be9cee06": "520849e285913ab8c7d02407c5a4abd6",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/5f/54dbdb9598f5c8bde5d73910a7421064ba3bfb": "4cc73ad0ac2e581198bebc8ad8fe5b45",
".git/objects/69/7f57c0c099f9b99bc53c8938fb82bb188adbb5": "cb4e2489a53570eafcb806b6b2a6e2cd",
".git/objects/6c/3bf8840dbced0eda78d8cf5909b9e50a13dc9d": "20433314f8d6b9d57bf6c73d0cc3cbbd",
".git/objects/7c/22515f3ff350c999340d9f1114e437b8134d15": "ad07a5b985b66de311de49b968c98472",
".git/objects/80/996a463bcf34e913a9680948ab88fa5071c2ff": "bfdadbd386cae7423369769a595ed4a0",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/2d06781cd59e224921a7dcd7b24d564548562e": "ef58451494b27eee506bb21d3aa87636",
".git/objects/93/748bd9da8ee8accbf064c48ccd861743084d64": "1140ad1bb89b85159f9275bf3bcb3b40",
".git/objects/93/9834c10ede30bc406b887b4ec0ed2b8928ff1d": "5505235caeb3a100b74d1c7f0aa5dbf8",
".git/objects/9c/7bdcee86c57a57c69a067bb575669b09584b79": "5f1632a4ba82e8cc463d29c8e8c162cb",
".git/objects/9e/0ed8891edfbaf64313543837e94098454f2604": "9327c549860fa0833f7f68c92c6cbbe3",
".git/objects/a7/0a0ce6ae7c6791afe43a2157ace15e271ccbc9": "875fef88d25ecd48ad5f9cfe844f1836",
".git/objects/aa/0ff62f4024e77e27d1692a12207be204cdf595": "d84e14aaba03a0e1447b001fb93bc1fc",
".git/objects/af/f324dc922a456047db0c13409184d63e18ebfe": "5f7b76175382c519acb718de86701d81",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c245f30fec67119d17a3f204dc0bcaadf73f12": "be4c4ada3ee060df4189704e727add51",
".git/objects/bc/ee7865d48750328a8caaf309feea9579383df8": "b8701b0b8d503eb5e368c92d8c75ad3c",
".git/objects/c4/d8469788bc27f42bd32a33b2322e7d154d3559": "c3215488420567a963ea9bb78e8b3ba1",
".git/objects/c6/afee4c937dfe0e9c658e55986f77e0453dc5d0": "38e047eda6582e78e1bd9e4c560e65a8",
".git/objects/ca/2e41edab849d1f02f0ef31b64976f95a086e6f": "465f660a0255be8827de1810c76abf97",
".git/objects/ca/d035401bcba3377e4c654b7d3548231206a71b": "48bf5af79aa33aafc581520ff60a8ada",
".git/objects/d2/d96bbe0ebf840e5806e1b297d19679b5e15691": "f4cba27f0036d25db054f749182f1d53",
".git/objects/d9/17c559c19de057af68a0952df5dff4804a1c0a": "199743de8f9ddc905c756924c44b2b56",
".git/objects/d9/47ed0e9f63731fe31b55ae91b300d04f7e4d89": "eb5b4619cc2070c1ff8208706f7ccca2",
".git/objects/dd/516f2192ddc0964779859d77d2595fe23687ed": "16302e46725aca39322981b2330a2d45",
".git/objects/e2/7bb1fd8798e02f9dced0b98943e158def39db2": "b7af42c1e7d5611ae80bf7245b3ce0d3",
".git/objects/e3/1f586982ed3f753680d16ed9546083b08ebdb8": "dc4718adc3e57c0dd7cd1378e52585d9",
".git/objects/f3/0bf23bcfbb268bff6c216f90d7ae1129e332d1": "7786e2d567928907252901ccb96f15a0",
".git/objects/f3/81e5c6d483ed253212273df73727aec283fe1d": "89797b7d18648f3a1ca0eacc774ad956",
".git/objects/f7/49098d968e447f5384a6e429b039f0aad11e40": "83c3ad4160b2f7fa2c397a76619312bd",
".git/objects/fa/467e0fde4b6d6097350f8192ba6cb33a0a82eb": "b07076cbb73ef97f0514561871689985",
".git/objects/fe/3cec09d4839e65c4af51825d6e8abfadf99cc2": "77ee482f281c61d6bd48e925d496f485",
".git/objects/fe/c1ac52562071014d07b2a44d44e3029c53dd15": "3310d3c1b3dd719ff6ee2b0c7a6c5d2b",
".git/refs/heads/master": "230dc6ee33e0e30f763be2ac620221cf",
".git/refs/remotes/origin/master": "230dc6ee33e0e30f763be2ac620221cf",
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
"index.html": "3ccbad2609ebe53984087c13986c1e4b",
"/": "3ccbad2609ebe53984087c13986c1e4b",
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
