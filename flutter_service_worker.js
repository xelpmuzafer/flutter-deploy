'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "48e510833daa5754ae50a506321ac83c",
"manifest.json": "9f1accf957cf69fb27a5c71f1f1ba60d",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "f2fc66124768fdcca4770598384b576a",
"index.html": "d34fe9179d701dac58260b8db2528ed0",
"/": "d34fe9179d701dac58260b8db2528ed0",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"assets/NOTICES": "d42f32db87f6d40f478c5c760d761421",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/record_windows/assets/fmedia/mod/wavpack.dll": "b2d78fdaa0d7b49c63da387809cb7adf",
"assets/packages/record_windows/assets/fmedia/mod/libmp3lame-ff.dll": "94fc6548daa41605945c02077f4a2bb1",
"assets/packages/record_windows/assets/fmedia/mod/libfdk-aac-ff.dll": "32545a83392e7c50f03899f77b7d3ad9",
"assets/packages/record_windows/assets/fmedia/mod/libFLAC-ff.dll": "729a0fe2b337a863ea1796c94fb60448",
"assets/packages/record_windows/assets/fmedia/mod/vorbis.dll": "7521fd59e33d9b60ad6edde94743ed46",
"assets/packages/record_windows/assets/fmedia/mod/afilter.dll": "96482458dc4d2e85490c8af8eccb4e36",
"assets/packages/record_windows/assets/fmedia/mod/libmpc-ff.dll": "e21c0a35e22be1104c958547b14a4613",
"assets/packages/record_windows/assets/fmedia/mod/libALAC-ff.dll": "247ac15cecfd98b7cb3f60925065b190",
"assets/packages/record_windows/assets/fmedia/mod/core.dll": "316a2def3e18b83a7abd27cf459b8a4b",
"assets/packages/record_windows/assets/fmedia/mod/flac.dll": "563e9d5f3edd4d52981c7be36e0b1abe",
"assets/packages/record_windows/assets/fmedia/mod/direct-sound.dll": "82ffef756bf3452f2bc626347286c384",
"assets/packages/record_windows/assets/fmedia/mod/tui.dll": "83452a2335319af5dca0d21d7d95ddf3",
"assets/packages/record_windows/assets/fmedia/mod/wasapi.dll": "2fe41f516406b74a64c8bce01ff8c66b",
"assets/packages/record_windows/assets/fmedia/mod/aac.dll": "533a3cbd100c91c23861effeb3311cef",
"assets/packages/record_windows/assets/fmedia/mod/libopus-ff.dll": "9c86baf6a0b97b15a0819bf5088cde5d",
"assets/packages/record_windows/assets/fmedia/mod/net.dll": "fdadd9de2028ea47fb1ed578c2d6c151",
"assets/packages/record_windows/assets/fmedia/mod/fmt.dll": "43a24cddd2ddd2230fd9faae0a25a176",
"assets/packages/record_windows/assets/fmedia/mod/libwavpack-ff.dll": "11b980ec2f5cace9af9a79ae06d601b8",
"assets/packages/record_windows/assets/fmedia/mod/dynanorm.dll": "4aa0ca48fdefab0e9f569cc1509498bc",
"assets/packages/record_windows/assets/fmedia/mod/libvorbisenc-ff.dll": "c8d21d47f9eb36a2307aabbf47dafd88",
"assets/packages/record_windows/assets/fmedia/mod/opus.dll": "75e43c640374a983bea5be943fe59d81",
"assets/packages/record_windows/assets/fmedia/mod/libmpg123-ff.dll": "2ba538e38058894e4bd465ab522f9dbe",
"assets/packages/record_windows/assets/fmedia/mod/libMAC-ff.dll": "37d50336ae42fd8e17a95244aa096af1",
"assets/packages/record_windows/assets/fmedia/mod/soxr.dll": "bb65510f4719e36c409be41c76c43703",
"assets/packages/record_windows/assets/fmedia/mod/plist.dll": "30ba22d6ad7e89605b92f16a41cd7abc",
"assets/packages/record_windows/assets/fmedia/mod/libsoxr-ff.dll": "7b684353fd4e0c32d219b064a24056f3",
"assets/packages/record_windows/assets/fmedia/mod/libogg-ff.dll": "6070f38352adf081864211bfde5dc9f9",
"assets/packages/record_windows/assets/fmedia/mod/ape.dll": "707bc4ace999e04d34239c641559d213",
"assets/packages/record_windows/assets/fmedia/mod/mpc.dll": "f3406e69faee9d692f90e469c56e5244",
"assets/packages/record_windows/assets/fmedia/mod/libvorbis-ff.dll": "bca4ba9389bf4ecf17edc5b4054efc03",
"assets/packages/record_windows/assets/fmedia/mod/mpeg.dll": "e9271482004fd5bb17a47573fa3c1086",
"assets/packages/record_windows/assets/fmedia/mod/alac.dll": "0bb2dc9e1b2f9e3dc886be6b6f9f4291",
"assets/packages/record_windows/assets/fmedia/mod/libDynamicAudioNormalizer-ff.dll": "f553893afa563f6fb07f7e0ce6b8a4ee",
"assets/packages/record_windows/assets/fmedia/fmedia.conf": "2778179ad014443ad062631f63aa64d3",
"assets/packages/record_windows/assets/fmedia/fmedia.exe": "c182c407aca9486143cdeca1efda6561",
"assets/packages/record_linux/assets/fmedia/mod/fmt.so": "61fe021c932177b4e3c43c6e62253bbe",
"assets/packages/record_linux/assets/fmedia/mod/wavpack.so": "e60145cac58437bff1a6b992472cf271",
"assets/packages/record_linux/assets/fmedia/mod/ape.so": "11d09b3c1c35eac3c0feaa0cc588b368",
"assets/packages/record_linux/assets/fmedia/mod/libMAC-ff.so": "8872fdb969ee9a7779969ba2abf9ebdd",
"assets/packages/record_linux/assets/fmedia/mod/mpeg.so": "58dd98bd5975964e128f7a75d4e5c76b",
"assets/packages/record_linux/assets/fmedia/mod/vorbis.so": "cd5ac9fbd5b8590ce1bf052e112eca59",
"assets/packages/record_linux/assets/fmedia/mod/libFLAC-ff.so": "30532f348681420e603a8c1485aece85",
"assets/packages/record_linux/assets/fmedia/mod/libmpg123-ff.so": "6c2d2223e50740af92e30df847581133",
"assets/packages/record_linux/assets/fmedia/mod/libvorbis-ff.so": "91cbe3de430e657f74a2b18726163385",
"assets/packages/record_linux/assets/fmedia/mod/libopus-ff.so": "dc7a20a689eb3b1dcd9c8865b477ea73",
"assets/packages/record_linux/assets/fmedia/mod/core.so": "dd4055c861690f5a3dcd590fbefba28b",
"assets/packages/record_linux/assets/fmedia/mod/opus.so": "cc261b08d406e74192874b811f0ecf62",
"assets/packages/record_linux/assets/fmedia/mod/libDynamicAudioNormalizer-ff.so": "a0b26d4bc88186111289556d4984d7e0",
"assets/packages/record_linux/assets/fmedia/mod/soxr.so": "b431de76ab7e125cc21383cdcf99534f",
"assets/packages/record_linux/assets/fmedia/mod/libsoxr-ff.so": "cb1355076864f1546e92caed50cb58a8",
"assets/packages/record_linux/assets/fmedia/mod/net.so": "b32678f345476588d60b17875b3931e1",
"assets/packages/record_linux/assets/fmedia/mod/libogg-ff.so": "0d85cef3362573befc65e9b274243dab",
"assets/packages/record_linux/assets/fmedia/mod/tui.so": "9270033b42e3215675ea88f246c2c09e",
"assets/packages/record_linux/assets/fmedia/mod/libwavpack-ff.so": "7359614c1db34dd9965e323c3f5983b3",
"assets/packages/record_linux/assets/fmedia/mod/libALAC-ff.so": "417a285bba20fd9f370fe941e658bcc4",
"assets/packages/record_linux/assets/fmedia/mod/afilter.so": "7cac32f3f9160d06cef81f0c69a17d70",
"assets/packages/record_linux/assets/fmedia/mod/libfdk-aac-ff.so": "750400da6841f9129f31e7d9c21292f6",
"assets/packages/record_linux/assets/fmedia/mod/alac.so": "27ab9a17f5bb5b337717a7661331ae64",
"assets/packages/record_linux/assets/fmedia/mod/plist.so": "d2eebb9c0faa6b76832ac8557357b41b",
"assets/packages/record_linux/assets/fmedia/mod/libmp3lame-ff.so": "409b013e8c0f432d7042148efa37608c",
"assets/packages/record_linux/assets/fmedia/mod/flac.so": "3e51dec16e3b9dddb9319aba7940017c",
"assets/packages/record_linux/assets/fmedia/mod/aac.so": "9ecdfa7c9c62aa552c85e46e7ee56a39",
"assets/packages/record_linux/assets/fmedia/mod/dynanorm.so": "2cfd106a612b9ce353a0676bc2c4e908",
"assets/packages/record_linux/assets/fmedia/mod/libmpc-ff.so": "74a443e10982a9df03e8b0f2b2513752",
"assets/packages/record_linux/assets/fmedia/mod/mpc.so": "5c6c2b6adcabed253959bf2b48b59434",
"assets/packages/record_linux/assets/fmedia/mod/libvorbisenc-ff.so": "65e35f53637bacaba7e689e2fe6ec73a",
"assets/packages/record_linux/assets/fmedia/fmedia.conf": "705fa5e517bd80d8e232966f4480a204",
"assets/packages/record_linux/assets/fmedia/fmedia": "86687ca1d2fd56b5b37b38840dd6fb31",
"assets/assets/bird.png": "6aa4c7140f64c958512b1bdacc008dba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "f63ced80af27fe2520f7192c1608aa6f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
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
