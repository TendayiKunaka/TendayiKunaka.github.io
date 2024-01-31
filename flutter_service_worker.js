'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f8b306cea57f7f7054856e3757dec4b8",
"index.html": "df810a09e9c887bee62a73fd25da878a",
"/": "df810a09e9c887bee62a73fd25da878a",
"main.dart.js": "4d230883d3952bb59c873589ee0e0b9f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "63d3ee9d8bad9d0cc089eb9251d4aa2d",
"assets/AssetManifest.json": "b7fe8d0737ae8956224bbb399ddb1c38",
"assets/NOTICES": "33acadfe42ecef02646b71f915a015c7",
"assets/FontManifest.json": "ce8e3112831042697589b53f06d1ac0f",
"assets/AssetManifest.bin.json": "64f658d9bd56993f5955a4df93099eb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8ec0fb0b0e4f9e61ce2b4b5039cb6dd9",
"assets/fonts/MaterialIcons-Regular.otf": "dacad99f2702788e29937de524a5e549",
"assets/fonts/jost/Jost-Thin.ttf": "003e00442696a075f032ae244738d5d3",
"assets/fonts/jost/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/fonts/jost/Jost-Light.ttf": "a9acd0cea659e0b283a84fc489f81e8b",
"assets/assets/images/no-image-vector-icon-no-photo-sign-isolated_118339-3177.avif": "7cb82f0388d66b6c2a43a2d4af15a2dd",
"assets/assets/images/blessing.jpeg": "47f579dd4a9dd031b5756666f16b8a49",
"assets/assets/images/banner2.avif": "872d4b8253a023d4c2c0f4ffefbdce30",
"assets/assets/images/banner1.webp": "fc8f4dcb8915fbcf336bb9b7edf5531c",
"assets/assets/images/teeth.png": "ed0654f0dfaa41ffa0532e17021bd5ef",
"assets/assets/images/y1.jpg": "f08ea6b6a923ae7fa901faa56f12ecef",
"assets/assets/images/y3.jpg": "9e2839b9f4f670305883008732dd0aaf",
"assets/assets/images/mars.jpg": "b2069a8328094b5092520257fb17deb5",
"assets/assets/images/y2.jpeg": "4854b6d5af5f3d6b191bcbbc9e18a834",
"assets/assets/images/mars.png": "08fff14c6e12a2f0e4706fdc4782383b",
"assets/assets/images/x-ray.jpg": "874701f39a1370afccc1e8a5910ca33b",
"assets/assets/images/banner2.jpg": "523fd57b72cfd2bd0da20812c0f144bc",
"assets/assets/images/slider1.jpg": "5b3b8b2c596740e4439bea1973dc61f8",
"assets/assets/images/banner3.jpg": "900c629a5e9d97eea9127470cc17a665",
"assets/assets/images/service2.jpg": "779aa4812a3c0639d8432ccf18248d0f",
"assets/assets/images/slider3.png": "eee2d82469118292720f21ab81512385",
"assets/assets/images/banner1.png": "94f6562a90cbbd42912c23a3dfcfc5ba",
"assets/assets/images/slider2.jpg": "122f9f3355bd5b7fd691988231329a98",
"assets/assets/images/service1.jpg": "c7a993e16e52ac500dac6339a558515c",
"assets/assets/images/banner4.jpg": "5a2f8f6541b03dd0c0a73c4d25cc8b40",
"assets/assets/images/user.png": "0112a39260bc08788dd7c09d81727d9e",
"assets/assets/images/search.jpeg": "e86772db8374718b22152f957abec45a",
"assets/assets/images/user.webp": "23f3fe883410f08b0cedff17b9513562",
"assets/assets/images/background.png": "806d7c45dab2a2a6112cab16a03cb5c5",
"assets/assets/images/haircut2.jpg": "4be712c35c5aa1c918327cbdbb513ae2",
"assets/assets/images/haircut3.jpg": "b82e4d725d786ccea1a3956b2ee302d2",
"assets/assets/images/logo.png": "c8229cc6d11b001a93ce014e2f394f85",
"assets/assets/images/haircut.jpg": "915a1a9346b52b9336e905b1a1509b65",
"assets/assets/images/service3.jpeg": "b1be232b342b73d920fe7ed44aee7d66",
"assets/assets/images/bloodtest.jpg": "cf685de44d5093d150bcd00c6a1f6c01",
"assets/assets/images/b.jpg": "2f191405dbf1c11e72f50befdb943659",
"assets/assets/images/product2.jpg": "b1c107a31c95a0a02fb87f06c5c3ccd5",
"assets/assets/images/product3.jpg": "4cfb2a9c505bdb66feb19e454226a342",
"assets/assets/images/product1.jpg": "90a36ed0bff2286bebf0dbfa82efc07c",
"assets/assets/images/default.jpg": "203db01eae759742e65b5b9e901a7696",
"assets/assets/images/headache.png": "50b24f88c5eec8ee6261a48494b1b6c9",
"assets/assets/images/welcome.png": "8007df2f661e516aed921b77a691303e",
"assets/assets/icons/search.svg": "353e4f6ab9301637cdca37217a0c16bd",
"assets/assets/icons/scissors.svg": "db69972fc244557c4728c827f968d998",
"assets/assets/icons/cog.svg": "fdefc38c1db901d4803fef8b5803d6e2",
"assets/assets/icons/thumb-up.svg": "e0968e3e7583ed574910e25164144202",
"assets/assets/icons/adjustments.svg": "4dd3dd2686b5b8a386f4be95e4266db3",
"assets/assets/icons/view-grid.svg": "b55f2d90626f6d2e095156bebf0b91cb",
"assets/assets/icons/x-circle.svg": "8b1735deb587fe7ac4dec645c7d03a82",
"assets/assets/icons/home.svg": "603f25bc7ab1d1445e27fe7060ecc7cb",
"assets/assets/icons/chevron-down.svg": "2eea7995088bb2e9e964e566bcb94663",
"assets/assets/icons/logout.svg": "a450fd0e65cea3107244c411a9127e93",
"assets/assets/icons/microphone.svg": "3a7128cec55996b49b5c12209cef4e11",
"assets/assets/icons/verified.svg": "2681d0226d0e1bc7540b30c591320fb2",
"assets/assets/icons/shopping-bag.svg": "42d0caa44d3b0d43409a338f5e731cff",
"assets/assets/icons/chevron-right.svg": "360bb74dc73464212254cf67fe86e3ac",
"assets/assets/icons/bell-outlined.svg": "ef357fc624f940b2792d2a1519436c5a",
"assets/assets/icons/eye-outlined.svg": "f2ed53733046cdeb793eadec6f7e7218",
"assets/assets/icons/paper-clip.svg": "b28d049ea640a8d78d5e662716debed1",
"assets/assets/icons/phone-outgoing.svg": "6ffe5e0d559ff24dcdd3ee06ca1856f4",
"assets/assets/icons/chat-alt.svg": "6bf1779b9b20733a21b86ffdda7500a3",
"assets/assets/icons/location-marker.svg": "937db9741423583660550a143ad98f2a",
"assets/assets/icons/menu-alt-1.svg": "ea9723215d2fb5232bd6a7c90d2e5d91",
"assets/assets/icons/bell.svg": "dccc032c694f5ad605301b23a3fef70a",
"assets/assets/icons/clipboard-list.svg": "c720ce06e13f510b66006f4bad9212b3",
"assets/assets/icons/rss.svg": "b1efc27e71ab2ced523d2dcfa19b364e",
"assets/assets/icons/gift-outlined.svg": "3f994eba6fe831d2daf22759ba69def4",
"assets/assets/icons/calendar-outlined.svg": "e8110ccb8db5689094a7e56145ea49d6",
"assets/assets/icons/refresh.svg": "46007800d99f6fb30c540a3b41c0c913",
"assets/assets/icons/check-circle.svg": "7bdb676aaea0648a556f0f770eb50997",
"assets/assets/icons/status-online.svg": "8edabf377332a1fa77dd5339e0111dce",
"assets/assets/icons/paper-airplane.svg": "f6c422fb64ef12d49d6a41f75ad4e3dd",
"assets/assets/icons/play.svg": "d60ad4fa6d781b64f5121b22e8d0604a",
"assets/assets/icons/chat.svg": "13479ceae67caf0ac34e2618ffb88a68",
"assets/assets/icons/pencil-alt.svg": "19e529fbb7ca16e12551635273ba0d62",
"assets/assets/icons/table.svg": "65c188e5697ebda5bf3653e91ecc51cd",
"assets/assets/icons/facebook.svg": "72a7f3eff2092962117bb847c837a2b2",
"assets/assets/icons/printer.svg": "a04b9b9fb80ed4490554503ccf6c0fa8",
"assets/assets/icons/truck.svg": "1e5f84b82f177714c730adf134a424e8",
"assets/assets/icons/google.svg": "d5b50c2b9b4e27a67e4c5f53b6a88033",
"assets/assets/icons/exclamation-circle.svg": "cbab794aa88c9de7923e3ea32b8a4a48",
"assets/assets/icons/star.svg": "9cb0da9ac484c693a0797a718fa9e3e8",
"assets/assets/icons/plus-circle.svg": "27cf8b854ce95c92d85f07d66f8911bc",
"assets/assets/icons/user-circle.svg": "eb5da1f388184b91d822a88afecef040",
"assets/assets/icons/office-building.svg": "c8595dd5ea6e7b0452687b09511e235f",
"assets/assets/icons/status-offline.svg": "c9f32905cf20e279f37b29f78ba39a35",
"assets/assets/icons/user-group.svg": "62fb0b390f01cbd54d9ffb64097aeb93",
"assets/assets/icons/clock.svg": "fcee755a085f8bb7b5a9a037d06dd930",
"assets/assets/icons/question-mark-circle.svg": "6edc1c1cf2779d9281a8ad3394ef3f21",
"assets/assets/icons/user-circle-outlined.svg": "39fa0cd41aed25fa2a47e3d6281904ee",
"assets/assets/icons/eye-off-outlined.svg": "cabc28317929ba5822231b95993b9666",
"assets/assets/icons/minus-circle.svg": "71a8be17ed8686fd8bab244c0a1b9514",
"assets/assets/icons/lock-closed.svg": "5b2675194608f3709ac98c56f6c34ab4",
"assets/assets/icons/currency-dollar.svg": "0d51ee597e9d76c7b22af0fc8673432f",
"assets/assets/icons/clock-outlined.svg": "4627d39b36b113931ac9ec577f5367bb",
"assets/assets/icons/lock-open.svg": "9a7ee71874ebd3ce6b288c9bb110012f",
"assets/assets/icons/plus-outlined.svg": "38cdabf7e7e807a28b481d369f967495",
"assets/assets/icons/chevron-left.svg": "2bdf7d674458e3b74da37d7f704c6b7c",
"assets/assets/icons/dots-vertical.svg": "5bb05ff33f6e71424f828d7f5c0610b7",
"assets/assets/icons/heart.svg": "a06d77db30429e7272671ae6ceaae9b4",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
