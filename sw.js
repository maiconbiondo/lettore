/* Service worker do Lettore — cache para uso offline.
   Ao mudar arquivos, incremente a versão do cache (CACHE). */
const CACHE = "lettore-v17";

const ASSETS = [
  "./index.html",
  "./marca.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./lib/pdf.min.js",
  "./lib/pdf.worker.min.js",
  "./lib/mammoth.browser.min.js",
  "./fonts/Inter-400.ttf",
  "./fonts/Inter-500.ttf",
  "./fonts/Inter-600.ttf",
  "./fonts/phosphor-regular.woff",
  "./fonts/phosphor-fill.woff",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
];

// Cada arquivo entra no cache por conta própria: um que falte (ex.: marca.html
// fora do pacote publicado) não impede o resto de funcionar offline.
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.all(ASSETS.map((a) => c.add(a).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Responde do cache na hora e atualiza em segundo plano (stale-while-revalidate).
// Sem rede e sem cache: só a navegação cai no index.html; os demais arquivos falham normalmente.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const sameOrigin = new URL(req.url).origin === location.origin;

  const network = fetch(req).then((res) => {
    if (res && res.ok && sameOrigin) {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(req, copy));
    }
    return res;
  });

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) {
        e.waitUntil(network.catch(() => {}));
        return hit;
      }
      return network.catch(() =>
        req.mode === "navigate" ? caches.match("./index.html") : Response.error());
    })
  );
});
