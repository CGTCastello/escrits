// Service worker d’«Escrits»: perquè la web funcione sense connexió.
// Estratègia: respon amb el que hi ha guardat i, alhora, ho actualitza per a la pròxima vegada.
// Si canvies la llista de fitxers, puja el número de VERSIO.
const VERSIO = 'escrits-v1';
const FITXERS = [
  './',
  'index.html',
  'models.js',
  'manifest.webmanifest',
  'vendor/jspdf.umd.min.js',
  'fonts/fonts.css',
  'fonts/anton-latin-400-normal.woff2',
  'fonts/open-sans-latin-400-normal.woff2',
  'fonts/open-sans-latin-700-normal.woff2',
  'fonts/open-sans-latin-800-normal.woff2',
  'fonts/pdf/Anton-Regular.ttf',
  'fonts/pdf/OpenSans-Regular.ttf',
  'fonts/pdf/OpenSans-Bold.ttf',
  'fonts/pdf/OpenSans-ExtraBold.ttf',
  'icons/favicon.svg',
  'icons/favicon-32.png',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIO).then(c => c.addAll(FITXERS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSIO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSIO).then(async cache => {
    const clau = req.mode === 'navigate' ? './' : req;
    const guardat = await cache.match(clau, { ignoreSearch: true });
    const xarxa = fetch(req).then(r => {
      if (r && r.ok) cache.put(clau, r.clone());
      return r;
    }).catch(() => null);
    if (guardat) { e.waitUntil(xarxa); return guardat; }
    return (await xarxa) || new Response('Sense connexió', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }));
});
