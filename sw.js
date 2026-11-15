// Service worker d’«Escrits»: perquè la web funcione sense connexió.
// Estratègia:
//  · la pàgina, models.js i el manifest van primer a la xarxa (així sempre es veu l'última versió)
//    i només si no hi ha connexió (o tarda més de 4 s) es tira del que hi ha guardat;
//  · fonts, icones i jsPDF, que quasi no canvien, ixen del que hi ha guardat i s'actualitzen de fons.
// Si canvies la llista de fitxers, puja el número de VERSIO.
const VERSIO = 'escrits-v2';
const ESTATICS = /\/(fonts|icons|vendor)\//;
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
  const clau = req.mode === 'navigate' ? './' : req;
  e.respondWith(caches.open(VERSIO).then(async cache => {
    const guarda = r => { if (r && r.ok) cache.put(clau, r.clone()); return r; };
    const guardat = () => cache.match(clau, { ignoreSearch: true });
    const sense = () => new Response('Sense connexió', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

    if (ESTATICS.test(new URL(req.url).pathname)) {
      const g = await guardat();
      const xarxa = fetch(req).then(guarda).catch(() => null);
      if (g) { e.waitUntil(xarxa); return g; }
      return (await xarxa) || sense();
    }
    // primer la xarxa; si falla o tarda, el que hi ha guardat
    const xarxa = fetch(req, { cache: 'no-cache' }).then(guarda);
    e.waitUntil(xarxa.catch(() => null));
    const temps = new Promise(r => setTimeout(r, 4000));
    try {
      const r = await Promise.race([xarxa, temps.then(() => { throw new Error('lent'); })]);
      if (r) return r;
    } catch (_) {}
    return (await guardat()) || (await xarxa.catch(() => null)) || sense();
  }));
});
