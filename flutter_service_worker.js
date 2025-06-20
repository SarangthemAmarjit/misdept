'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ccac0a2f6caa75ae5b5615e613ecb80e",
"assets/AssetManifest.bin.json": "5382a8b3f5b4cc896e6105e6ef1e51ed",
"assets/AssetManifest.json": "63b935325744861fe31dd56b0b3ab4b0",
"assets/assets/fonts/KulimPark-Regular.ttf": "3efa2c26f11ff766630b89394c98d62c",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/icons/analytics.png": "fde74a1f57f4382449cd28d32ead21ff",
"assets/assets/icons/data.png": "4741211c3d38baab9724a8e882382b46",
"assets/assets/icons/payroll.png": "ed7202e20b82c889f9bfbf6861765fea",
"assets/assets/icons/processautomation.png": "abaa3b17e9b65ac929fa65e9d72ebaf8",
"assets/assets/icons/security.png": "d000f6b53b457c9b9249ac1657181374",
"assets/assets/icons/training.png": "bbbac7dc37ebd05a293010e416748e1a",
"assets/assets/icons/usersupports.png": "c1d1c88a9be3a8ca82d783dfc70df61c",
"assets/assets/images/admin.png": "08225dd6d7847db398bad1f9bbd75728",
"assets/assets/images/ageing-well.jpeg": "06b0d7b874a722ec3ef1fa165a20d87d",
"assets/assets/images/appbarbg.jpg": "cf473edf288c917aa52f5b11d99c5b53",
"assets/assets/images/appbarbg2.jpg": "8c6e84c3636e8e36ce97a41720043e0a",
"assets/assets/images/appbarbg3.jpg": "0d58feb4bb06df93fc9cdc3901b5d115",
"assets/assets/images/appbarbg4.jpg": "e20589f87e24431f8058460e8a52d4a6",
"assets/assets/images/arrorok.gif": "eb406d6f9030f4a030216919dae60a27",
"assets/assets/images/arrow.png": "616f15d7ef8a3496e66cc3f2cc292a21",
"assets/assets/images/award1.jpg": "7bdf786d1360a410b44ad284ca496e25",
"assets/assets/images/award2.jpg": "fab5cd300660ab964647d47e141e9f64",
"assets/assets/images/award3.jpg": "2164d4f1cb2b7fec69be5138a6ee8342",
"assets/assets/images/award4.jpg": "3f5d045d6a41341ebc557390c15a393f",
"assets/assets/images/banner1.jpg": "a864545502b36e70a45ca1c68ca58eb8",
"assets/assets/images/banner1ok.jpg": "1491536f43c13671ff82d924bc5eb104",
"assets/assets/images/banner2.jpg": "cfa1e6a0846d60e15a066018a7c5b51a",
"assets/assets/images/banner2ok.jpg": "c6bb469507bc05bc5f382414dc1f191b",
"assets/assets/images/banner3.jpg": "a22c9fcef0e65415b368248e939b2309",
"assets/assets/images/banner3ok.jpg": "d0290ab0c1bb04dc2c835454b3c80dbf",
"assets/assets/images/banner4.jpg": "928ae9ad444c2c6abcf6d306d98b42ad",
"assets/assets/images/banner4ok.jpg": "5315df626f75b948be012bc5c378b0f8",
"assets/assets/images/bghome2.png": "5cad362596eb59265a55af65a5323fbf",
"assets/assets/images/digital.png": "a5f3736deeff9f2f549b9a3405726f39",
"assets/assets/images/employeedata.jpg": "ff99f577ffa7b50d79bd8d12f9df703d",
"assets/assets/images/employeedata.png": "d0bf4775b4cc48449040a28ce1d710b6",
"assets/assets/images/health-regulations.jpg": "e1c6dbc04d9a8dde236a43729e35efcd",
"assets/assets/images/Hero_infographic.png": "0284eb30001fad45410cf959ce721f73",
"assets/assets/images/india-gov-logo.png": "5d3aed7e22bd5d50977f9caec2eb65a6",
"assets/assets/images/integration.jpg": "ea151eaa888e8c3b5b635e119f517bc8",
"assets/assets/images/integration.png": "4b892bbd6c3f46ba1955a0297f7fd468",
"assets/assets/images/kangla.png": "89604a640fdde40bbb0b4d815a55f8f1",
"assets/assets/images/kanglasa.png": "c0a2e48d9a92cff17f4d0de95011ff78",
"assets/assets/images/landing.png": "5f12390769fcee601d2290644e0bebdb",
"assets/assets/images/loading.json": "d5fd3e38b8e596dc09aefec519c0a975",
"assets/assets/images/logo.png": "e2611cd7a04c0e4707980c48e6b66360",
"assets/assets/images/logo2.png": "e58dc19a58d65880eab105568cbf41df",
"assets/assets/images/logo3.png": "635bad2bd896d11943fd2052f7c2d22b",
"assets/assets/images/managing-expenses.jpg": "367dd2fb6978c88229b40ec863b1edf5",
"assets/assets/images/MIS-Logo.png": "872b3756fc741b55758290bdc3f36ad1",
"assets/assets/images/MyGov-logo.png": "82d0490cd709db119feabf312facd607",
"assets/assets/images/new.gif": "db3593499fc8996200f77aa108975dcb",
"assets/assets/images/nps.jpg": "fbbf1cbd599b99eba8aefda9281bd261",
"assets/assets/images/officiating.jpg": "05d081cf1a23281ebb4b1c766c4c55b6",
"assets/assets/images/officiating.png": "0fb30434f0174207729f2ce1f78c2faa",
"assets/assets/images/OGPL_Logo.png": "abc0d3134007f94bd1c7e44f8f5228d1",
"assets/assets/images/payroll.jpg": "0724484a2b65b4fa9a9471a35df6c012",
"assets/assets/images/sanction.jpg": "430e46271dc52241df421ece3101329c",
"assets/assets/images/sanctionpost.jpg": "87d9f32aa99f142eeebe60611ae72804",
"assets/assets/images/security.png": "49ad5e8db59caec69f0caff7d3ac5d8e",
"assets/assets/images/seeking-healthcare.jpg": "95227fe4f39dadd8ec64ccac1b59cfc5",
"assets/assets/images/staying-healthy.jpg": "69b9842afd2b2e2d1835fe05afdc5e92",
"assets/FontManifest.json": "5cf663d8bb8f8e0e69ebaba0e16fed64",
"assets/fonts/MaterialIcons-Regular.otf": "2ab1ae92c2d567b996ea8631097a4ae9",
"assets/NOTICES": "80c6d8b11b1b77eee3f4cfdc4206c71d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2d404c99eac5bbbb9292d1966cb4afa0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "756ff33936fd5983d7b3ec076f91458a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "d9c49a587b48b3ac758cb4539b1ccb40",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e4365e6daef6d65f833f5ad72a2d5b3e",
"/": "e4365e6daef6d65f833f5ad72a2d5b3e",
"main.dart.js": "d4df3d4e2053304c0012c637990cbb4a",
"manifest.json": "4711af2278705729896304c56217fcc6",
"sw.js": "b186d2cc82d610f00ca55ba24313d19c",
"version.json": "6060228bd16268a7d2dc67037711aade"};
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
