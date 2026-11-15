# CLAUDE.md — Escrits amb capçalera de CGT Castelló

Web estàtica (GitHub Pages), sense servidor ni compilació. Interfície en valencià; públic: delegades i afiliades, sobretot des del mòbil.

## Regla principal dels models

`models.js` conté **només** models de dues fonts: cgtcastello.org/delegades i els models de permisos familiars de la CIG (traduïts). **No redactes models nous ni afiges base legal pel teu compte.** Si cal un model nou, ha d'eixir d'un document del sindicat o del gabinet jurídic; apunta'n la font en `src`/`ref` i al README.

- Buits: `[EN MAJÚSCULES ENTRE CLAUDÀTORS]`. `[EMPRESA]`, `[NOMBRE Y APELLIDOS]` i `[NOM I COGNOMS]` s'omplin sols.
- Un paràgraf que és només una paraula en majúscules acabada en dos punts (`MANIFIESTO:`, `SOLICITO:`) es pinta en negreta.
- Cada model té `es` i `va`. Si en falta un `va`, ix en castellà. Valencià amb formes de l'AVL (este, seua, tindre, complisca).

## Codi (`index.html`)

Tot el JS és una IIFE al final. Parts: `L` (textos fixos per idioma), `MODELS` (de `models.js`), `layout()` (maqueta en mm i torna ordres de dibuix per pàgina), `paintHeader()` / `paintFooter()`, `renderAll(k)` (pinta en canvas a l'escala `k` px/mm), `buildPdf()` (jsPDF, una imatge JPEG per pàgina, ~210 ppp). Baixades: dins de Claude, `window.claude.use('downloads')`; fora, `<a download>`. Mantín els dos camins. El botó «Comparteix» (Web Share) només ix fora de Claude.

## Sistema de disseny

Font de veritat: «CGT Castelló · Sistema de disseny» (claude.ai/artifact/PZJLDkCv3ANyjQrGEm9PLA, `project/README.md`). Roig #E42127, negre #111111, groc #E9E84C, blanc; Anton per a titulars i Open Sans per a la resta; sense cantonades arredonides ni ombres; logo apaisat (trama en blanc i negre).
